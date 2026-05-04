const existingCatalog = [
    { title_english: 'Amar Bolite Prabhu' },
    { title_english: 'Amar Jivan', title_odia: 'ଆମାର ଜୀବନ' },
    { title_english: 'Ami Jamuna Puline', title_odia: 'ଆମି ଯମୁନା ପୁଲିନେ' },
    { title_english: 'Ami To Durjana Ati Sada Duracar', title_odia: "ଆମି ତୋ' ଦୁର୍ଜନ ଅତି" },
    { title_english: 'Anadi Karama Phale', title_odia: 'ଅନାଦି କରମ ଫଳେ' },
    { title_english: 'Ar Keno Maya Jale', title_odia: 'ଆର କେନୋ ମାୟା-ଜାଲେ' },
    { title_english: 'Asalo Katha Bolte', title_odia: 'ଆସଲୋ କଥା ବୋଲ୍ତେ' },
    { title_english: 'Atma Nivedana Tuwa Pade', title_odia: 'ଆତ୍ମନିବେଦନ ତୁୟା ପଦେ' },
    { title_english: 'Bandhu Sange Yadi Tava Range' },
    { title_english: 'Bhaja Bhakata Vatsala', title_odia: 'ଭଜ ଭକତ-ବତ୍ସଲ' },
    { title_english: 'Bhaja Re Bhaja Re Amar' },
    { title_english: 'Bhale Gaura Gadadharer Arati', title_odia: 'ଭାଲେ ଗୌରା-ଗଦାଧରୈର ଆରତି' },
    { title_english: 'Bhuliya Tomare Samsare', title_odia: 'ଭୁଲିୟା ତୋମାରେ' },
    { title_english: 'Bolo Hari Bolo' },
    { title_english: 'Boro Sukher Atit To Ke' },
    { title_english: 'Doyala Nitai Caitanya', title_odia: 'ଦୟାଲ ନିତାଇ ଚୈତନ୍ୟ' },
    { title_english: 'Durlabha Manava Janma', title_odia: 'ଦୁର୍ଲଭ ମାନବ ଜନ୍ମ' },
    { title_english: 'Emona Durmati Samsara Bhitore' },
    { title_english: 'Gaite Gaite Nama Gelo' },
    { title_english: 'Gopinath Part 2 (Ghuchao Sansar)', title_odia: 'ଗୋପୀନାଥ Part 2' },
    { title_english: 'Gopinath Part 3 (Amar Upaya Nai)', title_odia: 'ଗୋପୀନାଥ Part 3' },
    { title_english: 'Gurudev Boro Krpa Kori', title_odia: 'ଗୁରୁଦେବ ବଡ଼ କୃପା କରି' },
    { title_english: 'Gurudev Krpa Bindu Diya', title_odia: 'ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ' },
    { title_english: 'Gurudeve Vraja Vane', title_odia: 'ଗୁରୁଦେବେ ବ୍ରଜ-ବନେ' },
    { title_english: 'Hari Hari Kabe Mora', title_odia: 'ହରି ହରି କବେ ମୋର' },
    { title_english: 'Jaya Jaya Radha Krsna', title_odia: 'ଜୟ ଜୟ ରାଧାକୃଷ୍ଣ' },
    { title_english: 'Jaya Radha Madhava', title_odia: 'ଜୟ ରାଧା-ମାଧବ' },
    { title_english: 'Jiva Jago Jiva Jago', title_odia: 'ଜୀବ ଜାଗ ଜୀବ ଜାଗ' },
    { title_english: 'Kabe Goura Bane', title_odia: 'କବେ ଗୌର ବନେ' },
    { title_english: 'Kabe Ha\'be Bolo', title_odia: 'କବେ ହ\'ବେ ବୋଲୋ' },
    { title_english: 'Kabe Habe Heno Dasa', title_odia: 'କବେ ହ\'ବେ ହେନୋ ଦଶା' },
    { title_english: 'Kabe Mui Vaishnava Cinibo', title_odia: 'କବେ ମୁଇ ବୈଷ୍ଣବ ଚିନିବୋ' },
    { title_english: 'Kabe Sri Chaitanya More', title_odia: 'କବେ ଶ୍ରୀ ଚୈତନ୍ୟ ମୋରେ' },
    { title_english: 'Kali Kukkura Kadan', title_odia: 'କଳି କୁକ୍କୁର କଦନ' },
    { title_english: 'Keno Hare Krsna Nam', title_odia: 'କେନୋ ହରେ କୃଷ୍ଣ ନାମ' },
    { title_english: 'Kesava Tuwa Jagata Vicitra', title_odia: 'କେଶବ! ତୁୱା ଜଗତ ବିଚିତ୍ର' },
    { title_english: 'Ki Jani Ki Bale', title_odia: 'କି ଜାନି କି ବଲେ' },
    { title_english: 'Mama Mana Mandire', title_odia: 'ମମ ମନ ମନ୍ଦିରେ' },
    { title_english: 'Manasa Deha Geha Jo Kichu Mor', title_odia: 'ମାନସ, ଦେହ, ଗେହ' },
    { title_english: 'Nadiya Godrume Nityananda Mahajana', title_odia: 'ନଦୀୟା – ଗୋଦ୍ରୁମେ' },
    { title_english: 'Narada Muni Bajay Vina', title_odia: 'ନାରଦ ମୁନି ବାଜାୟ ବୀଣା' },
    { title_english: 'Nija Karma Dose Phale', title_odia: 'ନିଜ କର୍ମ ଦୋଷ ଫଲେ' },
    { title_english: 'Nitai Nam Hate', title_odia: 'ନିତାଇ ନାମ ହାଟେ' },
    { title_english: 'Ohe Vaisnava Thakura', title_odia: 'ଓହେ ବୈଷ୍ଣବ ଠାକୁର' },
    { title_english: 'Ore Mana Bhalonahi Lage E Samsar', title_odia: 'ଓ ରେ ମନ, ଭାଲ ନାହି ଲାଗେ' },
    { title_english: 'Prabhu Tava Pada Yuge', title_odia: 'ପଭୁ ତବ ପଦଯୁଗେ' },
    { title_english: 'Prapance Poriya Agati', title_odia: 'ହରି ହେ! ପ୍ରପଞ୍ଚେ ପୋଡ଼ିୟା' },
    { title_english: 'Radha Krsna Bol Bol Bolo Re Sobai', title_odia: 'ରାଧା-କୃଷ୍ଣ ବୋଲ ବୋଲ' },
    { title_english: 'Radha Kunda Tata Kunja Kutir', title_odia: 'ରାଧା-କୁଣ୍ଡ-ତଟ-କୁଞ୍ଜ-କୁଟୀର' },
    { title_english: 'Sarira Avidya Jala' },
    { title_english: 'Sarvasva Tomar Carane', title_odia: 'ସର୍ବସ୍ବ ତୋମାର, ଚରଣେ' },
    { title_english: 'Sri Krsna Caitanya Prabhu Jive Doya Kori', title_odia: 'ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ପ୍ରଭୁ' },
    { title_english: 'Sri Krsna Kirtane Jadi Manasa Tohar', title_odia: 'ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ' },
    { title_english: 'Suddha Bhakata Carana Renu', title_odia: 'ଶୁଦ୍ଧ ଭକତ-ଚରଣ ରେଣୁ' },
    { title_english: 'Tumi Sarvesvaresvara Vrajendra Kumar', title_odia: 'ତୁମି ସର୍ବେଶ୍ୱରେଶ୍ବର' },
    { title_english: 'Udilo Aruna Puraba Bhage', title_odia: 'ଉଦିଲ ଅରୁଣ ପୂରବ ଭାଗେ' },
    { title_english: 'Vibhavari Sesa', title_odia: 'ବିଭାବରୀ ଶେଷ' },
    { title_english: 'Vidyara Vilase', title_odia: 'ଵିଦ୍ୟାର ଵିଲାସେ' },
    { title_english: 'Yadi Te Hari Pada Saroja Sudha', title_odia: 'ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ-ସୁଧା' },
    { title_english: 'Yasomati Nandana', title_odia: 'ଯଶୋମତି ନନ୍ଦନ' },
    { title_english: 'Gopinath Mama Nivedana Suno' },
    { title_english: 'Aparadha Phale Mama' },
    { title_english: 'E Dusta Hrdaye Kama' },
    { title_english: 'Ekhan Bujhinu Prabhu' },
    { title_english: 'Ek Din Santipure' },
    { title_english: 'Gay Goracand Jiver Tore' },
    { title_english: 'Harinama Tuwa Anek Swarupa' },
    { title_english: 'Tuwa Pade E Minoti Mor' },
    { title_english: 'Boro Sukher Khabor Gai' },
    { title_english: 'Gaura Arati' },
    { title_english: 'Hari bolo Hari bolo' }
];

