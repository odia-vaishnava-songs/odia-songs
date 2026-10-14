const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const stagedPath = path.join(__dirname, '..', 'scratch', 'ore_vrndavaner_staged.json');
const staged = JSON.parse(fs.readFileSync(stagedPath, 'utf8'));

const songData = {
  id: staged.id,
  title: staged.title,
  title_odia: staged.title_odia,
  title_english: staged.title_english,
  author: staged.author,
  category: staged.category,
  type: staged.type || "html",
  status: "COMPLETED",
  published: true,
  description: staged.description,
  audio_url: staged.audioUrl,
  vocalist: staged.vocalist,
  audio_versions: staged.audioVersions,
  tags: staged.tags,
  structured_content: staged.structuredContent,
  updated_at: new Date().toISOString()
};

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
  console.log("Uploading Ore Vrndavaner Nanda Dulal to Supabase...");

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

upload();
