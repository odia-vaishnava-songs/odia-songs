const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const structuredContent = {
  "verses": [
    {
      "id": 1,
      "lyric": "ଯାର୍ ମୁଖେ ଭାଇ, ହରି-କଥା ନାଇ\nତାର୍ କାଛେ ତୁମି ଯେଓ ନା ।\nଯାର୍ ମୁଖେ ଦେଖି, ଭୁଲେ ଯାବେ ହରି\nତାର୍ ମୁଖପାନେ ଚେଓ ନା ।।",
      "translation": "ହେ ଭାଇ! ଯାହା ମୁହଁରେ ହରି-କଥା ନାହିଁ, ତା’ ପାଖକୁ ଯାଅ ନାହିଁ। ଯାହାର ମୁହଁ ଦେଖିଲେ ତୁମେ ପ୍ରଭୁ ହରିଙ୍କୁ ଭୁଲିଯିବ, ତା’ ମୁହଁ ଆଡ଼କୁ କେବେ ଚାହଁ ନାହିଁ।",
      "wordMeanings": [
        { "word": "ଯାର୍", "meaning": "ଯାହାର" },
        { "word": "ମୁଖେ", "meaning": "ପାଟିରେ / ମୁହଁରେ" },
        { "word": "ଭାଇ", "meaning": "ହେ ଭାଇ!" },
        { "word": "ହରି-କଥା", "meaning": "ଭଗବାନଙ୍କ କଥା" },
        { "word": "ନାଇ", "meaning": "ନାହିଁ" },
        { "word": "ତାର୍ କାଛେ", "meaning": "ତା’ ପାଖକୁ" },
        { "word": "ତୁମି", "meaning": "ତୁମେ" },
        { "word": "ଯେଓ ନା", "meaning": "ଯାଅ ନାହିଁ" },
        { "word": "ଦେଖି", "meaning": "ଦେଖିଲେ" },
        { "word": "ଭୁଲେ ଯାବେ", "meaning": "ଭୁଲିଯିବ" },
        { "word": "ମୁଖପାନେ", "meaning": "ମୁହଁ ଆଡ଼କୁ" },
        { "word": "ଚେଓ ନା", "meaning": "ଚାହଁ ନାହିଁ" }
      ]
    },
    {
      "id": 2,
      "lyric": "କଦିନ ରହିବେ, ଭବ ମାଝେ ଆର୍\nଅବିଲମ୍ବେ କର ଯାହା କରିବାର୍ ।\nପରେର୍ କଥାୟ କିବା ଆସେ ଯାୟ\nମିଛେ ଦାଗା ତୁମି ପେଓ ନା ।।",
      "translation": "ତୁମେ ଏହି ମାୟାରୂପୀ ସଂସାରରେ ଆଉ କେତେ ଦିନ ରହିବ? ଯାହା କରିବା ଉଚିତ୍ (ଭଗବଦ୍ ଭଜନ), ତାହା ବିନା ବିଳମ୍ବରେ କର। ଅନ୍ୟ କିଏ କଣ କହୁଛି ସେଥିରେ କଣ ଯାଏ ଆସେ? ବୃଥାରେ ମାୟାର ଆଘାତ ସହି କଷ୍ଟ ପାଅ ନାହିଁ।",
      "wordMeanings": [
        { "word": "କଦିନ", "meaning": "କେତେ ଦିନ" },
        { "word": "ରହିବେ", "meaning": "ରହିବ" },
        { "word": "ଭବ ମାଝେ", "meaning": "ଏହି ସଂସାର ଭିତରେ" },
        { "word": "ଅବିଲମ୍ବେ", "meaning": "ବିନା ବିଳମ୍ବରେ" },
        { "word": "କର", "meaning": "କର" },
        { "word": "ପରେର୍ କଥାୟ", "meaning": "ଅନ୍ୟର କଥାରେ" },
        { "word": "ମିଛେ", "meaning": "ମିଥ୍ୟାରେ / ବୃଥାରେ" },
        { "word": "ଦାଗା", "meaning": "କଷ୍ଟ / ଆଘାତ" }
      ]
    },
    {
      "id": 3,
      "lyric": "କେ ତୋମାକେ କବେ କି କଥା କହିବେ\nସେ କଥା ଭାବିଲେ ଆର୍ କି ଚଲିବେ ।\nବିପଦେ ସମ୍ପଦେ ରାଖିବେ ଯେ ପଦେ\nତାଁର୍ ପଦ କେନୋ ଭାବ ନା ।।",
      "translation": "କିଏ ତୁମକୁ କେତେବେଳେ କଣ କହୁଛି, ସେକଥା ଚିନ୍ତା କଲେ କଣ ଉଦ୍ଧାର ମିଳିବ? ଯେଉଁ ଚରଣ ତୁମକୁ ବିପଦ ଓ ସମ୍ପଦ ଉଭୟ ସମୟରେ ରକ୍ଷା କରିବେ, ସେହି ପ୍ରଭୁଙ୍କ ଚରଣ କଥା ତୁମେ କାହିଁକି ଚିନ୍ତା କରୁନାହଁ?",
      "wordMeanings": [
        { "word": "କେ", "meaning": "କିଏ" },
        { "word": "ତୋମାକେ", "meaning": "ତୁମକୁ" },
        { "word": "କବେ", "meaning": "କେବେ" },
        { "word": "ଭାବିଲେ", "meaning": "ଚିନ୍ତା କଲେ" },
        { "word": "ବିପଦେ", "meaning": "비ପଦରେ" },
        { "word": "ସମ୍ପଦେ", "meaning": "ସମ୍ପଦରେ" },
        { "word": "ତାଁର୍ ପଦ", "meaning": "ତାଙ୍କ ଚରଣକୁ" }
      ]
    },
    {
      "id": 4,
      "lyric": "(କେବଳ) ହରି କଥା କହ, ହରି ଗୁଣ ଗାଓ\nହରିନାମ ରସେ ସଦା ମତ୍ତ ହାଓ ।\nହରିନାମ ଗୀତି ଗାଓ ନିତି ନିତି\nଅନ୍ୟ କୋନୋ ଗୀତି ଗେଓ ନା ।।",
      "translation": "କେବଳ ହରି-କଥା କୁହ ଏବଂ ତାଙ୍କରି ଗୁଣ ଗାନ କର। ସର୍ବଦା ହରିନାମର ରସରେ ମଜ୍ଜି ରୁହ। ପ୍ରତିଦିନ ହରିନାମର ସଙ୍ଗୀତ ଗାଅ, ଅନ୍ୟ କୌଣସି ବୃଥା ଗୀତ ଗାଅ ନାହିଁ।",
      "wordMeanings": [
        { "word": "ହରି ଗୁଣ", "meaning": "ହରିଙ୍କ ଗୁଣ" },
        { "word": "ମତ୍ତ ହାଓ", "meaning": "ମତ୍ତ ହୋଇ ରୁହ" },
        { "word": "ନିତି ନିତି", "meaning": "ପ୍ରତିଦିନ" },
        { "word": "ଅନ୍ୟ କୋନୋ", "meaning": "ଅନ୍ୟ କୌଣସି" }
      ]
    }
  ]
};

async function upsertSong() {
  console.log('🚀 Upserting "Jar Mukhe Bhai Hari Katha Nai" to Supabase...');

  const { error } = await supabase
    .from('songs')
    .upsert({
      id: 'song-jarmukhebhai',
      title: 'ଯାର୍ ମୁଖେ ଭାଇ ହରି କଥା ନାଇ (Jar Mukhe Bhai Hari Katha Nai)',
      title_odia: 'ଯାର୍ ମୁଖେ ଭାଇ ହରି କଥା ନାଇ',
      title_english: 'Jar Mukhe Bhai Hari Katha Nai',
      category: 'Songs',
      type: 'html',
      description: 'ହରିଭକ୍ତ ଶୂନ୍ୟ ବ୍ୟକ୍ତିର ସଙ୍ଗ ତ୍ୟାଗ କରିବାକୁ ଏହି ଭଜନରେ ଉପଦେଶ ଦିଆଯାଇଛି |',
      author: 'Unknown',
      published: true,
      status: 'COMPLETED',
      structured_content: structuredContent
    }, { onConflict: 'id' });

  if (error) {
    console.error('❌ Failed to upsert song:', error.message);
  } else {
    console.log('✅ Successfully upserted to Supabase!');
  }
}

upsertSong();
