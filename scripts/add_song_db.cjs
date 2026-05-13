const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = {
    id: 'song-kaliyugesrichaitanya',
    title: 'କଳି ଯୁଗେ ଶ୍ରୀ ଚୈତନ୍ୟ (Kali Yuge Sri Caitanya)',
    title_odia: 'କଳି ଯୁଗେ ଶ୍ରୀ ଚୈତନ୍ୟ',
    title_english: 'Kali Yuge Sri Caitanya',
    author: 'Govinda Dasa Kaviraja',
    category: 'Songs',
    published: true,
    status: 'COMPLETED',
    structured_content: {
        "verses": [
            {
                "id": 1,
                "lyric": "କଳି-ଯୁଗେ ଶ୍ରୀ-ଚୈତନ୍ୟ ଅବନୀ କରିଲା ଧନ୍ୟ\nପତିତ-ପାବନ ଯାର ବାଣା ।\nପୂରବେ ରାଧାର ଭାବେ ଗୌରାଙ୍ଗ ଲଇହା ଏବେ\nନିଜ ରୂପ ଧରି କାଞ୍ଚା ସୋଣା ।।",
                "translation": "କଳିଯୁଗରେ ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ ଅବତାର ଗ୍ରହଣ କରି ଏହି ପୃଥିବୀକୁ ଧନ୍ୟ କରିଛନ୍ତି। ପତିତମାନଙ୍କୁ ପାବନ କରିବା ତାଙ୍କର ପ୍ରତିଜ୍ଞା ଅଟେ। ସେ ଶ୍ରୀରାଧାଙ୍କ ଭାବ ଗ୍ରହଣ କରି କଞ୍ଚା ସୁନା ପରି ଉଜ୍ଜ୍ୱଳ ଶରୀର ଧାରଣ କରିଛନ୍ତି।",
                "wordMeanings": [
                    { "word": "କଳି-ଯୁଗେ", "meaning": "କଳିଯୁଗରେ" },
                    { "word": "ଶ୍ରୀ-ଚୈତନ୍ୟ", "meaning": "ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ" },
                    { "word": "ଅବନୀ", "meaning": "ପୃଥିବୀକୁ" },
                    { "word": "କରିଲା", "meaning": "କଲେ" },
                    { "word": "ଧନ୍ୟ", "meaning": "ଧନ୍ୟ (ଗୌରବମୟ)" },
                    { "word": "ପତିତ-ପାବନ", "meaning": "ପତିତମାନଙ୍କୁ ଉଦ୍ଧାରକାରୀ" },
                    { "word": "ଯାର", "meaning": "ଯାହାଙ୍କର" },
                    { "word": "ବାଣା", "meaning": "ବାଣା (ପ୍ରତିଜ୍ଞା/ଧ୍ୱଜା)" },
                    { "word": "ପୂରବେ", "meaning": "ପୂର୍ବରୁ" },
                    { "word": "ରାଧାର", "meaning": "ଶ୍ରୀରାଧାଙ୍କର" },
                    { "word": "ଭାବେ", "meaning": "ଭାବରେ" },
                    { "word": "ଗୌରାଙ୍ଗ", "meaning": "ଗୌରାଙ୍ଗ" },
                    { "word": "ଲ-ଇହା", "meaning": "ଗ୍ରହଣ କରି" },
                    { "word": "ଏବେ", "meaning": "ଏବେ" },
                    { "word": "ନିଜ", "meaning": "ନିଜର" },
                    { "word": "ରୂପ", "meaning": "ରୂପ" },
                    { "word": "ଧରି", "meaning": "ଧାରଣ କରି" },
                    { "word": "କାଞ୍ଚା", "meaning": "କଞ୍ଚା (ଶୁଦ୍ଧ)" },
                    { "word": "ସୋଣା", "meaning": "ସୁନା" }
                ]
            },
            {
                "id": 2,
                "lyric": "ଗୌରାଙ୍ଗ ପତିତ-ପାବନ ଅବତାରି\nକଳି ଭୁଜଙ୍ଗମ ଦେଖି ହରି-ନାମେ ଜୀବ ରାଖି\nଆପନି ହଇଲା ଧନ୍ୱନ୍ତରି ।।",
                "translation": "ଶ୍ରୀ ଗୌରାଙ୍ଗ ପତିତମାନଙ୍କୁ ଉଦ୍ଧାର କରିବା ପାଇଁ ଅବତାର ଗ୍ରହଣ କରିଛନ୍ତି। କଳିଯୁଗ ରୂପୀ ସର୍ପ ଜୀବମାନଙ୍କୁ ଦଂଶନ କରୁଥିବାର ଦେଖି ସେ ସ୍ୱୟଂ ଧନ୍ୱନ୍ତରୀ ସାଜିଛନ୍ତି ଏବଂ ‘ହରିନାମ’ ରୂପୀ ମହୌଷଧ ଦେଇ ସମସ୍ତଙ୍କୁ ରକ୍ଷା କରୁଛନ୍ତି।",
                "wordMeanings": [
                    { "word": "ଗୌରାଙ୍ଗ", "meaning": "ଗୌରାଙ୍ଗ" },
                    { "word": "ପତିତ-ପାବନ", "meaning": "ପତିତମାନଙ୍କୁ ଉଦ୍ଧାରକାରୀ" },
                    { "word": "ଅବତାରୀ", "meaning": "ଅବତାର ରୂପେ ଓହ୍ଲାଇ" },
                    { "word": "କଳି", "meaning": "କଳିଯୁଗର" },
                    { "word": "ଭୁଜଙ୍ଗମ", "meaning": "ସର୍ପ" },
                    { "word": "ଦେଖି", "meaning": "ଦେଖି" },
                    { "word": "ହରି-ନାମେ", "meaning": "ହରିନାମ ଦ୍ୱାରା" },
                    { "word": "ଜୀବ", "meaning": "ଜୀବମାନଙ୍କୁ" },
                    { "word": "ରାଖି", "meaning": "ରକ୍ଷା କରି" },
                    { "word": "ଆପଣି", "meaning": "ନିଜେ" },
                    { "word": "ହ-ଇଲ", "meaning": "ହେଲେ" },
                    { "word": "ଧନ୍ୱନ୍ତରୀ", "meaning": "ଧନ୍ୱନ୍ତରୀ (ଦେବ ବୈଦ୍ୟ)" }
                ]
            },
            {
                "id": 3,
                "lyric": "ଗଦାଧର ଆଦି ଯତ ମହା ମହା ଭାଗବତ\nତାରା ସବ ଗୋରା-ଗୁଣ ଗାୟ ।\nଅଖିଳ ଭୁବନ ପତି ଗୋଲୋକେ ଯାଁହାର ସ୍ଥିତି\nହରି ବଲି ଅବନୀ ଲୋଠାୟ ।।",
                "translation": "ଗଦାଧର ପଣ୍ଡିତଙ୍କ ପରି ମହାନ୍ ଭକ୍ତମାନେ ଶ୍ରୀ ଗୌରାଙ୍ଗଙ୍କ ଗୁଣଗାନ କରନ୍ତି। ଯେଉଁ ପ୍ରଭୁଙ୍କ ନିତ୍ୟ ନିବାସ ଗୋଲୋକ ଧାମରେ ଏବଂ ଯିଏ ସମଗ୍ର ବ୍ରହ୍ମାଣ୍ଡର ସ୍ୱାମୀ, ସେ ଆଜି ପୃଥିବୀରେ ‘ହରି ହରି’ କହି ପ୍ରେମରେ ଗଡ଼ାଗଡ଼ି ହେଉଛନ୍ତି।",
                "wordMeanings": [
                    { "word": "ଗଦାଧର", "meaning": "ଗଦାଧର" },
                    { "word": "ଆଦି", "meaning": "ଆଦି (ଇତ୍ୟାଦି)" },
                    { "word": "ଯତ", "meaning": "ଯେତେ" },
                    { "word": "ମହା", "meaning": "ମହାନ୍" },
                    { "word": "ମହା", "meaning": "ମହାନ୍" },
                    { "word": "ଭାଗବତ", "meaning": "ଭକ୍ତଗଣ" },
                    { "word": "ତାରା", "meaning": "ସେମାନେ" },
                    { "word": "ସବ", "meaning": "ସମସ୍ତେ" },
                    { "word": "ଗୋରା-ଗୁଣ", "meaning": "ଗୌରାଙ୍ଗଙ୍କ ଗୁଣ" },
                    { "word": "ଗାୟ", "meaning": "ଗାନ କରନ୍ତି" },
                    { "word": "ଅଖିଳ", "meaning": "ସମଗ୍ର" },
                    { "word": "ଭୁବନ", "meaning": "ବ୍ରହ୍ମାଣ୍ଡର" },
                    { "word": "ପତି", "meaning": "ସ୍ୱାମୀ" },
                    { "word": "ଗୋଲୋକେ", "meaning": "ଗୋଲୋକ ଧାମରେ" },
                    { "word": "ଯାଁହାର", "meaning": "ଯାହାଙ୍କର" },
                    { "word": "ସ୍ଥିତି", "meaning": "ସ୍ଥିତି (ନିବାସ)" },
                    { "word": "ହରି", "meaning": "ହରି" },
                    { "word": "ବଲି", "meaning": "ବୋଲି (କହି)" },
                    { "word": "ଅବନୀ", "meaning": "ପୃଥିବୀରେ" },
                    { "word": "ଲୋଠାୟ", "meaning": "ଗଡ଼ାଗଡ଼ି ହେଉଛନ୍ତି" }
                ]
            },
            {
                "id": 4,
                "lyric": "ସୋନରି ପୂରବ ଗୁଣ ମୁରଛୟ ପୁନଃ ପୁନଃ\nପରଶେ ଧରଣୀ ଉଲସିତ ।\nଚରଣ କମଳ କିବା ନଖର ଉଜୋର ଶୋତା\nଗୋବିନ୍ଦ-ଦାସ ସେ ବଞ୍ଚିତ ।।",
                "translation": "ନିଜର ପୂର୍ବ ଅବତାରର ଲୀଳାକୁ ମନେ ପକାଇ ସେ ବାରମ୍ବାର ମୂର୍ଚ୍ଛିତ ହେଉଛନ୍ତି। ତାଙ୍କ ସ୍ପର୍ଶରେ ପୃଥିବୀ ଆନନ୍ଦିତ ହେଉଛି। ତାଙ୍କ ଚରଣ କମଳ ଓ ଉଜ୍ଜ୍ୱଳ ନଖଗୁଡ଼ିକର ଶୋଭା ଅତୁଳନୀୟ, କିନ୍ତୁ କେବଳ ଏହି ଗୋବିନ୍ଦ ଦାସ ହିଁ ସେହି ସୌଭାଗ୍ୟରୁ ବଞ୍ଚିତ ହୋଇ ରହିଗଲା।",
                "wordMeanings": [
                    { "word": "ସୋନରି", "meaning": "ସ୍ମରଣ କରି" },
                    { "word": "ପୂରବ", "meaning": "ପୂର୍ବ (ପୂର୍ବ ଅବତାରର)" },
                    { "word": "ଗୁଣ", "meaning": "ଗୁଣ" },
                    { "word": "ମୁରଛୟ", "meaning": "ମୂର୍ଚ୍ଛିତ ହେଉଛନ୍ତି" },
                    { "word": "ପୁନଃ", "meaning": "ପୁଣି" },
                    { "word": "ପୁନଃ", "meaning": "ପୁଣି" },
                    { "word": "ପରଶେ", "meaning": "ସ୍ପର୍ଶରେ" },
                    { "word": "ଧରଣୀ", "meaning": "ଧରଣୀ (ପୃଥିବୀ)" },
                    { "word": "ଉଲସିତ", "meaning": "ଉଲ୍ଲସିତ (ଆନନ୍ଦିତ)" },
                    { "word": "ଚରଣ", "meaning": "ଚରଣ" },
                    { "word": "କମଳ", "meaning": "ପଦ୍ମ" },
                    { "word": "କିବା", "meaning": "କିବା" },
                    { "word": "ନଖର", "meaning": "ନଖ" },
                    { "word": "ଉଜୋର", "meaning": "ଉଜ୍ଜ୍ୱଳ" },
                    { "word": "ଶୋତା", "meaning": "ଶୋଭା" },
                    { "word": "ଗୋବିନ୍ଦ-ଦାସ", "meaning": "ଗୋବିନ୍ଦ ଦାସ" },
                    { "word": "ସେ", "meaning": "ସେ" },
                    { "word": "ବଞ୍ଚିତ", "meaning": "ବଞ୍ଚିତ" }
                ]
            }
        ]
    }
};

async function addSong() {
    console.log('Upserting song to Supabase...');
    const { data, error } = await supabase
        .from('songs')
        .upsert(songData, { onConflict: 'id' });

    if (error) {
        console.error('Error upserting song:', error);
    } else {
        console.log('Successfully upserted song:', songData.id);
    }
}

addSong();
