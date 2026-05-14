const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function verify() {
    console.log('🔍 Verifying Sad Goswami Astakam in Supabase...');
    
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, title_english, author, published')
        .eq('id', 'song-sadgoswamyastakam')
        .single();

    if (error) {
        console.error('❌ Could not find song:', error.message);
    } else {
        console.log('✅ Found in Supabase:');
        console.log('   ID:', data.id);
        console.log('   Title:', data.title);
        console.log('   English Title:', data.title_english);
        console.log('   Author:', data.author);
        console.log('   Published:', data.published);
    }
}

verify();
