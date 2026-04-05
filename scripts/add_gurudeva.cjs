const fs = require('fs');
const contentPath = 'src/data/songsContent.ts';
const resourcesPath = 'src/data/resources.ts';

// 1. Prepare Structured JSON
const SONG_GURUDEVAKRPABINDU_STRUCTURED = {
    "verses": [
        {
            "id": 1,
            "lyric": "ଗୁରୁଦେବ !\nକୃପାବିନ୍ଦୁ ଦିୟା, କର’ ଏଇ ଦାସେ,\nତୃଣାପେକ୍ଷା ଅତି ହୀନ ।\nସକଲ ସହନେ, ବଲ ଦିୟାକର,\nନିଜ ମାନେ ସ୍ପୃହାହୀନ ॥୧॥",
            "translation": "ହେ ଗୁରୁଦେବ! କୃପାର ଏକ ବିନ୍ଦୁ ପ୍ରଦାନ କରି ଏହି ସେବକକୁ ଘାସଠାରୁ ମଧ୍ୟ ଅଧିକ ନମ୍ର କରନ୍ତୁ। ସମସ୍ତ ବିପଦ ଓ କଷ୍ଟକୁ ସହିବା ପାଇଁ ମତେ ଶକ୍ତି ଦିଅନ୍ତୁ ଏବଂ ନିଜର ମାନ-ସମ୍ମାନ ପାଇଁ ଥିବା ସମସ୍ତ ଇଚ୍ଛାରୁ ମତେ ମୁକ୍ତ କରନ୍ତୁ।",
            "wordMeanings": [
                { "word": "ଗୁରୁଦେବ!", "meaning": "ହେ ଗୁରୁଦେବ!" },
                { "word": "କୃପା-비ନ୍ଦୁ", "meaning": "କୃପାର ଏକ 비ନ୍ଦୁ ବା କଣିକା" },
                { "word": "ଦିୟା", "meaning": "ଦେଇ" },
                { "word": "କୋରୋ'", "meaning": "କରନ୍ତୁ" },
                { "word": "ଏଇ ଦାସେ", "meaning": "ଏହି ସେବକକୁ" },
                { "word": "ତୃଣାପେଖା", "meaning": "ଘାସ ତୁଳନାରେ" },
                { "word": "ଅତି ହୀନ", "meaning": "ଅତ୍ୟନ୍ତ ନମ୍ର/ଛୋଟ" },
                { "word": "ସକଲ ସହନେ", "meaning": "ସବୁକିଛି ସହିବା ପାଇଁ" },
                { "word": "ବଳ ଦିୟା", "meaning": "ଶକ୍ତି ଦେଇ" },
                { "word": "ନିଜ-ମାନେ", "meaning": "ନିଜର ସମ୍ମାନ ପାଇଁ" },
                { "word": "ସ୍ପୃହା-ହୀନ", "meaning": "ଇଚ୍ଛାଶୂନ୍ୟ।" }
            ]
        },
        {
            "id": 2,
            "lyric": "ସକଲେ ସମ୍ମାନ, କରିତେ ଶକତି,\nଦେହ’ନାଥ ! ଯଥାଯଥ ।\nତବେ ତ’ ଗାଇବ, ହରିନାମ ସୁଖେ,\nଅପରାଧ ହ’ବେ ହତ ॥୨॥",
            "translation": "ହେ ପ୍ରଭୁ! ସମସ୍ତ ଜୀବଙ୍କୁ ଯଥାଯୋଗ୍ୟ ସମ୍ମାନ ଦେବା ପାଇଁ ମତେ ଶକ୍ତି ପ୍ରଦାନ କରନ୍ତୁ। ତେବେ ହିଁ ମୁଁ ଅପରାଧଶୂନ୍ୟ ହୋଇ ପରମ ଆନନ୍ଦରେ ହରିନାମ ସଂକୀର୍ତ୍ତନ କରିପାରିବି।",
            "wordMeanings": [
                { "word": "ସକଲେ ସମ୍ମାନ", "meaning": "ସମସ୍ତ ଜୀବଙ୍କୁ ସମ୍ମାନ" },
                { "word": "କରିତେ", "meaning": "କରିବାକୁ" },
                { "word": "ଶକତି", "meaning": "ଶକ୍ତି" },
                { "word": "ଦେହୋ'", "meaning": "ଦିଅନ୍ତୁ" },
                { "word": "ନାଥ!", "meaning": "ହେ ପ୍ରଭୁ!" },
                { "word": "ଯଥାଯଥ", "meaning": "ଯଥାଯୋଗ୍ୟ" },
                { "word": "ତବେ ତୋ'", "meaning": "ତେବେ ହିଁ" },
                { "word": "ଗାଇବୋ", "meaning": "ମୁଁ ଗାଇବି" },
                { "word": "ହରି-ନାମ-ସୁଖେ", "meaning": "ହରିନାମର ଆନନ୍ଦରେ" },
                { "word": "ଅପରାଧ", "meaning": "ଅପରାଧ" },
                { "word": "ହ'ବେ ହତ", "meaning": "비ନାଶ ହୋଇଯିବ।" }
            ]
        },
        {
            "id": 3,
            "lyric": "କବେ ହେନ କୃପା, ଲଭିୟା ଏ ଜନ,\nକୃତାର୍ଥ ହଇବେ, ନାଥ !\nଶକ୍ତି ବୁଦ୍ଧିହୀନ, ଆମି ଅତି ଦୀନ,\nକର’ ମୋରେ ଆତ୍ମସାଥ ॥୩॥",
            "translation": "ହେ ପ୍ରଭୁ! କେବେ ଏହି ଶକ୍ତିହୀନ ଓ ବୁଦ୍ଧିହୀନ ସେବକ ଆପଣଙ୍କ କୃପା ପାଇ ଧନ୍ୟ ହେବ? ମୁଁ ଅତି ଦୀନ, ଦୟାକରି ମତେ ଆପଣଙ୍କର ଜଣେ ନିଜର ପ୍ରିୟ ସେବକ ଭାବରେ ଗ୍ରହଣ କରନ୍ତୁ।",
            "wordMeanings": [
                { "word": "କବେ", "meaning": "କେବେ?" },
                { "word": "ହେନୋ କୃପା", "meaning": "ଏପରି କୃପା" },
                { "word": "ଲଭିୟା", "meaning": "ପାଇ" },
                { "word": "ଏ ଜନ", "meaning": "ଏହି ଭକ୍ତ" },
                { "word": "କୃତାର୍ଥ ହୋଇବେ", "meaning": "କୃତାର୍ଥ/ଧନ୍ୟ ହେବ" },
                { "word": "ନାଥ!", "meaning": "ହେ ଗୁରୁଦେବ!" },
                { "word": "ଶକ୍ତି-ବୁଦ୍ଧି-ହୀନ", "meaning": "ଶକ୍ତି ଓ ବୁଦ୍ଧିଶୂନ୍ୟ" },
                { "word": "ଆମି", "meaning": "ମୁଁ" },
                { "word": "ଅତି ଦୀନ", "meaning": "ଅତ୍ୟନ୍ତ ଅଧମ" },
                { "word": "କୋରୋ' ମୋରେ", "meaning": "ମତେ କରନ୍ତୁ" },
                { "word": "ଆତ୍ମ-ସାଥ", "meaning": "ନିଜର ପ୍ରିୟ ସେବକ।" }
            ]
        },
        {
            "id": 4,
            "lyric": "ଯୋଗ୍ୟତା-ବିଚାରେ, କିଛୁ ନାହିଁ ପାଇ,\nତୋମାର କରୁଣା ସାର ।\nକରୁଣା ନା ହୈଲେ, କାଁଦିୟା କାଁଦିୟା,\nପ୍ରାଣ ନା ରାଖିବ ଆର ॥୪॥",
            "translation": "ଯଦି ମୁଁ ନିଜର ଯୋଗ୍ୟତା ବିଚାର କରେ, ତେବେ ମୋ ପାଖରେ କିଛି ବି ମୂଲ୍ୟବାନ ଗୁଣ ନାହିଁ। ତେଣୁ ଆପଣଙ୍କ କରୁଣା ହିଁ ମୋ ପାଇଁ ଏକମାତ୍ର ସାହାରା। ଯଦି ଆପଣ କୃପା ନ କରିବେ, ତେବେ ମୁଁ କେବଳ କାନ୍ଦି କାନ୍ଦି ନିଜର ପ୍ରାଣ ତ୍ୟାଗ କରିବି।",
            "wordMeanings": [
                { "word": "ଯୋଗ୍ୟତା-비ଚାରେ", "meaning": "ଯୋଗ୍ୟତା 비ଚାର କଲେ" },
                { "word": "କିଛି ନାହି ପାଇ", "meaning": "କିଛି ବି ପାଉନାହିଁ" },
                { "word": "ତୋମାର କରୁଣା-ସାର", "meaning": "ତୁମର କରୁଣା ହିଁ ସବୁକିଛି" },
                { "word": "କରୁଣା ନା ହୋଇଲେ", "meaning": "ଯଦି କରୁଣା ନ ମିଳେ" },
                { "word": "କାନ୍ଦିୟା କାନ୍ଦିୟା", "meaning": "କାନ୍ଦି କାନ୍ଦି" },
                { "word": "ପ୍ରାଣ ନା ରାଖିବୋ ଆର", "meaning": "ଆଉ ପ୍ରାଣ ରଖିବି ନାହିଁ।" }
            ]
        }
    ]
};

