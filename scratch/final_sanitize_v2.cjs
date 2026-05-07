const fs = require('fs');
const filePath = 'src/data/songsContent.ts';
let content = fs.readFileSync(filePath, 'utf8');

const blocks = content.split('export const ');
const cleanBlocks = [blocks[0].trim()]; // Keep header

const seen = new Set();
for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;
    
    const nameMatch = block.match(/^([A-Z0-9_]+)/);
    if (!nameMatch) continue;
    
    const name = nameMatch[1];
    if (seen.has(name)) continue;
    
    // Find the FIRST top-level closure
    // Since these are objects, they end with };
    const firstClosure = block.indexOf('};');
    if (firstClosure !== -1) {
        const validBlock = block.slice(0, firstClosure + 2);
        cleanBlocks.push('export const ' + validBlock);
        seen.add(name);
    }
}

fs.writeFileSync(filePath, cleanBlocks.join('\n\n') + '\n', 'utf8');
console.log("File sanitized by keeping only the FIRST valid closure of each block.");
