const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const songId = 'song-karmaphaleasesaba';
const structuredContent = {
    "verses": [
        {
            "id": 1,
            "lyric": "କର୍ମଫଳେ ଆସେ ସବ ନାନା ବେଶ ଧରି'\nବେଶେତେ ମଜିୟା ଥାକେ ଭୁଲିୟା ଶ୍ରୀ ହରି ।।",
            "translation": "ଜୀବ ନିଜର ପୂର୍ବ କର୍ମଫଳ ଅନୁଯାୟୀ ବିଭିନ୍ନ ପ୍ରକାରର ଶରୀର ଧାରଣ କରି ଏହି ସଂସାରକୁ ଆସେ। ଏହି ଶରୀରଗୁଡ଼ିକ ଆତ୍ମା ପାଇଁ କେବଳ ଏକ ବାହ୍ୟ ପୋଷାକ ସଦୃଶ ହୋଇଥିଲେ ମଧ୍ୟ, ଜୀବ ସେହି ଶରୀରର ସୁଖ-ଦୁଃଖରେ ଏତେ ମଜ୍ଜି ରହେ ଯେ ସେ ନିଜର ପ୍ରଭୁ ଶ୍ରୀ ହରିଙ୍କୁ ସମ୍ପୂର୍ଣ୍ଣ ଭୁଲିଯାଏ।",
            "wordMeanings": [
                { "word": "କର୍ମ-ଫଳେ", "meaning": "କର୍ମର ଫଳ ସ୍ୱରୂପ" },
                { "word": "ଆସେ", "meaning": "ଆସନ୍ତି" },
                { "word": "ସବ", "meaning": "ସମସ୍ତେ" },
                { "word": "ନାନା", "meaning": "ବିଭିନ୍ନ ପ୍ରକାରର" },
                { "word": "ବେଶ", "meaning": "ପୋଷାକ ବା ଶରୀର" },
                { "word": "ଧରି", "meaning": "ଧାରଣ କରି" },
                { "word": "ବେଶେତେ", "meaning": "ସେହି ପୋଷାକ ବା ଶରୀରରେ" },
                { "word": "ମଜିୟା ଥାକେ", "meaning": "ମଜ୍ଜି ରୁହନ୍ତି (ମୋହିତ ହୋଇ ରୁହନ୍ତି)" },
                { "word": "ଭୁଲିୟା", "meaning": "ଭୁଲିଯାଇ" },
                { "word": "ଶ୍ରୀ ହରି", "meaning": "ପରମେଶ୍ୱର ଶ୍ରୀ ହରି" }
            ]
        },
        {
            "id": 2,
            "lyric": "ଅତଏବ ମାୟା ତାରେ ଦେୟ ବହୁ ଦୁଖ\nଦୁଃଖେ ହାବୁ ଡୁବୁ ତବୁ ତାହେ ମାନେ ସୁଖ ।।",
            "translation": "ଫଳସ୍ୱରୂପ, ଭଗବାନଙ୍କ ମାୟା ଶକ୍ତି ସେହି ଜୀବକୁ ଅନେକ ଦୁଃଖ-କଷ୍ଟ ପ୍ରଦାନ କରେ। ଦୁଃଖ ସାଗରରେ ଜୀବ ଛଟପଟ ହେଉଥିଲେ ମଧ୍ୟ, ଯେତେବେଳେ ସେ ସାମାନ୍ୟ ଆଶ୍ୱସ୍ତି ପାଏ, ସେହି ଅବସ୍ଥାକୁ ହିଁ ସେ ଭୁଲବଶତଃ ‘ସୁଖ’ ବୋଲି ମନେକରେ।",
            "wordMeanings": [
                { "word": "ଅତଏବ", "meaning": "ସେଥିପାଇଁ" },
                { "word": "ମାୟା", "meaning": "ମାୟା ଶକ୍ତି" },
                { "word": "ତାରେ", "meaning": "ତାକୁ (ଜୀବକୁ)" },
                { "word": "ଦେୟ", "meaning": "ଦିଏ" },
                { "word": "ବହୂ", "meaning": "ବହୁତ" },
                { "word": "ଦୁଖ", "meaning": "ଦୁଃଖ / କଷ୍ଟ" },
                { "word": "ଦୁଃଖେ", "meaning": "ଦୁଃଖ ମଧ୍ୟରେ" },
                { "word": "ହାବୁ ଡୁବୁ", "meaning": "ବୁଡ଼ିବା ଓ ଭାସିବା (ଛଟପଟ ହେବା)" },
                { "word": "ତବୁ", "meaning": "ତଥାପି" },
                { "word": "ତାହେ", "meaning": "ସେହି ଅବସ୍ଥାରେ" },
                { "word": "ମାନେ", "meaning": "ମନେକରେ" },
                { "word": "ସୁଖ", "meaning": "ସୁଖ" }
            ]
        },
        {
            "id": 3,
            "lyric": "ଚିରରୋଗୀ ଦୁଃଖ-ଭୋଗୀ ଶଯ୍ୟାତେ ଶୁଇୟା\n‘ଭାଲ ଆଛି ଆଜ’ କହେ ହାସିୟା ହାସିୟା ।।",
            "translation": "ଜଣେ ବ୍ୟକ୍ତି ଯିଏ ଦୀର୍ଘ ଦିନ ଧରି ରୋଗଶଯ୍ୟାରେ ପଡ଼ି ରହି ଅସୀମ କଷ୍ଟ ଭୋଗ କରୁଥାଏ, ସେ ମଧ୍ୟ ଯଦି ସାମାନ୍ୟ ଆରାମ ପାଏ, ତେବେ କେହି ପଚାରିଲେ ହସି ହସି କହେ, \"ଆଜି ମୁଁ ବେଶ୍ ଭଲ ଅଛି!\"",
            "wordMeanings": [
                { "word": "ଚିରରୋଗୀ", "meaning": "ଦୀର୍ଘକାଳ ଧରି ରୋଗରେ ପୀଡ଼ିତ ବ୍ୟକ୍ତି" },
                { "word": "ଦୁଃଖ-ଭୋଗୀ", "meaning": "ଦୁଃଖ ଭୋଗ କରୁଥିବା ବ୍ୟକ୍ତି" },
                { "word": "ଶଯ୍ୟାତେ", "meaning": "ଶଯ୍ୟାରେ (ବିଛଣାରେ)" },
                { "word": "ଶୁଇୟା", "meaning": "ଶୋଇ ରହି" },
                { "word": "ଭାଲ ଆଛି ଆଜ", "meaning": "ଆଜି ମୁଁ ଭଲ ଅଛି" },
                { "word": "କହେ", "meaning": "କହେ" },
                { "word": "ହାସିୟା ହାସିୟା", "meaning": "ହସି ହସି" }
            ]
        },
        {
            "id": 4,
            "lyric": "ହାସି ପାୟ ତାର ‘ଭାଲ ଥାକାର’ କଥାୟ\nମାୟାବଦ୍ଧ ଜୀବେର ଭାଲ ଏଇଭାବେ ହୟ ।।",
            "translation": "ଏପରି ଦୁର୍ଦ୍ଦଶାରେ ଥାଇ ମଧ୍ୟ ସେ \"ଭଲ ଅଛି\" ବୋଲି କହିବା କଥା ଶୁଣି ହସ ଲାଗେ। ମାୟାର ବନ୍ଧନରେ ଛନ୍ଦି ହୋଇଥିବା ଜୀବର ସୁଖ ବା ଭଲ ରହିବାର ଅବସ୍ଥା ଠିକ୍ ଏହିପରି (କ୍ଷଣସ୍ଥାୟୀ ଓ ଭ୍ରମାତ୍ମକ) ହୋଇଥାଏ।",
            "wordMeanings": [
                { "word": "ହାସି ପାୟ", "meaning": "ହସ ଲାଗେ" },
                { "word": "ତାର", "meaning": "ତା’ର" },
                { "word": "ଭାଲ ଥାକାର", "meaning": "ଭଲ ରହିବାର" },
                { "word": "କଥାୟ", "meaning": "କଥା ଶୁଣି" },
                { "word": "ମାୟା-ବଦ୍ଧ", "meaning": "ମାୟାରେ ବନ୍ଧା ହୋଇଥିବା" },
                { "word": "ଜୀବେର", "meaning": "ଜୀବର" },
                { "word": "ଭାଲ", "meaning": "ଭଲ ଅବସ୍ଥା" },
                { "word": "ଏଇଭାବେ", "meaning": "ଏହିପରି" },
                { "word": "ହୟ", "meaning": "ହୋଇଥାଏ" }
            ]
        }
    ]
};

async function pushNewSong() {
    console.log(`Pushing new song ${songId} to Supabase...`);
    const { data, error } = await supabase
        .from('songs')
        .upsert({ 
            id: songId, 
            structured_content: structuredContent,
            title: 'କର୍ମଫଳେ ଆସେ ସବ (Karma Phale Ase Saba)',
            title_odia: 'କର୍ମଫଳେ ଆସେ ସବ ନାନା ବେଶ ଧରି',
            title_english: 'Karma Phale Ase Saba Nana Vesa Dhari',
            author: 'Srila Prabhupada',
            category: 'Songs',
            published: true
        });

    if (error) {
        console.error('❌ Update failed:', error.message);
    } else {
        console.log('✅ New song added successful in Supabase!');
    }
}

pushNewSong();
