const fs = require('fs');
const content = fs.readFileSync('src/data/resources.ts', 'utf8');

// Simple regex to find IDs
const idMatches = content.match(/id: '(.*?)'/g) || [];
const ids = idMatches.map(m => m.match(/'(.*?)'/)[1]);

const counts = {};
ids.forEach(id => {
    counts[id] = (counts[id] || 0) + 1;
});

console.log("Duplicate IDs:");
for (const id in counts) {
    if (counts[id] > 1) {
        console.log(`- ${id}: ${counts[id]} times`);
    }
}

// Check for similar titles
const titleMatches = content.match(/title: '(.*?)'/g) || [];
const titles = titleMatches.map(m => m.match(/'(.*?)'/)[1]);

const titleMap = {};
titles.forEach(t => {
    // Replace accented characters
    const normalized = t.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, '');
    if (!titleMap[normalized]) titleMap[normalized] = [];
    titleMap[normalized].push(t);
});

console.log("\nPotential Duplicate Titles (Aggressive Normalization):");
for (const norm in titleMap) {
    if (titleMap[norm].length > 1) {
        console.log(`- ${norm}:`);
        titleMap[norm].forEach(t => console.log(`  - ${t}`));
    }
}
