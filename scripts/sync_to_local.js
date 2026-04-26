
import fs from 'fs';

const id = 'song-nitainamhate';
const varName = 'SONG_NITAINAMHATE_STRUCTURED';
const json = fs.readFileSync('song_export.json', 'utf8');

const content = `\nexport const ${varName}: StructuredSong = ${json};\n`;

fs.appendFileSync('src/data/songsContent.ts', content, 'utf8');
console.log(`Added ${varName} to songsContent.ts`);
