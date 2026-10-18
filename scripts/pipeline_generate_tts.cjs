const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const { synthesizeOdiaTTS } = require('./bhashini_tts.cjs');
const { syncCloudToCode } = require('./sync_cloud_to_code.cjs');
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;

const adminSupabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const storageClient = createClient(SUPABASE_URL, SUPABASE_KEY); // Clean anon client matching storage RLS

function getSongSlug(songId) {
  if (songId === 'song-amarnitaimilena') return 'amar_nitai';
  let clean = songId.replace(/^song-/, '').toLowerCase();
  clean = clean.replace(/[^a-zA-Z0-9_]/g, '_');
  return clean || 'song';
}

async function runPipelineForSong(targetSongId, options = {}) {
  const gender = options.gender || 'female';
  const force = options.force || false;

  console.log(`\n======================================================`);
  console.log(`🎵 Starting Odia TTS Pipeline for Song: ${targetSongId}`);
  console.log(`Voice Gender: ${gender} | Force Overwrite: ${force}`);
  console.log(`======================================================`);

  // 1. Admin Auth
  console.log('1. Authenticating as Admin...');
  const { data: authData, error: authError } = await adminSupabase.auth.signInWithPassword({
    email: "daitariswain7@gmail.com",
    password: "pass-969200"
  });

  if (authError) {
    throw new Error(`Admin authentication failed: ${authError.message}`);
  }
  console.log(`✅ Logged in as: ${authData.user.email}`);

  // 2. Fetch Song
  console.log(`2. Fetching song details from Supabase for "${targetSongId}"...`);
  const { data: song, error: fetchErr } = await adminSupabase
    .from('songs')
    .select('*')
    .eq('id', targetSongId)
    .single();

  if (fetchErr || !song) {
    throw new Error(`Song "${targetSongId}" not found in Supabase: ${fetchErr?.message}`);
  }

  const structuredContent = song.structured_content || song.structuredContent;
  if (!structuredContent || !structuredContent.verses || structuredContent.verses.length === 0) {
    throw new Error(`Song "${targetSongId}" has no structured verses!`);
  }

  const verses = structuredContent.verses;
  console.log(`Found ${verses.length} verses in song "${song.title || song.id}".`);

  const songSlug = getSongSlug(song.id);
  const tempDir = path.join(__dirname, '../scratch/tts_temp', songSlug);
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  let updatedCount = 0;
  const updatedVerses = [];

  // 3. Process Verses
  for (let i = 0; i < verses.length; i++) {
    const verse = verses[i];
    const verseId = verse.id !== undefined ? verse.id : (i + 1);
    const translation = verse.translation ? verse.translation.trim() : '';

    if (!translation) {
      console.log(`⏩ Verse ${verseId}: No Odia translation text found, skipping.`);
      updatedVerses.push(verse);
      continue;
    }

    const isMale = gender === 'male';
    const storagePath = isMale ? `${songSlug}/v${verseId}_male.mp3` : `${songSlug}/v${verseId}.mp3`;
    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/song-tts/${storagePath}`;

    const existingUrl = isMale ? verse.translationAudioMaleUrl : verse.translationAudioUrl;
    if (!force && existingUrl) {
      console.log(`✅ Verse ${verseId}: Already has ${gender} audio URL -> ${existingUrl}`);
      updatedVerses.push(verse);
      continue;
    }

    console.log(`\n🎙️ Processing Verse ${verseId} [${gender} voice] (${translation.length} chars)...`);
    const tempMp3Path = path.join(tempDir, isMale ? `v${verseId}_male.mp3` : `v${verseId}.mp3`);

    try {
      // Step A: Synthesize & Float32-to-Int16 PCM encode
      await synthesizeOdiaTTS(translation, tempMp3Path, { gender, kbps: 64 });

      // Step B: Upload to Supabase Storage bucket 'song-tts' via unauthenticated client (matches anon RLS)
      console.log(`☁️ Uploading to Supabase Storage: song-tts/${storagePath}...`);
      const fileBuffer = fs.readFileSync(tempMp3Path);

      const { data: uploadData, error: uploadErr } = await storageClient.storage
        .from('song-tts')
        .upload(storagePath, fileBuffer, {
          contentType: 'audio/mpeg',
          upsert: true
        });

      if (uploadErr) {
        throw new Error(`Storage upload error: ${uploadErr.message}`);
      }

      console.log(`✅ Uploaded to CDN: ${publicUrl}`);

      updatedVerses.push({
        ...verse,
        ...(isMale ? { translationAudioMaleUrl: publicUrl } : { translationAudioUrl: publicUrl })
      });
      updatedCount++;

      // Polite throttle
      await new Promise(r => setTimeout(r, 1000));
    } catch (err) {
      console.error(`❌ Error on Verse ${verseId}:`, err.message);
      updatedVerses.push(verse); // keep existing
    }
  }

  // 4. Update Supabase Song Record
  if (updatedCount > 0) {
    console.log(`\n3. Updating song record in Supabase with ${updatedCount} new audio tracks...`);
    const newStructuredContent = {
      ...structuredContent,
      verses: updatedVerses
    };

    const { error: dbErr } = await adminSupabase
      .from('songs')
      .update({
        structured_content: newStructuredContent,
        updated_at: new Date().toISOString()
      })
      .eq('id', targetSongId);

    if (dbErr) {
      throw new Error(`Failed to update song in Supabase: ${dbErr.message}`);
    }
    console.log(`✅ Supabase songs table successfully updated!`);

    // 5. Sync Cloud to Code
    console.log(`\n4. Running Cloud-to-Code sync...`);
    await syncCloudToCode();
    console.log(`✅ Codebase synchronized!`);
  } else {
    console.log(`\n✨ No verses required audio synthesis (all up to date).`);
  }

  console.log(`\n🎉 Pipeline completed for "${targetSongId}"!`);
}

// Allow direct CLI execution: node pipeline_generate_tts.cjs <song-id> [--male] [--force]
if (require.main === module) {
  const args = process.argv.slice(2);
  const songId = args[0] || 'song-amarnitaimilena';
  const gender = args.includes('--male') ? 'male' : 'female';
  const force = args.includes('--force');

  runPipelineForSong(songId, { gender, force })
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('\n💥 Pipeline failed:', err.message);
      process.exit(1);
    });
}

module.exports = {
  runPipelineForSong
};
