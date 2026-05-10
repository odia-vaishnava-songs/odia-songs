const fs = require('fs');
const filePath = 'src/data/songsContent.ts';

const songJson = JSON.parse(fs.readFileSync('dhule_dhule_gora_chanda_structured.json', 'utf8'));
const songContent = `\nexport const SONG_DHULEDHULEGORACHANDA_STRUCTURED: StructuredSong = ${JSON.stringify(songJson, null, 2)};\n`;

fs.appendFileSync(filePath, songContent, 'utf8');
console.log('Successfully appended Dhule Dhule Gora Chanda to songsContent.ts');
