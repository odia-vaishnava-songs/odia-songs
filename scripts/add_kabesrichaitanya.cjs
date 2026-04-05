const fs = require('fs');
const contentPath = 'src/data/songsContent.ts';
const resourcesPath = 'src/data/resources.ts';

// 1. Prepare Structured JSON
const SONG_KABESRICHAITANYAMORE_STRUCTURED = {
    "verses": [
        {
            "id": 1,
            "lyric": "କବେ ଶ୍ରୀ ଚୈତନ୍ୟ ମୋରେ-କରିବେନ ଦୟା\nକବେ ଆମି ପାଇବ ବୈଷ୍ଣବ ପଦ-ଛାୟା ॥୧॥",
            "translation": "ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ କେବେ ମୋ ଉପରେ ଅହେତୁକୀ କୃପା କରିବେ ଏବଂ ତାଙ୍କର ବୈଷ୍ଣବ ଭକ୍ତମାନଙ୍କ ଚରଣ କମଳର ଶୀତଳ ଛାୟା ତଳେ ମତେ ସ୍ଥାନ ଦେବେ?",
            "wordMeanings": [
                { "word": "କବେ", "meaning": "କେବେ?" },
                { "word": "ଶ୍ରୀ-ଚୈତନ୍ୟ", "meaning": "ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ" },
                { "word": "ମୋରେ", "meaning": "ମତେ" },
                { "word": "କୋରିବେନ ଦୋୟା", "meaning": "ଦୟା କରିବେ" },
                { "word": "କବେ ଆମି ପାଇବୋ", "meaning": "କେବେ ମୁଁ ପାଇବି" },
                { "word": "ବୈଷ୍ଣବ-ପଦ-ଛାୟା", "meaning": "ବୈଷ୍ଣବମାନଙ୍କ ଚରଣ କମଳର ଛାୟା।" }
            ]
        },
        {
            "id": 2,
            "lyric": "କବେ ଆମି ଛାଡ଼ିବ ଏ ବିଷୟାଭିମାନ\nକବେ ବିଷ୍ଣୁଜନେ ଆମି କରିବ ସମ୍ମାନ ॥୨॥",
            "translation": "ଇନ୍ଦ୍ରିୟ ସୁଖରେ ମଜ୍ଜି ରହିଥିବା ଏହି ମିଥ୍ୟା ଅହଂକାରକୁ ମୁଁ କେବେ ତ୍ୟାଗ କରିବି? ଏବଂ କେବେ ମୁଁ ପ୍ରଭୁଙ୍କର ପାର୍ଷଦ ଓ ଭକ୍ତମାନଙ୍କୁ ଯଥାଯୋଗ୍ୟ ସମ୍ମାନ ଦେବାକୁ ସମର୍ଥ ହେବି?",
            "wordMeanings": [
                { "word": "କବେ ଆମି ଛାଡ଼ିବୋ", "meaning": "କେବେ ମୁଁ ତ୍ୟାଗ କରିବି" },
                { "word": "ଏ ବିଷୟାଭିମାନ", "meaning": "ଏହି ସାଂସାରିକ ବିଷୟ ବାସନାର ଅହଂକାର" },
                { "word": "କବେ ବିଷ୍ଣୁ-ଜନେ", "meaning": "କେବେ ଭଗବାନଙ୍କ ପ୍ରିୟଜନମାନଙ୍କୁ (ବୈଷ୍ଣବମାନଙ୍କୁ)" },
                { "word": "ଆମି କୋରିବୋ ସମ୍ମାନ", "meaning": "ମୁଁ ସମ୍ମାନ ଜଣାଇବି।" }
            ]
        },
        {
            "id": 3,
            "lyric": "ଗଳ ବସ୍ତ୍ର କୃତାଞ୍ଜଲି ବୈଷ୍ଣବ - ନିକଟେ,\nଦନ୍ତେ ତୃଣ କରି’ ଦାଁଡ଼ାଇବ ନିଷ୍କପଟେ ॥୩।।",
            "translation": "ମୁଁ ଅତି ନମ୍ରତାର ସହ ବେକରେ ବସ୍ତ୍ର ପକାଇ, ଦାନ୍ତରେ କୁଟା ଧରି ଏବଂ ହାତ ଯୋଡ଼ି ନିଷ୍କପଟ ଚିତ୍ତରେ ବୈଷ୍ଣବମାନଙ୍କ ସମୀପରେ ଠିଆ ହେବି ଏବଂ ତାଙ୍କର ଆଜ୍ଞାକୁ ଅପେକ୍ଷା କରିବି।",
            "wordMeanings": [
                { "word": "ଗଳ-ବସ୍ତ୍ର", "meaning": "ବେକରେ ବସ୍ତ୍ର ପକାଇ" },
                { "word": "କୃତାଞ୍ଜଳି", "meaning": "ହାତ ଯୋଡ଼ି" },
                { "word": "ବୈଷ୍ଣବ-ନିକଟେ", "meaning": "ବୈଷ୍ଣବମାନଙ୍କ ସମୀପରେ" },
                { "word": "ଦନ୍ତେ ତୃଣ କରି’", "meaning": "ଦାନ୍ତରେ କୁଟା (ଘାସ) ଧରି" },
                { "word": "ଦାଣ୍ଡାଇବୋ", "meaning": "ଠିଆ ହେବି" },
                { "word": "ନିଷ୍କପଟେ", "meaning": "ନିଷ୍କପଟ ଭାବରେ।" }
            ]
        },
        {
            "id": 4,
            "lyric": "କାଁନ୍ଦିୟା କାଁନ୍ଦିୟା ଜାନାଇବ ଦୁଃଖଗ୍ରାମ ।\nସଂସାର-ଅନଲ ହୈତେ ମାଗିବ ବିଶ୍ରାମ ॥୪॥",
            "translation": "ଅତି ବ୍ୟାକୁଳ ହୋଇ କାନ୍ଦି କାନ୍ଦି ମୁଁ ତାଙ୍କୁ ମୋର ସାଂସାରିକ ଦୁଃଖ ସମୂହ ବିଷୟରେ ଜଣାଇବି ଏବଂ ଏହି ଜଳୁଥିବା ସଂସାର ରୂପକ ଅଗ୍ନିରୁ ମୁକ୍ତି ପାଇବା ପାଇଁ ପ୍ରାର୍ଥନା କରିବି।",
            "wordMeanings": [
                { "word": "କାନ୍ଦିୟା କାନ୍ଦିୟା", "meaning": "କାନ୍ଦି କାନ୍ଦି" },
                { "word": "ଜାନାଇବୋ ଦୁଃଖ-ଗ୍ରାମ", "meaning": "ମୋର ଅଶେଷ ଦୁଃଖ ବିଷୟରେ ଜଣାଇବି" },
                { "word": "ସଂସାର-ଅନଳ ହୋଇତେ", "meaning": "ସଂସାରର ଏହି ଭୟଙ୍କର ନିଆଁରୁ" },
                { "word": "ମାଗିବୋ ବିଶ୍ରାମ", "meaning": "ମୁକ୍ତି ବା ଶାନ୍ତି ମାଗିବି।" }
            ]
        },
        {
            "id": 5,
            "lyric": "ଶୁନିୟା ଆମାର ଦୁଃଖ ବୈଷ୍ଣବ ଠାକୁର\nଆମା - ଲାଗି’ କୃଷ୍ଣେ ଆବେଦିବେନ ପ୍ରଚୁର ॥୫॥",
            "translation": "ମୋର ଏହି ଅତ୍ୟନ୍ତ ଦୁଃଖଦାୟକ କାହାଣୀ ଶୁଣି, ସେହି ପରମ ଦୟାଳୁ ବୈଷ୍ଣବ ଠାକୁର ମୋ' ନିମନ୍ତେ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ନିକଟରେ ବହୁତ ବିନତି କରିବେ।",
            "wordMeanings": [
                { "word": "ଶୁନିୟା ଆମାର ଦୁଃଖ", "meaning": "ମୋର ଦୁଃଖ ଶୁଣି" },
                { "word": "ବୈଷ୍ଣବ ଠାକୁର", "meaning": "ପୂଜ୍ୟ ବୈଷ୍ଣବ ଜନ" },
                { "word": "ଆମା ଲାଗି’ କୃଷ୍ଣେ", "meaning": "ମୋ ପାଇଁ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ" },
                { "word": "ଆବେଦିବେନ ପ୍ରଚୁର", "meaning": "ଅନେକ ବିନତି (ଆବେଦନ) କରିବେ।" }
            ]
        },
        {
            "id": 6,
            "lyric": "ବୈଷ୍ଣବେର ଆବେଦନେ କୃଷ୍ଣ ଦୟାମୟ\nଏ ହେନ ପାମର ପ୍ରତି ହ’ବେନ ସଦୟ ॥୬॥",
            "translation": "ଜଣେ ବୈଷ୍ଣବଙ୍କ ନିଷ୍କପଟ ପ୍ରାର୍ଥନା ଶୁଣି ଦୟାମୟ ଶ୍ରୀକୃଷ୍ଣ ମୋ ପରି ଜଣେ ଅଧମ ଓ ପାପୀ ପ୍ରତି ପ୍ରସନ୍ନ ହେବେ ଏବଂ ମତେ କୃପା କରିବେ।",
            "wordMeanings": [
                { "word": "ବୈଷ୍ଣବେର ଆବେଦନେ", "meaning": "ବୈଷ୍ଣବଙ୍କ ଆବେଦନ (ପ୍ରାର୍ଥନା) ଯୋଗୁଁ" },
                { "word": "କୃଷ୍ଣ ଦୋୟାମୟ", "meaning": "ଦୟାମୟ ଶ୍ରୀକୃଷ୍ଣ" },
                { "word": "ଏ ହେନୋ ପାମର ପ୍ରତି", "meaning": "ମୋ ପରି ପାପୀ ବ୍ୟକ୍ତି ପ୍ରତି" },
                { "word": "ହ’ବେନ ସଦୋୟ", "meaning": "ସଦୟ ହେବେ।" }
            ]
        },
        {
            "id": 7,
            "lyric": "ବିନୋଦେର ନିବେଦନ ବୈଷ୍ଣବ-ଚରଣେ,\nକୃପାକରି’ ସଙ୍ଗେ ଲହ ଏଇ ଅକିଞ୍ଜନେ ॥୭॥",
            "translation": "ଭକ୍ତିବିନୋଦ ବୈଷ୍ଣବମାନଙ୍କ ଚରଣ କମଳରେ ଏହି ପ୍ରାର୍ଥନା କରୁଛନ୍ତି, \"ହେ ପ୍ରଭୁ! ଦୟାକରି ଏହି ନଗଣ୍ୟ ଓ ନିଃସ୍ୱ ବ୍ୟକ୍ତିକୁ ନିଜର ଶରଣରେ ନିଅନ୍ତୁ ଏବଂ ନିଜର ସଙ୍ଗ ପ୍ରଦାନ କରନ୍ତୁ।\"",
            "wordMeanings": [
                { "word": "ବିନୋଦେର ନିବେଦନ", "meaning": "ଭକ୍ତିବିନୋଦଙ୍କ ନିବେଦନ" },
                { "word": "ବୈଷ୍ଣବ-ଚରଣେ", "meaning": "ବୈଷ୍ଣବଙ୍କ ଚରଣରେ" },
                { "word": "କୃପା କରି’ ସଙ୍ଗେ ଲୋହୋ", "meaning": "କୃପା କରି ନିଜ ସଙ୍ଗରେ ନିଅନ୍ତୁ" },
                { "word": "ଏଇ ଅକିଞ୍ଚନେ", "meaning": "ଏହି ଦରିଦ୍ର/ନଗଣ୍ୟ ବ୍ୟକ୍ତିକୁ।" }
            ]
        }
    ]
};

