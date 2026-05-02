const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function checkSongs() {
  const { data, error } = await supabase
    .from('songs')
    .select('title, title_english, title_odia, author')
    .eq('author', 'Narottama Dasa Thakura');

  if (error) {
    console.error(error);
    return;
  }

  console.log(JSON.stringify(data, null, 2));
}

checkSongs();
