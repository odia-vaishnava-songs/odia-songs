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

// --- SERVER LOGIC ---
const server = http.createServer(async (req, res) => {
    // Enable CORS for the browser console
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/sync') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                console.log(`\n📦 Received payload for: "${data.songTitle}"`);
                
                // 1. Find the Song ID in resources.ts
                const resources = fs.readFileSync(RESOURCES_PATH, 'utf8');
                // Escape title for regex
                const escapedTitle = data.songTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const idMatch = resources.match(new RegExp(`id:\\s*'([^']*)'[^}]*title:[^']*${escapedTitle}`, 'i'));
                
                let songId = null;
                if (idMatch) {
                    songId = idMatch[1];
                } else {
                    console.log(`⚠️ Exact title match failed. Searching for ID containing title parts...`);
                    const slug = data.songTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
                    const looseMatch = resources.match(new RegExp(`id:\\s*'(song-[^']*(?:${slug.substring(0, 5)}|${slug.slice(-5)}))'`, 'i'));
                    if (looseMatch) songId = looseMatch[1];
                }

                if (!songId) {
                    console.error(`❌ ERROR: Could not find a Song ID for "${data.songTitle}" in resources.ts`);
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Song ID not found in resources.ts' }));
                    return;
                }

                console.log(`🎯 Identified Song ID: ${songId}`);

                // 2. Prepare JSONB for Supabase
                const audioVersions = data.versions.map(v => ({
                    label: v.singer,
                    url: v.url
                }));

                const primaryUrl = audioVersions[0]?.url || '';
                const primaryVocalist = audioVersions.length > 1 ? 'Various Artistes' : (audioVersions[0]?.label || '');

                // 3. Update Supabase
                const { error } = await supabase
                    .from('songs')
                    .update({
                        audio_url: primaryUrl,
                        audio_versions: audioVersions,
                        vocalist: primaryVocalist,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', songId);

                if (error) throw error;
                console.log(`✅ Supabase Updated successfully.`);

                // 4. Update status in resources.ts (surgical edit)
                let updatedResources = resources.replace(
                    new RegExp(`(id:\\s*'${songId}'[\\s\\S]*?status:\\s*')[^']*(')`, 'g'),
                    `$1COMPLETED$2`
                );
                fs.writeFileSync(RESOURCES_PATH, updatedResources);
                console.log(`✅ Local resources.ts updated to COMPLETED.`);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, songId }));
                console.log(`🌟 FINISHED: "${data.songTitle}" is now live with ${audioVersions.length} versions.\n`);

            } catch (err) {
                console.error(`❌ Sync Error:`, err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`🚀 Audio Bridge is running on http://localhost:${PORT}`);
    console.log(`Ready for data from VsNectar DevTools...\n`);
});
