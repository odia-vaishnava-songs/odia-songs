const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fixDefects() {
    console.log('🔧 Fixing character defects in "Huhunkara Garjanadi Aho"...');

    // Fetch the current content
    const { data, error: fetchError } = await supabase
        .from('songs')
        .select('structured_content')
        .eq('id', 'song-huhunkaragarjanadi')
        .single();

    if (fetchError) {
        console.error('❌ Failed to fetch song:', fetchError.message);
        return;
    }

    let contentStr = JSON.stringify(data.structured_content);
    
    // 1. Fix Sanskrit 'प्र' to Odia 'ପ୍ର'
    contentStr = contentStr.replace(/प्र/g, 'ପ୍ର');
    
    // 2. Fix typo 'କୂସଙ୍ଗ' to 'କୁସଙ୍ଗ'
    contentStr = contentStr.replace(/କୂସଙ୍ଗ/g, 'କୁସଙ୍ଗ');

    const fixedContent = JSON.parse(contentStr);

    // Update back to Supabase
    const { error: updateError } = await supabase
        .from('songs')
        .update({
            structured_content: fixedContent
        })
        .eq('id', 'song-huhunkaragarjanadi');

    if (updateError) {
        console.error('❌ Failed to update song:', updateError.message);
    } else {
        console.log('✅ Successfully fixed character defects and typos in Supabase!');
    }
}

fixDefects();
