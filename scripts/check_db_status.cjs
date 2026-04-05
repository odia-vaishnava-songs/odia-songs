const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Missing Supabase credentials.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const ids = ['song-emonadurmati', 'song-gaygoramadhura'];
    
    for (const id of ids) {
        const { data, error } = await supabase
            .from('songs')
            .select('id, title, structured_content')
            .eq('id', id)
            .single();
            
        if (error) {
            console.error(`❌ Error fetching ${id}:`, error.message);
        } else {
            const verses = data.structured_content?.verses?.length || 0;
            console.log(`✅ ${data.id} (${data.title}): ${verses} verses found in Database.`);
        }
    }
}

check();
