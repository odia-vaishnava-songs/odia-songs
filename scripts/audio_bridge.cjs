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

const server = http.createServer(async (req, res) => {
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
                const searchTitle = data.title || data.songTitle || "";
                console.log(`\n📦 Syncing: "${searchTitle}"`);
                
                // 1. Load resources.ts
                const resources = fs.readFileSync(RESOURCES_PATH, 'utf8');
                
                // 2. SMART SEARCH: Try to find ID based on English or Odia title
                let songId = null;
                const lines = resources.split('\n');
                let currentId = null;
                
                for (let i = 0; i < lines.length; i++) {
                    const idMatch = lines[i].match(/id:\s*'([^']*)'/);
                    if (idMatch) currentId = idMatch[1];
                    
                    if (currentId && (lines[i].toLowerCase().includes(searchTitle.toLowerCase()))) {
                        songId = currentId;
                        break;
                    }
                }

                if (!songId) {
                    // Last resort: Slug match
                    const slug = searchTitle.toLowerCase().replace(/[^a-z]/g, '');
                    const slugMatch = resources.match(new RegExp(`id:\\s*'(song-[^']*(?:${slug.substring(0, 5)}))'`, 'i'));
                    if (slugMatch) songId = slugMatch[1];
                }

                if (!songId) throw new Error(`Could not find ID for "${searchTitle}"`);

                console.log(`🎯 Matched ID: ${songId}`);

                // 3. Prepare JSONB
                const audioVersions = data.versions.map(v => ({
                    label: v.singer,
                    url: v.url
                }));

                const { error } = await supabase
                    .from('songs')
                    .update({
                        audio_url: audioVersions[0].url,
                        audio_versions: audioVersions,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', songId);

                if (error) throw error;
                console.log(`✅ Supabase Updated.`);

                // 4. Update status surgically
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

server.listen(PORT, () => console.log(`🚀 Bridge V2 Live on ${PORT}`));
