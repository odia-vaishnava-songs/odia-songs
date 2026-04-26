
import fs from 'fs';

const song = {
  verses: [
    {
      id: 1,
      lyric: "ଅବତାର ସାର, ଗୋରା-ଅବତାର,\nକେନନା ଭଜିଲି ତା’ରେ ।\nକରି’ ନିରେ ବାସ, ଗେଲ ନା ପିୟାସ,\nଆପନ କରମ ଫେରେ ||",
      translation: "ହେ ମୋର ମନ, ତୁମେ ସମସ୍ତ ଅବତାରଙ୍କ ମଧ୍ୟରେ ଶ୍ରେଷ୍ଠ ମଣି ସଦୃଶ ଶ୍ରୀ ଗୌରସୁନ୍ଦରଙ୍କୁ କାହିଁକି ଉପାସନା କଲ ନାହିଁ? ତୁମେ ସର୍ବଦା ଜଳ ମଧ୍ୟରେ ବାସ କରୁଛ, ତଥାପି ନିଜର ମନ୍ଦ କର୍ମ ଫଳ ଯୋଗୁଁ ତୁମର ଶୋଷ କେବେ ମେଣ୍ଟୁନାହିଁ।",
      wordMeanings: [
        { "word": "ଅବତାର", "meaning": "ଅବତାରମାନଙ୍କ ମଧ୍ୟରେ" },
        { "word": "ସାର", "meaning": "ସର୍ବଶ୍ରେଷ୍ଠ" },
        { "word": "ଗୋରା ଅବତାର", "meaning": "ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କ ଅବତାର" },
        { "word": "କେନ", "meaning": "କାହିଁକି" },
        { "word": "ନା", "meaning": "ନାହିଁ" },
        { "word": "ଭଜିଲି", "meaning": "ତୁମେ ଉପାସନା କଲ" },
        { "word": "ତା'ରେ", "meaning": "ତାଙ୍କୁ" },
        { "word": "କରି'", "meaning": "କରିବା ପରେ" },
        { "word": "ନୀରେ", "meaning": "ଜଳରେ" },
        { "word": "ବାସ", "meaning": "ବସବାସ" },
        { "word": "ଗେଲ", "meaning": "ଗଲା" },
        { "word": "ନା", "meaning": "ନାହିଁ" },
        { "word": "ପିୟାସ", "meaning": "ଶୋଷ" },
        { "word": "ଆପନ", "meaning": "ନିଜର" },
        { "word": "କରମ", "meaning": "କର୍ମ" },
        { "word": "ଫେରେ", "meaning": "ଫଳ ସ୍ୱରୂପ" }
      ]
    },
    {
      id: 2,
      lyric: "କଣ୍ଟକେର ତରୁ, ସଦାଇ ସେବିଲି (ମନ)\nଅମୃତ ପାଇବାର ଆଶେ |\nପ୍ରେମକଳ୍ପତରୁ, ଶ୍ରୀଗୌରାଙ୍ଗ ଆମାର\nତାହାରେ ଭାବିଲି ବିଷେ ||",
      translation: "ତୁମେ ମିଠା ଓ ରସାଳ ଫଳ ପାଇବା ଆଶାରେ ସର୍ବଦା କଣ୍ଟା ଗଛର ସେବା କରୁଛ, କିନ୍ତୁ ଏହା କଦାପି ସମ୍ଭବ ନୁହେଁ। ଆମର ଗୌରସୁନ୍ଦର ହେଉଛନ୍ତି ଦିବ୍ୟ ପ୍ରେମ ପ୍ରଦାନ କରୁଥିବା କଳ୍ପବୃକ୍ଷ, କିନ୍ତୁ ତୁମେ ତାଙ୍କୁ ବିଷ ଭାବି ତ୍ୟାଗ କରିଦେଲ।",
      wordMeanings: [
        { "word": "କଣ୍ଟକେର", "meaning": "କଣ୍ଟାଯୁକ୍ତ" },
        { "word": "ତରୁ", "meaning": "ବୃକ୍ଷ" },
        { "word": "ସଦାଇ", "meaning": "ସର୍ବଦା" },
        { "word": "ସେଭିଲି", "meaning": "ସେବା କଲ" },
        { "word": "ମନ", "meaning": "ହେ ମନ" },
        { "word": "ଅମୃତ", "meaning": "ଅମୃତ (ମିଠା ଫଳ)" },
        { "word": "ପାଇବାର", "meaning": "ପାଇବା" },
        { "word": "ଆଶେ", "meaning": "ଆଶାରେ" },
        { "word": "ପ୍ରେମ-କଳ୍ପତରୁ", "meaning": "ପ୍ରେମ ପ୍ରଦାନ କରୁଥିବା କଳ୍ପବୃକ୍ଷ" },
        { "word": "ଶ୍ରୀ ଗୌରାଙ୍ଗ", "meaning": "ଶ୍ରୀ ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁ" },
        { "word": "ଆମାର", "meaning": "ମୋର" },
        { "word": "ତାହାରେ", "meaning": "ତାଙ୍କୁ" },
        { "word": "ଭାବିଲି", "meaning": "ତୁମେ ଚିନ୍ତା କଲ" },
        { "word": "ବିନେ", "meaning": "ବିନା (ବା ବିଷ ସଦୃଶ)" }
      ]
    },
    {
      id: 3,
      lyric: "ସୌରଭେର ଆଶେ, ପଲାଶ ଶୁଁକିଲି (ମନ)\nନାସାତେ ପଶିଲ କୀଟ ।\n‘ଇକ୍ଷୁଦଣ୍ଡ’ ଭାବି, କାଠ ଚୁଷିଲି (ମନ)\nକେମନେ ପାଇବି ମିଠ  ||",
      translation: "ହେ ମୋର ମନ, କିଛି ସୁଗନ୍ଧ ଖୋଜିବା ପାଇଁ ତୁମେ ସୁନ୍ଦର ପଳାଶ ଫୁଲକୁ ଶୁଙ୍ଘିଲ, ଓଲଟା ସେହି ଫୁଲରୁ ଏକ ପୋକ ତୁମ ନାକ ଭିତରକୁ ପଶିଗଲା। ତୁମେ ଶୁଖିଲା କାଠକୁ ଆଖୁ ଭାବି ଶୋଷୁଛ, ତେବେ ତୁମେ କିପରି ମିଠା ରସ ପାଇବ?",
      wordMeanings: [
        { "word": "ସୌରଭେର", "meaning": "ସୁଗନ୍ଧର" },
        { "word": "ଆଶେ", "meaning": "ଆଶାରେ" },
        { "word": "ପଲାଶ", "meaning": "ପଳାଶ ଫୁଲ" },
        { "word": "ଶୁଁକିଲି", "meaning": "ତୁମେ ଶୁଙ୍ଘିଲ" },
        { "word": "ମନ", "meaning": "ହେ ମନ" },
        { "word": "ନାସାତେ", "meaning": "ନାକରେ" },
        { "word": "ପଶିଲ", "meaning": "ପ୍ରବେଶ କଲା" },
        { "word": "କୀଟ", "meaning": "ପୋକ" },
        { "word": "ଇକ୍ଷୁଦଣ୍ଡ", "meaning": "ଆଖୁବାଡ଼ି" },
        { "word": "ଭାବି'", "meaning": "ଭାବି କରି" },
        { "word": "କାଠ", "meaning": "କାଠ" },
        { "word": "ଚୁଷିଲି", "meaning": "ତୁମେ ଶୋଷିଲ" },
        { "word": "ମନ", "meaning": "ହେ ମନ" },
        { "word": "କେମନେ", "meaning": "କିପରି" },
        { "word": "ପାଇବି", "meaning": "ତୁମେ ପାଇବ" },
        { "word": "ମିଠ", "meaning": "ମଧୁରତା" }
      ]
    },
    {
      id: 4,
      lyric: "‘ହାର’ ବଲିୟା, ଗଲାୟ ପରିଲି (ମନ)\nଶମନ-କିଙ୍କର ସାପ ।\n‘ଶୀତଲ’ ବଲିୟା, ଆଗୁନ ପୋହାଲି (ମନ)\nପାଇଲି ବଜର-ତାପ ॥",
      translation: "ହେ ମୋର ମନ, ମୃତ୍ୟୁ ଏକ ସାପ ସଦୃଶ ଯାହାକୁ ତୁମେ ହାର ଭାବି ବେକରେ ପିନ୍ଧି ଦେଇଛ। ତୁମେ ନିଆଁକୁ ଶୀତଳ ଭାବି ସେଥିରେ ପ୍ରବେଶ କଲ ଏବଂ ଅସହ୍ୟ ଦହନ ଯନ୍ତ୍ରଣା ପାଇଲ।",
      wordMeanings: [
        { "word": "ହାର", "meaning": "ମାଳା" },
        { "word": "ବଲିୟା", "meaning": "ଭାବି କରି" },
        { "word": "ଗଲାୟ", "meaning": "ବେକରେ" },
        { "word": "ପରିଲି", "meaning": "ତୁମେ ପିନ୍ଧିଲ" },
        { "word": "ମନ", "meaning": "ହେ ମନ" },
        { "word": "ଶମନ", "meaning": "ଯମରାଜ (ମୃତ୍ୟୁର ଦେବତା)" },
        { "word": "କିଙ୍କର", "meaning": "ସେବକ" },
        { "word": "ସାପ", "meaning": "ସର୍ପ" },
        { "word": "ଶୀତଳ", "meaning": "ଶୀତଳ" },
        { "word": "ବଲିୟା", "meaning": "ଭାବି କରି" },
        { "word": "ଆଗୁନ", "meaning": "ନିଆଁ" },
        { "word": "ପୋହାଲି", "meaning": "ତୁମେ ସେକି ହେଲ" },
        { "word": "ମନ", "meaning": "ହେ ମନ" },
        { "word": "ପାଇଲି", "meaning": "ତୁମେ ପାଇଲ" },
        { "word": "ବଜର", "meaning": "ବଜ୍ର ସଦୃଶ (ଅସହ୍ୟ)" },
        { "word": "ତାପ", "meaning": "ଉତ୍ତାପ" }
      ]
    },
    {
      id: 5,
      lyric: "ସଂସାର ଭଜିଲି, ଶ୍ରୀଗୌରାଙ୍ଗ ଭୁଲିଲି,\nନା ଶୁନିଲି ସାଧୁର କଥା ।\nଇହ-ପରକାଲ, ଦୁକାଲ ଖୋୟାଲି (ମନ)\nଖାଇଲି ଆପନ ମାଥା ॥",
      translation: "ହେ ମୋର ମନ, ସାଂସାରିକ ସୁଖରେ ମଜ୍ଜି ରହି ତୁମେ କେବେ ଭକ୍ତମାନଙ୍କ କଥା ଶୁଣିଲ ନାହିଁ ଏବଂ ଗୌରସୁନ୍ଦରଙ୍କୁ ଭୁଲିଗଲ। ଫଳରେ, ଏହି ଜଗତ ଏବଂ ପରଲୋକ ଉଭୟ ତୁମ ପାଇଁ ନଷ୍ଟ ହୋଇଗଲା।",
      wordMeanings: [
        { "word": "ସଂସାର", "meaning": "ସାଂସାରିକ ଜୀବନ" },
        { "word": "ଭଜିଲି", "meaning": "ତୁମେ ଉପାସନା କଲ" },
        { "word": "ଶ୍ରୀ ଗୌରାଙ୍ଗ", "meaning": "ଶ୍ରୀ ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁ" },
        { "word": "ଭୁଲିଲି", "meaning": "ତୁମେ ଭୁଲିଗଲ" },
        { "word": "ନା", "meaning": "ନାହିଁ" },
        { "word": "ଶୁନିଲି", "meaning": "ତୁମେ ଶୁଣିଲ" },
        { "word": "ସାଧୁର", "meaning": "ସାଧୁ ବା ଭକ୍ତଙ୍କର" },
        { "word": "କଥା", "meaning": "ବାଣୀ" },
        { "word": "ଇହ", "meaning": "ଏହି ଜୀବନ" },
        { "word": "ପରକାଳ", "meaning": "ପରଲୋକ (ଆଗାମୀ ଜୀବନ)" },
        { "word": "ଦୁ'କାଳ", "meaning": "ଉଭୟ ସମୟ" },
        { "word": "ଖୋୟାଲି", "meaning": "ତୁମେ ହରାଇଲ" },
        { "word": "ମନ", "meaning": "ହେ ମନ" },
        { "word": "ଖାଇଲି", "meaning": "ତୁମେ ନଷ୍ଟ କଲ" },
        { "word": "ଆପନ", "meaning": "ନିଜର" },
        { "word": "ମାଥା", "meaning": "ମସ୍ତକ (ନିଜ ସତ୍ତା)" }
      ]
    }
  ]
};

const filePath = 'src/data/songsContent.ts';
let content = fs.readFileSync(filePath, 'utf8');

const varName = 'SONG_AVATARASARAGORAAVATARA_STRUCTURED';
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

if (!resContent.includes('song-avatarasaragoraavatara')) {
    const newRes = `    {
        id: 'song-avatarasaragoraavatara',
        title: 'ଅବତାର ସାର ଗୋରା-ଅବତାର (Avatara Sara Gora-Avatara)',
        title_odia: 'ଅବତାର ସାର ଗୋରା-ଅବତାର',
        title_english: 'Avatara Sara Gora-Avatara',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର (Srila Locana Dasa Thakura)',
        structuredContent: (Songs as any).SONG_AVATARASARAGORAAVATARA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
];`;
    resContent = resContent.replace('];', newRes);
    fs.writeFileSync(resPath, resContent, 'utf8');
    console.log('✅ Registered in resources.ts');
}
