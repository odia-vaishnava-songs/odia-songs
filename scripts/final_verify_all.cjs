const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const songIds = [
    'song-radhikastakam',
    'song-sadgoswamyastakam',
    'song-yugalastakam',
    'song-govardhanastakam',
    'song-krsnanamadhare',
    'song-krsnajinakanamahai',
    'song-kejabikejabi'
];

async function verifyAll() {
    console.log('🔍 Final Verification of songs in Supabase...');
    
    const { data, error } = await supabase
        .from('songs')
        .select('id, title_english, published')
        .in('id', songIds);

    if (error) {
        console.error('❌ Error fetching songs:', error.message);
        return;
    }

    const foundIds = data.map(s => s.id);
    const missingIds = songIds.filter(id => !foundIds.includes(id));

    data.forEach(song => {
        console.log(`✅ [LIVE] ${song.id.padEnd(25)} | ${song.title_english}`);
    });

    if (missingIds.length > 0) {
        console.log('\n❌ Missing songs:');
        missingIds.forEach(id => console.log(`   - ${id}`));
    } else {
        console.log('\n🌟 All songs are successfully pushed and live in Supabase!');
    }
}

verifyAll();
