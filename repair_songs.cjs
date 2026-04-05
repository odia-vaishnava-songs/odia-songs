const fs = require('fs');
const path = require('path');

const RESOURCES_PATH = path.join(__dirname, 'src/data/resources.ts');
const OUTPUT_PATH = path.join(__dirname, 'src/data/songsContent.ts');

function repair() {
    const content = fs.readFileSync(RESOURCES_PATH, 'utf-8');
    const importRegex = /SONG_[A-Z0-9]+_STRUCTURED|JAYA_RADHA_MADHAVA|GITA_MAHATMYA_ODIA|BHULIYA_TOMARE_ODIA/g;
    const exportsNeeded = Array.from(new Set(content.match(importRegex)));
    
    console.log(`Fixing songsContent.ts - Need ${exportsNeeded.length} exports.`);
    
    let existing = '';
    if (fs.existsSync(OUTPUT_PATH)) {
        existing = fs.readFileSync(OUTPUT_PATH, 'utf-8');
    }
    
    const lines = [
        "import type { StructuredSong } from '../types';",
        "// AUTO-REPAIRED STUB FILE",
        ""
    ];
    
    exportsNeeded.forEach(name => {
        if (existing.includes(`export const ${name}:`)) {
            // Keep existing if it's there (assuming it might have data)
            // But wait, if it's corrupted, we might want to start fresh or search carefully.
            // For now, let's just ensure it's there.
            return;
        }
        
        if (name.endsWith('_STRUCTURED')) {
            lines.push(`export const ${name}: StructuredSong = { verses: [] };`);
        } else {
            lines.push(`export const ${name}: string = "";`);
        }
    });
    
    fs.appendFileSync(OUTPUT_PATH, "\n" + lines.join('\n') + "\n");
    console.log("✅ Repair complete. Missing exports stubbed.");
}

repair();
