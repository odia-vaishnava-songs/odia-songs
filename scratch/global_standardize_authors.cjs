const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

const AUTHOR_MAP = {
    'A.C. Bhaktivedanta Swami': 'Srila Prabhupada',
    'ଶ୍ରୀଲ ଭକ୍ତି ସିଦ୍ଧାନ୍ତ ସରସ୍ଵତୀ ଠାକୁର (Srila Bhakti Siddhanta Sarasvati Thakura)': 'Bhaktisiddhanta Saraswati',
    'ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର (Srila Locana Dasa Thakura)': 'Locana Dasa Thakura',
    'Others Authors': 'Other Authors',
    // Fixing known song-specific misattributions found in audit
    'song-radhakrsnabolbol': 'Bhaktivinoda Thakura', // Ensure this stays Bhaktivinoda
    'song-jayajayajagannathasacira': 'Vasudeva Ghosha' // Ensure this stays Vasudeva Ghosha
};

// Specific songs that need author correction to Narottama
const NAROTTAMA_SONGS = [
    'song-radhakrsnapranamor', 
    'song-jayajayasrikrsnacaitanya',
    'song-ei-barakarunakorovaisnavagosai',
    'song-srirupamanjaripada',
    'song-nitaipadakamala'
];

async function standardizeAuthors() {
    console.log('--- Starting Global Author Standardization ---');
    
    const { data: songs, error } = await supabase.from('songs').select('id, author, title_english');
    if (error) {
        console.error('Fetch failed:', error);
        return;
    }

    console.log(`Found ${songs.length} songs to check.`);
    let updateCount = 0;

    for (const song of songs) {
        let newAuthor = null;

        // 1. Check general author mapping
        if (AUTHOR_MAP[song.author]) {
            newAuthor = AUTHOR_MAP[song.author];
        }

        // 2. Check for specific Narottama songs that might be misattributed to Bhaktivinoda
        const lowerTitle = (song.title_english || '').toLowerCase();
        if (lowerTitle.includes('yugala kisora') || lowerTitle.includes('yugala-kisora') || lowerTitle.includes('prana mor')) {
            newAuthor = 'Narottama Dasa Thakura';
        }
        if (lowerTitle.includes('anila prema dhana') || lowerTitle.includes('anilo prema dhana')) {
            newAuthor = 'Narottama Dasa Thakura';
        }
        if (lowerTitle.includes('rupa manjari pada')) {
            newAuthor = 'Narottama Dasa Thakura';
        }

        if (newAuthor && newAuthor !== song.author) {
            console.log(`Updating [${song.id}]: "${song.title_english}" -> ${newAuthor} (was ${song.author})`);
            const { error: updateError } = await supabase
                .from('songs')
                .update({ author: newAuthor })
                .eq('id', song.id);
            
            if (updateError) {
                console.error(`Failed to update ${song.id}:`, updateError.message);
            } else {
                updateCount++;
            }
        }
    }

    console.log(`--- Finished! Standardized ${updateCount} songs. ---`);
}

standardizeAuthors();
