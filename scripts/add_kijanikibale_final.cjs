const fs = require('fs');
const contentPath = 'src/data/songsContent.ts';
const resourcesPath = 'src/data/resources.ts';

// 1. Prepare Structured JSON (Exact User Odia Text)
const SONG_KIJANIKIBALE_STRUCTURED = {
    "verses": [
        {
            "id": 1,
            "lyric": "କି ଜାନି କି ବଲେ,  ତୋମାର ଧାମେତେ,\nହଇନୁ ଶରଣାଗତ ।\nତୁମି ଦୟାମୟ,  ପତିତ-ପାବନ,\nପତିତ-ତାରଣେ ରତ (୧)",
            "translation": "ମୁଁ ଜାଣିନାହିଁ କେଉଁ ଶକ୍ତି ବଳରେ ମୁଁ ଆପଣଙ୍କ ଧାମରେ ଶରଣ ନେଇଛି। ଆପଣ ପରମ ଦୟାମୟ ଏବଂ ପତିତପାବନ, ଯିଏ ସବୁବେଳେ ଅଧମମାନଙ୍କୁ ଉଦ୍ଧାର କରିବାରେ ବ୍ରତୀ।",
            "wordMeanings": [
                { "word": "କି ଜାନି କି ବଲେ", "meaning": "କେଉଁ ଶକ୍ତି ବଳରେ ଜାଣିନାହିଁ" },
                { "word": "ତୋମାର ଧାମେତେ", "meaning": "ତୁମ ଧାମରେ" },
                { "word": "ହୋଇନୁ ଶରଣାଗତ", "meaning": "ଶରଣାଗତ ହେଲି" },
                { "word": "ତୁମି ଦୋୟା-ମୟ", "meaning": "ତୁମେ ଦୟାମୟ" },
                { "word": "ପତିତ-ପାବନ", "meaning": "ପତିତମାନଙ୍କୁ ପବିତ୍ର କରୁଥିବା ପ୍ରଭୁ" },
                { "word": "ପତିତ-ତାରଣେ ରତ", "meaning": "ପତିତମାନଙ୍କୁ ଉଦ୍ଧାର କରିବାରେ ସଦା ନିମଗ୍ନ।" }
            ]
        },
        {
            "id": 2,
            "lyric": "ଭରସା ଆମାର,  ଏଇ ମାତ୍ର ନାଥ!\nତୁମି ତ’ କରୁଣାମୟ ।\nତବ ଦୟା-ପାତ୍ର,  ନାହି ମୋର ସମ,\nଅବଶ୍ୟ ଘୁଚାବେ ଭୟ (୨)",
            "translation": "ହେ ପ୍ରଭୁ! ଆପଣ କରୁଣାମୟ, ଏହା ହିଁ ମୋର ଏକମାତ୍ର ଭରସା। ମୋ ପରି ଆପଣଙ୍କ ଦୟାର ଯୋଗ୍ୟ ପାତ୍ର ଆଉ କେହି ନାହିଁ, ତେଣୁ ଆପଣ ନିଶ୍ଚିତ ଭାବେ ମୋର ସମସ୍ତ ଭୟ ଦୂର କରିବେ।",
            "wordMeanings": [
                { "word": "ଭରସା ଆମାର", "meaning": "ମୋର ଭରସା" },
                { "word": "ଏଇ ମାତ୍ର ନାଥ!", "meaning": "କେବଳ ଏତିକି ହେ ପ୍ରଭୁ!" },
                { "word": "ତୁମି ତୋ’ କରୁଣା-ମୟ", "meaning": "ତୁମେ ତ ନିଶ୍ଚୟ କରୁଣାମୟ" },
                { "word": "ତବ ଦୋୟା-ପାତ୍ର", "meaning": "ତୁମ ଦୟାର ପାତ୍ର" },
                { "word": "ନାହି ମୋର ସମ", "meaning": "ମୋ ପରି (ଅଧମ) କେହି ନାହିଁ" },
                { "word": "ଅବଶ୍ୟ ଘୁଚାବେ ଭୟ", "meaning": "ନିଶ୍ଚୟ ମୋର ଭୟ ଦୂର କରିବ।" }
            ]
        },
        {
            "id": 3,
            "lyric": "ଆମାରେ ତାରିତେ,  କାହାରୋ ଶକତି,\nଅବନୀ-ଭିତରେ ନାହିଁ ।\nଦୟାଲ ଠାକୁର!  ଘୋଷଣା ତୋମାର,\nଅଧମ ପାମରେ ତ୍ରାହି (୩)",
            "translation": "ଏହି ପୃଥିବୀରେ ଏପରି କେହି ନାହିଁ ଯାହାର ମତେ ଉଦ୍ଧାର କରିବାର ଶକ୍ତି ଅଛି। ହେ ଦୟାମୟ ପ୍ରଭୁ! ଅଧମ ଓ ପାପୀମାନଙ୍କୁ ଉଦ୍ଧାର କରିବା ହିଁ ଆପଣଙ୍କର ପ୍ରତିଜ୍ଞା।",
            "wordMeanings": [
                { "word": "ଆମାରେ ତାରିତେ", "meaning": "ମତେ ଉଦ୍ଧାର କରିବାକୁ" },
                { "word": "କାହାରୋ ଶକତି", "meaning": "କାହାର ଶକ୍ତି" },
                { "word": "ଅବନୀ-ଭିତୋରେ ନାହି", "meaning": "ଏହି ପୃଥିବୀରେ ନାହିଁ" },
                { "word": "ଦୋୟାଲ ଠାକୁର!", "meaning": "ହେ ଦୟାମୟ ପ୍ରଭୁ!" },
                { "word": "ଘୋଷଣା ତୋମାର", "meaning": "ତୁମର ଘୋଷଣା ଅଟେ" },
                { "word": "ଅଧମ ପାମରେ ତ୍ରାହି", "meaning": "ଅଧମ ଓ ପାପୀମାନଙ୍କୁ ରକ୍ଷା କରିବା।" }
            ]
        },
        {
            "id": 4,
            "lyric": "ସକଲ ଛାଡିୟା,  ଆସିୟାଛି ଆମି,\nତୋମାର ଚରଣେ ନାଥ!\nଆମି ନିତ୍ୟ-ଦାସ,  ତୁମି ପାଲୟିତା,\nତୁମି ଗୋପ୍ତା, ଜଗନ୍ନାଥ (୪)",
            "translation": "ହେ ପ୍ରଭୁ! ସବୁକିଛି ତ୍ୟାଗ କରି ମୁଁ ଆପଣଙ୍କ ଚରଣ ତଳେ ଆସି ପହଞ୍ଚିଛି। ମୁଁ ଆପଣଙ୍କର ଚିରନ୍ତନ ସେବକ, ଏବଂ ହେ ଜଗନ୍ନାଥ! ଆପଣ ହିଁ ମୋର ପାଳନକର୍ତ୍ତା ଓ ରକ୍ଷାକର୍ତ୍ତା।",
            "wordMeanings": [
                { "word": "ସକଲ ଛାଡ଼ିୟା", "meaning": "ସବୁକିଛି ତ୍ୟାଗ କରି" },
                { "word": "ଆସିୟାଛି ଆମି", "meaning": "ମୁଁ ଆସିଛି" },
                { "word": "ତୋମାର ଚରଣେ ନାଥ!", "meaning": "ତୁମ ଚରଣରେ ହେ ପ୍ରଭୁ!" },
                { "word": "ଆମି ନିତ୍ୟ-ଦାସ", "meaning": "ମୁଁ ତୁମର ଚିରନ୍ତନ ସେବକ" },
                { "word": "ତୁମି ପାଲୟିତା", "meaning": "ତୁମେ ପାଳନକର୍ତ୍ତା" },
                { "word": "ତୁମି ଗୋପ୍ତା, ଜଗନ୍ନାଥ!", "meaning": "ତୁମେ ରକ୍ଷାକର୍ତ୍ତା, ହେ ଜଗନ୍ନାଥ!" }
            ]
        },
        {
            "id": 5,
            "lyric": "ତୋମାର ସକଲ,  ଆମି ମାତ୍ର ଦାସ,\nଆମାର ତାରିବେ ତୁମି\nତୋମାର ଚରଣ,  କରିନୁ ବରଣ,\nଆମାର ନାହିଁ ତ’ ଆମି (୫)",
            "translation": "ସବୁକିଛି ଆପଣଙ୍କର, ମୁଁ କେବଳ ଜଣେ ସେବକ। ଆପଣ ହିଁ ମତେ ଉଦ୍ଧାର କରିବେ। ମୁଁ ଆପଣଙ୍କ ଚରଣକୁ ହିଁ ଆଶ୍ରୟ ଭାବେ ବରି ନେଇଛି, ମୋର ବୋଲି ଏହି ଜଗତରେ ଆଉ କିଛି ନାହିଁ, ଏପରିକି ମୁଁ ନିଜେ ମଧ୍ୟ ନିଜର ନୁହେଁ।",
            "wordMeanings": [
                { "word": "ତୋମାର ସକଲ", "meaning": "ସବୁକିଛି ତୁମର" },
                { "word": "ଆମି ମାତ୍ର ଦାସ", "meaning": "ମୁଁ କେବଳ ଜଣେ ସେବକ" },
                { "word": "ଆମାରେ ତାରିବେ ତୁମି", "meaning": "ମତେ ତୁମେ ହିଁ ଉଦ୍ଧାର କରିବ" },
                { "word": "ତୋମାର ଚରଣ", "meaning": "ତୁମର ଚରଣକୁ" },
                { "word": "କୋରିନୁ ବରଣ", "meaning": "ଆଶ୍ରୟ ଭାବେ ଗ୍ରହଣ କଲି" },
                { "word": "ଆମାର ନାହି ତୋ’ ଆମି", "meaning": "ମୁଁ ଆଉ ନିଜର ହୋଇ ରହିନାହିଁ।" }
            ]
        },
        {
            "id": 6,
            "lyric": "ଭକତିବିନୋଦ,  କାନ୍ଦିୟା ଶରଣ,\nଲ’ୟେଛେ ତୋମାର ପାୟ ।\nକ୍ଷମି’ ଅପରାଧ,  ନାମେ ରୁଚି ଦିୟା,\nପାଲନ କରହେ ତାୟ୍(୬)",
            "translation": "ଭକ୍ତିବିନୋଦ କାନ୍ଦି କାନ୍ଦି ଆପଣଙ୍କ ଚରଣ ତଳେ ଶରଣ ନେଇଛନ୍ତି। ହେ ପ୍ରଭୁ! ତାଙ୍କର ସମସ୍ତ ଅପରାଧ କ୍ଷମା କରନ୍ତୁ ଏବଂ ନିଜ ନାମ ପ୍ରତି ରୁଚି ପ୍ରଦାନ କରି ତାଙ୍କୁ ରକ୍ଷା କରନ୍ତୁ।",
            "wordMeanings": [
                { "word": "ଭକତିବିନୋଦ", "meaning": "ଭକ୍ତିବିନୋଦ" },
                { "word": "କାନ୍ଦିୟା ଶରଣ", "meaning": "କାନ୍ଦି କାନ୍ଦି ଶରଣ" },
                { "word": "ଲୋ’ୟେଛେ ତୋମାର ପାୟ", "meaning": "ତୁମ ପାଦତଳେ ନେଇଛି" },
                { "word": "କ୍ଷମି’ ଅପରାଧ", "meaning": "ଅପରାଧ କ୍ଷମା କରି" },
                { "word": "ନାମେ ରୁଚି ଦିୟା", "meaning": "ନାମ ଜପରେ ଅନୁରାଗ (ରୁଚି) ଦେଇ" },
                { "word": "ପାଲନ କୋରୋହେ ତାୟ", "meaning": "ତାଙ୍କୁ ରକ୍ଷା କରନ୍ତୁ।" }
            ]
        }
    ]
};

