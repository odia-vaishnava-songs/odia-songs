const { createClient } = require('@supabase/supabase-client');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkGita() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, structured_content')
        .eq('id', 'gita-chapter-4')
        .single();

    if (error) {
        console.error('Error fetching song:', error);
        return;
    }

    console.log('ID:', data.id);
    console.log('Title:', data.title);
    
    const verses = data.structured_content.verses;
    console.log('Total Verses:', verses.length);
    
    // Check verses around 36
    const verse35 = verses.find(v => v.id === 35);
    const verse36 = verses.find(v => v.id === 36);
    const verse37 = verses.find(v => v.id === 37);

    console.log('Verse 35:', verse35 ? verse35.id : 'Not found');
    console.log('Verse 36:', verse36 ? verse36.id : 'Not found');
    console.log('Verse 37:', verse37 ? verse37.id : 'Not found');

    if (verse36) {
        console.log('Verse 36 Content:', JSON.stringify(verse36, null, 2));
    }
    
    // Look for a verse with id 100
    const verse100 = verses.find(v => v.id === 100);
    if (verse100) {
        console.log('Verse 100 Content:', JSON.stringify(verse100, null, 2));
    }
}

checkGita();
