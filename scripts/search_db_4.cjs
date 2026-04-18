const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function listTables() {
    const { data, error } = await supabase.rpc('get_tables'); // Some projects have this helper
    if (error) {
        // Try information_schema
        const { data: data2, error: error2 } = await supabase
            .from('songs')
            .select('*')
            .limit(1);
        
        console.log('Songs table accessible.');
        
        // Let's just try to fetch everything from the database
        // and see if we can find chapter 4 anywhere.
    } else {
        console.log('Tables:', data);
    }
}
async function searchEverything() {
    const { data, error } = await supabase
        .from('songs')
        .select('*');
        
    if (error) {
        console.error('Error fetching all songs:', error);
        return;
    }
    
    console.log('Fetched', data.length, 'songs.');
    for (const song of data) {
        if (song.title && song.title.includes('4')) {
            console.log('Match found by title:', song.id, song.title);
        }
        if (song.id && song.id.includes('4')) {
            console.log('Match found by ID:', song.id, song.title);
        }
    }
}

searchEverything();
