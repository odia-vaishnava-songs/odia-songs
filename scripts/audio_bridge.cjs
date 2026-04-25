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
                let targetId = data.forceId; // Option 1: Manual ID
                const title = data.title || ""; // Option 2: Auto Match
                
                console.log(`\n📡 RECEIVING SYNC FOR: "${title || targetId}"`);

                const resources = fs.readFileSync(RESOURCES_PATH, 'utf8');

                if (!targetId && title) {
                    // SNIPER MATCHING LOGIC
                    const searchWords = title.split(/[\s-]+/).filter(w => w.length >= 1);
                    const searchTokens = searchWords.map(normalize).filter(t => t.length > 0);
                    let matches = [];
                    
                    // IMPROVED BLOCK SPLITTING: Split by 'id:' but keep it in the block
                    const blocks = resources.split(/(?=id:\s*')/);
                    
                    for (let block of blocks) {
                        const idMatch = block.match(/id:\s*'([^']*)'/);
                        if (!idMatch) continue;
                        const blockId = idMatch[1];
                        
                        // Only check strings in the header part of the object (before structured content)
                        const header = block.split('structuredContent')[0];
                        const values = header.match(/'([^']*)'/g) || [];
                        
                        let blockBestSim = 0;
                        for (let val of values) {
                            const cleanVal = val.replace(/'/g, '');
                            const valWords = cleanVal.split(/[\s-]/).filter(t => t.toLowerCase() !== 'song');
                            const valTokens = valWords.map(normalize).filter(w => w.length > 0);
                            
                            if (valTokens.length === 0 || searchTokens.length === 0) continue;
                            
                            const overlap = searchTokens.filter(st => valTokens.includes(st)).length;
                            const sim = overlap / Math.max(valTokens.length, searchTokens.length);
                            
                            if (sim > blockBestSim) blockBestSim = sim;
                        }
                        if (blockBestSim >= 0.70) matches.push({ id: blockId, score: blockBestSim });
                    }
                    
                    if (matches.length === 0) {
                        console.log(`🔎 Match Fail: No block reached threshold. Input Tokens: [${searchTokens.join(', ')}]`);
                    }
                    if (matches.length > 0) {
                        matches.sort((a,b) => b.score - a.score);
                        targetId = matches[0].id;
                    }
                }

                if (!targetId) throw new Error(`Could not find a match for "${title}". Use Manual ID.`);
                console.log(`🎯 TARGET ID: ${targetId}`);

                // Fix potential arg swap in user's script
                const audioVersions = data.versions.map(v => {
                    // If singer looks like a URL, swap them
                    if (v.singer.startsWith('http')) {
                        return { label: v.url, url: v.singer };
                    }
                    return { label: v.singer, url: v.url };
                });

                if (!targetId) {
                    // AUTO-CREATION LOGIC
                    console.log(`✨ NEW SONG DETECTED: "${title}"`);
                    const safeId = `song-${normalize(title).substring(0, 30)}`;
                    
                    // 1. Upsert to Supabase
                    const { error: upsertError } = await supabase.from('songs').upsert({
                        id: safeId,
                        title: title,
                        title_english: title,
                        audio_url: audioVersions[0].url,
                        audio_versions: audioVersions,
                        status: 'COMPLETED',
                        published: true,
                        updated_at: new Date().toISOString()
                    }, { onConflict: 'id' });

                    if (upsertError) throw upsertError;
                    console.log(`✅ Supabase Upserted: ${safeId}`);

                    // 2. Append to Local resources.ts
                    const newEntry = `\n    {
        id: '${safeId}',
        title: '${title}',
        title_english: '${title}',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        published: true,
        status: 'COMPLETED',
        audioUrl: '${audioVersions[0].url}',
        vocalist: '${audioVersions[0].label}'
    },`;

                    // Insert before the closing bracket of the array
                    const finalOutput = resources.replace(/\];\s*export const CATEGORIES/, (match) => {
                        return `${newEntry}\n${match}`;
                    });
                    
                    fs.writeFileSync(RESOURCES_PATH, finalOutput);
                    console.log(`✅ Local file updated with NEW song: ${safeId}`);
                    
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, id: safeId, created: true }));
                    return;
                }

                console.log(`🎯 TARGET ID: ${targetId}`);

                // 1. Update Supabase
                const { error } = await supabase.from('songs').upsert({
                    id: targetId,
                    audio_url: audioVersions[0].url,
                    audio_versions: audioVersions,
                    status: 'COMPLETED',
                    updated_at: new Date().toISOString()
                }, { onConflict: 'id' });

                if (error) throw error;
                console.log(`✅ Supabase Updated.`);

                // 2. Update Local resources.ts
                const updated = resources.replace(
                    new RegExp(`(id:\\s*'${targetId}'[\\s\\S]*?status:\\s*')[^']*(')`, 'g'),
                    `$1COMPLETED$2`
                );
                fs.writeFileSync(RESOURCES_PATH, updated);
                console.log(`✅ Local file updated.`);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, id: targetId }));
            } catch (err) {
                console.error(`❌ Error:`, err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
    }
});

server.listen(PORT, () => console.log(`🚀 Bridge V22 (V6 Compatible) on ${PORT}`));
