const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkSpecificSong(id) {
    console.log(`Checking song with ID: ${id}...`);
    const { data, error } = await supabase
        .from('songs')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('❌ Error:', error.message);
        return;
    }

    if (data) {
        console.log('✅ Song found in DB:');
        console.log(`- ID: ${data.id}`);
        console.log(`- Title: ${data.title}`);
        console.log(`- Category: ${data.category}`);
        console.log(`- Published: ${data.published}`);
        console.log(`- Status: ${data.status}`);
        console.log(`- Structured Content: ${data.structured_content ? 'PRESENT' : 'MISSING'}`);
    } else {
        console.log('❌ Song not found in DB.');
    }
}

const targetId = process.argv[2] || 'song-gourangasundara';
checkSpecificSong(targetId);
