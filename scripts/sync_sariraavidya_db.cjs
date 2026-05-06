const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = {
    id: 'song-sariraavidyajala',
    title: 'ଶରୀର ଅବିଦ୍ୟା ଜାଲ (Sarira Avidya Jala)',
    title_odia: 'ଶରୀର ଅବିଦ୍ୟା ଜାଲ',
    title_english: 'Sarira Avidya Jala',
    author: 'Bhaktivinoda Thakura',
    category: 'Songs',
    type: 'html',
    published: true,
    status: 'COMPLETED',
    structured_content: {
  "verses": [
    {
      "id": 1,
      "lyric": "ଭାଇ ରେ !\nଶରୀର ଅବିଦ୍ୟା-ଜାଲ ଜଡ଼େନ୍ଦ୍ରିୟ ତାହେ କାଲ\nଜୀବେ ଫେଲେ ବିଷୟ-ସାଗୋରେ ।\nତା’ର ମଧ୍ୟେ ଜିହ୍ୱା ଅତି ଲୋଭମୟ ସୁ-ଦୁର୍ମତି\nତା’କେ ଜେତ କଠିନ ସୋଂସାରେ ।।୧।।",
      "translation": "ହେ ଭାଇମାନେ! ଏହି ମନୁଷ୍ୟ ଶରୀର ଅଜ୍ଞାନତାର ଏକ ଜାଲ ଏବଂ ଆମର ଜଡ଼ ଇନ୍ଦ୍ରିୟଗୁଡ଼ିକ ହେଉଛନ୍ତି ମୃତ୍ୟୁର ପଥ। ଏହି ଇନ୍ଦ୍ରିୟଗୁଡ଼ିକ ଜୀବକୁ ସାଂସାରିକ ବିଷୟ ଭୋଗରୂପକ ସମୁଦ୍ରରେ ପକାଇ ଦିଅନ୍ତି। ଏହି ସମସ୍ତ ଇନ୍ଦ୍ରିୟ ମଧ୍ୟରେ ଜିଭ ହେଉଛି ସବୁଠାରୁ ଅଧିକ ଲୋଭୀ ଏବଂ ଦୁଷ୍ଟ। ଏହି ସଂସାରରେ ଜିଭକୁ ବଶ କରିବା ସବୁଠାରୁ କଠିନ କାର୍ଯ୍ୟ।",
      "wordMeanings": [
        { "word": "ଭାଇ ରେ", "meaning": "ହେ ଭାଇମାନେ!" },
        { "word": "ଶରୀର", "meaning": "ଏହି ଭୌତିକ ଶରୀର" },
        { "word": "ଅବିଦ୍ୟା-ଜାଲ", "meaning": "ଅଜ୍ଞାନତାର ଏକ ଜାଲ" },
        { "word": "ଜଡ଼େନ୍ଦ୍ରିୟ", "meaning": "ଜଡ଼ ଇନ୍ଦ୍ରିୟଗୁଡ଼ିକ" },
        { "word": "ତାହେ", "meaning": "ସେଥିରେ" },
        { "word": "କାଲ", "meaning": "କାଳ/ମୃତ୍ୟୁ ସଦୃଶ" },
        { "word": "ଜୀବେ", "meaning": "ଜୀବକୁ" },
        { "word": "ଫେଲେ", "meaning": "ପକାଇଦିଏ" },
        { "word": "ବିଷୟ-ସାଗରେ", "meaning": "ବିଷୟ ଭୋଗରୂପକ ସମୁଦ୍ରରେ" },
        { "word": "ତା’ର ମଧ୍ୟେ", "meaning": "ସହି ଇନ୍ଦ୍ରିୟମାନଙ୍କ ମଧ୍ୟରେ" },
        { "word": "ଜିହ୍ୱା", "meaning": "ଜିଭ" },
        { "word": "ଅତି", "meaning": "ଅତ୍ୟନ୍ତ" },
        { "word": "ଲୋଭମୟ", "meaning": "ଲୋଭୀ" },
        { "word": "ସୁ-ଦୁର୍ମତି", "meaning": "ଅତି ଦୁଷ୍ଟ/ନିୟନ୍ତ୍ରଣହୀନ" },
        { "word": "ତା’କେ", "meaning": "ତାହାକୁ" },
        { "word": "ଜେତ", "meaning": "ଜୟ କରିବା/ବଶ କରିବା" },
        { "word": "କଠିନ", "meaning": "ଅତ୍ୟନ୍ତ କଷ୍ଟକର" },
        { "word": "ସଂସାରେ", "meaning": "ଏହି ସଂସାରରେ" }
      ]
    },
    {
      "id": 2,
      "lyric": "କୃଷ୍ଣ ବୋଡ଼ୋ ଦୟାମୟ କରିବାରେ ଜିହ୍ୱା ଜୟ\nସ୍ୱ-ପ୍ରସାଦାନ୍ନ ଦିଲୋ ଭାଇ ।\nସେଇ ଅନ୍ନାମୃତ ପାଓ ରାଧା କୃଷ୍ଣ ଗୁଣ ଗାଓ\nପ୍ରେମେ ଡାକୋ ଚୈତନ୍ୟ-ନିତାଇ ।।୨।।",
      "translation": "କିନ୍ତୁ ପ୍ରଭୁ ଶ୍ରୀକୃଷ୍ଣ ଅତ୍ୟନ୍ତ ଦୟାମୟ। ଆମ ଜିଭକୁ ବଶ କରିବାରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ ସେ ଆମକୁ ନିଜର ଅମୃତମୟ ପ୍ରସାଦ ପ୍ରଦାନ କରିଛନ୍ତି। ହେ ଭାଇମାନେ! ଏବେ ସେହି ଅମୃତ ସଦୃଶ ପ୍ରସାଦ ସେବନ କରନ୍ତୁ, ଶ୍ରୀ ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ଗୁଣଗାନ କରନ୍ତୁ ଏବଂ ଅତି ପ୍ରେମର ସହିତ ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ ଓ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦଙ୍କୁ ସ୍ମରଣ କରନ୍ତୁ।",
      "wordMeanings": [
        { "word": "କୃଷ୍ଣ", "meaning": "ଶ୍ରୀକୃଷ୍ଣ" },
        { "word": "ବୋଡ଼ୋ", "meaning": "ବହୁତ" },
        { "word": "ଦୟାମୟ", "meaning": "କରୁଣାମୟ" },
        { "word": "କରିବାରେ", "meaning": "କରିବା ପାଇଁ" },
        { "word": "ଜିହ୍ୱା ଜୟ", "meaning": "ଜିଭକୁ ଜୟ/ବଶ" },
        { "word": "ସ୍ୱ-ପ୍ରସାଦାନ୍ନ", "meaning": "ନିଜର ପ୍ରସାଦ ରୂପକ ଅନ୍ନ" },
        { "word": "ଦିଲୋ", "meaning": "ଦେଇଛନ୍ତି" },
        { "word": "ଭାଇ", "meaning": "ହେ ଭାଇ!" },
        { "word": "ସେଇ", "meaning": "ସେହି" },
        { "word": "ଅନ୍ନାମୃତ", "meaning": "ଅମୃତ ସଦୃଶ ଅନ୍ନ" },
        { "word": "ପାଓ", "meaning": "ଭୋଜନ କର" },
        { "word": "ରାଧା କୃଷ୍ଣ", "meaning": "ଶ୍ରୀ ରାଧା ଏବଂ କୃଷ୍ଣଙ୍କର" },
        { "word": "ଗୁଣ ଗାଓ", "meaning": "ଗୁଣଗାନ କର" },
        { "word": "ପ୍ରେମେ", "meaning": "ପ୍ରେମରେ" },
        { "word": "ଡାକୋ", "meaning": "ଡାକ/ଆହ୍ୱାନ କର" },
        { "word": "ଚୈତନ୍ୟ-ନିତାଇ", "meaning": "ପ୍ରଭୁ ଚୈତନ୍ୟ ଏବଂ ନିତ୍ୟାନନ୍ଦଙ୍କୁ" }
      ]
    }
  ]
}
};

async function syncSong() {
    console.log('🔄 Syncing song-sariraavidyajala to Supabase...');
    const { data, error } = await supabase
        .from('songs')
        .upsert(songData, { onConflict: 'id' });

    if (error) {
        console.error('❌ Sync Error:', error);
    } else {
        console.log('✅ Song synced successfully to Supabase!');
    }
}

syncSong();
