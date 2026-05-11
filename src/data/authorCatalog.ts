// Author Catalog — sourced from vsnectar.web.app
// Standardized names as requested by the USER.
// Cross-referenced at runtime against RESOURCES to mark availability.

export interface CatalogSong {
    id?: string;
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
            { id: 'song-amarboliteprabhu', title_english: 'Amar Bolite Prabhu' },
            { title_english: 'Amar Jivan', title_odia: 'ଆମାର ଜୀବନ' },
            { title_english: 'Ami Jamuna Puline', title_odia: 'ଆମି ଯମୁନା ପୁଲିନେ' },
            { title_english: 'Ami To Durjana Ati Sada Duracar', title_odia: 'ଆମି ତୋ\' ଦୁର୍ଜନ ଅତି' },
            { title_english: 'Anadi Karama Phale', title_odia: 'ଅନାଦି କରମ ଫଳେ' },
            { title_english: 'Ar Keno Maya Jale', title_odia: 'ଆର କେନୋ ମାୟା-ଜାଲେ' },
            { title_english: 'Asalo Katha Bolte', title_odia: 'ଆସଲୋ କଥା ବୋଲ୍ତେ' },
            { title_english: 'Atma Nivedana Tuwa Pade', title_odia: 'ଆତ୍ମନିବେଦନ ତୁୟା ପଦେ' },
            { id: 'song-bandhusangeyaditavarange', title_english: 'Bandhu Sange Yadi Tava Range' },
            { title_english: 'Bhaja Bhakata Vatsala', title_odia: 'ଭଜ ଭକତ-ବତ୍ସଲ' },
            { title_english: 'Bhaja Re Bhaja Re Amar' },
            { title_english: 'Bhale Gaura Gadadharer Arati', title_odia: 'ଭାଲେ ଗୌରା-ଗଦାଧରୈର ଆରତି' },
            { id: 'song-bhaktiahaituki', title_english: 'Bhakti Ahaituki Hoy Sva Prakasita', title_odia: 'ଭକ୍ତି ଅହୈତୁକୀ ହୟ ସ୍ୱ ପ୍ରକାଶିତ' },
            { title_english: 'Bhuliya Tomare Samsare', title_odia: 'ଭୁଲିୟା ତୋମାରେ' },
            { title_english: 'Bolo Hari Bolo' },
            { id: 'song-dekhitedekhite', title_english: 'Dekhite Dekhite', title_odia: 'ଦେଖିତେ ଦେଖିତେ' },
            { title_english: 'Doyala Nitai Caitanya', title_odia: 'ଦୟାଲ ନିତାଇ ଚୈତନ୍ୟ' },
            { title_english: 'Durlabha Manava Janma', title_odia: 'ଦୁର୍ଲଭ ମାନବ ଜନ୍ମ' },
            { title_english: 'Emona Durmati Samsara Bhitore' },
            { id: 'song-gaitegaitenamaki', title_english: 'Gāite Gāite Nāma Ki' },
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
            { title_english: 'Radha Kunda Tata Kunja Kutir', title_odia: 'ରାଧା-କୁଣ୍ଡ-ତଟ-କୁଞ୍ଜ-କୁଟୀର' },
            { id: 'song-sariraavidyajala', title_english: 'Sarira Avidya Jala', title_odia: 'ଶରୀର ଅବିଦ୍ୟା ଜାଲ' },
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
            { title_english: 'Gopinath Part 1 (Mama Nivedana Suno)', title_odia: 'ଗୋପୀନାଥ Part 1' },
            { title_english: 'Aparadha Phale Mama' },
            { id: 'song-edustahrdayekama', title_english: 'E Dusta Hrdaye Kama', title_odia: 'ଏ ଦୁଷ୍ଟ ହୃଦୟେ କାମ' },

