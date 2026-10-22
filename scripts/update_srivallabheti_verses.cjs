const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envFile = fs.readFileSync('.env', 'utf8');
const SUPABASE_URL = envFile.match(/VITE_SUPABASE_URL=([^\r\n]+)/)[1].trim();
const ANON_KEY = envFile.match(/VITE_SUPABASE_ANON_KEY=([^\r\n]+)/)[1].trim();
const supabase = createClient(SUPABASE_URL, ANON_KEY);

const correctedV24 = {
  id: 24,
  lyric: "ମା ଦ୍ରାକ୍ଷଂ କ୍ଷୀଣ-ପୁଣ୍ୟାନ୍ କ୍ଷଣମ୍ ଅପି ଭବତୋ ଭକ୍ତି-ହୀନାନ୍ ପଦାବ୍ଜେ ମା ଶ୍ରୌଷଂ ଶ୍ରାବ୍ୟ-ବନ୍ଧଂ ତବ ଚରିତମ୍ ଅପାସ୍ୟାନ୍ୟଦ୍-ଆଖ୍ୟାନ-ଜାତମ୍ ।\nମା ସ୍ମାର୍ଷଂ ମାଧବ ତ୍ୱାମ୍ ଅପି ଭୁବନ-ପତେ ଚେତସାପହ୍ନୁବାନାନ୍ ମା ଭୂବଂ ତ୍ୱତ୍-ସପର୍ଯ୍ୟା-ବ୍ୟତିକର-ରହିତୋ ଜନ୍ମ-ଜନ୍ମାନ୍ତରେଽପି ॥ ୨୪ ॥",
  translation: "ହେ ମାଧବ! ହେ ବିଶ୍ୱପତି! ଆପଣଙ୍କ ପାଦପଦ୍ମରେ ଭକ୍ତିହୀନ ହୋଇଥିବା ପୁଣ୍ୟହୀନ ନାସ୍ତିକମାନଙ୍କୁ ମୁଁ ଯେପରି ମୁହୂର୍ତ୍ତକ ପାଇଁ ମଧ୍ୟ ନ ଦେଖେଁ! ଆପଣଙ୍କ ପରମ ଶ୍ରବଣୀୟ ଦିବ୍ୟ ଲୀଳାଚରିତକୁ ଛାଡ଼ି ମୁଁ ଯେପରି ଅନ୍ୟ କୌଣସି ସାଂସାରିକ କଥା କଦାପି ଶ୍ରବଣ ନ କରେଁ! ଆପଣଙ୍କ ସର୍ବୋଚ୍ଚ ଅସ୍ତିତ୍ୱକୁ ଅସ୍ୱୀକାର କରୁଥିବା ଲୋକଙ୍କୁ ମୁଁ ଯେପରି କେବେ ସ୍ମରଣ ନ କରେଁ! ଏବଂ ଜନ୍ମ-ଜନ୍ମାନ୍ତରରେ ମଧ୍ୟ ମୁଁ ଯେପରି ଆପଣଙ୍କ ପୂଜାର୍ଚ୍ଚନା ଓ ଦିବ୍ୟ ସେବାରୁ କେବେହେଲେ ବଞ୍ଚିତ ନ ହୁଏଁ!",
  wordMeanings: [
    { word: "ମା ଦ୍ରାକ୍ଷମ୍", meaning: "ମୁଁ ଯେପରି କେବେ ନ ଦେଖେଁ" },
    { word: "କ୍ଷୀଣ-ପୁଣ୍ୟାନ୍", meaning: "ପୁଣ୍ୟହୀନ ଅଭକ୍ତମାନଙ୍କୁ" },
    { word: "କ୍ଷଣମ୍ ଅପି", meaning: "ମୁହୂର୍ତ୍ତକ ପାଇଁ ମଧ୍ୟ" },
    { word: "ଭବତଃ ଭକ୍ତି-ହୀନାନ୍ ପଦାବ୍ଜେ", meaning: "ଆପଣଙ୍କ ପାଦପଦ୍ମର ଭକ୍ତିରୁ ବଞ୍ଚିତ ବ୍ୟକ୍ତିମାନଙ୍କୁ" },
    { word: "ମା ଶ୍ରୌଷମ୍", meaning: "ମୁଁ ଯେପରି କେବେ ନ ଶୁଣେଁ" },
    { word: "ଶ୍ରାବ୍ୟ-ବନ୍ଧମ୍ ତବ ଚରିତମ୍ ଅପାସ୍ୟ", meaning: "ଆପଣଙ୍କ ଶ୍ରବଣଯୋଗ୍ୟ ପରମ ମଧୁର ଲୀଳାଚରିତକୁ ଛାଡ଼ି" },
    { word: "ଅନ୍ୟଦ୍-ଆଖ୍ୟାନ-ଜାତମ୍", meaning: "ଅନ୍ୟ କୌଣସି ସାଂସାରିକ ବାର୍ତ୍ତା ବା ଆଖ୍ୟାନ" },
    { word: "ମା ସ୍ମାର୍ଷମ୍", meaning: "ମୁଁ ଯେପରି କେବେ ମନେ ନ ପକାଏଁ" },
    { word: "ମାଧବ ଭୁବନ-ପତେ", meaning: "ହେ ମାଧବ, ହେ ସମଗ୍ର ବ୍ରହ୍ମାଣ୍ଡର ପତି" },
    { word: "ଚେତସା ଅପହ୍ନୁବାନାନ୍", meaning: "ଯେଉଁମାନେ ମନରେ ଆପଣଙ୍କୁ ଅସ୍ୱୀକାର କରନ୍ତି" },
    { word: "ମା ଭୂବମ୍", meaning: "ମୁଁ ଯେପରି ନ ହୁଏଁ" },
    { word: "ତ୍ୱତ୍-ସପର୍ଯ୍ୟା-ବ୍ୟତିକର-ରହିତଃ", meaning: "ଆପଣଙ୍କ ଚରଣସେବା ଓ ପୂଜାର୍ଚ୍ଚନାର ସୁଯୋଗରୁ ବଞ୍ଚିତ" },
    { word: "ଜନ୍ମ-ଜନ୍ମାନ୍ତରେ ଅପି", meaning: "ଜନ୍ମ-ଜନ୍ମାନ୍ତରରେ ମଧ୍ୟ" }
  ],
  status: "COMPLETED"
};

