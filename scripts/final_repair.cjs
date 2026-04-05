const fs = require('fs');
const path = 'src/data/songsContent.ts';

const emonaDurmati = {
  verses: [
    { id: 1, lyric: "(ପ୍ରଭୁହେ !)\nଏ ମନ ଦୁର୍ମତି ସଂସାର-ଭିତରେ,\nପଡ଼ିୟା ଆଛିନୁ ଆମି ।\nତବ ନିଜ- ଜନ, କୋନ ମହାଜନେ,\nପାଠାଇୟା ଦିଲେ ତୁମି ||", translation: "ହେ ପ୍ରଭୁ! ମୁଁ ଜଣେ ଅତ୍ୟନ୍ତ ମନ୍ଦ ବୁଦ୍ଧି ସମ୍ପନ୍ନ ବ୍ୟକ୍ତି ଏବଂ ଏହି ସଂସାର ମଧ୍ୟରେ ପଡ଼ି ରହିଛି, କିନ୍ତୁ ତୁମେ ଜଣେ ମହାପୁରୁଷଙ୍କୁ (ତୁମର ନିଜର ପାର୍ଷଦଙ୍କୁ) ମତେ ଉଦ୍ଧାର କରିବା ପାଇଁ ପଠାଇଲ।", wordMeanings: [ { word: "(ପ୍ରଭୁ ହେ!)", meaning: "ହେ ପ୍ରଭୁ!" }, { word: "ଏମନ", meaning: "ଏହିପରି" }, { word: "ଦୁର୍ମତି", meaning: "ମନ୍ଦ ବୁଦ୍ଧି ସମ୍ପନ୍ନ" }, { word: "ସଂସାର", meaning: "ଭୌତିକ ଜଗତ" }, { word: "ଭିତୋରେ", meaning: "ମଧ୍ୟରେ" }, { word: "ପୋଡ଼ିୟା", meaning: "ପଡ଼ି" }, { word: "ଆଛିନୁ", meaning: "ଅଛି" }, { word: "ଆମି", meaning: "ମୁଁ" }, { word: "ତବ", meaning: "ତୁମର" }, { word: "ନିଜ-ଜନ", meaning: "ନିଜର ଆତ୍ମୀୟ/ପାର୍ଷଦ" }, { word: "କୋନୋ", meaning: "କେଉଁ" }, { word: "ମହାଜନେ", meaning: "ମହାପୁରୁଷ (ଗୁରୁଦେବ)" }, { word: "ପାଠାଇୟା", meaning: "ପଠାଇ" }, { word: "ଦିଲେ", meaning: "ଦେଲ" }, { word: "ତୁମି", meaning: "ତୁମେ।" } ] },
    { id: 2, lyric: "ଦୟା କରିମୋରେ, ପତିତ ଦେଖିୟା,\nକହିଲ ଆମାରେ ଗିୟା ।\nଓହେ ଦୀନଜନ, ଶୁନ ଭାଲ କଥା,\nଉଲ୍ଲସିତ ହ’ବେ ହିୟା ||", translation: "ମୋର ପତିତ ଅବସ୍ଥା ଦେଖି ସେ ମୋ ଉପରେ ଦୟା କଲେ ଏବଂ ମୋ ପାଖକୁ ଆସି କହିଲେ, “ହେ ଦୀନ ପ୍ରାଣ! ଏହି ଉତ୍ତମ ବାର୍ତ୍ତା ଶୁଣ, ଏହା ଶୁଣିଲେ ତୁମର ହୃଦୟ ଆନନ୍ଦିତ ହୋଇଉଠିବ।", wordMeanings: [ { word: "ଦୟା କରି’", meaning: "ଦୟା କରି" }, { word: "ମୋରେ", meaning: "ମତେ" }, { word: "ପତିତ", meaning: "ପତିତ/ଅଧମ" }, { word: "ଦେଖିୟା", meaning: "ଦେଖି" }, { word: "କୋହିଲୋ", meaning: "କହିଲେ" }, { word: "ଆମାରେ", meaning: "ମତେ" }, { word: "ଗିୟା", meaning: "ଯାଇ" }, { word: "ଓହେ", meaning: "ଓହୋ!" }, { word: "ଦୀନ-ଜନ", meaning: "ନମ୍ର/ଦୀନ ବ୍ୟକ୍ତି" }, { word: "ଶୁନୋ", meaning: "ଶୁଣ" }, { word: "ଭାଲୋ କଥା", meaning: "ଭଲ କଥା/ଉତ୍ତମ ବାର୍ତ୍ତା" }, { word: "ଉଲ୍ଲସିତ", meaning: "ଆନନ୍ଦିତ" }, { word: "ହ'ବେ", meaning: "ହେବ" }, { word: "ହିୟା", meaning: "ହୃଦୟ।" } ] },
    { id: 3, lyric: "ତୋମାରେ ତାରିତେ ଶ୍ରීକୃଷ୍ଣଚୈତନ୍ୟ,\nନବଦ୍ଵୀପେ ଅବତାର ।\nତୋମା ହେନ କତ, ଦୀନହୀନ ଜନେ,\nକରିଲେ ନ ଭବପାର ||", translation: "“ତୁମକୁ ଉଦ୍ଧାର କରିବା ପାଇଁ ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ନବଦ୍ୱୀପରେ ଅବତାର ଗ୍ରହଣ କରିଛନ୍ତି। ସେ ତୁମ ପରି ଅନେକ ଦୀନହୀନ ଲୋକଙ୍କୁ ଏହି ଭବସାଗରରୁ ସଫଳତାର ସହ ପାର କରିଛନ୍ତି।", wordMeanings: [ { word: "ତୋମାରେ", meaning: "ତୁମକୁ" }, { word: "ତାରିତେ", meaning: "ଉଦ୍ଧାର କରିବା ପାଇଁ" }, { word: "ଶ୍ରී-କୃଷ୍ଣ-ଚୈତନ୍ୟ", meaning: "ଶ୍ରීକୃଷ୍ଣ ଚୈତନ୍ୟ" }, { word: "ନବଦ୍ୱୀପେ", meaning: "ନବଦ୍ୱୀପରେ" }, { word: "ଅବତାର", meaning: "ଅବତାର ଗ୍ରହଣ କରିଛନ୍ତି" }, { word: "ତୋମା", meaning: "ତୁମ" }, { word: "ହେନୋ", meaning: "ପରି" }, { word: "କୋତୋ", meaning: "କେତେ ଯେ" }, { word: "ଦୀନ ହୀନ ଜନେ", meaning: "ଦୀନହୀନ ଲୋକଙ୍କୁ" }, { word: "କରିଲେନ", meaning: "କଲେ" }, { word: "ଭବ-ପାର", meaning: "ସଂସାରରୁ ପାର।" } ] },
    { id: 4, lyric: "ବେଦେର ପ୍ରତିଜ୍ଞା,ରାଖିବାର ତରେ,\nରୁକ୍ମବର୍ଣ୍ଣ ବିପ୍ରସୁତ ।\nମହାପ୍ରଭୁ ନାମେ, ନଦୀୟା ମାତାୟ,\nସଙ୍ଗେ ଭାଇ ଅବଧୂତ ||", translation: "“ବେଦର ଭବିଷ୍ୟବାଣୀକୁ ସତ୍ୟ କରିବା ପାଇଁ, ସେ ସୁବର୍ଣ୍ଣ ବର୍ଣ୍ଣରେ ଜଣେ ବ୍ରାହ୍ମଣ ପୁତ୍ର ଭାବରେ ଆବିର୍ଭୂତ ହୋଇଛନ୍ତି। ‘ମହାପ୍ରଭୁ’ ନାମ ଧାରଣ କରି ସେ ନିଜ ଭାଇ ନିତ୍ୟାନନ୍ଦଙ୍କ ସହ ମିଶି ସମଗ୍ର ନଦୀୟାକୁ ପ୍ରේମରେ ଉନ୍ମାଦିତ କରିଦେଇଛନ୍ତି।", wordMeanings: [ { word: "ବେଦେର", meaning: "ବେଦର" }, { word: "ପ୍ରତିଜ୍ଞା", meaning: "ଭବିଷ୍ୟବାଣୀ" }, { word: "ରାଖିବାର ତରେ", meaning: "ରକ୍ଷା କରିବା ପାଇଁ" }, { word: "ରୁକ୍ମ-ବର୍ଣ୍ଣ", meaning: "ସୁବର୍ଣ୍ଣ ବର୍ଣ୍ଣ" }, { word: "ବିପ୍ର-ସୁତ", meaning: "ବ୍ରାହ୍ମଣଙ୍କ ପୁତ୍ର" }, { word: "ମହାପ୍ରଭୁ", meaning: "ମହାପ୍ରଭୁ" }, { word: "ନାମେ", meaning: "ନାମରେ" }, { word: "ନଦୀୟା", meaning: "ନଦୀୟାକୁ" }, { word: "ମାତାୟ", meaning: "ଉନ୍ମାଦିତ କରୁଛନ୍ତି" }, { word: "ସଙ୍ଗେ", meaning: "ସାଥିରେ" }, { word: "ଭାଇ", meaning: "ଭାଇ" }, { word: "ଅବଧୂତ", meaning: "ଅବଧୂତ (ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁ)।" } ] },
    { id: 5, lyric: "ନନ୍ଦସୁତ ଯିନି, ଚୈତନ୍ୟ ଗୋସାଇଁ,\nନିଜନାମ କରିଦାନ ॥\nତାରିଲ ଜଗତ, ତୁମିଓ ଯାଇୟା,\nଲହ ନିଜ ପରିତ୍ରାଣ ||", translation: "“ଶ୍ରୀ ଚୈତନ୍ୟ ଗୋସାଇଁ, ଯିଏ ସ୍ୱୟଂ ନନ୍ଦ-ନନ୍ଦନ କୃଷ୍ଣ, ସେ ନିଜ ନାମ ବିତରଣ କରି ସମଗ୍ର ଜଗତକୁ ଉଦ୍ଧାର କରିଛନ୍ତି। ତୁମେ ମଧ୍ୟ ଯାଇ ତାଙ୍କ ଶରଣାପନ୍ନ ହୋଇ ନିଜର ମୁକ୍ତି ଗ୍ରହଣ କର।”", wordMeanings: [ { word: "ନନ୍ଦ-ସୁତ", meaning: "ନନ୍ଦଙ୍କ ପୁତ୍ର (କୃଷ୍ଣ)" }, { word: "ଜିନି", meaning: "ଯିଏ" }, { word: "ଚୈତନ୍ୟ ଗୋସାଇଁ", meaning: "ଚୈତନ୍ୟ ମହାପ୍ରଭୁ" }, { word: "ନିଜ-ନାମ", meaning: "ନିଜର ନାମ" }, { word: "କରି' ଦାନ", meaning: "ଦାନ କରି" }, { word: "ତାରିଲୋ", meaning: "ଉଦ୍ଧାର କଲେ" }, { word: "ଜଗତ", meaning: "ଜଗତକୁ" }, { word: "ତୁମି-ଓ", meaning: "ତୁମେ ମଧ୍ୟ" }, { word: "ଯାଇୟା", meaning: "ଯାଇ" }, { word: "ଲୋହୋ", meaning: "ଗ୍ରହଣ କର" }, { word: "ନିଜ-ପରିତ୍ରାଣ", meaning: "ନିଜର ମୁକ୍ତି।" } ] },
    { id: 6, lyric: "ସେ କଥା ଶୁନିୟା, ଆସିୟାଛି, ନାଥ,\nତୋମାର ଚରଣ ତଲେ ।\nଭକତିବିନୋଦ, କାଁନ୍ଦିୟା କାଁନ୍ଦିୟା,\nଆପନ-କାହିନୀ ବଲେ ||", translation: "ହେ ପ୍ରଭୁ! ସେହି କଥା/ବାର୍ତ୍ତା ଶୁଣି ମୁଁ ତୁମ ଚରଣ ତଳକୁ ଆସିଛି। ଭକ୍ତିବିନୋଦ ଅତି ବ୍ୟାକୁଳ ହୋଇ କାନ୍ଦି କାନ୍ଦି ତୁମ ଆଗରେ ନିଜ ଜୀବନର କାହାଣୀ ବ୍ୟକ୍ତ କରୁଛନ୍ତି।", wordMeanings: [ { word: "ସେ କଥା", meaning: "ସେହି କଥା/ବାର୍ତ୍ତା" }, { word: "ଶୁନିୟା", meaning: "ଶୁଣି" }, { word: "ଆସିୟାଛି", meaning: "ମୁଁ ଆସିଛି" }, { word: "ନାଥ!", meaning: "ହେ ପ୍ରଭୁ!" }, { word: "ତୋମାର", meaning: "ତୁମର" }, { word: "ଚରଣ-ତଲେ", meaning: "ଚରଣ ତଳେ" }, { word: "ଭକତିବିନୋଦ", meaning: "ଭକତିବିନୋଦ" }, { word: "କାନ୍ଦିୟା କାନ୍ଦିୟା", meaning: "କାନ୍ଦି କାନ୍ଦି" }, { word: "ଆପନ-କାହିନୀ", meaning: "ନିଜର କାହାଣୀ" }, { word: "ବୋଲେ", meaning: "କହୁଛନ୍ତି।" } ] }
  ]
};

