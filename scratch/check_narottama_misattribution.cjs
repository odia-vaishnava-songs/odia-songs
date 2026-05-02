const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

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
    // Fetch only necessary fields to avoid timeout
    const { data: songs, error } = await supabase
        .from('songs')
        .select('id, title_english, author');

    if (error) {
        console.error(error);
        return;
    }

    const updates = [];

    narottamaCatalog.forEach(catalogTitle => {
        const key = catalogTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
        const match = songs.find(s => {
            const re = (s.title_english || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            return re === key || re.includes(key.substring(0, 10)) || key.includes(re.substring(0, 10));
        });

        if (match && match.author !== 'Narottama Dasa Thakura') {
            // "Yasomati Nandana" is often Bhaktivinoda, let's skip for now or verify
            if (catalogTitle.includes('Yasomati Nandana')) return;
            
            updates.push({
                id: match.id,
                title: match.title_english,
                oldAuthor: match.author,
                newAuthor: 'Narottama Dasa Thakura'
            });
        }
    });

    console.log('Proposed Updates:');
    console.log(JSON.stringify(updates, null, 2));
}

checkCatalog();