const correctedV26 = {
  id: 26,
  lyric: "ତତ୍ତ୍ୱଂ ବ୍ରୁବାଣାନି ପରଂ ପରସ୍ତାନ୍ ମଧୁ କ୍ଷରନ୍ତୀବ ମୁଦାବହାନି ।\nପ୍ରବର୍ତ୍ତୟ ପ୍ରାଞ୍ଜଳିର୍ ଅସ୍ମି ଜିହ୍ୱେ ନାମାନି ନାରାୟଣ-ଗୋଚରାଣି ॥ ୨୬ ॥",
  translation: "ହେ ମୋର ଜିହ୍ୱା! ମୁଁ ହାତଯୋଡ଼ି ତୁମ ଆଗରେ ବିନମ୍ର ପ୍ରାର୍ଥନା କରୁଛି—ତୁମେ ନିରନ୍ତର ପରମେଶ୍ୱର ଶ୍ରୀନାରାୟଣଙ୍କ ଦିବ୍ୟ ନାମସମୂହ ଉଚ୍ଚାରଣ କର । ଏହି ନାମସବୁ ସମସ୍ତଙ୍କ ଊର୍ଦ୍ଧ୍ୱରେ ଥିବା ପରମ ତତ୍ତ୍ୱକୁ ପ୍ରକାଶ କରନ୍ତି ଏବଂ ମହୁ ଝରାଇବା ଭଳି ହୃଦୟକୁ ଅପାର ଦିବ୍ୟ ଆନନ୍ଦ ପ୍ରଦାନ କରନ୍ତି ।",
  wordMeanings: [
    { word: "ତତ୍ତ୍ୱମ୍ ବ୍ରୁବାଣାନି", meaning: "ପରମ ତତ୍ତ୍ୱକୁ ପ୍ରକାଶ କରୁଥିବା" },
    { word: "ପରମ୍ ପରସ୍ତାତ୍", meaning: "ସମସ୍ତଙ୍କ ଊର୍ଦ୍ଧ୍ୱରେ ଥିବା ସର୍ବୋଚ୍ଚ ପରମସତ୍ୟ" },
    { word: "ମଧୁ କ୍ଷରନ୍ତି ଇବ", meaning: "ମଧୁ ଝରାଇବା ଭଳି ଅମୃତମୟ" },
    { word: "ମୁଦା-ଆବହାନି", meaning: "ପରମ ଆନନ୍ଦ ପ୍ରଦାନକାରୀ" },
    { word: "ପ୍ରବର୍ତ୍ତୟ", meaning: "ନିରନ୍ତର ଉଚ୍ଚାରଣ କର" },
    { word: "ପ୍ରାଞ୍ଜଳିଃ ଅସ୍ମି", meaning: "ମୁଁ ଯୋଡ଼ହସ୍ତରେ ପ୍ରାର୍ଥନା କରୁଛି" },
    { word: "ଜିହ୍ୱେ", meaning: "ହେ ମୋର ଜିହ୍ୱା" },
    { word: "ନାମାନି", meaning: "ଦିବ୍ୟ ନାମସମୂହକୁ" },
    { word: "ନାରାୟଣ-ଗୋଚରାଣି", meaning: "ଭଗବାନ ଶ୍ରୀନାରାୟଣଙ୍କ ସମ୍ବନ୍ଧିତ" }
  ],
  status: "COMPLETED"
};

