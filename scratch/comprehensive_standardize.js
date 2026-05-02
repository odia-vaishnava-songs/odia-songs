
import fs from 'fs';

const resourcesPath = 'c:/Antigravity/odia-songs/src/data/resources.ts';
let content = fs.readFileSync(resourcesPath, 'utf8');

const mappings = {
    'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର': 'Bhaktivinoda Thakura',
    'ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର (Srila Locana Dasa Thakura)': 'Locana Dasa Thakura',
    'ଶ୍ରୀଲ ଭକ୍ତି ସିଦ୍ଧାନ୍ତ ସରସ୍ଵତୀ ଠାକୁର (Srila Bhakti Siddhanta Sarasvati Thakura)': 'Bhaktisiddhanta Saraswati',
    'ଶ୍ରୀଲ ବିଶ୍ଵନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର (Srila Visvanatha Cakravarti Thakura)': 'Visvanatha Cakravarti Thakura',
    'ଶ୍ରୀଲ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର': 'Visvanatha Cakravarti Thakura',
    'ଶ୍ରୀଲ ରୂପ ଗୋସ୍ଵାମୀ (Srila Rupa Gosvami)': 'Rupa Goswami',
    'ଏ.ସି. ଭକ୍ତିବେଦାନ୍ତ ସ୍ୱାମୀ (Srila Prabhupada)': 'A.C. Bhaktivedanta Swami',
    'Adi Shankaracharya': 'Adi Sankaracarya',
    'Vyasadeva': 'Vyasadeva',
    'Sukadeva Gosvami': 'Sukadeva Gosvami',
    'Krsna Dasa': 'Krsna Dasa',
    'Satyavrata Muni': 'Satyavrata Muni',
    'Sri Caitanya Mahaprabhu': 'Sri Caitanya Mahaprabhu',
    'ISKCON': 'ISKCON'
};

Object.entries(mappings).forEach(([oldName, newName]) => {
    const regex = new RegExp(`author:\\s*['"]${oldName}['"]`, 'g');
    content = content.replace(regex, `author: '${newName}'`);
});

// Also handle the case where "Others Authors" might be explicitly set but should be capitalized correctly
content = content.replace(/author:\s*['"]Other Authors['"]/g, "author: 'Others Authors'");

fs.writeFileSync(resourcesPath, content);
console.log('Comprehensive Resource Standardization complete.');
