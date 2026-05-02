
import fs from 'fs';

const content = fs.readFileSync('c:/Antigravity/odia-songs/src/data/resources.ts', 'utf8');
const resources = content.split('},').map(r => r.trim() + '}');

resources.forEach(r => {
    if (r.includes('id:') && !r.includes('author:')) {
        const id = r.match(/id:\s*'(.+?)'/)?.[1];
        const title = r.match(/title:\s*'(.+?)'/)?.[1];
        const category = r.match(/category:\s*'(.+?)'/)?.[1];
        if (id) {
            console.log(`ID: ${id}, Category: ${category}, Title: ${title}`);
        }
    }
});
