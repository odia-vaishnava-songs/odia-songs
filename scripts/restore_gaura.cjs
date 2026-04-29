const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const GAURA_ARATI = {
    id: 'song-gauraarati',
    title: 'ଗୌର ଆରତି (Gaura Ārati)',
    title_odia: 'ଗୌର ଆରତି',
    title_english: 'Gaura Arati',
    category: 'Songs',
    type: 'html',
    author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
    tags: ['Temple'],
    published: true,
    status: 'COMPLETED',
    verified: true,
    structured_content: {
        "verses": [
            {
                "id": 1,
                "lyric": "(କିବା) ଜୟ ଜୟ ଗୋରାଚାନ୍ଦେର ଆରତିକୋ ଶୋଭା\nଜାହ୍ନବୀ-ତଟ-ବନେ ଜଗ-ମନ-ଲୋଭା ।।୧।।",
                "translation": "କି ସୁନ୍ଦର! ଗୋରାଚାନ୍ଦଙ୍କ (ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ) ଏହି ଆରତିର ଶୋଭା ଅତ୍ୟନ୍ତ ମନୋହର। ଜାହ୍ନବୀ (ଗଙ୍ଗା) ନଦୀ କୂଳରେ ଥିବା ବନରେ ଅନୁଷ୍ଠିତ ଏହି ଆରତି ସମଗ୍ର ଜଗତର ମନକୁ ମୋହିତ କରୁଛି।",
                "wordMeanings": []
            },
            {
                "id": 2,
                "lyric": "ଦକ୍ଷିଣେ ନିତାଇ-ଚାନ୍ଦ, ବାମେ ଗଦାଧର\nନିକଟେ ଅଦ୍ୱୈତ, ଶ୍ରୀନିବାସ ଛତ୍ର-ଧର ।।୨।।",
                "translation": "ପ୍ରଭୁଙ୍କ ଦକ୍ଷିଣରେ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁ ଏବଂ ବାମରେ ଶ୍ରୀ ଗଦାଧର ପଣ୍ଡିତ ବିରାଜମାନ। ନିକଟରେ ଶ୍ରୀ ଅଦ୍ୱୈତ ଆଚାର୍ଯ୍ୟ ଅଛନ୍ତି ଏବଂ ଶ୍ରୀନିବାସ ଠାକୁର (ଶ୍ରୀବାସ ପଣ୍ଡିତ) ପ୍ରଭୁଙ୍କ ମସ୍ତକ ଉପରେ ଛତ୍ର ଧାରଣ କରିଛନ୍ତି।",
                "wordMeanings": []
            },
            {
                "id": 3,
                "lyric": "ବସିୟାଛେ ଗୋରାଚାନ୍ଦ ରତ୍ନ-ସିଂହାସନେ\nଆରତି କରେନ ବ୍ରହ୍ମା-ଆଦି ଦେବ-ଗଣେ ।।୩।।",
                "translation": "ଶ୍ରୀ ଗୌରଚନ୍ଦ୍ର ଏକ ଦିବ୍ୟ ରତ୍ନ ସିଂହାସନରେ ବିରାଜମାନ କରିଛନ୍ତି। ବ୍ରହ୍ମାଙ୍କ ଆଦି କରି ସମସ୍ତ ଦେବଗଣ ତାଙ୍କର ଆରତି କରୁଛନ୍ତି।",
                "wordMeanings": []
            },
            {
                "id": 4,
                "lyric": "ନରହରି ଆଦି କରି ଚାମର ଦୁଲାୟ\nସଞ୍ଜୟ-ମୁକୁନ୍ଦ-ବାସୁ-ଘୋଷ ଆଦି ଗାୟ ।।୪।।",
                "translation": "ନରହରି ସରକାର ଠାକୁରଙ୍କ ଆଦି କରି ଭକ୍ତମାନେ ଚାମର ସେବା କରୁଛନ୍ତି। ସଞ୍ଜୟ, ମୁକୁନ୍ଦ ଏବଂ ବାସୁ ଘୋଷ ଆଦି ଭକ୍ତମାନେ ମଧୁର ସଂକୀର୍ତ୍ତନ କରୁଛନ୍ତି।",
                "wordMeanings": []
            },
            {
                "id": 5,
                "lyric": "ଶଙ୍ଖ ବାଜେ ଘଣ୍ଟା ବାଜେ ବାଜେ କରତାଳ\nମଧୁର ମୃଦଙ୍ଗ ବାଜେ ପରମ ରସାଳ ।।୫।।",
                "translation": "ଶଙ୍ଖ, ଘଣ୍ଟା ଏବଂ କରତାଳ ବାଜୁଛି। ମୃଦଙ୍ଗର ତାଳ ଅତ୍ୟନ୍ତ ମଧୁର ଓ ରସମୟ।",
                "wordMeanings": []
            },
            {
                "id": 6,
                "lyric": "ବହୁ-କୋଟି ଚନ୍ଦ୍ର ଜିନି ବଦନ ଉଜ୍ୱଳ\nଗଳଦେଶେ ବନମାଳା କରେ ଝଳମଳ ।।୬।।",
                "translation": "ପ୍ରଭୁଙ୍କ ମୁଖମଣ୍ଡଳ କୋଟି କୋଟି ଚନ୍ଦ୍ରଙ୍କ ଠାରୁ ଅଧିକ ଉଜ୍ୱଳ ଦେଖାଯାଉଛି। ତାଙ୍କ ବେକରେ ଥିବା ବନମାଳା ଅତି ସୁନ୍ଦର ଭାବେ ଝଲସୁଛି।",
                "wordMeanings": []
            },
            {
                "id": 7,
                "lyric": "ଶିବ-ଶୁକ-ନାରଦ ପ୍ରେମେ ଗଦ-ଗଦ\nଭକ୍ତି ବିନୋଦ ଦେଖେ ଗୌର-ପଦ ।।୭।।",
                "translation": "ଭଗବାନ ଶିବ, ଶୁକଦେବ ଗୋସ୍ୱାମୀ ଏବଂ ଦେବର୍ଷି ନାରଦ ପ୍ରେମରେ ଗଦଗଦ ହୋଇ ଏହି ଆରତି ଦର୍ଶନ କରୁଛନ୍ତି। ଭକ୍ତିବିନୋଦ ଠାକୁର ମଧ୍ୟ ପ୍ରଭୁଙ୍କର ସେହି ପବିତ୍ର ଚରଣ ଦର୍ଶନ କରୁଛନ୍ତି।",
                "wordMeanings": []
            }
        ]
    }
};

async function sync() {
    await supabase.from('songs').upsert(GAURA_ARATI);
    console.log('Gaura Arati Restored!');
}
sync();
