const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const structuredContent = {
  "verses": [
    {
      "id": 0,
      "lyric": "ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ\nହେ ଗୋବିନ୍ଦ ରାଖୋ ଶରଣ\nଅବ୍ ତୋ ଜୀବନ ହାରେ ।।",
      "translation": "ହେ ଗୋବିନ୍ଦ! ହେ ଗୋପାଳ! ହେ ଗୋବିନ୍ଦ, ମୋତେ ଆପଣଙ୍କ ଶରଣରେ ରଖନ୍ତୁ, କାରଣ ମୁଁ ମୋ ଜୀବନର ଯୁଦ୍ଧରେ ହାରିଯାଇଛି।",
      "wordMeanings": [
        { "word": "ହେ ଗୋବିନ୍ଦ", "meaning": "ହେ ଗୋବିନ୍ଦ!" },
        { "word": "ହେ ଗୋପାଳ", "meaning": "ହେ ଗୋପାଳ!" },
        { "word": "ହେ ଗୋବିନ୍ଦ", "meaning": "ହେ ଗୋବିନ୍ଦ!" },
        { "word": "ରାଖୋ", "meaning": "ରଖନ୍ତୁ" },
        { "word": "ଶରଣ", "meaning": "ଶରଣରେ" },
        { "word": "ଅବ ତୋ", "meaning": "ଏବେ ତ" },
        { "word": "ଜୀବନ", "meaning": "ଜୀବନର (ଯୁଦ୍ଧରେ)" },
        { "word": "ହାରେ", "meaning": "ହାରିଯାଇଛି।" }
      ]
    },
    {
      "id": 1,
      "lyric": "ନୀର ପୀବନ ହେତୁ ଗୟୋ\nସିନ୍ଧୁ କେ କିନାରେ\nସିନ୍ଧୁ ବୀଚ ବସତ ଗ୍ରାହ\nଚରଣ ଧରି ପଛାରେ ।।",
      "translation": "ଜଳପାନ କରିବା ପାଇଁ ମୁଁ ନଦୀକୂଳକୁ ଯାଇଥିଲି। ନଦୀ ମଝିରେ ବାସ କରୁଥିବା କୁମ୍ଭୀରଟି ମୋ ପାଦକୁ ଧରି ଟାଣିବାକୁ ଲାଗିଲା।",
      "wordMeanings": [
        { "word": "ନୀର", "meaning": "ଜଳ" },
        { "word": "ପୀବନ", "meaning": "ପିଇବା" },
        { "word": "ହେତୁ", "meaning": "ପାଇଁ / ସକାଶେ" },
        { "word": "ଗୟୋ", "meaning": "ଗଲି" },
        { "word": "ସିନ୍ଧୁ", "meaning": "ସମୁଦ୍ର / ନଦୀ" },
        { "word": "କେ", "meaning": "ର" },
        { "word": "କିନାରେ", "meaning": "କୂଳକୁ" },
        { "word": "ସିନ୍ଧୁ", "meaning": "ନଦୀ" },
        { "word": "ବୀଚ", "meaning": "ମଝିରେ" },
        { "word": "ବସତ", "meaning": "ବାସ କରୁଥିବା" },
        { "word": "ଗ୍ରାହ", "meaning": "କୁମ୍ଭୀର" },
        { "word": "ଚରଣ", "meaning": "ପାଦକୁ" },
        { "word": "ଧରି", "meaning": "ଧରି" },
        { "word": "ପଛାରେ", "meaning": "କଚାଡ଼ିଲା / ଭିଡ଼ିଲା।" }
      ]
    },
    {
      "id": 2,
      "lyric": "ଚାର ପ୍ରହର ଯୁଦ୍ଧ ଭୟୋ\nଲୈ ଗୟୋ ମଞ୍ଝଧାରେ\nନାକ କାନ ଡୁବନ ଲାଗେ\nକୃଷ୍ଣ କୋ ପୁକାରେ ।।",
      "translation": "ଚାରି ପ୍ରହର ପର୍ଯ୍ୟନ୍ତ ଯୁଦ୍ଧ ଚାଲିଲା ଏବଂ ସେ ମୋତେ ନଦୀର ଗଭୀର ସ୍ରୋତ ମଧ୍ୟକୁ ଟାଣି ନେଲା। ଯେତେବେଳେ ମୋର ନାକ ଓ କାନ ପାଣିରେ ବୁଡ଼ିବାକୁ ଲାଗିଲା, ମୁଁ ସେତେବେଳେ ପ୍ରଭୁ କୃଷ୍ଣଙ୍କୁ ସାହାଯ୍ୟ ପାଇଁ ଡାକିଲି।",
      "wordMeanings": [
        { "word": "ଚାର", "meaning": "ଚାରି" },
        { "word": "ପ୍ରହର", "meaning": "ପ୍ରହର (ସମୟର ଏକକ)" },
        { "word": "ଯୁଦ୍ଧ", "meaning": "ଯୁଦ୍ଧ" },
        { "word": "ଭୟୋ", "meaning": "ହେଲା" },
        { "word": "ଲୈ", "meaning": "ନେଇ" },
        { "word": "ଗୟୋ", "meaning": "ଗଲା" },
        { "word": "ମଞ୍ଝଧାରେ", "meaning": "ନଦୀର ମଝି ସ୍ରୋତକୁ" },
        { "word": "ନାକ", "meaning": "ନାକ" },
        { "word": "କାନ", "meaning": "କାନ" },
        { "word": "ଡୁବନ", "meaning": "ବୁଡ଼ିବାକୁ" },
        { "word": "ଲାଗେ", "meaning": "ଲାଗିଲା" },
        { "word": "କୃଷ୍ଣ", "meaning": "କୃଷ୍ଣଙ୍କୁ" },
        { "word": "କୋ", "meaning": "କୁ" },
        { "word": "ପୁକାରେ", "meaning": "ଡାକିଲି।" }
      ]
    },
    {
      "id": 3,
      "lyric": "ଦ୍ୱାରକା ମେଁ ଶବ୍ଦ ଭୟୋ\nଶୋର ଭୟୋ ଭାରେ\nଶଙ୍ଖ ଚକ୍ର ଗଦା ପଦ୍ମ\nଗରୁଡ଼ ଲେୟିଁ ସିଧାରେ ।।",
      "translation": "ମୋର ଚିତ୍କାର ଦ୍ୱାରକାରେ ପହଞ୍ଚିଲା ଏବଂ ସେଠାରେ ଏକ ବଡ଼ କୋଳାହଳ ସୃଷ୍ଟି ହେଲା। ପ୍ରଭୁ ତତ୍କ୍ଷଣାତ୍ ନିଜର ଶଙ୍ଖ, ଚକ୍ର, ଗଦା ଓ ପଦ୍ମ ଧାରଣ କରି ଗରୁଡ଼ ପୃଷ୍ଠରେ ବିଜେ କଲେ।",
      "wordMeanings": [
        { "word": "ଦ୍ୱାରକା", "meaning": "ଦ୍ୱାରକା" },
        { "word": "ମେ", "meaning": "ରେ" },
        { "word": "ଶବ୍ଦ", "meaning": "ଶବ୍ଦ / ଡାକ" },
        { "word": "ଭୟୋ", "meaning": "ହେଲା" },
        { "word": "ଶୋର", "meaning": "କୋଳାହଳ" },
        { "word": "ଭୟୋ", "meaning": "ହେଲା" },
        { "word": "ଭାରେ", "meaning": "ବହୁତ" },
        { "word": "ଶଙ୍ଖ", "meaning": "ଶଙ୍ଖ" },
        { "word": "ଚକ୍ର", "meaning": "ଚକ୍ର" },
        { "word": "ଗଦା", "meaning": "ଗଦା" },
        { "word": "ପଦ୍ମ", "meaning": "ପଦ୍ମ" },
        { "word": "ଗରୁଡ଼", "meaning": "ଗରୁଡ଼" },
        { "word": "ଲେୟିଁ", "meaning": "ନେଇ" },
        { "word": "ସିଧାରେ", "meaning": "ବାହାରିଲେ।" }
      ]
    },
    {
      "id": 4,
      "lyric": "ସୂର କହ ଶ୍ୟାମ ସୁନୋ\nଶରଣ ହୈ ତିହାରେ\nଅବ୍ କି ବାର ପାର କରୋ\nନନ୍ଦ କେ ଦୁଲାରେ ।।",
      "translation": "ସୂରଦାସ କହନ୍ତି, \"ହେ ଶ୍ୟାମ! ମୋର ପ୍ରାର୍ଥନା ଶୁଣନ୍ତୁ, ମୁଁ ଆପଣଙ୍କ ଶରଣାଗତ। ହେ ନନ୍ଦ-ଦୁଲାଳ! ଏହି ଥର ମୋତେ ଏହି ସଂସାର ରୂପୀ ସାଗରରୁ ପାର କରିଦିଅନ୍ତୁ।\"",
      "wordMeanings": [
        { "word": "ସୂର", "meaning": "ସୂରଦାସ" },
        { "word": "କହ", "meaning": "କହନ୍ତି" },
        { "word": "ଶ୍ୟାମ", "meaning": "ହେ ଶ୍ୟାମସୁନ୍ଦର" },
        { "word": "ସୁନୋ", "meaning": "ଶୁଣନ୍ତୁ" },
        { "word": "ଶରଣ", "meaning": "ଶରଣାଗତ" },
        { "word": "ହୈ", "meaning": "ଅଛି" },
        { "word": "ତିହାରେ", "meaning": "ଆପଣଙ୍କର" },
        { "word": "ଅବ", "meaning": "ଏବେ" },
        { "word": "କି", "meaning": "ର" },
        { "word": "ବାର", "meaning": "ଥର" },
        { "word": "ପାର", "meaning": "ଉଦ୍ଧାର" },
        { "word": "କରୋ", "meaning": "କରନ୍ତୁ" },
        { "word": "ନନ୍ଦ", "meaning": "ନନ୍ଦଙ୍କର" },
        { "word": "କେ", "meaning": "ର" },
        { "word": "ଦୁଲାରେ", "meaning": "ଗେହ୍ଲା ପୁଅ / ଦୁଲାଳ।" }
      ]
    }
  ]
};

async function upsertSong() {
  console.log('🚀 Upserting "He Govinda He Gopala He Govinda" to Supabase...');

  const { error } = await supabase
    .from('songs')
    .upsert({
      id: 'song-hegovindahegopala',
      title: 'ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ ହେ ଗୋବିନ୍ଦ (He Govinda He Gopala He Govinda)',
      title_odia: 'ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ ହେ ଗୋବିନ୍ଦ',
      title_english: 'He Govinda He Gopala He Govinda',
      category: 'Songs',
      type: 'html',
      description: 'ସୂର ଦାସଙ୍କ ଏକ ଅତି ଭାବପୂର୍ଣ୍ଣ ପ୍ରାର୍ଥନା (ଗଜେନ୍ଦ୍ର ମୋକ୍ଷ ଆଧାରିତ) |',
      author: 'Sura Dasa',
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
