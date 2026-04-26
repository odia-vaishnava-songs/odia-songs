
import fs from 'fs';

const song = {
  verses: [
    {
      id: 1,
      lyric: "ପରମ କରୁଣ, ପହୁଁ ଦୁଇଜନ,\n           ନିତାଇ - ଗୌରଚନ୍ଦ୍ର ।\nସବ ଅବତାର, ସାର ଶିରୋମଣି,\n            କେବଳ ଆନନ୍ଦ ନନ୍ଦ ॥",
      translation: "ପ୍ରଭୁ ନିତାଈ ଏବଂ ପ୍ରଭୁ ଗୌରଚନ୍ଦ୍ର ଅତ୍ୟନ୍ତ ଦୟାଳୁ। ସେମାନେ ସମସ୍ତ ଅବତାରଙ୍କର ସାରାଂଶ। ଏହି ଅବତାରମାନଙ୍କର ବିଶେଷ ଗୁରୁତ୍ୱ ହେଉଛି ଯେ ସେମାନେ ସଂକୀର୍ତ୍ତନ ଏବଂ ନୃତ୍ୟର ଏପରି ଏକ ପ୍ରକ୍ରିୟା ଆରମ୍ଭ କରିଛନ୍ତି ଯାହା କେବଳ ଆନନ୍ଦଦାୟକ।",
      wordMeanings: [
        { "word": "ପରମ କରୁଣ", "meaning": "ପରମ ଦୟାଳୁ" },
        { "word": "ପହୁ ଦୁଇ ଜନ", "meaning": "ଦୁଇ ପ୍ରଭୁ" },
        { "word": "ନିତାଈ ଗୌରଚନ୍ଦ୍ର", "meaning": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ ଏବଂ ପ୍ରଭୁ ଗୌରଚନ୍ଦ୍ର" },
        { "word": "ସବ ଅବତାର", "meaning": "ସମସ୍ତ ଅବତାରଙ୍କର" },
        { "word": "ସାର", "meaning": "ସେମାନେ ହେଉଛନ୍ତି ସାରାଂଶ" },
        { "word": "ଶିରୋମଣି", "meaning": "ଏବଂ ଶ୍ରେଷ୍ଠ ରତ୍ନ (ମୁକୁଟମଣି)" },
        { "word": "କେବଳ ଆନନ୍ଦ-କନ୍ଦ", "meaning": "କେବଳ ଆନନ୍ଦର ମୂଳ ଉତ୍ସ" }
      ]
    },
    {
      id: 2,
      lyric: "ଭଜ ଭଜ ଭାଇ, ଚୈତନ୍ୟ ନିତାଇ,\n            ସୁଦୃଢ଼ ବିଶ୍ୱାସ କରି ।\nବିଷୟ ଛାଡ଼ିୟା, ସେ ରସେ ମଜିୟା,\n            ମୁଖେ ବଲ ହରି ହରି ॥",
      translation: "ମୋର ପ୍ରିୟ ଭାଇମାନେ, ମୁଁ ଅନୁରୋଧ କରୁଛି ଯେ ଆପଣମାନେ ଦୃଢ଼ ବିଶ୍ୱାସ ଓ ନିଷ୍ଠାର ସହିତ ପ୍ରଭୁ ଚୈତନ୍ୟ ଏବଂ ନିତ୍ୟାନନ୍ଦଙ୍କୁ ଉପାସନା କରନ୍ତୁ। ଯଦି କେହି ଏହି ପ୍ରକ୍ରିୟା ଦ୍ୱାରା କୃଷ୍ଣ ଭାବନାମୃତ ପ୍ରାପ୍ତ କରିବାକୁ ଚାହାନ୍ତି, ତେବେ ତାଙ୍କୁ ଇନ୍ଦ୍ରିୟ ସୁଖ ଭୋଗରୁ ନିବୃତ୍ତ ହେବାକୁ ପଡ଼ିବ।",
      wordMeanings: [
        { "word": "ଭଜୋ ଭଜୋ", "meaning": "କେବଳ ଉପାସନା କର, କେବଳ ଉପାସନା କର" },
        { "word": "ଭାଇ", "meaning": "ହେ ଭାଇମାନେ!" },
        { "word": "ଚୈତନ୍ୟ ନିତାଈ", "meaning": "ପ୍ରଭୁ ଚୈତନ୍ୟ ଏବଂ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "ସୁଦୃଢ଼ ବିଶ୍ୱାସ କରି'", "meaning": "ଦୃଢ଼ ବିଶ୍ୱାସର ସହିତ" },
        { "word": "ବିଷୟ ଛାଡ଼ିୟା", "meaning": "ଇନ୍ଦ୍ରିୟ ସୁଖ ତ୍ୟାଗ କରି" },
        { "word": "ସେ ରସେ", "meaning": "ସେହି ଭଜନ ରସରେ" },
        { "word": "ମଜିୟା", "meaning": "ମଗ୍ନ ହୋଇ" },
        { "word": "ମୁଖେ", "meaning": "ମୁହଁରେ" },
        { "word": "ବୋଲୋ ହରି ହରି", "meaning": "ହରି! ହରି! ଜପ କର" }
      ]
    },
    {
      id: 3,
      lyric: "ଦେଖ ଓରେ ଭାଇ, ତ୍ରିଭୁବନେ ନାଇ,\n            ଏମନ ଦୟାଲ ଦାତା ।\nପଶୁ ପକ୍ଷୀ ଝୁରେ, ପାଷାଣ ବିଦରେ,\n           ଶୁନି ଯାଁର ଗୁଣ ଗାଥା ॥",
      translation: "ମୋର ପ୍ରିୟ ଭାଇମାନେ, କେବଳ ଏହାକୁ ପରୀକ୍ଷା କରି ଦେଖନ୍ତୁ। ତିନି ଭୁବନ ମଧ୍ୟରେ ପ୍ରଭୁ ଚୈତନ୍ୟ କିମ୍ବା ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦଙ୍କ ପରି କେହି ନାହିଁ। ସେମାନଙ୍କ ଦୟାଳୁ ଗୁଣ ଏତେ ମହାନ ଯେ ତାହା ଶୁଣି ପକ୍ଷୀ ଏବଂ ପଶୁମାନେ ମଧ୍ୟ କାନ୍ଦନ୍ତି ଏବଂ ପଥର ତରଳି ଯାଏ।",
      wordMeanings: [
        { "word": "ଦେଖୋ", "meaning": "କେବଳ ଦେଖ" },
        { "word": "ଓରେ ଭାଇ", "meaning": "ହେ ପ୍ରିୟ ଭାଇମାନେ!" },
        { "word": "ତ୍ରି-ଭୁବନେ", "meaning": "ତିନି ଭୁବନରେ" },
        { "word": "ନାଈ", "meaning": "କେହି ନାହିଁ" },
        { "word": "ଏମୋନ", "meaning": "ଏମାନଙ୍କ ପରି" },
        { "word": "ଦୟାଲ ଦାତା", "meaning": "ଦୟାଳୁ ଦାନୀ" },
        { "word": "ପଶୁ", "meaning": "ପଶୁମାନେ ମଧ୍ୟ" },
        { "word": "ପାଖୀ", "meaning": "ଏବଂ ପକ୍ଷୀମାନେ" },
        { "word": "ଝୁରେ", "meaning": "କାନ୍ଦନ୍ତି" },
        { "word": "ପାଷାଣ ବିଦରେ", "meaning": "ପଥର ତରଳି ଯାଏ" },
        { "word": "ଶୁଣି'", "meaning": "ଶୁଣି କରି" },
        { "word": "ଜାଁର", "meaning": "ଯାହାଙ୍କର" },
        { "word": "ଗୁଣ-ଗାଥା", "meaning": "ଗୁଣଗାନ" }
      ]
    },
    {
      id: 4,
      lyric: "ସଂସାରେ ମଜିୟା, ରହିଲି ପଡ଼ିୟା,\n             ସେ ପଦେ ନହିଲ ଆଶ ।\nଆପନ କରମ, ଭୁଞ୍ଜୟେ ଶମନ,\n            କହୟେ ଲୋଚନ ଦାସ ॥",
      translation: "କିନ୍ତୁ ମୁଁ, ଲୋଚନ ଦାସ, ଅନୁତାପ କରୁଛି ଯେ ମୁଁ ଇନ୍ଦ୍ରିୟ ସୁଖ ଭୋଗରେ ଫସି ରହିଛି। ପ୍ରଭୁ ଚୈତନ୍ୟ ଏବଂ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦଙ୍କ ଚରଣ କମଳ ପ୍ରତି ମୋର କୌଣସି ଆକର୍ଷଣ ନାହିଁ।",
      wordMeanings: [
        { "word": "ସଂସାରେ ମଜିୟା", "meaning": "ସାଂସାରିକ ବିଷୟ ବାସନାରେ ମଗ୍ନ ହୋଇ" },
        { "word": "ରୋହିଲି ପୋରିୟା", "meaning": "ପତିତ ହୋଇ ରହିଗଲି" },
        { "word": "ସେ ପଦେ", "meaning": "ସେହି ଚରଣ କମଳରେ" },
        { "word": "ନହିଲୋ ଆଶ", "meaning": "ଆଶା ବା ଆକାଂକ୍ଷା ନାହିଁ" },
        { "word": "ଆପନ କରମ", "meaning": "ନିଜର ମନ୍ଦ କର୍ମ" },
        { "word": "ଭୁଞ୍ଜାୟେ", "meaning": "ଦଣ୍ଡ ଭୋଗ କରୁଛି" },
        { "word": "ଶମନ", "meaning": "ମୃତ୍ୟୁର ଦେବତା (ଯମରାଜ)" },
        { "word": "କହୋୟେ ଲୋଚନ-ଦାସ", "meaning": "ଏହା ଲୋଚନ ଦାସ କହନ୍ତି" }
      ]
    }
  ]
};

const filePath = 'src/data/songsContent.ts';
let content = fs.readFileSync(filePath, 'utf8');

const varName = 'SONG_PARAMAKARUNAPAHUDUIJANA_STRUCTURED';
const entry = `\nexport const ${varName}: StructuredSong = ${JSON.stringify(song, null, 4)};\n`;

// Safely replace or append
if (content.includes(`export const ${varName}`)) {
    const regex = new RegExp(`export const ${varName}: StructuredSong = [\\s\\S]*?\\};`, 'g');
    content = content.replace(regex, `export const ${varName}: StructuredSong = ${JSON.stringify(song, null, 4)};`);
} else {
    content += entry;
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`✅ Fixed & Updated ${varName} in songsContent.ts`);

// Also update resources.ts
const resPath = 'src/data/resources.ts';
let resContent = fs.readFileSync(resPath, 'utf8');

if (!resContent.includes('song-paramakarunapahuduijana')) {
    const newRes = `    {
        id: 'song-paramakarunapahuduijana',
        title: 'ପରମ କରୁଣ ପହୁଁ ଦୁଇଜନ (Parama Karuna Pahu Dui Jana)',
        title_odia: 'ପରମ କରୁଣ ପହୁଁ ଦୁଇଜନ',
        title_english: 'Parama Karuna Pahu Dui Jana',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର (Srila Locana Dasa Thakura)',
        structuredContent: (Songs as any).SONG_PARAMAKARUNAPAHUDUIJANA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
];`;
    resContent = resContent.replace('];', newRes);
    fs.writeFileSync(resPath, resContent, 'utf8');
    console.log('✅ Registered in resources.ts');
}