            { id: 'song-ekdinsantipure', title_english: 'Ek Din Santipure', title_odia: 'ଏକ ଦିନ ଶାନ୍ତିପୁରେ' },
            { id: 'song-harinamatuaanekswarupa', title_english: 'Harinama Tuwa Anek Swarupa', title_odia: 'ହରିନାମ ତୁୱା ଅନେକ ସ୍ୱରୂପ' },
            { id: 'song-tuwapadeeminotimor', title_english: 'Tuwa Pade E Minoti Mor', title_odia: 'ତୁୱା ପଦେ ଏ ମିନତି ମୋର' },
            { title_english: 'Boro Sukher Khabor Gai' },
            { id: 'song-gauraarati', title_english: 'Jaya Jaya Goracander Arotik (Gaura Arati)', title_odia: 'ଜୟ ଜୟ ଗୋରାଚାଁଦେର ଆରତିକ' },
            { title_english: 'Hari bolo Hari bolo' },
            { id: 'song-satakotigopimadhabamana', title_english: 'Sata Koti Gopi Madhaba Mana', title_odia: 'ଶତ କୋଟି ଗୋପୀ ମାଧବ ମନ' }
        ]
    },
    {
        name: 'Narottama Dasa Thakura',
        odia: 'ନରୋତ୍ତମ ଦାସ ଠାକୁର',
        catalog: [
            { title_english: 'Are Bhai Bhaja Mora', title_odia: 'ଆରେ ଭାଇ ଭଜ ମୋର' },
            { title_english: 'Dhana Mor Nityananda', title_odia: 'ଧନ ମୋର ନିତ୍ୟାନନ୍ଦ' },
            { title_english: 'Ei Baro Karuna Koro', title_odia: 'ଏଇ ବାର କରୁଣା କର' },
            { title_english: 'Gauranga Bolite Habe', title_odia: 'ଗୌରାଙ୍ଗ ବୋଲିତେ ହବେ' },
            { title_english: 'Gauranga Karuna Koro', title_odia: 'ଗୌରାଙ୍ଗ କରୁଣା କର' },
            { title_english: 'Gaurangera Duti Pada', title_odia: 'ଗୌରାଙ୍ଗେର ଦୁଟି ପଦ' },
            { title_english: 'Gora Pahun', title_odia: 'ଗୋରା ପହୁଁ' },
            { id: 'song-hariharayenamah', title_english: 'Hari Haraye Namah Krsna Yadavaya', title_odia: 'ହରି ହରୟେ ନମଃ କୃଷ୍ଣ ଯାଦବାୟ' },
            { title_english: 'Hari Hari Biphale Janama', title_odia: 'ହରି ହରି ବିଫଳେ ଜନମ' },
            { title_english: 'Hari Hari Kabe More Hoibe Su-Dina', title_odia: 'ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ' },
            { title_english: 'Jaya Jaya Sri Krsna Caitanya Nityananda', title_odia: 'ଜୟ ଜୟ ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ନିତ୍ୟାନନ୍ଦ' },
            { title_english: 'Je Anila Prema Dhana', title_odia: 'ଯେ ଆନିଲ ପ୍ରେମ ଧନ' },
            { title_english: 'Kabe Krsna Dhan Pabo', title_odia: 'କବେ କୃଷ୍ଣ-ଧନ ପାବ' },
            { title_english: 'Ki Rupe Paibo Seva', title_odia: 'କି ରୂପେ ପାଇବୋ ସେବା' },
            { title_english: 'Kusumita Vrndavane Nacata Sikhi Gane', title_odia: 'କୁସୁମିତ ବୃନ୍ଦାବନେ ନାଚତ ଶିଖି ଗଣେ' },
            { title_english: 'Nitai Pada Kamala', title_odia: 'ନିତାଇ ପଦ କମଳ' },
            { title_english: 'Radha Krsna Prana Mora', title_odia: 'ରାଧା କୃଷ୍ଣ ପ୍ରାଣ ମୋର' },
            { title_english: 'Radha Krsna Sevon Mui', title_odia: 'ରାଧା କୃଷ୍ଣ ସେବୋଁ ମୁଇଁ' },
            { title_english: 'Radhika Carana Renu', title_odia: 'ରାଧିକା ଚରଣ ରେଣୁ' },
            { title_english: 'Sri Guru Carana Padma', title_odia: 'ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ' },
            { title_english: 'Sri Krsna Caitanya Prabhu Doya Koro More', title_odia: 'ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ପ୍ରଭୁ ଦୟା କର ମୋର' },
            { title_english: 'Sri Rupa Manjari Pada Sei Mora Sampada', title_odia: 'ଶ୍ରୀ ରୂପ ମଞ୍ଜରୀ ପଦ ସେଇ ମୋର ସମ୍ପଦ' },
            { title_english: 'Suniyachi Sadhu Mukhe Bole', title_odia: 'ଶୁଣିୟାଛି ସାଧୁ ମୁଖେ ବୋଲେ' },
            { title_english: 'Thakura Vaisnava Gana', title_odia: 'ଠାକୁର ବୈଷ୍ଣବ ଗଣ' },
            { title_english: 'Thakura Vaisnava Pada', title_odia: 'ଠାକୁର ବୈଷ୍ଣବ ପଦ' },
            { title_english: 'Vrndavana Ramya Sthana', title_odia: 'ବୃନ୍ଦାବନ ରମ୍ୟ ସ୍ଥାନ' },
        ]
    },
    {
        name: 'Srila Prabhupada',
        odia: 'ଶ୍ରୀଲ ପ୍ରଭୁପାଦ',
        catalog: [
            { title_english: 'Adore Adore Ye All' },
            { id: 'song-barabaraplankori', title_english: 'Bara Bara Plan Kori', title_odia: 'ବାର ବାର ପ୍ଲ୍ୟାନ କରେ' },
            { id: 'song-batulakahaye', title_english: 'Batula Kahaye Setha Saba Nirakara', title_odia: 'ବାତୁଲ କହୟେ ସେଥା ସବ ନିରାକାର' },
            { id: 'song-bhaktiahaituki', title_english: 'Bhakti Ahaituki Hoy Sva Prakasita', title_odia: 'ଭକ୍ତି ଅହୈତୁକୀ ହୟ ସ୍ୱ ପ୍ରକାଶିତ' },
            { title_english: 'Boro Krpa Koile Krsna', title_odia: 'ବଡ଼ କୃପା କୈଲ' },
            { title_english: 'Karma Phale Ase Saba Nana Vesa Dhari' },
            { title_english: 'Krsna Tava Punya Habe Bhai' },
            { title_english: 'Maha Vadanya Isvara Sri Gaura Sundara' },
            { title_english: 'Nitya Siddha Parsada Saba Radha Krsna Smare' },
            { title_english: 'Sambandha Janiya Yeba Jivana Yuddha Kore' },
            { title_english: 'Samudrena Phena Yena' },
            { title_english: 'Sisya Hoiya Kore Yei Gitar Sravana' },
            { title_english: 'Vrndavana Dhame Ami Boseyachi Eka' }
        ]
    },
    {
        name: 'Krsnadasa Kaviraja Goswami',
        catalog: [
            { title_english: 'Ambudanjanendra Nila' },
            { id: 'song-bhajagaurangakahagauranga', title_english: 'Bhaja Gauranga Kaha Gauranga', title_odia: 'ଭଜ ଗୌରାଙ୍ଗ କହ ଗୌରାଙ୍ଗ' },
            { title_english: 'Krsna Krsna Krsna Krsna', title_odia: 'କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ!' },
            { title_english: 'Kunkumakta Kancanabja' }
        ]
    },
    {
        name: 'Rupa Goswami',
        odia: 'ଶ୍ରୀ ରୂପ ଗୋସ୍ୱାମୀ',
        catalog: [
            { id: 'song-yamunastakam', title_english: 'Bhrtr Antakasya Pattane', title_odia: 'ଭ୍ରାତୃ ଅନ୍ତକସ୍ୟ ପତ୍ତନେ' },
            { title_english: 'Disi Disi Racayantim' },
            { title_english: 'Krsna Deva Bhavantam Vande', title_odia: 'କୃଷ୍ଣ ଦେବ ଭବନ୍ତଂ ବନ୍ଦେ' },
            { title_english: 'Nikhila Sruti Mauli Ratna' },
            { id: 'song-radhejayajaya', title_english: 'Radhe Jaya Jaya Madhava Dayite', title_odia: 'ରାଧେ ଜୟ ଜୟ ମାଧବ-ଦୟିତେ' }
        ]
    },
    {
        name: 'Locana Dasa Thakura',
        odia: 'ଲୋଚନ ଦାସ ଠାକୁର',
        catalog: [
            { title_english: 'Akrodha Paramananda', title_odia: 'ଅକ୍ରୋଧ ପରମାନନ୍ଦ' },
            { title_english: 'Avatara Sara Gora Avatara', title_odia: 'ଅବତାର ସାର ଗୋରା ଅବତାର' },
            { id: 'song-bhajabhajahari', title_english: 'Bhaja Bhaja Hari', title_odia: 'ଭଜ ଭଜ ହରି' },
            { title_english: 'Ke Jabi Ke Jabi Bhai Bhava Sindhu Para', title_odia: 'କେ ଯାବି କେ ଯାବି ଭାଇ ଭବ ସିନ୍ଧୁ ପାର' },
            { title_english: 'Nitai Guna Mani', title_odia: 'ନିତାଇ ଗୁଣମଣି' },
            { title_english: 'Nitai Mora Jibana Dhana Nitai Mora Jati', title_odia: 'ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି' },
            { title_english: 'Parama Karuna Pahu Dui Jana', title_odia: 'ପରମ କରୁଣ ପହୁଁ ଦୁଇ ଜନ' },
        ]
    },
    {
        name: 'Kanu Ramadasa Thakura',
        odia: 'କାନୁ ରାମଦାସ ଠାକୁର',
        catalog: [
            { id: 'song-doyakoromorenitai', title_english: 'Doya Koro More Nitai', title_odia: 'ଦୟା କରୋ ମୋରେ ନିତାଇ' }
        ] // Updated with Kanu Ramadasa entry
    },
    {
        name: 'Vasudeva Ghosha',
        odia: 'ବାସୁଦେବ ଘୋଷ',
        catalog: [
            { title_english: 'Gauranga Tumi More Doya Na Chadhio', title_odia: 'ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନା ଛାଡ଼ିହ' },
            { title_english: 'Gora Guna Gao Suni', title_odia: 'ଗୋରା ଗୁଣ ଗାଓ ଶୁନି' },
            { title_english: 'Jaya Jaya Jagannatha Sacira Nandana', title_odia: 'ଜୟ ଜୟ ଜଗନ୍ନାଥ ଶଚୀର ନନ୍ଦନ' },
            { title_english: 'Sacira Anginaya Nace', title_odia: 'ଶଚୀର ଅଙ୍ଗିନାୟ ନାଚେ' },
            { title_english: 'Sundara Kundala Naina', title_odia: 'ସୁନ୍ଦର କୁଣ୍ଡଳ ନୟନା' },
            { title_english: 'Yadi Gaura Na Hoito', title_odia: 'ଯଦି ଗୌର ନା ହୋଇତୋ' },
        ]
    },
    {
        name: 'Jayadeva Goswami',
        odia: 'ଜୟଦେବ ଗୋସ୍ୱାମୀ',
        catalog: [
            { title_english: 'He Govinda He Gopal Kesava Madhava', title_odia: 'ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ କେଶବ ମାଧବ' },
            { title_english: 'Pralaya Payodhi Jale', title_odia: 'ପ୍ରଳୟ ପୟୋଧି ଜଲେ' },
            { title_english: 'Srita Kamala', title_odia: 'ଶ୍ରୀତ କମଳା' },
        ]
    },
    {
        name: 'Sarvabhauma Bhattacarya',
        odia: 'ସାର୍ବଭୌମ ଭଟ୍ଟାଚାର୍ଯ୍ୟ',
        catalog: [
            { title_english: 'Huhunkara Garjanadi Aho', title_odia: 'ହୁହୁଙ୍କାର ଗର୍ଜନାଦି ଅହୋ' },
            { title_english: 'Nava Gaura Varam', title_odia: 'ନବ ଗୌର ବରଂ' },
            { title_english: 'Nitayando Vadhutendur', title_odia: 'ନିତ୍ୟାନନ୍ଦୋ ବଧୂତେନ୍ଦୁଃ' },
            { title_english: 'Ujjvala Varana', title_odia: 'ଉଜ୍ଜ୍ୱଳ ବରଣ' },
        ]
    },
    {
        name: 'Vrndavana Dasa Thakura',
        odia: 'ବୃନ୍ଦାବନ ଦାସ ଠାକୁର',
        catalog: [
            { id: 'song-abanikamajhe', title_english: 'Abanika Majhe Dekha Dona Bhai', title_odia: 'ଅବନିକା ମାଝେ ଦେଖ ଦୋନା ଭାଇ' },
            { id: 'song-antarenitaibahirenitai', title_english: 'Antare Nitai Bahire Nitai', title_odia: 'ଅନ୍ତରେ ନିତାଇ ବାହିରେ ନିତାଇ' },
            { title_english: 'Hera Dekhiya Nayana Bhariya', title_odia: 'ହେରା ଦେଖିୟା ନୟନ ଭରିୟା' },
            { title_english: 'Janu Lambita Bahu Jugala', title_odia: 'ଜାନୁ ଲମ୍ବିତ ବାହୁ ଯୁଗଳ' },
            { title_english: 'Madana Mohana Tanum', title_odia: 'ମଦନ ମୋହନ ତନୁ' },
            { title_english: 'Nace Nace Nitai Gaur Guna Maniya', title_odia: 'ନାଚେ ନାଚେ ନିତାଇ ଗୌର ଗୁଣ ମଣିୟା' },
            { title_english: 'Nana Dravya Ayojana', title_odia: 'ନାନା ଦ୍ରବ୍ୟ ଆୟୋଜନ' },
            { title_english: 'Sri Hari Vasare Hari Kirtana Vidhana', title_odia: 'ଶ୍ରୀ ହରି ବାସରେ ହରି କୀର୍ତ୍ତନ ବିଧାନ' },
        ]
    },
    {
        name: 'Raghunatha Dasa Goswami',
        odia: 'ରଘୁନାଥ ଦାସ ଗୋସ୍ୱାମୀ',
        catalog: [
            { title_english: 'Gurau Gosthe Gosthalayisu', title_odia: 'ଗୁରୌ ଗୋଷ୍ଠେ ଗୋଷ୍ଠାଳୟିଷୁ' },
            { title_english: 'Nija Pati Bhuja', title_odia: 'ନିଜ ପତି ଭୁଜ' },
        ]
    },
    {
        name: 'Visvanatha Cakravarti Thakura',
        odia: 'ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର',
        catalog: [
            { id: 'song-vrndaastakam', title_english: 'Vrnda-astakam (Gangeya Campeya)', title_odia: 'ବୃନ୍ଦାଷ୍ଟକମ୍' },
            { id: 'song-gurvastakam', title_english: 'Samsara Davanala', title_odia: 'ସଂସାର ଦାବାନଳ' },
            { title_english: 'Krsna Prasadena Samasta', title_odia: 'କୃଷ୍ଣ ପ୍ରସାଦେନ ସମସ୍ତ' },
            { title_english: 'Na Yoga Siddhir Na Mamastu', title_odia: 'ନ ଯୋଗ ସିଦ୍ଧିର୍ନ ମମାସ୍ତୁ' },
        ]
    },
    {
        name: 'Bhaktisiddhanta Saraswati',
        odia: 'ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ',
        catalog: [
            { title_english: 'Dusta Mana', title_odia: 'ଦୁଷ୍ଟ ମନ' },
            { title_english: 'Krsna Hoite Caturmukha', title_odia: 'କୃଷ୍ଣ ହୋଇତେ ଚତୁର୍ମୁଖ' },
        ]
    },
    {
        name: 'Adi Sankaracarya',
        odia: 'ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟ',
        catalog: [
            { id: 'song-achyutamkesavam', title_english: 'Achyutam Kesavam', title_odia: 'ଅଚ୍ୟୁତମ୍ କେଶବମ୍' },
            { id: 'song-bhajagovindam', title_english: 'Bhaja Govindam', title_odia: 'ଭଜ ଗୋବିନ୍ଦମ୍' },
            { id: 'song-gangastotram', title_english: 'Devi Suresvari Bhagavati Gange', title_odia: 'ଦେବୀ ସୁରେଶ୍ୱରୀ ଭଗବତୀ ଗଙ୍ଗେ' },
            { title_english: 'Kadacit Kalindi Tata Vipina', title_odia: 'କଦାଚିତ୍ କାଳିନ୍ଦୀ ତଟ ବିପିନ' },
            { title_english: 'Sariram Surupam Tatha', title_odia: 'ଶରୀରମ୍ ସୁରୂପମ୍ ତଥା' },
            { title_english: 'Satyam Jnanam Anantam', title_odia: 'ସତ୍ୟମ୍ ଜ୍ଞାନମନନ୍ତମ୍' },
        ]
    },
    {
        name: 'Sanatana Goswami',
        odia: 'ସନାତନ ଗୋସ୍ୱାମୀ',
        catalog: [
            { title_english: 'Radhika Sarada Indu Nindimukha', title_odia: 'ରାଧିକା ଶାରଦ ଇନ୍ଦୁ ନିନ୍ଦିମୁଖ' },
        ]
    },
    {
        name: 'Jiva Goswami',
        odia: 'ଜୀବ ଗୋସ୍ୱାମୀ',
        catalog: [
            { title_english: 'Krsna Prema Mayi Radha', title_odia: 'କୃଷ୍ଣ ପ୍ରେମମୟୀ ରାଧା' },
        ]
    },
    {
        name: 'Srinivasa Acarya',
        odia: 'ଶ୍ରୀନିବାସ ଆଚାର୍ଯ୍ୟ',
        catalog: [
            { title_english: 'Krsnotkirtana Gana Nartana (Sad-gosvamy-astakam)', title_odia: 'ଷଡ଼ ଗୋସ୍ୱାମୀ ଅଷ୍ଟକ (କୃଷ୍ଣୋତ୍କୀର୍ତ୍ତନ ଗାନ ନର୍ତ୍ତନ)' },
        ]
    },
    {
        name: 'Govinda Dasa Kaviraja',
        odia: 'ଗୋବିନ୍ଦ ଦାସ କବିରାଜ',
        catalog: [
            { title_english: 'Bhaja Hu Re Mana Sri Nanda Nandana', title_odia: 'ଭଜହୁ ରେ ମନ' },
            { title_english: 'Kali Yuge Sri Caitanya', title_odia: 'କଳି ଯୁଗେ ଶ୍ରୀ ଚୈତନ୍ୟ' },
        ]
    },
    {
        name: 'Devakinandana Dasa Thakura',
        odia: 'ଦେବକୀନନ୍ଦନ ଦାସ ଠାକୁର',
        catalog: [
            { title_english: 'Vrndavana Vasi Jata Vaisnavera Gana', title_odia: 'ବୃନ୍ଦାବନ ବାସୀ ଯତ ବୈଷ୍ଣବେର ଗଣ' },
        ]
    },
    {
        name: 'Bilvamangala Thakura',
        odia: 'ବିଲ୍ୱମଙ୍ଗଳ ଠାକୁର',
        catalog: [
            { title_english: 'Agre Kurunam Atha', title_odia: 'ଅଗ୍ରେ କୁରୂଣାମ୍ ଅଥ' },
            { title_english: 'Kararavindena Padaravindam', title_odia: 'କରାରବିନ୍ଦେନ ପଦାରବିନ୍ଦମ୍' },
            { title_english: 'Vraje Prasiddham Navanita Cauram', title_odia: 'ବ୍ରଜେ ପ୍ରସିଦ୍ଧମ୍ ନବନୀତ' },
        ]
    },
    {
        name: 'Vyasadeva',
        odia: 'ବ୍ୟାସଦେବ',
        catalog: [
            { title_english: 'Bhagavad Gita' },
            { id: 'song-bhishmastuti', title_english: 'Bhishma Stuti', title_odia: 'ଭୀଷ୍ମ ସ୍ତୁତି' },
            { title_english: 'Ugram Viram Mahavishnum' },
            { title_english: 'Jaya Narasimha Sri Narasimha' },
            { title_english: 'Namaste Narasimhaya' },
        ]
    },
    {
        name: 'Lord Brahma',
        odia: 'ଭଗବାନ ବ୍ରହ୍ମା',
        catalog: [
            { id: 'song-isvaraparamakrsna', title_english: 'Isvara Parama Krsna', title_odia: 'ଈଶ୍ୱରଃ ପରମଃ କୃଷ୍ଣଃ' }
        ]
    },
    {
        name: 'Sri Caitanya Mahaprabhu',
        odia: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ',
        catalog: [
            { id: 'song-shikshashtakam', title_english: 'Ceto Darpana Marjanam', title_odia: 'ଚେତୋ ଦର୍ପଣ ମାର୍ଜନଂ' },
        ]
    },
    {
        name: 'Satyavrata Muni',
        odia: 'ସତ୍ୟବ୍ରତ ମୁନି',
        catalog: [
            { id: 'song-damodarastakam', title_english: 'Namamisvaram Saccidananda Rupam', title_odia: 'ନମାମୀଶ୍ୱରଂ ସଚ୍ଚିଦାନନ୍ଦ ରୂପଂ' },
        ]
    },
    {
        name: 'Krsna Dasa',
        odia: 'କୃଷ୍ଣ ଦାସ',
        catalog: [
            { title_english: 'Jaya Radhe Jaya Krsna Jaya Vrndavana', title_odia: 'ଜୟ ରାଧେ, ଜୟ କୃଷ୍ଣ, ଜୟ ବୃନ୍ଦାବନ' },
            { title_english: 'Namo Namah Tulasi Krsna Preyasi', title_odia: 'ନମୋ ନମଃ ତୁଳସୀ କୃଷ୍ଣ ପ୍ରେୟସୀ' },
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
        name: 'Vallabhacarya',
        odia: 'ବଲ୍ଲଭାଚାର୍ଯ୍ୟ',
        catalog: [
            { id: 'song-madhurashtakam', title_english: 'Adharam Madhuram' }
        ]
    },
    {
        name: 'Bhakta Salabega',
        odia: 'ଭକ୍ତ ସାଲବେଗ',
        catalog: [
            { id: 'song-ahenilasaila', title_english: 'Ahe Nila Saila', title_odia: 'ଆହେ ନୀଳ ଶୈଳ' }
        ]
    },
    {
        name: 'Mira Bhai',
        odia: 'ମୀରାବାଈ',
        catalog: [
            { id: 'song-antaramandirejago', title_english: 'Antara Mandire Jago Jago', title_odia: 'ଅନ୍ତର ମନ୍ଦିରେ ଜାଗୋ ଜାଗୋ' },
            { id: 'song-arkotokal', title_english: 'Ar Koto Kal', title_odia: 'ଆର କତ କାଲ' }
        ]
    },
    {
        name: 'Traditional',
        odia: 'ପାରମ୍ପରିକ',
        catalog: [
            { id: 'song-arkebajabebamsi', title_english: 'Ar Ke Bajabe Bamsi', title_odia: 'ଆର କେ ବାଜାବେ ବଂଶୀ' },
            { id: 'song-bhajagovinda', title_english: 'Bhaja Govinda Bhaja Govinda', title_odia: 'ଭଜ ଗୋବିନ୍ଦ ଭଜ ଗୋବିନ୍ଦ' },
            { id: 'song-brahmabole', title_english: 'Brahma Bole Catur Mukha', title_odia: 'ବ୍ରହ୍ମା ବୋଲେ ଚତୁର୍ମୁଖ' },
            { id: 'song-dhuledhulegorachanda', title_english: 'Dhule Dhule Gora Chanda', title_odia: 'ଧୁଲେ ଧୁଲେ ଗୋରା ଚାଁଦ' },
            { id: 'song-dukhersagore', title_english: 'Duhkher Sagore', title_odia: 'ଦୁଃଖେର ସାଗୋରେ' },
            { id: 'song-gourangasundara', title_english: 'Gouranga Sundara Prema Jaladhara', title_odia: 'ଗୌରାଙ୍ଗ ସୁନ୍ଦର ପ୍ରେମ ଜଳଧର' },
            { id: 'song-harekrishnamahamantra', title_english: 'Hare Krishna Mahamantra', title_odia: 'ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର' }
        ]
    },
    {
        name: 'Sura Dasa',
        odia: 'ସୂରଦାସ',
        catalog: [
            { id: 'song-caranakamal', title_english: 'Carana Kamal', title_odia: 'ଚରଣ କମଲ' }
        ]
    },
    {
        name: 'Other Authors',
        catalog: [
            { id: 'song-jarmukhebhai', title_english: 'Jar Mukhe Bhai Hari Katha Nai', title_odia: 'ଯାର୍ ମୁଖେ ଭାଇ ହରି କଥା ନାଇ' }
        ]
    },
];
