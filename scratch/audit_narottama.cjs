const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const narottamaCatalog = [
    'Are Bhai Bhaja Mora',
    'Dhana Mor Nityananda',
    'Ei-bara karuna koro vaisnava gosai',
    'Gauranga bolite habe pulaka sarira',
    'Gauranga Karuna Koro',
    'Gaurangera Duti Pada',
    'Gora Pahun',
    'Hari Haraye Namah Krsna Yadavaya',
    'Hari hari biphale janama goinu',
    'Jaya Jaya Sri Krsna Caitanya Nityananda',
    'Je anila prema dhana koruna pracura',
    'Ki Rupe Paibo Seva',
    'Kusumita vrndavane nacata sikhigane',
    'Nitai-pada-kamala',
    'Radha-krsna prana mor yugala-kisora',
    'Sri-guru-carana-padma',
    'Sri Rupa Manjari Pada',
    'Suniyachi sadhu mukhe bole sarvajan',
    'Vrndavana ramya-sthana',
    'Yasomati Nandana Braja Baro Nagara'
];

async function checkCatalog() {
    console.log('Checking Narottama Catalog against DB...');
    const { data: songs, error } = await supabase.from('songs').select('id, title_english, title_odia, author');
    if (error) {
        console.error(error);
        return;
    }

    const issues = [];

    narottamaCatalog.forEach(catalogTitle => {
        const key = catalogTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
        const match = songs.find(s => {
            const re = (s.title_english || s.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            return re === key || re.includes(key.slice(0, 8)) || key.includes(re.slice(0, 8));
        });

        if (match) {
            if (match.author !== 'Narottama Dasa Thakura') {
                issues.push({
                    catalogTitle,
                    dbId: match.id,
                    dbTitle: match.title_english,
                    currentAuthor: match.author,
                    reason: 'Author Mismatch'
                });
            }
        } else {
            // Check if it's in the DB with a completely different title but same Odia meaning
            // For now just mark as missing
            issues.push({
                catalogTitle,
                reason: 'Missing/No Match'
            });
        }
    });

    console.log(JSON.stringify(issues, null, 2));
}

checkCatalog();
