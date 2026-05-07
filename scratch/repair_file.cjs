const fs = require('fs');
const filePath = 'src/data/songsContent.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Find the corrupted boundary
const target = 'export const SONG_HARIHARAYENAMAH_STRUCTURED';
const index = content.indexOf(target);

if (index !== -1) {
    const before = content.slice(0, index);
    const after = content.slice(index);
    
    // Check if 'before' ends with a quote or bracket
    // It seems it ends with "ପ୍ର"
    
    // We will find the last valid closure or just fix this one line.
    // The previous song seems to be 'song-jeanilopremadhana' or similar.
    // Let's look for the last "id": 6 (if it had 6 verses)
    
    // Actually, I'll just look for the last '"meaning": "' before the index
    const lastMeaningStart = before.lastIndexOf('"meaning": "');
    if (lastMeaningStart !== -1) {
        const lineStart = before.lastIndexOf('\n', lastMeaningStart);
        const fixedBefore = before.slice(0, lastMeaningStart) + 
            '"meaning": "ଏହି ଅଧମ ଏବଂ ନିସ୍ଵ ପ୍ରାଣୀ ପ୍ରାର୍ଥନା କରୁଛି ॥" } ] } ] };\n\n';
        
        fs.writeFileSync(filePath, fixedBefore + after, 'utf8');
        console.log("File repaired successfully.");
    } else {
        console.log("Could not find previous meaning to fix.");
    }
} else {
    console.log("Target constant not found.");
}
