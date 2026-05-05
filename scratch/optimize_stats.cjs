const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/SongsPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const statsOld = `            const merged = standardizedList.map(name => {
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

const statsNew = `            const allSongs = data.concat(songResources as any);
            const authorToSongs: Record<string, any[]> = {};
            allSongs.forEach(s => {
                const name = s.author ? standardizeAuthorName(s.author) : 'Other Authors';
                if (!authorToSongs[name]) authorToSongs[name] = [];
                authorToSongs[name].push(s);
            });

            const merged = standardizedList.map(name => {
                const catalogEntry = AUTHOR_CATALOG.find(cat => cat.name === name);
                const totalAvailable = counts[name] || 0;
                const totalInCatalog = catalogEntry ? catalogEntry.catalog.length : 0;
                
                // Calculate how many of the available songs are actually in the catalog
                let availableInCatalog = 0;
                if (catalogEntry) {
                    const authorSongs = authorToSongs[name] || [];
                    availableInCatalog = catalogEntry.catalog.filter(cs => 
                        authorSongs.some(s => isTitleMatch(cs.title_english, s.title_english || s.title, cs.title_odia, s.title_odia))
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

fs.writeFileSync(filePath, content, 'utf8');
console.log('Optimized and synchronized statistics logic in SongsPage.tsx');
