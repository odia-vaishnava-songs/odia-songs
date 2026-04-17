const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkSongs() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, title')
        .ilike('title', '%Phale%');

    if (error) {
        console.error('❌ Supabase Error:', error);
        return;
    }

    if (data && data.length > 0) {
        data.forEach(song => {
            console.log(`ID: ${song.id}, Title: ${song.title}`);
        });
    } else {
        console.log('⚠️ DATABASE IS RETURNING ZERO SONGS FOR THESE IDs.');
    }
}

checkSongs();
