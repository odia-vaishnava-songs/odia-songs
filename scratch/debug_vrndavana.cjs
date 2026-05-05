const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function checkVrndavanaSongs() {
    const { data: songs, error } = await supabase
        .from('songs')
        .select('*');

    if (error) {
        console.error(error);
        return;
    }

    const vrndavanaCatalog = [
        'Abanika Majhe Dekha Dona Bhai',
        'Antare Nitai Bahire Nitai',
        'Hera Dekhiya Nayana Bhariya',
        'Janu Lambita Bahu Jugala',
        'Madana Mohana Tanum',
        'Nace Nace Nitai Gaur Guna Maniya',
        'Nana Dravya Ayojana',
        'Sri Hari Vasare Hari Kirtana Vidhana'
    ];

    const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

    const normalizedCatalog = vrndavanaCatalog.map(normalize);

    const matches = songs.filter(s => {
        const title = (s.title_english || s.title || '').toLowerCase();
        const normalizedTitle = title.replace(/[^a-z0-9]/g, '');
        return normalizedCatalog.some(catTitle => normalizedTitle.includes(catTitle) || catTitle.includes(normalizedTitle));
    });

    console.log(`Found ${matches.length} matches for Vrndavana Dasa Thakura titles:`);
    matches.forEach(m => {
        console.log(`- ID: ${m.id}, Title: ${m.title_english || m.title}, Author: ${m.author}`);
    });
}

checkVrndavanaSongs();
