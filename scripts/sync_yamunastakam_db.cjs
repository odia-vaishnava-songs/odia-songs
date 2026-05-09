const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = JSON.parse(fs.readFileSync(path.join(__dirname, '../yamunastakam_structured.json'), 'utf8'));

const payload = {
    id: 'song-yamunastakam',
    title: 'ଶ୍ରୀ ଶ୍ରୀ ଯମୁନାଷ୍ଟକମ୍ (Yamunāṣṭakam)',
    title_odia: 'ଶ୍ରୀ ଶ୍ରୀ ଯମୁନାଷ୍ଟକମ୍',
    title_english: 'Bhrtr Antakasya Pattane',
    author: 'Rupa Goswami',
    category: 'Songs',
    status: 'COMPLETED',
    published: true,
    structured_content: songData,
    updated_at: new Date().toISOString()
};

async function syncSong() {
    console.log('🔄 Syncing Yamunastakam to Supabase...');
    const { data, error } = await supabase
        .from('songs')
        .upsert(payload, { onConflict: 'id' });

    if (error) {
        console.error('❌ Sync Error:', error);
    } else {
        console.log('✅ Yamunastakam synced successfully to Supabase!');
    }
}

syncSong();
