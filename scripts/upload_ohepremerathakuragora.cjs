const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const songData = {
  id: "song-ohepremerathakuragora",
  title: "ଓହେ ପ୍ରେମେର ଠାକୁର ଗୋରା (Ohe Premera Thākura Gorā)",
  title_odia: "ଓହେ ପ୍ରେମେର ଠାକୁର ଗୋରା",
  title_english: "Ohe Premera Thakura Gora",
  author: "Bhaktivinoda Thakura",
  category: "Songs",
  type: "html",
  status: "COMPLETED",
  verified: true,
  published: true,
  description: "ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ବିରଚିତ ପରମ କାରୁଣିକ ଶ୍ରୀମନ୍ ମହାପ୍ରଭୁଙ୍କ ଶ୍ରୀଚରଣରେ ଆତ୍ମସମର୍ପଣ ଓ ବିକଳ ପ୍ରାର୍ଥନା ।",
  audio_url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2F85AF1p9y5QbN.128.mp3",
  vocalist: "Vaishnavas",
  audio_versions: [
    {
      label: "Vaishnavas",
      url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2F85AF1p9y5QbN.128.mp3"
    }
  ],
  structured_content: {
    id: "song-ohepremerathakuragora",
    title: "ଓହେ ପ୍ରେମେର ଠାକୁର ଗୋରା (Ohe Premera Thākura Gorā)",
    title_odia: "ଓହେ ପ୍ରେମେର ଠାକୁର ଗୋରା",
    title_english: "Ohe Premera Thakura Gora",
    author: "Bhaktivinoda Thakura",
    category: "Songs",
    reference_url: "https://vsnectar.web.app/home/songs/Ohe%20Premera%20Thakura%20Gora_More%20Songs_7",
    verses: [
      {
        id: 1,
        lyric: "ଓହେ, ପ୍ରେମେର ଠାକୁର ଗୋରା\nପ୍ରାଣେର ଯାତନା କିବା କବ, ନାଥ! ହୟେଛି ଆପନ-ହାରା ।। ୧ ।।",
        translation: "ହେ ପ୍ରେମସ୍ୱରୂପ ଠାକୁର ଶ୍ରୀ ଗୌରସୁନ୍ଦର! ହେ ମୋର ନାଥ! ମୋ ପ୍ରାଣର ବେଦନା ଓ ଯନ୍ତ୍ରଣା ମୁଁ ଆପଣଙ୍କୁ କିପରି ବର୍ଣ୍ଣନା କରି କହିବି? ମୁଁ ନିଜର ପ୍ରକୃତ ସ୍ୱରୂପ ଓ ଆତ୍ମପରିଚୟ ହରାଇ ବସିଛି।",
        wordMeanings: [
          { word: "ଓହେ", meaning: "ହେ" },
          { word: "ପ୍ରେମେର ଠାକୁର", meaning: "ପ୍ରେମର ଠାକୁର (ଦିବ୍ୟ ପ୍ରେମଦାତା)" },
          { word: "ଗୋରା", meaning: "ଶ୍ରୀ ଗୌରସୁନ୍ଦର" },
          { word: "ପ୍ରାଣେର ଯାତନା", meaning: "ହୃଦୟର ବେଦନା ଓ ଯନ୍ତ୍ରଣା" },
          { word: "କିବା କବ", meaning: "କିପରି ବର୍ଣ୍ଣନା କରି କହିବି" },
          { word: "ନାଥ", meaning: "ହେ ପ୍ରଭୁ, ହେ ମୋର ସ୍ୱାମୀ" },
          { word: "ହୟେଛି", meaning: "ହୋଇଯାଇଛି" },
          { word: "ଆପନ-ହାରା", meaning: "ଆତ୍ମବିସ୍ମୃତ (ନିଜ ସ୍ୱରୂପ ଭୁଲିଯାଇଥିବା)" }
        ],
        status: "COMPLETED"
      },
      {
        id: 2,
        lyric: "କି ଆର ବଲିବ, ଯେ-କାଜେର ତୋରେ\nଏନେଛିଲେ, ନାଥ! ଜଗତେ ଆମାରେ,\nଏତ-ଦିନ ପରେ କହିତେ ସେ କଥା, ଖେଦେ ଦୁଃଖେ ହଇ ସାରା ।। ୨ ।।",
        translation: "ହେ ନାଥ! ଆଉ ଅଧିକ ମୁଁ କ’ଣ କହିବି? ଯେଉଁ କାର୍ଯ୍ୟ (ଭଗବଦ୍-ଭଜନ) ପାଇଁ ଆପଣ ମୋତେ ଏହି ଜଗତକୁ ପଠାଇଥିଲେ, ଏତେ ଦିନ ପରେ ଆଜି ସେ କଥା ସ୍ମରଣ କରି ମୁଁ ଘୋର ଅନୁତାପ ଓ ଦୁଃଖରେ ଭାଙ୍ଗି ପଡ଼ୁଛି।",
        wordMeanings: [
          { word: "କି ଆର ବଲିବ", meaning: "ଆଉ ଅଧିକ କ’ଣ କହିବି" },
          { word: "ଯେ-କାଜେର ତୋରେ", meaning: "ଯେଉଁ କାର୍ଯ୍ୟ ନିମନ୍ତେ (ଭଗବତ୍ ସେବା ପାଇଁ)" },
          { word: "ଏନେଛିଲେ", meaning: "ଆଣିଥିଲେ (ଜନ୍ମ ଦେଇଥିଲେ)" },
          { word: "ନାଥ", meaning: "ହେ ପ୍ରଭୁ" },
          { word: "ଜଗତେ", meaning: "ଏହି ସଂସାରକୁ" },
          { word: "ଆମାରେ", meaning: "ମୋତେ" },
          { word: "ଏତ-ଦିନ ପରେ", meaning: "ଏତେ ଦିନ ବିତିଯିବା ପରେ" },
          { word: "କହିତେ ସେ କଥା", meaning: "ସେହି କଥା କହିବାକୁ" },
          { word: "ଖେଦେ ଦୁଃଖେ", meaning: "ଅନୁତାପ ଏବଂ ଦୁଃଖରେ" },
          { word: "ହଇ ସାରା", meaning: "ସମ୍ପୂର୍ଣ୍ଣ ବ୍ୟଥିତ ଓ ନିଃଶେଷ ହୋଇଯାଉଛି" }
        ],
        status: "COMPLETED"
      },
      {
        id: 3,
        lyric: "ତୋମାର ଭଜନେ ନା ଜନ୍ମିଲ ରତି,\nଜଡ଼-ମୋହେ ମତ୍ତ ସଦା ଦୁର୍ମତି –\nବିଷୟୀର କାଛେ ଥେକେ ଥେକେ ଆମି ହଇନୁ ବିଷୟୀ-ପାରା ।। ୩ ।।",
        translation: "ଆପଣଙ୍କ ଭଜନ ସାଧନରେ ମୋର ତିଳେହେଲେ ଅନୁରାଗ ଜନ୍ମିଲା ନାହିଁ। ମୁଁ ସର୍ବଦା ଦୁର୍ମତି ହୋଇ ଜଡ଼ ଜାଗତିକ ମୋହରେ ମତ୍ତ ରହିଲି। ବିଷୟୀ (ଭୋଗୀ) ଲୋକଙ୍କ ସଙ୍ଗରେ ରହି ରହି ମୁଁ ମଧ୍ୟ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ସେମାନଙ୍କ ପରି ଏକ ବିଷୟୀ ପାଲଟିଗଲି।",
        wordMeanings: [
          { word: "ତୋମାର ଭଜନେ", meaning: "ଆପଣଙ୍କ ଭଜନ ଆରାଧନାରେ" },
          { word: "ନା ଜନ୍ମିଲ ରତି", meaning: "ଅନୁରାଗ ବା ପ୍ରୀତି ଉତ୍ପନ୍ନ ହେଲା ନାହିଁ" },
          { word: "ଜଡ଼-ମୋହେ", meaning: "ପ୍ରାକୃତିକ ମାୟା ଓ ମୋହରେ" },
          { word: "ମତ୍ତ", meaning: "ମାତି ରହିଥିବା" },
          { word: "ସଦା", meaning: "ସର୍ବଦା" },
          { word: "ଦୁର୍ମତି", meaning: "ଦୁଷ୍ଟ ବୁଦ୍ଧିସମ୍ପନ୍ନ" },
          { word: "ବିଷୟୀର କାଛେ", meaning: "ଭୋଗବାସନାରେ ଲିପ୍ତ ଲୋକମାନଙ୍କ ନିକଟରେ" },
          { word: "ଥେକେ ଥେକେ", meaning: "ରହି ରହି" },
          { word: "ଆମି ହଇନୁ", meaning: "ମୁଁ ହୋଇଗଲି" },
          { word: "ବିଷୟୀ-ପାରା", meaning: "ବିଷୟୀମାନଙ୍କ ସଦୃଶ (ଭୋଗୀ)" }
        ],
        status: "COMPLETED"
      },
      {
        id: 4,
        lyric: "କେ ଆମି, କେନ ଯେ ଏସେଛି ଏଖାନେ,\nସେ-କଥା କଖନ ନାହି ଭାବି ମନେ,\nକଖନ ଭୋଗେର, କଖନ ତ୍ୟାଗେର ଛଲନାୟ ମନ ନାଚେ ।। ୪ ।।",
        translation: "ମୁଁ କିଏ? କାହିଁକି ବା ମୁଁ ଏହି ସଂସାରକୁ ଆସିଛି? ଏହି କଥା ମନରେ କେବେହେଲେ ଚିନ୍ତା କଲି ନାହିଁ। କେତେବେଳେ ଜାଗତିକ ଭୋଗବାସନା, ତ ପୁଣି କେତେବେଳେ ମିଥ୍ୟା ତ୍ୟାଗର ପ୍ରତାରଣାରେ ମୋର ମନ ନାଚି ବୁଲୁଥିଲା।",
        wordMeanings: [
          { word: "କେ ଆମି", meaning: "ମୁଁ କିଏ (ମୋର ସ୍ୱରୂପ କ’ଣ)" },
          { word: "କେନ ଯେ", meaning: "କାହିଁକି ବା" },
          { word: "ଏସେଛି ଏଖାନେ", meaning: "ଏଠାକୁ (ଏହି ସଂସାରକୁ) ଆସିଛି" },
          { word: "ସେ-କଥା", meaning: "ସେହି କଥା" },
          { word: "କଖନ ନାହି ଭାବି", meaning: "କେବେହେଲେ ଭାବିନାହିଁ" },
          { word: "ମନେ", meaning: "ମନ ଭିତରେ" },
          { word: "କଖନ ଭୋଗେର", meaning: "କେତେବେଳେ ଭୋଗର" },
          { word: "କଖନ ତ୍ୟାଗେର", meaning: "କେତେବେଳେ ମିଥ୍ୟା ବୈରାଗ୍ୟ ବା ତ୍ୟାଗର" },
          { word: "ଛଲନାୟ", meaning: "କପଟତା ବା ପ୍ରତାରଣାରେ" },
          { word: "ମନ ନାଚେ", meaning: "ମନ ନାଚି ଉଠୁଛି" }
        ],
        status: "COMPLETED"
      },
      {
        id: 5,
        lyric: "କି ଗତି ହଇବେ କଖନ ଭାବି ନା,\nହରି-ଭକତେର କାଛେଓ ଯାଇ ନା,\nହରି-ବିମୁଖେର କୁ-ଲକ୍ଷଣ ଯତ ଆମାତେଇ ସବ ଆଛେ ।। ୫ ।।",
        translation: "ମୋର କି ଦଶା ବା ଗତି ହେବ, ସେ କଥା ମୁଁ କେବେହେଲେ ବିଚାର କଲି ନାହିଁ। ଶ୍ରୀହରିଙ୍କ ଭକ୍ତମାନଙ୍କ ପାଖକୁ ମଧ୍ୟ ମୁଁ କେବେ ଗଲି ନାହିଁ। ଭଗବାନଙ୍କ ପ୍ରତି ବିମୁଖ ଥିବା ଜୀବର ଯେତେ ସବୁ କୁଲକ୍ଷଣ ଥାଏ, ସେସବୁ ମୋ’ ଭିତରେ ହିଁ ବିଦ୍ୟମାନ ଅଛି।",
        wordMeanings: [
          { word: "କି ଗତି ହଇବେ", meaning: "କି ପରିଣାମ ବା ସଦ୍‌ଗତି ହେବ" },
          { word: "କଖନ ଭାବି ନା", meaning: "କେବେହେଲେ ଚିନ୍ତା କଲି ନାହିଁ" },
          { word: "ହରି-ଭକତେର", meaning: "ଶ୍ରୀହରିଙ୍କ ଶୁଦ୍ଧ ଭକ୍ତମାନଙ୍କ" },
          { word: "କାଛେଓ", meaning: "ନିକଟକୁ ମଧ୍ୟ" },
          { word: "ଯାଇ ନା", meaning: "ଗଲି ନାହିଁ" },
          { word: "ହରି-ବିମୁଖେର", meaning: "ଭଗବଦ୍-ବିମୁଖ ବ୍ୟକ୍ତିର" },
          { word: "କୁ-ଲକ୍ଷଣ ଯତ", meaning: "ଯେତେସବୁ ଅପଲକ୍ଷଣ ବା ଦୁର୍ଗୁଣ" },
          { word: "ଆମାତେଇ", meaning: "ମୋ ଭିତରେ ହିଁ" },
          { word: "ସବ ଆଛେ", meaning: "ସବୁକିଛି ବିଦ୍ୟମାନ ଅଛି" }
        ],
        status: "COMPLETED"
      },
      {
        id: 6,
        lyric: "ଶ୍ରୀ-ଗୁରୁ-କୃପାୟ ଭେଙ୍ଗେଛେ ସ୍ୱପନ,\nବୁଝେଛି ଏଖନ ତୁମି-ଇ ଆପନ,\nତବ ନିଜ-ଜନ ପରମ-ବାନ୍ଧବ ସଂସାର କାରାଗାରେ ।। ୬ ।।",
        translation: "ଶ୍ରୀ ଗୁରୁଦେବଙ୍କ ଅହେତୁକୀ କୃପାରୁ ଆଜି ମୋର ଅବିଦ୍ୟାରୂପୀ ମୋହ-ସ୍ୱପ୍ନ ଭାଙ୍ଗିଯାଇଛି। ଏବେ ମୁଁ ହୃଦୟଙ୍ଗମ କରିପାରିଛି ଯେ ଆପଣ ହିଁ ମୋର ଏକମାତ୍ର ଆପଣାର ପ୍ରଭୁ; ଏବଂ ଏହି ସଂସାରରୂପୀ କାରାଗାର ମଧ୍ୟରେ କେବଳ ଆପଣଙ୍କ ଶୁଦ୍ଧ ଭକ୍ତମାନେ ହିଁ ମୋର ପରମ ବନ୍ଧୁ।",
        wordMeanings: [
          { word: "ଶ୍ରୀ-ଗୁରୁ-କୃପାୟ", meaning: "ଶ୍ରୀ ଗୁରୁଦେବଙ୍କ ଦିବ୍ୟ କୃପାରୁ" },
          { word: "ଭେଙ୍ଗେଛେ ସ୍ୱପନ", meaning: "ମାୟାର ସ୍ୱପ୍ନ ଭାଙ୍ଗିଯାଇଛି" },
          { word: "ବୁଝେଛି ଏଖନ", meaning: "ଏବେ ମୁଁ ବୁଝିପାରିଛି" },
          { word: "ତୁମି-ଇ ଆପନ", meaning: "ଆପଣ ହିଁ ପ୍ରକୃତରେ ମୋର ନିଜର" },
          { word: "ତବ ନିଜ-ଜନ", meaning: "ଆପଣଙ୍କ ନିଜର ଶୁଦ୍ଧ ଭକ୍ତଗଣ" },
          { word: "ପରମ-ବାନ୍ଧବ", meaning: "ଶ୍ରେଷ୍ଠ ପରମ ହିତୈଷୀ ମିତ୍ର" },
          { word: "ସଂସାର କାରାଗାରେ", meaning: "ଜଡ଼ ସଂସାରରୂପୀ ବନ୍ଦୀଗୃହରେ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 7,
        lyric: "ଆନ ନା ଭଜିବ ଭକ୍ତ-ପଦ ବିନୁ,\nରାତୁଲ-ଚରଣେ ଶରଣ ଲଇନୁ,\nଉଦ୍ଧାରହୋ ନାଥ! ମାୟା-ଜାଲ ହ’ତେ ଏ ଦାସେର କେଶେ ଧୋ’ରେ ।। ୭ ।।",
        translation: "ଶୁଦ୍ଧ ଭକ୍ତଙ୍କ ଶ୍ରୀଚରଣ ବ୍ୟତୀତ ମୁଁ ଆଉ କାହାରିକୁ ଭଜନ କରିବି ନାହିଁ। ଆପଣଙ୍କ ରକ୍ତୋତ୍ପଳ ସଦୃଶ ଅରୁଣିମ କମଳ ଚରଣରେ ମୁଁ ଅନନ୍ୟ ଶରଣ ନେଇଛି। ହେ ନାଥ! ଏହି ଅଧମ ଦାସର କେଶ ଧରି ତାହାକୁ ଏହି ବିଷମ ମାୟାଜାଲରୁ ବଳପୂର୍ବକ ଉଦ୍ଧାର କରନ୍ତୁ!",
        wordMeanings: [
          { word: "ଆନ ନା ଭଜିବ", meaning: "ଅନ୍ୟ କାହାକୁ ଭଜିବି ନାହିଁ" },
          { word: "ଭକ୍ତ-ପଦ ବିନୁ", meaning: "ଭକ୍ତମାନଙ୍କ ଚରଣ ବିନା" },
          { word: "ରାତୁଲ-ଚରଣେ", meaning: "ରକ୍ତକମଳ ସଦୃଶ ଅରୁଣିମ ଶ୍ରୀଚରଣରେ" },
          { word: "ଶରଣ ଲଇନୁ", meaning: "ଆଶ୍ରୟ ଗ୍ରହଣ କଲି" },
          { word: "ଉଦ୍ଧାରହୋ ନାଥ", meaning: "ହେ ପ୍ରଭୁ! ଉଦ୍ଧାର କରନ୍ତୁ" },
          { word: "ମାୟା-ଜାଲ ହ’ତେ", meaning: "ମାୟାରୂପୀ କୁହୁକ ଜାଲରୁ" },
          { word: "ଏ ଦାସେର", meaning: "ଏହି ଅଧମ ଦାସର" },
          { word: "କେଶେ ଧୋ’ରେ", meaning: "ବାଳ ବା କେଶକୁ ଧରି (ଟାଣି ଆଣି)" }
        ],
        status: "COMPLETED"
      },
      {
        id: 8,
        lyric: "ପାତକୀରେ ତୁମି କୃପା କର ନାକି?\nଜଗାଇ-ମାଧାଇ ଛିଲ ଯେ ପାତକୀ,\nତାହାତେ ଜେନେଛି, ପ୍ରେମେର ଠାକୁର! ପାତକୀରେଓ ତାର ତୁମି ।। ୮ ।।",
        translation: "ଆପଣ କ’ଣ ପତିତ-ପାପୀମାନଙ୍କୁ କୃପା କରନ୍ତି ନାହିଁ? ଜଗାଇ ଓ ମାଧାଇ ଯେତେବେଳେ ଘୋର ପାପୀ ଥିଲେ, ଆପଣ ତ ସେମାନଙ୍କୁ କୃପା କରି ଉଦ୍ଧାର କଲେ। ସେଥିରୁ ମୁଁ ଜାଣିପାରିଛି, ହେ ପ୍ରେମର ଠାକୁର! ଆପଣ ଅତି ପାତକୀମାନଙ୍କୁ ମଧ୍ୟ ସହଜରେ ତାରିଦିଅନ୍ତି।",
        wordMeanings: [
          { word: "ପାତକୀରେ", meaning: "ପାପୀ ବା ପତିତ ଜନଙ୍କୁ" },
          { word: "ତୁମି କୃପା କର ନାକି", meaning: "ଆପଣ କ’ଣ କୃପା କରନ୍ତି ନାହିଁ" },
          { word: "ଜଗାଇ-ମାଧାଇ", meaning: "ଜଗାଇ ଓ ମାଧାଇ ନାମକ ଦୁଇ ମହାପାପୀ" },
          { word: "ଛିଲ ଯେ ପାତକୀ", meaning: "ଯେଉଁମାନେ ଘୋର ପାପୀ ଥିଲେ" },
          { word: "ତାହାତେ ଜେନେଛି", meaning: "ସେଥିରୁ ମୁଁ ଜାଣିପାରିଛି" },
          { word: "ପ୍ରେମେର ଠାକୁର", meaning: "ହେ ପ୍ରେମାବତାର ପ୍ରଭୁ ଗୌରାଙ୍ଗ" },
          { word: "ପାତକୀରେଓ", meaning: "ପତିତ ପାପୀମାନଙ୍କୁ ମଧ୍ୟ" },
          { word: "ତାର ତୁମି", meaning: "ଆପଣ ଉଦ୍ଧାର କରନ୍ତି" }
        ],
        status: "COMPLETED"
      },
      {
        id: 9,
        lyric: "ଆମି ଭକ୍ତି-ହୀନ, ଦୀନ, ଅକିଞ୍ଚନ –\nଅପରାଧୀ-ଶିରେ ଦାଓ ଦୁ’ ଚରଣ,\nତୋମାର ଅଭୟ ଶ୍ରୀ ଚରଣେ ଚିର – ଶରଣ ଲଇନୁ ଆମି ।। ୯ ।।",
        translation: "ମୁଁ ସମ୍ପୂର୍ଣ୍ଣ ଭକ୍ତିହୀନ, ଦୀନ ଏବଂ କପର୍ଦ୍ଦକଶୂନ୍ୟ ଅକିଞ୍ଚନ। ମୋ ପରି ଅପରାଧୀର ମସ୍ତକ ଉପରେ ଆପଣଙ୍କ ଦୁଇ ଶ୍ରୀଚରଣ କମଳ ରଖିଦିଅନ୍ତୁ। ଆପଣଙ୍କ ସମସ୍ତ ଭୟହାରୀ ଅଭୟ ଚରଣାରବିନ୍ଦରେ ମୁଁ ଚିରକାଳ ପାଇଁ ଶରଣାପନ୍ନ ହେଲି।",
        wordMeanings: [
          { word: "ଆମି", meaning: "ମୁଁ" },
          { word: "ଭକ୍ତି-ହୀନ", meaning: "ଭକ୍ତିବିହୀନ" },
          { word: "ଦୀନ", meaning: "ଅତ୍ୟନ୍ତ ଦୁଃଖୀ ଓ କାତର" },
          { word: "ଅକିଞ୍ଚନ", meaning: "କିଛିହେଲେ ସମ୍ବଳ ନଥିବା ନିଃସ୍ୱ" },
          { word: "ଅପରାଧୀ-ଶିରେ", meaning: "ମୋ ପରି ଅପରାଧୀର ମସ୍ତକରେ" },
          { word: "ଦାଓ ଦୁ’ ଚରଣ", meaning: "ଆପଣଙ୍କ ଦୁଇ ଶ୍ରୀଚରଣ ସ୍ଥାପନ କରନ୍ତୁ" },
          { word: "ତୋମାର", meaning: "ଆପଣଙ୍କର" },
          { word: "ଅଭୟ ଶ୍ରୀ ଚରଣେ", meaning: "ନିର୍ଭୟ ପ୍ରଦାନକାରୀ ଶ୍ରୀଚରଣ କମଳରେ" },
          { word: "ଚିର", meaning: "ଚିରଦିନ ପାଇଁ" },
          { word: "ଶରଣ ଲଇନୁ", meaning: "ଆଶ୍ରୟ ନେଲି" }
        ],
        status: "COMPLETED"
      }
    ]
  },
  updated_at: new Date().toISOString()
};

async function upload() {
  console.log("Signing in as Admin...");
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: "daitariswain7@gmail.com",
    password: "pass-969200"
  });

  if (authError) {
    console.error("Auth error:", authError);
    process.exit(1);
  }

  console.log("Logged in:", authData.user.email);
  console.log("Uploading song to Supabase...");

  const { data, error } = await supabase
    .from('songs')
    .upsert(songData, { onConflict: 'id' })
    .select();

  if (error) {
    console.error("Upsert failed:", error);
    process.exit(1);
  }

  console.log("✅ Successfully upserted into Supabase:", data[0]?.id);
}

upload();
