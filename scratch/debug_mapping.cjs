const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

// Helper from utils/matching.ts (simplified for Node)
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
    const cleanPart = (s) => s.replace(/part\s*\d+/gi, '').trim();
    const ct1 = cleanPart(t1);
    const ct2 = cleanPart(t2);
    if (ct1 === ct2 && ct1.length > 3) return true;
    if (t1.length > 10 && t2.length > 10) {
        if (t1.includes(t2) || t2.includes(t1)) return true;
    }
    const a1 = normalizeForSearch(title1, true);
    const a2 = normalizeForSearch(title2, true);
    if (a1 === a2 && a1.length > 3) return true;
    // (Skipping Levenshtein for now)
    if (odia1 && odia2) {
        const ok1 = odia1.replace(/[\s\W]/g, '');
        const ok2 = odia2.replace(/[\s\W]/g, '');
        if (ok1 && ok2 && (ok1 === ok2 || ok1.includes(ok2) || ok2.includes(ok1))) return true;
    }
    return false;
}

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

async function debugMapping() {
    const { data: songs, error } = await supabase.from('songs').select('*');
    if (error) return;

    const matches = [];
    songs.forEach(s => {
        const songTitle = s.title_english || s.title || '';
        const songOdia = s.title_odia || '';
        const cat = AUTHOR_CATALOG[0];
        if (cat.catalog.some(catSong => isTitleMatch(catSong.title_english, songTitle, catSong.title_odia, songOdia))) {
            matches.push(s);
        }
    });

    console.log(`Found ${matches.length} matches for Vrndavana Dasa Thakura:`);
    matches.forEach(m => console.log(`- ID: ${m.id}, Title: ${m.title_english || m.title}, Author: ${m.author}`));
}

debugMapping();
