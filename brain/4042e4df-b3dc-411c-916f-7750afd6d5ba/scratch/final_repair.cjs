const fs = require('fs');
const path = require('path');

const filePath = 'c:/Antigravity/odia-songs/src/data/songsContent.ts';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

console.log('Removing premature closure at 31745 and junk at 31747');

// Line numbers are 1-indexed, so line 31745 is index 31744.
// We want to remove lines 31745, 31746, 31747.
// We'll do it in reverse order to keep indices stable or just use splice.

lines.splice(31744, 3); 

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Successfully repaired the structure of SONG_GAURANGAKARUNAKORO_STRUCTURED.');
