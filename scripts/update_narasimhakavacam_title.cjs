const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const songData = JSON.parse(fs.readFileSync('scratch/narasimha_kavacam_complete.json', 'utf8'));

// Update titles and author
songData.title = "ଶ୍ରୀ ନୃସିଂହ କବଚମ୍ (Narasimha Kavacam Vaksye)";
songData.title_english = "Narasimha Kavacam Vaksye";
songData.author = "Prahalad Maharaj";
songData.tags = [
  "Narasimha Kavacam Vaksye",
  "Narasimha Kavacam",
  "Sri Narasimha Kavacam",
  "Prahlada Maharaja",
  "Prahalad Maharaj",
  "Kavacam",
  "Stotram",
  "ଶ୍ରୀ ନୃସିଂହ କବଚମ୍",
  "ନୃସିଂହ କବଚ",
  "ପ୍ରହ୍ଲାଦ ମହାରାଜ"
];
songData.structured_content.title = "ଶ୍ରୀ ନୃସିଂହ କବଚମ୍ (Narasimha Kavacam Vaksye)";
songData.structured_content.title_english = "Narasimha Kavacam Vaksye";
songData.structured_content.author = "Prahalad Maharaj";
songData.updated_at = new Date().toISOString();

fs.writeFileSync('scratch/narasimha_kavacam_complete.json', JSON.stringify(songData, null, 2), 'utf8');

async function update() {
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
  console.log("Updating Sri Narasimha Kavacam in Supabase...");

  const { data, error } = await supabase
    .from('songs')
    .upsert(songData, { onConflict: 'id' })
    .select();

  if (error) {
    console.error("Upsert failed:", error);
    process.exit(1);
  }

  console.log("✅ Successfully updated in Supabase:", data[0]?.id, data[0]?.title);
}

update();
