const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const songData = {
  id: "song-abhidheyadhidevapranama",
  title: "ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ (Abhidheyadhideva Pranama)",
  title_odia: "ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ",
  title_english: "Abhidheyadhideva Pranama",
  author: "Sanatana Goswami",
  category: "Songs",
  status: "COMPLETED",
  verified: true,
  published: true,
  structured_content: {
    id: "song-abhidheyadhidevapranama",
    title: "ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ (Abhidheyadhideva Pranama)",
    title_odia: "ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ",
    title_english: "Abhidheyadhideva Pranama",
    author: "Sanatana Goswami",
    category: "Songs",
    verses: [
      {
        id: 1,
        lyric: "ଦୀବ୍ୟଦ୍-ବୃନ୍ଦାରଣ୍ୟ-କଳ୍ପ-ଦ୍ରୁମାଧଃ\nଶ୍ରୀମଦ୍-ରତ୍ନାଗାର-ସିଂହାସନ-ସ୍ଥୌ ।\nଶ୍ରୀମଦ୍-ରାଧା-ଶ୍ରୀଲ-ଗୋବିନ୍ଦ-ଦେବୌ\nପ୍ରେଷ୍ଠାଳୀଭିଃ ସେବ୍ୟମାନୌ ସ୍ମରାମି ॥୧॥",
        translation: "ପରମ ଦିବ୍ୟ ଶ୍ରୀବୃନ୍ଦାବନ ଧାମରେ, ଏକ କଳ୍ପବୃକ୍ଷ ତଳେ ଅବସ୍ଥିତ ରତ୍ନ-ମନ୍ଦିରର ଶୋଭାମୟ ସିଂହାସନ ଉପରେ ଶ୍ରୀଶ୍ରୀ ରାଧା-ଗୋବିନ୍ଦଦେବ ବିରାଜମାନ କରିଛନ୍ତି। ସେମାନଙ୍କର ଅତି ପ୍ରିୟ ସଖୀଗଣ ସେମାନଙ୍କର ନିରନ୍ତର ପ୍ରେମମୟୀ ସେବା କରୁଛନ୍ତି। ମୁଁ ସେହି ଶ୍ରୀଶ୍ରୀ ରାଧା-ଗୋବିନ୍ଦଦେବଙ୍କ ଚରଣାରବିନ୍ଦରେ ଭକ୍ତିପୂର୍ବକ ପ୍ରଣାମ ଜଣାଇ ସ୍ମରଣ କରୁଛି।",
        wordMeanings: [
          { word: "ଦୀବ୍ୟତ୍", meaning: "ଦିବ୍ୟ, ତେଜୋମୟ ଓ ସୁଶୋଭିତ" },
          { word: "ବୃନ୍ଦାରଣ୍ୟ", meaning: "ଶ୍ରୀବୃନ୍ଦାବନ ଧାମରେ" },
          { word: "କଳ୍ପଦ୍ରୁମ-ଅଧଃ", meaning: "କଳ୍ପବୃକ୍ଷ ତଳେ" },
          { word: "ଶ୍ରୀମଦ୍-ରତ୍ନାଗାର", meaning: "ଶୋଭାମୟ ରତ୍ନ-ମନ୍ଦିର ମଧ୍ୟରେ" },
          { word: "ସିଂହାସନ-ସ୍ଥୌ", meaning: "ଦିବ୍ୟ ସିଂହାସନ ଉପରେ ବିରାଜମାନ (ଉଭୟଙ୍କୁ)" },
          { word: "ଶ୍ରୀମଦ୍-ରାଧା-ଶ୍ରୀଲ-ଗୋବିନ୍ଦ-ଦେବୌ", meaning: "ଶ୍ରୀମତୀ ରାଧାରାଣୀ ଏବଂ ଶ୍ରୀଲ ଗୋବିନ୍ଦଦେବଙ୍କୁ" },
          { word: "ପ୍ରେଷ୍ଠାଳୀଭିଃ", meaning: "ନିଜର ଅତି ପ୍ରିୟ ସଖୀଗଣଙ୍କ (ଲଳିତା, ବିଶାଖା ଆଦି) ଦ୍ୱାରା" },
          { word: "ସେବ୍ୟମାନୌ", meaning: "ନିରନ୍ତର ସେବିତ ହେଉଥିବା (ସେହି ଦୁଇଜଣଙ୍କୁ)" },
          { word: "ସ୍ମରାମି", meaning: "ମୁଁ (ଭକ୍ତିପୂର୍ବକ) ସ୍ମରଣ କରୁଛି" }
        ],
        status: "COMPLETED"
      }
    ]
  },
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
  console.log("Updating song in Supabase with pure Odia word meanings...");

  const { data, error } = await supabase
    .from('songs')
    .upsert(songData, { onConflict: 'id' })
    .select();

  if (error) {
    console.error("Upsert failed:", error);
    process.exit(1);
  }

  console.log("✅ Successfully updated in Supabase:", data[0]?.id);
}

upload();
