const fs = require('fs');
require('dotenv').config();
require('dotenv').config({ path: '.env.local' });

const HF_TOKEN = process.env.HF_TOKEN;
const HF_DATASET = process.env.HF_DATASET || 'OdiaVaishnavaSongs/odia-songs-tts';

let hubPromise = null;
function getHub() {
  if (!hubPromise) {
    hubPromise = import('@huggingface/hub');
  }
  return hubPromise;
}

/**
 * Uploads an MP3 audio file to Hugging Face Dataset CDN.
 * @param {string} remotePath e.g. "amar_nitai/v1.mp3"
 * @param {Buffer|string} fileInput Buffer or local file path
 * @param {string} [contentType='audio/mpeg']
 * @returns {Promise<string>} The public streaming CDN URL
 */
async function uploadAudioToHF(remotePath, fileInput, contentType = 'audio/mpeg') {
  if (!HF_TOKEN) {
    throw new Error('HF_TOKEN is missing in environment variables (.env).');
  }

  const hub = await getHub();
  let buffer;
  if (typeof fileInput === 'string') {
    buffer = fs.readFileSync(fileInput);
  } else {
    buffer = fileInput;
  }

  const blob = new Blob([buffer], { type: contentType });

  await hub.uploadFiles({
    repo: { type: 'dataset', name: HF_DATASET },
    accessToken: HF_TOKEN,
    files: [
      {
        path: remotePath,
        content: blob
      }
    ]
  });

  const publicUrl = `https://huggingface.co/datasets/${HF_DATASET}/resolve/main/${remotePath}`;
  return publicUrl;
}

module.exports = {
  uploadAudioToHF,
  HF_DATASET
};
