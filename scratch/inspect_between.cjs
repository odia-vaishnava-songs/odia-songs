const fs = require('fs');
const filePath = 'src/data/songsContent.ts';
let content = fs.readFileSync(filePath, 'utf8');

const target = 'export const SONG_HARIHARAYENAMAH_STRUCTURED';
const firstIdx = content.indexOf(target);
const secondIdx = content.indexOf(target, firstIdx + 1);

if (firstIdx !== -1 && secondIdx !== -1) {
    console.log("Content between 1st and 2nd occurrence:");
    console.log(content.slice(firstIdx + 50, firstIdx + 500));
} else {
    console.log("Could not find two occurrences.");
}
