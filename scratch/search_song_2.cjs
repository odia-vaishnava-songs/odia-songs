const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function searchSong2() {
    const { data: songs, error } = await supabase
        .from('songs')
        .select('*')
        .ilike('title_english', '%Sri Hari Vasare%');

    if (error) return;

    console.log(`Found ${songs.length} matches for "Sri Hari Vasare":`);
    songs.forEach(s => console.log(`- ${s.title_english} (${s.author})`));
}

searchSong2();
