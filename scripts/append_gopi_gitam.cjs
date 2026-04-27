
const fs = require('fs');
const contentPath = 'src/data/songsContent.ts';
const jsonData = fs.readFileSync('gopi_gitam_structured.json', 'utf8');

const variableName = 'SONG_GOPIGITAM_STRUCTURED';
const appendContent = `\nexport const ${variableName}: StructuredSong = ${jsonData};\n`;

fs.appendFileSync(contentPath, appendContent);
console.log(`Appended ${variableName} to ${contentPath}`);