const gayGora = {
  verses: [
    { id: 1, lyric: "ଗାୟ ଗୋରା ମଧୁର ସ୍ଵରେ ।\nହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ କୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ ।\nହରେ ରାମ ହରେ ରାମ ରାମ ରାମ ହରେ ହରେ ||", translation: "ଭଗବାନ ଗୌରସୁନ୍ଦର ଅତି ମଧୁର ସ୍ୱରରେ ଗାଉଛନ୍ତି, 'ହରେ କୃଷ୍ଣ, ହରେ କୃଷ୍ଣ, କୃଷ୍ଣ କୃଷ୍ଣ, ହରେ ହରେ / ହରେ ରାମ, ହରେ ରାମ, ରାମ ରାମ, ହରେ ହରେ ।'", wordMeanings: [ { word: "ଗାୟ", meaning: "ଗାଉଛନ୍ତି" }, { word: "ଗୋରା", meaning: "ଭଗବାନ ଗୌରସୁନ୍ଦର" }, { word: "ମଧୁର ସ୍ୱରରେ", meaning: "ଅତି ମଧୁର ସ୍ୱରରେ।" } ] },
    { id: 2, lyric: "ଗୃହେ ଥାକ, ବନେ ଥାକ, \nସଦା ‘ହରି’ ବଲେ ଡ଼ାକ,\nସୁଖେ - ଦୁଃଖେ ଭୁଲ ନା’କ, ବଦନେ ହରିନାମ କର ରେ ||", translation: "ଆପଣ ଗୃହସ୍ଥ ହୁଅନ୍ତୁ ବା ସନ୍ନ୍ୟାସୀ, ସବୁବେଳେ 'ହରି, ହରି!' ବୋଲି ଜପ କରନ୍ତୁ । ସୁଖ ହେଉ କିମ୍ବା ଦୁଃଖ, ଏହି ନାମ ଜପକୁ କେବେବି ଭୁଲନ୍ତୁ ନାହିଁ । କେବଳ ନିଜ ମୁଖକୁ ହରି-ନାମରେ ପୂର୍ଣ୍ଣ କରିଦିଅନ୍ତୁ ।", wordMeanings: [ { word: "ଗୃହେ ଥାକୋ", meaning: "ଘରେ ରୁହ" }, { word: "ବନେ ଥାକୋ", meaning: "କିମ୍ବା ବନରେ ରୁହ" }, { word: "ସଦା", meaning: "ସବୁବେଳେ" }, { word: "'ହରି'", meaning: "ହରିଙ୍କ ପବିତ୍ର ନାମ" }, { word: "ବୋଲେ' ଡାକୋ", meaning: "ଉଚ୍ଚ ସ୍ୱରରେ ଜପ କର" }, { word: "ସୁଖେ ଦୁଃଖେ", meaning: "ସୁଖରେ ହେଉ କିମ୍ବା ଦୁଃଖରେ" }, { word: "ଭୁଲୋ ନା'କୋ", meaning: "ଭୁଲିଯାଅ ନାହିଁ" }, { word: "ବଦନେ", meaning: "ନିଜ ଓଠରେ/ମୁଖରେ" }, { word: "ହରି-ନାମ", meaning: "ପବିତ୍ର ହରି ନାମ" }, { word: "କୋରୋ ରେ", meaning: "ଦୟାକରି ଜପ କର!" } ] },
    { id: 3, lyric: "ମାୟାଜାଲେ ବଦ୍ଧ ହ’ୟେ,\nଆଛ ମିଛେ କାଜ ଲ’ୟେ ।\nଏଖନଓ ଚେତନ ପେୟେ, ‘ରାଧା-ମାଧବ’ ନାମ ବଲରେ ||", translation: "ଆପଣ ମାୟାର ଜାଲରେ ବାନ୍ଧି ହୋଇ ନିଷ୍ଫଳ ପରିଶ୍ରମ କରିବାକୁ ବାଧ୍ୟ ହେଉଛନ୍ତି । ଏବେ ଆପଣ ମନୁଷ୍ୟ ଜନ୍ମରେ ପୂର୍ଣ୍ଣ ଚେତନା ପ୍ରାପ୍ତ କରିଛନ୍ତି, ତେଣୁ ରାଧା-ମାଧବଙ୍କ ନାମ ଜପ କରନ୍ତୁ ।", wordMeanings: [ { word: "ମାୟା-ଜାଲେ", meaning: "ମାୟାର ଜାଲରେ" }, { word: "ବଦ୍ଧ ହୋ'ୟେ", meaning: "ଆପଣ ବାନ୍ଧି ହୋଇଛନ୍ତି" }, { word: "ଆଛୋ", meaning: "ଆପଣଙ୍କର" }, { word: "ମିଛେ କାଜ", meaning: "ନିଷ୍ଫଳ ପରିଶ୍ରମ" }, { word: "ଲୋ'ୟେ", meaning: "ଗ୍ରହଣ କରି" }, { word: "ଏଖୋନ", meaning: "ଏବେ" }, { word: "ଚେତନ ପେ'ୟେ", meaning: "ପୂର୍ଣ୍ଣ ଚେତନା ପ୍ରାପ୍ତ କରି" }, { word: "'ରାଧା-ମାଧବ' ନାମ", meaning: "ଶ୍ରୀ ଶ୍ରୀ ରାଧା ଏବଂ ମାଧବଙ୍କ ନାମ" }, { word: "ବୋଲୋ ରେ", meaning: "ଜପ କରନ୍ତୁ!" } ] },
    { id: 4, lyric: "ଜୀବନ ହଇଲ ଶେଷ,\nନା ଭଜିଲେ ହୃଷିକେଶ,\nଭକ୍ତି ବିନୋଦୋପଦେଶ, ଏକବାର ନାମ ରସେ ମାତରେ ||", translation: "ଆପଣଙ୍କ ଜୀବନ ଯେକୌଣସି ମୁହୂର୍ତ୍ତରେ ଶେଷ ହୋଇପାରେ, ଏବଂ ଆପଣ ଏପର୍ଯ୍ୟନ୍ତ ଇନ୍ଦ୍ରିୟମାନଙ୍କ ସ୍ୱାମୀ ହୃଷୀକେଶଙ୍କ ସେବା କରିନାହାନ୍ତି । ଭକ୍ତିବିନୋଦଙ୍କ ଏହି ଉପଦେଶ ମାନନ୍ତୁ: \"କେବଳ ଥରେ, ପବିତ୍ର ନାମର ଏହି ଅମୃତ ରସରେ ମତ୍ତ ହୋଇଯାଆନ୍ତୁ!\"", wordMeanings: [ { word: "ଜୀବନ", meaning: "ଆପଣଙ୍କ ଜୀବନ" }, { word: "ହୋଇଲୋ ଶେଷ", meaning: "ଯେକୌଣସି ମୁହୂର୍ତ୍ତରେ ଶେଷ ହୋଇପାରେ" }, { word: "ନା ଭଜିଲେ", meaning: "ଆପଣ ସେବା କରିନାହାନ୍ତି" }, { word: "ହୃଷୀକେଶ", meaning: "ଇନ୍ଦ୍ରିୟମାନଙ୍କ ପ୍ରଭୁଙ୍କୁ" }, { word: "ଭକ୍ତିବିନୋଦ-ଉପଦେଶ", meaning: "ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏହି ଉପଦେଶ" }, { word: "ଏକବାର", meaning: "କେବଳ ଥରେ" }, { word: "ନାମ-ରସେ", meaning: "ପବିତ୍ର ନାମର ଅମୃତରେ" }, { word: "ମାତୋ", meaning: "ମତ୍ତ ହୋଇଯାଅ" }, { word: "ରେ", meaning: "ଓ!" } ] }
  ]
};

