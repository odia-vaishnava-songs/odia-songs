const http = require('http');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const SUPABASE_URL = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';
const PORT = 3456;
const RESOURCES_PATH = path.join(__dirname, '../src/data/resources.ts');

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function normalize(str) {
    if (!str) return "";
    return str.toLowerCase()
              .replace(/h/g, '') // Ignore 'h' differences (Chaitanya vs Caitanya)
              .replace(/v/g, 'b') // Ignore v/b
              .replace(/sh/g, 's')
              .replace(/[aeiouy]/g, '')
              .replace(/[^a-z0-9]/g, '');
}

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

    if (req.method === 'POST' && req.url === '/sync') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const title = data.title || data.songTitle || "";
                console.log(`\n🕵️‍♂️ Syncing: "${title}"`);
                
                const resources = fs.readFileSync(RESOURCES_PATH, 'utf8');
                const searchWords = title.split(' ').filter(w => w.length >= 3).map(normalize);
                
                let bestMatch = null;
                let maxWords = 0;
                const blocks = resources.split('{');
                
                for (let block of blocks) {
                    const idMatch = block.match(/id:\s*'([^']*)'/);
                    if (!idMatch) continue;
                    
                    const blockId = idMatch[1];
                    const values = block.match(/'([^']*)'/g) || [];
                    
                    let blockOverlap = 0;
                    for (let val of values) {
                        const cleanVal = val.replace(/'/g, '');
                        const valWords = cleanVal.split(/[^a-zA-Z0-9]/).map(normalize).filter(w => w.length > 0);
                        
                        const overlap = searchWords.filter(sw => valWords.includes(sw)).length;
                        if (overlap > blockOverlap) blockOverlap = overlap;
                    }

                    if (blockOverlap > maxWords) {
                        maxWords = blockOverlap;
                        bestMatch = blockId;
                    }
                }

                if (!bestMatch || maxWords < 2) throw new Error(`Could not find ID for "${title}"`);
                console.log(`🎯 Matched ID: ${bestMatch} (Words: ${maxWords})`);

                const audioVersions = data.versions.map(v => ({ label: v.singer, url: v.url }));

                const { error } = await supabase.from('songs').update({
                    audio_url: audioVersions[0].url,
                    audio_versions: audioVersions,
                    updated_at: new Date().toISOString()
                }).eq('id', bestMatch);

                if (error) throw error;
                console.log(`✅ Supabase Updated.`);

                const updated = resources.replace(
                    new RegExp(`(id:\\s*'${bestMatch}'[\\s\\S]*?status:\\s*')[^']*(')`, 'g'),
                    `$1COMPLETED$2`
                );
                fs.writeFileSync(RESOURCES_PATH, updated);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, id: bestMatch }));
            } catch (err) {
                console.error(`❌ Error:`, err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
    }
});

server.listen(PORT, () => console.log(`🚀 Bridge V14 (Transliteration Master) on ${PORT}`));
