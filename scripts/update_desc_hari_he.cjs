const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function updateDescription() {
  console.log('🔧 Updating description of "Hari He Doyal Mor" in Supabase...');

  const { error } = await supabase
    .from('songs')
    .update({
      description: 'ଏକ ଅତି ସୁନ୍ଦର ପାରମ୍ପରିକ ଦୀନତାମୟୀ ପ୍ରାର୍ଥନା |'
    })
    .eq('id', 'song-harihedoyalmor');

  if (error) {
    console.error('❌ Failed to update description:', error.message);
  } else {
    console.log('✅ Successfully updated description in Supabase!');
  }
}

updateDescription();
