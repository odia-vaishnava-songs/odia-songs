const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function updateSongAudio() {
    const songId = 'song-nadiyagodrume'; // ID from resources.ts
    const versions = [
      {
        "label": "HG Agnidev Prabhu",
        "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HG_Agnidev_Prabhu_IDT.mp3"
      },
      {
        "label": "HG Badahari Prabhu",
        "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HG_Badahari_Prabhu_IDT.mp3"
      },
      {
        "label": "HG Jai Sachinandana Prabhu (A)",
        "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HG_Badahari_Prabhu_IDT.mp3"
      },
      {
        "label": "HG Vaiyasaki Prabhu",
        "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HG_Vaiyasaki_Prabhu_IDT.mp3"
      },
      {
        "label": "HH Radhanath Swami",
        "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HH_Radhanath_Swami_IDT.mp3"
      },
      {
        "label": "HG Radheshyam Prabhu",
        "url": "https://pub-4f8c24b1c935435d9e3b959e0886ebf6.r2.dev/uploads%2FBoro%20sukher%20khabor%20gai.mp3"
      },
      {
        "label": "HG Jai Sachinandana Prabhu (B)",
        "url": "https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2F42%20Boro%20Sukher%20khabor%20P-80.MP3"
      }
    ];

    console.log(`Updating audio versions for ${songId} in database...`);
    // NOTE: In the database, the column is audio_versions (snake_case)
    const { error } = await supabase
        .from('songs')
        .update({ audio_versions: versions })
        .eq('id', songId);

    if (error) {
        console.error('Error updating DB:', error);
    } else {
        console.log('✅ Successfully updated audio versions in Supabase!');
    }
}

updateSongAudio();
