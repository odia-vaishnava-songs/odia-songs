const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const bhajaData = JSON.parse(fs.readFileSync(path.join(__dirname, '../bhaja_govindam_structured.json'), 'utf8'));

const songData = {
    id: 'song-bhajagovindam',
    title: 'ଭଜ ଗୋବିନ୍ଦମ୍ (Bhaja Govindam)',
    title_odia: 'ଭଜ ଗୋବିନ୍ଦମ୍',
    title_english: 'Bhaja Govindam',
    author: 'Adi Sankaracarya',
    category: 'Songs',
    description: 'ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟଙ୍କ ବିରଚିତ ପ୍ରସିଦ୍ଧ ଭଜ ଗୋବିନ୍ଦମ୍ ସ୍ତୋତ୍ର |',
    status: 'COMPLETED',
    published: true,
    tags: ['Stotram'],
    structured_content: bhajaData,
    updated_at: new Date().toISOString()
};

async function syncSong() {
    console.log('🔄 Syncing song-bhajagovindam (35 verses) to Supabase...');
    const { data, error } = await supabase
        .from('songs')
        .upsert(songData, { onConflict: 'id' });

    if (error) {
        console.error('❌ Sync Error:', error);
    } else {
        console.log('✅ Bhaja Govindam (35 verses) synced successfully to Supabase!');
    }
}

syncSong();
