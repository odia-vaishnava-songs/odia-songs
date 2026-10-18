const fs = require('fs');
const path = require('path');

async function wavToMp3(wavPath, mp3Path, targetKbps = 64) {
  const { Mp3Encoder, WavHeader } = await import('@breezystack/lamejs');
  const wavBuffer = fs.readFileSync(wavPath);
  
  // Use WavHeader to read cleanly
  const wav = WavHeader.readHeader(new DataView(wavBuffer.buffer, wavBuffer.byteOffset, wavBuffer.byteLength));
  console.log(`WAV specs: ${wav.sampleRate}Hz, ${wav.channels} channel(s), ${wav.dataLen} bytes`);
  
  const sampleData = wavBuffer.subarray(wav.dataOffset, wav.dataOffset + wav.dataLen);
  const samples = new Int16Array(sampleData.buffer, sampleData.byteOffset, sampleData.byteLength / 2);
  
  const mp3encoder = new Mp3Encoder(wav.channels, wav.sampleRate, targetKbps);
  const mp3Data = [];
  
  let mp3buf;
  if (wav.channels === 1) {
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
  
  const outBuffer = Buffer.concat(mp3Data);
  fs.writeFileSync(mp3Path, outBuffer);
  
  const origSize = fs.statSync(wavPath).size;
  const newSize = outBuffer.length;
  const savings = ((1 - newSize / origSize) * 100).toFixed(1);
  
  console.log(`🎉 SUCCESS: Compressed ${(origSize / 1024).toFixed(1)} KB ➔ ${(newSize / 1024).toFixed(1)} KB (${savings}% saved!)`);
  return mp3Path;
}

const inputWav = path.join(__dirname, '../public/audio/tts/amar_nitai_v1.wav');
const outputMp3 = path.join(__dirname, '../public/audio/tts/amar_nitai_v1.mp3');

wavToMp3(inputWav, outputMp3, 64).catch(console.error);
