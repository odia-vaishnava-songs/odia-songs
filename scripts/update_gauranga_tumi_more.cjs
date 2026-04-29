const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function updateGaurangaTumiMore() {
    const songId = 'song-gaurangatumimore';
    const structuredContent = {
        "verses": [
            {
                "id": 1,
                "lyric": "ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନ ଛାଡ଼ିହ ।\nଆପନ କରିୟା ରାଙ୍ଗା ଚରଣେ ରାଖିହ ॥",
                "translation": "ହେ ପ୍ରଭୁ ଗୌରାଙ୍ଗ! ଆପଣ ମୋତେ ନିଜର କରୁଣାରୁ ବଞ୍ଚିତ କରନ୍ତୁ ନାହିଁ। ମୋତେ ଆପଣଙ୍କର ନିଜର ସମ୍ପତ୍ତି ବୋଲି ମାନି ଆପଣଙ୍କ ସେହି ସୁନ୍ଦର ଲାଲ୍ ପାଦତଳେ ସ୍ଥାନ ଦିଅନ୍ତୁ।",
                "wordMeanings": [
                    {
                        "word": "ଗୌରାଙ୍ଗ",
                        "meaning": "ହେ ପ୍ରଭୁ ଗୌରାଙ୍ଗ!"
                    },
                    {
                        "word": "ତୁମି ମୋରେ",
                        "meaning": "ଆପଣ ମୋତେ"
                    },
                    {
                        "word": "ଦୟା ନା ଛାଡ଼ିହୋ",
                        "meaning": "କୃପା କରିବା ଛାଡ଼ନ୍ତୁ ନାହିଁ"
                    },
                    {
                        "word": "ଆପନ କରିୟା",
                        "meaning": "ନିଜର କରି"
                    },
                    {
                        "word": "ରାଙ୍ଗା ଚରଣେ ରାଖିହୋ",
                        "meaning": "ଆପଣଙ୍କ ସେହି ଆରକ୍ତ (ଲାଲ୍) ପାଦତଳେ ରଖନ୍ତୁ"
                    }
                ]
            },
            {
                "id": 2,
                "lyric": "ତୋମାର ଚରଣ ଲାଗି ସବ ତେୟାଗିଲୁ ।\nଶୀତଲ ଚରଣ ପାୟାଁ–ଶରଣ ଲଇନୁ ॥",
                "translation": "ଆପଣଙ୍କ ପାଦପଦ୍ମ ପାଇବା ଆଶାରେ ମୁଁ ସଂସାରର ସବୁକିଛି ତ୍ୟାଗ କରିଛି। ଏବେ ଆପଣଙ୍କ ସେହି ପରମ ଶାନ୍ତିଦାୟକ ଓ ଶୀତଳ ଚରଣରେ ମୁଁ ପୂର୍ଣ୍ଣ ରୂପେ ଶରଣ ନେଉଛି।",
                "wordMeanings": [
                    {
                        "word": "ତୋମାର ଚରଣ ଲାଗି",
                        "meaning": "ଆପଣଙ୍କ ଚରଣ ପ୍ରାପ୍ତି ପାଇଁ"
                    },
                    {
                        "word": "ସବ ତେୟାଗିଲୁ",
                        "meaning": "ମୁଁ ସବୁକିଛି ତ୍ୟାଗ କରିଛି"
                    },
                    {
                        "word": "ଶୀତଳ ଚରଣ ପାୟା",
                        "meaning": "ଶୀତଳ ପାଦପଦ୍ମ ପାଇ"
                    },
                    {
                        "word": "ଶରଣ ଲଇଲୁ",
                        "meaning": "ମୁଁ ଶରଣାପନ୍ନ ହୋଇଛି"
                    }
                ]
            },
            {
                "id": 3,
                "lyric": "ଏ କୁଲେ ଓ କୁଲେ ମୁଇଁ ଦିଲୁ ତିଲାଞ୍ଜଲି । \nରାଖିହ ଚରଣେ ମୋରେ ଆପନାର ବଲି ॥",
                "translation": "ମୋର ଏହି କୁଳ ବା ସେହି କୁଳ ପ୍ରତି ଆଉ କୌଣସି ମୋହ ନାହିଁ, ମୁଁ ସମସ୍ତ ସାଂସାରିକ ସମ୍ପର୍କକୁ ତିଳାଞ୍ଜଳି ଦେଇ ସାରିଛି। ମୋତେ ଆପଣଙ୍କର ନିଜର ଜଣେ ବୋଲି ସ୍ୱୀକାର କରି ଆପଣଙ୍କ ପାଦପଦ୍ମ ପାଖରେ ସ୍ଥାନ ଦିଅନ୍ତୁ।",
                "wordMeanings": [
                    {
                        "word": "ଏ କୁଲେ ଓ କୁଲେ",
                        "meaning": "ଏହି ବଂଶ ବା ସେହି ବଂଶରେ (ଇହକାଳ ବା ପରକାଳ)"
                    },
                    {
                        "word": "ମୁଞ୍ଜି ଦିଲୁ ତିଳାଞ୍ଜଳି",
                        "meaning": "ମୁଁ ସମ୍ପୂର୍ଣ୍ଣ ତିଳାଞ୍ଜଳି ଦେଇଛି (ତ୍ୟାଗ କରିଛି)"
                    },
                    {
                        "word": "ରାଖିହୋ ଚରଣେ ମୋରେ",
                        "meaning": "ମୋତେ ଆପଣଙ୍କ ପାଦତଳେ ରଖନ୍ତୁ"
                    },
                    {
                        "word": "ଆପନାର ବୋଲି",
                        "meaning": "ନିଜର ବୋଲି କହି"
                    }
                ]
            },
            {
                "id": 4,
                "lyric": "ବାସୁଦେବ ଘୋଷ ବଲେ ଚରଣେ ଧରିୟା । \nକୃପା କରି ରାଖ ମୋରେ ପଦଛାୟା ଦିୟା ॥",
                "translation": "ବାସୁଦେବ ଘୋଷ ପ୍ରଭୁଙ୍କ ପାଦତଳେ ପଡ଼ି କହୁଛନ୍ତି, \"ହେ ପ୍ରଭୁ! ମୁଁ ଆପଣଙ୍କ ପାଦକୁ ଦୃଢ଼ ଭାବେ ଧରିଛି, ଦୟାକରି ଆପଣଙ୍କ ପାଦପଦ୍ମର ସୁଶୀତଳ ଛାୟାରେ ମୋତେ ସର୍ବଦା ଆଶ୍ରୟ ଦିଅନ୍ତୁ।\"",
                "wordMeanings": [
                    {
                        "word": "ବାସୁଦେବ ଘୋଷେ ବୋଲେ",
                        "meaning": "ଭକ୍ତ ବାସୁଦେବ ଘୋଷ କହୁଛନ୍ତି"
                    },
                    {
                        "word": "ଚରଣେ ଧରିୟା",
                        "meaning": "ଆପଣଙ୍କ ପାଦକୁ ଧରି"
                    },
                    {
                        "word": "କୃପା କରି ରାଖୋ ମୋରେ",
                        "meaning": "କୃପା କରି ମୋତେ ରଖନ୍ତୁ"
                    },
                    {
                        "word": "ପଦ-ଛାୟା ଦିୟା",
                        "meaning": "ଆପଣଙ୍କ ପାଦର ଛାୟା ପ୍ରଦାନ କରି"
                    }
                ]
            }
        ]
    };

    console.log(`Pushing updates for ${songId} to Supabase...`);
    
    const { error } = await supabase
        .from('songs')
        .update({ 
            title: 'ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନ ଛାଡ଼ିହ (Gauranga Tumi More Doya Na Chadhio)',
            description: 'ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନ ଛାଡ଼ିହ — ବାସୁଦେବ ଘୋଷ ଙ୍କ ରଚନା',
            structured_content: structuredContent,
            updated_at: new Date().toISOString()
        })
        .eq('id', songId);

    if (error) {
        console.error('❌ Error updating DB:', error);
    } else {
        console.log('✅ Successfully updated Gauranga Tumi More in Supabase!');
    }
}

updateGaurangaTumiMore();
