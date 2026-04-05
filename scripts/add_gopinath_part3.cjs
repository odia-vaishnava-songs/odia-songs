const fs = require('fs');

const gopinathPart3 = {
  verses: [
    { id: 1, lyric: "ଗୋପୀନାଥ, ଆମାର ଉପାୟ ନାଇ ।\nତୁମି କୃପା କରି’, ଆମାରେ ଲଇଲେ,\nସଂସାରେ ଉଦ୍ଧାର ପାଇ ||୧||", translation: "ହେ ଗୋପୀନାଥ, ମୋ ପାଖରେ ଅନ୍ୟ କୌଣସି ଆଶା ବା ଉପାୟ ନାହିଁ। କେବଳ ଯଦି ତୁମେ ଦୟାକରି ମତେ ଗ୍ରହଣ କରିବ, ତେବେ ହିଁ ମୁଁ ଏହି ଜନ୍ମ-ମୃତ୍ୟୁର ସଂସାରରୁ ମୁକ୍ତି ପାଇପାରିବି।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ଆମାର", meaning: "ମୋର" }, { word: "ଉପାୟ", meaning: "ଉପାୟ/ବାଟ" }, { word: "ନାହି", meaning: "ନାହିଁ" }, { word: "ତୁମି", meaning: "ତୁମେ" }, { word: "କୃପା କରି'", meaning: "କୃପା କରି" }, { word: "ଆମାରେ ଲୋଇଲେ", meaning: "ମତେ ଗ୍ରହଣ କଲେ" }, { word: "ସଂସାରେ", meaning: "ସଂସାରରୁ" }, { word: "ଉଦ୍ଧାର ପାଇ", meaning: "ମୁକ୍ତି ପାଇବି।" } ] },
    { id: 2, lyric: "ଗୋପୀନାଥ, ପଡ଼େଛି ମାୟାର ଫେରେ ।\nଧନ, ଦାରା, ସୁତ, ଘିରେଛେ ଆମାରେ,\nକାମେତେ ରେଖେଛେ ଜେରେ ||୨||", translation: "ହେ ଗୋପୀନାଥ, ମୁଁ ମାୟାର ଏକ ବିପଜ୍ଜନକ ଜାଲରେ ପଡ଼ିଯାଇଛି। ଧନ, ପତ୍ନୀ ଏବଂ ସନ୍ତାନମାନେ ମତେ ଚାରିଆଡ଼ୁ ଘେରି ରହିଛନ୍ତି। ଏବେ ମୁଁ ମୋର ସାଂସାରିକ କାମନାର ପରିଣାମ ସ୍ୱରୂପ କଷ୍ଟ ଭୋଗୁଛି।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ପୋଡ଼େଛି", meaning: "ମୁଁ ପଡ଼ିଛି" }, { word: "ମାୟାର ଫେରେ", meaning: "ମାୟାର ଜାଲରେ/비ପଦରେ" }, { word: "ଧନ ଦାରା ସୁତ", meaning: "ସମ୍ପତ୍ତି, ପତ୍ନୀ ଏବଂ ପୁତ୍ର" }, { word: "ଘିରେଛେ", meaning: "ଘେରି ରହିଛନ୍ତି" }, { word: "ଆମାରେ", meaning: "ମତେ" }, { word: "କାମେତେ", meaning: "କାମନାରେ" }, { word: "ରେଖେଛେ ଜେରେ", meaning: "ପରିଣାମ ଭୋଗୁଛି।" } ] },
    { id: 3, lyric: "ଗୋପୀନାଥ, ମନ ଯେ ପାଗଳ ମୋର ।\nନା ମାନେ ଶାସନ, ସଦା ଅଚେତନ,\n비ଷୟେ ର’ୟେଛେ ଘୋର ||୩||", translation: "ହେ ଗୋପୀନାଥ, ମୋର ଏହି ପାଗଳ ମନ କେବେବି ଭଲ ଉପଦେଶ ବୁଝେ ନାହିଁ। ଏହା ମତେ ସବୁବେଳେ ମୋହଗ୍ରସ୍ତ କରି ରଖେ ଏବଂ ବିଷୟ-ଭୋଗର ଭୟଙ୍କର ଜାଲରେ ଛନ୍ଦି କରି ରଖିଥାଏ।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ମନ ଯେ", meaning: "ମନ ଯେଉଁଟା କି" }, { word: "ପାଗଲ ମୋର", meaning: "ମୋର ପାଗଳ" }, { word: "ନା ମାନେ", meaning: "ମାନେ ନାହିଁ" }, { word: "ଶାସନ", meaning: "ଉପଦେଶ/ଶାସନ" }, { word: "ସଦା", meaning: "ସବୁବେଳେ" }, { word: "ଅଚେତନ", meaning: "ଅଚେତନ/ଜଡ଼" }, { word: "비ଷୟେ", meaning: "ଭୋଗ비ଳାସରେ" }, { word: "ରୋ'ୟେଛେ ଘୋର", meaning: "ଭୟଙ୍କର ଭାବେ ମଜ୍ଜି ରହିଛି।" } ] },
    { id: 4, lyric: "ଗୋପୀନାଥ, ହାର ଯେ ମେନେଛି ଆମି ।\nଅନେକ ଯତନ, ହଇଲ ବିଫଲ,\nଏଖନ ଭରସା ତୁମି ||୪||", translation: "ହେ ଗୋପୀନାଥ, ଏବେ ମୁଁ ମୋର ପରାଜୟ ସ୍ୱୀକାର କରିଛି। ମୋର ଅନେକ ଚେଷ୍ଟା ଓ ସଂଘର୍ଷ ସବୁ ବିଫଳ ହେଲା। ଏବେ କେବଳ ତୁମରି ଉପରେ ହିଁ ମୋର ସମ୍ପୂର୍ଣ୍ଣ ଭରସା ଅଛି।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ହାର ଯେ", meaning: "ହାର ବା ପରାଜୟ" }, { word: "ମେନେଛି", meaning: "ମାନି ନେଇଛି" }, { word: "ଆମି", meaning: "ମୁଁ" }, { word: "ଅନେକ ଯତନ", meaning: "ଅନେକ ଚେଷ୍ଟା" }, { word: "ହୋଇଲୋ ବିଫଳ", meaning: "비ଫଳ ହେଲା" }, { word: "ଏଖୋନ", meaning: "ଏବେ" }, { word: "ଭରସା ତୁମି", meaning: "ତୁମେ ହିଁ ଭରସା।" } ] },
    { id: 5, lyric: "ଗୋପୀନାଥ, କେମନେ ହଇବେ ଗତି ।\nପ୍ରବଳ ଇନ୍ଦ୍ରିୟ, ବଶୀଭୂତ ମନ,\nନା ଛାଡ଼େ ବିଷୟ-ରତି ||୫||", translation: "ହେ ଗୋପୀନାଥ, ମୋର କି ପରିଣତି ହେବ? ମୋର ମନ ଏହି ଶକ୍ତିଶାଳୀ ଇନ୍ଦ୍ରିୟମାନଙ୍କର ଦାସ ହୋଇଯାଇଛି। ଏହା କୌଣସି ମତେ ସାଂସାରିକ ଭୋଗବିଳାସ ପ୍ରତି ଥିବା ଆସକ୍ତିକୁ ତ୍ୟାଗ କରିପାରୁ ନାହିଁ।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "କେମୋନେ", meaning: "କିପରି?" }, { word: "ହୋଇବେ ଗତି", meaning: "ଗତି ବା ପରିଣତି ହେବ" }, { word: "ପ୍ରବଳ ଇନ୍ଦ୍ରିୟା", meaning: "ଶକ୍ତିଶାଳୀ ଇନ୍ଦ୍ରିୟମାନେ" }, { word: "ବଶୀ-ଭୂତ ମନ", meaning: "ମନକୁ ବଶ କରିଛନ୍ତି" }, { word: "ନ ଛାଡ଼େ", meaning: "ଛାଡୁ ନାହିଁ" }, { word: "비ଷୟ-ରତି", meaning: "비ଷୟ ପ୍ରତି ଆସକ୍ତି।" } ] },
    { id: 6, lyric: "ଗୋପୀନାଥ, ହୃଦୟେ ବସିୟା ମୋର\nମନକେ ଶମିୟା, ଲହ ନିଜ ପାନେ,\nଘୁଚିବେ ବିପଦ ଘୋର ||୬||", translation: "ହେ ଗୋପୀନାଥ, ଦୟାକରି ମୋ ହୃଦୟରେ ବିରାଜମାନ କରନ୍ତୁ। ମୋର ଏହି ଅଶାନ୍ତ ମନକୁ ଶାନ୍ତ କରି ନିଜ ଆଡ଼କୁ ଆକର୍ଷିତ କରନ୍ତୁ। ତେବେ ହିଁ ମୋର ଏହି ସମସ୍ତ ଭୟଙ୍କର ବିପଦ ଦୂର ହେବ।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ହୃଦୟେ ବସିୟା ମୋର", meaning: "ମୋ ହୃଦୟରେ ବସି" }, { word: "ମନକେ ଶମିୟା", meaning: "ମନକୁ ଶାନ୍ତ କରି" }, { word: "ଲୋହୋ ନିଜ ପାନେ", meaning: "ନିଜ ଆଡ଼କୁ ନିଅନ୍ତୁ" }, { word: "ଘୁଚିବେ", meaning: "ଦୂର ହେବ" }, { word: "비ପଦ ଘୋର", meaning: "ଭୟଙ୍କର ବିପଦ।" } ] },
    { id: 7, lyric: "ଗୋପୀନାଥ, ଅନାଥ ଦେଖିୟା ମୋରେ ।\nତୁମି ହୃଷିକେଶ, ହୃଷିକ ଦମିୟା,\nତାର’ ହେ ସଂସୃତି-ଘୋରେ ||୭||", translation: "ହେ ଗୋପୀନାଥ, ତୁମେ ହିଁ ଇନ୍ଦ୍ରିୟମାନଙ୍କର ପ୍ରକୃତ ସ୍ୱାମୀ। ମୋର କେହି ରକ୍ଷାକର୍ତ୍ତା ନାହାନ୍ତି ଦେଖି, ଦୟାକରି ମୋର ଇନ୍ଦ୍ରିୟମାନଙ୍କୁ ନିୟନ୍ତ୍ରଣ କରନ୍ତୁ ଏବଂ ମତେ ଏହି ଭୟଙ୍କର ଜନ୍ମ-ମୃତ୍ୟୁର ସଂସାରରୁ ଉଦ୍ଧାର କରନ୍ତୁ।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ଅନାଥ ଦେଖିୟା ମୋରେ", meaning: "ମତେ ଅନାଥ ବୋଲି ଦେଖି" }, { word: "ତୁମି ହୃଷୀକେଶ", meaning: "ତୁମେ ଇନ୍ଦ୍ରିୟମାନଙ୍କ ସ୍ୱାମୀ" }, { word: "ହୃଷୀକ ଦମିୟା", meaning: "ଇନ୍ଦ୍ରିୟମାନଙ୍କୁ ଦମନ କରି" }, { word: "ତାରହେ", meaning: "ଉଦ୍ଧାର କରନ୍ତୁ" }, { word: "ସଂସୃତି-ଘୋରେ", meaning: "ଭୟଙ୍କର ସଂସାରରୁ।" } ] },
    { id: 8, lyric: "ଗୋପୀନାଥ, ଗଲାୟ ଲେଗେଛେ ଫାସ\nକୃପା-ଅସି ଧରି, ବନ୍ଧନ ଛେଦିୟା,\n비ନୋଦେ କରହ ଦାସ ||୮||", translation: "ହେ ଗୋପୀନାଥ, ମୋ ବେକରେ ଏବେ ମାୟାର ଫାଶ ଲାଗି ସାରିଛି। ନିଜ କୃପା ରୂପକ ତରବାରି ଧରି ଏହି ବନ୍ଧନକୁ କାଟି ଦିଅନ୍ତୁ ଏବଂ ଏହି ଭକ୍ତିବିନୋଦକୁ ନିଜର ଚିରନ୍ତନ ସେବକ ଭାବରେ ଗ୍ରହଣ କରନ୍ତୁ।", wordMeanings: [ { word: "ଗୋପୀନାଥ", meaning: "ହେ ଗୋପୀନାଥ" }, { word: "ଗଳାୟ ଲେଗେଛେ ଫାଂସ", meaning: "ବେକରେ ଫାଶ ଲାଗିଛି" }, { word: "କୃପା-ଅସି ଧରି'", meaning: "କୃପା ରୂପକ ଖଡ଼୍ଗ ଧରି" }, { word: "ବନ୍ଧନ ଛେଦିୟା", meaning: "ବନ୍ଧନକୁ କାଟି" }, { word: "비ନୋଦେ କୋରୋହୋ ଦାସ", meaning: "ଭକ୍ତିବିନୋଦକୁ ନିଜର ସେବକ କରନ୍ତୁ।" } ] }
  ]
};

