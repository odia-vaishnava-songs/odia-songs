const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

const AUTHOR_CATALOG = [
    { name: 'Vrndavana Dasa Thakura', catalog: [
        { title_english: 'Abanika Majhe Dekha Dona Bhai' },
        { title_english: 'Antare Nitai Bahire Nitai' },
        { title_english: 'Hera Dekhiya Nayana Bhariya' },
        { title_english: 'Janu Lambita Bahu Jugala' },
        { title_english: 'Madana Mohana Tanum' },
        { title_english: 'Nace Nace Nitai Gaur Guna Maniya' },
        { title_english: 'Nana Dravya Ayojana' },
        { title_english: 'Sri Hari Vasare Hari Kirtana Vidhana' },
    ]}
];

function normalizeForSearch(str, aggressive = false) {
    if (!str) return '';
    let res = str.toLowerCase();
    if (aggressive) res = res.replace(/[aeiouy]/g, '');
    return res.replace(/[^a-z0-9]/g, '');
}

function isTitleMatch(title1, title2) {
    if (!title1 || !title2) return false;
    const t1 = title1.toLowerCase().trim();
    const t2 = title2.toLowerCase().trim();
    if (t1 === t2) return true;
    const a1 = normalizeForSearch(title1, true);
    const a2 = normalizeForSearch(title2, true);
    if (a1 === a2 && a1.length > 3) return true;
    return false;
}

async function debugMappingAll() {
    const { data: songs, error } = await supabase.from('songs').select('*');
    if (error) return;

    const matches = songs.filter(s => {
        const songTitle = s.title_english || s.title || '';
        return AUTHOR_CATALOG[0].catalog.some(cs => isTitleMatch(cs.title_english, songTitle));
    });

    console.log(`Matches: ${matches.length}`);
    matches.forEach(m => console.log(`- ${m.title_english || m.title} (${m.author})`));
}

debugMappingAll();
