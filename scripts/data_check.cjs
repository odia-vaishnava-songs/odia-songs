const fs = require('fs');
const path = require('path');

const RESOURCES_PATH = path.join(__dirname, '../src/data/resources.ts');
const SONGS_CONTENT_PATH = path.join(__dirname, '../src/data/songsContent.ts');

function check() {
    console.log("🔍 Running Data Integrity Check...");
    
    if (!fs.existsSync(RESOURCES_PATH)) {
        console.error("❌ ERROR: resources.ts not found.");
        return process.exit(1);
    }
    
    if (!fs.existsSync(SONGS_CONTENT_PATH)) {
        console.error("❌ ERROR: songsContent.ts not found.");
        return process.exit(1);
    }
    
    const resources = fs.readFileSync(RESOURCES_PATH, 'utf-8');
    const songsContent = fs.readFileSync(SONGS_CONTENT_PATH, 'utf-8');
    
    // Pattern: structuredContent: (Songs as any).SONG_... or structuredContent: SONG_...
    const requestedRegex = /structuredContent:\s*(?:\(Songs as any\)\.|(?:Songs\.)?)(SONG_[A-Z0-9_]+_STRUCTURED|GITA_MAHATMYA_ODIA|JAYA_RADHA_MADHAVA|BHULIYA_TOMARE_ODIA)/g;
    const contentRegex = /content:\s*(?:\(Songs as any\)\.|(?:Songs\.)?)(SONG_[A-Z0-9_]+_STRUCTURED|GITA_MAHATMYA_ODIA|JAYA_RADHA_MADHAVA|BHULIYA_TOMARE_ODIA)/g;
    
    const requested = [
        ...Array.from(resources.matchAll(requestedRegex)).map(m => m[1]),
        ...Array.from(resources.matchAll(contentRegex)).map(m => m[1])
    ];
    
    const uniqueRequested = Array.from(new Set(requested));
    console.log(`Found ${uniqueRequested.length} required song exports.`);
    
    let missing = [];
    uniqueRequested.forEach(name => {
        if (!songsContent.includes(`export const ${name}`)) {
            missing.push(name);
        }
    });

    if (missing.length > 0) {
        console.error(`❌ CRITICAL FAILURE: Found ${missing.length} missing exports in songsContent.ts:`);
        missing.forEach(m => console.error(`   - ${m}`));
        process.exit(1);
    } else {
        console.log("✅ SUCCESS: All required exports are present.");
    }
}

check();
