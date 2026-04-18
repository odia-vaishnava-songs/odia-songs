const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function findTable() {
    // We try to fetch from a few likely table names
    const tables = ['songs', 'slokas', 'verses', 'gita', 'chapters', 'resources'];
    for (const table of tables) {
        const { data, error } = await supabase.from(table).select('id').limit(1);
        if (!error) {
            console.log('Table exists:', table);
            const { data: all } = await supabase.from(table).select('id, title');
            console.log('Total records in', table, ':', all ? all.length : 0);
            if (all) {
                for (const r of all) {
                    if (JSON.stringify(r).includes('4')) {
                        console.log('Match in', table, ':', r.id, r.title);
                    }
                }
            }
        }
    }
}

findTable();
