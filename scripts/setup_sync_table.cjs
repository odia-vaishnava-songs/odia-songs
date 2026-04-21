const { createClient } = require('@supabase/supabase-client');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';
const supabase = createClient(supabaseUrl, supabaseKey);

async function setupTable() {
    console.log("Creating vsnectar_sync_library table...");
    
    // We use RPC or just assume the user can run this SQL. 
    // Since I can't run raw SQL easily via the client without an RPC, I will provide the SQL to the user 
    // but also attempt to insert a dummy record to see if it exists.
    
    console.log("Please run this SQL in your Supabase Dashboard:");
    console.log(`
    CREATE TABLE IF NOT EXISTS vsnectar_sync_library (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        song_name TEXT NOT NULL,
        author_name TEXT,
        audio_links JSONB DEFAULT '[]'::jsonb,
        last_synced_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );

    -- Unique constraint to prevent duplicates
    CREATE UNIQUE INDEX IF NOT EXISTS idx_vsnectar_unique_song ON vsnectar_sync_library (song_name, author_name);
    `);
}

setupTable();
