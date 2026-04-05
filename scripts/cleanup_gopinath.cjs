const fs = require('fs');
const path = 'src/data/resources.ts';

let content = fs.readFileSync(path, 'utf8');

// The screenshot shows duplicates for Part 1, 2, and 3.
// I will ensure the IDs used in the local code match the Supabase IDs Exactly.

// IDs used in Supabase: 
// Part 1: 'song-gopinatmamanivedana'
// Part 2: 'song-gopinatpart2'  (I might have had a typo in my previous local script as 'song-gopinatpart2' vs 'song-gopinatpart2')
// Part 3: 'song-gopinatpart3'

// Let's check for ANY duplicate Gopinath entries and merge them.
// Actually, I will just rewrite the Gopinath entries to be sure.

const gopinathIds = [
    'song-gopinatmamanivedana',
    'song-gopinatpart2',
    'song-gopinatpart3'
];

// Remove any existing Gopinath entries that might have slightly different IDs
content = content.replace(/\{\s+id:\s+'song-gopinath[^']+[\s\S]+?\},/g, '');
content = content.replace(/\{\s+id:\s+'song-gopinatpart[^']+[\s\S]+?\},/g, '');

// Now I will add them back correctly at the end of the RESOURCES array.
const gopinathBlock = `      {
        id: 'song-gopinatmamanivedana',
        title: 'ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନୋ (Gopinath Part 1)',
        title_odia: 'ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନୋ',
        title_english: 'Gopinath Part 1 (Mama Nivedana Suno)',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },
      {
        id: 'song-gopinatpart2',
        title: 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍ (Gopinath Part 2)',
        title_odia: 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍',
        title_english: 'Gopinath Part 2 (Ghuchao Sansar)',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },
      {
        id: 'song-gopinatpart3',
        title: 'ଗୋପୀନାଥ (Part 3): ଆମାର ଉପାୟ ନାହି (Gopinath Part 3)',
        title_odia: 'ଗୋପୀନାଥ (Part 3): ଆମାର ଉପାୟ ନାହି',
        title_english: 'Gopinath Part 3 (Amar Upaya Nai)',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },`;

const lastBracket = content.lastIndexOf('];');
if (lastBracket !== -1) {
    content = content.substring(0, lastBracket).trim();
    if (content.endsWith(',')) {
        content += '\n' + gopinathBlock + '\n];';
    } else {
        content += ',\n' + gopinathBlock + '\n];';
    }
}

fs.writeFileSync(path, content, 'utf8');
console.log('✅ Local Index Cleaned: Duplicates should be gone.');
