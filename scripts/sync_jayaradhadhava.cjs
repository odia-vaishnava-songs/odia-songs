const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function syncSong() {
    const structuredContent = {
        "verses": [
            {
                "id": 1,
                "lyric": "(ଜୟ) ରାଧା-ମାଧବ (ଜୟ) କୁଞ୍ଜ-ବିହାରୀ\n(ଜୟ) ଗୋପୀ-ଜନ-ବଲ୍ଲଭ (ଜୟ) ଗିରି-ବର-ଧାରୀ ।।୧।।",
                "translation": "ଶ୍ରୀକୃଷ୍ଣ ହେଉଛନ୍ତି ଶ୍ରୀରାଧାଙ୍କ ପ୍ରିୟତମ। ସିଏ ବୃନ୍ଦାବନର ନିକୁଞ୍ଜରେ ଅନେକ ମନୋହର ପ୍ରେମ ଲୀଳା ପ୍ରଦର୍ଶନ କରନ୍ତି। ସିଏ ବ୍ରଜର ଗୋପୀମାନଙ୍କର ପ୍ରିୟତମ, ଗୋବର୍ଦ୍ଧନ ପର୍ବତର ଧାରଣକାରୀ।",
                "wordMeanings": [
                    { "word": "ଜୟ", "meaning": "ଜୟ ବା ସମସ୍ତ ମହିମା" },
                    { "word": "ରାଧା-ମାଧବ", "meaning": "ଶ୍ରୀରାଧା ଏବଂ ମାଧୁର୍ଯ୍ୟର ସ୍ଵାମୀ ଶ୍ରୀକୃଷ୍ଣ" },
                    { "word": "କୁଞ୍ଜ-ବିହାରୀ", "meaning": "ଯିଏ ବୃନ୍ଦାବନର ନିକୁଞ୍ଜରେ ପ୍ରେମ ଲୀଳା କରନ୍ତି" },
                    { "word": "ଗୋପୀ-ଜନ-ବଲ୍ଲଭ", "meaning": "ବ୍ରଜର ଗୋପାଳୁଣୀ (ଗୋପୀ) ମାନଙ୍କର ପ୍ରିୟତମ" },
                    { "word": "ଗିରି-ବର-ଧାରୀ", "meaning": "ଗୋବର୍ଦ୍ଧନ ପରି ଶ୍ରେଷ୍ଠ ପର୍ବତକୁ ଧାରଣ କରିଥିବା ପ୍ରଭୁ" }
                ]
            },
            {
                "id": 2,
                "lyric": "(ଜୟ) ଯଶୋଦା-ନନ୍ଦନ, (ଜୟ) ବ୍ରଜ-ଜନ-ରଞ୍ଜନ,\n(ଜୟ) ଯାମୁନ-ତୀର-ବନ-ଚାରୀ ।।୨।।",
                "translation": "ସିଏ ମାତା ଯଶୋଦାଙ୍କ ଅତି ଗେହ୍ଲା ପୁଅ। ସିଏ ସମସ୍ତ ବ୍ରଜବାସୀଙ୍କୁ ଆନନ୍ଦ ଦିଅନ୍ତି ଏବଂ ଯମୁନା ନଦୀ କୂଳରେ ଥିବା ବନରେ ସର୍ବଦା ବିଚରଣ କରନ୍ତି।",
                "wordMeanings": [
                    { "word": "ଯଶୋଦା-ନନ୍ଦନ", "meaning": "ମାତା ଯଶୋଦାଙ୍କ ପ୍ରିୟ ପୁତ୍ର" },
                    { "word": "ବ୍ରଜ-ଜନ-ରଞ୍ଜନ", "meaning": "ବ୍ରଜବାସୀମାନଙ୍କୁ ଆନନ୍ଦ ପ୍ରଦାନକାରୀ" },
                    { "word": "ଯାମୁନ-ତୀର-ବନ-ଚାରୀ", "meaning": "ଯିଏ ଯମୁନା ନଦୀ କୂଳରେ ଥିବା ବନରେ ବିଚରଣ କରନ୍ତି" }
                ]
            }
        ]
    };

    const { error } = await supabase
        .from('songs')
        .update({
            title: 'ଜୟ ରାଧା-ମାଧବ (Jaya Rādhā Mādhava)',
            title_odia: 'ଜୟ ରାଧା-ମାଧବ',
            title_english: 'Jaya Radha Madhava',
            author: 'Bhaktivinoda Ṭhākura',
            status: 'COMPLETED',
            verified: true,
            published: true,
            structured_content: structuredContent
        })
        .eq('id', 'song-jayaradhadhava');

    if (error) {
        console.error('Error syncing song:', error);
    } else {
        console.log('Successfully synced Jaya Radha Madhava!');
    }
}

syncSong();
