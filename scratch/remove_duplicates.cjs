const fs = require('fs');
const filePath = 'src/data/songsContent.ts';
let content = fs.readFileSync(filePath, 'utf8');

const target = 'export const SONG_HARIHARAYENAMAH_STRUCTURED';

// We want to keep only the LAST one.
// And we want to fix the FIRST one's location by removing the duplicate and closing the previous song.

let firstIdx = content.indexOf(target);
let secondIdx = content.indexOf(target, firstIdx + 1);
let thirdIdx = content.indexOf(target, secondIdx + 1);

console.log("Indexes:", { firstIdx, secondIdx, thirdIdx });

if (firstIdx !== -1 && secondIdx !== -1) {
    // 1. Fix the first one's spot. 
    // It was merged with the previous song.
    // We should keep the closing brackets of the previous song but remove the 'export const ...' part.
    
    const beforeFirst = content.slice(0, firstIdx);
    // The 'beforeFirst' ends with the closing brackets from my previous repair.
    // Let's check:
    console.log("End of beforeFirst:", JSON.stringify(beforeFirst.slice(-50)));
    
    // 2. Remove the middle one (secondIdx)
    // 3. Keep the last one (thirdIdx or secondIdx if no third)
    
    // Actually, let's just do a global replace of the target with something else, 
    // then put it back at the end.
    
    // Better: split by target, join all but last, then append last.
    
    const parts = content.split(target);
    console.log("Parts count:", parts.length);
    
    // Part 0 ends at firstIdx.
    // Part 1 ends at secondIdx.
    // Part 2 ends at thirdIdx.
    // Part 3 is the end.
    
    // We want Part 0 (cleanly closed) + Part 1 + Part 2 (no intermediate targets) + target + Part 3.
    
    // Fix Part 0: it currently has the opening of the new constant because of my repair.
    // No, Part 0 is everything BEFORE the first target.
    // My repair was: content = fixedBefore + after; 
    // where fixedBefore included the closure.
    
    // Let's just rebuild the file.
    let newContent = parts[0]; // Up to first target
    for (let i = 1; i < parts.length - 1; i++) {
        newContent += parts[i]; // Merge intermediate parts (removes the targets)
    }
    newContent += "\n\n" + target + parts[parts.length - 1];
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("File cleaned of duplicates.");
}
