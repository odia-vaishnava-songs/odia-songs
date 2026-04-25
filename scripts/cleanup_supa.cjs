const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load env from .env.local
const envFile = path.resolve(__dirname, '../.env');
const envConfig = dotenv.parse(fs.readFileSync(envFile));

const supabaseUrl = envConfig.VITE_SUPABASE_URL;
const supabaseKey = envConfig.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function cleanup() {
    console.log("🚀 Deleting ghost duplicate: song-jayajayasrikrsnacaitanya...");
    const { error } = await supabase
        .from('songs')
        .delete()
        .eq('id', 'song-jayajayasrikrsnacaitanya');

    if (error) {
        console.error("❌ Failed to delete:", error.message);
    } else {
        console.log("✅ Successfully deleted ghost entry!");
    }
}

cleanup();
