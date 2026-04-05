const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const ids = ['song-emonadurmati', 'song-gaygoramadhura'];
    
    for (const id of ids) {
        const { data, count, error } = await supabase
            .from('songs')
            .select('id, title, structured_content', { count: 'exact' })
            .eq('id', id);
            
        if (error) {
            console.error(`❌ Error fetching ${id}:`, error.message);
        } else {
            console.log(`✅ ${id}: Found ${data.length} rows.`);
            data.forEach((row, index) => {
                const verses = row.structured_content?.verses?.length || 0;
                console.log(`   - Row ${index + 1}: ${verses} verses.`);
            });
        }
    }
}

check();
