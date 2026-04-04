const fs = require('fs');
const path = require('path');

/**
 * Odia Song Guard: Safe Data Management Suite
 * This tool performs "surgical" updates to songsContent.ts, 
 * ensuring no structural corruption occurs during subadmin corrections.
 */

const SONGS_PATH = path.join(__dirname, 'src', 'data', 'songsContent.ts');
const RESOURCES_PATH = path.join(__dirname, 'src', 'data', 'resources.ts');

function log(msg, type = 'INFO') {
    const icon = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : 'ℹ️';
    console.log(`${icon} [${type}] ${msg}`);
}

// 1. Helper to safely extract a JS object using bracket counting
function extractBlock(content, startPos) {
    let bracketCount = 0;
    let started = false;
    for (let i = startPos; i < content.length; i++) {
        if (content[i] === '{') {
            bracketCount++;
            started = true;
        } else if (content[i] === '}') {
            bracketCount--;
        }
        if (started && bracketCount === 0) {
            // Include potential trailing semicolon
            let end = i + 1;
            if (content[end] === ';') end++;
            return {
                block: content.substring(startPos, end),
                start: startPos,
                end: end
            };
        }
    }
    return null;
}

// 2. Syntax Validation Hook
function validateSyntax(content) {
    try {
        // Simplified check: Remove TS types for a raw JS parse test
        const jsOnly = content
            .replace(/:\s*StructuredSong/g, '')
            .replace(/:\s*Resource\[\]/g, '')
            .replace(/:\s*string/g, '')
            .replace(/import\s+type\s+{[^}]+}\s+from\s+['"][^'"]+['"];?/g, '')
            .replace(/export\s+const\s+(\w+)\s*=/g, 'var $1 =')
            .replace(/export\s+interface\s+\w+\s*{[\s\S]*?}/g, '');
            
        new Function(jsOnly);
        return { valid: true };
    } catch (e) {
        return { valid: false, error: e.message };
    }
}

// 3. Core Update Function
function updateSong(varName, newData) {
    log(`Attempting to update ${varName}...`);
    
    if (!fs.existsSync(SONGS_PATH)) {
        log(`File not found: ${SONGS_PATH}`, 'ERROR');
        return false;
    }

    const content = fs.readFileSync(SONGS_PATH, 'utf8');
    const marker = `export const ${varName}: StructuredSong = `;
    const startIndex = content.indexOf(marker);

    if (startIndex === -1) {
        log(`Could not find variable ${varName} in songsContent.ts`, 'ERROR');
        return false;
    }

    const dataStart = startIndex + marker.length;
    const existingBlock = extractBlock(content, dataStart);

    if (!existingBlock) {
        log(`Failed to parse existing block for ${varName}. The file might already be corrupted.`, 'ERROR');
        return false;
    }

    // Prepare new content
    const newDataStr = JSON.stringify(newData, null, 4);
    const newFileContent = 
        content.slice(0, existingBlock.start) + 
        newDataStr + ";" +
        content.slice(existingBlock.end);

    // SAFETY CHECK: Validate resulting file before writing
    const validation = validateSyntax(newFileContent);
    if (!validation.valid) {
        log(`CAUTION: Update would cause a syntax error: ${validation.error}`, 'ERROR');
        log(`Update aborted. No changes made.`, 'INFO');
        return false;
    }

    // FINAL CHECK: Ensure we didn't accidentally delete other songs
    if (newFileContent.length < content.length * 0.8) {
        log(`CRITICAL: The updated file is significantly smaller than before. This suggests a massive deletion error. Update blocked.`, 'ERROR');
        return false;
    }

    fs.writeFileSync(SONGS_PATH, newFileContent, 'utf8');
    log(`Successfully updated ${varName}. File integrity verified.`, 'SUCCESS');
    return true;
}

// 4. CLI / API entry point
const args = process.argv.slice(2);
if (args.length > 0) {
    const cmd = args[0];
    if (cmd === 'verify') {
        const content = fs.readFileSync(SONGS_PATH, 'utf8');
        const v = validateSyntax(content);
        if (v.valid) log("File integrity: PERFECT", "SUCCESS");
        else log(`File integrity: BROKEN - ${v.error}`, "ERROR");
    }
}

module.exports = { updateSong };
