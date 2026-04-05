const fs = require('fs');

const gopinathPart2 = {
  verses: [
    { id: 1, lyric: "ଗୋପୀନାଥ, ଘୁଚାଅ ସଂସାର ଜ୍ବାଲା ।\nଅବିଦ୍ୟା-ଯାତନା, ଆର ନାହି ସହେ,\nଜନମ-ମରଣ-ମାଲା ॥୧॥", translation: "ହେ ଗୋପୀନାଥ, ଦୟାକରି ଏହି ସାଂସାରିକ ଜୀବନର ଜ୍ୱାଳାକୁ ଶାନ୍ତ କରନ୍ତୁ। ମୁଁ ଏହି ଅଜ୍ଞାନତାର ଯନ୍ତ୍ରଣାକୁ ଆଉ ସହିପାରୁ ନାହିଁ। ଜନ୍ମ-ମୃତ୍ୟୁର ଏହି ମାଳା ବା ବୋଝକୁ ବୋହିବା ମୋ ପାଇଁ ଅସହ୍ୟ ହୋଇପଡ଼ିଛି।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ଘୁଚାଓ", meaning: "ଦୂର କରନ୍ତୁ/비ନାଶ କରନ୍ତୁ" }, { word: "ସଂସାର-ଜ୍ୱାଳା", meaning: "ସାଂସାରିକ ଦୁଃଖର ନିଆଁ" }, { word: "ଅବିଦ୍ୟା-ଯାତନା", meaning: "ଅଜ୍ଞାନତାର କଷ୍ଟ" }, { word: "ଆର", meaning: "ଏବଂ/ଆଉ" }, { word: "ନାହି ସହେ", meaning: "ସହ୍ୟ ହେଉନାହିଁ" }, { word: "ଜନମ-ମରଣ-ମାଳା", meaning: "ଜନ୍ମ-ମୃତ୍ୟୁର ଚକ୍ର (ମାଳା)।" } ] },
    { id: 2, lyric: "ଗୋପୀନାଥ, ଆମି ତ’ କାମେର ଦାସ\n비ଷୟ-ବାସନା, ଜାଗିଛେ ହୃଦୟେ,\nଫାନ୍ଦିଛେ କରମ ଫାଁସ ॥୨॥", translation: "ହେ ଗୋପୀନାଥ, ମୁଁ ପ୍ରକୃତରେ ବାସନାର ଜଣେ ସେବକ। ମୋ ହୃଦୟରେ ସବୁବେଳେ ସାଂସାରିକ ଭୋଗର ଇଚ୍ଛା ଜାଗ୍ରତ ହେଉଛି। ମୁଁ ନିଜ କର୍ମର ଫାଶରେ ବାନ୍ଧି ହୋଇ ରହିଛି।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ଆମି ତୋ'", meaning: "ମୁଁ ତ" }, { word: "କାମେର ଦାସ", meaning: "କାମନା ବା ବାସନାର ଦାସ" }, { word: "비ଷୟ-ବାସନା", meaning: "ସାଂସାରିକ ଭୋଗର ଇଚ୍ଛା" }, { word: "ଜାଗିଛେ", meaning: "ଜାଗ୍ରତ ହେଉଛି" }, { word: "ହୃଦୟେ", meaning: "ହୃଦୟରେ" }, { word: "ଫାନ୍ଦିଛେ", meaning: "ଛନ୍ଦି ହୋଇଛି" }, { word: "କରମ ଫାଂସେ", meaning: "କର୍ମର ଫାଶରେ।" } ] },
    { id: 3, lyric: "ଗୋପୀନାଥ, କବେ ବା ଜାଗିବ ଆମି ।\nକାମରୂପ ଅରି, ଦୂରେ ତେୟାଗିବ,\nହୃଦୟେ ସ୍ଫୁରିବେ ତୁମି ॥୩॥", translation: "ହେ ଗୋପୀନାଥ, ମୁଁ କେବେ ଜାଗ୍ରତ ହେବି? କେବେ ମୁଁ ଏହି କାମନା ରୂପକ ଶତ୍ରୁକୁ ନିଜଠାରୁ ଦୂରେଇ ଦେବି? କେବେ ତୁମେ ମୋ ହୃଦୟରେ ପ୍ରକଟ ହେବ?", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "କବେ ବା", meaning: "କେବେ?" }, { word: "ଜାଗିବୋ", meaning: "ଜାଗ୍ରତ ହେବି" }, { word: "ଆମି", meaning: "ମୁଁ" }, { word: "କାମ-ରୂପ ଅରି", meaning: "କାମନା ରୂପକ ଶତ୍ରୁ" }, { word: "ଦୂରେ ତେୟାଗିବୋ", meaning: "ଦୂରକୁ ତ୍ୟାଗ କରିବି" }, { word: "ହୃଦୟେ", meaning: "ହୃଦୟରେ" }, { word: "ସ୍ଫୁରିବେ", meaning: "ପ୍ରକଟ ହେବେ" }, { word: "ତୁମି", meaning: "ତୁମେ।" } ] },
    { id: 4, lyric: "ଗୋପୀନାଥ, ଆମି ତ’ ତୋମାର ଜନ ।\nତୋମାରେ ଛାଡ଼ିୟା, ସଂସାର ଭଜିନୁ, \nଭୁଲିୟା ଆପନ-ଧନ ॥୪॥", translation: "ହେ ଗୋପୀନାଥ, ମୁଁ ତ ତୁମରି ସେବକ। ମୁଁ ତୁମକୁ ଛାଡ଼ି ଏହି ଜନ୍ମ-ମୃତ୍ୟୁର ସଂସାରକୁ ଆପଣେଇ ନେଲି ଏବଂ ମୋର ପ୍ରକୃତ ସମ୍ପତ୍ତି (ତୁମର ଭକ୍ତି) କୁ ଭୁଲିଗଲି।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ଆମି ତୋ'", meaning: "ମୁଁ ତ" }, { word: "ତୋମାର ଜନ", meaning: "ତୁମର ଲୋକ/ସେବକ" }, { word: "ତୋମାରେ ଛାଡ଼ିୟା", meaning: "ତୁମକୁ ଛାଡ଼ି" }, { word: "ସଂସାର ଭଜିନୁ", meaning: "ସଂସାରକୁ ଆଦରି ନେଲି" }, { word: "ଭୁଲିୟା", meaning: "ଭୁଲିଯାଇ" }, { word: "ଆପନ ଧନ", meaning: "ନିଜର ପ୍ରକୃତ ସମ୍ପତ୍ତି।" } ] },
    { id: 5, lyric: "ଗୋପୀନାଥ ତୁମି ତ’ ସକଲି ଜାନ\nଆପନାର ଜନେ, ଦଣ୍ଡିୟା ଏଖନ,\nଶ୍ରୀଚରଣେ ଦେହ ସ୍ଥାନ ॥୫॥", translation: "ହେ ଗୋପୀନାଥ, ତୁମେ ସବୁକିଛି ଜାଣିଛ। ଦୟାକରି ଏହି ସେବକକୁ ତା'ର ଭୁଲ୍ ପାଇଁ ଦଣ୍ଡ ଦିଅନ୍ତୁ ଏବଂ ତା'ପରେ ନିଜ ଚରଣ ତଳେ ଟିକେ ସ୍ଥାନ ଦିଅନ୍ତୁ।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ତୁମି ତୋ'", meaning: "ତୁମେ ତ" }, { word: "ସକଲି ଜାନୋ", meaning: "ସବୁକିଛି ଜାଣିଛ" }, { word: "ଆପନାର ଜନେ", meaning: "ନିଜର ସେବକକୁ" }, { word: "ଦଣ୍ଡିୟା", meaning: "ଦଣ୍ଡ ଦେଇ" }, { word: "ଏଖୋନ", meaning: "ଏବେ" }, { word: "ଶ୍ରୀ-ଚରଣେ", meaning: "ଶ୍ରୀଚରଣରେ" }, { word: "ଦେହୋ ସ୍ଥାନ", meaning: "ସ୍ଥାନ ଦିଅନ୍ତୁ।" } ] },
    { id: 6, lyric: "ଗୋପୀନାଥ, ଏଇ କି ବିଚାର ତବ ।\n비ମୁଖ ଦେଖିୟା, ଛାଡ଼ ନିଜ-ଜନେ\nନା କର’ କରୁଣା-ଲବ ॥୬॥", translation: "ହେ ଗୋପୀନାଥ, ଯଦି କୌଣସି ସେବକ ତୁମଠାରୁ ମୁହଁ ବୁଲାଇ ନିଏ, ତେବେ କ'ଣ ତୁମେ ତାକୁ ସମ୍ପୂର୍ଣ୍ଣ ତ୍ୟାଗ କରିଦିଅ? ତାକୁ କ'ଣ ଟିକେ ହେଲେ କରୁଣା ଦିଅ ନାହିଁ? ଏହା କ'ଣ ତୁମର ବିଚାର?", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ଏଇ କି", meaning: "ଏହା କ'ଣ?" }, { word: "비ଚାର ତବ", meaning: "ତୁମର ବିଚାର" }, { word: "비ମୁଖ ଦେଖିୟା", meaning: "비ମୁଖ (ମୁହଁ ବୁଲାଇବା) ଦେଖି" }, { word: "ଛାଡ଼ୋ", meaning: "ଛାଡ଼ିଦିଅ" }, { word: "ନିଜ-ଜନେ", meaning: "ନିଜ ସେବକକୁ" }, { word: "ନ କରି'", meaning: "ନ କରି" }, { word: "କରୁଣ-ଲବ", meaning: "କରୁଣାର ଏକ କଣିକା।" } ] },
    { id: 1, lyric: "ଗୋପୀନାଥ, ଆମି ତ’ ମୂରଖ ଅତି ।\nକିସେ ଭାଲ ହୟ, କଭୁନା ବୁଝିନୁ,\nତାଇ ହେନ ମମଗତି ॥୭॥", translation: "ହେ ଗୋପୀନାଥ, ମୁଁ ଜଣେ ବଡ଼ ମୂର୍ଖ। ମୋ ପାଇଁ କ'ଣ ଭଲ, ତାହା ମୁଁ କେବେବି ବୁଝିପାରିଲି ନାହିଁ। ସେଥିପାଇଁ ଆଜି ମୋର ଏଭଳି ଦଶା ହୋଇଛି।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ଆମି ତୋ'", meaning: "ମୁଁ ତ" }, { word: "ମୂରଖ ଅତି", meaning: "ଅତ୍ୟନ୍ତ ମୂର୍ଖ" }, { word: "କିସେ ଭାଲୋ ହୋୟ", meaning: "କେଉଁଥିରେ ମୋର ଭଲ ହେବ" }, { word: "କବ୍ହୁ ନା ବୁଝିନୁ", meaning: "କେବେବି ବୁଝିଲି ନାହିଁ" }, { word: "ତାଇ", meaning: "ସେଥିପାଇଁ" }, { word: "ହେନୋ", meaning: "ଏହିପରି" }, { word: "ମମ ଗତି", meaning: "ମୋର ଅବସ୍ଥା।" } ] },
    { id: 8, lyric: "ଗୋପୀନାଥ, ତୁମି ତ’ ପଣ୍ଡିତବର ।\nମୂଢେର ମଙ୍ଗଲ, ତୁମି ଅନ୍ବେଷିବେ,\nଏ ଦାସେ ନା ଭାବ’ପର ॥୮॥", translation: "ହେ ଗୋପୀନାଥ, ତୁମେ ପରମ ଜ୍ଞାନୀ। ମୂର୍ଖମାନଙ୍କର କିପରି ମଙ୍ଗଳ ହେବ, ତାହା ତୁମେ ହିଁ ଚିନ୍ତା କର। ଦୟାକରି ଏହି ସେବକକୁ ନିଜର ବୋଲି ଭାବନ୍ତୁ, ପର ବୋଲି ଭାବନ୍ତୁ ନାହିଁ।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ତୁମି ତୋ'", meaning: "ତୁମେ ତ" }, { word: "ପଣ୍ଡିତ ବର", meaning: "ଶ୍ରେଷ୍ଠ ପଣ୍ଡିତ (ଜ୍ଞାନୀ)" }, { word: "ମୂଢ଼େର ମଙ୍ଗଳ", meaning: "ମୂର୍ଖମାନଙ୍କର ମଙ୍ଗଳ" }, { word: "ତୁମି ଅନ୍ୱେଷିବେ", meaning: "ତୁମେ ଖୋଜିବ" }, { word: "ଏ ଦାସେ", meaning: "ଏହି ଦାସକୁ" }, { word: "ନା ଭାବୋ' ପର", meaning: "ପର ବୋଲି ଭାବନ୍ତୁ ନାହିଁ।" } ] }
  ]
};

