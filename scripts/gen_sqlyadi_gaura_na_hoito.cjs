
const fs = require('fs');
const json = fs.readFileSync('yadi_gaura_na_hoito_structured.json', 'utf8');

const sql = `
-- Sync Script for Yadi Gaura Na Hoito
INSERT INTO songs (
    id, title, category, type, description, author, structured_content, status, published
) VALUES (
    'song-yadigauranahoito',
    'ଯଦି ଗୌର ନା ହଇତ (Yadi Gaura Na Hoito)',
    'Songs',
    'html',
    'ବାସୁଦେବ ଘୋଷ ଙ୍କ ରଚନା ଯଦି ଗୌର ନା ହଇତ',
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

fs.writeFileSync('sync_yadi_gaura_na_hoito.sql', sql);
console.log('SQL generated for Yadi Gaura Na Hoito');
