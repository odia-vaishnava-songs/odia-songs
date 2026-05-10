import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

async function checkMetadata() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, author')
        .eq('id', 'song-doyakoromorenitai')
        .single();

    if (error) {
        console.error("Error fetching song:", error.message);
    } else {
        console.log("Database Metadata for song-doyakoromorenitai:");
        console.log("ID:", data.id);
        console.log("Title:", data.title);
        console.log("Author:", data.author);
    }
}

checkMetadata();
