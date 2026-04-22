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
              .replace(/h/g, '') // ignore 'h' differences
              .replace(/[aeiouy]/g, '') // ignore vowels
              .replace(/[^a-z]/g, ''); // ignore symbols/spaces
}

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204); res.end(); return;
    }

    if (req.method === 'POST' && req.url === '/sync') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const searchTitle = data.title || data.songTitle || "";
                console.log(`\n📦 Syncing: "${searchTitle}"`);
                
                const resources = fs.readFileSync(RESOURCES_PATH, 'utf8');
                const searchNorm = normalize(searchTitle);
                
                let songId = null;
                const lines = resources.split('\n');
                let currentId = null;
                
                for (let i = 0; i < lines.length; i++) {
                    const idMatch = lines[i].match(/id:\s*'([^']*)'/);
                    if (idMatch) currentId = idMatch[1];
                    
                    if (currentId && normalize(lines[i]).includes(searchNorm) && searchNorm.length > 3) {
                        songId = currentId; break;
                    }
                }

                if (!songId) {
                    // Slug match fallback
                    const idSlug = searchTitle.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 8);
                    const match = resources.match(new RegExp(`id:\\s*'(song-[^']*(?:${idSlug}))'`, 'i'));
                    if (match) songId = match[1];
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
                console.log(`✅ Status set to COMPLETED.`);

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

server.listen(PORT, () => console.log(`🚀 Bridge V3 Live (Ultra-Robust Search) on ${PORT}`));
