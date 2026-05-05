const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function searchSong() {
    const { data: songs, error } = await supabase
        .from('songs')
        .select('*')
        .ilike('title_english', '%Abanika%');

    if (error) return;

    console.log(`Found ${songs.length} matches for "Abanika":`);
    songs.forEach(s => console.log(`- ${s.title_english} (${s.author})`));
}

searchSong();