const newListRaw = `
Amar Bolite Prabhu
Amar Jivan
Ami Jamuna Puline
Ami To Durjana Ati Sada Duracar
Anadi Karama Phale
Ar Keno Maya Jale
Asalo Katha Bolte
Atma Nivedana Tuwa Pade
Bandhu Sange Yadi Tava Range
Bhaja Bhakata Vatsala
Bhaja Re Bhaja Re Amar
Bhale Gaura Gadadharer Arati
Bhuliya Tomare
Bolo Hari Bolo
Boro Sukher Khabar Gai
Dekhite Dekhite
Doyal Nitai Caitanya
Durlabha Manava Janma
E Dusta Hrdaye Kama
Ek Din Santipure
Ekhona Bujhinu
Emona Durmati
Gay Gora Madhura Sware
Gay Goracand Jiver Tore
Gopinath Mama Nivedana Suno
Gopinath Ghuaco Samsara
Gopinath Amar Upaya
Gurudeva Krpa Bindu Diya
Gurudeva! Boro Krpa Kori
Gurudeve Vraja Vane Vraja Bhumi
Hari Bolo Hari Bolo Hari Bolo Bhai Re
Hari Hari Kabe Mora Hobe Heno Dina
Harinama Tuwa Anek Swarupa
Jaya Jaya Goracander Arotik
Jaya Jaya Radha Krsna
Jaya Radha Madhava
Jiv Jago Jiv Jago
Kabe Gaura Vane
Kabe Habe Bolo
Kabe Habe Heno Dasa Mor
Kabe Mui Vaisnava Cinibo
Kabe Sri Caitanya More Koribena Doya
Kali Kukkura Kadan
Keno Hare Krsna Nam
Kesava Tuwa Jagata Vicitra
Ki Jani Ki Bale
Krpa Koro Vaisnava Thakura
Krsna Nama Dhare Koto Bal
Mama Mana Mandire
Manasa Deho Geho Jo Kichu Mor
Na Korolun Karama
Nadiya Godrume Nityananda Mahajana
Narada Muni Bajay Vina
Nija Karma Dose Phale
Nitai Ki Nam Eneche Re
Nitai Nam Hate O Ke Jabire Bhai
Ohe Premera Thakura Gora
Ohe Vaisnava Thakura
Ore Mana Bhalonahi Lage E Samsar
Prabhu Tava Pada Yuge
Prapance Poriya Agati
Radha Krsna Bol Bol
Radha Kunda Tata Kunja Kutir
Ramani Siromani
Sarira Avidya Jala
Sarvasva Tomar Carane
Sri Krsna Caitanya Prabhu Jive Doya Kori
Sri Krsna kirtane Jadi Manasa Tohar
Suddha Bhakata Carana Renu
Tumi Sarveswareswara Vrajendra Kumar
Tumi To Maribe Jare
Tuwa Pade E Minoti Mor
Udilo Aruna
Vibhavari Sesa
Vidyara Vilase
Yadi Te Hari Pada Saroja Sudha
Yasomati Nandana
`;

const newList = newListRaw.trim().split('\n').map(s => s.trim());

const mapping = {
    'Gopinath Ghuaco Samsara': 'Gopinath Part 2 (Ghuchao Sansar)',
    'Gopinath Amar Upaya': 'Gopinath Part 3 (Amar Upaya Nai)',
    'Bhuliya Tomare': 'Bhuliya Tomare Samsare',
    'Jaya Jaya Goracander Arotik': 'Gaura Arati',
    'Hari Bolo Hari Bolo Hari Bolo Bhai Re': 'Hari bolo Hari bolo'
};

const finalCatalog = newList.map(name => {
    const searchName = mapping[name] || name;
    const existing = existingCatalog.find(s => s.title_english.toLowerCase().includes(searchName.toLowerCase()));
    if (existing) {
        return { title_english: searchName, title_odia: existing.title_odia };
    }
    return { title_english: searchName };
});

console.log(JSON.stringify(finalCatalog, null, 4));
