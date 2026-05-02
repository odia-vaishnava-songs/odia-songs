
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const standardizedMapping = {
    'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର': 'Bhaktivinoda Thakura',
    'ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର (Srila Locana Dasa Thakura)': 'Locana Dasa Thakura',
    'ଶ୍ରୀଲ ଭକ୍ତି ସିଦ୍ଧାନ୍ତ ସରସ୍ଵତୀ ଠାକୁର (Srila Bhakti Siddhanta Sarasvati Thakura)': 'Bhaktisiddhanta Saraswati',
    'ଶ୍ରୀଲ ବିଶ୍ଵନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର (Srila Visvanatha Cakravarti Thakura)': 'Visvanatha Cakravarti Thakura',
    'ଶ୍ରୀଲ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର': 'Visvanatha Cakravarti Thakura',
    'ଶ୍ରୀଲ ରୂପ ଗୋସ୍ଵାମୀ (Srila Rupa Gosvami)': 'Rupa Goswami',
    'ଏ.ସି. ଭକ୍ତିବେଦାନ୍ତ ସ୍ୱାମୀ (Srila Prabhupada)': 'A.C. Bhaktivedanta Swami',
    'Srila Prabhupada': 'A.C. Bhaktivedanta Swami',
    'Srila Bhaktisiddhanta Saraswati': 'Bhaktisiddhanta Saraswati',
    'Srila Rupa Goswami': 'Rupa Goswami'
};

async function deepCleanup() {
    console.log('--- Starting Deep Metadata Cleanup ---');
    
    // 1. Fetch all songs
    const { data: songs, error } = await supabase.from('songs').select('id, title, author');
    if (error) return console.error('Fetch error:', error);

    console.log(`Analyzing ${songs.length} songs...`);
    let updatedCount = 0;

    for (const song of songs) {
        let newAuthor = null;
        
        // Check for direct mapping
        if (standardizedMapping[song.author]) {
            newAuthor = standardizedMapping[song.author];
        } 
        // Check for partial matches or "Srila" prefixes not caught
        else if (song.author && song.author.includes('Locana Dasa Thakura')) {
            newAuthor = 'Locana Dasa Thakura';
        }
        else if (song.author && song.author.includes('Visvanatha Cakravarti')) {
            newAuthor = 'Visvanatha Cakravarti Thakura';
        }
        else if (song.author && song.author.includes('Bhakti Siddhanta')) {
            newAuthor = 'Bhaktisiddhanta Saraswati';
        }
        else if (song.author && song.author.includes('Rupa Gosvami')) {
            newAuthor = 'Rupa Goswami';
        }
        else if (song.author && (song.author.includes('Prabhupada') || song.author.includes('Bhaktivedanta'))) {
            newAuthor = 'A.C. Bhaktivedanta Swami';
        }

        if (newAuthor && newAuthor !== song.author) {
            console.log(`Fixing: "${song.title}" | Old: [${song.author}] -> New: [${newAuthor}]`);
            const { error: updateError } = await supabase
                .from('songs')
                .update({ author: newAuthor })
                .eq('id', song.id);
            
            if (updateError) console.error(`Error updating ${song.id}:`, updateError);
            else updatedCount++;
        }
    }

    console.log(`--- Cleanup Finished! Fixed ${updatedCount} songs. ---`);
}

deepCleanup();
