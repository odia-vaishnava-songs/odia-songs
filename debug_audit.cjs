const fs = require('fs');
const path = require('path');

function getOdiaWords(text) {
    const regex = /[\u0b00-\u0b7f\u0980-\u09ff]+/g;
    return text.match(regex) || [];
}

function auditSongsFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const songPattern = /export const (SONG_\w+_STRUCTURED): StructuredSong = (\{[\s\S]*?\});/g;

    let match;
    while ((match = songPattern.exec(content)) !== null) {
        const songName = match[1];
        const songBody = match[2];
        if (!songName.includes('GOPINATHA')) continue; // Focus on Gopinatha

        console.log(`\nAuditing Song: ${songName}`);

        const startIdx = songBody.indexOf('verses:');
        const openBracketIdx = songBody.indexOf('[', startIdx);
        let bracketCount = 1;
        let endIdx = -1;
        for (let i = openBracketIdx + 1; i < songBody.length; i++) {
            if (songBody[i] === '[') bracketCount++;
            if (songBody[i] === ']') bracketCount--;
            if (bracketCount === 0) { endIdx = i; break; }
        }

        const versesContent = songBody.substring(openBracketIdx + 1, endIdx);
        const verseBlocks = [];
        let objBracketCount = 0;
        let start = -1;
        for (let i = 0; i < versesContent.length; i++) {
            if (versesContent[i] === '{') { if (objBracketCount === 0) start = i; objBracketCount++; }
            else if (versesContent[i] === '}') { objBracketCount--; if (objBracketCount === 0) verseBlocks.push(versesContent.substring(start, i + 1)); }
        }

        verseBlocks.forEach((block, index) => {
            const verseId = index + 1;
            const lyricMatch = /lyric:\s*["'`]([\s\S]*?)["'`]/.exec(block);
            if (!lyricMatch) return;
            const lyricText = lyricMatch[1];
            const lyricWords = [...new Set(getOdiaWords(lyricText.replace(/[।॥,!?;:()"'`\n]/g, ' ')))];

            const meaningWordsSet = new Set();
            // Just look for all word: "..." occurrences
            const wordRegex = /word:\s*["'`](.*?)["'"]/g;
            let wMatch;
            while ((wMatch = wordRegex.exec(block)) !== null) {
                getOdiaWords(wMatch[1]).forEach(w => meaningWordsSet.add(w));
            }
            const uniqueMeaningWords = Array.from(meaningWordsSet);

            console.log(`  Verse ${verseId}: LyricWords=${lyricWords.length}, MeaningWords=${uniqueMeaningWords.length}`);
            if (uniqueMeaningWords.length === 0) {
                console.log(`    DEBUG: Block contents (first 50 chars): ${block.substring(0, 50)}...`);
            }

            const missing = lyricWords.filter(w => !uniqueMeaningWords.includes(w));
            if (missing.length > 0) {
                console.log(`    Missing: ${JSON.stringify(missing)}`);
            }
        });
    }
}

auditSongsFile(path.join('src', 'data', 'songsContent.ts'));
