
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function listAllSongs() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, author');

    if (error) {
        console.error('Error fetching songs:', error);
        return;
    }

    console.log('Total songs in Supabase:', data.length);
    data.forEach(s => {
        console.log(`- [${s.id}] ${s.title} (${s.author})`);
    });
    process.exit(0);
}

listAllSongs();
