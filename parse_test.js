const fs = require('fs');

const text = fs.readFileSync('c:/Antigravity/odia-songs/odia-songs/APP-Srila Bhaktivinoda Thakura.txt', 'utf8');
const lines = text.split('\n').map(l => l.trimEnd());

let songs = [];
let currentSong = null;

let state = 'SCANNING'; // SCANNING, LYRICS, TRANSLATIONS
let lyricBlocks = {};
let translationBlocks = {};
let wordMeanings = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.includes('— ଶ୍ରୀ') && line.includes('ଭକ୍ତି')) {
        // usually preceded by Odia title, English title
        let englishTitle = lines[i - 3] || '';
        let odiaTitle = lines[i - 1] || '';
        if (englishTitle.trim() === '') englishTitle = lines[i - 2] || 'Unknown';

        if (currentSong) {
            currentSong.lyricBlocks = lyricBlocks;
            currentSong.translationBlocks = translationBlocks;
            songs.push(currentSong);
        }

        currentSong = {
            titleEndLine: i,
            englishTitle: englishTitle.trim(),
            odiaTitle: odiaTitle.trim()
        };
        lyricBlocks = {};
        translationBlocks = {};
        state = 'LYRICS';
    }
}
if (currentSong) {
    songs.push(currentSong);
}

console.log(`Found ${songs.length} songs`);
console.log(songs.slice(0, 5));
