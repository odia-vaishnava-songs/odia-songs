
import fs from 'fs';

const song = {
  verses: [
    {
      id: 1,
      lyric: "ଅକ୍ରୋଧ ପରମାନନ୍ଦ ନିତ୍ୟାନନ୍ଦ ରାୟ ।\nଅଭିମାନ – ଶୂନ୍ୟ ନିତାଇ ନଗରେ ବେଡ଼ାୟା ॥",
      translation: "ପୂଜ୍ୟ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ ରାୟ କେବେହେଲେ କ୍ରୋଧ କରନ୍ତି ନାହିଁ, କାରଣ ସେ ପରମ ଦିବ୍ୟ ଆନନ୍ଦର ସାକ୍ଷାତ ସ୍ୱରୂପ। ମିଥ୍ୟା ଅହଂକାରରୁ ସମ୍ପୂର୍ଣ୍ଣ ମୁକ୍ତ ହୋଇ ନିତାଈ ସହର ସାରା ଭ୍ରମଣ କରନ୍ତି।",
      wordMeanings: [
        { "word": "ଅକ୍ରୋଧ", "meaning": "କ୍ରୋଧଶୂନ୍ୟ" },
        { "word": "ପରମାନନ୍ଦ", "meaning": "ପରମ ଆନନ୍ଦ ସ୍ୱରୂପ" },
        { "word": "ନିତ୍ୟାନନ୍ଦ ରାୟ", "meaning": "ପୂଜ୍ୟ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "ଅଭିମାନ ଶୂନ୍ୟ", "meaning": "ଅହଂକାର ରହିତ" },
        { "word": "ନିତାଈ", "meaning": "ନିତାଈ" },
        { "word": "ନଗରେ", "meaning": "ଗ୍ରାମରେ" },
        { "word": "ବେଡ଼ାୟ", "meaning": "ଭ୍ରମଣ କରନ୍ତି" }
      ]
    },
    {
      id: 2,
      lyric: "ଅଧମ ପତିତ ଜୀବେର୍ ଦ୍ବାରେ ଦ୍ବାରେ ଗିୟା ।\nହରି ନାମ ମହାମନ୍ତ ଦେନ ବିଲାଇୟା ॥",
      translation: "ଅତି ପତିତ ଓ ଅଧମ ଜୀବମାନଙ୍କ ଦ୍ୱାରକୁ ଦ୍ୱାରକୁ ଯାଇ ସେ ହରିନାମ ମହାମନ୍ତ୍ରର ଉପହାର ମାଗଣାରେ ବିତରଣ କରନ୍ତି।",
      wordMeanings: [
        { "word": "ଅଧମ", "meaning": "ଅଧମ" },
        { "word": "ପତିତ", "meaning": "ପତିତ" },
        { "word": "ଜୀବେର", "meaning": "ଜୀବମାନଙ୍କର" },
        { "word": "ଦ୍ୱାରେ ଦ୍ୱାରେ", "meaning": "ଦ୍ୱାର ଦ୍ୱାର ବୁଲି" },
        { "word": "ଗିୟା", "meaning": "ଯାଇ କରି" },
        { "word": "ହରି-ନାମ ମହା-ମନ୍ତ୍ର", "meaning": "ପବିତ୍ର ହରିନାମ ମହାମନ୍ତ୍ର" },
        { "word": "ଦେନୋ", "meaning": "ସେ ପ୍ରଦାନ କରନ୍ତି" },
        { "word": "ବିଲାଈୟା", "meaning": "ବିତରଣ କରି" }
      ]
    },
    {
      id: 3,
      lyric: "ଯାରେ ଦେଖେ ତାରେ କହେ ଦନ୍ତେ ତୃଣଧରି’ ।\nଆମାରେ କିନିୟା ଲହ ଭଜ ଗୌରହରି ॥",
      translation: "ସେ ଯାହାକୁ ଦେଖନ୍ତି, ଦାନ୍ତରେ କୁଟା ଧରି ଅତ୍ୟନ୍ତ ବିନମ୍ରତାର ସହ କହନ୍ତି, \"ଗୌରହରିଙ୍କ ଉପାସନା କରି ମୋତେ କିଣି ନିଅନ୍ତୁ!\"",
      wordMeanings: [
        { "word": "ଯାରେ ଦେଖେ", "meaning": "ଯାହାକୁ ଦେଖନ୍ତି" },
        { "word": "ତାରେ କୋହେ", "meaning": "ତାଙ୍କୁ କହନ୍ତି" },
        { "word": "ଦନ୍ତେ", "meaning": "ଦାନ୍ତରେ" },
        { "word": "ତୃଣ ଧୋରି'", "meaning": "କୁଟା ଧରି" },
        { "word": "ଆମାରେ କିନିୟା", "meaning": "ମୋତେ କିଣି" },
        { "word": "ଲୋହୋ", "meaning": "ଦୟାକରି ନିଅନ୍ତୁ" },
        { "word": "ଭଜୋ", "meaning": "ଉପାସନା କରନ୍ତୁ" },
        { "word": "ଗୌର-ହରି", "meaning": "ପ୍ରଭୁ ଚୈତନ୍ୟ" }
      ]
    },
    {
      id: 4,
      lyric: "ଏତ ବୋଲି' — ଏହା କହି ନିତ୍ୟାନନ୍ଦ — ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ ଭୂମେ — ଭୂମିରେ ଗଡ଼ି ଯାୟ — ଗଡ଼ାଗଡ଼ି ଦିଅନ୍ତି ସୋନାର ପର୍ବତ — ସୁବର୍ଣ୍ଣ ପର୍ବତ ଯେନୋ — ଯେପରି କି ଧୂଲାତେ ଲୋଟାୟ — ଧୂଳିରେ ଲୁଟିବା ॥",
      translation: "ଏହା କହି ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ ଭୂମିରେ ଗଡ଼ାଗଡ଼ି ଦିଅନ୍ତି, ଯାହା ଦେଖିବାକୁ ଧୂଳିରେ ଲୁଟୁଥିବା ଏକ ସୁବର୍ଣ୍ଣ ପର୍ବତ ସଦୃଶ ପ୍ରତୀତ ହୁଏ।",
      wordMeanings: [
        { "word": "ଏତ ବୋଲି'", "meaning": "ଏହା କହି" },
        { "word": "ନିତ୍ୟାନନ୍ଦ", "meaning": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ" },
        { "word": "ଭୂମେ", "meaning": "ଭୂମିରେ" },
        { "word": "ଗଡ଼ି ଯାୟ", "meaning": "ଗଡ଼ାଗଡ଼ି ଦିଅନ୍ତି" },
        { "word": "ସୋନାର ପର୍ବତ", "meaning": "ସୁବର୍ଣ୍ଣ ପର୍ବତ" },
        { "word": "ଯେନୋ", "meaning": "ଯେପରି କି" },
        { "word": "ଧୂଲାତେ ଲୋଟାୟ", "meaning": "ଧୂଳିରେ ଲୁଟିବା" }
      ]
    },
    {
      id: 5,
      lyric: "ହେନ ଅବତାରେ ଯାର ରତି ନା ଜନ୍ମିଲ ।\nଲୋଚନ୍ ବଲେ ସେଇ ପାପୀ ଏଲ ଆର୍ ଗେଲ ॥",
      translation: "ଲୋଚନ ଦାସ କହନ୍ତି, \"ଯେଉଁ ବ୍ୟକ୍ତିର ଏପରି ଅବତାରଙ୍କ ପ୍ରତି ଅନୁରାଗ ଜନ୍ମିନାହିଁ, ସେହି ପାପୀ ବ୍ୟକ୍ତି ବାରମ୍ବାର ଜନ୍ମ ଓ ମୃତ୍ୟୁ ଚକ୍ରରେ କେବଳ ବୃଥାରେ ଆସେ ଏବଂ ଯାଏ।\"",
      wordMeanings: [
        { "word": "ହେନୋ ଅବତାରେ", "meaning": "ଏପରି ଅବତାରଙ୍କ ପ୍ରତି" },
        { "word": "ଯାର", "meaning": "ଯାହାର" },
        { "word": "ରତି", "meaning": "ଅନୁରାଗ (ଭଲପାଇବା)" },
        { "word": "ନା ଜନ୍ମିଲୋ", "meaning": "ସୃଷ୍ଟି ହୋଇନାହିଁ" },
        { "word": "ଲୋଚନ ବୋଲେ", "meaning": "ଲୋଚନ ଦାସ କହନ୍ତି" },
        { "word": "ସେଇ ପାପୀ", "meaning": "ସେହି ପାପୀ ବ୍ୟକ୍ତି" },
        { "word": "ଏଲୋ", "meaning": "ଆସେ" },
        { "word": "ଆର", "meaning": "ଏବଂ" },
        { "word": "ଗେଲୋ", "meaning": "ଯାଏ" }
      ]
    }
  ]
};

const filePath = 'src/data/songsContent.ts';
let content = fs.readFileSync(filePath, 'utf8');

const varName = 'SONG_AKRODHAPARAMANANDA_STRUCTURED';
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

// Also update resources.ts - RESTORING Avatara Sara AND adding Akrodha
const resPath = 'src/data/resources.ts';
let resContent = fs.readFileSync(resPath, 'utf8');

const songEntries = [
    {
        id: 'song-avatarasaragoraavatara',
        title: 'ଅବତାର ସାର ଗୋରା-ଅବତାର (Avatara Sara Gora-Avatara)',
        title_odia: 'ଅବତାର ସାର ଗୋରା-ଅବତାର',
        title_english: 'Avatara Sara Gora-Avatara',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର (Srila Locana Dasa Thakura)',
        structuredContent: '(Songs as any).SONG_AVATARASARAGORAAVATARA_STRUCTURED',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-akrodhaparamananda',
        title: 'ଅକ୍ରୋଧ ପରମାନନ୍ଦ (Akrodha Paramananda)',
        title_odia: 'ଅକ୍ରୋଧ ପରମାନନ୍ଦ',
        title_english: 'Akrodha Paramananda',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର (Srila Locana Dasa Thakura)',
        structuredContent: '(Songs as any).SONG_AKRODHAPARAMANANDA_STRUCTURED',
        published: true,
        status: 'COMPLETED'
    }
];

songEntries.forEach(entry => {
    if (!resContent.includes(entry.id)) {
        const entryStr = `    {
        id: '${entry.id}',
        title: '${entry.title}',
        title_odia: '${entry.title_odia}',
        title_english: '${entry.title_english}',
        category: 'Songs',
        type: 'html',
        author: '${entry.author}',
        structuredContent: ${entry.structuredContent},
        published: true,
        status: 'COMPLETED'
    },
];`;
        resContent = resContent.replace('];', entryStr);
    }
});

fs.writeFileSync(resPath, resContent, 'utf8');
console.log('✅ Registered and Restored in resources.ts');
