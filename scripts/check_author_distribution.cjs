
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkDistribution() {
    const { data, error } = await supabase
        .from('songs')
        .select('author');

    if (error) return console.error(error);

    const counts = {};
    data.forEach(s => {
        const a = s.author || 'NULL';
        counts[a] = (counts[a] || 0) + 1;
    });

    console.log('Author Distribution in Database:');
    Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([author, count]) => {
        console.log(`- ${author}: ${count}`);
    });
}

checkDistribution();
