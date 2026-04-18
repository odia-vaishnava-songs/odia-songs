const fs = require('fs');
const path = require('path');

const targetFile = 'src/data/resources.ts';
let content = fs.readFileSync(targetFile, 'utf8');

const variations = [
    /Bhaktivinoda Ṭhākura/g,
    /ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁରଙ୍କ ରଚନା/g,
    /ଶ୍ରୀଲ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ରଚନା/g,
    /ଶ୍ରୀଲ ଭକ୍ତିବିନୋଦ ଠାକୁର/g,
    /Bhaktivinoda Ṭhākura \(ଭକ୍ତି ବିନୋଦ ଠାକୁର\)/g
];

const unifiedName = 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର';

console.log('Unifying author names in resources.ts...');
variations.forEach(regex => {
    content = content.replace(regex, unifiedName);
});

fs.writeFileSync(targetFile, content);
console.log('Successfully updated resources.ts');
