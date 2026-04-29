const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function addNamasteNarasimhaya() {
    const songId = 'song-namastenarasimhaya';
    const structuredContent = {
    "verses": [
        {
            "id": 1,
            "lyric": "ନମସ୍ତେ ନରସିଂହାୟ\nପ୍ରହ୍ଲାଦାହ୍ଲାଦ-ଦାୟିନେ ।\nହିରଣ୍ୟକଶିପୋର୍ ବକ୍ଷଃ-\nଶିଳା-ଟଙ୍କ-ନଖାଳୟେ ।।୧।।",
            "translation": "ଭକ୍ତ ପ୍ରହ୍ଲାଦଙ୍କୁ ପରମ ଆନନ୍ଦ ଦେଉଥିବା ଭଗବାନ ନୃସିଂହଦେବଙ୍କୁ ମୁଁ ପ୍ରଣାମ କରୁଛି। ଯାହାଙ୍କ ନଖଗୁଡ଼ିକ ଅସୁର ହିରଣ୍ୟକଶିପୁର ପାଷାଣ ସଦୃଶ କଠୋର ଛାତିକୁ ଚିରିବା ପାଇଁ ତୀକ୍ଷ୍ଣ ନିହାଣ ପରି କାର୍ଯ୍ୟ କରନ୍ତି।",
            "wordMeanings": [
                {
                    "word": "ନମସ୍ତେ ନରସିଂହାୟ",
                    "meaning": "ଭଗବାନ ନୃସିଂହଙ୍କୁ ମୋର ନମସ୍କାର"
                },
                {
                    "word": "ପ୍ରହ୍ଲାଦାହ୍ଲାଦ-ଦାୟିନେ",
                    "meaning": "ଭକ୍ତ ପ୍ରହ୍ଲାଦଙ୍କୁ ଆନନ୍ଦ ପ୍ରଦାନକାରୀ"
                },
                {
                    "word": "ହିରଣ୍ୟକଶିପୋର୍ ବକ୍ଷଃ",
                    "meaning": "ହିରଣ୍ୟକଶିପୁର ଛାତି"
                },
                {
                    "word": "ଶିଳା-ଟଙ୍କ-ନଖାଳୟେ",
                    "meaning": "ପଥର ସଦୃଶ କଠୋର ଛାତିକୁ ବିଦୀର୍ଣ୍ଣ କରିବା ପାଇଁ ଯାହାଙ୍କ ନଖ ନିହାଣ ସଦୃଶ"
                }
            ]
        },
        {
            "id": 2,
            "lyric": "ଇତୋ ନୃସିଂହଃ ପରତୋ ନୃସିଂହୋ\nୟତୋ ୟତୋ ୟାମି ତତୋ ନୃସିଂହଃ ।\nବହିର୍ ନୃସିଂହୋ ହୃଦୟେ ନୃସିଂହୋ\nନୃସିଂହମ୍ ଆଦିଂ ଶରଣଂ ପ୍ରପଦ୍ୟେ ।।୨।।",
            "translation": "ଭଗବାନ ନୃସିଂହ ଏଠାରେ ଅଛନ୍ତି ଏବଂ ସେଠାରେ ମଧ୍ୟ ଅଛନ୍ତି। ମୁଁ ଯେଉଁଆଡ଼କୁ ଯାଏ, ସବୁଠି ତାଙ୍କୁ ହିଁ ଦେଖେ। ସେ ମୋର ବାହାରେ ଏବଂ ହୃଦୟ ଭିତରେ ମଧ୍ୟ ବିଦ୍ୟମାନ। ସେହି ସର୍ବବ୍ୟାପୀ ଓ ଆଦି ପୁରୁଷ ଶ୍ରୀ ନୃସିଂହଙ୍କ ଚରଣରେ ମୁଁ ଆତ୍ମସମର୍ପଣ କରୁଛି।",
            "wordMeanings": [
                {
                    "word": "ଇତୋ ନୃସିଂହଃ",
                    "meaning": "ଏଠାରେ ନୃସିଂହ"
                },
                {
                    "word": "ପରତୋ ନୃସିଂହୋ",
                    "meaning": "ସେଠାରେ ନୃସିଂହ"
                },
                {
                    "word": "ଯତୋ ଯତୋ ଯାମି",
                    "meaning": "ମୁଁ ଯେଉଁଆଡ଼କୁ ଯାଉଛି"
                },
                {
                    "word": "ତତୋ ନୃସିଂହଃ",
                    "meaning": "ସେଠାରେ ନୃସିଂହ ଅଛନ୍ତି"
                },
                {
                    "word": "ବହିର୍ ନୃସିଂହୋ",
                    "meaning": "ବାହାରେ ନୃସିଂହ"
                },
                {
                    "word": "ହୃଦୟେ ନୃସିଂହୋ",
                    "meaning": "ହୃଦୟ ଭିତରେ ନୃସିଂହ"
                },
                {
                    "word": "ନୃସିଂହମ୍ ଆଦିଂ",
                    "meaning": "ସମସ୍ତଙ୍କର ଆଦି ପ୍ରଭୁ ନୃସିଂହଙ୍କର"
                },
                {
                    "word": "ଶରଣଂ ପ୍ରପଦ୍ୟେ",
                    "meaning": "ମୁଁ ଶରଣାପନ୍ନ ହେଉଛି"
                }
            ]
        },
        {
            "id": 3,
            "lyric": "ତବ କର-କମଳ-ବରେ ନଖମ୍ ଅଦ୍ଭୁତ-ଶୃଙ୍ଗଂ\nଦଳିତ-ହିରଣ୍ୟକଶିପୁ-ତନୁ-ଭୃଙ୍ଗମ୍ ।\nକେଶବ ଧୃତ-ନରହରି-ରୂପ ଜୟ ଜଗଦୀଶ ହରେ ।।୩।।",
            "translation": "ହେ କେଶବ! ହେ ଜଗଦୀଶ୍ୱର ହରି! ଆପଣ ନରସିଂହ ରୂପ ଧାରଣ କରିଛନ୍ତି, ଆପଣଙ୍କର ଜୟ ହେଉ। ଆପଣ ନିଜର କୋମଳ ପଦ୍ମ ହସ୍ତରେ ଥିବା ଅତି ଭୟଙ୍କର ଓ ତୀକ୍ଷ୍ଣ ନଖ ଦ୍ୱାରା ହିରଣ୍ୟକଶିପୁର ଶରୀରକୁ ସେହିପରି ଚିରି ଦେଇଛନ୍ତି, ଯେପରି କେହି ଜଣେ ଏକ ଭ୍ରମରକୁ ଚିରି ଦିଏ।",
            "wordMeanings": [
                {
                    "word": "ତବ କର-କମଳ-ବରେ",
                    "meaning": "ଆପଣଙ୍କ ସୁନ୍ଦର ପଦ୍ମ ସଦୃଶ ହସ୍ତରେ"
                },
                {
                    "word": "ନଖମ୍ ଅଦ୍ଭୁତ-ଶୃଙ୍ଗଂ",
                    "meaning": "ନଖ ରୂପକ ଅଦ୍ଭୁତ ତୀକ୍ଷ୍ଣ ଶିଙ୍ଗ (ଅସ୍ତ୍ର)"
                },
                {
                    "word": "ଦଳିତ-ହିରଣ୍ୟକଶିପୁ-ତନୁ-ଭୃଙ୍ଗମ୍",
                    "meaning": "ହିରଣ୍ୟକଶିପୁର ଭ୍ରମର ସଦୃଶ ଶରୀରକୁ ବିଦୀର୍ଣ୍ଣ କରିଦେଇଛନ୍ତି"
                },
                {
                    "word": "କେଶବ ଧୃତ-ନରହରି-ରୂପ",
                    "meaning": "ହେ କେଶବ! ଯିଏ ନୃସିଂହ ରୂପ ଧାରଣ କରିଛନ୍ତି"
                },
                {
                    "word": "ଜୟ ଜଗଦୀଶ ହରେ",
                    "meaning": "ହେ ଜଗତର ନାଥ ଶ୍ରୀହରି, ଆପଣଙ୍କର ଜୟ ହେଉ"
                }
            ]
        }
    ]
};

    console.log(`Adding ${songId} to Supabase...`);
    
    const { error } = await supabase
        .from('songs')
        .upsert({ 
            id: songId,
            title: 'ନମସ୍ତେ ନରସିଂହାୟ (Namaste Narasimhaya)',
            category: 'Songs',
            type: 'html',
            author: 'Vyasadeva',
            structured_content: structuredContent,
            published: true,
            status: 'COMPLETED',
            updated_at: new Date().toISOString()
        });

    if (error) {
        console.error('❌ Error adding to DB:', error);
    } else {
        console.log('✅ Successfully added Namaste Narasimhaya to Supabase!');
    }
}

addNamasteNarasimhaya();
