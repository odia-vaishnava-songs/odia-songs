const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function listGitaSongs() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, title')
        .ilike('id', '%gita%');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Songs found:', data);
}

listGitaSongs();
