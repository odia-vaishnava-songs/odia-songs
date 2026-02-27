const fs = require('fs');
const path = require('path');

const songsPath = path.join('src', 'data', 'songsContent.ts');

if (!fs.existsSync(songsPath)) {
    console.error('File not found:', songsPath);
    process.exit(1);
}

const content = fs.readFileSync(songsPath, 'utf8');

function getOdiaWords(text) {
    // Odia range: \u0b00-\u0b7f
    // Bengali range: \u0980-\u09ff
    const regex = /[\u0b00-\u0b7f\u0980-\u09ff]+/g;
    return text.match(regex) || [];
}

const songPattern = /export const (SONG_\w+_STRUCTURED): StructuredSong = (\{[\s\S]*?\});/g;
let match;

console.log('Auditing Song Content...');

while ((match = songPattern.exec(content)) !== null) {
    const songName = match[1];
    const songRaw = match[2];

    const versesMatch = songRaw.match(/verses:\s*\[([\s\S]*?)\]\s*[,|\n]*\s*\}/);
    if (!versesMatch) continue;

    const versesContent = versesMatch[1];
    const verseBlocks = versesContent.split(/\}\s*,\s*\{/);

    verseBlocks.forEach((block, i) => {
        const verseId = i + 1;
        const lyricMatch = block.match(/lyric:\s*["'`]([\s\S]*?)["'`]/);
        if (!lyricMatch) return;

        const lyricText = lyricMatch[1];
        const lyricClean = lyricText.replace(/[।॥,!?;:()"'`\n]/g, ' ');
        const lyricWords = getOdiaWords(lyricClean);

        const wmPattern = /\{\s*(?:word|["']word["']):\s*["'`]([\s\S]*?)["'`]\s*,\s*(?:meaning|["']meaning["']):\s*["'`]([\s\S]*?)["'`]\s*\}/g;
        let wmMatch;
        const meaningWords = [];
        while ((wmMatch = wmPattern.exec(block)) !== null) {
            meaningWords.push(...getOdiaWords(wmMatch[1]));
        }

        const missing = lyricWords.filter(w => !meaningWords.includes(w));
        const unused = meaningWords.filter(w => !lyricWords.includes(w));

        const isBengali = (w) => /[\u0980-\u09ff]/.test(w);
        const bengaliInLyric = lyricWords.filter(isBengali);
        const bengaliInMeanings = meaningWords.filter(isBengali);

        if (missing.length > 0 || bengaliInLyric.length > 0 || bengaliInMeanings.length > 0) {
            console.log(`\n[${songName}] Verse ${verseId}:`);
            if (missing.length > 0) {
                console.log(`  Missing Coverage: ${JSON.stringify([...new Set(missing)])}`);
            }
            if (bengaliInLyric.length > 0) {
                console.log(`  BENGALI IN LYRIC: ${JSON.stringify([...new Set(bengaliInLyric)])}`);
            }
            if (bengaliInMeanings.length > 0) {
                console.log(`  BENGALI IN MEANINGS: ${JSON.stringify([...new Set(bengaliInMeanings)])}`);
            }
        }
    });
}
