const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const envFile = fs.readFileSync(path.join(__dirname, '../.env'), 'utf8');
const env = Object.fromEntries(envFile.split('\n').filter(l => l.includes('=')).map(l => l.split('=')));
const SUPABASE_URL = env.VITE_SUPABASE_URL?.trim();
const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY?.trim();
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const resourcesFile = fs.readFileSync(path.join(__dirname, '../src/data/resources.ts'), 'utf8');
const idRegex = /id:\s*['"]([^'"]+)['"]/g;
const localIds = [];
let match;
while ((match = idRegex.exec(resourcesFile)) !== null) {
    localIds.push(match[1]);
}

async function run() {
    console.log('Connecting to Supabase...');
    const { data: dbSongs, error } = await supabase
        .from('songs')
        .select('id, title_english')
        .limit(1000);

    if (error) {
        console.error('Supabase Error:', error);
        return;
    }

    const dbIds = new Set(dbSongs.map(s => s.id));
    const localOnly = localIds.filter(id => !dbIds.has(id));

    console.log(`\nFound ${localOnly.length} local-only songs:`);
    localOnly.forEach(id => {
        const idx = resourcesFile.indexOf(id);
        const snippet = resourcesFile.substring(idx, idx + 200);
        const titleMatch = snippet.match(/title_english:\s*['"]([^'"]+)['"]/);
        console.log(`- ${id} (${titleMatch ? titleMatch[1] : 'No English Title'})`);
    });
}

run();
