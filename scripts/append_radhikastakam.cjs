const fs = require('fs');
const path = require('path');

const structuredData = JSON.parse(fs.readFileSync(path.join(__dirname, '../radhikastakam_structured.json'), 'utf8'));
const filePath = path.join(__dirname, '../src/data/songsContent.ts');

const content = `\nexport const SONG_RADHIKASTAKAM_STRUCTURED: StructuredSong = ${JSON.stringify(structuredData, null, 4)};\n`;

fs.appendFileSync(filePath, content);
console.log('✅ Appended SONG_RADHIKASTAKAM_STRUCTURED to src/data/songsContent.ts');
