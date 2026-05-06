const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = {
    id: 'song-bandhusangeyaditavarange',
    title: 'ବନ୍ଧୁ ସଙ୍ଗେ ଯଦି ତବ ରଙ୍ଗ (Bandhu Sange Yadi Tava Range)',
    title_odia: 'ବନ୍ଧୁ ସଙ୍ଗେ ଯଦି ତବ ରଙ୍ଗ',
    title_english: 'Bandhu Sange Yadi Tava Range',
    author: 'Bhaktivinoda Thakura',
    category: 'Songs',
    type: 'html',
    published: true,
    status: 'COMPLETED',
    structured_content: {
        "verses": [
            {
                "id": 1,
                "lyric": "ବନ୍ଧୁ-ସଙ୍ଗେ ଯଦି ତବ ରଙ୍ଗ ପରିହାସ, ଥାକେ ଅଭିଲାଷ (ଥାକେ ଅଭିଲାଷ)\nତବେ ମୋର କଥା ରାଖ, ଯେୟୋ ନାକୋ ଯେୟୋ ନାକୋ,\nମଥୁରାୟ କେଶୀ-ତୀର୍ଥ-ଘାଟେର ସକାଶ ।।୧।।",
                "translation": "ଯଦି ତୁମର ନିଜ ବନ୍ଧୁବାନ୍ଧବ ଓ ପରିବାର ସହିତ ହସଖୁସିରେ ସମୟ ବିତାଇବାର ଇଚ୍ଛା ଥାଏ, ତେବେ ମୋର ଏହି ଗୋଟିଏ କଥା ରଖ—ତୁମେ ଭୁଲରେ ବି ମଥୁରା ବୃନ୍ଦାବନର କେଶୀ-ଘାଟ ନିକଟକୁ ଯାଅ ନାହିଁ।",
                "wordMeanings": [
                    { "word": "ବନ୍ଧୁ-ସଙ୍ଗେ", "meaning": "ବନ୍ଧୁବାନ୍ଧବଙ୍କ ସହ" },
                    { "word": "ଯଦି", "meaning": "ଯଦି" },
                    { "word": "ତବ", "meaning": "ତୁମର" },
                    { "word": "ରଙ୍ଗ ପରିହାସ", "meaning": "ହସଖୁସି ଓ ମଜା ମଜଲିସ୍" },
                    { "word": "ଥାକେ ଅଭିଲାଷ", "meaning": "ଅଭିଳାଷ ବା ଇଚ୍ଛା ଥାଏ" },
                    { "word": "ତବେ", "meaning": "ତେବେ" },
                    { "word": "ମୋର କଥା ରାଖ", "meaning": "ମୋ କଥା ମାନ" },
                    { "word": "ଯେୟୋ ନାକୋ", "meaning": "ଯାଅ ନାହିଁ" },
                    { "word": "ମଥୁରାୟ", "meaning": "ମଥୁରାର (ବୃନ୍ଦାବନର)" },
                    { "word": "କେଶୀ-ତୀର୍ଥ-ଘାଟେର ସକାଶ", "meaning": "କେଶୀ-ଘାଟ ନିକଟକୁ" }
                ]
            },
            {
                "id": 2,
                "lyric": "ଗୋବିନ୍ଦ ବିଗ୍ରହ ଧରି’, ତଥାୟ ଆଛେନ ହରି,\nନୟନେ ବଙ୍କିମ-ଦୃଷ୍ଟି, ମୁଖେ ମନ୍ଦ-ହାସ\nକିବା ତ୍ରି-ଭଙ୍ଗମ ଠାମ, ବର୍ଣ୍ଣ ସମୁଜ୍ଜ୍ୱଳ ଶ୍ୟାମ,\nନବ-କିଶଳୟ ଶୋଭା ଶ୍ରୀ ଅଙ୍ଗେ ପ୍ରକାଶ ।।୨।।",
                "translation": "ସେଠାରେ ଶ୍ରୀହରି ସମସ୍ତଙ୍କୁ ଆନନ୍ଦ ପ୍ରଦାନକାରୀ 'ଗୋବିନ୍ଦ' ରୂପରେ ବିରାଜମାନ। ତାଙ୍କର ସେହି ତେରଛା ଚାହାଣି ଓ ମୁହଁର ମୃଦୁ ହସ ଅତି ମନୋହର। ତାଙ୍କର ଶ୍ୟାମଳ ଶରୀର ନୂଆ କଅଁଳ ପତ୍ର ପରି ଝଟକୁଛି ଏବଂ ସେ ଅତି ସୁନ୍ଦର ତ୍ରିଭଙ୍ଗୀ ଠାଣିରେ ଛିଡ଼ା ହୋଇଛନ୍ତି।",
                "wordMeanings": [
                    { "word": "ଗୋବିନ୍ଦ ବିଗ୍ରହ ଧରି", "meaning": "ଗୋବିନ୍ଦ ରୂପ ଧାରଣ କରି" },
                    { "word": "ତଥାୟ ଆଛେନ ହରି", "meaning": "ସେଠାରେ ଶ୍ରୀହରି ବିରାଜମାନ କରିଛନ୍ତି" },
                    { "word": "ନୟନେ ବଙ୍କିମ-ଦୃଷ୍ଟି", "meaning": "ଆଖିରେ ତେରଛା ଚାହାଣି" },
                    { "word": "ମୁଖେ ମନ୍ଦ-ହାସ", "meaning": "ମୁହଁରେ ମୃଦୁ ହସ" },
                    { "word": "କିବା ତ୍ରି-ଭଙ୍ଗମ ଠାମ", "meaning": "କି ଅପୂର୍ବ ତ୍ରିଭଙ୍ଗୀ ଠାଣି" },
                    { "word": "ବର୍ଣ୍ଣ ସମୁଜ୍ଜ୍ୱଳ ଶ୍ୟାମ", "meaning": "ଅତ୍ୟନ୍ତ ଉଜ୍ଜ୍ୱଳ ଶ୍ୟାମଳ ବର୍ଣ୍ଣ" },
                    { "word": "ନବ-କିଶଳୟ ଶୋଭା", "meaning": "ନୂଆ କଅଁଳ ପତ୍ର ପରି ଶୋଭା" },
                    { "word": "ଶ୍ରୀ ଅଙ୍ଗେ ପ୍ରକାଶ", "meaning": "ଶ୍ରୀଅଙ୍ଗରୁ ପ୍ରକାଶ ପାଉଛି" }
                ]
            },
            {
                "id": 3,
                "lyric": "ଅଧରେ ବଂଶୀ-ଟୀ ତା’ର, ଅନର୍ଥେର ମୂଳାଧାର,\nଶିଖି-ଚୂଡ଼ାକେଓ ଭାଇ କରୋ ନା ବିଶ୍ୱାସ\nସେ ମୂର୍ତ୍ତି ନୟନେ ହେରେ, କେହ ନାହି ଘରେ ଫିରେ,\nସଂସାରୀ ଗୃହୀର ଯେ ଗୋ ହୟ ସର୍ବ-ନାଶ\n(ତାାଇ ମୋର ମନେ ବଡ଼ ତ୍ରାସ)\nଘଟିବେ ବିପଦ ଭାରୀ, ଯେୟୋ ନାକୋ ହେ ସଂସାରୀ,\nମଥୁରାୟ କେଶୀ-ତୀର୍ଥ-ଘାଟେର ସକାଶ ।।୩।।",
                "translation": "ତାଙ୍କ ଓଠରେ ଥିବା ସେହି ବଂଶୀର ସ୍ୱର ହିଁ ସବୁ ଅନର୍ଥର ମୂଳ, ଯାହା ମଣିଷକୁ ପାଗଳ କରିଦିଏ। ହେ ଭାଇ! ସେହି ମୟୂର ଚୂଳଧାରୀ କୃଷ୍ଣଙ୍କୁ ବିଶ୍ୱାସ କରନାହିଁ। ଯଦି ଥରେ ତୁମେ ସେହି ରୂପ ଦେଖିଦେବ, ତେବେ ତୁମେ ଆଉ କେବେ ଘରକୁ ଫେରି ପାରିବ ନାହିଁ। ତୁମର ସାଂସାରିକ ସୁଖ ସବୁଦିନ ପାଇଁ ଶେଷ ହୋଇଯିବ। (ଏହା ହିଁ ମୋର ବଡ଼ ଭୟ!) ତେଣୁ ଯଦି ସଂସାର କରିବାକୁ ଚାହୁଁଥାଅ, ତେବେ କେଶୀ-ଘାଟକୁ ଆଦୌ ଯାଅ ନାହିଁ।",
                "wordMeanings": [
                    { "word": "ଅଧରେ ବଂଶୀ-ଟୀ ତା’ର", "meaning": "ତାଙ୍କ ଓଠରେ ଥିବା ସେହି ବଂଶୀ" },
                    { "word": "ଅନର୍ଥେର ମୂଳାଧାର", "meaning": "ସମସ୍ତ ପାଗଳାମି ବା ଅନର୍ଥର ମୂଳ କାରଣ" },
                    { "word": "ଶିଖି-ଚୂଡ଼ାକେଓ", "meaning": "ସେହି ମୟୂର ଚୂଳଧାରୀଙ୍କୁ" },
                    { "word": "ଭାଇ କରୋ ନା ବିଶ୍ୱାସ", "meaning": "ହେ ଭାଇ! ଆଦୌ ବିଶ୍ୱାସ କରନାହିଁ" },
                    { "word": "ସେ ମୂର୍ତ୍ତି ନୟନେ ହେରେ", "meaning": "ସେହି ରୂପକୁ ଆଖିରେ ଦେଖିଲେ" },
                    { "word": "କେହ ନାହି ଘରେ ଫିରେ", "meaning": "କହି କେବେ ଘରକୁ ଫେରି ପାରନ୍ତି ନାହିଁ" },
                    { "word": "ସଂସାରୀ ଗୃହୀର", "meaning": "ସାଂସାରିକ ଗୃହସ୍ଥର" },
                    { "word": "ସର୍ବ-ନାଶ", "meaning": "ସବୁ କିଛି ଶେଷ" },
                    { "word": "ଘଟିବେ ବିପଦ ଭାରୀ", "meaning": "ବଡ଼ ବିପଦ ମାଡ଼ି ଆସିବ" }
                ]
            }
        ]
    }
};

async function syncSong() {
    console.log('🔄 Syncing song-bandhusangeyaditavarange to Supabase...');
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
