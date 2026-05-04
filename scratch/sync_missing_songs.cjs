const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const envFile = fs.readFileSync(path.join(__dirname, '../.env'), 'utf8');
const env = Object.fromEntries(envFile.split('\n').filter(l => l.includes('=')).map(l => l.split('=')));
const SUPABASE_URL = env.VITE_SUPABASE_URL?.trim();
const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY?.trim();
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Data for Prem Dhvani
const song1 = {
    id: 'song-premadhvani',
    title: 'ପ୍ରେମ ଧ୍ୱନି (Prem Dhvani)',
    title_odia: 'ପ୍ରେମ ଧ୍ୱନି',
    title_english: 'Prem Dhvani (Jaya Dhvani)',
    category: 'Songs',
    type: 'html',
    author: 'ISKCON',
    tags: ['Temple'],
    published: true,
    status: 'COMPLETED'
};

// Data for Narasimha Pranama
const song2 = {
    id: 'song-narasimhapranama',
    title: 'ଉଗ୍ରଂ ବୀରଂ ମହାବିଷ୍ଣୁମ୍ (Ugram Viram Mahavishnum)',
    title_odia: 'ଉଗ୍ରଂ ବୀରଂ ମହାବିଷ୍ଣୁମ୍',
    title_english: 'Ugram Viram Mahavishnum',
    category: 'Songs',
    type: 'html',
    author: 'Vyasadeva',
    tags: ['Pranama'],
    published: true,
    status: 'COMPLETED'
};

async function sync() {
    console.log('Syncing songs to Supabase...');
    const { error: error1 } = await supabase.from('songs').upsert(song1);
    if (error1) console.error('Error syncing Prem Dhvani:', error1);
    else console.log('Synced: Prem Dhvani');

    const { error: error2 } = await supabase.from('songs').upsert(song2);
    if (error2) console.error('Error syncing Narasimha Pranama:', error2);
    else console.log('Synced: Narasimha Pranama');
}

sync();
