const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkGita1() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, structured_content')
        .eq('id', 'gita-chapter-1')
        .single();

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Chapter 1 verses count:', data.structured_content.verses.length);
    console.log('Sample verse:', data.structured_content.verses[0]);
}

checkGita1();
