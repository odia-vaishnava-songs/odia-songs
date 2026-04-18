const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function forceUnify() {
    const unifiedName = 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର';
    
    console.log('1. Identifying all songs with Bhakt/ଭକ୍ତି in author...');
    const { data: songs, error: fetchError } = await supabase
        .from('songs')
        .select('id, author');

    if (fetchError) return console.error(fetchError);

    const targets = songs.filter(s => 
        s.author && (
            s.author.includes('Bhakt') || 
            s.author.includes('ଭକ୍ତି') || 
            s.author.includes('ଭକ୍ତିବିନୋଦ') ||
            s.author.includes('ଠାକୁର')
        )
    );

    console.log(`Found ${targets.length} songs to update.`);

    for (const song of targets) {
        if (song.author === unifiedName) continue;
        
        console.log(`Updating [${song.id}]: "${song.author}" -> "${unifiedName}"`);
        const { error: updateError } = await supabase
            .from('songs')
            .update({ author: unifiedName })
            .eq('id', song.id);
        
        if (updateError) console.error(`Error updating ${song.id}:`, updateError);
    }

    console.log('\n2. Verifying changes...');
    const { data: finalSongs } = await supabase.from('songs').select('id, author');
    const remaining = finalSongs.filter(s => 
        s.author && (s.author.includes('Bhakt') || s.author.includes('ଭକ୍ତି')) && s.author !== unifiedName
    );

    if (remaining.length === 0) {
        console.log('✅ ALL songs unified successfully in database!');
    } else {
        console.log(`❌ Still found ${remaining.length} non-unified songs:`);
        remaining.forEach(r => console.log(`- ${r.id}: ${r.author}`));
    }
}

forceUnify();
