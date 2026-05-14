const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const songId = 'song-Bolo Hari Bolo';
const structuredContent = {
    "verses": [
        {
            "id": 1,
            "lyric": "ବୋଲୋ ହରି ବୋଲୋ (୩ ଥର)\nମନେର ଆନନ୍ଦେ, ଭାଇ, ବୋଲୋ ହରି ବୋଲୋ\nବୋଲୋ ହରି ବୋଲୋ (୩ ଥର)\nଜନମେ ଜନମେ ସୁଖେ ବୋଲୋ ହରି ବୋଲୋ",
            "translation": "\"ହରି!\" ନାମ ଜପ କର। ହେ ମୋର ଭାଇମାନେ, ମନରେ ପରମ ଆନନ୍ଦ ରଖି \"ହରି!\" ବୋଲି ଡାକ। ଜନ୍ମ ଜନ୍ମ ଧରି ଅତ୍ୟନ୍ତ ସୁଖରେ ସେହି \"ହରି!\" ନାମ ଗାନ କର।",
            "wordMeanings": [
                { "word": "ବୋଲୋ", "meaning": "ଜପ କର" },
                { "word": "ହରି", "meaning": "ହରି" },
                { "word": "ମନେର", "meaning": "ମନର" },
                { "word": "ଆନନ୍ଦେ", "meaning": "ଆନନ୍ଦରେ" },
                { "word": "ଭାଇ", "meaning": "ହେ ଭାଇମାନେ" },
                { "word": "ଜନମେ ଜନମେ", "meaning": "ଜନ୍ମରେ ଜନ୍ମରେ" },
                { "word": "ସୁଖେ", "meaning": "ସୁଖରେ" }
            ]
        },
        {
            "id": 2,
            "lyric": "ବୋଲୋ ହରି ବୋଲୋ (୩ ଥର)\nମାନବ-ଜନ୍ମ ପେ’ୟେ, ଭାଇ, ବୋଲୋ ହରି ବୋଲୋ\nବୋଲୋ ହରି ବୋଲୋ (୩ ଥର)\nସୁଖେ ଥାକୋ, ଦୁଃଖେ ଥାକୋ, ବୋଲୋ ହରି ବୋଲୋ",
            "translation": "\"ହରି!\" ନାମ ଜପ କର। ହେ ଭାଇମାନେ, ଏହି ଦୁର୍ଲଭ ମନୁଷ୍ୟ ଜନ୍ମ ପାଇ \"ହରି!\" ନାମ ଗାନ କର। ତୁମେ ସୁଖରେ ଥାଅ କିମ୍ବା ଦୁଃଖରେ, ସର୍ବଦା ସେହି \"ହରି!\" ନାମ ହିଁ ଜପ କର।",
            "wordMeanings": [
                { "word": "ମାନବ-ଜନ୍ମ", "meaning": "ମନୁଷ୍ୟ ଜନ୍ମ" },
                { "word": "ପେ'ୟେ", "meaning": "ପାଇ" },
                { "word": "ସୁଖେ ଥାକୋ", "meaning": "ସୁଖରେ ରୁହ" },
                { "word": "ଦୁଃଖେ ଥାକୋ", "meaning": "ଦୁଃଖରେ ରୁହ" }
            ]
        },
        {
            "id": 3,
            "lyric": "ବୋଲୋ ହରି ବୋଲୋ (୩ ଥର)\nସମ୍ପଦେ ବିପଦେ, ଭାଇ, ବୋଲୋ ହରି ବୋଲୋ\nବୋଲୋ ହରି ବୋଲୋ (୩ ଥର)\nଗୃହେ ଥାକୋ, ବନେ ଥାକୋ, ବୋଲୋ ହରି ବୋଲୋ\nକୃଷ୍ଣେର ସଂସାରେ ଥାକି’ ବୋଲୋ ହରି ବୋଲୋ",
            "translation": "\"ହରି!\" ନାମ ଜପ କର। ହେ ଭାଇମାନେ, ସମ୍ପତ୍ତି କିମ୍ବା ବିପତ୍ତି—ଯେକୌଣସି ପରିସ୍ଥିତିରେ \"ହରି!\" ନାମ ଗାନ କର। ତୁମେ ଘରେ ରୁହ କିମ୍ବା ବନରେ, କିନ୍ତୁ \"ହରି!\" ନାମ ଛାଡ଼ ନାହିଁ। ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଏହି ସଂସାରରେ ରହି ସର୍ବଦା \"ହରି!\" ନାମ ଜପ କର।",
            "wordMeanings": [
                { "word": "ସମ୍ପଦେ", "meaning": "ସୌଭାଗ୍ୟରେ" },
                { "word": "ବିପଦେ", "meaning": "ବିପତ୍ତିରେ" },
                { "word": "ଗୃହେ ଥାକୋ", "meaning": "ଗୃହରେ ରୁହ" },
                { "word": "ବନେ ଥାକୋ", "meaning": "ବନରେ ରୁହ" },
                { "word": "କୃଷ୍ଣେର ସଂସାରେ", "meaning": "କୃଷ୍ଣଙ୍କର ସଂସାରରେ" },
                { "word": "ଥାକି'", "meaning": "ରହି" }
            ]
        },
        {
            "id": 4,
            "lyric": "ବୋଲୋ ହରି ବୋଲୋ (୩ ଥର)\nଅସତ୍-ସଙ୍ଗ ଛାଡ଼ି’, ଭାଇ, ବୋଲୋ ହରି ବୋଲୋ\nବୋଲୋ ହରି ବୋଲୋ (୩ ଥର)\nବୈଷ୍ଣବ-ଚରଣେ ପୋଡ଼ି’ ବୋଲୋ ହରି ବୋଲୋ",
            "translation": "\"ହରି!\" ନାମ ଜପ କର। ହେ ଭାଇମାନେ, ଅସତ୍ ସଙ୍ଗ ତ୍ୟାଗ କରି \"ହରି!\" ବୋଲି ଡାକ। ଜଣେ ପ୍ରକୃତ ବୈଷ୍ଣବଙ୍କ ଚରଣରେ ଶରଣାପନ୍ନ ହୋଇ ସେହି \"ହରି!\" ନାମ ଗାନ କର।",
            "wordMeanings": [
                { "word": "ଅସତ୍-ସଙ୍ଗ", "meaning": "କୁସଙ୍ଗ (ଖରାପ ସଙ୍ଗତ)" },
                { "word": "ଛାଡ଼ି'", "meaning": "ତ୍ୟାଗ କରି" },
                { "word": "ବୈଷ୍ଣବ-ଚରଣେ", "meaning": "ବୈଷ୍ଣବମାନଙ୍କ ଚରଣରେ" },
                { "word": "ପୋଡ଼ି'", "meaning": "ପଡ଼ିଯାଇ" }
            ]
        },
        {
            "id": 5,
            "lyric": "ବୋଲୋ ହରି ବୋଲୋ (୩ ଥର)\nଗୌର-ନିତ୍ୟାନନ୍ଦ ବୋଲୋ (୩ ଥର)\nଗୌର-ଗଦାଧର ବୋଲୋ (୩ ଥର)\nଗୌର-ଅଦ୍ୱୈତ ବୋଲୋ (୩ ଥର)",
            "translation": "ପ୍ରଭୁ ଗୌର, ନିତ୍ୟାନନ୍ଦ, ଗଦାଧର ଏବଂ ଅଦ୍ୱୈତଙ୍କ ନାମ ନିରନ୍ତର ଜପ କର।",
            "wordMeanings": [
                { "word": "ଗୌର", "meaning": "ପ୍ରଭୁ ଗୌର" },
                { "word": "ନିତ୍ୟାନନ୍ଦ", "meaning": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
                { "word": "ଗଦାଧର", "meaning": "ପ୍ରଭୁ ଗଦାଧର" },
                { "word": "ଅଦ୍ୱୈତ", "meaning": "ପ୍ରଭୁ ଅଦ୍ୱୈତ" }
            ]
        }
    ]
};

async function pushUpdate() {
    console.log(`Pushing update for ${songId} to Supabase...`);
    const { data, error } = await supabase
        .from('songs')
        .upsert({ 
            id: songId, 
            structured_content: structuredContent,
            title: 'ବୋଲୋ ହରି ବୋଲୋ (Bolo Hari Bolo)',
            author: 'Bhaktivinoda Thakura',
            category: 'Songs',
            published: true
        });

    if (error) {
        console.error('❌ Update failed:', error.message);
    } else {
        console.log('✅ Update successful in Supabase!');
    }
}

pushUpdate();
