const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const songData = {
  id: "song-nityanandadvadasanama",
  title: "ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁଃ - ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍ (Nityānando 'Vadhūtendur)",
  title_odia: "ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁଃ - ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍",
  title_english: "Nityanando Vadhutendur - Sri Nityananda Dvadasha Nama Stotram",
  author: "Sarvabhauma Bhattacarya",
  category: "Songs",
  type: "html",
  status: "COMPLETED",
  verified: true,
  published: true,
  description: "ଶ୍ରୀଳ ସାର୍ବଭୌମ ଭଟ୍ଟାଚାର୍ଯ୍ୟଙ୍କ ବିରଚିତ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଚନ୍ଦ୍ରଙ୍କ ପରମ ମଙ୍ଗଳମୟ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍ |",
  audio_url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sri%20Nityananda%20Dvadasha%20Nama%20Stotram%20Srila%20Sarvabhauma%20Bhattacharya%20Yashoda%20Kumar%20Dasa.mp3",
  vocalist: "HG Yashoda Kumar Dasa",
  audio_versions: [
    {
      label: "HG Yashoda Kumar Dasa",
      url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sri%20Nityananda%20Dvadasha%20Nama%20Stotram%20Srila%20Sarvabhauma%20Bhattacharya%20Yashoda%20Kumar%20Dasa.mp3"
    }
  ],
  structured_content: {
    id: "song-nityanandadvadasanama",
    title: "ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁଃ - ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍ (Nityānando 'Vadhūtendur)",
    title_odia: "ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁଃ - ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍",
    title_english: "Nityanando Vadhutendur - Sri Nityananda Dvadasha Nama Stotram",
    author: "Sarvabhauma Bhattacarya",
    category: "Songs",
    verses: [
      {
        id: 1,
        lyric: "ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁର୍ ବସୁଧା-ପ୍ରାଣ-ବଲ୍ଲଭଃ ।\nଜାହ୍ନବୀ-ଜୀବିତ-ପତିଃ କୃଷ୍ଣ-ପ୍ରେମ-ପ୍ରଦଃ ପ୍ରଭୁଃ ।। ୧ ।।",
        translation: "ଶ୍ରୀମନ୍ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁ ହେଉଛନ୍ତି ଚିରନ୍ତନ ଆନନ୍ଦସ୍ୱରୂପ। ସେ ସମସ୍ତ ଅବଧୂତମାନଙ୍କ ମଧ୍ୟରେ ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସଦୃଶ ଏବଂ ମାତା ବସୁଧାଙ୍କର ପ୍ରାଣପ୍ରିୟ ପତି। ସେ ମାତା ଜାହ୍ନବୀ ଦେବୀଙ୍କ ଜୀବନସର୍ବସ୍ୱ ପ୍ରାଣେଶ୍ୱର, ଜଗତର ଜୀବମାନଙ୍କୁ ଦିବ୍ୟ ଶ୍ରୀକୃଷ୍ଣ-ପ୍ରେମ ପ୍ରଦାନକାରୀ ଏବଂ ସର୍ବନିୟନ୍ତା ପ୍ରଭୁ ଅଟନ୍ତି।",
        wordMeanings: [
          { word: "ନିତ୍ୟାନନ୍ଦଃ", meaning: "ଚିରନ୍ତନ ଆନନ୍ଦସ୍ୱରୂପ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ (ପ୍ରଥମ ନାମ)" },
          { word: "ଅବଧୂତେନ୍ଦୁଃ", meaning: "ସମସ୍ତ ଅବଧୂତମାନଙ୍କ ମଧ୍ୟରେ ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସଦୃଶ (ଦ୍ୱିତୀୟ ନାମ)" },
          { word: "ବସୁଧା-ପ୍ରାଣ-ବଲ୍ଲଭଃ", meaning: "ମାତା ବସୁଧାଙ୍କ ପ୍ରାଣପ୍ରିୟ ସ୍ୱାମୀ (ତୃତୀୟ ନାମ)" },
          { word: "ଜାହ୍ନବୀ-ଜୀବିତ-ପତିଃ", meaning: "ମାତା ଜାହ୍ନବୀ ଦେବୀଙ୍କ ଜୀବନଧନ ପ୍ରଭୁ (ଚତୁର୍ଥ ନାମ)" },
          { word: "କୃଷ୍ଣ-ପ୍ରେମ-ପ୍ରଦଃ", meaning: "ବିଶୁଦ୍ଧ କୃଷ୍ଣପ୍ରେମ ବିତରଣକାରୀ (ପଞ୍ଚମ ନାମ)" },
          { word: "ପ୍ରଭୁଃ", meaning: "ସର୍ବେଶ୍ୱର ପରମ ପ୍ରଭୁ (ଷଷ୍ଠ ନାମ)" }
        ],
        status: "COMPLETED"
      },
      {
        id: 2,
        lyric: "ପଦ୍ମାବତୀ-ସୁତଃ ଶ୍ରୀମାନ୍ ଶଚୀ-ନନ୍ଦନ-ପୂର୍ବଜଃ ।\nଭାବୋନ୍ମତ୍ତୋ ଜଗତ୍-ତ୍ରାତା ରକ୍ତ-ଗୌର-କଳେବରଃ ।। ୨ ।।",
        translation: "ସେ ମାତା ପଦ୍ମାବତୀଙ୍କ ପ୍ରିୟ ପୁତ୍ର, ଅନନ୍ତ ଐଶ୍ୱର୍ଯ୍ୟ ଓ ଶୋଭାରେ ମଣ୍ଡିତ ଶ୍ରୀମାନ୍, ଏବଂ ଶଚୀନନ୍ଦନ ଶ୍ରୀ ଗୌରହରିଙ୍କ ଜ୍ୟେଷ୍ଠ ଭ୍ରାତା ଅଟନ୍ତି। ସେ ଦିବ୍ୟ ଭଗବତ୍-ପ୍ରେମଭାବରେ ସର୍ବଦା ଉନ୍ମତ୍ତ, ସମଗ୍ର ବିଶ୍ୱବ୍ରହ୍ମାଣ୍ଡର ପରମ ତ୍ରାଣକର୍ତ୍ତା ଏବଂ ରକ୍ତିମ-ସ୍ୱର୍ଣ୍ଣାଭ କାନ୍ତିରେ ସୁଶୋଭିତ ଶ୍ରୀବିଗ୍ରହ ଅଟନ୍ତି।",
        wordMeanings: [
          { word: "ପଦ୍ମାବତୀ-ସୁତଃ", meaning: "ମାତା ପଦ୍ମାବତୀଙ୍କ ଦିବ୍ୟ ପୁତ୍ର (ସପ୍ତମ ନାମ)" },
          { word: "ଶ୍ରୀମାନ୍", meaning: "ପରମ ଶୋଭା ଓ ଐଶ୍ୱର୍ଯ୍ୟରେ ପରିପୂର୍ଣ୍ଣ (ଅଷ୍ଟମ ନାମ)" },
          { word: "ଶଚୀ-ନନ୍ଦନ-ପୂର୍ବଜଃ", meaning: "ଶଚୀମାତାଙ୍କ ପୁତ୍ର ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ବଡ଼ ଭାଇ (ନବମ ନାମ)" },
          { word: "ଭାବୋନ୍ମତ୍ତଃ", meaning: "ପରମ ପ୍ରେମଭାବରେ ସର୍ବଦା ମତ୍ତ (ଦଶମ ନାମ)" },
          { word: "ଜଗତ୍-ତ୍ରାତା", meaning: "ସମସ୍ତ ସଂସାରର ପରମ ଉଦ୍ଧାରକର୍ତ୍ତା (ଏକାଦଶ ନାମ)" },
          { word: "ରକ୍ତ-ଗୌର-କଳେବରଃ", meaning: "ରକ୍ତିମ ମିଶ୍ରିତ ଉଜ୍ଜ୍ୱଳ ସୁବର୍ଣ୍ଣ କାନ୍ତିବିଶିଷ୍ଟ ଶରୀର (ଦ୍ୱାଦଶ ନାମ)" }
        ],
        status: "COMPLETED"
      },
      {
        id: 3,
        lyric: "ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ-ଚନ୍ଦ୍ରସ୍ୟ ନାମ-ଦ୍ୱାଦଶକଂ ଶୁଭମ୍ ।\nଯ ଇଦଂ ପ୍ରତ୍ୟହଂ ପ୍ରାତଃ ପ୍ରତ୍ୟୁତ୍ଥାୟ ପଠେନ୍ ନରଃ ।। ୩ ।।",
        translation: "ଯେଉଁ ଭାଗ୍ୟବାନ ମନୁଷ୍ୟ ପ୍ରତ୍ୟହ ପ୍ରାତଃକାଳରେ ଶଯ୍ୟା ତ୍ୟାଗ କରି ଉଠିବା ମାତ୍ରେ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ-ଚନ୍ଦ୍ରଙ୍କ ଏହି ଅତ୍ୟନ୍ତ ଶୁଭଙ୍କର ଓ ମଙ୍ଗଳମୟ ବାରୋଟି ପବିତ୍ର ନାମ ଭକ୍ତିପୂର୍ବକ ପାଠ କରନ୍ତି...",
        wordMeanings: [
          { word: "ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ-ଚନ୍ଦ୍ରସ୍ୟ", meaning: "ଚନ୍ଦ୍ର ସଦୃଶ ଆନନ୍ଦଦାୟକ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦଙ୍କର" },
          { word: "ନାମ-ଦ୍ୱାଦଶକମ୍", meaning: "ବାରୋଟି ପବିତ୍ର ନାମାବଳୀ" },
          { word: "ଶୁଭମ୍", meaning: "ପରମ ମଙ୍ଗଳମୟ" },
          { word: "ଯଃ ନରଃ", meaning: "ଯେଉଁ ମନୁଷ୍ୟ" },
          { word: "ଇଦମ୍", meaning: "ଏହି ସ୍ତୋତ୍ରକୁ" },
          { word: "ପ୍ରତ୍ୟହମ୍", meaning: "ପ୍ରତିଦିନ" },
          { word: "ପ୍ରାତଃ", meaning: "ପ୍ରଭାତ ସମୟରେ" },
          { word: "ପ୍ରତ୍ୟୁତ୍ଥାୟ", meaning: "ଶଯ୍ୟାରୁ ଉଠି" },
          { word: "ପଠେତ୍", meaning: "ପାଠ କରନ୍ତି" }
        ],
        status: "COMPLETED"
      },
      {
        id: 4,
        lyric: "ସ କ୍ଲେଶ-ରହିତୋ ଭୂତ୍ୱା ପ୍ରାପ୍ନୁୟାତ୍ ସ୍ୱ-ମନୋ-ରଥମ୍ ।\nତୂର୍ଣ୍ଣଂ ଚୈତନ୍ୟ-ଦେବସ୍ୟ କରୁଣା-ଭାଜନଂ ଭବେତ୍ ।। ୪ ।।",
        translation: "...ସେହି ବ୍ୟକ୍ତି ସମସ୍ତ ପ୍ରକାର ଆଧିଭୌତିକ, ଆଧିଦୈବିକ ଓ ଆଧ୍ୟାତ୍ମିକ ଦୁଃଖ-କ୍ଲେଶରୁ ମୁକ୍ତ ହୋଇ ନିଜର ସମସ୍ତ ମନୋରଥ (ଭକ୍ତିପୂର୍ଣ୍ଣ ଅଭିଳାଷ) ପ୍ରାପ୍ତ କରନ୍ତି ଏବଂ ଅତି ଶୀଘ୍ର ପ୍ରଭୁ ଶ୍ରୀ ଚୈତନ୍ୟଦେବଙ୍କ ପରମ ଅହେତୁକୀ କୃପାର ଯୋଗ୍ୟ ପାତ୍ର ହୋଇଯାଆନ୍ତି।",
        wordMeanings: [
          { word: "ସଃ", meaning: "ସେହି ବ୍ୟକ୍ତି" },
          { word: "କ୍ଲେଶ-ରହିତଃ ଭୂତ୍ୱା", meaning: "ସମସ୍ତ ପ୍ରକାର ଦୁଃଖ ଓ ଯନ୍ତ୍ରଣାରୁ ମୁକ୍ତ ହୋଇ" },
          { word: "ପ୍ରାପ୍ନୁୟାତ୍", meaning: "ପ୍ରାପ୍ତ କରନ୍ତି" },
          { word: "ସ୍ୱ-ମନୋ-ରଥମ୍", meaning: "ନିଜର ସମସ୍ତ ଶୁଦ୍ଧ ମନସ୍କାମନା" },
          { word: "ତୂର୍ଣ୍ଣମ୍", meaning: "ଅତି ଶୀଘ୍ର" },
          { word: "ଚୈତନ୍ୟ-ଦେବସ୍ୟ", meaning: "ଭଗବାନ ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ" },
          { word: "କରୁଣା-ଭାଜନମ୍", meaning: "ଦିବ୍ୟ କୃପାର ଯୋଗ୍ୟ ପାତ୍ର" },
          { word: "ଭବେତ୍", meaning: "ହୋଇଯାଆନ୍ତି" }
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
