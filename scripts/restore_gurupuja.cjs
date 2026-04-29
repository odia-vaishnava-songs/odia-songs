const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const GURU_PUJA = {
    id: 'song-gurupuja',
    title: 'ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ (Śrī Guru Caraṇa Padma)',
    title_odia: 'ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ',
    title_english: 'Guru Puja',
    category: 'Songs',
    type: 'html',
    author: 'ଶ୍ରୀଲ ନରୋତ୍ତମ ଦାସ ଠାକୁର',
    tags: ['Temple'],
    published: true,
    status: 'COMPLETED',
    verified: true,
    structured_content: {
        "verses": [
            {
                "id": 1,
                "lyric": "ଶ୍ରୀ-ଗୁରୁ-ଚରଣ-ପଦ୍ମ, କେବଳ ଭକତି-ସଦ୍ମ\nବନ୍ଦୋ ମୁଇ ସାବଧାନ ମତେ।\nଯାହାର ପ୍ରସାଦେ ଭାଇ, ଏ ଭବ ତରିୟା ଯାଇ\nକୃଷ୍ଣ-ପ୍ରାପ୍ତି ହୟ ଯାହା ହୈତେ ।।୧।।",
                "translation": "ଶ୍ରୀ ଗୁରୁଦେବଙ୍କ ପଦ୍ମ ଚରଣ ହେଉଛି ଶୁଦ୍ଧ ଭକ୍ତିର ଏକମାତ୍ର ଆଧାର। ମୁଁ ଅତ୍ୟନ୍ତ ସାବଧାନତା ଓ ଭକ୍ତିର ସହ ତାଙ୍କର ବନ୍ଦନା କରୁଛି। ହେ ଭାଇ! ତାଙ୍କରି କୃପାରୁ ହିଁ ମନୁଷ୍ୟ ଏହି ଭବ ସାଗର ପାର ହୋଇପାରେ ଏବଂ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ପ୍ରାପ୍ତି କରେ।",
                "wordMeanings": []
            },
            {
                "id": 2,
                "lyric": "ଗୁରୁ-ମୁଖ-ପଦ୍ମ-ବାକ୍ୟ, ଚିତ୍ତେତେ କରିୟା ଐକ୍ୟ\nଆର ନା କରିହ ମନେ ଆଶା।\nଶ୍ରୀ-ଗୁରୁ-ଚରଣେ ରତି, ଏଇ ସେ ଉତ୍ତମ ଗତି\nଯେ ପ୍ରସାଦେ ପୂରେ ସର୍ବ ଆଶା ।।୨।।",
                "translation": "ଗୁରୁଦେବଙ୍କ ମୁଖନିସୃତ ବାଣୀକୁ ନିଜ ହୃଦୟରେ ସ୍ଥାନ ଦିଅ ଏବଂ ଅନ୍ୟ କୌଣସି ଆଶା ମନରେ ରଖ ନାହିଁ। ଗୁରୁଦେବଙ୍କ ଚରଣରେ ପ୍ରେମ ହେଉଛି ପରମ ଗତି, ଯାହାଙ୍କ କୃପାରୁ ସମସ୍ତ ଶୁଭ ଅଭିଳାଷ ପୂର୍ଣ୍ଣ ହୁଏ।",
                "wordMeanings": []
            },
            {
                "id": 3,
                "lyric": "ଚକ୍ଷୁ-ଦାନ ଦିଲୋ ଯେଇ, ଜନ୍ମେ ଜନ୍ମେ ପ୍ରଭୁ ସେଇ\nଦିବ୍ୟ-ଜ୍ଞାନ ହୃଦେ ପ୍ରକାଶିତୋ।\nପ୍ରେମ-ଭକ୍ତି ଯାହା ହୈତେ, ଅବିଦ୍ୟା ବିନାଶ ଯାତେ\nବେଦେ ଗାୟ ଯାହାର ଚରିତୋ ।।୩।।",
                "translation": "ଯିଏ ମତେ ଜ୍ଞାନରୂପୀ ଚକ୍ଷୁ ପ୍ରଦାନ କଲେ ଏବଂ ମୋ ହୃଦୟରେ ଦିବ୍ୟଜ୍ଞାନ ପ୍ରକାଶ କଲେ, ସେ ହିଁ ଜନ୍ମ ଜନ୍ମାନ୍ତର ପାଇଁ ମୋର ପ୍ରଭୁ। ତାଙ୍କରି କୃପାରୁ ପ୍ରେମଭକ୍ତି ଜାଗ୍ରତ ହୁଏ ଏବଂ ଅଜ୍ଞାନତା ବିନାଶ ହୁଏ। ବେଦଗୁଡ଼ିକରେ ମଧ୍ୟ ତାଙ୍କର ଚରିତ ଗାନ କରାଯାଇଛି।",
                "wordMeanings": []
            },
            {
                "id": 4,
                "lyric": "ଶ୍ରୀ-ଗୁରୁ କରୁଣା-ସିନ୍ଧୁ, ଅଧମ ଜନାର ବନ୍ଧୁ\nଲୋକନାଥ ଲୋକେର ଜୀବନ।\nହା ହା ପ୍ରଭୁ କରୋ ଦୟା, ଦେହୋ ମୋରେ ପଦ-ଛାୟା\nଏବେ ଯଶ ଘୁଷୁକ ତ୍ରିଭୁବନ ।।୪।।",
                "translation": "ହେ ଗୁରୁଦେବ! ଆପଣ କରୁଣାର ସାଗର ଏବଂ ଦୀନହୀନମାନଙ୍କର ବନ୍ଧୁ। ଆପଣ ସମସ୍ତ ଜଗତର ଜୀବନ ସ୍ୱରୂପ। ହେ ପ୍ରଭୁ! ମୋ ଉପରେ ଦୟା କରନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ଚରଣ ଛାୟାରେ ମୋତେ ସ୍ଥାନ ଦିଅନ୍ତୁ। ଆପଣଙ୍କର ଯଶ ତିନି ଭୁବନରେ ବ୍ୟାପିଯାଉ।",
                "wordMeanings": []
            }
        ]
    }
};

async function sync() {
    await supabase.from('songs').upsert(GURU_PUJA);
    console.log('Guru Puja Restored!');
}
sync();
