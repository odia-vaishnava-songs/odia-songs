const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songData = JSON.parse(fs.readFileSync('hari_hari_kabe_more_hoibe_sudina_structured.json', 'utf8'));
// Extract the inner object to remove the extra wrapper
const structuredContent = songData.SONG_HARIHARIKABEMORE_STRUCTURED;

async function fixUpsert() {
    console.log('🔧 Fixing "Hari Hari Kabe More Hoibe Su-Dina" in Supabase (removing extra wrapper)...');

    const { error } = await supabase
        .from('songs')
        .update({
            structured_content: structuredContent
        })
        .eq('id', 'song-hariharikabemore');

    if (error) {
        console.error('❌ Failed to fix song:', error.message);
    } else {
        console.log('✅ Successfully fixed in Supabase!');
    }
}

fixUpsert();
