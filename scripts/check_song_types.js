
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function checkSongs() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, content, structured_content')
        .order('id');

    if (error) {
        console.error(error);
        return;
    }

    console.log(`Total songs in DB: ${data.length}`);
    const structured = data.filter(s => s.structured_content);
    const legacy = data.filter(s => !s.structured_content && s.content);
    const empty = data.filter(s => !s.structured_content && !s.content);

    console.log(`Structured: ${structured.length}`);
    console.log(`Legacy (Simple Text): ${legacy.length}`);
    console.log(`Empty: ${empty.length}`);

    console.log("\n--- LEGACY SONGS ---");
    legacy.forEach(s => console.log(`[${s.id}] ${s.title}`));
}

checkSongs();
