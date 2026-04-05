const fs = require('fs');
const contentPath = 'src/data/songsContent.ts';
const resourcesPath = 'src/data/resources.ts';

// 1. Prepare Structured JSON (Exact User Odia Text)
const SONG_GURUDEVABOROKRPADIA_STRUCTURED = {
    "verses": [
        {
            "id": 1,
            "lyric": "ଗୁରୁଦେବ !\nବଡ଼ କୃପା କରି', ଗୌଡ଼ବନ ମାଝେ,\nଗୋଦୃମେ ଦିୟାଛ ସ୍ଥାନ ।\nଆଜ୍ଞା ଦିଲା ମୋରେ, ଏଇ ବ୍ରଜେ ବସି',\nହରି ନାମ କର ଗାନ ।।୧।।",
            "translation": "ହେ ଗୁରୁଦେବ! ଆପଣ ଅତି ଦୟାପୂର୍ବକ ଗୌଡ଼ ମଣ୍ଡଳର ବନ ମଧ୍ୟରେ ଥିବା ଶ୍ରୀ ଗୋଦ୍ରୁମ ଦ୍ୱୀପରେ ମତେ ସ୍ଥାନ ଦେଇଛନ୍ତି ଏବଂ ମତେ ଆଜ୍ଞା ଦେଇଛନ୍ତି: \"ବ୍ରଜଧାମ ସହିତ ଅଭିନ୍ନ ଏହି ସ୍ଥାନରେ ରହି ଭଗବାନଙ୍କ ନାମ ଗାନ କର।\"",
            "wordMeanings": [
                { "word": "ଗୁରୁଦେବ!", "meaning": "ହେ ଗୁରୁଦେବ!" },
                { "word": "ବୋଡ଼ୋ କୃପା କରି’", "meaning": "ଅଶେଷ କୃପା କରି" },
                { "word": "ଗୌଡ଼-ବନ ମାଝେ", "meaning": "ଗୌଡ଼ ଦେଶର ବନ ମଧ୍ୟରେ" },
                { "word": "ଗୋଦ୍ରୁମେ", "meaning": "ଗୋଦ୍ରୁମ ଦ୍ୱୀପରେ" },
                { "word": "ଦିୟାଛୋ ସ୍ଥାନ", "meaning": "ସ୍ଥାନ ଦେଇଛନ୍ତି" },
                { "word": "ଆଜ୍ଞା ଦିଲୋ ମୋରେ", "meaning": "ମତେ ଆଜ୍ଞା ଦେଲେ" },
                { "word": "ଏଇ ବ୍ରଜେ ବସି’", "meaning": "ଏହି ବ୍ରଜଧାମରେ (ନବଦ୍ୱୀପରେ) ବସି" },
                { "word": "ହରି-ନାମ କୋରୋ ଗାନ", "meaning": "ହରିନାମ ସଂକୀର୍ତ୍ତନ କର।" }
            ]
        },
        {
            "id": 2,
            "lyric": "କିନ୍ତୁ କବେ ପ୍ରଭୋ, ଯୋଗ୍ୟତା ଅର୍ପିବେ,\nଏଦାସେରେ ଦୟା କରି ।\nଚିତ୍ତ ସ୍ଥିର ହବେ, ସକଲ ସହିବ,\nଏକାନ୍ତେ ଭଜିବ ହରି ।।୨।।",
            "translation": "କିନ୍ତୁ ହେ ପ୍ରଭୁ! ଆପଣ କେବେ ଦୟା କରି ଏହି ସେବକକୁ ଏହି ସେବା ପାଇଁ ଯୋଗ୍ୟ କରିବେ? ତେବେ ହିଁ ମୋର ମନ ସ୍ଥିର ହେବ, ମୁଁ ସମସ୍ତ ବାଧାବିଘ୍ନ ସହିପାରିବି ଏବଂ ଏକାଗ୍ର ହୋଇ ପ୍ରଭୁଙ୍କ ସେବା କରିପାରିବି।",
            "wordMeanings": [
                { "word": "କିନ୍ତୁ କବେ ପ୍ରଭୁ", "meaning": "କିନ୍ତୁ ହେ ପ୍ରଭୁ, କେବେ?" },
                { "word": "ଯୋଗ୍ୟତା ଅର୍ପିବେ", "meaning": "ଯୋଗ୍ୟତା ପ୍ରଦାନ କରିବେ" },
                { "word": "ଏ ଦାସେରେ", "meaning": "ଏହି ସେବକକୁ" },
                { "word": "ଦୋୟା କରି’", "meaning": "ଦୟା କରି" },
                { "word": "ଚିତ୍ତ ସ୍ଥିର ହବେ", "meaning": "ମନ ସ୍ଥିର ହେବ" },
                { "word": "ସକଲ ସୋହିବୋ", "meaning": "ସବୁକିଛି ସହ୍ୟ କରିବି" },
                { "word": "ଏକାନ୍ତେ ଭଜିବୋ ହରି", "meaning": "ଏକାଗ୍ର ଚିତ୍ତରେ ହରିଙ୍କ ଭଜନ କରିବି।" }
            ]
        },
        {
            "id": 3,
            "lyric": "ଶୈଶବ-ଯୌବନେ, ଜଡ଼ସୁଖ-ସଙ୍ଗେ,\nଅଭ୍ୟାସ ହଇଲ ମନ୍ଦ ।\nନିଜକର୍ମ-ଦୋଷେ, ଏ ଦେହ ହଇଲ,\nଭଜନେର ପ୍ରତିବନ୍ଧ ।।୩।।",
            "translation": "ପିଲାଦିନେ ଏବଂ ଯୌବନରେ ମୁଁ ସାଂସାରିକ ସୁଖ ପ୍ରତି ଆସକ୍ତ ଥିଲି ଏବଂ ମୋର ଅଭ୍ୟାସ ସବୁ ଖରାପ ହୋଇଗଲା। ଏବେ ମୋର ନିଜ ପାପ କର୍ମ ଯୋଗୁଁ ଏହି ଶରୀର ଭଗବାନଙ୍କ ଭଜନ କରିବାରେ ଏକ ବଡ଼ ବାଧା ହୋଇ ଠିଆ ହୋଇଛି।",
            "wordMeanings": [
                { "word": "ଶୈଶବ-ଯୌବନେ", "meaning": "ପିଲାଦିନେ ଓ ଯୌବନରେ" },
                { "word": "ଜଡ଼-ସୁଖ-ସଙ୍ଗେ", "meaning": "ସାଂସାରିକ ସୁଖର ଆସକ୍ତିରେ" },
                { "word": "ଅଭ୍ୟାସ ହୋଇଲୋ ମନ୍ଦ", "meaning": "ଅଭ୍ୟାସ ସବୁ ମନ୍ଦ (ଖରାପ) ହୋଇଗଲା" },
                { "word": "ନିଜ-କର୍ମ-ଦୋଷେ", "meaning": "ନିଜ କର୍ମର ଦୋଷ ଯୋଗୁଁ" },
                { "word": "ଏ ଦେହୋ ହୋଇଲୋ", "meaning": "ଏହି ଶରୀର ହୋଇଗଲା" },
                { "word": "ଭଜନେର ପ୍ରତିବନ୍ଧ", "meaning": "ଭଜନ ପାଇଁ ଏକ ବାଧା।" }
            ]
        },
        {
            "id": 4,
            "lyric": "ବାର୍ଦ୍ଧକ୍ୟେ ଏଖନ, ପଞ୍ଚରୋଗେ ହତ,\nକେମନେ ଭଜିବ ବଲ' ।\nକାଁଦିୟା କାଁଦିୟା, ତୋମାର ଚରଣେ,\nପଡ଼ିୟାଛି ସୁବିହ୍ବଲ ।।୪।।",
            "translation": "ଏବେ ବୃଦ୍ଧାବସ୍ଥାରେ ମୁଁ ଅନେକ ରୋଗରେ ପୀଡ଼ିତ। ଆପଣ ହିଁ କୁହନ୍ତୁ, ମୁଁ କିପରି ଭଜନ କରିବି? ମୁଁ ଅତି ବ୍ୟାକୁଳ ହୋଇ କାନ୍ଦି କାନ୍ଦି ଆପଣଙ୍କ ଚରଣ ତଳେ ଆଶ୍ରୟ ନେଇଛି।",
            "wordMeanings": [
                { "word": "ବାର୍ଦ୍ଧକ୍ୟେ ଏଖୋନ", "meaning": "ଏବେ ବୃଦ୍ଧାବସ୍ଥାରେ" },
                { "word": "ପଞ୍ଚ-ରୋଗେ ହତ", "meaning": "ବିଭିନ୍ନ (ପାଞ୍ଚ ପ୍ରକାର) ରୋଗରେ ଆକ୍ରାନ୍ତ" },
                { "word": "କେମୋନେ ଭୋଜିବୋ ବୋଲୋ’", "meaning": "କିପରି ଭଜନ କରିବି, କୁହନ୍ତୁ?" },
                { "word": "କାନ୍ଦିୟା କାନ୍ଦିୟା", "meaning": "କାନ୍ଦି କାନ୍ଦି" },
                { "word": "ତୋମାର ଚରଣେ", "meaning": "ଆପଣଙ୍କ ଚରଣରେ" },
                { "word": "ପୋଡ଼ିୟାଛି ସୁବିହ୍ୱଳ", "meaning": "ଅତି ବ୍ୟାକୁଳ ହୋଇ ପଡ଼ି ରହିଛି।" }
            ]
        }
    ]
};

