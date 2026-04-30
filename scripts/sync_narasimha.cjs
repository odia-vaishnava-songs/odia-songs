const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function syncNarasimhaPranama() {
    const songId = 'song-narasimhapranama';
    const structuredContent = {
        "verses": [
            {
                "id": 1,
                "lyric": "ଉଗ୍ରଂ ବୀରଂ ମହାବିଷ୍ଣୁଂ ଜ୍ଵଳନ୍ତଂ ସର୍ବତୋମୁଖମ୍ ।\nନୃସିଂହଂ ଭୀଷଣଂ ଭଦ୍ରଂ ମୃତ୍ୟୁମୃତ୍ୟୁଂ ନମାମ୍ୟହମ୍ ॥",
                "translation": "ମୁଁ ସେହି ପରମ ଶକ୍ତିଶାଳୀ, ଅଗ୍ନି ପରି ଉଜ୍ଜ୍ୱଳ ଏବଂ ସର୍ବବ୍ୟାପୀ ଭଗବାନ ମହାବିଷ୍ଣୁ ନୃସିଂହଙ୍କୁ ପ୍ରଣାମ କରୁଛି। ସେ ଦୁଷ୍ଟମାନଙ୍କ ପାଇଁ ଅତି ଭୟଙ୍କର କିନ୍ତୁ ଶରଣାଗତ ଭକ୍ତମାନଙ୍କ ପାଇଁ ପରମ କଲ୍ୟାଣକାରୀ। ମୃତ୍ୟୁର ଦେବତା ମଧ୍ୟ ଯାହାଙ୍କୁ ଭୟ କରନ୍ତି, ସେହି କାଳର ମଧୁ କାଳ ଭଗବାନ ନୃସିଂହଙ୍କ ଚରଣରେ ମୁଁ ଶରଣାପନ୍ନ ହେଉଛି।",
                "wordMeanings": [
                    { "word": "ଉଗ୍ରମ୍ ବୀରମ୍ ମହା-ବିଷ୍ଣୁମ୍", "meaning": "ପ୍ରଚଣ୍ଡ କ୍ରୋଧୀ, ପରାକ୍ରମୀ ମହାବିଷ୍ଣୁ" },
                    { "word": "ଜ୍ୱଳନ୍ତମ୍ ସର୍ବତୋ ମୁଖମ୍", "meaning": "ଅଗ୍ନି ପରି ତେଜସ୍ୱୀ ଏବଂ ସର୍ବବ୍ୟାପୀ (ଯାହାଙ୍କ ମୁଖ ସବୁ ଦିଗରେ)" },
                    { "word": "ନୃସିଂହମ୍ ଭୀଷଣମ୍ ଭଦ୍ରମ୍", "meaning": "ଭୟଙ୍କର ରୂପଧାରୀ ହେଲେ ମଧ୍ୟ ମଙ୍ଗଳକାରୀ ନୃସିଂହ" },
                    { "word": "ମୃତ୍ୟୁର୍ ମୃତ୍ୟୁମ୍ ନମାମ୍ୟ ଅହମ୍", "meaning": "ମୃତ୍ୟୁର ମଧ୍ୟ ମୃତ୍ୟୁ ସ୍ୱରୂପ ଭଗବାନଙ୍କୁ ମୁଁ ପ୍ରଣାମ କରୁଛି" }
                ]
            }
        ]
    };

    console.log(`Pushing updates for ${songId} to Supabase...`);
    
    const { error } = await supabase
        .from('songs')
        .upsert({ 
            id: songId,
            title: 'ଉଗ୍ରଂ ବୀରଂ ମହାବିଷ୍ଣୁଂ (Ugram Viram Mahavishnum)',
            category: 'Songs',
            author: 'Vyasadeva',
            structured_content: structuredContent,
            status: 'COMPLETED',
            updated_at: new Date().toISOString()
        });

    if (error) {
        console.error('❌ Error updating DB:', error);
    } else {
        console.log('✅ Successfully synced Narasimha Pranama to Supabase!');
    }
}

syncNarasimhaPranama();
