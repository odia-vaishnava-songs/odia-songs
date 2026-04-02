const { SONG_BHAJABHAKATAVATSALA_STRUCTURED } = require('./src/data/songsContent');

console.log(`Total Verses: ${SONG_BHAJABHAKATAVATSALA_STRUCTURED.verses.length}`);

SONG_BHAJABHAKATAVATSALA_STRUCTURED.verses.forEach(v => {
    console.log(`Verse ${v.id}: ${v.wordMeanings ? v.wordMeanings.length : 0} word meanings`);
});