// 2. Add to songsContent.ts
let contentBody = fs.readFileSync(contentPath, 'utf8');
const exportString = `\nexport const SONG_GURUDEVAKRPABINDU_STRUCTURED: StructuredSong = ${JSON.stringify(SONG_GURUDEVAKRPABINDU_STRUCTURED, null, 4)};\n`;
if (!contentBody.includes('SONG_GURUDEVAKRPABINDU_STRUCTURED')) {
    fs.appendFileSync(contentPath, exportString);
}

// 3. Add to resources.ts
let resourcesBody = fs.readFileSync(resourcesPath, 'utf8');
const resourceEntry = `      {
        id: 'song-gurudevakrpabindu',
        title: 'ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ (Gurudev! Krpa Bindu Diya)',
        title_odia: 'ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ',
        title_english: 'Gurudev! Krpa Bindu Diya',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },`;

if (!resourcesBody.includes('song-gurudevakrpabindu')) {
    const lastBracket = resourcesBody.lastIndexOf('];');
    resourcesBody = resourcesBody.substring(0, lastBracket).trim();
    if (resourcesBody.endsWith(',')) {
        resourcesBody += '\n' + resourceEntry + '\n];';
    } else {
        resourcesBody += ',\n' + resourceEntry + '\n];';
    }
    fs.writeFileSync(resourcesPath, resourcesBody);
}

console.log('✅ Localhost Updated: Gurudev! Krpa Bindu Diya added.');
