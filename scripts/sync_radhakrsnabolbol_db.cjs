const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = {
    id: 'song-radhakrsnabolbolboloresobai',
    title: 'ରାଧାକୃଷ୍ଣ ବଲ୍ ବଲ୍ ବଲ୍ ରେ ସବାଇ (Rādhā Kṛଷ୍ଣ Bol Bol Bolo Re Sobhāi)',
    title_odia: 'ରାଧାକୃଷ୍ଣ ବଲ୍ ବଲ୍ ବଲ୍ ରେ ସବାଇ',
    title_english: 'Rādhā Kṛଷ୍ଣ Bol Bol Bolo Re Sobhāi',
    author: 'Bhaktivinoda Thakura',
    category: 'Songs',
    type: 'html',
    published: true,
    status: 'COMPLETED',
    structured_content: {
        "verses": [
            {
                "id": 1,
                "lyric": "‘ରାଧାକୃଷ୍ଣ’ ବଲ୍ ବଲ୍ ବଲ୍ ରେ ସବାଇ ।\n(ଏଇ) ଶିକ୍ଷା ଦିୟା, ସବ ନଦୀୟା,\nଫିରଛେ ନେଚେ ଗୌର-ନିତାଇ ।।\n(ମିଛେ) ମାୟାର ବଶେ, ଯାଚ୍ଛ ଭେସେ’\nଖାଚ୍ଛ ହାବୁଡୁବୁ, ଭାଇ ।।୧।।",
                "translation": "\"ରାଧା କୃଷ୍ଣ!\" ନାମ ଜପ କର। ଏହି ଶିକ୍ଷā ଦେଇ ଗୌର ଓ ନିତାଇ ନଦୀୟାର ଗଳି କନ୍ଦିରେ ନାଚି ନାଚି ବୁଲୁଛନ୍ତି। ହେ ଭାଇ! ତୁମେମାନେ କାହିଁକି ଏହି ମିଥ୍ୟା ମାୟାର ବଶବର୍ତ୍ତୀ ହୋଇ ସଂସାର ରୂପକ ସମୁଦ୍ରରେ ଭାସୁଛ ଏବଂ ହାବୁଡୁବୁ ହେଉଛ?",
                "wordMeanings": [
                    { "word": "ରାଧା", "meaning": "ରାଧା" },
                    { "word": "କୃଷ୍ଣ", "meaning": "କୃଷ୍ଣ" },
                    { "word": "ବୋଲ", "meaning": "ଜପ କର" },
                    { "word": "ବୋଲ", "meaning": "ଜପ କର" },
                    { "word": "ବୋଲୋ", "meaning": "ଜପ କର" },
                    { "word": "ରେ", "meaning": "ହେ" },
                    { "word": "ସୋଭାଇ", "meaning": "ସମସ୍ତେ" },
                    { "word": "ଏଇ", "meaning": "ଏହି" },
                    { "word": "ଶିଖା", "meaning": "ଶିକ୍ଷା" },
                    { "word": "ଦିୟା", "meaning": "ପ୍ରଦାନ କରି" },
                    { "word": "ସବ", "meaning": "ସମସ୍ତ" },
                    { "word": "ନଦୀୟା", "meaning": "ନଦୀୟା" },
                    { "word": "ଫିରଛେ", "meaning": "ବୁଲୁଛନ୍ତି" },
                    { "word": "ନେଚେ'", "meaning": "ନୃତ୍ୟ କରି" },
                    { "word": "ଗୌର-ନିତାଇ", "meaning": "ଗୌର ଓ ନିତାଇ" },
                    { "word": "ମିଛେ", "meaning": "ମିଥ୍ୟା" },
                    { "word": "ମାୟାର", "meaning": "ମାୟାର" },
                    { "word": "ବୋଶେ", "meaning": "ବଶୀଭୂତ ହୋଇ" },
                    { "word": "ଯାଚ୍ଛୋ", "meaning": "ଯାଉଛ" },
                    { "word": "ବେସେ'", "meaning": "ଭାସି" },
                    { "word": "ଖାଚ୍ଛୋ", "meaning": "ହେଉଛ" },
                    { "word": "ହାବୁଡୁବୁ", "meaning": "ହାବୁଡୁବୁ (ବୁଡ଼ିବା ଓ ଉଠିବା)" },
                    { "word": "ଭାଇ", "meaning": "ଭାଇ" }
                ]
            },
            {
                "id": 2,
                "lyric": "(ଜୀବ) କୃଷ୍ଣ ଦାସ,         ଏ ବିଶ୍ବାସ\n       କରଲେ ତ ଆର ଦୁଃଖ ନାଇ ।\n(କୃଷ୍ଣ) ବଲବେ ଯବେ,   ପୁଲକ ହବେ,\n      ଝରବେ ଆଁଖି, ବଲି ତାଇ ।।୨।।",
                "translation": "\"ପ୍ରତ୍ୟେକ ଜୀବ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ନିତ୍ୟ ସେବକ\"—ଏହି ବିଶ୍ୱାସ ହୃଦୟରେ ରଖିଲେ ଆଉ କୌଣସି ଦୁଃଖ ରହିବ ନାହିଁ। ଯେତେବେଳେ ତୁମେ \"କୃଷ୍ଣ\" ନାମ ଜପ କରିବ, ସେତେବେଳେ ତୁମ ଶରୀର ରୋମାଞ୍ଚିତ ହେବ ଏବଂ ଆଖିରୁ ପ୍ରେମାଶ୍ରୁ ବୋହିବ।",
                "wordMeanings": [
                    { "word": "ଜୀବ", "meaning": "ଜୀବ (ଆତ୍ମା)" },
                    { "word": "କୃଷ୍ଣ-ଦାସ", "meaning": "କୃଷ୍ଣଙ୍କର ସେବକ" },
                    { "word": "ଏ", "meaning": "ଏହି" },
                    { "word": "বিଶ୍ୱାସ", "meaning": "ବିଶ୍ୱାସ" },
                    { "word": "କୋର୍ଲେ", "meaning": "କଲେ" },
                    { "word": "ତୋ'", "meaning": "ତେବେ" },
                    { "word": "ଆର", "meaning": "ଆଉ" },
                    { "word": "ଦୁଃଖ", "meaning": "କଷ୍ଟ" },
                    { "word": "ନାଇ", "meaning": "ନାହିଁ" },
                    { "word": "କୃଷ୍ଣ", "meaning": "କୃଷ୍ଣ" },
                    { "word": "ବୋଲ୍ବେ", "meaning": "କହିବ" },
                    { "word": "ଯବେ", "meaning": "ଯେତେବେଳେ" },
                    { "word": "ପୁଲକ", "meaning": "ରୋମାଞ୍ଚ" },
                    { "word": "ହବେ", "meaning": "ହେବ" },
                    { "word": "ଝୋର୍ବେ", "meaning": "ବୋହିବ" },
                    { "word": "ଆଙ୍ଖି", "meaning": "ଆଖିରୁ (ଲୁହ)" },
                    { "word": "ବୋଲି", "meaning": "କହୁଛି" },
                    { "word": "ତାଇ", "meaning": "ତାହା" }
                ]
            },
            {
                "id": 3,
                "lyric": "କୃଷ୍ଣ’ ବଲ,             ସଙ୍ଗେ ଚଲ,\n        ଏଇ ମାତ୍ର ଭିକ୍ଷା ଚାଇ ।\n(ଯାୟ) ସକଲ ବିପଦ    ଭକ୍ତି ବିନୋଦ\n     ବଲେନ୍ ଯଖନ ଓ ନାମ ଗାଇ ।।୩।।",
                "translation": "\"ରାଧା କୃଷ୍ଣ!\" ବୋଲି କୁହ ଏବଂ ମୋ ସାଥିରେ ଚାଲ, ମୁଁ ତୁମଠାରୁ କେବଳ ଏତିକି ଭିକ୍ଷା ଚାହୁଁଛି। ଭକ୍ତିବିନୋଦ କହୁଛନ୍ତି—ଯେତେବେଳେ ମୁଁ ସେହି ପବିତ୍ର ନାମ ଗାନ କରେ, ମୋର ସମସ୍ତ ବିପଦ ଦୂର ହୋଇଯାଏ ଏବଂ ମୁଁ ସର୍ବଦା ଜୟଯୁକ୍ତ ହୁଏ।",
                "wordMeanings": [
                    { "word": "ରାଧା", "meaning": "ରାଧା" },
                    { "word": "କୃଷ୍ଣ", "meaning": "କୃଷ୍ଣ" },
                    { "word": "ବୋଲୋ", "meaning": "କୁହ" },
                    { "word": "ସଙ୍ଗେ", "meaning": "ସାଥିରେ" },
                    { "word": "ଚୋଲୋ", "meaning": "ଚାଲ" },
                    { "word": "ଏଇ-ମାତ୍ର", "meaning": "କେବଳ ଏତିକି" },
                    { "word": "ଭିକ୍ଷା", "meaning": "ଭିକ୍ଷା" },
                    { "word": "ଚାଇ", "meaning": "ଚାହେଁ" },
                    { "word": "ଜୟ", "meaning": "ଜୟ" },
                    { "word": "ସକଳ", "meaning": "ସମସ୍ତ" },
                    { "word": "বিପଦ", "meaning": "ବିପତ୍ତି" },
                    { "word": "ଭକ୍ତିବିନୋଦ", "meaning": "ଭକ୍ତିବିନୋଦ" },
                    { "word": "ବୋଲେ", "meaning": "କହୁଛନ୍ତି" },
                    { "word": "ଯଖୋନ", "meaning": "ଯେତେବେଳେ" },
                    { "word": "ଓ-ନାମ", "meaning": "ସେହି ନାମ" },
                    { "word": "ଗାଇ", "meaning": "ଗାନ କରନ୍ତି" }
                ]
            }
        ]
    }
};

async function syncSong() {
    console.log('🔄 Syncing song-radhakrsnabolbolboloresobai to Supabase...');
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
