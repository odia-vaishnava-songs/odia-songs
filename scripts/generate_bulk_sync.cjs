
const fs = require('fs');
const path = require('path');

// The list of IDs already in the database to avoid duplicates
const existingDbIds = [
  'song-amarjivana', 'song-atmanivedanatuwapade', 'DOYALNITAICAITANYA', 'gita-chapter-13',
  'song-anadikaramaphale', 'song-udiloaruna', 'song-ekhanbujhinuprabhu', 'song-emonadurmati',
  'song-nadiyagodrume', 'song-arkenomayajale', 'bhaja-re-bhaja-re-amar',
  'gita-chapter-1', 'gita-chapter-2', 'gita-chapter-3', 'gita-chapter-4', 'gita-chapter-5',
  'gita-chapter-6', 'gita-chapter-7', 'gita-chapter-8', 'gita-chapter-9', 'gita-chapter-10',
  'gita-chapter-11', 'gita-chapter-12', 'gita-chapter-14'
];

async function generateSql() {
    const resourcesPath = 'c:/Antigravity/odia-songs/src/data/resources.ts';
    const content = fs.readFileSync(resourcesPath, 'utf8');
    
    // Split by comma and closing brace to isolate objects
    const rawBlocks = content.split('},').map(b => b.trim());

    let sql = "-- BULK IMPORT OF MISSING SONGS --\n\n";
    let count = 0;

    rawBlocks.forEach(block => {
        const idMatch = block.match(/id:\s*'([^']+)'/);
        if (!idMatch) return;
        const id = idMatch[1];
        
        if (existingDbIds.includes(id)) return;

        const titleMatch = block.match(/title:\s*'([^']+)'/);
        const title_odia = block.match(/title_odia:\s*'([^']+)'/);
        const title_english = block.match(/title_english:\s*'([^']+)'/);
        const authorMatch = block.match(/author:\s*'([^']+)'/);
        const categoryMatch = block.match(/category:\s*'([^']+)'/);
        
        const title = titleMatch ? titleMatch[1].replace(/'/g, "''") : "";
        const odia = title_odia ? title_odia[1].replace(/'/g, "''") : "";
        const english = title_english ? title_english[1].replace(/'/g, "''") : "";
        const author = authorMatch ? authorMatch[1].replace(/'/g, "''") : "ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର";
        const category = categoryMatch ? categoryMatch[1] : "Songs";

        sql += `INSERT INTO songs (id, title, title_odia, title_english, author, category, published)\n`;
        sql += `VALUES ('${id}', '${title}', '${odia}', '${english}', '${author}', '${category}', true)\n`;
        sql += `ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;\n\n`;
        count++;
    });

    fs.writeFileSync('bulk_sync_songs.sql', sql);
    console.log("Generated bulk_sync_songs.sql with " + count + " songs.");
}

generateSql();