// 2. Add to songsContent.ts (Overwrite previous stub if exists)
let contentBody = fs.readFileSync(contentPath, 'utf8');
const exportString = `\nexport const SONG_GURUDEVABOROKRPADIA_STRUCTURED: StructuredSong = ${JSON.stringify(SONG_GURUDEVABOROKRPADIA_STRUCTURED, null, 4)};\n`;

if (contentBody.includes('export const SONG_GURUDEVABOROKRPADIA_STRUCTURED')) {
    // Replace existing
    const startIdx = contentBody.indexOf('export const SONG_GURUDEVABOROKRPADIA_STRUCTURED');
    // Find next export or end of file
    const endIdx = contentBody.indexOf('export const', startIdx + 1);
    const oldContent = contentBody.substring(startIdx, endIdx === -1 ? contentBody.length : endIdx);
    contentBody = contentBody.replace(oldContent, exportString);
    fs.writeFileSync(contentPath, contentBody);
} else {
    fs.appendFileSync(contentPath, exportString);
}

// 3. Add to resources.ts (and replace corrupted/old entries)
let resourcesBody = fs.readFileSync(resourcesPath, 'utf8');

// Remove old stubs for this song
const oldIds = ['song-gurudeva-boro-krpa', 'song-gurudevaborokrpakori'];
oldIds.forEach(id => {
    const regex = new RegExp(`\\{\\s+id:\\s+'${id}'[\\s\\S]+?\\},`, 'g');
    resourcesBody = resourcesBody.replace(regex, '');
});

const resourceEntry = `      {
        id: 'song-gurudevaborokrpakori',
        title: 'ଗୁରୁଦେବ ବଡ଼ କୃପା କରି (Gurudev! Boro Krpa Kori)',
        title_odia: 'ଗୁରୁଦେବ ବଡ଼ କୃପା କରି',
        title_english: 'Gurudev! Boro Krpa Kori',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },`;

if (!resourcesBody.includes('song-gurudevaborokrpakori')) {
    const lastBracket = resourcesBody.lastIndexOf('];');
    resourcesBody = resourcesBody.substring(0, lastBracket).trim();
    if (resourcesBody.endsWith(',')) {
        resourcesBody += '\n' + resourceEntry + '\n];';
    } else {
        resourcesBody += ',\n' + resourceEntry + '\n];';
    }
    fs.writeFileSync(resourcesPath, resourcesBody);
}

console.log('✅ Localhost Updated: Gurudev! Boro Krpa Kori added with official text.');
