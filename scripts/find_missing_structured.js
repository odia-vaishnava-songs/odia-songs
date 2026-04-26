
import fs from 'fs';

const content = fs.readFileSync('src/data/resources.ts', 'utf8');
const resources = content.split('},').map(r => r.trim());

const missing = [];
resources.forEach(r => {
    const idMatch = r.match(/id:\s*['"]([^'"]+)['"]/);
    if (idMatch) {
        const id = idMatch[1];
        if (!r.includes('structuredContent:')) {
            missing.push(id);
        }
    }
});

console.log("Songs without structuredContent in resources.ts:");
missing.forEach(id => console.log(id));