// 2. Add to songsContent.ts
let contentBody = fs.readFileSync(contentPath, 'utf8');
const exportString = `\nexport const SONG_KABESRICHAITANYAMORE_STRUCTURED: StructuredSong = ${JSON.stringify(SONG_KABESRICHAITANYAMORE_STRUCTURED, null, 4)};\n`;
if (!contentBody.includes('SONG_KABESRICHAITANYAMORE_STRUCTURED')) {
    fs.appendFileSync(contentPath, exportString);
}

// 3. Add to resources.ts
let resourcesBody = fs.readFileSync(resourcesPath, 'utf8');
const resourceEntry = `      {
        id: 'song-kabesrichaitanyamore',
        title: 'କବେ ଶ୍ରୀ ଚୈତନ୍ୟ ମୋରେ (Kabe Sri Chaitanya More)',
        title_odia: 'କବେ ଶ୍ରୀ ଚୈତନ୍ୟ ମୋରେ',
        title_english: 'Kabe Sri Chaitanya More',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },`;

if (!resourcesBody.includes('song-kabesrichaitanyamore')) {
    const lastBracket = resourcesBody.lastIndexOf('];');
    resourcesBody = resourcesBody.substring(0, lastBracket).trim();
    if (resourcesBody.endsWith(',')) {
        resourcesBody += '\n' + resourceEntry + '\n];';
    } else {
        resourcesBody += ',\n' + resourceEntry + '\n];';
    }
    fs.writeFileSync(resourcesPath, resourcesBody);
}

console.log('✅ Localhost Updated: Kabe Sri Chaitanya More added.');
