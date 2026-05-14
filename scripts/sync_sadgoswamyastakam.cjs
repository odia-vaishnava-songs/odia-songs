const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function syncToDb() {
    const songData = JSON.parse(fs.readFileSync('sad_goswami_astakam_structured.json', 'utf8'));
    
    console.log(`🚀 Syncing "${songData.title_english}" to Supabase...`);

    const payload = {
        id: songData.id,
        title: songData.title,
        title_odia: songData.title_odia,
        title_english: songData.title_english + ' (Sad Goswami Astakam)',
        author: songData.author,
        description: songData.description,
        category: songData.category,
        tags: [...songData.tags, 'Radha', 'Krsna'],
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
