const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function findSongId() {
    console.log('Searching for "Nadiya Godrume" in database...');
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, title_odia')
        .or('title.ilike.%Nadiya%,title_odia.ilike.%ନଦୀୟା%');

    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Found these matches:');
        console.log(JSON.stringify(data, null, 2));
    }
}

findSongId();
