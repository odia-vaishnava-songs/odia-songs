
const fs = require('fs');
const json = fs.readFileSync('radhe_jayajaya_structured.json', 'utf8');

const sql = `
-- Sync Script for Radhe Jaya Jaya Madhava Dayite
INSERT INTO songs (
    id, title, category, type, description, author, structured_content, status, published
) VALUES (
    'song-radhejayajayamadhavadayite',
    'ରାଧେ ଜୟ ଜୟ ମାଧବ-ଦୟିତେ (Radhe Jaya Jaya Madhava Dayite)',
    'Songs',
    'html',
    'ଶ୍ରୀଲ ରୂପ ଗୋସ୍ୱାମୀ ଙ୍କ ଦ୍ଵାରା ରଚିତ ଶ୍ରୀରାଧା ବନ୍ଦନା',
    'ଶ୍ରୀଲ ରୂପ ଗୋସ୍ୱାମୀ (Srila Rupa Gosvami)',
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

fs.writeFileSync('sync_radhe_jayajaya.sql', sql);
console.log('SQL generated for Radhe Jaya Jaya');