const gopinathPart3Metadata = `      {
        id: 'song-gopinatpart3',
        title: 'ଗୋପୀନାଥ (Part 3): ଆମାର ଉପାୟ ନାହି (Gopinath Part 3)',
        title_odia: 'ଗୋପୀନାଥ (Part 3): ଆମାର ଉପାୟ ନାହି',
        title_english: 'Gopinath Part 3 (Amar Upaya Nai)',
        category: 'Songs',
        type: 'html',
        description: 'ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏହି ତୃତୀୟ ଭାଗରେ ସ୍ୱୀକାର କରାଯାଇଛି କି ଗୋପୀନାଥଙ୍କ ବିନା ଅନ୍ୟ କୌଣସି ଉପାୟ ନାହିଁ।',
        structuredContent: (Songs as any).SONG_GOPINATHPART3_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },`;

// Update songsContent.ts
const songsPath = 'src/data/songsContent.ts';
let songsContent = fs.readFileSync(songsPath, 'utf8');
if (!songsContent.includes('SONG_GOPINATHPART3_STRUCTURED')) {
    songsContent += `\nexport const SONG_GOPINATHPART3_STRUCTURED: StructuredSong = ${JSON.stringify(gopinathPart3, null, 4)};\n`;
    fs.writeFileSync(songsPath, songsContent, 'utf8');
}

// Update resources.ts
const resPath = 'src/data/resources.ts';
let resContent = fs.readFileSync(resPath, 'utf8');
if (!resContent.includes('song-gopinatpart3')) {
    const lastBracket = resContent.lastIndexOf('];');
    resContent = resContent.substring(0, lastBracket).trim();
    if (resContent.endsWith(',')) {
        resContent += '\n' + gopinathPart3Metadata + '\n];';
    } else {
        resContent += ',\n' + gopinathPart3Metadata + '\n];';
    }
    fs.writeFileSync(resPath, resContent, 'utf8');
}

console.log('✅ Gopinath Part 3 added to Local Index and Content.');
