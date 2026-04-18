const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function searchSongs() {
    console.log('Searching for "Bhaja Re" in database...');
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, author')
        .ilike('title', '%Bhaja Re%');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Found these songs:');
    console.log(JSON.stringify(data, null, 2));
}

searchSongs();
