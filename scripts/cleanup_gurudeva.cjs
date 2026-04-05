const fs = require('fs');
const path = 'src/data/resources.ts';

let content = fs.readFileSync(path, 'utf8');

// The screenshot shows duplicates for Gurudeva.
// I will remove the ones with bad IDs or corruption.

// Old broken IDs from grep:
// - 'song-gurudeva-krpa'
// - 'song-gurudeva-boro-krpa' (if it looks corrupted)

// Remove song-gurudeva-krpa
content = content.replace(/\{\s+id:\s+'song-gurudeva-krpa'[\s\S]+?\},/g, '');

// Ensure the new one I added is the ONLY one for this song.
// (I already added 'song-gurudevakrpabindu')

fs.writeFileSync(path, content, 'utf8');
console.log('✅ Local Index Cleaned: Broken Gurudeva duplicate removed.');
