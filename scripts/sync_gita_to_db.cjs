const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.warn("⚠️ NO SUPABASE CREDENTIALS FOUND. Please ensure environment variables are loaded.");
    // Skip if no credentials (e.g. during simple build)
    process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const CHAPTERS = [
    { id: 'gita-chapter-1', title: 'ଅଧ୍ୟାୟ ୧ - ଅର୍ଜୁନବିଷାଦ ଯୋଗ', english: 'Chapter 1: Arjuna-viṣāda Yoga', odia: 'ଅର୍ଜୁନବିଷାଦ ଯୋଗ' },
    { id: 'gita-chapter-2', title: 'ଅଧ୍ୟାୟ ୨ - ସାଂଖ୍ୟ ଯୋଗ', english: 'Chapter 2: Sāṅkhya Yoga', odia: 'ସାଂଖ୍ୟ ଯୋଗ' },
    { id: 'gita-chapter-3', title: 'ଅଧ୍ୟାୟ ୩ - କର୍ମ ଯୋଗ', english: 'Chapter 3: Karma Yoga', odia: 'କର୍ମ ଯୋଗ' },
    { id: 'gita-chapter-4', title: 'ଅଧ୍ୟାୟ ୪ - ଜ୍ଞାନକର୍ମସନ୍ନ୍ୟାସ ଯୋଗ', english: 'Chapter 4: Jñāna-karma-sannyāsa Yoga', odia: 'ଜ୍ଞାନକର୍ମସନ୍ନ୍ୟାସ ଯୋଗ' },
    { id: 'gita-chapter-5', title: 'ଅଧ୍ୟାୟ ୫ - କର୍ମସନ୍ନ୍ୟାସ ଯୋଗ', english: 'Chapter 5: Karma-sannyāsa Yoga', odia: 'କର୍ମସନ୍ନ୍ୟାସ ଯୋଗ' },
    { id: 'gita-chapter-6', title: 'ଅଧ୍ୟାୟ ୬ - ଆତ୍ମସଂଯମ ଯୋଗ', english: 'Chapter 6: Aātma-saṃyama Yoga', odia: 'ଆତ୍ମସଂଯମ ଯୋଗ' },
    { id: 'gita-chapter-7', title: 'ଅଧ୍ୟାୟ ୭ - ଜ୍ଞାନବିଜ୍ଞାନ ଯୋଗ', english: 'Chapter 7: Jñāna-vijñāṇa Yoga', odia: 'ଜ୍ଞାନବିଜ୍ଞାନ ଯୋଗ' },
    { id: 'gita-chapter-8', title: 'ଅଧ୍ୟାୟ ୮ - ଅକ୍ଷରବ୍ରହ୍ମ ଯୋଗ', english: 'Chapter 8: Akṣara-brahma Yoga', odia: 'ଅକ୍ଷରବ୍ରହ୍ମ ଯୋଗ' },
    { id: 'gita-chapter-9', title: 'ଅଧ୍ୟାୟ ୯ - ରାଜବିଦ୍ୟା ରାଜଗୁହ୍ୟ ଯୋଗ', english: 'Chapter 9: Rāja-vidyā-rāja-guhya Yoga', odia: 'ରାଜବିଦ୍ୟା ରାଜଗୁହ୍ୟ ଯୋଗ' },
    { id: 'gita-chapter-10', title: 'ଅଧ୍ୟାୟ ୧୦ - ବିଭୂତି ବିସ୍ତାର ଯୋଗ', english: 'Chapter 10: Vibhūti-vistāra Yoga', odia: '비ଭୂତି ବିସ୍ତାର ଯୋଗ' },
    { id: 'gita-chapter-11', title: 'ଅଧ୍ୟାୟ ୧୧ - ବିଶ୍ଵରୂପଦର୍ଶନ ଯୋଗ', english: 'Chapter 11: Viśvarūpa-darśana Yoga', odia: 'ବିଶ୍ୱରୂପଦର୍ଶନ ଯୋଗ' },
    { id: 'gita-chapter-12', title: 'ଅଧ୍ୟାୟ ୧୨ - ଭକ୍ତି ଯୋଗ', english: 'Chapter 12: Bhakti Yoga', odia: 'ଭକ୍ତି ଯୋଗ' },
    { id: 'gita-chapter-13', title: 'ଅଧ୍ୟାୟ ୧୩ - କ୍ଷେତ୍ରକ୍ଷେତ୍ରଜ୍ଞବିଭାଗ ଯୋଗ', english: 'Chapter 13: Kṣetra-kṣetrajña-vibhāga Yoga', odia: 'କ୍ଷେତ୍ରକ୍ଷେତ୍ରଜ୍ଞବିଭାଗ ଯୋଗ' },
    { id: 'gita-chapter-14', title: 'ଅଧ୍ୟାୟ ୧୪ - ଗୁଣତ୍ରୟବିଭାଗ ଯୋଗ', english: 'Chapter 14: Guṇa-traya-vibhāga Yoga', odia: 'ଗୁଣତ୍ରୟବିଭାଗ ଯୋଗ' },
    { id: 'gita-chapter-15', title: 'ଅଧ୍ୟାୟ ୧୫ - ପୁରୁଷୋତ୍ତମ ଯୋଗ', english: 'Chapter 15: Puruṣottama Yoga', odia: 'ପୁରୁଷୋତ୍ତମ ଯୋଗ' },
    { id: 'gita-chapter-16', title: 'ଅଧ୍ୟାୟ ୧୬ - ଦୈବାସୁରସମ୍ପଦବିଭାଗ ଯୋଗ', english: 'Chapter 16: Daivāsura-saṃpad-vibhāga Yoga', odia: 'ଦୈବାସୁରସମ୍ପଦବିଭାଗ ଯୋଗ' },
    { id: 'gita-chapter-17', title: 'ଅଧ୍ୟାୟ ୧୭ - ଶ୍ରଦ୍ଧାତ୍ରୟବିଭାଗ ଯୋଗ', english: 'Chapter 17: Śraddhā-traya-vibhāga Yoga', odia: 'ଶ୍ରଦ୍ଧାତ୍ରୟବିଭାଗ ଯୋଗ' },
    { id: 'gita-chapter-18', title: 'ଅଧ୍ୟାୟ ୧୮ - ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ', english: 'Chapter 18: Mokṣa-sannyasa Yoga', odia: 'ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ' }
];

async function sync() {
    console.log("🚀 Syncing Gita metadata to Supabase...");
    
    for (const ch of CHAPTERS) {
        const { error } = await supabase
            .from('songs')
            .upsert({
                id: ch.id,
                title: ch.title,
                title_odia: ch.odia,
                title_english: ch.english,
                category: 'Gita',
                type: 'html',
                status: 'PUBLISHED',
                published: true
            }, { onConflict: 'id' });
            
        if (error) {
            console.error(`❌ FAILED: ${ch.id}:`, error.message);
        } else {
            console.log(`✅ SYNCED: ${ch.id}`);
        }
    }
    
    console.log("🏁 Gita sync complete.");
}

sync();
