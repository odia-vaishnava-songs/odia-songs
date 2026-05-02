
import fs from 'fs';

const resourcesPath = 'c:/Antigravity/odia-songs/src/data/resources.ts';
let content = fs.readFileSync(resourcesPath, 'utf8');

const regexReplacements = [
    [/author:\s*['"].*?\(Srila Locana Dasa Thakura\)['"]/g, "author: 'Locana Dasa Thakura'"],
    [/author:\s*['"].*?\(Srila Bhakti Siddhanta Sarasvati Thakura\)['"]/g, "author: 'Bhaktisiddhanta Saraswati'"],
    [/author:\s*['"].*?\(Srila Visvanatha Cakravarti Thakura\)['"]/g, "author: 'Visvanatha Cakravarti Thakura'"],
    [/author:\s*['"].*?\(Srila Rupa Gosvami\)['"]/g, "author: 'Rupa Goswami'"],
    [/author:\s*['"].*?\(Srila Prabhupada\)['"]/g, "author: 'A.C. Bhaktivedanta Swami'"],
    [/author:\s*['"]ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର['"]/g, "author: 'Bhaktivinoda Thakura'"],
    [/author:\s*['"]ଶ୍ରୀଲ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର['"]/g, "author: 'Visvanatha Cakravarti Thakura'"]
];

regexReplacements.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
});

fs.writeFileSync(resourcesPath, content);
console.log('Robust Resource Standardization complete.');
