
const fs = require('fs');
const path = 'src/data/resources.ts';
let content = fs.readFileSync(path, 'utf8');

// Define exactly what to remove
const linesToRemove = [
    '        content: (Songs as any).GITA_MAHATMYA_ODIA,',
    '        content: (Songs as any).BHULIYA_TOMARE_ODIA,'
];

const lines = content.split('\n');
const filteredLines = lines.filter(line => !linesToRemove.some(rem => line.includes(rem)));

fs.writeFileSync(path, filteredLines.join('\n'));
console.log('Fixed resources.ts build errors.');
