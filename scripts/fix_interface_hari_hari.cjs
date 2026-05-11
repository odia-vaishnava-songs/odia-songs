const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fixInterface() {
    console.log('🔧 Fixing "Hari Hari Kabe More Hoibe Su-Dina" to match StructuredSong interface...');

    // Fetch the current content
    const { data, error: fetchError } = await supabase
        .from('songs')
        .select('structured_content')
        .eq('id', 'song-hariharikabemore')
        .single();

    if (fetchError) {
        console.error('❌ Failed to fetch song:', fetchError.message);
        return;
    }

    const content = data.structured_content;
    
    // Create new object with ONLY the allowed fields
    const fixedContent = {
        verses: content.verses
    };

    // Update back to Supabase
    const { error: updateError } = await supabase
        .from('songs')
        .update({
            structured_content: fixedContent
        })
        .eq('id', 'song-hariharikabemore');

    if (updateError) {
        console.error('❌ Failed to update song:', updateError.message);
    } else {
        console.log('✅ Successfully matched StructuredSong interface in Supabase!');
    }
}

fixInterface();
