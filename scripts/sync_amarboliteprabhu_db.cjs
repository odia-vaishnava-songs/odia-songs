const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = {
    id: 'song-amarboliteprabhu',
    title: 'ଆମାର ବୋଲିତେ ପ୍ରଭୁ (Amar Bolite Prabhu)',
    title_odia: 'ଆମାର ବୋଲିତେ ପ୍ରଭୁ',
    title_english: 'Amar Bolite Prabhu',
    author: 'Bhaktivinoda Thakura',
    category: 'Songs',
    type: 'html',
    published: true,
    status: 'COMPLETED',
    structured_content: {
        "verses": [
            {
                "id": 1,
                "lyric": "‘ଆମାର’ ବୋଲିତେ ପ୍ରଭୁ ! ଆର କିଛୁ ନାଇଁ\nତୁମି-ଇ ଆମାର ମାତ୍ର ପିତା-ବନ୍ଧୁ-ଭାଇ ।।୧।।",
                "translation": "ହେ ପ୍ରଭୁ! ‘ମୋର’ ବୋଲି ବିଚାର କରିବାକୁ ଅନ୍ୟ କିଛି ନାହିଁ। କେବଳ ଆପଣ ହିଁ ମୋର ପିତା, ମୋର ବନ୍ଧୁ ଏବଂ ମୋର ଭାଇ।",
                "wordMeanings": [
                    { "word": "ଆମାର", "meaning": "‘ମୋର’" },
                    { "word": "ବୋଲିତେ", "meaning": "କହିବାକୁ/ବିଚାର କରିବାକୁ" },
                    { "word": "ପ୍ରଭୁ!", "meaning": "ହେ ପ୍ରଭୁ!" },
                    { "word": "ଆର", "meaning": "ଅନ୍ୟ" },
                    { "word": "କିଛୁ", "meaning": "କିଛି" },
                    { "word": "ନାହି", "meaning": "ନାହିଁ" },
                    { "word": "ତୁମି-ଇ", "meaning": "ଆପଣ ହିଁ" },
                    { "word": "ଆମାର", "meaning": "ମୋର" },
                    { "word": "ମାତ୍ର", "meaning": "କେବଳ" },
                    { "word": "ପିତା", "meaning": "ପିତା" },
                    { "word": "ବନ୍ଧୁ", "meaning": "ବନ୍ଧୁ" },
                    { "word": "ଭାଇ", "meaning": "ଭାଇ" }
                ]
            },
            {
                "id": 2,
                "lyric": "ବନ୍ଧୁ, ଦାରା, ସୁତ, ସୁତା—ତବ ଦାସୀ ଦାସ\nସେଇ ତୋ’ ସମ୍ବନ୍ଧେ ସବେ ଆମାର ପ୍ରୟାସ ।।୨।।",
                "translation": "ମୋର ବନ୍ଧୁ, ପତ୍ନୀ, ପୁତ୍ର ଏବଂ କନ୍ୟାମାନେ ସମସ୍ତେ ଆପଣଙ୍କର ସେବକ ଓ ସେବିକା। ସେହି ସମ୍ପର୍କକୁ ଆଧାର କରି ହିଁ ସେମାନଙ୍କ ପାଇଁ ମୋର ସମସ୍ତ ପ୍ରଚେଷ୍ଟା।",
                "wordMeanings": [
                    { "word": "ବନ୍ଧୁ", "meaning": "ବନ୍ଧୁଗଣ" },
                    { "word": "ଦାରା", "meaning": "ପତ୍ନୀ" },
                    { "word": "ସୁତ", "meaning": "ପୁତ୍ରଗଣ" },
                    { "word": "ସୁତା", "meaning": "କନ୍ୟାଗଣ" },
                    { "word": "ତବ", "meaning": "ଆପଣଙ୍କର" },
                    { "word": "ଦାସୀ", "meaning": "ସେବିକା" },
                    { "word": "ଦାସ", "meaning": "ସେବକ" },
                    { "word": "ସେଇ", "meaning": "ସେହି" },
                    { "word": "ତୋ", "meaning": "ନିଶ୍ଚିତ ଭାବେ" },
                    { "word": "ସମ୍ବନ୍ଧେ", "meaning": "ସମ୍ପର୍କରେ" },
                    { "word": "ସବେ", "meaning": "ସମସ୍ତଙ୍କ ସହିତ" },
                    { "word": "ଆମାର", "meaning": "ମୋର" },
                    { "word": "ପ୍ରୟାସ", "meaning": "ପ୍ରଚେଷ୍ଟା" }
                ]
            },
            {
                "id": 3,
                "lyric": "ଧନ, ଜନ, ଗୃହ, ଦାର ‘ତୋମାର’ ବୋଲିୟା\nରକ୍ଷା କରି ଆମି ମାତ୍ର ସେବକ ହୋଇୟା ।।୩।।",
                "translation": "ମୋର ଧନ, ପରିବାର ଏବଂ ଏହି ଘରକୁ ‘ଆପଣଙ୍କର’ ବୋଲି ମାନି, କେବଳ ଆପଣଙ୍କର ଜଣେ ସେବକ ଭାବରେ ମୁଁ ସେଗୁଡ଼ିକର ଯତ୍ନ ନେଉଛି।",
                "wordMeanings": [
                    { "word": "ଧନ", "meaning": "ସମ୍ପତ୍ତି" },
                    { "word": "ଜନ", "meaning": "ଲୋକମାନେ" },
                    { "word": "ଗୃହ", "meaning": "ଘର" },
                    { "word": "ଦାର", "meaning": "ଦ୍ୱାର/ପରିବାର" },
                    { "word": "ତୋମାର", "meaning": "ଆପଣଙ୍କର" },
                    { "word": "ବୋଲିୟା", "meaning": "କହି/ମାନି" },
                    { "word": "ରକ୍ଷା", "meaning": "ସୁରକ୍ଷା/ଯତ୍ନ" },
                    { "word": "କରି", "meaning": "କରୁଛି" },
                    { "word": "ଆମି", "meaning": "ମୁଁ" },
                    { "word": "ମାତ୍ର", "meaning": "କେବଳ" },
                    { "word": "ସେବକ", "meaning": "ସେବକ" },
                    { "word": "ହୋଇୟା", "meaning": "ହୋଇ" }
                ]
            },
            {
                "id": 4,
                "lyric": "ତୋମାର କାର୍ଯ୍ୟେର ତରେ ଉପାର୍ଜିବୋ ଧନ\nତୋମାର ସଂସାରେ ବ୍ୟୟ କରିବୋ ବହନ ।।୪।।",
                "translation": "ଆପଣଙ୍କର ସେବା ଓ କାର୍ଯ୍ୟ ନିମନ୍ତେ ମୁଁ ଅର୍ଥ ଉପାର୍ଜନ କରିବି ଏବଂ ଆପଣଙ୍କ ସଂସାରର ସମସ୍ତ ଖର୍ଚ୍ଚ ମୁଁ ବହନ କରିବି।",
                "wordMeanings": [
                    { "word": "ତୋମାର", "meaning": "ଆପଣଙ୍କର" },
                    { "word": "କାର୍ଯ୍ୟେର", "meaning": "କାର୍ଯ୍ୟ ପାଇଁ" },
                    { "word": "ତରେ", "meaning": "ନିମନ୍ତେ" },
                    { "word": "ଉପାର୍ଜିବୋ", "meaning": "ଉପାର୍ଜନ କରିବି" },
                    { "word": "ଧନ", "meaning": "ଅର୍ଥ" },
                    { "word": "ତୋମାର", "meaning": "ଆପଣଙ୍କର" },
                    { "word": "ସଂସାର", "meaning": "ପରିବାର/ସଂସାର" },
                    { "word": "ବ୍ୟୟ", "meaning": "ଖର୍ଚ୍ଚ" },
                    { "word": "କରିବୋ", "meaning": "କରିବି" },
                    { "word": "ବହନ", "meaning": "ବହନ" }
                ]
            },
            {
                "id": 5,
                "lyric": "ଭାଲୋ-ମନ୍ଦ ନାହି ଜାନି ସେବା ମାତ୍ର କରି\nତୋମାର ସଂସାରେ ଆମି ବିଷୟ-ପ୍ରହରୀ ।।୫।।",
                "translation": "ମୁଁ ଭଲ କିମ୍ବା ମନ୍ଦ ଜାଣେ ନାହିଁ, ମୁଁ କେବଳ ସେବା କରିବା ଜାଣେ। ଆପଣଙ୍କ ସଂସାରରେ ମୁଁ କେବଳ ସମ୍ପତ୍ତିର ଜଣେ ଜଗୁଆଳି।",
                "wordMeanings": [
                    { "word": "ଭାଲୋ", "meaning": "ଭଲ" },
                    { "word": "ମନ୍ଦ", "meaning": "ମନ୍ଦ" },
                    { "word": "ନାହି", "meaning": "ନାହିଁ" },
                    { "word": "ଜାନି", "meaning": "ଜାଣେ" },
                    { "word": "ସେବା", "meaning": "ସେବା" },
                    { "word": "ମାତ୍ର", "meaning": "କେବଳ" },
                    { "word": "କରି", "meaning": "କରୁଛି" },
                    { "word": "ତୋମାର", "meaning": "ଆପଣଙ୍କର" },
                    { "word": "ସଂସାରେ", "meaning": "ସଂସାରରେ" },
                    { "word": "ଆମି", "meaning": "ମୁଁ" },
                    { "word": "ବିଷୟ", "meaning": "ସମ୍ପତ୍ତି" },
                    { "word": "ପ୍ରହରୀ", "meaning": "ଜଗୁଆଳି" }
                ]
            },
            {
                "id": 6,
                "lyric": "ତୋମାର ଇଚ୍ଛାୟ ମୋର ଇନ୍ଦ୍ରିୟ-ଚାଳନା\nଶ୍ରବଣ, ଦର୍ଶନ, ଘ୍ରାଣ, ଭୋଜନ-ବାସନା ।।୬।।",
                "translation": "ମୁଁ ମୋର ଇନ୍ଦ୍ରିୟଗୁଡ଼ିକୁ—ଶୁଣିବା, ଦେଖିବା, ଶୁଙ୍ଘିବା ଏବଂ ଭୋଜନ କରିବା ଆଦି ଅଭିଳାଷକୁ—କେବଳ ଆପଣଙ୍କ ଇଚ୍ଛା ଅନୁସାରେ ପରିଚାଳିତ କରୁଛି।",
                "wordMeanings": [
                    { "word": "ତୋମାର", "meaning": "ଆପଣଙ୍କର" },
                    { "word": "ଇଚ୍ଛାୟ", "meaning": "ଇଚ୍ଛା ଦ୍ୱାରା" },
                    { "word": "ମୋର", "meaning": "ମୋର" },
                    { "word": "ଇନ୍ଦ୍ରିୟ", "meaning": "ଇନ୍ଦ୍ରିୟଗୁଡ଼ିକର" },
                    { "word": "ଚାଲନା", "meaning": "ପରିଚାଳନା" },
                    { "word": "ଶ୍ରବଣ", "meaning": "ଶ୍ରବଣ" },
                    { "word": "ଦର୍ଶନ", "meaning": "ଦର୍ଶନ" },
                    { "word": "ଘ୍ରାଣ", "meaning": "ଘ୍ରାଣ" },
                    { "word": "ଭୋଜନ", "meaning": "ଭୋଜନ" },
                    { "word": "ବାସନା", "meaning": "ଅଭିଳାଷ" }
                ]
            },
            {
                "id": 7,
                "lyric": "ନିଜ-ସୁଖ ଲାଗି’ କିଛୁ ନାହି କରି ଆର\nଭକ୍ତିବିନୋଦ ବୋଲେ, ତବ ସୁଖ-ସାର ।।୭।।",
                "translation": "ମୁଁ ନିଜ ସୁଖ ପାଇଁ ଆଉ କୌଣସି ପ୍ରଚେଷ୍ଟା କରୁନାହିଁ। ଭକ୍ତିବିନୋଦ କହୁଛନ୍ତି, “ଆପଣଙ୍କ ସୁଖ ଓ ସନ୍ତୋଷ ହିଁ ଜୀବନର ପ୍ରକୃତ ସାର।”",
                "wordMeanings": [
                    { "word": "ନିଜ", "meaning": "ନିଜର" },
                    { "word": "ସୁଖ", "meaning": "ସୁଖ" },
                    { "word": "ଲାଗି", "meaning": "ପାଇଁ" },
                    { "word": "କିଛୁ", "meaning": "କିଛି" },
                    { "word": "ନାହି", "meaning": "ନାହିଁ" },
                    { "word": "କରି", "meaning": "କରୁଛି" },
                    { "word": "ଆର", "meaning": "ଅଧିକ" },
                    { "word": "ଭକତିବିନୋଦ", "meaning": "ଭକ୍ତିବିନୋଦ" },
                    { "word": "ବୋଲେ", "meaning": "କହୁଛନ୍ତି" },
                    { "word": "ତବ", "meaning": "ଆପଣଙ୍କର" },
                    { "word": "ସୁଖ", "meaning": "ସୁଖ" },
                    { "word": "ସାର", "meaning": "ସାର" }
                ]
            }
        ]
    }
};

async function syncSong() {
    console.log('🔄 Syncing song-amarboliteprabhu to Supabase...');
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
