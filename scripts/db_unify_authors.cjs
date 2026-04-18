const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function unifyAuthors() {
    const variations = [
        'Bhaktivinoda Ṭhākura',
        'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁରଙ୍କ ରଚନା',
        'ଶ୍ରୀଲ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ରଚନା',
        'ଶ୍ରୀଲ ଭକ୍ତିବିନୋଦ ଠାକୁର',
        'Bhaktivinoda Ṭhākura (ଭକ୍ତି ବିନୋଦ ଠାକୁର)'
    ];

    const unifiedName = 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର';

    console.log('Unifying author names in database...');
    
    const { data, error } = await supabase
        .from('songs')
        .update({ author: unifiedName })
        .in('author', variations);

    if (error) {
        console.error('Error unifying authors in DB:', error);
    } else {
        console.log('Successfully unified author names in Supabase!');
    }
}

unifyAuthors();
