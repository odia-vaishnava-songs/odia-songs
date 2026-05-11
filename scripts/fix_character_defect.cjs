const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fixCharacter() {
    console.log('🔧 Fixing Korean character defect in "He Govinda He Gopal Kesava Madhava"...');

    // Fetch the current content
    const { data, error: fetchError } = await supabase
        .from('songs')
        .select('structured_content')
        .eq('id', 'song-hegovindahegopalkesava')
        .single();

    if (fetchError) {
        console.error('❌ Failed to fetch song:', fetchError.message);
        return;
    }

    let contentStr = JSON.stringify(data.structured_content);
    
    // Replace Korean '비' with Odia 'ବି'
    // Korean 비 is \ub>비, Odia ବି is \u0b2c\u0b3f
    const fixedContentStr = contentStr.replace(/비/g, 'ବି');
    const fixedContent = JSON.parse(fixedContentStr);

    // Update back to Supabase
    const { error: updateError } = await supabase
        .from('songs')
        .update({
            structured_content: fixedContent
        })
        .eq('id', 'song-hegovindahegopalkesava');

    if (updateError) {
        console.error('❌ Failed to update song:', updateError.message);
    } else {
        console.log('✅ Successfully fixed character defect in Supabase!');
    }
}

fixCharacter();
