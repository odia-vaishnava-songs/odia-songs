const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'songsContent.ts');

try {
    const lines = fs.readFileSync(filePath, 'utf8').split('\n');
    const start = Math.max(0, 21910);
    const end = Math.min(lines.length, 21940);
    
    console.log(`Lines ${start + 1} to ${end}:`);
    for (let i = start; i < end; i++) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
} catch (err) {
    console.error(err);
}
