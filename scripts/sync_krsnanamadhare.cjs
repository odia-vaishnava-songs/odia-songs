const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function syncToDb() {
    const songData = JSON.parse(fs.readFileSync('krsna_nama_dhare_structured.json', 'utf8'));
    
    console.log(`🚀 Syncing "${songData.title_english}" to Supabase...`);

    const payload = {
        id: 'song-krsnanamadhare',
        title: 'କୃଷ୍ଣ ନାମ ଧରେ କତ ବଳ (Krsna Nama Dhare)',
        title_odia: songData.title_odia,
        title_english: songData.title_english,
        author: songData.author,
        description: 'ଭକ୍ତି ବିନୋଦ ଠାକୁରଙ୍କ ଦ୍ୱାରା ରଚିତ ହରିନାମର ମାହାତ୍ମ୍ୟ |',
        category: 'Songs',
        tags: ['Bhaktivinoda Thakura', 'Krsna Nama', 'Harinama', 'Mahatmya'],
        structured_content: songData,
        published: true,
        status: 'COMPLETED',
        verified: true,
        original_lang: 'Odia',
        updated_at: new Date().toISOString()
    };

    const { data, error } = await supabase
        .from('songs')
        .upsert(payload, { onConflict: 'id' });

    if (error) {
        console.error('❌ Sync failed:', error);
    } else {
        console.log('✅ Sync successful!');
    }
}

syncToDb();
