const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fixKesava() {
    console.log("Checking song-kesavatuwajagata...");
    const { data: song, error: fetchError } = await supabase
        .from('songs')
        .select('id, structured_content')
        .eq('id', 'song-kesavatuwajagata')
        .single();

    if (fetchError) {
        console.error("Error fetching:", fetchError.message);
        return;
    }

    if (song && Array.isArray(song.structured_content)) {
        console.log("Found raw array inside structured_content. Fixing to { verses: [...] } object...");
        const { error: updateError } = await supabase
            .from('songs')
            .update({ structured_content: { verses: song.structured_content } })
            .eq('id', 'song-kesavatuwajagata');

        if (updateError) {
            console.error("Failed to update:", updateError.message);
        } else {
            console.log("Successfully fixed the DB!");
        }
    } else {
        console.log("It's not an array, or it's already an object.", typeof song.structured_content);
    }
}

fixKesava();