async function updateAll() {
  // 1. Update scratch/srivallabhetivaradeti_complete.json
  if (fs.existsSync('scratch/srivallabhetivaradeti_complete.json')) {
    const raw = JSON.parse(fs.readFileSync('scratch/srivallabhetivaradeti_complete.json', 'utf8'));
    const verses = (raw.structured_content ? raw.structured_content.verses : raw.verses) || [];
    const idx24 = verses.findIndex(v => v.id === 24 || v.verseNumber === 24);
    const idx26 = verses.findIndex(v => v.id === 26 || v.verseNumber === 26);
    if (idx24 !== -1) verses[idx24] = correctedV24;
    if (idx26 !== -1) verses[idx26] = correctedV26;
    fs.writeFileSync('scratch/srivallabhetivaradeti_complete.json', JSON.stringify(raw, null, 2));
    console.log('✅ Updated scratch/srivallabhetivaradeti_complete.json');
  }

  // 2. Update Supabase
  console.log("Signing in as Admin...");
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: "daitariswain7@gmail.com",
    password: "pass-969200"
  });

  if (authError) {
    console.error("Auth error:", authError);
    process.exit(1);
  }

  const { data: existingSong, error: fetchErr } = await supabase
    .from('songs')
    .select('*')
    .eq('id', 'song-srivallabhetivaradeti')
    .single();

  if (fetchErr) {
    console.error("Fetch song error:", fetchErr);
    process.exit(1);
  }

  const sc = existingSong.structured_content;
  const vIdx24 = sc.verses.findIndex(v => v.id === 24 || v.verseNumber === 24);
  const vIdx26 = sc.verses.findIndex(v => v.id === 26 || v.verseNumber === 26);
  if (vIdx24 !== -1) sc.verses[vIdx24] = correctedV24;
  if (vIdx26 !== -1) sc.verses[vIdx26] = correctedV26;

  const { data: updateData, error: updateErr } = await supabase
    .from('songs')
    .update({ structured_content: sc, updated_at: new Date().toISOString() })
    .eq('id', 'song-srivallabhetivaradeti')
    .select();

  if (updateErr) {
    console.error("Supabase update error:", updateErr);
    process.exit(1);
  }
  console.log('✅ Successfully updated song-srivallabhetivaradeti in Supabase!');

  // 3. Update resources.ts
  const resPath = 'src/data/resources.ts';
  let resContent = fs.readFileSync(resPath, 'utf8');

  // Let's replace the block for verse 24 and verse 26 in resources.ts
  // Let's find lines 21715-21805 or parse and replace carefully
  const v24Start = resContent.indexOf('\"id\": 24,');
  const v25Start = resContent.indexOf('\"id\": 25,', v24Start);
  const v26Start = resContent.indexOf('\"id\": 26,', v25Start);
  const v27Start = resContent.indexOf('\"id\": 27,', v26Start);

  if (v24Start !== -1 && v25Start !== -1 && v26Start !== -1 && v27Start !== -1) {
    // Find the enclosing braces for 24
    const v24ObjStart = resContent.lastIndexOf('{', v24Start);
    const v24ObjEnd = resContent.lastIndexOf('}', v25Start);

    // Find enclosing braces for 26
    const v26ObjStart = resContent.lastIndexOf('{', v26Start);
    const v26ObjEnd = resContent.lastIndexOf('}', v27Start);

    // Format new JSON strings with proper indentation (36 spaces)
    const indent = '                                    ';
    const v24Formatted = JSON.stringify(correctedV24, null, 8)
      .split('\n')
      .map((line, idx) => (idx === 0 ? line : '                            ' + line))
      .join('\n');

    const v26Formatted = JSON.stringify(correctedV26, null, 8)
      .split('\n')
      .map((line, idx) => (idx === 0 ? line : '                            ' + line))
      .join('\n');

    // Replace 26 first (higher index)
    resContent = resContent.substring(0, v26ObjStart) + v26Formatted + resContent.substring(v26ObjEnd + 1);

    // Re-locate 24
    const newV24Start = resContent.indexOf('\"id\": 24,');
    const newV25Start = resContent.indexOf('\"id\": 25,', newV24Start);
    const newV24ObjStart = resContent.lastIndexOf('{', newV24Start);
    const newV24ObjEnd = resContent.lastIndexOf('}', newV25Start);

    resContent = resContent.substring(0, newV24ObjStart) + v24Formatted + resContent.substring(newV24ObjEnd + 1);

    fs.writeFileSync(resPath, resContent, 'utf8');
    console.log('✅ Successfully updated verses 24 and 26 in src/data/resources.ts!');
  } else {
    console.error('❌ Could not locate verse markers in resources.ts');
  }
}

updateAll();
