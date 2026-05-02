// Author Catalog — sourced from vsnectar.web.app
// Standardized names as requested by the USER.
// Cross-referenced at runtime against RESOURCES to mark availability.

export interface CatalogSong {
    title_english: string;
    title_odia?: string;
}

export interface AuthorCatalog {
    name: string;           // Display name (matches resources.ts author field)
    odia?: string;          // Odia name if available
    catalog: CatalogSong[];
}

export const AUTHOR_CATALOG: AuthorCatalog[] = [
    {
        name: 'Bhaktivinoda Thakura',
        odia: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        catalog: [
            { title_english: 'Amar Bolite Prabhu' },
            { title_english: 'Amar Jivan', title_odia: 'ଆମାର ଜୀବନ' },
            { title_english: 'Ami Jamuna Puline', title_odia: 'ଆମି ଯମୁନା ପୁଲିନେ' },
            { title_english: 'Ami To Durjana Ati Sada Duracar', title_odia: 'ଆମି ତୋ\' ଦୁର୍ଜନ ଅତି' },
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
            { title_english: 'Doya Koro Prabhu' },
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
            { title_english: 'Je Anilo Prema Dhana', title_odia: 'ଯେ ଅନିଲୋ ପ୍ରେମ ଧନ' },
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
        ]
    },
    {
        name: 'Narottama Dasa Thakura',
        catalog: [
            { title_english: 'Are Bhai Bhaja Mora', title_odia: 'ଆରେ ଭାଇ! ଭଜ ମୋର' },
            { title_english: 'Dhana Mor Nityananda', title_odia: 'ଧନ ମୋର ନିତ୍ୟାନନ୍ଦ' },
            { title_english: 'Ei-bara karuna koro vaisnava gosai', title_odia: 'ଏଇ ବାର କରୁଣା କର' },
            { title_english: 'Gauranga bolite habe pulaka sarira', title_odia: 'ଗୌରାଙ୍ଗ ବୋଲିତେ ହବେ' },
            { title_english: 'Gauranga Karuna Koro', title_odia: 'ଗୌରାଙ୍ଗ କରୁଣ କର' },
            { title_english: 'Gaurangera Duti Pada', title_odia: 'ଗୌରାଙ୍ଗେର ଦୁଟି ପଦ' },
            { title_english: 'Gora Pahun', title_odia: 'ଗୋର ପାହୁଣ' },
            { title_english: 'Hari Haraye Namah Krsna Yadavaya', title_odia: 'ହରି ହରୟେ ନମଃ' },
            { title_english: 'Hari hari biphale janama goinu', title_odia: 'ହରି ହରି ବିଫଳେ ଜନ୍ମ' },
            { title_english: 'Jaya Jaya Sri Krsna Caitanya Nityananda', title_odia: 'ଜୟ ଜୟ ଶ୍ରୀ କୃଷ୍ଣ ଚୈତନ୍ୟ' },
            { title_english: 'Je anila prema dhana koruna pracura', title_odia: 'ଯେ ଆନିଲ ପ୍ରେମ ଧନ' },
            { title_english: 'Ki Rupe Paibo Seva', title_odia: 'କି ରୂପେ ପାଇବ ସେବା' },
            { title_english: 'Kusumita vrndavane nacata sikhigane' },
            { title_english: 'Nitai-pada-kamala', title_odia: 'ନିତାଇ ପଦ କମଳ' },
            { title_english: 'Radha-krsna prana mor yugala-kisora', title_odia: 'ରାଧା କୃଷ୍ଣ ପ୍ରାଣ ମୋର' },
            { title_english: 'Sri-guru-carana-padma', title_odia: 'ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ' },
            { title_english: 'Sri Rupa Manjari Pada', title_odia: 'ଶ୍ରୀ ରୂପ ମଞ୍ଜରୀ ପଦ' },
            { title_english: 'Suniyachi sadhu mukhe bole sarvajan' },
            { title_english: 'Vrndavana ramya-sthana' },
            { title_english: 'Yasomati Nandana Braja Baro Nagara', title_odia: 'ଯଶୋମତୀ ନନ୍ଦନ' },
        ]
    },
    {
        name: 'Srila Prabhupada',
        catalog: [
            { title_english: 'Adore Adore Ye All' },
            { title_english: 'Bara Bara Plan Kori' },
            { title_english: 'Batula Kahaye Setha Saba Nirakara' },
            { title_english: 'Bhajo Bhajo Bhai Caitanya Nitai' },
            { title_english: 'Boro Krpa Koile Krsna', title_odia: 'ବଡ଼ କୃପା କୈଲ' },
            { title_english: 'Krishna Tava Punya Habe Bhai' },
            { title_english: 'Samsara Davanala Lidha Loka', title_odia: 'ସଂସାର ଦାବାନଳ' },
            { title_english: 'Sri-guru-carastakam' },
            { title_english: 'Udilo Aruna Puraba Bhage', title_odia: 'ଉଦିଲ ଅରୁଣ' },
        ]
    },
    {
        name: 'Krsnadasa Kaviraja Goswami',
        catalog: [
            { title_english: 'Jaya Jaya Nityananda Nimai Sahodara' },
            { title_english: 'Parama Karuna' },
        ]
    },
    {
        name: 'Rupa Goswami',
        catalog: [
            { title_english: 'Namah Om Visnu Padaya' },
            { title_english: 'Sri Gurvashtakam', title_odia: 'ଶ୍ରୀ ଗୁର୍ବଷ୍ଟକମ' },
            { title_english: 'Sri Sri Sad Gosvamy Ashtakam' },
            { title_english: 'Samsara Davanala Lidha Loka' },
        ]
    },
    {
        name: 'Locana Dasa Thakura',
        catalog: [
            { title_english: 'Akrodha Paramananda' },
            { title_english: 'Avatara Sara Gora Avatara' },
            { title_english: 'Bhaja Bhaja Hari' },
            { title_english: 'Ke Jabi Ke Jabi Bhai Bhava Sindhu Para' },
            { title_english: 'Nitai Guna Mani' },
            { title_english: 'Nitai Mora Jibana Dhana Nitai Mora Jati' },
            { title_english: 'Parama Karuna Pahu Dui Jana', title_odia: 'ପରମ କରୁଣ' },
            { title_english: 'Sri Gaura Arati', title_odia: 'ଶ୍ରୀ ଗୌର ଆରତି' },
        ]
    },
    {
        name: 'Vasudeva Ghosha',
        catalog: [
            { title_english: 'Gauranga Tumi More Doya Na Chadiho', title_odia: 'ଗୌରାଙ୍ଗ ତୁମି ମୋରେ' },
            { title_english: 'Jaya Jaya Jagannatha Sacira Nandana' },
            { title_english: 'Makhana Cora' },
            { title_english: 'Sri Sri Tulasi Arati', title_odia: 'ଶ୍ରୀ ତୁଳସୀ ଆରତି' },
        ]
    },
    {
        name: 'Jayadeva Goswami',
        catalog: [
            { title_english: 'Dasavatara Stotra', title_odia: 'ଦଶାବତାର ସ୍ତୋତ୍ର' },
            { title_english: 'Pralaya Payodhi Jale' },
            { title_english: 'Sri Gitagovinda' },
        ]
    },
    {
        name: 'Sarvabhauma Bhattacarya',
        catalog: [
            { title_english: 'Susloka Satakam' },
        ]
    },
    {
        name: 'Vrndavana Dasa Thakura',
        catalog: [
            { title_english: 'Abanika Majhe Dekha Dona Bhai' },
            { title_english: 'Antare Nitai Bahire Nitai' },
            { title_english: 'Hera Dekhiya Nayana Bhariya' },
            { title_english: 'Janu Lambita Bahu Jugala' },
            { title_english: 'Madana Mohana Tanu' },
            { title_english: 'Nace Nace Nitai Gaur Guna Maniya' },
            { title_english: 'Nana Dravya Ayojana' },
            { title_english: 'Sri Hari Vasare Hari Kirtana Vidhana' },
        ]
    },
    {
        name: 'Raghunatha Dasa Goswami',
        catalog: [
            { title_english: 'Gurau Gosthe Gosthalayisu' },
            { title_english: 'Nija Pati Bhuja' },
            { title_english: 'Vilapa Kusumanjali' },
        ]
    },
    {
        name: 'Visvanatha Cakravarti Thakura',
        catalog: [
            { title_english: 'Gurvastakam', title_odia: 'ଗୁର୍ବଷ୍ଟକମ' },
            { title_english: 'Sri Sri Prema Bhakti Chandrika' },
            { title_english: 'Srila Gurudeva' },
        ]
    },
    {
        name: 'Bhaktisiddhanta Saraswati',
        catalog: [
            { title_english: 'Ei Chh\'y gosai jar mui tar das' },
            { title_english: 'Sri Rupa Manjari Pada' },
            { title_english: 'Vaishnava Ke' },
        ]
    },
    {
        name: 'Adi Sankaracarya',
        catalog: [
            { title_english: 'Achyutastakam' },
            { title_english: 'Annapurnastakam' },
            { title_english: 'Bhaja Govindam', title_odia: 'ଭଜ ଗୋବିନ୍ଦମ' },
            { title_english: 'Bhavanyastakam' },
            { title_english: 'Gita Mahatmya', title_odia: 'ଗୀତା ମାହାତ୍ମ୍ୟ' },
            { title_english: 'Govindastakam' },
            { title_english: 'Jagannathastakam' },
            { title_english: 'Narasimha Arati', title_odia: 'ନୃସିଂହ ଆରତି' },
        ]
    },
    {
        name: 'Sanatana Goswami',
        catalog: [
            { title_english: 'Jaya Jaya Jagannatha Sacira Nandana' },
        ]
    },
    {
        name: 'Jiva Goswami',
        catalog: [
            { title_english: 'Krsna Prema Mayi Radha' },
        ]
    },
    {
        name: 'Srinivasa Acarya',
        catalog: [
            { title_english: 'Krsnotkirtana Gana Nartana (Sad-gosvamy-astakam)', title_odia: 'ଷଡ଼ ଗୋସ୍ୱାମୀ ଅଷ୍ଟକ' },
        ]
    },
    {
        name: 'Govinda Dasa Kaviraja',
        catalog: [
            { title_english: 'Bhajahu Re Mana' },
        ]
    },
    {
        name: 'Devakinandana Dasa Thakura',
        catalog: [
            { title_english: 'Vrndavana Vasidara' },
        ]
    },
    {
        name: 'Bilvamangala Thakura',
        catalog: [
            { title_english: 'Agre Kurunam Atha' },
            { title_english: 'Kararavindena Padaravindam' },
            { title_english: 'Vraje Prasiddham Navanita' },
        ]
    },
    {
        name: 'Vyasadeva',
        odia: 'ବ୍ୟାସଦେବ',
        catalog: [
            { title_english: 'Bhagavad Gita' },
            { title_english: 'Ugram Viram Mahavishnum' },
            { title_english: 'Jaya Narasimha Sri Narasimha' },
            { title_english: 'Namaste Narasimhaya' },
        ]
    },
    {
        name: 'Sri Caitanya Mahaprabhu',
        odia: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ',
        catalog: [
            { title_english: 'Sri Sikshashtakam', title_odia: 'ଶ୍ରୀ ଶିକ୍ଷାଷ୍ଟକମ୍' },
        ]
    },
    {
        name: 'Satyavrata Muni',
        odia: 'ସତ୍ୟବ୍ରତ ମୁନି',
        catalog: [
            { title_english: 'Damodarastakam', title_odia: 'ଶ୍ରୀ ଦାମୋଦରାଷ୍ଟକମ୍' },
        ]
    },
    {
        name: 'Krsna Dasa',
        odia: 'କୃଷ୍ଣ ଦାସ',
        catalog: [
            { title_english: 'Namo Namah Tulasi Krsna Preyasi' },
        ]
    },
    {
        name: 'ISKCON',
        catalog: [
            { title_english: 'Prema Dhvani Prayers' },
        ]
    },
    {
        name: 'Sukadeva Gosvami',
        odia: 'ଶୁକଦେବ ଗୋସ୍ୱାମୀ',
        catalog: [
            { title_english: 'Gopi Gitam' },
        ]
    },
    {
        name: 'Other Authors',
        catalog: []
    },
];
