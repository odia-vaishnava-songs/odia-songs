const fs = require('fs');
const filePath = 'src/data/songsContent.ts';
const buf = fs.readFileSync(filePath);

// 1. Force decode as UTF-8, ignoring errors (replacement chars will be inserted)
const decoder = new TextDecoder('utf-8', { fatal: false });
let text = decoder.decode(buf);

// 2. Remove the replacement characters (U+FFFD) which cause "binary" detection in TSC
text = text.replace(/\ufffd/g, '');

// 3. Fix the known syntax error at the middle boundary
// (The one I saw earlier with "ପ୍ରexport const")
text = text.replace(/"meaning":\s*"ଏହି ଅଧମ ଏବଂ ନିସ୍ଵ ପ୍ରାଣୀ ପ୍ର(export const SONG_HARIHARAYENAMAH_STRUCTURED)/g, (match, p1) => {
    return `"meaning": "ଏହି ଅଧମ ଏବଂ ନିସ୍ଵ ପ୍ରାଣୀ ପ୍ରାର୍ଥନା କରୁଛି ॥" } ] } ] };\n\n${p1}`;
});

// 4. Save back as clean UTF-8
fs.writeFileSync(filePath, text, 'utf8');
console.log("File cleaned of invalid UTF-8 and specific corruption.");
