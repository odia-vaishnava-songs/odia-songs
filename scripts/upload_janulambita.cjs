const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const structuredContent = {
  "verses": [
    {
      "id": 1,
      "lyric": "ଜାନୁ ଲମ୍ବିତ ବାହୁ ଯୁଗଳ\nକନଳ ପୁତଳୀ ଦେହା ।\nଅରୁଣ ଅମ୍ବର ଶୋଭିତ କଳେବର\nଉପମା ଦେୟବ କାହା ।।",
      "translation": "ତାଙ୍କର ଦୁଇ ବାହୁ ଆଣ୍ଠୁ ପର୍ଯ୍ୟନ୍ତ ଲମ୍ବିଛି ଏବଂ ଶରୀର ଏକ ସୁବର୍ଣ୍ଣ ପ୍ରତିମା ପରି ଦେଖାଯାଉଛି। ସୂର୍ଯ୍ୟୋଦୟର ରଙ୍ଗ ପରି ଅରୁଣ ବସ୍ତ୍ରରେ ତାଙ୍କ ଶରୀର ଶୋଭିତ। ତାଙ୍କ ସୌନ୍ଦର୍ଯ୍ୟର ତୁଳନା କାହା ସହିତ କରାଯାଇପାରିବ? (ତାହା ଅତୁଳନୀୟ)।",
      "wordMeanings": [
        { "word": "ଜାନୁ", "meaning": "ଆଣ୍ଠୁ" },
        { "word": "ଲମ୍ବିତ", "meaning": "ଲମ୍ବିଥିବା" },
        { "word": "ବାହୁ", "meaning": "ହାତ" },
        { "word": "ଯୁଗଳ", "meaning": "ଦୁଇଟି" },
        { "word": "କନଳ", "meaning": "ସୁନା" },
        { "word": "ପୁତଳୀ", "meaning": "ପ୍ରତିମା / କଣ୍ଢେଇ" },
        { "word": "ଦେହା", "meaning": "ଶରୀର" },
        { "word": "ଅରୁଣ", "meaning": "ସୂର୍ଯ୍ୟୋଦୟର ରଙ୍ଗ (ଲାଲ୍-ନାରଙ୍ଗୀ)" },
        { "word": "ଅମ୍ବର", "meaning": "ବସ୍ତ୍ର" },
        { "word": "ଶୋଭିତ", "meaning": "ଶୋଭା ପାଉଥିବା" },
        { "word": "କଳେବର", "meaning": "ଶରୀର" },
        { "word": "ଉପମା", "meaning": "ତୁଳନା" },
        { "word": "ଦେୟବ", "meaning": "ଦେବି" },
        { "word": "କାହା", "meaning": "କାହା ସହିତ" }
      ]
    },
    {
      "id": 2,
      "lyric": "ହାସ ବିମଳ ବୟାନ କମଳ\nପୀନ ହୃଦୟ ସାଜେ ।\nଉନ୍ନତ ଗୀମ ସିଂହ ଜିନିୟା\nଉଦାର ବିଗ୍ରହ ରାଜେ ।।",
      "translation": "ତାଙ୍କ ପଦ୍ମ ପରି ମୁଖମଣ୍ଡଳରେ ନିର୍ମଳ ହସ ଖେଳୁଛି ଏବଂ ବିଶାଳ ବକ୍ଷସ୍ଥଳ ଅତି ସୁନ୍ଦର ଦେଖାଯାଉଛି। ତାଙ୍କର ବଳିଷ୍ଠ କନ୍ଧ ଓ ବାହୁ ସିଂହକୁ ମଧ୍ୟ ଜୟ କରୁଛି। ଏହି ମହାନ ବିଗ୍ରହ ଅତ୍ୟନ୍ତ ମନୋହର ଭାବେ ବିରାଜମାନ କରୁଛନ୍ତି।",
      "wordMeanings": [
        { "word": "ହାସ", "meaning": "ହସ" },
        { "word": "ବିମଳ", "meaning": "ନିର୍ମଳ / ପବିତ୍ର" },
        { "word": "ବୟାନ", "meaning": "ମୁଖ" },
        { "word": "କମଳ", "meaning": "ପଦ୍ମ" },
        { "word": "ପୀନ", "meaning": "ବିଶାଳ / ପୃଷ୍ଠ" },
        { "word": "ହୃଦୟ", "meaning": "ବକ୍ଷସ୍ଥଳ" },
        { "word": "ସାଜେ", "meaning": "ଶୋଭା ପାଉଛି" },
        { "word": "ଉନ୍ନତ", "meaning": "ଉଚ୍ଚ / ବଳିଷ୍ଠ" },
        { "word": "ଗୀମ", "meaning": "କନ୍ଧ / ବାହୁ" },
        { "word": "ସିଂହ", "meaning": "ସିଂହକୁ" },
        { "word": "ଜିନିୟା", "meaning": "ଜୟ କରି (ବଳିଷ୍ଠ)" },
        { "word": "ଉଦାର", "meaning": "ମହାନ / ମହାନ୍" },
        { "word": "ବିଗ୍ରହ", "meaning": "ରୂପ" },
        { "word": "ରାଜେ", "meaning": "ବିରାଜମାନ" }
      ]
    },
    {
      "id": 3,
      "lyric": "ଚରଣ ନଖର ଉଜୋର ଶଶଧର\nକନୟା ମଞ୍ଜରି ଶୋହେ ।\nହେରି ଦିନମଣି ଆପନା ନିଛୟେ\nରୂପେ ଜଗମନ ମୋହେ ।।",
      "translation": "ତାଙ୍କ ପାଦର ନଖଗୁଡ଼ିକ ପୂର୍ଣ୍ଣିମା ଚନ୍ଦ୍ରଠାରୁ ମଧ୍ୟ ଅଧିକ ଉଜ୍ଜ୍ୱଳ ଏବଂ ସେଥିରେ ସୁବର୍ଣ୍ଣ ନୂପୁର ଶୋଭା ପାଉଛି। ଏପରିକି ସୂର୍ଯ୍ୟ ମଧ୍ୟ ତାଙ୍କ ଦିବ୍ୟ ରୂପ ଦେଖି ନିଜକୁ ହାର ମାନନ୍ତି। ତାଙ୍କର ଏହି ସୌନ୍ଦର୍ଯ୍ୟ ସମଗ୍ର ଜଗତର ମନକୁ ମୋହି ନିଏ।",
      "wordMeanings": [
        { "word": "ଚରଣ", "meaning": "ପାଦ" },
        { "word": "ନଖର", "meaning": "ନଖ" },
        { "word": "ଉଜୋର", "meaning": "ଉଜ୍ଜ୍ୱଳ" },
        { "word": "ଶଶଧର", "meaning": "ଚନ୍ଦ୍ର" },
        { "word": "କନୟା", "meaning": "ସୁନା" },
        { "word": "ମଞ୍ଜରୀ", "meaning": "ନୂପୁର / ପାଉଁଜି" },
        { "word": "ଶୋହେ", "meaning": "ଶୋଭା ପାଉଛି" },
        { "word": "ହେରି", "meaning": "ଦେଖି" },
        { "word": "ଦିନମଣି", "meaning": "ସୂର୍ଯ୍ୟ" },
        { "word": "ଆପନା", "meaning": "ନିଜକୁ" },
        { "word": "ନିଛୟେ", "meaning": "ନିଶ୍ଚୟ / ସମର୍ପଣ" },
        { "word": "ରୂପେ", "meaning": "ରୂପରେ" },
        { "word": "ଜଗମନ", "meaning": "ଜଗତର ମନ" },
        { "word": "ମୋହେ", "meaning": "ମୁଗ୍ଧ କରେ" }
      ]
    },
    {
      "id": 4,
      "lyric": "କଳି ଯୁଗେର ଅବତାର ଚୈତନ୍ୟ ନିତାଇ\nପାପ ପାଷଣ୍ଡ ନାହି ମାନେ ।\nଶ୍ରୀ କୃଷ୍ଣ ଚୈତନ୍ୟ ଠାକୁର ନିତ୍ୟାନନ୍ଦ\nବୃନ୍ଦାବନ (ଦାସ) ଗୁଣ ଗାନେ ।।",
      "translation": "ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ ଓ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁ ହିଁ କଳିଯୁଗର ଅବତାର। ସେମାନେ କିଏ ପାପୀ ବା କିଏ ପାଷଣ୍ଡ, ତାହା ବିଚାର ନ କରି ସମସ୍ତଙ୍କୁ ନିଜର କୃପା ବାଣ୍ଟନ୍ତି। ବୃନ୍ଦାବନ ଦାସ ନିଜର ଆରାଧ୍ୟ ପ୍ରଭୁ ଶ୍ରୀ କୃଷ୍ଣ ଚୈତନ୍ୟ ଓ ନିତ୍ୟାନନ୍ଦଙ୍କର ଏହି ମହିମା ଗାନ କରୁଛନ୍ତି।",
      "wordMeanings": [
        { "word": "କଳି ଯୁଗେର", "meaning": "କଳିଯୁଗର" },
        { "word": "ଅବତାର", "meaning": "ଅବତାର" },
        { "word": "ଚୈତନ୍ୟ ନିତାଇ", "meaning": "ଶ୍ରୀ ଚୈତନ୍ୟ ଓ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "ପାପ", "meaning": "ପାପୀ" },
        { "word": "ପାଷଣ୍ଡ", "meaning": "ଦୁଷ୍ଟ / ପାଷଣ୍ଡ" },
        { "word": "ନାହି ମାନେ", "meaning": "ବିଚାର କରନ୍ତି ନାହିଁ" },
        { "word": "ଶ୍ରୀ କୃଷ୍ଣ ଚୈତନ୍ୟ", "meaning": "ଶ୍ରୀ କୃଷ୍ଣ ଚୈତନ୍ୟ" },
        { "word": "ଠାକୁର ନିତ୍ୟାନନ୍ଦ", "meaning": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "ବୃନ୍ଦାବନ (ଦାସ)", "meaning": "ବୃନ୍ଦାବନ ଦାସ" },
        { "word": "ଗୁଣ ଗାନେ", "meaning": "ଗୁଣ ଗାନ କରନ୍ତି" }
      ]
    }
  ]
};

async function upsertSong() {
  console.log('🚀 Correcting "Janu Lambita Bahu Jugala" (Full Word Meanings)...');

  const { error } = await supabase
    .from('songs')
    .upsert({
      id: 'song-janulambita',
      title: 'ଜାନୁ ଲମ୍ବିତ ବାହୁ ଯୁଗଳ (Janu Lambita Bahu Jugala)',
      title_odia: 'ଜାନୁ ଲମ୍ବିତ ବାହୁ ଯୁଗଳ',
      title_english: 'Janu Lambita Bahu Jugala',
      category: 'Songs',
      type: 'html',
      description: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ ଓ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କର ଦିବ୍ୟ ରୂପ ବର୍ଣ୍ଣନା କରୁଥିବା ଏକ ଅତି ସୁନ୍ଦର ଭଜନ |',
      author: 'Vrndavana Dasa Thakura',
      published: true,
      status: 'COMPLETED',
      structured_content: structuredContent
    }, { onConflict: 'id' });

  if (error) {
    console.error('❌ Failed to update song:', error.message);
  } else {
    console.log('✅ Successfully updated with complete word meanings!');
  }
}

upsertSong();
