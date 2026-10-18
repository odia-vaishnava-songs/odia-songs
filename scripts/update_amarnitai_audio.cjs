const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const audioMap = {
  1: "https://ucsoqhdkdfkzqdlxqmdy.supabase.co/storage/v1/object/public/song-tts/amar_nitai/v1.mp3",
  2: "https://ucsoqhdkdfkzqdlxqmdy.supabase.co/storage/v1/object/public/song-tts/amar_nitai/v2.mp3",
  3: "https://ucsoqhdkdfkzqdlxqmdy.supabase.co/storage/v1/object/public/song-tts/amar_nitai/v3.mp3",
  4: "https://ucsoqhdkdfkzqdlxqmdy.supabase.co/storage/v1/object/public/song-tts/amar_nitai/v4.mp3"
};

async function updateSong() {
  console.log("Signing in as Admin...");
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: "daitariswain7@gmail.com",
    password: "pass-969200"
  });

  if (authError) {
    console.error("Auth error:", authError);
    process.exit(1);
  }
  console.log("Logged in:", authData.user.email);

  console.log('Fetching current song from Supabase...');
  const { data: song, error: fetchError } = await supabase
    .from('songs')
    .select('*')
    .eq('id', 'song-amarnitaimilena')
    .single();

  if (fetchError || !song) {
    console.error('Error fetching song:', fetchError);
    process.exit(1);
  }

  const structuredContent = song.structured_content || song.structuredContent;
  if (!structuredContent || !structuredContent.verses) {
    console.error('No structured verses found in song:', song);
    process.exit(1);
  }

  const updatedVerses = structuredContent.verses.map((v) => {
    const audioUrl = audioMap[v.id];
    return {
      ...v,
      translationAudioUrl: audioUrl || v.translationAudioUrl
    };
  });

  const updatedStructuredContent = {
    ...structuredContent,
    verses: updatedVerses
  };

  console.log('Updating song in Supabase...');
  const { data: updatedSong, error: updateError } = await supabase
    .from('songs')
    .update({
      structured_content: updatedStructuredContent,
      updated_at: new Date().toISOString()
    })
    .eq('id', 'song-amarnitaimilena')
    .select();

  if (updateError) {
    console.error('❌ Update failed:', updateError);
    process.exit(1);
  }

  console.log('🎉 Successfully updated song-amarnitaimilena in Supabase with cloud TTS audio URLs!');
  console.log('Updated row count:', updatedSong.length);
}

updateSong().catch(console.error);
