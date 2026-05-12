const fs = require('fs');
const path = require('path');

const filePath = 'c:/Antigravity/odia-songs/src/data/songsContent.ts';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

console.log('Removing premature verses closure at 31743 and 31744');

// Line 31743 is index 31742.
// Line 31744 is index 31743.
lines.splice(31742, 2);

// Also, we need a comma after the previous verse object if it's missing.
// Line 31742 (now) was line 31745 (before), which is the start of verse 3.
// The line before it (31741 now) should have a comma.
if (!lines[31741].trim().endsWith(',')) {
    lines[31741] = lines[31741].trimEnd() + ',';
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Successfully repaired the verses array structure.');
