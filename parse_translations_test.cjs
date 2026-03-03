const fs = require('fs');

const text = fs.readFileSync('c:/Antigravity/odia-songs/odia-songs/APP-Srila Bhaktivinoda Thakura.txt', 'utf8');
const lines = text.split('\n').map(l => l.trimEnd());

let songs = [];
let currentSongLines = [];
let englishTitle = '';
let odiaTitle = '';

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.includes('— ଶ୍ରୀ') && line.includes('ଭକ୍ତି')) {
        if (currentSongLines.length > 0) {
            songs.push({ englishTitle, odiaTitle, content: currentSongLines.join('\n') });
        }
        // Start new song
        englishTitle = lines[i - 3] || '';
        odiaTitle = lines[i - 1] || '';
        if (englishTitle.trim() === '') englishTitle = lines[i - 2] || 'Unknown';
        currentSongLines = [];
    } else {
        currentSongLines.push(lines[i]); // Keep full text block formatting
    }
}
if (currentSongLines.length > 0) {
    songs.push({ englishTitle, odiaTitle, content: currentSongLines.join('\n') });
}

// Just analyze the first song thoroughly
const s = songs[1]; // Bhuliya Tomare
console.log(`Analyzing: ${s.englishTitle}`);

console.log("=== RAW CONTENT ===");
console.log(s.content.substring(0, 1500));

let verses = [];
let linesArr = s.content.split('\n');

let currentVerseId = null;
let currentVerseContent = [];
let isParsingTranslation = false;
let currentTranslationLines = [];

for (let i = 0; i < linesArr.length; i++) {
    let l = linesArr[i];

    // Look for (୧) or 1.
    let odiaNumMatch = l.match(/^\s*\(?([୦-୯]+)\)?\s*$/);
    let engNumMatch = l.match(/^\s*([0-9]+)\.\s*$/);

    if (odiaNumMatch) {
        if (currentVerseId !== null && !isParsingTranslation) {
            verses.push({
                id: parseInt(currentVerseId.toString().replace(/[୦-୯]/g, m => '0123456789'['୦୧୨୩୪୫୬୭୮୯'.indexOf(m)])),
                lyric: currentVerseContent.join('\n').trim(),
                translation: ''
            });
        }
        currentVerseId = odiaNumMatch[1];
        currentVerseContent = [];
        isParsingTranslation = false;
    } else if (engNumMatch) {
        let idStr = engNumMatch[1];
        let verseId = parseInt(idStr);
        // Find the corresponding verse and add translation to it
        let targetVerse = verses.find(v => v.id === verseId);
        isParsingTranslation = true;
        currentTranslationLines = [];

        // we'll peek ahead to group translation lines until we hit another number or the word meanings block
        let j = i + 1;
        while (j < linesArr.length) {
            if (linesArr[j].match(/^\s*([0-9]+)\.\s*$/) || linesArr[j].includes(' — ') || linesArr[j].includes(' - ')) {
                break;
            }
            currentTranslationLines.push(linesArr[j]);
            j++;
        }
        if (targetVerse) {
            targetVerse.translation = currentTranslationLines.join('\n').trim();
        }
        i = j - 1; // skip ahead
    } else {
        if (!isParsingTranslation && currentVerseId !== null) {
            currentVerseContent.push(l);
        }
    }
}
if (currentVerseId !== null && !isParsingTranslation) {
    verses.push({
        id: parseInt(currentVerseId.toString().replace(/[୦-୯]/g, m => '0123456789'['୦୧୨୩୪୫୬୭୮୯'.indexOf(m)])),
        lyric: currentVerseContent.join('\n').trim(),
        translation: ''
    });
}

console.log("\n=== PARSED VERSES ===");
console.log(JSON.stringify(verses, null, 2));

// Word Meanings usually appear at the very bottom
console.log("\n=== WORD MEANINGS ===");
let wordsLines = linesArr.slice(-15);
console.log(wordsLines.join('\n'));

