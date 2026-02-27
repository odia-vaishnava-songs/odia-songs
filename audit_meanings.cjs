const fs = require('fs');
const path = require('path');

function getOdiaWords(text) {
    // Odia range: \u0b00-\u0b7f
    // Bengali range: \u0980-\u09ff
    const regex = /[\u0b00-\u0b7f\u0980-\u09ff]+/g;
    return text.match(regex) || [];
}

function auditSongsFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    // Regex for structured song objects
    const songPattern = /export const (SONG_\w+_STRUCTURED): StructuredSong = (\{[\s\S]*?\});/g;

    let match;
    while ((match = songPattern.exec(content)) !== null) {
        const songName = match[1];
        const songBody = match[2];

        console.log(`\nAuditing Song: ${songName}`);

        // Find everything between verses: [ and ]
        const startIdx = songBody.indexOf('verses:');
        if (startIdx === -1) continue;

        const openBracketIdx = songBody.indexOf('[', startIdx);
        if (openBracketIdx === -1) continue;

        // Find matching closing bracket for verses array
        let bracketCount = 1;
        let endIdx = -1;
        for (let i = openBracketIdx + 1; i < songBody.length; i++) {
            if (songBody[i] === '[') bracketCount++;
            if (songBody[i] === ']') bracketCount--;
            if (bracketCount === 0) {
                endIdx = i;
                break;
            }
        }

        if (endIdx === -1) continue;

        const versesContent = songBody.substring(openBracketIdx + 1, endIdx);

        // Split into verses by looking for { id: or { lyric: (rough heuristic)
        // Better: look for { ... } objects that are direct children of the array
        const verseBlocks = [];
        let objBracketCount = 0;
        let currentVerseStart = -1;

        for (let i = 0; i < versesContent.length; i++) {
            if (versesContent[i] === '{') {
                if (objBracketCount === 0) currentVerseStart = i;
                objBracketCount++;
            } else if (versesContent[i] === '}') {
                objBracketCount--;
                if (objBracketCount === 0 && currentVerseStart !== -1) {
                    verseBlocks.push(versesContent.substring(currentVerseStart, i + 1));
                    currentVerseStart = -1;
                }
            }
        }

        verseBlocks.forEach((block, index) => {
            const verseId = index + 1;

            // Extract lyric - use a more flexible regex
            const lyricMatch = /lyric:\s*["'`]([\s\S]*?)["'`]/.exec(block) || /"lyric":\s*["'`]([\s\S]*?)["'`]/.exec(block);
            if (!lyricMatch) return;

            const lyricText = lyricMatch[1];
            const cleanLyric = lyricText.replace(/[।॥,!?;:()"'`\n]/g, ' ');
            const lyricWords = [...new Set(getOdiaWords(cleanLyric))];

            // Extract word meanings - just look for word: "..." anywhere in the block
            const wordRegex = /(?:word|["']word["']):\s*["'`](.*?)["'`](?:\s|,|\})/g;
            let wMatch;
            const meaningWordsSet = new Set();
            while ((wMatch = wordRegex.exec(block)) !== null) {
                const words = getOdiaWords(wMatch[1]);
                words.forEach(w => meaningWordsSet.add(w));
            }
            const uniqueMeaningWords = Array.from(meaningWordsSet);

            const missing = lyricWords.filter(w => !uniqueMeaningWords.includes(w));
            const unused = uniqueMeaningWords.filter(w => !lyricWords.includes(w));

            const hasBengali = (text) => /[\u0980-\u09ff]/.test(text);
            const bengaliInLyric = lyricWords.filter(hasBengali);
            const bengaliInMeanings = uniqueMeaningWords.filter(hasBengali);

            if (missing.length > 0 || unused.length > 0 || bengaliInLyric.length > 0 || bengaliInMeanings.length > 0) {
                console.log(`  Verse ${verseId}:`);
                if (missing.length > 0) console.log(`    Missing coverage: ${JSON.stringify(missing)}`);
                if (unused.length > 0) console.log(`    Extra meanings: ${JSON.stringify(unused)}`);
                if (bengaliInLyric.length > 0) console.log(`    BENGALI IN LYRIC: ${JSON.stringify(bengaliInLyric)}`);
                if (bengaliInMeanings.length > 0) console.log(`    BENGALI IN MEANINGS: ${JSON.stringify(bengaliInMeanings)}`);
            }
        });
    }
}

const songsPath = path.join('src', 'data', 'songsContent.ts');
auditSongsFile(songsPath);
