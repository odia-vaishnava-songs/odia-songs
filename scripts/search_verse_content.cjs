const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function searchContent() {
    // We can't search inside JSONB easily with ilike in current supabase-js without raw SQL
    // But we can fetch all and search in JS
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, structured_content');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Searching through', data.length, 'songs...');
    
    for (const song of data) {
        if (song.structured_content && song.structured_content.verses) {
            for (const verse of song.structured_content.verses) {
                if (verse.lyric && verse.lyric.includes('ଅପି ଚେଦସି')) {
                    console.log('FOUND MATCH!');
                    console.log('Song ID:', song.id);
                    console.log('Song Title:', song.title);
                    console.log('Verse ID:', verse.id);
                    console.log('Verse Content:', verse.lyric);
                    return;
                }
            }
        }
    }
    
    console.log('No matches found for Odia text.');
}

searchContent();
