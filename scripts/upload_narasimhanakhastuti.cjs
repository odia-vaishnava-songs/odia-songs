const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const songData = {
  id: "song-narasimhanakhastuti",
  title: "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି (Sri Narasimha Nakha Stuti)",
  title_odia: "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି",
  title_english: "Sri Narasimha Nakha Stuti",
  author: "Madhvacharya",
  category: "Songs",
  type: "html",
  status: "COMPLETED",
  published: true,
  description: "ଶ୍ରୀପାଦ ମଧ୍ୱାଚାର୍ଯ୍ୟ (ଶ୍ରୀମଦ୍ ଆନନ୍ଦତୀର୍ଥ)ଙ୍କ ବିରଚିତ ଭଗବାନ ଶ୍ରୀନରସିଂହଦେବଙ୍କ ଦିବ୍ୟ ନଖସମୂହର ପରମ ରକ୍ଷାକାରୀ ମହିମାମୟ ସ୍ତୁତି ।",
  audio_url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sri%20Narasimha%20Nakha%20Stuti%20Sripad%20Madhvacharya%20Powerful%20Mantra%20for%20Protection%20Narasimha%20Jayanthi.mp3",
  vocalist: "HG Yasoda Kumara Prabhu",
  audio_versions: [
    {
      label: "HG Yasoda Kumara Prabhu",
      url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sri%20Narasimha%20Nakha%20Stuti%20Sripad%20Madhvacharya%20Powerful%20Mantra%20for%20Protection%20Narasimha%20Jayanthi.mp3"
    },
    {
      label: "Vaishnavas",
      url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Narasimha%20Nakha%20Stuti%20Bhakta%20Mukunda%20Divine%20Vedic%20Mantras.mp3"
    }
  ],
  tags: [
    "Narasimha",
    "Narasimha Nakha Stuti",
    "Nakha Stuti",
    "Madhvacharya",
    "Pranama",
    "Stuti",
    "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି",
    "ମଧ୍ୱାଚାର୍ଯ୍ୟ"
  ],
  structured_content: {
    id: "song-narasimhanakhastuti",
    title: "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି (Sri Narasimha Nakha Stuti)",
    title_odia: "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି",
    title_english: "Sri Narasimha Nakha Stuti",
    author: "Madhvacharya",
    category: "Songs",
    reference_url: "https://vsnectar.web.app/home/songs/Narasimha%20Nakha%20Stuti_",
    verses: [
      {
        id: 1,
        lyric: "ପାନ୍ତ୍ୱସ୍ମାନ୍ ପୁରୁହୂତ-ବୈରି-ବଳବନ୍-ମାତଙ୍ଗ-ମାଦ୍ୟଦ୍-ଘଟା-\nକୁମ୍ଭୋଚ୍ଚାଦ୍ରି-ବିପାଟନାଧିକ-ପଟୁ ପ୍ରତ୍ୟେକ-ବଜ୍ରାୟିତାଃ ।\nଶ୍ରୀମତ୍-କଣ୍ଠୀରବାସ୍ୟ-ପ୍ରତତ-ସୁନଖରା ଦାରିତାରାତି-ଦୂର-\nପ୍ରଧ୍ୱସ୍ତ-ଧ୍ୱାନ୍ତ-ଶାନ୍ତ-ପ୍ରବିତତ-ମନସା ଭାବିତା ଭୂରି-ଭାଗୈଃ ॥ ୧ ॥",
        translation: "ଶ୍ରୀମନ୍ତ ସିଂହମୁଖ ଭଗବାନ ଶ୍ରୀନରସିଂହଦେବଙ୍କର ତୀକ୍ଷ୍ଣ ତଥା ପ୍ରସାରିତ ଦିବ୍ୟ ନଖସମୂହ ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ! ସେହି ନଖଗୁଡ଼ିକ ମଧ୍ୟରୁ ପ୍ରତ୍ୟେକଟି ବଜ୍ର ସଦୃଶ, ଯାହା ଇନ୍ଦ୍ରଙ୍କ ଶତ୍ରୁ (ଅସୁର) ରୂପୀ ମତ୍ତ ହସ୍ତୀମାନଙ୍କର ପର୍ବତତୁଲ୍ୟ କୁମ୍ଭସ୍ଥଳୀକୁ ବିଦୀର୍ଣ୍ଣ କରିବାରେ ଅତ୍ୟନ୍ତ ନିପୁଣ। ଯାହାଙ୍କ କୃପାରୁ ଅଜ୍ଞାନରୂପୀ ଅନ୍ଧକାର ଦୂରରୁ ହିଁ ବିନଷ୍ଟ ହୋଇଯାଏ, ସେହି ପରମ ନିର୍ମଳ ଓ ଶାନ୍ତ ଚିତ୍ତବିଶିଷ୍ଟ ମହାଭାଗ୍ୟବାନ୍ ଭକ୍ତମାନେ ସେହି ଦିବ୍ୟ ନଖସମୂହକୁ ନିରନ୍ତର ଧ୍ୟାନ କରନ୍ତି।",
        wordMeanings: [
          { word: "ପାନ୍ତୁ ଅସ୍ମାନ୍", meaning: "ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ" },
          { word: "ପୁରୁହୂତ-ବୈରି", meaning: "ଦେବରାଜ ଇନ୍ଦ୍ରଙ୍କ ଶତ୍ରୁ (ଅସୁରମାନଙ୍କର)" },
          { word: "ବଳବତ୍-ମାତଙ୍ଗ-ମାଦ୍ୟଦ୍-ଘଟା", meaning: "ବଳବାନ୍ ଉନ୍ମତ୍ତ ହସ୍ତୀସମୂହର" },
          { word: "କୁମ୍ଭ-ଉଚ୍ଚ-ଅଦ୍ରି", meaning: "ପର୍ବତ ଭଳି ଉଚ୍ଚ ମସ୍ତକର କୁମ୍ଭସ୍ଥଳୀ" },
          { word: "ବିପାଟନ-ଅଧିକ-ପଟୁ", meaning: "ବିଦୀର୍ଣ୍ଣ କରିବାରେ ଅତ୍ୟନ୍ତ ନିପୁଣ" },
          { word: "ପ୍ରତ୍ୟେକ-ବଜ୍ରାୟିତାଃ", meaning: "ପ୍ରତ୍ୟେକଟି ବଜ୍ରାସ୍ତ୍ର ସଦୃଶ" },
          { word: "ଶ୍ରୀମତ୍-କଣ୍ଠୀରବ-ଆସ୍ୟ", meaning: "ଶ୍ରୀମନ୍ତ ସିଂହମୁଖ ଶ୍ରୀନରସିଂହଦେବଙ୍କର" },
          { word: "ପ୍ରତତ-ସୁନଖରାଃ", meaning: "ପ୍ରସାରିତ ଓ ତୀକ୍ଷ୍ଣ ଦିବ୍ୟ ନଖସମୂହ" },
          { word: "ଦାରିତ-ଅରାତି", meaning: "ଶତ୍ରୁକୁ ବିନାଶ କରିବା ଦ୍ୱାରା" },
          { word: "ଦୂର-ପ୍ରଧ୍ୱସ୍ତ-ଧ୍ୱାନ୍ତ", meaning: "ଦୂରରୁ ବିନାଶ ହୋଇଥିବା ଅଜ୍ଞାନ ରୂପୀ ଅନ୍ଧକାର" },
          { word: "ଶାନ୍ତ-ପ୍ରବିତତ-ମନସା", meaning: "ପରମ ଶାନ୍ତ ତଥା ନିର୍ମଳ ମନ ଦ୍ୱାରା" },
          { word: "ଭାବିତାଃ ଭୂରି-ଭାଗୈଃ", meaning: "ପରମ ଭାଗ୍ୟବାନ୍ ଭକ୍ତମାନଙ୍କ ଦ୍ୱାରା ଧ୍ୟାତ" }
        ]
      },
      {
        id: 2,
        lyric: "ଲକ୍ଷ୍ମୀ-କାନ୍ତ ସମନ୍ତତୋଽପି କଳୟନ୍ ନୈବେଶିତୁସ୍ତେ ସମଂ\nପଶ୍ୟାମ୍ୟୁତ୍ତମ-ବସ୍ତୁ ଦୂରତରତୋପାସ୍ତଂ ରସୋ ଯୋଽଷ୍ଟମଃ ।\nଯଦ୍ରୋଷୋତ୍କର-ଦକ୍ଷ-ନେତ୍ର-କୁଟିଳ-ପ୍ରାନ୍ତୋତ୍ଥିତାଗ୍ନି-ସ୍ଫୁରତ୍-\nଖଦ୍ୟୋତୋପମ-ବିସ୍ଫୁଲିଙ୍ଗ-ଭସିତା ବ୍ରହ୍ମେଶ-ଶକ୍ରୋତ୍କରାଃ ॥ ୨ ॥",
        translation: "ହେ ଲକ୍ଷ୍ମୀକାନ୍ତ ପ୍ରଭୁ! ସମଗ୍ର ସଂସାରର ସବୁଆଡ଼େ ଅନୁସନ୍ଧାନ କରି ମଧ୍ୟ ମୁଁ ଆପଣଙ୍କ ସମକକ୍ଷ ବା ଆପଣଙ୍କଠାରୁ ଶ୍ରେଷ୍ଠ କୌଣସି ବସ୍ତୁ ବା ସତ୍ତା ଦେଖିପାରୁନାହିଁ। ଯେପରି ସପ୍ତରସ ବ୍ୟତୀତ ଏକ କଳ୍ପିତ ଅଷ୍ଟମ ରସ ଅସମ୍ଭବ, ସେହିପରି ଆପଣଙ୍କଠାରୁ ଉର୍ଦ୍ଧ୍ୱରେ କେହି ନାହାନ୍ତି। ଆପଣଙ୍କ ପ୍ରଚଣ୍ଡ କ୍ରୋଧ ସମୟରେ ନେତ୍ରର ବକ୍ର କୋଣରୁ ଯେଉଁ ଅଗ୍ନି ପ୍ରକଟିତ ହୁଏ, ସେଥିରୁ ନିର୍ଗତ ଜୁଳୁଜୁଳିଆ ପୋକ ସଦୃଶ କ୍ଷୁଦ୍ର ଅଗ୍ନିକଣା ମାଧ୍ୟମରେ ମଧ୍ୟ ବ୍ରହ୍ମା, ଶିବ ଓ ଇନ୍ଦ୍ରଙ୍କ ସମେତ ସମସ୍ତ ଦେବତା ସମୂହ ଭସ୍ମୀଭୂତ ହୋଇପାରନ୍ତି!",
        wordMeanings: [
          { word: "ଲକ୍ଷ୍ମୀ-କାନ୍ତ", meaning: "ହେ ଲକ୍ଷ୍ମୀଦେବୀଙ୍କ ପ୍ରାଣପତି!" },
          { word: "ସମନ୍ତତଃ ଅପି କଳୟନ୍", meaning: "ସମସ୍ତ ଦିଗରେ ଅନୁସନ୍ଧାନ କରି ମଧ୍ୟ" },
          { word: "ନ ଏବ ତେ ସମଂ ପଶ୍ୟାମି", meaning: "ଆପଣଙ୍କ ସମକକ୍ଷ କାହାକୁ ବି ଦେଖିପାରୁନାହିଁ" },
          { word: "ଈଶିତୁଃ ଉତ୍ତମ-ବସ୍ତୁ", meaning: "ହେ ପରମେଶ୍ୱର! ଆପଣଙ୍କଠାରୁ ଶ୍ରେଷ୍ଠ କୌଣସି ତତ୍ତ୍ୱ" },
          { word: "ଦୂରତରତଃ ଉପାସ୍ତମ୍", meaning: "ଅତ୍ୟନ୍ତ ଦୂରରେ ଅଗୋଚର" },
          { word: "ଯଃ ଅଷ୍ଟମଃ ରସଃ", meaning: "ଯେପରି ଅସମ୍ଭବ ଅଷ୍ଟମ ରସ ସଦୃଶ" },
          { word: "ଯତ୍-ରୋଷ-ଉତ୍କର", meaning: "ଯାହାଙ୍କ ପ୍ରଚଣ୍ଡ କ୍ରୋଧାବେଗର" },
          { word: "ଦକ୍ଷ-ନେତ୍ର-କୁଟିଳ-ପ୍ରାନ୍ତ", meaning: "ଦକ୍ଷିଣ ନେତ୍ରର ବକ୍ର କୋଣରୁ" },
          { word: "ଉତ୍ଥିତ-ଅଗ୍ନି-ସ୍ଫୁରତ୍", meaning: "ପ୍ରକଟିତ ଅଗ୍ନିରୁ ବିକିରିତ ହେଉଥିବା" },
          { word: "ଖଦ୍ୟୋତ-ଉପମ", meaning: "ଜୁଳୁଜୁଳିଆ ପୋକ ସଦୃଶ" },
          { word: "ବିସ୍ଫୁଲିଙ୍ଗ-ଭସିତାଃ", meaning: "ଅଗ୍ନିର ଫୁଲିଙ୍ଗ (କଣିକା) ଦ୍ୱାରା ଭସ୍ମୀଭୂତ" },
          { word: "ବ୍ରହ୍ମ-ଈଶ-ଶକ୍ର-ଉତ୍କରାଃ", meaning: "ବ୍ରହ୍ମା, ଶିବ ଏବଂ ଇନ୍ଦ୍ରଙ୍କ ସମେତ ଦେବଗଣ" }
        ]
      },
      {
        id: "ସମାପ୍ତି",
        lyric: "ଇତି ଶ୍ରୀମଦ୍ ଆନନ୍ଦତୀର୍ଥ ଭଗବତ୍ ପାଦାଚାର୍ଯ୍ୟ ବିରଚିତା\nଶ୍ରୀ ନରସିଂହ ନଖସ୍ତୁତିଃ ସମ୍ପୂର୍ଣ୍ଣମ୍ ॥",
        translation: "ଏହିପରି ଶ୍ରୀମଦ୍ ଆନନ୍ଦତୀର୍ଥ ଭଗବତ୍ ପାଦାଚାର୍ଯ୍ୟ (ଶ୍ରୀପାଦ ମଧ୍ୱାଚାର୍ଯ୍ୟ)ଙ୍କ ଦ୍ୱାରା ରଚିତ ପରମ ପବିତ୍ର ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି ସମ୍ପୂର୍ଣ୍ଣ ହେଲା।",
        wordMeanings: [
          { word: "ଇତି", meaning: "ଏହିପରି" },
          { word: "ଶ୍ରୀମଦ୍ ଆନନ୍ଦତୀର୍ଥ ଭଗବତ୍ ପାଦାଚାର୍ଯ୍ୟ", meaning: "ପରମହଂସ ଶ୍ରୀପାଦ ମଧ୍ୱାଚାର୍ଯ୍ୟଙ୍କ" },
          { word: "ବିରଚିତା", meaning: "ରଚିତ" },
          { word: "ଶ୍ରୀ ନରସିଂହ ନଖସ୍ତୁତିଃ", meaning: "ଭଗବାନ ଶ୍ରୀନରସିଂହଙ୍କ ନଖ ସ୍ତୁତି" },
          { word: "ସମ୍ପୂର୍ଣ୍ଣମ୍", meaning: "ସମ୍ପୂର୍ଣ୍ଣ ହେଲା" }
        ]
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
