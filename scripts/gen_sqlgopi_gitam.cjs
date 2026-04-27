
const fs = require('fs');
const json = fs.readFileSync('gopi_gitam_structured.json', 'utf8');

const sql = `
-- Updated Sync Script for Gopi Gitam (Search by First Line)
INSERT INTO songs (
    id, title, category, type, description, author, structured_content, status, published
) VALUES (
    'song-gopigitam',
    'ଜୟତି ତେଽଧିକଂ ଜନ୍ମନା ବ୍ରଜଃ (Jayati Te ’Dhikam Janmanā Vrajaḥ)',
    'Songs',
    'html',
    'ଗୋପୀ ଗୀତମ୍ (Gopi Gitam)',
    'ଶ୍ରୀ ଶୁକଦେବ ଗୋସ୍ୱାମୀ (Śrī Śukadeva Gosvāmī)',
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

fs.writeFileSync('sync_gopi_gitam.sql', sql);
console.log('Updated SQL generated for Gopi Gitam');
