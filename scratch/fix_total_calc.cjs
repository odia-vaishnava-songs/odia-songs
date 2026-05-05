const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/SongsPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const target = `                return {
                    author: name,
                    count: dbCount,
                    total: catalogEntry ? Math.max(catalogEntry.catalog.length, dbCount) : dbCount
                };`;

const replacement = `                const totalInCatalog = catalogEntry ? catalogEntry.catalog.length : 0;
                return {
                    author: name,
                    count: dbCount,
                    total: Math.max(totalInCatalog, dbCount)
                };`;

// Also update the summary card logic to be clearer
content = content.replace(target, replacement);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated total calculation in SongsPage.tsx');
