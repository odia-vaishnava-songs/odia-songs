const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function checkVrndavanaAuthors() {
    const { data: songs, error } = await supabase.from('songs').select('author');
    if (error) return;

    const authors = new Set();
    songs.forEach(s => {
        if (s.author && s.author.toLowerCase().includes('vrndavana')) {
            authors.add(s.author);
        }
    });

    console.log('Authors containing "Vrndavana":', Array.from(authors));
}

checkVrndavanaAuthors();
