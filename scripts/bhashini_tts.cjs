const fs = require('fs');
const path = require('path');

const ANUVAAD_PIPELINE_URL = 'https://anuvaad-backend.bhashini.co.in/v1/pipeline';
// Option B: Primary is IITM-v1 ('Bhashini/IITM/TTS'); Fallback is AI4Bharat-v1.0
const PRIMARY_SERVICE_ID = 'Bhashini/IITM/TTS';
const FALLBACK_SERVICE_ID = 'ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4';

/**
 * Universal WAV to MP3 encoder that correctly handles:
 * - 16-bit Integer PCM (audioFormat = 1)
 * - 32-bit IEEE Float PCM (audioFormat = 3)
 * - Any sample rate (16kHz, 22.05kHz, 44.1kHz, 48kHz, etc.)
 * - Mono or Stereo
 */
async function wavBufferToMp3(wavBuffer, targetKbps = 64) {
  const { Mp3Encoder } = await import('@breezystack/lamejs');

  // Verify RIFF header
  if (wavBuffer.toString('ascii', 0, 4) !== 'RIFF' || wavBuffer.toString('ascii', 8, 12) !== 'WAVE') {
    throw new Error('Invalid WAV file format: Missing RIFF/WAVE header');
  }

  let offset = 12;
  let audioFormat = 1;
  let numChannels = 1;
  let sampleRate = 22050;
  let bitsPerSample = 16;
  let dataOffset = -1;
  let dataLen = 0;

  while (offset < wavBuffer.length - 8) {
    const chunkId = wavBuffer.subarray(offset, offset + 4).toString('ascii');
    const chunkSize = wavBuffer.readUInt32LE(offset + 4);
    const chunkDataOffset = offset + 8;

    if (chunkId === 'fmt ') {
      audioFormat = wavBuffer.readUInt16LE(chunkDataOffset);
      numChannels = wavBuffer.readUInt16LE(chunkDataOffset + 2);
      sampleRate = wavBuffer.readUInt32LE(chunkDataOffset + 4);
      bitsPerSample = wavBuffer.readUInt16LE(chunkDataOffset + 14);
    } else if (chunkId === 'data') {
      dataOffset = chunkDataOffset;
      dataLen = chunkSize;
      break;
    }
    offset = chunkDataOffset + chunkSize;
  }

  if (dataOffset === -1) {
    throw new Error('Could not find "data" chunk in WAV file');
  }

  const rawData = wavBuffer.subarray(dataOffset, dataOffset + dataLen);
  let samples;

  if (audioFormat === 3 || bitsPerSample === 32) {
    // 32-bit IEEE Float -> Int16
    const alignedBuffer = new ArrayBuffer(dataLen);
    new Uint8Array(alignedBuffer).set(rawData);
    const floatSamples = new Float32Array(alignedBuffer);
    samples = new Int16Array(floatSamples.length);
    for (let i = 0; i < floatSamples.length; i++) {
      const s = Math.max(-1, Math.min(1, floatSamples[i]));
      samples[i] = s < 0 ? Math.round(s * 32768) : Math.round(s * 32767);
    }
  } else if (audioFormat === 1 && bitsPerSample === 16) {
    // 16-bit Signed Integer PCM
    const alignedBuffer = new ArrayBuffer(dataLen);
    new Uint8Array(alignedBuffer).set(rawData);
    samples = new Int16Array(alignedBuffer);
  } else {
    throw new Error(`Unsupported WAV format: audioFormat=${audioFormat}, bitsPerSample=${bitsPerSample}`);
  }

  // Handle bitrates appropriate for sample rate
  // For 22050Hz (MPEG-2 Layer 3), 64kbps is supported.
  const mp3encoder = new Mp3Encoder(numChannels, sampleRate, targetKbps);
  const mp3Data = [];

  let mp3buf;
  if (numChannels === 1) {
    mp3buf = mp3encoder.encodeBuffer(samples);
  } else {
    const left = new Int16Array(samples.length / 2);
    const right = new Int16Array(samples.length / 2);
    for (let i = 0; i < samples.length / 2; i++) {
      left[i] = samples[i * 2];
      right[i] = samples[i * 2 + 1];
    }
    mp3buf = mp3encoder.encodeBuffer(left, right);
  }

  if (mp3buf.length > 0) mp3Data.push(Buffer.from(mp3buf));

  const endBuf = mp3encoder.flush();
  if (endBuf.length > 0) mp3Data.push(Buffer.from(endBuf));

  return Buffer.concat(mp3Data);
}

