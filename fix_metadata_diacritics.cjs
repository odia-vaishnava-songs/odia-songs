const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = {
    id: 'song-krsnakrsnakrsnakrsna',
    title: 'କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ! (Kṛṣṇa Kṛṣṇa Kṛṣṇa Kṛṣṇa)',
    title_odia: 'କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ!',
    title_english: 'Kṛṣṇa Kṛṣṇa Kṛṣṇa Kṛṣṇa',
    category: 'Songs',
    type: 'html',
    author: 'Krsnadasa Kaviraja Goswami',
    status: 'COMPLETED',
    published: true,
    updated_at: new Date().toISOString()
};

async function updateMetadata() {
    console.log(`Updating metadata for ${songData.id}...`);
    try {
        const { data, error } = await supabase
            .from('songs')
            .upsert(songData, { onConflict: 'id' });

        if (error) {
            console.error('❌ Supabase Error:', error);
        } else {
            console.log('✅ Successfully updated metadata!');
        }
    } catch (e) {
        console.error('❌ Exception:', e);
    } finally {
        process.exit(0);
    }
}

updateMetadata();
