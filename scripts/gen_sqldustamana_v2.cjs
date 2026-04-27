
const fs = require('fs');
const path = require('path');
const json = fs.readFileSync('dustamana_structured.json', 'utf8');

const sql = `
-- Sync Script for Dusta Mana (Corrected Schema)
INSERT INTO songs (
    id, title, category, type, description, author, structured_content, status, published
) VALUES (
    'song-dustamana',
    'ଦୁଷ୍ଟ ମନ (Dusta Mana)',
    'Songs',
    'html',
    'ଦୁଷ୍ଟ ମନ — ଶ୍ରୀଲ ଭକ୍ତି ସିଦ୍ଧାନ୍ତ ସରସ୍ଵତୀ ଠାକୁରଙ୍କ ରଚନା',
    'ଶ୍ରୀଲ ଭକ୍ତି ସିଦ୍ଧାନ୍ତ ସରସ୍ଵତୀ ଠାକୁର (Srila Bhakti Siddhanta Sarasvati Thakura)',
    $json$${json}$json$::jsonb,
    'COMPLETED',
    true
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    category = EXCLUDED.category,
    type = EXCLUDED.type,
    description = EXCLUDED.description,
    author = EXCLUDED.author,
    structured_content = EXCLUDED.structured_content,
    status = EXCLUDED.status,
    published = EXCLUDED.published;
`;

fs.writeFileSync('sync_dustamana.sql', sql);
console.log('SQL regenerated with corrected schema');
