const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const songSlug = 'amar_nitai';
const verseIds = [1, 2, 3, 4];

async function uploadAll() {
  console.log(`Uploading TTS audio files for "${songSlug}" to Supabase Storage "song-tts"...`);
  const uploadedUrls = {};

  for (const vId of verseIds) {
    const localPath = path.join(__dirname, `../public/audio/tts/${songSlug}_v${vId}.mp3`);
    if (!fs.existsSync(localPath)) {
      console.warn(`File not found: ${localPath}`);
      continue;
    }

    const fileBuf = fs.readFileSync(localPath);
    const storagePath = `${songSlug}/v${vId}.mp3`;

    const { data, error } = await supabase.storage
      .from('song-tts')
      .upload(storagePath, fileBuf, {
        contentType: 'audio/mpeg',
        upsert: true
      });

    if (error) {
      console.error(`❌ Failed to upload verse ${vId}:`, error);
      continue;
    }

    const { data: pubData } = supabase.storage
      .from('song-tts')
      .getPublicUrl(storagePath);

    uploadedUrls[vId] = pubData.publicUrl;
    console.log(`✅ Verse ${vId} uploaded -> ${pubData.publicUrl}`);
  }

  console.log('\nAll uploaded URLs:');
  console.log(JSON.stringify(uploadedUrls, null, 2));
}

uploadAll().catch(console.error);
