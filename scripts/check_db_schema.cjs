const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
    const { data: tables, error } = await supabase
        .from('pg_catalog.pg_tables')
        .select('tablename')
        .eq('schemaname', 'public');

    if (error) {
        console.error('Error:', error);
        // Fallback: try to select from a non-existent table to see error or just list common table names
        const { error: error2 } = await supabase.from('verses').select('id').limit(1);
        if (error2) console.log('Verses table status:', error2.message);
        else console.log('Verses table exists!');
        
        const { error: error3 } = await supabase.from('chapters').select('id').limit(1);
        if (error3) console.log('Chapters table status:', error3.message);
        else console.log('Chapters table exists!');
        return;
    }

    console.log('Tables:', tables);
}

checkSchema();
