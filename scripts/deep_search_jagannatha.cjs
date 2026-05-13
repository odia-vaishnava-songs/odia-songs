const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function deepSearch() {
    const odiaTitle = 'ଶ୍ରୀ ଜଗନ୍ନାଥାଷ୍ଟକମ୍';
    console.log(`Searching for Odia title: ${odiaTitle}`);
    
    const { data, error } = await supabase
        .from('songs')
        .select('id, title, title_odia, title_english')
        .or(`title.ilike.%Jagannathastakam%,title_odia.ilike.%${odiaTitle}%`);

    if (error) {
        console.error('Error searching:', error);
        return;
    }

    if (data && data.length > 0) {
        console.log('Found matches:', JSON.stringify(data, null, 2));
    } else {
        console.log('No matches found in "songs" table.');
        
        // Let's check if there's any other table or if we can do a broader search
        console.log('Checking all records in "songs" table to be sure...');
        const { data: allData, error: allErr } = await supabase
            .from('songs')
            .select('id, title');
            
        if (allErr) {
             console.error('Error fetching all:', allErr);
        } else {
             const matches = allData.filter(s => s.title.includes('Jagannathastakam') || s.title.includes('ଜଗନ୍ନାଥାଷ୍ଟକମ୍'));
             console.log(`Found ${matches.length} matches in full list filtering.`);
             if (matches.length > 0) console.log(matches);
        }
    }
}

deepSearch();
