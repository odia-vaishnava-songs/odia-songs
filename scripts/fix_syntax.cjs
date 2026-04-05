const fs = require('fs');
const path = 'src/data/resources.ts';

let content = fs.readFileSync(path, 'utf8');

// Fix the syntax error: 'Bhaktivinoda Ṭhākura' followed directly by 'published'
content = content.replace(/'Bhaktivinoda Ṭhākura'\s+published: true/g, "'Bhaktivinoda Ṭhākura',\n        published: true");
content = content.replace(/'Bhaktivinoda Ṭhākura'\s+status: 'COMPLETED'/g, "'Bhaktivinoda Ṭhākura',\n        status: 'COMPLETED'");

fs.writeFileSync(path, content, 'utf8');
console.log('✅ SYNTAX FIXED: Localhost should now load correctly with colors.');
