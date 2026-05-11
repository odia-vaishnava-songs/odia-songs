const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = JSON.parse(fs.readFileSync('hari_hari_kabe_more_hoibe_sudina_structured.json', 'utf8'));
const structuredContent = songData.SONG_HARIHARIKABEMORE_STRUCTURED;

async function upsertSong() {
    console.log('🚀 Upserting "Hari Hari Kabe More Hoibe Su-Dina" to Supabase...');

    const { error } = await supabase
        .from('songs')
        .upsert({
            id: 'song-hariharikabemore',
            title: 'ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ (Hari Hari Kabe More Hoibe Su-Dina)',
            title_odia: 'ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ',
            title_english: 'Hari Hari Kabe More Hoibe Su-Dina',
            category: 'Songs',
            type: 'html',
            description: 'ନରୋତ୍ତମ ଦାସ ଠାକୁରଙ୍କ ଏକ ଅତି ମନୋରମ ଭଜନ |',
            author: 'Narottama Dasa Thakura',
            published: true,
            status: 'COMPLETED',
            structured_content: songData
        }, { onConflict: 'id' });

    if (error) {
        console.error('❌ Failed to upsert song:', error.message);
        console.error('Error details:', error);
    } else {
        console.log('✅ Successfully upserted to Supabase!');
    }
}

upsertSong();
