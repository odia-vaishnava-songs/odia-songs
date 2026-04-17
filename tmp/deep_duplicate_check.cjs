const fs = require('fs');
const content = fs.readFileSync('src/data/songsContent.ts', 'utf8');

// Match SONG_ID = { ... } blocks
const songBlocks = content.match(/export const SONG_(\w+) = {[\s\S]*?};/g) || [];

const names = [];
songBlocks.forEach(block => {
    const match = block.match(/export const SONG_(\w+) =/);
    if (match) names.push(match[1]);
});

console.log("Checking songsContent.ts for duplicate variable names...");
const nameCounts = {};
names.forEach(n => nameCounts[n] = (nameCounts[n] || 0) + 1);
for (const n in nameCounts) {
    if (nameCounts[n] > 1) console.log(`- DUPLICATE VAR: SONG_${n} (${nameCounts[n]} times)`);
}

// Check for duplicate titles within the content
const titleMatches = content.match(/title: '(.*?)'/g) || [];
const titles = titleMatches.map(m => m.match(/'(.*?)'/)[1]);
const titleCounts = {};
titles.forEach(t => titleCounts[t] = (titleCounts[t] || 0) + 1);

console.log("\nChecking for duplicate titles in songsContent.ts...");
for (const t in titleCounts) {
    if (titleCounts[t] > 1) console.log(`- DUPLICATE TITLE: "${t}" (${titleCounts[t]} times)`);
}
