
import fs from 'fs';

const resourcesContent = fs.readFileSync('c:/Antigravity/odia-songs/src/data/resources.ts', 'utf8');
const catalogContent = fs.readFileSync('c:/Antigravity/odia-songs/src/data/authorCatalog.ts', 'utf8');

// Extract standardized author names
const catalogMatch = catalogContent.match(/name:\s*'(.+?)'/g);
const standardizedAuthors = catalogMatch ? catalogMatch.map(m => m.match(/'(.+?)'/)[1]) : [];

console.log('Standardized Authors:', standardizedAuthors);

const resources = resourcesContent.split('},').map(r => r.trim() + '}');

resources.forEach(r => {
    if (r.includes('id:')) {
        const id = r.match(/id:\s*'(.+?)'/)?.[1];
        const authorMatch = r.match(/author:\s*'(.+?)'/);
        const author = authorMatch ? authorMatch[1] : null;
        const title = r.match(/title:\s*'(.+?)'/)?.[1];

        if (!author) {
            console.log(`MISSING AUTHOR - ID: ${id}, Title: ${title}`);
        } else if (!standardizedAuthors.includes(author)) {
            // Check if it's an Odia name that matches the catalog
            // The catalog also has 'odia' field, but my regex only got 'name'
            console.log(`UNSTANDARDIZED AUTHOR - ID: ${id}, Author: ${author}, Title: ${title}`);
        }
    }
});
