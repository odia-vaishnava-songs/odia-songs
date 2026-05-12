const fs = require('fs');
const path = require('path');

const filePath = 'c:/Antigravity/odia-songs/src/data/songsContent.ts';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

for (let i = 31735; i <= 31755; i++) {
    console.log(`Line ${i}:`, JSON.stringify(lines[i-1]));
}
