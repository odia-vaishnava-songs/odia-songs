const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'songsContent.ts');

try {
    const buf = fs.readFileSync(filePath);
    console.log("Original buffer length:", buf.length);
    
    // 1. Remove any potential control characters that make it look binary (except \n, \r, \t and non-ASCII Odia)
    // We allow 0-31 only for \n (10), \r (13), \t (9). 
    // We allow everything >= 128 (Odia chars).
    const cleanBuf = [];
    for (let i = 0; i < buf.length; i++) {
        const b = buf[i];
        if (b >= 32 || b === 10 || b === 13 || b === 9) {
            cleanBuf.push(b);
        }
    }
    const content = Buffer.from(cleanBuf).toString('utf8');
    console.log("Cleaned content length:", content.length);

    // 2. Fix the specific corruption at line 21922
    // Search for the corrupted boundary
    const corruptionRegex = /"meaning":\s*"ଏହି ଅଧମ ଏବଂ ନିସ୍ଵ ପ୍ରାଣୀ ପ୍ର(export const SONG_HARIHARAYENAMAH_STRUCTURED)/;
    let fixedContent = content.replace(corruptionRegex, (match, p1) => {
        return `"meaning": "ଏହି ଅଧମ ଏବଂ ନିସ୍ଵ ପ୍ରାଣୀ ପ୍ରାର୍ଥନା ॥" } ] } ] };\n\n${p1}`;
    });

    // 3. Remove all duplicate occurrences of SONG_HARIHARAYENAMAH_STRUCTURED
    // We want to keep only the BEST one. 
    // The first one was corrupted but now fixed. 
    // The others might be redundant.
    
    const target = 'export const SONG_HARIHARAYENAMAH_STRUCTURED';
    const parts = fixedContent.split(target);
    console.log("Matches found:", parts.length - 1);

    if (parts.length > 2) {
        // Keep the first one (it's in the middle, likely where it belongs if it was already there)
        // And remove the others.
        // Actually, if there were 41 songs between 1st and 2nd, I should merge them correctly.
        
        // Let's just remove the 2nd and 3rd occurrences of the constant definition, 
        // but keep the content in between (the 41 songs).
        
        // Wait, if I split by target, parts[1] is the content of the 1st song.
        // parts[2] is the content between 2nd and 3rd (which was 0 other songs in my previous check).
        // parts[3] is the content after 3rd.
        
        // Actually, the 41 songs are BEFORE the 2nd match.
        // Index 1st: 768k
        // Index 2nd: 1179k
        
        // So parts[1] contains the content of SONG_HARIHARAYENAMAH_STRUCTURED AND the 41 other songs.
        // Wait! That means the first constant was never closed, or the 41 songs were INSIDE it?
        // That's why TSC was complaining!
        
        // I will find the end of the SONG_HARIHARAYENAMAH_STRUCTURED object and move the rest out.
        
        // OR: I'll just keep the version I appended at the very end and remove the ones in the middle.
        // But I need to preserve the 41 songs.
    }

    // SIMPLER APPROACH:
    // The file should be a list of "export const SONG_... = { ... };"
    // I will split by "export const " and filter/clean each block.
    
    const songBlocks = fixedContent.split('export const ');
    const cleanedBlocks = [];
    const seenConstants = new Set();

    for (const block of songBlocks) {
        if (!block.trim()) continue;
        
        const match = block.match(/^([A-Z0-9_]+)/);
        if (match) {
            const constName = match[1];
            if (seenConstants.has(constName)) {
                console.log("Removing duplicate:", constName);
                continue;
            }
            
            // Fix the syntax: ensure it ends with };
            // (Only if it's a StructuredSong constant)
            let cleanedBlock = block.trim();
            if (!cleanedBlock.endsWith('};')) {
                // If it ends with something else, try to find the last };
                const lastClosure = cleanedBlock.lastIndexOf('};');
                if (lastClosure !== -1) {
                    cleanedBlock = cleanedBlock.slice(0, lastClosure + 2);
                }
            }
            
            cleanedBlocks.push('export const ' + cleanedBlock);
            seenConstants.add(constName);
        } else {
            // Probably the header/imports
            cleanedBlocks.push(block);
        }
    }

    const finalContent = cleanedBlocks.join('\n\n') + '\n';
    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log("File sanitized and saved.");

} catch (err) {
    console.error(err);
}
