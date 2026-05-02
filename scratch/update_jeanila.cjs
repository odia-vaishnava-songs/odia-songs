const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function updateSong() {
  console.log('Updating song in Supabase...');
  const { data, error } = await supabase
    .from('songs')
    .update({ 
      author: 'Narottama Dasa Thakura',
      title_english: 'Je anila prema dhana koruna pracura',
      title_odia: 'ଯେ ଆନିଲ ପ୍ରେମ ଧନ'
    })
    .eq('id', 'song-jeanilopremadhana');

  if (error) {
    console.error('Update failed:', error);
  } else {
    console.log('Successfully updated song attribution!');
  }
}

updateSong();
