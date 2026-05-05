const fs = require('fs');

// Mocking required parts
const AUTHOR_CATALOG = [
    {
        name: 'Vrndavana Dasa Thakura',
        catalog: [
            { title_english: 'Abanika Majhe Dekha Dona Bhai', title_odia: 'ଅବନିକା ମାଝେ ଦେଖ ଦୋନା ଭାଇ' },
            { title_english: 'Antare Nitai Bahire Nitai', title_odia: 'ଅନ୍ତରେ ନିତାଇ ବାହିରେ ନିତାଇ' },
            { title_english: 'Hera Dekhiya Nayana Bhariya', title_odia: 'ହେରା ଦେଖିୟା ନୟନ ଭରିୟା' },
            { title_english: 'Janu Lambita Bahu Jugala', title_odia: 'ଜାନୁ ଲମ୍ବିତ ବାହୁ ଯୁଗଳ' },
            { title_english: 'Madana Mohana Tanum', title_odia: 'ମଦନ ମୋହନ ତନୁ' },
            { title_english: 'Nace Nace Nitai Gaur Guna Maniya', title_odia: 'ନାଚେ ନାଚେ ନିତାଇ ଗୌର ଗୁଣ ମଣିୟା' },
            { title_english: 'Nana Dravya Ayojana', title_odia: 'ନାନା ଦ୍ରବ୍ୟ ଆୟୋଜନ' },
            { title_english: 'Sri Hari Vasare Hari Kirtana Vidhana', title_odia: 'ଶ୍ରୀ ହରି ବାସରେ ହରି କୀର୍ତ୍ତନ ବିଧାନ' },
        ]
    }
];

function normalizeForSearch(str, aggressive = false) {
    if (!str) return '';
    let res = str.toLowerCase();
    if (aggressive) res = res.replace(/[aeiouy]/g, '');
    return res.replace(/[^a-z0-9]/g, '');
}

function isTitleMatch(title1, title2, odia1, odia2) {
    if (!title1 || !title2) return false;
    const t1 = title1.toLowerCase().trim();
    const t2 = title2.toLowerCase().trim();
    if (t1 === t2) return true;
    const a1 = normalizeForSearch(title1, true);
    const a2 = normalizeForSearch(title2, true);
    if (a1 === a2 && a1.length > 3) return true;
    return false;
}

// Read resources.ts (roughly)
const content = fs.readFileSync('src/data/resources.ts', 'utf8');
const titleMatches = content.match(/title_english: '(.*?)'/g) || [];
const titles = titleMatches.map(m => m.match(/'(.*?)'/)[1]);

const matches = titles.filter(t => 
    AUTHOR_CATALOG[0].catalog.some(cs => isTitleMatch(cs.title_english, t))
);

console.log(`Found ${matches.length} matches in resources.ts:`);
matches.forEach(m => console.log(`- ${m}`));
