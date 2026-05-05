const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function checkAllAuthorCounts() {
    const { data: songs, error } = await supabase
        .from('songs')
        .select('*');

    if (error) {
        console.error(error);
        return;
    }

    const counts = {};
    songs.forEach(s => {
        const author = s.author || 'Other Authors';
        counts[author] = (counts[author] || 0) + 1;
    });

    console.log('Author counts in DB:');
    Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([author, count]) => {
        console.log(`- ${author}: ${count}`);
    });
}

checkAllAuthorCounts();
