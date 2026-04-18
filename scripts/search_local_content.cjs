const fs = require('fs');

const filePath = 'c:/Antigravity/odia-songs/src/data/songsContent.ts';
const content = fs.readFileSync(filePath, 'utf8');

if (content.includes('ଅପି ଚେଦସି')) {
    console.log('FOUND IT in Odia!');
    const index = content.indexOf('ଅପି ଚେଦସି');
    console.log('Snippet:', content.substring(index - 500, index + 500));
} else if (content.includes('api ced asi')) {
    console.log('FOUND IT in English!');
} else {
    console.log('Not found in', filePath);
}

// Search for ୧୦୦
if (content.includes('୧୦୦')) {
    console.log('FOUND ୧୦୦!');
    const index = content.indexOf('୧୦୦');
    console.log('Snippet:', content.substring(index - 500, index + 500));
}
