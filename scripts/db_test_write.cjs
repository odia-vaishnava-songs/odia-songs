const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testUpdate() {
    const songId = 'bhaja-re-bhaja-re-amar';
    const unifiedName = 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର';

    console.log(`Checking song ${songId}...`);
    const { data: before } = await supabase.from('songs').select('author').eq('id', songId).single();
    console.log(`Before: "${before.author}"`);

    const { data, error, status, count } = await supabase
        .from('songs')
        .update({ author: unifiedName })
        .eq('id', songId)
        .select();

    if (error) {
        console.error('Update Error:', error);
    } else {
        console.log(`Status: ${status}`);
        console.log(`Updated Data:`, data);
        if (data && data.length > 0) {
            console.log(`✅ Update confirmed for ${songId}!`);
        } else {
            console.log(`❌ Update FAILED (0 rows affected). This means RLS is likely blocking the 'anon' key from updating.`);
        }
    }
}

testUpdate();
