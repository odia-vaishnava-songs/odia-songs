const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const { synthesizeOdiaTTS } = require('./bhashini_tts.cjs');
const { syncCloudToCode } = require('./sync_cloud_to_code.cjs');
const { uploadAudioToHF } = require('./hf_storage.cjs');
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;

const adminSupabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const storageClient = createClient(SUPABASE_URL, SUPABASE_KEY);

function getSongSlug(songId) {
  if (songId === 'song-amarnitaimilena') return 'amar_nitai';
  if (songId === 'song-dhanamornityananda') return 'dhanamornityananda';
  let clean = songId.replace(/^song-/, '').toLowerCase();
  clean = clean.replace(/[^a-zA-Z0-9_]/g, '_');
  return clean || 'song';
}

async function processSingleSong(song, gender, force = false) {
  const songSlug = getSongSlug(song.id);
  const tempDir = path.join(__dirname, '../scratch/tts_temp', songSlug);
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  const structuredContent = song.structured_content || song.structuredContent;
  if (!structuredContent || !structuredContent.verses || structuredContent.verses.length === 0) {
    return { updated: 0, verses: [] };
  }

  const verses = structuredContent.verses;
  const isMale = gender === 'male';
  let updatedCount = 0;
  const updatedVerses = [];

  for (let i = 0; i < verses.length; i++) {
    const verse = verses[i];
    const verseId = verse.id !== undefined ? verse.id : (i + 1);
    const translation = verse.translation ? verse.translation.trim() : '';

    if (!translation) {
      updatedVerses.push(verse);
      continue;
    }

    const storagePath = isMale ? `${songSlug}/v${verseId}_male.mp3` : `${songSlug}/v${verseId}.mp3`;
    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/song-tts/${storagePath}`;
    const existingUrl = isMale ? verse.translationAudioMaleUrl : verse.translationAudioUrl;

    if (!force && existingUrl) {
      updatedVerses.push(verse);
      continue;
    }

    const tempMp3Path = path.join(tempDir, isMale ? `v${verseId}_male.mp3` : `v${verseId}.mp3`);

    try {
      // 1. Synthesize via IITM-v1 (Option B with AI4Bharat fallback)
      await synthesizeOdiaTTS(translation, tempMp3Path, { gender, kbps: 64 });

      // 2. Upload to Storage (Hugging Face CDN preferred, fallback to Supabase)
      let publicUrl;
      if (process.env.HF_TOKEN) {
        publicUrl = await uploadAudioToHF(storagePath, tempMp3Path);
      } else {
        const fileBuffer = fs.readFileSync(tempMp3Path);
        const { error: uploadErr } = await storageClient.storage
          .from('song-tts')
          .upload(storagePath, fileBuffer, {
            contentType: 'audio/mpeg',
            upsert: true
          });

        if (uploadErr) {
          throw new Error(`Upload error: ${uploadErr.message}`);
        }
        publicUrl = `${SUPABASE_URL}/storage/v1/object/public/song-tts/${storagePath}`;
      }

      // Cleanup local temp file to keep disk 100% clean
      if (fs.existsSync(tempMp3Path)) {
        fs.unlinkSync(tempMp3Path);
      }

      updatedVerses.push({
        ...verse,
        ...(isMale ? { translationAudioMaleUrl: publicUrl } : { translationAudioUrl: publicUrl })
      });
      updatedCount++;

      // Polite rate-limit delay
      await new Promise(r => setTimeout(r, 600));
    } catch (err) {
      console.error(`  ❌ Verse ${verseId} error:`, err.message);
      updatedVerses.push(verse);
    }
  }

  return { updated: updatedCount, verses: updatedVerses };
}

async function runBatch(prefix = 'A', options = {}) {
  const force = options.force || false;

  console.log(`========================================================`);
  console.log(`🚀 Starting Bulk TTS Generator for Category: "${prefix.toUpperCase()}"`);
  console.log(`Force Overwrite: ${force}`);
  console.log(`========================================================\n`);

  // 1. Admin login
  console.log('1. Authenticating as Admin...');
  const { data: authData, error: authError } = await adminSupabase.auth.signInWithPassword({
    email: "daitariswain7@gmail.com",
    password: "pass-969200"
  });

  if (authError) {
    throw new Error('Admin authentication failed: ' + authError.message);
  }
  console.log(`✅ Authenticated: ${authData.user.email}`);

  // 2. Fetch all songs matching prefix
  console.log(`2. Fetching songs matching prefix "${prefix}"...`);
  const { data: allSongs, error: fetchErr } = await adminSupabase
    .from('songs')
    .select('*')
    .order('title_english', { ascending: true });

  if (fetchErr) {
    throw new Error('Failed to fetch songs: ' + fetchErr.message);
  }

  const upperPrefix = prefix.toUpperCase();
  const targetSongs = allSongs.filter(s => {
    // Skip Gita chapters
    if (s.id && s.id.startsWith('gita-')) return false;

    // Explicitly skip Govinda Damodara Stotram (71 verses) per user request
    if (s.id === 'song-agrekurunama' || (s.title_english && s.title_english.toLowerCase().includes('govinda damodara'))) {
      return false;
    }

    const eng = (s.title_english || s.title || '').trim().toUpperCase();
    const odia = (s.title_odia || '').trim();
    if (upperPrefix === 'A') {
      return eng.startsWith('A') || odia.startsWith('ଅ') || odia.startsWith('ଆ');
    }
    if (upperPrefix === 'B') {
      return eng.startsWith('B') || odia.startsWith('ବ') || odia.startsWith('ଭ');
    }
    if (upperPrefix === 'C') {
      return eng.startsWith('C') || odia.startsWith('ଚ') || odia.startsWith('ଛ');
    }
    return eng.startsWith(upperPrefix);
  });

  console.log(`📋 Found ${targetSongs.length} songs starting with "${upperPrefix}".\n`);

  let totalSongsUpdated = 0;

  for (let sIdx = 0; sIdx < targetSongs.length; sIdx++) {
    const song = targetSongs[sIdx];
    const verses = song.structured_content?.verses || song.structuredContent?.verses || [];
    const validVerses = verses.filter(v => v.translation && v.translation.trim().length > 0);

    console.log(`--------------------------------------------------------`);
    console.log(`🎵 [${sIdx + 1}/${targetSongs.length}] ${song.title_english || song.title} (${validVerses.length} verses)`);

    if (validVerses.length === 0) {
      console.log(`⏩ No translated verses found, skipping.`);
      continue;
    }

    // Process Female Voice
    console.log(`  👩 Processing Female voice...`);
    const femaleRes = await processSingleSong(song, 'female', force);

    // Update song with female results before running male
    let currentSong = {
      ...song,
      structured_content: {
        ...(song.structured_content || {}),
        verses: femaleRes.verses
      }
    };

    // Process Male Voice
    console.log(`  👨 Processing Male voice...`);
    const maleRes = await processSingleSong(currentSong, 'male', force);

    const totalUpdated = femaleRes.updated + maleRes.updated;
    if (totalUpdated > 0) {
      console.log(`  💾 Saving updated audio URLs to Supabase for "${song.id}"...`);
      const updatedStructuredContent = {
        ...(song.structured_content || song.structuredContent || {}),
        verses: maleRes.verses
      };

      const { error: saveErr } = await adminSupabase
        .from('songs')
        .update({
          structured_content: updatedStructuredContent,
          updated_at: new Date().toISOString()
        })
        .eq('id', song.id);

      if (saveErr) {
        console.error(`  ❌ Failed to update DB for ${song.id}:`, saveErr.message);
      } else {
        console.log(`  ✅ Successfully updated "${song.id}" with ${totalUpdated} new audio tracks!`);
        totalSongsUpdated++;
      }
    } else {
      console.log(`  ✨ All verses already have both Female and Male audio.`);
    }
  }

  console.log(`\n========================================================`);
  console.log(`🎉 Batch Processing Complete: ${totalSongsUpdated} songs updated in database!`);
  console.log(`========================================================\n`);

  // 3. Cloud-to-Code Sync
  console.log('3. Synchronizing database with codebase (songsContent.ts)...');
  await syncCloudToCode();
  console.log('✅ Batch update finished successfully!');
}

// CLI handler
const args = process.argv.slice(2);
const prefix = args[0] || 'A';
const force = args.includes('--force');

runBatch(prefix, { force }).catch(err => {
  console.error('Fatal error in batch runner:', err);
  process.exit(1);
});
