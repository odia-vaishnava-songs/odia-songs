/**
 * Canonical Song Book Catalogs extracted from Vaishnava Acarya Song Repositories (vsnectar)
 * Contains the complete canonical song index for each Vaishnava songbook.
 * Available songs link directly to localSongId in resources.ts.
 * Non-available songs show in the index but are unselectable until added.
 */

export interface BookSongItem {
    index: number;
    title: string;
    vname?: string;
    title_odia?: string;
    chapter?: string;
    localSongId?: string;
    isAvailable: boolean;
}

export const BOOK_CATALOGS: Record<string, BookSongItem[]> = {
  "gitavali": [
    {
      "index": 1,
      "title": "Udilo Aruṇa Pūraba Bhāge",
      "vname": "Udilo Aruna",
      "title_odia": "ଉଦିଲ ଅରୁଣ ପୂରବ ଭାଗେ",
      "chapter": "Aruoṇdaya kīrtana-Kīrtana at Dawn",
      "localSongId": "song-udiloaruna",
      "isAvailable": true
    },
    {
      "index": 2,
      "title": "Jīv Jāgo Jīv Jāgo Gauracandra Bole",
      "vname": "Jiv Jago Jiv Jago",
      "title_odia": "ଜୀବ ଜାଗ ଜୀବ ଜାଗ",
      "chapter": "Aruoṇdaya kīrtana-Kīrtana at Dawn",
      "localSongId": "song-jivjago",
      "isAvailable": true
    },
    {
      "index": 3,
      "title": "Bhāle Gaurā Gadādharera Ārati Nehāri",
      "vname": "Bhale Gaura Gadadharer Arati",
      "title_odia": "ଭାଲେ ଗୌରା-ଗଦାଧରୈର ଆରତି",
      "chapter": "Arati kīrtana-songs for Arati",
      "localSongId": "song-bhalegauragadadhara",
      "isAvailable": true
    },
    {
      "index": 4,
      "title": "Jaya Jaya Goracander Āratiko Śobhā",
      "vname": "Jaya Jaya Goracander Arotik",
      "chapter": "Arati kīrtana-songs for Arati",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Jaya Jaya Rādhā Kṛṣṇa Jugala Milana",
      "vname": "Jaya Jaya Radha Krsna",
      "title_odia": "ଜୟ ଜୟ ରାଧାକୃଷ୍ଣ",
      "chapter": "Arati kīrtana-songs for Arati",
      "localSongId": "song-jayajayaradhakrsna",
      "isAvailable": true
    },
    {
      "index": 6,
      "title": "Bhaja Bhakata Batasala Śrī Gaura Hari",
      "vname": "Bhaja Bhakata Vatsala",
      "title_odia": "ଭଜ ଭକତ-ବତ୍ସଲ",
      "chapter": "Arati kīrtana-songs for Arati",
      "localSongId": "song-bhajabhakatavatsala",
      "isAvailable": true
    },
    {
      "index": 7,
      "title": "Śarīra Abidyā Jāl         Jodendriya Tahe Kāl",
      "vname": "Sarira Avidya Jala",
      "title_odia": "ଶରୀର ଅବିଦ୍ୟା ଜାଲ",
      "chapter": "Prasāda sebāya-songs for Honoring Prasädam",
      "localSongId": "song-sariraavidyajala",
      "isAvailable": true
    },
    {
      "index": 8,
      "title": "Eka Dina Śāntipure         Prabhu Adwaitera Ghare",
      "vname": "Ek Din Santipure",
      "title_odia": "ଏକ ଦିନ ଶାନ୍ତିପୁରେ",
      "chapter": "Prasāda sebāya-songs for Honoring Prasädam",
      "localSongId": "song-ekdinsantipure",
      "isAvailable": true
    },
    {
      "index": 9,
      "title": "Śacīra Aṅgane Kabhu        Mādhabendra Purī Prabhu",
      "chapter": "Prasāda sebāya-songs for Honoring Prasädam",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Śrī Caitanya Nityānanada        Śrībāsādi Bhakta Bṛnda",
      "chapter": "Prasāda sebāya-songs for Honoring Prasädam",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Eka Dina Nīlācale          Prasāda Sebana Kāle",
      "chapter": "Prasāda sebāya-songs for Honoring Prasädam",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Rāma Kṛṣṇa Go Caraṇe        Jaibena Dūra Bane",
      "chapter": "Prasāda sebāya-songs for Honoring Prasädam",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Nadīyā Godrume Nityānanda Mahājana",
      "vname": "Nadiya Godrume Nityananda Mahajana",
      "title_odia": "ନଦୀୟା – ଗୋଦ୍ରୁମେ ନିତ୍ୟାନନ୍ଦ ମହାଜନ",
      "chapter": "Śrī Nāgara kīrtana-Kīrtana in the City",
      "localSongId": "song-nadiyagodrume",
      "isAvailable": true
    },
    {
      "index": 14,
      "title": "Gāya Gorā Madhur Sware",
      "vname": "Gay Gora Madhura Sware",
      "title_odia": "ଗାୟ ଗୋରା ମଧୁର",
      "chapter": "Śrī Nāgara kīrtana-Kīrtana in the City",
      "localSongId": "song-gaygoramadhura",
      "isAvailable": true
    },
    {
      "index": 15,
      "title": "Ek Bār Bhābo Mane",
      "chapter": "Śrī Nāgara kīrtana-Kīrtana in the City",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Rādhā Kṛṣṇa Bol Bol Bolo Re Sobhāi",
      "vname": "Radha Krsna Bol Bol",
      "chapter": "Śrī Nāgara kīrtana-Kīrtana in the City",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare",
      "vname": "Gay Goracand Jiver Tore",
      "title_odia": "ଗାୟ ଗୋରାଚାନ୍ଦ",
      "chapter": "Śrī Nāgara kīrtana-Kīrtana in the City",
      "localSongId": "song-gaygoracand",
      "isAvailable": true
    },
    {
      "index": 18,
      "title": "Aṅga Upaṅga Astra Pārṣada Saṅge",
      "chapter": "Śrī Nāgara kīrtana-Kīrtana in the City",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Nitāi Ki Nāma Eneche Re",
      "vname": "Nitai Ki Nam Eneche Re",
      "chapter": "Śrī Nāgara kīrtana-Kīrtana in the City",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Elo Re Gaurāṅgacānda Preme Elothelo",
      "chapter": "Śrī Nāgara kīrtana-Kīrtana in the City",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Jagannātha Suta Mahāprabhu Biśwambhara",
      "chapter": "Śrīman Mahāprabhura śata nāma-A Hundred Names of Lord Caitanya",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Jaya Godruma Pati Gorā",
      "chapter": "Śrīman Mahāprabhura śata nāma-A Hundred Names of Lord Caitanya",
      "isAvailable": false
    },
    {
      "index": 23,
      "title": "Kali Yuga Pābana Biśwambhara",
      "chapter": "Śrīman Mahāprabhura śata nāma-A Hundred Names of Lord Caitanya",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Śrī Kṛṣṇa Caitanya Adwaita Prabhu Nityānanda",
      "title_odia": "ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି",
      "chapter": "Śrīman Mahāprabhura śata nāma-A Hundred Names of Lord Caitanya",
      "localSongId": "song-srikrsnacaitanyaprabhujive",
      "isAvailable": true
    },
    {
      "index": 25,
      "title": "Jaśomatī Stanya Pāyī Śrī Nanda Nandana",
      "chapter": "Śrī Kṛṣṇera Viṁśottara śata nāma-A Hundred and Twenty Names of Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 26,
      "title": "Kṛṣṇa Gobinda Hare",
      "chapter": "Śrī Kṛṣṇera Viṁśottara śata nāma-A Hundred and Twenty Names of Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Rādhā Ballabha Mādhaba Śrī Pati Mukunda",
      "chapter": "Śrī Kṛṣṇera Viṁśottara śata nāma-A Hundred and Twenty Names of Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Rādhā Mādhaba Kuñja Bihārī",
      "vname": "Jaya Radha Madhava",
      "title_odia": "ଜୟ ରାଧା-ମାଧବ",
      "chapter": "Śrī Kṛṣṇera Viṁśottara śata nāma-A Hundred and Twenty Names of Lord Kṛṣṇa",
      "localSongId": "song-jayaradhadhava",
      "isAvailable": true
    },
    {
      "index": 29,
      "title": "Rādhā Ballabha Rādhā Binoda",
      "chapter": "Śrī Kṛṣṇera Viṁśottara śata nāma-A Hundred and Twenty Names of Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 30,
      "title": "Jaya Jaśodā Nandana Kṛṣṇa Gopāla Gobinda",
      "chapter": "Śrī Kṛṣṇera Viṁśottara śata nāma-A Hundred and Twenty Names of Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Jaśomatī Nandana         Braja Baro Nāgara",
      "vname": "Yasomati Nandana",
      "title_odia": "ଯଶୋମତି ନନ୍ଦନ",
      "chapter": "Śrī Nāma kīrtana-Chanting of the Holy Names",
      "localSongId": "song-yasomatinandana",
      "isAvailable": true
    },
    {
      "index": 32,
      "title": "Doyāl Nitāi Caitanya Bole Nāca Re Āmāra Mana",
      "vname": "Doyal Nitai Caitanya",
      "chapter": "Śrī Nāma kīrtana-Chanting of the Holy Names",
      "localSongId": "DOYALNITAICAITANYA",
      "isAvailable": true
    },
    {
      "index": 33,
      "title": "Hari Bolo Hari Bolo Hari Bolo Bhāi Re",
      "vname": "Hari Bolo Hari Bolo Hari Bolo Bhai Re",
      "title_odia": "ବୋଲୋ ହରି ବୋଲୋ",
      "chapter": "Śrī Nāma kīrtana-Chanting of the Holy Names",
      "localSongId": "song-Bolo Hari Bolo",
      "isAvailable": true
    },
    {
      "index": 34,
      "title": "Bolo Hari Bolo (3 Times)",
      "vname": "Bolo Hari Bolo",
      "title_odia": "ବୋଲୋ ହରି ବୋଲୋ",
      "chapter": "Śrī Nāma kīrtana-Chanting of the Holy Names",
      "localSongId": "song-Bolo Hari Bolo",
      "isAvailable": true
    },
    {
      "index": 35,
      "title": "Hare Haraye Namaḥ Kṛṣṇa Jādabāya Namaḥ",
      "chapter": "Śrī Nāma kīrtana-Chanting of the Holy Names",
      "isAvailable": false
    },
    {
      "index": 36,
      "title": "Śrī Rūpa Badane Śrī Saci Kumāra",
      "chapter": "Śrī Nāmāṣṭaka-Eight songs Glorifying the Holy Name",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Jaya Jaya Hari Nāma      Cid Ānandāmṛta Dhāma",
      "chapter": "Śrī Nāmāṣṭaka-Eight songs Glorifying the Holy Name",
      "isAvailable": false
    },
    {
      "index": 38,
      "title": "Biśwe Udita         Nāma Tapana",
      "chapter": "Śrī Nāmāṣṭaka-Eight songs Glorifying the Holy Name",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Jñānī Jñāna Joge         Koriyā Jatane",
      "chapter": "Śrī Nāmāṣṭaka-Eight songs Glorifying the Holy Name",
      "isAvailable": false
    },
    {
      "index": 40,
      "title": "Hari Nāma Tuyā Aneka Swarūpa",
      "vname": "Harinama Tuwa Anek Swarupa",
      "title_odia": "ହରିନାମ ତୁୱା ଅନେକ ସ୍ୱରୂପ",
      "chapter": "Śrī Nāmāṣṭaka-Eight songs Glorifying the Holy Name",
      "localSongId": "song-harinamatuaanekswarupa",
      "isAvailable": true
    },
    {
      "index": 41,
      "title": "Bācya O Bācaka Dui Swarūpa Tomāra",
      "chapter": "Śrī Nāmāṣṭaka-Eight songs Glorifying the Holy Name",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Ohe Hari Nāma Taba Mahimā Apāra",
      "chapter": "Śrī Nāmāṣṭaka-Eight songs Glorifying the Holy Name",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Nārada Muni         Bājāya Bīṇā",
      "vname": "Narada Muni Bajay Vina",
      "title_odia": "ନାରଦ ମୁନି ବାଜାୟ ବୀଣା",
      "chapter": "Śrī Nāmāṣṭaka-Eight songs Glorifying the Holy Name",
      "localSongId": "song-naradamuni",
      "isAvailable": true
    },
    {
      "index": 44,
      "title": "Kṛṣṇa Bhakti Binā Kabhu Nāhi Phalodoya",
      "chapter": "Śreyo nirṇaya-The Best Welfare",
      "isAvailable": false
    },
    {
      "index": 45,
      "title": "Āra Keno Māyā Jāle Parḍitecho Jība Mīna",
      "vname": "Ar Keno Maya Jale",
      "title_odia": "ଆର କେନୋ ମାୟା-ଜାଲେ",
      "chapter": "Śreyo nirṇaya-The Best Welfare",
      "localSongId": "song-arkenomayajale",
      "isAvailable": true
    },
    {
      "index": 46,
      "title": "Pīriti Sac Cid Ānande Rūpabatī Nārī",
      "chapter": "Śreyo nirṇaya-The Best Welfare",
      "isAvailable": false
    },
    {
      "index": 47,
      "title": "Nirākāra Nirākāra Koriyā Citkāra",
      "chapter": "Śreyo nirṇaya-The Best Welfare",
      "isAvailable": false
    },
    {
      "index": 48,
      "title": "Keno Āra Koro Dweṣa Bideṣi Jana Bhajane",
      "chapter": "Śreyo nirṇaya-The Best Welfare",
      "isAvailable": false
    },
    {
      "index": 49,
      "title": "Bhaja Re Bhaja Re Āmāra Mana Ati Manda",
      "vname": "Bhaja Re Bhaja Re Amar",
      "title_odia": "ଭଜ ରେ ଭଜ ରେ ଆମାର",
      "chapter": "Śreyo nirṇaya-The Best Welfare",
      "localSongId": "bhaja-re-bhaja-re-amar",
      "isAvailable": true
    },
    {
      "index": 50,
      "title": "Bhābanā Bhābanā Mana Tumi Ati Duṣṭa",
      "chapter": "Śreyo nirṇaya-The Best Welfare",
      "isAvailable": false
    },
    {
      "index": 51,
      "title": "Rādhikā Caraṇa Padma          Sakala Śreyera Sadma",
      "chapter": " Śrī Rādhāṣṭaka-Eight songs Glorifying Śrī Rādhā",
      "isAvailable": false
    },
    {
      "index": 52,
      "title": "Birajara Pare Śuddha Parabyoma Dhāma",
      "chapter": " Śrī Rādhāṣṭaka-Eight songs Glorifying Śrī Rādhā",
      "isAvailable": false
    },
    {
      "index": 53,
      "title": "Ramaṇī Śiromaṇi          Bṛṣabhānu Nandinī",
      "vname": "Ramani Siromani",
      "chapter": " Śrī Rādhāṣṭaka-Eight songs Glorifying Śrī Rādhā",
      "isAvailable": false
    },
    {
      "index": 54,
      "title": "Rasika Nāgarī       Gaṇa Śiromaṇi",
      "chapter": " Śrī Rādhāṣṭaka-Eight songs Glorifying Śrī Rādhā",
      "isAvailable": false
    },
    {
      "index": 55,
      "title": "Mahābhāba Cintāmaṇi      Udbhābita Tanu Khāni",
      "chapter": " Śrī Rādhāṣṭaka-Eight songs Glorifying Śrī Rādhā",
      "isAvailable": false
    },
    {
      "index": 56,
      "title": "Baraja Bipine       Jamunā Kūle",
      "chapter": " Śrī Rādhāṣṭaka-Eight songs Glorifying Śrī Rādhā",
      "isAvailable": false
    },
    {
      "index": 57,
      "title": "Śata Koṭi Gopī      Mādhaba Mana",
      "title_odia": "ଶତ କୋଟି ଗୋପୀ ମାଧବ ମନ",
      "chapter": " Śrī Rādhāṣṭaka-Eight songs Glorifying Śrī Rādhā",
      "localSongId": "song-satakotigopimadhabamana",
      "isAvailable": true
    },
    {
      "index": 58,
      "title": "Rādhā Bhajane Jadi Mati Nāhi Bhelā",
      "chapter": " Śrī Rādhāṣṭaka-Eight songs Glorifying Śrī Rādhā",
      "isAvailable": false
    },
    {
      "index": 59,
      "title": "Bhojana Lālase      Rasane Āmāra",
      "chapter": " Pariśiṣṭa-Appendix",
      "isAvailable": false
    },
    {
      "index": 60,
      "title": "Pita Baraṇa Kali Pābana Gorā",
      "chapter": " Śikṣāṣṭaka-Eight Instructions",
      "isAvailable": false
    },
    {
      "index": 61,
      "title": "Tuṅhu Doyā Sāgora Tārayite Prāṇī",
      "chapter": " Śikṣāṣṭaka-Eight Instructions",
      "isAvailable": false
    },
    {
      "index": 62,
      "title": "Śrī Kṛṣṇa Kīrtane Jadi Mānasa Tohāra",
      "vname": "Sri Krsna kirtane Jadi Manasa Tohar",
      "title_odia": "ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ ଯଦି ମାନସ ତୋହାର",
      "chapter": " Śikṣāṣṭaka-Eight Instructions",
      "localSongId": "song-srikrsnakirtane",
      "isAvailable": true
    },
    {
      "index": 63,
      "title": "Prabhu Taba Pada Juge Mora Nibedana",
      "vname": "Prabhu Tava Pada Yuge",
      "title_odia": "ପ୍ରଭୁ ତବ ପଦଯୁଗେ",
      "chapter": " Śikṣāṣṭaka-Eight Instructions",
      "localSongId": "song-prabhutavapadayuge",
      "isAvailable": true
    },
    {
      "index": 64,
      "title": "Anādi Karama Phale       Porḍi Bhabārṇaba Jale",
      "vname": "Anadi Karama Phale",
      "chapter": " Śikṣāṣṭaka-Eight Instructions",
      "localSongId": "song-anadikaramaphale",
      "isAvailable": true
    },
    {
      "index": 65,
      "title": "Aparādha Phale Mama      Citta Bhelo Bajra Sama",
      "chapter": " Śikṣāṣṭaka-Eight Instructions",
      "localSongId": "song-aparadhaphalemama",
      "isAvailable": true
    },
    {
      "index": 66,
      "title": "Gāite Gāite Nāma Ki Daśā Hoilo",
      "title_odia": "ଗାଇତେ ଗାଇତେ ନାମ କି",
      "chapter": " Śikṣāṣṭaka-Eight Instructions",
      "localSongId": "song-gaitegaitenamaki",
      "isAvailable": true
    },
    {
      "index": 67,
      "title": "Bandhu Gaṇa Śunoha Bacana Mora",
      "chapter": " Śikṣāṣṭaka-Eight Instructions",
      "isAvailable": false
    },
    {
      "index": 68,
      "title": "Joga Pīṭhopari Sthita         Aṣṭa Sakhī Subeṣṭita",
      "chapter": " Śikṣāṣṭaka-Eight Instructions",
      "isAvailable": false
    },
    {
      "index": 69,
      "title": "Yadi Te Hari Pāda Saroja Sudhā",
      "vname": "Yadi Te Hari Pada Saroja Sudha",
      "title_odia": "ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ-ସୁଧା",
      "chapter": " Śrī Godruma candra bhajanopadeśa-Advice to Worship the Moon of Godruma",
      "localSongId": "song-yaditeharipada",
      "isAvailable": true
    }
  ],
  "saranagati": [
    {
      "index": 1,
      "title": "Śrī Kṛṣṇa Caitanya Prabhu Jīve Doyā Kori’",
      "vname": "Sri Krsna Caitanya Prabhu Jive Doya Kori",
      "title_odia": "ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି",
      "chapter": "Introduction",
      "localSongId": "song-srikrsnacaitanyaprabhujive",
      "isAvailable": true
    },
    {
      "index": 2,
      "title": "Bhuliyā Tomāre Saṁsāre Āsiyā",
      "vname": "Bhuliya Tomare",
      "chapter": "Dainya-Humility",
      "localSongId": "song-bhuliyatomare",
      "isAvailable": true
    },
    {
      "index": 3,
      "title": "Vidyāra Vilāse  Kāṭāinu Kāla",
      "vname": "Vidyara Vilase",
      "title_odia": "ଵିଦ୍ୟାର ଵିଲାସେ",
      "chapter": "Dainya-Humility",
      "localSongId": "song-vidyaravilase",
      "isAvailable": true
    },
    {
      "index": 4,
      "title": "Jauvane Jakhona  Dhana Upārjane",
      "chapter": "Dainya-Humility",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Āmāra Jīvana  Sadā Pāpe Rata",
      "vname": "Amar Jivan",
      "chapter": "Dainya-Humility",
      "localSongId": "song-amarjivana",
      "isAvailable": true
    },
    {
      "index": 6,
      "title": "Prabhu He! Śuno Mor Duḥkher Kāhinī",
      "chapter": "Dainya-Humility",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Prabhu He! Tuwā Pade E Minati Mor",
      "vname": "Tuwa Pade E Minoti Mor",
      "title_odia": "ତୁୱା ପଦେ ଏ ମିନତି ମୋର",
      "chapter": "Dainya-Humility",
      "localSongId": "song-tuwapadeeminotimor",
      "isAvailable": true
    },
    {
      "index": 8,
      "title": "Emona Durmati  Saṁsāra Bhitore",
      "vname": "Emona Durmati",
      "title_odia": "ଏମନ ଦୁର୍ମତି",
      "chapter": "Dainya-Humility",
      "localSongId": "song-emonadurmati",
      "isAvailable": true
    },
    {
      "index": 9,
      "title": "Nā Koroluṅ Karama  Geyāna Nāhi Bhelo",
      "vname": "Na Korolun Karama",
      "title_odia": "ନା କୋରୋଲୁଁ କରମ",
      "chapter": "Ātma Nivedana-Dedication of the Self",
      "localSongId": "song-nakorolunkarama",
      "isAvailable": true
    },
    {
      "index": 10,
      "title": "Prāneśwar! Kohobuṅ Ki Sarama Ki Bāt",
      "chapter": "Ātma Nivedana-Dedication of the Self",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Mānasa Deho Geho Jo Kichu Mor",
      "vname": "Manasa Deho Geho Jo Kichu Mor",
      "title_odia": "ମାନସ, ଦେହ, ଗେହ",
      "chapter": "Ātma Nivedana-Dedication of the Self",
      "localSongId": "song-manasadehogehoyokichu",
      "isAvailable": true
    },
    {
      "index": 12,
      "title": "Ahaṁ Mama Śabda Arthe Jāhā Kichu Hoy",
      "chapter": "Ātma Nivedana-Dedication of the Self",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Amāra Bolite Prabhu! Āre Kichu Nāi",
      "vname": "Amar Bolite Prabhu",
      "title_odia": "ଆମାର ବୋଲିତେ ପ୍ରଭୁ",
      "chapter": "Ātma Nivedana-Dedication of the Self",
      "localSongId": "song-amarboliteprabhu",
      "isAvailable": true
    },
    {
      "index": 14,
      "title": "Bastutaḥ Sakali Tava Jīva Keho Noy",
      "chapter": "Ātma Nivedana-Dedication of the Self",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Nivedana Kori Prabhu! Tomāra Caraṇe",
      "chapter": "Ātma Nivedana-Dedication of the Self",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Ātma Nivedana  Tuwā Pade Kori’",
      "vname": "Atma Nivedana Tuwa Pade",
      "title_odia": "ଆତ୍ମନିବେଦନ ତୁୟା ପଦେ କରି",
      "chapter": "Ātma Nivedana-Dedication of the Self",
      "localSongId": "song-atmanivedanatuwapade",
      "isAvailable": true
    },
    {
      "index": 17,
      "title": "Ki Jāni Ki Bale  Tomāra Dhāmete",
      "vname": "Ki Jani Ki Bale",
      "title_odia": "କି ଜାନି କି ବଲେ",
      "chapter": "Goptṛtve Varaṇa-Acceptance of the Lord as Sole Maintainer",
      "localSongId": "song-kijanikibale",
      "isAvailable": true
    },
    {
      "index": 18,
      "title": "Dārā Putra Nija Deho Kuṭumba Pālane",
      "chapter": "Goptṛtve Varaṇa-Acceptance of the Lord as Sole Maintainer",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Sarvasva Tomār  Caraṇe Saṁpiyā",
      "vname": "Sarvasva Tomar Carane",
      "title_odia": "ସର୍ବସ୍ବ ତୋମାର, ଚରଣେ",
      "chapter": "Goptṛtve Varaṇa-Acceptance of the Lord as Sole Maintainer",
      "localSongId": "song-sarvasvatomarcarene",
      "isAvailable": true
    },
    {
      "index": 20,
      "title": "Tumi Sarveśvareśvara Brajendra Kumāra!",
      "vname": "Tumi Sarveswareswara Vrajendra Kumar",
      "title_odia": "ତୁମି ସର୍ବେଶ୍ୱରେଶ୍ବର ବ୍ରଜେନ୍ଦ୍ର କୁମାର",
      "chapter": "Goptṛtve Varaṇa-Acceptance of the Lord as Sole Maintainer",
      "localSongId": "song-tumisarveswaresvaravrajendrakumar",
      "isAvailable": true
    },
    {
      "index": 21,
      "title": "Ekhona Bujhinu Prabhu! Tomāra Caraṇa",
      "vname": "Ekhona Bujhinu",
      "chapter": "'Avaśya Rakṣibe Kṛṣṇa' Viśvāsa, Pālana-Faith in Kṛṣṇa as Protector",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Tumi To’ Māribe Jāre  Ke Tāre Rākhite Pāre",
      "vname": "Tumi To Maribe Jare",
      "title_odia": "ତୁମି ତୋ\\",
      "chapter": "'Avaśya Rakṣibe Kṛṣṇa' Viśvāsa, Pālana-Faith in Kṛṣṇa as Protector",
      "localSongId": "song-tumitomaribejare",
      "isAvailable": true
    },
    {
      "index": 23,
      "title": "Ātma Samarpane Gelā Abhimān",
      "chapter": "'Avaśya Rakṣibe Kṛṣṇa' Viśvāsa, Pālana-Faith in Kṛṣṇa as Protector",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Choḍato Puruṣa Abhimān",
      "chapter": "'Avaśya Rakṣibe Kṛṣṇa' Viśvāsa, Pālana-Faith in Kṛṣṇa as Protector",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Keśava! Tuwā Jagata Vicitra",
      "vname": "Kesava Tuwa Jagata Vicitra",
      "title_odia": "କେଶବ! ତୁୱା ଜଗତ ବିଚିତ୍ର",
      "chapter": "Bhakti Pratikūla Bhāva Varjanāṅgīkāra-Renunciation of Conduct Unfavorable to Pure Devotion",
      "localSongId": "song-kesavatuwajagata",
      "isAvailable": true
    },
    {
      "index": 26,
      "title": "Tuwā Bhakti Pratikūla Dharma Jā’te Roy",
      "chapter": "Bhakti Pratikūla Bhāva Varjanāṅgīkāra-Renunciation of Conduct Unfavorable to Pure Devotion",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Viṣaya Vimūḍha Ār Māyāvādī Jan",
      "chapter": "Bhakti Pratikūla Bhāva Varjanāṅgīkāra-Renunciation of Conduct Unfavorable to Pure Devotion",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Āmi To’ Swānanda Sukhada Bāsī",
      "chapter": "Bhakti Pratikūla Bhāva Varjanāṅgīkāra-Renunciation of Conduct Unfavorable to Pure Devotion",
      "isAvailable": false
    },
    {
      "index": 29,
      "title": "Tuwā Bhakti Anukūla Je Je Kārya Hoy",
      "chapter": "Svīkara-Acceptance of Activities Favorable to Pure Devotion",
      "isAvailable": false
    },
    {
      "index": 30,
      "title": "Godruma Dhāme Bhajana Anukūle",
      "chapter": "Svīkara-Acceptance of Activities Favorable to Pure Devotion",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Śuddha Bhakata   Caraṇa Reṇu",
      "vname": "Suddha Bhakata Carana Renu",
      "title_odia": "ଶୁଦ୍ଧ ଭକତ-ଚରଣ ରେଣୁ",
      "chapter": "Svīkara-Acceptance of Activities Favorable to Pure Devotion",
      "localSongId": "song-suddhabhakatacaranarenu",
      "isAvailable": true
    },
    {
      "index": 32,
      "title": "Rādhā Kunḍa Taṭa Kuñja Kuṭīr",
      "vname": "Radha Kunda Tata Kunja Kutir",
      "title_odia": "ରାଧା-କୁଣ୍ଡ-ତଟ-କୁଞ୍ଜ-କୁଟୀର",
      "chapter": "Svīkara-Acceptance of Activities Favorable to Pure Devotion",
      "localSongId": "song-radhakundatata",
      "isAvailable": true
    },
    {
      "index": 33,
      "title": "Prapañce Poḍiyā  Agati Hoiyā",
      "vname": "Prapance Poriya Agati",
      "title_odia": "ହରି ହେ! ପ୍ରପଞ୍ଚେ ପୋଡ଼ିୟା",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "localSongId": "song-prapanceporiyagati",
      "isAvailable": true
    },
    {
      "index": 34,
      "title": "Arthera Sañcaye  Viṣaya Prayāse",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Bhajane Utsāha  Bhaktite Viśvāsa",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 36,
      "title": "Dāna Pratigraha  Mitho Gupta Kathā",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Saṅga Doṣa Śūnya  Dīkṣitādīkṣita",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 38,
      "title": "Nīra Dharma Gata  Jāhnavī Salile",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Vaiṣṇava Ṭhākura  Doyāra Sāgara",
      "vname": "Ohe Vaisnava Thakura",
      "title_odia": "ଓହେ ବୈଷ୍ଣବ ଠାକୁର",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "localSongId": "song-ohevaisnavathakura",
      "isAvailable": true
    },
    {
      "index": 40,
      "title": "Tomāre Bhuliyā  Avidyā Pīḍāya",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 41,
      "title": "Śrī Rūpa Gosāi  Śrī Guru Rūpete",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Boḍo Kṛpā Kori’  Gauḍa Vana Mājhe",
      "vname": "Gurudeva! Boro Krpa Kori",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Kṛpā Bindu Diyā  Koro’ Ei Dāse",
      "vname": "Gurudeva Krpa Bindu Diya",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 44,
      "title": "Kabe Mora Sei Din Ha’be",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 45,
      "title": "Kabe Tava Karunā Prakāśe",
      "chapter": "Bhajana Lālasā-Hankering for Divine Service",
      "isAvailable": false
    },
    {
      "index": 46,
      "title": "Kabe Gaura Vane  Suradhunī Taṭe",
      "vname": "Kabe Gaura Vane",
      "title_odia": "କବେ ଗୌର ବନେ",
      "chapter": "Siddhi Lālasā-Hankering for Spiritual Perfection",
      "localSongId": "song-kabegourabane",
      "isAvailable": true
    },
    {
      "index": 47,
      "title": "Dekhite Dekhite  Bhulibo Vā Kabe",
      "vname": "Dekhite Dekhite",
      "title_odia": "ଦେଖିତେ ଦେଖିତେ",
      "chapter": "Siddhi Lālasā-Hankering for Spiritual Perfection",
      "localSongId": "song-dekhitedekhite",
      "isAvailable": true
    },
    {
      "index": 48,
      "title": "Bṛṣabhānu Sutā   Caraṇa Sevane",
      "chapter": "Siddhi Lālasā-Hankering for Spiritual Perfection",
      "isAvailable": false
    },
    {
      "index": 49,
      "title": "Kabe Ha’be Bolo Se Dina Āmār",
      "vname": "Kabe Habe Bolo",
      "title_odia": "କବେ ହ’ବେ ବୋଲୋ",
      "chapter": "Vijñapti-Spiritual Request",
      "localSongId": "song-kabehabebolo",
      "isAvailable": true
    },
    {
      "index": 50,
      "title": "Kṛṣṇa Nāma Dhare Kata Bala",
      "vname": "Krsna Nama Dhare Koto Bal",
      "title_odia": "କୃଷ୍ଣ ନାମ ଧରେ କତ ବଳ",
      "chapter": "Śrī Nāma Māhātmya-The Glories of the Holy Name",
      "localSongId": "song-krsnanamadhare",
      "isAvailable": true
    }
  ],
  "kalyana": [
    {
      "index": 1,
      "title": "Vande Vṛndāṭavī Candraṁ",
      "chapter": "Maṅgalācaraṇa-Invoking Auspiciousness",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Jaya Jaya Śrī Caitanya Patita Pābana",
      "chapter": "Maṅgalācaraṇa-Invoking Auspiciousness",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Dīkṣā Guru Kṛpā Kori' Mantra Upadeśa",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Mana Re Keno Miche Bhajicho Asāra?",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Mana Tumi Bhālabāsa Kāmera Taraṅga",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Mana Re Tumi Boro Sandigdha Antara",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Mana Tumi Boḍai Pāmora",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Mana Keno E Saṁśoya",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Mana Tumi Paḍile Ki Chāra?",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Mana Jogī Ho'te Tomāra Bāsanā",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Ohe Bhāi Mana Keno Brahma Ho'te Cāya",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Mana Re Keno Āra Barṇa Abhimāna",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Mana Re Keno Koro Bidyāra Gauraba",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Rūpera Gauraba Keno Bhāi",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Mana Re Dhana Mada Nitānta Asāra",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Mana Tumi Sannyāsī Sājite Keno Cāo",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Mana Tumi Tīrthe Sadā Rata",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 18,
      "title": "Dekho Mana Brate Jena Nā Hao Ācchanna",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Mana Tumi Boroi Cañcala",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Mana Tore Boli E Bāratā",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Ki Āra Bolibo Tore Mana",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Keno Mana Kāmere Nacāo Prema Prāya",
      "chapter": "Updeśa-Teaching",
      "isAvailable": false
    },
    {
      "index": 23,
      "title": "Āmi Ati Pāmara Durjana",
      "chapter": "Anutāpa lakṣaṇa upalabdhi-Repentance",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Sādhu Saṅga Nā Hoilo Hāya",
      "chapter": "Anutāpa lakṣaṇa upalabdhi-Repentance",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Ore Mana Karmera Kuhare Gelo Kāla",
      "chapter": "Anutāpa lakṣaṇa upalabdhi-Repentance",
      "isAvailable": false
    },
    {
      "index": 26,
      "title": "Ore Mana Ki Bipada Hoilo Āmāra",
      "chapter": "Anutāpa lakṣaṇa upalabdhi-Repentance",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Ore Mana Kleśa Tāpa Dekhi Je Aśeṣa",
      "chapter": "Anutāpa lakṣaṇa upalabdhi-Repentance",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Ore Mana Bhālo Nāhi Lāge E Soṁsāra",
      "vname": "Ore Mana Bhalonahi Lage E Samsar",
      "title_odia": "ଓ ରେ ମନ, ଭାଲ ନାହି ଲାଗେ ଏ ସଂସାର",
      "chapter": "Nirveda lakṣaṇa upalabdhi-Renunciation",
      "localSongId": "song-oremanabhalonahilage",
      "isAvailable": true
    },
    {
      "index": 29,
      "title": "Ore Mana Bāribāra Āśā Keno Koro",
      "chapter": "Nirveda lakṣaṇa upalabdhi-Renunciation",
      "isAvailable": false
    },
    {
      "index": 30,
      "title": "Ore Mana Bhukti Mukti Spṛhā Koro Dūra",
      "chapter": "Nirveda lakṣaṇa upalabdhi-Renunciation",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Durlabha Mānaba Janma Labhiyā Soṁsāre",
      "vname": "Durlabha Manava Janma",
      "chapter": "Nirveda lakṣaṇa upalabdhi-Renunciation",
      "localSongId": "song-durlabhamanavajanma",
      "isAvailable": true
    },
    {
      "index": 32,
      "title": "Śarīrera Sukhe Mana Deho Jalañjali",
      "chapter": "Nirveda lakṣaṇa upalabdhi-Renunciation",
      "isAvailable": false
    },
    {
      "index": 33,
      "title": "Ore Mana Boli Śuno Tattwa Bibaraṇa",
      "chapter": "Sambandha abhidheya prayojana-The Soul's Relationship with the Supreme Lord, His Activities in that Relationship, and the final Goal of Life",
      "isAvailable": false
    },
    {
      "index": 34,
      "title": "Apūrba Baiṣṇaba Tattwa Ātmāra Ānanda",
      "chapter": "Sambandha abhidheya prayojana-The Soul's Relationship with the Supreme Lord, His Activities in that Relationship, and the final Goal of Life",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Cij Joḍera Dwaita Jini Korena Sthāpana",
      "chapter": "Sambandha abhidheya prayojana-The Soul's Relationship with the Supreme Lord, His Activities in that Relationship, and the final Goal of Life",
      "isAvailable": false
    },
    {
      "index": 36,
      "title": "Jībana Samāpta Kāle Koribo Bhajana",
      "chapter": "Sambandha abhidheya prayojana-The Soul's Relationship with the Supreme Lord, His Activities in that Relationship, and the final Goal of Life",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Kabe Śrī Caitanya More Koribena Doyā",
      "vname": "Kabe Sri Caitanya More Koribena Doya",
      "chapter": "Prārthanā Dainyamayī-Humble Prayers",
      "isAvailable": false
    },
    {
      "index": 38,
      "title": "Āmi To' Durjana Ati Sadā Durācāra",
      "vname": "Ami To Durjana Ati Sada Duracar",
      "chapter": "Prārthanā Dainyamayī-Humble Prayers",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Bhabārṇabe Po'ḍe More Ākula Parāṇa",
      "chapter": "Prārthanā Dainyamayī-Humble Prayers",
      "isAvailable": false
    },
    {
      "index": 40,
      "title": "Biṣaya Bāsanā Rūpa Cittera Bikāra",
      "chapter": "Prārthanā Dainyamayī-Humble Prayers",
      "isAvailable": false
    },
    {
      "index": 41,
      "title": "Āmāra Samāna Hīna Nāhi E Soṁsāre",
      "chapter": "Prārthanā Dainyamayī-Humble Prayers",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Kabe Mora Śubha Dina Hoibe Udoya",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Śrī Guru Baiṣṇaba Kṛpā Kota Dine Habe",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 44,
      "title": "Āmāra Emona Bhāgya Kota Dine Ha'be",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 45,
      "title": "Caitanya Candrera Līlā Samudra Apāra",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 46,
      "title": "Kabe Mora Mūḍha Mana Chāri' Anya Dhyāna",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 47,
      "title": "Hari Hari Kabe Mora Ho'be Heno Dina",
      "vname": "Hari Hari Kabe Mora Hobe Heno Dina",
      "title_odia": "ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "localSongId": "song-hariharikabemore",
      "isAvailable": true
    },
    {
      "index": 48,
      "title": "Kabe Mui Baiṣṇabe Cinibo Hari Hari",
      "vname": "Kabe Mui Vaisnava Cinibo",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 49,
      "title": "Kṛpā Koro' Baiṣṇaba Ṭhākura",
      "vname": "Krpa Koro Vaisnava Thakura",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 50,
      "title": "Kabe Ha'be Heno Daśā Mora",
      "vname": "Kabe Habe Heno Dasa Mor",
      "title_odia": "କବେ ହ’ବେ ବୋଲୋ",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "localSongId": "song-kabehabebolo",
      "isAvailable": true
    },
    {
      "index": 51,
      "title": "Hā Hā Morā Gaura Kiśora",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 52,
      "title": "Hā Hā Kabe Gaura Nitāi",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 53,
      "title": "Kabe Āhā Gaurāṅga Boliyā",
      "chapter": "Prārthanā Lalasāmayī-Prayers Filled With Longing",
      "isAvailable": false
    },
    {
      "index": 54,
      "title": "Gopīnātha Mama Nibedana Śuno",
      "vname": "Gopinath Mama Nivedana Suno",
      "chapter": "Vijñapti-Appeals",
      "isAvailable": false
    },
    {
      "index": 55,
      "title": "Gopīnātha Ghucāo Soṁsāra Jwālā",
      "vname": "Gopinath Ghucao Samsara",
      "chapter": "Vijñapti-Appeals",
      "isAvailable": false
    },
    {
      "index": 56,
      "title": "Gopīnātha Āmāra Upāya Nāi",
      "vname": "Gopinath Amar Upaya",
      "chapter": "Vijñapti-Appeals",
      "isAvailable": false
    },
    {
      "index": 57,
      "title": "Śrī Rādhā Kṛṣṇa Pada Kamale Mana",
      "chapter": "Vijñapti-Appeals",
      "isAvailable": false
    },
    {
      "index": 58,
      "title": "Kali Kukkura Kadana Jadi Cāo (he)",
      "vname": "Kali Kukkura Kadan",
      "title_odia": "କଳି କୁକ୍କୁର କଦନ",
      "chapter": "Nama kīrtana-Chanting of the Holy Names",
      "localSongId": "song-kalikukkurakadan",
      "isAvailable": true
    },
    {
      "index": 59,
      "title": "Bibhābarī Śeṣa      Āloka Prabeśa",
      "vname": "Vibhavari Sesa",
      "title_odia": "ବିଭାବରୀ ଶେଷ",
      "chapter": "Nama kīrtana-Chanting of the Holy Names",
      "localSongId": "song-vibhavarisesa",
      "isAvailable": true
    },
    {
      "index": 60,
      "title": "Janama Sa Phala Tā'ra         Kṛṣṇa Daraśana Jā'ra",
      "chapter": "Rūpa kīrtana-Singing the Glories of the Lord's Form",
      "isAvailable": false
    },
    {
      "index": 61,
      "title": "Bahirmukha Ho'ye         Māyāre Bhajiye",
      "chapter": " Guṇa kīrtana-Singing the Glories of the Lord's Qualities",
      "isAvailable": false
    },
    {
      "index": 62,
      "title": "Śuno He Rasika Jana      Kṛṣṇa Guṇa Agaṇana",
      "chapter": " Guṇa kīrtana-Singing the Glories of the Lord's Qualities",
      "isAvailable": false
    },
    {
      "index": 63,
      "title": "Jībe Kṛpā Kori'          Golokera Hori",
      "chapter": " Līlā kīrtana-Chanting the Glories of the Lord's Pastimes",
      "isAvailable": false
    },
    {
      "index": 64,
      "title": "Jamunā Puline       Kadamba Kānane",
      "vname": "Ami Jamuna Puline",
      "chapter": " Līlā kīrtana-Chanting the Glories of the Lord's Pastimes",
      "localSongId": "song-amijamunapuline",
      "isAvailable": true
    },
    {
      "index": 65,
      "title": "Kṛṣṇa Baṁśī Gīta Śuni'        Dekhi' Citra Pata Khani",
      "chapter": " Rasa kīrtana-Chanting the Glories of the Transcendental Mellows",
      "isAvailable": false
    }
  ],
  "gitamala": [
    {
      "index": 1,
      "title": "Ohe Prabhu Doyāmoya        Tomāra Caraṇa Dwoya",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Tomāra Īkhana Hoya         Sakala Utpatti Loya",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Para Tattwa Bicakhaṇa      Byāsa Ādi Muni Gaṇa",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Jagatera Bastu Jata        Baddha Saba Swabhābata",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Tumi Sarba Guṇa Juta       Śakti Taba Baśī Bhūta",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Tomāra Gambhīra Mana       Nāhi Bujhe Anya Jana",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Māyā Baddha Jata Khaṇa          Thāke To' Jībera Mana",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Dharma Niṣṭhā Nāhi Mora        Ātma Bodha Bā Sundora",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Heno Duṣṭa Karma Nāi       Jaha Āmi Kori Nāi",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Nija Karma Doṣa Phale      Poḍi' Bhabārṇaba Jale",
      "vname": "Nija Karma Dose Phale",
      "title_odia": "ନିଜ କର୍ମ ଦୋଷ ଫଲେ",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "localSongId": "song-nijakarmadosephale",
      "isAvailable": true
    },
    {
      "index": 11,
      "title": "Anya Āśā Nāhi Jāra         Taba Pada Padma Tāra",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Taba Pada Paṅkajinī        Jībāmṛta Sañcāriṇī",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Bhramite Soṁsāra Bane      Kabhu Daiba Samghaṭane",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Tomāra Caraṇa Padma        Anurāga Sudhā Sadma",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Tabāṅghri Kamala Dwoya          Bilāsa Bikrama Moya",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Āmi Sei Duṣṭa Mati         Nā Dekhiyā Anya Gati",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Āmi Aparādhī Jana          Sadā Daṇḍya Durlakhaṇa",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 18,
      "title": "Abibeka Rūpa Ghana         Tāhe Dhik Ācchādana",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Agre Eka Nibedana          Kori Madhunisūdana",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Tomā Chāḍi' Āmi Kabhu      Anātha Nā Hoi Prabhu",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Strī Puruṣa Deha Gata      Barṇa Ādi Dharma Jata",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Beda Bidhi Anusāre         Karma Kori' E Soṁsāre",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 23,
      "title": "Tomāra Je Śuddha Bhakta         Tomāte Se Anurakta",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Śuno He Madhu Mathana      Mama Eka Bijñāpana",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Āmi Nara Paśu Prāya        Ācāra Bihīna Tāya",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 26,
      "title": "Tumi Jagatera Pitā         Tumi Jagatera Mātā",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Āmi To' Cañcala Mati       Amaryāda Khudra Ati",
      "chapter": "Yāmuna bhāvāvalī-Yāmunācārya's Ecstasies of Love",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Āmi Ati Dina Mati        Braja Kuñje Nibasati",
      "chapter": "Kārpaṇya pañjikā-A Record book of Appeals for Mercy",
      "isAvailable": false
    },
    {
      "index": 29,
      "title": "Pradoṣa Samaye      Śrībāsa Aṅgane",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 30,
      "title": "Prabeśiyā Antaḥ Pure          Nārī Gaṇe Śānta Kore",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Dhana Jana Deha Geha Kṛṣṇe Samarpaṇa",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 32,
      "title": "Sabu Meli' Bālaka Bhāga Bicāri'",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 33,
      "title": "Śrībāsa Bacana      Śrabaṇa Koriyā",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 34,
      "title": "Prabhura Bacana          Takhana Śuniyā",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Gorācandera Ajña Peye Gṛha Bāsi Gaṇa",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 36,
      "title": "Pūrṇa Cid Ānanda Tumi        Tomāra Cit Kaṇa Āmi",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Bāndhilo Māyā       Je Dina Ho'te",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 38,
      "title": "Śrībāse Kohena Prabhu Tuṅhu Mora Dāsa",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Śrībāsera Prati          Caitanya Prasāda",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 40,
      "title": "Mṛta Śiśu Lo'ye Tabe Bhakata Batsala",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 41,
      "title": "Nadīyā Nagare Gorā Carita Amṛta",
      "chapter": "Śoka śātana-Dispelling Grief",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Śrī Guru Śrī Gauracandra      Bṛndābane Juba Dwandwa",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Bahu Janma Bhāgya Baśe        Cinmoya Madhura Rase",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 44,
      "title": "Joga Jāga Saba Chāra          Śraddhā Sakalera Sāra",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 45,
      "title": "Chāḍi' Anya Abhilāṣa          Jñāna Karma Sahābāsa",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 46,
      "title": "Śraddhā Debi Nāma Jāra        Duiti Swabhāba Tāra",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 47,
      "title": "Rūpānuga Tattwa Sāra          Bujhite Akaṅkha Jāṅra",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 48,
      "title": "Rasera Ādhāra Jini       Tāṅra Citte Rasa Khani",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 49,
      "title": "Jei Rati Janme Jāra      Sei Mata Rasa Tāra",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 50,
      "title": "Madhurera Sthāyī Bhāba        Labhe Jate Abirbhāba",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 51,
      "title": "Rati Prema Sneha Māna         Praṇaya O Rāgākhyāna",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 52,
      "title": "Raty Āswāda Hetu Jata         Bibhāba Nāmete Khyāta",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 53,
      "title": "Śrī Nandānandana Dhana        Tadīya Ballabhā Gaṇa",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 54,
      "title": "Su Ramya Madhura Smita        Sarba Sal Lakhaṇānwita",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 55,
      "title": "Su Ramyādi Guṇa Gaṇa          Hoiyāche Bibhūṣaṇa",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 56,
      "title": "Śrī Kṛṣṇe Sebibo Boli'        Gṛha Chāḍi' Kuñje Coli'",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 57,
      "title": "Nāyikāra Śiromaṇi        Braje Rādhā Ṭhākurāṇī",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 58,
      "title": "Rādhā Kṛṣṇa Guṇa Gāna         Mithāsakti Sambardhana",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 59,
      "title": "Pañca Sakhī Madhye Cāra       Nitya Siddha Rādhikāra",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 60,
      "title": "Parama Caitanya Hari          Tāṅra Śakti Baneśwarī",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 61,
      "title": "Kṛṣṇa Kṛṣṇa Bhakta Gaṇa       Guṇa Nāma Su Carita",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 62,
      "title": "Bibhābita Rati Jabe           Kriyāpara Ho'ye Tabe",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 63,
      "title": "Sthāyī Bhābābiṣṭa Citta       Pāiyā Bibhāba Bitta",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 64,
      "title": "Nirbeda Biṣāda Mada      Dainya Glāni Śramonmāda",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 65,
      "title": "Sādhāraṇi Samañjasā      Sthāyī Lābhe Bhāba Daśā",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 66,
      "title": "Śrī Ujjwala Rasa Sāra         Swabhābataḥ Dwi Prakāra",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 67,
      "title": "Darśana Āśleṣanwita      Ānukūlya Sebāśrīta",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 68,
      "title": "Sandarśana Saṁsparśana        Jalpa Bartma Nirodhana",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 69,
      "title": "Rasa Tattwa Nitya Jaiche      Braja Tattwa Nitya Taiche",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 70,
      "title": "Kṛṣṇera Jateka Khelā          Tāra Madhye Nara Līlā",
      "chapter": "Rūpānuga bhajana darpaṇa-A Mirror Held to the Devotional Service of Rūpanugas ",
      "isAvailable": false
    },
    {
      "index": 71,
      "title": "Kabe Gaura Bane          Suradhunī Taṭe",
      "vname": "Kabe Gaura Vane",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "isAvailable": false
    },
    {
      "index": 72,
      "title": "Dekhite Dekhite          Bhulibo Bā Kabe",
      "vname": "Dekhite Dekhite",
      "title_odia": "ଦେଖିତେ ଦେଖିତେ",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "localSongId": "song-dekhitedekhite",
      "isAvailable": true
    },
    {
      "index": 73,
      "title": "Heno Kāle Kabe          Bilāsa Mañjarī",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "isAvailable": false
    },
    {
      "index": 74,
      "title": "Pālya Dāsī Kari'         Lalitā Sundarī",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "isAvailable": false
    },
    {
      "index": 75,
      "title": "Cintāmaṇi Moya           Rādhā Kuṇḍa Taṭa",
      "title_odia": "ରାଧା-କୁଣ୍ଡ-ତଟ-କୁଞ୍ଜ-କୁଟୀର",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "localSongId": "song-radhakundatata",
      "isAvailable": true
    },
    {
      "index": 76,
      "title": "Nirjana Kuṭīre          Śrī Rādhā Caraṇa",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "isAvailable": false
    },
    {
      "index": 77,
      "title": "Śrī Rūpa Mañjarī Kabe Madhura Bacane",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "localSongId": "song-srirupamanjaripada",
      "isAvailable": true
    },
    {
      "index": 78,
      "title": "Baraṇe Taḍit       Bāsa Tārābalī",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "isAvailable": false
    },
    {
      "index": 79,
      "title": "Bṛṣabhānu Sutā           Caraṇa Sebane",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "isAvailable": false
    },
    {
      "index": 80,
      "title": "Śrī Kṛṣṇa Birahe         Rādhikāra Dāsa",
      "chapter": "Siddhi lālasā-Hankering for Perfection",
      "isAvailable": false
    }
  ],
  "baula-sangita": [
    {
      "index": 1,
      "title": "Āmi Tomār Duḥkher Duḥkhī Sukher Sukhī",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Dharma Pathe Thāki' Koro Jīvana Jāpana Bhāi",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Āsalo Kathā Bolte Ki",
      "title_odia": "ଆସଲୋ କଥା ବୋଲ୍ତେ",
      "localSongId": "song-asalokathabolte",
      "isAvailable": true
    },
    {
      "index": 4,
      "title": "Bāul Bāul' Bolche Sabe Hocche Bāul Kon Janā",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Mānuṣa Bhajan Korcho O Bhāi Bhāver Gān Dhore'",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Eo To' Eka Kalir Celā",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Mana Āmār Huṅsā'r Theko Bhūlo' Nāko",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Maner Mālā Japbi Jakhan Mana",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Ghare Bose' Bāul Hao Re Mana",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Balavān Vairāgī Ṭhākur Kintu Gṛhīr Madhye Bāhādur",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Keno Bheker Prayās?",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Ho'ye Viṣaye Āveśa Pe'le Mana Jātanā Aśeṣa",
      "isAvailable": false
    }
  ],
  "prarthana": [
    {
      "index": 1,
      "title": "Gaurāṅga’ Balite Habe Pulaka Śarīra",
      "vname": "Gauranga Bolite Habe",
      "title_odia": "ଗୌରାଙ୍ଗ ବୋଲିତେ ହବେ",
      "chapter": "Lalasamayi-Longings",
      "localSongId": "song-gaurangabolitehabe",
      "isAvailable": true
    },
    {
      "index": 2,
      "title": "Rādhā Kṛṣṇa! Nivedana Ei Jana Kare",
      "chapter": "Samprarthanatmika-Appeal",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Hari Hari! Ki Mora Karama Gati Manda",
      "chapter": "Dainya bodhika-The Author Describes His Fallen Condition",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Hari Hari! Biphale Janama Goñāinu",
      "vname": "Hari Hari Biphale Janama",
      "title_odia": "ହରି ହରି ବିଫଳେ ଜନମ",
      "chapter": "Dainya bodhika-The Author Describes His Fallen Condition",
      "localSongId": "song-hariharibiphalejanama",
      "isAvailable": true
    },
    {
      "index": 5,
      "title": "Prāṇeśvara! Nivedana Ei Jana Kare",
      "chapter": "Dainya bodhika-The Author Describes His Fallen Condition",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Hari Hari! Kṛpā Kari Rākha Nija Pade",
      "chapter": "Dainya bodhika-The Author Describes His Fallen Condition",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Hari Hari! Baḍa Śela Marame Rahila",
      "chapter": "Dainya bodhika-The Author Describes His Fallen Condition",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Hari Hari! Ki Mora Karama Abhāga",
      "chapter": "Dainya bodhika prarthana-Prayer Wherein the Author Describes His Fallen Condition",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Hari Hari! Hena Dina Haibe Āmāra",
      "chapter": "Swabhista lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Hari Hari! Kabe Mora Haibe Sudine",
      "title_odia": "ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ",
      "chapter": "Swabhista lalasa-Longings",
      "localSongId": "song-hariharikabemore",
      "isAvailable": true
    },
    {
      "index": 11,
      "title": "Govardhana Girivara Kevala Nirjana Sthala",
      "chapter": "Swabhista lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Hari Hari! Āra Ki Emana Daśā Haba",
      "chapter": "Swabhista lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Hari Hari! Āra Ki Emana Daśā Haba",
      "chapter": "Swabhista lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Kusumita Vṛndāvane Nācata Sakhī Gaṇe",
      "vname": "Kusumita Vrndavane Nacata Sikhi Gane",
      "chapter": "Swabhista lalasa-Longings",
      "localSongId": "song-kusumitavrndavane",
      "isAvailable": true
    },
    {
      "index": 15,
      "title": "Hari Hari ! Kabe Mora Haibe Sudina",
      "vname": "Hari Hari Kabe More Hoibe Su-Dina",
      "title_odia": "ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ",
      "chapter": "Punah Svabhista lalasa-The Author Continues the Description of His Longings",
      "localSongId": "song-hariharikabemore",
      "isAvailable": true
    },
    {
      "index": 16,
      "title": "Śrī Rūpa Mañjarī Pada Sei Mora Sampada",
      "vname": "Sri Rupa Manjari Pada Sei Mora Sampada",
      "chapter": "Lalasa-Longings",
      "localSongId": "song-srirupamanjaripada",
      "isAvailable": true
    },
    {
      "index": 17,
      "title": "Śuniyāchi Sādhu Mukhe Bale Sarva Jana",
      "vname": "Suniyachi Sadhu Mukhe Bole",
      "chapter": "Lalasa-Longings",
      "localSongId": "song-suniyachisadhumukhe",
      "isAvailable": true
    },
    {
      "index": 18,
      "title": "Ei Nava Dāsī Bali Śrī Rūpa Cāhibe",
      "chapter": "Lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Śrī Rūpa Paścāte Āmi Rahiba Bhīta Hañā",
      "chapter": "Lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Hā Hā ! Prabhu Lokanātha Rākha Pāda Dvandve",
      "chapter": "Lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Lokanātha Prabhu ! Tumi Dayā Kara More",
      "chapter": "Lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Hā Hā Prabhu ! Kara Dayā Karuṇā Tomāra",
      "chapter": "Lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 23,
      "title": "Sadā Se Mādhurī Dekhi Manera Lālase",
      "chapter": "Lalasa-Longings",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Jaya Jaya Śrī Kṛṣṇa Caitanya Nityānanda",
      "vname": "Jaya Jaya Sri Krsna Caitanya Nityananda",
      "title_odia": "ଜୟ ଜୟ ଶ୍ରୀ-କୃଷ୍ଣ-ଚୈତନ୍ୟ ନିତ୍ୟାନନ୍ଦ",
      "chapter": "Lalasa-Longings",
      "localSongId": "song-jjsrkrsnctnntnnd",
      "isAvailable": true
    },
    {
      "index": 25,
      "title": "Hari Hari! Kabe Mora Haibe Sudina",
      "vname": "Hari Hari Kabe More Hoibe Su-Dina",
      "title_odia": "ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ",
      "chapter": "Sadhaka dehocita lalasa-The Devotee's Aspiration",
      "localSongId": "song-hariharikabemore",
      "isAvailable": true
    },
    {
      "index": 26,
      "title": "Hari Hari ! Āra Ki Emana Daśā Haba",
      "chapter": "Sadhaka dehocita Sri brndabana basa lalasa-The Devotee's Aspiration to Reside in Sri Vrndavana",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Hari Hari ! Āra Kabe Pālaṭibe Daśā",
      "chapter": "Sadhaka dehocita Sri brndabana basa lalasa-The Devotee's Aspiration to Reside in Sri Vrndavana",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Karaṅga Kaupīna Lañā Cheṅḍa Kāṅthā Gāya Diyā",
      "chapter": "Sadhaka dehocita Sri brndabana basa lalasa-The Devotee's Aspiration to Reside in Sri Vrndavana",
      "isAvailable": false
    },
    {
      "index": 29,
      "title": "Hari Hari ! Kabe Haba Vṛndāvana Vāsī",
      "title_odia": "ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ",
      "chapter": "Sadhaka dehocita Sri brndabana basa lalasa-The Devotee's Aspiration to Reside in Sri Vrndavana",
      "localSongId": "song-hariharikabemore",
      "isAvailable": true
    },
    {
      "index": 30,
      "title": "Āra Ki Emana Daśā Haba",
      "chapter": " Sa bilapa Sri brndabana basa lalasa-Lamentation and Yearning to Reside in Sri Vrndavana",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Kabe Kṛṣṇa Dhana Pāba Hiyāra Mājhāre Thoba",
      "vname": "Kabe Krsna Dhan Pabo",
      "title_odia": "କବେ କୃଷ୍ଣ-ଧନ ପାବ",
      "chapter": " Mathura virahocita darsana lalasa-The Author Yearns to Again see Mathura",
      "localSongId": "song-kabekrsnadhanpabo",
      "isAvailable": true
    },
    {
      "index": 32,
      "title": "Ei Bāra Pāile Dekhā Caraṇa Du’ Khāni",
      "chapter": " Mathura virahocita darsana lalasa-The Author Yearns to Again see Mathura",
      "isAvailable": false
    },
    {
      "index": 33,
      "title": "Vṛndāvana Ramya Sthāna Divya Ciṅtāmaṇi Dhāma",
      "vname": "Vrndavana Ramya Sthana",
      "chapter": " Mathura virahocita darsana lalasa-The Author Yearns to Again see Mathura",
      "localSongId": "song-vrndavanaramyasthana",
      "isAvailable": true
    },
    {
      "index": 34,
      "title": "Kadamba Tarura Ḍāla Nāmiyāche Bhūme Bhāla",
      "chapter": " Mathura virahocita darsana lalasa-The Author Yearns to Again see Mathura",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Dhana Mora Nityānanda Pati Mora Gauracandra",
      "vname": "Dhana Mor Nityananda",
      "title_odia": "ଧନ ମୋର ନିତ୍ୟାନନ୍ଦ",
      "chapter": " Swa nistha-My Faith",
      "localSongId": "song-dhanamornityananda",
      "isAvailable": true
    },
    {
      "index": 36,
      "title": "Nitāi Pada Kamala Koṭī Candra Suśītala",
      "vname": "Nitai Pada Kamala",
      "chapter": " Nityanda nistha-Faith in Lord Nityananda",
      "localSongId": "song-nitaipadakamala",
      "isAvailable": true
    },
    {
      "index": 37,
      "title": "Are Bhāi! Bhaja Mora Gaurāṅga Caraṇa",
      "vname": "Are Bhai Bhaja Mora",
      "title_odia": "ଆରେ ଭାଇ ! ଭଜ ମୋର",
      "chapter": " Gauranga nistha-Faith in Lord Caitanya",
      "localSongId": "song-arebhaibhajamora",
      "isAvailable": true
    },
    {
      "index": 38,
      "title": "Gaurāṅgera Duṭī Pada Jā’ra Dhana Sampada",
      "vname": "Gaurangera Duti Pada",
      "chapter": " Sabarana Gaura mahima-The Glories of Lord Gauranga",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Śrī Kṛṣṇa Caitanya Prabhu Dayā Kara More",
      "vname": "Sri Krsna Caitanya Prabhu Doya Koro More",
      "chapter": " Punah Prarthana-Another Prayer",
      "localSongId": "song-srikrsnacaitanyaprabhu",
      "isAvailable": true
    },
    {
      "index": 40,
      "title": "Je Ānila Prema Dhana Karuṇā Pracura",
      "vname": "Je Anilo Prema Dhana",
      "title_odia": "ଯେ ଆନିଲ ପ୍ରେମ ଧନ",
      "chapter": " Sa parsada bhagavad viraha janita vilapa-Separated from the Lord and His Associates, the Author Laments",
      "localSongId": "song-jeanilopremadhana",
      "isAvailable": true
    },
    {
      "index": 41,
      "title": "Gorā Paṅhu Nā Bhajiyā Mainū",
      "vname": "Gora Pahun",
      "title_odia": "ଗୋର ପହୁଁ",
      "chapter": " Aksepa-regret",
      "localSongId": "song-gorapahun",
      "isAvailable": true
    },
    {
      "index": 42,
      "title": "Hari Hari! Ki Mora Karama Anūrata",
      "chapter": " Aksepa-regret",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Ṭhākura Vaiṣṇava Pada Avanīra Su Sampada",
      "vname": "Thakura Vaisnava Pada",
      "chapter": " Baisnaba mahima-Glorification of the Devotees",
      "localSongId": "song-thakuravaisnavapada",
      "isAvailable": true
    },
    {
      "index": 44,
      "title": "Ṭhākura Vaiṣṇava Gaṇa Kari Ei Nibedana",
      "vname": "Thakura Vaisnava Gana",
      "chapter": " Baisnaba bijnapti-Prayer to the Vaisnavas",
      "localSongId": "song-thakuravaisnavagana",
      "isAvailable": true
    },
    {
      "index": 45,
      "title": "Ei Bāra Karuṇā Kara Vaiṣṇava Gosāñi",
      "vname": "Ei Baro Karuna Koro",
      "title_odia": "ଏଇ ବାର କରୁଣା କର",
      "chapter": " Baisnaba bijnapti-Prayer to the Vaisnavas",
      "localSongId": "song-eibarokarunakoro",
      "isAvailable": true
    },
    {
      "index": 46,
      "title": "Ki Rūpe Pāiba Sevā Mui Durācāra",
      "vname": "Ki Rupe Paibo Seva",
      "chapter": " Baisnaba bijnapti-Prayer to the Vaisnavas",
      "localSongId": "song-kirupepaiboseva",
      "isAvailable": true
    },
    {
      "index": 47,
      "title": "Rādhā Kṛṣṇa Sevon Muñi Jīvane Maraṇe",
      "vname": "Radha Krsna Sevon Mui",
      "chapter": " Sri rupa rati manjaryah Vijnaptih-Prayer to Sri Rupa manjari and Sri Rati manjari",
      "isAvailable": false
    },
    {
      "index": 48,
      "title": "Rādhā Kṛṣṇa Prāṇa Mora Jugala Kiśora",
      "vname": "Radha Krsna Prana Mora",
      "chapter": " Sakhi vrnde vijnaptih-Prayer to the Gopis",
      "localSongId": "song-radhakrsnapranamora",
      "isAvailable": true
    },
    {
      "index": 49,
      "title": "Prāṇeśvari! Ei Bāra Karuṇā Kara More",
      "chapter": " Siddha dehena Sri vrndavanaisvaryam saksad vijnaptih-The Author Prays to Attain a Spiritual body in Sri Vrndavana dhama",
      "isAvailable": false
    },
    {
      "index": 50,
      "title": "Arūṇa Kamala Dale Śeṣa Bichāiba",
      "chapter": " Siddha dehena Sri vrndavanaisvaryam saksad vijnaptih-The Author Prays to Attain a Spiritual body in Sri Vrndavana dhama",
      "isAvailable": false
    },
    {
      "index": 51,
      "title": "Prabhu He! Ei Bāra Karaha Karuṇā",
      "chapter": " Sri Krsne Vijnaptih-Prayer to Sri Krsna",
      "isAvailable": false
    },
    {
      "index": 52,
      "title": "Aji Rase Bādara Niśi",
      "chapter": " Sri Krsne Vijnaptih-Prayer to Sri Krsna",
      "isAvailable": false
    },
    {
      "index": 53,
      "title": "Govinda Gopīnātha! Kṛpā Kari Rākha Nijapade",
      "chapter": " Miscellaneous songs",
      "isAvailable": false
    },
    {
      "index": 54,
      "title": "Mora Prabhu Madana Gopāla",
      "chapter": " Miscellaneous songs",
      "isAvailable": false
    },
    {
      "index": 55,
      "title": "Hari Balaba Āra Madana Mohana Heraba Go",
      "chapter": " Miscellaneous songs",
      "isAvailable": false
    },
    {
      "index": 56,
      "title": "Hari Hari! Kata Dine Hena Daśā Haba",
      "chapter": " Miscellaneous songs",
      "isAvailable": false
    },
    {
      "index": 57,
      "title": "Hede He! Nāgara Bara Śuna He Mūralīdhara",
      "chapter": " Miscellaneous songs",
      "isAvailable": false
    }
  ],
  "premabhakti": [
    {
      "index": 1,
      "title": "Auspicious Invocation",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Glories of the Spiritual Master",
      "vname": "Sri Guru Carana Padma",
      "title_odia": "ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ",
      "localSongId": "song-gurupuja",
      "isAvailable": true
    },
    {
      "index": 3,
      "title": "The Process of Fixed Devotional Service",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Surrender of the Self",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Undivided Service to the Divine Couple",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "A Glimpse Into the Path of Loving Attachment",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Topics of Meditation for Arousing Prema-bhakti",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "The Characteristics of an Unalloyed Devotee",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Fixed Loving Devotional Service",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "The Ultimate Instructions",
      "isAvailable": false
    }
  ],
  "gaudiya-acaryas": [
    {
      "index": 1,
      "title": "Śacīra Nandana Jaga Jībana Sāra",
      "chapter": "Ananta Acārya",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Nitā I Caitanya Du I Bhā I Dayāra Abadhi",
      "chapter": "Ananta Acārya",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Gaura Naba Ghana Prema Dhārā Bariṣila",
      "chapter": "Ananta Acārya",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Kāṇcā Se Soṇāra Tanu Ḍagamagi Aṅga",
      "chapter": "Ananta Acārya",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Pūrabe Bāndhala Cūḍā Ebe Keṣa Hīna",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Gopī Gaṇa Kuca Kuṅkume Rañjita",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Rūpa Koṭi Kāma Jini        Bidagadha Śiromaṇi",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Kali Yuga Matta Mataṅgaja Maradane Kumati Kariṇī Dūre Gela",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Yata Yata Abatāra Sāra",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Nabadwīpa Gagane Uyala Dina Rāti",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Gaura Sundara Pahuṁ        Nadīyā Udaya Kari",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Kothāya Āchila Gorā Emana Sundara",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Sahaja I Kāṇcana Kānti Kalebara Hera Ite Jaga Jana Mano Mohaniyā",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Baḍa Abatāra Bhā I Baḍa Abatāra",
      "chapter": "Balarāma dāsa",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Dekha Dekha Aparūpa Gaurāṅga Bilāsa",
      "chapter": "Caitanya dāsa",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Mari Nā Lo Nadīyāra Mājhāre O Nā Rūpa",
      "chapter": "Devakīnandana dāsa",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Jaya Jaya Mahāprabhu Jaya Gauracandra",
      "chapter": "Dina Krsna dāsa",
      "isAvailable": false
    },
    {
      "index": 18,
      "title": "Gorā Gelā Pūrba Deśa       Nija Gaṇa Pā I Kleśa",
      "chapter": "Govinda Ghoṣa",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Kanayā Kaṣila Mukha Śobhā",
      "chapter": "Govinda Ghoṣa",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Snāna Kari Śrī Gaurāṅga         Basilena Dibyāsane",
      "chapter": "Govinda Ghoṣa",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Bhaba Sāgara Bara Duratara Duragraha",
      "chapter": "Ghanaśyāma dāsa",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Āju Pūrṇimā Sāja Samaye Rāhu Śaśī Garāsi",
      "chapter": "Ghanaśyāma dāsa",
      "isAvailable": false
    },
    {
      "index": 23,
      "title": "Pūrṇimā Pratipada Sandhi Samaya Pā I Rāhu Garāsala Gagana Śaśī",
      "chapter": "Ghanaśyāma dāsa",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Jagannātha Miśrera Bhabane",
      "chapter": "Ghanaśyāma dāsa",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Ko Kahe Aparūpa       Prema Sudhā Nidhi",
      "chapter": "Ghanaśyāma dāsa",
      "isAvailable": false
    },
    {
      "index": 26,
      "title": "Āhā Mari Mari         Dekha Āṅkhi Bhari",
      "chapter": "Ghanaśyāma dāsa",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Kara Yoḍe Nabadwīpe Bandiba Nimā I",
      "chapter": "Gopāla dāsa",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Śrī Kṛṣṇa Caitanya Gorā Śacīra Dulāla",
      "title_odia": "ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି",
      "chapter": "Govinda dāsa",
      "localSongId": "song-srikrsnacaitanyaprabhujive",
      "isAvailable": true
    },
    {
      "index": 29,
      "title": "Śrī Kṛṣṇa Caitanya     Balarāma Nityānanda",
      "title_odia": "ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି",
      "chapter": "Govinda dāsa",
      "localSongId": "song-srikrsnacaitanyaprabhujive",
      "isAvailable": true
    },
    {
      "index": 30,
      "title": "Kali Timirākula    Akhila Loka Dekhi",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Pada Tale Bhakata Kalapa Taru    Siñcita Pada Makaranda",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 32,
      "title": "Kali Yuge Śrī Caitanya     Abanī Karilā Dhanya",
      "vname": "Kali Yuge Sri Caitanya",
      "title_odia": "କଳି ଯୁଗେ ଶ୍ରୀ ଚୈତନ୍ୟ",
      "chapter": "Govinda dāsa",
      "localSongId": "song-kaliyugesrichaitanya",
      "isAvailable": true
    },
    {
      "index": 33,
      "title": "Kali Kabalita     Kaluṣa Jaḍita",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 34,
      "title": "Preme Ḍhala Ḍhala     Gorā Kalebara",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Patita Pābana     Parbhura Caraṇa",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 36,
      "title": "Jambunada Tanu    Badana Ambuja",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Lākha Bāṇa Kanaka     Kaṣila Kalebara",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 38,
      "title": "Campaka Śoṇa     Kusuma Kanakācala",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Gaura Baraṇa Tanu Śohana    Mohana Sundara",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 40,
      "title": "Pulake Balita Ati     Lalita Hema Tanu",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 41,
      "title": "Dekhata Bekata Gauracandra Beḍhala Bhakata Nakhata Bṛnda",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Nirupama Hema Jyoti Jini Baraṇa",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Suradhunī Tīre Tīra Māhā Bilasa I",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 44,
      "title": "Cita Cora Gaura Aṅga    Raṅge Phirata Bhakata Saṅga",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 45,
      "title": "Sundara Gaura Naṭa Rāja",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 46,
      "title": "Nīrada Nayāne Naba Ghana Siñcane Pūrala Mukula Abalamba",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 47,
      "title": "Ki Herilāma Aparūpa Gorā Guṇa Nidhi",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 48,
      "title": "Āju Śacī Nandana Naba Abhiṣeka",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 49,
      "title": "Śrībāsa Paṇḍita Bigraha Gehe",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 50,
      "title": "Adwaita Ācārya Gaurāṅga Śire",
      "chapter": "Govinda dāsa",
      "isAvailable": false
    },
    {
      "index": 51,
      "title": "Jaya Jaya Śri Kṛṣṇa Caitanya Nāma",
      "title_odia": "ଜୟ ଜୟ ଶ୍ରୀ-କୃଷ୍ଣ-ଚୈତନ୍ୟ ନିତ୍ୟାନନ୍ଦ",
      "chapter": "Govinda dāsa",
      "localSongId": "song-jjsrkrsnctnntnnd",
      "isAvailable": true
    },
    {
      "index": 52,
      "title": "Iha Kali Yuga Dhanya       Nityānanda Śrī Caitanya",
      "chapter": " Hari dāsa",
      "isAvailable": false
    },
    {
      "index": 53,
      "title": "Śyāmera Tanu Aba Gaura Baraṇa",
      "chapter": " Hari vallabha dāsa",
      "isAvailable": false
    },
    {
      "index": 54,
      "title": "Prathame Bandiyā Gāha Gaurāṅga Gosā Ī",
      "chapter": " Hari vallabha dāsa",
      "isAvailable": false
    },
    {
      "index": 55,
      "title": "Pāpe Purala Pṛthibī Parisara Pekhi Parama Dayāla",
      "chapter": " Jagadānanda",
      "isAvailable": false
    },
    {
      "index": 56,
      "title": "Ageyāna Dhwānta Duranta Nimagana",
      "chapter": " Jagadānanda",
      "isAvailable": false
    },
    {
      "index": 57,
      "title": "Nara Hari Nāma Antare Achu Bhāvaha Habe Bhaba Sāgare Pāra",
      "chapter": " Jagadānanda",
      "isAvailable": false
    },
    {
      "index": 58,
      "title": "Dāminī Dāma Damana Ruci Daraśane Dūre Ge O Darapaki Dāpa",
      "chapter": " Jagadānanda",
      "isAvailable": false
    },
    {
      "index": 59,
      "title": "Gaura Kalebara Mauli Manohara Cikura Aiche Nehāri",
      "chapter": " Jagadānanda",
      "isAvailable": false
    },
    {
      "index": 60,
      "title": "Phālguna Purṇimā Tithi Śubhaga Sakali",
      "chapter": " Jagannātha dāsa",
      "isAvailable": false
    },
    {
      "index": 61,
      "title": "Jaya Śacī Suta Gaura Hari",
      "chapter": " Jaya dasa",
      "isAvailable": false
    },
    {
      "index": 62,
      "title": "Śacī Garbha Sindhu Mājhe        Gaurāṅga Ratana Rāje",
      "chapter": " Jñāna dāsa",
      "isAvailable": false
    },
    {
      "index": 63,
      "title": "Hema Baraṇa Bara       Sundara Bigraha",
      "chapter": " Jñāna dāsa",
      "isAvailable": false
    },
    {
      "index": 64,
      "title": "Ke Go A I Gaura Baraṇa          Bāṅkā Bhuru Bāṅkā Nayana",
      "chapter": " Kānu dāsa",
      "isAvailable": false
    },
    {
      "index": 65,
      "title": "Jībera Emana Dayā Kothā O Nā Dekhi",
      "chapter": " Kānu dāsa",
      "isAvailable": false
    },
    {
      "index": 66,
      "title": "Nitā I Caitanya Dohe Baḍa Abatāra",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 67,
      "title": "Āre Re Ninduka Bhā I       Tore Kire Bodha Nā I",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 68,
      "title": "Śāntipurera Baṛā Mālī      Baikuṇṭha Bāgāna Khāli",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 69,
      "title": "Prema Sindhu Gorā Rāya          Nitā I Taraṅga Tāya",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 70,
      "title": "Līlāmṛta Rasa Sāra         Tāra Śata Śata Dhāra",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 71,
      "title": "Gaurāmṛta Anukṣaṇa     Sādhu Mahānta Megha Gaṇa",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 72,
      "title": "Nadīyāra Ghāṭe Bhā I Ki Adbhuta Tari",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 73,
      "title": "Soṅara Naba         Gaura Sundara",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 74,
      "title": "Dekha Du I Bhā I      Gaura Nitā I",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 75,
      "title": "Abhiṣeke Gauracandera Ānanda Apāra",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 76,
      "title": "The Full Moon Of Lord Garua Hari Mercifully Appeared On The Horizon Of Nadiya. Grievous Sins Were All Destrioyed. The Three Worlds Were Filled With Joy. The Universe Was Filled With The Sound Of \"Hari!\"",
      "chapter": " Kṛṣṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 77,
      "title": "Abhinna Madana",
      "chapter": " Lakṣmīkānta dāsa",
      "isAvailable": false
    },
    {
      "index": 78,
      "title": "Ke Yābe Ke Yābe Bhā I Bhaba Sindhu Pāra",
      "vname": "Ke Jabi Ke Jabi Bhai Bhava Sindhu Para",
      "title_odia": "କେ ଯାବି କେ ଯାବି ଭାଇ ଭବ ସିନ୍ଧୁ ପାର",
      "chapter": " Locana dāsa",
      "localSongId": "song-kejabikejabi",
      "isAvailable": true
    },
    {
      "index": 79,
      "title": "Jībera Bhāgye Abanī Bihare Dona Bhā I",
      "chapter": " Locana dāsa",
      "isAvailable": false
    },
    {
      "index": 80,
      "title": "Hera Dekhiyā          Nayāna Bhariyā",
      "vname": "Hera Dekhiya Nayana Bhariya",
      "title_odia": "ହେର ଦେଖିୟା ନୟନ ଭରିୟା",
      "chapter": " Locana dāsa",
      "localSongId": "song-heradekhiyanayanabhariya",
      "isAvailable": true
    },
    {
      "index": 81,
      "title": "Eka Dina Mane Pahuṁ Kaila Ācambita",
      "chapter": " Locana dāsa",
      "isAvailable": false
    },
    {
      "index": 82,
      "title": "Patibratā Lakṣmī Debī Pati Gatā Prāṇa",
      "chapter": " Locana dāsa",
      "isAvailable": false
    },
    {
      "index": 83,
      "title": "Gharere Ā Ila Prabhu Ratna LaiÑā",
      "chapter": " Locana dāsa",
      "isAvailable": false
    },
    {
      "index": 84,
      "title": "Dekha Bhā=i Āgama Nigame",
      "chapter": " Madhava dasa",
      "isAvailable": false
    },
    {
      "index": 85,
      "title": "Śyāmera Gaura Baraṇa Eka Deha",
      "chapter": " Mādhavī dāsa",
      "isAvailable": false
    },
    {
      "index": 86,
      "title": "Niśi Parabhāta Samaye Kiye Pekhaluṁ Rasamyaa Gaura Kiśora",
      "chapter": " Manamatha dāsa",
      "isAvailable": false
    },
    {
      "index": 87,
      "title": "Nāce Pahuṁ Abadhuta Gorā",
      "chapter": " Mādhava Ghoṣa",
      "isAvailable": false
    },
    {
      "index": 88,
      "title": "Śacīra Āṅginā Mājhe        Bhubana=mohana Sāje",
      "chapter": " Murāri",
      "isAvailable": false
    },
    {
      "index": 89,
      "title": "Śacīra Dulāla Mano Raṅge",
      "chapter": " Murāri",
      "isAvailable": false
    },
    {
      "index": 90,
      "title": "Śaci Suta Gaura Hari       Nabadwīpe Abatāri",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 91,
      "title": "Anupama Gora Abatāra",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 92,
      "title": "Gaurāṅga Ke Jāne Mahimā Tomāra",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 93,
      "title": "Pāśarā Nā Yāya Āmāra Gauracāndera Līlā",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 94,
      "title": "Phālguna Pūrṇimā      Maṅgalera Sīmā",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 95,
      "title": "Parama Śubha Śacī Gabhe Bilasata Gaura Gokula Nāha",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 96,
      "title": "Jaya Jaya Jaya Maṅgala Raba Phālguna Pūrṇimā Niśi Naba Śobhita",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 97,
      "title": "Bhubana Mano Corā          Gokula Pati Gorā",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 98,
      "title": "Nadīyāra Nārī Puruṣa       Sukṛti Māni",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 99,
      "title": "Jagannātha Miśra Mahā Sukhe",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 100,
      "title": "Śacī Ṭhākurāṇī Cāru Chānde",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 101,
      "title": "Niśi Parabhāta Samaye Ye Rūpa Ānanda Śacīra Ghare",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 102,
      "title": "Āhā Mari Mari Gaurāṅgacāndera Carite Keba Na Jhure",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 103,
      "title": "Śuna He Su Mati Ati Nirajane Kahiye Gupata Kathā",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 104,
      "title": "Āju Śubha Kṣaṇe Pohā Ila Niśi",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 105,
      "title": "Adwaita Gharaṇī Sītā Ṭhākurāṇī Kebala Rasera Rāśi",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 106,
      "title": "Śrībāsa Banitā Ati Su Carita Snehera Mūrati Yena",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 107,
      "title": "Rajanī Prabhāte Śacī Debī Cite Ānandera Nāhi Ora",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 108,
      "title": "Āju Ki Ānanda Śrī Śacī Bhubane Rajanī Prabhāta Kāle",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 109,
      "title": "Nadīyāra Ati          Puṇyabatī Pati",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 110,
      "title": "Nāce Āre Bāpa Biśwambhara",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 111,
      "title": "Raṅge Nācaye Śacīra Bālā",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 112,
      "title": "Āji Āṅgina Para       Nadīyā Bālaka Sāñe",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 113,
      "title": "Ki Ānanda Nadīyā Nagare",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 114,
      "title": "Gaurasundara Parama Śubha Kṣaṇe Dharala Yajṇopabīta",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 115,
      "title": "Ballabha Duhitā       Lakṣmī Su Caritā",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 116,
      "title": "Ki Ānanda Nadīyā Nagare",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 117,
      "title": "Śrī Śacī Alaya        Ati Śobhamaya",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 118,
      "title": "Śobhāmaya Śacīra Aṅgane",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 119,
      "title": "Āju Snehete Bihwola Haiyā",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 120,
      "title": "Adhibāsa Niśi Pohā Ile",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 121,
      "title": "Kibā Śrī Śacī Bhabana Mājhe",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 122,
      "title": "Āju Kata Nā Ānanda Mane",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 123,
      "title": "Beśa Banā Iyā Sahacare",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 124,
      "title": "Āju Go Dhūli Samaya Śubha Kṣaṇa Gaura Guṇa Maṇi Bhubana Mohana",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 125,
      "title": "Gauracandera Bibāha Dekhibāre",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 126,
      "title": "Ballabha Bhabane Gaura Rāya",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 127,
      "title": "Gorā Guṇa Maṇi Prāṇa Priyā Saha Bilasaye Śoja Bāsara Ghare",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 128,
      "title": "Gorācandera Bibāha Para Dine",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 129,
      "title": "Gaura Gokula Candra Calu Nija Gehe Niśi Parabhāta",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 130,
      "title": "Bibāha Kariyā Biśwambhara",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 131,
      "title": "Lakṣmī Prāya Lakṣmī Ṭhākurāṇī",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 132,
      "title": "Nadīyā Nagare Haila Dhwani",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 133,
      "title": "Gorā Bidhu Adhibāsa Sukhe Kenā Baise Prabeśiyā Bhubana Mājhe",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 134,
      "title": "Hota Śubha Adhibāsa Śubha Kṣaṇe Gagane Sura Gaṇa Magana Gaṇa Sane",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 135,
      "title": "Ki Ānanda Śacīra Bhabane",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 136,
      "title": "Sanātana Miśrera Bhabane",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 137,
      "title": "Dekhi Pahuṅka Bibāha Mādhurī Ko I Dhara I Nā Theha",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 138,
      "title": "Deba Ramaṇī Bṛnda Biraci Beśa Bibidha Bhānti",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 139,
      "title": "Āhā Mari Mari Sura Nārī Gaṇa Nadīyā Cāndera Bibāha Dekhi",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 140,
      "title": "Deba Deba Ramaṇī Ullāse",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 141,
      "title": "Baraja Bhūṣaṇa Gaura Bidhu Bara Kari Bibāha Binoda Gati Para",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 142,
      "title": "Gorācānda Bibāha Kariyā",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 143,
      "title": "Gorā Guṇa Maṇi Sughaḍa Śekhara Parama Mudita Hiyāya",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 144,
      "title": "Nācata Bhubana Mohana Campaka Kanaka Kaṇja Jini Baraṇa",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 145,
      "title": "Gaurāṅga Nahite       Tabe Ki Ha Ite",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 146,
      "title": "Gora Mora Sudha I Kanca Sona",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 147,
      "title": "Nimā I Cañcala Khepā Kichu I Nā Māne Go Śuna Eka Dibasera Kathā",
      "chapter": " Narahari dāsa",
      "isAvailable": false
    },
    {
      "index": 148,
      "title": "Jaya Re Jaya Re Gorā       Śrī Śacī Nandana",
      "chapter": " Nayanānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 149,
      "title": "Goloka Chāḍiya Prabhu Kena Bā Abanī",
      "chapter": " Nayanānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 150,
      "title": "Gorā Mora Guṇera Sāgara",
      "chapter": " Nayanānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 151,
      "title": "Kinā Se Sukhera Sarobare",
      "chapter": " Nayanānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 152,
      "title": "Ā Ota Pirīti          Mūrati Maya Sāgara",
      "chapter": " Nayanānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 153,
      "title": "Kali Ghora Timire          Garāsala Jaga Jana",
      "chapter": " Nayanānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 154,
      "title": "Mukha Khāni Purṇimāra Śaśī Kibā Mantra Jape",
      "chapter": " Nayanānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 155,
      "title": "Jaya Kṛṣṇa Caitanya Nityānanda Candra",
      "chapter": " Paramānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 156,
      "title": "Gorā Abatāre Yāra Na Haila Bhakti Rasa",
      "chapter": " Paramānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 157,
      "title": "Gorā Dayāra Abadhi Guṇa Nidhi",
      "chapter": " Paramānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 158,
      "title": "Paraśa Maṇira Saṅge       Ki Diba Tulanā",
      "chapter": " Paramānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 159,
      "title": "Keśera Bese Bhulila Deśa Tāhe Rasamaya Hāsi",
      "chapter": " Prasāda dāsa",
      "isAvailable": false
    },
    {
      "index": 160,
      "title": "Bhāgyabān Śacī Jagannātha",
      "chapter": " Prema dāsa",
      "isAvailable": false
    },
    {
      "index": 161,
      "title": "Phālguna Pūrṇimā Niśi      Śacī Aṅkākāse Āsi",
      "chapter": " Prema dāsa",
      "isAvailable": false
    },
    {
      "index": 162,
      "title": "Prema Bali Nāma Ati Adbhuta",
      "chapter": " Premānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 163,
      "title": "Emana Gaurāṅga Binā Nāhi Āra",
      "chapter": " Premānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 164,
      "title": "Jaya Jaya Śrī Kṛṣṇa Caitanya Dayā Sindhu",
      "title_odia": "ଜୟ ଜୟ ଶ୍ରୀ-କୃଷ୍ଣ-ଚୈତନ୍ୟ ନିତ୍ୟାନନ୍ଦ",
      "chapter": " Rādhā mohana",
      "localSongId": "song-jjsrkrsnctnntnnd",
      "isAvailable": true
    },
    {
      "index": 165,
      "title": "Jaya Jaya Śrī Kṛṣṇa Caitanya Nāma Sāra",
      "title_odia": "ଜୟ ଜୟ ଶ୍ରୀ-କୃଷ୍ଣ-ଚୈତନ୍ୟ ନିତ୍ୟାନନ୍ଦ",
      "chapter": " Rādhā mohana",
      "localSongId": "song-jjsrkrsnctnntnnd",
      "isAvailable": true
    },
    {
      "index": 166,
      "title": "Vande Viśvambhara Pada Kamalam",
      "title_odia": "ବନ୍ଦେ ବିଶ୍ୱମ୍ଭର-ପଦ-କମଳଂ",
      "chapter": " Rādhā mohana",
      "localSongId": "song-vandevisvambharapada",
      "isAvailable": true
    },
    {
      "index": 167,
      "title": "Paśya Śacī Sutam Anupa Rūpam",
      "chapter": " Rādhā mohana",
      "isAvailable": false
    },
    {
      "index": 168,
      "title": "Kanaka Dharādhara Mada Hara Deha",
      "chapter": " Rāmakānta dāsa",
      "isAvailable": false
    },
    {
      "index": 169,
      "title": "Kīrtana Rasamaya      Āgama Agocara",
      "chapter": " Rāmānanda",
      "isAvailable": false
    },
    {
      "index": 170,
      "title": "Dekha Dekha Jība Gaurāṅga Cāndera Līlā",
      "chapter": " Rāmānanda",
      "isAvailable": false
    },
    {
      "index": 171,
      "title": "Dekha Dekha Adabhuta       Sundara Śacī Suta",
      "chapter": " Rāmānanda",
      "isAvailable": false
    },
    {
      "index": 172,
      "title": "Dekhata Bekata        Gaura Adabhuta",
      "chapter": " Rāmānanda",
      "isAvailable": false
    },
    {
      "index": 173,
      "title": "Dekha Re Dekha Re Sundara Śacī Nandanā",
      "chapter": " Śaṅkara Ghoṣa",
      "isAvailable": false
    },
    {
      "index": 174,
      "title": "Śrī Kṛṣṇa Caitanya Jaya Patita Pābana",
      "title_odia": "ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି",
      "chapter": " Saṅkarṣaṇa dāsa",
      "localSongId": "song-srikrsnacaitanyaprabhujive",
      "isAvailable": true
    },
    {
      "index": 175,
      "title": "Gaurāṅga Dayāra Nidhi Guṇa Agaṇana",
      "chapter": " Saṅkarṣaṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 176,
      "title": "Phālguna Pūrṇimā Śaśī      Rāhu Candrere Paraśi",
      "chapter": " Saṅkarṣaṇa dāsa",
      "isAvailable": false
    },
    {
      "index": 177,
      "title": "Sanakādi Muni Gaṅe         Cāhi Bule Deba Gaṅe",
      "chapter": " Śekhara dāsa",
      "isAvailable": false
    },
    {
      "index": 178,
      "title": "Gaurāṅga Rasera Nadī Premera Taraṅga",
      "chapter": " Śekhara dāsa",
      "isAvailable": false
    },
    {
      "index": 179,
      "title": "Jagannātha Miśrera Sukṛti Bīja Haite",
      "chapter": " Śekhara dāsa",
      "isAvailable": false
    },
    {
      "index": 180,
      "title": "Hāṭera Pattana        Śrī Śacīnandana",
      "chapter": " Śekhara dāsa",
      "isAvailable": false
    },
    {
      "index": 181,
      "title": "Nācata Nagare Nāgara Gaura      Heri Mūrati Madana Bhora",
      "chapter": " Śekhara dāsa",
      "isAvailable": false
    },
    {
      "index": 182,
      "title": "Madhura Madhura Gaura Kiśora Madhura Madhura Nāṭa",
      "chapter": " Śekhara dāsa",
      "isAvailable": false
    },
    {
      "index": 183,
      "title": "Sundara Sundara Gaurāṅga Sundara Sundara Sundara Rūpa",
      "chapter": " Śekhara dāsa",
      "isAvailable": false
    },
    {
      "index": 184,
      "title": "Atula Atula Gaurāṅgera Rūpa Atula Tāhāra Ābhā",
      "chapter": " Śekhara dāsa",
      "isAvailable": false
    },
    {
      "index": 185,
      "title": "Pūrbe Ye I Gopīnātha      Śrīmatī Rādhikā Sātha",
      "chapter": " Śivānanda",
      "isAvailable": false
    },
    {
      "index": 186,
      "title": "Akhila Bhubana Bhari       Hari Rasa Bādara",
      "chapter": " Śivānanda",
      "isAvailable": false
    },
    {
      "index": 187,
      "title": "Caitanya Kalpa Taru        Advaita Ye Śākhā Guru",
      "chapter": " Uddshava dāsa",
      "isAvailable": false
    },
    {
      "index": 188,
      "title": "Jaya Jaya Kala Raba Nadiya Nagare",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 189,
      "title": "Nadiya Akase Asi  Udila Gauranga Sasi",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 190,
      "title": "Misra Purandara Kichu Mane Bicariya",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 191,
      "title": "Eka Mukhe Ki Kahiba Goracandera Lila",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 192,
      "title": "Mayera Anguli Dhari Sisu Gaura Hari",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 193,
      "title": "Purnima Rajani Canda Gagane Udaya",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 194,
      "title": "Bhalire Nacere Mora Sacira Dulala",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 195,
      "title": "Gora Nace Sacira Dulaliya",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 196,
      "title": "Kiye Hama Pekhalum Kanaka Putaliya",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 197,
      "title": "Sacira Anginaya Nace Bisvambhara Raya",
      "vname": "Sacira Anginaya Nace",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 198,
      "title": "Gora Guna Ga O Suni",
      "vname": "Gora Guna Gao Suni",
      "title_odia": "ଗୋରା ଗୁଣ ଗାଓ ଶୁନି",
      "chapter": " Vasudeva Ghosa",
      "localSongId": "song-goragunagaosuni",
      "isAvailable": true
    },
    {
      "index": 199,
      "title": "Gora Hema Jalada Abatara",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 200,
      "title": "Aha Mari Gora Rupera Ki Diba Tulana",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 201,
      "title": "Gauragga Bihara I Parama Anande",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 202,
      "title": "Sankirtane Nityananda Nace",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 203,
      "title": "Nita I Kebala Patita Janara Bandhu",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 204,
      "title": "Nita I Amara Parama Dayala",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 205,
      "title": "Jaya Jaya Dhvani Uthe Nadiya Nagare",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 206,
      "title": "Gora Abhiseka Katha Adbhuta Kathana",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 207,
      "title": "Taila Haridra Ara Kunkuma Kasturi",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 208,
      "title": "Are Mora Are Mora Gora Dvija Mani",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 209,
      "title": "Ki Kahiba Sata Sata Tuya Abatara",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 210,
      "title": "Birale Basiya Ekesvare",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 211,
      "title": "Jaya Jaya Jagannatha Sacira Nandana",
      "vname": "Jaya Jaya Jagannatha Sacira",
      "title_odia": "ଜୟ ଜୟ ଜଗନ୍ନାଥ ଶଚୀର ନନ୍ଦନ",
      "chapter": " Vasudeva Ghosa",
      "localSongId": "song-jayajayajagannathasacira",
      "isAvailable": true
    },
    {
      "index": 212,
      "title": "Birale Basiya Ekecwara",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 213,
      "title": "Ki Herinu Ogo Sa I Bidagadha Raja",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 214,
      "title": "Jambunada Caya Rucira Ganjana",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 215,
      "title": "Ki Herinu Ogo Sa I Bidagadha Raja",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 216,
      "title": "Birale Basiya Ekecwara",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 217,
      "title": "Rasa Paripati Nata Kirtana Lampata",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 218,
      "title": "Gora Hema Jalada Abatara",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 219,
      "title": "Arun A Basane Bibidha Bhusan E",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 220,
      "title": "Nita I Kebala Patita Janara Bandhu",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 221,
      "title": "Gauragga Bihara I Parama Anande",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 222,
      "title": "Abatara Kaila Bada Bada",
      "chapter": " Vasudeva Ghosa",
      "isAvailable": false
    },
    {
      "index": 223,
      "title": "Praphullita Kanaka Kamala Mukha Maṇḍala Nayana Khaṇjana Tāhe Sāje",
      "chapter": " Vijayānanda dāsa",
      "isAvailable": false
    },
    {
      "index": 224,
      "title": "Pulake Carita Gāya         Sukhe Gaḍāgaḍi Yāya",
      "chapter": " Vṛndāvana dāsa",
      "isAvailable": false
    },
    {
      "index": 225,
      "title": "Gaura Govinda Gaṅa         Śuna He Rasika Jana",
      "chapter": " Vṛndāvana dāsa",
      "isAvailable": false
    },
    {
      "index": 226,
      "title": "Abanīka Mājhe Dekha Dona Bhā I",
      "vname": "Abanika Majhe Dekha Dona Bhai",
      "title_odia": "ଅବନିକ ମାଝେ ଦେଖ ଦୋନ ଭାଇ",
      "chapter": " Vṛndāvana dāsa",
      "localSongId": "song-abanikamajhe",
      "isAvailable": true
    },
    {
      "index": 227,
      "title": "Madana Mohana Tanu Gaurāṅga Sundara",
      "vname": "Madana Mohana Tanu",
      "chapter": " Vṛndāvana dāsa",
      "isAvailable": false
    },
    {
      "index": 228,
      "title": "Aparupa Canda         Udaya Nadiya Pure",
      "chapter": " Yadunatha dasa",
      "isAvailable": false
    },
    {
      "index": 229,
      "title": "Gaura Gadadhara Duhum Tanu",
      "chapter": " Yadunatha dasa",
      "isAvailable": false
    }
  ],
  "stavamrita-lahari": [
    {
      "index": 1,
      "title": "Sri Sri Gurvastaka",
      "vname": "Samsara Davanala Lidha Loka",
      "title_odia": "ସଂସାର ଦାବାନଳ",
      "localSongId": "song-gurvastakam",
      "isAvailable": true
    },
    {
      "index": 2,
      "title": "Srila Narottama-prabhor-astaka",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Sri Lokanatha-prabhuvarastaka",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Sri Saci-nandana-vijayastaka",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Sri Mahaprabhor astakam",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Sri Svapna-vilasamrtastaka",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Sri Gopaladevastaka",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Sri Madana-Gopaladevastaka",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Sri Govindadevastaka",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Sri Gopinathadevastaka",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Sri Gokulananda-Govindadevastaka",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Sri Svayam-Bhagavattastaka",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Sri Jagan-mohanastaka",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Sri Anuraga-valli",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Sri Vrndadevy-astaka",
      "vname": "Gangeya Campeya",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Sri Nandisvarastaka",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Sri Vrndavanastaka",
      "vname": "Na Yoga Siddhir Na Mamastu",
      "title_odia": "ନ ଯୋଗ-ସିଦ୍ଧିର୍ ନ ମମାସ୍ତୁ",
      "localSongId": "song-vrindavanastakam",
      "isAvailable": true
    },
    {
      "index": 18,
      "title": "Sri Govardhanastaka",
      "title_odia": "କୃଷ୍ଣ ପ୍ରସାଦେନ ସମସ୍ତ",
      "localSongId": "song-govardhanastakam",
      "isAvailable": true
    },
    {
      "index": 19,
      "title": "Sri Krsna-kundastaka",
      "isAvailable": false
    }
  ],
  "more-songs": [
    {
      "index": 1,
      "title": "Adharaṁ Madhuraṁ Vadanaṁ Madhuraṁ",
      "vname": "Adharam Madhuram",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Akrodha Paramānanda Nityānanda Rāy",
      "vname": "Akrodha Paramananda",
      "title_odia": "ଅକ୍ରୋଧ ପରମାନନ୍ଦ",
      "localSongId": "song-akrodhaparamananda",
      "isAvailable": true
    },
    {
      "index": 3,
      "title": "Ambudāñjanendra Nīla Nindi Kānti Ḍambaraḥ",
      "vname": "Ambudanjanendra Nila",
      "title_odia": "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ - ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍",
      "localSongId": "song-ambudanjanendranila",
      "isAvailable": true
    },
    {
      "index": 4,
      "title": "Ami Jamunā Puline Kadamba Kānane",
      "vname": "Ami Jamuna Puline",
      "localSongId": "song-amijamunapuline",
      "isAvailable": true
    },
    {
      "index": 5,
      "title": "Nava Aruṇa Sama",
      "vname": "Antara Mandire Jago Jago",
      "title_odia": "ଅନ୍ତର ମନ୍ଦିରେ ଜାଗୋ ଜାଗୋ",
      "localSongId": "song-antaramandirejago",
      "isAvailable": true
    },
    {
      "index": 6,
      "title": "Nayaneri Jal Jhore Abirol",
      "vname": "Ar Koto Kal",
      "title_odia": "ଆର କତ କାଲ",
      "localSongId": "song-arkotokal",
      "isAvailable": true
    },
    {
      "index": 7,
      "title": "Boro Sukher Khabor Gāi",
      "vname": "Boro Sukher Khabor Gai",
      "title_odia": "ବଡ଼ ସୁଖେର ଖବର ଗାଇ",
      "localSongId": "song-borosukherkhabar",
      "isAvailable": true
    },
    {
      "index": 8,
      "title": "Jā Ki Kṛpā Pāngu Giri Lāṅge",
      "vname": "Carana Kamal",
      "title_odia": "ଚରଣ କମଲ",
      "localSongId": "song-caranakamal",
      "isAvailable": true
    },
    {
      "index": 9,
      "title": "Dhana Mor Nityānanda  Pati Mor Gaura Candra",
      "vname": "Dhana Mor Nityananda",
      "title_odia": "ଧନ ମୋର ନିତ୍ୟାନନ୍ଦ",
      "localSongId": "song-dhanamornityananda",
      "isAvailable": true
    },
    {
      "index": 10,
      "title": "Dhule Dhule Gorā Chāṅda",
      "vname": "Dhule Dhule Gora Chanda",
      "title_odia": "ଧୁଲେ ଧୁଲେ ଗୋରା ଚାଁଦ",
      "localSongId": "song-dhuledhulegorachanda",
      "isAvailable": true
    },
    {
      "index": 11,
      "title": "Uthāl Deu Āsiche Chuṭiyā",
      "vname": "Duhkher Sagore",
      "title_odia": "ଦୁଃଖେର ସାଗୋରେ",
      "localSongId": "song-dukhersagore",
      "isAvailable": true
    },
    {
      "index": 12,
      "title": "Durlabha Mānava Janma Labhiyā Saṁsāre",
      "vname": "Durlabha Manava Janma",
      "localSongId": "song-durlabhamanavajanma",
      "isAvailable": true
    },
    {
      "index": 13,
      "title": "Duṣṭa Mana! Tumi Kiser Vaiṣṇava?",
      "vname": "Dusta Mana",
      "title_odia": "ଦୁଷ୍ଟ ମନ",
      "localSongId": "song-dustamana",
      "isAvailable": true
    },
    {
      "index": 14,
      "title": "Gaurāṅga Karuṇā Koro Dīna Hīna Jane",
      "vname": "Gauranga Karuna Koro",
      "title_odia": "ଗୌରାଙ୍ଗ କରୁଣା କର",
      "localSongId": "song-gaurangakarunakoro",
      "isAvailable": true
    },
    {
      "index": 15,
      "title": "Gaurāṅga Tumi More Doyā Nā Chāḍiho",
      "vname": "Gauranga Tumi More Doya Na Chadiho",
      "title_odia": "ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନ ଛାଡ଼ିହ",
      "localSongId": "song-gaurangatumimore",
      "isAvailable": true
    },
    {
      "index": 16,
      "title": "Gorā Pahuṅ Nā Bhajiyā Mainu",
      "vname": "Gora Pahun",
      "title_odia": "ଗୋର ପହୁଁ",
      "localSongId": "song-gorapahun",
      "isAvailable": true
    },
    {
      "index": 17,
      "title": "Hari He Doyāl Mor Jaya Rādhā Nāth",
      "vname": "Hari He Doyal Mor",
      "title_odia": "ହରି ହେ ଦୟାଲ ମୋର",
      "localSongId": "song-harihedoyalmor",
      "isAvailable": true
    },
    {
      "index": 18,
      "title": "He Govinda He Gopāla",
      "vname": "He Govinda He Gopal Kesava Madhava",
      "title_odia": "ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ ହେ ଗୋବିନ୍ଦ",
      "localSongId": "song-hegovindahegopala",
      "isAvailable": true
    },
    {
      "index": 19,
      "title": "Jaya Jaya Jagannātha Śacīra Nandan",
      "vname": "Jaya Jaya Jagannatha Sacira",
      "title_odia": "ଜୟ ଜୟ ଜଗନ୍ନାଥ ଶଚୀର ନନ୍ଦନ",
      "localSongId": "song-jayajayajagannathasacira",
      "isAvailable": true
    },
    {
      "index": 20,
      "title": "Sundara Kuṇḍala Naina Viśāla Gale Sohe Vaijantī Mālā",
      "vname": "Sundara Kundala Naina",
      "title_odia": "ସୁନ୍ଦର କୁଣ୍ଡଳ ନୈନ ବିଶାଳା",
      "localSongId": "song-sundarakundalanaina",
      "isAvailable": true
    },
    {
      "index": 21,
      "title": "Jaya Rādhā Giri Vara Dhāri",
      "vname": "Jaya Radha Giri Vara Dhari",
      "title_odia": "ଜୟ ରାଧା ଗିରି-ବର ଧାରୀ",
      "localSongId": "song-jayaradhagirivaradhari",
      "isAvailable": true
    },
    {
      "index": 22,
      "title": "Jaya Rādhe Jaya Rādhe Rādhe Jaya Rādhe Jaya Śrī Rādhe",
      "title_odia": "ଜୟ ରାଧେ ଜୟ ରାଧେ ରାଧେ",
      "localSongId": "song-jayaradhejayaradheradhe",
      "isAvailable": true
    },
    {
      "index": 23,
      "title": "Kabe Śrī Caitanya More Koribena Doyā",
      "vname": "Kabe Sri Caitanya More Koribena Doya",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Kadācit Kālindī Taṭa Vipina Saṅgītaka Ravo",
      "vname": "Kadacit Kalindi Tata Vipina",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Kali Kukkur Kadan Jadi Cāo (he)",
      "vname": "Kali Kukkura Kadan",
      "title_odia": "କଳି କୁକ୍କୁର କଦନ",
      "localSongId": "song-kalikukkurakadan",
      "isAvailable": true
    },
    {
      "index": 26,
      "title": "Pakhi Nā Jāni Kon Aparādhe",
      "vname": "Keno Hare Krsna Nam",
      "title_odia": "କେନୋ ହରେ କୃଷ୍ଣ ନାମ",
      "localSongId": "song-kenoharekrsnanam",
      "isAvailable": true
    },
    {
      "index": 27,
      "title": "Yad Api Samādhiṣu Vidhir Api Paśyati",
      "vname": "Krsna Deva Bhavantam Vande",
      "title_odia": "କୃଷ୍ଣ ଦେବ ଭବନ୍ତଂ ବନ୍ଦେ",
      "localSongId": "song-krsnadevabhavantam",
      "isAvailable": true
    },
    {
      "index": 28,
      "title": "Kṛṣṇa Jinakā Nāma Hai Gokula Jinakā Dhāma Hai",
      "vname": "Krsna Jinaka Nama Hai",
      "title_odia": "କୃଷ୍ଣ ଜିନକା ନାମ ହୈ",
      "localSongId": "song-krsnajinakanamahai",
      "isAvailable": true
    },
    {
      "index": 29,
      "title": "Kṛṣṇa Prema Mayī Rādhā",
      "vname": "Krsna Prema Mayi Radha",
      "isAvailable": false
    },
    {
      "index": 30,
      "title": "Kuṅkumākta Kāñcanābja Garva Hāri Gaurabhā",
      "vname": "Kunkumakta Kancanabja",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Kusumita Vṛndāvane  Nācato Śikhi Gaṇe",
      "vname": "Kusumita Vrndavane Nacata Sikhi Gane",
      "localSongId": "song-kusumitavrndavane",
      "isAvailable": true
    },
    {
      "index": 32,
      "title": "Madhuraṁ Madhurebhyo 'pi",
      "vname": "Madhuram Madhurebhyo Pi",
      "title_odia": "ମଧୁରଂ ମଧୁରେଭ୍ୟୋଽପି",
      "localSongId": "song-madhurammadhurebhyopi",
      "isAvailable": true
    },
    {
      "index": 33,
      "title": "Merī Palakoṅ Meṅ Rādhā Merī Alakoṅ Meṅ Rādhā",
      "vname": "Maine Ratana Lagai Radha Nama Ki",
      "title_odia": "ମୈନେ ରଟନା ଲଗାୟୀ ରାଧା ନାମ କୀ",
      "localSongId": "song-maineratanalagai",
      "isAvailable": true
    },
    {
      "index": 34,
      "title": "Bhakti Prīti Mālā Candan",
      "vname": "Mama Mana Mandire",
      "title_odia": "ମମ ମନ ମନ୍ଦିରେ",
      "localSongId": "song-mamamanamandire",
      "isAvailable": true
    },
    {
      "index": 35,
      "title": "Nava Gaura Varaṁ Nava Puṣpa Śaraṁ",
      "vname": "Nava Gaura Varam",
      "isAvailable": false
    },
    {
      "index": 36,
      "title": "Nava Nīrada Nindita Kānti Dharaṁ",
      "vname": "Nava Nirada Nindita",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Nitāi Guṇa Maṇi Āmār Nitāi Guṇa Maṇi",
      "vname": "Nitai Guna Mani",
      "title_odia": "ନିତାଇ ଗୁଣମଣି",
      "localSongId": "song-nitaigunamani",
      "isAvailable": true
    },
    {
      "index": 38,
      "title": "Nitāi Nām Hāṭe O Ke Jābire Bhāi Āy Chuṭe",
      "vname": "Nitai Nam Hate O Ke Jabire Bhai",
      "title_odia": "ନିତାଇ ନାମ ହାଟେ",
      "localSongId": "song-nitainamhate",
      "isAvailable": true
    },
    {
      "index": 39,
      "title": "Ore Vṛndāvaner Nanda Dulāl",
      "vname": "Ore Vrndavaner Nanda Dulal",
      "isAvailable": false
    },
    {
      "index": 40,
      "title": "Tomār Caraṇa Śaraṇa Kori",
      "vname": "Pranam Tomai Ghana Syam",
      "title_odia": "ପ୍ରଣାମ ତୋମାୟ ଘନଶ୍ୟାମ",
      "localSongId": "song-pranamtomaighanasyam",
      "isAvailable": true
    },
    {
      "index": 41,
      "title": "Ami Pathe Pathe Ghuri Bhikhāriṇī",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Milata Nahiṁ Aisā Durlabha Janma",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Mor Mukuṭa Pītāmbara Sohai Gala Vaijantī Mālā",
      "isAvailable": false
    },
    {
      "index": 44,
      "title": "Śrita Kamalā Kuca Maṇḍala (he)",
      "vname": "Srita Kamala",
      "title_odia": "ଶ୍ରିତ କମଳା",
      "localSongId": "song-sritakamala",
      "isAvailable": true
    },
    {
      "index": 45,
      "title": "Sundara Bālā Śacī Dulālā",
      "vname": "Sundara Bala Saci Dulala",
      "isAvailable": false
    },
    {
      "index": 46,
      "title": "Bhajibo Tomāi Mor Mana Chāi",
      "vname": "Sundara Mora Mana Kisora",
      "isAvailable": false
    },
    {
      "index": 47,
      "title": "Tātala Saikate  Bāri Bindu Sama",
      "vname": "Tatala Saikate",
      "title_odia": "ତାତଲ ସୈକତେ (କହେ ବିଷୟ ମନ)",
      "localSongId": "song-tatalasaikate",
      "isAvailable": true
    },
    {
      "index": 48,
      "title": "Ujjvala Varaṇa Gaura Vara Dehaṁ",
      "vname": "Ujjvala Varana",
      "title_odia": "ଉଜ୍ଜ୍ୱଳ-ବରଣ (ଶ୍ରୀ ଶଚୀତନୟାଷ୍ଟକମ୍)",
      "localSongId": "song-ujjvalavarana",
      "isAvailable": true
    },
    {
      "index": 49,
      "title": "Vaṁśī Dhārī Kṛṣṇa Murāri",
      "vname": "Vamsi Dhari Krsna Murari",
      "title_odia": "ବଂଶୀଧାରୀ କୃଷ୍ଣ ମୁରାରି",
      "localSongId": "song-vamsidharikrsnamurari",
      "isAvailable": true
    },
    {
      "index": 50,
      "title": "Govinda Hari Gopāla Hari",
      "vname": "Vande Krsna Nanda Kumara",
      "title_odia": "ବନ୍ଦେ କୃଷ୍ଣ ନନ୍ଦ-କୁମାର (ଗୋବିନ୍ଦ ହରି ଗୋପାଳ ହରି)",
      "localSongId": "song-vandekrsnanandakumara",
      "isAvailable": true
    },
    {
      "index": 51,
      "title": "Vṛndāvana Ramya Sthāna  Divya Cintāmaṇi Dhāma",
      "vname": "Vrndavana Ramya Sthana",
      "localSongId": "song-vrndavanaramyasthana",
      "isAvailable": true
    },
    {
      "index": 52,
      "title": "Yadi Gaura Nā Hoito  Tabe Ki Hoito",
      "vname": "Yadi Gaura Na Hoito",
      "title_odia": "ଯଦି ଗୌର ନା ହଇତ",
      "localSongId": "song-yadigauranahoito",
      "isAvailable": true
    }
  ],
  "ksanada": [
    {
      "index": 1,
      "title": "Advaita Prakaṭī Kṛto Narahari Preṣṭhaḥ Svarūpa Priyo",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Dekha Dekha Soi Mūratimaya Leha",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Āre Mora Nitāi Se Nāyara",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Kundana Kanayā Kalebara Kānti",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Cale Nitāi Prema Bhare         Diga Ṭhalamala Kare",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Ābeśe Abaśa Aṅga Dhīre Dhīre Cale",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Preme Matta Mahā Balī         Cale Nitā I Diga Dali",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Biśvambhara Mūrti Yena Madana Samāna",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Nitā I Mora Jībana Dhana Nitā I Mora Jāti",
      "title_odia": "ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି",
      "localSongId": "song-nitaimorajibanadhana",
      "isAvailable": true
    },
    {
      "index": 10,
      "title": "Ki Herinu Ogo Sa I Bidagadha Rāja",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Bhakati Ratana Khani       Ughāḍiyā Prema Maṇi",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Gobindera Aṅge Pahuṁ Nija Aṅga Diyā",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Emana Nitā I Kothā O Dekhi Nā I",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Sahaja I Kāñcana Gorā",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Jaya Jaga Tāraṇa Kāraṇa Dhāma",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Aparūpa Hema Maṇi Bhāsa",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Sahaje Nitāicāndera Rīta",
      "isAvailable": false
    },
    {
      "index": 18,
      "title": "Śyāmara Gaura Baraṇa Eka Deha",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Pūrabe Gobardhana         Dharala Anuja Yāra",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Bhābe Tarala Tanu         Anupama Hema Re",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Āre Āre Mora Nitā I Cānda",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Bimala Hema Jini      Tanu Anupama Re",
      "isAvailable": false
    },
    {
      "index": 23,
      "title": "Preme Matta Nityānanda         Sahaje Ānanda Kanda",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Birale Basiyā Ekeśwara",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Rūpe Guṇe Anupamā        Lakṣmī Koṭi Manoramā",
      "isAvailable": false
    },
    {
      "index": 26,
      "title": "Madana Mohana Rūpa Gaurāṅga Sundara",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Dekhare Bhā I Prabala Malla Rūpa Dhārī",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Gorā Dayāra Abadhi Guṇa Nidhi",
      "isAvailable": false
    },
    {
      "index": 29,
      "title": "Āre Bhā I Nitā I Āmāra Dayāra Abadhi",
      "isAvailable": false
    },
    {
      "index": 30,
      "title": "Campaka Śoṇa        Kusuma Kanakācala",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Nitā I Sundara       Abanī Ujora",
      "isAvailable": false
    },
    {
      "index": 32,
      "title": "Tapata Kāñcana           Kānti Kalebara",
      "isAvailable": false
    },
    {
      "index": 33,
      "title": "Khañjana Gañjana         Calana Manorama",
      "isAvailable": false
    },
    {
      "index": 34,
      "title": "Bhāba Bhare Gara Gara Cita",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Nitā I Guṇa Maṇi Āmāra Nitā I Guṇa Maṇi",
      "title_odia": "ନିତାଇ ଗୁଣମଣି",
      "localSongId": "song-nitaigunamani",
      "isAvailable": true
    },
    {
      "index": 36,
      "title": "Gaurāṅga Karuṇā Sindhu Abatāra",
      "title_odia": "ଗୌରାଙ୍ଗ କରୁଣା କର",
      "localSongId": "song-gaurangakarunakoro",
      "isAvailable": true
    },
    {
      "index": 37,
      "title": "Nitā I Karuṇāmaya Abatāra",
      "isAvailable": false
    },
    {
      "index": 38,
      "title": "Patita Heriyā Kānde      Thira Nāhika Baṇdhe",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Mari Yā I Emana Nitā I Kena Nā Bhajinu",
      "isAvailable": false
    },
    {
      "index": 40,
      "title": "Nāce Gorā      Preme Bhorā",
      "isAvailable": false
    },
    {
      "index": 41,
      "title": "Nāce Nityānanda          Bhubana Ānanda",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Rasa Paripāṭī Naṭa          Kīrtana Lampaṭa",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Nitā I Raṅgiyā Mora Nitā I Raṅgiyā",
      "isAvailable": false
    },
    {
      "index": 44,
      "title": "Aparūpa Gorā Naṭa Rāja",
      "isAvailable": false
    },
    {
      "index": 45,
      "title": "Āre Mora Āre Mora Nityānanda Rāya",
      "isAvailable": false
    },
    {
      "index": 46,
      "title": "Birale Vasiyā Ekeśwara",
      "isAvailable": false
    },
    {
      "index": 47,
      "title": "Rūpe Guṇe Anupamā       Lakṣmī Koṭi Manoramā",
      "isAvailable": false
    },
    {
      "index": 48,
      "title": "Dekha Dekha Sundara Śacī Nandanā",
      "isAvailable": false
    },
    {
      "index": 49,
      "title": "Dekha Dekha Dekha Nityānanda",
      "isAvailable": false
    },
    {
      "index": 50,
      "title": "Gorā Hema Jalada Abatāra",
      "isAvailable": false
    },
    {
      "index": 51,
      "title": "Āre Mora Āre Mora Nityānanda Rāya",
      "isAvailable": false
    },
    {
      "index": 52,
      "title": "Keśera Beśe        Bhulila Deśe",
      "isAvailable": false
    },
    {
      "index": 53,
      "title": "Aruṇa Basane         Bibidha Bhūṣaṇe",
      "isAvailable": false
    },
    {
      "index": 54,
      "title": "Gaurāṅga Ṭhekila Pake",
      "isAvailable": false
    },
    {
      "index": 55,
      "title": "Nitā I Kebala Patita Janāra Bandhu",
      "isAvailable": false
    },
    {
      "index": 56,
      "title": "Gaurāṅga Bihara I Parama Ānande",
      "isAvailable": false
    },
    {
      "index": 57,
      "title": "Nitā I Caitanya Duṭī Bhā I Dayāra Abadhi",
      "isAvailable": false
    },
    {
      "index": 58,
      "title": "Caudike Gobinda Dhwani Śuni Pahuṁ Hāse",
      "isAvailable": false
    },
    {
      "index": 59,
      "title": "Maṇḍalī Raciyā Sahacare",
      "isAvailable": false
    },
    {
      "index": 60,
      "title": "Jaya Re Jaya Re Gorā      Śrī Śacī Nandana",
      "isAvailable": false
    },
    {
      "index": 61,
      "title": "Śrībāsa Aṅgane         Binoda Bandhāne",
      "isAvailable": false
    }
  ],
  "gauranga-govinda": [
    {
      "index": 1,
      "title": "Mahā Bhuja Nācata Caitanya Rāya",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Nācata Nīke Gaura Bara Ratana",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Dekha Śacī Nandana Jagata Jībana Dhana Anukhaṇa Prema Dhana",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Gorā Nāce Prema Binodiyā",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Nācaye Caitanya Cintāmaṇi",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Āre Mora Nācata Gaura Kiśora",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Bhābe Bharala Hema Tanu Anupama Re Ahar Niśi Nija Rase Bhora",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Nācaye Gaurāṅga Pahuṁ Sahacara Saṅga",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Nācata Gaura Pūraba Rase Bhora",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Nṛtyata Gauracandra Jana Rañjana Nityānanda Bipada Bhaya Bhañjana",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Āju Ki Ānanda Saṅkīrtane",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Nāce Gaurāṅgacānda Bibhora Bhābete",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Nāce Śacīra Dulāla Raṅge",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Nācata Gauracandra Naṭa Bhūpa",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Nācata Gaura Nikhila Naṭa Paṇḍita Nirupama Bhaṅgī Madana Mada Hara I",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Āju Ki Ānanda Nadīyā Nagare Jagā I Mādhā I Dohe Dekhibāre",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Nācata Gaura Naṭana Paṇḍita Bara",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 18,
      "title": "Bali Kali Matta Mataṅgaja Maradana Gaura Siṁha Nācata Nadīyāya",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Nācata Gaura Parama Sukha Sadanā",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Nācata Śacī Tanaya Gaura Mādhurī Mana Mohe",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Kibā Khola Karatāla Bāje",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Bhubana Mohana Gorācānda",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 23,
      "title": "Āju Gorā Nagara Kīrtane",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Śacīra Dulāla Gorā Nāce",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Nāce Gorā Guṇa Maṇi        Kebala Premera Khani",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 26,
      "title": "Gorā Baḍa Dayāra Ṭhākura",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Nācata Naṭa Bara Gaura Kiśora",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Codige Gobinda Dhwani Śuni Pahuṁ Hāse",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 29,
      "title": "Nadīyā Ākāśe Saṅkīrtana Megha Sāje",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 30,
      "title": "Saṅkīrtana Chale      Gaura Nitā I",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Nabadwīpe Śuni Siṁha Nāda",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 32,
      "title": "Hari Hari Maṅgala          Bharata Kṣiti Maṇḍala",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 33,
      "title": "Śrībāsa Aṅgane        Binoda Bandhane",
      "chapter": " Lord Gaura’s Pastimes of Dancing in Saṅkīrtana",
      "isAvailable": false
    },
    {
      "index": 34,
      "title": "Ā Ota Pirīti        Mūratimaya Sāgara",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Nija Nāmāmṛta Pahuṁ Matta Anukṣaṇa",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 36,
      "title": "Gorā Mora Dayāra Abadhi Guṇa Nidhi",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Soṇāra Baraṇa Gorā Prema Binodiyā",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 38,
      "title": "Bhābābeśe Gorācānda Bibhora Ha Iyā",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Hari Hari Gorā Kena Kānde",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 40,
      "title": "Gambhīre Bhitare Gaura Rāya",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 41,
      "title": "Ro I Ro I Jape Gorā Kṛṣṇa Nāma Madhu",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Siṁha Dwāra Tyaji Gorā Samudra Āḍe Dhāya",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Cetana Pā Iyā Gorā Rāya",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 44,
      "title": "Āre Āmāra Gaura Kiśora",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 45,
      "title": "Sahacara Aṅge Gorā Aṅga Hela Iyā",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 46,
      "title": "Soṇāra Baraṇa         Gaura Sundara",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 47,
      "title": "Śuna Ite Gaurāṅga Kheda",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 48,
      "title": "Āre Mora Gaura Kiśora",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 49,
      "title": "Āju Biraha Bhābe Gaurāṅgasundara",
      "chapter": " Lord Gaura’s Ecstasy",
      "isAvailable": false
    },
    {
      "index": 50,
      "title": "Aparūpa Ratha Āge",
      "chapter": " Lord Gaura’s Pastimes at Rathayātrā",
      "isAvailable": false
    },
    {
      "index": 51,
      "title": "Caudike Mahānta Meli       Karaye Kīrtana Keli",
      "chapter": " Lord Gaura’s Pastimes at Rathayātrā",
      "isAvailable": false
    },
    {
      "index": 52,
      "title": "Āpane Nacite Yabe Prabhura Mana Haila",
      "chapter": " Lord Gaura’s Pastimes at Rathayātrā",
      "isAvailable": false
    },
    {
      "index": 53,
      "title": "Līlā Kārī Jagannātha",
      "chapter": " Lord Gaura’s Pastimes at Rathayātrā",
      "isAvailable": false
    },
    {
      "index": 54,
      "title": "Caitanya Nitā I Āre Dona Bhā I Nāce Re",
      "chapter": " Lord Gaura’s Pastimes at Rathayātrā",
      "isAvailable": false
    },
    {
      "index": 55,
      "title": "Āre Mora Nitā I Nāyara",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 56,
      "title": "Jaya Jaga Tāraṇa Kāraṇa Dhāma",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 57,
      "title": "Jaya Jaya Nityānanda Rohiṇī Kumāra",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 58,
      "title": "Jaya Re Jaya Re Jaya Nityānanda Rāya",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 59,
      "title": "Bande Prabhu Nityānanda         Kebala Ānanda Kanda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 60,
      "title": "Jaya Jaya Padmābatī Suta Sundara",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 61,
      "title": "Rāḍha Deśe Nāma       Ekacakra Grāma",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 62,
      "title": "Bhubana Ānanda Kanda       Balarāma Nityānanda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 63,
      "title": "Āhā Mari Āju Ki Ānanda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 64,
      "title": "Prabhu Nityānanda          Ānandera Kanda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 65,
      "title": "Āge Janamila Nitā I Cānda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 66,
      "title": "Rāḍha Mājhe Ekacākā Nāme Āche Grāma",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 67,
      "title": "Nācata Re Nitā I Bara Cānda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 68,
      "title": "Añjana Gañjana        Locana Rañjana",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 69,
      "title": "Kīrtana Rasa Maya          Āgama Agocara",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 70,
      "title": "Pahuṁ Mora Nityānanda Rāya",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 71,
      "title": "Gajendra Gamane Nitā I Calaye Manthare",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 72,
      "title": "Bhābe Gara Gara       Nitā I Sundara",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 73,
      "title": "Aruṇa Nayana          Bibidha Bhūṣaṇa",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 74,
      "title": "Nitā I Kebala Patita Janāra Bandhu",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 75,
      "title": "Nitā I Āmāra Parama Dayāla",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 76,
      "title": "Pūrube Gobardhana          Dharila Anuja Yāra",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 77,
      "title": "Dekha Re Bhā I Prabala Malla Rūpa Dhārī",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 78,
      "title": "Ye Jana Gaurāṅga Bhajite Cāya",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 79,
      "title": "Āre Mora Āre Mora Nityānanda Rāya",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 80,
      "title": "Sahaje Nitā I Cāndera Rīta",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 81,
      "title": "Rūpe Guṇe Anupama          Lakṣa Koṭi Manoramā",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 82,
      "title": "Gajendra Gamane Yāya       Sa Karuṇa Diṭhe Cāya",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 83,
      "title": "Nitā I Mora Jībana Dhana Nitā I Mora Gati",
      "title_odia": "ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି",
      "chapter": " Lord Nityānanda",
      "localSongId": "song-nitaimorajibanadhana",
      "isAvailable": true
    },
    {
      "index": 84,
      "title": "Dekha Nitā I Cāndera Mādhurī",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 85,
      "title": "Nitā I Cāndera Guṇa Ki Kahaba Āra",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 86,
      "title": "Dekha Dekha Mora Nityānanda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 87,
      "title": "Ānanda Kanda          Nitā I Cānda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 88,
      "title": "Nitā I Cānda Dayāmaya Nitā I Cānda Dayāmaya",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 89,
      "title": "Baḍa I Dayāla Āmāra        Nityānanda Rāya Re",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 90,
      "title": "Preme Matta Mahā Balī      Cale Diga Diga Dali",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 91,
      "title": "Mari Yā I Emana Nitā I Kena Nā Bhajila",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 92,
      "title": "Dayā Kara More Nitā I Dayā Kara More",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 93,
      "title": "Āyata Nityānanda Adabhuta Cānda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 94,
      "title": "Preme Mātoyārā Nitā I Nāgara",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 95,
      "title": "Nitā I Karuṇāmaya Abatāra",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 96,
      "title": "Jaya Jaya Nityānanda Rāya",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 97,
      "title": "Adoṣa Daraśi Mora Prabhu Nityānanda",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 98,
      "title": "Gorā Preme Gara Gara Nitā I Āmāra",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 99,
      "title": "Prabhu Nityānanda Rāma          Rūpe Guṇe Anupāma",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 100,
      "title": "Āju Ānande Nitā I Cānde",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 101,
      "title": "Āju Śubha Kṣaṇe       Nitā I Cāndera",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 102,
      "title": "Basudhā Jāhnabā Debī Śobhā Bidhi Adhibāsa Bhūṣa Bhūṣita Tanu",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 103,
      "title": "Koṭi Manamatha Garabha Bhara Hara Parama Sughara Nitā I Haladhara",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 104,
      "title": "Bhubana Pābana Nitā I Mora",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 105,
      "title": "Nitā I Guṇa Nidhi          Śobhāra Abadhi",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 106,
      "title": "Nitā I Karuṇā Nidhi",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 107,
      "title": "Gorā Preme Mātiyā Nitā I",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 108,
      "title": "Bhubane Jaya Jaya Nitā I Dayāmaya Haraye Bhaba Bhaya Nija Guṇe",
      "chapter": " Lord Nityānanda",
      "isAvailable": false
    },
    {
      "index": 109,
      "title": "Jaya Jaya Adabhuta         So Pahuṁ Adwaita",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 110,
      "title": "Jaya Jaya Adwaita Ācārya Dayāmaya",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 111,
      "title": "Jaya Adwaita Dayita        Karuṇāmaya",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 112,
      "title": "Adwaita Ācārya Guṇa Ke Kahite Pāre",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 113,
      "title": "Śrī Adwaitacandra Bhūpa Mora",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 114,
      "title": "Śāntipura Pati        Parama Sundara",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 115,
      "title": "Śrīmad Adwaita Muda Sadana Guṇa Bhūpa",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 116,
      "title": "Jaya Deba Deba Maheśwara Rūpa",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 117,
      "title": "Jaya Jaya Sītā Pati Pahuṁ Mora",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 118,
      "title": "Ki Bhābe Bibhora Mora Adwaita Gosāñī Re",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 119,
      "title": "Nācaye Adwaita Prema Rāśi",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 120,
      "title": "Dekha Adwaita Guṇera Maṇi",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 121,
      "title": "Ki Bhābe Adwaita           Cānda Adabhuta",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 122,
      "title": "Adwaita Guṇa Maṇi      Abanī Karu Dhani",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 123,
      "title": "Sītā Nātha Mora Adwaitacānda",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 124,
      "title": "Māghe Śuklā Tithi          Saptamīte Ati",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 125,
      "title": "Māgha Saptamī Śukla Pakṣa Śubha Kṣaṇa Kṣaṇa Bhūri",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 126,
      "title": "Kubera Paṇḍita        Ati Karaṣita",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 127,
      "title": "Jaya Jaya Advaita Acārya Mahāśaya",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 128,
      "title": "Bhābera Ābeśe Rahu         Sītā Pati Mora Pahuṁ",
      "chapter": " Lord Advaita Acārya",
      "isAvailable": false
    },
    {
      "index": 129,
      "title": "Gaurāṅga Tumi More Dayā Nā Chāḍiha",
      "title_odia": "ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନ ଛାଡ଼ିହ",
      "chapter": " The Devotees' Prayers",
      "localSongId": "song-gaurangatumimore",
      "isAvailable": true
    },
    {
      "index": 130,
      "title": "Āre Mora Gaurāṅga Soṇā",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 131,
      "title": "Gaurāṅgacānda Hera Nayanera Koṇe",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 132,
      "title": "Eka Bāra Karuṇā Kara Caitanya Nitā I",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 133,
      "title": "Gaurāṅga Patita Pābana Tuyā Nāma",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 134,
      "title": "Gaurāṅga Pātakī Uddhāra Karuṇāya",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 135,
      "title": "Āre Mora Āre Mora Gaurāṅga Gosāñi",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 136,
      "title": "Gaura Pahuṁ Nā Bhajiya Manu",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 137,
      "title": "Dayāra Prabhu Mora Nabadwīpa Candra",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 138,
      "title": "Bhakta Gaṇa Śrī Caraṇe          Mora E I Nibedane",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 139,
      "title": "Hari Hari Āra Ki Emana Daśā Habe",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 140,
      "title": "Hari Hari Nitā I Kabe Karuṇā Karibe",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 141,
      "title": "Hari Hari Aiche Bhāgya Hoyaba Hāmāra",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 142,
      "title": "Haha Mora Ki Chāra Adṛṣṭa",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 143,
      "title": "Prabhura Lāgiyā       Yaba Kon Deśe",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 144,
      "title": "Gaurāṅga Prema Bādale      Ḍobe Saba Prema Jale",
      "chapter": " The Devotees' Prayers",
      "isAvailable": false
    },
    {
      "index": 145,
      "title": "Kṛṣṇa Kṛṣṇa        Kamaleśa Kṛpāmaya",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 146,
      "title": "Jaga Jībana      Jagannātha Janārdana",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 147,
      "title": "Hare Hare Gobinda Hare",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 148,
      "title": "Jaya Jaya Śrī Janārdana Hari",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 149,
      "title": "Jaya Śiba Sundara          Biśwa Parāt Para",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 150,
      "title": "Dhvaja Vajrāṅkuśa Paṅkaja Kalitam",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 151,
      "title": "Jaya Jaya Gopīnātha Madana Mohana",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 152,
      "title": "Jaya Jaya Guru Gosāñī Śrī Caraṇa Sāra",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 153,
      "title": "Jaya Jaya Madana Gopāla Baṁśī Dhārī",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 154,
      "title": "Jaya Jaya Braja Bāsī Śreṣṭha Nanda Rāja",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 155,
      "title": "Jaya Jaya Gobinda Gopāla Gadādhara",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 156,
      "title": "Kabe Prabhu Anugraha Habe",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 157,
      "title": "Nidānera Bandhu Tumi Śuniyāchi Hari",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 158,
      "title": "Sakala Baiṣṇaba Gosā I Dayā Kara More",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 159,
      "title": "Rādhā Nātha Baḍa Aparūpa Līlā",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 160,
      "title": "Rādhā Nātha Dekhite Lāgiche Bhaya",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 161,
      "title": "Teja Mana Hari Bimukhanki Saṅga",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 162,
      "title": "Bhaja Mana Nanda Kumāra",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 163,
      "title": "Bhaja Mana Satata Ha Iyā Nirdwandwa",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 164,
      "title": "Brajendra Nandana          Bhaje Ye I Jana",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 165,
      "title": "Śrī Kṛṣṇa Bhajana Lāgi Saṁsāre Ā Inu",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 166,
      "title": "Hari Hari Āmāra Emana Daśā Habe",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 167,
      "title": "Hari He Dayāla Mora Jaya Rādhā Nātha",
      "chapter": "Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 168,
      "title": "Aśeṣa Guṇera Nidhi Gaurāṅga Sundara",
      "chapter": "Longer songs Glorifying Lord Gaurāṅga",
      "isAvailable": false
    },
    {
      "index": 169,
      "title": "Kali Yuge Śrī Kṛṣṇa Caitanya Abatāra",
      "chapter": "Longer songs Glorifying Lord Gaurāṅga",
      "isAvailable": false
    },
    {
      "index": 170,
      "title": "Jaya Jaya Gaura Hari Śacīra Nandana",
      "chapter": "Longer songs Glorifying Lord Gaurāṅga",
      "isAvailable": false
    },
    {
      "index": 171,
      "title": "Bhādra Kṛṣṇa Aṣṭamīte Debakī Udare",
      "chapter": "Longer songs Glorifying Lord Gaurāṅga",
      "isAvailable": false
    },
    {
      "index": 172,
      "title": "Śrī Śacītanayāṣṭaka",
      "title_odia": "ଉଜ୍ଜ୍ୱଳ-ବରଣ (ଶ୍ରୀ ଶଚୀତନୟାଷ୍ଟକମ୍)",
      "chapter": "Poems Glorifying Lord Gaurāṅga",
      "localSongId": "song-ujjvalavarana",
      "isAvailable": true
    },
    {
      "index": 173,
      "title": "Śrī Caitanya Nāma Stotram",
      "chapter": "Poems Glorifying Lord Gaurāṅga",
      "isAvailable": false
    },
    {
      "index": 174,
      "title": "Śrī Kṛṣṇāṣṭaka",
      "chapter": "Poems Glorifying Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 175,
      "title": "Śrī Kṛṣṇāṣṭaka",
      "chapter": "Poems Glorifying Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 176,
      "title": "Śrī Govindāṣṭaka",
      "chapter": "Poems Glorifying Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 177,
      "title": "Śrī Nanda Nandanāṣṭaka",
      "title_odia": "ସୁଚାରୁ ବକ୍ତ୍ର ମଣ୍ଡଳଂ",
      "chapter": "Poems Glorifying Lord Govinda",
      "localSongId": "song-sucaruvakrtamandalam",
      "isAvailable": true
    },
    {
      "index": 178,
      "title": "Śrī Bindu Mādhavāṣṭaka",
      "chapter": "Poems Glorifying Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 179,
      "title": "Śrī Hari Nāmāṣṭaka",
      "chapter": "Poems Glorifying Lord Govinda",
      "isAvailable": false
    },
    {
      "index": 180,
      "title": "Śrī Kṛṣṇa Nāmāvalī Stotra",
      "chapter": "Poems Glorifying Lord Govinda",
      "isAvailable": false
    }
  ],
  "vaishnava-acaryas": [
    {
      "index": 1,
      "title": "Śrī Guru Praṇāma",
      "vname": "Sri Guru Pranama",
      "title_odia": "ଶ୍ରୀ ଗୁରୁ ପ୍ରଣାମ",
      "chapter": " Standard Prayers",
      "localSongId": "song-srigurupranama",
      "isAvailable": true
    },
    {
      "index": 2,
      "title": "Śrī Rūpa Praṇāma",
      "vname": "Sri Rupa Pranama",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Maṅgalācaraṇa",
      "vname": "Mangalacaran",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Śrīla Prabhupāda Praṇati",
      "vname": "Srila Prabhupada Pranati",
      "title_odia": "ଶ୍ରୀଳ ପ୍ରଭୁପାଦ ପ୍ରଣତି",
      "chapter": " Standard Prayers",
      "localSongId": "song-srilaprabhupadapranati",
      "isAvailable": true
    },
    {
      "index": 5,
      "title": "Śrīla Bhaktisiddhānta Sarasvatī Praṇati",
      "vname": "Srila Bhaktisiddhanta Sarasvati Pranati",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Śrīla Gaurakiśora Praṇati",
      "vname": "Srila Gaurakisora Pranati",
      "title_odia": "ଶ୍ରୀଳ ଗୌରକିଶୋର ପ୍ରଣତି",
      "chapter": " Standard Prayers",
      "localSongId": "song-srilagaurakisorapranati",
      "isAvailable": true
    },
    {
      "index": 7,
      "title": "Śrīla Bhaktivinoda Praṇati",
      "vname": "Srila Bhaktivinoda Pranati",
      "title_odia": "ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ପ୍ରଣତି",
      "chapter": " Standard Prayers",
      "localSongId": "song-srilabhaktivinodapranati",
      "isAvailable": true
    },
    {
      "index": 8,
      "title": "Śrīla Jagannātha Praṇati",
      "vname": "Srila Jagannatha Pranati",
      "title_odia": "ଶ୍ରୀଳ ଜଗନ୍ନାଥ ପ୍ରଣତି",
      "chapter": " Standard Prayers",
      "localSongId": "song-srilajagannathapranati",
      "isAvailable": true
    },
    {
      "index": 9,
      "title": "Śrī Vaiṣṇava Praṇāma",
      "vname": "Sri Vaishnava Pranama",
      "title_odia": "ଶ୍ରୀ ବୈଷ୍ଣବ ପ୍ରଣାମ",
      "chapter": " Standard Prayers",
      "localSongId": "song-srivaishnavapranama",
      "isAvailable": true
    },
    {
      "index": 10,
      "title": "Śrī Gaurāṅga Praṇāma",
      "vname": "Sri Gauranga Pranama",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Śrī Pañca-tattva Praṇāma",
      "vname": "Sri Panca Tattva Pranama",
      "title_odia": "ଶ୍ରୀ ପଞ୍ଚତତ୍ତ୍ୱ ପ୍ରଣାମ",
      "chapter": " Standard Prayers",
      "localSongId": "song-sripancatattvapranama",
      "isAvailable": true
    },
    {
      "index": 12,
      "title": "Śrī Kṛṣṇa Praṇāma",
      "vname": "Sri Krishna Pranama",
      "title_odia": "ଶ୍ରୀ କୃଷ୍ଣ ପ୍ରଣାମ",
      "chapter": " Standard Prayers",
      "localSongId": "song-srikrishnapranama",
      "isAvailable": true
    },
    {
      "index": 13,
      "title": "Sambandhādhideva Praṇāma",
      "vname": "Sambandhadhideva Pranama",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Abhidheyādhideva Praṇāma",
      "vname": "Abhidheyadhideva Pranama",
      "title_odia": "ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ",
      "chapter": " Standard Prayers",
      "localSongId": "song-abhidheyadhidevapranama",
      "isAvailable": true
    },
    {
      "index": 15,
      "title": "Prayojanādhideva Praṇāma",
      "vname": "Prayojanadhideva Pranama",
      "title_odia": "ପ୍ରୟୋଜନାଧିଦେବ ପ୍ରଣାମ - ଶ୍ରୀ ଗୋପୀନାଥ ପ୍ରଣାମ",
      "chapter": " Standard Prayers",
      "localSongId": "song-prayojanadhidevapranama",
      "isAvailable": true
    },
    {
      "index": 16,
      "title": "Śrī Rādhā Praṇāma",
      "vname": "Sri Radha Pranama",
      "title_odia": "ଶ୍ରୀ ରାଧା ପ୍ରଣାମ",
      "chapter": " Standard Prayers",
      "localSongId": "song-sriradhapranama",
      "isAvailable": true
    },
    {
      "index": 17,
      "title": "Pañca-tattva Mahā-mantra",
      "vname": "Panca Tattva Mahamantra",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 18,
      "title": "Hare Kṛṣṇa Mahā-mantra",
      "vname": "Hare Krishna Mahamantra",
      "title_odia": "ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର",
      "chapter": " Standard Prayers",
      "localSongId": "song-harekrishnamahamantra",
      "isAvailable": true
    },
    {
      "index": 19,
      "title": "Śrī Śrī Gurv-aṣṭaka (saṁsāra-dāvānala-līḍha-loka)",
      "vname": "Samsara Davanala Lidha Loka",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Śrī Śrī Ṣaḍ-gosvāmy-aṣṭaka (kṛṣṇotkīrtana-gāna-nartana-parau)",
      "vname": "Krsnotkirtana Gana Nartana",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Śrī Śrī Śikṣāṣṭaka (ceto-darpaṇa-mārjanaṁ)",
      "vname": "Ceto Darpana Marjanam",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Kṛṣṇa Tava Puṇya Habe Bhāi",
      "vname": "Krsna Tava Punya Habe Bhai",
      "title_odia": "କୃଷ୍ଣ ତବ ପୁଣ୍ୟ ହବେ ଭାଇ",
      "chapter": " Standard Prayers",
      "localSongId": "song-krsnatavapunyahabebhai",
      "isAvailable": true
    },
    {
      "index": 23,
      "title": "Mārkine Bhāgavata-dharma (baro-kṛpā kaile kṛṣṇa)",
      "vname": "Boro Krpa Koile Krsna",
      "chapter": " Standard Prayers",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Udilo Aruṇa Pūraba Bhāge",
      "vname": "Udilo Aruna",
      "title_odia": "ଉଦିଲ ଅରୁଣ ପୂରବ ଭାଗେ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-udiloaruna",
      "isAvailable": true
    },
    {
      "index": 25,
      "title": "Jīv Jāgo Jīv Jāgo Gauracānda Bole",
      "vname": "Jiv Jago Jiv Jago",
      "title_odia": "ଜୀବ ଜାଗ ଜୀବ ଜାଗ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-jivjago",
      "isAvailable": true
    },
    {
      "index": 26,
      "title": "Gāy Gorā Madhur Sware",
      "vname": "Gay Gora Madhura Sware",
      "title_odia": "ଗାୟ ଗୋରା ମଧୁର",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-gaygoramadhura",
      "isAvailable": true
    },
    {
      "index": 27,
      "title": "Gopīnāth Mama Nivedana Śuno",
      "vname": "Gopinath Mama Nivedana Suno",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Kṛpā Bindu Diyā Koro' Ei Dāse",
      "vname": "Gurudeva Krpa Bindu Diya",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "isAvailable": false
    },
    {
      "index": 29,
      "title": "Mānasa Deho Geho Jo Kichu Mor",
      "vname": "Manasa Deho Geho Jo Kichu Mor",
      "title_odia": "ମାନସ, ଦେହ, ଗେହ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-manasadehogehoyokichu",
      "isAvailable": true
    },
    {
      "index": 30,
      "title": "Vidyāra Vilāse  Kāṭāinu Kāla",
      "vname": "Vidyara Vilase",
      "title_odia": "ଵିଦ୍ୟାର ଵିଲାସେ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-vidyaravilase",
      "isAvailable": true
    },
    {
      "index": 31,
      "title": "Tumi Sarveśvareśvara Brajendra Kumāra!",
      "vname": "Tumi Sarveswareswara Vrajendra Kumar",
      "title_odia": "ତୁମି ସର୍ବେଶ୍ୱରେଶ୍ବର ବ୍ରଜେନ୍ଦ୍ର କୁମାର",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-tumisarveswaresvaravrajendrakumar",
      "isAvailable": true
    },
    {
      "index": 32,
      "title": "Śarīra Abidyā Jāl Joḍendriya Tāhe Kāl",
      "vname": "Sarira Avidya Jala",
      "title_odia": "ଶରୀର ଅବିଦ୍ୟା ଜାଲ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-sariraavidyajala",
      "isAvailable": true
    },
    {
      "index": 33,
      "title": "Eka Dina Śāntipure  Prabhu Adwaitera Ghare",
      "vname": "Ek Din Santipure",
      "title_odia": "ଏକ ଦିନ ଶାନ୍ତିପୁରେ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-ekdinsantipure",
      "isAvailable": true
    },
    {
      "index": 34,
      "title": "Rādhā Kṛṣṇa' Bol Bol Bolo Re Sobāi",
      "vname": "Radha Krsna Bol Bol",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Jaya Rādhā Mādhava (jaya) Kuñja Bihārī",
      "vname": "Jaya Radha Madhava",
      "title_odia": "ଜୟ ରାଧା-ମାଧବ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-jayaradhadhava",
      "isAvailable": true
    },
    {
      "index": 36,
      "title": "Kabe Gaura Bane Suradhuni Tate",
      "vname": "Kabe Gaura Vane",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Kabe Ha'be Bolo Se Dina Āmār",
      "vname": "Kabe Habe Bolo",
      "title_odia": "କବେ ହ’ବେ ବୋଲୋ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-kabehabebolo",
      "isAvailable": true
    },
    {
      "index": 38,
      "title": "Śuddha Bhakata Caraṇa Reṇu",
      "vname": "Suddha Bhakata Carana Renu",
      "title_odia": "ଶୁଦ୍ଧ ଭକତ-ଚରଣ ରେଣୁ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-suddhabhakatacaranarenu",
      "isAvailable": true
    },
    {
      "index": 39,
      "title": "Bhaja Bhakata Vatsala Śrī Gaurahari",
      "vname": "Bhaja Bhakata Vatsala",
      "title_odia": "ଭଜ ଭକତ-ବତ୍ସଲ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-bhajabhakatavatsala",
      "isAvailable": true
    },
    {
      "index": 40,
      "title": "Kiba Jaya Jaya Gorācānder Āratiko Śobhā",
      "vname": "Jaya Jaya Goracander Arotik",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "isAvailable": false
    },
    {
      "index": 41,
      "title": "Yaśomatī Nandana Braja Baro Nāgara",
      "vname": "Yasomati Nandana",
      "title_odia": "ଯଶୋମତି ନନ୍ଦନ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-yasomatinandana",
      "isAvailable": true
    },
    {
      "index": 42,
      "title": "Vaiṣṇaba Ṭhākura Doyāra Sāgara",
      "vname": "Ohe Vaisnava Thakura",
      "title_odia": "ଓହେ ବୈଷ୍ଣବ ଠାକୁର",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-ohevaisnavathakura",
      "isAvailable": true
    },
    {
      "index": 43,
      "title": "Vibhāvarī Śeṣa Āloka Praveśa",
      "vname": "Vibhavari Sesa",
      "title_odia": "ବିଭାବରୀ ଶେଷ",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-vibhavarisesa",
      "isAvailable": true
    },
    {
      "index": 44,
      "title": "Āmāra Jīvana Sadā Pāpe Rata",
      "vname": "Amar Jivan",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-amarjivana",
      "isAvailable": true
    },
    {
      "index": 45,
      "title": "Anādi' Karama Phale Paḍi' Bhavārṇara Jale",
      "vname": "Anadi Karama Phale",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-anadikaramaphale",
      "isAvailable": true
    },
    {
      "index": 46,
      "title": "Bhuliyā Tomāre Saṁsāre Āsiyā",
      "vname": "Bhuliya Tomare",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-bhuliyatomare",
      "isAvailable": true
    },
    {
      "index": 47,
      "title": "Nārada Muni Bājāy Vīṇā",
      "vname": "Narada Muni Bajay Vina",
      "title_odia": "ନାରଦ ମୁନି ବାଜାୟ ବୀଣା",
      "chapter": " Vaishnava songs of Śrīla Bhaktivinoda Ṭhākura",
      "localSongId": "song-naradamuni",
      "isAvailable": true
    },
    {
      "index": 48,
      "title": "Hari Hari! Bifale Janama Goṅāinu",
      "vname": "Hari Hari Biphale Janama",
      "title_odia": "ହରି ହରି ବିଫଳେ ଜନମ",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-hariharibiphalejanama",
      "isAvailable": true
    },
    {
      "index": 49,
      "title": "Gaurāṅga' Bolite Habe Pulaka Śarīra",
      "vname": "Gauranga Bolite Habe",
      "title_odia": "ଗୌରାଙ୍ଗ ବୋଲିତେ ହବେ",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-gaurangabolitehabe",
      "isAvailable": true
    },
    {
      "index": 50,
      "title": "Hari Haraye Namaḥ Kṛṣṇa Yādavāya Namaḥ",
      "vname": "Hari Haraye Namah Krsna Yadavaya",
      "title_odia": "ହରି ହରୟେ ନମଃ କୃଷ୍ଣ ଯାଦବାୟ",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-hariharayenamah",
      "isAvailable": true
    },
    {
      "index": 51,
      "title": "Rādhā Kṛṣṇa Prāṇa Mora Jugala Kiśora",
      "vname": "Radha Krsna Prana Mora",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-radhakrsnapranamora",
      "isAvailable": true
    },
    {
      "index": 52,
      "title": "Je Ānilo Prema Dhana Koruṇā Pracur",
      "vname": "Je Anilo Prema Dhana",
      "title_odia": "ଯେ ଆନିଲ ପ୍ରେମ ଧନ",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-jeanilopremadhana",
      "isAvailable": true
    },
    {
      "index": 53,
      "title": "Gaurāṅgera Duṭi Pada Jār Dhana Sampada",
      "vname": "Gaurangera Duti Pada",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "isAvailable": false
    },
    {
      "index": 54,
      "title": "Śrī Guru Caraṇa Padma Kevala Bhakati Sadma",
      "vname": "Sri Guru Carana Padma",
      "title_odia": "ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-gurupuja",
      "isAvailable": true
    },
    {
      "index": 55,
      "title": "Śrī Kṛṣṇa Caitanya Prabhu Doyā Koro More",
      "vname": "Sri Krsna Caitanya Prabhu Doya Koro More",
      "title_odia": "ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-srikrsnacaitanyaprabhujive",
      "isAvailable": true
    },
    {
      "index": 56,
      "title": "Vṛndāvana Ramya Sthāna Divya Ciṅtāmaṇi Dhāma",
      "vname": "Vrndavana Ramya Sthana",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-vrndavanaramyasthana",
      "isAvailable": true
    },
    {
      "index": 57,
      "title": "Nitāi Pada Kamala Koṭi Candra Suśītala",
      "vname": "Nitai Pada Kamala",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-nitaipadakamala",
      "isAvailable": true
    },
    {
      "index": 58,
      "title": "Śrī Rūpa Mañjarī Pada Sei Mora Sampada",
      "vname": "Sri Rupa Manjari Pada Sei Mora Sampada",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-srirupamanjaripada",
      "isAvailable": true
    },
    {
      "index": 59,
      "title": "Ei Bāro Karuṇā Koro Vaiṣṇava Gosāi",
      "vname": "Ei Baro Karuna Koro",
      "title_odia": "ଏଇ ବାର କରୁଣା କର",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-eibarokarunakoro",
      "isAvailable": true
    },
    {
      "index": 60,
      "title": "Gaurā Pahu Nā Bhajiyā Goinu",
      "vname": "Gora Pahun",
      "title_odia": "ଗୋର ପହୁଁ",
      "chapter": " Vaishnava songs of Śrīla Narottama dāsa Ṭhākura",
      "localSongId": "song-gorapahun",
      "isAvailable": true
    },
    {
      "index": 61,
      "title": "Dāmodara Rati Vardhana Veśe",
      "vname": "Radhe Jaya Jaya Madhava Dayite",
      "title_odia": "ରାଧେ ଜୟ ଜୟ ମାଧବ-ଦୟିତେ",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-radhejayajaya",
      "isAvailable": true
    },
    {
      "index": 62,
      "title": "Pralaya Payodhi Jale Dhṛtavān Asi Vedaṁ",
      "vname": "Pralaya Payodhi Jale",
      "title_odia": "ପ୍ରଳୟ ପୟୋଧି ଜଳେ - ଶ୍ରୀ ଶ୍ରୀ ଦଶାବତାର ସ୍ତୋତ୍ରମ୍",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-pralayapayodhijale",
      "isAvailable": true
    },
    {
      "index": 63,
      "title": "Kṛṣṇa Hoite Catur Mukha Hoy Kṛṣṇa Sevonmukha",
      "vname": "Krsna Hoite Caturmukha",
      "title_odia": "କୃଷ୍ଣ ହଇତେ ଚତୁର୍ମୁଖ",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-krsnahoitecaturmukha",
      "isAvailable": true
    },
    {
      "index": 64,
      "title": "Parama Koruṇa Pahū Dui Jana",
      "vname": "Parama Karuna Pahu Dui Jana",
      "title_odia": "ପରମ କରୁଣ ପହୁଁ ଦୁଇଜନ",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-paramakarunapahuduijana",
      "isAvailable": true
    },
    {
      "index": 65,
      "title": "Bhajahū Re Mana Śrī Nanda Nandana",
      "vname": "Bhaja Hu Re Mana",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "isAvailable": false
    },
    {
      "index": 66,
      "title": "Namāmīśvaraṁ Sac Cid Ānanda Rūpaṁ",
      "vname": "Namamisvaram Saccidananda Rupam",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "isAvailable": false
    },
    {
      "index": 67,
      "title": "Kadācit Kālindī Taṭa Vipina Saṅgītaka Ravo",
      "vname": "Kadacit Kalindi Tata Vipina",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "isAvailable": false
    },
    {
      "index": 68,
      "title": "Hari He Doyāl Mor Jaya Rādhā Nāth",
      "title_odia": "ହରି ହେ ଦୟାଲ ମୋର",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-harihedoyalmor",
      "isAvailable": true
    },
    {
      "index": 69,
      "title": "Jaya Rādhe Jaya Kṛṣṇa Jaya Vṛndāvan",
      "vname": "Jaya Radhe Jaya Krsna Jaya Vrndavana",
      "title_odia": "ଜୟ ରାଧେ ଜୟ ରାଧେ ରାଧେ",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-jayaradhejayaradheradhe",
      "isAvailable": true
    },
    {
      "index": 70,
      "title": "Jaya Rādhā Mādhava Rādhā Mādhava Rādhe",
      "title_odia": "ଜୟ ରାଧା-ମାଧବ",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-jayaradhadhava",
      "isAvailable": true
    },
    {
      "index": 71,
      "title": "Nitāi Guṇa Maṇi Āmār Nitāi Guṇa Maṇi",
      "title_odia": "ନିତାଇ ଗୁଣମଣି",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-nitaigunamani",
      "isAvailable": true
    },
    {
      "index": 72,
      "title": "Namo Namaḥ Tulasi Mahārāṇī",
      "vname": "Namo Namah Tulasi Maharani",
      "title_odia": "ନମୋ ନମଃ ତୁଲସୀ କୃଷ୍ଣ-ପ୍ରେୟସୀ",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-namonamahtulasi",
      "isAvailable": true
    },
    {
      "index": 73,
      "title": "Namo Namaḥ Tulasī Kṛṣṇa Preyasi Namo Namaḥ",
      "vname": "Namo Namah Tulasi Krsna Preyasi",
      "title_odia": "ନମୋ ନମଃ ତୁଲସୀ କୃଷ୍ଣ-ପ୍ରେୟସୀ",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-namonamahtulasi",
      "isAvailable": true
    },
    {
      "index": 74,
      "title": "Namas Te Narasiṁhāya",
      "vname": "Namaste Narasimhaya",
      "title_odia": "ନମସ୍ତେ ନରସିଂହାୟ",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-namastenarasimhaya",
      "isAvailable": true
    },
    {
      "index": 75,
      "title": "Śrī Bhīṣma Uvāca",
      "vname": "Bhishma Stuti",
      "title_odia": "ଭୀଷ୍ମ ସ୍ତୁତି",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-bhishmastuti",
      "isAvailable": true
    },
    {
      "index": 76,
      "title": "Jayati Te 'dhikaṁ Janmanā Vrajaḥ",
      "vname": "Jayati Te Dhikam Janmana Vrajah",
      "title_odia": "ଜୟତି ତେଽଧିକଂ ଜନ୍ମନା ବ୍ରଜଃ",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-gopigitam",
      "isAvailable": true
    },
    {
      "index": 77,
      "title": "Īśvaraḥ Paramaḥ Kṛṣṇaḥ",
      "vname": "Isvara Parama Krsna",
      "title_odia": "ଈଶ୍ୱରଃ ପରମଃ କୃଷ୍ଣଃ - ଶ୍ରୀ ବ୍ରହ୍ମ ସଂହିତା",
      "chapter": " Vaishnava songs of Other Vaiṣṇava Ācāryas",
      "localSongId": "song-isvaraparamakrsna",
      "isAvailable": true
    }
  ],
  "sri-krsna-vijaya": [
    {
      "index": 1,
      "title": "Invoking Auspiciousness",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Description of Lord Kṛṣṇa's Handsome Form",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "The Beauty of Śrī Vṛndāvana",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Prayers by the Demigods to Lord Kṛṣṇa in the Womb",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Kuvera's Two Sons Offer Prayers to Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Prayers by the Wives of Kāliya-nāga",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "The Brāhmaṇas' Wives Offer Prayers to Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Indra's Prayers to Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Description of the Lord's Four-armed Form",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Brahmā's Prayers",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Lord Kṛṣṇa and His Associates in the Spiritual World of Vṛndāvana",
      "isAvailable": false
    }
  ],
  "krsna-lila-stava": [
    {
      "index": 1,
      "title": "Obeisance 1-2",
      "chapter": "Introduction",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Obeisance 3",
      "chapter": "Introduction",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Obeisance 4",
      "chapter": "Introduction",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Obeisance 5",
      "chapter": "Introduction",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Obeisance 6",
      "chapter": "Introduction",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Obeisance 7",
      "chapter": "Introduction",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Obeisance 8",
      "chapter": "Introduction",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Obeisance 9",
      "chapter": "Introduction",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Obeisance 10",
      "chapter": "Śrīmad Bhagavatam Canto 10 Chapter 1",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Obeisance 11",
      "chapter": "Śrīmad Bhagavatam Canto 10 Chapter 1",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Obeisance 12",
      "chapter": "Śrīmad Bhagavatam Canto 10 Chapter 2",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Obeisance 13",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 3",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Obeisance 14",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 3",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Obeisance 15",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 3",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Obeisance 16",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 4",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Obeisance 17",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 5",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Obeisance 18",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 6",
      "isAvailable": false
    },
    {
      "index": 18,
      "title": "Obeisance 19",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 7",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Obeisance 20",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 7",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Obeisance 21",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 7",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Obeisance 22-23",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 8",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Obeisance 24",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 8",
      "isAvailable": false
    },
    {
      "index": 23,
      "title": "Obeisance 25-26",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 8",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Obeisance 27",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 9",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Obeisance 28",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 10",
      "isAvailable": false
    },
    {
      "index": 26,
      "title": "Obeisance 29",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 11",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Obeisance 30",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 11",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Obeisance 31",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 11",
      "isAvailable": false
    },
    {
      "index": 29,
      "title": "Obeisance 32",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 11",
      "isAvailable": false
    },
    {
      "index": 30,
      "title": "Obeisance 33",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 11",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Obeisance 34",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 12",
      "isAvailable": false
    },
    {
      "index": 32,
      "title": "Obeisance 35",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 12",
      "isAvailable": false
    },
    {
      "index": 33,
      "title": "Obeisance 36",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 13",
      "isAvailable": false
    },
    {
      "index": 34,
      "title": "Obeisance 37",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 13",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Obeisance 38",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 13",
      "isAvailable": false
    },
    {
      "index": 36,
      "title": "Obeisance 39",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 14",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Obeisance 40",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 14",
      "isAvailable": false
    },
    {
      "index": 38,
      "title": "Obeisance 41",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 14",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Obeisance 42",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 15",
      "isAvailable": false
    },
    {
      "index": 40,
      "title": "Obeisance 43",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 15",
      "isAvailable": false
    },
    {
      "index": 41,
      "title": "Obeisance 44",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 15",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Obeisance 45",
      "chapter": "Śrīmad Bhagavatam Canto 10, Chapter 15",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Obeisance 46",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 16",
      "isAvailable": false
    },
    {
      "index": 44,
      "title": "Obeisance 47",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 16",
      "isAvailable": false
    },
    {
      "index": 45,
      "title": "Obeisance 48",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 16",
      "isAvailable": false
    },
    {
      "index": 46,
      "title": "Obeisance 49",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 17",
      "isAvailable": false
    },
    {
      "index": 47,
      "title": "Obeisance 50",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 18",
      "isAvailable": false
    },
    {
      "index": 48,
      "title": "Obeisance 51",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 19",
      "isAvailable": false
    },
    {
      "index": 49,
      "title": "Obeisance 52",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 20",
      "isAvailable": false
    },
    {
      "index": 50,
      "title": "Obeisance 53",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 21",
      "isAvailable": false
    },
    {
      "index": 51,
      "title": "Obeisance 54",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 21",
      "isAvailable": false
    },
    {
      "index": 52,
      "title": "Obeisance 55",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 22",
      "isAvailable": false
    },
    {
      "index": 53,
      "title": "Obeisance 56",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 22",
      "isAvailable": false
    },
    {
      "index": 54,
      "title": "Obeisance 57",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 23",
      "isAvailable": false
    },
    {
      "index": 55,
      "title": "Obeisance 58",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 24",
      "isAvailable": false
    },
    {
      "index": 56,
      "title": "Obeisance 59",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 25",
      "isAvailable": false
    },
    {
      "index": 57,
      "title": "Obeisance 60",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 26",
      "isAvailable": false
    },
    {
      "index": 58,
      "title": "Obeisance 61",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 27",
      "isAvailable": false
    },
    {
      "index": 59,
      "title": "Obeisance 62",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 28",
      "isAvailable": false
    },
    {
      "index": 60,
      "title": "Obeisance 63",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 29",
      "isAvailable": false
    },
    {
      "index": 61,
      "title": "Obeisance 64",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 29",
      "isAvailable": false
    },
    {
      "index": 62,
      "title": "Obeisance 65",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 29",
      "isAvailable": false
    },
    {
      "index": 63,
      "title": "Obeisance 66",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 30",
      "isAvailable": false
    },
    {
      "index": 64,
      "title": "Obeisance 67",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 30",
      "isAvailable": false
    },
    {
      "index": 65,
      "title": "Obeisance 68",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 31",
      "isAvailable": false
    },
    {
      "index": 66,
      "title": "Obeisance 69",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 32",
      "isAvailable": false
    },
    {
      "index": 67,
      "title": "Obeisance 70",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 32",
      "isAvailable": false
    },
    {
      "index": 68,
      "title": "Obeisance 71",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 33",
      "isAvailable": false
    },
    {
      "index": 69,
      "title": "Obeisance 72",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 33",
      "isAvailable": false
    },
    {
      "index": 70,
      "title": "Obeisance 73",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 33",
      "isAvailable": false
    },
    {
      "index": 71,
      "title": "Obeisance 74",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 34",
      "isAvailable": false
    },
    {
      "index": 72,
      "title": "Obeisance 75",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 34",
      "isAvailable": false
    },
    {
      "index": 73,
      "title": "Obeisance 76",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 35",
      "isAvailable": false
    },
    {
      "index": 74,
      "title": "Obeisance 77",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 36",
      "isAvailable": false
    },
    {
      "index": 75,
      "title": "Obeisance 78",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 36",
      "isAvailable": false
    },
    {
      "index": 76,
      "title": "Obeisance 79",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 37",
      "isAvailable": false
    },
    {
      "index": 77,
      "title": "Obeisance 80",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 37",
      "isAvailable": false
    },
    {
      "index": 78,
      "title": "Obeisance 81",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 37",
      "isAvailable": false
    },
    {
      "index": 79,
      "title": "Obeisance 82",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 38",
      "isAvailable": false
    },
    {
      "index": 80,
      "title": "Obeisance 83",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 39",
      "isAvailable": false
    },
    {
      "index": 81,
      "title": "Obeisance 84",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 39",
      "isAvailable": false
    },
    {
      "index": 82,
      "title": "Obeisance 85",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 39",
      "isAvailable": false
    },
    {
      "index": 83,
      "title": "Obeisance 86",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 40",
      "isAvailable": false
    },
    {
      "index": 84,
      "title": "Obeisance 87",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 41",
      "isAvailable": false
    },
    {
      "index": 85,
      "title": "Obeisance 88",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 41",
      "isAvailable": false
    },
    {
      "index": 86,
      "title": "Obeisance 89",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 41",
      "isAvailable": false
    },
    {
      "index": 87,
      "title": "Obeisance 90",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 42",
      "isAvailable": false
    },
    {
      "index": 88,
      "title": "Obeisance 91",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 42",
      "isAvailable": false
    },
    {
      "index": 89,
      "title": "Obeisance 92",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 43",
      "isAvailable": false
    },
    {
      "index": 90,
      "title": "Obeisance 93",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 43",
      "isAvailable": false
    },
    {
      "index": 91,
      "title": "Obeisance 94",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 43",
      "isAvailable": false
    },
    {
      "index": 92,
      "title": "Obeisance 95-96",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 44",
      "isAvailable": false
    },
    {
      "index": 93,
      "title": "Obeisance 97",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 44",
      "isAvailable": false
    },
    {
      "index": 94,
      "title": "Obeisance 98",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 45",
      "isAvailable": false
    },
    {
      "index": 95,
      "title": "Obeisance 99",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 45",
      "isAvailable": false
    },
    {
      "index": 96,
      "title": "Obeisance 100",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 45",
      "isAvailable": false
    },
    {
      "index": 97,
      "title": "Obeisance 101",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 45",
      "isAvailable": false
    },
    {
      "index": 98,
      "title": "Obeisance 102",
      "chapter": "Śrīmad Bhāgavatam Canto 10, Chapter 45",
      "isAvailable": false
    },
    {
      "index": 99,
      "title": "Obeisance 103",
      "chapter": "Final Obeisances",
      "isAvailable": false
    },
    {
      "index": 100,
      "title": "Obeisance 104",
      "chapter": "Prayer to Lord Caitanya",
      "isAvailable": false
    },
    {
      "index": 101,
      "title": "Obeisance 105",
      "chapter": "Sri Murti Pancaka Stava-Prayers to Five Forms of Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 102,
      "title": "Obeisance 106",
      "chapter": "Srimad Arca Stava-Prayer to the Diety form of Lord Kṛṣṇa",
      "isAvailable": false
    },
    {
      "index": 103,
      "title": "Obeisance 107",
      "chapter": "Glorification of Śrīmad Bhāgavatam",
      "isAvailable": false
    },
    {
      "index": 104,
      "title": "Obeisance 108",
      "chapter": "Dainyārti vijṇāpanam-a Distressed Appeal",
      "isAvailable": false
    },
    {
      "index": 105,
      "title": "Phala-srutiḥ",
      "chapter": "Phala srutiḥ-Result of Hearing This Prayer",
      "isAvailable": false
    }
  ],
  "vrindavane-bhajan": [
    {
      "index": 1,
      "title": "Vṛndāvana Dhāme Āmi Vase Āchi Ekā",
      "vname": "Vrndavana Dhame Ami Boseyachi Eka",
      "title_odia": "ବୃନ୍ଦାବନ ଧାମେ ଆମି ବସେ’ଆଛି ଏକା (ବୃନ୍ଦାବନେ ଭଜନ)",
      "localSongId": "song-vrndavanadhameamiboseyachieka",
      "isAvailable": true
    },
    {
      "index": 2,
      "title": "Arthahīna Dekhi’ More Cheḍeche Sabāi",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Samudrena Phenā Yena Kṣaṇe Ṣṛṣti Kṣaṇe Laya",
      "vname": "Samudrena Phena Yena",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Ātmīya Sabāi Bhāi Ātmāra Sambandhe",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Karmaphale Āse Saba Nānā Veśa Dhari’",
      "vname": "Karma Phale Ase Saba Nana Vesa Dhari",
      "title_odia": "କର୍ମଫଳେ ଆସେ ସବ ନାନା ବେଶ ଧରି",
      "localSongId": "song-karmaphaleasesaba",
      "isAvailable": true
    },
    {
      "index": 6,
      "title": "Kata ‘plyāna’ Kare Tārā Bhāla Thākibāre",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Bāra Bāra ‘plyāna’ Kare Bāra Bāra Bhāṅge",
      "vname": "Bara Bara Plan Kori",
      "title_odia": "ବାର ବାର ପ୍ଲ୍ୟାନ କରେ",
      "localSongId": "song-barabaraplankori",
      "isAvailable": true
    },
    {
      "index": 8,
      "title": "Bātula Kahaye – “sethā Saba Nirākāra”",
      "vname": "Batula Kahaye Setha Saba Nirakara",
      "title_odia": "ବାତୁଲ କହୟେ ସେଥା ସବ ନିରାକାର",
      "localSongId": "song-batulakahaye",
      "isAvailable": true
    },
    {
      "index": 9,
      "title": "Kṛṣṇa Yei Bhaje Sei Hayata’ Catura",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Sambandha’ Jāniyā Yebā Jīvana Yuddha Kare",
      "vname": "Sambandha Janiya Yeba Jivana Yuddha Kore",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Nāme Mātra Mahādhīra Sakale Aśānta",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Yogīra Āsane Vasechila Viśvāmitra",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Kṛṣṇera Lāgiyā Yebā Nitya Yuddha Kare",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Sājila Arjuna Yena Māyābaddha Nara",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Śiṣya Haiyā Kare Sei Gītār Śravaṇa",
      "vname": "Sisya Hoiya Kore Yei Gitar Sravana",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Nirdvandva Vaiṣṇava Śudhu Japa Kare Mālā",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Vaiṣṇava Nā Dekhiyā Bale Vaiṣṇava Niṣkriya",
      "isAvailable": false
    },
    {
      "index": 18,
      "title": "Āpani Acari ‘prabhu’ Jīvere Śikhaya",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Bhakti Ahaitikī Haya Svaprakāśita",
      "vname": "Bhakti Ahaituki Hoy Sva Prakasita",
      "title_odia": "ଭକ୍ତି ଅହୈତୁକୀ ହୟ ସ୍ୱ ପ୍ରକାଶିତ",
      "localSongId": "song-bhaktiahaituki",
      "isAvailable": true
    },
    {
      "index": 20,
      "title": "Ataeva Tāṇra Nahe ‘nirjana Bhajana’",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Gurudeva Balechila Kaniṣṭha E Saba",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Mahāvadāny Īśvara Śrī Gaurasundara",
      "vname": "Maha Vadanya Isvara Sri Gaura Sundara",
      "title_odia": "ମହାବଦାନ୍ୟ ଈଶ୍ୱର ଶ୍ରୀ ଗୌରସୁନ୍ଦର",
      "localSongId": "song-mahavadanyaisvara",
      "isAvailable": true
    },
    {
      "index": 23,
      "title": "Dehātmabuddhi Yāra Sei Jaḍa Deha",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Ei Kārya Dekhitechi Vṛndāvana Mājha",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Nityasiddha Pārṣada Saba Rādhākṛṣṇa Smare",
      "vname": "Nitya Siddha Parsada Saba Radha Krsna Smare",
      "title_odia": "ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ",
      "localSongId": "song-nityasiddhaparsadasaba",
      "isAvailable": true
    },
    {
      "index": 26,
      "title": "Kīrtanera Aṅga Śudhu Nahe Ḍhāka Ḍhola",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Ghare Vase’ Ceṅcāiyā Pittavṛddhi Kari",
      "isAvailable": false
    }
  ],
  "gopala-campu": [
    {
      "index": 1,
      "title": "Riṅgana Keli Kule Jananī Sukha Karī",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "Bala Kṛṣnau Bala Valita Vilasau",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Tava Sunur Muhur Anayaṁ Kurute",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "Gokula Pati Kula Tilaka Tvam Asīha",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "Nanda Mahīpati Jata",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "Nanda Tanujanur Adya Vyalam",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Ramate Ramaṁ Paritaḥ Kṛṣṇaḥ",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "Harina Halina Saha Ripu Dalina",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Ramo Ramanuja Iti Yugalam",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Tvam Upayanta Sakhi Vanamalī",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Taṁ Rahasi Gataṁ Kiśalaya Śayana Śayanaṁ",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Kṛṣnam Apaśyan Pīta Dukulam",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Giri Pujeyaṁ Vihita Kena Araci Śakra Padam Abhayaṁ Yena",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "Sa Tvara Prasara Vat Tv Asattva Dhama Hayinī",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "Vidhur Ayam Agatavan Śaradaṁ Prati Samprati",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "Jaya Jaya Sad Guṇa Sara",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Radhe Maiśīr Draṣṭum Anaṅgam",
      "isAvailable": false
    },
    {
      "index": 18,
      "title": "Jagaranad Atha Kuñja Vare",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Kṛṣna Vanaṁ Sakhi Bhati Sa Raṅgam",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Radha Harir Api Pulaki Vasantam",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Paśya Paśya Sakhi Horī Yuddham",
      "isAvailable": false
    },
    {
      "index": 22,
      "title": "Avadharya Sakhi Tava Sakhi Vṛttam",
      "isAvailable": false
    },
    {
      "index": 23,
      "title": "Candraka Dhatu Dala Stabakadika Kṛta Mallottama Veśam",
      "isAvailable": false
    },
    {
      "index": 24,
      "title": "Adi Puruṣa Iva Vaibhava Śalīanucara Varnita Vīrya Samunnatir Ayam Udayati Vana Malī",
      "isAvailable": false
    },
    {
      "index": 25,
      "title": "Ramya Tilaka Nava Tulasī Dala Bhara Vana Malati Vikasī",
      "isAvailable": false
    },
    {
      "index": 26,
      "title": "Dhṛta Vana Maly Avataṁsa Lasad Vana Veśa Tatir Bala Saṅgī",
      "isAvailable": false
    },
    {
      "index": 27,
      "title": "Maṇi Malakṛta Go Gaṇa Gaṇanapuraṇam Anu Sanandam",
      "isAvailable": false
    },
    {
      "index": 28,
      "title": "Agatam Iva Harim Aciram",
      "isAvailable": false
    },
    {
      "index": 29,
      "title": "Jaya Kṛta Mathura Praveśa Bhavuka",
      "isAvailable": false
    },
    {
      "index": 30,
      "title": "Saha Bhratṛ Varyaṁ Guror Grama Gamī",
      "isAvailable": false
    },
    {
      "index": 31,
      "title": "Bhīṣmaka Pura Bhaga Calita Raja Nivaha Rajya Valita",
      "isAvailable": false
    },
    {
      "index": 32,
      "title": "Vraja Madhura Madhurī Hrasita Para Kamanam",
      "isAvailable": false
    },
    {
      "index": 33,
      "title": "Agharir Atha Sabhyaiḥ Sabhantar Upaveśī",
      "isAvailable": false
    },
    {
      "index": 34,
      "title": "Śakra Śravita Bhaumatikrama",
      "isAvailable": false
    },
    {
      "index": 35,
      "title": "Tvaṁ Puṇḍraka Śliṣṭa Sandiṣṭa Vismera",
      "isAvailable": false
    },
    {
      "index": 36,
      "title": "Dviviḍa Duranta Caritra Kopin Saj Jana Mitra",
      "isAvailable": false
    },
    {
      "index": 37,
      "title": "Radha Raka Śaśadhara Muralī Kara Gokula Pati Kula Pala Jaya Jaya Kṛṣṇa Hare",
      "isAvailable": false
    },
    {
      "index": 38,
      "title": "Jaya Jaya Madhava Vidhu Saṅgini Radhe",
      "isAvailable": false
    },
    {
      "index": 39,
      "title": "Sneha Raga Maya Taila Haridra Parivalitaṁ Muhur Acalam",
      "isAvailable": false
    },
    {
      "index": 40,
      "title": "Paśya Sakhī Jana So 'yaṁ Kasya",
      "isAvailable": false
    },
    {
      "index": 41,
      "title": "Adya Samastaṁ Sa Phalaṁ Jatam",
      "isAvailable": false
    },
    {
      "index": 42,
      "title": "Aho Paśyatha Citraṁ Gokula Raji Mahimanam",
      "isAvailable": false
    },
    {
      "index": 43,
      "title": "Sakhi Dam Patyor Anayor Yugalam",
      "isAvailable": false
    },
    {
      "index": 44,
      "title": "Virudavali 1",
      "isAvailable": false
    },
    {
      "index": 45,
      "title": "Virudavali 2",
      "isAvailable": false
    },
    {
      "index": 46,
      "title": "Virudavali 3",
      "isAvailable": false
    },
    {
      "index": 47,
      "title": "Virudavali 4",
      "isAvailable": false
    }
  ],
  "misc-prabhupada": [
    {
      "index": 1,
      "title": "The Flood of Krsna Prema",
      "chapter": "Viraha Aṣṭāṣṭaka-Eight Octets In Separation From My Spirtual Master, December 1958",
      "isAvailable": false
    },
    {
      "index": 2,
      "title": "The Merciful Flood Has Been Stopped",
      "chapter": "Viraha Aṣṭāṣṭaka-Eight Octets In Separation From My Spirtual Master, December 1958",
      "isAvailable": false
    },
    {
      "index": 3,
      "title": "Practical Chanting and Preaching",
      "chapter": "Viraha Aṣṭāṣṭaka-Eight Octets In Separation From My Spirtual Master, December 1958",
      "isAvailable": false
    },
    {
      "index": 4,
      "title": "The Essential Purport Neglected",
      "chapter": "Viraha Aṣṭāṣṭaka-Eight Octets In Separation From My Spirtual Master, December 1958",
      "isAvailable": false
    },
    {
      "index": 5,
      "title": "The Disciple's Empowerment is Lost",
      "chapter": "Viraha Aṣṭāṣṭaka-Eight Octets In Separation From My Spirtual Master, December 1958",
      "isAvailable": false
    },
    {
      "index": 6,
      "title": "The Preaching Mission is Scattered",
      "chapter": "Viraha Aṣṭāṣṭaka-Eight Octets In Separation From My Spirtual Master, December 1958",
      "isAvailable": false
    },
    {
      "index": 7,
      "title": "Distributing the Pure Devotional Process",
      "chapter": "Viraha Aṣṭāṣṭaka-Eight Octets In Separation From My Spirtual Master, December 1958",
      "isAvailable": false
    },
    {
      "index": 8,
      "title": "If Only You would Come Again",
      "chapter": "Viraha Aṣṭāṣṭaka-Eight Octets In Separation From My Spirtual Master, December 1958",
      "isAvailable": false
    },
    {
      "index": 9,
      "title": "Characteristics of True Renunciation",
      "chapter": "Vaiśiṣṭyāṣṭaka-Eight Prayers Glorifying The Distinctive Characteristics Of My Spiritual Master, Vrndavana, Radha Damodara, 1961",
      "isAvailable": false
    },
    {
      "index": 10,
      "title": "Revolutionary Preaching in Public Places",
      "chapter": "Vaiśiṣṭyāṣṭaka-Eight Prayers Glorifying The Distinctive Characteristics Of My Spiritual Master, Vrndavana, Radha Damodara, 1961",
      "isAvailable": false
    },
    {
      "index": 11,
      "title": "Serving the Message instead of Imitating the Guru",
      "chapter": "Vaiśiṣṭyāṣṭaka-Eight Prayers Glorifying The Distinctive Characteristics Of My Spiritual Master, Vrndavana, Radha Damodara, 1961",
      "isAvailable": false
    },
    {
      "index": 12,
      "title": "Engaging in Preaching instead of Politics",
      "chapter": "Vaiśiṣṭyāṣṭaka-Eight Prayers Glorifying The Distinctive Characteristics Of My Spiritual Master, Vrndavana, Radha Damodara, 1961",
      "isAvailable": false
    },
    {
      "index": 13,
      "title": "Returning your wealth to Krishna",
      "chapter": "Vaiśiṣṭyāṣṭaka-Eight Prayers Glorifying The Distinctive Characteristics Of My Spiritual Master, Vrndavana, Radha Damodara, 1961",
      "isAvailable": false
    },
    {
      "index": 14,
      "title": "The Degraded Symptoms of Kali-yuga",
      "chapter": "Vaiśiṣṭyāṣṭaka-Eight Prayers Glorifying The Distinctive Characteristics Of My Spiritual Master, Vrndavana, Radha Damodara, 1961",
      "isAvailable": false
    },
    {
      "index": 15,
      "title": "The Merciful Qualities of a True Vaishnava",
      "chapter": "Vaiśiṣṭyāṣṭaka-Eight Prayers Glorifying The Distinctive Characteristics Of My Spiritual Master, Vrndavana, Radha Damodara, 1961",
      "isAvailable": false
    },
    {
      "index": 16,
      "title": "A Krishna Conscious Kingdom on Earth",
      "chapter": "Vaiśiṣṭyāṣṭaka-Eight Prayers Glorifying The Distinctive Characteristics Of My Spiritual Master, Vrndavana, Radha Damodara, 1961",
      "isAvailable": false
    },
    {
      "index": 17,
      "title": "Prayer to the Lotus Feet of Kṛṣṇa",
      "vname": "Krsna Tava Punya Habe Bhai",
      "title_odia": "କୃଷ୍ଣ ତବ ପୁଣ୍ୟ ହବେ ଭାଇ",
      "chapter": "Jaladuta Dairy-1965",
      "localSongId": "song-krsnatavapunyahabebhai",
      "isAvailable": true
    },
    {
      "index": 18,
      "title": "Mārkine Bhāgavata Dharma",
      "vname": "Boro Krpa Koile Krsna",
      "chapter": "Jaladuta Dairy-1965",
      "isAvailable": false
    },
    {
      "index": 19,
      "title": "Srila Bhaktisiddhanta Sarasvati’s Vyasa Puja Offering (1935)",
      "chapter": "English Poems-The Harmonist & Back To Godhead",
      "isAvailable": false
    },
    {
      "index": 20,
      "title": "Mangalacarana",
      "chapter": "English Poems-The Harmonist & Back To Godhead",
      "isAvailable": false
    },
    {
      "index": 21,
      "title": "Jaya Radhe Jaya Krsna Jaya Vrndavana",
      "title_odia": "ଜୟ ରାଧେ ଜୟ ରାଧେ ରାଧେ",
      "chapter": "English Poems-The Harmonist & Back To Godhead",
      "localSongId": "song-jayaradhejayaradheradhe",
      "isAvailable": true
    },
    {
      "index": 22,
      "title": "Gauranga Bolite Habe Pulaka Sarira",
      "title_odia": "ଗୌରାଙ୍ଗ ବୋଲିତେ ହବେ",
      "chapter": "English Poems-The Harmonist & Back To Godhead",
      "localSongId": "song-gaurangabolitehabe",
      "isAvailable": true
    }
  ],
  "temple-daily": [
    {
      "index": 1,
      "title": "ଜୟ ରାଧା-ମାଧବ (Jaya Rādhā Mādhava)",
      "title_odia": "ଜୟ ରାଧା-ମାଧବ",
      "chapter": "Bhaktivinoda Thakura",
      "localSongId": "song-jayaradhadhava",
      "isAvailable": true
    },
    {
      "index": 2,
      "title": "କୁଙ୍କୁମାକ୍ତ-କାଞ୍ଚନାବ୍ଜ (Radhikastakam)",
      "title_odia": "କୁଙ୍କୁମାକ୍ତ-କାଞ୍ଚନାବ୍ଜ",
      "chapter": "Krsnadasa Kaviraja Goswami",
      "localSongId": "song-radhikastakam",
      "isAvailable": true
    },
    {
      "index": 3,
      "title": "ଭାଲେ ଗୌରା-ଗଦାଧରୈର ଆରତି (Bhale Gaura Gadadharer Arati)",
      "title_odia": "ଭାଲେ ଗୌରା-ଗଦାଧରୈର ଆରତି",
      "chapter": "Bhaktivinoda Thakura",
      "localSongId": "song-bhalegauragadadhara",
      "isAvailable": true
    },
    {
      "index": 4,
      "title": "ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ ଯଦି ମାନସ ତୋହାର (Sri Krsna Kirtane Jadi Manasa Tohar)",
      "title_odia": "ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ ଯଦି ମାନସ ତୋହାର",
      "chapter": "Bhaktivinoda Thakura",
      "localSongId": "song-srikrsnakirtane",
      "isAvailable": true
    },
    {
      "index": 5,
      "title": "ସଂସାର ଦାବାନଳ (Sri Gurvastakam)",
      "title_odia": "ସଂସାର ଦାବାନଳ",
      "chapter": "Visvanatha Cakravarti Thakura",
      "localSongId": "song-gurvastakam",
      "isAvailable": true
    },
    {
      "index": 6,
      "title": "ଜୟ ନୃସିଂହ ଶ୍ରୀ ନୃସିଂହ (Jaya Narasimha Sri Narasimha)",
      "title_odia": "ଜୟ ନୃସିଂହ ଶ୍ରୀ ନୃସିଂହ",
      "chapter": "Vyasadeva",
      "localSongId": "song-jayanarasimhasrinarasimha",
      "isAvailable": true
    },
    {
      "index": 7,
      "title": "ନମସ୍ତେ ନରସିଂହାୟ (Namaste Narasimhaya)",
      "title_odia": "ନମସ୍ତେ ନରସିଂହାୟ",
      "chapter": "Vyasadeva",
      "localSongId": "song-namastenarasimhaya",
      "isAvailable": true
    },
    {
      "index": 8,
      "title": "ନମୋ ନମଃ ତୁଲସୀ କୃଷ୍ଣ-ପ୍ରେୟସୀ (Namo Namah Tulasi Krsna Preyasi)",
      "title_odia": "ନମୋ ନମଃ ତୁଲସୀ କୃଷ୍ଣ-ପ୍ରେୟସୀ",
      "chapter": "Krsna Dasa",
      "localSongId": "song-namonamahtulasi",
      "isAvailable": true
    },
    {
      "index": 9,
      "title": "ଜୟ ଜୟ ଗୋରାଚାଁଦେର ଆରତିକ (Gaura Arati)",
      "title_odia": "ଜୟ ଜୟ ଗୋରାଚାଁଦେର ଆରତିକ",
      "chapter": "Bhaktivinoda Thakura",
      "localSongId": "song-gauraarati",
      "isAvailable": true
    },
    {
      "index": 10,
      "title": "ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ (Śrī Guru Caraṇa Padma)",
      "title_odia": "ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ",
      "chapter": "Narottama Dasa Thakura",
      "localSongId": "song-gurupuja",
      "isAvailable": true
    },
    {
      "index": 11,
      "title": "ପ୍ରେମ ଧ୍ୱନି (Prema Dhvani Prayers)",
      "title_odia": "ପ୍ରେମ ଧ୍ୱନି",
      "chapter": "ISKCON",
      "localSongId": "song-premadhvani",
      "isAvailable": true
    },
    {
      "index": 12,
      "title": "ଆହେ ନୀଳ ଶୈଳ (Ahe Nila Saila)",
      "title_odia": "ଆହେ ନୀଳ ଶୈଳ",
      "chapter": "Bhakta Salabega",
      "localSongId": "song-ahenilasaila",
      "isAvailable": true
    },
    {
      "index": 13,
      "title": "ଅନ୍ତର ମନ୍ଦିରେ ଜାଗୋ ଜାଗୋ (Antara Mandire Jago Jago)",
      "title_odia": "ଅନ୍ତର ମନ୍ଦିରେ ଜାଗୋ ଜାଗୋ",
      "chapter": "Mira Bhai",
      "localSongId": "song-antaramandirejago",
      "isAvailable": true
    },
    {
      "index": 14,
      "title": "ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା - ଦର୍ଶନ ଆରତୀ (Govindam Prayers - Darsana Arati)",
      "title_odia": "ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା (ଦର୍ଶନ ଆରତୀ)",
      "chapter": "Lord Brahma",
      "localSongId": "song-govindamprayers",
      "isAvailable": true
    },
    {
      "index": 15,
      "title": "ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା - ଦର୍ଶନ ଆରତୀ (Govindam Prayers - Darsana Arati)",
      "title_odia": "ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା (ଦର୍ଶନ ଆରତୀ)",
      "chapter": "Lord Brahma",
      "localSongId": "song-govindamprayers",
      "isAvailable": true
    }
  ],
  "ashtakams": [
    {
      "index": 1,
      "title": "ଅଧରଂ ମଧୁରଂ (Sri Madhurashtakam)",
      "title_odia": "ଅଧରଂ ମଧୁରଂ",
      "chapter": "Vallabhacarya",
      "localSongId": "song-madhurashtakam",
      "isAvailable": true
    },
    {
      "index": 2,
      "title": "ଭ୍ରାତୃ ଅନ୍ତକସ୍ୟ ପତ୍ତନେ (Sri Yamunastakam)",
      "title_odia": "ଭ୍ରାତୃ ଅନ୍ତକସ୍ୟ ପତ୍ତନେ",
      "chapter": "Rupa Goswami",
      "localSongId": "song-yamunastakam",
      "isAvailable": true
    },
    {
      "index": 3,
      "title": "ଚେତୋ ଦର୍ପଣ ମାର୍ଜନଂ (Sri Sikshashtakam)",
      "title_odia": "ଚେତୋ ଦର୍ପଣ ମାର୍ଜନଂ",
      "chapter": "Sri Caitanya Mahaprabhu",
      "localSongId": "song-shikshashtakam",
      "isAvailable": true
    },
    {
      "index": 4,
      "title": "କୁଙ୍କୁମାକ୍ତ-କାଞ୍ଚନାବ୍ଜ (Radhikastakam)",
      "title_odia": "କୁଙ୍କୁମାକ୍ତ-କାଞ୍ଚନାବ୍ଜ",
      "chapter": "Krsnadasa Kaviraja Goswami",
      "localSongId": "song-radhikastakam",
      "isAvailable": true
    },
    {
      "index": 5,
      "title": "କୃଷ୍ଣୋତ୍କୀର୍ତ୍ତନ ଗାନ ନର୍ତ୍ତନ (Sad Goswami Astakam)",
      "title_odia": "କୃଷ୍ଣୋତ୍କୀର୍ତ୍ତନ ଗାନ ନର୍ତ୍ତନ",
      "chapter": "Srinivasa Acarya",
      "localSongId": "song-sadgoswamyastakam",
      "isAvailable": true
    },
    {
      "index": 6,
      "title": "କୃଷ୍ଣ ପ୍ରେମ ମୟୀ ରାଧା (Yugalastakam)",
      "title_odia": "କୃଷ୍ଣ ପ୍ରେମ ମୟୀ ରାଧା",
      "chapter": "Jiva Goswami",
      "localSongId": "song-yugalastakam",
      "isAvailable": true
    },
    {
      "index": 7,
      "title": "କୃଷ୍ଣ ପ୍ରସାଦେନ ସମସ୍ତ (Govardhanastakam)",
      "title_odia": "କୃଷ୍ଣ ପ୍ରସାଦେନ ସମସ୍ତ",
      "chapter": "Visvanatha Cakravarti Thakura",
      "localSongId": "song-govardhanastakam",
      "isAvailable": true
    },
    {
      "index": 8,
      "title": "ସଂସାର ଦାବାନଳ (Sri Gurvastakam)",
      "title_odia": "ସଂସାର ଦାବାନଳ",
      "chapter": "Visvanatha Cakravarti Thakura",
      "localSongId": "song-gurvastakam",
      "isAvailable": true
    },
    {
      "index": 9,
      "title": "ନମାମୀଶ୍ୱରଂ ସଚ୍ଚିଦାନନ୍ଦ ରୂପଂ (Sri Damodarastakam)",
      "title_odia": "ନମାମୀଶ୍ୱରଂ ସଚ୍ଚିଦାନନ୍ଦ ରୂପଂ",
      "chapter": "Satyavrata Muni",
      "localSongId": "song-damodarastakam",
      "isAvailable": true
    },
    {
      "index": 10,
      "title": "ନ ଯୋଗ-ସିଦ୍ଧିର୍ ନ ମମାସ୍ତୁ (Na Yoga Siddhir Na Mamastu)",
      "title_odia": "ନ ଯୋଗ-ସିଦ୍ଧିର୍ ନ ମମାସ୍ତୁ",
      "chapter": "Visvanatha Cakravarti Thakura",
      "localSongId": "song-vrindavanastakam",
      "isAvailable": true
    },
    {
      "index": 11,
      "title": "ଶ୍ରୀ ଶିବାଷ୍ଟକମ୍ - ନମୋ ନମସ୍ତେ ତ୍ରିଦଶେଶ୍ୱରାୟ (Sri Sivashtakam - Namo Namaste Tridasesvaraya)",
      "title_odia": "ଶ୍ରୀ ଶିବାଷ୍ଟକମ୍ - ନମୋ ନମସ୍ତେ ତ୍ରିଦଶେଶ୍ୱରାୟ",
      "chapter": "Sri Caitanya Mahaprabhu",
      "localSongId": "song-srisivashtakam",
      "isAvailable": true
    },
    {
      "index": 12,
      "title": "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ - ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍ (Ambudanjanendra Nila - Sri Sri Krsna Candrastakam)",
      "title_odia": "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ - ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍",
      "chapter": "Krsnadasa Kaviraja Goswami",
      "localSongId": "song-ambudanjanendranila",
      "isAvailable": true
    },
    {
      "index": 13,
      "title": "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ - ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍ (Ambudanjanendra Nila - Sri Sri Krsna Candrastakam)",
      "title_odia": "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ - ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍",
      "chapter": "Krsnadasa Kaviraja Goswami",
      "localSongId": "song-ambudanjanendranila",
      "isAvailable": true
    },
    {
      "index": 14,
      "title": "ଦିଶି ଦିଶି ରଚୟନ୍ତୀମ୍ - ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍ (Disi Disi Racayantim - Sri Radhikastakam)",
      "title_odia": "ଦିଶି ଦିଶି ରଚୟନ୍ତୀମ୍ - ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍",
      "chapter": "Rupa Goswami",
      "localSongId": "song-disidisiracayantim",
      "isAvailable": true
    },
    {
      "index": 15,
      "title": "ଦିଶି ଦିଶି ରଚୟନ୍ତୀମ୍ - ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍ (Disi Disi Racayantim - Sri Radhikastakam)",
      "title_odia": "ଦିଶି ଦିଶି ରଚୟନ୍ତୀମ୍ - ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍",
      "chapter": "Rupa Goswami",
      "localSongId": "song-disidisiracayantim",
      "isAvailable": true
    },
    {
      "index": 16,
      "title": "ଶ୍ରୀ ଶ୍ରୀ ନବଦ୍ୱୀପ-ପର-ପ୍ରଦୀପୌ (ଶ୍ରୀଲ ପ୍ରଭୁପାଦଦେବାଷ୍ଟକମ୍)",
      "title_odia": "ଶ୍ରୀ ଶ୍ରୀ ନବଦ୍ୱୀପ-ପର-ପ୍ରଦୀପୌ (ଶ୍ରୀଲ ପ୍ରଭୁପାଦଦେବାଷ୍ଟକମ୍)",
      "chapter": "Kusakratha Dasa",
      "localSongId": "song-srisrinavadvipaparapradipau",
      "isAvailable": true
    },
    {
      "index": 17,
      "title": "ସୁଚାରୁ ବକ୍ତ୍ର ମଣ୍ଡଳଂ (Sucaru Vakrta Mandalam - Sri Nanda Nandanastakam)",
      "title_odia": "ସୁଚାରୁ ବକ୍ତ୍ର ମଣ୍ଡଳଂ",
      "chapter": "Vallabhacarya",
      "localSongId": "song-sucaruvakrtamandalam",
      "isAvailable": true
    },
    {
      "index": 18,
      "title": "ସୁଦର୍ଶନାଷ୍ଟକମ୍ (Sudarshana Ashtakam)",
      "title_odia": "ସୁଦର୍ଶନାଷ୍ଟକମ୍",
      "chapter": "Vedanta Desika",
      "localSongId": "song-sudarshanaashtakam",
      "isAvailable": true
    },
    {
      "index": 19,
      "title": "ସ୍ୱ ଭକ୍ତି ଯୋଗ ଲାସିନଂ - ଶ୍ରୀ ଗଦାଧରାଷ୍ଟକମ୍ (Sva Bhakti Yoga Lasinam - Sri Gadadharastakam)",
      "title_odia": "ସ୍ୱ ଭକ୍ତି ଯୋଗ ଲାସିନଂ (ଶ୍ରୀ ଗଦାଧରାଷ୍ଟକମ୍)",
      "chapter": "Svarupa Damodara Goswami",
      "localSongId": "song-svabhaktiyogalasinam",
      "isAvailable": true
    },
    {
      "index": 20,
      "title": "ଉଜ୍ଜ୍ୱଳ-ବରଣ - ଶ୍ରୀ ଶଚୀତନୟାଷ୍ଟକମ୍ (Ujjvala Varana - Sri Sacitanayastakam)",
      "title_odia": "ଉଜ୍ଜ୍ୱଳ-ବରଣ (ଶ୍ରୀ ଶଚୀତନୟାଷ୍ଟକମ୍)",
      "chapter": "Sarvabhauma Bhattacharya",
      "localSongId": "song-ujjvalavarana",
      "isAvailable": true
    }
  ],
  "pranama": [
    {
      "index": 1,
      "title": "ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର (Hare Krishna Mahamantra)",
      "title_odia": "ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର",
      "chapter": "Traditional",
      "localSongId": "song-harekrishnamahamantra",
      "isAvailable": true
    },
    {
      "index": 2,
      "title": "ଓହେ ବୈଷ୍ଣବ ଠାକୁର (Ohe Vaisnava Thakura)",
      "title_odia": "ଓହେ ବୈଷ୍ଣବ ଠାକୁର",
      "chapter": "Bhaktivinoda Thakura",
      "localSongId": "song-ohevaisnavathakura",
      "isAvailable": true
    },
    {
      "index": 3,
      "title": "ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ (Gurudev! Krpa Bindu Diya)",
      "title_odia": "ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ",
      "chapter": "Bhaktivinoda Thakura",
      "localSongId": "song-gurudevakrpabindu",
      "isAvailable": true
    },
    {
      "index": 4,
      "title": "ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ (Abhidheyadhideva Pranama)",
      "title_odia": "ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ",
      "chapter": "Sanatana Goswami",
      "localSongId": "song-abhidheyadhidevapranama",
      "isAvailable": true
    },
    {
      "index": 5,
      "title": "ନମସ୍ତେ ନରସିଂହାୟ (Namaste Narasimhaya)",
      "title_odia": "ନମସ୍ତେ ନରସିଂହାୟ",
      "chapter": "Vyasadeva",
      "localSongId": "song-namastenarasimhaya",
      "isAvailable": true
    },
    {
      "index": 6,
      "title": "ନମୋ ନମଃ ତୁଲସୀ କୃଷ୍ଣ-ପ୍ରେୟସୀ (Namo Namah Tulasi Krsna Preyasi)",
      "title_odia": "ନମୋ ନମଃ ତୁଲସୀ କୃଷ୍ଣ-ପ୍ରେୟସୀ",
      "chapter": "Krsna Dasa",
      "localSongId": "song-namonamahtulasi",
      "isAvailable": true
    },
    {
      "index": 7,
      "title": "ଉଗ୍ରଂ ବୀରଂ ମହାବିଷ୍ଣୁଂ (Ugram Viram Mahavishnum)",
      "title_odia": "ଉଗ୍ରଂ ବୀରଂ ମହାବିଷ୍ଣୁଂ",
      "chapter": "Vyasadeva",
      "localSongId": "song-narasimhapranama",
      "isAvailable": true
    },
    {
      "index": 8,
      "title": "ନମୋ ନମଃ ତୁଲସୀ ମହାରାଣୀ (Namo Namah Tulasi Maharani)",
      "title_odia": "ନମୋ ନମଃ ତୁଲସୀ ମହାରାଣୀ",
      "chapter": "Candrasekhara Kavi",
      "localSongId": "song-namonamahtulasimaharani",
      "isAvailable": true
    },
    {
      "index": 9,
      "title": "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି (Sri Narasimha Nakha Stuti)",
      "title_odia": "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି",
      "chapter": "Madhvacharya",
      "localSongId": "song-narasimhanakhastuti",
      "isAvailable": true
    },
    {
      "index": 10,
      "title": "ପ୍ରୟୋଜନାଧିଦେବ ପ୍ରଣାମ - ଶ୍ରୀ ଗୋପୀନାଥ ପ୍ରଣାମ (Prayojanadhideva Pranama - Sri Gopinatha Pranama)",
      "title_odia": "ପ୍ରୟୋଜନାଧିଦେବ ପ୍ରଣାମ - ଶ୍ରୀ ଗୋପୀନାଥ ପ୍ରଣାମ",
      "chapter": "Sanatana Goswami",
      "localSongId": "song-prayojanadhidevapranama",
      "isAvailable": true
    },
    {
      "index": 11,
      "title": "ପ୍ରୟୋଜନାଧିଦେବ ପ୍ରଣାମ - ଶ୍ରୀ ଗୋପୀନାଥ ପ୍ରଣାମ (Prayojanadhideva Pranama - Sri Gopinatha Pranama)",
      "title_odia": "ପ୍ରୟୋଜନାଧିଦେବ ପ୍ରଣାମ - ଶ୍ରୀ ଗୋପୀନାଥ ପ୍ରଣାମ",
      "chapter": "Sanatana Goswami",
      "localSongId": "song-prayojanadhidevapranama",
      "isAvailable": true
    },
    {
      "index": 12,
      "title": "ପ୍ରଣାମ ତୋମାୟ ଘନଶ୍ୟାମ (Pranam Tomai Ghana Syam)",
      "title_odia": "ପ୍ରଣାମ ତୋମାୟ ଘନଶ୍ୟାମ",
      "chapter": "Traditional",
      "localSongId": "song-pranamtomaighanasyam",
      "isAvailable": true
    },
    {
      "index": 13,
      "title": "ଶ୍ରୀ ଗୁରୁ ପ୍ରଣାମ (Sri Guru Pranama)",
      "title_odia": "ଶ୍ରୀ ଗୁରୁ ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-srigurupranama",
      "isAvailable": true
    },
    {
      "index": 14,
      "title": "ଶ୍ରୀ ଗୁରୁ ପ୍ରଣାମ (Sri Guru Pranama)",
      "title_odia": "ଶ୍ରୀ ଗୁରୁ ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-srigurupranama",
      "isAvailable": true
    },
    {
      "index": 15,
      "title": "ଶ୍ରୀ କୃଷ୍ଣ ପ୍ରଣାମ (Sri Krishna Pranama)",
      "title_odia": "ଶ୍ରୀ କୃଷ୍ଣ ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-srikrishnapranama",
      "isAvailable": true
    },
    {
      "index": 16,
      "title": "ଶ୍ରୀ କୃଷ୍ଣ ପ୍ରଣାମ (Sri Krishna Pranama)",
      "title_odia": "ଶ୍ରୀ କୃଷ୍ଣ ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-srikrishnapranama",
      "isAvailable": true
    },
    {
      "index": 17,
      "title": "ଶ୍ରୀ ପଞ୍ଚତତ୍ତ୍ୱ ପ୍ରଣାମ (Sri Panca Tattva Pranama)",
      "title_odia": "ଶ୍ରୀ ପଞ୍ଚତତ୍ତ୍ୱ ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-sripancatattvapranama",
      "isAvailable": true
    },
    {
      "index": 18,
      "title": "ଶ୍ରୀ ପଞ୍ଚତତ୍ତ୍ୱ ପ୍ରଣାମ (Sri Panca Tattva Pranama)",
      "title_odia": "ଶ୍ରୀ ପଞ୍ଚତତ୍ତ୍ୱ ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-sripancatattvapranama",
      "isAvailable": true
    },
    {
      "index": 19,
      "title": "ଶ୍ରୀ ରାଧା ପ୍ରଣାମ (Sri Radha Pranama)",
      "title_odia": "ଶ୍ରୀ ରାଧା ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-sriradhapranama",
      "isAvailable": true
    },
    {
      "index": 20,
      "title": "ଶ୍ରୀ ରାଧା ପ୍ରଣାମ (Sri Radha Pranama)",
      "title_odia": "ଶ୍ରୀ ରାଧା ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-sriradhapranama",
      "isAvailable": true
    },
    {
      "index": 21,
      "title": "ଶ୍ରୀ ବୈଷ୍ଣବ ପ୍ରଣାମ (Sri Vaishnava Pranama)",
      "title_odia": "ଶ୍ରୀ ବୈଷ୍ଣବ ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-srivaishnavapranama",
      "isAvailable": true
    },
    {
      "index": 22,
      "title": "ଶ୍ରୀ ବୈଷ୍ଣବ ପ୍ରଣାମ (Sri Vaishnava Pranama)",
      "title_odia": "ଶ୍ରୀ ବୈଷ୍ଣବ ପ୍ରଣାମ",
      "chapter": "Traditional",
      "localSongId": "song-srivaishnavapranama",
      "isAvailable": true
    },
    {
      "index": 23,
      "title": "ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ପ୍ରଣତି (Srila Bhaktivinoda Pranati)",
      "title_odia": "ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ପ୍ରଣତି",
      "chapter": "Traditional",
      "localSongId": "song-srilabhaktivinodapranati",
      "isAvailable": true
    },
    {
      "index": 24,
      "title": "ଶ୍ରୀଳ ଗୌରକିଶୋର ପ୍ରଣତି (Srila Gaurakisora Pranati)",
      "title_odia": "ଶ୍ରୀଳ ଗୌରକିଶୋର ପ୍ରଣତି",
      "chapter": "Traditional",
      "localSongId": "song-srilagaurakisorapranati",
      "isAvailable": true
    },
    {
      "index": 25,
      "title": "ଶ୍ରୀଳ ଜଗନ୍ନାଥ ପ୍ରଣତି (Srila Jagannatha Pranati)",
      "title_odia": "ଶ୍ରୀଳ ଜଗନ୍ନାଥ ପ୍ରଣତି",
      "chapter": "Traditional",
      "localSongId": "song-srilajagannathapranati",
      "isAvailable": true
    },
    {
      "index": 26,
      "title": "ଶ୍ରୀଳ ପ୍ରଭୁପାଦ ପ୍ରଣତି (Srila Prabhupada Pranati)",
      "title_odia": "ଶ୍ରୀଳ ପ୍ରଭୁପାଦ ପ୍ରଣତି",
      "chapter": "Traditional",
      "localSongId": "song-srilaprabhupadapranati",
      "isAvailable": true
    },
    {
      "index": 27,
      "title": "ସୁଜନାର୍ବୁଦ ରାଧିତ ପାଦ ଯୁଗଂ (Sujanarbuda Radhita Pada - Sri Prabhupada Padma Stavaka)",
      "title_odia": "ସୁଜନାର୍ବୁଦ ରାଧିତ ପାଦ ଯୁଗଂ",
      "chapter": "B.R. Sridhara Deva Goswami",
      "localSongId": "song-sujanarbudaradhita",
      "isAvailable": true
    }
  ]
};

export const getBookCatalog = (bookId: string): BookSongItem[] => {
    return BOOK_CATALOGS[bookId] || [];
};

export const getBookCatalogCounts = (bookId: string): { available: number; total: number } => {
    const list = BOOK_CATALOGS[bookId];
    if (!list || list.length === 0) {
        return { available: 0, total: 0 };
    }
    const available = list.filter(s => s.isAvailable).length;
    return { available, total: list.length };
};
