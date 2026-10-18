const path = require('path');
const fs = require('fs');
const { synthesizeOdiaTTS } = require('./bhashini_tts.cjs');

const verses = [
  {
    id: 1,
    translation: "ହେ ପଥଭ୍ରଷ୍ଟ ମନ! ତୁ ମୋର ନିତାଈଙ୍କୁ ପାଇପାରିବୁ ନାହିଁ କି ଗୌରଙ୍କୁ ମଧ୍ୟ ପାଇପାରିବୁ ନାହିଁ। ତୁ ନିଜର ସାରା ଶରୀରରେ ତିଳକ ତ ବୋଳି ହୋଇଛୁ, କିନ୍ତୁ କେବଳ ସେତିକିରେ ଗୌର ପ୍ରଭୁ ମିଳନ୍ତି ନାହିଁ।"
  },
  {
    id: 2,
    translation: "ଯଦି ତୋର ଭିତର ଏବଂ ବାହାର ସଠିକ୍ ବା ପବିତ୍ର ନୁହେଁ, ତେବେ ଗୌର ପ୍ରେମ କଣ କେଉଁଠି ମିଳିପାରେ? ଯଦି ତୋର ଉପାସନା ସଠିକ୍ ନୁହେଁ, ତେବେ ତୁ ସେହି ସୁନା ସଦୃଶ ଅମୂଲ୍ୟ ପ୍ରେମ ଟିକିଏ ହେଲେ ବି ପାଇବୁ ନାହିଁ।"
  },
  {
    id: 3,
    translation: "ପ୍ରଥମେ ନିଜ ମନକୁ ଶୁଦ୍ଧ କର, ତେବେ ଯାଇ ଗୌରଙ୍କ ପ୍ରତି ପ୍ରେମଭକ୍ତି ଜାଗ୍ରତ ହେବ। କେବଳ ପ୍ରେମରେ ପଡ଼ି ତିଳକ ଲଗାଇଦେଲେ ଗୌରଙ୍କ ଭଜନ ହୋଇଯାଏ ନାହିଁ।"
  },
  {
    id: 4,
    translation: "ମୋର ଦୟାମୟ ନିତାଈ ସେହି ବ୍ୟକ୍ତିଙ୍କ ଘରେ ରହନ୍ତି, ଯିଏ ସାଧୁ-ସଙ୍ଗକୁ ଆଦର କରେ। ଯଦି ତୁ ଭକ୍ତିର ସହିତ ପ୍ରଭୁଙ୍କୁ ଡାକିବୁ, ତେବେ ତୋର ଜୀବନ ସଫଳ ହେବ ଏବଂ ତୁ ନିଶ୍ଚୟ ଉଦ୍ଧାର ପାଇବୁ।"
  }
];

async function run() {
  const outputDir = path.join(__dirname, '../public/audio/tts');
  console.log(`Starting clean TTS regeneration for Amar Nitai Mile Na (${verses.length} verses)...`);

  for (const verse of verses) {
    const mp3File = path.join(outputDir, `amar_nitai_v${verse.id}.mp3`);
    try {
      console.log(`Synthesizing clean MP3 for verse ${verse.id}...`);
      await synthesizeOdiaTTS(verse.translation, mp3File, { kbps: 64 });
      await new Promise(r => setTimeout(r, 1000));
    } catch (err) {
      console.error(`❌ Failed on verse ${verse.id}:`, err.message);
    }
  }

  console.log('\n🎉 Finished regenerating all clean TTS MP3 audio files!');
}

run().catch(console.error);
