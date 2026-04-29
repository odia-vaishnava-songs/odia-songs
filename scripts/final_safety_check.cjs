const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function finalSafetyCheck() {
    console.log('Running final safety check and tag sync...');
    
    const updates = [
        { id: 'song-namastenarasimhaya', tags: ['Temple', 'Pranama'] },
        { id: 'song-jayanarasimhasrinarasimha', tags: ['Temple'] },
        { id: 'song-namonamahtulasi', tags: ['Temple', 'Pranama'] },
        { id: 'song-jayaradhadhava', tags: ['Temple'] },
        { id: 'song-shikshashtakam', tags: ['Temple'] },
        { id: 'song-gauraarati', tags: ['Temple'] },
        { id: 'song-gurupuja', tags: ['Temple'] },
        { id: 'song-gurvastakam', tags: ['Temple'] }
    ];

    for (const item of updates) {
        await supabase.from('songs').update({ tags: item.tags }).eq('id', item.id);
    }
    
    console.log('All tags synchronized!');
}

finalSafetyCheck();
