const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function searchAllFields() {
    const { data, error } = await supabase
        .from('songs')
        .select('*');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Searching all fields in', data.length, 'songs...');
    
    for (const song of data) {
        const str = JSON.stringify(song);
        if (str.includes('Papebhyah') || str.includes('papebhyah') || str.includes('ଅପି ଚେଦସି')) {
            console.log('FOUND MATCH!');
            console.log('Song ID:', song.id);
            console.log('Song Title:', song.title);
            return;
        }
    }
    
    console.log('No matches found.');
}

searchAllFields();
