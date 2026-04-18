const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fixGita4() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, structured_content')
        .eq('id', 'gita-chapter-4')
        .single();

    if (error) {
        console.error('Error fetching:', error);
        return;
    }

    let structured = data.structured_content;
    let found = false;

    if (structured && structured.verses) {
        structured.verses = structured.verses.map(v => {
            if (v.id === 100) {
                console.log('Found verse 100, changing to 36');
                v.id = 36;
                found = true;
            }
            return v;
        });
    }

    if (found) {
        const { error: updateError } = await supabase
            .from('songs')
            .update({ structured_content: structured })
            .eq('id', 'gita-chapter-4');

        if (updateError) {
            console.error('Error updating:', updateError);
        } else {
            console.log('Successfully updated Gita Chapter 4 Verse 36!');
        }
    } else {
        console.log('Verse with ID 100 not found in database.');
        // List IDs just in case
        console.log('Available IDs:', structured.verses.map(v => v.id).join(', '));
    }
}

fixGita4();
