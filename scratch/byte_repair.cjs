const fs = require('fs');
const buf = fs.readFileSync('src/data/songsContent.ts');

// Find the corrupted sequence
// "meaning": "...ପ୍ର" followed by "export"
// We saw: ... e0 ac aa e0 ad 8d e0 ac b0 e0 65 78 70 6f 72 74
// The 'e0' at the end is the problem.

const target = Buffer.from('6578706f727420636f6e737420534f4e475f484152494841524159454e414d41485f53545255435455524544', 'hex');
// This is "export const SONG_HARIHARAYENAMAH_STRUCTURED"

const index = buf.indexOf(target);

if (index !== -1) {
    // Check if the byte before it is e0
    if (buf[index - 1] === 0xe0) {
        console.log("Found corrupted byte 0xe0 at index:", index - 1);
        
        // We will replace the whole area around the boundary with a clean closure.
        // We'll go back to the start of the "meaning" line.
        
        // Let's find the last '"meaning": "' before the index
        const searchStr = Buffer.from('"meaning": "', 'utf8');
        const lastMeaning = buf.lastIndexOf(searchStr, index);
        
        if (lastMeaning !== -1) {
            const before = buf.slice(0, lastMeaning);
            const after = buf.slice(index);
            
            const closure = Buffer.from('"meaning": "ଏହି ଅଧମ ଏବଂ ନିସ୍ଵ ପ୍ରାଣୀ ପ୍ରାର୍ଥନା କରୁଛି ॥" } ] } ] };\n\n', 'utf8');
            
            const newBuf = Buffer.concat([before, closure, after]);
            fs.writeFileSync('src/data/songsContent.ts', newBuf);
            console.log("File repaired by byte manipulation.");
        }
    } else {
        console.log("Corrupted byte 0xe0 not found exactly before target. Byte is:", buf[index-1]);
    }
} else {
    console.log("Target not found in buffer.");
}
