
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
    console.log("Logging in...");
    const { data: auth } = await supabase.auth.signInWithPassword({
        email: "daitariswain7@gmail.com",
        password: "pass-969200"
    });

    console.log("Fetching authors...");
    const { data: authors } = await supabase.from('authors').select('*');
    const authorMap = {};
    authors.forEach(a => authorMap[a.name] = a.id);

    console.log("Fetching songs...");
    const { data: songs } = await supabase.from('songs').select('id, author');

    console.log(`Mapping authors for ${songs.length} songs...`);
    for (const song of songs) {
        if (song.author && authorMap[song.author]) {
            console.log(`Updating ${song.id} -> Author: ${song.author}`);
            const { error } = await supabase.from('songs').update({
                author_id: authorMap[song.author]
            }).eq('id', song.id);
            if (error) console.error("Error updating song:", error);
        }
    }
    console.log("Author mapping complete!");
    process.exit(0);
}
run();
