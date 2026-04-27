
const fs = require('fs');
const json = fs.readFileSync('gauranga_tumi_more_structured.json', 'utf8');

const sql = `
-- Sync Script for Gauranga Tumi More
INSERT INTO songs (
    id, title, category, type, description, author, structured_content, status, published
) VALUES (
    'song-gaurangatumimore',
    'ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନ ଛାଡ଼ିହ (Gauranga Tumi More Doya Na Chadhio)',
    'Songs',
    'html',
    'ବାସୁଦେବ ଘୋଷ ଙ୍କ ରଚନା ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନ ଛାଡ଼ିହ',
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

fs.writeFileSync('sync_gauranga_tumi_more.sql', sql);
console.log('SQL generated for Gauranga Tumi More');
