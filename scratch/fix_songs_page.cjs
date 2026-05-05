const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/SongsPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const target = `        const availableSongs = songResources.filter(s => 
            (s.author || '').toLowerCase() === selectedAuthor.toLowerCase() ||
            (s.author === 'Srila Prabhupada' && selectedAuthor === 'A.C. Bhaktivedanta Swami') ||
            (s.author === 'A.C. Bhaktivedanta Swami' && selectedAuthor === 'Srila Prabhupada') ||
            (s.author === 'Krsnadasa Kaviraja Goswami' && selectedAuthor === 'Krsna Dasa') ||
            (s.author === 'Krsna Dasa' && selectedAuthor === 'Krsnadasa Kaviraja Goswami')
        );`;

const replacement = `        const availableSongs = songResources.filter(s => {
            const standardized = standardizeAuthorName(s.author || '');
            if (standardized.toLowerCase() === selectedAuthor.toLowerCase()) return true;
            return AUTHOR_CATALOG.find(a => a.name === selectedAuthor)?.catalog.some(cs => 
                isTitleMatch(cs.title_english, s.title_english || s.title, cs.title_odia, s.title_odia)
            ) || false;
        });`;

// Try to find it regardless of line endings
const lines = content.split(/\r?\n/);
let startLine = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const availableSongs = songResources.filter(s =>')) {
        startLine = i;
        break;
    }
}

if (startLine !== -1) {
    console.log(`Found start line at ${startLine + 1}`);
    // Replace lines from startLine to startLine + 6
    lines.splice(startLine, 7, replacement);
    content = lines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Success!');
} else {
    console.log('Target not found!');
}
