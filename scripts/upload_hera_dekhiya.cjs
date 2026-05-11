const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const structuredContent = {
  "verses": [
    {
      "id": 1,
      "lyric": "ହେର ଦେଖିୟା ନୟନ ଭରିୟା\nକି ଆର ପୁଛସି ଆନେ ।\nନଦୀୟା-ନଗରେ ଶଚୀର ମନ୍ଦିରେ\nଚାନ୍ଦେର ଉଦୟ ଦିନେ ।।",
      "translation": "ଦେଖ! ଆଖି ଭରି ଦେଖିଲା ପରେ ଆଉ ଅନ୍ୟମାନଙ୍କୁ କଣ ପଚାରୁଛ? ନଦୀୟା ନଗରରେ ଶଚୀ ମାତାଙ୍କ ଘରେ ଦିନ ବେଳେ ଏକ ଚନ୍ଦ୍ର ଉଦୟ ହୋଇଛି (ଅର୍ଥାତ୍ ମହାପ୍ରଭୁ ଜନ୍ମ ହୋଇଛନ୍ତି) ।",
      "wordMeanings": [
        { "word": "ହେର", "meaning": "ଦେଖ" },
        { "word": "ଦେଖିୟା", "meaning": "ଦେଖି" },
        { "word": "ନୟନ", "meaning": "ଆଖି" },
        { "word": "ଭରିୟା", "meaning": "ଭରି କରି" },
        { "word": "କି", "meaning": "କଣ" },
        { "word": "ଆର", "meaning": "ଆଉ" },
        { "word": "ପୁଛସି", "meaning": "ପଚାରୁଛ" },
        { "word": "ଆନେ", "meaning": "ଅନ୍ୟମାନଙ୍କୁ" },
        { "word": "ନଦୀୟା-ନଗରେ", "meaning": "ନଦୀୟା ନଗରରେ" },
        { "word": "ଶଚୀର", "meaning": "ମାତା ଶଚୀଙ୍କର" },
        { "word": "ମନ୍ଦିରେ", "meaning": "ଘରେ" },
        { "word": "ଚାନ୍ଦେର", "meaning": "ଚନ୍ଦ୍ରର" },
        { "word": "ଉଦୟ", "meaning": "ଉଦୟ" },
        { "word": "ଦିନେ", "meaning": "ଦିନରେ।" }
      ]
    },
    {
      "id": 2,
      "lyric": "କିୟେ ଲଖବାଣ କରିଲ-କାଞ୍ଚନ\nରୂପେର ନିଛନି ଗୋରା ।\nଶଚୀର ଉଦର ଜଳଦ ନିକସିଲ\nସ୍ଥିର ବିଜୁରି ପରା ।।",
      "translation": "ଗୌରହରିଙ୍କ ଶରୀର କେତେ ହଜାର ଗୁଣ ପରିଶୁଦ୍ଧ ସୁନା ପରି ଉଜ୍ଜ୍ୱଳ! ଶଚୀ ମାତାଙ୍କ ଗର୍ଭ ରୂପକ ମେଘରୁ ଏକ ସ୍ଥିର ବିଜୁଳି ନିର୍ଗତ ହୋଇଛି ।",
      "wordMeanings": [
        { "word": "କିୟେ", "meaning": "କେତେ" },
        { "word": "ଲକ୍ଷବାଣ", "meaning": "ହଜାର ହଜାର ଗୁଣ ପରିଶୁଦ୍ଧ" },
        { "word": "କରିଲା-କାଞ୍ଚନ", "meaning": "ସୁନା ପରି" },
        { "word": "ରୂପେର", "meaning": "ସୌନ୍ଦର୍ଯ୍ୟର" },
        { "word": "ନିଛନି", "meaning": "ନୈବେଦ୍ୟ ସଦୃଶ" },
        { "word": "ଗୋରା", "meaning": "ଗୌରହରି" },
        { "word": "ଶଚୀର", "meaning": "ଶଚୀଙ୍କ" },
        { "word": "ଉଦର", "meaning": "ଗର୍ଭ" },
        { "word": "ଜଳଦ", "meaning": "ମେଘରୁ" },
        { "word": "ନିକସିଲା", "meaning": "ନିର୍ଗତ ହୋଇଛି" },
        { "word": "ସ୍ଥିର", "meaning": "ସ୍ଥିର" },
        { "word": "ବିଜୁରି", "meaning": "ବିଜୁଳି" },
        { "word": "ପରା", "meaning": "ପରି।" }
      ]
    },
    {
      "id": 3,
      "lyric": "କତ ବିଧୁ-ବର ବଦନ ଉଜୋର\nନିଶି ଦିଶି ସମ ଶୋଭେ ।\nନୟନ-ଭ୍ରମର ଶ୍ରୁତି-ସରୋରୁହେ\nଧାୟ ମକରନ୍ଦ-ଲୋଭେ ।।",
      "translation": "ଗୌରହରିଙ୍କ ମୁଖ କେତେ ଶ୍ରେଷ୍ଠ ଚନ୍ଦ୍ର ପରି ଉଜ୍ଜ୍ୱଳ, ଯାହା ରାତିରେ ମଧ୍ୟ ସବୁ ଦିଗକୁ ଆଲୋକିତ କରୁଛି। ତାଙ୍କର ଆଖି ରୂପକ ଭ୍ରମର ମକରନ୍ଦ ଲୋଭରେ ତାଙ୍କ କାନ ରୂପକ ପଦ୍ମ ଆଡ଼କୁ ଧାଉଁଛି ।",
      "wordMeanings": [
        { "word": "କତ", "meaning": "କେତେ" },
        { "word": "ବିଧୁ-ବର", "meaning": "ଶ୍ରେଷ୍ଠ ଚନ୍ଦ୍ର" },
        { "word": "ବଦନ", "meaning": "ମୁଖ" },
        { "word": "ଉଜୋର", "meaning": "ଉଜ୍ଜ୍ୱଳ" },
        { "word": "ନିଶି", "meaning": "ରାତି" },
        { "word": "ଦିଶି", "meaning": "ଦିଗ" },
        { "word": "ସମ", "meaning": "ସମାନ" },
        { "word": "ଶୋଭେ", "meaning": "ଶୋଭା ପାଉଛି" },
        { "word": "ନୟନ-ଭ୍ରମର", "meaning": "ଆଖି ରୂପକ ଭ୍ରମର" },
        { "word": "ଶ୍ରୁତି-ସରୋରୁହେ", "meaning": "କାନ ରୂପକ ପଦ୍ମ ଉପରେ" },
        { "word": "ଧାୟ", "meaning": "ଧାଉଁଛି" },
        { "word": "ମକରନ୍ଦ-ଲୋଭେ", "meaning": "ମକରନ୍ଦ (ମହୁ) ଲୋଭରେ।" }
      ]
    },
    {
      "id": 4,
      "lyric": "ଆ-ଜାନୁ-ଲମ୍ବିତ ଭୁଜ ସୁ-ବଳିତ\nନାଭି ହେମ ସରୋବର ।\nକଟି କରି-ଅରି ଉରୁ ହେମ-ଗିରି\nଏ ଲୋଚନ ମନୋହର ।।",
      "translation": "ତାଙ୍କର ସୁନ୍ଦର ହାତ ଆଣ୍ଠୁ ପର୍ଯ୍ୟନ୍ତ ଲମ୍ବିଛି। ତାଙ୍କ ନାଭି ଏକ ସୁନା ସରୋବର ପରି ଏବଂ ଅଣ୍ଟା ସିଂହ ପରି କ୍ଷୀଣ। ତାଙ୍କ ଜଙ୍ଘ ସୁବର୍ଣ୍ଣ ପର୍ବତ ପରି। ଏହି ରୂପ ଲୋଚନ ଦାସଙ୍କ ମନକୁ ମୋହି ନେଉଛି ।",
      "wordMeanings": [
        { "word": "ଆ-ଜାନୁ-ଲମ୍ବିତ", "meaning": "ଆଣ୍ଠୁ ପର୍ଯ୍ୟନ୍ତ ଲମ୍ବିଥିବା" },
        { "word": "ଭୁଜ", "meaning": "ହାତ" },
        { "word": "ସୁ-ବଳିତ", "meaning": "ସୁନ୍ଦର ଭାବେ ଗଠିତ" },
        { "word": "ନାଭି", "meaning": "ନାଭି" },
        { "word": "ହେମ", "meaning": "ସୁନା" },
        { "word": "ସରୋବର", "meaning": "ସରୋବର" },
        { "word": "କଟି", "meaning": "କଟି (ଅଣ୍ଟା)" },
        { "word": "କରି-ଅରି", "meaning": "ସିଂହ (ହାତୀର ଶତ୍ରୁ)" },
        { "word": "ଉରୁ", "meaning": "ଜଙ୍ଘ" },
        { "word": "ହେମ-ଗିରି", "meaning": "ସୁନା ପର୍ବତ" },
        { "word": "ଏ", "meaning": "ଏହି (ରୂପ)" },
        { "word": "ଲୋଚନ", "meaning": "ଲୋଚନ ଦାସଙ୍କ" },
        { "word": "ମନୋହର", "meaning": "ମନ ମୋହି ନିଏ।" }
      ]
    }
  ]
};

async function upsertSong() {
  console.log('🚀 Upserting "Hera Dekhiya Nayana Bhariya" to Supabase...');

  const { error } = await supabase
    .from('songs')
    .upsert({
      id: 'song-heradekhiyanayanabhariya',
      title: 'ହେର ଦେଖିୟା ନୟନ ଭରିୟା (Hera Dekhiya Nayana Bhariya)',
      title_odia: 'ହେର ଦେଖିୟା ନୟନ ଭରିୟା',
      title_english: 'Hera Dekhiya Nayana Bhariya',
      category: 'Songs',
      type: 'html',
      description: 'ଶ୍ରୀ ବୃନ୍ଦାବନ ଦାସ ଠାକୁରଙ୍କ ଏକ ଅତି ସୁନ୍ଦର ଗୌର-ଭଜନ |',
      author: 'Vrndavana Dasa Thakura',
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
