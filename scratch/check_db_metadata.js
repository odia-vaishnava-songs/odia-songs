import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

async function checkMetadata() {
    const query = process.argv[2] || 'song-doyakoromorenitai';
    const isId = query.startsWith('song-');

    let fetcher = supabase.from('songs').select('id, title, author');
    if (isId) {
        fetcher = fetcher.eq('id', query);
    } else {
        fetcher = fetcher.ilike('title', `%${query}%`);
    }

    const { data, error } = await fetcher;

    if (error) {
        console.error("Error fetching song:", error.message);
    } else if (!data || data.length === 0) {
        console.log("No songs found for query:", query);
    } else {
        console.log(`Found ${data.length} songs for query:`, query);
        data.forEach(s => {
            console.log("---");
            console.log("ID:", s.id);
            console.log("Title:", s.title);
            console.log("Author:", s.author);
        });
    }

}

checkMetadata();
