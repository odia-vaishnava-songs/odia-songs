
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrate() {
    console.log("Logging in as admin...");
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: "daitariswain7@gmail.com",
        password: "pass-969200"
    });

    if (authError) {
        console.error("Login failed:", authError);
        return;
    }
    console.log("Logged in successfully!");

    console.log("Fetching songs...");
    const { data: songs, error: fetchError } = await supabase
        .from('songs')
        .select('*');

    if (fetchError) {
        console.error("Error fetching songs:", fetchError);
        return;
    }
    console.log(`Found ${songs.length} songs.`);

    // Sort songs by title to set alphabetical order
    const sortedSongs = [...songs].sort((a, b) => a.title.localeCompare(b.title));

    for (let i = 0; i < sortedSongs.length; i++) {
        const song = sortedSongs[i];
        const title = song.title || '';
        
        let title_odia = title;
        let title_english = '';

        // Split format: Odia Title (English Title)
        const match = title.match(/^([^(]+)\s*\(([^)]+)\)$/);
        if (match) {
            title_odia = match[1].trim();
            title_english = match[2].trim();
        }

        console.log(`Updating [${song.id}]: "${title_odia}" / "${title_english}" (Order: ${i})`);

        const { error: updateError } = await supabase
            .from('songs')
            .update({
                title_odia: title_odia,
                title_english: title_english,
                display_order: i
            })
            .eq('id', song.id);

        if (updateError) {
            console.error(`Error updating [${song.id}]:`, updateError);
        }
    }

    console.log("Migration complete!");
    process.exit(0);
}

migrate();
