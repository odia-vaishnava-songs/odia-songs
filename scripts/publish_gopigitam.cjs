const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const structuredJson = JSON.parse(fs.readFileSync('scratch/gopi_gitam_refined_structured.json', 'utf8'));

const audioVersions = [
  {
    label: "HG Amarendra Prabhu",
    url: "https://pub-e5330c78ced14d50b34c4b05df016674.r2.dev/uploads/Gopi_Geet_jr5cu5.mp3"
  },
  {
    label: "HH Bhakti Caru Swami (01)",
    url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsna_Daipayana_Vyasa/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29_02_-_Sung_by_HH_Bhakti_Charu_Swami_IDT.mp3"
  },
  {
    label: "HH Bhakti Caru Swami (02)",
    url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsna_Daipayana_Vyasa/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29_01_-_Sung_by_HH_Bhakti_Charu_Swami_IDT.mp3"
  },
  {
    label: "HG Jai Sachinandana Prabhu",
    url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsna_Daipayana_Vyasa/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3"
  },
  {
    label: "HG Sivarama Prabhu",
    url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsna_Daipayana_Vyasa/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29_-_Sung_by_HG_Sivarama_Prabhu_IDT.mp3"
  },
  {
    label: "HH Bhakti Rasamrita Swami",
    url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsna_Daipayana_Vyasa/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29_-_Sung_by_HH_Bhakti_Rasamrita_Swami_IDT.mp3"
  },
  {
    label: "HH Indradyumna Swami",
    url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsna_Daipayana_Vyasa/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29/Jayati_Te_Dhikam_Janmana_Vraja%28Gopi_Gita%29_-_Sung_by_HH_Indradyumna_Swami_IDT.mp3"
  },
  {
    label: "HH Lokanatha Swami",
    url: "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Lokanath_Swami/Bhajans/Vaishnava_Bhajans/LNS_Bhajans_-_Gopi_Geet.mp3"
  },
  {
    label: "HH Bhakti Ashraya Vaishnava Swami",
    url: "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_A_to_C/His_Holiness_Bhakti_Ashraya_Vaishnava_Swami/Bhajans/BAVS_Bhajans_-_Gopi_Geet_-_2016-10-23_ISKCON_Vrindavan.mp3"
  },
  {
    label: "HG Jai Sachinandana Prabhu (01)",
    url: "https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads/Gopi%20Geet.mp3"
  },
  {
    label: "HG Goloka Vasini Mataji",
    url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/gopi_geet_goloka.mp3"
  }
];

const songPayload = {
  id: 'song-gopigitam',
  title: "ଜୟତି ତେଽଧିକଂ ଜନ୍ମନା ବ୍ରଜଃ (Jayati Te 'Dhikam Janmanā Vrajaḥ)",
  title_odia: "ଜୟତି ତେଽଧିକଂ ଜନ୍ମନା ବ୍ରଜଃ",
  title_english: "Jayati Te 'Dhikam Janmanā Vrajaḥ",
  category: 'Songs',
  type: 'html',
  description: 'ଗୋପୀ ଗୀତମ୍ (Gopi Gitam)',
  author: 'Śrī Śukadeva Gosvāmī',
  vocalist: 'HG Amarendra Prabhu',
  audio_url: 'https://pub-e5330c78ced14d50b34c4b05df016674.r2.dev/uploads/Gopi_Geet_jr5cu5.mp3',
  audio_versions: audioVersions,
  structured_content: structuredJson,
  status: 'COMPLETED',
  published: true,
  updated_at: new Date().toISOString()
};

async function publish() {
  console.log("Signing in as Admin...");
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: "daitariswain7@gmail.com",
    password: "pass-969200"
  });

  if (authError) {
    console.error("Auth error:", authError);
    process.exit(1);
  }

  console.log("Logged in:", authData.user.email);
  console.log('Upserting song-gopigitam into Supabase...');
  const { data, error } = await supabase
    .from('songs')
    .upsert(songPayload, { onConflict: 'id' })
    .select();

  if (error) {
    console.error('Supabase Upsert Error:', error);
    process.exit(1);
  }
  console.log('✅ Successfully upserted song-gopigitam to Supabase:', data[0]?.id);
}

publish();
