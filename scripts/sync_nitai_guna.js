
import fs from 'fs';

const song = {
  verses: [
    {
      id: 1,
      lyric: "ନିତାଇ ଗୁଣମଣି ଆମାର, ନିତାଇ ଗୁଣମଣି ।\nଆନିୟା ପ୍ରେମେର ବନ୍ୟା ଭାସାଇଲ ଅବନୀ ॥",
      translation: "ମୋର ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ, ଯିଏ କି ସମସ୍ତ ସଦ୍ଗୁଣର ମଣି ସଦୃଶ, ସେ ଏହି ପୃଥିବୀକୁ ପରମ ଦିବ୍ୟ ପ୍ରେମର ବନ୍ୟାରେ ବୁଡ଼ାଇ ଦେଇଛନ୍ତି।",
      wordMeanings: [
        { "word": "ନିତାଈ", "meaning": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "ଗୁଣ-ମଣି", "meaning": "ସମସ୍ତ ସଦ୍ଗୁଣର ମଣି ସଦୃଶ" },
        { "word": "ଆମାର", "meaning": "ମୋର" },
        { "word": "ନିତାଈ", "meaning": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "ଗୁଣ-ମଣି", "meaning": "ସମସ୍ତ ସଦ୍ଗୁଣର ମଣି ସଦୃଶ" },
        { "word": "ଆନିୟା", "meaning": "ଆଣି କରି" },
        { "word": "ପ୍ରେମେର ବନ୍ୟା", "meaning": "ଦିବ୍ୟ ପ୍ରେମର ବନ୍ୟା" },
        { "word": "ଭାସାଇଲୋ", "meaning": "ଭସାଇ ଦେଲେ (ବୁଡ଼ାଇ ଦେଲେ)" },
        { "word": "ଅବନୀ", "meaning": "ପୃଥିବୀକୁ" }
      ]
    },
    {
      id: 2,
      lyric: "ପ୍ରେମେର ବନ୍ୟା ଲୟାଁ ନିତାଇ ଆଇଲ ଗୌଡ଼ଦେଶେ ।\nଡୁବିଲ ଭକତ ଗଣ ଦୀନ-ହୀନ ଭାସେ ॥",
      translation: "ପ୍ରଭୁ ଚୈତନ୍ୟଙ୍କ ଆଦେଶରେ ଜଗନ୍ନାଥ ପୁରୀରୁ ପ୍ରେମର ଏହି ଅପୂର୍ବ ବନ୍ୟା ଧରି ଯେତେବେଳେ ନିତାଈ ବଙ୍ଗ ଦେଶକୁ ଫେରିଲେ, ସେତେବେଳେ ସମସ୍ତ ଭକ୍ତ ସେହି ପ୍ରେମ ସମୁଦ୍ରରେ ବୁଡ଼ିଗଲେ। କିନ୍ତୁ ପତିତ ଅଣ-ଭକ୍ତମାନେ ସେଥିରେ ନ ବୁଡ଼ି କେବଳ ସେହି ଆନନ୍ଦ ସମୁଦ୍ର ଉପରେ ଭାସି ରହିଲେ।",
      wordMeanings: [
        { "word": "ପ୍ରେମେର ବନ୍ୟା", "meaning": "ଦିବ୍ୟ ପ୍ରେମର ବନ୍ୟା" },
        { "word": "ଲୋଇୟା", "meaning": "ଧରି କରି (ଆଣି କରି)" },
        { "word": "ନିତାଈ", "meaning": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "ଆଇଲା", "meaning": "ଫେରିଲେ" },
        { "word": "ଗୌଡ଼-ଦେଶେ", "meaning": "ବଙ୍ଗ ଦେଶକୁ" },
        { "word": "ଡୁବିଲୋ", "meaning": "ବୁଡ଼ିଗଲେ" },
        { "word": "ଭକତ-ଗଣ", "meaning": "ଭକ୍ତମାନଙ୍କ ସମୂହ" },
        { "word": "ଦୀନ ହୀନ", "meaning": "ପତିତ ଅଣ-ଭକ୍ତମାନେ" },
        { "word": "ଭାସେ", "meaning": "ଭାସି ରହିଲେ" }
      ]
    },
    {
      id: 3,
      lyric: "ଦୀନ-ହୀନ-ପତିତ-ପାମର ନାହିଁ ବାଛେ ।\nବ୍ରହ୍ମାର ଦୁର୍ଲ୍ଲଭ ପ୍ରେମ ସବାକାରେ ଯାଚେ ॥",
      translation: "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ ସେହି ଦିବ୍ୟ ପ୍ରେମକୁ ସମସ୍ତଙ୍କୁ ମାଗଣାରେ ପ୍ରଦାନ କଲେ, ଯାହାକି ସ୍ୱୟଂ ବ୍ରହ୍ମାଙ୍କ ପାଇଁ ମଧ୍ୟ ଦୁର୍ଲଭ। ସେହି ଅଧମ ଏବଂ ପତିତ ଆତ୍ମାମାନଙ୍କୁ ମଧ୍ୟ ସେ ଏହା ପ୍ରଦାନ କଲେ, ଯେଉଁମାନେ ଏହାକୁ ପାଇବା ପାଇଁ ଆଶା ମଧ୍ୟ କରିନଥିଲେ।",
      wordMeanings: [
        { "word": "ଦୀନ ହୀନ", "meaning": "ପାପୀ ଏବଂ ନିଃସ୍ୱ" },
        { "word": "ପତିତ", "meaning": "ପତିତ" },
        { "word": "ପାମର", "meaning": "ଅଧମ" },
        { "word": "ନାହି", "meaning": "ନାହିଁ" },
        { "word": "ବାଛେ", "meaning": "ବାଛି କରି (ପ୍ରାର୍ଥନା ନ କରି ମଧ୍ୟ)" },
        { "word": "ବ୍ରହ୍ମାର ଦୁର୍ଲଭ", "meaning": "ବ୍ରହ୍ମାଙ୍କ ପାଇଁ ମଧ୍ୟ ଦୁର୍ଲଭ" },
        { "word": "ପ୍ରେମ", "meaning": "ଦିବ୍ୟ ପ୍ରେମ" },
        { "word": "ସବାକାରେ", "meaning": "ସମସ୍ତଙ୍କୁ" },
        { "word": "ଜାଚେ", "meaning": "ସେ (ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ) ଯାଚନା କରୁଛନ୍ତି (ପ୍ରଦାନ କରୁଛନ୍ତି)" }
      ]
    },
    {
      id: 4,
      lyric: "ଆବଦ୍ଧ କରୁଣା-ସିନ୍ଧୁ (ନିତାଇ) କାଟିୟା ମୁହାନ ।\nଘରେ ଘରେ ବୁଲେ ପ୍ରେମ ଅମୀୟାର ବାନ ॥",
      translation: "ପୂର୍ବରୁ କରୁଣାର ସାଗର ଦୃଢ଼ ଭାବରେ ବନ୍ଦ ଥିଲା, କିନ୍ତୁ ନିତାଈ ସେଥିରେ ଏକ ମୁହାଣ ବା ପଥ ଖୋଳିଦେଲେ, ଯାହାଦ୍ୱାରା ଅମୃତମୟ ପ୍ରେମର ବନ୍ୟା ପ୍ରତି ଘରକୁ ଘର ବ୍ୟାପିଗଲା।",
      wordMeanings: [
        { "word": "ଆବଦ୍ଧ", "meaning": "ବନ୍ଦ ଥିବା" },
        { "word": "କରୁଣା-ସିନ୍ଧୁ", "meaning": "କରୁଣାର ସାଗର" },
        { "word": "ନିତାଈ", "meaning": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "କାଟିୟା", "meaning": "କାଟି କରି (ନାଳ ତିଆରି କରି)" },
        { "word": "ମୁହାନ", "meaning": "ମୁହାଣ (ପଥ)" },
        { "word": "ଘରେ ଘରେ", "meaning": "ପ୍ରତି ଘରେ ଘରେ" },
        { "word": "ବୁଲେ", "meaning": "ବୁଲୁଛନ୍ତି (ଛିଞ୍ଚାଡ଼ି ହେଉଛନ୍ତି)" },
        { "word": "ପ୍ରେମ-ଅମିୟାର ବାନ", "meaning": "ଅମୃତମୟ ପ୍ରେମର ବନ୍ୟା" }
      ]
    },
    {
      id: 5,
      lyric: "ଲୋଚନ ବଲେ ମୋର ନିତାଇ ଯେବା ନା ଭଜିଲ।\nଜାନିୟା ଶୁନିୟା ସେଇ ଆତ୍ମଘାତୀ ହୈଲ ॥",
      translation: "ଲୋଚନ ଦାସ କହନ୍ତି, \"ଯେଉଁ ବ୍ୟକ୍ତି ମୋର ନିତାଈଙ୍କୁ ଉପାସନା କଲାନାହିଁ କିମ୍ବା ତାଙ୍କ ଦ୍ୱାରା ପ୍ରଦତ୍ତ ଏହି ସୁଯୋଗର ଲାଭ ଉଠାଇଲା ନାହିଁ, ସେ ଜାଣିଶୁଣି ନିଜ ଆତ୍ମାର ହତ୍ୟା କରୁଛି।\"",
      wordMeanings: [
        { "word": "ଲୋଚନ ବୋଲେ", "meaning": "ଲେଖକ ଲୋଚନ ଦାସ କହନ୍ତି" },
        { "word": "ମୋର ନିତାଈ", "meaning": "ମୋର ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "ଯେବା", "meaning": "ଯେ କେହି" },
        { "word": "ନା ଭଜିଲୋ", "meaning": "ଉପାସନା କଲେ ନାହିଁ" },
        { "word": "ଜାଣିୟା", "meaning": "ଜାଣିଶୁଣି" },
        { "word": "ଶୁଣିୟା", "meaning": "କିମ୍ବା ଶୁଣି କରି" },
        { "word": "ସେଇ", "meaning": "ସେହି ବ୍ୟକ୍ତି" },
        { "word": "ଆତ୍ମ-ଘାତୀ", "meaning": "ଆତ୍ମହତ୍ୟାକାରୀ (ଆତ୍ମାର ହନ୍ତା)" },
        { "word": "ହୋଇଲୋ", "meaning": "ହେଲା" }
      ]
    }
  ]
};

const filePath = 'src/data/songsContent.ts';
let content = fs.readFileSync(filePath, 'utf8');

const varName = 'SONG_NITAIGUNAMANI_STRUCTURED';
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

if (!resContent.includes('song-nitaigunamani')) {
    const newRes = `    {
        id: 'song-nitaigunamani',
        title: 'ନିତାଇ ଗୁଣମଣି (Nitai Guna Mani)',
        title_odia: 'ନିତାଇ ଗୁଣମଣି',
        title_english: 'Nitai Guna Mani',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର (Srila Locana Dasa Thakura)',
        structuredContent: (Songs as any).SONG_NITAIGUNAMANI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
];`;
    resContent = resContent.replace('];', newRes);
    fs.writeFileSync(resPath, resContent, 'utf8');
    console.log('✅ Registered in resources.ts');
}
