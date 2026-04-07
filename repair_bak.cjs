const fs = require('fs');
const content = fs.readFileSync('src/data/songsContent.ts.bak', 'utf8');

// The corruption looks like this:
// { "word": "ଆଶā-ବଶେ ଘexport const SONG_JAYAJAYARADHAKRSNA_STRUCTURED...
// We want to split it.

const corrupted = 'ଆଶā-ବଶେ ଘexport const SONG_JAYAJAYARADHAKRSNA_STRUCTURED';
const fixed = 'ଆଶା-ବଶେ ଘ", "meaning": "ଆଶାର ବଶବର୍ତ୍ତୀ ହୋଇ" },\n    ';

let newContent = content.replace(corrupted, fixed + 'export const SONG_JAYAJAYARADHAKRSNA_STRUCTURED');

// Also ensure Jiv Jago is correct
if (!newContent.includes('SONG_JIVJAGOJIVJAGO_STRUCTURED')) {
    // If it's not there, maybe we can add our known good version at the end.
}

fs.writeFileSync('src/data/songsContent.ts', newContent, 'utf8');
console.log('✅ Repaired file written to songsContent.ts');
