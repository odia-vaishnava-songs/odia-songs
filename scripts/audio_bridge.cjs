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

function getWords(str) {
    if (!str) return [];
    return str.toLowerCase()
              .replace(/h/g, '')
              .replace(/[aeiouy]/g, '')
              .split(/[^a-z0-9]/)
              .filter(w => w.length >= 3);
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
                const searchTitle = data.title || data.songTitle || "";
                console.log(`\n📦 Syncing: "${searchTitle}"`);
                
                const resources = fs.readFileSync(RESOURCES_PATH, 'utf8');
                const searchWords = getWords(searchTitle);
                
                let songId = null;
                const blocks = resources.split('{');
                
                for (let block of blocks) {
                    const idMatch = block.match(/id:\s*'([^']*)'/);
                    if (!idMatch) continue;
                    
                    const blockId = idMatch[1];
                    const valuesInBlock = block.match(/'([^']*)'/g) || [];
                    
                    for (let val of valuesInBlock) {
                        const cleanVal = val.replace(/'/g, '');
                        const valWords = getWords(cleanVal);
                        
                        // If we have strong word overlap (at least 2 matching significant words)
                        const common = searchWords.filter(w => valWords.includes(w));
                        if (common.length >= 2 || (searchWords.length === 1 && common.length === 1)) {
                            songId = blockId; break;
                        }
                    }
                    if (songId) break;
                }

                if (!songId) throw new Error(`Could not find ID for "${searchTitle}"`);
                console.log(`🎯 Matched ID: ${songId}`);

                const audioVersions = data.versions.map(v => ({ label: v.singer, url: v.url }));

                const { error } = await supabase.from('songs').update({
                    audio_url: audioVersions[0].url,
                    audio_versions: audioVersions,
                    updated_at: new Date().toISOString()
                }).eq('id', songId);

                if (error) throw error;
                console.log(`✅ Supabase Updated.`);

                const updated = resources.replace(
                    new RegExp(`(id:\\s*'${songId}'[\\s\\S]*?status:\\s*')[^']*(')`, 'g'),
                    `$1COMPLETED$2`
                );
                fs.writeFileSync(RESOURCES_PATH, updated);
                console.log(`✅ Status COMPLETED.`);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, id: songId }));
            } catch (err) {
                console.error(`❌ Error:`, err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
    }
});

server.listen(PORT, () => console.log(`🚀 Bridge V6 (Word-Based Matching) on ${PORT}`));
