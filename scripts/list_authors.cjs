const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function listAuthors() {
    const { data, error } = await supabase
        .from('songs')
        .select('author');

    if (error) {
        console.error('Error:', error);
        return;
    }

    const counts = {};
    data.forEach(s => {
        const a = s.author || 'Unknown';
        counts[a] = (counts[a] || 0) + 1;
    });

    console.log('--- Current Authors in DB ---');
    Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([author, count]) => {
        console.log(`${author}: ${count} songs`);
    });
}

listAuthors();
