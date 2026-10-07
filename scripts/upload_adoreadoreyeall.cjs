const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

const songData = {
  id: "song-adoreadoreyeall",
  title: "ଏଡୋର୍ ଏଡୋର୍ ୟି ଅଲ୍ (Adore Adore Ye All)",
  title_odia: "ଏଡୋର୍ ଏଡୋର୍ ୟି ଅଲ୍",
  title_english: "Adore Adore Ye All",
  author: "Srila Prabhupada",
  category: "Songs",
  type: "html",
  status: "COMPLETED",
  verified: true,
  published: true,
  description: "ଶ୍ରୀଳ ପ୍ରଭୁପାଦଙ୍କ ଦ୍ୱାରା ୧୯୩୫ ମସିହାରେ ନିଜ ଗୁରୁଦେବ ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ଠାକୁରଙ୍କ ବ୍ୟାସପୂଜା ଉପଲକ୍ଷେ ରଚିତ ଅମୃତମୟ କବିତା ।",
  audio_url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sankarshan%20Das%20Adhikari%20Adore%20Adore%20Ye%20All.mp3",
  vocalist: "HG Sankarshan Das Adhikari",
  audio_versions: [
    { label: "HG Sankarshan Das Adhikari", url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sankarshan%20Das%20Adhikari%20Adore%20Adore%20Ye%20All.mp3" },
    { label: "Murari Prabhu (Vaishnavas)", url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Murari%20Adore%20Adore%20Ye%20All.mp3" },
    { label: "Vaishnavas (01)", url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Adore%20Adore%20Ye%20All.mp3" },
    { label: "Gayatri Dasa (02)", url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Adore%20Ye%20All%20with%20Gayatri%20Dasa.mp3" },
    { label: "HG Sukha Sagari Mataji (03)", url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Adore%20Adore%20Ye%20All%20By%20HG%20Sukha%20Sagari%20Mataji%20On%20June%2028th%202022.mp3" }
  ],
  structured_content: {
    id: "song-adoreadoreyeall",
    title: "ଏଡୋର୍ ଏଡୋର୍ ୟି ଅଲ୍ (Adore Adore Ye All)",
    title_odia: "ଏଡୋର୍ ଏଡୋର୍ ୟି ଅଲ୍",
    title_english: "Adore Adore Ye All",
    author: "Srila Prabhupada",
    category: "Songs",
    verses: [
      {
        id: 1,
        lyric: "ଏଡୋର୍, ଏଡୋର୍ ୟି ଅଲ୍ ଦ ହ୍ୟାପି ଡେ\nବ୍ଲେସ୍‌ଡ୍ ଦ୍ୟାନ୍ ହେଭେନ୍ ସ୍ୱିଟର୍ ଦ୍ୟାନ୍ ମେ ।\nହ୍ୱେନ୍ ହି ଆପିୟର୍ଡ୍ ଆଟ୍ ପୁରୀ ଦ ହୋଲି ପ୍ଲେସ୍,\nମାଇ ଲର୍ଡ୍ ଏଣ୍ଡ୍ ମାଷ୍ଟର୍ ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୧॥",
        translation: "ହେ ସମସ୍ତ ଜନଗଣ! ସେହି ପରମ ମଙ୍ଗଳମୟ ଓ ଆନନ୍ଦମୟ ଦିବସକୁ ସାଦରେ ବନ୍ଦନା କର, ଯାହା ସ୍ୱର୍ଗଠାରୁ ମଧ୍ୟ ଅଧିକ ଧନ୍ୟ ଏବଂ ବସନ୍ତ ଋତୁଠାରୁ ଅଧିକ ମଧୁର। ଯେଉଁ ପବିତ୍ର ଦିନରେ ଶ୍ରୀପୁରୁଷୋତ୍ତମ କ୍ଷେତ୍ର ପୁରୀ ଧାମରେ ମୋର ପରମ ପ୍ରଭୁ ଓ ଗୁରୁଦେବ ‘ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍’ (ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ଠାକୁର) ଆବିର୍ଭୂତ ହୋଇଥିଲେ।",
        wordMeanings: [
          { word: "ଏଡୋର୍", meaning: "ସାଦରେ ବନ୍ଦନା ଓ ପୂଜା କର" },
          { word: "ୟି ଅଲ୍", meaning: "ତୁମେ ସମସ୍ତେ" },
          { word: "ହ୍ୟାପି ଡେ", meaning: "ପରମ ଆନନ୍ଦମୟ ଦିବସ (ଆବିର୍ଭାବ ତିଥି)" },
          { word: "ବ୍ଲେସ୍‌ଡ୍", meaning: "ସ୍ୱର୍ଗଠାରୁ ମଧ୍ୟ ଅଧିକ ଧନ୍ୟ ଓ ପବିତ୍ର" },
          { word: "ସ୍ୱିଟର୍", meaning: "ଅତି ମଧୁର" },
          { word: "ପୁରୀ", meaning: "ପବିତ୍ର ଶ୍ରୀପୁରୁଷୋତ୍ତମ କ୍ଷେତ୍ର ପୁରୀ ଧାମ" },
          { word: "ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍", meaning: "ଦିବ୍ୟ କୃପାମୂର୍ତ୍ତି ଶ୍ରୀଳ ଗୁରୁଦେବ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 2,
        lyric: "ଓଃ! ମାଇ ମାଷ୍ଟର୍ ଦ ଇଭାଞ୍ଜେଲିକ୍ ଏଞ୍ଜେଲ୍ ।\nଗିଭ୍ ଅସ୍ ଦାଇ ଲାଇଟ୍ ଲାଇଟ୍ ଅପ୍ ଦାଇ କ୍ୟାଣ୍ଡଲ୍ ।\nଷ୍ଟ୍ରଗଲ୍ ଫର୍ ଏଗ୍‌ଜିଷ୍ଟେନ୍ସ ଏ ହ୍ୟୁମାନ୍ ରେସ୍ ।\nଦ ଓନ୍‌ଲି ହୋପ୍ ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୨॥",
        translation: "ହେ ମୋର ଗୁରୁଦେବ! ଆପଣ ଭଗବାନଙ୍କ ଦିବ୍ୟ ସନ୍ଦେଶର ବାହକ ଦେବଦୂତ ସଦୃଶ। ଆପଣଙ୍କ ଦିବ୍ୟ ଜ୍ଞାନର ଦୀପ ପ୍ରଜ୍ୱଳିତ କରି ଆମକୁ ଆଲୋକିତ କରନ୍ତୁ। ଜୀବନ ସଂଘର୍ଷରେ ଛଟପଟ ହେଉଥିବା ଏହି ମାନବ ସମାଜ ପାଇଁ କେବଳ ‘ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍’ (ଆପଣଙ୍କର ଦିବ୍ୟ କୃପା) ହିଁ ଏକମାତ୍ର ଆଶା ଓ ଭରସା।",
        wordMeanings: [
          { word: "ମାଇ ମାଷ୍ଟର୍", meaning: "ହେ ମୋର ପରମ ପ୍ରଭୁ ଓ ଗୁରୁଦେବ" },
          { word: "ଇଭାଞ୍ଜେଲିକ୍ ଏଞ୍ଜେଲ୍", meaning: "ଭଗବଦ୍-ସନ୍ଦେଶ ବାହକ ଦିବ୍ୟ ଦେବଦୂତ" },
          { word: "ଦାଇ ଲାଇଟ୍", meaning: "ଆପଣଙ୍କ ଦିବ୍ୟ ଜ୍ଞାନର ଆଲୋକ" },
          { word: "ଲାଇଟ୍ ଅପ୍", meaning: "ପ୍ରଜ୍ୱଳିତ କରନ୍ତୁ" },
          { word: "ଷ୍ଟ୍ରଗଲ୍ ଫର୍ ଏଗ୍‌ଜିଷ୍ଟେନ୍ସ", meaning: "ଅସ୍ତିତ୍ୱ ପାଇଁ ସଂଘର୍ଷରତ ମାନବ ସମାଜ" },
          { word: "ଦ ଓନ୍‌ଲି ହୋପ୍", meaning: "ଏକମାତ୍ର ଆଶାର ଆଲୋକ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 3,
        lyric: "ମିସ୍‌ଲେଡ୍ ଉଇ ଆର୍ ଅଲ୍ ଗୋଇଙ୍ଗ୍ ଏଷ୍ଟ୍ରେ,\nସେଭ୍ ଅସ୍ ଲର୍ଡ୍ ଆୱାର୍ ଫର୍ଭେଣ୍ଟ୍ ପ୍ରେ ।\nୱାଣ୍ଡର୍ ଦାଇ ୱେଜ୍ ଟୁ ଟର୍ଣ୍ଣ ଆୱାର୍ ଫେସ୍\nଏଡୋର୍ ଦାଇ ଫିଟ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୩॥",
        translation: "ଆମ୍ଭେମାନେ ମାୟା ଦ୍ୱାରା ପ୍ରତାରିତ ହୋଇ କୁପଥରେ ଭ୍ରମଣ କରୁଛୁ। ହେ ପ୍ରଭୁ! ଆମର ଏହି ଆକୁଳ ପ୍ରାର୍ଥନା ଶୁଣି ଆମକୁ ରକ୍ଷା କରନ୍ତୁ। ଆପଣଙ୍କର ଅଦ୍ଭୁତ କୃପାମୟ ଲୀଳା ଆମର ମୁଖକୁ ପରମେଶ୍ୱରଙ୍କ ଆଡ଼କୁ ଫେରାଇଦିଏ। ହେ ଦିବ୍ୟ କୃପାମୟ ପ୍ରଭୁ, ଆମ୍ଭେମାନେ ଆପଣଙ୍କ ଶ୍ରୀଚରଣ କମଳରେ ପ୍ରଣତି ଜଣାଉଛୁ।",
        wordMeanings: [
          { word: "ମିସ୍‌ଲେଡ୍", meaning: "ମାୟା ଦ୍ୱାରା ବିପଥଗାମୀ ଓ ଭ୍ରାନ୍ତ" },
          { word: "ଗୋଇଙ୍ଗ୍ ଏଷ୍ଟ୍ରେ", meaning: "କୁମାର୍ଗରେ ଭଟକୁଥିବା" },
          { word: "ସେଭ୍ ଅସ୍", meaning: "ଆମକୁ ଉଦ୍ଧାର କରନ୍ତୁ" },
          { word: "ଫର୍ଭେଣ୍ଟ୍ ପ୍ରେ", meaning: "ଆକୁଳ ପ୍ରାର୍ଥନା" },
          { word: "ୱାଣ୍ଡର୍ ଦାଇ ୱେଜ୍", meaning: "ଆପଣଙ୍କ ଅଲୌକିକ କୃପାମୟ ଉପାୟ" },
          { word: "ଟର୍ଣ୍ଣ ଆୱାର୍ ଫେସ୍", meaning: "ଆମ ମନକୁ ଭଗବାନଙ୍କ ଆଡ଼କୁ ଫେରାଇବା" },
          { word: "ଏଡୋର୍ ଦାଇ ଫିଟ୍", meaning: "ଆପଣଙ୍କ ଶ୍ରୀଚରଣରେ ପ୍ରଣାମ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 4,
        lyric: "ଫରଗଟନ୍ କୃଷ୍ଣ ଉଇ ଫଲେନ୍ ସୋଲ୍ସ,\nପେଇଙ୍ଗ୍ ମୋଷ୍ଟ୍ ହେଭି ଦ ଇଲ୍ୟୁଜନ୍ସ ଟୋଲ୍ ।\nଡାର୍କନେସ୍ ଏରାଉଣ୍ଡ୍ ଅଲ୍ ଅନଟ୍ରେସ୍ ।\nଦ ଓନ୍‌ଲି ହୋପ୍ ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୪॥",
        translation: "ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ଭୁଲିଯାଇ ଆମ୍ଭେ ପତିତ ଜୀବମାନେ ମାୟାର ଭୟଙ୍କର ଶାସ୍ତି ଭୋଗୁଛୁ। ଚାରିଆଡ଼େ ଅଜ୍ଞାନତାର ଘୋର ଅନ୍ଧକାର ଏବଂ କୌଣସି ଉଦ୍ଧାରର ଉପାୟ ଦେଖାଯାଉନାହିଁ। ଏହି ଘୋର ଅବସ୍ଥାରେ କେବଳ ‘ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍’ (ଶ୍ରୀଳ ଗୁରୁଦେବଙ୍କ ଦିବ୍ୟ କୃପା) ହିଁ ଏକମାତ୍ର ଆଶ୍ରୟ।",
        wordMeanings: [
          { word: "ଫରଗଟନ୍ କୃଷ୍ଣ", meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ଭୁଲିଯାଇଥିବା" },
          { word: "ଫଲେନ୍ ସୋଲ୍ସ", meaning: "ପତିତ ଜୀବାତ୍ମାଗଣ" },
          { word: "ଇଲ୍ୟୁଜନ୍ସ ଟୋଲ୍", meaning: "ମାୟାର ଭାରୀ ଶୁଳ୍କ ବା ଯାତନା" },
          { word: "ଡାର୍କନେସ୍ ଏରାଉଣ୍ଡ୍", meaning: "ଚତୁର୍ଦ୍ଦିଗରେ ଘନ ଅନ୍ଧକାର" },
          { word: "ଅନଟ୍ରେସ୍", meaning: "ଉଦ୍ଧାରର ବାଟ ନଦିଶିବା" }
        ],
        status: "COMPLETED"
      },
      {
        id: 5,
        lyric: "ମେସେଜ୍ ଅଫ୍ ସର୍ଭିସ୍ ଦାଉ ହାଷ୍ଟ୍ ବ୍ରଟ୍,\nଏ ହେଲ୍‌ଥ୍‌ଫୁଲ୍ ଲାଇଫ୍ ଏଜ୍ ଚୈତନ୍ୟ ରଟ୍ ।\nଅନ୍‌ନୋନ୍ ଟୁ ଅଲ୍ ଇଟ୍ସ ଫୁଲ୍ ଅଫ୍ ବ୍ରେସ୍ ।\nଦ୍ୟାଟ୍ସ ୟୋର୍ ଗିଫ୍ଟ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୫॥",
        translation: "ଆପଣ ଭଗବତ୍-ଭକ୍ତି ଓ ସେବାର ପବିତ୍ର ସନ୍ଦେଶ ଆଣିଛନ୍ତି, ଯାହା ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ଦ୍ୱାରା ପ୍ରଦତ୍ତ ଏକ ପୂର୍ଣ୍ଣ ଆଧ୍ୟାତ୍ମିକ ସୁସ୍ଥ ଜୀବନଶୈଳୀ। ସମସ୍ତଙ୍କ ପାଇଁ ଅଜ୍ଞାତ ଥିବା ଏହି ନବଜୀବନ ଅପାର ଆନନ୍ଦ ଓ ଶକ୍ତିରେ ପୂର୍ଣ୍ଣ, ଏବଂ ଏହା ଆପଣଙ୍କର ପରମ କୃପାମୟ ଦାନ।",
        wordMeanings: [
          { word: "ମେସେଜ୍ ଅଫ୍ ସର୍ଭିସ୍", meaning: "ଭଗବତ୍-ସେବାର ଦିବ୍ୟ ସନ୍ଦେଶ" },
          { word: "ହେଲ୍‌ଥ୍‌ଫୁଲ୍ ଲାଇଫ୍", meaning: "ଆଧ୍ୟାତ୍ମିକ ନିରୋଗ ଜୀବନ" },
          { word: "ଚୈତନ୍ୟ ରଟ୍", meaning: "ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ଦ୍ୱାରା ପ୍ରଦତ୍ତ" },
          { word: "ଫୁଲ୍ ଅଫ୍ ବ୍ରେସ୍", meaning: "ଦିବ୍ୟ ଶକ୍ତି ଓ ଉତ୍ସାହରେ ପରିପୂର୍ଣ୍ଣ" },
          { word: "ଦ୍ୟାଟ୍ସ ୟୋର୍ ଗିଫ୍ଟ୍", meaning: "ଏହା ଆପଣଙ୍କ ପରମ ଉପହାର" }
        ],
        status: "COMPLETED"
      },
      {
        id: 6,
        lyric: "ଏବ୍‌ସୋଲ୍ୟୁଟ୍ ଇଜ୍ ସେଣ୍ଟିୟେଣ୍ଟ୍ ଦାଉ ହାଷ୍ଟ୍ ପ୍ରୁଭ୍‌ଡ୍\nଇମ୍ପର୍ସନାଲ୍ କ୍ୟାଲାମିଟି ଦାଉ ହାଷ୍ଟ୍ ମୁଭ୍‌ଡ୍ ।\nଦିସ୍ ଗିଭ୍‌ସ୍ ଅସ୍ ଏ ଲାଇଫ୍ ଏନିଉ ଏଣ୍ଡ୍ ଫ୍ରେଶ୍ ।\nୱର୍‌ଶିପ୍ ଦାଇ ଫିଟ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୬॥",
        translation: "ପରମ ସତ୍ୟ ଭଗବାନ ନିରାକାର ନୁହଁନ୍ତି ବରଂ ଅନନ୍ତ ଚେତନାର ପରମ ପୁରୁଷ—ଏହା ଆପଣ ପ୍ରମାଣିତ କରିଛନ୍ତି। ନିର୍ବିଶେଷବାଦର ଘୋର ବିପତ୍ତିକୁ ଆପଣ ସମୂଳେ ଖଣ୍ଡନ କରିଛନ୍ତି। ଏହା ଆମ୍ଭମାନଙ୍କୁ ଏକ ନୂତନ ଏବଂ ପ୍ରେମମୟ ଦିବ୍ୟ ଜୀବନ ପ୍ରଦାନ କରିଛି। ହେ ଦିବ୍ୟ କୃପାମୂର୍ତ୍ତି, ଆମ୍େ ଆପଣଙ୍କ ଶ୍ରୀଚରଣ କମଳକୁ ପୂଜା କରୁଛୁ।",
        wordMeanings: [
          { word: "ଏବ୍‌ସୋଲ୍ୟୁଟ୍ ଇଜ୍ ସେଣ୍ଟିୟେଣ୍ଟ୍", meaning: "ପରମ ସତ୍ୟ ଭଗବାନ ହେଉଛନ୍ତି ଚେତନମୟ ବ୍ୟକ୍ତି (ନିରାକାର ନୁହଁନ୍ତି)" },
          { word: "ଇମ୍ପର୍ସନାଲ୍ କ୍ୟାଲାମିଟି", meaning: "ନିର୍ବିଶେଷବାଦର ବିପତ୍ତି ଓ ଭ୍ରାନ୍ତି" },
          { word: "ହାଷ୍ଟ୍ ମୁଭ୍‌ଡ୍", meaning: "ଆପଣ ଦୂର କରିଦେଇଛନ୍ତି" },
          { word: "ଏନିଉ ଏଣ୍ଡ୍ ଫ୍ରେଶ୍", meaning: "ନୂତନ ଓ ପବିତ୍ର ଜୀବନ" },
          { word: "ୱର୍‌ଶିପ୍ ଦାଇ ଫିଟ୍", meaning: "ଆପଣଙ୍କ ଶ୍ରୀଚରଣ ପୂଜନ କରୁଛି" }
        ],
        status: "COMPLETED"
      },
      {
        id: 7,
        lyric: "ହାଡ୍ ୟୁ ନଟ୍ କମ୍ ହୁ ହ୍ୟାଡ୍ ଟୋଲ୍ଡ୍\nଦ ମେସେଜ୍ ଅଫ୍ କୃଷ୍ଣ ଫୋର୍ସଫୁଲ୍ ଏଣ୍ଡ୍ ବୋଲ୍ଡ୍ ।\nଦ୍ୟାଟ୍ସ ୟୋର୍ ରାଇଟ୍ ୟୁ ହ୍ୟାଭ୍ ଦ ମେସ୍\nସେଭ୍ ମି ଏ ଫଲେନ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୭॥",
        translation: "ହେ ଗୁରୁଦେବ! ଯଦି ଆପଣ ଆବିର୍ଭୂତ ହୋଇନଥାନ୍ତେ, ତେବେ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଏହି ପରମ ସତ୍ୟ ସନ୍ଦେଶକୁ ଏତେ ନିର୍ଭୀକ ଓ ଶକ୍ତିଶାଳୀ ଭାବରେ କିଏ ପ୍ରଚାର କରିପାରିଥାନ୍ତା? ଏହା କେବଳ ଆପଣଙ୍କର ଅଧିକାର—ଆପଣ ମାୟାବାଦ ଦମନ ପାଇଁ ଜ୍ଞାନର ଗଦା ଧାରଣ କରିଛନ୍ତି। ହେ ଦିବ୍ୟ କୃପାମୟ ପ୍ରଭୁ, ମୋ ପରି ପତିତ ଅଧମକୁ କୃପାପୂର୍ବକ ରକ୍ଷା କରନ୍ତୁ।",
        wordMeanings: [
          { word: "ହାଡ୍ ୟୁ ନଟ୍ କମ୍", meaning: "ଯଦି ଆପଣ ଆସିନଥାନ୍ତେ" },
          { word: "ହୁ ହ୍ୟାଡ୍ ଟୋଲ୍ଡ୍", meaning: "କିଏ କହିପାରିଥାନ୍ତା" },
          { word: "ଫୋର୍ସଫୁଲ୍ ଏଣ୍ଡ୍ ବୋଲ୍ଡ୍", meaning: "ନିର୍ଭୟ ଏବଂ ଶକ୍ତିଶାଳୀ ଭାବରେ" },
          { word: "ୟୁ ହ୍ୟାଭ୍ ଦ ମେସ୍", meaning: "ଆପଣ ନ୍ୟାୟ ଓ ଜ୍ଞାନର ଗଦା ଧାରଣ କରିଛନ୍ତି" },
          { word: "ସେଭ୍ ମି ଏ ଫଲେନ୍", meaning: "ମୋ ପରି ପତିତକୁ ଉଦ୍ଧାର କରନ୍ତୁ" }
        ],
        status: "COMPLETED"
      },
      {
        id: 8,
        lyric: "ଦ ଲାଇନ୍ ଅଫ୍ ସର୍ଭିସ୍ ଏଜ୍ ଡ୍ରନ୍ ବାଇ ୟୁ\nଇଜ୍ ପ୍ଲିଜିଙ୍ଗ୍ ଏଣ୍ଡ୍ ହେଲ୍‌ଥି ଲାଇକ୍ ମର୍ଣ୍ଣିଙ୍ଗ୍ ଡିଉ ।\nଦ ଓଲ୍ଡେଷ୍ଟ୍ ଅଫ୍ ଅଲ୍ ବଟ୍ ଇନ୍ ନିଉ ଡ୍ରେସ୍\nମିରାକ୍ଲ୍ ଡନ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୮॥",
        translation: "ଆପଣଙ୍କ ଦ୍ୱାରା ପ୍ରଦର୍ଶିତ ଭକ୍ତି ସେବାର ମାର୍ଗ ପ୍ରଭାତର ନିର୍ମଳ ଶିଶିର ବିନ୍ଦୁ ପରି ଅତି ମନୋରମ, ଶାନ୍ତିଦାୟକ ଓ କଲ୍ୟାଣକର। ଏହି ସେବା ପଥ ଚିରନ୍ତନ ସନାତନ ହେଲେ ହେଁ, ଆପଣ ତାହାକୁ ଯୁଗୋପଯୋଗୀ ନବୀନ ବେଶରେ ସମଗ୍ର ବିଶ୍ୱରେ ପ୍ରକାଶ କରି ଏକ ଅଲୌକିକ ଚମତ୍କାର ସୃଷ୍ଟି କରିଛନ୍ତି। ହେ ଦିବ୍ୟ କୃପାମୂର୍ତ୍ତି, ଆପଣଙ୍କ ଶ୍ରୀଚରଣରେ ମୋର କୋଟି କୋଟି ପ୍ରଣାମ!",
        wordMeanings: [
          { word: "ଲାଇନ୍ ଅଫ୍ ସର୍ଭିସ୍", meaning: "ଭକ୍ତିମୟ ସେବାର ପଥ" },
          { word: "ଡ୍ରନ୍ ବାଇ ୟୁ", meaning: "ଆପଣଙ୍କ ଦ୍ୱାରା ନିର୍ଦ୍ଧାରିତ" },
          { word: "ପ୍ଲିଜିଙ୍ଗ୍ ଏଣ୍ଡ୍ ହେଲ୍‌ଥି", meaning: "ଆନନ୍ଦଦାୟକ ଓ ପରମ କଲ୍ୟାଣକାରୀ" },
          { word: "ଲାଇକ୍ ମର୍ଣ୍ଣିଙ୍ଗ୍ ଡିଉ", meaning: "ପ୍ରଭାତର ଶୁଦ୍ଧ ଶିଶିର ବିନ୍ଦୁ ପରି" },
          { word: "ଦ ଓଲ୍ଡେଷ୍ଟ୍ ଅଫ୍ ଅଲ୍", meaning: "ଚିରନ୍ତନ ସନାତନ ଧର୍ମ" },
          { word: "ଇନ୍ ନିଉ ଡ୍ରେସ୍", meaning: "ଆଧୁନିକ ଯୁଗୋପଯୋଗୀ ପରିପାଟୀରେ" },
          { word: "ମିରାକ୍ଲ୍ ଡନ୍", meaning: "ଅଲୌକିକ ଚମତ୍କାର ସମ୍ପାଦନ କଲେ" }
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
  console.log("Upserting 'Adore Adore Ye All' to Supabase...");

  const { data, error } = await supabase
    .from('songs')
    .upsert(songData, { onConflict: 'id' })
    .select();

  if (error) {
    console.error("Upsert failed:", error);
    process.exit(1);
  }

  console.log("✅ Successfully saved to Supabase:", data[0]?.id);
}

upload();
