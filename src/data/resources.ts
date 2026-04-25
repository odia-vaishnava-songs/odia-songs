import * as Songs from './songsContent';
import type { Resource } from '../types';

export const RESOURCES: Resource[] = [
    {
        id: 'song-jayaradhadhava',
        title: 'ଜୟ ରାଧା-ମାଧବ (Jaya Rādhā Mādhava)',
        title_odia: 'ଜୟ ରାଧା-ମାଧବ',
        title_english: 'Jaya Radha Madhava',
        category: 'Songs',
        type: 'html',
        description: 'ପ୍ରାତଃକାଳୀନ ଭଜନ',
        structuredContent: (Songs as any).SONG_JAYARADHAMADHAVA_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Jaya_Radha_Madhava/Jaya_Radha_Madhava_-_Sung_by_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'
    },
    {
        id: 'song-amarjivana',
        title: 'ଆମାର ଜୀବନ (Amar Jīvana)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏକ ଅତି ବିନମ୍ର ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_AMARJIVANA_STRUCTURED,
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'
    },
    {
        id: 'song-amijamunapuline',
        title: 'ଆମି ଯମୁନା ପୁଲିନେ (Āmi Jamunā Puline)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_AMIJAMUNAPULINE_STRUCTURED,
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'
    },
    {
        id: 'song-anadikaramaphale',
        title: 'ଅନାଦି କରମ ଫଳେ (Anādi Karama Phale)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_ANADIKARAMAPHALE_STRUCTURED,
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'
    },
    {
        id: 'song-aparadhaphalemama',
        title: 'ଅପରାଧ ଫଳେ ମମ (Aparādha Phale Mama)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_APARADHAPHALEMAMA_STRUCTURED,
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'
    },
    {
        id: 'song-atmanivedanatuwapade',
        title: 'ଆତ୍ମନିବେଦନ ତୁୟା ପଦେ (Atmanivedana Tuwā Pade)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_ATMANIVEDANATUWAPADE_STRUCTURED,
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'
    },
    {
        id: 'song-tumisarveswaresvaravrajendrakumar',
        title: 'ତୁମି ସର୍ବେଶ୍ଵରେଶ୍ଵର (Tumi Sarveswareswara)',
        title_odia: 'ତୁମି ସର୍ବେଶ୍ୱରେଶ୍ବର ବ୍ରଜେନ୍ଦ୍ର କୁମାର',
        title_english: 'Tumi Sarveswareswara Vrajendra Kumar',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'DOYALNITAICAITANYA',
        title: 'ଦୟାଲ ନିତାଇ ଚୈତନ୍ୟ (Doyāl Nitāi Caitanya)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_DOYALNITAICAITANYA_STRUCTURED,
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'
    },
    {
        id: 'song-durlabhamanavajanma',
        title: 'ଦୁର୍ଲଭ ମାନବ ଜନ୍ମ (Durlabha Mānava Janma)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_DURLABHAMANAVAJANMA_STRUCTURED,
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'
    },
    {
        id: 'song-vidyaravilase',
        title: 'ଵିଦ୍ୟାର ଵିଲାସେ (Vidyara Vilase)',
        title_odia: 'ଵିଦ୍ୟାର ଵିଲାସେ',
        title_english: 'Vidyara Vilase',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-radhakrsnabolbol',
        title: 'ରାଧା-କୃଷ୍ଣ ବୋଲ ବୋଲ (Rādhā-Kṛṣṇa Bol Bol)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_RADHAKRSNBOLBOL_STRUCTURED,
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର'
    },
    {
        id: 'song-sarvasvatomarcarene',
        title: 'ସର୍ବସ୍ବ ତୋମାର (Sarvasva Tomar Carane)',
        title_odia: 'ସର୍ବସ୍ବ ତୋମାର, ଚରଣେ',
        title_english: 'Sarvasva Tomar Carane',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'gita-chapter-1',
        title: 'ଅଧ୍ୟାୟ ୧ – ଅର୍ଜୁନବିଷାଦଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧ – ଅର୍ଜୁନବିଷାଦଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଅର୍ଜୁନବିଷାଦଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_1_STRUCTURED
    },
    {
        id: 'gita-chapter-2',
        title: 'ଅଧ୍ୟାୟ ୨ – ସାଂଖ୍ୟଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୨ – ସାଂଖ୍ୟଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ସାଂଖ୍ୟଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_2_STRUCTURED
    },
    {
        id: 'gita-chapter-3',
        title: 'ଅଧ୍ୟାୟ ୩ - କର୍ମଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୩ - କର୍ମଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(କର୍ମଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_3_STRUCTURED
    },
    {
        id: 'gita-chapter-4',
        title: 'ଅଧ୍ୟାୟ ୪ - ଦିବ୍ୟଜ୍ଞାନଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୪ - ଦିବ୍ୟଜ୍ଞାନଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଦିବ୍ୟଜ୍ଞାନଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_4_STRUCTURED
    },
    {
        id: 'gita-chapter-5',
        title: 'ଅଧ୍ୟାୟ ୫ - କର୍ମଯୋଗ (କୃଷ୍ଣଚେତନାରେ କର୍ମ)',
        title_odia: 'ଅଧ୍ୟାୟ ୫ - କର୍ମଯୋଗ (କୃଷ୍ଣଚେତନାରେ କର୍ମ)',
        category: 'Gita',
        type: 'html',
        description: '(କୃଷ୍ଣଚେତନାରେ କର୍ମ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_5_STRUCTURED
    },
    {
        id: 'gita-chapter-6',
        title: 'ଅଧ୍ୟାୟ ୬ - ଧ୍ୟାନଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୬ - ଧ୍ୟାନଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଧ୍ୟାନଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_6_STRUCTURED
    },
    {
        id: 'gita-chapter-7',
        title: 'ଅଧ୍ୟାୟ ୭ - ଜ୍ଞାନବିଜ୍ଞାନଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୭ - ଜ୍ଞାନବିଜ୍ଞାନଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଜ୍ଞାନବିଜ୍ଞାନଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_7_STRUCTURED
    },
    {
        id: 'gita-chapter-8',
        title: 'ଅଧ୍ୟାୟ ୮ - ଅକ୍ଷରବ୍ରହ୍ମଯୋଗ',
        title_odia: 'ଅକ୍ଷରବ୍ରହ୍ମଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଅକ୍ଷରବ୍ରହ୍ମଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_8_STRUCTURED
    },
    {
        id: 'gita-chapter-9',
        title: 'ଅଧ୍ୟାୟ ୯ - ରାଜବିଦ୍ୟା-ରାଜଗୁହ୍ୟଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୯ - ରାଜବିଦ୍ୟା-ରାଜଗୁହ୍ୟଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ରାଜବିଦ୍ୟା-ରାଜଗୁହ୍ୟଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_9_STRUCTURED
    },
    {
        id: 'gita-chapter-10',
        title: 'ଅଧ୍ୟାୟ ୧୦ - ବିଭୂତି ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୦ - ବିଭୂତି ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ବିଭୂତି ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_10_STRUCTURED
    },
    {
        id: 'gita-chapter-11',
        title: 'ଅଧ୍ୟାୟ ୧୧ - ବିଶ୍ୱରୂପ ଦର୍ଶନ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୧ - ବିଶ୍ୱରୂପ ଦର୍ଶନ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ବିଶ୍ୱରୂପ ଦର୍ଶନ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_11_STRUCTURED
    },
    {
        id: 'gita-chapter-12',
        title: 'ଅଧ୍ୟାୟ ୧୨ - ଭକ୍ତି ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୨ - ଭକ୍ତି ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଭକ୍ତି ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_12_STRUCTURED
    },
    {
        id: 'gita-chapter-13',
        title: 'ଅଧ୍ୟାୟ ୧୩- କ୍ଷେତ୍ର-କ୍ଷେତ୍ରଜ୍ଞ ବିଭାଗ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୩- କ୍ଷେତ୍ର-କ୍ଷେତ୍ରଜ୍ଞ ବିଭାଗ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(କ୍ଷେତ୍ର-କ୍ଷେତ୍ରଜ୍ଞ ବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_13_STRUCTURED
    },
    {
        id: 'gita-chapter-14',
        title: 'ଅଧ୍ୟାୟ ୧୪-ଗୁଣତ୍ରୟ ବିଭାଗ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୪-ଗୁଣତ୍ରୟ ବିଭାଗ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଗୁଣତ୍ରୟ ବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_14_STRUCTURED
    },
    {
        id: 'gita-chapter-15',
        title: 'ଅଧ୍ୟାୟ ୧୫-ପୁରୁଷୋତ୍ତମ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୫-ପୁରୁଷୋତ୍ତମ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ପୁରୁଷୋତ୍ତମ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_15_STRUCTURED
    },
    {
        id: 'gita-chapter-16',
        title: 'ଅଧ୍ୟାୟ ୧୬-ଦୈବାସୁର ସମ୍ପଦ ବିଭାଗ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୬-ଦୈବାସୁର ସମ୍ପଦ ବିଭାଗ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଦୈବାସୁର ସମ୍ପଦ ବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_16_STRUCTURED
    },
    {
        id: 'gita-chapter-17',
        title: 'ଅଧ୍ୟାୟ ୧୭-ଶ୍ରଦ୍ଧାତ୍ରୟ ବିଭାଗ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୭-ଶ୍ରଦ୍ଧାତ୍ରୟ ବିଭାଗ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଶ୍ରଦ୍ଧାତ୍ରୟ ବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_17_STRUCTURED
    },
    {
        id: 'gita-chapter-18',
        title: 'ଅଧ୍ୟାୟ ୧୮- ମୋକ୍ଷ ସନ୍ନ୍ୟାସ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୮- ମୋକ୍ଷ ସନ୍ନ୍ୟାସ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ମୋକ୍ଷ ସନ୍ନ୍ୟାସ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_18_STRUCTURED
    },


    {
        id: 'song-gopinatpart2',
        title: 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍ (Gopinath Part 2)',
        title_odia: 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍',
        title_english: 'Gopinath Part 2 (Ghuchao Sansar)',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
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
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_BHALEGAURAGADADHARA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gurudevevrajavane',
        title: 'ଗୁରୁଦେବେ ବ୍ରଜ-ବନେ (Gurudeve Vraja Vane)',
        title_odia: 'ଗୁରୁଦେବେ ବ୍ରଜ-ବନେ',
        title_english: 'Gurudeve Vraja Vane',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_GURUDEVEVRAJAVANE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-hariharikabemora',
        title: 'ହରି ହରି କବେ ମୋର (Hari Hari Kabe Mora)',
        title_odia: 'ହରି ହରି କବେ ମୋର',
        title_english: 'Hari Hari Kabe Mora',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_HARIHARIKABEMORA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kabehabehenodasa',
        title: 'କବେ ହ’ବେ ହେନୋ ଦଶା (Kabe Habe Heno Dasa)',
        title_odia: 'କବେ ହ’ବେ ହେନୋ ଦଶା',
        title_english: 'Kabe Habe Heno Dasa',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_KABEHABEHENODASA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kabemuivaishnava',
        title: 'କବେ ମୁଇ ବୈଷ୍ଣବ ଚିନିବୋ (Kabe Mui Vaishnava Cinibo)',
        title_odia: 'କବେ ମୁଇ ବୈଷ୍ଣବ ଚିନିବୋ',
        title_english: 'Kabe Mui Vaishnava Cinibo',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_KABEMUIVAISHNAVA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kalikukkurakadan',
        title: 'କଳି କୁକ୍କୁର କଦନ (Kali Kukkura Kadan)',
        title_odia: 'କଳି କୁକ୍କୁର କଦନ',
        title_english: 'Kali Kukkura Kadan',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_KALIKUKKURAKADAN_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kenoharekrsnanam',
        title: 'କେନୋ ହରେ କୃଷ୍ଣ ନାମ (Keno Hare Krsna Nam)',
        title_odia: 'କେନୋ ହରେ କୃଷ୍ଣ ନାମ',
        title_english: 'Keno Hare Krsna Nam',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_KENOHAREKRSNANAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kesavatuwajagata',
        title: 'କେଶବ! ତୁୱା ଜଗତ ବିଚିତ୍ର (Kesava Tuwa Jagata Vicitra)',
        title_odia: 'କେଶବ! ତୁୱା ଜଗତ ବିଚିତ୍ର',
        title_english: 'Kesava Tuwa Jagata Vicitra',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_KESAVATUWAJAGATA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nijakarmadosephale',
        title: 'ନିଜ କର୍ମ ଦୋଷ ଫଲେ (Nija Karma Dose Phale)',
        title_odia: 'ନିଜ କର୍ମ ଦୋଷ ଫଲେ',
        title_english: 'Nija Karma Dose Phale',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_NIJAKARMADOSEPHALE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-prapanceporiyagati',
        title: 'ହରି ହେ! ପ୍ରପଞ୍ଚେ ପୋଡ଼ିୟା (Prapance Poriya Agati)',
        title_odia: 'ହରି ହେ! ପ୍ରପଞ୍ଚେ ପୋଡ଼ିୟା',
        title_english: 'Prapance Poriya Agati',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_PRAPANCEPORIYAGATI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-radhakundatata',
        title: 'ରାଧା-କୁଣ୍ଡ-ତଟ-କୁଞ୍ଜ-କୁଟୀର (Radha Kunda Tata Kunja Kutir)',
        title_odia: 'ରାଧା-କୁଣ୍ଡ-ତଟ-କୁଞ୍ଜ-କୁଟୀର',
        title_english: 'Radha Kunda Tata Kunja Kutir',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_RADHAKUNDATATA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-srikrsnakirtane',
        title: 'ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ ଯଦି ମାନସ ତୋହାର (Sri Krsna Kirtane Jadi Manasa Tohar)',
        title_odia: 'ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ ଯଦି ମାନସ ତୋହାର',
        title_english: 'Sri Krsna Kirtane Jadi Manasa Tohar',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_SRIKRSNAKIRTANE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-yaditeharipada',
        title: 'ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ-ସୁଧା (Yadi Te Hari Pada Saroja Sudha)',
        title_odia: 'ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ-ସୁଧା',
        title_english: 'Yadi Te Hari Pada Saroja Sudha',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_YADITEHARIPADA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-borosukherkhabar',
        title: 'ବଡ଼ ସୁଖେର ଖବର ଗାଇ (Boro Sukher Khabor Gai)',
        title_odia: 'ବଡ଼ ସୁଖେର ଖବର ଗାଇ',
        title_english: 'Boro Sukher Khabor Gai',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_BOROSUKHERKHABAR_STRUCTURED,
        published: true,
        status: 'COMPLETED',
        audioVersions: [
            { label: "HG Agnidev Prabhu", url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HG_Agnidev_Prabhu_IDT.mp3" },
            { label: "HG Badahari Prabhu", url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HG_Badahari_Prabhu_IDT.mp3" },
            { label: "HG Jai Sachinandana Prabhu (A)", url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HG_Badahari_Prabhu_IDT.mp3" },
            { label: "HG Vaiyasaki Prabhu", url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HG_Vaiyasaki_Prabhu_IDT.mp3" },
            { label: "HH Radhanath Swami", url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Boro_Sukher_Khabor_Gai/Boro_Sukher_Khabor_Gai_-_Sung_by_HH_Radhanath_Swami_IDT.mp3" },
            { label: "HG Radheshyam Prabhu", url: "https://pub-4f8c24b1c935435d9e3b959e0886ebf6.r2.dev/uploads%2FBoro%20sukher%20khabor%20gai.mp3" },
            { label: "HG Jai Sachinandana Prabhu (B)", url: "https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2F42%20Boro%20Sukher%20khabor%20P-80.MP3" }
        ]
    },
    {
        id: 'song-atmanivedanatuwapade',
        title: 'ତୁମ ପଦ ପଲ୍ଲବ (Tuwa Pade Minoti Mor)',
        title_odia: 'ତୁମ ପଦ ପଲ୍ଲବ',
        title_english: 'Tuwa Pade Minoti Mor',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_TUWAPADEMINOTIMOR_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gopinatmamanivedana',
        title: 'ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନ (Gopinath Part 1)',
        title_odia: 'ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନ',
        title_english: 'Gopinath Part 1 (Mama Nivedana Suno)',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'bhaja-re-bhaja-re-amar',
        title: 'ଭଜ ରେ ଭଜ ରେ ଆମାର (Bhaja Re Bhaja Re Amar)',
        title_odia: 'ଭଜ ରେ ଭଜ ରେ ଆମାର',
        title_english: 'Bhaja Re Bhaja Re Amar',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        audioUrl: 'https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Bhajare_Bhajare.mp3',
        vocalist: 'HH Gour Govinda Swami',
        audioVersions: [
            { label: "HH Gour Govinda Swami", url: "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Bhajare_Bhajare.mp3" },
            { label: "HH Gour Govinda Swami (V2)", url: "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Bhajare_bhajare_amar_mana.mp3" },
            { label: "HH Bhakti Caru Swami", url: "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_A_to_C/His_Holiness_Bhakti_Charu_Swami/Bhajans/Vaishnava_Bhajans/BCS_Bhajans_-_Bhaja_Re_Bhaja_Amar.mp3" },
            { label: "HG Jai Sachinanadana Prabhu", url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Bhaja_Re_Bhaja_Re_Amara_Mana/Bhaja_Re_Bhaja_Re_Amara_Mana_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3" },
            { label: "HG Vaisesika Prabhu", url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Bhaja_Re_Bhaja_Re_Amara_Mana/Bhaja_Re_Bhaja_Re_Amara_Mana_-_Sung_by_HG_Vaisesika_Prabhu_IDT.mp3" }
        ],
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-Bolo Hari Bolo',
        title: 'ବୋଲୋ ହରି ବୋଲୋ (Bolo Hari Bolo)',
        title_odia: 'ବୋଲୋ ହରି ବୋଲୋ',
        title_english: 'Bolo Hari Bolo',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        structuredContent: (Songs as any).SONG_BOLOHARIBOLO_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-ekhanbujhinuprabhu',
        title: 'ଏଖନ ବୁଝିନୁ ପ୍ରଭୁ (Ekhan Bujhinu Prabhu)',
        title_odia: 'ଏଖନ ବୁଝିନୁ ପ୍ରଭୁ',
        title_english: 'Ekhan Bujhinu Prabhu',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-emonadurmati',
        title: 'ଏମନ ଦୁର୍ମତି (Emona Durmati)',
        title_odia: 'ଏମନ ଦୁର୍ମତି',
        title_english: 'Emona Durmati',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gaygoramadhura',
        title: 'ଗାୟ ଗୋରା ମଧୁର (Gay Gora Madhura)',
        title_odia: 'ଗାୟ ଗୋରା ମଧୁର',
        title_english: 'Gay Gora Madhura Sware',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gaygoracand',
        title: 'ଗାୟ ଗୋରାଚାନ୍ଦ (Gay Goracand)',
        title_odia: 'ଗାୟ ଗୋରାଚାନ୍ଦ',
        title_english: 'Gay Goracand Jivera Tore',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-krpakorovaisnava',
        title: 'କୃପା କର ବୈଷ୍ଣବ ଠାକୁର (Krpa Kara Vaisnava)',
        title_odia: 'କୃପା କର ବୈଷ୍ଣବ ଠାକୁର',
        title_english: 'Krpa Kara Baishnav Thakur',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-jayaradhajayamadhava',
        title: 'ଜୟ ରାଧା ଜୟ ମାଧବ (Jaya Radha Jaya Madhava)',
        title_odia: 'ଜୟ ରାଧା ଜୟ ମାଧବ',
        title_english: 'Jaya Radha Jaya Madhava',
        category: 'Songs',
        type: 'html',
        author: 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-arebhaibhajamora',
        title: 'ଆରେ ଭାଇ ! ଭଜ ମୋର (Are Bhai Bhaja Mora)',
        title_odia: 'ଆରେ ଭାଇ ! ଭଜ ମୋର',
        title_english: 'Are Bhai Bhaja Mora',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_AREBHAIBHAJAMORA_STRUCTURED,
        published: true,
        status: 'COMPLETED',
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Narottam_Das_Thakur/Are_Bhai_Bhaja_Mora_Gauranga_Carana/Are_Bhai_Bhaja_Mora_Gauranga_Carana_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3',
        vocalist: 'HG Jai Sachinanadana Prabhu'
    },
    {
        id: 'song-dhanamornityananda',
        title: 'ଧନ ମୋର ନିତ୍ୟାନନ୍ଦ (Dhana Mor Nityananda)',
        title_odia: 'ଧନ ମୋର ନିତ୍ୟାନନ୍ଦ',
        title_english: 'Dhana Mor Nityananda',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_DHANAMORNITYANANDA_STRUCTURED,
        published: true,
        status: 'COMPLETED',
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Narottam_Das_Thakur/Dhana_Mora_Nityanand/Dhana_Mora_Nityanand_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3',
        vocalist: 'HG Jai Sachinanadana Prabhu'
    },
    {
        id: 'song-eibarokarunakoro',
        title: 'ଏଇ ବାର କରୁଣା କର (Ei Baro Karuna Koro)',
        title_odia: 'ଏଇ ବାର କରୁଣା କର',
        title_english: 'Ei Baro Karuna Koro',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_EIBAROKARUNAKORO_STRUCTURED,
        published: true,
        status: 'COMPLETED',
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Narottam_Das_Thakur/Ei_baro_Karuna_Koro/Ei_baro_Karuna_Koro_-_Sung_by_HG_Agnidev_Prabhu_IDT.mp3',
        vocalist: 'HG Agnidev Prabhu'
    },
    {
        id: 'song-gaurangakarunakoro',
        title: 'ଗୌରାଙ୍ଗ କରୁଣା କର (Gauranga Karuna Koro)',
        title_odia: 'ଗୌରାଙ୍ଗ କରୁଣା କର',
        title_english: 'Gauranga Karuna Koro',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_GAURANGAKARUNAKORO_STRUCTURED,
        published: true,
        status: 'COMPLETED',
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Narottam_Das_Thakur/Gauranga_Karuna_Koro/Gauranga_Karuna_Koro_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3',
        vocalist: 'HG Jai Sachinanadana Prabhu'
    },
    {
        id: 'song-gaurangerdutipada',
        title: 'ଗୌରାଙ୍ଗେର ଦୁ’ଟି ପଦ (Gauranger Duti Pada)',
        title_odia: 'ଗୌରାଙ୍ଗେର ଦୁ’ଟି ପଦ',
        title_english: 'Gauranger Duti Pada',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_GAURANGERDUTIPADA_STRUCTURED,
        published: true,
        status: 'COMPLETED',
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Narottam_Das_Thakur/Gaurangera_Duti_Pada/Gaurangera_Duti_Pada_-_Sung_by_HG_Agnidev_Prabhu_IDT.mp3',
        vocalist: 'HG Agnidev Prabhu'
    },
    {
        id: 'song-gaurangabolitehabe',
        title: 'ଗୌରାଙ୍ଗ ବୋଲିତେ ହବେ (Gauranga Bolite Habe)',
        title_odia: 'ଗୌରାଙ୍ଗ ବୋଲିତେ ହବେ',
        title_english: 'Gauranga Bolite Habe',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: {
            verses: [
                {
                    id: 1,
                    lyric: "'ଗୌରାଙ୍ଗ' ବୋଲିତେ ହବେ ପୁଲକ-ଶରୀର\n'ହରି ହରି' ବୋଲିତେ ନୟନେ ବ'ବେ ନୀର ।।୧।।",
                    translation: "କେବେ ସେହି ଶୁଭ ମୁହୂର୍ତ୍ତ ଆସିବ, ଯେତେବେଳେ ଶ୍ରୀଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କ ନାମ ଉଚ୍ଚାରଣ ମାତ୍ରେ ମୋର ଶରୀର ପୁଲକିତ ହୋଇ ରୋମାଞ୍ଚିତ ହେବ? ଯେତେବେଳେ ମୁଁ 'ହରି ହରି' କହିବି, ମୋର ଆଖିରୁ ପ୍ରେମ ଅଶ୍ରୁ ବହି ଚାଲିବ?",
                },
                {
                    id: 2,
                    lyric: "ଆର କବେ ନିତାଈ-ଚାଁଦେର କରୁଣା ହଇବେ\nସଂସାର-ବାସନା ମୋର କବେ ତୁଚ୍ଛ ହ'ବେ ।।୨।।",
                    translation: "ପରମ ଦୟାଳୁ ଭଗବାନ ନିତ୍ୟାନନ୍ଦ ଚନ୍ଦ୍ରଙ୍କର କରୁଣା ମୋ' ଉପରେ କେବେ ହେବ? ତାଙ୍କ କୃପାରୁ ଏହି ସଂସାରର ସମସ୍ତ ବିଷୟ ବାସନା କେବେ ମୋ' ପାଇଁ ତୁଚ୍ଛ ବା ମୂଲ୍ୟହୀନ ହୋଇଯିବ?",
                },
                {
                    id: 3,
                    lyric: "ବିଷୟ ଛାଡ଼ିୟା କବେ ଶୁଦ୍ଧ ହବେ ମନ\nକବେ ହାମ ହେରବ ଶ୍ରୀ-ବୃନ୍ଦାବନ ।।୩।।",
                    translation: "ସାଂସାରିକ ବିଷୟ ଆସକ୍ତିରୁ ମୁକ୍ତ ହୋଇ ମୋର ମନ କେବେ ସମ୍ପୂର୍ଣ୍ଣ ଶୁଦ୍ଧ ଓ ନିର୍ମଳ ହେବ? କେବେ ମୁଁ ଏହି ଚର୍ମ ଚକ୍ଷୁରେ ପବିତ୍ର ଶ୍ରୀବୃନ୍ଦାବନ ଧାମର ଅପ୍ରାକୃତ ରୂପ ଦର୍ଶନ କରିପାରିବି?",
                }
            ]
        },
        published: true,
        status: 'NOT_DONE'
    },
    {
        id: 'song-gorapahun',
        title: 'ଗୋର ପହୁଁ (Gora Pahun)',
        title_odia: 'ଗୋର ପହୁଁ',
        title_english: 'Gora Pahun',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: {
            verses: [
                {
                    id: 1,
                    lyric: "ଗୋର ପହୁଁ ନା ଭଜିୟା ମୋଇନୁ\nପ୍ରେମ-ରତନ-ଧନ ହେଲାୟ ହାରାଇନୁ ।।୧।।",
                    translation: "ହାୟ! ପରମ ଦୟାଳୁ ଶ୍ରୀଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କ ଭଜନ ନକରି ମୁଁ ନିଜକୁ ନଷ୍ଟ କରିଦେଲି। ପ୍ରେମରୂପୀ ରତ୍ନରୂପ ଅମୂଲ୍ୟ ସମ୍ପତ୍ତିକୁ ମୁଁ କେବଳ ମୋର ଅବହେଳା ଓ ହେୟ ମନୋଭାବ ଯୋଗୁଁ ହରାଇ ବସିଲି।",
                },
                {
                    id: 2,
                    lyric: "ଅଧନେ ଯତନ କରି ଧନ ତେଜିନୁ\nଆପନ କରମ-ଦୋଷେ ଆପନି ବଞ୍ଚିତ ହରଇନୁ ।।୨।।",
                    translation: "ମୁଁ ଅସାର ଓ ନଶ୍ଵର ବସ୍ତୁକୁ ଗୋଟାଇବାରେ ବ୍ୟସ୍ତ ରହିଲି ଏବଂ ପ୍ରକୃତ ସମ୍ପତ୍ତିକୁ ତ୍ୟାଗ କଲି। ମୁଁ ମୋର ନିଜର ଦୁଷ୍କର୍ମ ଓ ଭୁଲ ଯୋଗୁଁ ଆଜି ନିଜେ ହିଁ ସମସ୍ତ ଅପ୍ରାକୃତ ଆନନ୍ଦରୁ ବଞ୍ଚିତ ହୋଇଛି।",
                },
                {
                    id: 3,
                    lyric: "ସତ୍-ସଙ୍ଗ ଛାଡ଼ି' କୈନୁ ଅସତେ ବିଳାସ\nତେ-କାରଣେ ଲାଗିଲ ମୋର କର୍ମ-ବନ୍ଧ-ଫାଁସ ।।୩।।",
                    translation: "ସାଧୁସଙ୍ଗ ଓ ପବିତ୍ର ବ୍ୟକ୍ତିମାନଙ୍କର ସାନ୍ନିଧ୍ୟ ଛାଡ଼ି ମୁଁ କେବଳ ଅସାର ବିଷୟ ଭୋଗରେ ମତ୍ତ ରହିଲି। ସେଥିପାଇଁ ଆଜି ମୁଁ ଏହି କର୍ମର ଦୃଢ଼ ବନ୍ଧନରେ ଛନ୍ଦି ହୋଇ ପଡ଼ିଛି।",
                }
            ]
        },
        published: true,
        status: 'NOT_DONE'
    }
];

export const CATEGORIES = ['ସବୁ', 'ଗୀତ', 'କୀର୍ତ୍ତନ', 'ଗୀତା'];