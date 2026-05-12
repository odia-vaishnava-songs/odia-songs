const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function addJayaSacinandana() {
    const songId = 'song-jayasacinandanasuramunivandana';
    const songData = {
        id: songId,
        title: 'ଜୟ ଶଚୀନନ୍ଦନ ସୁର ମୁନି ବନ୍ଦନ (Jaya Sacinandana Sura Muni Vandana)',
        title_odia: 'ଜୟ ଶଚୀନନ୍ଦନ ସୁର ମୁନି ବନ୍ଦନ',
        title_english: 'Jaya Sacinandana Sura Muni Vandana',
        description: 'ଶ୍ରୀ ବି. ଆର. ଶ୍ରୀଧର ଦେବ ଗୋସ୍ୱାମୀଙ୍କ ବିରଚିତ ଶ୍ରୀ ଶଚୀନନ୍ଦନ ବନ୍ଦନା |',
        author: 'B.R. Sridhara Deva Goswami',
        category: 'Songs',
        published: true,
        status: 'COMPLETED',
        updated_at: new Date().toISOString(),
        structured_content: {
            "verses": [
                {
                    "id": 1,
                    "lyric": "ଜୟ ଶଚୀନନ୍ଦନ ସୁର-ମୁନି-ବନ୍ଦନ, ଭବ-ଭୟ-ଖଣ୍ଡନ ଜୟୋ ହେ\nଜୟ ହରି-କୀର୍ତ୍ତନ ନର୍ତ୍ତନା ବର୍ତ୍ତନ, କଳିମଳ-କର୍ତ୍ତନ ଜୟୋ ହେ ।।",
                    "translation": "ଶଚୀମାତାଙ୍କ ପୁତ୍ର ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କର ଜୟ ହେଉ, ଯାହାଙ୍କୁ ଦେବତା ଓ ମୁନିମାନେ ବନ୍ଦନା କରନ୍ତି ଏବଂ ଯିଏ ସଂସାରର ଭୟ ଦୂର କରନ୍ତି। ସେହି ହରି-କୀର୍ତ୍ତନର ଜୟ ହେଉ, ଯାହାର ନୃତ୍ୟ ଓ ଗାନ କଳିଯୁଗର ସମସ୍ତ ପାପକୁ ବିନାଶ କରିଦିଏ।",
                    "wordMeanings": [
                        { "word": "ଜୟ", "meaning": "ଜୟ ହେଉ" },
                        { "word": "ଶଚୀନନ୍ଦନ", "meaning": "ଶଚୀମାତାଙ୍କ ପୁତ୍ର" },
                        { "word": "ସୁର-ମୁନି-ବନ୍ଦନ", "meaning": "ଦେବତା ଓ ମୁନିମାନଙ୍କ ଦ୍ୱାରା ବନ୍ଦିତ" },
                        { "word": "ଭବ-ଭୟ-ଖଣ୍ଡନ", "meaning": "ସଂସାରର ଭୟ ନାଶକାରୀ" },
                        { "word": "ହରି-କୀର୍ତ୍ତନ", "meaning": "ହରିଙ୍କ ନାମ ସଂକୀର୍ତ୍ତନ" },
                        { "word": "ନର୍ତ୍ତନା ବର୍ତ୍ତନ", "meaning": "ନୃତ୍ୟର ଉଲ୍ଲାସ" },
                        { "word": "କଳିମଳ-କର୍ତ୍ତନ", "meaning": "କଳିଯୁଗର ପାପ ନାଶକାରୀ" }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ନୟନ-ପୁରନ୍ଦର ବିଶ୍ୱରୂପ ସ୍ନେହଧର, ବିଶ୍ୱମ୍ଭର ବିଶ୍ୱେର କଲ୍ୟାଣ\nଜୟ ଲକ୍ଷ୍ମୀ-ବିଷ୍ଣୁପ୍ରିୟା ବିଶ୍ୱମ୍ଭର ପ୍ରିୟହିୟା, ଜୟ ପ୍ରିୟ କିଙ୍କର ଈଶାନ ।।",
                    "translation": "ମହାପ୍ରଭୁ ସମସ୍ତଙ୍କ ଚକ୍ଷୁକୁ ଆନନ୍ଦ ପ୍ରଦାନ କରନ୍ତି। ସେ ବିଶ୍ୱରୂପଙ୍କ ଅତି ସ୍ନେହର ଭାଇ ଏବଂ ସମଗ୍ର ବିଶ୍ୱର କଲ୍ୟାଣକାରୀ। ମହାପ୍ରଭୁଙ୍କ ପ୍ରିୟା ଲକ୍ଷ୍ମୀପ୍ରିୟା ଓ ବିଷ୍ଣୁପ୍ରିୟା ଦେବୀଙ୍କର ଜୟ ହେଉ ଏବଂ ତାଙ୍କର ସେବକ ଈଶାନଙ୍କର ମଧ୍ୟ ଜୟ ହେଉ।",
                    "wordMeanings": [
                        { "word": "ନୟନ-ପୁରନ୍ଦର", "meaning": "ଚକ୍ଷୁକୁ ଆନନ୍ଦ ଦେଉଥିବା" },
                        { "word": "ବିଶ୍ୱରୂପ ସ୍ନେହଧର", "meaning": "ବିଶ୍ୱରୂପଙ୍କ ପ୍ରିୟ ଭାଇ" },
                        { "word": "ବିଶ୍ୱମ୍ଭର", "meaning": "ବିଶ୍ୱମ୍ଭର (ମହାପ୍ରଭୁ)" },
                        { "word": "ବିଶ୍ୱେର କଲ୍ୟାଣ", "meaning": "ଜଗତର ମଙ୍ଗଳକାରୀ" },
                        { "word": "ଜୟ ଲକ୍ଷ୍ମୀ-ବିଷ୍ଣୁପ୍ରିୟା", "meaning": "ଲକ୍ଷ୍ମୀପ୍ରିୟା ଓ ବିଷ୍ଣୁପ୍ରିୟା ଦେବୀଙ୍କ ଜୟ" },
                        { "word": "ପ୍ରିୟହିୟା", "meaning": "ହୃଦୟର ପ୍ରିୟ" },
                        { "word": "କିଙ୍କର ଈଶାନ", "meaning": "ସେବକ ଈଶାନ" }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ଶ୍ରୀ ସୀତା-ଅଦ୍ୱୈତ-ରାୟ ମାଳିନୀ-ଶ୍ରୀବାସ ଜୟ, ଜୟ ଚନ୍ଦ୍ରଶେଖର ଆଚାର୍ଯ୍ୟ\nଜୟ ନିତ୍ୟାନନ୍ଦ ରାୟ ଗଦାଧର ଜୟ ଜୟ, ଜୟ ହରିଦାସ ନାମାଚାର୍ଯ୍ୟ ।।",
                    "translation": "ମାତା ସୀତା ଓ ଅଦ୍ୱୈତ ଆଚାର୍ଯ୍ୟ, ମାଳିନୀ ଦେବୀ ଓ ଶ୍ରୀବାସ ଠାକୁର ଏବଂ ଚନ୍ଦ୍ରଶେଖର ଆଚାର୍ଯ୍ୟଙ୍କର ଜୟ ହେଉ। ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ, ଗଦାଧର ପଣ୍ଡିତ ଏବଂ ନାମାଚାର୍ଯ୍ୟ ହରିଦାସ ଠାକୁରଙ୍କର ଜୟ ହେଉ।",
                    "wordMeanings": [
                        { "word": "ଶ୍ରୀ ସୀତା-ଅଦ୍ୱୈତ-ରାୟ", "meaning": "ସୀତା ଠାକୁରାଣୀ ଓ ଅଦ୍ୱୈତ ଆଚାର୍ଯ୍ୟ" },
                        { "word": "ମାଳିନୀ-ଶ୍ରୀବାସ", "meaning": "ମାଳିନୀ ଦେବୀ ଓ ଶ୍ରୀବାସ ପଣ୍ଡିତ" },
                        { "word": "ଚନ୍ଦ୍ରଶେଖର ଆଚାର୍ଯ୍ୟ", "meaning": "ଚନ୍ଦ୍ରଶେଖର ଆଚାର୍ଯ୍ୟ" },
                        { "word": "ନିତ୍ୟାନନ୍ଦ ରାୟ", "meaning": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
                        { "word": "ଗଦାଧର", "meaning": "ଗଦାଧର ପଣ୍ଡିତ" },
                        { "word": "ହରିଦାସ ନାମାଚାର୍ଯ୍ୟ", "meaning": "ନାମାଚାର୍ଯ୍ୟ ହରିଦାସ ଠାକୁର" }
                    ]
                },
                {
                    "id": 4,
                    "lyric": "ମୁରାରି ମୁକୁନ୍ଦ ଜୟ ପ୍ରେମନିଧି ମହାଶୟ, ଜୟ ଯତ ପ୍ରଭୁ ପାରିଷଦ\nବନ୍ଦି ସବାକାର ପାୟ ଅଧମେରେ କୃପା ହୋୟ, ଭକ୍ତି ସପାର୍ଷଦ-ପ୍ରଭୁପାଦ ।।",
                    "translation": "ମୁରାରି ଗୁପ୍ତା, ମୁକୁନ୍ଦ ଦତ୍ତ ଏବଂ ମହାପ୍ରଭୁଙ୍କର ସମସ୍ତ ପାରିଷଦଙ୍କର ଜୟ ହେଉ। ଏହି ସମସ୍ତ ମହାତ୍ମାଙ୍କ ଚରଣ ବନ୍ଦନା କଲେ ଅଧମ ବ୍ୟକ୍ତି ମଧ୍ୟ କୃପା ଓ ଦିବ୍ୟ ପ୍ରେମ ପ୍ରାପ୍ତ ହୁଏ। ମୁଁ ସମସ୍ତ ଭକ୍ତ ଓ ପାରିଷଦଙ୍କ ସହ ଶ୍ରୀଳ ପ୍ରଭୁପାଦଙ୍କୁ ପ୍ରଣାମ କରୁଛି।",
                    "wordMeanings": [
                        { "word": "ମୁରାରି ମୁକୁନ୍ଦ", "meaning": "ମୁରାରି ଗୁପ୍ତା ଓ ମୁକୁନ୍ଦ ଦତ୍ତ" },
                        { "word": "ପ୍ରେମନିଧି ମହାଶୟ", "meaning": "ପ୍ରେମର ଭଣ୍ଡାର ସ୍ୱରୂପ ମହାପ୍ରଭୁ" },
                        { "word": "ପ୍ରଭୁ ପାରିଷଦ", "meaning": "ପ୍ରଭୁଙ୍କର ପାରିଷଦଗଣ" },
                        { "word": "ବନ୍ଦି ସବାକାର ପାୟ", "meaning": "ସମସ୍ତଙ୍କ ଚରଣ ବନ୍ଦନା କଲେ" },
                        { "word": "ଅଧମେରେ କୃପା ହୋୟ", "meaning": "ଅଧମ ଉପରେ କୃପା ହୁଏ" },
                        { "word": "ଭକ୍ତି ସପାର୍ଷଦ-ପ୍ରଭୁପାଦ", "meaning": "ପାରିଷଦଙ୍କ ସହ ପ୍ରଭୁପାଦଙ୍କ ଭକ୍ତି" }
                    ]
                }
            ]
        }
    };

    console.log(`Pushing updates for ${songId} to Supabase...`);
    
    const { error } = await supabase
        .from('songs')
        .upsert(songData, { onConflict: 'id' });

    if (error) {
        console.error('❌ Error updating DB:', error);
    } else {
        console.log('✅ Successfully synced Jaya Sacinandana to Supabase!');
    }
}

addJayaSacinandana();
