const fs = require('fs');

const filePath = 'src/data/songsContent.ts';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Find the index of the line containing SONG_GANGASTOTRAM_STRUCTURED
const targetIndex = lines.findIndex(line => line.includes('SONG_GANGASTOTRAM_STRUCTURED'));

if (targetIndex !== -1) {
    // Truncate from the target index
    const preservedLines = lines.slice(0, targetIndex);
    
    // Read the fixed JSON
    const fixedJson = JSON.parse(fs.readFileSync('ganga_stotram_structured.json', 'utf8'));
    const newContent = `export const SONG_GANGASTOTRAM_STRUCTURED: StructuredSong = ${JSON.stringify(fixedJson, null, 2)};\n`;
    
    fs.writeFileSync(filePath, preservedLines.join('\n') + '\n' + newContent, 'utf8');
    console.log('Successfully replaced corrupted content in songsContent.ts');
} else {
    console.log('Target string not found');
}
