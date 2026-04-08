import * as Songs from './songsContent';
import type { Resource } from '../types';

export const RESOURCES: Resource[] = [
    {
        id: 'song-jayaradhadhava',
        title: 'ଜୟ ରାଧା-ମାଧବ (Jaya Rādhā-Mādhava)',
        category: 'Songs',
        type: 'html',
        description: 'ପ୍ରାତଃକାଳୀନ ଭଜନ |',
        content: (Songs as any).JAYA_RADHA_MADHAVA,
        structuredContent: (Songs as any).SONG_JAYARADHAMADHAVA_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Jaya_Radha_Madhava/Jaya_Radha_Madhava_-_Sung_by_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3',
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gitamahatmya',
        title: 'ଗୀତା ମାହାତ୍ମ୍ୟ (Gītā Māhātmya)',
        category: 'Songs',
        type: 'html',
        description: 'ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟଙ୍କ ମୁଖନିସୃତ ଗୀତା ମାହାତ୍ମ୍ୟ |',
        content: (Songs as any).GITA_MAHATMYA_ODIA,
        structuredContent: (Songs as any).SONG_GITAMAHATMYA_STRUCTURED,
        author: 'Adi Shankaracharya'
    },
    {
        id: 'song-bhuliyatomare',
        title: 'ଭୁଲିୟା ତୋମାରେ (Bhuliyā tomāre)',
        category: 'Songs',
        type: 'html',
        description: 'ଭୁଲିୟା ତୋମାରେ - ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏକ ପ୍ରସିଦ୍ଧ ଭଜନ |',
        content: (Songs as any).BHULIYA_TOMARE_ODIA,
        structuredContent: (Songs as any).SONG_BHULIYATOMARE_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Bhuliya_Tomare/Bhuliya_Tomare_-_Sung_by_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3',
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-amarjivana',
        title: 'ଆମାର ଜୀବନ (Amar Jīvana)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏକ ଅତି ବିନମ୍ର ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_AMARJIVANA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-amijamunapuline',
        title: 'ଆମି ଯମୁନା ପୁଲିନେ (Āmi Jamunā Puline)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_AMIJAMUNAPULINE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-anadikaramaphale',
        title: 'ଅନାଦି କରମ ଫଳେ (Anādi Karama Phale)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_ANADIKARAMAPHALE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-aparadhaphalemama',
        title: 'ଅପରାଧ ଫଳେ ମମ (Aparādha Phale Mama)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_APARADHAPHALEMAMA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-tuwapademinotimor',
        title: 'ତୁୟା ପଦେ ମିନତି ମୋର (Tuwā Pade Minoti Mor)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_TUWAPADEMINOTIMOR_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-atmanivedanatuwapade',
        title: 'ଆତ୍ମନିବେଦନ ତୁୟା ପଦେ (Atmanivedana Tuwā Pade)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_ATMANIVEDANATUWAPADE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-tumisarveswaresvaravrajendrakumar',
        title: 'ତୁମି ସର୍ବେଶ୍ଵରେଶ୍ଵର (Tumi Sarveswareswara)',
        title_odia: 'ତୁମି ସର୍ବେଶ୍ୱରେଶ୍ବର ବ୍ରଜେନ୍ଦ୍ର କୁମାର',
        title_english: 'Tumi Sarveswareswara Vrajendra Kumar',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-doyalnitaicaitanya',
        title: 'ଦୟାଲ ନିତାଇ ଚୈତନ୍ୟ (Doyāl Nitāi Caitanya)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_DOYALNITAICAITANYA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-durlabhamanavajanma',
        title: 'ଦୁର୍ଲଭ ମାନବ ଜନ୍ମ (Durlabha Mānava Janma)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_DURLABHAMANAVAJANMA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-vidyaravilase',
        title: 'ଵିଦ୍ୟାର ଵିଲାସେ (Vidyara Vilase)',
        title_odia: 'ଵିଦ୍ୟାର ଵିଲାସେ',
        title_english: 'Vidyara Vilase',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-ohevaisnavathakura',
        title: 'ଓହେ ବୈଷ୍ଣବ ଠାକୁର (Ohe Vaisnava Thakura)',
        title_odia: 'ଓହେ ବୈଷ୍ଣବ ଠାକୁର',
        title_english: 'Ohe Vaisnava Thakura',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nitainamhate',
        title: 'ନିତାଇ ନାମ ହାଟେ (Nitai Nam Hate)',
        title_odia: 'ନିତାଇ ନାମ ହାଟେ',
        title_english: 'Nitai Nam Hate O Ke Jabire Bhai',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-naradamuni',
        title: 'ନାରଦ ମୁନି (Narada Muni)',
        title_odia: 'ନାରଦ ମୁନି ବାଜାୟ ବୀଣା',
        title_english: 'Narada Muni Bajay Vina',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nadiyagodrume',
        title: 'ନଦୀୟା – ଗୋଦ୍ରୁମେ (Nadiya Godrume)',
        title_odia: 'ନଦୀୟା – ଗୋଦ୍ରୁମେ ନିତ୍ୟାନନ୍ଦ ମହାଜନ',
        title_english: 'Nadiya Godrume Nityananda Mahajana',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-yasomatinandana',
        title: 'ଯଶୋମତୀ ନନ୍ଦନ (Yasomati Nandana)',
        title_odia: 'ଯଶୋମତି ନନ୍ଦନ',
        title_english: 'Yasomati Nandana',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-vibhavarisesa',
        title: 'ବିଭାବରୀ ଶେଷ (Vibhavari Sesa)',
        title_odia: 'ବିଭାବରୀ ଶେଷ',
        title_english: 'Vibhavari Sesa',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-udiloaruna',
        title: 'ଉଦିଲ ଅରୁଣ (Udilo Aruna)',
        title_odia: 'ଉଦିଲ ଅରୁଣ ପୂରବ ଭାଗେ',
        title_english: 'Udilo Aruna Puraba Bhage',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-suddhabhakatacaranarenu',
        title: 'ଶୁଦ୍ଧ ଭକତ (Suddha Bhakata Carana Renu)',
        title_odia: 'ଶୁଦ୍ଧ ଭକତ-ଚରଣ ରେଣୁ',
        title_english: 'Suddha Bhakata Carana Renu',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-srikrsnacaitanyaprabhujive',
        title: 'ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ପ୍ରଭୁ (Sri Krsna Caitanya Prabhu)',
        title_odia: 'ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି',
        title_english: 'Sri Krsna Caitanya Prabhu Jive Doya Kori',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-radhakrsnabolbol',
        title: 'ରାଧା-କୃଷ୍ଣ ବୋଲ ବୋଲ (Rādhā-Kṛṣṇa Bol Bol)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_RADHAKRSNBOLBOL_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-manasadehageha',
        title: 'ମାନସ ଦେହ ଗେହ (Mānasa Deha Geha)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_MANASADEHAGEHA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-sarvasvatomarcarene',
        title: 'ସର୍ବସ୍ବ ତୋମାର (Sarvasva Tomar Carane)',
        title_odia: 'ସର୍ବସ୍ବ ତୋମାର, ଚରଣେ',
        title_english: 'Sarvasva Tomar Carane',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-prabhutavapadayuge',
        title: 'ପ୍ରଭୁ ତବ ପଦଯୁଗେ (Prabhu Tava Pada Yuge)',
        title_odia: 'ପ୍ରଭୁ ତବ ପଦଯୁଗେ',
        title_english: 'Prabhu Tava Pada Yuge',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'gita-chapter-1',
        title: 'ଅଧ୍ୟାୟ ୧ - ଅର୍ଜୁନବିଷାଦ ଯୋଗ (Arjuna-viṣāda Yoga)',
        title_english: 'Chapter 1: Arjuna-viṣāda Yoga',
        title_odia: 'ଅର୍ଜୁନବିଷାଦ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଅର୍ଜୁନବିଷାଦ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_1_STRUCTURED
    },
    {
        id: 'gita-chapter-2',
        title: 'ଅଧ୍ୟାୟ ୨ - ସାଂଖ୍ୟ ଯୋଗ (Sāṅkhya Yoga)',
        title_english: 'Chapter 2: Sāṅkhya Yoga',
        title_odia: 'ସାଂଖ୍ୟ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ସାଂଖ୍ୟ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_2_STRUCTURED
    },
    {
        id: 'gita-chapter-3',
        title: 'ଅଧ୍ୟାୟ ୩ - କର୍ମ ଯୋଗ (Karma Yoga)',
        title_english: 'Chapter 3: Karma Yoga',
        title_odia: 'କର୍ମ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(କର୍ମ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_3_STRUCTURED
    },
    {
        id: 'gita-chapter-4',
        title: 'ଅଧ୍ୟାୟ ୪ - ଜ୍ଞାନକର୍ମସନ୍ନ୍ୟାସ ଯୋଗ (Jñāna-karma-sanyāsa Yoga)',
        title_english: 'Chapter 4: Jñāna-karma-sannyāsa Yoga',
        title_odia: 'ଜ୍ଞାନକର୍ମସନ୍ନ୍ୟାସ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଜ୍ଞାନକର୍ମସନ୍ନ୍ୟାସ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_4_STRUCTURED
    },
    {
        id: 'gita-chapter-5',
        title: 'ଅଧ୍ୟାୟ ୫ - କର୍ମସନ୍ନ୍ୟାସ ଯୋଗ (Karma-sanyāsa Yoga)',
        title_english: 'Chapter 5: Karma-sannyāsa Yoga',
        title_odia: 'କର୍ମସନ୍ନ୍ୟାସ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(କର୍ମସନ୍ନ୍ୟାସ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_5_STRUCTURED
    },
    {
        id: 'gita-chapter-6',
        title: 'ଅଧ୍ୟାୟ ୬ - ଆତ୍ମସଂଯମ ଯୋଗ (Ātma-saṃyama Yoga)',
        title_english: 'Chapter 6: Aātma-saṃyama Yoga',
        title_odia: 'ଆତ୍ମସଂଯମ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଆତ୍ମସଂଯମ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_6_STRUCTURED
    },
    {
        id: 'gita-chapter-7',
        title: 'ଅଧ୍ୟାୟ ୭ - ଜ୍ଞାନବିଜ୍ଞାନ ଯୋଗ (Jñāna-vijñāṇa Yoga)',
        title_english: 'Chapter 7: Jñāna-vijñāṇa Yoga',
        title_odia: 'ଜ୍ଞାନବିଜ୍ଞାନ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଜ୍ଞାନବିଜ୍ଞାନ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_7_STRUCTURED
    },
    {
        id: 'gita-chapter-8',
        title: 'ଅଧ୍ୟାୟ ୮ - ଅକ୍ଷରବ୍ରହ୍ମ ଯୋଗ (Akṣara-brahma Yoga)',
        title_english: 'Chapter 8: Akṣara-brahma Yoga',
        title_odia: 'ଅକ୍ଷରବ୍ରହ୍ମ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଅକ୍ଷରବ୍ରହ୍ମ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_8_STRUCTURED
    },
    {
        id: 'gita-chapter-9',
        title: 'ଅଧ୍ୟାୟ ୯ - ରାଜବିଦ୍ୟା ରାଜଗୁହ୍ୟ ଯୋଗ (Rāja-vidyā-rāja-guhya Yoga)',
        title_english: 'Chapter 9: Rāja-vidyā-rāja-guhya Yoga',
        title_odia: 'ରାଜବିଦ୍ୟା ରାଜଗୁହ୍ୟ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ରାଜବିଦ୍ୟା ରାଜଗୁହ୍ୟ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_9_STRUCTURED
    },
    {
        id: 'gita-chapter-10',
        title: 'ଅଧ୍ୟାୟ ୧୦ - ବିଭୂତି ବିସ୍ତାର ଯୋଗ (Vibhūti-vistāra Yoga)',
        title_english: 'Chapter 10: Vibhūti-vistāra Yoga',
        title_odia: 'ବିଭୂତି ବିସ୍ତାର ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ବିଭୂତି ବିସ୍ତାର ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_10_STRUCTURED
    },
    {
        id: 'gita-chapter-11',
        title: 'ଅଧ୍ୟାୟ ୧୧ - ବିଶ୍ଵରୂପଦର୍ଶନ ଯୋଗ (Viśvarūpa-darśana Yoga)',
        title_english: 'Chapter 11: Viśvarūpa-darśana Yoga',
        title_odia: 'ବିଶ୍ୱରୂପଦର୍ଶନ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ବିଶ୍ୱରୂପଦର୍ଶନ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_11_STRUCTURED
    },
    {
        id: 'gita-chapter-12',
        title: 'ଅଧ୍ୟାୟ ୧୨ - ଭକ୍ତି ଯୋଗ (Bhakti Yoga)',
        title_english: 'Chapter 12: Bhakti Yoga',
        title_odia: 'ଭକ୍ତି ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଭକ୍ତି ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_12_STRUCTURED
    },
    {
        id: 'gita-chapter-13',
        title: 'ଅଧ୍ୟାୟ ୧୩ - କ୍ଷେତ୍ରକ୍ଷେତ୍ରଜ୍ଞବିଭାଗ ଯୋଗ (Kṣetra-kṣetrajña-vibhāga Yoga)',
        title_english: 'Chapter 13: Kṣetra-kṣetrajña-vibhāga Yoga',
        title_odia: 'କ୍ଷେତ୍ରକ୍ଷେତ୍ରଜ୍ଞବିଭାଗ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(କ୍ଷେତ୍ରକ୍ଷେତ୍ରଜ୍ଞବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_13_STRUCTURED
    },
    {
        id: 'gita-chapter-14',
        title: 'ଅଧ୍ୟାୟ ୧୪ - ଗୁଣତ୍ରୟବିଭାଗ ଯୋଗ (Guṇa-traya-vibhāga Yoga)',
        title_english: 'Chapter 14: Guṇa-traya-vibhāga Yoga',
        title_odia: 'ଗୁଣତ୍ରୟବିଭାଗ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଗୁଣତ୍ରୟବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_14_STRUCTURED
    },
    {
        id: 'gita-chapter-15',
        title: 'ଅଧ୍ୟାୟ ୧୫ - ପୁରୁଷୋତ୍ତମ ଯୋଗ (Puruṣottama Yoga)',
        title_english: 'Chapter 15: Puruṣottama Yoga',
        title_odia: 'ପୁରୁଷୋତ୍ତମ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ପୁରୁଷୋତ୍ତମ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_15_STRUCTURED
    },
    {
        id: 'gita-chapter-16',
        title: 'ଅଧ୍ୟାୟ ୧୬ - ଦୈବାସୁରସମ୍ପଦବିଭାଗ ଯୋଗ (Daivāsura-saṃpad-vibhāga Yoga)',
        title_english: 'Chapter 16: Daivāsura-saṃpad-vibhāga Yoga',
        title_odia: 'ଦୈବାସୁରସମ୍ପଦବିଭାଗ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଦୈବାସୁରସମ୍ପଦବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_16_STRUCTURED
    },
    {
        id: 'gita-chapter-17',
        title: 'ଅଧ୍ୟାୟ ୧୭ - ଶ୍ରଦ୍ଧାତ୍ରୟବିଭାଗ ଯୋଗ (Śraddhā-traya-vibhāga Yoga)',
        title_english: 'Chapter 17: Śraddhā-traya-vibhāga Yoga',
        title_odia: 'ଶ୍ରଦ୍ଧାତ୍ରୟବିଭାଗ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଶ୍ରଦ୍ଧାତ୍ରୟବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_17_STRUCTURED
    },
    {
        id: 'gita-chapter-18',
        title: 'ଅଧ୍ୟାୟ ୧୮ - ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ (Mokṣa-sannyasa Yoga)',
        title_english: 'Chapter 18: Mokṣa-sannyasa Yoga',
        title_odia: 'ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_18_STRUCTURED
    },


    {
        id: 'song-gopinatpart2',
        title: 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍ (Gopinath Part 2)',
        title_odia: 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍',
        title_english: 'Gopinath Part 2 (Ghuchao Sansar)',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gopinatpart3',
        title: 'ଗୋପୀନାଥ (Part 3): ଆମାର ଉପାୟ ନାହି (Gopinath Part 3)',
        title_odia: 'ଗୋପୀନାଥ (Part 3): ଆମାର ଉପାୟ ନାହି',
        title_english: 'Gopinath Part 3 (Amar Upaya Nai)',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gurudevakrpabindu',
        title: 'ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ (Gurudev! Krpa Bindu Diya)',
        title_odia: 'ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ',
        title_english: 'Gurudev! Krpa Bindu Diya',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gurudevaborokrpakori',
        title: 'ଗୁରୁଦେବ ବଡ଼ କୃପା କରି (Gurudev! Boro Krpa Kori)',
        title_odia: 'ଗୁରୁଦେବ ବଡ଼ କୃପା କରି',
        title_english: 'Gurudev! Boro Krpa Kori',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kabesrichaitanyamore',
        title: 'କବେ ଶ୍ରී ଚୈତନ୍ୟ ମୋରେ (Kabe Sri Chaitanya More)',
        title_odia: 'କବେ ଶ୍ରୀ ଚୈତନ୍ୟ ମୋରେ',
        title_english: 'Kabe Sri Chaitanya More',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kijanikibale',
        title: 'କି ଜାନି କି ବଲେ (Ki Jani Ki Bale)',
        title_odia: 'କି ଜାନି କି ବଲେ',
        title_english: 'Ki Jani Ki Bale',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-bhajabhakatavatsala',
        title: 'ଭଜ ଭକତ-ବତ୍ସଲ (Bhaja Bhakata-Vatsala)',
        title_odia: 'ଭଜ ଭକତ-ବତ୍ସଲ',
        title_english: 'Bhaja Bhakata-Vatsala',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_BHAJABHAKATAVATSALA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-oremanabhalonahilage',
        title: 'ଓ ରେ ମନ, ଭାଲ ନାହି ଲାଗେ (Ore Mana Bhalonahi Lage)',
        title_odia: 'ଓ ରେ ମନ, ଭାଲ ନାହି ଲାଗେ ଏ ସଂସାର',
        title_english: 'Ore Mana Bhalonahi Lage E Samsar',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-mamamanamandire',
        title: 'ମମ ମନ ମନ୍ଦିରେ (Mama Mana Mandire)',
        title_odia: 'ମମ ମନ ମନ୍ଦିରେ',
        title_english: 'Mama Mana Mandire',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-manasadehogehoyokichu',
        title: 'ମାନସ, ଦେହ, ଗେହ (Manasa Deho Geho)',
        title_odia: 'ମାନସ, ଦେହ, ଗେହ',
        title_english: 'Manasa Deho Geho Jo Kichu Mor',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-hariboloharibolo',
        title: 'ହରି ବୋଲ ହରି ବୋଲ (Hari bolo Hari bolo)',
        title_odia: 'ହରି ବୋଲ ହରି ବୋଲ',
        title_english: 'Hari bolo Hari bolo',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        structuredContent: (Songs as any).SONG_HARIBOLOHARIBOLO_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-jivjago',
        title: 'ଜୀବ ଜାଗ ଜୀବ ଜାଗ (Jiv Jago Jiv Jago)',
        title_odia: 'ଜୀବ ଜାଗ ଜୀବ ଜାଗ',
        title_english: 'Jiv Jago Jiv Jago',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        structuredContent: (Songs as any).SONG_JIVJAGOJIVJAGO_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-jayajayaradhakrsna',
        title: 'ଜୟ ଜୟ ରାଧାକୃଷ୍ଣ (Jaya Jaya Radha Krsna)',
        title_odia: 'ଜୟ ଜୟ ରାଧାକୃଷ୍ଣ',
        title_english: 'Jaya Jaya Radha Krsna',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        structuredContent: (Songs as any).SONG_JAYAJAYARADHAKRSNA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kabegourabane',
        title: 'କବେ ଗୌର ବନେ (Kabe Goura Bane)',
        title_odia: 'କବେ ଗୌର ବନେ',
        title_english: 'Kabe Goura Bane',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        structuredContent: (Songs as any).SONG_KABEGOURABANE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kabehabebolo',
        title: 'କବେ ହ’ବେ ବୋଲୋ (Kabe Ha\' be Bolo)',
        title_odia: 'କବେ ହ’ବେ ବୋଲୋ',
        title_english: 'Kabe Ha\' be Bolo',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        structuredContent: (Songs as any).SONG_KABEHABEBOLO_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-amitodurjanaati',
        title: 'ଆମି ତୋ\' ଦୁର୍ଜନ ଅତି (Ami To\' Durjana Ati)',
        title_odia: 'ଆମି ତୋ\' ଦୁର୍ଜନ ଅତି',
        title_english: 'Ami To\' Durjana Ati',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        structuredContent: (Songs as any).SONG_AMITODURJANAATI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-arkenomayajale',
        title: 'ଆର କେନୋ ମାୟା-ଜାଲେ (Ar Keno Maya Jale)',
        title_odia: 'ଆର କେନୋ ମାୟା-ଜାଲେ',
        title_english: 'Ar Keno Maya Jale',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        structuredContent: (Songs as any).SONG_ARKENOMAYAJALE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-asalokathabolte',
        title: 'ଆସଲୋ କଥା ବୋଲ୍ତେ (Asalo Katha Bolte)',
        title_odia: 'ଆସଲୋ କଥା ବୋଲ୍ତେ',
        title_english: 'Asalo Katha Bolte',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        structuredContent: (Songs as any).SONG_ASALOKATHABOLTE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-bhalegauragadadhara',
        title: 'ଭାଲେ ଗୌରା-ଗଦାଧରୈର ଆରତି (Bhale Gaura Gadadharer Arati)',
        title_odia: 'ଭାଲେ ଗୌରା-ଗଦାଧରୈର ଆରତି',
        title_english: 'Bhale Gaura Gadadharer Arati',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        structuredContent: (Songs as any).SONG_BHALEGAURAGADADHARA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    }
];

export const CATEGORIES = ['ସବୁ', 'ଗୀତ', 'କୀର୍ତ୍ତନ', 'ଗୀତା'];