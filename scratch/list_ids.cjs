const fs = require('fs');
const content = fs.readFileSync('c:/Antigravity/odia-songs/src/data/resources.ts', 'utf8');
const idRegex = /id:\s*['"]([^'"]+)['"]/g;
let match;
const ids = [];
while ((match = idRegex.exec(content)) !== null) {
    ids.push(match[1]);
}
console.log(JSON.stringify(ids));
