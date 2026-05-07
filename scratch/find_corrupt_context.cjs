const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'songsContent.ts');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const index = content.indexOf('export const SONG_HARIHARAYENAMAH_STRUCTURED');
    
    if (index !== -1) {
        console.log("Context before HARIHARAYENAMAH:");
        console.log(JSON.stringify(content.slice(index - 100, index)));
        
        // Let's also look at the very end of the file
        console.log("End of file:");
        console.log(JSON.stringify(content.slice(-100)));
    } else {
        console.log("Constant not found!");
    }
} catch (err) {
    console.error(err);
}
