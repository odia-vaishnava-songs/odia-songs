const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const structuredContent = {
  "verses": [
    {
      "id": 1,
      "lyric": "ହରି ହେ ଦୟାଲ ମୋର ଜୟ ରାଧା-ନାଥ\nବାରୋ ବାରୋ ଏଇ-ବାରୋ ଲୋହୋ ନିଜ ସାଥ ।।",
      "translation": "ହେ ହରି! ହେ ମୋର ଦୟାମୟ ପ୍ରଭୁ! ହେ ରାଧା-ନାଥ, ଆପଣଙ୍କର ଜୟ ହେଉ। ମୁଁ ବାରମ୍ବାର ଆପଣଙ୍କୁ ପ୍ରାର୍ଥନା କରିଛି, ଏବଂ ଏହି ଥର ମଧ୍ୟ ମୋତେ ନିଜର କରି ସାଥିରେ ନେଇଯିବାକୁ ନିବେଦନ କରୁଛି।",
      "wordMeanings": [
        { "word": "ହରି ହେ", "meaning": "ହେ ହରି!" },
        { "word": "ଦୟାଲ ମୋର", "meaning": "ମୋର ଦୟାଳୁ ପ୍ରଭୁ!" },
        { "word": "ଜୟ ରାଧା-ନାଥ", "meaning": "ରାଧାଙ୍କ ପ୍ରଭୁ ଆପଣଙ୍କର ଜୟ ହେଉ!" },
        { "word": "ବାରୋ ବାରୋ", "meaning": "ବାରମ୍ବାର" },
        { "word": "ଏଇ-ବାରୋ", "meaning": "ଏହି ଥର ମଧ୍ୟ" },
        { "word": "ଲୋହୋ", "meaning": "ଗ୍ରହଣ କରନ୍ତୁ / ନିଅନ୍ତୁ" },
        { "word": "ନିଜ ସାଥ", "meaning": "ନିଜ ସହିତ / ନିଜର କରି।" }
      ]
    },
    {
      "id": 2,
      "lyric": "ବହୁ ଯୋନି ଭ୍ରମି' ନାଥ! ଲୋଇନୁ ଶରଣ\nନିଜ-ଗୁଣେ କୃପା କରୋ' ଅଧମ-ତାରଣ ।।",
      "translation": "ହେ ପ୍ରଭୁ! ଅନେକ ଯୋନିରେ ଜନ୍ମ ନେଇ ଭ୍ରମଣ କରିବା ପରେ ମୁଁ ଆଜି ଆପଣଙ୍କ ଶରଣାଗତ ହୋଇଛି। ହେ ପତିତପାବନ, ଆପଣଙ୍କ ନିଜ ଗୁଣରେ ଏହି ଅଧମ ଦାସକୁ ଉଦ୍ଧାର କରନ୍ତୁ।",
      "wordMeanings": [
        { "word": "ବହୁ ଯୋନି", "meaning": "ଅନେକ ଜୀବ ଶରୀରରେ" },
        { "word": "ଭ୍ରମି'", "meaning": "ଭ୍ରମଣ କରି" },
        { "word": "ନାଥ", "meaning": "ହେ ପ୍ରଭୁ!" },
        { "word": "ଲୋଇନୁ ଶରଣ", "meaning": "ଆପଣଙ୍କ ଶରଣ ନେଇଛି" },
        { "word": "ନିଜ-ଗୁଣେ", "meaning": "ଆପଣଙ୍କ ନିଜ ଗୁଣ (ଦୟା) ଯୋଗୁଁ" },
        { "word": "କୃପା କରୋ'", "meaning": "କୃପା କରନ୍ତୁ" },
        { "word": "ଅଧମ-ତାରଣ", "meaning": "ଏହି ନୀଚ ଜୀବର ଉଦ୍ଧାରକାରୀ।" }
      ]
    },
    {
      "id": 3,
      "lyric": "ଜଗତ-କାରଣ ତୁମି ଜଗତ-ଜୀବନ\nତୋମା ଛାଡ଼ା କାର ନାହି ହେ ରାଧା-ରମଣ ।।",
      "translation": "ଆପଣ ହିଁ ଏହି ଜଗତର ସୃଷ୍ଟିର କାରଣ ଏବଂ ସମସ୍ତଙ୍କର ଜୀବନ। ହେ ରାଧା-ରମଣ! ଆପଣଙ୍କୁ ବିନା ଏହି ସଂସାରରେ କାହାରି କୌଣସି ଆଶ୍ରୟ ନାହିଁ।",
      "wordMeanings": [
        { "word": "ଜଗତ-କାରଣ ତୁମି", "meaning": "ଆପଣ ଜଗତର କାରଣ" },
        { "word": "ଜଗତ-ଜୀବନ", "meaning": "ଜଗତର ଜୀବନ ସ୍ୱରୂପ" },
        { "word": "ତୋମା ଛାଡ଼ା", "meaning": "ଆପଣଙ୍କୁ ବିନା" },
        { "word": "କାର ନାହି", "meaning": "କାହାରି କିଛି ନାହିଁ" },
        { "word": "ହେ ରାଧା-ରମଣ", "meaning": "ହେ ରାଧାଙ୍କ ପ୍ରିୟତମ!" }
      ]
    },
    {
      "id": 4,
      "lyric": "ଭୁବନ-ମଙ୍ଗଳ ତୁମି ଭୁବନେର ପତି\nତୁମି ଉପେଖିଲେ ନାଥ, କି ହୋଇବେ ଗତି ।।",
      "translation": "ଆପଣ ଜଗତର ମଙ୍ଗଳକର୍ତ୍ତା ଏବଂ ସମଗ୍ର ବ୍ରହ୍ମାଣ୍ଡର ସ୍ୱାମୀ। ହେ ନାଥ! ଯଦି ଆପଣ ମୋତେ ତ୍ୟାଗ କରିବେ ବା ଅବହେଳା କରିବେ, ତେବେ ମୋର ଗତି କଣ ହେବ?",
      "wordMeanings": [
        { "word": "ଭୁବନ-ମଙ୍ଗଳ ତୁମି", "meaning": "ଆପଣ ଜଗତର ମଙ୍ଗଳକାରୀ" },
        { "word": "ଭୁବନେର ପତି", "meaning": "ସମଗ୍ର ଭୁବନର ସ୍ୱାମୀ" },
        { "word": "ତୁମି ଉପେଖିଲେ", "meaning": "ଯଦି ଆପଣ ମୋତେ ଅବହେଳା କରିବେ" },
        { "word": "ନାଥ", "meaning": "ହେ ପ୍ରଭୁ!" },
        { "word": "କି ହୋଇବେ ଗତି", "meaning": "ମୋର କି ଦଶା ହେବ।" }
      ]
    },
    {
      "id": 5,
      "lyric": "ଭାବିୟା ଦେଖିନୁ ଏଇ ଜଗତ-ମାଝାରେ\nତୋମା ବିନା କେହୋ ନାହି ଏ ଦାସେ ଉଦ୍ଧାରେ ।।",
      "translation": "ମୁଁ ଏହି ସଂସାରରେ ବହୁତ ଚିନ୍ତା କରି ଦେଖିଲି ଯେ, ଆପଣଙ୍କ ବିନା ଏହି ଦାସକୁ ଉଦ୍ଧାର କରିବା ପାଇଁ ଆଉ କେହି ସମର୍ଥ ନୁହଁନ୍ତି।",
      "wordMeanings": [
        { "word": "ଭାବିୟା", "meaning": "ଚିନ୍ତା କରି" },
        { "word": "ଦେଖିନୁ", "meaning": "ଦେଖିଲି" },
        { "word": "ଏଇ ଜଗତ-ମାଝାରେ", "meaning": "ଏହି ସଂସାର ଭିତରେ" },
        { "word": "ତୋମା ବିନା", "meaning": "ଆପଣଙ୍କୁ ଛାଡ଼ି" },
        { "word": "କେହୋ ନାହି", "meaning": "କେହି ନାହାନ୍ତି" },
        { "word": "ଏ ଦାସେ ଉଦ୍ଧାରେ", "meaning": "ଏହି ଦାସକୁ ଉଦ୍ଧାର କରିବା ପାଇଁ।" }
      ]
    }
  ]
};

async function upsertSong() {
  console.log('🚀 Upserting "Hari He Doyal Mor" to Supabase...');

  const { error } = await supabase
    .from('songs')
    .upsert({
      id: 'song-harihedoyalmor',
      title: 'ହରି ହେ ଦୟାଲ ମୋର (Hari He Doyal Mor)',
      title_odia: 'ହରି ହେ ଦୟାଲ ମୋର',
      title_english: 'Hari He Doyal Mor',
      category: 'Songs',
      type: 'html',
      description: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁରଙ୍କ ଏକ ଅତି ସୁନ୍ଦର ଦୀନତାମୟୀ ପ୍ରାର୍ଥନା |',
      author: 'Bhaktivinoda Thakura',
      published: true,
      status: 'COMPLETED',
      structured_content: structuredContent
    }, { onConflict: 'id' });

  if (error) {
    console.error('❌ Failed to upsert song:', error.message);
  } else {
    console.log('✅ Successfully upserted to Supabase!');
  }
}

upsertSong();
