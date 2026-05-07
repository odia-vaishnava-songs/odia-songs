const fs = require('fs');
const path = 'src/data/authorCatalog.ts';
let content = fs.readFileSync(path, 'utf8');

// Use a regex-based or manual parsing approach to preserve the structure but remove ghost lines.
// Since it's a TS file, we can treat it as text.
const lines = content.split('\n');
const cleanLines = [];
let inCatalog = false;

for (let line of lines) {
    // If the line looks like a song entry: { title_english: '...' } without an 'id:'
    if (line.includes('{') && line.includes('title_english:') && !line.includes('id:')) {
        console.log('Removing ghost:', line.trim());
        continue;
    }
    cleanLines.push(line);
}

fs.writeFileSync(path, cleanLines.join('\n'), 'utf8');
console.log('Ghost songs removed from catalog.');
