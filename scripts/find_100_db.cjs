const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function find100() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, structured_content');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Searching 100 in', data.length, 'songs...');
    
    for (const song of data) {
        if (song.structured_content && song.structured_content.verses) {
            const v100 = song.structured_content.verses.find(v => v.id === 100);
            if (v100) {
                console.log('FOUND IT!');
                console.log('Song ID:', song.id);
                console.log('Song Title:', song.title);
                console.log('Verse 100 content:', JSON.stringify(v100, null, 2));
            }
        }
    }
}

find100();
