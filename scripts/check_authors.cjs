const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkAuthors() {
    console.log("Checking database for author name variations...");
    const { data, error } = await supabase
        .from('songs')
        .select('author')
        .ilike('author', '%Vyasa%');

    if (error) {
        console.error('❌ Error fetching authors:', error);
        return;
    }

    const uniqueAuthors = [...new Set(data.map(s => s.author))];
    console.log('Unique authors found:', uniqueAuthors);
}

checkAuthors();
