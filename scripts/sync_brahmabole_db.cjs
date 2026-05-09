const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = JSON.parse(fs.readFileSync(path.join(__dirname, '../brahma_bole_structured.json'), 'utf8'));

const payload = {
    id: 'song-brahmabole',
    title: 'ବ୍ରହ୍ମା ବୋଲେ ଚତୁର୍ମୁଖ (Brahma Bole Catur Mukha)',
    title_odia: 'ବ୍ରହ୍ମା ବୋଲେ ଚତୁର୍ମୁଖ',
    title_english: 'Brahma Bole Catur Mukha',
    author: 'Traditional',
    category: 'Songs',
    status: 'COMPLETED',
    published: true,
    structured_content: songData,
    updated_at: new Date().toISOString()
};

async function syncSong() {
    console.log('🔄 Syncing Brahma Bole to Supabase...');
    const { data, error } = await supabase
        .from('songs')
        .upsert(payload, { onConflict: 'id' });

    if (error) {
        console.error('❌ Sync Error:', error);
    } else {
        console.log('✅ Brahma Bole synced successfully to Supabase!');
    }
}

syncSong();
