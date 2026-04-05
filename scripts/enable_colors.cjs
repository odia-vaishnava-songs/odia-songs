const fs = require('fs');
const path = 'src/data/resources.ts';

let content = fs.readFileSync(path, 'utf8');

// Use regex to add published: true to song objects that don't have it
// Find the block for these songs and insert the flag
function addPublished(id) {
    const idStr = `id: '${id}'`;
    const index = content.indexOf(idStr);
    if (index === -1) return;
    
    // Find the next closing brace for this object
    let nextBrace = content.indexOf('}', index);
    if (nextBrace === -1) return;
    
    const objectChunk = content.substring(index, nextBrace);
    if (!objectChunk.includes('published:')) {
        content = content.substring(0, nextBrace) + '        published: true,\n' + content.substring(nextBrace);
    }
}

addPublished('song-emonadurmati');
addPublished('song-gaygoramadhura');

// Also ensure they have status: 'COMPLETED'
function addStatus(id) {
    const idStr = `id: '${id}'`;
    const index = content.indexOf(idStr);
    if (index === -1) return;
    
    let nextBrace = content.indexOf('}', index);
    if (nextBrace === -1) return;
    
    const objectChunk = content.substring(index, nextBrace);
    if (!objectChunk.includes('status:')) {
        content = content.substring(0, nextBrace) + "        status: 'COMPLETED',\n" + content.substring(nextBrace);
    }
}

addStatus('song-emonadurmati');
addStatus('song-gaygoramadhura');

fs.writeFileSync(path, content, 'utf8');
console.log('✅ Updated Published status and Color Codes locally.');
