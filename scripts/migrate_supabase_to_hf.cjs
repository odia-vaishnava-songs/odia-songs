const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const { syncCloudToCode } = require('./sync_cloud_to_code.cjs');
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;
const HF_TOKEN = process.env.HF_TOKEN;
const HF_DATASET = process.env.HF_DATASET || 'OdiaVaishnavaSongs/odia-songs-tts';

const sb = createClient(SUPABASE_URL, SUPABASE_KEY);
const adminSupabase = createClient(SUPABASE_URL, SUPABASE_KEY);

let hubModule = null;
async function getHub() {
  if (!hubModule) {
    hubModule = await import('@huggingface/hub');
  }
  return hubModule;
}

async function runMigration() {
  console.log('====================================================');
  console.log('🚀 MIGRATING ALL TTS AUDIO FROM SUPABASE TO HUGGING FACE');
  console.log(`Target Dataset: ${HF_DATASET}`);
  console.log('====================================================\n');

  // Step 1: Admin Auth for Supabase
  console.log('1. Authenticating as Admin for database updates & deletion...');
  const { data: authData, error: authError } = await adminSupabase.auth.signInWithPassword({
    email: "daitariswain7@gmail.com",
    password: "pass-969200"
  });
  if (authError) {
    throw new Error(`Admin authentication failed: ${authError.message}`);
  }
  console.log('✅ Logged in as:', authData.user.email);

  // Step 2: Discover all files in Supabase Storage 'song-tts'
  console.log('\n2. Scanning Supabase Storage bucket "song-tts"...');
  const { data: rootItems, error: listErr } = await sb.storage.from('song-tts').list('', { limit: 100 });
  if (listErr) throw listErr;

  const folderMap = {};
  let totalFiles = 0;

  for (const item of rootItems) {
    const { data: files, error: fErr } = await sb.storage.from('song-tts').list(item.name, { limit: 200 });
    if (fErr) {
      console.error(`Error listing folder ${item.name}:`, fErr.message);
      continue;
    }
    const mp3s = files.filter(f => f.name.endsWith('.mp3')).map(f => f.name);
    if (mp3s.length > 0) {
      folderMap[item.name] = mp3s;
      totalFiles += mp3s.length;
    }
  }

  const folders = Object.keys(folderMap);
  console.log(`Found ${folders.length} song folders with a total of ${totalFiles} MP3 files.`);

  // Step 3: Upload all folders to Hugging Face
  console.log('\n3. Uploading audio files to Hugging Face Dataset...');
  const hub = await getHub();
  let uploadedCount = 0;
  const allMigratedPaths = [];

  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i];
    const fileNames = folderMap[folder];
    console.log(`\n📁 [${i + 1}/${folders.length}] Processing folder "${folder}" (${fileNames.length} files)...`);

    const filesToUpload = [];

    for (const fileName of fileNames) {
      const publicSupabaseUrl = `${SUPABASE_URL}/storage/v1/object/public/song-tts/${folder}/${fileName}`;
      const remotePath = `${folder}/${fileName}`;
      allMigratedPaths.push(remotePath);

      // Download from Supabase
      const res = await fetch(publicSupabaseUrl);
      if (!res.ok) {
        console.error(`  ❌ Failed to fetch ${publicSupabaseUrl}: ${res.statusText}`);
        continue;
      }
      const arrayBuffer = await res.arrayBuffer();
      const blob = new Blob([Buffer.from(arrayBuffer)], { type: 'audio/mpeg' });

      filesToUpload.push({
        path: remotePath,
        content: blob
      });
    }

    if (filesToUpload.length > 0) {
      await hub.uploadFiles({
        repo: { type: 'dataset', name: HF_DATASET },
        accessToken: HF_TOKEN,
        files: filesToUpload
      });
      uploadedCount += filesToUpload.length;
      console.log(`  ✅ Uploaded ${filesToUpload.length} files to Hugging Face.`);
    }

    // Small polite throttle
    await new Promise(r => setTimeout(r, 400));
  }

  console.log(`\n🎉 Successfully uploaded ${uploadedCount} / ${totalFiles} audio files to Hugging Face!`);

  // Step 4: Update Database records in Supabase
  console.log('\n4. Updating song records in Supabase database...');
  const { data: songs, error: songsErr } = await adminSupabase
    .from('songs')
    .select('id, structured_content');

  if (songsErr) throw songsErr;

  const oldBase = `${SUPABASE_URL}/storage/v1/object/public/song-tts/`;
  const newBase = `https://huggingface.co/datasets/${HF_DATASET}/resolve/main/`;

  let updatedSongsCount = 0;

  for (const song of songs) {
    if (!song.structured_content || !song.structured_content.verses) continue;

    let modified = false;
    const newVerses = song.structured_content.verses.map(v => {
      let updatedV = { ...v };
      if (updatedV.translationAudioUrl && updatedV.translationAudioUrl.includes(oldBase)) {
        updatedV.translationAudioUrl = updatedV.translationAudioUrl.replace(oldBase, newBase);
        modified = true;
      }
      if (updatedV.translationAudioMaleUrl && updatedV.translationAudioMaleUrl.includes(oldBase)) {
        updatedV.translationAudioMaleUrl = updatedV.translationAudioMaleUrl.replace(oldBase, newBase);
        modified = true;
      }
      return updatedV;
    });

    if (modified) {
      const { error: updErr } = await adminSupabase
        .from('songs')
        .update({
          structured_content: {
            ...song.structured_content,
            verses: newVerses
          }
        })
        .eq('id', song.id);

      if (updErr) {
        console.error(`  ❌ Failed to update song ${song.id}:`, updErr.message);
      } else {
        updatedSongsCount++;
      }
    }
  }

  console.log(`✅ Updated ${updatedSongsCount} song records in Supabase with Hugging Face URLs.`);

  // Step 5: Empty Supabase Storage bucket 'song-tts'
  console.log('\n5. Emptying Supabase Storage bucket "song-tts"...');
  // Deleting in batches of 100
  for (let i = 0; i < allMigratedPaths.length; i += 100) {
    const chunk = allMigratedPaths.slice(i, i + 100);
    const { error: delErr } = await adminSupabase.storage
      .from('song-tts')
      .remove(chunk);

    if (delErr) {
      console.error(`  ❌ Deletion error for chunk:`, delErr.message);
    } else {
      console.log(`  🗑️ Deleted batch of ${chunk.length} files from Supabase.`);
    }
  }

  console.log('✅ Supabase "song-tts" bucket is now completely EMPTY!');

  // Step 6: Cloud-to-Code Sync
  console.log('\n6. Running Cloud-to-Code Sync to update local TypeScript files...');
  await syncCloudToCode();
  console.log('✅ Sync complete!');

  console.log('\n====================================================');
  console.log('🎉 FULL MIGRATION & CLEANUP COMPLETED SUCCESSFULLY!');
  console.log('====================================================');
}

runMigration().catch(console.error);
