const fs = require('fs');
const path = require('path');

const filePath = 'c:/Antigravity/odia-songs/src/data/songsContent.ts';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

console.log('Line 31745:', JSON.stringify(lines[31744]));
console.log('Line 31746:', JSON.stringify(lines[31745]));
console.log('Line 31747:', JSON.stringify(lines[31746]));
console.log('Line 31748:', JSON.stringify(lines[31747]));
console.log('Line 31749:', JSON.stringify(lines[31748]));
