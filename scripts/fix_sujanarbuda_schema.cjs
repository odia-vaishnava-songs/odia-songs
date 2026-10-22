const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envFile = fs.readFileSync('.env', 'utf8');
const SUPABASE_URL = envFile.match(/VITE_SUPABASE_URL=([^\r\n]+)/)[1].trim();
const ANON_KEY = envFile.match(/VITE_SUPABASE_ANON_KEY=([^\r\n]+)/)[1].trim();
const supabase = createClient(SUPABASE_URL, ANON_KEY);

const data = JSON.parse(fs.readFileSync('scratch/sujanarbudaradhita_complete.json', 'utf8'));

// Normalize verses to have id and lyric
const rawVerses = data.structured_content ? data.structured_content.verses : data.verses;
const normalizedVerses = rawVerses.map(v => {
  const lyric = v.lyric || (v.lines ? v.lines.join('\n') : '');
  return {
    id: v.id || v.verseNumber,
    lyric: lyric,
    status: 'COMPLETED',
    translation: v.translation,
    wordMeanings: v.wordMeanings,
    transliteration: v.transliteration ? (Array.isArray(v.transliteration) ? v.transliteration.join('\n') : v.transliteration) : undefined
  };
});

data.structured_content.verses = normalizedVerses;
fs.writeFileSync('scratch/sujanarbudaradhita_complete.json', JSON.stringify(data, null, 2));
console.log('✅ Updated scratch/sujanarbudaradhita_complete.json with id and lyric fields.');

async function updateSupabase() {
  console.log("Signing in as Admin...");
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: "daitariswain7@gmail.com",
    password: "pass-969200"
  });

  if (authError) {
    console.error("Auth error:", authError);
    process.exit(1);
  }

  const { error } = await supabase
    .from('songs')
    .update({ structured_content: data.structured_content, updated_at: new Date().toISOString() })
    .eq('id', 'song-sujanarbudaradhita');

  if (error) {
    console.error("Supabase update error:", error);
    process.exit(1);
  }

  console.log("✅ Successfully updated Supabase song-sujanarbudaradhita schema!");
}

updateSupabase();
