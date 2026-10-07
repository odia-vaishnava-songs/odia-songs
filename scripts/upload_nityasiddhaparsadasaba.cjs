const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const songData = {
  id: "song-nityasiddhaparsadasaba",
  title: "ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ (Nitya-Siddha Pārṣada Saba Rādhā-Kṛṣṇa Smare)",
  title_odia: "ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ",
  title_english: "Nitya-Siddha Parsada Saba Radha-Krsna Smare",
  author: "Srila Prabhupada",
  category: "Songs",
  type: "html",
  status: "COMPLETED",
  verified: true,
  published: true,
  description: "ଶ୍ରୀଳ ପ୍ରଭୁପାଦଙ୍କ ବିରଚିତ 'ବୃନ୍ଦାବନେ ଭଜନ' (୧୯୫୮) କବିତାରୁ ଗୃହୀତ ପରମ ଉପଦେଶାମୃତ, ଯେଉଁଥିରେ ପ୍ରକୃତ ଭଜନ ଏବଂ ହରିନାମ ପ୍ରଚାରର ମହିମା ପ୍ରକାଶିତ ।",
  audio_url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_A_C_Bhaktivedanta_Swami_Prabhupada/Nitya_Siddha_Parsada_Saba_Radha_Krsna_Smare/07_-_Nitya_Siddha_Parsada_Saba_Radha_Krsna_Smare_-_Sung_by_HG_Ananda_Radhe_Mataji_IDT.mp3",
  vocalist: "HG Ananda Radhe Mataji",
  audio_versions: [
    {
      label: "HG Ananda Radhe Mataji",
      url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_A_C_Bhaktivedanta_Swami_Prabhupada/Nitya_Siddha_Parsada_Saba_Radha_Krsna_Smare/07_-_Nitya_Siddha_Parsada_Saba_Radha_Krsna_Smare_-_Sung_by_HG_Ananda_Radhe_Mataji_IDT.mp3"
    }
  ],
  structured_content: {
    id: "song-nityasiddhaparsadasaba",
    title: "ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ (Nitya-Siddha Pārṣada Saba Rādhā-Kṛṣṇa Smare)",
    title_odia: "ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ",
    title_english: "Nitya-Siddha Parsada Saba Radha-Krsna Smare",
    author: "Srila Prabhupada",
    category: "Songs",
    verses: [
      {
        id: 1,
        lyric: "ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ ।\nତାଁଦେର ସ୍ମରଣ ଜୀବେର ସର୍ବ-ପାପ ହରେ ।। ୧ ।।",
        translation: "ଭଗବାନଙ୍କ ନିତ୍ୟସିଦ୍ଧ ପାର୍ଷଦଗଣ ସର୍ବଦା ଶ୍ରୀଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ଚିନ୍ତନ ଓ ସ୍ମରଣ କରନ୍ତି। ସେହିଭଳି ମହାନ୍ ପାର୍ଷଦମାନଙ୍କୁ ସ୍ମରଣ କରିବା ଦ୍ୱାରା ବଦ୍ଧଜୀବର ସମସ୍ତ ପାପ ଦୂର ହୋଇଯାଏ।",
        wordMeanings: [
          { word: "ନିତ୍ୟ-ସିଦ୍ଧ", meaning: "ଚିରନ୍ତନ ମୁକ୍ତ ଓ ସିଦ୍ଧ" },
          { word: "ପାର୍ଷଦ ସବ", meaning: "ଭଗବାନଙ୍କ ସମସ୍ତ ନିତ୍ୟ ସଖା ଓ ସେବକଗଣ" },
          { word: "ରାଧା-କୃଷ୍ଣ ସ୍ମରେ", meaning: "ଶ୍ରୀଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କୁ ସ୍ମରଣ କରନ୍ତି" },
          { word: "ତାଁଦେର ସ୍ମରଣ", meaning: "ସେହି ଭକ୍ତମାନଙ୍କୁ ସ୍ମରଣ କରିବା ଦ୍ୱାରା" },
          { word: "ଜୀବେର", meaning: "ସାଂସାରିକ ବଦ୍ଧଜୀବର" },
          { word: "ସର୍ବ-ପାପ", meaning: "ସମସ୍ତ ପାପ ଓ କଳୁଷତା" },
          { word: "ହରେ", meaning: "ବିନାଶ ହୋଇଯାଏ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 2,
        lyric: "ଅନୁକରଣ କରି ଯଦି ସେଇ ଭାବ ଧରେ ।\nମାୟା-କବଳିତ ହୟ ସଂସାର ନା ତରେ ।। ୨ ।।",
        translation: "ଯଦି କୌଣସି ଅନଧିକାରୀ ବ୍ୟକ୍ତି ସେହି ଉଚ୍ଚାଙ୍ଗ ସିଦ୍ଧ ଭାବକୁ କୃତ୍ରିମ ଭାବେ ଅନୁକରଣ କରିବାର ଚେଷ୍ଟା କରେ, ତେବେ ସେ ମାୟା ଦ୍ୱାରା ଗ୍ରସିତ ହୋଇପଡ଼େ ଏବଂ ଏହି ଭବସଂସାରରୁ କଦାପି ତରିପାରେ ନାହିଁ।",
        wordMeanings: [
          { word: "ଅନୁକରଣ କରି", meaning: "କୃତ୍ରିମ ଭାବେ ନକଲ କରି" },
          { word: "ଯଦି", meaning: "ଯଦି କେହି" },
          { word: "ସେଇ ଭାବ ଧରେ", meaning: "ସେହି ସିଦ୍ଧ ଭାବନା ପ୍ରଦର୍ଶନ କରେ" },
          { word: "ମାୟା-କବଳିତ ହୟ", meaning: "ମାୟାର ଗ୍ରାସରେ ପଡ଼ିଯାଏ" },
          { word: "ସଂସାର", meaning: "ଜଡ଼ ଭବସଂସାରକୁ" },
          { word: "ନା ତରେ", meaning: "ପାରି ହୋଇପାରେ ନାହିଁ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 3,
        lyric: "ପ୍ରଚାର କରହୋ ସଦା ଜୀବ ଘରେ ଘରେ ।\nସଫଳ ହଇବେ ଜୀବନ ପ୍ରଚାରେର ଦ୍ୱାରେ ।। ୩ ।।",
        translation: "ତେଣୁ ସର୍ବଦା ପ୍ରତ୍ୟେକ ଜୀବଙ୍କ ଘରେ ଘରେ ଯାଇ ହରିନାମ ଓ ଶୁଦ୍ଧ ଭକ୍ତିର ପ୍ରଚାର କର! ଏହି ପ୍ରଚାର କାର୍ଯ୍ୟ ଦ୍ୱାରା ହିଁ ମାନବ ଜୀବନ ପୂର୍ଣ୍ଣ ରୂପେ ସାର୍ଥକ ଓ ସଫଳ ହେବ।",
        wordMeanings: [
          { word: "ପ୍ରଚାର କରହୋ", meaning: "ଭଗବତ୍-ବାଣୀ ପ୍ରଚାର କର" },
          { word: "ସଦା", meaning: "ସର୍ବଦା" },
          { word: "ଜୀବ ଘରେ ଘରେ", meaning: "ପ୍ରତ୍ୟେକ ବ୍ୟକ୍ତିଙ୍କ ଘରେ ଘରେ ଯାଇ" },
          { word: "ସଫଳ ହଇବେ", meaning: "ସାର୍ଥକ ଓ ସଫଳ ହେବ" },
          { word: "ଜୀବନ", meaning: "ମାନବ ଜୀବନ" },
          { word: "ପ୍ରଚାରେର ଦ୍ୱାରେ", meaning: "ହରିନାମ ପ୍ରଚାର ମାଧ୍ୟମରେ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 4,
        lyric: "ଶ୍ରୀ ଦୟିତ-ଦାସ ପ୍ରଭୁ ଦେନ ଏଇ ଶିକ୍ଷା ।\nକର ଉଚ୍ଚୈଃ ସ୍ୱରେ ନାମ ଏଇ ତାଁର ଦୀକ୍ଷା ।। ୪ ।।",
        translation: "ଶ୍ରୀ ଦୟିତ ଦାସ (ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ଗୋସ୍ୱାମୀ ଠାକୁର) ଏହି ଉପଦେଶ ଦେଇଛନ୍ତି ଯେ— ଉଚ୍ଚ ସ୍ୱରରେ ହରିନାମ ସଙ୍କୀର୍ତ୍ତନ କର! ପ୍ରକୃତରେ ଏହା ହିଁ ତାଙ୍କର ପ୍ରକୃତ ଦୀକ୍ଷା ଓ ଆଜ୍ଞା।",
        wordMeanings: [
          { word: "ଶ୍ରୀ ଦୟିତ-ଦାସ ପ୍ରଭୁ", meaning: "ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ଠାକୁର" },
          { word: "ଦେନ ଏଇ ଶିକ୍ଷା", meaning: "ଏହି ଉପଦେଶ ପ୍ରଦାନ କରନ୍ତି" },
          { word: "କର ଉଚ୍ଚୈଃ ସ୍ୱରେ", meaning: "ଉଚ୍ଚ କଣ୍ଠରେ ଗାନ କର" },
          { word: "ନାମ", meaning: "ଶ୍ରୀ ହରେକୃଷ୍ଣ ମହାମନ୍ତ୍ର" },
          { word: "ଏଇ ତାଁର ଦୀକ୍ଷା", meaning: "ଏହା ହିଁ ତାଙ୍କର ପ୍ରକୃତ ଦୀକ୍ଷା ଓ ଶିକ୍ଷା" }
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

upload();