const gopinathPart2Metadata = `      {
        id: 'song-gopinatpart2',
        title: 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍ (Gopinath Part 2)',
        title_odia: 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍',
        title_english: 'Gopinath Part 2 (Ghuchao Sansar)',
        category: 'Songs',
        type: 'html',
        description: 'ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏହି ଦ୍ୱିତୀୟ ଭାଗରେ ଗୋପୀନାଥଙ୍କୁ ସାଂସାରିକ ଜ୍ୱାଳାରୁ ମୁକ୍ତି ପାଇଁ ପ୍ରାର୍ଥନା କରାଯାଇଛି।',
        structuredContent: (Songs as any).SONG_GOPINATHPART2_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },`;

// Update songsContent.ts
let songsPath = 'src/data/songsContent.ts';
let songsContent = fs.readFileSync(songsPath, 'utf8');
if (!songsContent.includes('SONG_GOPINATHPART2_STRUCTURED')) {
    songsContent += `\nexport const SONG_GOPINATHPART2_STRUCTURED: StructuredSong = ${JSON.stringify(gopinathPart2, null, 4)};\n`;
    fs.writeFileSync(songsPath, songsContent, 'utf8');
}

// Update resources.ts
let resPath = 'src/data/resources.ts';
let resContent = fs.readFileSync(resPath, 'utf8');
if (!resContent.includes('song-gopinatpart2')) {
    const lastBracket = resContent.lastIndexOf('];');
    resContent = resContent.substring(0, lastBracket).trim();
    if (resContent.endsWith(',')) {
        resContent += '\n' + gopinathPart2Metadata + '\n];';
    } else {
        resContent += ',\n' + gopinathPart2Metadata + '\n];';
    }
    fs.writeFileSync(resPath, resContent, 'utf8');
}

console.log('✅ Gopinath Part 2 added to Local Index and Content.');
