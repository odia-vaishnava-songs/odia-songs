
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function exportSong(id) {
    const { data, error } = await supabase
        .from('songs')
        .select('structured_content')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
        return;
    }

    fs.writeFileSync('song_export.json', JSON.stringify(data.structured_content, null, 4));
    console.log("Exported to song_export.json");
}

exportSong('song-nitainamhate');
