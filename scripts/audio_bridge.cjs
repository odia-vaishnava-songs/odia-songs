const http = require('http');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- CONFIGURATION ---
const SUPABASE_URL = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';
const PORT = 3456;
const RESOURCES_PATH = path.join(__dirname, '../src/data/resources.ts');

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
                
                // 1. DIRECT SEARCH: Use grep-like logic to find the ID
                const resources = fs.readFileSync(RESOURCES_PATH, 'utf8');
                const lines = resources.split('\n');
                let songId = null;
                
                // Extract core search words (at least 5 characters)
                const coreWords = title.split(' ').filter(w => w.length >= 4);
                
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    // If this line contains our title
                    if (coreWords.every(w => line.includes(w))) {
                        // Look back for the ID
                        for (let j = i; j >= Math.max(0, i - 10); j--) {
                            const idMatch = lines[j].match(/id:\s*'([^']*)'/);
                            if (idMatch) {
                                songId = idMatch[1];
                                break;
                            }
                        }
                    }
                    if (songId) break;
                }

                if (!songId) {
                    // Fallback to simpler fuzzy
                    const parts = title.split(' ');
                    songId = lines.find(l => parts.some(p => p.length > 5 && l.includes(p)))?.match(/id:\s*'([^']*)'/)?. [1];
                }

                if (!songId) throw new Error(`Could not find ID for "${title}"`);
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

server.listen(PORT, () => console.log(`🚀 Bridge V13 (Grep Machine) on ${PORT}`));
