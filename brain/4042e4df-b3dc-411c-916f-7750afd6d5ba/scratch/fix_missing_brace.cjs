const fs = require('fs');
const path = require('path');

const filePath = 'c:/Antigravity/odia-songs/src/data/songsContent.ts';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// We need to insert a "        }," between line 31742 and 31743.
// Index 31742 (which is Line 31743) should be "        },"
// And then the existing line at 31742 should move to 31743.

lines.splice(31742, 0, '        },');

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Final fix: Added missing verse object closure.');
