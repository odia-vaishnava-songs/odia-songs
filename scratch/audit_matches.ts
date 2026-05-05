import { AUTHOR_CATALOG } from './src/data/authorCatalog';
import { RESOURCES } from './src/data/resources';
import { isTitleMatch } from './src/utils/matching';

async function audit() {
    console.log("Auditing for potential missing matches...");
    
    for (const author of AUTHOR_CATALOG) {
        console.log(`\nChecking ${author.name}...`);
        
        const authorResources = RESOURCES.filter(r => 
            (r.author || '').toLowerCase().includes(author.name.toLowerCase().split(' ')[0]) ||
            (author.name === 'Srila Prabhupada' && (r.author || '').includes('Bhaktivedanta Swami'))
        );
        
        for (const catSong of author.catalog) {
            // Check if this song is already matched
            const match = authorResources.find(r => 
                isTitleMatch(catSong.title_english, r.title_english || r.title, catSong.title_odia, r.title_odia)
            );
            
            if (!match) {
                // Not matched. Let's look for VERY fuzzy potential matches
                const potential = RESOURCES.filter(r => {
                    const t1 = catSong.title_english.toLowerCase();
                    const t2 = (r.title_english || r.title || '').toLowerCase();
                    
                    // Simple inclusion or very close start
                    return t2.includes(t1.substring(0, 8)) || t1.includes(t2.substring(0, 8));
                });
                
                if (potential.length > 0) {
                    console.log(`[POTENTIAL] Catalog: "${catSong.title_english}" might be:`);
                    potential.forEach(p => console.log(`   - Resource: "${p.title_english || p.title}" (ID: ${p.id}, Author: ${p.author})`));
                }
            }
        }
    }
}

audit();
