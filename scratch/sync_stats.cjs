const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/SongsPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix fetchAuthorStats logic
const statsOld = `            const merged = standardizedList.map(name => {
                const catalogEntry = AUTHOR_CATALOG.find(cat => cat.name === name);
                const dbCount = counts[name] || 0;
                const totalInCatalog = catalogEntry ? catalogEntry.catalog.length : 0;
                return {
                    author: name,
                    count: dbCount,
                    total: Math.max(totalInCatalog, dbCount)
                };
            });`;

const statsNew = `            const merged = standardizedList.map(name => {
                const catalogEntry = AUTHOR_CATALOG.find(cat => cat.name === name);
                const totalAvailable = counts[name] || 0;
                const totalInCatalog = catalogEntry ? catalogEntry.catalog.length : 0;
                
                // Calculate how many of the available songs are actually in the catalog
                let availableInCatalog = 0;
                if (catalogEntry) {
                    const authorSongs = data.concat(songResources as any).filter(s => {
                        const sName = s.author ? standardizeAuthorName(s.author) : '';
                        return sName === name;
                    });
                    
                    availableInCatalog = catalogEntry.catalog.filter(cs => 
                        authorSongs.some(s => isTitleMatch(cs.title_english, (s as any).title_english || (s as any).title, cs.title_odia, (s as any).title_odia))
                    ).length;
                } else {
                    availableInCatalog = totalAvailable;
                }

                const extraAvailable = Math.max(0, totalAvailable - availableInCatalog);
                const totalCalculated = totalInCatalog + extraAvailable;

                return {
                    author: name,
                    count: totalAvailable,
                    total: totalCalculated
                };
            });`;

content = content.replace(statsOld, statsNew);

// 2. Fix renderAuthorPanel logic (around line 1406)
const panelOld = `        const availableCount = mergedList.filter(m => !!m.resource).length;
        const totalCount = mergedList.length;`;

// No change needed here actually, because mergedList already contains catalog + extra.
// If mergedList has 78 items and 64 have resources, it will show 64/78.
// If the card shows total=78 and available=64, they will match!

fs.writeFileSync(filePath, content, 'utf8');
console.log('Synchronized statistics logic in SongsPage.tsx');