// 2. Add to songsContent.ts
let contentBody = fs.readFileSync(contentPath, 'utf8');
const exportString = `\nexport const SONG_KIJANIKIBALE_STRUCTURED: StructuredSong = ${JSON.stringify(SONG_KIJANIKIBALE_STRUCTURED, null, 4)};\n`;

if (contentBody.includes('export const SONG_KIJANIKIBALE_STRUCTURED')) {
    // Overwrite previous attempt
    const startIdx = contentBody.indexOf('export const SONG_KIJANIKIBALE_STRUCTURED');
    const endIdx = contentBody.indexOf('export const', startIdx + 1);
    const oldContent = contentBody.substring(startIdx, endIdx === -1 ? contentBody.length : endIdx);
    contentBody = contentBody.replace(oldContent, exportString);
    fs.writeFileSync(contentPath, contentBody);
} else {
    fs.appendFileSync(contentPath, exportString);
}

// 3. Add to resources.ts
let resourcesBody = fs.readFileSync(resourcesPath, 'utf8');
const resourceEntry = `      {
        id: 'song-kijanikibale',
        title: 'କି ଜାନି କି ବଲେ (Ki Jani Ki Bale)',
        title_odia: 'କି ଜାନି କି ବଲେ',
        title_english: 'Ki Jani Ki Bale',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },`;

if (!resourcesBody.includes('song-kijanikibale')) {
    const lastBracket = resourcesBody.lastIndexOf('];');
    resourcesBody = resourcesBody.substring(0, lastBracket).trim();
    if (resourcesBody.endsWith(',')) {
        resourcesBody += '\n' + resourceEntry + '\n];';
    } else {
        resourcesBody += ',\n' + resourceEntry + '\n];';
    }
    fs.writeFileSync(resourcesPath, resourcesBody);
}

console.log('✅ Localhost Updated: Ki Jani Ki Bale added with official text.');
