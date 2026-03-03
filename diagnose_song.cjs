const fs = require('fs');
const content = fs.readFileSync('odia-songs/APP-Srila Bhaktivinoda Thakura.txt', 'utf8');
const linesArr = content.split(/\r?\n/);

let songs = [];
let currentSongTitle = null;

for (let i = 0; i < linesArr.length; i++) {
    let l = linesArr[i];

    // Check if line contains the problem song title
    if (l.includes('Gurudeva! Boro Krpa Kori')) {
        console.log('--- FOUND TEXT BOUNDARY (lines ' + i + ' to ' + (i + 40) + ') ---');
        console.log(linesArr.slice(i, i + 40).join('\n'));
        break;
    }
}
