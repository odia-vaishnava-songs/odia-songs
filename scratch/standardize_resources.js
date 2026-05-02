
import fs from 'fs';

const resourcesPath = 'c:/Antigravity/odia-songs/src/data/resources.ts';
let content = fs.readFileSync(resourcesPath, 'utf8');

const replacements = [
    [/author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'/g, "author: 'Bhaktivinoda Thakura'"],
    [/author: 'Adi Shankaracharya'/g, "author: 'Adi Sankaracarya'"],
    [/author: 'Narottama Dasa Thakura'/g, "author: 'Narottama Dasa Thakura'"],
    [/author: 'ଶ୍ରୀଲ ନରୋତ୍ତମ ଦାସ ଠାକୁର'/g, "author: 'Narottama Dasa Thakura'"],
    [/author: 'ବାସୁଦେବ ଘୋଷ \(Vasudeva Ghosa\)'/g, "author: 'Vasudeva Ghosha'"],
    [/author: 'ଶ୍ରୀଲ ରୂପ ଗୋସ୍ୱାମୀ \(Srila Rupa Gosvami\)'/g, "author: 'Rupa Goswami'"],
    [/author: 'ଶ୍ରୀଲ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର \(Srila Visvanatha Cakravarti Thakura\)'/g, "author: 'Visvanatha Cakravarti Thakura'"],
    [/author: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ'/g, "author: 'Sri Caitanya Mahaprabhu'"],
    [/author: 'ସତ୍ୟବ୍ରତ ମୁନି \(Satyavrata Muni\)'/g, "author: 'Satyavrata Muni'"],
    [/author: 'ଶ୍ରୀ ଶୁକଦେବ ଗୋସ୍ୱାମୀ \(Śrī Śukadeva Gosvāmī\)'/g, "author: 'Sukadeva Gosvami'"],
    [/author: 'ବ୍ୟାସଦେବ \(Vyasadeva\)'/g, "author: 'Vyasadeva'"],
    [/author: 'Vyasadeva'/g, "author: 'Vyasadeva'"],
    [/author: 'କୃଷ୍ଣ ଦାସ \(Krsna Dasa\)'/g, "author: 'Krsna Dasa'"],
];

// Apply string replacements
replacements.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
});

// Fix Gita chapters - find blocks with id: 'gita-chapter-...' and add author: 'Vyasadeva' if missing
const blocks = content.split('},');
const updatedBlocks = blocks.map(block => {
    if (block.includes("id: 'gita-chapter-") && !block.includes("author:")) {
        // Find the position to insert author, e.g., after category: 'Gita',
        if (block.includes("category: 'Gita',")) {
            return block.replace("category: 'Gita',", "category: 'Gita',\n        author: 'Vyasadeva',");
        }
    }
    return block;
});

content = updatedBlocks.join('},');

fs.writeFileSync(resourcesPath, content);
console.log('Standardization complete.');
