const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

const MAPPINGS = [
    { from: 'A.C. Bhaktivedanta Swami', to: 'Srila Prabhupada' },
    { from: 'Others Authors', to: 'Other Authors' },
    { from: 'ଶ୍ରୀଲ ଭକ୍ତି ସିଦ୍ଧାନ୍ତ ସରସ୍ଵତୀ ଠାକୁର (Srila Bhakti Siddhanta Sarasvati Thakura)', to: 'Bhaktisiddhanta Saraswati' },
    { from: 'ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର (Srila Locana Dasa Thakura)', to: 'Locana Dasa Thakura' }
];

async function bulkUpdateAuthors() {
    console.log('--- Starting Efficient Bulk Update ---');
    
    for (const mapping of MAPPINGS) {
        console.log(`Mapping "${mapping.from}" to "${mapping.to}"...`);
        const { data, error, count } = await supabase
            .from('songs')
            .update({ author: mapping.to })
            .eq('author', mapping.from);
        
        if (error) {
            console.error(`Error mapping ${mapping.from}:`, error.message);
        } else {
            console.log(`Successfully updated rows for ${mapping.from}.`);
        }
    }

    // Fix specific misattributions by title
    console.log('Fixing Narottama misattributions by title keywords...');
    
    const { data: yugala, error: e1 } = await supabase
        .from('songs')
        .update({ author: 'Narottama Dasa Thakura' })
        .ilike('title_english', '%yugala%kisora%');
    
    const { data: anila, error: e2 } = await supabase
        .from('songs')
        .update({ author: 'Narottama Dasa Thakura' })
        .ilike('title_english', '%anila%prema%');

    const { data: anilo, error: e3 } = await supabase
        .from('songs')
        .update({ author: 'Narottama Dasa Thakura' })
        .ilike('title_english', '%anilo%prema%');

    console.log('--- Bulk Update Complete! ---');
}

bulkUpdateAuthors();
