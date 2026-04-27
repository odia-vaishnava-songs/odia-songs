
const fs = require('fs');
const contentPath = 'src/data/songsContent.ts';
const jsonData = fs.readFileSync('damodarastakam_structured.json', 'utf8');

const variableName = 'SONG_DAMODARASTAKAM_STRUCTURED';
const appendContent = `\nexport const ${variableName}: StructuredSong = ${jsonData};\n`;

fs.appendFileSync(contentPath, appendContent);
console.log(`Appended ${variableName} to ${contentPath}`);
