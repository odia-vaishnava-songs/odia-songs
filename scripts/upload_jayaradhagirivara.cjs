const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const structuredContent = {
  "verses": [
    {
      "id": 1,
      "lyric": "ଜୟ ରାଧା ଗିରି-ବର ଧାରୀ\nଶ୍ରୀ ନନ୍ଦ-ନନ୍ଦନ ବୃଷଭାନୁ-ଦୁଲାରୀ\n(ବୃଷଭାନୁ ଦୁଲାରୀ ରାଧେ ବୃଷଭାନୁ-ଦୁଲାରୀ) ।।",
      "translation": "ଶ୍ରୀମତୀ ରାଧାରାଣୀ ଏବଂ ଗିରିଧାରୀ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଜୟ ହେଉ! ସେ ନନ୍ଦ ମହାରାଜଙ୍କ ପୁତ୍ର 'ନନ୍ଦ-ନନ୍ଦନ' ଏବଂ ସେ (ରାଧା) ବୃଷଭାନୁ ମହାରାଜଙ୍କ ପ୍ରିୟା କନ୍ୟା 'ବୃଷଭାନୁ-ଦୁଲାରୀ' ଅଟନ୍ତି।",
      "wordMeanings": [
        { "word": "ଜୟ", "meaning": "ଜୟ ହେଉ" },
        { "word": "ରାଧା", "meaning": "ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କର" },
        { "word": "ଗିରି-ବର ଧାରୀ", "meaning": "ଶ୍ରେଷ୍ଠ ପର୍ବତ (ଗୋବର୍ଦ୍ଧନ)କୁ ଧାରଣ କରିଥିବା ପ୍ରଭୁଙ୍କର" },
        { "word": "ଶ୍ରୀ ନନ୍ଦ-ନନ୍ଦନ", "meaning": "ଶ୍ରୀ ନନ୍ଦ ମହାରାଜଙ୍କ ପୁତ୍ର" },
        { "word": "ବୃଷଭାନୁ-ଦୁଲାରୀ", "meaning": "ବୃଷଭାନୁ ମହାରାଜଙ୍କ ପ୍ରିୟ କନ୍ୟା" }
      ]
    },
    {
      "id": 2,
      "lyric": "ମୋର-ମୁକୁଟ ମୁଖ ମୁରଲୀ ଜୋରି\nବେଣୀ ବିରାଜେ ମୁଖେ ହାସି ଥୋରି ।।",
      "translation": "ସେ ମୟୂର ଚୂଳର ମୁକୁଟ ପିନ୍ଧିଛନ୍ତି ଏବଂ ତାଙ୍କ ମୁଖରେ ଲଗାଯାଇଥିବା ବଂଶୀ ଶୋଭା ପାଉଛି। ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ଲମ୍ବା ବେଣୀ ଅତି ସୁନ୍ଦର ଦେଖାଯାଉଛି ଏବଂ ତାଙ୍କ ମୁଖମଣ୍ଡଳରେ ଏକ ମୃଦୁ ହସ ଖେଳୁଛି।",
      "wordMeanings": [
        { "word": "ମୋର-ମୁକୁଟ", "meaning": "ମୟୂର ଚୂଳର ମୁକୁଟ" },
        { "word": "ମୁଖ", "meaning": "ମୁଖରେ" },
        { "word": "ମୁରଲୀ", "meaning": "ବଂଶୀ" },
        { "word": "ଜୋରି", "meaning": "ଶୋଭା ପାଉଛି" },
        { "word": "ବେଣୀ", "meaning": "ବେଣୀ" },
        { "word": "ବିରାଜେ", "meaning": "ଚମକୁଛି" },
        { "word": "ମୁଖେ", "meaning": "ମୁଖରେ" },
        { "word": "ହାସି", "meaning": "ହସ" },
        { "word": "ଥୋରି", "meaning": "ମୃଦୁ / ସାମାନ୍ୟ" }
      ]
    },
    {
      "id": 3,
      "lyric": "ଉନକି ଶୋହେ ଗଲେ ବନ-ମାଲା\nଇନକି ମୋତିମ-ମାଲ ଉଜାଲା ।।",
      "translation": "ପ୍ରଭୁ ଶ୍ରୀକୃଷ୍ଣଙ୍କ କଣ୍ଠରେ ବନଫୁଲର ମାଳା ଶୋଭା ପାଉଥିବା ବେଳେ ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ କଣ୍ଠରେ ମୋତିର ମାଳା ଏକ ଦିବ୍ୟ ଉଜ୍ଜ୍ୱଳ ଆଲୋକରେ ଚମକୁଛି।",
      "wordMeanings": [
        { "word": "ଉନକି", "meaning": "ତାଙ୍କର (ଶ୍ରୀକୃଷ୍ଣଙ୍କ)" },
        { "word": "ଶୋହେ", "meaning": "ଚମକୁଛି" },
        { "word": "ଗଲେ", "meaning": "ବେକରେ" },
        { "word": "ବନ-ମାଲା", "meaning": "ବନଫୁଲର ମାଳା" },
        { "word": "ଇନକି", "meaning": "ଏହାଙ୍କର (ରାଧାଙ୍କର)" },
        { "word": "ମୋତିମ-ମାଲ", "meaning": "ମୋତି ମାଳି" },
        { "word": "ଉଜାଲା", "meaning": "ଉଜ୍ଜ୍ୱଳ ଆଲୋକ" }
      ]
    },
    {
      "id": 4,
      "lyric": "ପୀତାମ୍ବର ଜଗ-ଜନ-ମନ ମୋହେ\nନୀଲ ଉଢ଼ନି ବନି ଉନକି ଶୋହେ ।।",
      "translation": "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପୀତାମ୍ବର ସମଗ୍ର ଜଗତର ଲୋକଙ୍କ ମନକୁ ମୁଗ୍ଧ କରୁଛି ଏବଂ ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ନୀଳ ବସ୍ତ୍ର ଏକ ଅପୂର୍ବ ଶୋଭାରେ ଚମକୁଛି।",
      "wordMeanings": [
        { "word": "ପୀତାମ୍ବର", "meaning": "ହଳଦିଆ ବସ୍ତ୍ର" },
        { "word": "ଜଗ-ଜନ-ମନ", "meaning": "ଜଗତର ସମସ୍ତ ବାସିନ୍ଦାଙ୍କ ମନକୁ" },
        { "word": "ମୋହେ", "meaning": "ମୋହିତ କରେ" },
        { "word": "ନୀଲ", "meaning": "ନୀଳ ରଙ୍ଗର" },
        { "word": "ଉଢ଼ନୀ", "meaning": "ଓଢ଼ଣୀ" },
        { "word": "ବନି", "meaning": "ବସ୍ତ୍ର" },
        { "word": "ଉନକି", "meaning": "ତାଙ୍କର (ରାଧାଙ୍କର)" },
        { "word": "ଶୋହେ", "meaning": "ଶୋଭା ପାଉଛି" }
      ]
    },
    {
      "id": 5,
      "lyric": "ଅରୁଣ ଚରଣେ ମଣି-ମଞ୍ଜିר ବାଓୟେ\nଶ୍ରୀ-କୃଷ୍ଣ-ଦାସ ତହିଁ ମନ ଭାଓୟେ ।।",
      "translation": "ସେମାନଙ୍କର ରକ୍ତିମ ପଦ୍ମ ପରି ପାଦରେ ରତ୍ନଖଚିତ ନୂପୁରଗୁଡ଼ିକ ଝୁଣ୍ଟି ଉଠୁଛନ୍ତି ଏବଂ ଶ୍ରୀକୃଷ୍ଣ ଦାସଙ୍କ ମନ ସେମାନଙ୍କର ଏହି ମହିମାମୟ ଉପସ୍ଥିତିରେ ଆଲୋକିତ ହୋଇଯାଉଛି।",
      "wordMeanings": [
        { "word": "ଅରୁଣ", "meaning": "ରକ୍ତିମ (ଲାଲ୍)" },
        { "word": "ଚରଣେ", "meaning": "ଚରଣରେ" },
        { "word": "ମଣି-ମଞ୍ଜିର", "meaning": "ରତ୍ନଖଚିତ ନୂପୁର" },
        { "word": "ବାଓୟେ", "meaning": "ଶବ୍ଦ କରୁଛି" },
        { "word": "ଶ୍ରୀ-କୃଷ୍ଣ-ଦାସ", "meaning": "ଶ୍ରୀକୃଷ୍ଣ ଦାସ (ଲେଖକ)" },
        { "word": "ତହିଁ", "meaning": "ସେଥିରେ" },
        { "word": "ମନ", "meaning": "ମନ" },
        { "word": "ଭାଓୟେ", "meaning": "ଆଲୋକିତ / ଆନନ୍ଦିତ ହେଉଛି" }
      ]
    }
  ]
};

async function upsertSong() {
  console.log('🚀 Correcting "Jaya Radha Giri Vara Dhari" (Full Word Meanings)...');

  const { error } = await supabase
    .from('songs')
    .upsert({
      id: 'song-jayaradhagirivaradhari',
      title: 'ଜୟ ରାଧା ଗିରି-ବର ଧାରୀ (Jaya Radha Giri Vara Dhari)',
      title_odia: 'ଜୟ ରାଧା ଗିରି-ବର ଧାରୀ',
      title_english: 'Jaya Radha Giri Vara Dhari',
      category: 'Songs',
      type: 'html',
      description: 'ଶ୍ରୀ ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କର ଏକ ଅତି ମନୋହର ଯୁଗଳ ମୂର୍ତ୍ତି ବର୍ଣ୍ଣନା |',
      author: 'Krsna Dasa',
      published: true,
      status: 'COMPLETED',
      structured_content: structuredContent
    }, { onConflict: 'id' });

  if (error) {
    console.error('❌ Failed to update song:', error.message);
  } else {
    console.log('✅ Successfully updated with all word meanings!');
  }
}

upsertSong();
