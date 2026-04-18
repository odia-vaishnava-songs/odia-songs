const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getAllSongs() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, title');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Total songs:', data.length);
    console.log('IDs:', data.map(s => s.id));
}

getAllSongs();
