const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function updateGourangaSundara() {
    const songId = 'song-gourangasundara';
    const structuredContent = {
  "verses": [
    {
      "id": 1,
      "lyric": "ଗୌରାଙ୍ଗ ସୁନ୍ଦର, ପ୍ରେମ ଜଳଧର ତପ୍ତ କାଞ୍ଚନ କାୟ ।\nନଦୀୟା ନଗରେ, ହରି ପ୍ରେମ ଭରେ ନାଚିୟା ନାଚିୟା ଯାୟ ।।",
      "translation": "ସୁନ୍ଦର ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁ ପ୍ରେମର ସଜଳ ମେଘ ସଦୃଶ ଏବଂ ତାଙ୍କ ଶରୀର ତରଳ ସୁନା ପରି ଉଜ୍ଜ୍ୱଳ। ସେ ନଦୀୟା ନଗରରେ ହରିପ୍ରେମରେ ବିଭୋର ହୋଇ ନାଚି ନାଚି ଯାଉଛନ୍ତି।",
      "wordMeanings": [
        { "word": "ଗୌରାଙ୍ଗ", "meaning": "ପ୍ରଭୁ ଗୌରାଙ୍ଗ" },
        { "word": "ସୁନ୍ଦର", "meaning": "ସୁନ୍ଦର" },
        { "word": "ପ୍ରେମ", "meaning": "ପ୍ରେମର" },
        { "word": "ଜଳଧର", "meaning": "ମେଘ" },
        { "word": "ତପ୍ତ", "meaning": "ତରଳା ଯାଇଥିବା" },
        { "word": "କାଞ୍ଚନ", "meaning": "ସୁନା" },
        { "word": "କାୟ", "meaning": "ଶରୀର" },
        { "word": "ନଦୀୟା", "meaning": "ନଦୀୟା" },
        { "word": "ନଗରେ", "meaning": "ନଗରରେ" },
        { "word": "ହରି", "meaning": "ହରି" },
        { "word": "ପ୍ରେମ", "meaning": "ପ୍ରେମରେ" },
        { "word": "ଭରେ", "meaning": "ପରିପୂର୍ଣ୍ଣ ହୋଇ" },
        { "word": "ନାଚିୟା", "meaning": "ନାଚି" },
        { "word": "ନାଚିୟା", "meaning": "ନାଚି" },
        { "word": "ଯାୟ", "meaning": "ଯାଉଛନ୍ତି" }
      ]
    },
    {
      "id": 2,
      "lyric": "ରକ୍ତ କମଳ, କର-ପଦତଳ ଶତଦଳ ମୁଖ ଶଶୀ ।\nନଖରେ ନଖରେ, ସତତ ବିହରେ ଶଶଧର ରାଶି ରାଶି ।।",
      "translation": "ତାଙ୍କ ହାତ ଓ ପାଦତଳ ନାଲି ପଦ୍ମ ପରି ଏବଂ ମୁଖମଣ୍ଡଳ ଶରତ ଚନ୍ଦ୍ର ପରି ଶୋଭାମୟ। ତାଙ୍କର ପ୍ରତ୍ୟେକ ନଖରୁ କୋଟି କୋଟି ଚନ୍ଦ୍ରର ଜ୍ୟୋତି ନିର୍ଗତ ହେଉଛି।",
      "wordMeanings": [
        { "word": "ରକ୍ତ", "meaning": "ନାଲି" },
        { "word": "କମଳ", "meaning": "ପଦ୍ମ" },
        { "word": "କର", "meaning": "ହାତ" },
        { "word": "ପଦତଳ", "meaning": "ପାଦତଳ" },
        { "word": "ଶତଦଳ", "meaning": "ଶହେ ପାଖୁଡ଼ା ବିଶିଷ୍ଟ ପଦ୍ମ" },
        { "word": "ମୁଖ", "meaning": "ମୁହଁ" },
        { "word": "ଶଶୀ", "meaning": "ଚନ୍ଦ୍ର" },
        { "word": "ନଖରେ", "meaning": "ନଖରେ" },
        { "word": "ନଖରେ", "meaning": "ପ୍ରତ୍ୟେକ ନଖରେ" },
        { "word": "ସତତ", "meaning": "ସର୍ବଦା" },
        { "word": "비ହରେ", "meaning": "ବିରାଜମାନ" },
        { "word": "ଶଶଧର", "meaning": "ଚନ୍ଦ୍ର" },
        { "word": "ରାଶି", "meaning": "ସମୂହ" },
        { "word": "ରାଶି", "meaning": "ସମୂହ" }
      ]
    },
    {
      "id": 3,
      "lyric": "ବେଣୁ-ବୀଣା ରବ, ମାନେ ପରାଭବ କଣ୍ଠେ ମଧୁର ଭାଷା ।\nତାହେ ଅବିରାମ, ଗାୟ ହରିନାମ ଜାଗାଏ ପ୍ରେମ-ପିପାସା ।।",
      "translation": "ତାଙ୍କ କଣ୍ଠର ମଧୁର ସ୍ୱର ଆଗରେ ବଂଶୀ ଓ ବୀଣାର ଶବ୍ଦ ମଧ୍ୟ ପରାଜିତ। ସେ ନିରନ୍ତର ହରିନାମ ଗାନ କରି ଭକ୍ତଙ୍କ ହୃଦୟରେ ଦିବ୍ୟ ପ୍ରେମର ପିପାସା ଜାଗ୍ରତ କରୁଛନ୍ତି।",
      "wordMeanings": [
        { "word": "ବେଣୁ", "meaning": "ବଂଶୀ" },
        { "word": "ବୀଣା", "meaning": "ବୀଣା" },
        { "word": "ରବ", "meaning": "ଶବ୍ଦ" },
        { "word": "ମାନେ", "meaning": "ମାନ" },
        { "word": "ପରାଭବ", "meaning": "ପରାଜୟ" },
        { "word": "କଣ୍ଠେ", "meaning": "କଣ୍ଠରେ" },
        { "word": "ମଧୁର", "meaning": "ମଧୁର" },
        { "word": "ଭାଷା", "meaning": "ବାଣୀ" },
        { "word": "ତାହେ", "meaning": "ସେଥିରେ" },
        { "word": "ଅବିରାମ", "meaning": "ନିରନ୍ତର" },
        { "word": "ଗାୟ", "meaning": "ଗାନ କରନ୍ତି" },
        { "word": "ହରିନାମ", "meaning": "ହରିନାମ" },
        { "word": "ଜାଗାଏ", "meaning": "ଜାଗ୍ରତ କରେ" },
        { "word": "ପ୍ରେମ", "meaning": "ପ୍ରେମର" },
        { "word": "ପିପାସା", "meaning": "ତୃଷ୍ଣା" }
      ]
    },
    {
      "id": 4,
      "lyric": "ଶ୍ରୀବାସ ଅଙ୍ଗନେ, ନିତାଇର ସନେ ନାମ ସଂକୀର୍ତ୍ତନେ ନାଚେ ।\nଘରେ ଘରେ ଗିୟା, ଜୀବ ଉଦ୍ଧାରିୟା ଯାରେ ତାରେ ପ୍ରେମ ଯାଚେ ।।",
      "translation": "ଶ୍ରୀବାସ ଅଙ୍ଗନରେ ସେ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କ ସହ ସଂକୀର୍ତ୍ତନରେ ନୃତ୍ୟ କରନ୍ତି। ସେ ଦ୍ୱାର ଦ୍ୱାର ବୁଲି ପତିତ ଜୀବଙ୍କୁ ଉଦ୍ଧାର କରନ୍ତି ଏବଂ ସମସ୍ତଙ୍କୁ ପ୍ରେମ ଗ୍ରହଣ କରିବାକୁ ଅନୁରୋଧ କରନ୍ତି।",
      "wordMeanings": [
        { "word": "ଶ୍ରୀବାସ", "meaning": "ଶ୍ରୀବାସ ପଣ୍ଡିତଙ୍କ" },
        { "word": "ଅଙ୍ଗନେ", "meaning": "ଅଗଣାରେ" },
        { "word": "ନିତାଇର", "meaning": "ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କ" },
        { "word": "ସନେ", "meaning": "ସହିତ" },
        { "word": "ନାମ", "meaning": "ନାମ" },
        { "word": "ସଂକୀର୍ତ୍ତନେ", "meaning": "ସଂକୀର୍ତ୍ତନରେ" },
        { "word": "ନାଚେ", "meaning": "ନାଚନ୍ତି" },
        { "word": "ଘରେ", "meaning": "ଘର" },
        { "word": "ଘରେ", "meaning": "ଘର (ଦ୍ୱାର ଦ୍ୱାର)" },
        { "word": "ଗିୟା", "meaning": "ଯାଇ" },
        { "word": "ଜୀବ", "meaning": "ଜୀବଙ୍କୁ" },
        { "word": "ଉଦ୍ଧାରିୟା", "meaning": "ଉଦ୍ଧାର କରି" },
        { "word": "ଯାରେ", "meaning": "ଯାହାକୁ" },
        { "word": "ତାରେ", "meaning": "ତାହାକୁ" },
        { "word": "ପ୍ରେମ", "meaning": "ପ୍ରେମ" },
        { "word": "ଯାଚେ", "meaning": "ଭିକ୍ଷା କରନ୍ତି / ମାଗନ୍ତି" }
      ]
    },
    {
      "id": 5,
      "lyric": "ଭାରତ ଭ୍ରମିୟା, ପଦ ପରଶିୟା ପୂତ କରିଲ ଧୂଳି ।\nସେ ଚରଣ ରଜ, ହର-କମଳଜ ସଦା ଶିରେ ଲୟ ତୁଲି ।।",
      "translation": "ସମଗ୍ର ଭାରତ ଭ୍ରମଣ କରି ସେ ନିଜ ପାଦ ସ୍ପର୍ଶରେ ଏହି ମାଟିର ଧୂଳିକୁ ପବିତ୍ର କରିଦେଇଛନ୍ତି। ସେହି ଚରଣ ରେଣୁକୁ ଭଗବାନ ଶିବ ଓ ବ୍ରହ୍ମା ସର୍ବଦା ନିଜ ମସ୍ତକରେ ଧାରଣ କରନ୍ତି।",
      "wordMeanings": [
        { "word": "ଭାରତ", "meaning": "ଭାରତବର୍ଷ" },
        { "word": "ଭ୍ରମିୟା", "meaning": "ଭ୍ରମଣ କରି" },
        { "word": "ପଦ", "meaning": "ପାଦର" },
        { "word": "ପରଶିୟା", "meaning": "ସ୍ପର୍ଶ କରି" },
        { "word": "ପୂତ", "meaning": "ପବିତ୍ର" },
        { "word": "କରିଲ", "meaning": "କଲେ" },
        { "word": "ଧୂଲି", "meaning": "ଧୂଳି" },
        { "word": "ସେ", "meaning": "ସେହି" },
        { "word": "ଚରଣ", "meaning": "ଚରଣ" },
        { "word": "ରଜ", "meaning": "ରେଣୁ / ଧୂଳି" },
        { "word": "ହର", "meaning": "ମହାଦେବ" },
        { "word": "କମଳଜ", "meaning": "ବ୍ରହ୍ମା" },
        { "word": "ସଦା", "meaning": "ସର୍ବଦା" },
        { "word": "ଶିରେ", "meaning": "ମସ୍ତକରେ" },
        { "word": "ଲୟ", "meaning": "ନିଅନ୍ତି" },
        { "word": "ତୁଲି", "meaning": "ତୋଳି" }
      ]
    },
    {
      "id": 6,
      "lyric": "ଲୀଲାର ତୁଳନା, ମେଲେନା ମେଲେନା ତୁମି ଲୀଲାମୟ ହରି ।\nହରି ନାମ ଦିଲେ, ଜୀବ ଉଦ୍ଧାରିଲେ ନଦୀୟାତେ ଅବତରି ।।",
      "translation": "ଆପଣଙ୍କ ଲୀଳାର କୌଣସି ତୁଳନା ନାହିଁ। ହେ ଲୀଳାମୟ ହରି! ଆପଣ ନଦୀୟାରେ ଅବତାର ନେଇ ହରିନାମ ପ୍ରଚାର କଲେ ଏବଂ ସମସ୍ତ ଜୀବଙ୍କୁ ଏହି ସଂସାରରୁ ଉଦ୍ଧାର କଲେ।",
      "wordMeanings": [
        { "word": "ଲୀଲାର", "meaning": "ଲୀଳାର" },
        { "word": "ତୁଳନା", "meaning": "ତୁଳନା" },
        { "word": "ମେଲେନା", "meaning": "ମିଳେ ନାହିଁ" },
        { "word": "ମେଲେନା", "meaning": "ଆଦୌ ମିଳେ ନାହିଁ" },
        { "word": "ତୁମି", "meaning": "ଆପଣ" },
        { "word": "ଲୀଳାମୟ", "meaning": "ଲୀଳାମୟ" },
        { "word": "ହରି", "meaning": "ପ୍ରଭୁ ହରି" },
        { "word": "ହରି", "meaning": "ହରି" },
        { "word": "ନାମ", "meaning": "ନାମ" },
        { "word": "ଦିଲେ", "meaning": "ଦେଲେ" },
        { "word": "ଜୀବ", "meaning": "ଜୀବଙ୍କୁ" },
        { "word": "ଉଦ୍ଧାରିଲେ", "meaning": "ଉଦ୍ଧାର କଲେ" },
        { "word": "ନଦୀୟାତେ", "meaning": "ନଦୀୟାରେ" },
        { "word": "ଅବତାରି", "meaning": "ଅବତାର ଗ୍ରହଣ କରି" }
      ]
    }
  ]
};

    console.log(`Updating ${songId} in Supabase with refined meanings...`);
    
    const { error } = await supabase
        .from('songs')
        .upsert({ 
            id: songId,
            title: 'ଗୌରାଙ୍ଗ ସୁନ୍ଦର ପ୍ରେମ ଜଳଧର (Gouranga Sundara Prema Jaladhara)',
            category: 'Songs',
            type: 'html',
            author: 'Traditional',
            structured_content: structuredContent,
            published: true,
            status: 'COMPLETED',
            updated_at: new Date().toISOString()
        });

    if (error) {
        console.error('❌ Error updating DB:', error);
    } else {
        console.log('✅ Successfully updated Gouranga Sundara with refined meanings!');
    }
}

updateGourangaSundara();
