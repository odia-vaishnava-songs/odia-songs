const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAllGita() {
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, category')
        .eq('category', 'Gita');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Gita Category results:', data);
    
    // Also check for category 'G' or 'Gita-mahmtya' or similar
    const { data: data2, error: error2 } = await supabase
        .from('songs')
        .select('id, title, category')
        .ilike('category', '%gita%');
        
    console.log('ILIKE Gita Category results:', data2);
}

checkAllGita();
