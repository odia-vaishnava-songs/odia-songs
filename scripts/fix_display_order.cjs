const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function setDisplayOrder() {
    console.log('Setting display_order for Gouranga Sundara...');
    const { error } = await supabase
        .from('songs')
        .update({ display_order: 5 })
        .eq('id', 'song-gourangasundara');

    if (error) {
        console.error('❌ Error:', error.message);
    } else {
        console.log('✅ Successfully set display_order to 5. It should now stay at the top!');
    }
}

setDisplayOrder();
