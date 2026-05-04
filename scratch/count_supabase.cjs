const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read from .env manually if dotenv not loaded
const envFile = fs.readFileSync(path.join(__dirname, '../.env'), 'utf8');
const env = Object.fromEntries(envFile.split('\n').filter(l => l.includes('=')).map(l => l.split('=')));

const SUPABASE_URL = env.VITE_SUPABASE_URL?.trim();
const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY?.trim();

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function countSongs() {
    const { count, error } = await supabase
        .from('songs')
        .select('*', { count: 'exact', head: true });

    if (error) {
        console.error('Error fetching count:', error);
        return;
    }

    console.log('Total Songs in Supabase:', count);
}

countSongs();
