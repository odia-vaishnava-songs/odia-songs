const fs = require('fs');
const content = fs.readFileSync('src/data/songsContent.ts', 'utf8');
const startMatch = content.indexOf('export const SONG_YADITEHARIPADA_STRUCTURED: StructuredSong = {');
const endMatch = content.indexOf('};', startMatch) + 2;
let structuredStr = content.substring(startMatch, endMatch);
// Extract only the object part
const objectStart = structuredStr.indexOf('{');
const objectEnd = structuredStr.lastIndexOf('}') + 1;
const structuredContentStr = structuredStr.substring(objectStart, objectEnd);

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
    status
) 
VALUES (
    'song-yaditeharipada', 
    'ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ-ସୁଧା (Yadi Te Hari Pada Saroja Sudha)', 
    'ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ-ସୁଧା', 
    'Yadi Te Hari Pada Saroja Sudha', 
    'Songs', 
    'html', 
    'ଶ୍ରୀଲ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ରଚନା', 
    'Bhaktivinoda Ṭhākura', 
    $json$${structuredContentStr}$json$,
    'COMPLETED'
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    title_odia = EXCLUDED.title_odia,
    title_english = EXCLUDED.title_english,
    description = EXCLUDED.description,
    author = EXCLUDED.author,
    structured_content = EXCLUDED.structured_content,
    status = EXCLUDED.status;
`;

fs.writeFileSync('sync_yaditeharipada.sql', sql);
console.log("Successfully generated sync_yaditeharipada.sql");
