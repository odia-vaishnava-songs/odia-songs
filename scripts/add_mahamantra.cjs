const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function addMahamantra() {
    const songId = 'song-harekrishnamahamantra';
    const structuredContent = {
  "verses": [
    {
      "id": 1,
      "lyric": "ହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ କୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ ।\nହରେ ରାମ ହରେ ରାମ ରାମ ରାମ ହରେ ହରେ ।।",
      "translation": "ହେ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଆନ୍ତରିକ ଶକ୍ତି (ହରେ/ରାଧା), ହେ ସର୍ବ ଆକର୍ଷକ ପ୍ରଭୁ (କୃଷ୍ଣ), ହେ ପରମ ଆନନ୍ଦମୟ ଭଗବାନ (ରାମ), ଦୟାକରି ମୋତେ ଆପଣଙ୍କ ପ୍ରେମମୟୀ ସେବାରେ ନିୟୋଜିତ କରନ୍ତୁ।",
      "wordMeanings": [
        { "word": "ହରେ", "meaning": "ହେ ଭଗବାନଙ୍କ ଶକ୍ତି (ରାଧା)" },
        { "word": "କୃଷ୍ଣ", "meaning": "ହେ ସର୍ବ ଆକର୍ଷକ ପ୍ରଭୁ" },
        { "word": "ରାମ", "meaning": "ହେ ପରମ ଆନନ୍ଦମୟ ଭଗବାନ" }
      ]
    }
  ]
};

    console.log(`Adding ${songId} to Supabase...`);
    
    const { error } = await supabase
        .from('songs')
        .upsert({ 
            id: songId,
            title: 'ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର (Hare Krishna Mahamantra)',
            category: 'Songs',
            type: 'html',
            author: 'Traditional',
            structured_content: structuredContent,
            published: true,
            status: 'COMPLETED',
            display_order: 1,
            updated_at: new Date().toISOString()
        });

    if (error) {
        console.error('❌ Error adding to DB:', error);
    } else {
        console.log('✅ Successfully added Hare Krishna Mahamantra to Supabase!');
    }
}

addMahamantra();
