
const fs = require('fs');
const json = fs.readFileSync('jayajayajagannatha_structured.json', 'utf8');

const sql = `
-- Sync Script for Jaya Jaya Jagannatha Sacira Nandana
INSERT INTO songs (
    id, title, category, type, description, author, structured_content, status, published
) VALUES (
    'song-jayajayajagannathasacira',
    'ଜୟ ଜୟ ଜଗନ୍ନାଥ ଶଚୀର ନନ୍ଦନ (Jaya Jaya Jagannatha Sacira Nandana)',
    'Songs',
    'html',
    'ବାସୁଦେବ ଘୋଷ ଙ୍କ ରଚିତ ଜୟ ଜୟ ଜଗନ୍ନାଥ ଶଚୀର ନନ୍ଦନ',
    'ବାସୁଦେବ ଘୋଷ (Vasudeva Ghosa)',
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

fs.writeFileSync('sync_jayajayajagannatha.sql', sql);
console.log('SQL generated for Jaya Jaya Jagannatha');
