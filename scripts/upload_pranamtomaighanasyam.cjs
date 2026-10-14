const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envFile = fs.readFileSync('.env', 'utf8');
const SUPABASE_URL = envFile.match(/VITE_SUPABASE_URL=([^\r\n]+)/)[1].trim();
const ANON_KEY = envFile.match(/VITE_SUPABASE_ANON_KEY=([^\r\n]+)/)[1].trim();

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const songData = JSON.parse(fs.readFileSync('scratch/pranamtomaighanasyam_complete.json', 'utf8'));
songData.updated_at = new Date().toISOString();

async function upload() {
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
  console.log("Uploading song to Supabase...");

  const { data, error } = await supabase
    .from('songs')
    .upsert(songData, { onConflict: 'id' })
    .select();

  if (error) {
    console.error("Upsert failed:", error);
    process.exit(1);
  }

  console.log("✅ Successfully upserted into Supabase:", data[0]?.id);
}

if (require.main === module) {
  upload();
}
