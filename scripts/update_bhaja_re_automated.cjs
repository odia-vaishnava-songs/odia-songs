const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function updateBhajaRe() {
    const songId = 'bhaja-re-bhaja-re-amar';
    const versions = [
        {
          "label": "HH Gour Govinda Swami",
          "url": "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Bhajare_Bhajare.mp3"
        },
        {
          "label": "HH Gour Govinda Swami (V2)",
          "url": "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Bhajare_bhajare_amar_mana.mp3"
        },
        {
          "label": "HH Bhakti Caru Swami",
          "url": "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_A_to_C/His_Holiness_Bhakti_Charu_Swami/Bhajans/Vaishnava_Bhajans/BCS_Bhajans_-_Bhaja_Re_Bhaja_Amar.mp3"
        },
        {
          "label": "HG Jai Sachinanadana Prabhu",
          "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Bhaja_Re_Bhaja_Re_Amara_Mana/Bhaja_Re_Bhaja_Re_Amara_Mana_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3"
        },
        {
          "label": "HG Vaisesika Prabhu",
          "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Bhaja_Re_Bhaja_Re_Amara_Mana/Bhaja_Re_Bhaja_Re_Amara_Mana_-_Sung_by_HG_Vaisesika_Prabhu_IDT.mp3"
        }
    ];

    console.log(`Pushing updates for ${songId} to Supabase...`);
    
    const { error } = await supabase
        .from('songs')
        .update({ 
            audio_url: versions[0].url,
            audio_versions: versions,
            vocalist: 'HH Gour Govinda Swami',
            updated_at: new Date().toISOString()
        })
        .eq('id', songId);

    if (error) {
        console.error('❌ Error updating DB:', error);
    } else {
        console.log('✅ Successfully updated Bhaja Re in Supabase!');
    }
}

updateBhajaRe();
