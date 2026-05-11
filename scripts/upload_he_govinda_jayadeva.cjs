const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const structuredContent = {
  "verses": [
    {
      "id": 1,
      "lyric": "ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ\nକେଶବ ମାଧବ ଦୀନ-ଦୟାଲ ।।",
      "translation": "ହେ ଗୋବିନ୍ଦ! ହେ ଗୋପାଳ! ହେ ସୁନ୍ଦର କେଶଧାରୀ କେଶବ! ହେ ମାଧବ! ଆପଣ ଅସହାୟ ଓ ପତିତ ଜୀବମାନଙ୍କ ପ୍ରତି ଅତି ଦୟାଳୁ ଅଟନ୍ତି।",
      "wordMeanings": [
        { "word": "ହେ ଗୋବିନ୍ଦ", "meaning": "ଗାଈମାନଙ୍କୁ ଆନନ୍ଦ ପ୍ରଦାନକାରୀ" },
        { "word": "ହେ ଗୋପାଳ", "meaning": "ଗାଈମାନଙ୍କର ରକ୍ଷକ" },
        { "word": "କେଶବ", "meaning": "ସୁନ୍ଦର କେଶଧାରୀ ପ୍ରଭୁ" },
        { "word": "ମାଧବ", "meaning": "ସୌଭାଗ୍ୟର ଅଧିପତି (ଲକ୍ଷ୍ମୀପତି)" },
        { "word": "ଦୀନ-ଦୟାଲ", "meaning": "ଦୀନଜନଙ୍କ ପ୍ରତି ଦୟାଳୁ।" }
      ]
    },
    {
      "id": 2,
      "lyric": "ତୁମି ପରମ ଦୟାଲ ପ୍ରଭୁ, ପରମ ଦୟାଲ\nକେଶବ ମାଧବ ଦୀନ ଦୟାଲ ।।",
      "translation": "ହେ ପ୍ରଭୁ! ଆପଣ ପରମ ଦୟାଳୁ, ଅତିଶୟ ଦୟାମୟ! ହେ କେଶବ! ହେ ମାଧବ! ହେ ଦୀନବନ୍ଧୁ!",
      "wordMeanings": [
        { "word": "ତୁମି", "meaning": "ଆପଣ" },
        { "word": "ପରମ", "meaning": "ପରମ / ସର୍ବଶ୍ରେଷ୍ଠ" },
        { "word": "ଦୟାଲ", "meaning": "ଦୟାଳୁ" },
        { "word": "ପ୍ରଭୁ", "meaning": "ପ୍ରଭୁ" },
        { "word": "ପରମ", "meaning": "ପରମ" },
        { "word": "ଦୟାଲ", "meaning": "ଦୟାଳୁ" },
        { "word": "କେଶବ", "meaning": "କେଶବ" },
        { "word": "ମାଧବ", "meaning": "ମାଧବ" },
        { "word": "ଦୀନ", "meaning": "ଦୀନ" },
        { "word": "ଦୟାଲ", "meaning": "ଦୟାଳୁ।" }
      ]
    },
    {
      "id": 3,
      "lyric": "ପୀତ-ବସନ ପରି ମୟୂରେର ଶିଖ ଧୋରି\nମୂରଲୀର ବାଣୀ-ତୁଲେ ବୋଲେ ରାଧା-ନାମ ।।",
      "translation": "ଆପଣ ପୀତାମ୍ବର ଧାରଣ କରିଛନ୍ତି ଏବଂ ମସ୍ତକରେ ମୟୂର ପୁଚ୍ଛ ଶୋଭା ପାଉଛି। ଆପଣ ନିଜ ମୁରଲୀ ବଜାଇ ସେଥିରେ ଶ୍ରୀରାଧାଙ୍କ ନାମ ହିଁ ଗାନ କରୁଛନ୍ତି।",
      "wordMeanings": [
        { "word": "ପୀତ-ବସନ", "meaning": "ହଳଦିଆ ବସ୍ତ୍ର" },
        { "word": "ପରି", "meaning": "ପରିଧାନ କରି" },
        { "word": "ମୟୂରେର", "meaning": "ମୟୂରର" },
        { "word": "ଶିଖ", "meaning": "ଚୂଳ / ପକ୍ଷୀ" },
        { "word": "ଧୋରି", "meaning": "ଧାରଣ କରି" },
        { "word": "ମୂରଲୀର", "meaning": "ମୁରଲୀର" },
        { "word": "ବାଣୀ-ତୁଲେ", "meaning": "ଶବ୍ଦ ମାଧ୍ୟମରେ" },
        { "word": "ବୋଲେ", "meaning": "ବୋଲୁଛନ୍ତି / କହୁଛନ୍ତି" },
        { "word": "ରାଧା-ନାମ", "meaning": "ରାଧାଙ୍କ ନାମ।" }
      ]
    },
    {
      "id": 4,
      "lyric": "ତୁମି ମଦେର ଗୋପାଳ ପ୍ରଭୁ, ମଦେର ଗୋପାଳ\nକେଶବ ମାଧବ ଦୀନ-ଦୟାଲ ।।",
      "translation": "ହେ ପ୍ରଭୁ! ଆପଣ ଅତି ମନୋହର ଏବଂ ଆନନ୍ଦଦାୟକ ଗୋପାଳ ଅଟନ୍ତି। ହେ କେଶବ! ହେ ମାଧବ! ହେ ଦୀନଦୟାଳୁ!",
      "wordMeanings": [
        { "word": "ତୁମି", "meaning": "ଆପଣ" },
        { "word": "ମାଦେର", "meaning": "ଆନନ୍ଦଦାୟକ" },
        { "word": "ଗୋପାଳ", "meaning": "ଗୋପାଳ" },
        { "word": "ପ୍ରଭୁ", "meaning": "ପ୍ରଭୁ" },
        { "word": "ମାଦେର", "meaning": "ଆନନ୍ଦଦାୟକ" },
        { "word": "ଗୋପାଳ", "meaning": "ଗୋପାଳ" },
        { "word": "କେଶବ", "meaning": "କେଶବ" },
        { "word": "ମାଧବ", "meaning": "ମାଧବ" },
        { "word": "ଦୀନ-ଦୟାଲ", "meaning": "ଦୀନ-ଦୟାଳୁ।" }
      ]
    },
    {
      "id": 5,
      "lyric": "ଭବ-ଭୟ-ଭଞ୍ଜନ ଶ୍ରୀ ମଧୁ-ସୂଦନ\n비ପଦ-ଭଞ୍ଜନ ତୁମି ନାରାୟଣ ।।",
      "translation": "ଆପଣ ଜନ୍ମ-ମୃତ୍ୟୁ ରୂପକ ସଂସାରର ଭୟକୁ ଦୂର କରନ୍ତି ଏବଂ ଆପଣ ହିଁ ମଧୁ ଅସୁରକୁ ବଧ କରିଥିବା ମଧୁସୂଦନ। ହେ ନାରାୟଣ! ଆପଣ ସମସ୍ତ ବିପଦକୁ ନାଶ କରନ୍ତି ଏବଂ ସମସ୍ତ ଆତ୍ମାର ଏକମାତ୍ର ଆଶ୍ରୟ ଅଟନ୍ତି।",
      "wordMeanings": [
        { "word": "ଭବ", "meaning": "ସଂସାର" },
        { "word": "ଭୟ", "meaning": "ଭୟ" },
        { "word": "ଭଞ୍ଜନ", "meaning": "비ନାଶକାରୀ" },
        { "word": "ଶ୍ରୀ ମଧୁ-ସୂଦନ", "meaning": "ମଧୁ ଅସୁରର 비ନାଶକାରୀ" },
        { "word": "비ପଦ-ଭଞ୍ଜନ", "meaning": "비ପଦ ନାଶକାରୀ" },
        { "word": "ତୁମି", "meaning": "ଆପଣ" },
        { "word": "ନାରାୟଣ", "meaning": "ସମସ୍ତ ଜୀବଙ୍କର ଆଶ୍ରୟସ୍ଥଳ।" }
      ]
    }
  ]
};

async function upsertSong() {
  console.log('🚀 Upserting "He Govinda He Gopal Kesava Madhava" to Supabase...');

  const { error } = await supabase
    .from('songs')
    .upsert({
      id: 'song-hegovindahegopalkesava',
      title: 'ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ କେଶବ ମାଧବ (He Govinda He Gopal Kesava Madhava)',
      title_odia: 'ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ କେଶବ ମାଧବ',
      title_english: 'He Govinda He Gopal Kesava Madhava',
      category: 'Songs',
      type: 'html',
      description: 'ଶ୍ରୀ ଜୟଦେବ ଗୋସ୍ୱାମୀଙ୍କ ଏକ ଅତି ସୁନ୍ଦର ଭଜନ |',
      author: 'Jayadeva Goswami',
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
