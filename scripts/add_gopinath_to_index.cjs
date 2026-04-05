const fs = require('fs');
const path = 'src/data/resources.ts';

let content = fs.readFileSync(path, 'utf8');

const gopinathMetadata = `      {
        id: 'song-gopinatmamanivedana',
        title: 'ଗୋପୀନାଥ, ମମ ନିବେଦନ ଶୁନ (Gopinath Mama Nivedana Suno)',
        title_odia: 'ଗୋପୀନାଥ, ମମ ନିବେଦନ ଶୁନ',
        title_english: 'Gopinath Mama Nivedana Suno',
        category: 'Songs',
        type: 'html',
        description: 'ଶୁଣନ୍ତୁ ଏହି ସୁନ୍ଦର ଭଜନ ଯେଉଁଥିରେ ଭକ୍ତିବିନୋଦ ଠାକୁର ଗୋପୀନାଥଙ୍କ ନିକଟରେ ଶରଣାଗତି ପ୍ରକାଶ କରୁଛନ୍ତି।',
        structuredContent: (Songs as any).SONG_GOPINATHMAMANIVEDANA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },`;

// Find the end of the RESOURCES array and insert before the last ]
const resourcesEnd = content.lastIndexOf('];');
if (resourcesEnd !== -1) {
    // Insert before the last ]
    content = content.substring(0, resourcesEnd).trim();
    if (content.endsWith(',')) {
        content += '\n' + gopinathMetadata + '\n];';
    } else {
        content += ',\n' + gopinathMetadata + '\n];';
    }
}

fs.writeFileSync(path, content, 'utf8');
console.log('✅ Local Index Updated: Gopinath should now be visible.');
