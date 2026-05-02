const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkAuthors() {
  const { data, error } = await supabase
    .from('songs')
    .select('id, title_english, title_odia, author');

  if (error) {
    console.error(error);
    return;
  }

  const authors = [...new Set(data.map(s => s.author))];
  console.log('Authors in DB:', authors);

  const target = data.find(s => s.title_odia?.includes('ଆନିଲ') || s.title_english?.includes('Anilo') || s.title_english?.includes('anila'));
  console.log('Target Song in DB:', target);
}

checkAuthors();