/**
 * Synthesizes Odia text into crystal-clear compressed MP3 audio via Bhashini Anuvaad engine.
 * @param {string} text - Odia script text
 * @param {string} outputMp3Path - Destination file path
 * @param {object} options - { gender: 'female' | 'male', kbps: 64, retries: 2 }
 */
async function callBhashini(text, serviceId, gender) {
  const payload = {
    pipelineTasks: [
      {
        taskType: 'tts',
        config: {
          language: { sourceLanguage: 'or' },
          serviceId: serviceId,
          gender: gender,
          samplingRate: 16000
        }
      }
    ],
    inputData: { input: [{ source: text }] }
  };

  const res = await fetch(ANUVAAD_PIPELINE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://anuvaad.bhashini.gov.in/'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`HTTP ${res.status}: ${errText.slice(0, 200)}`);
  }

  const data = await res.json();
  const audioContent = data.pipelineResponse?.[0]?.audio?.[0]?.audioContent;
  if (!audioContent) {
    throw new Error('No audio content returned in response');
  }

  return Buffer.from(audioContent, 'base64');
}

/**
 * Synthesizes Odia text into crystal-clear compressed MP3 audio via Bhashini Anuvaad engine.
 * Option B: Attempts IITM-v1 first; automatically falls back to AI4Bharat-v1.0 if IITM returns an error.
 * @param {string} text - Odia script text
 * @param {string} outputMp3Path - Destination file path
 * @param {object} options - { gender: 'female' | 'male', kbps: 64 }
 */
async function synthesizeOdiaTTS(text, outputMp3Path, options = {}) {
  const gender = options.gender || 'female';
  const kbps = options.kbps || 64;

  let wavBuffer;
  let modelUsed = PRIMARY_SERVICE_ID;

  // 1. Primary Attempt: IITM-v1
  try {
    process.stdout.write(`🎙️ Requesting IITM-v1 (${gender})... `);
    wavBuffer = await callBhashini(text, PRIMARY_SERVICE_ID, gender);
    console.log(`✨ Success (IITM-v1)`);
  } catch (iitmErr) {
    console.warn(`\n⚠️ IITM-v1 failed (${iitmErr.message}). Option B: Falling back to AI4Bharat-v1.0...`);
    // 2. Fallback Attempt: AI4Bharat-v1.0
    try {
      wavBuffer = await callBhashini(text, FALLBACK_SERVICE_ID, gender);
      modelUsed = FALLBACK_SERVICE_ID;
      console.log(`✅ Success with Fallback (AI4Bharat-v1.0)`);
    } catch (fallbackErr) {
      throw new Error(`Both IITM-v1 and AI4Bharat-v1.0 failed! [IITM: ${iitmErr.message}] [AI4Bharat: ${fallbackErr.message}]`);
    }
  }

  const mp3Buffer = await wavBufferToMp3(wavBuffer, kbps);

  const dir = path.dirname(outputMp3Path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputMp3Path, mp3Buffer);

  const wavSize = wavBuffer.length;
  const mp3Size = mp3Buffer.length;
  const saving = ((1 - mp3Size / wavSize) * 100).toFixed(1);
  const tag = modelUsed === PRIMARY_SERVICE_ID ? 'IITM-v1' : 'AI4Bharat';
  console.log(`✅ Saved: ${path.basename(outputMp3Path)} (${(mp3Size / 1024).toFixed(1)} KB, -${saving}%) [${tag}]`);

  return {
    mp3Path: outputMp3Path,
    wavSize,
    mp3Size,
    model: tag
  };
}

module.exports = {
  synthesizeOdiaTTS,
  wavBufferToMp3
};
