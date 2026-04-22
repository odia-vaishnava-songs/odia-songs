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
              .replace(/['’]/g, '') 
              .replace(/h/g, '') 
              .replace(/v/g, 'b') 
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
                console.log(`\n🕵️‍♂️ PRECISION-SMART SYNC: "${title}"`);
                
                const resources = fs.readFileSync(RESOURCES_PATH, 'utf8');
                const searchWords = title.split(/[\s-]+/).map(normalize).filter(w => w.length >= 1);
                
                let matches = [];
                const blocks = resources.split('{');
                
                for (let block of blocks) {
                    const idMatch = block.match(/id:\s*'([^']*)'/);
                    if (!idMatch) continue;
                    
                    const blockId = idMatch[1];
                    const values = block.match(/'([^']*)'/g) || [];
                    
                    let blockOverlap = 0;
                    let blockMainWordCount = 0;
                    for (let val of values) {
                        const cleanVal = val.replace(/'/g, '');
                        if (cleanVal.length < 3) continue;
                        
                        // Ignore standard 'song-' prefix in count
                        const valTokens = cleanVal.split(/[\s-]/)
                                           .filter(t => t.toLowerCase() !== 'song')
                                           .map(normalize)
                                           .filter(w => w.length > 0);
                        
                        const overlap = searchWords.filter(sw => valTokens.includes(sw)).length;
                        if (overlap > blockOverlap) {
                            blockOverlap = overlap;
                            blockMainWordCount = valTokens.length;
                        }
                    }

                    const confidence = blockOverlap / searchWords.length;
                    const wordCountRatio = Math.min(blockMainWordCount, searchWords.length) / Math.max(blockMainWordCount, searchWords.length);
                    
                    if (confidence >= 0.8 && wordCountRatio > 0.8) {
                        matches.push({ id: blockId, score: confidence });
                    }
                }

                matches.sort((a,b) => b.score - a.score);
                const bestMatch = matches[0];

                if (!bestMatch) throw new Error(`Precision check failed for "${title}". No exact match found.`);
                console.log(`🎯 Matched: ${bestMatch.id}`);

                const audioVersions = data.versions.map(v => ({ label: v.singer, url: v.url }));

                const { error } = await supabase.from('songs').update({
                    audio_url: audioVersions[0].url,
                    audio_versions: audioVersions,
                    updated_at: new Date().toISOString()
                }).eq('id', bestMatch.id);

                if (error) throw error;
                console.log(`✅ Supabase Updated.`);

                const updated = resources.replace(
                    new RegExp(`(id:\\s*'${bestMatch.id}'[\\s\\S]*?status:\\s*')[^']*(')`, 'g'),
                    `$1COMPLETED$2`
                );
                fs.writeFileSync(RESOURCES_PATH, updated);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, id: bestMatch.id }));
            } catch (err) {
                console.error(`❌ Error:`, err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
    }
});

server.listen(PORT, () => console.log(`🚀 Bridge V18 (Precision-Smart) on ${PORT}`));
