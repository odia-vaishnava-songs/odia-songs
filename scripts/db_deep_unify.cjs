const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkAuthors() {
    console.log('Fetching unique author names from database...');
    const { data, error } = await supabase
        .from('songs')
        .select('author');

    if (error) {
        console.error('Error fetching authors:', error);
        return;
    }

    const uniqueAuthors = [...new Set(data.map(s => s.author))];
    console.log('Found these authors in database:');
    uniqueAuthors.forEach(a => {
        if (a && (a.includes('Bhakt') || a.includes('ଭକ୍ତି'))) {
            console.log(`[MATCH] "${a}"`);
        } else {
            // console.log(`[OTHER] "${a}"`);
        }
    });

    const unifiedName = 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର';
    console.log('\n--- ATTEMPTING FORCE UPDATE ---');
    
    // Force update EVERYTHING that matches these patterns
    const { error: updateError, count } = await supabase
        .from('songs')
        .update({ author: unifiedName })
        .or(`author.ilike.%Bhakt%,author.ilike.%ଭକ୍ତି%`, { count: 'exact' });

    if (updateError) {
        console.error('Update error:', updateError);
    } else {
        console.log(`Successfully updated rows in Supabase!`);
    }
}

checkAuthors();
