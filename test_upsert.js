import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

async function test() {
    console.log("Logging in...");
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: "daitariswain7@gmail.com",
        password: "pass-969200"
    });

    if (authError) {
        return console.error("Login failed:", authError);
    }

    console.log("Logged in. UID:", authData.user.id);

    console.log("Attempting UPSERT on songs table...");
    const { data, error } = await supabase
        .from('songs')
        .upsert({
            id: 'test-song-admin',
            title: 'Test Song by Admin',
            updated_at: new Date().toISOString()
        }, { onConflict: 'id' });

    if (error) {
        console.error("======= UPSERT ERROR =======");
        console.error(error);
    } else {
        console.log("UPSERT SUCCESS!");
    }
}

test();