let content = fs.readFileSync(path, 'utf8');

function replaceSong(songName, songObj) {
    const startStr = `export const ${songName}: StructuredSong = {`;
    const startIndex = content.indexOf(startStr);
    if (startIndex === -1) {
        // Try fallback with any or stub
        const fallbackStr = `export const ${songName}: any = {`;
        const fIndex = content.indexOf(fallbackStr);
        if (fIndex === -1) return;
        
        let braceCount = 0;
        let endIndex = fIndex;
        for (let i = fIndex + fallbackStr.length - 1; i < content.length; i++) {
            if (content[i] === '{') braceCount++;
            if (content[i] === '}') braceCount--;
            if (braceCount === 0 && i > fIndex + fallbackStr.length) {
                endIndex = i + 1;
                break;
            }
        }
        content = content.substring(0, fIndex) + `export const ${songName}: StructuredSong = ${JSON.stringify(songObj, null, 4)}` + content.substring(endIndex);
    } else {
        // Standard replacement
        let braceCount = 0;
        let endIndex = startIndex;
        for (let i = startIndex + startStr.length - 1; i < content.length; i++) {
            if (content[i] === '{') braceCount++;
            if (content[i] === '}') braceCount--;
            if (braceCount === 0 && i > startIndex + startStr.length) {
                endIndex = i + 1;
                break;
            }
        }
        content = content.substring(0, startIndex) + `export const ${songName}: StructuredSong = ${JSON.stringify(songObj, null, 4)}` + content.substring(endIndex);
    }
}

replaceSong('SONG_EMONADURMATI_STRUCTURED', emonaDurmati);
replaceSong('SONG_GAYGORAMADHURA_STRUCTURED', gayGora);

fs.writeFileSync(path, content, 'utf8');
console.log('✅ FIXED: Corrupted data repaired and Gaya Gora updated locally.');
