const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'src', 'data', 'songsContent.ts');

try {
    const data = fs.readFileSync(filepath, 'utf8');
    const lines = data.split('\n');
    
    console.log('--- Cleaning up the broken structure around line 2357 ---');
    
    // Line 2357 absolute is index 2356
    // We'll surgically replace the broken section (2353..2357)
    // Old:
    // 2353:            ]
    // 2354:            "wordMeanings": [
    // 2355:                { "word": "ଶକ୍ତି/ବଳ", "meaning": "ଶକ୍ତି/ବଳ" },
    // 2356:                { "word": "ହରିନାମ", "meaning": "ହରି ନାମ" },
    // 2357:                { word: "ହରିନାମ", meaning: "ହରି ନାମ" },
    
    // New:
    lines[2353] = '            ],'; // Added comma
    lines[2354] = '            "wordMeanings": [';
    lines[2355] = '                { "word": "ଶକ୍ତି/ବଳ", "meaning": "ଶକ୍ତି/ବଳ" },';
    lines[2356] = '                { "word": "ହରିନାମ", "meaning": "ହରି ନାମ" },';
    // Remove the duplicate index 2357
    lines.splice(2357, 1);
    
    fs.writeFileSync(filepath, lines.join('\n'), 'utf8');
    console.log('✅ Successfully repaired the structure at line 2357.');
} catch (err) {
    console.error('Error during structural fix:', err);
}
