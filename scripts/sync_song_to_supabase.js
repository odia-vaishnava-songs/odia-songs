import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

async function syncSong() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.error("Usage: node scripts/sync_song_to_supabase.js <json_file_path> [song_id]");
        process.exit(1);
    }

    const jsonPath = args[0];
    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const structuredContent = JSON.parse(rawData);

    // Metadata extraction
    const songId = args[1] || path.basename(jsonPath, '_structured.json');
    const fullId = songId.startsWith('song-') ? songId : `song-${songId}`;
    
    // Attempting to find title and author from the JSON if possible, or use defaults
    // For now, we'll use the ID to construct a title if not provided
    const titleOdia = structuredContent.title_odia || "";
    const titleEng = structuredContent.title_english || structuredContent.title || "";
    const title = (titleOdia && titleEng) ? `${titleOdia} (${titleEng})` : (titleEng || titleOdia || "Untitled");
    const author = structuredContent.author || "Bhaktivinoda Thakura";
    const title_eng = titleEng || "Untitled";

    console.log(`Syncing song: ${fullId}`);
    console.log(`Title: ${title_eng}`);
    console.log(`Author: ${author}`);

    console.log("Logging in as Admin...");
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: "daitariswain7@gmail.com",
        password: "pass-969200"
    });

    if (authError) {
        console.error("Login failed:", authError.message);
        process.exit(1);
    }

    console.log("Logged in. UID:", authData.user.id);

    const { error } = await supabase
        .from('songs')
        .upsert({
            id: fullId,
            title: title,
            title_english: structuredContent.title_english || "Dekhite Dekhite",
            title_odia: structuredContent.title_odia || "ଦେଖିତେ ଦେଖିତେ",
            author: author,
            category: 'Songs',
            structured_content: structuredContent,
            updated_at: new Date().toISOString()
        }, { onConflict: 'id' });

    if (error) {
        console.error("======= UPSERT ERROR =======");
        console.error(error);
        process.exit(1);
    } else {
        console.log(`✅ SUCCESS! Song '${fullId}' synced to Supabase.`);
    }
}

syncSong();
