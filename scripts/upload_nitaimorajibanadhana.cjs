const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const songData = {
  id: "song-nitaimorajibanadhana",
  title: "ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି (Nitai Mora Jibana Dhana Nitai Mora Jati)",
  title_odia: "ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି",
  title_english: "Nitai Mora Jibana Dhana Nitai Mora Jati",
  author: "Locana Dasa Thakura",
  category: "Songs",
  type: "html",
  status: "COMPLETED",
  verified: true,
  published: true,
  description: "ଶ୍ରୀଳ ଲୋଚନ ଦାସ ଠାକୁରଙ୍କ ବିରଚିତ ପରମ କରୁଣାମୟ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଚନ୍ଦ୍ରଙ୍କ ମହିମାସୂଚକ ଭଜନ ।",
  audio_url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FmuO7xOqQ1LlY.128.mp3",
  vocalist: "Vaishnavas",
  audio_versions: [
    {
      label: "Vaishnavas",
      url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FmuO7xOqQ1LlY.128.mp3"
    },
    {
      label: "HG Vishakha Mataji",
      url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FNitai%20Mor.mp3"
    }
  ],
  tags: [
    "Nitai Mora Jibana Dhana",
    "Nitai Mora Jibana Dhana Nitai Mora Jati",
    "Nitai Mora Jati",
    "Nitai Mor",
    "Locana Dasa Thakura",
    "ନିତାଇ ମୋର ଜୀବନ ଧନ"
  ],
  structured_content: {
    id: "song-nitaimorajibanadhana",
    title: "ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି (Nitai Mora Jibana Dhana Nitai Mora Jati)",
    title_odia: "ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି",
    title_english: "Nitai Mora Jibana Dhana Nitai Mora Jati",
    author: "Locana Dasa Thakura",
    category: "Songs",
    reference_url: "https://vsnectar.web.app/home/songs/Nitai%20Mora%20Jibana%20Dhana%20Nitai%20Mora%20Jati_More%20Songs_6",
    verses: [
      {
        id: 1,
        lyric: "ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି ।\nନିତାଇ ବିହନେ ମୋର ଆର ନାହି ଗତି ।। ୧ ।।",
        translation: "ଶ୍ରୀମନ୍ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁ ହିଁ ମୋ ଜୀବନର ସର୍ବସ୍ୱ ଧନ ଏବଂ ନିତାଇ ହିଁ ମୋର କୂଳ-ଗୋତ୍ର ତଥା ପ୍ରକୃତ ଜାତି। ନିତାଇଙ୍କର ଶ୍ରୀଚରଣ ବିନା ଏହି ସଂସାରରେ ମୋର ଅନ୍ୟ କୌଣସି ଗତି ବା ଆଶ୍ରୟ ନାହିଁ।",
        wordMeanings: [
          { word: "ନିତାଇ", meaning: "ପରମ କାରୁଣିକ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ" },
          { word: "ମୋର", meaning: "ମୋହର" },
          { word: "ଜୀବନ ଧନ", meaning: "ପ୍ରାଣର ସର୍ବସ୍ୱ ଧନସମ୍ପତ୍ତି" },
          { word: "ଜାତି", meaning: "କୂଳ-ଗୋତ୍ର ବା ପ୍ରକୃତ ସମ୍ବନ୍ଧ" },
          { word: "ନିତାଇ ବିହନେ", meaning: "ଶ୍ରୀ ନିତାଇଙ୍କ ବିନା" },
          { word: "ଆର", meaning: "ଅନ୍ୟ କୌଣସି" },
          { word: "ନାହି ଗତି", meaning: "ସଦ୍‌ଗତି ବା ଆଶ୍ରୟ ନାହିଁ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 2,
        lyric: "ସଂସାର ସୁଖେର ମୁଖେ ତୁଲେ ଦିବ ଛାଇ ।\nନଗରେ ମାଗିୟା ଖାବ ଗାଇବ ନିତାଇ ।। ୨ ।।",
        translation: "ଏହି ଅସାର ଜଡ଼ ସାଂସାରିକ ସୁଖର ମୁହଁରେ ମୁଁ ପାଉଁଶ ଫିଙ୍ଗିଦେବି (ସମସ୍ତ ଭୋଗବାସନାକୁ ଧିକ୍କାର କରିବି)। ନଗରେ ନଗରେ କେବଳ ଭିକ୍ଷା କରି ଯାହା ମିଳିବ ତାହା ଖାଇ ଜୀବନ ଧାରଣ କରିବି, କିନ୍ତୁ ସର୍ବଦା ନିତାଇଙ୍କ ଶ୍ରୀନାମ ହିଁ ଗାନ କରିବି।",
        wordMeanings: [
          { word: "ସଂସାର ସୁଖେର ମୁଖେ", meaning: "ଜାଗତିକ ଭୋଗ-ସୁଖର ମୁହଁରେ" },
          { word: "ତୁଲେ ଦିବ ଛାଇ", meaning: "ପାଉଁଶ ଛାଟିଦେବି (ତ୍ୟାଗ କରି ଧିକ୍କାର କରିବି)" },
          { word: "ନଗରେ", meaning: "ନଗର ଓ ଗ୍ରାମରେ" },
          { word: "ମାଗିୟା ଖାବ", meaning: "ଭିକ୍ଷା କରି କେବଳ ଉଦର ପୋଷଣ କରିବି" },
          { word: "ଗାଇବ ନିତାଇ", meaning: "ଶ୍ରୀ ନିତାଇଙ୍କ ନାମ-ଗୁଣ କୀର୍ତ୍ତନ କରିବି" }
        ],
        status: "COMPLETED"
      },
      {
        id: 3,
        lyric: "ଯେ ଦେଶେ ନିତାଇ ନାଇ ସେ ଦେଶେ ନା ଯାବ ।\nନିତାଇ ବିମୁଖ ଜନାର ମୁଖ ନା ହେରିବ ।। ୩ ।।",
        translation: "ଯେଉଁ ଦେଶ ବା ସ୍ଥାନରେ ପ୍ରଭୁ ନିତାଇଙ୍କ ଚର୍ଚ୍ଚା ନାହିଁ, ମୁଁ କଦାପି ସେହି ଦେଶକୁ ଯିବି ନାହିଁ। ଯେଉଁ ବ୍ୟକ୍ତି ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କ ପ୍ରତି ବିମୁଖ, ତାହାର ମୁହଁ ମଧ୍ୟ ମୁଁ କେବେ ଦେଖିବି ନାହିଁ।",
        wordMeanings: [
          { word: "ଯେ ଦେଶେ", meaning: "ଯେଉଁ ସ୍ଥାନ ବା ଭୂଖଣ୍ଡରେ" },
          { word: "ନିତାଇ ନାଇ", meaning: "ଶ୍ରୀ ନିତାଇଙ୍କ ସ୍ମରଣ ବା ଭକ୍ତ ନାହାନ୍ତି" },
          { word: "ସେ ଦେଶେ", meaning: "ସେହି ସ୍ଥାନକୁ" },
          { word: "ନା ଯାବ", meaning: "ମୁଁ ଯିବି ନାହିଁ" },
          { word: "ନିତାଇ ବିମୁଖ ଜନାର", meaning: "ଶ୍ରୀ ନିତାଇଙ୍କ ପ୍ରତି ଅନାଦର ପ୍ରଦର୍ଶନ କରୁଥିବା ବ୍ୟକ୍ତିର" },
          { word: "ମୁଖ ନା ହେରିବ", meaning: "ମୁହଁ କଦାପି ଦର୍ଶନ କରିବି ନାହିଁ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 4,
        lyric: "ଗଙ୍ଗା ଯାର ପଦ ଜଲ ହର ଶିରେ ଧରେ ।\nହେନ ନିତାଇ ନା ଭଜିୟା ଦୁଃଖ ପେୟେ ମୋରେ ।। ୪ ।।",
        translation: "ଯାହାଙ୍କ ଶ୍ରୀଚରଣ ଧୌତ ଜଳକୁ ସ୍ୱୟଂ ଦେବାଦିଦେବ ମହାଦେବ ନିଜ ମସ୍ତକରେ ଶ୍ରଦ୍ଧାପୂର୍ବକ ଧାରଣ କରନ୍ତି (ଗଙ୍ଗା ରୂପରେ), ସେହିଭଳି ପରମ ପାବନ ଶ୍ରୀ ନିତାଇଙ୍କୁ ଭଜନ ନ କରି ମୂଢ଼ ଜୀବ କେବଳ ସଂସାର ଦୁଃଖ ଓ ଯନ୍ତ୍ରଣା ଭୋଗି ବିନାଶ ହୋଇଯାଏ।",
        wordMeanings: [
          { word: "ଗଙ୍ଗା", meaning: "ପବିତ୍ର ପତିତପାବନୀ ଶ୍ରୀ ଗଙ୍ଗାଜଳ" },
          { word: "ଯାର ପଦ ଜଲ", meaning: "ଯେଉଁ ପ୍ରଭୁ ନିତାଇଙ୍କ ଚରଣାମୃତ" },
          { word: "ହର ଶିରେ ଧରେ", meaning: "ଭଗବାନ ଶିବ ନିଜ ମସ୍ତକରେ ଧାରଣ କରନ୍ତି" },
          { word: "ହେନ ନିତାଇ", meaning: "ଏପରି ପରମ କୃପାମୟ ନିତାଇଙ୍କୁ" },
          { word: "ନା ଭଜିୟା", meaning: "ଭଜନ ଓ ଆରାଧନା ନ କରି" },
          { word: "ଦୁଃଖ ପେୟେ ମୋରେ", meaning: "କେବଳ ଦୁଃଖ-କଷ୍ଟ ପାଇ ମୃତ୍ୟୁବରଣ କରେ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 5,
        lyric: "ଲୋଚନ ବୋଲେ ମୋର ନିତାଇ ଯେବା ନାହି ମାନେ ।\nଅନଳ ଭେଜାଇ ତାର ମାଝ ମୁଖଖାନେ ।। ୫ ।।",
        translation: "ଲୋଚନ ଦାସ ଠାକୁର କହନ୍ତି— ଯେଉଁ ଦୁର୍ଭାଗା ମୋ’ ପ୍ରାଣର ନିତାଇଙ୍କୁ ସ୍ୱୀକାର କରେ ନାହିଁ ବା ତାଙ୍କର ମହିମା ମାନେ ନାହିଁ, ତାହାର ମୁହଁ ମଧ୍ୟରେ ଅଗ୍ନି ପ୍ରବେଶ କରାଇଦେବା ଉଚିତ୍ (ଅର୍ଥାତ୍ ନିତାଇ-ବିମୁଖ ମୁଖ କେବଳ ଅନଳର ଦହନ ଯୋଗ୍ୟ)।",
        wordMeanings: [
          { word: "ଲୋଚନ ବୋଲେ", meaning: "ଭକ୍ତକବି ଶ୍ରୀ ଲୋଚନ ଦାସ କହନ୍ତି" },
          { word: "ମୋର ନିତାଇ", meaning: "ମୋର ପ୍ରିୟ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦଙ୍କୁ" },
          { word: "ଯେବା ନାହି ମାନେ", meaning: "ଯେଉଁ ଅଧମ ବ୍ୟକ୍ତି ସ୍ୱୀକାର କରେ ନାହିଁ" },
          { word: "ଅନଳ ଭେଜାଇ", meaning: "ନିଆଁ ବା ଅଗ୍ନି ପ୍ରବେଶ କରାଉ" },
          { word: "ତାର ମାଝ ମୁଖଖାନେ", meaning: "ତାହାର ମୁହଁ ଭିତରକୁ" }
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
