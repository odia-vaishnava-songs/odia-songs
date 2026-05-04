const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// 1. Get Supabase IDs
const envFile = fs.readFileSync(path.join(__dirname, '../.env'), 'utf8');
const env = Object.fromEntries(envFile.split('\n').filter(l => l.includes('=')).map(l => l.split('=')));
const SUPABASE_URL = env.VITE_SUPABASE_URL?.trim();
const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY?.trim();
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 2. Get Local IDs (Approximate from file or use a script that imports it)
// Since I can't easily import TS in CJS without more setup, I'll use regex on the resources.ts file
const resourcesFile = fs.readFileSync(path.join(__dirname, '../src/data/resources.ts'), 'utf8');
const localIdRegex = /id:\s*['"]([^'"]+)['"]/g;
const localIds = [];
let match;
while ((match = localIdRegex.exec(resourcesFile)) !== null) {
    localIds.push(match[1]);
}

async function compare() {
    const { data: dbSongs, error } = await supabase
        .from('songs')
        .select('id, title_english, title_odia');

    if (error) {
        console.error(error);
        return;
    }

    const dbIds = new Set(dbSongs.map(s => s.id));
    const localOnly = localIds.filter(id => !dbIds.has(id));

    console.log('--- Comparison Results ---');
    console.log('Local Total:', localIds.length);
    console.log('DB Total:', dbSongs.length);
    console.log('\nSongs only in LOCAL resources:');
    
    // To get names, we'd need more regex, but let's see IDs first
    localOnly.forEach(id => {
        // Try to find the title in the file near the ID
        const idIndex = resourcesFile.indexOf(id);
        const snippet = resourcesFile.substring(idIndex, idIndex + 200);
        const titleMatch = snippet.match(/title:\s*['"]([^'"]+)['"]/);
        console.log(`- ID: ${id} | Title: ${titleMatch ? titleMatch[1] : 'Unknown'}`);
    });
}

compare();
