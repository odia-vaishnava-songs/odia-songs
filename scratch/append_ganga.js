import fs from 'fs';
import path from 'path';

const songJson = JSON.parse(fs.readFileSync('ganga_stotram_structured.json', 'utf8'));
const songContent = `\nexport const SONG_GANGASTOTRAM_STRUCTURED: StructuredSong = ${JSON.stringify(songJson, null, 2)};\n`;

const filePath = 'src/data/songsContent.ts';
fs.appendFileSync(filePath, songContent, 'utf8');
console.log('Successfully appended Ganga Stotram to songsContent.ts');
