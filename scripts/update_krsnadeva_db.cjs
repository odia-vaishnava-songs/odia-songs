const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const structuredContent = {
    "verses": [
        {
            "id": "Refrain",
            "lyric": "କୃଷ୍ଣ ଦେବ ଭବନ୍ତଂ ବନ୍ଦେ\nମନ-ମାନସ-ମଧୁକରମ୍ ଅର୍ପୟ ନିଜ-ପଦ-ପଙ୍କଜ-ମକରନ୍ଦେ ।",
            "translation": "ହେ ପ୍ରଭୁ ଶ୍ରୀକୃଷ୍ଣ! ମୁଁ ଆପଣଙ୍କୁ ବନ୍ଦନା କରୁଛି। ମୋର ଏହି ଚଞ୍ଚଳ ମନରୂପକ ଭ୍ରମରକୁ ଆପଣଙ୍କ ପାଦପଦ୍ମର ଅମୃତ ରସରେ ସଦା ସର୍ବଦା ପାଇଁ ନିମଗ୍ନ କରି ରଖନ୍ତୁ।",
            "wordMeanings": [
                { "word": "କୃଷ୍ଣ", "meaning": "ହେ କୃଷ୍ଣ!" },
                { "word": "ଦେବ", "meaning": "ହେ ପ୍ରଭୁ!" },
                { "word": "ଭବନ୍ତମ୍", "meaning": "ଆପଣଙ୍କୁ" },
                { "word": "ବନ୍ଦେ", "meaning": "ମୁଁ ସ୍ତୁତି/ବନ୍ଦନା କରୁଛି" },
                { "word": "ମନ-ମାନସ-ମଧୁକରମ୍", "meaning": "ମୋର ମନରୂପକ ଭ୍ରମରକୁ" },
                { "word": "ଅର୍ପୟ", "meaning": "ଅର୍ପଣ କରନ୍ତୁ/ଲଗାଇ ଦିଅନ୍ତୁ" },
                { "word": "ନିଜ-ପଦ-ପଙ୍କଜ-ମକରନ୍ଦେ", "meaning": "ଆପଣଙ୍କ ପାଦପଦ୍ମର ଅମୃତ ରସରେ" }
            ]
        },
        {
            "id": 1,
            "lyric": "ୟଦପି ସମାଧିଷୁ ବିଧିରପି ପଶ୍ୟତି ନ ତବ ନଖାଗ୍ର-ମରୀଚିମ୍\nଇଦମ୍ ଇଚ୍ଛାମି ନିଶମ୍ୟ ତବାଚ୍ୟୁତ ତଦପି କୃପାଦ୍ଭୁତ-ବୀଚିମ୍ ।",
            "translation": "ହେ ଅଚ୍ୟୁତ! ସ୍ୱୟଂ ବ୍ରହ୍ମା ନିଜର ସମାଧିରେ ମଧ୍ୟ ଆପଣଙ୍କ ପାଦନଖର ସାମାନ୍ୟ କିରଣ ଦେଖିବାକୁ ଅସମର୍ଥ, କିନ୍ତୁ ମୁଁ ସେହି ଦର୍ଶନ ପାଇଁ ବ୍ୟାକୁଳ; କାରଣ ମୁଁ ଆପଣଙ୍କ ଅପାର କୃପାର ଅଦ୍ଭୁତ ଲହରୀ ବିଷୟରେ ଶୁଣିଛି।",
            "wordMeanings": [
                { "word": "ୟଦି ଅପି", "meaning": "ଯଦିଓ" },
                { "word": "ସମାଧିଷୁ", "meaning": "ଗଭୀର ଧ୍ୟାନରେ" },
                { "word": "ବିଧିଃ ଅପି", "meaning": "ବ୍ରହ୍ମା ମଧ୍ୟ" },
                { "word": "ପଶ୍ୟତି ନ", "meaning": "ଦେଖିପାରନ୍ତି ନାହିଁ" },
                { "word": "ତବ", "meaning": "ଆପଣଙ୍କ" },
                { "word": "ନଖ-ଅଗ୍ର", "meaning": "ନଖର ଅଗ୍ରଭାଗର" },
                { "word": "ମରୀଚିମ୍", "meaning": "କିରଣକୁ" },
                { "word": "ଇଦମ୍", "meaning": "ଏହା ହିଁ" },
                { "word": "ଇଚ୍ଛାମି", "meaning": "ମୁଁ ଇଚ୍ଛା କରୁଛି" },
                { "word": "ନିଶମ୍ୟ", "meaning": "ଶୁଣିବା ପରେ" },
                { "word": "ତବ", "meaning": "ଆପଣଙ୍କ" },
                { "word": "ଅଚ୍ୟୁତ", "meaning": "ହେ ଅଚ୍ୟୁତ!" },
                { "word": "ତତ୍ ଅପି", "meaning": "ତଥାପି" },
                { "word": "କୃପା-ଅଦ୍ଭୁତ-ବୀଚିମ୍", "meaning": "ଆପଣଙ୍କ କୃପାରୂପକ ଅଦ୍ଭୁତ ତରଙ୍ଗ" }
            ]
        },
        {
            "id": 2,
            "lyric": "ଭକ୍ତିର୍ ଉଦଞ୍ଚତି ୟଦ୍ୟପି ମାଧବ ନ ତ୍ୱୟି ମମ ତିଳ-ମାତ୍ରୀ\nପରମେଶ୍ୱରତା ତଦପି ତବାଧିକା ଦୁର୍ଘଟ-ଘଟଣ-ବିଧାତ୍ରୀ ।",
            "translation": "ହେ ମାଧବ! ଆପଣଙ୍କ ପ୍ରତି ମୋର ତିଳେ ମାତ୍ର ଭକ୍ତି ନାହିଁ। ତଥାପି ଆପଣ ପରମେଶ୍ୱର ହୋଇଥିବାରୁ, କେବଳ ଆପଣଙ୍କର ସେହି ଅଲୌକିକ ଶକ୍ତି ହିଁ ମୋ ଭଳି ଅଧମ ଜୀବ ପାଇଁ ଅସମ୍ଭବକୁ ସମ୍ଭବ କରିପାରିବ।",
            "wordMeanings": [
                { "word": "ଭକ୍ତିଃ", "meaning": "ଭକ୍ତି" },
                { "word": "ଉଦଞ୍ಚତି", "meaning": "ପ୍ରକାଶ ପାଉଛି" },
                { "word": "ୟଦି ଅପି", "meaning": "ଯଦିଓ" },
                { "word": "ମାଧବ", "meaning": "ହେ ମାଧବ!" },
                { "word": "ନ", "meaning": "ନାହିଁ" },
                { "word": "ତ୍ୱୟି", "meaning": "ଆପଣଙ୍କ ପ୍ରତି" },
                { "word": "ମମ", "meaning": "ମୋର" },
                { "word": "ତିଳ-ମାତ୍ରୀ", "meaning": "ତିଳେ ମାତ୍ର (ସାମାନ୍ୟ)" },
                { "word": "ପରମେଶ୍ୱରତା", "meaning": "ପରମେଶ୍ୱରତ୍ୱ ଗୁଣ" },
                { "word": "ତତ୍ ଅପି", "meaning": "ତଥାପି" },
                { "word": "ତବ", "meaning": "ଆପଣଙ୍କ" },
                { "word": "ଅଧିକା", "meaning": "ସର୍ବଶ୍ରେଷ୍ଠ" },
                { "word": "ଦୁର୍ଘଟ-ଘଟଣ-ବିଧାତ୍ରୀ", "meaning": "ଅସମ୍ଭବକୁ ସମ୍ଭବ କରୁଥିବା ଶକ୍ତି" }
            ]
        },
        {
            "id": 3,
            "lyric": "ଅୟମ୍ ଅବିଲୋଳତୟାଦ୍ୟ ସନାତନ କଳିତାଦ୍ଭୁତ-ରସ-ଭାରମ୍\nନିବସତୁ ନିତ୍ୟମ୍ ଇହାମୃତ ନିନ୍ଦତି ବିନ୍ଦନ୍ ମଧୁରିମ-ସାରମ୍ ।",
            "translation": "ହେ ସନାତନ ପ୍ରଭୁ! ଆପଣଙ୍କ ପାଦପଦ୍ମର ମାଧୁର୍ଯ୍ୟ ସ୍ୱର୍ଗର ଅମୃତଠାରୁ ମଧ୍ୟ ଶ୍ରେଷ୍ଠ। ମୋର ପ୍ରାର୍ଥନା ଯେ, ଆජିଠାରୁ ମୋର ଏହି ମନରୂପକ ଭ୍ରମର ସେହି ଅଦ୍ଭୁତ ରସରେ ମଗ୍ନ ହୋଇ ଆପଣଙ୍କ ଚରଣ କମଳରେ ସର୍ବଦା ପାଇଁ ସ୍ଥିର ହୋଇ ରହୁ।",
            "wordMeanings": [
                { "word": "ଅୟମ୍", "meaning": "ଏହି (ମନ)" },
                { "word": "ଅବିଲୋଳତୟା", "meaning": "ସ୍ଥିର ଭାବରେ" },
                { "word": "ଅଦ୍ୟ", "meaning": "ଆଜି" },
                { "word": "ସନାତନ", "meaning": "ହେ ସନାତନ ପ୍ରଭୁ!" },
                { "word": "କଳିତା", "meaning": "ଅନୁଭବ କରୁଥିବା" },
                { "word": "ଅଦ୍ଭୁତ-ରସ", "meaning": "ଅଦ୍ଭୁତ ଆନନ୍ଦ" },
                { "word": "ଭାରମ୍", "meaning": "ପରିପୂର୍ଣ୍ଣ" },
                { "word": "ନିବସତୁ", "meaning": "ବାସ କରୁ" },
                { "word": "ନିତ୍ୟମ୍", "meaning": "ସର୍ବଦା" },
                { "word": "ଇହ", "meaning": "ଏଠାରେ" },
                { "word": "ଅମୃତ", "meaning": "ଅମୃତ" },
                { "word": "ନିନ୍ଦତି", "meaning": "ପରାଜିତ କରୁଥିବା" },
                { "word": "비ନ୍ଦନ୍", "meaning": "ଲାଭ କରି" },
                { "word": "ମଧୁରିମ-ସାରମ୍", "meaning": "ମାଧୁର୍ଯ୍ୟର ସାର" }
            ]
        }
    ]
};

async function updateSong() {
    console.log('🔄 Updating song-krsnadevabhavantam in Supabase...');
    const { data, error } = await supabase
        .from('songs')
        .update({ structured_content: structuredContent })
        .eq('id', 'song-krsnadevabhavantam');

    if (error) {
        console.error('❌ Update Error:', error);
    } else {
        console.log('✅ Song updated successfully in Supabase!');
    }
}

updateSong();
