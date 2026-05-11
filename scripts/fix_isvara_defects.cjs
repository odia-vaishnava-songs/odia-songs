const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fixGlobalCharacterDefects() {
    console.log('🔧 Scanning and fixing Korean character defects in "Isvara Parama Krsna"...');

    // Fetch the current content
    const { data, error: fetchError } = await supabase
        .from('songs')
        .select('structured_content')
        .eq('id', 'song-isvaraparamakrsna')
        .single();

    if (fetchError) {
        console.error('❌ Failed to fetch song:', fetchError.message);
        return;
    }

    let contentStr = JSON.stringify(data.structured_content);
    
    // Replace Korean '비' with Odia 'ବି'
    // Also checking for 'বি' (Bengali) just in case, but user specifically mentioned '비'
    const fixedContentStr = contentStr.replace(/비/g, 'ବି');
    const fixedContent = JSON.parse(fixedContentStr);

    // Update back to Supabase
    const { error: updateError } = await supabase
        .from('songs')
        .update({
            structured_content: fixedContent
        })
        .eq('id', 'song-isvaraparamakrsna');

    if (updateError) {
        console.error('❌ Failed to update song:', updateError.message);
    } else {
        console.log('✅ Successfully fixed all character defects in Supabase!');
    }
}

fixGlobalCharacterDefects();
