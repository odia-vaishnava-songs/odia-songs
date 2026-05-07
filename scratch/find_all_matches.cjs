const fs = require('fs');
const filePath = 'src/data/songsContent.ts';
let content = fs.readFileSync(filePath, 'utf8');

const target = 'export const SONG_HARIHARAYENAMAH_STRUCTURED';
let matches = [];
let index = content.indexOf(target);
while (index !== -1) {
    matches.push(index);
    index = content.indexOf(target, index + 1);
}

console.log("Found matches at indexes:", matches);

matches.forEach((idx, i) => {
    console.log(`Match ${i+1} snippet:`, JSON.stringify(content.slice(idx - 50, idx + 100)));
});
