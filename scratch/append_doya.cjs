const fs = require('fs');
const filePath = 'src/data/songsContent.ts';

const songJson = JSON.parse(fs.readFileSync('doya_koro_more_nitai_structured.json', 'utf8'));
const songContent = `\nexport const SONG_DOYAKOROMORENITAI_STRUCTURED: StructuredSong = ${JSON.stringify(songJson, null, 2)};\n`;

fs.appendFileSync(filePath, songContent, 'utf8');
console.log('Successfully appended Doya Koro More Nitai to songsContent.ts');
