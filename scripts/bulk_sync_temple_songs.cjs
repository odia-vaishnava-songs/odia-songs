const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const TEMPLE_SONGS = [
    {
        id: 'song-shikshashtakam',
        title: 'ଶ୍ରୀ ଶିକ୍ଷାଷ୍ଟକମ୍ (Śrī Śikṣāṣṭakam)',
        title_odia: 'ଶ୍ରୀ ଶିକ୍ଷାଷ୍ଟକମ୍',
        title_english: 'Shikshashtakam',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ',
        tags: ['Temple'],
        published: true,
        status: 'COMPLETED',
        verified: true,
        structured_content: {
            "verses": [
                {
                    "id": 1,
                    "lyric": "ଚେତୋ-ଦର୍ପଣ-ମାର୍ଜନଂ ଭବ-ମହା-ଦାବାଗ୍ନି-ନିର୍ବାପଣଂ\nଶ୍ରେୟଃ-କୈରବ-ଚନ୍ଦ୍ରିକା-ବିତରଣଂ ବିଦ୍ୟା-ବଧୂ-ଜୀବନମ୍।\nଆନନ୍ଦାମ୍ବୁଧି-ବର୍ଦ୍ଧନଂ ପ୍ରତି-ପଦଂ ପୂର୍ଣ୍ଣାମୃତାସ୍ୱାଦନଂ\nସର୍ବାତ୍ମ-ସ୍ନପନଂ ପରଂ ବିଜୟତେ ଶ୍ରୀ-କୃଷ୍ଣ-ସଙ୍କୀର୍ତ୍ତନମ୍।।୧।।",
                    "translation": "ଶ୍ରୀକୃଷ୍ଣ ସଙ୍କୀର୍ତ୍ତନର ଜୟ ହେଉ, ଯାହା ହୃଦୟରୂପୀ ଦର୍ପଣକୁ ସଫା କରେ ଏବଂ ସଂସାରର ଭୟଙ୍କର ବଣିଆ ନିଆଁକୁ ନିଭାଇ ଦିଏ। ଏହା ମଙ୍ଗଳମୟ ଚନ୍ଦ୍ର କିରଣ ସଦୃଶ ଶ୍ୱେତ ପଦ୍ମକୁ ପ୍ରଫୁଲ୍ଲିତ କରେ। ଏହା ହିଁ ପାରମାର୍ଥିକ ଜ୍ଞାନର ଜୀବନ, ଏହା ଆନନ୍ଦର ସମୁଦ୍ରକୁ ବୃଦ୍ଧି କରେ ଏବଂ ପ୍ରତି ପଦକ୍ଷେପରେ ପୂର୍ଣ୍ଣ ଅମୃତର ସ୍ୱାଦ ଆସ୍ୱାଦନ କରାଏ, ଯାହା ସମ୍ପୂର୍ଣ୍ଣ ଆତ୍ମାକୁ ଶୀତଳ ଓ ପବିତ୍ର କରିଦିଏ।",
                    "wordMeanings": [
                        { "word": "ଚେତୋ-ଦର୍ପଣ-ମାର୍ଜନଂ", "meaning": "ହୃଦୟରୂପୀ ଦର୍ପଣର ସଫେଇ" },
                        { "word": "ଭବ-ମହା-ଦାବାଗ୍ନି", "meaning": "ସଂସାର ରୂପକ ବଣିଆ ନିଆଁ" },
                        { "word": "ନିର୍ବାପଣଂ", "meaning": "ଲିଭାଇବା" },
                        { "word": "ଆନନ୍ଦାମ୍ବୁଧି-ବର୍ଦ୍ଧନଂ", "meaning": "ଆନନ୍ଦ ସମୁଦ୍ରର ବୃଦ୍ଧି" }
                    ]
                }
            ]
        }
    },
    {
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
                    "wordMeanings": [
                        { "word": "ଜୟ ଜୟ", "meaning": "ଜୟ ହେଉ" },
                        { "word": "ଗୋରାଚାନ୍ଦେର", "meaning": "ଗୌରଚନ୍ଦ୍ରଙ୍କର" },
                        { "word": "ଆରତିକୋ ଶୋଭା", "meaning": "ଆରତିର ସୌନ୍ଦର୍ଯ୍ୟ" },
                        { "word": "ଜାହ୍ନବୀ-ତଟ-ବନେ", "meaning": "ଗଙ୍ଗା କୂଳରେ ଥିବା ବନରେ" }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ଦକ୍ଷିଣେ ନିତାଇ-ଚାନ୍ଦ, ବାମେ ଗଦାଧର\nନିକଟେ ଅଦ୍ୱୈତ, ଶ୍ରୀନିବାସ ଛତ୍ର-ଧର ।।୨।।",
                    "translation": "ପ୍ରଭୁଙ୍କ ଦକ୍ଷିଣରେ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁ ଏବଂ ବାମରେ ଶ୍ରୀ ଗଦାଧର ପଣ୍ଡିତ ବିରାଜମାନ। ନିକଟରେ ଶ୍ରୀ ଅଦ୍ୱୈତ ଆଚାର୍ଯ୍ୟ ଅଛନ୍ତି ଏବଂ ଶ୍ରୀନିବାସ ଠାକୁର (ଶ୍ରୀବାସ ପଣ୍ଡିତ) ପ୍ରଭୁଙ୍କ ମସ୍ତକ ଉପରେ ଛତ୍ର ଧାରଣ କରିଛନ୍ତି।",
                    "wordMeanings": [
                        { "word": "ଦକ୍ଷିଣେ", "meaning": "ଡାହାଣ ପଟେ" },
                        { "word": "ବାମେ", "meaning": "ବାମ ପଟେ" },
                        { "word": "ନିକଟେ", "meaning": "ପାଖରେ" },
                        { "word": "ଛତ୍ର-ଧର", "meaning": "ଛତା ଧରିଛନ୍ତି" }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ବସିୟାଛେ ଗୋରାଚାନ୍ଦ ରତ୍ନ-ସିଂହାସନେ\nଆରତି କରେନ ବ୍ରହ୍ମା-ଆଦି ଦେବ-ଗଣେ ।।୩।।",
                    "translation": "ଶ୍ରୀ ଗୌରଚନ୍ଦ୍ର ଏକ ଦିବ୍ୟ ରତ୍ନ ସିଂହାସନରେ ବିରାଜମାନ କରିଛନ୍ତି। ବ୍ରହ୍ମାଙ୍କ ଆଦି କରି ସମସ୍ତ ଦେବଗଣ ତାଙ୍କର ଆରତି କରୁଛନ୍ତି।",
                    "wordMeanings": [
                        { "word": "ବସିୟାଛେ", "meaning": "ବସିଛନ୍ତି" },
                        { "word": "ରତ୍ନ-ସିଂହାସନେ", "meaning": "ରତ୍ନ ସିଂହାସନରେ" },
                        { "word": "ଦେବ-ଗଣେ", "meaning": "ଦେବତାମାନେ" }
                    ]
                }
            ]
        }
    },
    {
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
                    "wordMeanings": [
                        { "word": "ଭକତି-ସଦ୍ମ", "meaning": "ଭକ୍ତିର ବାସସ୍ଥାନ" },
                        { "word": "ଏ ଭବ ତରିୟା ଯାଇ", "meaning": "ଏହି ସଂସାରରୁ ଉଦ୍ଧାର ପାଏ" },
                        { "word": "କୃଷ୍ଣ-ପ୍ରାପ୍ତି ହୟ", "meaning": "କୃଷ୍ଣଙ୍କୁ ପାଏ" }
                    ]
                }
            ]
        }
    },
    {
        id: 'song-gurvastakam',
        title: 'ଶ୍ରୀ ଗୁରୁ ଅଷ୍ଟକମ୍ (Śrī Gurv-aṣṭakam)',
        title_odia: 'ଶ୍ରୀ ଗୁରୁ ଅଷ୍ଟକମ୍',
        title_english: 'Gurvastakam',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର',
        tags: ['Temple'],
        published: true,
        status: 'COMPLETED',
        verified: true,
        structured_content: {
            "verses": [
                {
                    "id": 1,
                    "lyric": "ସଂସାର-ଦାବାନଲ-ଲୀଢ-ଲୋକ-\nତ୍ରାଣାୟ କାରୁଣ୍ୟ-ଘନାଘନତ୍ବମ୍।\nପ୍ରାପ୍ତସ୍ୟ କଲ୍ୟାଣ-ଗୁଣାର୍ଣ୍ଣବସ୍ୟ\nବନ୍ଦେ ଗୁରୋଃ ଶ୍ରୀ-ଚରଣାରବିନ୍ଦମ୍।।୧।।",
                    "translation": "ଯେପରି ଏକ ବିଶାଳ ମେଘ ଜଙ୍ଗଲର ନିଆଁକୁ ବର୍ଷା କରି ଲିଭାଇ ଦିଏ, ସେହିପରି ଗୁରୁଦେବ ସଂସାରର ଦୁଃଖ-ନିଆଁରେ ଜଳୁଥିବା ଜୀବମାନଙ୍କୁ ନିଜ କରୁଣା ରୂପକ ବର୍ଷା ଦ୍ୱାରା ରକ୍ଷା କରନ୍ତି। ମଙ୍ଗଳମୟ ଗୁଣର ସମୁଦ୍ର ସ୍ୱରୂପ ସେହି ଗୁରୁଦେବଙ୍କ ପଦ୍ମ ଚରଣରେ ମୁଁ ବନ୍ଦନା କରୁଛି।",
                    "wordMeanings": [
                        { "word": "ସଂସାର-ଦାବାନଲ", "meaning": "ସଂସାର ରୂପକ ବନ ଅଗ୍ନି" },
                        { "word": "ଲୀଢ-ଲୋକ", "meaning": "ଦୀପ୍ତ ହେଉଥିବା ଜୀବମାନେ" },
                        { "word": "ତ୍ରାଣାୟ", "meaning": "ରକ୍ଷା କରିବା ପାଇଁ" },
                        { "word": "କାରୁଣ୍ୟ-ଘନାଘନତ୍ବମ୍", "meaning": "କରୁଣା ରୂପକ ବୃହତ୍ ମେଘ" },
                        { "word": "ପ୍ରାପ୍ତସ୍ୟ", "meaning": "ପ୍ରାପ୍ତ କରିଥିବା" },
                        { "word": "କଲ୍ୟାଣ-ଗୁଣାର୍ଣ୍ଣବସ୍ୟ", "meaning": "ମଙ୍ଗଳମୟ ଗୁଣର ସମୁଦ୍ର" },
                        { "word": "ବନ୍ଦେ", "meaning": "ବନ୍ଦନା କରୁଛି" },
                        { "word": "ଗୁରୋଃ ଶ୍ରୀ-ଚରଣାରବିନ୍ଦମ୍", "meaning": "ଗୁରୁଦେବଙ୍କ ପଦ୍ମ ଚରଣ" }
                    ]
                }
            ]
        }
    }
];

async function syncTempleSongs() {
    console.log('Starting Temple Songs Sync...');
    
    for (const song of TEMPLE_SONGS) {
        console.log(`Syncing ${song.title_english}...`);
        const { error } = await supabase
            .from('songs')
            .upsert(song);
            
        if (error) {
            console.error(`Error syncing ${song.title_english}:`, error);
        } else {
            console.log(`Successfully synced ${song.title_english}!`);
        }
    }

    // Sync tags for existing songs
    const UPDATES = [
        { id: 'song-namastenarasimhaya', tags: ['Temple', 'Pranama'] },
        { id: 'song-jayanarasimhasrinarasimha', tags: ['Temple'] },
        { id: 'song-namonamahtulasi', tags: ['Temple', 'Pranama'] },
        { id: 'song-jayaradhadhava', tags: ['Temple'] }
    ];

    for (const update of UPDATES) {
        console.log(`Updating tags for ${update.id}...`);
        const { error } = await supabase
            .from('songs')
            .update({ tags: update.tags })
            .eq('id', update.id);
            
        if (error) {
            console.error(`Error updating ${update.id}:`, error);
        } else {
            console.log(`Successfully updated ${update.id}!`);
        }
    }

    console.log('Sync Complete!');
}

syncTempleSongs();
