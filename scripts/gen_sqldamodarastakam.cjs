
const fs = require('fs');
const json = fs.readFileSync('damodarastakam_structured.json', 'utf8');

const sql = `
-- Sync Script for Sri Damodarastakam
INSERT INTO songs (
    id, title, category, type, description, author, structured_content, status, published
) VALUES (
    'song-damodarastakam',
    'ଶ୍ରୀ ଦାମୋଦରାଷ୍ଟକମ୍ (Sri Damodarastakam)',
    'Songs',
    'html',
    'ସତ୍ୟବ୍ରତ ମୁନି ବିରଚିତ ଶ୍ରୀ ଦାମୋଦରାଷ୍ଟକମ୍',
    'ସତ୍ୟବ୍ରତ ମୁନି (Satyavrata Muni)',
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

fs.writeFileSync('sync_damodarastakam.sql', sql);
console.log('SQL generated for Sri Damodarastakam');
