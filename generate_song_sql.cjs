const fs = require('fs');
const path = require('path');

const jsonPath = process.argv[2];
const songId = process.argv[3];

if (!jsonPath || !songId) {
    console.error("Usage: node generate_song_sql.cjs <json_file> <song_id>");
    process.exit(1);
}

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const sql = `
INSERT INTO songs (
    id, 
    title, 
    title_odia, 
    title_english, 
    category, 
    type, 
    description, 
    author, 
    structured_content,
    status,
    published
) 
VALUES (
    '${songId}', 
    '${data.title} (${songId.replace('song-', '').toUpperCase()})', 
    '${data.title}', 
    '${songId.replace('song-', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}', 
    'Ashtakams', 
    'html', 
    'ଶ୍ରୀ ଜଗନ୍ନାଥାଷ୍ଟକମ୍ (Adi Sankaracarya)', 
    '${data.author}', 
    $json$${JSON.stringify(data)}$json$,
    'COMPLETED',
    true
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    title_odia = EXCLUDED.title_odia,
    title_english = EXCLUDED.title_english,
    description = EXCLUDED.description,
    author = EXCLUDED.author,
    structured_content = EXCLUDED.structured_content,
    status = EXCLUDED.status,
    published = EXCLUDED.published;
`;

const outPath = `sync_${songId.replace('song-', '')}.sql`;
fs.writeFileSync(outPath, sql);
console.log(`Successfully generated ${outPath}`);
