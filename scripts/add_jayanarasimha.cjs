const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function addJayaNarasimha() {
    const songId = 'song-jayanarasimhasrinarasimha';
    const structuredContent = {
    "verses": [
        {
            "id": 1,
            "lyric": "ଜୟ ନୃସିଂହ ଶ୍ରୀ ନୃସିଂହ ଜୟ ଜୟ ନୃସିଂହଦେବ ।\nପ୍ରହ୍ଲାଦେଶ ଜୟ ପଦ୍ମା- ମୁଖ ପଦ୍ମ ଭୃଙ୍ଗ ।।",
            "translation": "ଭଗବାନ ଶ୍ରୀ ନୃସିଂହଦେବଙ୍କର ଜୟ ହେଉ, ସର୍ବଦା ତାଙ୍କର ଜୟ ଜୟକାର ହେଉ। ସେ ଭକ୍ତବତ୍ସଳ ପ୍ରହ୍ଲାଦଙ୍କର ପରମ ପ୍ରଭୁ ଅଟନ୍ତି। ଯେପରି ଏକ ଭ୍ରମର ପଦ୍ମ ଫୁଲ ଉପରେ ରହିବାକୁ ଭଲପାଏ, ସେହିପରି ପ୍ରଭୁ ନୃସିଂହ ସର୍ବଦା ମାତା ଲକ୍ଷ୍ମୀଙ୍କର ପଦ୍ମ ପରି ସୁନ୍ଦର ମୁଖମଣ୍ଡଳକୁ ନିହାରିବାରେ ମଗ୍ନ ରହନ୍ତି। ସେହି ପ୍ରଭୁଙ୍କର ଜୟ ହେଉ।",
            "wordMeanings": [
                {
                    "word": "ଜୟ ନୃସିଂହ ଶ୍ରୀ ନୃସିଂହ",
                    "meaning": "ପ୍ରଭୁ ନୃସିଂହଙ୍କର ଜୟ ହେଉ, ଶ୍ରୀ ନୃସିଂହଙ୍କର ଜୟ ହେଉ"
                },
                {
                    "word": "ଜୟ ଜୟ ନୃସିଂହଦେବ",
                    "meaning": "ଭଗବାନ ନୃସିଂହଦେବଙ୍କର ବାରମ୍ବାର ଜୟ ହେଉ"
                },
                {
                    "word": "ପ୍ରହ୍ଲାଦେଶ",
                    "meaning": "ଭକ୍ତ ପ୍ରହ୍ଲାଦଙ୍କର ପରମ ପ୍ରଭୁ"
                },
                {
                    "word": "ଜୟ ପଦ୍ମା-ମୁଖ-ପଦ୍ମ-ଭୃଙ୍ଗ",
                    "meaning": "ଲକ୍ଷ୍ମୀଦେବୀଙ୍କ ପଦ୍ମ ସଦୃଶ ମୁଖମଣ୍ଡଳକୁ ଦର୍ଶନ କରୁଥିବା ଭ୍ରମର ସଦୃଶ ଭଗବାନଙ୍କର ଜୟ ହେଉ"
                }
            ]
        }
    ]
};

    console.log(`Adding ${songId} to Supabase...`);
    
    const { error } = await supabase
        .from('songs')
        .upsert({ 
            id: songId,
            title: 'ଜୟ ନୃସିଂହ ଶ୍ରୀ ନୃସିଂହ (Jaya Narasimha Sri Narasimha)',
            category: 'Songs',
            type: 'html',
            author: 'Vyasadeva',
            structured_content: structuredContent,
            published: true,
            status: 'COMPLETED',
            updated_at: new Date().toISOString()
        });

    if (error) {
        console.error('❌ Error adding to DB:', error);
    } else {
        console.log('✅ Successfully added Jaya Narasimha to Supabase!');
    }
}

addJayaNarasimha();
