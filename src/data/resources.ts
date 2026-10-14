import * as Songs from './songsContent';
import * as TempleSongs from './temple_songs_data';
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
        author: 'Bhaktivinoda Thakura',
        tags: ['Temple'],
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-madhurashtakam',
        title: 'ଅଧରଂ ମଧୁରଂ (Sri Madhurashtakam)',
        title_odia: 'ଅଧରଂ ମଧୁରଂ',
        title_english: 'Adharam Madhuram',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀମଦ୍ବଲ୍ଲଭାଚାର୍ଯ୍ୟଙ୍କ ବିରଚିତ ମଧୁରାଷ୍ଟକମ୍ |',
        structuredContent: (Songs as any).SONG_MADHURASHTAKAM_STRUCTURED,
        author: 'Vallabhacarya',
        tags: ['Astakam'],
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gitamahatmya',
        title: 'ଗୀତା ମାହାତ୍ମ୍ୟ (Gītā Māhātmya)',
        category: 'Songs',
        type: 'html',
        description: 'ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟଙ୍କ ମୁଖନିସୃତ ଗୀତା ମାହାତ୍ମ୍ୟ |',
        structuredContent: (Songs as any).SONG_GITAMAHATMYA_STRUCTURED,
        author: 'Adi Sankaracarya'
    },
    {
        id: 'song-bhajagovindam',
        title: 'ଭଜ ଗୋବିନ୍ଦମ୍ (Bhaja Govindam)',
        title_odia: 'ଭଜ ଗୋବିନ୍ଦମ୍',
        title_english: 'Bhaja Govindam',
        category: 'Songs',
        type: 'html',
        description: 'ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟଙ୍କ ବିରଚିତ ପ୍ରସିଦ୍ଧ ଭଜ ଗୋବିନ୍ଦମ୍ ସ୍ତୋତ୍ର |',
        structuredContent: (Songs as any).SONG_BHAJAGOVINDAM_STRUCTURED,
        author: 'Adi Sankaracarya',
        tags: ['Stotram'],
        published: true,
        status: 'COMPLETED'
    },

    {
        id: 'song-bhishmastuti',
        title: 'ଭୀଷ୍ମ ସ୍ତୁତି (Bhishma Stuti)',
        title_odia: 'ଭୀଷ୍ମ ସ୍ତୁତି',
        title_english: 'Bhishma Stuti',
        category: 'Songs',
        type: 'html',
        author: 'Vyasadeva',
        description: 'ଶ୍ରୀମଦ୍ ଭାଗବତମ୍ (୧-୯-୩୨ ରୁ ୪୨) | ଅନୁବାଦ: ପୂଜ୍ୟପାଦ ଭାନୁ ସ୍ୱାମୀ ମହାରାଜ (HH Bhanu Swami Maharaj)ଙ୍କ ଦ୍ୱାରା ରଚିତ ଗ୍ରନ୍ଥରୁ ସଂଗୃହୀତ |',
        structuredContent: (Songs as any).SONG_BHISHMASTUTI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-yamunastakam',
        title: 'ଭ୍ରାତୃ ଅନ୍ତକସ୍ୟ ପତ୍ତନେ (Sri Yamunastakam)',
        title_odia: 'ଭ୍ରାତୃ ଅନ୍ତକସ୍ୟ ପତ୍ତନେ',
        title_english: 'Bhrtr Antakasya Pattane',
        category: 'Songs',
        type: 'html',
        author: 'Rupa Goswami',
        description: 'ଶ୍ରୀ ରୂପ ଗୋସ୍ୱାମୀଙ୍କ ଦ୍ୱାରା ରଚିତ ଶ୍ରୀ ଯମୁନାଷ୍ଟକମ୍ |',
        structuredContent: (Songs as any).SONG_YAMUNASTAKAM_STRUCTURED,
        tags: ['Astakam'],
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-shikshashtakam',
        title: 'ଚେତୋ ଦର୍ପଣ ମାର୍ଜନଂ (Sri Sikshashtakam)',
        title_odia: 'ଚେତୋ ଦର୍ପଣ ମାର୍ଜନଂ',
        title_english: 'Ceto Darpana Marjanam',
        category: 'Songs',
        type: 'html',
        author: 'Sri Caitanya Mahaprabhu',
        description: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ମୁଖନିସୃତ ଅଷ୍ଟ ଶ୍ଳୋକାତ୍ମକ ଶିକ୍ଷାଷ୍ଟକମ୍ |',
        structuredContent: (Songs as any).SONG_SIKSHASHTAKAM_STRUCTURED,
        tags: ['Astakam'],
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-radhejayajaya',
        title: 'ରାଧେ ଜୟ ଜୟ ମାଧବ-ଦୟିତେ (Rādhe Jaya Jaya)',
        title_odia: 'ରାଧେ ଜୟ ଜୟ ମାଧବ-ଦୟିତେ',
        title_english: 'Radhe Jaya Jaya Madhava Dayite',
        category: 'Songs',
        type: 'html',
        author: 'Rupa Goswami',
        description: 'ଶ୍ରୀ ରୂପ ଗୋସ୍ୱାମୀଙ୍କ ଦ୍ୱାରା ରଚିତ ଶ୍ରୀରାଧା-ଅଷ୍ଟକମ୍ |',
        structuredContent: (Songs as any).SONG_RADHEJAYAJAYA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-radhikastakam',
        title: 'କୁଙ୍କୁମାକ୍ତ-କାଞ୍ଚନାବ୍ଜ (Radhikastakam)',
        title_odia: 'କୁଙ୍କୁମାକ୍ତ-କାଞ୍ଚନାବ୍ଜ',
        title_english: 'Kunkumakta Kancanabja (Radhikastakam)',
        category: 'Songs',
        type: 'html',
        author: 'Krsnadasa Kaviraja Goswami',
        description: 'ଶ୍ରୀ କୃଷ୍ଣଦାସ କବିରାଜ ଗୋସ୍ୱାମୀଙ୍କ ଦ୍ୱାରା ରଚିତ ଶ୍ରୀ ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍ |',
        tags: ['Radhikastakam', 'Radha', 'Sri Sri Radhikastakam', 'Astakam', 'Temple'],
        structuredContent: (Songs as any).SONG_RADHIKASTAKAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-sadgoswamyastakam',
        title: 'କୃଷ୍ଣୋତ୍କୀର୍ତ୍ତନ ଗାନ ନର୍ତ୍ତନ (Sad Goswami Astakam)',
        title_odia: 'କୃଷ୍ଣୋତ୍କୀର୍ତ୍ତନ ଗାନ ନର୍ତ୍ତନ',
        title_english: 'Krsnotkirtana Gana Nartana (Sad Goswami Astakam)',
        category: 'Songs',
        type: 'html',
        author: 'Srinivasa Acarya',
        description: 'ଶ୍ରୀନିବାସ ଆଚାର୍ଯ୍ୟଙ୍କ ଦ୍ୱାରା ରଚିତ ଷଡ଼ ଗୋସ୍ୱାମୀ ଅଷ୍ଟକ |',
        tags: ['Astakam', 'Srinivasa Acarya', 'Six Goswamis', 'Radha', 'Krsna'],
        structuredContent: (Songs as any).SONG_SADGOSWAMYASTAKAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-yugalastakam',
        title: 'କୃଷ୍ଣ ପ୍ରେମ ମୟୀ ରାଧା (Yugalastakam)',
        title_odia: 'କୃଷ୍ଣ ପ୍ରେମ ମୟୀ ରାଧା',
        title_english: 'Krsna Prema Mayi Radha (Yugalastakam)',
        category: 'Songs',
        type: 'html',
        author: 'Jiva Goswami',
        description: 'ଜୀବ ଗୋସ୍ୱାମୀଙ୍କ ଦ୍ୱାରା ରଚିତ ଶ୍ରୀ ଶ୍ରୀ ଯୁଗଳାଷ୍ଟକମ୍ |',
        tags: ['Astakam', 'Jiva Goswami', 'Radha', 'Krsna', 'Yugalastakam'],
        structuredContent: (Songs as any).SONG_YUGALASTAKAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-govardhanastakam',
        title: 'କୃଷ୍ଣ ପ୍ରସାଦେନ ସମସ୍ତ (Govardhanastakam)',
        title_odia: 'କୃଷ୍ଣ ପ୍ରସାଦେନ ସମସ୍ତ',
        title_english: 'Krsna Prasadena Samasta (Govardhanastakam)',
        category: 'Songs',
        type: 'html',
        author: 'Visvanatha Cakravarti Thakura',
        description: 'ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁରଙ୍କ ଦ୍ୱାରା ରଚିତ ଶ୍ରୀ ଗୋବର୍ଦ୍ଧନାଷ୍ଟକମ୍ |',
        tags: ['Astakam', 'Visvanatha Cakravarti Thakura', 'Govardhana', 'Radha', 'Krsna'],
        structuredContent: (Songs as any).SONG_GOVARDHANASTAKAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-krsnanamadhare',
        title: 'କୃଷ୍ଣ ନାମ ଧରେ କତ ବଳ (Krsna Nama Dhare)',
        title_odia: 'କୃଷ୍ଣ ନାମ ଧରେ କତ ବଳ',
        title_english: 'Krsna Nama Dhare Koto Bal',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        description: 'ଭକ୍ତି ବିନୋଦ ଠାକୁରଙ୍କ ଦ୍ୱାରା ରଚିତ ହରିନାମର ମାହାତ୍ମ୍ୟ |',
        tags: ['Bhaktivinoda Thakura', 'Krsna Nama', 'Harinama', 'Mahatmya'],
        structuredContent: (Songs as any).SONG_KRSNANAMADHARE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-krsnajinakanamahai',
        title: 'କୃଷ୍ଣ ଜିନକା ନାମ ହୈ (Krsna Jinaka Nama Hai)',
        title_odia: 'କୃଷ୍ଣ ଜିନକା ନାମ ହୈ',
        title_english: 'Krsna Jinaka Nama Hai',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        description: 'ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ବିଭିନ୍ନ ନାମ ଓ ଲୀଳାର ଏକ ମନୋରମ ଭଜନ |',
        tags: ['Traditional', 'Krsna Nama', 'Bhajan', 'Gokula', 'Radhe Govinda'],
        structuredContent: (Songs as any).SONG_KRSNAJINAKANAMAHAI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kejabikejabi',
        title: 'କେ ଯାବି କେ ଯାବି ଭାଇ ଭବ ସିନ୍ଧୁ ପାର (Ke Jabi Ke Jabi)',
        title_odia: 'କେ ଯାବି କେ ଯାବି ଭାଇ ଭବ ସିନ୍ଧୁ ପାର',
        title_english: 'Ke Jabi Ke Jabi Bhai Bhava Sindhu Para',
        category: 'Songs',
        type: 'html',
        author: 'Locana Dasa Thakura',
        description: 'ଶ୍ରୀ ଲୋଚନ ଦାସ ଠାକୁରଙ୍କ ଦ୍ୱାରା ରଚିତ ଏକ ସୁନ୍ଦର ଭଜନ, ଯେଉଁଥିରେ ସେ ସଂସାର ରୂପକ ସମୁଦ୍ର ପାର ହେବା ପାଇଁ ହରିନାମ ନୌକାର ମାହାତ୍ମ୍ୟ ବର୍ଣ୍ଣନା କରିଛନ୍ତି |',
        tags: ['Locana Dasa Thakura', 'Bhajan', 'Bhava Sindhu', 'Caitanya Mahaprabhu'],
        structuredContent: (Songs as any).SONG_KEJABIKEJABI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-brahmabole',
        title: 'ବ୍ରହ୍ମା ବୋଲେ ଚତୁର୍ମୁଖ (Brahma Bole Catur Mukha)',
        title_odia: 'ବ୍ରହ୍ମା ବୋଲେ ଚତୁର୍ମୁଖ',
        title_english: 'Brahma Bole Catur Mukha',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        description: 'ବ୍ରହ୍ମା ଓ ଶିବଙ୍କ ଦ୍ୱାରା ହରିନାମ ସଙ୍କୀର୍ତ୍ତନର ଏକ ମନୋରମ ବର୍ଣ୍ଣନା |',
        structuredContent: (Songs as any).SONG_BRAHMABOLE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gourangasundara',
        title: 'ଗୌରାଙ୍ଗ ସୁନ୍ଦର ପ୍ରେମ ଜଳଧର (Gouranga Sundara)',
        title_odia: 'ଗୌରାଙ୍ଗ ସୁନ୍ଦର ପ୍ରେମ ଜଳଧର',
        title_english: 'Gouranga Sundara Prema Jaladhara',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        description: 'ଶ୍ରୀଲ ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କର ଏକ ମନୋରମ ଭଜନ |',
        display_order: 5,
        structuredContent: (Songs as any).SONG_GOURANGASUNDARA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-harekrishnamahamantra',
        title: 'ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର (Hare Krishna Mahamantra)',
        title_odia: 'ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର',
        title_english: 'Hare Krishna Mahamantra',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        description: 'ଶ୍ରୀ ହରିନାମ ମହାମନ୍ତ୍ର |',
        display_order: 1,
        structuredContent: (Songs as any).SONG_HAREKRISHNAMAHAMANTRA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-caranakamal',
        title: 'ଚରଣ କମଲ (Caraṇa Kamala)',
        title_odia: 'ଚରଣ କମଲ',
        title_english: 'Carana Kamal',
        category: 'Songs',
        type: 'html',
        author: 'Sura Dasa',
        description: 'ଭକ୍ତ ସୂରଦାସଙ୍କ ବିରଚିତ ଶ୍ରୀହରିଙ୍କ ଚରଣ ବନ୍ଦନା |',
        structuredContent: (Songs as any).SONG_CARANAKAMAL_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-bhuliyatomare',
        title: 'ଭୁଲିୟା ତୋମାରେ (Bhuliyā tomāre)',
        category: 'Songs',
        type: 'html',
        description: 'ଭୁଲିୟା ତୋମାରେ - ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏକ ପ୍ରସିଦ୍ଧ ଭଜନ |',
        structuredContent: (Songs as any).SONG_BHULIYATOMARE_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Bhuliya_Tomare/Bhuliya_Tomare_-_Sung_by_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3',
        author: 'Bhaktivinoda Thakura'
    },
    {
        id: 'song-jeanilopremadhana',
        title: 'ଯେ ଆନିଲ ପ୍ରେମ ଧନ (Je Anilo Prema Dhana)',
        title_odia: 'ଯେ ଆନିଲ ପ୍ରେମ ଧନ',
        title_english: 'Je anila prema dhana koruna pracura',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_JEANILOPREMADHANA_STRUCTURED,
        author: 'Narottama Dasa Thakura'
    },
    {
        id: 'song-hariharayenamah',
        title: 'ହରି ହରୟେ ନମଃ କୃଷ୍ଣ ଯାଦବାୟ (Hari Haraye Namah)',
        title_odia: 'ହରି ହରୟେ ନମଃ କୃଷ୍ଣ ଯାଦବାୟ',
        title_english: 'Hari Haraye Namah Krsna Yadavaya',
        category: 'Songs',
        type: 'html',
        description: 'ନରୋତ୍ତମ ଦାସ ଠାକୁରଙ୍କ ଏକ ପ୍ରସିଦ୍ଧ ଭଜନ |',
        structuredContent: (Songs as any).SONG_HARIHARAYENAMAH_STRUCTURED,
        author: 'Narottama Dasa Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-hariharikabemore',
        title: 'ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ (Hari Hari Kabe More Hoibe Su-Dina)',
        title_odia: 'ହରି ହରି କବେ ମୋର ହୋଇବେ ସୁଦିନ',
        title_english: 'Hari Hari Kabe More Hoibe Su-Dina',
        category: 'Songs',
        type: 'html',
        description: 'ନରୋତ୍ତମ ଦାସ ଠାକୁରଙ୍କ ଏକ ଅତି ମନୋରମ ଭଜନ |',
        structuredContent: (Songs as any).SONG_HARIHARIKABEMORE_STRUCTURED,
        author: 'Narottama Dasa Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-harihedoyalmor',
        title: 'ହରି ହେ ଦୟାଲ ମୋର (Hari He Doyal Mor)',
        title_odia: 'ହରି ହେ ଦୟାଲ ମୋର',
        title_english: 'Hari He Doyal Mor',
        category: 'Songs',
        type: 'html',
        description: 'ଏକ ଅତି ସୁନ୍ଦର ପାରମ୍ପରିକ ଦୀନତାମୟୀ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_HARIHEDOYALMOR_STRUCTURED,
        author: 'Traditional',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-hegovindahegopala',
        title: 'ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ ହେ ଗୋବିନ୍ଦ (He Govinda He Gopala He Govinda)',
        title_odia: 'ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ ହେ ଗୋବିନ୍ଦ',
        title_english: 'He Govinda He Gopala He Govinda',
        category: 'Songs',
        type: 'html',
        description: 'ସୂର ଦାସଙ୍କ ଏକ ଅତି ଭାବପୂର୍ଣ୍ଣ ପ୍ରାର୍ଥନା (ଗଜେନ୍ଦ୍ର ମୋକ୍ଷ ଆଧାରିତ) |',
        structuredContent: (Songs as any).SONG_HEGOVINDAHEGOPALA_STRUCTURED,
        author: 'Sura Dasa',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-hegovindahegopalkesava',
        title: 'ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ କେଶବ ମାଧବ (He Govinda He Gopal Kesava Madhava)',
        title_odia: 'ହେ ଗୋବିନ୍ଦ ହେ ଗୋପାଳ କେଶବ ମାଧବ',
        title_english: 'He Govinda He Gopal Kesava Madhava',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଜୟଦେବ ଗୋସ୍ୱାମୀଙ୍କ ଏକ ଅତି ସୁନ୍ଦର ଭଜନ |',
        structuredContent: (Songs as any).SONG_HEGOVINDAHEGOPALKESAVA_STRUCTURED,
        author: 'Jayadeva Goswami',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-heradekhiyanayanabhariya',
        title: 'ହେର ଦେଖିୟା ନୟନ ଭରିୟା (Hera Dekhiya Nayana Bhariya)',
        title_odia: 'ହେର ଦେଖିୟା ନୟନ ଭରିୟା',
        title_english: 'Hera Dekhiya Nayana Bhariya',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ବୃନ୍ଦାବନ ଦାସ ଠାକୁରଙ୍କ ଏକ ଅତି ସୁନ୍ଦର ଗୌର-ଭଜନ |',
        structuredContent: (Songs as any).SONG_HERADEKHIYANAYANABHARIYA_STRUCTURED,
        author: 'Vrndavana Dasa Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-huhunkaragarjanadi',
        title: 'ହୁହୁଙ୍କାର-ଗର୍ଜନାଦି ଅହୋ (Huhunkara Garjanadi Aho)',
        title_odia: 'ହୁହୁଙ୍କାର-ଗର୍ଜନାଦି ଅହୋ',
        title_english: 'Huhunkara Garjanadi Aho',
        category: 'Ashtakams',
        type: 'html',
        description: 'ସର୍ବଭୌମ ଭଟ୍ଟାଚାର୍ଯ୍ୟଙ୍କ ଦ୍ୱାରା ରଚିତ ଶ୍ରୀ ଅଦ୍ୱୈତାଷ୍ଟକମ୍ |',
        structuredContent: (Songs as any).SONG_HUHUNKARAGARJANADI_STRUCTURED,
        author: 'Sarvabhauma Bhattacarya',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-jarmukhebhai',
        title: 'ଯାର୍ ମୁଖେ ଭାଇ ହରି କଥା ନାଇ (Jar Mukhe Bhai)',
        title_odia: 'ଯାର୍ ମୁଖେ ଭାଇ ହରି କଥା ନାଇ',
        title_english: 'Jar Mukhe Bhai Hari Katha Nai',
        category: 'Songs',
        type: 'html',
        description: 'ହରିଭକ୍ତ ଶୂନ୍ୟ ବ୍ୟକ୍ତିର ସଙ୍ଗ ତ୍ୟାଗ କରିବାକୁ ଏହି ଭଜନରେ ଉପଦେଶ ଦିଆଯାଇଛି |',
        structuredContent: (Songs as any).SONG_JARMUKHEBHAI_STRUCTURED,
        author: 'Unknown',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-janulambita',
        title: 'ଜାନୁ ଲମ୍ବିତ ବାହୁ ଯୁଗଳ (Janu Lambita)',
        title_odia: 'ଜାନୁ ଲମ୍ବିତ ବାହୁ ଯୁଗଳ',
        title_english: 'Janu Lambita Bahu Jugala',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ ଓ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କର ଦିବ୍ୟ ରୂପ ବର୍ଣ୍ଣନା କରୁଥିବା ଏକ ଅତି ସୁନ୍ଦର ଭଜନ |',
        structuredContent: (Songs as any).SONG_JANULAMBITA_STRUCTURED,
        author: 'Vrndavana Dasa Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-jayaradhagirivaradhari',
        title: 'ଜୟ ରାଧା ଗିରି-ବର ଧାରୀ (Jaya Radha Giri Vara Dhari)',
        title_odia: 'ଜୟ ରାଧା ଗିରି-ବର ଧାରୀ',
        title_english: 'Jaya Radha Giri Vara Dhari',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କର ଏକ ଅତି ମନୋହର ଯୁଗଳ ମୂର୍ତ୍ତି ବର୍ଣ୍ଣନା |',
        structuredContent: (Songs as any).SONG_JAYARADHAGIRIVARADHARI_STRUCTURED,
        author: 'Krsna Dasa',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-isvaraparamakrsna',
        title: 'ଈଶ୍ୱରଃ ପରମଃ କୃଷ୍ଣଃ - ଶ୍ରୀ ବ୍ରହ୍ମ ସଂହିତା (Isvara Parama Krsna - Sri Brahma Samhita)',
        title_odia: 'ଈଶ୍ୱରଃ ପରମଃ କୃଷ୍ଣଃ - ଶ୍ରୀ ବ୍ରହ୍ମ ସଂହିତା',
        title_english: 'Isvara Parama Krsna - Sri Brahma Samhita',
        category: 'Brahma Samhita',
        type: 'html',
        description: 'ଶ୍ରୀ ବ୍ରହ୍ମାଜୀଙ୍କ ମୁଖନିସୃତ ପରମ ପବିତ୍ର ଶ୍ରୀ ବ୍ରହ୍ମ ସଂହିତା (ପଞ୍ଚମ ଅଧ୍ୟାୟ - ୨୯ଟି ଶ୍ଳୋକ) ।',
        structuredContent: (Songs as any).SONG_ISVARAPARAMAKRSNA_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Swarupa_Damodar_Prabhu/Hari_Vandana/Swarupa_Damodar_Pr_Bhajans_-_06-Ishvarah_Param_Krishna.mp3',
        vocalist: 'HG Swarupa Damodar Prabhu',
        audioVersions: [
            {
                label: 'HG Swarupa Damodar Prabhu',
                url: 'https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Swarupa_Damodar_Prabhu/Hari_Vandana/Swarupa_Damodar_Pr_Bhajans_-_06-Ishvarah_Param_Krishna.mp3'
            },
            {
                label: 'HG Jai Sachinandana Prabhu',
                url: 'https://audio.iskcondesiretree.com/05_-_ISKCON_Chowpatty/00_-_Bhajans/04_-_Bhajans_by_Jai_Sachinanadana_%20Prabhu/02%20-%20Temple%20Program%20Prayers/IDT_-_Sri_Brahma_Samhita_-_By_Jai_Sachinanadana_Pr.mp3'
            },
            {
                label: 'HH Bhakti Caru Swami',
                url: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsna_Daipayana_Vyasa/Brahma_Samhita/Brahma_Samhita_-_Sung_by_HH_Bhakti_Caru_Swami_IDT.mp3'
            },
            {
                label: 'HH Kadamba Kanana Swami',
                url: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsna_Daipayana_Vyasa/Brahma_Samhita/Brahma_Samhita_-_Sung_by_HH_Kadamba_Kanana_Swami_IDT.mp3'
            },
            {
                label: 'HH Vedavyasa Priya Swami',
                url: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsna_Daipayana_Vyasa/Brahma_Samhita/Brahma_Samhita_-_Sung_by_HH_Vedavyasa_Priya_Swami_IDT.mp3'
            },
            {
                label: 'HG Jai Sachinandana Prabhu (01)',
                url: 'https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2F9%20Bramha%20Samhita%20P-19.MP3'
            },
            {
                label: 'HG Gauranga Darshan Prabhu (Tune 1)',
                url: 'https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_A_to_J/His_Grace_Gauranga_Darshan_Prabhu/Slokas_Recitation/With_Tanpura/Brahma_Samhita/Gauranga_Darshan_Pr_-_Brahma_Samhita_Recitations_Tune-01_-_With_Tanpura.mp3'
            },
            {
                label: 'HG Gauranga Darshan Prabhu (Tune 2)',
                url: 'https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_A_to_J/His_Grace_Gauranga_Darshan_Prabhu/Slokas_Recitation/With_Tanpura/Brahma_Samhita/Gauranga_Darshan_Pr_-_Brahma_Samhita_Recitations_Tune-02_-_With_Tanpura.mp3'
            },
            {
                label: 'HG Gauranga Darshan Prabhu (Tune 3)',
                url: 'https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_A_to_J/His_Grace_Gauranga_Darshan_Prabhu/Slokas_Recitation/With_Tanpura/Brahma_Samhita/Gauranga_Darshan_Pr_-_Brahma_Samhita_Recitations_Tune-03_-_With_Tanpura.mp3'
            },
            {
                label: 'HG Gauranga Darshan Prabhu (Tune 4)',
                url: 'https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_A_to_J/His_Grace_Gauranga_Darshan_Prabhu/Slokas_Recitation/With_Tanpura/Brahma_Samhita/Gauranga_Darshan_Pr_-_Brahma_Samhita_Recitations_Tune-04_-_With_Tanpura.mp3'
            }
        ],
        author: 'Lord Brahma',
        tags: ['Isvara Parama Krsna', 'Brahma Samhita', 'Sri Brahma Samhita', 'Lord Brahma', 'Stotram', 'Prayers'],
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-amarjivana',
        title: 'ଆମାର ଜୀବନ (Amar Jīvana)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏକ ଅତି ବିନମ୍ର ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_AMARJIVANA_STRUCTURED,
        author: 'Bhaktivinoda Thakura'
    },
    {
        id: 'song-amijamunapuline',
        title: 'ଆମି ଯମୁନା ପୁଲିନେ (Āmi Jamunā Puline)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_AMIJAMUNAPULINE_STRUCTURED,
        author: 'Bhaktivinoda Thakura'
    },
    {
        id: 'song-anadikaramaphale',
        title: 'ଅନାଦି କରମ ଫଳେ (Anādi Karama Phale)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_ANADIKARAMAPHALE_STRUCTURED,
        author: 'Bhaktivinoda Thakura'
    },
    {
        id: 'song-aparadhaphalemama',
        title: 'ଅପରାଧ ଫଳେ ମମ (Aparādha Phale Mama)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_APARADHAPHALEMAMA_STRUCTURED,
        author: 'Bhaktivinoda Thakura'
    },
    {
        id: 'song-edustahrdayekama',
        title: 'ଏ ଦୁଷ୍ଟ ହୃଦୟେ କାମ (E Dusta Hrdaye Kama)',
        title_odia: 'ଏ ଦୁଷ୍ଟ ହୃଦୟେ କାମ',
        title_english: 'E Dusta Hrdaye Kama',
        category: 'Songs',
        type: 'html',
        description: 'ଭଗବାନ ନୃସିଂହଦେବଙ୍କୁ ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏକ ଅତି କରୁଣ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_EDUSTAHRDAYEKAMA_STRUCTURED,
        author: 'Bhaktivinoda Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-ekdinsantipure',
        title: 'ଏକ ଦିନ ଶାନ୍ତିପୁରେ (Ek Din Santipure)',
        title_odia: 'ଏକ ଦିନ ଶାନ୍ତିପୁରେ',
        title_english: 'Ek Din Santipure',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ଶାନ୍ତିପୁର ଯାତ୍ରା ଓ ଶାଗ ଆସ୍ୱାଦନର ଏକ ସୁନ୍ଦର ବର୍ଣ୍ଣନା |',
        structuredContent: (Songs as any).SONG_EKDINSANTIPURE_STRUCTURED,
        author: 'Bhaktivinoda Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-harinamatuaanekswarupa',
        title: 'ହରିନାମ ତୁୱା ଅନେକ ସ୍ୱରୂପ (Harinama Tuwa Anek Swarupa)',
        title_odia: 'ହରିନାମ ତୁୱା ଅନେକ ସ୍ୱରୂପ',
        title_english: 'Harinama Tuwa Anek Swarupa',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ପ୍ରଣୀତ ଶ୍ରୀ ନାମ-ମହିମା ଗୀତ |',
        structuredContent: (Songs as any).SONG_HARINAMATUAANEKSWARUPA_STRUCTURED,
        author: 'Bhaktivinoda Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-tuwapadeeminotimor',
        title: 'ତୁୱା ପଦେ ଏ ମିନତି ମୋର (Tuwa Pade E Minoti Mor)',
        title_odia: 'ତୁୱା ପଦେ ଏ ମିନତି ମୋର',
        title_english: 'Tuwa Pade E Minoti Mor',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏକ ଅତି ବିନମ୍ର ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_TUWAPADEEMINOTIMOR_STRUCTURED,
        author: 'Bhaktivinoda Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-satakotigopimadhabamana',
        title: 'ଶତ କୋଟି ଗୋପୀ ମାଧବ ମନ (Sata Koti Gopi Madhaba Mana)',
        title_odia: 'ଶତ କୋଟି ଗୋପୀ ମାଧବ ମନ',
        title_english: 'Sata Koti Gopi Madhaba Mana',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀରାଧା-ମାଧବଙ୍କ ଦିବ୍ୟ ପ୍ରେମ ଓ ରାସଲୀଳାର ଏକ ଅତି ମନୋରମ ବର୍ଣ୍ଣନା |',
        structuredContent: (Songs as any).SONG_SATAKOTIGOPIMADHABAMANA_STRUCTURED,
        author: 'Bhaktivinoda Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-atmanivedanatuwapade',
        title: 'ଆତ୍ମନିବେଦନ ତୁୟା ପଦେ କରି (Atma Nivedana Tuwa Pade)',
        title_odia: 'ଆତ୍ମନିବେଦନ ତୁୟା ପଦେ କରି',
        title_english: 'Atma Nivedana Tuwa Pade',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_ATMANIVEDANATUWAPADE_STRUCTURED,
        author: 'Bhaktivinoda Thakura',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-tumisarveswaresvaravrajendrakumar',
        title: 'ତୁମି ସର୍ବେଶ୍ଵରେଶ୍ଵର (Tumi Sarveswareswara)',
        title_odia: 'ତୁମି ସର୍ବେଶ୍ୱରେଶ୍ବର ବ୍ରଜେନ୍ଦ୍ର କୁମାର',
        title_english: 'Tumi Sarveswareswara Vrajendra Kumar',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_TUMISARVESWARESVARAVRAJENDRAKUMAR_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'DOYALNITAICAITANYA',
        title: 'ଦୟାଲ ନିତାଇ ଚୈତନ୍ୟ (Doyāl Nitāi Caitanya)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_DOYALNITAICAITANYA_STRUCTURED,
        author: 'Bhaktivinoda Thakura'
    },
    {
        id: 'song-durlabhamanavajanma',
        title: 'ଦୁର୍ଲଭ ମାନବ ଜନ୍ମ (Durlabha Mānava Janma)',
        category: 'Songs',
        type: 'html',
        structuredContent: (Songs as any).SONG_DURLABHAMANAVAJANMA_STRUCTURED,
        author: 'Bhaktivinoda Thakura'
    },
    {
        id: 'song-vidyaravilase',
        title: 'ଵିଦ୍ୟାର ଵିଲାସେ (Vidyara Vilase)',
        title_odia: 'ଵିଦ୍ୟାର ଵିଲାସେ',
        title_english: 'Vidyara Vilase',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_VIDYARAVILASE_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: ['Pranama'],
        structuredContent: (Songs as any).SONG_OHEVAISNAVATHAKURA_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
        structuredContent: (Songs as any).SONG_NITAINAMHATE_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
        structuredContent: (Songs as any).SONG_NARADAMUNI_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
        structuredContent: (Songs as any).SONG_NADIYAGODRUME_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
        structuredContent: (Songs as any).SONG_YASOMATINANDANA_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
        structuredContent: (Songs as any).SONG_VIBHAVARISESA_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
        structuredContent: (Songs as any).SONG_UDILOARUNA_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
        structuredContent: (Songs as any).SONG_SUDDHABHAKATACARANARENU_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
        structuredContent: (Songs as any).SONG_SRIKRSNACAITANYAPRABHUJIVE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-sarvasvatomarcarene',
        title: 'ସର୍ବସ୍ବ ତୋମାର (Sarvasva Tomar Carane)',
        title_odia: 'ସର୍ବସ୍ବ ତୋମାର, ଚରଣେ',
        title_english: 'Sarvasva Tomar Carane',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_SARVASVATOMARCARENE_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_PRABHUTAVAPADAYUGE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'gita-chapter-1',
        title: 'ଅଧ୍ୟାୟ ୧ – ଅର୍ଜୁନବିଷାଦଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧ – ଅର୍ଜୁନବିଷାଦଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ଅର୍ଜୁନବିଷାଦଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_1_STRUCTURED
    },
    {
        id: 'gita-chapter-2',
        title: 'ଅଧ୍ୟାୟ ୨ – ସାଂଖ୍ୟଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୨ – ସାଂଖ୍ୟଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ସାଂଖ୍ୟଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_2_STRUCTURED
    },
    {
        id: 'gita-chapter-3',
        title: 'ଅଧ୍ୟାୟ ୩ - କର୍ମଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୩ - କର୍ମଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(କର୍ମଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_3_STRUCTURED
    },
    {
        id: 'gita-chapter-4',
        title: 'ଅଧ୍ୟାୟ ୪ - ଦିବ୍ୟଜ୍ଞାନଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୪ - ଦିବ୍ୟଜ୍ଞାନଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ଦିବ୍ୟଜ୍ଞାନଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_4_STRUCTURED
    },
    {
        id: 'gita-chapter-5',
        title: 'ଅଧ୍ୟାୟ ୫ - କର୍ମଯୋଗ (କୃଷ୍ଣଚେତନାରେ କର୍ମ)',
        title_odia: 'ଅଧ୍ୟାୟ ୫ - କର୍ମଯୋଗ (କୃଷ୍ଣଚେତନାରେ କର୍ମ)',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(କୃଷ୍ଣଚେତନାରେ କର୍ମ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_5_STRUCTURED
    },
    {
        id: 'gita-chapter-6',
        title: 'ଅଧ୍ୟାୟ ୬ - ଧ୍ୟାନଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୬ - ଧ୍ୟାନଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ଧ୍ୟାନଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_6_STRUCTURED
    },
    {
        id: 'gita-chapter-7',
        title: 'ଅଧ୍ୟାୟ ୭ - ଜ୍ଞାନବିଜ୍ଞାନଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୭ - ଜ୍ଞାନବିଜ୍ଞାନଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ଜ୍ଞାନବିଜ୍ଞାନଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_7_STRUCTURED
    },
    {
        id: 'gita-chapter-8',
        title: 'ଅଧ୍ୟାୟ ୮ - ଅକ୍ଷରବ୍ରହ୍ମଯୋଗ',
        title_odia: 'ଅକ୍ଷରବ୍ରହ୍ମଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ଅକ୍ଷରବ୍ରହ୍ମଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_8_STRUCTURED
    },
    {
        id: 'gita-chapter-9',
        title: 'ଅଧ୍ୟାୟ ୯ - ରାଜବିଦ୍ୟା-ରାଜଗୁହ୍ୟଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୯ - ରାଜବିଦ୍ୟା-ରାଜଗୁହ୍ୟଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ରାଜବିଦ୍ୟା-ରାଜଗୁହ୍ୟଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_9_STRUCTURED
    },
    {
        id: 'gita-chapter-10',
        title: 'ଅଧ୍ୟାୟ ୧୦ - ବିଭୂତି ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୦ - ବିଭୂତି ଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ବିଭୂତି ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_10_STRUCTURED
    },
    {
        id: 'gita-chapter-11',
        title: 'ଅଧ୍ୟାୟ ୧୧ - ବିଶ୍ୱରୂପ ଦର୍ଶନ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୧ - ବିଶ୍ୱରୂପ ଦର୍ଶନ ଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ବିଶ୍ୱରୂପ ଦର୍ଶନ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_11_STRUCTURED
    },
    {
        id: 'gita-chapter-12',
        title: 'ଅଧ୍ୟାୟ ୧୨ - ଭକ୍ତି ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୨ - ଭକ୍ତି ଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ଭକ୍ତି ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_12_STRUCTURED
    },
    {
        id: 'gita-chapter-13',
        title: 'ଅଧ୍ୟାୟ ୧୩- କ୍ଷେତ୍ର-କ୍ଷେତ୍ରଜ୍ଞ ବିଭାଗ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୩- କ୍ଷେତ୍ର-କ୍ଷେତ୍ରଜ୍ଞ ବିଭାଗ ଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(କ୍ଷେତ୍ର-କ୍ଷେତ୍ରଜ୍ଞ ବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_13_STRUCTURED
    },
    {
        id: 'gita-chapter-14',
        title: 'ଅଧ୍ୟାୟ ୧୪-ଗୁଣତ୍ରୟ ବିଭାଗ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୪-ଗୁଣତ୍ରୟ ବିଭାଗ ଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ଗୁଣତ୍ରୟ ବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_14_STRUCTURED
    },
    {
        id: 'gita-chapter-15',
        title: 'ଅଧ୍ୟାୟ ୧୫-ପୁରୁଷୋତ୍ତମ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୫-ପୁରୁଷୋତ୍ତମ ଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ପୁରୁଷୋତ୍ତମ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_15_STRUCTURED
    },
    {
        id: 'gita-chapter-16',
        title: 'ଅଧ୍ୟାୟ ୧୬-ଦୈବାସୁର ସମ୍ପଦ ବିଭାଗ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୬-ଦୈବାସୁର ସମ୍ପଦ ବିଭାଗ ଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ଦୈବାସୁର ସମ୍ପଦ ବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_16_STRUCTURED
    },
    {
        id: 'gita-chapter-17',
        title: 'ଅଧ୍ୟାୟ ୧୭-ଶ୍ରଦ୍ଧାତ୍ରୟ ବିଭାଗ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୭-ଶ୍ରଦ୍ଧାତ୍ରୟ ବିଭାଗ ଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
        type: 'html',
        description: '(ଶ୍ରଦ୍ଧାତ୍ରୟ ବିଭାଗ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_17_STRUCTURED
    },
    {
        id: 'gita-chapter-18',
        title: 'ଅଧ୍ୟାୟ ୧୮- ମୋକ୍ଷ ସନ୍ନ୍ୟାସ ଯୋଗ',
        title_odia: 'ଅଧ୍ୟାୟ ୧୮- ମୋକ୍ଷ ସନ୍ନ୍ୟାସ ଯୋଗ',
        category: 'Gita',
        author: 'Vyasadeva',
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_GOPINATPART2_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_GOPINATPART3_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: ['Pranama'],
        structuredContent: (Songs as any).SONG_GURUDEVAKRPABINDU_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
        structuredContent: (Songs as any).SONG_GURUDEVABOROKRPAKORI_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_KABESRICHAITANYAMORE_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_KIJANIKIBALE_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_OREMANABHALONAHILAGE_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_MAMAMANAMANDIRE_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_MANASADEHOGEHOYOKICHU_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_KABEGOURABANE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-dekhitedekhite',
        title: 'ଦେଖିତେ ଦେଖିତେ (Dekhite Dekhite)',
        title_odia: 'ଦେଖିତେ ଦେଖିତେ',
        title_english: 'Dekhite Dekhite',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_DEKHITEDEKHITE_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
        tags: [],
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
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
        id: 'song-gopinatmamanivedana',
        title: 'ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନ (Gopinath Part 1)',
        title_odia: 'ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନ',
        title_english: 'Gopinath Part 1 (Mama Nivedana Suno)',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_GOPINATMAMANIVEDANA_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_BHAJAREBHAJAREAMAR_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_EKHANBUJHINUPRABHU_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_EMONADURMATI_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_GAYGORAMADHURA_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_GAYGORACAND_STRUCTURED,
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
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_KRPAKOROVAISNAVA_STRUCTURED,
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
        id: 'song-jjsrkrsnctnntnnd',
        title: 'ଜୟ ଜୟ ଶ୍ରୀ-କୃଷ୍ଣ-ଚୈତନ୍ୟ ନିତ୍ୟାନନ୍ଦ (Jaya Jaya Sri Krsna Caitanya)',
        title_odia: 'ଜୟ ଜୟ ଶ୍ରୀ-କୃଷ୍ଣ-ଚୈତନ୍ୟ ନିତ୍ୟାନନ୍ଦ',
        title_english: 'Jaya Jaya Sri Krsna Caitanya Nityananda',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: {
            verses: [
                {
                    id: 1,
                    lyric: "ଜୟ ଜୟ ଶ୍ରୀ କୃଷ୍ଣ ଚୈତନ୍ୟ ନିତ୍ୟାନନ୍ଦ;\nଜୟାଦ୍ୱୈତ-ଚନ୍ଦ୍ର ଜୟ ଗୌର ଭକ୍ତ ବୃନ୍ଦ ।।୧।।",
                    translation: "ହେ ପ୍ରଭୁ ଶ୍ରୀ କୃଷ୍ଣ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ, ଆପଣଙ୍କର ଜୟ ହେଉ! ହେ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ, ଆପଣଙ୍କର ଜୟ ହେଉ! ଶ୍ରୀ ଅଦ୍ୱୈତ ଆଚାର୍ଯ୍ୟ ଏବଂ ସମସ୍ତ ଗୌର-ଭକ୍ତବୃନ୍ଦଙ୍କର ଜୟ ହେଉ!",
                },
                {
                    id: 2,
                    lyric: "କୃପା କରି' ସବେ ମିଲି ସକଳ କରୁଣା\nଅଧମ ପତିତ ଜନେ ନା କରିହ ବଞ୍ଚନା ।।୨।।",
                    translation: "ହେ ପ୍ରଭୁମାନେ! ଆପଣ ସମସ୍ତେ ମିଳିତ ହୋଇ ମୋ' ଉପରେ କରୁଣା କରନ୍ତୁ। ମୁଁ ଅତି ଅଧମ ଓ ପତିତ, ଦୟାକରି ମୋତେ ଆପଣଙ୍କ କୃପାରୁ ବଞ୍ଚିତ କରନ୍ତୁ ନାହିଁ।",
                }
            ]
        },
        published: true,
        status: 'COMPLETED',
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Narottam_Das_Thakur/Jaya_Jaya_Sri_Krsna_Caitanya_Nityananda/Jaya_Jaya_Sri_Krsna_Caitanya_Nityananda_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3',
        vocalist: 'HG Jai Sachinandana Prabhu'
    },
    {
        id: 'song-gurvastakam',
        title: 'ସଂସାର ଦାବାନଳ (Sri Gurvastakam)',
        title_odia: 'ସଂସାର ଦାବାନଳ',
        title_english: 'Samsara Davanala',
        category: 'Songs',
        type: 'html',
        author: 'Visvanatha Cakravarti Thakura',
        tags: ['Temple', 'Astakam'],
        structuredContent: (Songs as any).SONG_GURVASTAKAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
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
        id: 'song-abhidheyadhidevapranama',
        title: 'ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ (Abhidheyadhideva Pranama)',
        title_odia: 'ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ',
        title_english: 'Abhidheyadhideva Pranama',
        category: 'Songs',
        type: 'html',
        author: 'Sanatana Goswami',
        structuredContent: {
            verses: [
                {
                    id: 1,
                    lyric: "ଦୀବ୍ୟଦ୍-ବୃନ୍ଦାରଣ୍ୟ-କଳ୍ପ-ଦ୍ରୁମାଧଃ\nଶ୍ରୀମଦ୍-ରତ୍ନାଗାର-ସିଂହାସନ-ସ୍ଥୌ ।\nଶ୍ରୀମଦ୍-ରାଧା-ଶ୍ରୀଲ-ଗୋବିନ୍ଦ-ଦେବୌ\nପ୍ରେଷ୍ଠାଳୀଭିଃ ସେବ୍ୟମାନୌ ସ୍ମରାମି ॥୧॥",
                    translation: "ପରମ ଦିବ୍ୟ ଶ୍ରୀବୃନ୍ଦାବନ ଧାମରେ, ଏକ କଳ୍ପବୃକ୍ଷ ତଳେ ଅବସ୍ଥିତ ରତ୍ନ-ମନ୍ଦିରର ଶୋଭାମୟ ସିଂହାସନ ଉପରେ ଶ୍ରୀଶ୍ରୀ ରାଧା-ଗୋବିନ୍ଦଦେବ ବିରାଜମାନ କରିଛନ୍ତି। ସେମାନଙ୍କର ଅତି ପ୍ରିୟ ସଖୀଗଣ ସେମାନଙ୍କର ନିରନ୍ତର ପ୍ରେମମୟୀ ସେବା କରୁଛନ୍ତି। ମୁଁ ସେହି ଶ୍ରୀଶ୍ରୀ ରାଧା-ଗୋବିନ୍ଦଦେବଙ୍କ ଚରଣାରବିନ୍ଦରେ ଭକ୍ତିପୂର୍ବକ ପ୍ରଣାମ ଜଣାଇ ସ୍ମରଣ କରୁଛି।",
                    wordMeanings: [
                        { word: "ଦୀବ୍ୟତ୍", meaning: "ଦିବ୍ୟ, ତେଜୋମୟ ଓ ସୁଶୋଭିତ" },
                        { word: "ବୃନ୍ଦାରଣ୍ୟ", meaning: "ଶ୍ରୀବୃନ୍ଦାବନ ଧାମରେ" },
                        { word: "କଳ୍ପଦ୍ରୁମ-ଅଧଃ", meaning: "କଳ୍ପବୃକ୍ଷ ତଳେ" },
                        { word: "ଶ୍ରୀମଦ୍-ରତ୍ନାଗାର", meaning: "ଶୋଭାମୟ ରତ୍ନ-ମନ୍ଦିର ମଧ୍ୟରେ" },
                        { word: "ସିଂହାସନ-ସ୍ଥୌ", meaning: "ଦିବ୍ୟ ସିଂହାସନ ଉପରେ ବିରାଜମାନ (ଉଭୟଙ୍କୁ)" },
                        { word: "ଶ୍ରୀମଦ୍-ରାଧା-ଶ୍ରୀଲ-ଗୋବିନ୍ଦ-ଦେବୌ", meaning: "ଶ୍ରୀମତୀ ରାଧାରାଣୀ ଏବଂ ଶ୍ରୀଲ ଗୋବିନ୍ଦଦେବଙ୍କୁ" },
                        { word: "ପ୍ରେଷ୍ଠାଳୀଭିଃ", meaning: "ନିଜର ଅତି ପ୍ରିୟ ସଖୀଗଣଙ୍କ (ଲଳିତା, ବିଶାଖା ଆଦି) ଦ୍ୱାରା" },
                        { word: "ସେବ୍ୟମାନୌ", meaning: "ନିରନ୍ତର ସେବିତ ହେଉଥିବା (ସେହି ଦୁଇଜଣଙ୍କୁ)" },
                        { word: "ସ୍ମରାମି", meaning: "ମୁଁ (ଭକ୍ତିପୂର୍ବକ) ସ୍ମରଣ କରୁଛି" }
                    ]
                }
            ]
        },
        published: true,
        verified: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-adoreadoreyeall',
        title: 'ଏଡୋର୍ ଏଡୋର୍ ୟି ଅଲ୍ (Adore Adore Ye All)',
        title_odia: 'ଏଡୋର୍ ଏଡୋର୍ ୟି ଅଲ୍',
        title_english: 'Adore Adore Ye All',
        category: 'Songs',
        type: 'html',
        author: 'Srila Prabhupada',
        description: 'ଶ୍ରୀଳ ପ୍ରଭୁପାଦଙ୍କ ଦ୍ୱାରା ୧୯୩୫ ମସିହାରେ ନିଜ ଗୁରୁଦେବ ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ଠାକୁରଙ୍କ ବ୍ୟାସପୂଜା ଉପଲକ୍ଷେ ରଚିତ ଅମୃତମୟ କବିତା ।',
        audioUrl: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sankarshan%20Das%20Adhikari%20Adore%20Adore%20Ye%20All.mp3',
        vocalist: 'HG Sankarshan Das Adhikari',
        audioVersions: [
            { label: 'HG Sankarshan Das Adhikari', url: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sankarshan%20Das%20Adhikari%20Adore%20Adore%20Ye%20All.mp3' },
            { label: 'Murari Prabhu (Vaishnavas)', url: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Murari%20Adore%20Adore%20Ye%20All.mp3' },
            { label: 'Vaishnavas (01)', url: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Adore%20Adore%20Ye%20All.mp3' },
            { label: 'Gayatri Dasa (02)', url: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Adore%20Ye%20All%20with%20Gayatri%20Dasa.mp3' },
            { label: 'HG Sukha Sagari Mataji (03)', url: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Adore%20Adore%20Ye%20All%20By%20HG%20Sukha%20Sagari%20Mataji%20On%20June%2028th%202022.mp3' }
        ],
        structuredContent: {
            verses: [
                {
                    id: 1,
                    lyric: "ଏଡୋର୍, ଏଡୋର୍ ୟି ଅଲ୍ ଦ ହ୍ୟାପି ଡେ\nବ୍ଲେସ୍‌ଡ୍ ଦ୍ୟାନ୍ ହେଭେନ୍ ସ୍ୱିଟର୍ ଦ୍ୟାନ୍ ମେ ।\nହ୍ୱେନ୍ ହି ଆପିୟର୍ଡ୍ ଆଟ୍ ପୁରୀ ଦ ହୋଲି ପ୍ଲେସ୍,\nମାଇ ଲର୍ଡ୍ ଏଣ୍ଡ୍ ମାଷ୍ଟର୍ ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୧॥",
                    translation: "ହେ ସମସ୍ତ ଜନଗଣ! ସେହି ପରମ ମଙ୍ଗଳମୟ ଓ ଆନନ୍ଦମୟ ଦିବସକୁ ସାଦରେ ବନ୍ଦନା କର, ଯାହା ସ୍ୱର୍ଗଠାରୁ ମଧ୍ୟ ଅଧିକ ଧନ୍ୟ ଏବଂ ବସନ୍ତ ଋତୁଠାରୁ ଅଧିକ ମଧୁର। ଯେଉଁ ପବିତ୍ର ଦିନରେ ଶ୍ରୀପୁରୁଷୋତ୍ତମ କ୍ଷେତ୍ର ପୁରୀ ଧାମରେ ମୋର ପରମ ପ୍ରଭୁ ଓ ଗୁରୁଦେବ ‘ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍’ (ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ଠାକୁର) ଆବିର୍ଭୂତ ହୋଇଥିଲେ।",
                    wordMeanings: [
                        { word: "ଏଡୋର୍", meaning: "ସାଦରେ ବନ୍ଦନା ଓ ପୂଜା କର" },
                        { word: "ୟି ଅଲ୍", meaning: "ତୁମେ ସମସ୍ତେ" },
                        { word: "ହ୍ୟାପି ଡେ", meaning: "ପରମ ଆନନ୍ଦମୟ ଦିବସ (ଆବିର୍ଭାବ ତିଥି)" },
                        { word: "ବ୍ଲେସ୍‌ଡ୍", meaning: "ସ୍ୱର୍ଗଠାରୁ ମଧ୍ୟ ଅଧିକ ଧନ୍ୟ ଓ ପବିତ୍ର" },
                        { word: "ସ୍ୱିଟର୍", meaning: "ଅତି ମଧୁର" },
                        { word: "ପୁରୀ", meaning: "ପବିତ୍ର ଶ୍ରୀପୁରୁଷୋତ୍ତମ କ୍ଷେତ୍ର ପୁରୀ ଧାମ" },
                        { word: "ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍", meaning: "ଦିବ୍ୟ କୃପାମୂର୍ତ୍ତି ଶ୍ରୀଳ ଗୁରୁଦେବ" }
                    ]
                },
                {
                    id: 2,
                    lyric: "ଓଃ! ମାଇ ମାଷ୍ଟର୍ ଦ ଇଭାଞ୍ଜେଲିକ୍ ଏଞ୍ଜେଲ୍ ।\nଗିଭ୍ ଅସ୍ ଦାଇ ଲାଇଟ୍ ଲାଇଟ୍ ଅପ୍ ଦାଇ କ୍ୟାଣ୍ଡଲ୍ ।\nଷ୍ଟ୍ରଗଲ୍ ଫର୍ ଏଗ୍‌ଜିଷ୍ଟେନ୍ସ ଏ ହ୍ୟୁମାନ୍ ରେସ୍ ।\nଦ ଓନ୍‌ଲି ହୋପ୍ ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୨॥",
                    translation: "ହେ ମୋର ଗୁରୁଦେବ! ଆପଣ ଭଗବାନଙ୍କ ଦିବ୍ୟ ସନ୍ଦେଶର ବାହକ ଦେବଦୂତ ସଦୃଶ। ଆପଣଙ୍କ ଦିବ୍ୟ ଜ୍ଞାନର ଦୀପ ପ୍ରଜ୍ୱଳିତ କରି ଆମକୁ ଆଲୋକିତ କରନ୍ତୁ। ଜୀବନ ସଂଘର୍ଷରେ ଛଟପଟ ହେଉଥିବା ଏହି ମାନବ ସମାଜ ପାଇଁ କେବଳ ‘ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍’ (ଆପଣଙ୍କର ଦିବ୍ୟ କୃପା) ହିଁ ଏକମାତ୍ର ଆଶା ଓ ଭରସା।",
                    wordMeanings: [
                        { word: "ମାଇ ମାଷ୍ଟର୍", meaning: "ହେ ମୋର ପରମ ପ୍ରଭୁ ଓ ଗୁରୁଦେବ" },
                        { word: "ଇଭାଞ୍ଜେଲିକ୍ ଏଞ୍ଜେଲ୍", meaning: "ଭଗବଦ୍-ସନ୍ଦେଶ ବାହକ ଦିବ୍ୟ ଦେବଦୂତ" },
                        { word: "ଦାଇ ଲାଇଟ୍", meaning: "ଆପଣଙ୍କ ଦିବ୍ୟ ଜ୍ଞାନର ଆଲୋକ" },
                        { word: "ଲାଇଟ୍ ଅପ୍", meaning: "ପ୍ରଜ୍ୱଳିତ କରନ୍ତୁ" },
                        { word: "ଷ୍ଟ୍ରଗଲ୍ ଫର୍ ଏଗ୍‌ଜିଷ୍ଟେନ୍ସ", meaning: "ଅସ୍ତିତ୍ୱ ପାଇଁ ସଂଘର୍ଷରତ ମାନବ ସମାଜ" },
                        { word: "ଦ ଓନ୍‌ଲି ହୋପ୍", meaning: "ଏକମାତ୍ର ଆଶାର ଆଲୋକ" }
                    ]
                },
                {
                    id: 3,
                    lyric: "ମିସ୍‌ଲେଡ୍ ଉଇ ଆର୍ ଅଲ୍ ଗୋଇଙ୍ଗ୍ ଏଷ୍ଟ୍ରେ,\nସେଭ୍ ଅସ୍ ଲର୍ଡ୍ ଆୱାର୍ ଫର୍ଭେଣ୍ଟ୍ ପ୍ରେ ।\nୱାଣ୍ଡର୍ ଦାଇ ୱେଜ୍ ଟୁ ଟର୍ଣ୍ଣ ଆୱାର୍ ଫେସ୍\nଏଡୋର୍ ଦାଇ ଫିଟ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୩॥",
                    translation: "ଆମ୍ଭେମାନେ ମାୟା ଦ୍ୱାରା ପ୍ରତାରିତ ହୋଇ କୁପଥରେ ଭ୍ରମଣ କରୁଛୁ। ହେ ପ୍ରଭୁ! ଆମର ଏହି ଆକୁଳ ପ୍ରାର୍ଥନା ଶୁଣି ଆମକୁ ରକ୍ଷା କରନ୍ତୁ। ଆପଣଙ୍କର ଅଦ୍ଭୁତ କୃପାମୟ ଲୀଳା ଆମର ମୁଖକୁ ପରମେଶ୍ୱରଙ୍କ ଆଡ଼କୁ ଫେରାଇଦିଏ। ହେ ଦିବ୍ୟ କୃପାମୟ ପ୍ରଭୁ, ଆମ୍ଭେମାନେ ଆପଣଙ୍କ ଶ୍ରୀଚରଣ କମଳରେ ପ୍ରଣତି ଜଣାଉଛୁ।",
                    wordMeanings: [
                        { word: "ମିସ୍‌ଲେଡ୍", meaning: "ମାୟା ଦ୍ୱାରା ବିପଥଗାମୀ ଓ ଭ୍ରାନ୍ତ" },
                        { word: "ଗୋଇଙ୍ଗ୍ ଏଷ୍ଟ୍ରେ", meaning: "କୁମାର୍ଗରେ ଭଟକୁଥିବା" },
                        { word: "ସେଭ୍ ଅସ୍", meaning: "ଆମକୁ ଉଦ୍ଧାର କରନ୍ତୁ" },
                        { word: "ଫର୍ଭେଣ୍ଟ୍ ପ୍ରେ", meaning: "ଆକୁଳ ପ୍ରାର୍ଥନା" },
                        { word: "ୱାଣ୍ଡର୍ ଦାଇ ୱେଜ୍", meaning: "ଆପଣଙ୍କ ଅଲୌକିକ କୃପାମୟ ଉପାୟ" },
                        { word: "ଟର୍ଣ୍ଣ ଆୱାର୍ ଫେସ୍", meaning: "ଆମ ମନକୁ ଭଗବାନଙ୍କ ଆଡ଼କୁ ଫେରାଇବା" },
                        { word: "ଏଡୋର୍ ଦାଇ ଫିଟ୍", meaning: "ଆପଣଙ୍କ ଶ୍ରୀଚରଣରେ ପ୍ରଣାମ" }
                    ]
                },
                {
                    id: 4,
                    lyric: "ଫରଗଟନ୍ କୃଷ୍ଣ ଉଇ ଫଲେନ୍ ସୋଲ୍ସ,\nପେଇଙ୍ଗ୍ ମୋଷ୍ଟ୍ ହେଭି ଦ ଇଲ୍ୟୁଜନ୍ସ ଟୋଲ୍ ।\nଡାର୍କନେସ୍ ଏରାଉଣ୍ଡ୍ ଅଲ୍ ଅନଟ୍ରେସ୍ ।\nଦ ଓନ୍‌ଲି ହୋପ୍ ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୪॥",
                    translation: "ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ଭୁଲିଯାଇ ଆମ୍ଭେ ପତିତ ଜୀବମାନେ ମାୟାର ଭୟଙ୍କର ଶାସ୍ତି ଭୋଗୁଛୁ। ଚାରିଆଡ଼େ ଅଜ୍ଞାନତାର ଘୋର ଅନ୍ଧକାର ଏବଂ କୌଣସି ଉଦ୍ଧାରର ଉପାୟ ଦେଖାଯାଉନାହିଁ। ଏହି ଘୋର ଅବସ୍ଥାରେ କେବଳ ‘ହିଜ୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍’ (ଶ୍ରୀଳ ଗୁରୁଦେବଙ୍କ ଦିବ୍ୟ କୃପା) ହିଁ ଏକମାତ୍ର ଆଶ୍ରୟ।",
                    wordMeanings: [
                        { word: "ଫରଗଟନ୍ କୃଷ୍ଣ", meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ଭୁଲିଯାଇଥିବା" },
                        { word: "ଫଲେନ୍ ସୋଲ୍ସ", meaning: "ପତିତ ଜୀବାତ୍ମାଗଣ" },
                        { word: "ଇଲ୍ୟୁଜନ୍ସ ଟୋଲ୍", meaning: "ମାୟାର ଭାରୀ ଶୁଳ୍କ ବା ଯାତନା" },
                        { word: "ଡାର୍କନେସ୍ ଏରାଉଣ୍ଡ୍", meaning: "ଚତୁର୍ଦ୍ଦିଗରେ ଘନ ଅନ୍ଧକାର" },
                        { word: "ଅନଟ୍ରେସ୍", meaning: "ଉଦ୍ଧାରର ବାଟ ନଦିଶିବା" }
                    ]
                },
                {
                    id: 5,
                    lyric: "ମେସେଜ୍ ଅଫ୍ ସର୍ଭିସ୍ ଦାଉ ହାଷ୍ଟ୍ ବ୍ରଟ୍,\nଏ ହେଲ୍‌ଥ୍‌ଫୁଲ୍ ଲାଇଫ୍ ଏଜ୍ ଚୈତନ୍ୟ ରଟ୍ ।\nଅନ୍‌ନୋନ୍ ଟୁ ଅଲ୍ ଇଟ୍ସ ଫୁଲ୍ ଅଫ୍ ବ୍ରେସ୍ ।\nଦ୍ୟାଟ୍ସ ୟୋର୍ ଗିଫ୍ଟ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୫॥",
                    translation: "ଆପଣ ଭଗବତ୍-ଭକ୍ତି ଓ ସେବାର ପବିତ୍ର ସନ୍ଦେଶ ଆଣିଛନ୍ତି, ଯାହା ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ଦ୍ୱାରା ପ୍ରଦତ୍ତ ଏକ ପୂର୍ଣ୍ଣ ଆଧ୍ୟାତ୍ମିକ ସୁସ୍ଥ ଜୀବନଶୈଳୀ। ସମସ୍ତଙ୍କ ପାଇଁ ଅଜ୍ଞାତ ଥିବା ଏହି ନବଜୀବନ ଅପାର ଆନନ୍ଦ ଓ ଶକ୍ତିରେ ପୂର୍ଣ୍ଣ, ଏବଂ ଏହା ଆପଣଙ୍କର ପରମ କୃପାମୟ ଦାନ।",
                    wordMeanings: [
                        { word: "ମେସେଜ୍ ଅଫ୍ ସର୍ଭିସ୍", meaning: "ଭଗବତ୍-ସେବାର ଦିବ୍ୟ ସନ୍ଦେଶ" },
                        { word: "ହେଲ୍‌ଥ୍‌ଫୁଲ୍ ଲାଇଫ୍", meaning: "ଆଧ୍ୟାତ୍ମିକ ନିରୋଗ ଜୀବନ" },
                        { word: "ଚୈତନ୍ୟ ରଟ୍", meaning: "ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ଦ୍ୱାରା ପ୍ରଦତ୍ତ" },
                        { word: "ଫୁଲ୍ ଅଫ୍ ବ୍ରେସ୍", meaning: "ଦିବ୍ୟ ଶକ୍ତି ଓ ଉତ୍ସାହରେ ପରିପୂର୍ଣ୍ଣ" },
                        { word: "ଦ୍ୟାଟ୍ସ ୟୋର୍ ଗିଫ୍ଟ୍", meaning: "ଏହା ଆପଣଙ୍କ ପରମ ଉପହାର" }
                    ]
                },
                {
                    id: 6,
                    lyric: "ଏବ୍‌ସୋଲ୍ୟୁଟ୍ ଇଜ୍ ସେଣ୍ଟିୟେଣ୍ଟ୍ ଦାଉ ହାଷ୍ଟ୍ ପ୍ରୁଭ୍‌ଡ୍\nଇମ୍ପର୍ସନାଲ୍ କ୍ୟାଲାମିଟି ଦାଉ ହାଷ୍ଟ୍ ମୁଭ୍‌ଡ୍ ।\nଦିସ୍ ଗିଭ୍‌ସ୍ ଅସ୍ ଏ ଲାଇଫ୍ ଏନିଉ ଏଣ୍ଡ୍ ଫ୍ରେଶ୍ ।\nୱର୍‌ଶିପ୍ ଦାଇ ଫିଟ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୬॥",
                    translation: "ପରମ ସତ୍ୟ ଭଗବାନ ନିରାକାର ନୁହଁନ୍ତି ବରଂ ଅନନ୍ତ ଚେତନାର ପରମ ପୁରୁଷ—ଏହା ଆପଣ ପ୍ରମାଣିତ କରିଛନ୍ତି। ନିର୍ବିଶେଷବାଦର ଘୋର ବିପତ୍ତିକୁ ଆପଣ ସମୂଳେ ଖଣ୍ଡନ କରିଛନ୍ତି। ଏହା ଆମ୍ଭମାନଙ୍କୁ ଏକ ନୂତନ ଏବଂ ପ୍ରେମମୟ ଦିବ୍ୟ ଜୀବନ ପ୍ରଦାନ କରିଛି। ହେ ଦିବ୍ୟ କୃପାମୂର୍ତ୍ତି, ଆମ୍ଭେ ଆପଣଙ୍କ ଶ୍ରୀଚରଣ କମଳକୁ ପୂଜା କରୁଛୁ।",
                    wordMeanings: [
                        { word: "ଏବ୍‌ସୋଲ୍ୟୁଟ୍ ଇଜ୍ ସେଣ୍ଟିୟେଣ୍ଟ୍", meaning: "ପରମ ସତ୍ୟ ଭଗବାନ ହେଉଛନ୍ତି ଚେତନମୟ ବ୍ୟକ୍ତି (ନିରାକାର ନୁହଁନ୍ତି)" },
                        { word: "ଇମ୍ପର୍ସନାଲ୍ କ୍ୟାଲାମିଟି", meaning: "ନିର୍ବିଶେଷବାଦର ବିପତ୍ତି ଓ ଭ୍ରାନ୍ତି" },
                        { word: "ହାଷ୍ଟ୍ ମୁଭ୍‌ଡ୍", meaning: "ଆପଣ ଦୂର କରିଦେଇଛନ୍ତି" },
                        { word: "ଏନିଉ ଏଣ୍ଡ୍ ଫ୍ରେଶ୍", meaning: "ନୂତନ ଓ ପବିତ୍ର ଜୀବନ" },
                        { word: "ୱର୍‌ଶିପ୍ ଦାଇ ଫିଟ୍", meaning: "ଆପଣଙ୍କ ଶ୍ରୀଚରଣ ପୂଜନ କରୁଛି" }
                    ]
                },
                {
                    id: 7,
                    lyric: "ହାଡ୍ ୟୁ ନଟ୍ କମ୍ ହୁ ହ୍ୟାଡ୍ ଟୋଲ୍ଡ୍\nଦ ମେସେଜ୍ ଅଫ୍ କୃଷ୍ଣ ଫୋର୍ସଫୁଲ୍ ଏଣ୍ଡ୍ ବୋଲ୍ଡ୍ ।\nଦ୍ୟାଟ୍ସ ୟୋର୍ ରାଇଟ୍ ୟୁ ହ୍ୟାଭ୍ ଦ ମେସ୍\nସେଭ୍ ମି ଏ ଫଲେନ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୭॥",
                    translation: "ହେ ଗୁରୁଦେବ! ଯଦି ଆପଣ ଆବିର୍ଭୂତ ହୋଇନଥାନ୍ତେ, ତେବେ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଏହି ପରମ ସତ୍ୟ ସନ୍ଦେଶକୁ ଏତେ ନିର୍ଭୀକ ଓ ଶକ୍ତିଶାଳୀ ଭାବରେ କିଏ ପ୍ରଚାର କରିପାରିଥାନ୍ତା? ଏହା କେବଳ ଆପଣଙ୍କର ଅଧିକାର—ଆପଣ ମାୟାବାଦ ଦମନ ପାଇଁ ଜ୍ଞାନର ଗଦା ଧାରଣ କରିଛନ୍ତି। ହେ ଦିବ୍ୟ କୃପାମୟ ପ୍ରଭୁ, ମୋ ପରି ପତିତ ଅଧମକୁ କୃପାପୂର୍ବକ ରକ୍ଷା କରନ୍ତୁ।",
                    wordMeanings: [
                        { word: "ହାଡ୍ ୟୁ ନଟ୍ କମ୍", meaning: "ଯଦି ଆପଣ ଆସିନଥାନ୍ତେ" },
                        { word: "ହୁ ହ୍ୟାଡ୍ ଟୋଲ୍ଡ୍", meaning: "କିଏ କହିପାରିଥାନ୍ତା" },
                        { word: "ଫୋର୍ସଫୁଲ୍ ଏଣ୍ଡ୍ ବୋଲ୍ଡ୍", meaning: "ନିର୍ଭୟ ଏବଂ ଶକ୍ତିଶାଳୀ ଭାବରେ" },
                        { word: "ୟୁ ହ୍ୟାଭ୍ ଦ ମେସ୍", meaning: "ଆପଣ ନ୍ୟାୟ ଓ ଜ୍ଞାନର ଗଦା ଧାରଣ କରିଛନ୍ତି" },
                        { word: "ସେଭ୍ ମି ଏ ଫଲେନ୍", meaning: "ମୋ ପରି ପତିତକୁ ଉଦ୍ଧାର କରନ୍ତୁ" }
                    ]
                },
                {
                    id: 8,
                    lyric: "ଦ ଲାଇନ୍ ଅଫ୍ ସର୍ଭିସ୍ ଏଜ୍ ଡ୍ରନ୍ ବାଇ ୟୁ\nଇଜ୍ ପ୍ଲିଜିଙ୍ଗ୍ ଏଣ୍ଡ୍ ହେଲ୍‌ଥି ଲାଇକ୍ ମର୍ଣ୍ଣିଙ୍ଗ୍ ଡିଉ ।\nଦ ଓଲ୍ଡେଷ୍ଟ୍ ଅଫ୍ ଅଲ୍ ବଟ୍ ଇନ୍ ନିଉ ଡ୍ରେସ୍\nମିରାକ୍ଲ୍ ଡନ୍ ୟୋର୍ ଡିଭାଇନ୍ ଗ୍ରେସ୍ ॥୮॥",
                    translation: "ଆପଣଙ୍କ ଦ୍ୱାରା ପ୍ରଦର୍ଶିତ ଭକ୍ତି ସେବାର ମାର୍ଗ ପ୍ରଭାତର ନିର୍ମଳ ଶିଶିର ବିନ୍ଦୁ ପରି ଅତି ମନୋରମ, ଶାନ୍ତିଦାୟକ ଓ କଲ୍ୟାଣକର। ଏହି ସେବା ପଥ ଚିରନ୍ତନ ସନାତନ ହେଲେ ହେଁ, ଆପଣ ତାହାକୁ ଯୁଗୋପଯୋଗୀ ନବୀନ ବେଶରେ ସମଗ୍ର ବିଶ୍ୱରେ ପ୍ରକାଶ କରି ଏକ ଅଲୌକିକ ଚମତ୍କାର ସୃଷ୍ଟି କରିଛନ୍ତି। ହେ ଦିବ୍ୟ କୃପାମୂର୍ତ୍ତି, ଆପଣଙ୍କ ଶ୍ରୀଚରଣରେ ମୋର କୋଟି କୋଟି ପ୍ରଣାମ!",
                    wordMeanings: [
                        { word: "ଲାଇନ୍ ଅଫ୍ ସର୍ଭିସ୍", meaning: "ଭକ୍ତିମୟ ସେବାର ପଥ" },
                        { word: "ଡ୍ରନ୍ ବାଇ ୟୁ", meaning: "ଆପଣଙ୍କ ଦ୍ୱାରା ନିର୍ଦ୍ଧାରିତ" },
                        { word: "ପ୍ଲିଜିଙ୍ଗ୍ ଏଣ୍ଡ୍ ହେଲ୍‌ଥି", meaning: "ଆନନ୍ଦଦାୟକ ଓ ପରମ କଲ୍ୟାଣକାରୀ" },
                        { word: "ଲାଇକ୍ ମର୍ଣ୍ଣିଙ୍ଗ୍ ଡିଉ", meaning: "ପ୍ରଭାତର ଶୁଦ୍ଧ ଶିଶିର ବିନ୍ଦୁ ପରି" },
                        { word: "ଦ ଓଲ୍ଡେଷ୍ଟ୍ ଅଫ୍ ଅଲ୍", meaning: "ଚିରନ୍ତନ ସନାତନ ଧର୍ମ" },
                        { word: "ଇନ୍ ନିଉ ଡ୍ରେସ୍", meaning: "ଆଧୁନିକ ଯୁଗୋପଯୋଗୀ ପରିପାଟୀରେ" },
                        { word: "ମିରାକ୍ଲ୍ ଡନ୍", meaning: "ଅଲୌକିକ ଚମତ୍କାର ସମ୍ପାଦନ କଲେ" }
                    ]
                }
            ]
        },
        published: true,
        verified: true,
        status: 'COMPLETED'
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
        status: 'COMPLETED'
    },
    {
        id: 'song-hariharibiphalejanama',
        title: 'ହରି ହରି ବିଫଳେ ଜନମ (Hari Hari Biphale Janama)',
        title_odia: 'ହରି ହରି ବିଫଳେ ଜନମ',
        title_english: 'Hari Hari Biphale Janama',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: {
            verses: [
                {
                    id: 1,
                    lyric: "ହରି ହରି ବିଫଳେ ଜନମ ଗୋଁୟାଇନୁ\nମନୁଷ୍ୟ ଜନମ ପାଇୟା ରାଧା-କୃଷ୍ଣ ନା ଭଜିୟା\nଜାଣିୟା ଶୁଣିୟା ବିଷ ଖାଇନୁ ।।୧।।",
                    translation: "ହେ ପ୍ରଭୁ! ହେ ହରି! ମୁଁ ମୋର ଜୀବନକୁ ବୃଥାରେ କଟାଇ ଦେଇଛି। ଏହି ଦୁର୍ଲଭ ମନୁଷ୍ୟ ଜୀବନ ପାଇ ମଧ୍ୟ ମୁଁ ଶ୍ରୀଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ଭଜନ କଲି ନାହିଁ। ଏହିପରି ଭାବରେ ମୁଁ ଜାଣିଶୁଣି ବିଷ ପାନ କରିବା ଭଳି କାମ କରିଛି।",
                },
                {
                    id: 2,
                    lyric: "ଗୋଲୋକେର ପ୍ରେମଧନ ହରିନାମ-ସଂକୀର୍ତ୍ତନ\nରତି ନା ଜନ୍ମିଲ କେନ ତାୟ\nସଂସାର-ବିଷାନଲେ ଦିବାନିଶି ହିୟା ଜ୍ଵଳେ\nଜୁଡ଼ାଇତେ ନା କୈନୁ ଉପାୟ ।।୨।।",
                    translation: "ଶ୍ରୀହରିନାମ-ସଂକୀର୍ତ୍ତନ ହେଉଛି ଗୋଲୋକ ବୃନ୍ଦାବନର ଶ୍ରେଷ୍ଠ ପ୍ରେମଧନ, କିନ୍ତୁ ଏହା ପ୍ରତି ମୋର କୌଣସି ଅନୁରାଗ ଜନ୍ମିଲା ନାହିଁ। ଏହି ସଂସାରର ବିଷାକ୍ତ ଅଗ୍ନିରେ ମୋର ହୃଦୟ ଦିନରାତି ଜଳୁଛି, କିନ୍ତୁ ଏଥିରୁ ଶାନ୍ତି ପାଇବାର କୌଣସି ଉପାୟ ମୁଁ କଲିନାହିଁ।",
                }
            ]
        },
        published: true,
        status: 'COMPLETED'
    },    {
        id: 'song-madhavabahutaminati',
        title: 'ମାଧବ ବହୁତ ମିନତି କରି ତୋୟ (Madhava Bahuta Minati)',
        title_odia: 'ମାଧବ ବହୁତ ମିନତି କରି ତୋୟ',
        title_english: 'Madhava Bahuta Minati Kari Toya',
        category: 'Songs',
        type: 'html',
        author: 'Vidyapati',
        description: 'କବି ବିଦ୍ୟାପତିଙ୍କ ଦ୍ୱାରା ରଚିତ ଏକ ଅତି କରୁଣ ଶରଣାଗତି ମୂଳକ ଭଜନ |',
        structuredContent: (Songs as any).SONG_MADHAVABAHUTAMINATI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },




    {
        id: 'song-vrndavanaramyasthana',
        title: 'ବୃନ୍ଦାବନ ରମ୍ୟ ସ୍ଥାନ (Vrndavana Ramya Sthana)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_VRNDAVANARAMYASTHANA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-thakuravaisnavagana',
        title: 'ଠାକୁର ବୈଷ୍ଣବଗଣ (Thakura Vaisnava Gana)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_THAKURAVAISNAVAGANA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-hariboloharibolo',
        title: 'ହରି ବୋଲ ହରି ବୋଲ ଭାଇ ରେ (Hari Bolo Hari Bolo Bhai Re)',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_HARIBOLOHARIBOLO_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kirupepaiboseva',
        title: 'କିରୂପେ ପାଇବ ସେବା (Ki Rupe Paibo Seva)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_KIRUPEPAIBOSEVA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kusumitavrndavane',
        title: 'କୁସୁମିତ ବୃନ୍ଦାବନେ (Kusumita Vrndavane)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_KUSUMITAVRNDAVANE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nitaipadakamala',
        title: 'ନିତାଇ ପଦକମଲ (Nitai Pada Kamala)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_NITAIPADAKAMALA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-radhakrsnapranamora',
        title: 'ରାଧାକୃଷ୍ଣ ପ୍ରାଣ ମୋର (Radha Krsna Prana Mora)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_RADHAKRSNAPRANAMORA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-srikrsnacaitanyaprabhu',
        title: 'ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ପ୍ରଭୁ ଦୟା କର ମୋରେ (Sri Krsna Caitanya Prabhu)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_SRIKRSNACAITANYAPRABHU_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-srirupamanjaripada',
        title: 'ଶ୍ରୀରୂପ ମଞ୍ଜରୀ ପଦ (Sri Rupa Manjari Pada)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_SRIRUPAMANJARIPADA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-suniyachisadhumukhe',
        title: 'ଶୁନିୟାଛି ସାଧୁ ମୁଖେ ବୋଲେ (Suniyachi Sadhu Mukhe)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_SUNIYACHISADHUMUKHE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-thakuravaisnavapada',
        title: 'ଠାକୁର ବୈଷ୍ଣବ ପଦ (Thakura Vaisnava Pada)',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_THAKURAVAISNAVAPADA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-krsnatavapunyahabebhai',
        title: 'କୃଷ୍ଣ ତବ ପୁଣ୍ୟ ହବେ ଭାଇ (Krsna Tava Punya Habe Bhai)',
        title_odia: 'କୃଷ୍ଣ ତବ ପୁଣ୍ୟ ହବେ ଭାଇ',
        title_english: 'Krsna Tava Punya Habe Bhai',
        category: 'Songs',
        type: 'html',
        author: 'Srila Prabhupada',
        structuredContent: (Songs as any).SONG_KRSNATAVAPUNYAHABEBHAI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-karmaphaleasesaba',
        title: 'କର୍ମଫଳେ ଆସେ ସବ (Karma Phale Ase Saba)',
        title_odia: 'କର୍ମଫଳେ ଆସେ ସବ ନାନା ବେଶ ଧରି',
        title_english: 'Karma Phale Ase Saba Nana Vesa Dhari',
        category: 'Songs',
        type: 'html',
        author: 'Srila Prabhupada',
        structuredContent: (Songs as any).SONG_KARMAPHALEASESABA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-avatarasaragoraavatara',
        title: 'ଅବତାର ସାର ଗୋରା-ଅବତାର (Avatara Sara Gora-Avatara)',
        title_odia: 'ଅବତାର ସାର ଗୋରା-ଅବତାର',
        title_english: 'Avatara Sara Gora-Avatara',
        category: 'Songs',
        type: 'html',
        author: 'Locana Dasa Thakura',
        structuredContent: (Songs as any).SONG_AVATARASARAGORAAVATARA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-akrodhaparamananda',
        title: 'ଅକ୍ରୋଧ ପରମାନନ୍ଦ (Akrodha Paramananda)',
        title_odia: 'ଅକ୍ରୋଧ ପରମାନନ୍ଦ',
        title_english: 'Akrodha Paramananda',
        category: 'Songs',
        type: 'html',
        author: 'Locana Dasa Thakura',
        structuredContent: (Songs as any).SONG_AKRODHAPARAMANANDA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nitaigunamani',
        title: 'ନିତାଇ ଗୁଣମଣି (Nitai Guna Mani)',
        title_odia: 'ନିତାଇ ଗୁଣମଣି',
        title_english: 'Nitai Guna Mani',
        category: 'Songs',
        type: 'html',
        author: 'Locana Dasa Thakura',
        structuredContent: (Songs as any).SONG_NITAIGUNAMANI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-paramakarunapahuduijana',
        title: 'ପରମ କରୁଣ ପହୁଁ ଦୁଇଜନ (Parama Karuna Pahu Dui Jana)',
        title_odia: 'ପରମ କରୁଣ ପହୁଁ ଦୁଇଜନ',
        title_english: 'Parama Karuna Pahu Dui Jana',
        category: 'Songs',
        type: 'html',
        author: 'Locana Dasa Thakura',
        structuredContent: (Songs as any).SONG_PARAMAKARUNAPAHUDUIJANA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-krsnahoitecaturmukha',
        title: 'କୃଷ୍ଣ ହଇତେ ଚତୁର୍ମୁଖ (Krsna Hoite Catur-mukha)',
        title_odia: 'କୃଷ୍ଣ ହଇତେ ଚତୁର୍ମୁଖ',
        title_english: 'Krsna Hoite Catur-mukha',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktisiddhanta Saraswati',
        structuredContent: (Songs as any).SONG_KRSNAHOITECATURMUKHA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-dustamana',
        title: 'ଦୁଷ୍ଟ ମନ (Dusta Mana)',
        title_odia: 'ଦୁଷ୍ଟ ମନ',
        title_english: 'Dusta Mana',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktisiddhanta Saraswati',
        structuredContent: (Songs as any).SONG_DUSTAMANA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-damodarastakam',
        title: 'ନମାମୀଶ୍ୱରଂ ସଚ୍ଚିଦାନନ୍ଦ ରୂପଂ (Sri Damodarastakam)',
        title_odia: 'ନମାମୀଶ୍ୱରଂ ସଚ୍ଚିଦାନନ୍ଦ ରୂପଂ',
        title_english: 'Namamisvaram Saccidananda Rupam',
        category: 'Songs',
        type: 'html',
        author: 'Satyavrata Muni',
        tags: ['Astakam'],
        structuredContent: (Songs as any).SONG_DAMODARASTAKAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gopigitam',
        title: 'ଜୟତି ତେଽଧିକଂ ଜନ୍ମନା ବ୍ରଜଃ (Jayati Te ’Dhikam Janmanā Vrajaḥ)',
        title_odia: 'ଜୟତି ତେଽଧିକଂ ଜନ୍ମନା ବ୍ରଜଃ',
        title_english: 'Jayati Te ’Dhikam Janmanā Vrajaḥ',
        category: 'Songs',
        type: 'html',
        description: 'ଗୋପୀ ଗୀତମ୍ (Gopi Gitam)',
        author: 'Sukadeva Gosvami',
        structuredContent: (Songs as any).SONG_GOPIGITAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gaurangatumimore',
        title: 'ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନ ଛାଡ଼ିହ (Gauranga Tumi More Doya Na Chadhio)',
        title_odia: 'ଗୌରାଙ୍ଗ ତୁମି ମୋରେ ଦୟା ନ ଛାଡ଼ିହ',
        title_english: 'Gauranga Tumi More Doya Na Chadhio',
        category: 'Songs',
        type: 'html',
        author: 'Vasudeva Ghosha',
        structuredContent: (Songs as any).SONG_GAURANGATUMIMORE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-jayajayajagannathasacira',
        title: 'ଜୟ ଜୟ ଜଗନ୍ନାଥ ଶଚୀର ନନ୍ଦନ (Jaya Jaya Jagannatha Sacira Nandana)',
        title_odia: 'ଜୟ ଜୟ ଜଗନ୍ନାଥ ଶଚୀର ନନ୍ଦନ',
        title_english: 'Jaya Jaya Jagannatha Sacira Nandana',
        category: 'Songs',
        type: 'html',
        author: 'Vasudeva Ghosha',
        structuredContent: (Songs as any).SONG_JAYAJAYAJAGANNATHASACIRA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-yadigauranahoito',
        title: 'ଯଦି ଗୌର ନା ହଇତ (Yadi Gaura Na Hoito)',
        title_odia: 'ଯଦି ଗୌର ନା ହଇତ',
        title_english: 'Yadi Gaura Na Hoito',
        category: 'Songs',
        type: 'html',
        author: 'Vasudeva Ghosha',
        structuredContent: (Songs as any).SONG_YADIGAURANAHOITO_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-radhejayajayamadhavadayite',
        title: 'ରାଧେ ଜୟ ଜୟ ମାଧବ-ଦୟିତେ (Radhe Jaya Jaya Madhava Dayite)',
        title_odia: 'ରାଧେ ଜୟ ଜୟ ମାଧବ-ଦୟିତେ',
        title_english: 'Radhe Jaya Jaya Madhava Dayite',
        category: 'Songs',
        type: 'html',
        author: 'Rupa Goswami',
        structuredContent: (Songs as any).SONG_RADHEJAYAJAYAMADHAVADAYITE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-vrindavanastakam',
        title: 'ନ ଯୋଗ-ସିଦ୍ଧିର୍ ନ ମମାସ୍ତୁ (Na Yoga Siddhir Na Mamastu)',
        title_odia: 'ନ ଯୋଗ-ସିଦ୍ଧିର୍ ନ ମମାସ୍ତୁ',
        title_english: 'Na Yoga Siddhir Na Mamastu',
        category: 'Songs',
        type: 'html',
        author: 'Visvanatha Cakravarti Thakura',
        description: 'ବୃନ୍ଦାବନାଷ୍ଟକମ୍ (Vrindavanastakam)',
        tags: ['Astakam'],
        structuredContent: (Songs as any).SONG_NAYOGASIDDHIR_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-jayanarasimhasrinarasimha',
        title: 'ଜୟ ନୃସିଂହ ଶ୍ରୀ ନୃସିଂହ (Jaya Narasimha Sri Narasimha)',
        title_odia: 'ଜୟ ନୃସିଂହ ଶ୍ରୀ ନୃସିଂହ',
        title_english: 'Jaya Narasimha Sri Narasimha',
        category: 'Songs',
        type: 'html',
        author: 'Vyasadeva',
        tags: ['Temple'],
        structuredContent: (Songs as any).SONG_JAYANARASIMHASRINARASIMHA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-namastenarasimhaya',
        title: 'ନମସ୍ତେ ନରସିଂହାୟ (Namaste Narasimhaya)',
        title_odia: 'ନମସ୍ତେ ନରସିଂହାୟ',
        title_english: 'Namaste Narasimhaya',
        category: 'Songs',
        type: 'html',
        author: 'Vyasadeva',
        tags: ['Temple', 'Pranama'],
        structuredContent: (Songs as any).SONG_NAMASTENARASIMHAYA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-namonamahtulasi',
        title: 'ନମୋ ନମଃ ତୁଲସୀ କୃଷ୍ଣ-ପ୍ରେୟସୀ (Namo Namah Tulasi Krsna Preyasi)',
        title_odia: 'ନମୋ ନମଃ ତୁଲସୀ କୃଷ୍ଣ-ପ୍ରେୟସୀ',
        title_english: 'Namo Namah Tulasi Krsna Preyasi',
        category: 'Songs',
        type: 'html',
        author: 'Krsna Dasa',
        tags: ['Temple', 'Pranama'],
        structuredContent: (Songs as any).SONG_NAMONOMAH_TULASI_STRUCTURED,
        published: true,
        status: 'COMPLETED' // updated
    },
    {
        id: 'song-gauraarati',
        title: 'ଜୟ ଜୟ ଗୋରାଚାଁଦେର ଆରତିକ (Gaura Arati)',
        title_odia: 'ଜୟ ଜୟ ଗୋରାଚାଁଦେର ଆରତିକ',
        title_english: 'Jaya Jaya Goracander Arotik (Gaura Arati)',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        tags: ['Temple'],
        structuredContent: (TempleSongs as any).SONG_GAURAARATI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-gurupuja',
        title: 'ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ (Śrī Guru Caraṇa Padma)',
        title_odia: 'ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ',
        title_english: 'Sri Guru Carana Padma',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        tags: ['Temple'],
        structuredContent: (TempleSongs as any).SONG_GURUPUJA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-premadhvani',
        title: 'ପ୍ରେମ ଧ୍ୱନି (Prema Dhvani Prayers)',
        title_odia: 'ପ୍ରେମ ଧ୍ୱନି',
        title_english: 'Prem Dhvani (Jaya Dhvani)',
        category: 'Songs',
        type: 'html',
        author: 'ISKCON',
        tags: ['Temple'],
        structuredContent: (TempleSongs as any).SONG_PREMADHVANI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-narasimhapranama',
        title: 'ଉଗ୍ରଂ ବୀରଂ ମହାବିଷ୍ଣୁଂ (Ugram Viram Mahavishnum)',
        title_odia: 'ଉଗ୍ରଂ ବୀରଂ ମହାବିଷ୍ଣୁଂ',
        title_english: 'Ugram Viram Mahavishnum',
        category: 'Songs',
        type: 'html',
        author: 'Vyasadeva',
        tags: ['Pranama'],
        structuredContent: (Songs as any).SONG_NARASIMHAPRANAMA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },

    {
        id: 'song-krsnadevabhavantam',
        title: 'କୃଷ୍ଣ ଦେବ ଭବନ୍ତଂ ବନ୍ଦେ (Kṛṣṇa Deva Bhavantaṁ Vande)',
        title_odia: 'କୃଷ୍ଣ ଦେବ ଭବନ୍ତଂ ବନ୍ଦେ',
        title_english: 'Krsna Deva Bhavantam Vande',
        category: 'Songs',
        type: 'html',
        author: 'Rupa Goswami',
        description: 'ଶ୍ରୀଲ ରୂପ ଗୋସ୍ଵାମୀ ଙ୍କ ଦ୍ଵାରା ରଚନା',
        structuredContent: (Songs as any).SONG_KRSNADEVABHAVANTAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },

    {
        id: 'song-krsnakrsnakrsnakrsna',
        title: 'କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ! (Krsna Krsna Krsna Krsna)',
        title_odia: 'କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ! କୃଷ୍ଣ!',
        title_english: 'Krsna Krsna Krsna Krsna',
        category: 'Songs',
        type: 'html',
        author: 'Krsnadasa Kaviraja Goswami',
        structuredContent: (Songs as any).SONG_KRSNAKRSNAKRSNAKRSNA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },

    {
        id: 'song-amarboliteprabhu',
        title: 'ଆମାର ବୋଲିତେ ପ୍ରଭୁ (Amar Bolite Prabhu)',
        title_odia: 'ଆମାର ବୋଲିତେ ପ୍ରଭୁ',
        title_english: 'Amar Bolite Prabhu',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_AMARBOLITEPRABHU_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },

    {
        id: 'song-bandhusangeyaditavarange',
        title: 'ବନ୍ଧୁ ସଙ୍ଗେ ଯଦି ତବ ରଙ୍ଗ (Bandhu Sange Yadi Tava Range)',
        title_odia: 'ବନ୍ଧୁ ସଙ୍ଗେ ଯଦି ତବ ରଙ୍ଗ',
        title_english: 'Bandhu Sange Yadi Tava Range',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_BANDHUSANGEYADITAVARANGE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },

    {
        id: 'song-gaitegaitenamaki',
        title: 'ଗାଇତେ ଗାଇତେ ନାମ କି (Gāite Gāite Nāma Ki)',
        title_odia: 'ଗାଇତେ ଗାଇତେ ନାମ କି',
        title_english: 'Gāite Gāite Nāma Ki',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_GAITEGAITENAMAKI_STRUCTURED,
        status: 'COMPLETED'
    },
    {
        id: 'song-gangastotram',
        title: 'ଦେବି ସୁରେଶ୍ୱରି ଭଗବତି ଗଙ୍ଗେ (Devi Suresvari Bhagavati Gange)',
        title_odia: 'ଦେବି ସୁରେଶ୍ୱରି ଭଗବତି ଗଙ୍ଗେ',
        title_english: 'Devi Suresvari Bhagavati Gange',
        category: 'Songs',
        type: 'html',
        author: 'Adi Sankaracarya',
        structuredContent: (Songs as any).SONG_GANGASTOTRAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-sariraavidyajala',
        title: 'ଶରୀର ଅବିଦ୍ୟା ଜାଲ (Sarira Avidya Jala)',
        title_odia: 'ଶରୀର ଅବିଦ୍ୟା ଜାଲ',
        title_english: 'Sarira Avidya Jala',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_SARIRAVIDYAJALA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kabekrsnadhanpabo',
        title: 'କବେ କୃଷ୍ଣ-ଧନ ପାବ (Kabe Krsna Dhan Pabo)',
        title_odia: 'କବେ କୃଷ୍ଣ-ଧନ ପାବ',
        title_english: 'Kabe Krsna Dhan Pabo',
        category: 'Songs',
        type: 'html',
        author: 'Narottama Dasa Thakura',
        structuredContent: (Songs as any).SONG_KABEKRSNADHANPABO_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-abanikamajhe',
        title: 'ଅବନିକ ମାଝେ ଦେଖ ଦୋନ ଭାଇ (Abanika Majhe Dekha Dona Bhai)',
        title_odia: 'ଅବନିକ ମାଝେ ଦେଖ ଦୋନ ଭାଇ',
        title_english: 'Abanika Majhe Dekha Dona Bhai',
        category: 'Songs',
        type: 'html',
        author: 'Vrndavana Dasa Thakura',
        structuredContent: (Songs as any).SONG_ABANIKAMAJHE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-achyutamkesavam',
        title: 'ଅଚ୍ୟୁତଂ କେଶବଂ (Achyutam Kesavam)',
        title_odia: 'ଅଚ୍ୟୁତଂ କେଶବଂ',
        title_english: 'Achyutam Kesavam',
        category: 'Songs',
        type: 'html',
        author: 'Adi Sankaracarya',
        structuredContent: (Songs as any).SONG_ACHYUTAMKESAVAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kaliyugesrichaitanya',
        title: 'କଳି ଯୁଗେ ଶ୍ରୀ ଚୈତନ୍ୟ (Kali Yuge Sri Caitanya)',
        title_odia: 'କଳି ଯୁଗେ ଶ୍ରୀ ଚୈତନ୍ୟ',
        title_english: 'Kali Yuge Sri Caitanya',
        category: 'Songs',
        type: 'html',
        author: 'Govinda Dasa Kaviraja',
        structuredContent: (Songs as any).SONG_KALIYUGESRICHAITANYA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-kararavindenapadaravindam',
        title: 'କରାରବିନ୍ଦେନ ପଦାରବିନ୍ଦଂ (Kararavindena Padaravindam)',
        title_odia: 'କରାରବିନ୍ଦେନ ପଦାରବିନ୍ଦଂ',
        title_english: 'Kararavindena Padaravindam',
        category: 'Songs',
        type: 'html',
        author: 'Bilvamangala Thakura',
        structuredContent: (Songs as any).SONG_KARARAVINDENAPADARAVINDAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-ahenilasaila',
        title: 'ଆହେ ନୀଳ ଶୈଳ (Ahe Nila Saila)',
        title_odia: 'ଆହେ ନୀଳ ଶୈଳ',
        title_english: 'Ahe Nila Saila',
        category: 'Songs',
        type: 'html',
        author: 'Bhakta Salabega',
        tags: ['Temple'],
        structuredContent: (Songs as any).SONG_AHENILASAILA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-amarnitaimilena',
        title: 'ଆମାର ନିତାଇ ମିଲେ ନା (Amar Nitai Mile Na)',
        title_odia: 'ଆମାର ନିତାଇ ମିଲେ ନା',
        title_english: 'Amar Nitai Mile Na',
        category: 'Songs',
        type: 'html',
        author: 'Unknown',
        structuredContent: (Songs as any).SONG_AMARNITAIMILENA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-antaramandirejago',
        title: 'ଅନ୍ତର ମନ୍ଦିରେ ଜାଗୋ ଜାଗୋ (Antara Mandire Jago Jago)',
        title_odia: 'ଅନ୍ତର ମନ୍ଦିରେ ଜାଗୋ ଜାଗୋ',
        title_english: 'Antara Mandire Jago Jago',
        category: 'Songs',
        type: 'html',
        author: 'Mira Bhai',
        tags: ['Temple'],
        structuredContent: (Songs as any).SONG_ANTARAMANDIREJAGO_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-antarenitaibahirenitai',
        title: 'ଅନ୍ତରେ ନିତାଇ ବାହିରେ ନିତାଇ (Antare Nitai Bahire Nitai)',
        title_odia: 'ଅନ୍ତରେ ନିତାଇ ବାହିରେ ନିତାଇ',
        title_english: 'Antare Nitai Bahire Nitai',
        category: 'Songs',
        type: 'html',
        author: 'Vrndavana Dasa Thakura',
        structuredContent: (Songs as any).SONG_ANTARENITAIBAHIRENITAI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-arkebajabebamsi',
        title: 'ଆର କେ ବାଜାବେ ବାଂଶୀ (Ar Ke Bajabe Bamsi)',
        title_odia: 'ଆର କେ ବାଜାବେ ବାଂଶୀ',
        title_english: 'Ar Ke Bajabe Bamsi',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        structuredContent: (Songs as any).SONG_ARKEBAJABEBAMSI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-arkotokal',
        title: 'ଆର କତ କାଲ (Ar Koto Kal)',
        title_odia: 'ଆର କତ କାଲ',
        title_english: 'Ar Koto Kal',
        category: 'Songs',
        type: 'html',
        author: 'Mira Bhai',
        structuredContent: (Songs as any).SONG_ARKOTOKAL_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-barabaraplankori',
        title: 'ବାର ବାର ପ୍ଲ୍ୟାନ କରେ (Bara Bara Plan Kori)',
        title_odia: 'ବାର ବାର ପ୍ଲ୍ୟାନ କରେ',
        title_english: 'Bara Bara Plan Kori',
        category: 'Songs',
        type: 'html',
        author: 'Srila Prabhupada',
        structuredContent: (Songs as any).SONG_BARABARAPLANKORI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-batulakahaye',
        title: 'ବାତୁଲ କହୟେ ସେଥା ସବ ନିରାକାର (Batula Kahaye Setha Saba Nirakara)',
        title_odia: 'ବାତୁଲ କହୟେ ସେଥା ସବ ନିରାକାର',
        title_english: 'Batula Kahaye Setha Saba Nirakara',
        category: 'Songs',
        type: 'html',
        author: 'Srila Prabhupada',
        structuredContent: (Songs as any).SONG_BATULAKAHAYE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-bhaktiahaituki',
        title: 'ଭକ୍ତି ଅହୈତୁକୀ ହୟ ସ୍ୱ ପ୍ରକାଶିତ (Bhakti Ahaituki Hoy Sva Prakasita)',
        title_odia: 'ଭକ୍ତି ଅହୈତୁକୀ ହୟ ସ୍ୱ ପ୍ରକାଶିତ',
        title_english: 'Bhakti Ahaituki Hoy Sva Prakasita',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        structuredContent: (Songs as any).SONG_BHAKTIAAHAITUKI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-dhuledhulegorachanda',
        title: 'ଧୁଲେ ଧୁଲେ ଗୋରା ଚାଁଦ (Dhule Dhule Gora Chanda)',
        title_odia: 'ଧୁଲେ ଧୁଲେ ଗୋରା ଚାଁଦ',
        title_english: 'Dhule Dhule Gora Chanda',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        structuredContent: (Songs as any).SONG_DHULEDHULEGORACHANDA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-dukhersagore',
        title: 'ଦୁଃଖେର ସାଗୋରେ (Duhkher Sagore)',
        title_odia: 'ଦୁଃଖେର ସାଗୋରେ',
        title_english: 'Duhkher Sagore',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        structuredContent: (Songs as any).SONG_DUKHERSAGORE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-doyakoromorenitai',
        title: 'ଦୟା କରୋ ମୋରେ ନିତାଇ (Doya Koro More Nitai)',
        title_odia: 'ଦୟା କରୋ ମୋରେ ନିତାଇ',
        title_english: 'Doya Koro More Nitai',
        category: 'Songs',
        type: 'html',
        author: 'Kanu Ramadasa Thakura',
        structuredContent: (Songs as any).SONG_DOYAKOROMORENITAI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-bhajabhajahari',
        title: 'ଭଜ ଭଜ ହରି (Bhaja Bhaja Hari)',
        title_odia: 'ଭଜ ଭଜ ହରି',
        title_english: 'Bhaja Bhaja Hari',
        category: 'Songs',
        type: 'html',
        author: 'Locana Dasa Thakura',
        structuredContent: (Songs as any).SONG_BHAJABHAJAHARI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-bhajagaurangakahagauranga',
        title: 'ଭଜ ଗୌରାଙ୍ଗ କହ ଗୌରାଙ୍ଗ (Bhaja Gauranga Kaha Gauranga)',
        title_odia: 'ଭଜ ଗୌରାଙ୍ଗ କହ ଗୌରାଙ୍ଗ',
        title_english: 'Bhaja Gauranga Kaha Gauranga',
        category: 'Songs',
        type: 'html',
        author: 'Krsnadasa Kaviraja Goswami',
        structuredContent: (Songs as any).SONG_BHAJAGAURANGAKAHAGAURANGA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-bhajagovinda',
        title: 'ଭଜ ଗୋବିନ୍ଦ ଭଜ ଗୋବିନ୍ଦ (Bhaja Govinda Bhaja Govinda)',
        title_odia: 'ଭଜ ଗୋବିନ୍ଦ ଭଜ ଗୋବିନ୍ଦ',
        title_english: 'Bhaja Govinda Bhaja Govinda',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        structuredContent: (Songs as any).SONG_BHAJAGOVINDA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-jayaradhejayaradheradhe',
        title: 'ଜୟ ରାଧେ ଜୟ ରାଧେ ରାଧେ (Jaya Radhe Jaya Radhe Radhe)',
        title_odia: 'ଜୟ ରାଧେ ଜୟ ରାଧେ ରାଧେ',
        title_english: 'Jaya Radhe Jaya Radhe Radhe',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ହରି ବ୍ୟାସ ଦେବାଚାର୍ଯ୍ୟଙ୍କ ବିରଚିତ ଶ୍ରୀ ରାଧା-କୃଷ୍ଣ ଯୁଗଳ ସ୍ତୁତି |',
        structuredContent: (Songs as any).SONG_JAYARADHE_STRUCTURED,
        author: 'Hari Vyasa Devacarya',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-jayasacinandanasuramunivandana',
        title: 'ଜୟ ଶଚୀନନ୍ଦନ ସୁର ମୁନି ବନ୍ଦନ (Jaya Sacinandana Sura Muni Vandana)',
        title_odia: 'ଜୟ ଶଚୀନନ୍ଦନ ସୁର ମୁନି ବନ୍ଦନ',
        title_english: 'Jaya Sacinandana Sura Muni Vandana',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ବି. ଆର. ଶ୍ରୀଧର ଦେବ ଗୋସ୍ୱାମୀଙ୍କ ବିରଚିତ ଶ୍ରୀ ଶଚୀନନ୍ଦନ ବନ୍ଦନା |',
        structuredContent: (Songs as any).SONG_JAYASACINANDANA_STRUCTURED,
        author: 'B.R. Sridhara Deva Goswami',
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-madhavabahutaminati',
        title: 'ମାଧବ ବହୁତ ମିନତି କରି ତୋୟ (Madhava Bahuta Minati)',
        title_odia: 'ମାଧବ ବହୁତ ମିନତି କରି ତୋୟ',
        title_english: 'Madhava Bahuta Minati Kari Toya',
        category: 'Songs',
        type: 'html',
        author: 'Vidyapati',
        description: 'କବି ବିଦ୍ୟାପତିଙ୍କ ଦ୍ୱାରା ରଚିତ ଏକ ଅତି କରୁଣ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_MADHAVABAHUTAMINATI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-madhurammadhurebhyopi',
        title: 'ମଧୁରଂ ମଧୁରେଭ୍ୟୋଽପି (Madhuram Madhurebhyo Pi)',
        title_odia: 'ମଧୁରଂ ମଧୁରେଭ୍ୟୋଽପି',
        title_english: 'Madhuram Madhurebhyo Pi',
        category: 'Songs',
        type: 'html',
        author: 'Nilakanta Goswami',
        description: 'ନୀଳକାନ୍ତ ଗୋସ୍ୱାମୀଙ୍କ ଦ୍ୱାରା ରଚିତ ହରିନାମର ମାହାତ୍ମ୍ୟ |',
        structuredContent: (Songs as any).SONG_MADHURAM_MADHUREBHYO_PI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-mahavadanyaisvara',
        title: 'ମହାବଦାନ୍ୟ ଈଶ୍ୱର ଶ୍ରୀ ଗୌରସୁନ୍ଦର (Maha Vadanya Isvara)',
        title_odia: 'ମହାବଦାନ୍ୟ ଈଶ୍ୱର ଶ୍ରୀ ଗୌରସୁନ୍ଦର',
        title_english: 'Maha Vadanya Isvara Sri Gaura Sundara',
        category: 'Songs',
        type: 'html',
        author: 'Srila Prabhupada',
        description: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କର ପରମ ଦୟାଳୁ ଅବତାରର ଏକ ସୁନ୍ଦର ବର୍ଣ୍ଣନା |',
        structuredContent: (Songs as any).SONG_MAHAVADANYAISVARA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-mahaprasadegovinde',
        title: 'ମହାପ୍ରସାଦେ ଗୋବିନ୍ଦେ (Maha Prasade Govinde)',
        title_odia: 'ମହାପ୍ରସାଦେ ଗୋବିନ୍ଦେ',
        title_english: 'Maha Prasade Govinde',
        category: 'Songs',
        type: 'html',
        author: 'Vyasadeva',
        description: 'ମହାପ୍ରସାଦ, ହରିନାମ ଏବଂ ବୈଷ୍ଣବଙ୍କ ପ୍ରତି ଶ୍ରଦ୍ଧା ଅର୍ପଣ କରିବା ପାଇଁ ଏକ ପବିତ୍ର ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_MAHAPRASADEGOVINDE_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-maineratanalagai',
        title: 'ମୈନେ ରଟନା ଲଗାୟୀ ରାଧା ନାମ କୀ (Maine Ratana Lagai)',
        title_odia: 'ମୈନେ ରଟନା ଲଗାୟୀ ରାଧା ନାମ କୀ',
        title_english: 'Maine Ratana Lagai Radha Nama Ki',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        description: 'ଶ୍ରୀରାଧାଙ୍କ ମଧୁର ନାମ ଜପ କରିବାର ଏକ ଅତ୍ୟନ୍ତ ଭକ୍ତିମୟ ଭଜନ |',
        structuredContent: (Songs as any).SONG_MAINERATANALAGAI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nacenacenitaigaur',
        title: 'ନାଚେ ନାଚେ ନିତାଈ ଗୌର ଗୁଣମଣିୟା (Nace Nace Nitai Gaur)',
        title_odia: 'ନାଚେ ନାଚେ ନିତାଈ ଗୌର ଗୁଣମଣିୟା',
        title_english: 'Nace Nace Nitai Gaur Guna Maniya',
        category: 'Songs',
        type: 'html',
        author: 'Vrndavana Dasa Thakura',
        description: 'ଗୁଣର ରତ୍ନ ସ୍ୱରୂପ ନିତାଇ ଓ ଗୌର ଦୁଇ ଭାଇଙ୍କର ଏକ ସୁନ୍ଦର ନୃତ୍ୟ ବର୍ଣ୍ଣନା |',
        structuredContent: (Songs as any).SONG_NACENACENITAIGAUR_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nakorolunkarama',
        title: 'ନା କୋରୋଲୁଁ କରମ (Na Korolun Karama)',
        title_odia: 'ନା କୋରୋଲୁଁ କରମ',
        title_english: 'Na Korolun Karama',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        description: 'ଶରଣାଗତି ଓ ଆତ୍ମସମର୍ପଣର ଏକ ଅତି ମର୍ମସ୍ପର୍ଶୀ ଭଜନ |',
        structuredContent: (Songs as any).SONG_NAKOROLUNKARAMA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-mirarprabhuesogiridhari',
        title: 'ମୀରାର ପ୍ରଭୁ ଏସୋ ଗିରିଧାରୀ (Mirar Prabhu Eso Giridhari)',
        title_odia: 'ମୀରାର ପ୍ରଭୁ ଏସୋ ଗିରିଧାରୀ',
        title_english: 'Mirar Prabhu Eso Giridhari',
        category: 'Songs',
        type: 'html',
        author: 'Mira Bhai',
        description: 'ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଚରଣରେ ମୀରାବାଈଙ୍କର ଏକ ଅତି ମଧୁର ଓ ଭକ୍ତିପୂର୍ଣ୍ଣ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_MIRARPRABHUESOGIRIDHARI_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-manarekahanagaurakatha',
        title: 'ମନ ରେ କହ ନା ଗୌର କଥା (Mana Re Kaha Na Gaura Katha)',
        title_odia: 'ମନ ରେ କହ ନା ଗୌର କଥା',
        title_english: 'Mana Re Kaha Na Gaura Katha',
        category: 'Songs',
        type: 'html',
        author: 'Narahari Sarakara',
        description: 'ଶ୍ରୀଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କ ନାମ ଓ ରୂପର ଏକ ଅତି ମଧୁର ମହିମା କୀର୍ତ୍ତନ |',
        structuredContent: (Songs as any).SONG_MANAREKAHANAGAURAKATHA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-radhakrpakataksa',
        title: 'ଶ୍ରୀ ରାଧା କୃପା-କଟାକ୍ଷ-ସ୍ତବ-ରାଜ (Munindra Vrnda Vandite - Radha Krpa Kataksa)',
        title_odia: 'ଶ୍ରୀ ରାଧା କୃପା-କଟାକ୍ଷ-ସ୍ତବ-ରାଜ',
        title_english: 'Munindra Vrnda Vandite - Radha Krpa Kataksa',
        category: 'Songs',
        type: 'html',
        author: 'Traditional',
        description: 'ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ କୃପା ଭିକ୍ଷା ପାଇଁ ଭଗବାନ ଶିବଙ୍କ ଦ୍ୱାରା ରଚିତ ଏକ ଅତି ଦୁର୍ଲଭ ଓ ମହିମାମୟ ସ୍ତୋତ୍ର | (Munindra Vrnda Vandite)',
        structuredContent: (Songs as any).SONG_RADHAKRPAKATAKSA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-sb-harinama-mahima',
        title: 'ଶ୍ରୀମଦ୍-ଭାଗବତମ୍ - ହରିନାମ ମହିମା (Srimad Bhagavatam - Harinama Mahima / Glories of the Holy Name / Nama Tattva)',
        title_odia: 'ଶ୍ରୀମଦ୍-ଭାଗବତମ୍ - ହରିନାମ ମହିମା',
        title_english: 'Srimad Bhagavatam - Harinama Mahima (Glories of the Holy Name / Nama Tattva)',
        category: 'Songs',
        type: 'html',
        author: 'Srimad Bhagavatam',
        description: 'ଶ୍ରୀମଦ୍ ଭାଗବତମ୍ ରୁ ୧୫ଟି ଦୁର୍ଲଭ ଶ୍ଳୋକ ଯାହା ହରିନାମ ସଙ୍କୀର୍ତ୍ତନର ଅପାର ମହିମା ଗାନ କରେ |',
        structuredContent: (Songs as any).SONG_SB_HARINAMA_MAHIMA_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-srisivashtakam',
        title: 'ଶ୍ରୀ ଶିବାଷ୍ଟକମ୍ - ନମୋ ନମସ୍ତେ ତ୍ରିଦଶେଶ୍ୱରାୟ (Sri Sivashtakam - Namo Namaste Tridasesvaraya)',
        title_odia: 'ଶ୍ରୀ ଶିବାଷ୍ଟକମ୍ - ନମୋ ନମସ୍ତେ ତ୍ରିଦଶେଶ୍ୱରାୟ',
        title_english: 'Sri Sivashtakam - Namo Namaste Tridasesvaraya',
        category: 'Songs',
        type: 'html',
        author: 'Sri Caitanya Mahaprabhu',
        description: 'ଭଗବାନ ଶିବଙ୍କ ପ୍ରଶଂସାରେ ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ଦ୍ୱାରା ରଚିତ ଅଷ୍ଟକମ୍ |',
        structuredContent: (Songs as any).SONG_SRISIVASHTAKAM_STRUCTURED,
        published: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-ohepremerathakuragora',
        title: 'ଓହେ ପ୍ରେମେର ଠାକୁର ଗୋରା (Ohe Premera Thākura Gorā)',
        title_odia: 'ଓହେ ପ୍ରେମେର ଠାକୁର ଗୋରା',
        title_english: 'Ohe Premera Thakura Gora',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Thakura',
        description: 'ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ବିରଚିତ ପରମ କାରୁଣିକ ଶ୍ରୀମନ୍ ମହାପ୍ରଭୁଙ୍କ ଶ୍ରୀଚରଣରେ ଆତ୍ମସମର୍ପଣ ଓ ବିକଳ ପ୍ରାର୍ଥନା ।',
        audioUrl: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2F85AF1p9y5QbN.128.mp3',
        vocalist: 'Vaishnavas',
        audioVersions: [
            { label: 'Vaishnavas', url: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2F85AF1p9y5QbN.128.mp3' }
        ],
        structuredContent: {
            id: 'song-ohepremerathakuragora',
            title: 'ଓହେ ପ୍ରେମେର ଠାକୁର ଗୋରା (Ohe Premera Thākura Gorā)',
            title_odia: 'ଓହେ ପ୍ରେମେର ଠାକୁର ଗୋରା',
            title_english: 'Ohe Premera Thakura Gora',
            author: 'Bhaktivinoda Thakura',
            category: 'Songs',
            reference_url: 'https://vsnectar.web.app/home/songs/Ohe%20Premera%20Thakura%20Gora_More%20Songs_7',
            verses: [
                {
                    id: 1,
                    lyric: "ଓହେ, ପ୍ରେମେର ଠାକୁର ଗୋରା\nପ୍ରାଣେର ଯାତନା କିବା କବ, ନାଥ! ହୟେଛି ଆପନ-ହାରା ।। ୧ ।।",
                    translation: "ହେ ପ୍ରେମସ୍ୱରୂପ ଠାକୁର ଶ୍ରୀ ଗୌରସୁନ୍ଦର! ହେ ମୋର ନାଥ! ମୋ ପ୍ରାଣର ବେଦନା ଓ ଯନ୍ତ୍ରଣା ମୁଁ ଆପଣଙ୍କୁ କିପରି ବର୍ଣ୍ଣନା କରି କହିବି? ମୁଁ ନିଜର ପ୍ରକୃତ ସ୍ୱରୂପ ଓ ଆତ୍ମପରିଚୟ ହରାଇ ବସିଛି।",
                    wordMeanings: [
                        { word: "ଓହେ", meaning: "ହେ" },
                        { word: "ପ୍ରେମେର ଠାକୁର", meaning: "ପ୍ରେମର ଠାକୁର (ଦିବ୍ୟ ପ୍ରେମଦାତା)" },
                        { word: "ଗୋରା", meaning: "ଶ୍ରୀ ଗୌରସୁନ୍ଦର" },
                        { word: "ପ୍ରାଣେର ଯାତନା", meaning: "ହୃଦୟର ବେଦନା ଓ ଯନ୍ତ୍ରଣା" },
                        { word: "କିବା କବ", meaning: "କିପରି ବର୍ଣ୍ଣନା କରି କହିବି" },
                        { word: "ନାଥ", meaning: "ହେ ପ୍ରଭୁ, ହେ ମୋର ସ୍ୱାମୀ" },
                        { word: "ହୟେଛି", meaning: "ହୋଇଯାଇଛି" },
                        { word: "ଆପନ-ହାରା", meaning: "ଆତ୍ମବିସ୍ମୃତ (ନିଜ ସ୍ୱରୂପ ଭୁଲିଯାଇଥିବା)" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 2,
                    lyric: "କି ଆର ବଲିବ, ଯେ-କାଜେର ତୋରେ\nଏନେଛିଲେ, ନାଥ! ଜଗତେ ଆମାରେ,\nଏତ-ଦିନ ପରେ କହିତେ ସେ କଥା, ଖେଦେ ଦୁଃଖେ ହଇ ସାରା ।। ୨ ।।",
                    translation: "ହେ ନାଥ! ଆଉ ଅଧିକ ମୁଁ କ’ଣ କହିବି? ଯେଉଁ କାର୍ଯ୍ୟ (ଭଗବଦ୍-ଭଜନ) ପାଇଁ ଆପଣ ମୋତେ ଏହି ଜଗତକୁ ପଠାଇଥିଲେ, ଏତେ ଦିନ ପରେ ଆଜି ସେ କଥା ସ୍ମରଣ କରି ମୁଁ ଘୋର ଅନୁତାପ ଓ ଦୁଃଖରେ ଭାଙ୍ଗି ପଡ଼ୁଛି।",
                    wordMeanings: [
                        { word: "କି ଆର ବଲିବ", meaning: "ଆଉ ଅଧିକ କ’ଣ କହିବି" },
                        { word: "ଯେ-କାଜେର ତୋରେ", meaning: "ଯେଉଁ କାର୍ଯ୍ୟ ନିମନ୍ତେ (ଭଗବତ୍ ସେବା ପାଇଁ)" },
                        { word: "ଏନେଛିଲେ", meaning: "ଆଣିଥିଲେ (ଜନ୍ମ ଦେଇଥିଲେ)" },
                        { word: "ନାଥ", meaning: "ହେ ପ୍ରଭୁ" },
                        { word: "ଜଗତେ", meaning: "ଏହି ସଂସାରକୁ" },
                        { word: "ଆମାରେ", meaning: "ମୋତେ" },
                        { word: "ଏତ-ଦିନ ପରେ", meaning: "ଏତେ ଦିନ ବିତିଯିବା ପରେ" },
                        { word: "କହିତେ ସେ କଥା", meaning: "ସେହି କଥା କହିବାକୁ" },
                        { word: "ଖେଦେ ଦୁଃଖେ", meaning: "ଅନୁତାପ ଏବଂ ଦୁଃଖରେ" },
                        { word: "ହଇ ସାରା", meaning: "ସମ୍ପୂର୍ଣ୍ଣ ବ୍ୟଥିତ ଓ ନିଃଶେଷ ହୋଇଯାଉଛି" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 3,
                    lyric: "ତୋମାର ଭଜନେ ନା ଜନ୍ମିଲ ରତି,\nଜଡ଼-ମୋହେ ମତ୍ତ ସଦା ଦୁର୍ମତି –\nବିଷୟୀର କାଛେ ଥେକେ ଥେକେ ଆମି ହଇନୁ ବିଷୟୀ-ପାରା ।। ୩ ।।",
                    translation: "ଆପଣଙ୍କ ଭଜନ ସାଧନରେ ମୋର ତିଳେହେଲେ ଅନୁରାଗ ଜନ୍ମିଲା ନାହିଁ। ମୁଁ ସର୍ବଦା ଦୁର୍ମତି ହୋଇ ଜଡ଼ ଜାଗତିକ ମୋହରେ ମତ୍ତ ରହିଲି। ବିଷୟୀ (ଭୋଗୀ) ଲୋକଙ୍କ ସଙ୍ଗରେ ରହି ରହି ମୁଁ ମଧ୍ୟ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ସେମାନଙ୍କ ପରି ଏକ ବିଷୟୀ ପାଲଟିଗଲି।",
                    wordMeanings: [
                        { word: "ତୋମାର ଭଜନେ", meaning: "ଆପଣଙ୍କ ଭଜନ ଆରାଧନାରେ" },
                        { word: "ନା ଜନ୍ମିଲ ରତି", meaning: "ଅନୁରାଗ ବା ପ୍ରୀତି ଉତ୍ପନ୍ନ ହେଲା ନାହିଁ" },
                        { word: "ଜଡ଼-ମୋହେ", meaning: "ପ୍ରାକୃତିକ ମାୟା ଓ ମୋହରେ" },
                        { word: "ମତ୍ତ", meaning: "ମାତି ରହିଥିବା" },
                        { word: "ସଦା", meaning: "ସର୍ବଦା" },
                        { word: "ଦୁର୍ମତି", meaning: "ଦୁଷ୍ଟ ବୁଦ୍ଧିସମ୍ପନ୍ନ" },
                        { word: "ବିଷୟୀର କାଛେ", meaning: "ଭୋଗବାସନାରେ ଲିପ୍ତ ଲୋକମାନଙ୍କ ନିକଟରେ" },
                        { word: "ଥେକେ ଥେକେ", meaning: "ରହି ରହି" },
                        { word: "ଆମି ହଇନୁ", meaning: "ମୁଁ ହୋଇଗଲି" },
                        { word: "ବିଷୟୀ-ପାରା", meaning: "ବିଷୟୀମାନଙ୍କ ସଦୃଶ (ଭୋଗୀ)" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 4,
                    lyric: "କେ ଆମି, କେନ ଯେ ଏସେଛି ଏଖାନେ,\nସେ-କଥା କଖନ ନାହି ଭାବି ମନେ,\nକଖନ ଭୋଗେର, କଖନ ତ୍ୟାଗେର ଛଲନାୟ ମନ ନାଚେ ।। ୪ ।।",
                    translation: "ମୁଁ କିଏ? କାହିଁକି ବା ମୁଁ ଏହି ସଂସାରକୁ ଆସିଛି? ଏହି କଥା ମନରେ କେବେହେଲେ ଚିନ୍ତା କଲି ନାହିଁ। କେତେବେଳେ ଜାଗତିକ ଭୋଗବାସନା, ତ ପୁଣି କେତେବେଳେ ମିଥ୍ୟା ତ୍ୟାଗର ପ୍ରତାରଣାରେ ମୋର ମନ ନାଚି ବୁଲୁଥିଲା।",
                    wordMeanings: [
                        { word: "କେ ଆମି", meaning: "ମୁଁ କିଏ (ମୋର ସ୍ୱରୂପ କ’ଣ)" },
                        { word: "କେନ ଯେ", meaning: "କାହିଁକି ବା" },
                        { word: "ଏସେଛି ଏଖାନେ", meaning: "ଏଠାକୁ (ଏହି ସଂସାରକୁ) ଆସିଛି" },
                        { word: "ସେ-କଥା", meaning: "ସେହି କଥା" },
                        { word: "କଖନ ନାହି ଭାବି", meaning: "କେବେହେଲେ ଭାବିନାହିଁ" },
                        { word: "ମନେ", meaning: "ମନ ଭିତରେ" },
                        { word: "କଖନ ଭୋଗେର", meaning: "କେତେବେଳେ ଭୋଗର" },
                        { word: "କଖନ ତ୍ୟାଗେର", meaning: "କେତେବେଳେ ମିଥ୍ୟା ବୈରାଗ୍ୟ ବା ତ୍ୟାଗର" },
                        { word: "ଛଲନାୟ", meaning: "କପଟତା ବା ପ୍ରତାରଣାରେ" },
                        { word: "ମନ ନାଚେ", meaning: "ମନ ନାଚି ଉଠୁଛି" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 5,
                    lyric: "କି ଗତି ହଇବେ କଖନ ଭାବି ନା,\nହରି-ଭକତେର କାଛେଓ ଯାଇ ନା,\nହରି-ବିମୁଖେର କୁ-ଲକ୍ଷଣ ଯତ ଆମାତେଇ ସବ ଆଛେ ।। ୫ ।।",
                    translation: "ମୋର କି ଦଶା ବା ଗତି ହେବ, ସେ କଥା ମୁଁ କେବେହେଲେ ବିଚାର କଲି ନାହିଁ। ଶ୍ରୀହରିଙ୍କ ଭକ୍ତମାନଙ୍କ ପାଖକୁ ମଧ୍ୟ ମୁଁ କେବେ ଗଲି ନାହିଁ। ଭଗବାନଙ୍କ ପ୍ରତି ବିମୁଖ ଥିବା ଜୀବର ଯେତେ ସବୁ କୁଲକ୍ଷଣ ଥାଏ, ସେସବୁ ମୋ’ ଭିତରେ ହିଁ ବିଦ୍ୟମାନ ଅଛି।",
                    wordMeanings: [
                        { word: "କି ଗତି ହଇବେ", meaning: "କି ପରିଣାମ ବା ସଦ୍‌ଗତି ହେବ" },
                        { word: "କଖନ ଭାବି ନା", meaning: "କେବେହେଲେ ଚିନ୍ତା କଲି ନାହିଁ" },
                        { word: "ହରି-ଭକତେର", meaning: "ଶ୍ରୀହରିଙ୍କ ଶୁଦ୍ଧ ଭକ୍ତମାନଙ୍କ" },
                        { word: "କାଛେଓ", meaning: "ନିକଟକୁ ମଧ୍ୟ" },
                        { word: "ଯାଇ ନା", meaning: "ଗଲି ନାହିଁ" },
                        { word: "ହରି-ବିମୁଖେର", meaning: "ଭଗବଦ୍-ବିମୁଖ ବ୍ୟକ୍ତିର" },
                        { word: "କୁ-ଲକ୍ଷଣ ଯତ", meaning: "ଯେତେସବୁ ଅପଲକ୍ଷଣ ବା ଦୁର୍ଗୁଣ" },
                        { word: "ଆମାତେଇ", meaning: "ମୋ ଭିତରେ ହିଁ" },
                        { word: "ସବ ଆଛେ", meaning: "ସବୁକିଛି ବିଦ୍ୟମାନ ଅଛି" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 6,
                    lyric: "ଶ୍ରୀ-ଗୁରୁ-କୃପାୟ ଭେଙ୍ଗେଛେ ସ୍ୱପନ,\nବୁଝେଛି ଏଖନ ତୁମି-ଇ ଆପନ,\nତବ ନିଜ-ଜନ ପରମ-ବାନ୍ଧବ ସଂସାର କାରାଗାରେ ।। ୬ ।।",
                    translation: "ଶ୍ରୀ ଗୁରୁଦେବଙ୍କ ଅହେତୁକୀ କୃପାରୁ ଆଜି ମୋର ଅବିଦ୍ୟାରୂପୀ ମୋହ-ସ୍ୱପ୍ନ ଭାଙ୍ଗିଯାଇଛି। ଏବେ ମୁଁ ହୃଦୟଙ୍ଗମ କରିପାରିଛି ଯେ ଆପଣ ହିଁ ମୋର ଏକମାତ୍ର ଆପଣାର ପ୍ରଭୁ; ଏବଂ ଏହି ସଂସାରରୂପୀ କାରାଗାର ମଧ୍ୟରେ କେବଳ ଆପଣଙ୍କ ଶୁଦ୍ଧ ଭକ୍ତମାନେ ହିଁ ମୋର ପରମ ବନ୍ଧୁ।",
                    wordMeanings: [
                        { word: "ଶ୍ରୀ-ଗୁରୁ-କୃପାୟ", meaning: "ଶ୍ରୀ ଗୁରୁଦେବଙ୍କ ଦିବ୍ୟ କୃପାରୁ" },
                        { word: "ଭେଙ୍ଗେଛେ ସ୍ୱପନ", meaning: "ମାୟାର ସ୍ୱପ୍ନ ଭାଙ୍ଗିଯାଇଛି" },
                        { word: "ବୁଝେଛି ଏଖନ", meaning: "ଏବେ ମୁଁ ବୁଝିପାରିଛି" },
                        { word: "ତୁମି-ଇ ଆପନ", meaning: "ଆପଣ ହିଁ ପ୍ରକୃତରେ ମୋର ନିଜର" },
                        { word: "ତବ ନିଜ-ଜନ", meaning: "ଆପଣଙ୍କ ନିଜର ଶୁଦ୍ଧ ଭକ୍ତଗଣ" },
                        { word: "ପରମ-ବାନ୍ଧବ", meaning: "ଶ୍ରେଷ୍ଠ ପରମ ହିତୈଷୀ ମିତ୍ର" },
                        { word: "ସଂସାର କାରାଗାରେ", meaning: "ଜଡ଼ ସଂସାରରୂପୀ ବନ୍ଦୀଗୃହରେ" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 7,
                    lyric: "ଆନ ନା ଭଜିବ ଭକ୍ତ-ପଦ ବିନୁ,\nରାତୁଲ-ଚରଣେ ଶରଣ ଲଇନୁ,\nଉଦ୍ଧାରହୋ ନାଥ! ମାୟା-ଜାଲ ହ’ତେ ଏ ଦାସେର କେଶେ ଧୋ’ରେ ।। ୭ ।।",
                    translation: "ଶୁଦ୍ଧ ଭକ୍ତଙ୍କ ଶ୍ରୀଚରଣ ବ୍ୟତୀତ ମୁଁ ଆଉ କାହାରିକୁ ଭଜନ କରିବି ନାହିଁ। ଆପଣଙ୍କ ରକ୍ତୋତ୍ପଳ ସଦୃଶ ଅରୁଣିମ କମଳ ଚରଣରେ ମୁଁ ଅନନ୍ୟ ଶରଣ ନେଇଛି। ହେ ନାଥ! ଏହି ଅଧମ ଦାସର କେଶ ଧରି ତାହାକୁ ଏହି ବିଷମ ମାୟାଜାଲରୁ ବଳପୂର୍ବକ ଉଦ୍ଧାର କରନ୍ତୁ!",
                    wordMeanings: [
                        { word: "ଆନ ନା ଭଜିବ", meaning: "ଅନ୍ୟ କାହାକୁ ଭଜିବି ନାହିଁ" },
                        { word: "ଭକ୍ତ-ପଦ ବିନୁ", meaning: "ଭକ୍ତମାନଙ୍କ ଚରଣ ବିନା" },
                        { word: "ରାତୁଲ-ଚରଣେ", meaning: "ରକ୍ତକମଳ ସଦୃଶ ଅରୁଣିମ ଶ୍ରୀଚରଣରେ" },
                        { word: "ଶରଣ ଲଇନୁ", meaning: "ଆଶ୍ରୟ ଗ୍ରହଣ କଲି" },
                        { word: "ଉଦ୍ଧାରହୋ ନାଥ", meaning: "ହେ ପ୍ରଭୁ! ଉଦ୍ଧାର କରନ୍ତୁ" },
                        { word: "ମାୟା-ଜାଲ ହ’ତେ", meaning: "ମାୟାରୂପୀ କୁହୁକ ଜାଲରୁ" },
                        { word: "ଏ ଦାସେର", meaning: "ଏହି ଅଧମ ଦାସର" },
                        { word: "କେଶେ ଧୋ’ରେ", meaning: "ବାଳ ବା କେଶକୁ ଧରି (ଟାଣି ଆଣି)" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 8,
                    lyric: "ପାତକୀରେ ତୁମି କୃପା କର ନାକି?\nଜଗାଇ-ମାଧାଇ ଛିଲ ଯେ ପାତକୀ,\nତାହାତେ ଜେନେଛି, ପ୍ରେମେର ଠାକୁର! ପାତକୀରେଓ ତାର ତୁମି ।। ୮ ।।",
                    translation: "ଆପଣ କ’ଣ ପତିତ-ପାପୀମାନଙ୍କୁ କୃପା କରନ୍ତି ନାହିଁ? ଜଗାଇ ଓ ମାଧାଇ ଯେତେବେଳେ ଘୋର ପାପୀ ଥିଲେ, ଆପଣ ତ ସେମାନଙ୍କୁ କୃପା କରି ଉଦ୍ଧାର କଲେ। ସେଥିରୁ ମୁଁ ଜାଣିପାରିଛି, ହେ ପ୍ରେମର ଠାକୁର! ଆପଣ ଅତି ପାତକୀମାନଙ୍କୁ ମଧ୍ୟ ସହଜରେ ତାରିଦିଅନ୍ତି।",
                    wordMeanings: [
                        { word: "ପାତକୀରେ", meaning: "ପାପୀ ବା ପତିତ ଜନଙ୍କୁ" },
                        { word: "ତୁମି କୃପା କର ନାକି", meaning: "ଆପଣ କ’ଣ କୃପା କରନ୍ତି ନାହିଁ" },
                        { word: "ଜଗାଇ-ମାଧାଇ", meaning: "ଜଗାଇ ଓ ମାଧାଇ ନାମକ ଦୁଇ ମହାପାପୀ" },
                        { word: "ଛିଲ ଯେ ପାତକୀ", meaning: "ଯେଉଁମାନେ ଘୋର ପାପୀ ଥିଲେ" },
                        { word: "ତାହାତେ ଜେନେଛି", meaning: "ସେଥିରୁ ମୁଁ ଜାଣିପାରିଛି" },
                        { word: "ପ୍ରେମେର ଠାକୁର", meaning: "ହେ ପ୍ରେମାବତାର ପ୍ରଭୁ ଗୌରାଙ୍ଗ" },
                        { word: "ପାତକୀରେଓ", meaning: "ପତିତ ପାପୀମାନଙ୍କୁ ମଧ୍ୟ" },
                        { word: "ତାର ତୁମି", meaning: "ଆପଣ ଉଦ୍ଧାର କରନ୍ତି" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 9,
                    lyric: "ଆମି ଭକ୍ତି-ହୀନ, ଦୀନ, ଅକିଞ୍ଚନ –\nଅପରାଧୀ-ଶିରେ ଦାଓ ଦୁ’ ଚରଣ,\nତୋମାର ଅଭୟ ଶ୍ରୀ ଚରଣେ ଚିର – ଶରଣ ଲଇନୁ ଆମି ।। ୯ ।।",
                    translation: "ମୁଁ ସମ୍ପୂର୍ଣ୍ଣ ଭକ୍ତିହୀନ, ଦୀନ ଏବଂ କପର୍ଦ୍ଦକଶୂନ୍ୟ ଅକିଞ୍ଚନ। ମୋ ପରି ଅପରାଧୀର ମସ୍ତକ ଉପରେ ଆପଣଙ୍କ ଦୁଇ ଶ୍ରୀଚରଣ କମଳ ରଖିଦିଅନ୍ତୁ। ଆପଣଙ୍କ ସମସ୍ତ ଭୟହାରୀ ଅଭୟ ଚରଣାରବିନ୍ଦରେ ମୁଁ ଚିରକାଳ ପାଇଁ ଶରଣାପନ୍ନ ହେଲି।",
                    wordMeanings: [
                        { word: "ଆମି", meaning: "ମୁଁ" },
                        { word: "ଭକ୍ତି-ହୀନ", meaning: "ଭକ୍ତିବିହୀନ" },
                        { word: "ଦୀନ", meaning: "ଅତ୍ୟନ୍ତ ଦୁଃଖୀ ଓ କାତର" },
                        { word: "ଅକିଞ୍ଚନ", meaning: "କିଛିହେଲେ ସମ୍ବଳ ନଥିବା ନିଃସ୍ୱ" },
                        { word: "ଅପରାଧୀ-ଶିରେ", meaning: "ମୋ ପରି ଅପରାଧୀର ମସ୍ତକରେ" },
                        { word: "ଦାଓ ଦୁ’ ଚରଣ", meaning: "ଆପଣଙ୍କ ଦୁଇ ଶ୍ରୀଚରଣ ସ୍ଥାପନ କରନ୍ତୁ" },
                        { word: "ତୋମାର", meaning: "ଆପଣଙ୍କର" },
                        { word: "ଅଭୟ ଶ୍ରୀ ଚରଣେ", meaning: "ନିର୍ଭୟ ପ୍ରଦାନକାରୀ ଶ୍ରୀଚରଣ କମଳରେ" },
                        { word: "ଚିର", meaning: "ଚିରଦିନ ପାଇଁ" },
                        { word: "ଶରଣ ଲଇନୁ", meaning: "ଆଶ୍ରୟ ନେଲି" }
                    ],
                    status: 'COMPLETED'
                }
            ]
        },
        published: true,
        verified: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nityasiddhaparsadasaba',
        title: 'ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ (Nitya-Siddha Pārṣada Saba Rādhā-Kṛṣṇa Smare)',
        title_odia: 'ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ',
        title_english: 'Nitya-Siddha Parsada Saba Radha-Krsna Smare',
        category: 'Songs',
        type: 'html',
        author: 'Srila Prabhupada',
        description: 'ଶ୍ରୀଳ ପ୍ରଭୁପାଦଙ୍କ ବିରଚିତ \'ବୃନ୍ଦାବନେ ଭଜନ\' (୧୯୫୮) କବିତାରୁ ଗୃହୀତ ପରମ ଉପଦେଶାମୃତ, ଯେଉଁଥିରେ ପ୍ରକୃତ ଭଜନ ଏବଂ ହରିନାମ ପ୍ରଚାରର ମହିମା ପ୍ରକାଶିତ ।',
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_A_C_Bhaktivedanta_Swami_Prabhupada/Nitya_Siddha_Parsada_Saba_Radha_Krsna_Smare/07_-_Nitya_Siddha_Parsada_Saba_Radha_Krsna_Smare_-_Sung_by_HG_Ananda_Radhe_Mataji_IDT.mp3',
        vocalist: 'HG Ananda Radhe Mataji',
        audioVersions: [
            { label: 'HG Ananda Radhe Mataji', url: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_A_C_Bhaktivedanta_Swami_Prabhupada/Nitya_Siddha_Parsada_Saba_Radha_Krsna_Smare/07_-_Nitya_Siddha_Parsada_Saba_Radha_Krsna_Smare_-_Sung_by_HG_Ananda_Radhe_Mataji_IDT.mp3' }
        ],
        structuredContent: {
            id: 'song-nityasiddhaparsadasaba',
            title: 'ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ (Nitya-Siddha Pārṣada Saba Rādhā-Kṛṣṇa Smare)',
            title_odia: 'ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ',
            title_english: 'Nitya-Siddha Parsada Saba Radha-Krsna Smare',
            author: 'Srila Prabhupada',
            category: 'Songs',
            verses: [
                {
                    id: 1,
                    lyric: "ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ ରାଧା-କୃଷ୍ଣ ସ୍ମରେ ।\nତାଁଦେର ସ୍ମରଣ ଜୀବେର ସର୍ବ-ପାପ ହରେ ।। ୧ ।।",
                    translation: "ଭଗବାନଙ୍କ ନିତ୍ୟସିଦ୍ଧ ପାର୍ଷଦଗଣ ସର୍ବଦା ଶ୍ରୀଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ଚିନ୍ତନ ଓ ସ୍ମରଣ କରନ୍ତି। ସେହିଭଳି ମହାନ୍ ପାର୍ଷଦମାନଙ୍କୁ ସ୍ମରଣ କରିବା ଦ୍ୱାରା ବଦ୍ଧଜୀବର ସମସ୍ତ ପାପ ଦୂର ହୋଇଯାଏ।",
                    wordMeanings: [
                        { word: "ନିତ୍ୟ-ସିଦ୍ଧ", meaning: "ଚିରନ୍ତନ ମୁକ୍ତ ଓ ସିଦ୍ଧ" },
                        { word: "ପାର୍ଷଦ ସବ", meaning: "ଭଗବାନଙ୍କ ସମସ୍ତ ନିତ୍ୟ ସଖା ଓ ସେବକଗଣ" },
                        { word: "ରାଧା-କୃଷ୍ଣ ସ୍ମରେ", meaning: "ଶ୍ରୀଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କୁ ସ୍ମରଣ କରନ୍ତି" },
                        { word: "ତାଁଦେର ସ୍ମରଣ", meaning: "ସେହି ଭକ୍ତମାନଙ୍କୁ ସ୍ମରଣ କରିବା ଦ୍ୱାରା" },
                        { word: "ଜୀବେର", meaning: "ସାଂସାରିକ ବଦ୍ଧଜୀବର" },
                        { word: "ସର୍ବ-ପାପ", meaning: "ସମସ୍ତ ପାପ ଓ କଳୁଷତା" },
                        { word: "ହରେ", meaning: "ବିନାଶ ହୋଇଯାଏ" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 2,
                    lyric: "ଅନୁକରଣ କରି ଯଦି ସେଇ ଭାବ ଧରେ ।\nମାୟା-କବଳିତ ହୟ ସଂସାର ନା ତରେ ।। ୨ ।।",
                    translation: "ଯଦି କୌଣସି ଅନଧିକାରୀ ବ୍ୟକ୍ତି ସେହି ଉଚ୍ଚାଙ୍ଗ ସିଦ୍ଧ ଭାବକୁ କୃତ୍ରିମ ଭାବେ ଅନୁକରଣ କରିବାର ଚେଷ୍ଟା କରେ, ତେବେ ସେ ମାୟା ଦ୍ୱାରା ଗ୍ରସିତ ହୋଇପଡ଼େ ଏବଂ ଏହି ଭବସଂସାରରୁ କଦାପି ତରିପାରେ ନାହିଁ।",
                    wordMeanings: [
                        { word: "ଅନୁକରଣ କରି", meaning: "କୃତ୍ରିମ ଭାବେ ନକଲ କରି" },
                        { word: "ଯଦି", meaning: "ଯଦି କେହି" },
                        { word: "ସେଇ ଭାବ ଧରେ", meaning: "ସେହି ସିଦ୍ଧ ଭାବନା ପ୍ରଦର୍ଶନ କରେ" },
                        { word: "ମାୟା-କବଳିତ ହୟ", meaning: "ମାୟାର ଗ୍ରାସରେ ପଡ଼ିଯାଏ" },
                        { word: "ସଂସାର", meaning: "ଜଡ଼ ଭବସଂସାରକୁ" },
                        { word: "ନା ତରେ", meaning: "ପାରି ହୋଇପାରେ ନାହିଁ" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 3,
                    lyric: "ପ୍ରଚାର କରହୋ ସଦା ଜୀବ ଘରେ ଘରେ ।\nସଫଳ ହଇବେ ଜୀବନ ପ୍ରଚାରେର ଦ୍ୱାରେ ।। ୩ ।।",
                    translation: "ତେଣୁ ସର୍ବଦା ପ୍ରତ୍ୟେକ ଜୀବଙ୍କ ଘରେ ଘରେ ଯାଇ ହରିନାମ ଓ ଶୁଦ୍ଧ ଭକ୍ତିର ପ୍ରଚାର କର! ଏହି ପ୍ରଚାର କାର୍ଯ୍ୟ ଦ୍ୱାରା ହିଁ ମାନବ ଜୀବନ ପୂର୍ଣ୍ଣ ରୂପେ ସାର୍ଥକ ଓ ସଫଳ ହେବ।",
                    wordMeanings: [
                        { word: "ପ୍ରଚାର କରହୋ", meaning: "ଭଗବତ୍-ବାଣୀ ପ୍ରଚାର କର" },
                        { word: "ସଦା", meaning: "ସର୍ବଦା" },
                        { word: "ଜୀବ ଘରେ ଘରେ", meaning: "ପ୍ରତ୍ୟେକ ବ୍ୟକ୍ତିଙ୍କ ଘରେ ଘରେ ଯାଇ" },
                        { word: "ସଫଳ ହଇବେ", meaning: "ସାର୍ଥକ ଓ ସଫଳ ହେବ" },
                        { word: "ଜୀବନ", meaning: "ମାନବ ଜୀବନ" },
                        { word: "ପ୍ରଚାରେର ଦ୍ୱାରେ", meaning: "ହରିନାମ ପ୍ରଚାର ମାଧ୍ୟମରେ" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 4,
                    lyric: "ଶ୍ରୀ ଦୟିତ-ଦାସ ପ୍ରଭୁ ଦେନ ଏଇ ଶିକ୍ଷା ।\nକର ଉଚ୍ଚୈଃ ସ୍ୱରେ ନାମ ଏଇ ତାଁର ଦୀକ୍ଷା ।। ୪ ।।",
                    translation: "ଶ୍ରୀ ଦୟିତ ଦାସ (ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ଗୋସ୍ୱାମୀ ଠାକୁର) ଏହି ଉପଦେଶ ଦେଇଛନ୍ତି ଯେ— ଉଚ୍ଚ ସ୍ୱରରେ ହରିନାମ ସଙ୍କୀର୍ତ୍ତନ କର! ପ୍ରକୃତରେ ଏହା ହିଁ ତାଙ୍କର ପ୍ରକୃତ ଦୀକ୍ଷା ଓ ଆଜ୍ଞା।",
                    wordMeanings: [
                        { word: "ଶ୍ରୀ ଦୟିତ-ଦାସ ପ୍ରଭୁ", meaning: "ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ଠାକୁର" },
                        { word: "ଦେନ ଏଇ ଶିକ୍ଷା", meaning: "ଏହି ଉପଦେଶ ପ୍ରଦାନ କରନ୍ତି" },
                        { word: "କର ଉଚ୍ଚୈଃ ସ୍ୱରେ", meaning: "ଉଚ୍ଚ କଣ୍ଠରେ ଗାନ କର" },
                        { word: "ନାମ", meaning: "ଶ୍ରୀ ହରେକୃଷ୍ଣ ମହାମନ୍ତ୍ର" },
                        { word: "ଏଇ ତାଁର ଦୀକ୍ଷା", meaning: "ଏହା ହିଁ ତାଙ୍କର ପ୍ରକୃତ ଦୀକ୍ଷା ଓ ଶିକ୍ଷା" }
                    ],
                    status: 'COMPLETED'
                }
            ]
        },
        published: true,
        verified: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nityanandadvadasanama',
        title: 'ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁଃ - ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍ (Nityānando \'Vadhūtendur)',
        title_odia: 'ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁଃ - ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍',
        title_english: 'Nityanando Vadhutendur - Sri Nityananda Dvadasha Nama Stotram',
        category: 'Songs',
        type: 'html',
        author: 'Sarvabhauma Bhattacarya',
        tags: ['Nitayando', 'Nitayando Vadhutendur', 'Nityanando Vadhutendur', 'Nityananda Vadhutendur', 'Sri Nityananda Dvadasha Nama Stotram', 'Nityananda Dvadasha Nama Stotram', 'Nityananda', 'Dvadasha Nama Stotram', 'Avadhutendur', 'Vadhutendur', 'Dvadash Nama'],
        description: 'ଶ୍ରୀଳ ସାର୍ବଭୌମ ଭଟ୍ଟାଚାର୍ଯ୍ୟଙ୍କ ବିରଚିତ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଚନ୍ଦ୍ରଙ୍କ ପରମ ମଙ୍ଗଳମୟ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍ |',
        audioUrl: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sri%20Nityananda%20Dvadasha%20Nama%20Stotram%20Srila%20Sarvabhauma%20Bhattacharya%20Yashoda%20Kumar%20Dasa.mp3',
        vocalist: 'HG Yashoda Kumar Dasa',
        audioVersions: [
            { label: 'HG Yashoda Kumar Dasa', url: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sri%20Nityananda%20Dvadasha%20Nama%20Stotram%20Srila%20Sarvabhauma%20Bhattacharya%20Yashoda%20Kumar%20Dasa.mp3' }
        ],
        structuredContent: {
            id: 'song-nityanandadvadasanama',
            title: 'ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁଃ - ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍ (Nityānando \'Vadhūtendur)',
            title_odia: 'ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁଃ - ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଦ୍ୱାଦଶ ନାମ ସ୍ତୋତ୍ରମ୍',
            title_english: 'Nityanando Vadhutendur - Sri Nityananda Dvadasha Nama Stotram',
            author: 'Sarvabhauma Bhattacarya',
            category: 'Songs',
            verses: [
                {
                    id: 1,
                    lyric: "ନିତ୍ୟାନନ୍ଦୋଽବଧୂତେନ୍ଦୁର୍ ବସୁଧା-ପ୍ରାଣ-ବଲ୍ଲଭଃ ।\nଜାହ୍ନବୀ-ଜୀବିତ-ପତିଃ କୃଷ୍ଣ-ପ୍ରେମ-ପ୍ରଦଃ ପ୍ରଭୁଃ ।। ୧ ।।",
                    translation: "ଶ୍ରୀମନ୍ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁ ହେଉଛନ୍ତି ଚିରନ୍ତନ ଆନନ୍ଦସ୍ୱରୂପ। ସେ ସମସ୍ତ ଅବଧୂତମାନଙ୍କ ମଧ୍ୟରେ ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସଦୃଶ ଏବଂ ମାତା ବସୁଧାଙ୍କର ପ୍ରାଣପ୍ରିୟ ପତି। ସେ ମାତା ଜାହ୍ନବୀ ଦେବୀଙ୍କ ଜୀବନସର୍ବସ୍ୱ ପ୍ରାଣେଶ୍ୱର, ଜଗତର ଜୀବମାନଙ୍କୁ ଦିବ୍ୟ ଶ୍ରୀକୃଷ୍ଣ-ପ୍ରେମ ପ୍ରଦାନକାରୀ ଏବଂ ସର୍ବନିୟନ୍ତା ପ୍ରଭୁ ଅଟନ୍ତି।",
                    wordMeanings: [
                        { word: "ନିତ୍ୟାନନ୍ଦଃ", meaning: "ଚିରନ୍ତନ ଆନନ୍ଦସ୍ୱରୂପ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ (ପ୍ରଥମ ନାମ)" },
                        { word: "ଅବଧୂତେନ୍ଦୁଃ", meaning: "ସମସ୍ତ ଅବଧୂତମାନଙ୍କ ମଧ୍ୟରେ ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସଦୃଶ (ଦ୍ୱିତୀୟ ନାମ)" },
                        { word: "ବସୁଧା-ପ୍ରାଣ-ବଲ୍ଲଭଃ", meaning: "ମାତା ବସୁଧାଙ୍କ ପ୍ରାଣପ୍ରିୟ ସ୍ୱାମୀ (ତୃତୀୟ ନାମ)" },
                        { word: "ଜାହ୍ନବୀ-ଜୀବିତ-ପତିଃ", meaning: "ମାତା ଜାହ୍ନବୀ ଦେବୀଙ୍କ ଜୀବନଧନ ପ୍ରଭୁ (ଚତୁର୍ଥ ନାମ)" },
                        { word: "କୃଷ୍ଣ-ପ୍ରେମ-ପ୍ରଦଃ", meaning: "ବିଶୁଦ୍ଧ କୃଷ୍ଣପ୍ରେମ ବିତରଣକାରୀ (ପଞ୍ଚମ ନାମ)" },
                        { word: "ପ୍ରଭୁଃ", meaning: "ସର୍ବେଶ୍ୱର ପରମ ପ୍ରଭୁ (ଷଷ୍ଠ ନାମ)" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 2,
                    lyric: "ପଦ୍ମାବତୀ-ସୁତଃ ଶ୍ରୀମାନ୍ ଶଚୀ-ନନ୍ଦନ-ପୂର୍ବଜଃ ।\nଭାବୋନ୍ମତ୍ତୋ ଜଗତ୍-ତ୍ରାତା ରକ୍ତ-ଗୌର-କଳେବରଃ ।। ୨ ।।",
                    translation: "ସେ ମାତା ପଦ୍ମାବତୀଙ୍କ ପ୍ରିୟ ପୁତ୍ର, ଅନନ୍ତ ଐଶ୍ୱର୍ଯ୍ୟ ଓ ଶୋଭାରେ ମଣ୍ଡିତ ଶ୍ରୀମାନ୍, ଏବଂ ଶଚୀନନ୍ଦନ ଶ୍ରୀ ଗୌରହରିଙ୍କ ଜ୍ୟେଷ୍ଠ ଭ୍ରାତା ଅଟନ୍ତି। ସେ ଦିବ୍ୟ ଭଗବତ୍-ପ୍ରେମଭାବରେ ସର୍ବଦା ଉନ୍ମତ୍ତ, ସମଗ୍ର ବିଶ୍ୱବ୍ରହ୍ମାଣ୍ଡର ପରମ ତ୍ରାଣକର୍ତ୍ତା ଏବଂ ରକ୍ତିମ-ସ୍ୱର୍ଣ୍ଣାଭ କାନ୍ତିରେ ସୁଶୋଭିତ ଶ୍ରୀବିଗ୍ରହ ଅଟନ୍ତି।",
                    wordMeanings: [
                        { word: "ପଦ୍ମାବତୀ-ସୁତଃ", meaning: "ମାତା ପଦ୍ମାବତୀଙ୍କ ଦିବ୍ୟ ପୁତ୍ର (ସପ୍ତମ ନାମ)" },
                        { word: "ଶ୍ରୀମାନ୍", meaning: "ପରମ ଶୋଭା ଓ ଐଶ୍ୱର୍ଯ୍ୟରେ ପରିପୂର୍ଣ୍ଣ (ଅଷ୍ଟମ ନାମ)" },
                        { word: "ଶଚୀ-ନନ୍ଦନ-ପୂର୍ବଜଃ", meaning: "ଶଚୀମାତାଙ୍କ ପୁତ୍ର ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ବଡ଼ ଭାଇ (ନବମ ନାମ)" },
                        { word: "ଭାବୋନ୍ମତ୍ତଃ", meaning: "ପରମ ପ୍ରେମଭାବରେ ସର୍ବଦା ମତ୍ତ (ଦଶମ ନାମ)" },
                        { word: "ଜଗତ୍-ତ୍ରାତା", meaning: "ସମସ୍ତ ସଂସାରର ପରମ ଉଦ୍ଧାରକର୍ତ୍ତା (ଏକାଦଶ ନାମ)" },
                        { word: "ରକ୍ତ-ଗୌର-କଳେବରଃ", meaning: "ରକ୍ତିମ ମିଶ୍ରିତ ଉଜ୍ଜ୍ୱଳ ସୁବର୍ଣ୍ଣ କାନ୍ତିବିଶିଷ୍ଟ ଶରୀର (ଦ୍ୱାଦଶ ନାମ)" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 3,
                    lyric: "ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ-ଚନ୍ଦ୍ରସ୍ୟ ନାମ-ଦ୍ୱାଦଶକଂ ଶୁଭମ୍ ।\nଯ ଇଦଂ ପ୍ରତ୍ୟହଂ ପ୍ରାତଃ ପ୍ରତ୍ୟୁତ୍ଥାୟ ପଠେନ୍ ନରଃ ।। ୩ ।।",
                    translation: "ଯେଉଁ ଭାଗ୍ୟବାନ ମନୁଷ୍ୟ ପ୍ରତ୍ୟହ ପ୍ରାତଃକାଳରେ ଶଯ୍ୟା ତ୍ୟାଗ କରି ଉଠିବା ମାତ୍ରେ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ-ଚନ୍ଦ୍ରଙ୍କ ଏହି ଅତ୍ୟନ୍ତ ଶୁଭଙ୍କର ଓ ମଙ୍ଗଳମୟ ବାରୋଟି ପବିତ୍ର ନାମ ଭକ୍ତିପୂର୍ବକ ପାଠ କରନ୍ତି...",
                    wordMeanings: [
                        { word: "ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ-ଚନ୍ଦ୍ରସ୍ୟ", meaning: "ଚନ୍ଦ୍ର ସଦୃଶ ଆନନ୍ଦଦାୟକ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦଙ୍କର" },
                        { word: "ନାମ-ଦ୍ୱାଦଶକମ୍", meaning: "ବାରୋଟି ପବିତ୍ର ନାମାବଳୀ" },
                        { word: "ଶୁଭମ୍", meaning: "ପରମ ମଙ୍ଗଳମୟ" },
                        { word: "ଯଃ ନରଃ", meaning: "ଯେଉଁ ମନୁଷ୍ୟ" },
                        { word: "ଇଦମ୍", meaning: "ଏହି ସ୍ତୋତ୍ରକୁ" },
                        { word: "ପ୍ରତ୍ୟହମ୍", meaning: "ପ୍ରତିଦିନ" },
                        { word: "ପ୍ରାତଃ", meaning: "ପ୍ରଭାତ ସମୟରେ" },
                        { word: "ପ୍ରତ୍ୟୁତ୍ଥାୟ", meaning: "ଶଯ୍ୟାରୁ ଉଠି" },
                        { word: "ପଠେତ୍", meaning: "ପାଠ କରନ୍ତି" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 4,
                    lyric: "ସ କ୍ଲେଶ-ରହିତୋ ଭୂତ୍ୱା ପ୍ରାପ୍ନୁୟାତ୍ ସ୍ୱ-ମନୋ-ରଥମ୍ ।\nତୂର୍ଣ୍ଣଂ ଚୈତନ୍ୟ-ଦେବସ୍ୟ କରୁଣା-ଭାଜନଂ ଭବେତ୍ ।। ୪ ।।",
                    translation: "...ସେହି ବ୍ୟକ୍ତି ସମସ୍ତ ପ୍ରକାର ଆଧିଭୌତିକ, ଆଧିଦୈବିକ ଓ ଆଧ୍ୟାତ୍ମିକ ଦୁଃଖ-କ୍ଲେଶରୁ ମୁକ୍ତ ହୋଇ ନିଜର ସମସ୍ତ ମନୋରଥ (ଭକ୍ତିପୂର୍ଣ୍ଣ ଅଭିଳାଷ) ପ୍ରାପ୍ତ କରନ୍ତି ଏବଂ ଅତି ଶୀଘ୍ର ପ୍ରଭୁ ଶ୍ରୀ ଚୈତନ୍ୟଦେବଙ୍କ ପରମ ଅହେତୁକୀ କୃପାର ଯୋଗ୍ୟ ପାତ୍ର ହୋଇଯାଆନ୍ତି।",
                    wordMeanings: [
                        { word: "ସଃ", meaning: "ସେହି ବ୍ୟକ୍ତି" },
                        { word: "କ୍ଲେଶ-ରହିତଃ ଭୂତ୍ୱା", meaning: "ସମସ୍ତ ପ୍ରକାର ଦୁଃଖ ଓ ଯନ୍ତ୍ରଣାରୁ ମୁକ୍ତ ହୋଇ" },
                        { word: "ପ୍ରାପ୍ନୁୟାତ୍", meaning: "ପ୍ରାପ୍ତ କରନ୍ତି" },
                        { word: "ସ୍ୱ-ମନୋ-ରଥମ୍", meaning: "ନିଜର ସମସ୍ତ ଶୁଦ୍ଧ ମନସ୍କାମନା" },
                        { word: "ତୂର୍ଣ୍ଣମ୍", meaning: "ଅତି ଶୀଘ୍ର" },
                        { word: "ଚୈତନ୍ୟ-ଦେବସ୍ୟ", meaning: "ଭଗବାନ ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ" },
                        { word: "କରୁଣା-ଭାଜନମ୍", meaning: "ଦିବ୍ୟ କୃପାର ଯୋଗ୍ୟ ପାତ୍ର" },
                        { word: "ଭବେତ୍", meaning: "ହୋଇଯାଆନ୍ତି" }
                    ],
                    status: 'COMPLETED'
                }
            ]
        },
        published: true,
        verified: true,
        status: 'COMPLETED'
    },
    {
        id: 'song-nitaimorajibanadhana',
        title: 'ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି (Nitai Mora Jibana Dhana Nitai Mora Jati)',
        title_odia: 'ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି',
        title_english: 'Nitai Mora Jibana Dhana Nitai Mora Jati',
        category: 'Songs',
        type: 'html',
        author: 'Locana Dasa Thakura',
        tags: ['Nitai Mora Jibana Dhana', 'Nitai Mora Jibana Dhana Nitai Mora Jati', 'Nitai Mora Jati', 'Nitai Mor', 'Locana Dasa Thakura', 'ନିତାଇ ମୋର ଜୀବନ ଧନ'],
        description: 'ଶ୍ରୀଳ ଲୋଚନ ଦାସ ଠାକୁରଙ୍କ ବିରଚିତ ପରମ କରୁଣାମୟ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଚନ୍ଦ୍ରଙ୍କ ମହିମାସୂଚକ ଭଜନ ।',
        audioUrl: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FmuO7xOqQ1LlY.128.mp3',
        vocalist: 'Vaishnavas',
        audioVersions: [
            { label: 'Vaishnavas', url: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FmuO7xOqQ1LlY.128.mp3' },
            { label: 'HG Vishakha Mataji', url: 'https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FNitai%20Mor.mp3' }
        ],
        structuredContent: {
            id: 'song-nitaimorajibanadhana',
            title: 'ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି (Nitai Mora Jibana Dhana Nitai Mora Jati)',
            title_odia: 'ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି',
            title_english: 'Nitai Mora Jibana Dhana Nitai Mora Jati',
            author: 'Locana Dasa Thakura',
            category: 'Songs',
            reference_url: 'https://vsnectar.web.app/home/songs/Nitai%20Mora%20Jibana%20Dhana%20Nitai%20Mora%20Jati_More%20Songs_6',
            verses: [
                {
                    id: 1,
                    lyric: "ନିତାଇ ମୋର ଜୀବନ ଧନ ନିତାଇ ମୋର ଜାତି ।\nନିତାଇ ବିହନେ ମୋର ଆର ନାହି ଗତି ।। ୧ ।।",
                    translation: "ଶ୍ରୀମନ୍ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁ ହିଁ ମୋ ଜୀବନର ସର୍ବସ୍ୱ ଧନ ଏବଂ ନିତାଇ ହିଁ ମୋର କୂଳ-ଗୋତ୍ର ତଥା ପ୍ରକୃତ ଜାତି। ନିତାଇଙ୍କର ଶ୍ରୀଚରଣ ବିନା ଏହି ସଂସାରରେ ମୋର ଅନ୍ୟ କୌଣସି ଗତି ବା ଆଶ୍ରୟ ନାହିଁ।",
                    wordMeanings: [
                        { word: "ନିତାଇ", meaning: "ପରମ କାରୁଣିକ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ" },
                        { word: "ମୋର", meaning: "ମୋହର" },
                        { word: "ଜୀବନ ଧନ", meaning: "ପ୍ରାଣର ସର୍ବସ୍ୱ ଧନସମ୍ପତ୍ତି" },
                        { word: "ଜାତି", meaning: "କୂଳ-ଗୋତ୍ର ବା ପ୍ରକୃତ ସମ୍ବନ୍ଧ" },
                        { word: "ନିତାଇ ବିହନେ", meaning: "ଶ୍ରୀ ନିତାଇଙ୍କ ବିନା" },
                        { word: "ଆର", meaning: "ଅନ୍ୟ କୌଣସି" },
                        { word: "ନାହି ଗତି", meaning: "ସଦ୍‌ଗତି ବା ଆଶ୍ରୟ ନାହିଁ" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 2,
                    lyric: "ସଂସାର ସୁଖେର ମୁଖେ ତୁଲେ ଦିବ ଛାଇ ।\nନଗରେ ମାଗିୟା ଖାବ ଗାଇବ ନିତାଇ ।। ୨ ।।",
                    translation: "ଏହି ଅସାର ଜଡ଼ ସାଂସାରିକ ସୁଖର ମୁହଁରେ ମୁଁ ପାଉଁଶ ଫିଙ୍ଗିଦେବି (ସମସ୍ତ ଭୋଗବାସନାକୁ ଧିକ୍କାର କରିବି)। ନଗରେ ନଗରେ କେବଳ ଭିକ୍ଷା କରି ଯାହା ମିଳିବ ତାହା ଖାଇ ଜୀବନ ଧାରଣ କରିବି, କିନ୍ତୁ ସର୍ବଦା ନିତାଇଙ୍କ ଶ୍ରୀନାମ ହିଁ ଗାନ କରିବି।",
                    wordMeanings: [
                        { word: "ସଂସାର ସୁଖେର ମୁଖେ", meaning: "ଜାଗତିକ ଭୋଗ-ସୁଖର ମୁହଁରେ" },
                        { word: "ତୁଲେ ଦିବ ଛାଇ", meaning: "ପାଉଁଶ ଛାଟିଦେବି (ତ୍ୟାଗ କରି ଧିକ୍କାର କରିବି)" },
                        { word: "ନଗରେ", meaning: "ନଗର ଓ ଗ୍ରାମରେ" },
                        { word: "ମାଗିୟା ଖାବ", meaning: "ଭିକ୍ଷା କରି କେବଳ ଉଦର ପୋଷଣ କରିବି" },
                        { word: "ଗାଇବ ନିତାଇ", meaning: "ଶ୍ରୀ ନିତାଇଙ୍କ ନାମ-ଗୁଣ କୀର୍ତ୍ତନ କରିବି" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 3,
                    lyric: "ଯେ ଦେଶେ ନିତାଇ ନାଇ ସେ ଦେଶେ ନା ଯାବ ।\nନିତାଇ ବିମୁଖ ଜନାର ମୁଖ ନା ହେରିବ ।। ୩ ।।",
                    translation: "ଯେଉଁ ଦେଶ ବା ସ୍ଥାନରେ ପ୍ରଭୁ ନିତାଇଙ୍କ ଚର୍ଚ୍ଚା ନାହିଁ, ମୁଁ କଦାପି ସେହି ଦେଶକୁ ଯିବି ନାହିଁ। ଯେଉଁ ବ୍ୟକ୍ତି ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କ ପ୍ରତି ବିମୁଖ, ତାହାର ମୁହଁ ମଧ୍ୟ ମୁଁ କେବେ ଦେଖିବି ନାହିଁ।",
                    wordMeanings: [
                        { word: "ଯେ ଦେଶେ", meaning: "ଯେଉଁ ସ୍ଥାନ ବା ଭୂଖଣ୍ଡରେ" },
                        { word: "ନିତାଇ ନାଇ", meaning: "ଶ୍ରୀ ନିତାଇଙ୍କ ସ୍ମରଣ ବା ଭକ୍ତ ନାହାନ୍ତି" },
                        { word: "ସେ ଦେଶେ", meaning: "ସେହି ସ୍ଥାନକୁ" },
                        { word: "ନା ଯାବ", meaning: "ମୁଁ ଯିବି ନାହିଁ" },
                        { word: "ନିତାଇ ବିମୁଖ ଜନାର", meaning: "ଶ୍ରୀ ନିତାଇଙ୍କ ପ୍ରତି ଅନାଦର ପ୍ରଦର୍ଶନ କରୁଥିବା ବ୍ୟକ୍ତିର" },
                        { word: "ମୁଖ ନା ହେରିବ", meaning: "ମୁହଁ କଦାପି ଦର୍ଶନ କରିବି ନାହିଁ" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 4,
                    lyric: "ଗଙ୍ଗା ଯାର ପଦ ଜଲ ହର ଶିରେ ଧରେ ।\nହେନ ନିତାଇ ନା ଭଜିୟା ଦୁଃଖ ପେୟେ ମୋରେ ।। ୪ ।।",
                    translation: "ଯାହାଙ୍କ ଶ୍ରୀଚରଣ ଧୌତ ଜଳକୁ ସ୍ୱୟଂ ଦେବାଦିଦେବ ମହାଦେବ ନିଜ ମସ୍ତକରେ ଶ୍ରଦ୍ଧାପୂର୍ବକ ଧାରଣ କରନ୍ତି (ଗଙ୍ଗା ରୂପରେ), ସେହିଭଳି ପରମ ପାବନ ଶ୍ରୀ ନିତାଇଙ୍କୁ ଭଜନ ନ କରି ମୂଢ଼ ଜୀବ କେବଳ ସଂସାର ଦୁଃଖ ଓ ଯନ୍ତ୍ରଣା ଭୋଗି ବିନାଶ ହୋଇଯାଏ।",
                    wordMeanings: [
                        { word: "ଗଙ୍ଗା", meaning: "ପବିତ୍ର ପତିତପାବନୀ ଶ୍ରୀ ଗଙ୍ଗାଜଳ" },
                        { word: "ଯାର ପଦ ଜଲ", meaning: "ଯେଉଁ ପ୍ରଭୁ ନିତାଇଙ୍କ ଚରଣାମୃତ" },
                        { word: "ହର ଶିରେ ଧରେ", meaning: "ଭଗବାନ ଶିବ ନିଜ ମସ୍ତକରେ ଧାରଣ କରନ୍ତି" },
                        { word: "ହେନ ନିତାଇ", meaning: "ଏପରି ପରମ କୃପାମୟ ନିତାଇଙ୍କୁ" },
                        { word: "ନା ଭଜିୟା", meaning: "ଭଜନ ଓ ଆରାଧନା ନ କରି" },
                        { word: "ଦୁଃଖ ପେୟେ ମୋରେ", meaning: "କେବଳ ଦୁଃଖ-କଷ୍ଟ ପାଇ ମୃତ୍ୟୁବରଣ କରେ" }
                    ],
                    status: 'COMPLETED'
                },
                {
                    id: 5,
                    lyric: "ଲୋଚନ ବୋଲେ ମୋର ନିତାଇ ଯେବା ନାହି ମାନେ ।\nଅନଳ ଭେଜାଇ ତାର ମାଝ ମୁଖଖାନେ ।। ୫ ।।",
                    translation: "ଲୋଚନ ଦାସ ଠାକୁର କହନ୍ତି— ଯେଉଁ ଦୁର୍ଭାଗା ମୋ’ ପ୍ରାଣର ନିତାଇଙ୍କୁ ସ୍ୱୀକାର କରେ ନାହିଁ ବା ତାଙ୍କର ମହିମା ମାନେ ନାହିଁ, ତାହାର ମୁହଁ ମଧ୍ୟରେ ଅଗ୍ନି ପ୍ରବେଶ କରାଇଦେବା ଉଚିତ୍ (ଅର୍ଥାତ୍ ନିତାଇ-ବିମୁଖ ମୁଖ କେବଳ ଅନଳର ଦହନ ଯୋଗ୍ୟ)।",
                    wordMeanings: [
                        { word: "ଲୋଚନ ବୋଲେ", meaning: "ଭକ୍ତକବି ଶ୍ରୀ ଲୋଚନ ଦାସ କହନ୍ତି" },
                        { word: "ମୋର ନିତାଇ", meaning: "ମୋର ପ୍ରିୟ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦଙ୍କୁ" },
                        { word: "ଯେବା ନାହି ମାନେ", meaning: "ଯେଉଁ ଅଧମ ବ୍ୟକ୍ତି ସ୍ୱୀକାର କରେ ନାହିଁ" },
                        { word: "ଅନଳ ଭେଜାଇ", meaning: "ନିଆଁ ବା ଅଗ୍ନି ପ୍ରବେଶ କରାଉ" },
                        { word: "ତାର ମାଝ ମୁଖଖାନେ", meaning: "ତାହାର ମୁହଁ ଭିତରକୁ" }
                    ],
                    status: 'COMPLETED'
                }
            ]
        },
        published: true,
        verified: true,
        status: 'COMPLETED'
    },
    {
        id: "song-agrekurunama",
        title: "ଅଗ୍ରେ କୁରୂଣାମ୍ ଅଥ - ଶ୍ରୀ ଗୋବିନ୍ଦ ଦାମୋଦର ସ୍ତୋତ୍ରମ୍ (Agre Kurunam Atha - Sri Govinda Damodara Stotram)",
        title_odia: "ଅଗ୍ରେ କୁରୂଣାମ୍ ଅଥ - ଶ୍ରୀ ଗୋବିନ୍ଦ ଦାମୋଦର ସ୍ତୋତ୍ରମ୍",
        title_english: "Agre Kurunam Atha - Sri Govinda Damodara Stotram",
        category: "Songs",
        type: "html",
        author: "Bilvamangala Thakura",
        tags: [
            "Agre Kurunam Atha",
            "Agre Kurunam",
            "Sri Govinda Damodara Stotram",
            "Govinda Damodara Stotram",
            "Govinda Damodara Madhaveti",
            "Bilvamangala Thakura",
            "ଅଗ୍ରେ କୁରୂଣାମ୍ ଅଥ",
            "ଶ୍ରୀ ଗୋବିନ୍ଦ ଦାମୋଦର ସ୍ତୋତ୍ରମ୍",
            "ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି"
        ],
        description: "ଶ୍ରୀଳ ବିଲ୍ୱମଙ୍ଗଳ ଠାକୁରଙ୍କ ବିରଚିତ ପରମ ମଧୁର ଶ୍ରୀ ଗୋବିନ୍ଦ ଦାମୋଦର ସ୍ତୋତ୍ରମ୍ (୭୧ ଶ୍ଳୋକ)।",
        audioUrl: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FGovinda%20Damodara%20Madhaveti%20by%20HHBRSM%20_%20Agre%20Kurunam%20Atha%20Bilvamangal%20Thakur%20Lyrics%20Krsna%20Karnamrita.mp3",
        vocalist: "HH Bhakti Rasamrita Swami",
        audioVersions: [
            {
                label: "HH Bhakti Rasamrita Swami",
                url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FGovinda%20Damodara%20Madhaveti%20by%20HHBRSM%20_%20Agre%20Kurunam%20Atha%20Bilvamangal%20Thakur%20Lyrics%20Krsna%20Karnamrita.mp3"
            },
            {
                label: "HG Yasoda Kumara Prabhu",
                url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FSri%20Govinda%20Damodara%20Stotram%20_%20Govinda%20Damodara%20Madhaveti%20_%20SWEETEST%20KRISHNA%20SONG%20EVER.mp3"
            },
            {
                label: "HG Amarendra Prabhu",
                url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2Fgovind%20damodar%20madhaveti%20_%20amarendra%20prabhu%20_%20%40is_kc_on%20_Amarendra%20prabhuji%20_%20Srila%20Prabhupada.mp3"
            }
        ],
        structuredContent: {
            id: "song-agrekurunama",
            title: "ଅଗ୍ରେ କୁରୂଣାମ୍ ଅଥ - ଶ୍ରୀ ଗୋବିନ୍ଦ ଦାମୋଦର ସ୍ତୋତ୍ରମ୍ (Agre Kurunam Atha - Sri Govinda Damodara Stotram)",
            title_odia: "ଅଗ୍ରେ କୁରୂଣାମ୍ ଅଥ - ଶ୍ରୀ ଗୋବିନ୍ଦ ଦାମୋଦର ସ୍ତୋତ୍ରମ୍",
            title_english: "Agre Kurunam Atha - Sri Govinda Damodara Stotram",
            author: "Bilvamangala Thakura",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Agre%20Kurunam%20Atha_",
            verses: [
                {
                    id: 1,
                    lyric: "ଅଗ୍ରେ କୁରୂଣାମ୍ ଅଥ ପାଣ୍ଡବାନାଂ ଦୁଃଶାସନେନାହୃତ-ବସ୍ତ୍ର-କେଶା ।\nକୃଷ୍ଣା ତଦାକ୍ରୋଶଦ୍ ଅନନ୍ୟ-ନାଥା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧ ।।",
                    translation: "କୁରୁ ଓ ପାଣ୍ଡବମାନଙ୍କ ସଭା ମଧ୍ୟରେ ଦୁଃଶାସନ ଯେତେବେଳେ ଦ୍ରୌପଦୀଙ୍କ ବସ୍ତ୍ର ଓ କେଶ ଆକର୍ଷଣ କରୁଥିଲା, ସେତେବେଳେ ଅନ୍ୟ କୌଣସି ଆଶ୍ରୟ ନ ପାଇ ଦ୍ରୌପଦୀ ଅତ୍ୟନ୍ତ କାତର ହୋଇ ପ୍ରଭୁଙ୍କୁ ଡାକିଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଅଗ୍ରେ କୁରୂଣାମ୍",
                            meaning: "କୁରୁମାନଙ୍କ ସମ୍ମୁଖରେ"
                        },
                        {
                            word: "ଅଥ ପାଣ୍ଡବାନାମ୍",
                            meaning: "ଏବଂ ପାଣ୍ଡବମାନଙ୍କ ଆଗରେ"
                        },
                        {
                            word: "ଦୁଃଶାସନେନ ଆହୃତ-ବସ୍ତ୍ର-କେଶା",
                            meaning: "ଦୁଃଶାସନ ଦ୍ୱାରା ବସ୍ତ୍ର ଓ କେଶ ଟଣା ହେଉଥିବା"
                        },
                        {
                            word: "କୃଷ୍ଣା",
                            meaning: "ଦ୍ରୌପଦୀ"
                        },
                        {
                            word: "ତଦା ଆକ୍ରୋଶଦ୍",
                            meaning: "ସେହି ସମୟରେ ବିକଳ ହୋଇ ଚିତ୍କାର କରି ଡାକିଲେ"
                        },
                        {
                            word: "ଅନନ୍ୟ-ନାଥା",
                            meaning: "ଯାହାଙ୍କର ଅନ୍ୟ କୌଣସି ରକ୍ଷକ ନାହାନ୍ତି"
                        },
                        {
                            word: "ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି",
                            meaning: "ହେ ଗୋବିନ୍ଦ, ହେ ଦାମୋଦର, ହେ ମାଧବ ବୋଲି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ଶ୍ରୀ କୃଷ୍ଣ ବିଷ୍ଣୋ ମଧୁ-କୈଟଭାରେ ଭକ୍ତାନୁକମ୍ପିନ୍ ଭଗବନ୍ ମୁରାରେ ।\nତ୍ରାୟସ୍ୱ ମାଂ କେଶବ ଲୋକନାଥ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨ ।।",
                    translation: "ହେ ଶ୍ରୀକୃଷ୍ଣ! ହେ ସର୍ବବ୍ୟାପୀ ବିଷ୍ଣୁ! ହେ ମଧୁ-କୈଟଭ ଦୈତ୍ୟହାରୀ! ହେ ଭକ୍ତବତ୍ସଳ ଭଗବାନ ମୁରାରୀ! ହେ କେଶବ! ହେ ତ୍ରିଲୋକନାଥ! ମୋତେ ଏହି ବିପଦରୁ ତ୍ରାହି କରନ୍ତୁ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଶ୍ରୀ କୃଷ୍ଣ",
                            meaning: "ସର୍ବାକର୍ଷକ ଶ୍ରୀକୃଷ୍ଣ"
                        },
                        {
                            word: "ବିଷ୍ଣୋ",
                            meaning: "ହେ ଭଗବାନ ବିଷ୍ଣୁ"
                        },
                        {
                            word: "ମଧୁ-କୈଟଭାରେ",
                            meaning: "ମଧୁ ଓ କୈଟଭ ଅସୁରର ବିନାଶକାରୀ"
                        },
                        {
                            word: "ଭକ୍ତାନୁକମ୍ପିନ୍",
                            meaning: "ଭକ୍ତଙ୍କ ପ୍ରତି ଅହେତୁକୀ କୃପାଶୀଳ"
                        },
                        {
                            word: "ମୁରାରେ",
                            meaning: "ମୁର ଦୈତ୍ୟର ଶତ୍ରୁ"
                        },
                        {
                            word: "ତ୍ରାୟସ୍ୱ ମାମ୍",
                            meaning: "ମୋତେ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            word: "କେଶବ ଲୋକନାଥ",
                            meaning: "ହେ କେଶବ, ହେ ଜଗତର ନାଥ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 3,
                    lyric: "ବିକ୍ରେତୁକାମା କିଲ ଗୋପ-କନ୍ୟା ମୁରାରି-ପାଦାର୍ପିତ-ଚିତ୍ତ-ବୃତ୍ତିଃ ।\nଦଧ୍ୟାଦିକଂ ମୋହବଶାଦ୍ ଅବୋଚଦ୍ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩ ।।",
                    translation: "ଦହି-ଦୁଧ ବିକ୍ରୟ କରିବାକୁ ଇଚ୍ଛା ରଖୁଥିବା ଜଣେ ବ୍ରଜ-ଗୋପୀ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଚରଣକମଳରେ ନିଜ ଚିତ୍ତକୁ ଏପରି ସମର୍ପଣ କରିଦେଇଥିଲେ ଯେ, ପ୍ରେମ-ବିହ୍ୱଳତାରେ 'ଦହି ନିଅ' କହିବା ବଦଳରେ ସେ ଉଚ୍ଚ ସ୍ୱରରେ ଡାକୁଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ବିକ୍ରେତୁକାମା",
                            meaning: "ବିକ୍ରୟ କରିବାକୁ ଇଚ୍ଛୁକ"
                        },
                        {
                            word: "ଗୋପ-କନ୍ୟା",
                            meaning: "ବ୍ରଜର ଗୋପବାଳିକା"
                        },
                        {
                            word: "ମୁରାରି-ପାଦ-ଅର୍ପିତ-ଚିତ୍ତ-ବୃତ୍ତିଃ",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପାଦପଦ୍ମରେ ସମର୍ପିତ ହୋଇଥିବା ମନୋବୃତ୍ତି"
                        },
                        {
                            word: "ଦଧ୍ୟାଦିକମ୍",
                            meaning: "ଦହି, ଦୁଧ, ଲହୁଣୀ ଇତ୍ୟାଦି"
                        },
                        {
                            word: "ମୋହବଶାଦ୍ ଅବୋଚଦ୍",
                            meaning: "ପ୍ରେମାବେଶର ବଶବର୍ତ୍ତୀ ହୋଇ କହିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 4,
                    lyric: "ଉଲୂଖଲେ ସମ୍ଭୃତ-ତଣ୍ଡୁଲାଂଶ୍ ଚ ସଂଘଟ୍ଟୟନ୍ତ୍ୟୋ ମୁସଲୈଃ ପ୍ରମୁଗ୍ଧାଃ ।\nଗାୟନ୍ତି ଗୋପ୍ୟୋ ଜନିତାନୁରାଗା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪ ।।",
                    translation: "ଉଦୂଖଳରେ ଧାନ-ଚାଉଳ ଭରି ମୁଷଳ ସାହାଯ୍ୟରେ କୁଟିବା ବେଳେ ପ୍ରେମମୁଗ୍ଧା ଗୋପୀମାନେ ଅନୁରାଗବିହ୍ୱଳ ହୋଇ ମଧୁର ସ୍ୱରରେ ଗାନ କରୁଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଉଲୂଖଲେ",
                            meaning: "ଉଦୂଖଳ ବା ଢିଙ୍କିରେ"
                        },
                        {
                            word: "ସମ୍ଭୃତ-ତଣ୍ଡୁଲାନ୍",
                            meaning: "ରଖାଯାଇଥିବା ଚାଉଳକୁ"
                        },
                        {
                            word: "ମୁସଲୈଃ ସଂଘଟ୍ଟୟନ୍ତ୍ୟଃ",
                            meaning: "ମୁଷଳ ଦ୍ୱାରା କୁଟିବା ସମୟରେ"
                        },
                        {
                            word: "ପ୍ରମୁଗ୍ଧାଃ ଗୋପ୍ୟଃ",
                            meaning: "ପ୍ରେମବିଭୋର ଗୋପୀମାନେ"
                        },
                        {
                            word: "ଜନିତ-ଅନୁରାଗାଃ",
                            meaning: "ହୃଦୟରେ ଅନୁରାଗ ଜାଗ୍ରତ ହୋଇ"
                        },
                        {
                            word: "ଗାୟନ୍ତି",
                            meaning: "ଗାନ କରନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 5,
                    lyric: "କାଚିତ୍ କରାମ୍ଭୋଜ-ପୁଟେ ନିଷଣ୍ଣଂ କ୍ରୀଡ଼ା-ଶୁକଂ କିଂଶୁକ-ରକ୍ତ-ତୁଣ୍ଡମ୍ ।\nଅଧ୍ୟାପୟାମ୍ ଆସ ସରୋରୁହାକ୍ଷୀ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫ ।।",
                    translation: "ନିଜର କରକମଳ ମଧ୍ୟରେ ବସିଥିବା ପଳାଶ ପୁଷ୍ପ ପରି ଲାଲ ଥଣ୍ଟବିଶିଷ୍ଟ ପୋଷା ଶୁଆକୁ ଜଣେ କମଳନୟନା ଗୋପୀ ସ୍ନେହରେ ଶିଖାଉଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!' ବୋଲି ଉଚ୍ଚାରଣ କର।",
                    wordMeanings: [
                        {
                            word: "କରାମ୍ଭୋଜ-ପୁଟେ",
                            meaning: "ହସ୍ତକମଳର ଅଞ୍ଜଳିରେ"
                        },
                        {
                            word: "ନିଷଣ୍ଣମ୍",
                            meaning: "ବସିଥିବା"
                        },
                        {
                            word: "କ୍ରୀଡ଼ା-ଶୁକମ୍",
                            meaning: "କ୍ରୀଡ଼ାପ୍ରିୟ ପୋଷା ଶୁଆକୁ"
                        },
                        {
                            word: "କିଂଶୁକ-ରକ୍ତ-ତୁଣ୍ଡମ୍",
                            meaning: "ପଳାଶ ଫୁଲ ପରି ଲାଲ ଥଣ୍ଟବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ସରୋରୁହାକ୍ଷୀ",
                            meaning: "କମଳନୟନା ଗୋପୀ"
                        },
                        {
                            word: "ଅଧ୍ୟାପୟାମ୍ ଆସ",
                            meaning: "ଶିକ୍ଷା ଦେଉଥିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 6,
                    lyric: "ଗୃହେ ଗୃହେ ଗୋପ-ବଧୂ-ସମୂହଃ ପ୍ରତି-କ୍ଷଣଂ ପିଞ୍ଜର-ସାରିକାନାମ୍ ।\nସ୍ଖଲଦ୍-ଗିରଂ ବାଚୟିତୁଂ ପ୍ରବୃତ୍ତୋ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬ ।।",
                    translation: "ଘରେ ଘରେ ବ୍ରଜର ଗୋପବଧୂମାନେ ପଞ୍ଜୁରୀରେ ଥିବା ସାରୀ ପକ୍ଷୀମାନଙ୍କୁ ପ୍ରତିକ୍ଷଣ ମଧୁର ଅସ୍ପଷ୍ଟ ବାଣୀରେ ଶିଖାଇବାକୁ ଚେଷ୍ଟା କରୁଥିଲେ— 'ବୋଲ ଗୋବିନ୍ଦ! ଦାମୋଦର! ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଗୃହେ ଗୃହେ",
                            meaning: "ପ୍ରତ୍ୟେକ ଘରେ"
                        },
                        {
                            word: "ଗୋପ-ବଧୂ-ସମୂହଃ",
                            meaning: "ଗୋପବଧୂମାନେ"
                        },
                        {
                            word: "ପିଞ୍ଜର-ସାରିକାନାମ୍",
                            meaning: "ପଞ୍ଜୁରୀର ସାରୀ ପକ୍ଷୀମାନଙ୍କୁ"
                        },
                        {
                            word: "ସ୍ଖଲଦ୍-ଗିରମ୍",
                            meaning: "ଅସ୍ପଷ୍ଟ ମଧୁର ବଚନରେ"
                        },
                        {
                            word: "ବାଚୟିତୁଂ ପ୍ରବୃତ୍ତଃ",
                            meaning: "କୁହାଇବା ପାଇଁ ପ୍ରବୃତ୍ତ ଥିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 7,
                    lyric: "ପର୍ଯ୍ୟଙ୍କିକା-ଭାଜମ୍ ଅଲଂ କୁମାରଂ ପ୍ରସ୍ୱାପୟନ୍ତ୍ୟୋ ଽଖିଳ-ଗୋପ-କନ୍ୟାଃ ।\nଜଗୁଃ ପ୍ରବନ୍ଧଂ ସ୍ୱର-ତାଳ-ବନ୍ଧଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୭ ।।",
                    translation: "ଦୋଳି ଶେଯରେ ଶୋଇଥିବା ବାଳକୃଷ୍ଣଙ୍କୁ ଶୁଆଇବା ବେଳେ ସମସ୍ତ ଗୋପକନ୍ୟାମାନେ ସ୍ୱର ଓ ତାଳରେ ବନ୍ଧା ଅତି ସୁନ୍ଦର ଗୀତ ଗାନ କରୁଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ପର୍ଯ୍ୟଙ୍କିକା-ଭାଜମ୍",
                            meaning: "ଦୋଳି ବା ଖଟରେ ଶୋଇଥିବା"
                        },
                        {
                            word: "ଅଲଂ କୁମାରମ୍",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣ ବାଳକଙ୍କୁ"
                        },
                        {
                            word: "ପ୍ରସ୍ୱାପୟନ୍ତ୍ୟଃ",
                            meaning: "ଶୁଆଇବା ସମୟରେ"
                        },
                        {
                            word: "ଅଖିଳ-ଗୋପ-କନ୍ୟାଃ",
                            meaning: "ସମସ୍ତ ଗୋପକନ୍ୟାମାନେ"
                        },
                        {
                            word: "ସ୍ୱର-ତାଳ-ବନ୍ଧମ୍ ଜଗୁଃ",
                            meaning: "ସ୍ୱର ଓ ତାଳର ଛନ୍ଦରେ ଗାନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 8,
                    lyric: "ରାମାନୁଜଂ ବୀକ୍ଷଣ-କେଳି-ଲୋଳଂ ଗୋପୀ ଗୃହୀତ୍ୱା ନବନୀତ-ଗୋଳମ୍ ।\nଆବାଳକଂ ବାଳକମ୍ ଆଜୁହାବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୮ ।।",
                    translation: "ଚଞ୍ଚଳ ନୟନରେ ଖେଳୁଥିବା ବଳରାମଙ୍କ ଅନୁଜ କହ୍ନେଇଙ୍କୁ ଦେଖି ଜଣେ ଗୋପୀ ହାତରେ ସତେଜ ଲହୁଣୀ ପେଣ୍ଡୁଳା ଧରି ଲୋଭ ଦେଖାଇ ଡାକୁଥିଲେ— 'ହେ ବାଳକ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ! ଏଣିକି ଆସ!'।",
                    wordMeanings: [
                        {
                            word: "ରାମାନୁଜମ୍",
                            meaning: "ବଳରାମଙ୍କ କନିଷ୍ଠ ଭ୍ରାତା ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            word: "ବୀକ୍ଷଣ-କେଳି-ଲୋଳମ୍",
                            meaning: "ଚଞ୍ଚଳ ଦୃଷ୍ଟିରେ ଖେଳାଲୋଳୁପ"
                        },
                        {
                            word: "ଗୋପୀ ଗୃହୀତ୍ୱା",
                            meaning: "ଗୋପୀ ଗ୍ରହଣ କରି"
                        },
                        {
                            word: "ନବନୀତ-ଗୋଳମ୍",
                            meaning: "ସତେଜ ଲହୁଣୀ ପିଣ୍ଡୁଳା"
                        },
                        {
                            word: "ଆଜୁହାବ",
                            meaning: "ଡାକିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 9,
                    lyric: "ବିଚିତ୍ର-ବର୍ଣ୍ଣାଭରଣାଭିରାମେ ଽଭିଧେହି ବକ୍ତ୍ରାମ୍ବୁଜ-ରାଜ-ହଂସେ ।\nସଦା ମଦୀୟେ ରସନେ ଽଗ୍ର-ରଙ୍ଗେ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୯ ।।",
                    translation: "ହେ ମୋର ରସନା (ଜିହ୍ୱା)! ତୁମେ ମୋ ମୁଖକମଳ ରୂପୀ ସରୋବରର ରାଜହଂସ ସଦୃଶ; ସର୍ବଦା ନିଜ ଅଗ୍ରଭାଗରେ ଏହି ପରମ ମନୋହର ଅକ୍ଷରଗୁଡ଼ିକ ଗାନ କର— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ବକ୍ତ୍ରାମ୍ବୁଜ-ରାଜ-ହଂସେ",
                            meaning: "ମୁଖପଦ୍ମର ରାଜହଂସ ସଦୃଶ"
                        },
                        {
                            word: "ମଦୀୟେ ରସନେ",
                            meaning: "ହେ ମୋର ଜିହ୍ୱା"
                        },
                        {
                            word: "ଅଗ୍ର-ରଙ୍ଗେ",
                            meaning: "ଅଗ୍ରଭାଗ ରୂପୀ ରଙ୍ଗମଞ୍ଚରେ"
                        },
                        {
                            word: "ଅଭିଧେହି",
                            meaning: "ଉଚ୍ଚାରଣ କର"
                        },
                        {
                            word: "ସଦା",
                            meaning: "ସର୍ବଦା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 10,
                    lyric: "ଅଙ୍କାଧିରୂଢ଼ଂ ଶିଶୁ-ଗୋପ-ଗୂଢ଼ଂ ସ୍ତନଂ ଧୟନ୍ତଂ କମଳୈକ-କାନ୍ତମ୍ ।\nସମ୍ବୋଧୟାମ୍ ଆସ ମୁଦା ଯଶୋଦା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୦ ।।",
                    translation: "ନିଜ କୋଳରେ ବସି ସ୍ତନ୍ୟପାନ କରୁଥିବା ଶ୍ରୀଲକ୍ଷ୍ମୀକାନ୍ତ ଭଗବାନଙ୍କୁ ଗୋପବାଳକ ରୂପରେ ଦେଖି ମାତା ଯଶୋଦା ଆନନ୍ଦବିହ୍ୱଳ ହୋଇ ସ୍ନେହରେ ଡାକୁଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଅଙ୍କ-ଅଧିରୂଢ଼ମ୍",
                            meaning: "କୋଳରେ ଆରୋହଣ କରିଥିବା"
                        },
                        {
                            word: "ଶିଶୁ-ଗୋପ-ଗୂଢ଼ମ୍",
                            meaning: "ଗୋପବାଳକ ରୂପରେ ପ୍ରଚ୍ଛନ୍ନ"
                        },
                        {
                            word: "କମଳୈକ-କାନ୍ତମ୍",
                            meaning: "ଲକ୍ଷ୍ମୀଦେବୀଙ୍କ ଏକମାତ୍ର ପ୍ରାଣନାଥଙ୍କୁ"
                        },
                        {
                            word: "ସ୍ତନଂ ଧୟନ୍ତମ୍",
                            meaning: "ସ୍ତନ୍ୟପାନ କରୁଥିବା ବେଳେ"
                        },
                        {
                            word: "ମୁଦା ଯଶୋଦା ସମ୍ବୋଧୟାମ୍ ଆସ",
                            meaning: "ଆନନ୍ଦରେ ମାତା ଯଶୋଦା ସମ୍ବୋଧନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 11,
                    lyric: "କ୍ରୀଡ଼ନ୍ତମ୍ ଅନ୍ତର୍-ବ୍ରଜମ୍ ଆତ୍ମନଂ ସ୍ୱଂ ସମଂ ବୟସ୍ୟୈଃ ପଶୁ-ପାଳ-ବାଳୈଃ ।\nପ୍ରେମ୍ଣା ଯଶୋଦା ପ୍ରଜୁହାବ କୃଷ୍ଣଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୧ ।।",
                    translation: "ବ୍ରଜଧାମ ମଧ୍ୟରେ ସମବୟସ୍କ ଗୋପବାଳକମାନଙ୍କ ସହିତ ଖେଳୁଥିବା ନିଜ ପୁତ୍ର ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ଦେଖି ମାତା ଯଶୋଦା ପରମ ପ୍ରେମରେ ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଅନ୍ତର୍-ବ୍ରଜମ୍ କ୍ରୀଡ଼ନ୍ତମ୍",
                            meaning: "ବ୍ରଜଭୂମିରେ ଖେଳୁଥିବା"
                        },
                        {
                            word: "ସମଂ ବୟସ୍ୟୈଃ ପଶୁ-ପାଳ-ବାଳୈଃ",
                            meaning: "ସମବୟସୀ ଗୋପବାଳକମାନଙ୍କ ସହିତ"
                        },
                        {
                            word: "ଆତ୍ମନଂ ସ୍ୱମ୍ କୃଷ୍ଣମ୍",
                            meaning: "ନିଜର ପ୍ରିୟ ପୁତ୍ର କୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            word: "ପ୍ରେମ୍ଣା ଯଶୋଦା ପ୍ରଜୁହାବ",
                            meaning: "ସ୍ନେହରେ ମାତା ଯଶୋଦା ଡାକିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 12,
                    lyric: "ଯଶୋଦୟା ଗାଢ଼ମ୍ ଉଲୂଖଲେନ ଗୋ-କଣ୍ଠ-ପାଶେନ ନିବଧ୍ୟମାନମ୍ ।\nରୁରୋଦ ମନ୍ଦଂ ନବନୀତ-ଭୋଜୀ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୨ ।।",
                    translation: "ମାତା ଯଶୋଦାଙ୍କ ଦ୍ୱାରା ଗାଈ ବନ୍ଧା ଦଉଡ଼ିରେ ଉଦୂଖଳ ସହିତ ଦୃଢ଼ ଭାବେ ବନ୍ଧା ହୋଇ ସେହି ଲହୁଣୀଚୋର ବାଳକୃଷ୍ଣ ଧୀରେ ଧୀରେ କାନ୍ଦି କହୁଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଯଶୋଦୟା ଗାଢ଼ମ୍",
                            meaning: "ମାତା ଯଶୋଦାଙ୍କ ଦ୍ୱାରା ଦୃଢ଼ ଭାବରେ"
                        },
                        {
                            word: "ଉଲୂଖଲେନ ନିବଧ୍ୟମାନମ୍",
                            meaning: "ଉଦୂଖଳ ସହିତ ବନ୍ଧା ହୋଇ"
                        },
                        {
                            word: "ଗୋ-କଣ୍ଠ-ପାଶେନ",
                            meaning: "ଗାଈ ବାନ୍ଧିବା ଦଉଡ଼ିରେ"
                        },
                        {
                            word: "ନବନୀତ-ଭୋଜୀ",
                            meaning: "ଲହୁଣୀ ଚୋରି କରି ଖାଉଥିବା କୃଷ୍ଣ"
                        },
                        {
                            word: "ମନ୍ଦଂ ରୁରୋଦ",
                            meaning: "ଧୀରେ ଧୀରେ କ୍ରନ୍ଦନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 13,
                    lyric: "ନିଜାଙ୍ଗଣେ କଙ୍କଣ-କେଳି-ଲୋଳଂ ଗୋପୀ ଗୃହୀତ୍ୱା ନବନୀତ-ଗୋଳମ୍ ।\nଆମର୍ଦୟତ୍ ପାଣି-ତଳେନ ନେତ୍ରେ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୩ ।।",
                    translation: "ନିଜ ଅଗଣାରେ କଙ୍କଣ ଧରି ଖେଳୁଥିବା କହ୍ନେଇଙ୍କ ନିକଟକୁ ଜଣେ ଗୋପୀ ଲହୁଣୀ ପିଣ୍ଡୁଳା ନେଇ ଆସିଲେ ଏବଂ ହାତରେ ତାଙ୍କ ଆଖି ଦୁଇଟି ବନ୍ଦ କରି ହସି ହସି କହିଲେ— 'ବୋଲ ଗୋବିନ୍ଦ! ଦାମୋଦର! ମାଧବ! ଦେଖ ତୋ ପାଇଁ କ'ଣ ଆଣିଛି!'।",
                    wordMeanings: [
                        {
                            word: "ନିଜାଙ୍ଗଣେ",
                            meaning: "ନିଜ ଅଗଣାରେ"
                        },
                        {
                            word: "କଙ୍କଣ-କେଳି-ଲୋଳମ୍",
                            meaning: "ଖଡୁ ବା କଙ୍କଣ ଧରି ଖେଳାରତ"
                        },
                        {
                            word: "ନବନୀତ-ଗୋଳମ୍ ଗୃହୀତ୍ୱା",
                            meaning: "ଲହୁଣୀ ପେଣ୍ଡୁଳା ଧରି"
                        },
                        {
                            word: "ପାଣି-ତଳେନ ନେତ୍ରେ ଆମର୍ଦୟତ୍",
                            meaning: "ହସ୍ତତଳ ଦ୍ୱାରା ନୟନ ଦୁଇଟିକୁ ଘୋଡ଼ାଇଦେଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 14,
                    lyric: "ଗୃହେ ଗୃହେ ଗୋପ-ବଧୂ-କଦମ୍ବାଃ ସର୍ବେ ମିଳିତ୍ୱା ସମବାୟ-ଯୋଗେ ।\nପୁଣ୍ୟାନି ନାମାନି ପଠନ୍ତି ନିତ୍ୟଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୪ ।।",
                    translation: "ଘରେ ଘରେ ସମସ୍ତ ଗୋପବଧୂମାନେ ଏକତ୍ରିତ ହୋଇ ପ୍ରତ୍ୟେକ ଉତ୍ସବରେ ପ୍ରଭୁ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପରମ ପବିତ୍ର ନାମାବଳୀ ନିରନ୍ତର କୀର୍ତ୍ତନ କରନ୍ତି— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଗୃହେ ଗୃହେ",
                            meaning: "ପ୍ରତି ଗୃହରେ"
                        },
                        {
                            word: "ଗୋପ-ବଧୂ-କଦମ୍ବାଃ",
                            meaning: "ଗୋପରମଣୀମାନଙ୍କ ସମୂହ"
                        },
                        {
                            word: "ସର୍ବେ ମିଳିତ୍ୱା",
                            meaning: "ସମସ୍ତେ ଏକତ୍ର ହୋଇ"
                        },
                        {
                            word: "ପୁଣ୍ୟାନି ନାମାନି ପଠନ୍ତି ନିତ୍ୟମ୍",
                            meaning: "ପବିତ୍ର ନାମଗୁଡ଼ିକୁ ନିତ୍ୟ ପାଠ କରନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 15,
                    lyric: "ମନ୍ଦାର-ମାଳେ ବଦନାଭିରାମଂ ବିମ୍ବାଧରେ ପୂରିତ-ବେଣୁ-ନାଦମ୍ ।\nଗୋ-ଗୋପ-ଗୋପୀ-ଜନ-ମଧ୍ୟ-ସଂସ୍ଥଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୫ ।।",
                    translation: "ଗଳାରେ ମନ୍ଦାର ପୁଷ୍ପମାଳା, ଅତି ମନୋହର ବଦନମଣ୍ଡଳ, ବିମ୍ବଫଳ ପରି ଲାଲ ଓଠରେ ବଂଶୀଧ୍ୱନି ଏବଂ ଗାଈ, ଗୋପାଳକ ଓ ଗୋପୀମାନଙ୍କ ଗହଣରେ ବିରାଜମାନ କରୁଥିବା ପ୍ରଭୁଙ୍କୁ ସମସ୍ତେ ବନ୍ଦନା କରନ୍ତି— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ମନ୍ଦାର-ମାଳେ",
                            meaning: "ମନ୍ଦାର ପୁଷ୍ପମାଳା ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ବଦନାଭିରାମମ୍",
                            meaning: "ଅତି ସୁନ୍ଦର ଶ୍ରୀମୁଖବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ପୂରିତ-ବେଣୁ-ନାଦମ୍",
                            meaning: "ବେଣୁରେ ଦିବ୍ୟ ନାଦ ପୂରଣ କରୁଥିବା"
                        },
                        {
                            word: "ଗୋ-ଗୋପ-ଗୋପୀ-ମଧ୍ୟ-ସଂସ୍ଥମ୍",
                            meaning: "ଗାଈ, ଗୋପାଳ ଓ ଗୋପୀଙ୍କ ମଧ୍ୟରେ ଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 16,
                    lyric: "ଉତ୍ଥାୟ ଗୋପ୍ୟୋ ଽପର-ରାତ୍ର-ଭୋଗେ ସ୍ମୃତ୍ୱା ଯଶୋଦା-ସୁତ-ବାଳ-କେଳିମ୍ ।\nଗାୟନ୍ତି ପ୍ରୋଚ୍ଚୈର୍ ଦଧି-ମନ୍ଥୟନ୍ତ୍ୟୋ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୬ ।।",
                    translation: "ପ୍ରାତଃ ବ୍ରାହ୍ମମୁହୂର୍ତ୍ତରେ ଶଯ୍ୟା ତ୍ୟାଗ କରି ଯଶୋଦାନନ୍ଦନଙ୍କ ବାଳଲୀଳା ସ୍ମରଣ ପୂର୍ବକ ଦହି ମନ୍ଥନ କରୁଥିବା ବେଳେ ଗୋପୀମାନେ ଉଚ୍ଚ ସ୍ୱରରେ ଗାନ କରନ୍ତି— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଅପର-ରାତ୍ର-ଭୋଗେ ଉତ୍ଥାୟ",
                            meaning: "ରାତ୍ରିର ଶେଷ ପ୍ରହର (ପ୍ରଭାତ)ରେ ଉଠି"
                        },
                        {
                            word: "ଯଶୋଦା-ସୁତ-ବାଳ-କେଳିଂ ସ୍ମୃତ୍ୱା",
                            meaning: "ବାଳକୃଷ୍ଣଙ୍କ ବାଳଲୀଳାକୁ ସ୍ମରଣ କରି"
                        },
                        {
                            word: "ଦଧି-ମନ୍ଥୟନ୍ତ୍ୟଃ",
                            meaning: "ଦହି ମନ୍ଥନ କରୁଥିବା ବେଳେ"
                        },
                        {
                            word: "ପ୍ରୋଚ୍ଚୈଃ ଗାୟନ୍ତି",
                            meaning: "ଉଚ୍ଚ ସ୍ୱରରେ ଗାନ କରନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 17,
                    lyric: "ଜଗ୍ଧୋ ଽଥ ଦତ୍ତୋ ନବନୀତ-ପିଣ୍ଡୋ ଗୃହେ ଯଶୋଦା ବିଚିକିତ୍ସୟନ୍ତୀ ।\nଉବାଚ ସତ୍ୟଂ ବଦ ହେ ମୁରାରେ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୭ ।।",
                    translation: "ଘରେ ରଖାଯାଇଥିବା ସଦ୍ୟ ଲହୁଣୀ ପିଣ୍ଡୁଳା ଗାଏବ ହୋଇଥିବା ଦେଖି ମାତା ଯଶୋଦା ସନ୍ଦେହ କରି କହ୍ନେଇଙ୍କୁ ପଚାରିଲେ— 'ହେ ମୁରାରୀ! ସତ କହ ତୁ ଖାଇଛୁ କି? ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ନବନୀତ-ପିଣ୍ଡଃ",
                            meaning: "ଲହୁଣୀ ପିଣ୍ଡୁଳା"
                        },
                        {
                            word: "ଜଗ୍ଧଃ",
                            meaning: "ଖାଇ ଦିଆଯାଇଛି"
                        },
                        {
                            word: "ବିଚିକିତ୍ସୟନ୍ତୀ ଯଶୋଦା",
                            meaning: "ସନ୍ଦେହ ପ୍ରକାଶ କରି ମାତା ଯଶୋଦା"
                        },
                        {
                            word: "ସତ୍ୟଂ ବଦ ହେ ମୁରାରେ",
                            meaning: "ହେ ମୁରାରୀ, ସତ୍ୟ କୁହ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 18,
                    lyric: "ଅଭ୍ୟର୍ଚ୍ୟ ଗେହଂ ଯୁବତିଃ ପ୍ରବୃଦ୍ଧ-ପ୍ରେମ-ପ୍ରବାହା ଦଧି ନିର୍ମମନ୍ଥ ।\nଗାୟନ୍ତି ଗୋପ୍ୟୋ ଽଥ ସଖୀ-ସମେତା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୮ ।।",
                    translation: "ଗୃହପୂଜା ସମାପ୍ତ କରି ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପ୍ରତି ପ୍ରେମପ୍ରବାହରେ ବିଭୋର ହୋଇ ଜଣେ ଯୁବତୀ ଗୋପୀ ଦହି ମନ୍ଥନ କରୁଥିଲେ ଏବଂ ଅନ୍ୟ ସଖୀମାନଙ୍କ ସହିତ ମିଳି ମଧୁର ସ୍ୱରରେ ଗାଉଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଗେହମ୍ ଅଭ୍ୟର୍ଚ୍ୟ",
                            meaning: "ଗୃହଦେବତାଙ୍କ ପୂଜା କରି"
                        },
                        {
                            word: "ପ୍ରବୃଦ୍ଧ-ପ୍ରେମ-ପ୍ରବାହା",
                            meaning: "ଉଚ୍ଛ୍ୱଳିତ ପ୍ରେମର ପ୍ରବାହରେ"
                        },
                        {
                            word: "ଦଧି ନିର୍ମମନ୍ଥ",
                            meaning: "ଦହି ମନ୍ଥନ କଲେ"
                        },
                        {
                            word: "ସଖୀ-ସମେତାଃ ଗାୟନ୍ତି",
                            meaning: "ସଖୀମାନଙ୍କ ଗହଣରେ ଗାନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 19,
                    lyric: "କ୍ୱଚିତ୍ ପ୍ରଭାତେ ଦଧି-ପୂର୍ଣ୍ଣ-ପାତ୍ରେ ନିକ୍ଷିପ୍ୟ ମନ୍ଥଂ ଯୁବତୀ ମୁକୁନ୍ଦମ୍ ।\nଆଲୋକ୍ୟ ଗାନଂ ବିବିଧଂ କରୋତି ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୧୯ ।।",
                    translation: "ଦିନେ ପ୍ରଭାତ କାଳରେ ଦହିଭରା ପାତ୍ରରେ ମନ୍ଥନ ଦଣ୍ଡ ରଖି ଜଣେ ଗୋପୀ ମୁକୁନ୍ଦଙ୍କ ଦର୍ଶନ ପାଇବା ମାତ୍ରେ ବିବିଧ ରାଗରେ ପ୍ରେମପୂର୍ବକ ଗାନ କଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଦଧି-ପୂର୍ଣ୍ଣ-ପାତ୍ରେ",
                            meaning: "ଦହିଭରା ପାତ୍ରରେ"
                        },
                        {
                            word: "ମନ୍ଥଂ ନିକ୍ଷିପ୍ୟ",
                            meaning: "ମନ୍ଥନ ଦଣ୍ଡକୁ ରଖି"
                        },
                        {
                            word: "ମୁକୁନ୍ଦମ୍ ଆଲୋକ୍ୟ",
                            meaning: "ଶ୍ରୀ ମୁକୁନ୍ଦଙ୍କୁ ଦର୍ଶନ କରି"
                        },
                        {
                            word: "ବିବିଧଂ ଗାନଂ କରୋତି",
                            meaning: "ବିବିଧ ପ୍ରକାର ଗାନ କରନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 20,
                    lyric: "କ୍ରୀଡ଼ାପରଂ ଭୋଜନ-ମଜ୍ଜନାର୍ଥଂ ହିତୈଷିଣୀ ସ୍ତ୍ରୀ ତନୁଜଂ ଯଶୋଦା ।\nଆଜୂହବତ୍ ପ୍ରେମ-ପରି-ପ୍ଲୁତାକ୍ଷୀ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୦ ।।",
                    translation: "ଖେଳରେ ମଗ୍ନ ଥାଇ ସ୍ନାନ ଓ ଭୋଜନ ଭୁଲିଯାଇଥିବା ନିଜ ପୁତ୍ର ଶ୍ରୀକୃଷ୍ଣଙ୍କ ମଙ୍ଗଳ କାମନା କରି ମାତା ଯଶୋଦା ପ୍ରେମାଶ୍ରୁପୂର୍ଣ୍ଣ ନୟନରେ ଡାକିଲେ— 'ବାପା! ସ୍ନାନ କରି ଖାଇବୁ ଆ— ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "କ୍ରୀଡ଼ାପରମ୍",
                            meaning: "ଖେଳରେ ନିମଗ୍ନ ଥିବା"
                        },
                        {
                            word: "ଭୋଜନ-ମଜ୍ଜନ-ଅର୍ଥମ୍",
                            meaning: "ଖାଇବା ଓ ଗାଧୋଇବା ପାଇଁ"
                        },
                        {
                            word: "ହିତୈଷିଣୀ ଯଶୋଦା",
                            meaning: "ପୁତ୍ରର ହିତ ଚିନ୍ତା କରୁଥିବା ମାତା ଯଶୋଦା"
                        },
                        {
                            word: "ପ୍ରେମ-ପରିପ୍ଲୁତାକ୍ଷୀ ଆଜୂହବତ୍",
                            meaning: "ପ୍ରେମାଶ୍ରୁପୂର୍ଣ୍ଣ ଆଖିରେ ଡାକିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 21,
                    lyric: "ସୁଖଂ ଶୟାନଂ ନିଳୟେ ଚ ବିଷ୍ଣୁଂ ଦେବର୍ଷି-ମୁଖ୍ୟା ମୁନୟଃ ପ୍ରପନ୍ନାଃ ।\nତେନାଚ୍ୟୁତେ ତନ୍ମୟତାଂ ବ୍ରଜନ୍ତି ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୧ ।।",
                    translation: "ଶେଷଶଯ୍ୟାରେ ସୁଖରେ ବିରାଜମାନ ଭଗବାନ ବିଷ୍ଣୁଙ୍କ ଚରଣରେ ଶରଣାପନ୍ନ ହୋଇ ନାରଦାଦି ଦେବର୍ଷି ଓ ମୁନିଗଣ ଏହି ନାମ ଜପ କରି ଭଗବତ୍-ତନ୍ମୟତା ଲାଭ କରନ୍ତି— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ସୁଖଂ ଶୟାନଂ ବିଷ୍ଣୁମ୍",
                            meaning: "ସୁଖରେ ଶୟନ କରିଥିବା ଭଗବାନ ବିଷ୍ଣୁଙ୍କୁ"
                        },
                        {
                            word: "ଦେବର୍ଷି-ମୁଖ୍ୟାଃ ମୁନୟଃ",
                            meaning: "ଦେବର୍ଷି ନାରଦ ପ୍ରମୁଖ ମୁନିଗଣ"
                        },
                        {
                            word: "ପ୍ରପନ୍ନାଃ",
                            meaning: "ଶରଣାପନ୍ନ ହୋଇ"
                        },
                        {
                            word: "ଅଚ୍ୟୁତେ ତନ୍ମୟତାଂ ବ୍ରଜନ୍ତି",
                            meaning: "ଅଚ୍ୟୁତ ପ୍ରଭୁଙ୍କ ପ୍ରେମରେ ତନ୍ମୟ ହୋଇଯାଆନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 22,
                    lyric: "ବିହାୟ ନିଦ୍ରାମ୍ ଅରୁଣୋଦୟେ ଚ ବିଧାୟ କୃତ୍ୟାନି ଚ ବିପ୍ରମୁଖ୍ୟାଃ ।\nବେଦାବସାନେ ପ୍ରପଠନ୍ତି ନିତ୍ୟଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୨ ।।",
                    translation: "ପ୍ରାତଃ ଅରୁଣୋଦୟ କାଳରେ ନିଦ୍ରା ତ୍ୟାଗ କରି ନିତ୍ୟକର୍ମ ସାରି ଶ୍ରେଷ୍ଠ ବ୍ରାହ୍ମଣମାନେ ବେଦାଧ୍ୟୟନ ପରେ ସର୍ବଦା ପରମ ଭକ୍ତିରେ ଏହି ନାମ ପାଠ କରନ୍ତି— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଅରୁଣୋଦୟେ ନିଦ୍ରାଂ ବିହାୟ",
                            meaning: "ପ୍ରଭାତ ସମୟରେ ନିଦ ତ୍ୟାଗ କରି"
                        },
                        {
                            word: "କୃତ୍ୟାନି ବିଧାୟ",
                            meaning: "ପ୍ରାତଃକାଳୀନ କର୍ତ୍ତବ୍ୟ ସାରି"
                        },
                        {
                            word: "ବିପ୍ରମୁଖ୍ୟାଃ",
                            meaning: "ଶ୍ରେଷ୍ଠ ବ୍ରାହ୍ମଣମାନେ"
                        },
                        {
                            word: "ବେଦାବସାନେ ପ୍ରପଠନ୍ତି ନିତ୍ୟମ୍",
                            meaning: "ବେଦପାଠ ଶେଷରେ ପ୍ରତିଦିନ ପାଠ କରନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 23,
                    lyric: "ବୃନ୍ଦାବନେ ଗୋପ-ଗଣାଶ୍ ଚ ଗୋପ୍ୟୋ ବିଲୋକ୍ୟ ଗୋବିନ୍ଦ-ବିଯୋଗ-ଖିନ୍ନମ୍ ।\nରାଧାଂ ଜଗୁଃ ସାଶ୍ରୁ-ବିଲୋଚନାଭ୍ୟାଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୩ ।।",
                    translation: "ବୃନ୍ଦାବନରେ ଶ୍ରୀ ଗୋବିନ୍ଦଙ୍କ ବିରହରେ ଶ୍ରୀରାଧାରାଣୀଙ୍କୁ କାତର ହୋଇ କ୍ରନ୍ଦନ କରୁଥିବାର ଦେଖି ଗୋପ ଓ ଗୋପୀମାନେ ନୟନରେ ଲୁହ ଭରି ଗାନ କଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଗୋବିନ୍ଦ-ବିଯୋଗ-ଖିନ୍ନାମ୍",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ବିରହରେ ଶୋକାକୁଳା"
                        },
                        {
                            word: "ରାଧାଂ ବିଲୋକ୍ୟ",
                            meaning: "ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କୁ ଦେଖି"
                        },
                        {
                            word: "ସାଶ୍ରୁ-ବିଲୋଚନାଭ୍ୟାମ୍",
                            meaning: "ଲୁହଭରା ଆଖିରେ"
                        },
                        {
                            word: "ଜଗୁଃ",
                            meaning: "ଗାନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 24,
                    lyric: "ପ୍ରଭାତ-ସଞ୍ଚାର-ଗତା ନୁ ଗାବସ୍ ତଦ୍-ରକ୍ଷଣାର୍ଥଂ ତନୟଂ ଯଶୋଦା ।\nପ୍ରାବୋଧୟତ୍ ପାଣି-ତଳେନ ମନ୍ଦଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୪ ।।",
                    translation: "ପ୍ରଭାତରେ ଗାଈମାନେ ଚରିବାକୁ ବାହାରି ଯିବାରୁ ସେମାନଙ୍କ ରକ୍ଷଣାବେକ୍ଷଣ ନିମନ୍ତେ ମାତା ଯଶୋଦା ନିଜ କୋମଳ ହସ୍ତରେ ଶୋଇଥିବା ପୁତ୍ରଙ୍କୁ ଧୀରେ ଧୀରେ ଜଗାଇ କହିଲେ— 'ଉଠ ବାପା ଗୋବିନ୍ଦ! ଦାମୋଦର! ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ପ୍ରଭାତ-ସଞ୍ଚାର-ଗତାଃ ଗାବଃ",
                            meaning: "ପ୍ରଭାତରେ ଗୋଧନ ଚରିବାକୁ ଯାଇଛନ୍ତି"
                        },
                        {
                            word: "ତଦ୍-ରକ୍ଷଣାର୍ଥମ୍",
                            meaning: "ସେମାନଙ୍କୁ ପାଳନ ଓ ରକ୍ଷା କରିବା ପାଇଁ"
                        },
                        {
                            word: "ପାଣି-ତଳେନ ମନ୍ଦଂ ପ୍ରାବୋଧୟତ୍",
                            meaning: "କରସ୍ପର୍ଶ ଦ୍ୱାରା ଧୀରେ ଧୀରେ ଜଗାଇଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 25,
                    lyric: "ପ୍ରବାଳ-ଶୋଭା ଇବ ଦୀର୍ଘ-କେଶା ବାତାମ୍ବୁ-ପର୍ଣ୍ଣାଶନ-ପୂତ-ଦେହାଃ ।\nମୂଳେ ତରୂଣାଂ ମୁନୟଃ ପଠନ୍ତି ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୫ ।।",
                    translation: "ପ୍ରବାଳ ରଙ୍ଗର ଦୀର୍ଘ ଜଟାଧାରୀ ଏବଂ କେବଳ ବାୟୁ, ଜଳ ଓ ପତ୍ର ଆହାର କରି ଶରୀରକୁ ପବିତ୍ର କରିଥିବା ତପସ୍ୱୀ ମୁନିଗଣ ବୃକ୍ଷମୂଳରେ ବସି ନିରନ୍ତର ଜପ କରନ୍ତି— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ପ୍ରବାଳ-ଶୋଭାଃ ଦୀର୍ଘ-କେଶାଃ",
                            meaning: "ପ୍ରବାଳ ପରି କାନ୍ତିବିଶିଷ୍ଟ ଲମ୍ବା ଜଟାଧାରୀ"
                        },
                        {
                            word: "ବାତାମ୍ବୁ-ପର୍ଣ୍ଣ-ଅଶନ-ପୂତ-ଦେହାଃ",
                            meaning: "ବାୟୁ, ଜଳ ଓ ଶୁଷ୍କ ପତ୍ର ଭୋଜନ ଦ୍ୱାରା ପବିତ୍ର ଦେହବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ମୂଳେ ତରୂଣାମ୍",
                            meaning: "ବୃକ୍ଷମାନଙ୍କ ମୂଳରେ ବସି"
                        },
                        {
                            word: "ମୁନୟଃ ପଠନ୍ତି",
                            meaning: "ଋଷିମୁନିମାନେ ପାଠ କରନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 26,
                    lyric: "ଏବଂ ବ୍ରୁବାଣା ବିରହାତୁରା ଭୃଶଂ ବ୍ରଜ-ସ୍ତ୍ରିୟଃ କୃଷ୍ଣ-ବିଷିକ୍ତ-ମାନସାଃ ।\nବିସୃଜ୍ୟ ଲଜ୍ଜାଂ ରୁରୁଦୁଃ ସ୍ମ ସୁ-ସ୍ୱରଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୬ ।।",
                    translation: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପ୍ରତି ଗଭୀର ଅନୁରାଗ ରଖିଥିବା ବ୍ରଜରମଣୀମାନେ ପ୍ରଭୁଙ୍କ ଆସନ୍ନ ବିରହରେ ଅତ୍ୟନ୍ତ ବ୍ୟାକୁଳ ହୋଇ ଲଜ୍ଜା-ଭୟ ପରିତ୍ୟାଗ ପୂର୍ବକ ଉଚ୍ଚ ସ୍ୱରରେ କାନ୍ଦି କାନ୍ଦି ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ବିରହାତୁରାଃ ବ୍ରଜ-ସ୍ତ୍ରିୟଃ",
                            meaning: "ବିରହରେ କାତରା ବ୍ରଜନାରୀମାନେ"
                        },
                        {
                            word: "କୃଷ୍ଣ-ବିଷିକ୍ତ-ମାନସାଃ",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପ୍ରେମରେ ନିମଗ୍ନ ମନବିଶିଷ୍ଟା"
                        },
                        {
                            word: "ଲଜ୍ଜାଂ ବିସୃଜ୍ୟ",
                            meaning: "ସାମାଜିକ ଲଜ୍ଜା ତ୍ୟାଗ କରି"
                        },
                        {
                            word: "ସୁ-ସ୍ୱରଂ ରୁରୁଦୁଃ",
                            meaning: "ଉଚ୍ଚ ସ୍ୱରରେ କ୍ରନ୍ଦନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 27,
                    lyric: "ଗୋପୀ କଦାଚିନ୍ ମଣି-ପିଞ୍ଜର-ସ୍ଥଂ ଶୁକଂ ବଚୋ ବାଚୟିତୁଂ ପ୍ରବୃତ୍ତା ।\nଆନନ୍ଦ-କନ୍ଦ ବ୍ରଜ-ଚନ୍ଦ୍ର କୃଷ୍ଣ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୭ ।।",
                    translation: "କୌଣସି ଜଣେ ଗୋପୀ ରତ୍ନଜଡ଼ିତ ପଞ୍ଜୁରୀରେ ଥିବା ଶୁଆକୁ ମଧୁର ବାଣୀ ଶିଖାଇବାକୁ ଯାଇ କହୁଥିଲେ— 'ହେ ଶୁଆ! କୁହ ଆନନ୍ଦକନ୍ଦ! ବ୍ରଜଚନ୍ଦ୍ର! ଶ୍ରୀକୃଷ୍ଣ! ଗୋବିନ୍ଦ! ଦାମୋଦର! ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ମଣି-ପିଞ୍ଜର-ସ୍ଥଂ ଶୁକମ୍",
                            meaning: "ମଣି-ପଞ୍ଜୁରୀରେ ବସିଥିବା ଶୁଆକୁ"
                        },
                        {
                            word: "ବାଚୟିତୁଂ ପ୍ରବୃତ୍ତା",
                            meaning: "କୁହାଇବା ପାଇଁ ପ୍ରବୃତ୍ତ ହୋଇ"
                        },
                        {
                            word: "ଆନନ୍ଦ-କନ୍ଦ",
                            meaning: "ପରମାନନ୍ଦର ମୂଳ ଉତ୍ସ"
                        },
                        {
                            word: "ବ୍ରଜ-ଚନ୍ଦ୍ର",
                            meaning: "ବ୍ରଜର ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 28,
                    lyric: "ଗୋ-ବତ୍ସ-ବାଳୈଃ ଶିଶୁ-କାକ-ପକ୍ଷଂ ବଧ୍ନନ୍ତମ୍ ଅମ୍ଭୋଜ-ଦଳାୟତାକ୍ଷମ୍ ।\nଉବାଚ ମାତା ଚିବୁକଂ ଗୃହୀତ୍ୱା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୮ ।।",
                    translation: "କମଳନୟନ ବାଳକୃଷ୍ଣ ଗୋରୁ ବାଛୁରୀର ଲାଞ୍ଜ ସହିତ ଗୋପବାଳକଙ୍କ ଚୂଳ ବାନ୍ଧୁଥିବା ବେଳେ ମାତା ଯଶୋଦା ତାଙ୍କୁ ଧରି ଚିବୁକ (ଥୋଡ଼ି) ଆଉଁଷି ସ୍ନେହରେ କହିଲେ— 'ହେ ଚଗଲା ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଅମ୍ଭୋଜ-ଦଳ-ଆୟତାକ୍ଷମ୍",
                            meaning: "ପଦ୍ମପାଖୁଡ଼ା ପରି ବିଶାଳ ନେତ୍ରବିଶିଷ୍ଟ କୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            word: "ବଧ୍ନନ୍ତମ୍",
                            meaning: "ବାନ୍ଧୁଥିବା ଅବସ୍ଥାରେ"
                        },
                        {
                            word: "ଚିବୁକଂ ଗୃହୀତ୍ୱା",
                            meaning: "ଥୋଡ଼ିକୁ ଧରି"
                        },
                        {
                            word: "ମାତା ଉବାଚ",
                            meaning: "ମାତା ଯଶୋଦା କହିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 29,
                    lyric: "ପ୍ରଭାତ-କାଳେ ବର-ବଲ୍ଲଭୌଘା ଗୋ-ରକ୍ଷଣାର୍ଥଂ ଧୃତ-ବେତ୍ର-ଦଣ୍ଡାଃ ।\nଆକାରୟାମ୍ ଆସୁର୍ ଅନନ୍ତମ୍ ଆଦ୍ୟଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୨୯ ।।",
                    translation: "ପ୍ରଭାତ ସମୟରେ ହାତରେ ବେତ୍ରଦଣ୍ଡ ଧରି ଗୋଚାରଣ ନିମନ୍ତେ ପ୍ରିୟ ଗୋପବାଳକମାନେ ଆସି ସେହି ଆଦିପୁରୁଷ ଅନନ୍ତ ଭଗବାନଙ୍କୁ ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ! ଶୀଘ୍ର ଆସ!'।",
                    wordMeanings: [
                        {
                            word: "ବର-ବଲ୍ଲଭୌଘାଃ",
                            meaning: "ଶ୍ରେଷ୍ଠ ଗୋପବାଳକମାନେ"
                        },
                        {
                            word: "ଧୃତ-ବେତ୍ର-ଦଣ୍ଡାଃ",
                            meaning: "ହାତରେ ବେତବାଡ଼ି ଧାରଣ କରି"
                        },
                        {
                            word: "ଗୋ-ରକ୍ଷଣାର୍ଥମ୍",
                            meaning: "ଗୋରୁପଲଙ୍କୁ ଚରାଇବା ପାଇଁ"
                        },
                        {
                            word: "ଆଦ୍ୟମ୍ ଅନନ୍ତମ୍ ଆକାରୟାମ୍ ଆସୁଃ",
                            meaning: "ଆଦ୍ୟ ଅନନ୍ତ ପ୍ରଭୁଙ୍କୁ ଆହ୍ୱାନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 30,
                    lyric: "ଜଳାଶୟେ କାଳିୟ-ମର୍ଦନାୟ ଯଦା କଦମ୍ବାଦ୍ ଅପତନ୍ ମୁରାରେଃ ।\nଗୋପାଙ୍ଗନାଶ୍ ଚକ୍ରୁଶୁର୍ ଏତ୍ୟ ଗୋପା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୦ ।।",
                    translation: "କାଳୀୟ ନାଗ ଦଳନ ନିମନ୍ତେ ଶ୍ରୀକୃଷ୍ଣ ଯେତେବେଳେ କଦମ୍ବ ଡାଳରୁ ଯମୁନା ହ୍ରଦର ବିଷାକ୍ତ ଜଳକୁ ଡେଇଁପଡ଼ିଲେ, ସେତେବେଳେ ସମସ୍ତ ଗୋପ ଓ ଗୋପୀମାନେ ଭୟାତୁର ହୋଇ ଧାଇଁଆସି ଚିତ୍କାର କଲେ— 'ହାୟ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "କାଳିୟ-ମର୍ଦନାୟ",
                            meaning: "କାଳୀୟ ନାଗକୁ ଦମନ କରିବା ପାଇଁ"
                        },
                        {
                            word: "କଦମ୍ବାଦ୍ ଅପତନ୍",
                            meaning: "କଦମ୍ବ ବୃକ୍ଷରୁ ଡେଇଁଲେ"
                        },
                        {
                            word: "ଜଳାଶୟେ",
                            meaning: "ଯମୁନା ହ୍ରଦରେ"
                        },
                        {
                            word: "ଗୋପାଃ ଗୋପାଙ୍ଗନାଃ ଚକ୍ରୁଶୁଃ",
                            meaning: "ଗୋପ ଓ ଗୋପୀମାନେ ବିକଳ ହୋଇ ଚିତ୍କାର କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 31,
                    lyric: "ଅକ୍ରୂରମ୍ ଆସାଦ୍ୟ ଯଦା ମୁକୁନ୍ଦଶ୍ ଚାପୋତ୍ସବାର୍ଥଂ ମଥୁରାଂ ପ୍ରବିଷ୍ଟଃ ।\nତଦା ସ ପୌରୈର୍ ଜୟତୀତ୍ୟ୍ ଅଭାଷି ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୧ ।।",
                    translation: "ଅକ୍ରୂରଙ୍କ ସହିତ ଧନୁର୍ଯଜ୍ଞ ଉତ୍ସବ ଦେଖିବାକୁ ଶ୍ରୀ ମୁକୁନ୍ଦ ଯେତେବେଳେ ମଥୁରା ନଗରରେ ପ୍ରବେଶ କଲେ, ସେତେବେଳେ ମଥୁରାବାସୀମାନେ ଜୟଜୟକାର କରି କହିଲେ— 'ଜୟ ଗୋବିନ୍ଦ! ଜୟ ଦାମୋଦର! ଜୟ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଅକ୍ରୂରମ୍ ଆସାଦ୍ୟ",
                            meaning: "ଅକ୍ରୂରଙ୍କ ସଙ୍ଗେ ଆସି"
                        },
                        {
                            word: "ଚାପୋତ୍ସବ-ଅର୍ଥମ୍",
                            meaning: "ଧନୁର୍ଯଜ୍ଞ ଉତ୍ସବ ପାଇଁ"
                        },
                        {
                            word: "ମଥୁରାଂ ପ୍ରବିଷ୍ଟଃ",
                            meaning: "ମଥୁରାରେ ପ୍ରବିଷ୍ଟ ହେଲେ"
                        },
                        {
                            word: "ପୌରୈଃ ଜୟତୀତି ଅଭାଷି",
                            meaning: "ପୁରବାସୀଙ୍କ ଦ୍ୱାରା 'ଜୟ ହେଉ' ବୋଲି ଉଚ୍ଚାରିତ ହେଲା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 32,
                    lyric: "କଂସସ୍ୟ ଦୂତେନ ଯଦୈବ ନୀତୌ ବୃନ୍ଦାବନାନ୍ତାଦ୍ ବସୁଦେବ-ସୂନୌ ।\nରୁରୋଦ ଗୋପୀ ଭବନସ୍ୟ ମଧ୍ୟେ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୨ ।।",
                    translation: "କଂସର ଦୂତ ଅକ୍ରୂର ଯେତେବେଳେ ବସୁଦେବଙ୍କ ଉଭୟ ପୁତ୍ର ଶ୍ରୀକୃଷ୍ଣ ଓ ବଳରାମଙ୍କୁ ବୃନ୍ଦାବନରୁ ନେଇଗଲେ, ସେତେବେଳେ ମାତା ଯଶୋଦା ଘର ଭିତରେ ଲୋଟି କାନ୍ଦି କାନ୍ଦି ଡାକୁଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "କଂସସ୍ୟ ଦୂତେନ ନୀତୌ",
                            meaning: "କଂସର ଦୂତ ଦ୍ୱାରା ନିଆଗଲେ"
                        },
                        {
                            word: "ବସୁଦେବ-ସୂନୌ",
                            meaning: "ବସୁଦେବଙ୍କ ଦୁଇ ପୁଅଙ୍କୁ"
                        },
                        {
                            word: "ବୃନ୍ଦାବନାନ୍ତାଦ୍",
                            meaning: "ବୃନ୍ଦାବନ ସୀମାରୁ"
                        },
                        {
                            word: "ଭବନସ୍ୟ ମଧ୍ୟେ ରୁରୋଦ ଗୋପୀ",
                            meaning: "ଘର ଭିତରେ ମାତା ଯଶୋଦା ବିଳାପ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 33,
                    lyric: "ସରୋବରେ କାଳିୟ-ନାଗ-ବଦ୍ଧଂ ଶିଶୁଂ ଯଶୋଦା-ତନୟଂ ନିଶମ୍ୟ ।\nଚକ୍ରୁର୍ ଲୁଠନ୍ତ୍ୟଃ ପଥି ଗୋପ-ବାଳା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୩ ।।",
                    translation: "ଯମୁନା ହ୍ରଦରେ ଯଶୋଦାନନ୍ଦନ ବାଳକୃଷ୍ଣ କାଳୀୟ ନାଗ ଦ୍ୱାରା ବେଷ୍ଟିତ ହୋଇଥିବା ଶୁଣି ଗୋପବାଳକମାନେ ରାସ୍ତାରେ ଧୂଳିରେ ଲୋଟି ଚିତ୍କାର କରି ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ସରୋବରେ",
                            meaning: "କାଳୀୟ ହ୍ରଦରେ"
                        },
                        {
                            word: "କାଳିୟ-ନାଗ-ବଦ୍ଧମ୍",
                            meaning: "କାଳୀୟ ସର୍ପ ଦ୍ୱାରା ଗୁଡ଼ା ହୋଇଥିବା"
                        },
                        {
                            word: "ଯଶୋଦା-ତନୟଂ ନିଶମ୍ୟ",
                            meaning: "ଯଶୋଦାନନ୍ଦନଙ୍କୁ ଶୁଣି"
                        },
                        {
                            word: "ପଥି ଲୁଠନ୍ତ୍ୟଃ ଚକ୍ରୁଃ",
                            meaning: "ପଥରେ ଲୋଟି କାନ୍ଦିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 34,
                    lyric: "ଅକ୍ରୂର-ଯାନେ ଯଦୁ-ବଂଶ-ନାଥଂ ସଂଗଚ୍ଛମାନଂ ମଥୁରାଂ ନିରୀକ୍ଷ୍ୟ ।\nଊଚୁର୍ ବିଯୋଗାତ୍ କିଳ ଗୋପ-ବାଳା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୪ ।।",
                    translation: "ଅକ୍ରୂରଙ୍କ ରଥରେ ବସି ଯଦୁବଂଶନାଥ ଶ୍ରୀକୃଷ୍ଣ ମଥୁରା ଯାଉଥିବା ଦେଖି ବିରହ ବେଦନାରେ ଗୋପବାଳକମାନେ କାନ୍ଦି କାନ୍ଦି କହିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ! ଆମକୁ ଛାଡ଼ି କୁଆଡ଼େ ଯାଉଛ?'।",
                    wordMeanings: [
                        {
                            word: "ଅକ୍ରୂର-ଯାନେ",
                            meaning: "ଅକ୍ରୂରଙ୍କ ରଥରେ"
                        },
                        {
                            word: "ଯଦୁ-ବଂଶ-ନାଥଂ ନିରୀକ୍ଷ୍ୟ",
                            meaning: "ଯଦୁନାଥ କୃଷ୍ଣଙ୍କୁ ଦେଖି"
                        },
                        {
                            word: "ସଂଗଚ୍ଛମାନଂ ମଥୁରାମ୍",
                            meaning: "ମଥୁରା ଯାଉଥିବା"
                        },
                        {
                            word: "ବିଯୋଗାତ୍ ଗୋପ-ବାଳାଃ ଊଚୁଃ",
                            meaning: "ବିରହରେ ଗୋପସଖାମାନେ କହିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 35,
                    lyric: "ଚକ୍ରନ୍ଦ ଗୋପୀ ନଳିନୀ-ବନାନ୍ତେ କୃଷ୍ଣେନ ହୀନା କୁସୁମେ ଶୟାନା ।\nପ୍ରଫୁଲ୍ଲ-ନୀଳୋତ୍ପଳ-ଲୋଚନାଭ୍ୟାଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୫ ।।",
                    translation: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ବିରହରେ କମଳବନ ନିକଟରେ ପୁଷ୍ପଶଯ୍ୟାରେ ଶୟନ କରିଥିବା ଜଣେ ଗୋପୀ ନିଜର ପ୍ରଫୁଲ୍ଲ ନୀଳପଦ୍ମ ପରି ନୟନରୁ ଅଶ୍ରୁ ବିସର୍ଜନ କରି ବିଳାପ କରୁଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ନଳିନୀ-ବନାନ୍ତେ",
                            meaning: "ପଦ୍ମବନର ନିକଟରେ"
                        },
                        {
                            word: "କୃଷ୍ଣେନ ହୀନା",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ବିରହରେ ବିଧୁରା"
                        },
                        {
                            word: "କୁସୁମେ ଶୟାନା",
                            meaning: "ଫୁଲ ଶେଯରେ ପଡ଼ିରହି"
                        },
                        {
                            word: "ଚକ୍ରନ୍ଦ ଗୋପୀ",
                            meaning: "ଗୋପୀ କ୍ରନ୍ଦନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 36,
                    lyric: "ମାତା-ପିତୃଭ୍ୟାଂ ପରିବାର୍ଯ୍ୟମାଣା ଗେହଂ ପ୍ରବିଷ୍ଟା ବିଲଳାପ ଗୋପୀ ।\nଆଗତ୍ୟ ମାଂ ପାଳୟ ବିଶ୍ୱନାଥ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୬ ।।",
                    translation: "ମାତା-ପିତାଙ୍କ ଦ୍ୱାରା ବାରଣ କରାଯାଇ ଘର ଭିତରେ ବନ୍ଦୀ ହୋଇଥିବା ଗୋପୀ ବିଳାପ କରି ଡାକୁଥିଲେ— 'ହେ ବିଶ୍ୱନାଥ! ଆସି ମୋତେ ରକ୍ଷା କରନ୍ତୁ; ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ମାତା-ପିତୃଭ୍ୟାଂ ପରିବାର୍ଯ୍ୟମାଣା",
                            meaning: "ମାତା-ପିତାଙ୍କ ଦ୍ୱାରା ଅଟକା ଯାଇ"
                        },
                        {
                            word: "ଗେହଂ ପ୍ରବିଷ୍ଟା",
                            meaning: "ଘରେ ପ୍ରବେଶ କରି"
                        },
                        {
                            word: "ବିଲଳାପ ଗୋପୀ",
                            meaning: "ଗୋପୀ ବିଳାପ କଲେ"
                        },
                        {
                            word: "ମାଂ ପାଳୟ ବିଶ୍ୱନାଥ",
                            meaning: "ହେ ବିଶ୍ୱନାଥ, ମୋତେ ପାଳନ ଓ ରକ୍ଷା କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 37,
                    lyric: "ବୃନ୍ଦାବନ-ସ୍ଥଂ ହରିମ୍ ଆଶୁ ବୁଦ୍ଧ୍ୱା ଗୋପୀ ଗତା କାପି ବନଂ ନିଶାୟାମ୍ ।\nତତ୍ରାପ୍ୟ୍ ଅଦୃଷ୍ଟ୍ୱାତି-ଭୟାଦ୍ ଅବୋଚଦ୍ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୭ ।।",
                    translation: "ଶ୍ରୀହରି ବୃନ୍ଦାବନରେ ଅଛନ୍ତି ଭାବି ନିଶାର୍ଦ୍ଧରେ ଜଣେ ଗୋପୀ ଘଞ୍ଚ ବନକୁ ଚାଲିଗଲେ; କିନ୍ତୁ ସେଠାରେ ପ୍ରଭୁଙ୍କୁ ନ ଦେଖି ଅତି ଭୟରେ ଆତୁର ହୋଇ ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ନିଶାୟାଂ ବନଂ ଗତା",
                            meaning: "ରାତ୍ରିରେ ବନକୁ ଗଲେ"
                        },
                        {
                            word: "ହରିମ୍ ଆଶୁ ବୁଦ୍ଧ୍ୱା",
                            meaning: "ଶ୍ରୀହରିଙ୍କୁ ଖୋଜିବା ପାଇଁ ଭାବି"
                        },
                        {
                            word: "ଅଦୃଷ୍ଟ୍ୱା ଅତି-ଭୟାଦ୍",
                            meaning: "ନ ଦେଖି ଅତ୍ୟନ୍ତ ଭୟରେ"
                        },
                        {
                            word: "ଅବୋଚଦ୍",
                            meaning: "ଡାକି କହିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 38,
                    lyric: "ସୁଖଂ ଶୟାନା ନିଳୟେ ନିଜେ ଽପି ନାମାନି ବିଷ୍ଣୋଃ ପ୍ରବଦନ୍ତି ମର୍ତ୍ୟାଃ ।\nତେ ନିଶ୍ଚିତଂ ତନ୍ମୟତାଂ ବ୍ରଜନ୍ତି ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୮ ।।",
                    translation: "ନିଜ ଗୃହରେ ସୁଖପୂର୍ବକ ଶୟନ କରି ମଧ୍ୟ ଯେଉଁ ମନୁଷ୍ୟ ଭଗବାନ ବିଷ୍ଣୁଙ୍କ ଏହି ପବିତ୍ର ନାମ କୀର୍ତ୍ତନ କରନ୍ତି, ସେମାନେ ନିଶ୍ଚିତ ରୂପେ ଭଗବତ୍-ସାରୂପ୍ୟ ତଥା ତନ୍ମୟତା ଲାଭ କରନ୍ତି— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ନିଳୟେ ସୁଖଂ ଶୟାନାଃ",
                            meaning: "ନିଜ ଘରେ ସୁଖରେ ଶୋଇ ରହି ମଧ୍ୟ"
                        },
                        {
                            word: "ନାମାନି ବିଷ୍ଣୋଃ ପ୍ରବଦନ୍ତି",
                            meaning: "ଭଗବାନ ବିଷ୍ଣୁଙ୍କ ନାମ ଉଚ୍ଚାରଣ କରନ୍ତି"
                        },
                        {
                            word: "ମର୍ତ୍ୟାଃ",
                            meaning: "ମନୁଷ୍ୟମାନେ"
                        },
                        {
                            word: "ନିଶ୍ଚିତଂ ତନ୍ମୟତାଂ ବ୍ରଜନ୍ତି",
                            meaning: "ନିଶ୍ଚୟ ଭଗବତ୍-ତନ୍ମୟତା ପ୍ରାପ୍ତ ହୁଅନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 39,
                    lyric: "ସା ନୀରଜାକ୍ଷୀମ୍ ଅବଲୋକ୍ୟ ରାଧାଂ ରୁରୋଦ ଗୋବିନ୍ଦ-ବିଯୋଗ-ଖିନ୍ନାମ୍ ।\nସଖୀ ପ୍ରଫୁଲ୍ଲୋତ୍ପଳ-ଲୋଚନାଭ୍ୟାଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୩୯ ।।",
                    translation: "ଶ୍ରୀ ଗୋବିନ୍ଦଙ୍କ ବିରହରେ କମଳନୟନା ଶ୍ରୀରାଧାରାଣୀଙ୍କୁ କାନ୍ଦୁଥିବାର ଦେଖି ତାଙ୍କ ପ୍ରିୟସଖୀଙ୍କ ନେତ୍ର ମଧ୍ୟ ଲୁହରେ ଭରିଗଲା ଏବଂ ସେ ବିଳାପ କରି ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ନୀରଜାକ୍ଷୀଂ ରାଧାମ୍",
                            meaning: "ପଦ୍ମଲୋଚନା ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କୁ"
                        },
                        {
                            word: "ଗୋବିନ୍ଦ-ବିଯୋଗ-ଖିନ୍ନାମ୍",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ବିରହରେ ଦୁଃଖିତା"
                        },
                        {
                            word: "ଅବଲୋକ୍ୟ ସଖୀ ରୁରୋଦ",
                            meaning: "ଦେଖି ସଖୀ କାନ୍ଦିଲେ"
                        },
                        {
                            word: "ପ୍ରଫୁଲ୍ଲୋତ୍ପଳ-ଲୋଚନାଭ୍ୟାମ୍",
                            meaning: "ପ୍ରସ୍ଫୁଟିତ କମଳ ପରି ନୟନରୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 40,
                    lyric: "ଜିହ୍ୱେ ରସଜ୍ଞେ ମଧୁର-ପ୍ରିୟା ତ୍ୱଂ ସତ୍ୟଂ ହିତଂ ତ୍ୱାଂ ପରମଂ ବଦାମି ।\nଆବର୍ଣ୍ଣୟେଥା ମଧୁରାକ୍ଷରାଣି ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୦ ।।",
                    translation: "ହେ ମୋର ରସଜ୍ଞା ଜିହ୍ୱା! ତୁମେ ମଧୁର ରସ ଅତି ପ୍ରିୟ ମଣୁ; ମୁଁ ତୁମକୁ ପରମ ସତ୍ୟ ତଥା ସର୍ବଶ୍ରେଷ୍ଠ ହିତକର ବାଣୀ କହୁଛି— ତୁମେ କେବଳ ଏହି ପରମ ମଧୁର ଅକ୍ଷରଗୁଡ଼ିକ ଉଚ୍ଚାରଣ କର— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଜିହ୍ୱେ ରସଜ୍ଞେ",
                            meaning: "ହେ ରସ ଜାଣିଥିବା ଜିହ୍ୱା"
                        },
                        {
                            word: "ମଧୁର-ପ୍ରିୟା ତ୍ୱମ୍",
                            meaning: "ତୁମେ ମିଠା ଭଲ ପାଅ"
                        },
                        {
                            word: "ପରମଂ ସତ୍ୟଂ ହିତଂ ବଦାମି",
                            meaning: "ପରମ ସତ୍ୟ ଓ ମଙ୍ଗଳକର କଥା କହୁଛି"
                        },
                        {
                            word: "ମଧୁରାକ୍ଷରାଣି ଆବର୍ଣ୍ଣୟେଥାଃ",
                            meaning: "ମଧୁର ଅକ୍ଷରମାନ ବର୍ଣ୍ଣନା କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 41,
                    lyric: "ଆତ୍ୟନ୍ତିକ-ବ୍ୟାଧିହରଂ ଜନାନାଂ ଚିକିତ୍ସକଂ ବେଦ-ବିଦୋ ବଦନ୍ତି ।\nସଂସାର-ତାପ-ତ୍ରୟ-ନାଶ-ବୀଜଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୧ ।।",
                    translation: "ବେଦଜ୍ଞ ପଣ୍ଡିତମାନେ କହନ୍ତି— ମାନବ ଜାତିର ସମସ୍ତ ମାରାତ୍ମକ ରୋଗ (ଭବରୋଗ)ର ମହାଔଷଧ ଏବଂ ସଂସାରର ତ୍ରିବିଧ ତାପ ବିନାଶର ଏକମାତ୍ର ମୂଳମନ୍ତ୍ର ହେଉଛି— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଆତ୍ୟନ୍ତିକ-ବ୍ୟାଧିହରମ୍",
                            meaning: "ସମସ୍ତ ଚରମ ଭବରୋଗର ନାଶକାରୀ"
                        },
                        {
                            word: "ବେଦ-ବିଦଃ ବଦନ୍ତି",
                            meaning: "ବେଦଜ୍ଞ ବିଦ୍ୱାନମାନେ କହନ୍ତି"
                        },
                        {
                            word: "ସଂସାର-ତାପ-ତ୍ରୟ-ନାଶ-ବୀଜମ୍",
                            meaning: "ସଂସାରର ତ୍ରିବିଧ ତାପ ନାଶର ବୀଜସ୍ୱରୂପ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 42,
                    lyric: "ତାତାଜ୍ଞୟା ଗଚ୍ଛତି ରାମଚନ୍ଦ୍ରେ ସ-ଲକ୍ଷ୍ମଣେ ଽରଣ୍ୟଚୟେ ସ-ସୀତେ ।\nଚକ୍ରନ୍ଦ ରାମସ୍ୟ ନିଜା ଜନିତ୍ରୀ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୨ ।।",
                    translation: "ପିତୃସତ୍ୟ ପାଳନ ପାଇଁ ଲକ୍ଷ୍ମଣ ଓ ସୀତାଙ୍କ ସହିତ ପ୍ରଭୁ ଶ୍ରୀରାମଚନ୍ଦ୍ର ଯେତେବେଳେ ବନବାସ ଗଲେ, ସେତେବେଳେ ଶ୍ରୀରାମଙ୍କ ଜନନୀ ମାତା କୌଶଲ୍ୟା କ୍ରନ୍ଦନ କରି ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ତାତାଜ୍ଞୟା",
                            meaning: "ପିତାଙ୍କ ଆଜ୍ଞାରେ"
                        },
                        {
                            word: "ସ-ଲକ୍ଷ୍ମଣେ ସ-ସୀତେ ଗଚ୍ଛତି",
                            meaning: "ଲକ୍ଷ୍ମଣ ଓ ସୀତାଙ୍କ ସହ ଯିବାବେଳେ"
                        },
                        {
                            word: "ଅରଣ୍ୟଚୟେ",
                            meaning: "ଦଣ୍ଡକାରଣ୍ୟ ବନକୁ"
                        },
                        {
                            word: "ରାମସ୍ୟ ନିଜା ଜନିତ୍ରୀ ଚକ୍ରନ୍ଦ",
                            meaning: "ଶ୍ରୀରାମଙ୍କ ନିଜ ମାତା (କୌଶଲ୍ୟା) କାନ୍ଦିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 43,
                    lyric: "ଏକାକିନୀ ଦଣ୍ଡକ-କାନନାନ୍ତାତ୍ ସା ନୀୟମାନା ଦଶକନ୍ଧରେଣ ।\nସୀତା ତଦାକ୍ରୋଶଦ୍ ଅନନ୍ୟ-ନାଥା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୩ ।।",
                    translation: "ଦଣ୍ଡକାରଣ୍ୟରୁ ଏକାକିନୀ ସୀତାଙ୍କୁ ଯେତେବେଳେ ଦଶମୁଣ୍ଡିଆ ରାବଣ ହରଣ କରି ନେଉଥିଲା, ସେତେବେଳେ ଅନ୍ୟ କୌଣସି ଆଶ୍ରୟ ନ ପାଇ ମାତା ସୀତା ଆର୍ତ୍ତସ୍ୱରରେ ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଏକାକିନୀ ଦଣ୍ଡକ-କାନନାନ୍ତାତ୍",
                            meaning: "ଦଣ୍ଡକାରଣ୍ୟ ବନରୁ ଏକାକିନୀ ଥିବା ବେଳେ"
                        },
                        {
                            word: "ଦଶକନ୍ଧରେଣ ନୀୟମାନା",
                            meaning: "ଦଶାନନ ରାବଣ ଦ୍ୱାରା ନିଆଯାଉଥିବା"
                        },
                        {
                            word: "ଅନନ୍ୟ-ନାଥା ସୀତା",
                            meaning: "ଅନ୍ୟ କେହି ରକ୍ଷକ ନ ଥିବା ମାତା ସୀତା"
                        },
                        {
                            word: "ତଦା ଆକ୍ରୋଶଦ୍",
                            meaning: "ସେତେବେଳେ ବିକଳ ହୋଇ ଡାକିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 44,
                    lyric: "ରାମାଦ୍-ବିଯୁକ୍ତା ଜନକାତ୍ମଜା ସା ବିଚିନ୍ତୟନ୍ତୀ ହୃଦି ରାମ-ରୂପମ୍ ।\nରୁରୋଦ ସୀତା ରଘୁନାଥ ପାହି ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୪ ।।",
                    translation: "ଶ୍ରୀରାମଙ୍କ ଠାରୁ ବିଚ୍ଛିନ୍ନ ହୋଇ ଜନକନନ୍ଦିନୀ ସୀତାଦେବୀ ନିଜ ହୃଦୟରେ ଶ୍ରୀରାମଙ୍କ ଦିବ୍ୟରୂପ ଧ୍ୟାନ କରି କାନ୍ଦି କାନ୍ଦି କହିଲେ— 'ହେ ରଘୁନାଥ! ମୋତେ ରକ୍ଷା କରନ୍ତୁ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ରାମାଦ୍ ବିଯୁକ୍ତା",
                            meaning: "ଶ୍ରୀରାମଙ୍କ ଠାରୁ ବିଚ୍ଛିନ୍ନ ହୋଇ"
                        },
                        {
                            word: "ଜନକାତ୍ମଜା ସୀତା",
                            meaning: "ଜନକନନ୍ଦିନୀ ସୀତା"
                        },
                        {
                            word: "ହୃଦି ରାମ-ରୂପଂ ବିଚିନ୍ତୟନ୍ତୀ",
                            meaning: "ହୃଦୟରେ ଶ୍ରୀରାମଙ୍କ ରୂପ ଚିନ୍ତା କରି"
                        },
                        {
                            word: "ରଘୁନାଥ ପାହି",
                            meaning: "ହେ ରଘୁନାଥ, ରକ୍ଷା କରନ୍ତୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 45,
                    lyric: "ପ୍ରସୀଦ ବିଷ୍ଣୋ ରଘୁ-ବଂଶ-ନାଥ ସୁରାସୁରାଣାଂ ସୁଖ-ଦୁଃଖ-ହେତୋ ।\nରୁରୋଦ ସୀତା ତୁ ସମୁଦ୍ର-ମଧ୍ୟେ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୫ ।।",
                    translation: "ସମୁଦ୍ର ଆକାଶ ମାର୍ଗରେ ନିଆଯିବା ବେଳେ ମାତା ସୀତା କ୍ରନ୍ଦନ କରି ଡାକୁଥିଲେ— 'ହେ ଭଗବାନ ବିଷ୍ଣୁ! ହେ ରଘୁକୁଳନାଥ! ହେ ସୁର ଓ ଅସୁରମାନଙ୍କ ସୁଖ-ଦୁଃଖର ବିଧାତା! ପ୍ରସନ୍ନ ହୁଅନ୍ତୁ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ପ୍ରସୀଦ ବିଷ୍ଣୋ",
                            meaning: "ପ୍ରସନ୍ନ ହୁଅନ୍ତୁ ହେ ବିଷ୍ଣୁ"
                        },
                        {
                            word: "ରଘୁ-ବଂଶ-ନାଥ",
                            meaning: "ହେ ରଘୁବଂଶର ପ୍ରଭୁ"
                        },
                        {
                            word: "ସୁରାସୁରାଣାଂ ସୁଖ-ଦୁଃଖ-ହେତୋ",
                            meaning: "ଦେବ ଓ ଦାନବଙ୍କ ସୁଖ-ଦୁଃଖର କାରଣ"
                        },
                        {
                            word: "ସମୁଦ୍ର-ମଧ୍ୟେ ରୁରୋଦ",
                            meaning: "ସମୁଦ୍ର ଉପରେ କ୍ରନ୍ଦନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 46,
                    lyric: "ଅନ୍ତର୍-ଜଳେ ଗ୍ରାହ-ଗୃହୀତ-ପାଦୋ ବିସୃଷ୍ଟ-ବିକ୍ଲିଷ୍ଟ-ସମସ୍ତ-ବନ୍ଧୁଃ ।\nତଦା ଗଜେନ୍ଦ୍ରୋ ନିତରାଂ ଜଗାଦ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୬ ।।",
                    translation: "ଜଳ ମଧ୍ୟରେ କୁମ୍ଭୀର ଦ୍ୱାରା ପାଦ ଟଣା ହେବା ପରେ ଏବଂ ସମସ୍ତ ବନ୍ଧୁବାନ୍ଧବ ପରିତ୍ୟାଗ କରିବା ପରେ ଗଜେନ୍ଦ୍ର ନିରନ୍ତର କାକୂକ୍ତିରେ ପ୍ରଭୁଙ୍କୁ ଡାକିଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଅନ୍ତର୍-ଜଳେ",
                            meaning: "ଜଳ ମଧ୍ୟରେ"
                        },
                        {
                            word: "ଗ୍ରାହ-ଗୃହୀତ-ପାଦଃ",
                            meaning: "କୁମ୍ଭୀର ଦ୍ୱାରା ପାଦ ଧରାହୋଇ"
                        },
                        {
                            word: "ବିସୃଷ୍ଟ-ସମସ୍ତ-ବନ୍ଧୁଃ",
                            meaning: "ସମସ୍ତ ସାଙ୍ଗସାଥୀ ଛାଡ଼ି ଚାଲିଯିବା ପରେ"
                        },
                        {
                            word: "ଗଜେନ୍ଦ୍ରଃ ନିତରାଂ ଜଗାଦ",
                            meaning: "ଗଜେନ୍ଦ୍ର ନିରନ୍ତର ଗାନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 47,
                    lyric: "ହଂସଧ୍ୱଜଃ ଶଙ୍ଖଯୁତୋ ଦଦର୍ଶ ପୁତ୍ରଂ କଟାହେ ପ୍ରପତନ୍ତମ୍ ଏନମ୍ ।\nପୁଣ୍ୟାନି ନାମାନି ହରେର୍ ଜପନ୍ତଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୭ ।।",
                    translation: "ରାଜା ହଂସଧ୍ୱଜ ତାଙ୍କ ଗୁରୁ ଶଙ୍ଖଙ୍କ ସହିତ ନିଜ ପୁତ୍ର ସୁଧନ୍ୱାଙ୍କୁ ଫୁଟନ୍ତା ତେଲ କଡ଼େଇରେ ପକାଯିବା ଦେଖିଲେ; କିନ୍ତୁ ବାଳକ ସୁଧନ୍ୱା ନିର୍ଭୟରେ ଶ୍ରୀହରିଙ୍କ ପବିତ୍ର ନାମ ଜପ କରୁଥିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ହଂସଧ୍ୱଜଃ ଦଦର୍ଶ",
                            meaning: "ରାଜା ହଂସଧ୍ୱଜ ଦେଖିଲେ"
                        },
                        {
                            word: "ପୁତ୍ରଂ କଟାହେ ପ୍ରପତନ୍ତମ୍",
                            meaning: "ପୁତ୍ରକୁ ତପ୍ତ କଡ଼େଇରେ ପଡ଼ୁଥିବା"
                        },
                        {
                            word: "ପୁଣ୍ୟାନି ନାମାନି ହରେଃ ଜପନ୍ତମ୍",
                            meaning: "ଶ୍ରୀହରିଙ୍କ ପବିତ୍ର ନାମ ଜପ କରୁଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 48,
                    lyric: "ଦୁର୍ବାସସୋ ବାକ୍ୟମ୍ ଉପେତ୍ୟ କୃଷ୍ଣା ସା ଚାବ୍ରବୀତ୍ କାନନ-ବାସିନୀଶମ୍ ।\nଅନ୍ତଃପ୍ରବିଷ୍ଟଂ ମନସାଜୁହାବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୮ ।।",
                    translation: "ଦୁର୍ବାସା ଋଷିଙ୍କ କଠିନ ଆଜ୍ଞା ଶୁଣି (ସମସ୍ତ ଶିଷ୍ୟଙ୍କୁ ଅନ୍ନ ଦେବା ଅସମ୍ଭବ ଜାଣି) ଦ୍ରୌପଦୀ ଅନ୍ତରରେ ବିରାଜିତ ବନବାସୀମାନଙ୍କ ନାଥ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ମନେ ମନେ ଆକୁଳ ହୋଇ ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଦୁର୍ବାସସଃ ବାକ୍ୟମ୍ ଉପେତ୍ୟ",
                            meaning: "ଦୁର୍ବାସାଙ୍କ କଥା ଶୁଣି"
                        },
                        {
                            word: "କୃଷ୍ଣା (ଦ୍ରୌପଦୀ)",
                            meaning: "ଦ୍ରୌପଦୀ"
                        },
                        {
                            word: "କାନନ-ବାସିନୀଶମ୍",
                            meaning: "ବନବାସୀମାନଙ୍କ ପ୍ରଭୁଙ୍କୁ"
                        },
                        {
                            word: "ଅନ୍ତଃପ୍ରବିଷ୍ଟଂ ମନସା ଆଜୁହାବ",
                            meaning: "ହୃଦୟରେ ସ୍ଥିତ ପ୍ରଭୁଙ୍କୁ ମନରେ ଡାକିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 49,
                    lyric: "ଧ୍ୟେୟଃ ସଦା ଯୋଗିଭିର୍ ଅପ୍ରମେୟଃ ଚିନ୍ତା-ହରଶ୍ ଚିନ୍ତିତ-ପାରିଜାତଃ ।\nକସ୍ତୂରିକା-କଳ୍ପିତ-ନୀଳ-ବର୍ଣ୍ଣୋ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୪୯ ।।",
                    translation: "ଯୋଗୀମାନେ ଯାହାଙ୍କୁ ସଦା ଧ୍ୟାନ କରନ୍ତି, ଯିଏ ଅପ୍ରମେୟ, ସମସ୍ତ ଚିନ୍ତାହାରୀ, କଳ୍ପବୃକ୍ଷ ପରି ମନୋବାଞ୍ଛା ପୂରଣକାରୀ ଏବଂ କସ୍ତୂରୀ ପରି ମନୋହର ଶ୍ୟାମଳବର୍ଣ୍ଣ— ସେହି ପ୍ରଭୁଙ୍କୁ ବନ୍ଦନା କର— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଯୋଗିଭିଃ ସଦା ଧ୍ୟେୟଃ",
                            meaning: "ଯୋଗୀମାନଙ୍କ ଦ୍ୱାରା ସର୍ବଦା ଧ୍ୟେୟ"
                        },
                        {
                            word: "ଅପ୍ରମେୟଃ ଚିନ୍ତା-ହରଃ",
                            meaning: "ଅପାର ମହିମାମୟ ଓ ଚିନ୍ତା ବିନାଶକାରୀ"
                        },
                        {
                            word: "ଚିନ୍ତିତ-ପାରିଜାତଃ",
                            meaning: "ସମସ୍ତ ଇଚ୍ଛା ପୂରଣ କରୁଥିବା ପାରିଜାତ"
                        },
                        {
                            word: "ନୀଳ-ବର୍ଣ୍ଣଃ",
                            meaning: "ଶ୍ୟାମଳ ଶ୍ରୀବିଗ୍ରହ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 50,
                    lyric: "ସଂସାର-କୂପେ ପତିତୋ ଽତ୍ୟଗାଧେ ମୋହାନ୍ଧ-ପୂର୍ଣ୍ଣେ ବିଷୟାଭିତପ୍ତେ ।\nକରାବଲମ୍ବଂ ମମ ଦେହି ବିଷ୍ଣୋ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୦ ।।",
                    translation: "ମୋହ ଓ ଅଜ୍ଞାନତାରେ ପରିପୂର୍ଣ୍ଣ ଏବଂ ବିଷୟ-ଭୋଗରେ ଜର୍ଜରିତ ଅତି ଗଭୀର ସଂସାର କୂପରେ ମୁଁ ପଡ଼ିରହିଛି; ହେ ଭଗବାନ ବିଷ୍ଣୁ! ମୋତେ ନିଜ କରପଲ୍ଲବର ଆଶ୍ରୟ ପ୍ରଦାନ କରନ୍ତୁ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଅତ୍ୟଗାଧେ ସଂସାର-କୂପେ ପତିତଃ",
                            meaning: "ଅତି ଗଭୀର ସଂସାର ରୂପୀ କୂଅରେ ପତିତ ହୋଇ"
                        },
                        {
                            word: "ମୋହାନ୍ଧ-ପୂର୍ଣ୍ଣେ",
                            meaning: "ମୋହ ଓ ଅନ୍ଧକାରରେ ପରିପୂର୍ଣ୍ଣ"
                        },
                        {
                            word: "ବିଷୟାଭିତପ୍ତେ",
                            meaning: "ଜାଗତିକ ବିଷୟରେ ଦଗ୍ଧ"
                        },
                        {
                            word: "କରାବଲମ୍ବଂ ମମ ଦେହି ବିଷ୍ଣୋ",
                            meaning: "ହେ ବିଷ୍ଣୁ, ମୋତେ କରାରବିନ୍ଦର ଆଶ୍ରୟ ଦିଅନ୍ତୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 51,
                    lyric: "ତ୍ୱାମ୍ ଏବ ଯାଚେ ମମ ଦେହି ଜିହ୍ୱେ ସମାଗତେ ଦଣ୍ଡ-ଧରେ କୃତାନ୍ତେ ।\nବକ୍ତବ୍ୟମ୍ ଏବଂ ମଧୁରଂ ସୁ-ଭକ୍ତ୍ୟା ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୧ ।।",
                    translation: "ହେ ମୋର ଜିହ୍ୱା! ମୁଁ କେବଳ ତୁମ ନିକଟରେ ଏତିକି ଭିକ୍ଷା ମାଗୁଛି— ଯେତେବେଳେ ଦଣ୍ଡଧାରୀ ଯମରାଜ ଉପସ୍ଥିତ ହେବେ, ସେହି ଅନ୍ତିମ କାଳରେ ତୁମେ ପରମ ଭକ୍ତି ସହକାରେ ଏହି ମଧୁର ନାମ ଉଚ୍ଚାରଣ କରିବ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ତ୍ୱାମ୍ ଏବ ଯାଚେ",
                            meaning: "ତୁମକୁ ହିଁ ମାଗୁଛି"
                        },
                        {
                            word: "ମମ ଦେହି ଜିହ୍ୱେ",
                            meaning: "ହେ ମୋର ଜିହ୍ୱା, ମୋତେ ଦିଅ"
                        },
                        {
                            word: "ଦଣ୍ଡ-ଧରେ କୃତାନ୍ତେ ସମାଗତେ",
                            meaning: "ଦଣ୍ଡଧାରୀ ଯମରାଜ ଆସି ପହଞ୍ଚିବା ବେଳେ"
                        },
                        {
                            word: "ସୁ-ଭକ୍ତ୍ୟା ମଧୁରଂ ବକ୍ତବ୍ୟମ୍",
                            meaning: "ପରମ ଭକ୍ତିରେ ମଧୁର ବାଣୀ କହିବା ଉଚିତ୍"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 52,
                    lyric: "ଭଜସ୍ୱ ମନ୍ତ୍ରଂ ଭବ-ବନ୍ଧ-ମୁକ୍ତ୍ୟୈ ଜିହ୍ୱେ ରସଜ୍ଞେ ସୁ-ଲଭଂ ମନୋଜ୍ଞମ୍ ।\nଦ୍ୱୈପାୟନାଦ୍ୟୈର୍ ମୁନିଭିଃ ପ୍ରଜପ୍ତଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୨ ।।",
                    translation: "ହେ ରସଜ୍ଞା ଜିହ୍ୱା! ଭବବନ୍ଧନରୁ ମୁକ୍ତି ପାଇବା ପାଇଁ ଶ୍ରୀ ବ୍ୟାସଦେବ ପ୍ରଭୃତି ମୁନିଋଷିମାନଙ୍କ ଦ୍ୱାରା ନିରନ୍ତର ଜପା ଯାଉଥିବା ଏହି ଅତି ସୁଲଭ ଓ ମନୋହର ମହାମନ୍ତ୍ରକୁ ସର୍ବଦା ଭଜନ କର— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଭବ-ବନ୍ଧ-ମୁକ୍ତ୍ୟୈ",
                            meaning: "ସଂସାର ବନ୍ଧନରୁ ମୁକ୍ତି ନିମନ୍ତେ"
                        },
                        {
                            word: "ସୁ-ଲଭଂ ମନୋଜ୍ଞଂ ମନ୍ତ୍ରମ୍",
                            meaning: "ସହଜଲଭ୍ୟ ଓ ମନୋହର ମନ୍ତ୍ରକୁ"
                        },
                        {
                            word: "ଦ୍ୱୈପାୟନାଦ୍ୟୈଃ ମୁନିଭିଃ ପ୍ରଜପ୍ତମ୍",
                            meaning: "ବ୍ୟାସଦେବ ପ୍ରଭୃତି ଋଷିମାନଙ୍କ ଦ୍ୱାରା ଜପିତ"
                        },
                        {
                            word: "ଭଜସ୍ୱ ଜିହ୍ୱେ",
                            meaning: "ହେ ଜିହ୍ୱା, ଭଜନ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 53,
                    lyric: "ଗୋପାଳ ବଂଶୀଧର ରୂପ-ସିନ୍ଧୋ ଲୋକେଶ ନାରାୟଣ ଦୀନ-ବନ୍ଧୋ ।\nଉଚ୍ଚ-ସ୍ୱରୈସ୍ ତ୍ୱଂ ବଦ ସର୍ବଦୈବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୩ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ତୁମେ ସର୍ବଦା ଉଚ୍ଚ ସ୍ୱରରେ ଏହିପରି କୀର୍ତ୍ତନ କର— 'ହେ ଗୋପାଳ! ହେ ବଂଶୀଧାରୀ! ହେ ଅନନ୍ତ ସୌନ୍ଦର୍ଯ୍ୟର ସାଗର! ହେ ଲୋକେଶ୍ୱର! ହେ ନାରାୟଣ! ହେ ଦୀନବନ୍ଧୁ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଗୋପାଳ ବଂଶୀଧର",
                            meaning: "ହେ ଗୋପାଳ, ହେ ବଂଶୀଧାରୀ"
                        },
                        {
                            word: "ରୂପ-ସିନ୍ଧୋ",
                            meaning: "ସୌନ୍ଦର୍ଯ୍ୟର ମହାସାଗର"
                        },
                        {
                            word: "ଲୋକେଶ ନାରାୟଣ ଦୀନ-ବନ୍ଧୋ",
                            meaning: "ଜଗତର ଈଶ୍ୱର, ନାରାୟଣ, ଦୀନଜନଙ୍କ ବନ୍ଧୁ"
                        },
                        {
                            word: "ଉଚ୍ଚ-ସ୍ୱରୈଃ ସର୍ବଦୈବ ବଦ",
                            meaning: "ଉଚ୍ଚ ସ୍ୱରରେ ସର୍ବଦା କୁହ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 54,
                    lyric: "ଜିହ୍ୱେ ସଦୈବ ଭଜ ସୁନ୍ଦରାଣି ନାମାନି କୃଷ୍ଣସ୍ୟ ମନୋହରାଣି ।\nସମସ୍ତ-ଭକ୍ତାର୍ତ୍ତି-ବିନାଶନାନି ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୪ ।।",
                    translation: "ହେ ମୋର ଜିହ୍ୱା! ଭକ୍ତମାନଙ୍କର ସମସ୍ତ ଦୁଃଖ-କଷ୍ଟ ବିନାଶ କରୁଥିବା ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଅତି ସୁନ୍ଦର ଓ ମନୋହର ନାମାବଳୀକୁ ତୁମେ ନିରନ୍ତର ଭଜନ କର— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "କୃଷ୍ଣସ୍ୟ ସୁନ୍ଦରାଣି ମନୋହରାଣି ନାମାନି",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ସୁନ୍ଦର ଓ ମନମୋହକ ନାମସବୁ"
                        },
                        {
                            word: "ସମସ୍ତ-ଭକ୍ତାର୍ତ୍ତି-ବିନାଶନାନି",
                            meaning: "ସମସ୍ତ ଭକ୍ତଙ୍କ ଦୁଃଖ-ଯନ୍ତ୍ରଣା ନାଶକାରୀ"
                        },
                        {
                            word: "ସଦୈବ ଭଜ ଜିହ୍ୱେ",
                            meaning: "ହେ ଜିହ୍ୱା, ସର୍ବଦା ଭଜନ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 55,
                    lyric: "ଗୋବିନ୍ଦ ଗୋବିନ୍ଦ ହରେ ମୁରାରେ ଗୋବିନ୍ଦ ଗୋବିନ୍ଦ ମୁକୁନ୍ଦ କୃଷ୍ଣ ।\nଗୋବିନ୍ଦ ଗୋବିନ୍ଦ ରଥାଙ୍ଗ-ପାଣେ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୫ ।।",
                    translation: "'ହେ ଗୋବିନ୍ଦ, ଗୋବିନ୍ଦ, ହରେ, ମୁରାରୀ! ହେ ଗୋବିନ୍ଦ, ଗୋବିନ୍ଦ, ମୁକୁନ୍ଦ, କୃଷ୍ଣ! ହେ ଗୋବିନ୍ଦ, ଗୋବିନ୍ଦ, ହସ୍ତରେ ଚକ୍ରଧାରୀ ପ୍ରଭୁ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ହରେ ମୁରାରେ",
                            meaning: "ହେ ଶ୍ରୀହରି, ମୁରାସୁର ବିନାଶକାରୀ"
                        },
                        {
                            word: "ମୁକୁନ୍ଦ କୃଷ୍ଣ",
                            meaning: "ମୁକ୍ତିଦାତା ଶ୍ରୀକୃଷ୍ଣ"
                        },
                        {
                            word: "ରଥାଙ୍ଗ-ପାଣେ",
                            meaning: "ହାତରେ ରଥଚକ୍ର (ସୁଦର୍ଶନ ଚକ୍ର) ଧାରଣ କରିଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 56,
                    lyric: "ସୁଖାବସାନେ ତ୍ୱ୍ ଇଦମ୍ ଏବ ସାରଂ ଦୁଃଖାବସାନେ ତ୍ୱ୍ ଇଦମ୍ ଏବ ଗେୟମ୍ ।\nଦେହାବସାନେ ତ୍ୱ୍ ଇଦମ୍ ଏବ ଜାପ୍ୟଂ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୬ ।।",
                    translation: "ସାଂସାରିକ ସୁଖର ଅବସାନରେ ଏହି ନାମ ହିଁ ଏକମାତ୍ର ସାରତତ୍ତ୍ୱ; ସମସ୍ତ ଦୁଃଖର ଶେଷରେ ଏହି ନାମ ହିଁ ଗାନ ଯୋଗ୍ୟ; ଏବଂ ଏହି ଶରୀରର ଅବସାନ (ମୃତ୍ୟୁ) କାଳରେ କେବଳ ଏହି ନାମ ହିଁ ଜପିବା କର୍ତ୍ତବ୍ୟ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ସୁଖାବସାନେ ଇଦମ୍ ଏବ ସାରମ୍",
                            meaning: "ସୁଖର ଶେଷରେ ଏହା ହିଁ ସାର"
                        },
                        {
                            word: "ଦୁଃଖାବସାନେ ଇଦମ୍ ଏବ ଗେୟମ୍",
                            meaning: "ଦୁଃଖର ଶେଷରେ ଏହା ହିଁ ଗାନ କରିବା ଉଚିତ୍"
                        },
                        {
                            word: "ଦେହାବସାନେ ଇଦମ୍ ଏବ ଜାପ୍ୟମ୍",
                            meaning: "ଶରୀର ଅନ୍ତ ସମୟରେ ଏହା ହିଁ ଜପ କରିବା ଯୋଗ୍ୟ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 57,
                    lyric: "ଦୁର୍ବାର-ବାକ୍ୟଂ ପରିଗୃହ୍ୟ କୃଷ୍ଣା ମୃଗୀବ ଭୀତା ତୁ କଥଂ କଥଞ୍ଚିତ୍ ।\nସଭାଂ ପ୍ରବିଷ୍ଟା ମନସାଜୁହାବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୭ ।।",
                    translation: "ଦୁଃଶାସନର ଅନିବାର୍ଯ୍ୟ ଆଦେଶ ପାଇ ଭୟଭୀତ ହରିଣୀ ପରି କୌଣସି ପ୍ରକାରେ ରାଜସଭାରେ ପ୍ରବେଶ କରି ଦ୍ରୌପଦୀ ମନେ ମନେ ଆକୁଳ ହୋଇ ଡାକିଲେ— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଦୁର୍ବାର-ବାକ୍ୟଂ ପରିଗୃହ୍ୟ",
                            meaning: "ଅଲଙ୍ଘନୀୟ ବଚନ ଶୁଣି"
                        },
                        {
                            word: "ଭୀତା ମୃଗୀବ",
                            meaning: "ଭୟାର୍ତ୍ତା ହରିଣୀ ସଦୃଶ"
                        },
                        {
                            word: "ସଭାଂ ପ୍ରବିଷ୍ଟା କୃଷ୍ଣା",
                            meaning: "ସଭାରେ ପ୍ରବିଷ୍ଟା ହୋଇ ଦ୍ରୌପଦୀ"
                        },
                        {
                            word: "ମନସା ଆଜୁହାବ",
                            meaning: "ଅନ୍ତରରେ ଡାକିଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 58,
                    lyric: "ଶ୍ରୀ କୃଷ୍ଣ ରାଧାବର ଗୋକୁଳେଶ ଗୋପାଳ ଗୋବର୍ଦ୍ଧନ-ନାଥ ବିଷ୍ଣୋ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୮ ।।",
                    translation: "ହେ ମୋର ଜିହ୍ୱା! ତୁମେ କେବଳ ଏହି ଅମୃତ ରସ ପାନ କର— 'ହେ ଶ୍ରୀକୃଷ୍ଣ! ହେ ରାଧାବଲ୍ଲଭ! ହେ ଗୋକୁଳେଶ୍ୱର! ହେ ଗୋପାଳ! ହେ ଗିରିଗୋବର୍ଦ୍ଧନନାଥ! ହେ ବିଷ୍ଣୁ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ରାଧାବର ଗୋକୁଳେଶ",
                            meaning: "ଶ୍ରୀରାଧାଙ୍କ ପ୍ରିୟତମ, ଗୋକୁଳର ଅଧୀଶ୍ୱର"
                        },
                        {
                            word: "ଗୋପାଳ ଗୋବର୍ଦ୍ଧନ-ନାଥ ବିଷ୍ଣୋ",
                            meaning: "ଗୋପାଳ, ଗୋବର୍ଦ୍ଧନଧାରୀ, ଭଗବାନ ବିଷ୍ଣୁ"
                        },
                        {
                            word: "ଜିହ୍ୱେ ଏତଦ୍ ଅମୃତମ୍ ଏବ ପିବସ୍ୱ",
                            meaning: "ହେ ଜିହ୍ୱା, ଏହି ଅମୃତକୁ ହିଁ ପାନ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 59,
                    lyric: "ଶ୍ରୀନାଥ ବିଶ୍ୱେଶ୍ୱର ବିଶ୍ୱ-ମୂର୍ତ୍ତେ ଶ୍ରୀ ଦେବକୀ-ନନ୍ଦନ ଦୈତ୍ୟ-ଶତ୍ରୋ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୫୯ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ତୁମେ ନିରନ୍ତର ଏହି ନାମାମୃତ ପାନ କର— 'ହେ ଲକ୍ଷ୍ମୀପତି ଶ୍ରୀନାଥ! ହେ ବିଶ୍ୱେଶ୍ୱର! ହେ ବିଶ୍ୱରୂପ! ହେ ଦେବକୀନନ୍ଦନ! ହେ ଅସୁରନାଶକ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଶ୍ରୀନାଥ ବିଶ୍ୱେଶ୍ୱର",
                            meaning: "ଲକ୍ଷ୍ମୀଦେବୀଙ୍କ ନାଥ, ଜଗତର ଈଶ୍ୱର"
                        },
                        {
                            word: "ବିଶ୍ୱ-ମୂର୍ତ୍ତେ",
                            meaning: "ବିଶ୍ୱବ୍ରହ୍ମାଣ୍ଡ ସ୍ୱରୂପ"
                        },
                        {
                            word: "ଦେବକୀ-ନନ୍ଦନ ଦୈତ୍ୟ-ଶତ୍ରୋ",
                            meaning: "ମାତା ଦେବକୀଙ୍କ ପୁତ୍ର, ଦୈତ୍ୟମାନଙ୍କ ଶତ୍ରୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 60,
                    lyric: "ଗୋପୀପତେ କଂସ-ରିପୋ ମୁକୁନ୍ଦ ଲକ୍ଷ୍ମୀପତେ କେଶବ ବାସୁଦେବ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୦ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ଏହି ପରମ ଅମୃତ ସର୍ବଦା ପାନ କର— 'ହେ ଗୋପୀଜନବଲ୍ଲଭ! ହେ କଂସାରି! ହେ ମୁକୁନ୍ଦ! ହେ ଲକ୍ଷ୍ମୀପତି! ହେ କେଶବ! ହେ ବାସୁଦେବ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଗୋପୀପତେ",
                            meaning: "ଗୋପୀମାନଙ୍କ ପ୍ରାଣେଶ୍ୱର"
                        },
                        {
                            word: "କଂସ-ରିପୋ ମୁକୁନ୍ଦ",
                            meaning: "କଂସର ଶତ୍ରୁ, ମୁକ୍ତିପ୍ରଦାତା"
                        },
                        {
                            word: "ଲକ୍ଷ୍ମୀପତେ କେଶବ ବାସୁଦେବ",
                            meaning: "ଲକ୍ଷ୍ମୀକାନ୍ତ, କେଶବ, ବସୁଦେବନନ୍ଦନ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 61,
                    lyric: "ଗୋପୀ-ଜନାହ୍ଲାଦ-କର ବ୍ରଜେଶ ଗୋ-ଚାରଣାରଣ୍ୟ-କୃତ-ପ୍ରବେଶ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୧ ।।",
                    translation: "ହେ ଜିହ୍ୱା! କେବଳ ଏହି ନାମାମୃତ ପାନ କର— 'ହେ ଗୋପୀଜନମାନଙ୍କୁ ଆନନ୍ଦ ପ୍ରଦାନକାରୀ! ହେ ବ୍ରଜେଶ୍ୱର! ହେ ଗୋଚାରଣ ନିମନ୍ତେ ବନରେ ପ୍ରବେଶ କରୁଥିବା କାହ୍ନା! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଗୋପୀ-ଜନ-ଆହ୍ଲାଦ-କର",
                            meaning: "ଗୋପୀମାନଙ୍କୁ ପରମ ଆନନ୍ଦ ଦେଉଥିବା"
                        },
                        {
                            word: "ବ୍ରଜେଶ",
                            meaning: "ବ୍ରଜର ରାଜା"
                        },
                        {
                            word: "ଗୋ-ଚାରଣ-ଅରଣ୍ୟ-କୃତ-ପ୍ରବେଶ",
                            meaning: "ଗୋଚାରଣ ପାଇଁ ବନ ମଧ୍ୟକୁ ଯାଇଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 62,
                    lyric: "ପ୍ରାଣେଶ ବିଶ୍ୱମ୍ଭର କୈଟଭାରେ ବୈକୁଣ୍ଠ ନାରାୟଣ ଚକ୍ର-ପାଣେ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୨ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ତୁମେ ଏହି ଅମୃତ ହିଁ ପାନ କର— 'ହେ ମୋର ପ୍ରାଣନାଥ! ହେ ବିଶ୍ୱମ୍ଭର! ହେ କୈଟଭାରୀ! ହେ ବୈକୁଣ୍ଠପତି ନାରାୟଣ! ହେ ଚକ୍ରପାଣି! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ପ୍ରାଣେଶ ବିଶ୍ୱମ୍ଭର",
                            meaning: "ପ୍ରାଣର ନାଥ, ଜଗତର ପାଳନକର୍ତ୍ତା"
                        },
                        {
                            word: "କୈଟଭାରେ",
                            meaning: "କୈଟଭ ଅସୁରର ବିନାଶକ"
                        },
                        {
                            word: "ବୈକୁଣ୍ଠ ନାରାୟଣ ଚକ୍ର-ପାଣେ",
                            meaning: "ବୈକୁଣ୍ଠାଧିପତି ନାରାୟଣ, ହସ୍ତରେ ଚକ୍ରଧାରୀ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 63,
                    lyric: "ହରେ ମୁରାରେ ମଧୁସୂଦନାଦ୍ୟ ଶ୍ରୀ ରାମ ସୀତାବର ରାବଣାରେ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୩ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ଏହି ଅମୃତ ସର୍ବଦା ପାନ କର— 'ହେ ହରି! ହେ ମୁରାରୀ! ହେ ଆଦ୍ୟପୁରୁଷ ମଧୁସୂଦନ! ହେ ଶ୍ରୀରାମ! ହେ ସୀତାକାନ୍ତ! ହେ ରାବଣାରୀ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ମଧୁସୂଦନ-ଆଦ୍ୟ",
                            meaning: "ମଧୁ ଦୈତ୍ୟ ବିନାଶକାରୀ, ଆଦିପୁରୁଷ"
                        },
                        {
                            word: "ଶ୍ରୀ ରାମ ସୀତାବର",
                            meaning: "ଭଗବାନ ଶ୍ରୀରାମ, ସୀତାଦେବୀଙ୍କ ପ୍ରିୟ ପତି"
                        },
                        {
                            word: "ରାବଣାରେ",
                            meaning: "ରାବଣର ଶତ୍ରୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 64,
                    lyric: "ଶ୍ରୀ ଯାଦବେନ୍ଦ୍ରାଦ୍ରି-ଧରାମ୍ବୁଜାକ୍ଷ ଗୋ-ଗୋପ-ଗୋପୀ-ସୁଖ-ଦାନ-ଦକ୍ଷ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୪ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ଏହି ଅମୃତ ପାନ କର— 'ହେ ଯାଦବଶ୍ରେଷ୍ଠ! ହେ ଗୋବର୍ଦ୍ଧନଧାରୀ! ହେ କମଳନୟନ! ହେ ଗାଈ, ଗୋପାଳ ଓ ଗୋପୀମାନଙ୍କୁ ସୁଖ ଦେବାରେ ସର୍ବଶ୍ରେଷ୍ଠ ଦକ୍ଷ ପ୍ରଭୁ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଶ୍ରୀ ଯାଦବେନ୍ଦ୍ର",
                            meaning: "ଯଦୁବଂଶର ଶ୍ରେଷ୍ଠ ନାଥ"
                        },
                        {
                            word: "ଅଦ୍ରି-ଧର-ଅମ୍ବୁଜାକ୍ଷ",
                            meaning: "ଗୋବର୍ଦ୍ଧନ ପର୍ବତ ଧାରଣକାରୀ, ପଦ୍ମପଳାଶଲୋଚନ"
                        },
                        {
                            word: "ଗୋ-ଗୋପ-ଗୋପୀ-ସୁଖ-ଦାନ-ଦକ୍ଷ",
                            meaning: "ଗୋ, ଗୋପ ଓ ଗୋପୀଙ୍କୁ ଆନନ୍ଦ ଦେବାରେ ନିପୁଣ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 65,
                    lyric: "ଧରାଭରୋତ୍ତାରଣ-ଗୋପ-ବେଶ ବିହାର-ଲୀଳା-କୃତ-ବନ୍ଧୁ-ଶେଷ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୫ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ଏହି ଅମୃତ ପାନ କର— 'ହେ ପୃଥିବୀର ଭାର ହରଣ କରିବାକୁ ଗୋପବାଳକ ବେଶ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ହେ ଦିବ୍ୟ ଲୀଳା ନିମନ୍ତେ ଅନନ୍ତ ଶେଷନାଗଙ୍କୁ ନିଜ ଜ୍ୟେଷ୍ଠଭ୍ରାତା (ବଳରାମ) କରିଥିବା ଭଗବାନ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଧରା-ଭର-ଉତ୍ତାରଣ-ଗୋପ-ବେଶ",
                            meaning: "ଧରଣୀର ଭାର ଲାଘବ ପାଇଁ ଗୋପାଳ ବେଶ ଧାରୀ"
                        },
                        {
                            word: "କୃତ-ବନ୍ଧୁ-ଶେଷ",
                            meaning: "ଶେଷନାଗଙ୍କୁ ଭାଇ ରୂପେ ଗ୍ରହଣ କରିଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 66,
                    lyric: "ବକୀ-ବକାଘାସୁର-ଧେନୁକାରେ କେଶୀ-ତୃଣାବର୍ତ୍ତ-ବିଘାତ-ଦକ୍ଷ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୬ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ଏହି ଅମୃତ ପାନ କର— 'ହେ ପୂତନା (ବକୀ), ବକାସୁର, ଅଘାସୁର ଓ ଧେନୁକାସୁରର ବିନାଶକାରୀ! ହେ କେଶୀ ଓ ତୃଣାବର୍ତ୍ତ ଦୈତ୍ୟକୁ ନିପାତ କରିବାରେ ଦକ୍ଷ ଭଗବାନ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ବକୀ-ବକ-ଅଘାସୁର-ଧେନୁକାରେ",
                            meaning: "ପୂତନା, ବକାସୁର, ଅଘାସୁର ଓ ଧେନୁକାସୁରର ଶତ୍ରୁ"
                        },
                        {
                            word: "କେଶୀ-ତୃଣାବର୍ତ୍ତ-ବିଘାତ-ଦକ୍ଷ",
                            meaning: "କେଶୀ ଓ ତୃଣାବର୍ତ୍ତ ଦୈତ୍ୟକୁ ବଧ କରିବାରେ ଦକ୍ଷ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 67,
                    lyric: "ଶ୍ରୀ ଜାନକୀ-ଜୀବନ ରାମଚନ୍ଦ୍ର ନିଶାଚରାରେ ଭରତାଗ୍ରଜେଶ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୭ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ଏହି ଅମୃତ ପାନ କର— 'ହେ ଶ୍ରୀଜାନକୀଜୀବନ ରାମଚନ୍ଦ୍ର! ହେ ରାକ୍ଷସକୁଳ ବିନାଶକାରୀ! ହେ ଭରତଙ୍କ ଜ୍ୟେଷ୍ଠ ଭ୍ରାତା ତଥା ସର୍ବେଶ୍ୱର ପ୍ରଭୁ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଶ୍ରୀ ଜାନକୀ-ଜୀବନ ରାମଚନ୍ଦ୍ର",
                            meaning: "ଜାନକୀଙ୍କ ଜୀବନସର୍ବସ୍ୱ ପ୍ରଭୁ ଶ୍ରୀରାମଚନ୍ଦ୍ର"
                        },
                        {
                            word: "ନିଶାଚରାରେ",
                            meaning: "ନିଶାଚର ରାକ୍ଷସମାନଙ୍କ ଶତ୍ରୁ"
                        },
                        {
                            word: "ଭରତ-ଅଗ୍ରଜ-ଈଶ",
                            meaning: "ଭରତଙ୍କ ବଡ଼ ଭାଇ ଏବଂ ସର୍ବନିୟନ୍ତା ପ୍ରଭୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 68,
                    lyric: "ନାରାୟଣାନନ୍ତ ହରେ ନୃସିଂହ ପ୍ରହ୍ଲାଦ-ବାଧାହର ହେ କୃପାଳୋ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୮ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ଏହି ଅମୃତ ପାନ କର— 'ହେ ନାରାୟଣ! ହେ ଅନନ୍ତ! ହେ ହରି! ହେ ଭଗବାନ ନୃସିଂହଦେବ! ହେ ପ୍ରହ୍ଲାଦଙ୍କ ସମସ୍ତ କଷ୍ଟହାରୀ ପରମ କୃପାମୟ ପ୍ରଭୁ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ନାରାୟଣ-ଅନନ୍ତ ହରେ ନୃସିଂହ",
                            meaning: "ହେ ନାରାୟଣ, ଅନନ୍ତ, ଶ୍ରୀହରି, ନୃସିଂହଦେବ"
                        },
                        {
                            word: "ପ୍ରହ୍ଲାଦ-ବାଧା-ହର ହେ କୃପାଳୋ",
                            meaning: "ଭକ୍ତ ପ୍ରହ୍ଲାଦଙ୍କ ସମସ୍ତ ବିପଦ ଦୂରକାରୀ, ହେ କୃପାଳୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 69,
                    lyric: "ଲୀଳା-ମନୁଷ୍ୟାକୃତି-ରାମ-ରୂପ ପ୍ରତାପ-ଦାସୀ-କୃତ-ସର୍ବ-ଭୂପ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୬୯ ।।",
                    translation: "ହେ ଜିହ୍ୱା! ଏହି ଅମୃତ ପାନ କର— 'ହେ ଦିବ୍ୟଲୀଳା ନିମନ୍ତେ ମନୁଷ୍ୟ ଆକାର ଧାରଣ କରିଥିବା ଶ୍ରୀରାମରୂପ ପ୍ରଭୁ! ହେ ନିଜ ପରାକ୍ରମ ଦ୍ୱାରା ସମସ୍ତ ରାଜାମାନଙ୍କୁ ସେବକ କରିଥିବା ପ୍ରଭୁ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଲୀଳା-ମନୁଷ୍ୟ-ଆକୃତି-ରାମ-ରୂପ",
                            meaning: "ଲୀଳା ପାଇଁ ନର ରୂପ ଧାରଣ କରିଥିବା ଶ୍ରୀରାମ"
                        },
                        {
                            word: "ପ୍ରତାପ-ଦାସୀ-କୃତ-ସର୍ବ-ଭୂପ",
                            meaning: "ନିଜ ପ୍ରତାପ ଦ୍ୱାରା ସମସ୍ତ ଭୂପାଳ (ରାଜା)ଙ୍କୁ ଦାସ କରିଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 70,
                    lyric: "ଶ୍ରୀ କୃଷ୍ଣ ଗୋବିନ୍ଦ ହରେ ମୁରାରେ ହେ ନାଥ ନାରାୟଣ ବାସୁଦେବ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୭୦ ।।",
                    translation: "ହେ ମୋର ଜିହ୍ୱା! ତୁମେ ନିରନ୍ତର କେବଳ ଏହି ପରମ ଅମୃତ ରସ ପାନ କର— 'ହେ ଶ୍ରୀକୃଷ୍ଣ! ହେ ଗୋବିନ୍ଦ! ହେ ହରି! ହେ ମୁରାରୀ! ହେ ନାଥ! ହେ ନାରାୟଣ! ହେ ବାସୁଦେବ! ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ଶ୍ରୀ କୃଷ୍ଣ ଗୋବିନ୍ଦ ହରେ ମୁରାରେ",
                            meaning: "ହେ ଶ୍ରୀକୃଷ୍ଣ, ଗୋବିନ୍ଦ, ଶ୍ରୀହରି, ମୁରାରୀ"
                        },
                        {
                            word: "ହେ ନାଥ ନାରାୟଣ ବାସୁଦେବ",
                            meaning: "ହେ ପ୍ରାଣନାଥ, ନାରାୟଣ, ବସୁଦେବନନ୍ଦନ"
                        },
                        {
                            word: "ଜିହ୍ୱେ ଏତଦ୍ ଅମୃତମ୍ ଏବ ପିବସ୍ୱ",
                            meaning: "ହେ ଜିହ୍ୱା, ଏହି ଅମୃତକୁ ହିଁ ପାନ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 71,
                    lyric: "ବକ୍ତୁଂ ସମର୍ଥୋ ଽପି ନ ବକ୍ତି କଶ୍ଚିଦ୍ ଅହୋ ଜନାନାଂ ବ୍ୟସନାଭିମୁଖ୍ୟମ୍ ।\nଜିହ୍ୱେ ପିବସ୍ୱାମୃତମ୍ ଏତଦ୍ ଏବ ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବେତି ।। ୭୧ ।।",
                    translation: "ଉଚ୍ଚାରଣ କରିବାକୁ ସମର୍ଥ ହୋଇ ମଧ୍ୟ କେହି ଏହି ନାମ ଉଚ୍ଚାରଣ କରୁନାହାନ୍ତି; ହାୟ! ମନୁଷ୍ୟମାନଙ୍କର ଅନର୍ଥ ଓ ଆତ୍ମବିନାଶ ପ୍ରତି କି ଘୋର ଆସକ୍ତି! ହେ ମୋର ଜିହ୍ୱା! ତୁମେ ଏହି ସଂସାର ପ୍ରତି ଦୃଷ୍ଟି ନ ଦେଇ କେବଳ ଏହି ପରମ ଅମୃତ ହିଁ ପାନ କର— 'ହେ ଗୋବିନ୍ଦ! ହେ ଦାମୋଦର! ହେ ମାଧବ!'।",
                    wordMeanings: [
                        {
                            word: "ବକ୍ତୁଂ ସମର୍ଥଃ ଅପି",
                            meaning: "କହିବାକୁ ସମର୍ଥ ଥାଇ ମଧ୍ୟ"
                        },
                        {
                            word: "ନ ବକ୍ତି କଶ୍ଚିଦ୍",
                            meaning: "କେହି ଉଚ୍ଚାରଣ କରୁନାହାନ୍ତି"
                        },
                        {
                            word: "ଅହୋ ଜନାନାଂ ବ୍ୟସନାଭିମୁଖ୍ୟମ୍",
                            meaning: "ହାୟ! ଲୋକମାନଙ୍କର ବିପଦ ଓ ବିନାଶ ଆଡ଼କୁ ଏହି ଆଗ୍ରହ"
                        },
                        {
                            word: "ଜିହ୍ୱେ ଏତଦ୍ ଅମୃତମ୍ ଏବ ପିବସ୍ୱ",
                            meaning: "ହେ ଜିହ୍ୱା, ତୁମେ ଏହି ଅମୃତକୁ ହିଁ ପାନ କର"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        id: "song-ambudanjanendranila",
        title: "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ - ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍ (Ambudanjanendra Nila - Sri Sri Krsna Candrastakam)",
        title_odia: "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ - ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍",
        title_english: "Ambudanjanendra Nila - Sri Sri Krsna Candrastakam",
        category: "Songs",
        type: "html",
        author: "Krsnadasa Kaviraja Goswami",
        tags: [
            "Ambudanjanendra Nila",
            "Sri Sri Krsna Candrastakam",
            "Sri Krsna Candrastakam",
            "Krsna Candrastakam",
            "Krsnadasa Kaviraja Goswami",
            "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ",
            "ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍",
            "କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍"
        ],
        description: "ଶ୍ରୀଳ କୃଷ୍ଣଦାସ କବିରାଜ ଗୋସ୍ୱାମୀଙ୍କ ବିରଚିତ ପରମ ମଧୁର ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍ ।",
        audioUrl: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsnadasa_Kaviraja_Goswami/Ambudanjanendra_Nila/Ambudanjanendra_Nila_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3",
        vocalist: "HG Jai Sachinandana Prabhu",
        audioVersions: [
            {
                label: "HG Jai Sachinandana Prabhu",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Krsnadasa_Kaviraja_Goswami/Ambudanjanendra_Nila/Ambudanjanendra_Nila_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3"
            }
        ],
        structuredContent: {
            id: "song-ambudanjanendranila",
            title: "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ - ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍ (Ambudanjanendra Nila - Sri Sri Krsna Candrastakam)",
            title_odia: "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ - ଶ୍ରୀ ଶ୍ରୀ କୃଷ୍ଣଚନ୍ଦ୍ରାଷ୍ଟକମ୍",
            title_english: "Ambudanjanendra Nila - Sri Sri Krsna Candrastakam",
            author: "Krsnadasa Kaviraja Goswami",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Ambudanjanendra%20Nila_More%20Songs%20of%20the%20Vaisnava%20Acaryas_2",
            verses: [
                {
                    id: 1,
                    lyric: "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ-ନିନ୍ଦି-କାନ୍ତି-ଡମ୍ବରଃ\nକୁଙ୍କୁମୋଦ୍ୟଦ୍-ଅର୍କ-ବିଦ୍ୟୁଦ୍-ଅଂଶୁ-ଦିବ୍ୟଦ୍-ଅମ୍ବରଃ ।\nଶ୍ରୀମଦ୍-ଅଙ୍ଗ-ଚର୍ଚ୍ଚିତେନ୍ଦୁ-ପୀତନାକ୍ତ-ଚନ୍ଦନଃ\nସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ ।। ୧ ।।",
                    translation: "ଯାହାଙ୍କର ଶ୍ୟାମଳ ଦିବ୍ୟ ଅଙ୍ଗକାନ୍ତି ସଜଳ ଜଳଧର (ମେଘ), କଜ୍ଜଳ ଏବଂ ଇନ୍ଦ୍ରନୀଳମଣିର ଶୋଭାକୁ ମଧ୍ୟ ପରାସ୍ତ କରୁଛି; ଯାହାଙ୍କର ପୀତବସନ ଉଦିତ ସୂର୍ଯ୍ୟଙ୍କ କିରଣ, ବିଦ୍ୟୁତପ୍ରଭା ଓ କୁଙ୍କୁମ ପରି ଝଟକୁଛି; ଏବଂ ଯାହାଙ୍କ ଶ୍ରୀଅଙ୍ଗ କର୍ପୂର ମିଶ୍ରିତ ପୀତଚନ୍ଦନରେ ଅନୁଲେପିତ ହୋଇଛି— ସେହି ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ପ୍ରାଣକନ୍ଦଳ ଶ୍ରୀକୃଷ୍ଣ ମୋତେ ନିଜ ଶ୍ରୀଚରଣକମଳର ନିତ୍ୟ ଦାସ୍ୟସେବା ପ୍ରଦାନ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "ଅମ୍ବୁଦ-ଅଞ୍ଜନ-ଇନ୍ଦ୍ରନୀଳ",
                            meaning: "ଜଳଭରା ମେଘ, କଜ୍ଜଳ ଓ ଇନ୍ଦ୍ରନୀଳମଣି"
                        },
                        {
                            word: "ନିନ୍ଦି-କାନ୍ତି-ଡମ୍ବରଃ",
                            meaning: "ଶୋଭାକୁ ପରାଜିତ କରୁଥିବା ଶ୍ୟାମଳ କାନ୍ତିବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ଦିବ୍ୟଦ୍-ଅମ୍ବରଃ",
                            meaning: "ଦିବ୍ୟ ପୀତାମ୍ବର ପରିହିତ"
                        },
                        {
                            word: "ଶ୍ରୀମଦ୍-ଅଙ୍ଗ-ଚର୍ଚ୍ଚିତେନ୍ଦୁ-ପୀତନାକ୍ତ-ଚନ୍ଦନଃ",
                            meaning: "କର୍ପୂର ଓ କୁଙ୍କୁମ ମିଶ୍ରିତ ପୀତଚନ୍ଦନ ଚର୍ଚ୍ଚିତ ଶ୍ରୀଅଙ୍ଗ"
                        },
                        {
                            word: "ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ",
                            meaning: "ସେହି ଗୋପରାଜ ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ"
                        },
                        {
                            word: "ସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ",
                            meaning: "ମୋତେ ନିଜ ଶ୍ରୀଚରଣର ଦାସ୍ୟ ଭକ୍ତି ପ୍ରଦାନ କରନ୍ତୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ଗଣ୍ଡ-ତାଣ୍ଡବାତି-ପଣ୍ଡିତାଣ୍ଡଜେଶ-କୁଣ୍ଡଳଶ୍\nଚନ୍ଦ୍ର-ପଦ୍ମ-ଷଣ୍ଡ-ଗର୍ବ-ଖଣ୍ଡନାସ୍ୟ-ମଣ୍ଡଳଃ ।\nବଲ୍ଲବୀଷୁ ବର୍ଦ୍ଧିତାତ୍ମ-ଗୂଢ଼-ଭାବ-ବନ୍ଧନଃ\nସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ ।। ୨ ।।",
                    translation: "ଯାହାଙ୍କ କପୋଳ ଯୁଗଳରେ ମକରାକୃତି କୁଣ୍ଡଳ ଅତି ଚତୁରତା ସହ ନୃତ୍ୟ କରୁଛି; ଯାହାଙ୍କ ଶ୍ରୀମୁଖମଣ୍ଡଳର ପରମ ସୌନ୍ଦର୍ଯ୍ୟ କୋଟି କୋଟି ଚନ୍ଦ୍ର ଓ ପଦ୍ମସମୂହର ଗର୍ବକୁ ଖର୍ବ କରୁଛି; ଏବଂ ଯିଏ ବ୍ରଜଗୋପୀମାନଙ୍କ ହୃଦୟରେ ନିଜ ପ୍ରତି ଗୂଢ଼ ପ୍ରେମଭାବର ବନ୍ଧନକୁ ନିରନ୍ତର ବୃଦ୍ଧି କରୁଛନ୍ତି— ସେହି ବଲ୍ଲଭେନ୍ଦ୍ର ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ ମୋତେ ନିଜ ଶ୍ରୀଚରଣର ନିତ୍ୟ ଦାସ୍ୟସେବା ପ୍ରଦାନ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "ଗଣ୍ଡ-ତାଣ୍ଡବ-ଅତି-ପଣ୍ଡିତ",
                            meaning: "କପୋଳରେ ନୃତ୍ୟ କରିବାରେ ଅତ୍ୟନ୍ତ ନିପୁଣ"
                        },
                        {
                            word: "ଅଣ୍ଡଜେଶ-କୁଣ୍ଡଳଃ",
                            meaning: "ମତ୍ସ୍ୟାକାର ବା ମକର କୁଣ୍ଡଳ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ଖଣ୍ଡନ-ଆସ୍ୟ-ମଣ୍ଡଳଃ",
                            meaning: "ଚନ୍ଦ୍ର ଓ ପଦ୍ମର ଗର୍ବ ଖଣ୍ଡନ କରୁଥିବା ଶ୍ରୀମୁଖବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ବଲ୍ଲବୀଷୁ",
                            meaning: "ବ୍ରଜଗୋପୀମାନଙ୍କ ମଧ୍ୟରେ"
                        },
                        {
                            word: "ବର୍ଦ୍ଧିତ-ଆତ୍ମ-ଗୂଢ଼-ଭାବ-ବନ୍ଧନଃ",
                            meaning: "ନିଜ ପ୍ରତି ଗୂଢ଼ ପ୍ରେମର ବନ୍ଧନ ବୃଦ୍ଧିକାରୀ"
                        },
                        {
                            word: "ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ",
                            meaning: "ସେହି ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 3,
                    lyric: "ନିତ୍ୟ-ନବ୍ୟ-ରୂପ-ବେଷ-ହାର୍ଦ୍ଦ-କେଳି-ଚେଷ୍ଟିତଃ\nକେଳି-ନର୍ମ-ଶର୍ମ-ଦାୟି-ମିତ୍ର-ବୃନ୍ଦ-ବେଷ୍ଟିତଃ ।\nସ୍ୱୀୟ-କେଳି-କାନନାଂଶୁ-ନିର୍ଜିତେନ୍ଦ୍ର-ନନ୍ଦନଃ\nସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ ।। ୩ ।।",
                    translation: "ଯାହାଙ୍କ ରୂପ, ବେଶଭୂଷା ଏବଂ ପ୍ରେମମୟ କ୍ରୀଡ଼ା-ବିଳାସ ନିତ୍ୟ-ନୂତନ ଭାବରେ ପ୍ରକାଶିତ ହୁଏ; ଯିଏ ହସ-ଖୁସି ଓ ମଧୁର ପରିହାସ ଦ୍ୱାରା ଆନନ୍ଦ ପ୍ରଦାନକାରୀ ସଖାମାନଙ୍କ ଗହଣରେ ସର୍ବଦା ପରିବେଷ୍ଟିତ; ଏବଂ ଯାହାଙ୍କ ନିଜସ୍ୱ କ୍ରୀଡ଼ାବନ ବୃନ୍ଦାବନର କାନ୍ତିକିରଣ ଇନ୍ଦ୍ରଙ୍କ ସ୍ୱର୍ଗୀୟ ନନ୍ଦନକାନନକୁ ମଧ୍ୟ ପରାସ୍ତ କରେ— ସେହି ବ୍ରଜରାଜନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ ମୋତେ ନିଜ ଶ୍ରୀଚରଣର ଦାସ୍ୟଭକ୍ତି ପ୍ରଦାନ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "ନିତ୍ୟ-ନବ୍ୟ-ରୂପ-ବେଷ",
                            meaning: "ଚିରନ୍ତନ ନବନବୀନ ରୂପ ଓ ବେଶଭୂଷାବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ହାର୍ଦ୍ଦ-କେଳି-ଚେଷ୍ଟିତଃ",
                            meaning: "ହୃଦୟଙ୍ଗମ ପ୍ରେମମୟ ଲୀଳାଚେଷ୍ଟାକାରୀ"
                        },
                        {
                            word: "ମିତ୍ର-ବୃନ୍ଦ-ବେଷ୍ଟିତଃ",
                            meaning: "ପ୍ରିୟ ଗୋପସଖାମାନଙ୍କ ଦ୍ୱାରା ପରିବେଷ୍ଟିତ"
                        },
                        {
                            word: "କାନନ-ଅଂଶୁ-ନିର୍ଜିତ-ଇନ୍ଦ୍ର-ନନ୍ଦନଃ",
                            meaning: "ଯାହାଙ୍କ ଲୀଳାବନ ଇନ୍ଦ୍ରଙ୍କ ନନ୍ଦନକାନନକୁ ଜିଣିଛି"
                        },
                        {
                            word: "ସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ",
                            meaning: "ମୋତେ ନିଜ ଚରଣସେବା ପ୍ରଦାନ କରନ୍ତୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 4,
                    lyric: "ପ୍ରେମ-ହେମ-ମଣ୍ଡିତାତ୍ମ-ବନ୍ଧୁତାଭିନନ୍ଦିତଃ\nକ୍ଷୌଣି-ଲଗ୍ନ-ଭାଳ-ଲୋକପାଳ-ପାଳି-ବନ୍ଦିତଃ ।\nନିତ୍ୟ-କାଳ-ସୃଷ୍ଟ-ବିପ୍ର-ଗୌରବାଳି-ବନ୍ଦନଃ\nସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ ।। ୪ ।।",
                    translation: "ପ୍ରେମରୂପୀ ସ୍ୱର୍ଣ୍ଣ ଅଳଙ୍କାରରେ ମଣ୍ଡିତ ଚିତ୍ତବିଶିଷ୍ଟ ଭକ୍ତମାନଙ୍କ ବନ୍ଧୁତାରେ ଯିଏ ପରମ ଆନନ୍ଦିତ; ଭୂମିରେ ମସ୍ତକ ସ୍ପର୍ଶ କରି ଦିଗପାଳ ଓ ଲୋକପାଳ ଦେବତାଗଣ ଯାହାଙ୍କୁ ପ୍ରଣାମ କରନ୍ତି; ଏବଂ ଯିଏ ବ୍ରାହ୍ମଣମାନଙ୍କୁ ସର୍ବଦା ପରମ ଆଦର ଓ ଗୌରବର ସହ ବନ୍ଦନା କରନ୍ତି— ସେହି ବଲ୍ଲଭେନ୍ଦ୍ର ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ ମୋତେ ନିଜ ଶ୍ରୀଚରଣର ଦାସ୍ୟସେବା ପ୍ରଦାନ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "ପ୍ରେମ-ହେମ-ମଣ୍ଡିତ",
                            meaning: "ପ୍ରେମରୂପୀ ସୁବର୍ଣ୍ଣରେ ବିଭୂଷିତ"
                        },
                        {
                            word: "ବନ୍ଧୁତା-ଅଭିନନ୍ଦିତଃ",
                            meaning: "ଭକ୍ତମାନଙ୍କ ବନ୍ଧୁତାରେ ଆନନ୍ଦିତ"
                        },
                        {
                            word: "କ୍ଷୌଣି-ଲଗ୍ନ-ଭାଳ",
                            meaning: "ଭୂମିରେ ମଥା ଲଗାଇ"
                        },
                        {
                            word: "ଲୋକପାଳ-ପାଳି-ବନ୍ଦିତଃ",
                            meaning: "ସମସ୍ତ ଲୋକପାଳ ଦେବତାଙ୍କ ଦ୍ୱାରା ବନ୍ଦିତ"
                        },
                        {
                            word: "ବିପ୍ର-ଗୌରବାଳି-ବନ୍ଦନଃ",
                            meaning: "ବ୍ରାହ୍ମଣମାନଙ୍କୁ ଗୌରବ ଓ ପ୍ରଣାମ କରୁଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 5,
                    lyric: "ଲୀଳୟେନ୍ଦ୍ର-କାଳିୟୋଷ୍ଣ-କଂସ-ବତ୍ସ-ଘାତକସ୍\nତତ୍-ତଦ୍-ଆତ୍ମ-କେଳି-ବୃଷ୍ଟି-ପୁଷ୍ଟ-ଭକ୍ତ-ଚାତକଃ ।\nବୀର୍ଯ୍ୟ-ଶୀଳ-ଲୀଳୟାତ୍ମ-ଘୋଷ-ବାସି-ନନ୍ଦନଃ\nସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ ।। ୫ ।।",
                    translation: "ଯିଏ ଅତି ଅନାୟାସରେ ଇନ୍ଦ୍ରଙ୍କ ଗର୍ବ ଚୂର୍ଣ୍ଣ କଲେ, କାଳୀୟ ନାଗର ବିଷାକ୍ତ କ୍ରୋଧ ଦମନ କଲେ, ଏବଂ କଂସ ତଥା ବତ୍ସାସୁର ଆଦି ଦୈତ୍ୟମାନଙ୍କୁ ବଧ କଲେ; ଯିଏ ନିଜର ବିବିଧ ଲୀଳାରୂପୀ ଅମୃତ ବୃଷ୍ଟି ଦ୍ୱାରା ଭକ୍ତରୂପୀ ଚାତକମାନଙ୍କୁ ପରିତୃପ୍ତ ଓ ପୁଷ୍ଟ କରନ୍ତି; ଏବଂ ନିଜର ଅଦ୍ଭୁତ ପରାକ୍ରମ ଓ ଶୀଳମୟ ଲୀଳା ଦ୍ୱାରା ବ୍ରଜବାସୀମାନଙ୍କୁ ଆନନ୍ଦିତ କରନ୍ତି— ସେହି ବ୍ରଜେନ୍ଦ୍ରନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ ମୋତେ ନିଜ ଶ୍ରୀଚରଣର ଦାସ୍ୟସେବା ପ୍ରଦାନ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "ଲୀଳୟା",
                            meaning: "ଅତି ଅନାୟାସରେ ବା ଖେଳାଖେଳାରେ"
                        },
                        {
                            word: "ଇନ୍ଦ୍ର-କାଳିୟ-କଂସ-ବତ୍ସ-ଘାତକଃ",
                            meaning: "ଇନ୍ଦ୍ରଙ୍କ ଗର୍ବହାରୀ, କାଳୀୟ, କଂସ ଓ ବତ୍ସାସୁରର ବିନାଶକ"
                        },
                        {
                            word: "କେଳି-ବୃଷ୍ଟି-ପୁଷ୍ଟ-ଭକ୍ତ-ଚାତକଃ",
                            meaning: "ଲୀଳାରୂପୀ ବୃଷ୍ଟି ଦ୍ୱାରା ଭକ୍ତରୂପୀ ଚାତକକୁ ପୁଷ୍ଟ କରୁଥିବା"
                        },
                        {
                            word: "ବୀର୍ଯ୍ୟ-ଶୀଳ-ଲୀଳୟା",
                            meaning: "ନିଜ ବୀରତ୍ୱ ଓ ସୁଶୀଳ ଲୀଳା ଦ୍ୱାରା"
                        },
                        {
                            word: "ଘୋଷ-ବାସି-ନନ୍ଦନଃ",
                            meaning: "ଗୋପପୁର (ବ୍ରଜ) ବାସୀଙ୍କୁ ଆନନ୍ଦ ଦେଉଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 6,
                    lyric: "କୁଞ୍ଜ-ରାସ-କେଳି-ସୀଧୁ-ରାଧିକାଦି-ତୋଷଣସ୍\nତତ୍-ତଦ୍-ଆତ୍ମ-କେଳି-ନର୍ମ-ତତ୍-ତଦ୍-ଆଳି-ପୋଷଣଃ ।\nପ୍ରେମ-ଶୀଳ-କେଳି-କୀର୍ତ୍ତି-ବିଶ୍ୱ-ଚିତ୍ତ-ନନ୍ଦନଃ\nସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ ।। ୬ ।।",
                    translation: "ବୃନ୍ଦାବନର କୁଞ୍ଜରେ ରାସଲୀଳା ରୂପୀ ଅମୃତ ରସ ଦ୍ୱାରା ଯିଏ ଶ୍ରୀରାଧିକା ଓ ଗୋପୀମାନଙ୍କୁ ପରିତୁଷ୍ଟ କରନ୍ତି; ନିଜର ମଧୁର ହାସ୍ୟ-ପରିହାସପୂର୍ଣ୍ଣ କ୍ରୀଡ଼ା ଦ୍ୱାରା ସଖୀସମୂହଙ୍କୁ ପ୍ରେମରେ ପରିପୋଷିତ କରନ୍ତି; ଏବଂ ନିଜର ପରମ ପ୍ରେମମୟ ଲୀଳା ଓ କୀର୍ତ୍ତି ଦ୍ୱାରା ସମଗ୍ର ବିଶ୍ୱର ଚିତ୍ତକୁ ଆନନ୍ଦିତ କରନ୍ତି— ସେହି ବଲ୍ଲଭେନ୍ଦ୍ର ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ ମୋତେ ନିଜ ଶ୍ରୀଚରଣର ଦାସ୍ୟସେବା ପ୍ରଦାନ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "କୁଞ୍ଜ-ରାସ-କେଳି-ସୀଧୁ",
                            meaning: "ନିକୁଞ୍ଜ ରାସଲୀଳା ରୂପୀ ଅମୃତ"
                        },
                        {
                            word: "ରାଧିକାଦି-ତୋଷଣଃ",
                            meaning: "ଶ୍ରୀରାଧା ପ୍ରମୁଖ ଗୋପୀଙ୍କୁ ତୁଷ୍ଟ କରୁଥିବା"
                        },
                        {
                            word: "କେଳି-ନର୍ମ",
                            meaning: "ପ୍ରେମମୟ ହସଖୁସି ଓ ପରିହାସ"
                        },
                        {
                            word: "ଆଳି-ପୋଷଣଃ",
                            meaning: "ସଖୀମାନଙ୍କୁ ପୋଷଣ କରୁଥିବା"
                        },
                        {
                            word: "ବିଶ୍ୱ-ଚିତ୍ତ-ନନ୍ଦନଃ",
                            meaning: "ଜଗତର ସମସ୍ତ ଚିତ୍ତକୁ ଆନନ୍ଦ ପ୍ରଦାନକାରୀ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 7,
                    lyric: "ରାସ-କେଳି-ଦର୍ଶିତାତ୍ମ-ଶୁଦ୍ଧ-ଭକ୍ତି-ସତ୍-ପଥଃ\nସ୍ୱୀୟ-ଚିତ୍ର-ରୂପ-ବେଷ-ମନ୍ମଥାଳୀ-ମନ୍ମଥଃ ।\nଗୋପିକାସୁ ନେତ୍ର-କୋଣ-ଭାବ-ବୃନ୍ଦ-ଗନ୍ଧନଃ\nସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ ।। ୭ ।।",
                    translation: "ନିଜର ଦିବ୍ୟ ରାସଲୀଳା ମାଧ୍ୟମରେ ଯିଏ ଜୀବକୁ ନିର୍ମଳ ଶୁଦ୍ଧଭକ୍ତିର ସର୍ବୋତ୍ତମ ମାର୍ଗ ପ୍ରଦର୍ଶନ କରନ୍ତି; ଯାହାଙ୍କର ବିଚିତ୍ର ରୂପ ଓ ମନମୋହକ ବେଶ କୋଟି କନ୍ଦର୍ପଙ୍କ ମନକୁ ମଧ୍ୟ ମୋହିତ କରେ; ଏବଂ ଯିଏ ନିଜ କଟାକ୍ଷପାତ ଦ୍ୱାରା ଗୋପୀମାନଙ୍କ ହୃଦୟରେ ଅନନ୍ତ ପ୍ରେମଭାବର ସଞ୍ଚାର କରନ୍ତି— ସେହି ବ୍ରଜରାଜନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ ମୋତେ ନିଜ ଶ୍ରୀଚରଣର ଦାସ୍ୟସେବା ପ୍ରଦାନ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "ରାସ-କେଳି-ଦର୍ଶିତ",
                            meaning: "ରାସଲୀଳା ମାଧ୍ୟମରେ ପ୍ରଦର୍ଶିତ"
                        },
                        {
                            word: "ଶୁଦ୍ଧ-ଭକ୍ତି-ସତ୍-ପଥଃ",
                            meaning: "ଶୁଦ୍ଧଭକ୍ତିର ପରମ ସତ୍ୟ ପଥ"
                        },
                        {
                            word: "ମନ୍ମଥାଳୀ-ମନ୍ମଥଃ",
                            meaning: "ଅନେକ କାମଦେବଙ୍କ ମନକୁ ମନ୍ଥନ କରୁଥିବା"
                        },
                        {
                            word: "ନେତ୍ର-କୋଣ-ଭାବ-ବୃନ୍ଦ-ଗନ୍ଧନଃ",
                            meaning: "ଆଖିର କୋଣ (କଟାକ୍ଷ) ଦ୍ୱାରା ପ୍ରେମଭାବ ଜାଗ୍ରତ କରୁଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 8,
                    lyric: "ପୁଷ୍ପ-ଚାୟି-ରାଧିକାଭିମର୍ଷ-ଲବ୍ଧି-ତର୍ଷିତଃ\nପ୍ରେମ-ବାମ୍ୟ-ରମ୍ୟ-ରାଧିକାସ୍ୟ-ଦୃଷ୍ଟି-ହର୍ଷିତଃ ।\nରାଧିକୋରସୀହ ଲେପ ଏଷ ହରି-ଚନ୍ଦନଃ\nସ୍ୱାଙ୍ଘ୍ରି-ଦାସ୍ୟଦୋ ଽସ୍ତୁ ମେ ସ ବଲ୍ଲଭେନ୍ଦ୍ର-ନନ୍ଦନଃ ।। ୮ ।।",
                    translation: "ଫୁଲ ତୋଳୁଥିବା ସମୟରେ ଶ୍ରୀରାଧିକାଙ୍କ କୋମଳ ଶ୍ରୀଅଙ୍ଗ ସ୍ପର୍ଶ ପାଇବା ନିମନ୍ତେ ଯିଏ ଅତ୍ୟନ୍ତ ଉତ୍କଣ୍ଠିତ ହୁଅନ୍ତି; ପ୍ରେମମୟ ମାନ (ବାମ୍ୟଭାବ) ଦ୍ୱାରା ସୁଶୋଭିତ ଶ୍ରୀରାଧାଙ୍କ ମନୋହର ମୁଖ ଦର୍ଶନରେ ଯିଏ ହର୍ଷୋଲ୍ଲାସିତ ହୁଅନ୍ତି; ଏବଂ ଯିଏ ଶ୍ରୀରାଧିକାଙ୍କ ବକ୍ଷସ୍ଥଳରେ ହରିଚନ୍ଦନ ଲେପ ସଦୃଶ ସର୍ବଦା ଶୋଭା ପାଆନ୍ତି— ସେହି ବଲ୍ଲଭେନ୍ଦ୍ର ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ ମୋତେ ନିଜ ଶ୍ରୀଚରଣର ଦାସ୍ୟସେବା ପ୍ରଦାନ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "ପୁଷ୍ପ-ଚାୟି-ରାଧିକା",
                            meaning: "ପୁଷ୍ପ ଚୟନ କରୁଥିବା ଶ୍ରୀରାଧାରାଣୀ"
                        },
                        {
                            word: "ଅଭିମର୍ଷ-ଲବ୍ଧି-ତର୍ଷିତଃ",
                            meaning: "ଅଙ୍ଗସ୍ପର୍ଶ ପାଇବା ପାଇଁ ଲାଳାୟିତ"
                        },
                        {
                            word: "ପ୍ରେମ-ବାମ୍ୟ-ରମ୍ୟ",
                            meaning: "ପ୍ରେମପୂର୍ଣ୍ଣ ମାନଭାବରେ ସୁନ୍ଦର"
                        },
                        {
                            word: "ରାଧିକାସ୍ୟ-ଦୃଷ୍ଟି-ହର୍ଷିତଃ",
                            meaning: "ଶ୍ରୀରାଧାଙ୍କ ମୁଖ ଦର୍ଶନ କରି ହର୍ଷିତ"
                        },
                        {
                            word: "ରାଧିକୋରସି ହରି-ଚନ୍ଦନଃ",
                            meaning: "ଶ୍ରୀରାଧାଙ୍କ ହୃଦୟରେ ହରିଚନ୍ଦନ ସଦୃଶ ବିରାଜିତ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 9,
                    lyric: "ଅଷ୍ଟକେନ ଯସ୍ ତ୍ୱ୍ ଅନେନ ରାଧିକା-ସୁବଲ୍ଲଭଂ\nସଂସ୍ତବୀତି ଦର୍ଶନେ ଽପି ସିନ୍ଧୁଜାଦି-ଦୁର୍ଲଭମ୍ ।\nତଂ ୟୁନକ୍ତି ତୁଷ୍ଟ-ଚିତ୍ତ ଏଷ ଘୋଷ-କାନନେ\nରାଧିକାଙ୍ଗ-ସଙ୍ଗ-ନନ୍ଦିତାତ୍ମ-ପାଦ-ସେବନେ ।। ୯ ।।",
                    translation: "(ଫଳଶ୍ରୁତି) ଲକ୍ଷ୍ମୀଦେବୀ ପ୍ରଭୃତିଙ୍କ ପାଇଁ ଦର୍ଶନ କରିବା ମଧ୍ୟ ଯାହାଙ୍କୁ ଅତି ଦୁର୍ଲଭ, ସେହି ଶ୍ରୀରାଧିକାପ୍ରାଣବଲ୍ଲଭ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ଯଦି କେହି ଏହି ଅଷ୍ଟକ ଦ୍ୱାରା ନିଷ୍ଠାପୂର୍ବକ ସ୍ତବ କରନ୍ତି; ତେବେ ଶ୍ରୀରାଧାଙ୍କ ଅଙ୍ଗସଙ୍ଗରେ ପରମ ଆନନ୍ଦିତ ସେହି ଶ୍ରୀକୃଷ୍ଣ ସନ୍ତୁଷ୍ଟ ଚିତ୍ତରେ ସେହି ଭକ୍ତଙ୍କୁ ବୃନ୍ଦାବନର ଗୋକୁଳ କାନନରେ ନିଜ ଶ୍ରୀଚରଣର ଅନ୍ତରଙ୍ଗ ନିତ୍ୟସେବାରେ ନିଯୁକ୍ତ କରନ୍ତି।",
                    wordMeanings: [
                        {
                            word: "ଅଷ୍ଟକେନ ଅନେନ",
                            meaning: "ଏହି ଅଷ୍ଟକ ସ୍ତୋତ୍ର ଦ୍ୱାରା"
                        },
                        {
                            word: "ରାଧିକା-ସୁବଲ୍ଲଭମ୍",
                            meaning: "ଶ୍ରୀରାଧାଙ୍କ ପ୍ରିୟତମଙ୍କୁ"
                        },
                        {
                            word: "ସିନ୍ଧୁଜାଦି-ଦୁର୍ଲଭମ୍",
                            meaning: "ଲକ୍ଷ୍ମୀଦେବୀ ଆଦିଙ୍କ ପାଇଁ ମଧ୍ୟ ଦୁର୍ଲଭ ପ୍ରଭୁଙ୍କୁ"
                        },
                        {
                            word: "ସଂସ୍ତବୀତି",
                            meaning: "ସ୍ତୁତି କରନ୍ତି"
                        },
                        {
                            word: "ତୁଷ୍ଟ-ଚିତ୍ତଃ ତଂ ୟୁନକ୍ତି",
                            meaning: "ପ୍ରସନ୍ନ ହୋଇ ତାଙ୍କୁ ନିଯୁକ୍ତ କରନ୍ତି"
                        },
                        {
                            word: "ଘୋଷ-କାନନେ",
                            meaning: "ବ୍ରଜଭୂମିର ଦିବ୍ୟ କାନନରେ"
                        },
                        {
                            word: "ଆତ୍ମ-ପାଦ-ସେବନେ",
                            meaning: "ନିଜ ଶ୍ରୀଚରଣର ନିତ୍ୟ ସେବାରେ"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        id: "song-disidisiracayantim",
        title: "ଦିଶି ଦିଶି ରଚୟନ୍ତୀମ୍ - ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍ (Disi Disi Racayantim - Sri Radhikastakam)",
        title_odia: "ଦିଶି ଦିଶି ରଚୟନ୍ତୀମ୍ - ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍",
        title_english: "Disi Disi Racayantim - Sri Radhikastakam",
        category: "Songs",
        type: "html",
        author: "Rupa Goswami",
        tags: [
            "Disi Disi Racayantim",
            "Radhikastakam",
            "Sri Radhikastakam",
            "Sri Sri Radhikastakam",
            "Radhastakam",
            "Rupa Goswami",
            "ଦିଶି ଦିଶି ରଚୟନ୍ତୀମ୍",
            "ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍",
            "ରାଧିକାଷ୍ଟକମ୍",
            "ରୂପ ଗୋସ୍ୱାମୀ"
        ],
        description: "ଶ୍ରୀଳ ରୂପ ଗୋସ୍ୱାମୀଙ୍କ ବିରଚିତ ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ପରମ ମହିମାମୟ ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍ ।",
        audioUrl: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FRadhikastakam_rupa_goswami_frleth.mp3",
        vocalist: "Vaishnavas",
        audioVersions: [
            {
                label: "Vaishnavas",
                url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FRadhikastakam_rupa_goswami_frleth.mp3"
            }
        ],
        structuredContent: {
            id: "song-disidisiracayantim",
            title: "ଦିଶି ଦିଶି ରଚୟନ୍ତୀମ୍ - ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍ (Disi Disi Racayantim - Sri Radhikastakam)",
            title_odia: "ଦିଶି ଦିଶି ରଚୟନ୍ତୀମ୍ - ଶ୍ରୀ ରାଧିକାଷ୍ଟକମ୍",
            title_english: "Disi Disi Racayantim - Sri Radhikastakam",
            author: "Rupa Goswami",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Disi%20Disi%20Racayantim_",
            verses: [
                {
                    id: 1,
                    lyric: "ଦିଶି ଦିଶି ରଚୟନ୍ତୀଂ ସଞ୍ଚରନ୍-ନେତ୍ର-ଲକ୍ଷ୍ମୀ-\nବିଳସିତ-ଖୁରଳୀଭିଃ ଖଞ୍ଜରୀଟସ୍ୟ ଖେଳାମ୍ ।\nହୃଦୟ-ମଧୁପ-ମଲ୍ଲୀଂ ବଲ୍ଲଭାଧୀଶ-ସୂନୋର୍\nଅଖିଳ-ଗୁଣ-ଗଭୀରାଂ ରାଧିକାମ୍ ଅର୍ଚ୍ଚୟାମି ।। ୧ ।।",
                    translation: "ଚତୁର୍ଦ୍ଦିଗରେ ଚଞ୍ଚଳ କଟାକ୍ଷ ବିସ୍ତାର କରି ଯିଏ ନିଜ ଚକ୍ଷୁର ଶୋଭା ଦ୍ୱାରା ଖଞ୍ଜନ ପକ୍ଷୀର କ୍ରୀଡ଼ାକୁ ମଧ୍ୟ ପରାଜିତ କରୁଛନ୍ତି; ଯିଏ ବ୍ରଜରାଜ ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ହୃଦୟରୂପୀ ଭ୍ରମର ପାଇଁ ପରମ ସୁଗନ୍ଧିତ ମଲ୍ଲୀ ପୁଷ୍ପ ସଦୃଶ; ଏବଂ ଯିଏ ସମସ୍ତ ଅନନ୍ତ ଦିବ୍ୟ ସଦ୍‌ଗୁଣର ଅଗାଧ ସମୁଦ୍ର— ସେହି ପରମାରାଧ୍ୟା ଶ୍ରୀମତୀ ରାଧିକାଙ୍କର ମୁଁ ଅର୍ଚ୍ଚନା ଓ ବନ୍ଦନା କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ଦିଶି ଦିଶି",
                            meaning: "ପ୍ରତ୍ୟେକ ଦିଗରେ"
                        },
                        {
                            word: "ସଞ୍ଚରନ୍-ନେତ୍ର-ଲକ୍ଷ୍ମୀ",
                            meaning: "ଚଞ୍ଚଳ ନୟନର ପରମ ଶୋଭା"
                        },
                        {
                            word: "ଖଞ୍ଜରୀଟସ୍ୟ ଖେଳାମ୍",
                            meaning: "ଖଞ୍ଜନ ପକ୍ଷୀର ଖେଳାକୁ"
                        },
                        {
                            word: "ବଲ୍ଲଭାଧୀଶ-ସୂନୋଃ",
                            meaning: "ଗୋପରାଜ ନନ୍ଦମହାରାଜଙ୍କ ପୁତ୍ର ଶ୍ରୀକୃଷ୍ଣଙ୍କର"
                        },
                        {
                            word: "ହୃଦୟ-ମଧୁପ-ମଲ୍ଲୀମ୍",
                            meaning: "ହୃଦୟରୂପୀ ଭ୍ରମର ପାଇଁ ମଲ୍ଲୀଫୁଲ ସଦୃଶ"
                        },
                        {
                            word: "ଅଖିଳ-ଗୁଣ-ଗଭୀରାମ୍",
                            meaning: "ସମସ୍ତ ସଦ୍‌ଗୁଣରେ ଅତି ଗଭୀରା"
                        },
                        {
                            word: "ରାଧିକାମ୍ ଅର୍ଚ୍ଚୟାମି",
                            meaning: "ଶ୍ରୀ ରାଧିକାଙ୍କୁ ପୂଜା କରୁଛି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ପିତୁର୍ ଇହ ବୃଷଭାନୋର୍ ଅନ୍ୱବାୟ-ପ୍ରଶସ୍ତିଂ\nଜଗତି କିଳ ସମସ୍ତେ ସୁଷ୍ଠୁ ବିସ୍ତାରୟନ୍ତୀମ୍ ।\nବ୍ରଜ-ନୃପତି-କୁମାରଂ ଖେଳୟନ୍ତୀଂ ସଖୀଭିଃ\nସୁରଭିଣି ନିଜ-କୁଣ୍ଡେ ରାଧିକାମ୍ ଅର୍ଚ୍ଚୟାମି ।। ୨ ।।",
                    translation: "ଯିଏ ନିଜ ପିତା ମହାରାଜ ବୃଷଭାନୁଙ୍କ ବଂଶର କୀର୍ତ୍ତି ଓ ମହିମାକୁ ସମଗ୍ର ବିଶ୍ୱରେ ସୁନ୍ଦର ଭାବରେ ବିସ୍ତାର କରୁଛନ୍ତି; ଏବଂ ଯିଏ ସୁବାସିତ କମଳରେ ପରିପୂର୍ଣ୍ଣ ନିଜ ପ୍ରିୟ ରାଧାକୁଣ୍ଡରେ ନିଜ ସଖୀମାନଙ୍କ ଗହଣରେ ବ୍ରଜରାଜ କୁମାର ଶ୍ରୀକୃଷ୍ଣଙ୍କ ସହିତ ଜଳକେଳି ଓ ପ୍ରେମଲୀଳା କରୁଛନ୍ତି— ସେହି ପରମେଶ୍ୱରୀ ଶ୍ରୀମତୀ ରାଧିକାଙ୍କର ମୁଁ ଅର୍ଚ୍ଚନା କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ପିତୁଃ ବୃଷଭାନୋଃ",
                            meaning: "ପିତା ମହାରାଜ ବୃଷଭାନୁଙ୍କର"
                        },
                        {
                            word: "ଅନ୍ୱବାୟ-ପ୍ରଶସ୍ତିମ୍",
                            meaning: "ପବିତ୍ର ବଂଶର କୀର୍ତ୍ତିକୁ"
                        },
                        {
                            word: "ଜଗତି ସମସ୍ତେ ବିସ୍ତାରୟନ୍ତୀମ୍",
                            meaning: "ସମଗ୍ର ଜଗତରେ ବିସ୍ତାର କରୁଥିବା"
                        },
                        {
                            word: "ବ୍ରଜ-ନୃପତି-କୁମାରମ୍",
                            meaning: "ବ୍ରଜରାଜ କୁମାର ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            word: "ସଖୀଭିଃ ଖେଳୟନ୍ତୀମ୍",
                            meaning: "ସଖୀମାନଙ୍କ ସହ କ୍ରୀଡ଼ା କରାଉଥିବା"
                        },
                        {
                            word: "ସୁରଭିଣି ନିଜ-କୁଣ୍ଡେ",
                            meaning: "ସୁଗନ୍ଧିତ ନିଜ ଶ୍ରୀ ରାଧାକୁଣ୍ଡରେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 3,
                    lyric: "ଶରଦ୍-ଉପଚିତ-ରାକା-କୌମୁଦୀ-ନାଥ-କୀର୍ତ୍ତି-ପ୍ରକର-\nଦମନ-ଦୀକ୍ଷା-ଦକ୍ଷିଣ-ସ୍ମେର-ବକ୍ତ୍ରାମ୍ ।\nନଟଦ୍-ଅଘଭିଦ୍-ଅପାଙ୍ଗୋତ୍ତୁଙ୍ଗିତାନଙ୍ଗ-ରଙ୍ଗାଂ\nକଳିତ-ରୁଚି-ତରଙ୍ଗାଂ ରାଧିକାମ୍ ଅର୍ଚ୍ଚୟାମି ।। ୩ ।।",
                    translation: "ଯାହାଙ୍କ ମୃଦୁହାସ୍ୟମୟ ଶ୍ରୀମୁଖ ଶରତ କାଳର ପୂର୍ଣ୍ଣିମା ଚନ୍ଦ୍ରଙ୍କ ସମସ୍ତ ଶୋଭା ଓ ଗର୍ବକୁ ଖଣ୍ଡନ କରିବାର ଦୀକ୍ଷାରେ ଅତି ନିପୁଣ; ଚଞ୍ଚଳ ଶ୍ରୀକୃଷ୍ଣଙ୍କ କଟାକ୍ଷ ଦ୍ୱାରା ଯାହାଙ୍କ ହୃଦୟରେ ଦିବ୍ୟ ଅନଙ୍ଗ ପ୍ରେମରଙ୍ଗ ଉଚ୍ଛ୍ୱଳିତ ହେଉଛି; ଏବଂ ଯାହାଙ୍କ ଦିବ୍ୟ ଶ୍ରୀଅଙ୍ଗ ଅପାର ସୌନ୍ଦର୍ଯ୍ୟ ତରଙ୍ଗରେ ପରିପୂର୍ଣ୍ଣ— ସେହି ପରମ ରୂପମୟୀ ଶ୍ରୀମତୀ ରାଧିକାଙ୍କର ମୁଁ ଅର୍ଚ୍ଚନା କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ଶରଦ୍-ରାକା-କୌମୁଦୀ-ନାଥ",
                            meaning: "ଶରତ କାଳୀନ ପୂର୍ଣ୍ଣିମାର ଚନ୍ଦ୍ର"
                        },
                        {
                            word: "ଦମନ-ଦୀକ୍ଷା-ଦକ୍ଷିଣ-ସ୍ମେର-ବକ୍ତ୍ରାମ୍",
                            meaning: "ଚନ୍ଦ୍ରର ଗର୍ବ ଦମନ କରିବାରେ ଦକ୍ଷ ମୃଦୁହାସ୍ୟଯୁକ୍ତ ମୁଖବିଶିଷ୍ଟା"
                        },
                        {
                            word: "ଅଘଭିଦ୍-ଅପାଙ୍ଗ",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ କଟାକ୍ଷପାତ ଦ୍ୱାରା"
                        },
                        {
                            word: "ଉତ୍ତୁଙ୍ଗିତ-ଅନଙ୍ଗ-ରଙ୍ଗାମ୍",
                            meaning: "ଉଚ୍ଛ୍ୱଳିତ ପ୍ରେମାନନ୍ଦ ବିଳାସବିଶିଷ୍ଟା"
                        },
                        {
                            word: "କଳିତ-ରୁଚି-ତରଙ୍ଗାମ୍",
                            meaning: "ଦିବ୍ୟ କାନ୍ତି-ତରଙ୍ଗ ଧାରଣ କରିଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 4,
                    lyric: "ବିବିଧ-କୁସୁମ-ବୃନ୍ଦୋତ୍ଫୁଲ୍ଲ-ଧମ୍ମିଲ୍ଲ-ଘାଟୀ-\nବିଘଟିତ-ମଦ-ଘୂର୍ଣ୍ଣତ୍-କେକି-ପିଞ୍ଛ-ପ୍ରଶସ୍ତିମ୍ ।\nମଧୁରିପୁ-ମୁଖ-ବିମ୍ବୋଦ୍ଗୀର୍ଣ୍ଣ-ତାମ୍ବୂଳ-ରାଗ-\nସ୍ଫୁରଦ୍-ଅମଳ-କପୋଳାଂ ରାଧିକାମ୍ ଅର୍ଚ୍ଚୟାମି ।। ୪ ।।",
                    translation: "ନା his ନା ପ୍ରକାର ଫୁଲରେ ସୁସଜ୍ଜିତ ଯାହାଙ୍କ ସୁନ୍ଦର କେଶପାଶ ମତ୍ତ ମୟୂରର ପୁଚ୍ଛ-ଶୋଭାକୁ ମଧ୍ୟ ତୁଚ୍ଛ କରିଦିଏ; ଏବଂ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଶ୍ରୀମୁଖରୁ ଅର୍ପିତ ତାମ୍ବୂଳର ରକ୍ତିମ ରାଗରେ ଯାହାଙ୍କ ନିର୍ମଳ କପୋଳ ଯୁଗଳ ପରମ ଉଜ୍ଜ୍ୱଳ ଭାବରେ ପ୍ରକାଶିତ ହେଉଛି— ସେହି ପରମ ମନୋହାରିଣୀ ଶ୍ରୀମତୀ ରାଧିକାଙ୍କର ମୁଁ ଅର୍ଚ୍ଚନା କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ବିବିଧ-କୁସୁମ-ବୃନ୍ଦୋତ୍ଫୁଲ୍ଲ",
                            meaning: "ନାନାବିଧ ପ୍ରସ୍ଫୁଟିତ କୁସୁମରେ ସଜ୍ଜିତ"
                        },
                        {
                            word: "ଧମ୍ମିଲ୍ଲ-ଘାଟୀ",
                            meaning: "ସୁନ୍ଦର କେଶବନ୍ଧନ ବା ଖୋସା"
                        },
                        {
                            word: "କେକି-ପିଞ୍ଛ-ପ୍ରଶସ୍ତିମ୍",
                            meaning: "ମୟୂର ଚନ୍ଦ୍ରିକାର ଶୋଭାକୁ ପରାସ୍ତ କରୁଥିବା"
                        },
                        {
                            word: "ମଧୁରିପୁ-ମୁଖ-ବିମ୍ବ",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଶ୍ରୀମୁଖରୁ"
                        },
                        {
                            word: "ତାମ୍ବୂଳ-ରାଗ",
                            meaning: "ପାନର ରକ୍ତିମ ରଙ୍ଗ ଦ୍ୱାରା"
                        },
                        {
                            word: "ସ୍ଫୁରଦ୍-ଅମଳ-କପୋଳାମ୍",
                            meaning: "ଝଟକୁଥିବା ନିର୍ମଳ ଗାଲବିଶିଷ୍ଟା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 5,
                    lyric: "ଅମଳିନ-ଲଳିତାନ୍ତଃ-ସ୍ନେହ-ସିକ୍ତାନ୍ତରଙ୍ଗାମ୍\nଅଖିଳ-ବିଧ-ବିଶାଖା-ସଖ୍ୟ-ବିଖ୍ୟାତ-ଶୀଳାମ୍ ।\nସ୍ଫୁରଦ୍-ଅଘଭିଦ୍-ଅନର୍ଘ-ପ୍ରେମ-ମାଣିକ୍ୟ-ପେଟୀଂ\nଧୃତ-ମଧୁର-ବିନୋଦାଂ ରାଧିକାମ୍ ଅର୍ଚ୍ଚୟାମି ।। ୫ ।।",
                    translation: "ଲଳିତା ସଖୀଙ୍କ ନିର୍ମଳ ଆନ୍ତରିକ ସ୍ନେହରେ ଯାହାଙ୍କ ହୃଦୟ ସର୍ବଦା ପରିପ୍ଳୁତ; ବିଶାଖା ସଖୀଙ୍କ ସହିତ ସମସ୍ତ ପ୍ରକାର ସଖ୍ୟଭାବ ପାଇଁ ଯାହାଙ୍କ ଶୀଳ-ସ୍ୱଭାବ ଜଗତବିଖ୍ୟାତ; ଯିଏ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଅମୂଲ୍ୟ ପ୍ରେମରୂପୀ ମାଣିକ୍ୟରତ୍ନକୁ ସାଇତି ରଖିଥିବା ପେଡ଼ି ସଦୃଶ; ଏବଂ ଯିଏ ସର୍ବଦା ମଧୁର ବିନୋଦଲୀଳାରେ ନିମଗ୍ନ— ସେହି ପ୍ରାଣେଶ୍ୱରୀ ଶ୍ରୀମତୀ ରାଧିକାଙ୍କର ମୁଁ ଅର୍ଚ୍ଚନା କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ଅମଳିନ-ଲଳିତାନ୍ତଃ-ସ୍ନେହ",
                            meaning: "ଲଳିତାଙ୍କ ନିଷ୍କପଟ ପ୍ରଗାଢ଼ ସ୍ନେହରେ"
                        },
                        {
                            word: "ସିକ୍ତ-ଅନ୍ତରଙ୍ଗାମ୍",
                            meaning: "ସିଞ୍ଚିତ ହୃଦୟବିଶିଷ୍ଟା"
                        },
                        {
                            word: "ବିଶାଖା-ସଖ୍ୟ-ବିଖ୍ୟାତ-ଶୀଳାମ୍",
                            meaning: "ବିଶାଖାଙ୍କ ସହ ସଖ୍ୟତା ପାଇଁ ପ୍ରସିଦ୍ଧ ସ୍ୱଭାବବିଶିଷ୍ଟା"
                        },
                        {
                            word: "ଅଘଭିଦ୍-ଅନର୍ଘ-ପ୍ରେମ",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଅମୂଲ୍ୟ ପ୍ରେମ"
                        },
                        {
                            word: "ମାଣିକ୍ୟ-ପେଟୀମ୍",
                            meaning: "ମାଣିକ୍ୟ ରତ୍ନର ପେଡ଼ି ସଦୃଶା"
                        },
                        {
                            word: "ଧୃତ-ମଧୁର-ବିନୋଦାମ୍",
                            meaning: "ମଧୁର ଲୀଳାବିଳାସ ଧାରଣ କରିଥିବା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 6,
                    lyric: "ଅତୁଳ-ମହସି ବୃନ୍ଦାରଣ୍ୟ-ରାଜ୍ୟେ ଽଭିଷିକ୍ତାଂ\nନିଖିଳ-ସମୟ-ଭର୍ତ୍ତୁଃ କାର୍ତ୍ତିକସ୍ୟାଧିଦେବୀମ୍ ।\nଅପରିମିତ-ମୁକୁନ୍ଦ-ପ୍ରେୟସୀ-ବୃନ୍ଦ-ମୁଖ୍ୟାଂ\nଜଗଦ୍-ଅଘ-ହର-କୀର୍ତ୍ତିଂ ରାଧିକାମ୍ ଅର୍ଚ୍ଚୟାମି ।। ୬ ।।",
                    translation: "ଅତୁଳନୀୟ ମହିମାମଣ୍ଡିତ ବୃନ୍ଦାବନ ରାଜ୍ୟର ଅଧୀଶ୍ୱରୀ ରୂପେ ଯାହାଙ୍କର ପରମ ଅଭିଷେକ ହୋଇଛି; ସମସ୍ତ ମାସମାନଙ୍କ ମଧ୍ୟରେ ସର୍ବଶ୍ରେଷ୍ଠ କାର୍ତ୍ତିକ ମାସ (ଦାମୋଦର ମାସ)ର ଯିଏ ଅଧିଷ୍ଠାତ୍ରୀ ଦେବୀ (ଊର୍ଜେଶ୍ୱରୀ); ଯିଏ ମୁକୁନ୍ଦଙ୍କ ଅଗଣିତ ପ୍ରିୟା ଗୋପୀମାନଙ୍କ ମଧ୍ୟରେ ସର୍ବମୁଖ୍ୟା; ଏବଂ ଯାହାଙ୍କ ପବିତ୍ର କୀର୍ତ୍ତି ଜଗତର ସମସ୍ତ ପାପତାପ ହରଣ କରେ— ସେହି ବୃନ୍ଦାବନେଶ୍ୱରୀ ଶ୍ରୀମତୀ ରାଧିକାଙ୍କର ମୁଁ ଅର୍ଚ୍ଚନା କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ଅତୁଳ-ମହସି",
                            meaning: "ଅତୁଳନୀୟ ତେଜୋମୟ"
                        },
                        {
                            word: "ବୃନ୍ଦାରଣ୍ୟ-ରାଜ୍ୟେ ଅଭିଷିକ୍ତାମ୍",
                            meaning: "ବୃନ୍ଦାବନ ସାମ୍ରାଜ୍ୟରେ ଅଭିଷିକ୍ତ ହୋଇଥିବା ରାଣୀ"
                        },
                        {
                            word: "କାର୍ତ୍ତିକସ୍ୟ ଅଧିଦେବୀମ୍",
                            meaning: "କାର୍ତ୍ତିକ (ଦାମୋଦର) ମାସର ଅଧିଷ୍ଠାତ୍ରୀ ଦେବୀ"
                        },
                        {
                            word: "ମୁକୁନ୍ଦ-ପ୍ରେୟସୀ-ବୃନ୍ଦ-ମୁଖ୍ୟାମ୍",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ସମସ୍ତ ପ୍ରିୟାମାନଙ୍କ ମଧ୍ୟରେ ଶ୍ରେଷ୍ଠା"
                        },
                        {
                            word: "ଜଗଦ୍-ଅଘ-ହର-କୀର୍ତ୍ତିମ୍",
                            meaning: "ସମଗ୍ର ଜଗତର ପାପନାଶିନୀ କୀର୍ତ୍ତିବିଶିଷ୍ଟା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 7,
                    lyric: "ହରି-ପଦ-ନଖ-କୋଟୀ-ପୃଷ୍ଠ-ପର୍ଯ୍ୟନ୍ତ-ସୀମା-\nତଟମ୍ ଅପି କଳୟନ୍ତୀଂ ପ୍ରାଣ-କୋଟେର୍ ଅଭୀଷ୍ଟମ୍ ।\nପ୍ରମୁଦିତ-ମଦିରାକ୍ଷୀ-ବୃନ୍ଦ-ବୈଦଗ୍ଧ୍ୟ-\nଦୀକ୍ଷା-ଗୁରୁମ୍ ଅତି-ଗୁରୁ-କୀର୍ତ୍ତିଂ ରାଧିକାମ୍ ଅର୍ଚ୍ଚୟାମି ।। ୭ ।।",
                    translation: "ଶ୍ରୀହରିଙ୍କ ଚରଣ-ନଖକୋଣର ପଛପାଖ ସୀମାନ୍ତକୁ ମଧ୍ୟ ଯିଏ ନିଜର କୋଟି କୋଟି ପ୍ରାଣଠାରୁ ଅଧିକ ପ୍ରିୟ ମନେ କରନ୍ତି; ଆନନ୍ଦିତ ଚଞ୍ଚଳନୟନା ଗୋପୀମାନଙ୍କୁ ପ୍ରେମ-ଚତୁରତାର ଦୀକ୍ଷା ପ୍ରଦାନ କରିବାରେ ଯିଏ ସର୍ବଶ୍ରେଷ୍ଠ ଶିକ୍ଷାଗୁରୁ; ଏବଂ ଯାହାଙ୍କ ମହିମା ଅତ୍ୟନ୍ତ ଗୌରବାନ୍ୱିତ— ସେହି ପରମ ଗୁରୁରୂପା ଶ୍ରୀମତୀ ରାଧିକାଙ୍କର ମୁଁ ଅର୍ଚ୍ଚନା କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ହରି-ପଦ-ନଖ-କୋଟୀ",
                            meaning: "ଶ୍ରୀହରିଙ୍କ ଚରଣକମଳର ନଖାଗ୍ର"
                        },
                        {
                            word: "ପ୍ରାଣ-କୋଟେଃ ଅଭୀଷ୍ଟମ୍",
                            meaning: "କୋଟି କୋଟି ଜୀବନଠାରୁ ଅଧିକ ପ୍ରିୟ"
                        },
                        {
                            word: "ମଦିରାକ୍ଷୀ-ବୃନ୍ଦ",
                            meaning: "ଚଞ୍ଚଳ କମଳନୟନା ଗୋପୀମାନଙ୍କର"
                        },
                        {
                            word: "ବୈଦଗ୍ଧ୍ୟ-ଦୀକ୍ଷା-ଗୁରୁମ୍",
                            meaning: "ପ୍ରେମ-ନିପୁଣତାର ଦୀକ୍ଷାଗୁରୁ"
                        },
                        {
                            word: "ଅତି-ଗୁରୁ-କୀର୍ତ୍ତିମ୍",
                            meaning: "ଅତି ମହାନ୍ ଗୌରବମୟୀ କୀର୍ତ୍ତିବିଶିଷ୍ଟା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 8,
                    lyric: "ଅମଳ-କନକ-ପଟ୍ଟୋଦ୍ଘୃଷ୍ଟ-କାଶ୍ମୀର-ଗୌରୀଂ\nମଧୁରିମ-ଲହରୀଭିଃ ସମ୍ପରୀତାଂ କିଶୋରୀମ୍ ।\nହରି-ଭୁଜ-ପରିରବ୍ଧାଂ ଲବ୍ଧ-ରୋମାଞ୍ଚ-ପାଳିଂ\nସ୍ଫୁରଦ୍-ଅରୁଣ-ଦୁକୂଳାଂ ରାଧିକାମ୍ ଅର୍ଚ୍ଚୟାମି ।। ୮ ।।",
                    translation: "ସ୍ୱର୍ଣ୍ଣ ଶିଳାପଟାରେ ଘଷା ହୋଇଥିବା କୁଙ୍କୁମ ପରି ଯାହାଙ୍କ ଦିବ୍ୟ ଅଙ୍ଗକାନ୍ତି ସୁବର୍ଣ୍ଣ-ଗୌରବର୍ଣ୍ଣ; ଅନନ୍ତ ମାଧୁର୍ଯ୍ୟର ତରଙ୍ଗମାଳାରେ ପରିବେଷ୍ଟିତା ଯିଏ ନିତ୍ୟ-ନବକିଶୋରୀ; ଶ୍ରୀହରିଙ୍କ ବାହୁଯୁଗଳର ଆଲିଙ୍ଗନରେ ଯାହାଙ୍କ ଅଙ୍ଗେ ଅଙ୍ଗେ ଦିବ୍ୟ ପ୍ରେମରୋମାଞ୍ଚ ଜାଗ୍ରତ ହୁଏ; ଏବଂ ଯିଏ ଶୋଭାମୟ ରକ୍ତିମ ପାଟବସ୍ତ୍ର ପରିଧାନ କରିଛନ୍ତି— ସେହି ପରମ ରସମୟୀ ଶ୍ରୀମତୀ ରାଧିକାଙ୍କର ମୁଁ ଅର୍ଚ୍ଚନା କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ଅମଳ-କନକ-ପଟ୍ଟ",
                            meaning: "ନିର୍ମଳ ସୁବର୍ଣ୍ଣ ଶିଳାପଟାରେ"
                        },
                        {
                            word: "ଉଦ୍ଘୃଷ୍ଟ-କାଶ୍ମୀର-ଗୌରୀମ୍",
                            meaning: "ଘଷା ହୋଇଥିବା କୁଙ୍କୁମ ପରି ତପ୍ତକାଞ୍ଚନ ଗୌରାଙ୍ଗୀ"
                        },
                        {
                            word: "ମଧୁରିମ-ଲହରୀଭିଃ ସମ୍ପରୀତାମ୍",
                            meaning: "ମାଧୁର୍ଯ୍ୟର ତରଙ୍ଗମାଳାରେ ଆବୃତା"
                        },
                        {
                            word: "କିଶୋରୀମ୍",
                            meaning: "ନିତ୍ୟ ନବକିଶୋରୀ"
                        },
                        {
                            word: "ହରି-ଭୁଜ-ପରିରବ୍ଧାମ୍",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ବାହୁପାଶରେ ଆଲିଙ୍ଗିତା"
                        },
                        {
                            word: "ଲବ୍ଧ-ରୋମାଞ୍ଚ-ପାଳିମ୍",
                            meaning: "ଶ୍ରୀଅଙ୍ଗରେ ରୋମାଞ୍ଚ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ସ୍ଫୁରଦ୍-ଅରୁଣ-ଦୁକୂଳାମ୍",
                            meaning: "ଉଜ୍ଜ୍ୱଳ ରକ୍ତିମ ପାଟବସ୍ତ୍ର ପରିହିତା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 9,
                    lyric: "ତଦ୍-ଅମଳ-ମଧୁରିମ୍ଣାଂ କାମମ୍ ଆଧାର-ରୂପଂ\nପରିପଠତି ବରିଷ୍ଠଂ ସୁଷ୍ଠୁ ରାଧାଷ୍ଟକଂ ଯଃ ।\nଅହିମ-କିରଣ-ପୁତ୍ରୀ-କୂଳ-କଲ୍ୟାଣ-ଚନ୍ଦ୍ରଃ\nସ୍ଫୁଟମ୍ ଅଖିଳମ୍ ଅଭୀଷ୍ଟଂ ତସ୍ୟ ତୁଷ୍ଟସ୍ ତନୋତି ।। ୯ ।।",
                    translation: "(ଫଳଶ୍ରୁତି) ନିର୍ମଳ ଦିବ୍ୟ ମାଧୁର୍ଯ୍ୟର ପରମ ଆଧାରସ୍ୱରୂପ ଏହି ଶ୍ରେଷ୍ଠ ରାଧାଷ୍ଟକମ୍ ସ୍ତୋତ୍ରକୁ ଯେଉଁ ଭାଗ୍ୟବାନ ଭକ୍ତ ନିଷ୍ଠାପୂର୍ବକ ପାଠ କରନ୍ତି; ସୂର୍ଯ୍ୟକନ୍ୟା ଶ୍ରୀ ଯମୁନାଜୀଙ୍କ ତଟବର୍ତ୍ତୀ କଲ୍ୟାଣମୟ ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସ୍ୱୟଂ ଶ୍ରୀକୃଷ୍ଣ ତାଙ୍କ ଉପରେ ପରମ ପ୍ରସନ୍ନ ହୋଇ ତାଙ୍କର ସମସ୍ତ ଶୁଦ୍ଧ ଭକ୍ତିମୟ ଅଭୀଷ୍ଟ ପୂର୍ଣ୍ଣ କରିଦିଅନ୍ତି।",
                    wordMeanings: [
                        {
                            word: "ତଦ୍-ଅମଳ-ମଧୁରିମ୍ଣାମ୍ ଆଧାର-ରୂପମ୍",
                            meaning: "ନିର୍ମଳ ମାଧୁର୍ଯ୍ୟର ପରମ ଆଧାରସ୍ୱରୂପ"
                        },
                        {
                            word: "ରାଧାଷ୍ଟକଂ ପରିପଠତି ଯଃ",
                            meaning: "ଯେଉଁ ବ୍ୟକ୍ତି ଏହି ରାଧାଷ୍ଟକ ପାଠ କରନ୍ତି"
                        },
                        {
                            word: "ଅହିମ-କିରଣ-ପୁତ୍ରୀ-କୂଳ",
                            meaning: "ସୂର୍ଯ୍ୟତନୟା ଯମୁନାଙ୍କ ତଟରେ"
                        },
                        {
                            word: "କଲ୍ୟାଣ-ଚନ୍ଦ୍ରଃ",
                            meaning: "ମଙ୍ଗଳମୟ ଚନ୍ଦ୍ର ଶ୍ରୀକୃଷ୍ଣ"
                        },
                        {
                            word: "ତୁଷ୍ଟଃ ଅଖିଳମ୍ ଅଭୀଷ୍ଟଂ ତନୋତି",
                            meaning: "ସନ୍ତୁଷ୍ଟ ହୋଇ ସମସ୍ତ ମନୋରଥ ପୂରଣ କରନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        id: "song-goragunagaosuni",
        title: "ଗୋରା ଗୁଣ ଗାଓ ଶୁନି (Gora Guna Gao Suni)",
        title_odia: "ଗୋରା ଗୁଣ ଗାଓ ଶୁନି",
        title_english: "Gora Guna Gao Suni",
        category: "Songs",
        type: "html",
        author: "Vasudeva Ghosha",
        tags: [
            "Gora Guna Gao Suni",
            "Gora Guna",
            "Vasudeva Ghosha",
            "ଗୋରା ଗୁଣ ଗାଓ ଶୁନି",
            "ବାସୁଦେବ ଘୋଷ"
        ],
        description: "ଶ୍ରୀଳ ବାସୁଦେବ ଘୋଷ ଠାକୁରଙ୍କ ବିରଚିତ ଶ୍ରୀମନ୍ ମହାପ୍ରଭୁଙ୍କ ମହିମାସୂଚକ ଭଜନ ।",
        audioUrl: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FGora_Guna_Gao_Suni_cm6s3c.mp3",
        vocalist: "HH Bhakti Caru Swami",
        audioVersions: [
            {
                label: "HH Bhakti Caru Swami",
                url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FGora_Guna_Gao_Suni_cm6s3c.mp3"
            }
        ],
        structuredContent: {
            id: "song-goragunagaosuni",
            title: "ଗୋରା ଗୁଣ ଗାଓ ଶୁନି (Gora Guna Gao Suni)",
            title_odia: "ଗୋରା ଗୁଣ ଗାଓ ଶୁନି",
            title_english: "Gora Guna Gao Suni",
            author: "Vasudeva Ghosha",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Gora%20Guna%20Gao%20Suni_",
            verses: [
                {
                    id: 1,
                    lyric: "ଗୋରା-ଗୁଣ ଗାଓ ଶୁନି ।\nବହୁ ପୁଣ୍ୟ ଫଲେ ସୋ ପହୁଁ ମିଲଲ ପ୍ରେମ ପରଶମଣି ।। ୧ ।।",
                    translation: "ମୁଁ ଶ୍ରୀ ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କ ଦିବ୍ୟ ଗୁଣାବଳୀ ଶ୍ରବଣ କରି ତାହା ଗାନ କରୁଛି। ଅନେକ ଜନ୍ମର ଭାଗ୍ୟ ଓ ପୁଣ୍ୟଫଳ ବଳରେ ସେହି ପରମ କୃପାମୟ ପ୍ରଭୁ ଶ୍ରୀ ଗୌରହରି ମିଳିଛନ୍ତି, ଯିଏ କୃଷ୍ଣପ୍ରେମ ପ୍ରଦାନ କରୁଥିବା ପରଶମଣି (ସ୍ପର୍ଶମଣି) ଅଟନ୍ତି।",
                    wordMeanings: [
                        {
                            word: "ଗୋରା-ଗୁଣ",
                            meaning: "ଗୌରସୁନ୍ଦରଙ୍କ ଦିବ୍ୟ ଗୁଣାବଳୀ"
                        },
                        {
                            word: "ଗାଓ ଶୁନି",
                            meaning: "ଶ୍ରବଣ କରି କୀର୍ତ୍ତନ କରୁଛି"
                        },
                        {
                            word: "ବହୁ ପୁଣ୍ୟ ଫଲେ",
                            meaning: "ଅନେକ ଜନ୍ମର ମହାଭାଗ୍ୟ ଓ ସୁକୃତି ବଳରେ"
                        },
                        {
                            word: "ସୋ ପହୁଁ ମିଲଲ",
                            meaning: "ସେହି ପରମ ପ୍ରଭୁ ପ୍ରାପ୍ତ ହୋଇଛନ୍ତି"
                        },
                        {
                            word: "ପ୍ରେମ ପରଶମଣି",
                            meaning: "କୃଷ୍ଣପ୍ରେମ ପ୍ରଦାୟକ ସ୍ପର୍ଶମଣି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ଅଖିଳ ଜୀବେର ଏ ଶୋକ-ଶାୟର ନୟନ-ନିମେଷେ ଶେଷେ ।\nଓଇ ପ୍ରେମ-ଲେଶ-ପରଶ ନା ପାଇଲେ ପରାଣ ଜୁଡ଼ାବେ କିସେ ।। ୨ ।।",
                    translation: "ସମଗ୍ର ଜୀବମାନଙ୍କର ଏହି ଭବସଂସାରର ଶୋକସାଗରକୁ ଶ୍ରୀ ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁ ଆଖିର ଗୋଟିଏ ନିମିଷକରେ ସମାପ୍ତ କରିଦିଅନ୍ତି। ଯଦି ସେହି ପ୍ରଭୁଙ୍କ କୃଷ୍ଣପ୍ରେମର ତିଳେମାତ୍ର ସ୍ପର୍ଶ ନ ମିଳେ, ତେବେ ଏହି ତପ୍ତ ପ୍ରାଣ କିପରି ଶୀତଳ ଓ ଶାନ୍ତ ହେବ?",
                    wordMeanings: [
                        {
                            word: "ଅଖିଳ ଜୀବେର",
                            meaning: "ସମସ୍ତ ଜୀବମାନଙ୍କର"
                        },
                        {
                            word: "ଏ ଶୋକ-ଶାୟର",
                            meaning: "ଏହି ଶୋକ ଓ ଦୁଃଖର ସମୁଦ୍ର"
                        },
                        {
                            word: "ନୟନ-ନିମେଷେ ଶେଷେ",
                            meaning: "ନେତ୍ରର ଗୋଟିଏ ପଲକରେ ସମାପ୍ତ କରନ୍ତି"
                        },
                        {
                            word: "ଓଇ ପ୍ରେମ-ଲେଶ-ପରଶ",
                            meaning: "ସେହି କୃଷ୍ଣପ୍ରେମର ସାମାନ୍ୟ କଣିକା ସ୍ପର୍ଶ"
                        },
                        {
                            word: "ନା ପାଇଲେ",
                            meaning: "ଯଦି ନ ପାଏ"
                        },
                        {
                            word: "ପରାଣ ଜୁଡ଼ାବେ କିସେ",
                            meaning: "ଜୀବନ ପ୍ରାଣ କିପରି ଶାନ୍ତି ଓ ଶୀତଳତା ପାଇବ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 3,
                    lyric: "ଅରୁଣ ନୟନେ ବାରୁଣ-ଆଳୟ କରୁଣାୟ ନିରୀକ୍ଷଣେ ।\nମଧୁର ଆଳାପେ ଆଖରେ ଆଖରେ ସୁଧା-ଧାରା ବରିଷଣେ ।। ୩ ।।",
                    translation: "ଶ୍ରୀ ଗୌରହରିଙ୍କ ଆରକ୍ତ କମଳନୟନର କରୁଣାମୟ ଦୃଷ୍ଟିପାତରେ କୃପାସିନ୍ଧୁ (ଦୟାର ମହାସାଗର) ଛଳଛଳ ହେଉଛି। ତାଙ୍କ ଶ୍ରୀମୁଖର ମଧୁର ବାକ୍ୟାଳାପରେ ପ୍ରତ୍ୟେକଟି ଅକ୍ଷରରୁ ଅମୃତର ଅବିରଳ ଧାରା ବର୍ଷିତ ହେଉଛି।",
                    wordMeanings: [
                        {
                            word: "ଅରୁଣ ନୟନେ",
                            meaning: "ରକ୍ତିମ କମଳ ନେତ୍ରରେ"
                        },
                        {
                            word: "ବାରୁଣ-ଆଳୟ",
                            meaning: "ସମୁଦ୍ର ବା ମହାସାଗର"
                        },
                        {
                            word: "କରୁଣାୟ ନିରୀକ୍ଷଣେ",
                            meaning: "ଦୟାଭରା ଦୃଷ୍ଟିପାତରେ"
                        },
                        {
                            word: "ମଧୁର ଆଳାପେ",
                            meaning: "ମିଠା ମଧୁର କଥାରେ"
                        },
                        {
                            word: "ଆଖରେ ଆଖରେ",
                            meaning: "ପ୍ରତ୍ୟେକ ଅକ୍ଷରେ ଅକ୍ଷରେ"
                        },
                        {
                            word: "ସୁଧା-ଧାରା ବରିଷଣେ",
                            meaning: "ଅମୃତ ଧାରା ବର୍ଷଣ କରୁଛନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 4,
                    lyric: "ପ୍ରେମେ ଢଳ ଢଳ ପୁଳକେ ପୂରଲ ଆପାଦ ମସ୍ତକ ତନୁ ।\nବାସୁଦେବ କହେ ଶତ ଧାରା ବହେ ସୁମେରୁ ସିଞ୍ଚିତ ତନୁ ।। ୪ ।।",
                    translation: "ଭଗବତ୍-ପ୍ରେମରେ ବିହ୍ୱଳ ହୋଇ ତାଙ୍କ ପାଦଠାରୁ ମସ୍ତକ ପର୍ଯ୍ୟନ୍ତ ସମଗ୍ର ସ୍ୱର୍ଣ୍ଣକଳେବର ରୋମାଞ୍ଚରେ ପରିପୂର୍ଣ୍ଣ ହୋଇଉଠୁଛି। ଭକ୍ତକବି ବାସୁଦେବ ଘୋଷ କହନ୍ତି— ଶ୍ରୀ ଗୌରାଙ୍ଗଙ୍କ ନୟନରୁ ଶତ ଶତ ପ୍ରେମାଶ୍ରୁଧାରା ପ୍ରବାହିତ ହୋଇ ତାଙ୍କ କାଞ୍ଚନବର୍ଣ୍ଣ ଶ୍ରୀଅଙ୍ଗକୁ ଏପରି ପ୍ଳାବିତ କରୁଛି, ଯେପରି ସୁବର୍ଣ୍ଣମୟ ସୁମେରୁ ପର୍ବତ ଅମୃତ ଧାରାରେ ଅଭିଷିକ୍ତ ହେଉଛି।",
                    wordMeanings: [
                        {
                            word: "ପ୍ରେମେ ଢଳ ଢଳ",
                            meaning: "ଦିବ୍ୟ ପ୍ରେମରେ ଢଳଢଳ ବିହ୍ୱଳ"
                        },
                        {
                            word: "ପୁଳକେ ପୂରଲ",
                            meaning: "ରୋମାଞ୍ଚରେ ପରିପୂର୍ଣ୍ଣ"
                        },
                        {
                            word: "ଆପାଦ ମସ୍ତକ ତନୁ",
                            meaning: "ପାଦରୁ ମୁଣ୍ଡ ଯାଏଁ ସମଗ୍ର ଶରୀର"
                        },
                        {
                            word: "ବାସୁଦେବ କହେ",
                            meaning: "ଭକ୍ତ ବାସୁଦେବ ଘୋଷ କହନ୍ତି"
                        },
                        {
                            word: "ଶତ ଧାରା ବହେ",
                            meaning: "ନୟନରୁ ଶହ ଶହ ଅଶ୍ରୁଧାରା ବହୁଛି"
                        },
                        {
                            word: "ସୁମେରୁ ସିଞ୍ଚିତ ତନୁ",
                            meaning: "ସ୍ୱର୍ଣ୍ଣ ସୁମେରୁ ପର୍ବତ ସଦୃଶ ଶ୍ରୀଅଙ୍ଗ ସିଞ୍ଚିତ ହେଉଛି"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        id: "song-garudadandakam",
        title: "ଶ୍ରୀ ଗରୁଡ଼ ଦଣ୍ଡକମ୍ (Sri Garuda Dandakam)",
        title_odia: "ଶ୍ରୀ ଗରୁଡ଼ ଦଣ୍ଡକମ୍",
        title_english: "Sri Garuda Dandakam",
        category: "Songs",
        type: "html",
        author: "Vedanta Desika",
        tags: [
            "Garuda Dandakam",
            "Sri Garuda Dandakam",
            "Vedanta Desika",
            "Stotram",
            "Dandakam",
            "ଶ୍ରୀ ଗରୁଡ଼ ଦଣ୍ଡକମ୍",
            "ଗରୁଡ଼ ଦଣ୍ଡକମ୍",
            "ବେଦାନ୍ତ ଦେଶିକ"
        ],
        description: "ଶ୍ରୀମଦ୍ ବେଦାନ୍ତ ଦେଶିକଙ୍କ ବିରଚିତ ସୁପ୍ରସିଦ୍ଧ ଶ୍ରୀ ଗରୁଡ଼ ଦଣ୍ଡକମ୍ ସ୍ତୋତ୍ର ।",
        audioUrl: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Garuda%20Dandakam%20with%20Lyrics%20Sri%20Vedanta%20Deshika.mp3",
        vocalist: "HG Yasoda Kumara Prabhu",
        audioVersions: [
            {
                label: "HG Yasoda Kumara Prabhu",
                url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Garuda%20Dandakam%20with%20Lyrics%20Sri%20Vedanta%20Deshika.mp3"
            }
        ],
        structuredContent: {
            id: "song-garudadandakam",
            title: "ଶ୍ରୀ ଗରୁଡ଼ ଦଣ୍ଡକମ୍ (Sri Garuda Dandakam)",
            title_odia: "ଶ୍ରୀ ଗରୁଡ଼ ଦଣ୍ଡକମ୍",
            title_english: "Sri Garuda Dandakam",
            author: "Vedanta Desika",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Garuda%20Dandakam_",
            verses: [
                {
                    id: 1,
                    lyric: "ନମଃ ପନ୍ନଗନଦ୍ଧାୟ ବୈକୁଣ୍ଠବଶବର୍ତ୍ତିନେ ।\nଶ୍ରୁତିସିନ୍ଧୁସୁଧୋତ୍ପାଦମନ୍ଦରାୟ ଗରୁତ୍ମତେ ॥ ୧ ॥",
                    translation: "ଯିଏ ପରାକ୍ରମୀ ସର୍ପମାନଙ୍କୁ ନିଜ ଅଙ୍ଗରେ ଆଭୂଷଣ ରୂପେ ଧାରଣ କରିଛନ୍ତି, ଯିଏ ବୈକୁଣ୍ଠପତି ଶ୍ରୀଭଗବାନଙ୍କ ନିତ୍ୟ ଅନ୍ତରଙ୍ଗ ସେବକ ଓ ସର୍ବଦା ତାଙ୍କ ପ୍ରେମ-ବଶ୍ୟତାରେ ସେବାରତ, ଏବଂ ଯିଏ ବେଦରୂପୀ କ୍ଷୀରସମୁଦ୍ରକୁ ମନ୍ଥନ କରି ବ୍ରହ୍ମବିଦ୍ୟାରୂପୀ ଅମୃତ ପ୍ରକଟ କରିବା ପାଇଁ ମନ୍ଦର ପର୍ବତ ସଦୃଶ ଅଟନ୍ତି— ସେହି ପରମ ଭାଗବତ ଦିବ୍ୟପକ୍ଷଧାରୀ ଶ୍ରୀ ଗରୁଡ଼ଦେବଙ୍କୁ ମୋର ସାଦର ଦଣ୍ଡବତ ପ୍ରଣାମ।",
                    wordMeanings: [
                        {
                            word: "ନମଃ",
                            meaning: "ମୋର ବିନମ୍ର ପ୍ରଣାମ"
                        },
                        {
                            word: "ପନ୍ନଗ-ନଦ୍ଧାୟ",
                            meaning: "ବିଶାଳ ସର୍ପମାନଙ୍କୁ ଭୂଷଣ ରୂପେ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ବୈକୁଣ୍ଠ-ବଶ-ବର୍ତ୍ତିନେ",
                            meaning: "ବୈକୁଣ୍ଠନାଥ ଶ୍ରୀ ନାରାୟଣଙ୍କ ପ୍ରେମମୟ ବଶ୍ୟତାରେ ସଦା ବିଦ୍ୟମାନ ତଥା ତାଙ୍କ ଆଜ୍ଞାବହ ସେବକ"
                        },
                        {
                            word: "ଶ୍ରୁତି-ସିନ୍ଧୁ",
                            meaning: "ବେଦରୂପୀ ସମୁଦ୍ରର"
                        },
                        {
                            word: "ସୁଧା-ଉତ୍ପାଦ",
                            meaning: "ଅମୃତରୂପୀ ବ୍ରହ୍ମବିଦ୍ୟା ଉତ୍ପନ୍ନ କରିବା ନିମନ୍ତେ"
                        },
                        {
                            word: "ମନ୍ଦରାୟ",
                            meaning: "ମନ୍ଦର ପର୍ବତ ସଦୃଶ"
                        },
                        {
                            word: "ଗରୁତ୍ମତେ",
                            meaning: "ଦିବ୍ୟ ଡେଣାବିଶିଷ୍ଟ ପ୍ରଭୁ ଶ୍ରୀ ଗରୁଡ଼ଙ୍କୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ଗରୁଡ଼ମଖିଳ-ବେଦ-ନୀଡ଼ାଧିରୂଢ଼ଂ\nଦ୍ୱିଷତ୍-ପୀଡ଼ନୋତ୍କଣ୍ଠିତାକୁଣ୍ଠ-ବୈକୁଣ୍ଠ-ପୀଠୀକୃତ-ସ୍କନ୍ଧମୀଡ଼େ\nସ୍ୱନୀଡ଼ାଗତି-ପ୍ରୀତ-ରୁଦ୍ରା-ସୁକୀର୍ତ୍ତି-ସ୍ତନାଭୋଗ-ଗାଢ଼ୋପଗୂଢ଼ଂ\nସ୍ଫୁରତ୍-କଣ୍ଟକ-ବ୍ରାତ-ବେଧ-ବ୍ୟଥା-ବେପମାନ-ଦ୍ୱିଜିହ୍ୱାଧିପାକଳ୍ପ-\nବିଷ୍ଫାର୍ଯ୍ୟମାଣ-ସ୍ଫଟାବାଟିକା-ରତ୍ନ-ରୋଚିଶ୍ଛଟା-ରାଜିନୀରାଜିତଂ\nକାନ୍ତି-କଲ୍ଲୋଳିନୀ-ରାଜିତମ୍ ॥ ୨ ॥",
                    translation: "ସମସ୍ତ ବେଦ ଯାହାଙ୍କର ନୀଡ଼ (ବାସସ୍ଥାନ) ଏବଂ ଯିଏ ସେହି ବେଦରୂପୀ ଆସନରେ ଅଧିରୂଢ଼; ନିଜ ଭକ୍ତମାନଙ୍କ ଶତ୍ରୁ-ବିନାଶ ନିମନ୍ତେ ସଦା ତତ୍ପର ବୈକୁଣ୍ଠନାଥ ଶ୍ରୀ ନାରାୟଣ ଯାହାଙ୍କ ସ୍କନ୍ଧଦେଶକୁ ନିଜର ଦିବ୍ୟ ବାହନ ଆସନ କରିଛନ୍ତି— ମୁଁ ସେହି ଶ୍ରୀଗରୁଡ଼ଙ୍କ ସ୍ତୁତି କରୁଛି। ଯେତେବେଳେ ଭଗବାନଙ୍କ କାର୍ଯ୍ୟ ସମ୍ପନ୍ନ କରି ସେ ନିଜ ନୀଡ଼କୁ ଫେରିଆସନ୍ତି, ତାଙ୍କର ଦୁଇ ପ୍ରେମମୟୀ ପତ୍ନୀ 'ରୁଦ୍ରା' ଓ 'ସୁକୀର୍ତ୍ତି' ଅତ୍ୟନ୍ତ ଆନନ୍ଦରେ ତାଙ୍କୁ ଗାଢ଼ ଆଲିଙ୍ଗନ କରନ୍ତି। ସେହି ଦିବ୍ୟ ପ୍ରେମ-ଆନନ୍ଦରେ ଗରୁଡ଼ଙ୍କ ଶ୍ରୀଅଙ୍ଗରେ ରୋମାଞ୍ଚରୂପୀ ତୀକ୍ଷ୍ଣ କଣ୍ଟକ ଉଦ୍ଗତ ହୁଏ, ଯାହାଦ୍ୱାରା ତାଙ୍କ ଶରୀରରେ ଆଭୂଷଣ ରୂପେ ରହିଥିବା ନାଗମାନେ ଭୟରେ କମ୍ପିତ ହୋଇ ନିଜ ଫଣାଗୁଡ଼ିକୁ ମେଲି ଦିଅନ୍ତି। ସେହି ଫଣାସ୍ଥିତ ଉଜ୍ଜ୍ୱଳ ମଣିରତ୍ନର କିରଣମାଳା ସତେ ଯେପରି ଶ୍ରୀଗରୁଡ଼ଙ୍କ ନିମନ୍ତେ ମଙ୍ଗଳ ଆରତୀ ପ୍ରଦାନ କରେ ଏବଂ ସେହି ଅପୂର୍ବ ଦିବ୍ୟ କାନ୍ତି-ତରଙ୍ଗରେ ସେ ଅତ୍ୟନ୍ତ ଶୋଭା ପାଆନ୍ତି।",
                    wordMeanings: [
                        {
                            word: "ଗରୁଡ଼ମ୍",
                            meaning: "ଶ୍ରୀ ଗରୁଡ଼ ଭଗବାନଙ୍କୁ"
                        },
                        {
                            word: "ଅଖିଳ-ବେଦ-ନୀଡ଼-ଅଧିରୂଢ଼ମ୍",
                            meaning: "ସମସ୍ତ ବେଦରୂପୀ ବାସସ୍ଥାନ (ନୀଡ଼) ଉପରେ ବିରାଜମାନ"
                        },
                        {
                            word: "ଦ୍ୱିଷତ୍-ପୀଡ଼ନ-ଉତ୍କଣ୍ଠିତ",
                            meaning: "ଭକ୍ତମାନଙ୍କ ଶତ୍ରୁ ତଥା ଅସୁରମାନଙ୍କୁ ବିନାଶ କରିବା ନିମନ୍ତେ ସଦା ତତ୍ପର"
                        },
                        {
                            word: "ଅକୁଣ୍ଠ-ବୈକୁଣ୍ଠ",
                            meaning: "ଅପ୍ରତିହତ ପରାକ୍ରମୀ ବୈକୁଣ୍ଠପତି ଶ୍ରୀ ନାରାୟଣଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            word: "ପୀଠୀକୃତ-ସ୍କନ୍ଧମ୍",
                            meaning: "ଆସନ ରୂପେ ବ୍ୟବହୃତ ହୋଇଥିବା କାନ୍ଧ ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ଈଡ଼େ",
                            meaning: "ମୁଁ ସ୍ତୁତି କରୁଛି"
                        },
                        {
                            word: "ସ୍ୱ-ନୀଡ଼-ଆଗତି-ପ୍ରୀତ",
                            meaning: "ନିଜ ଗୃହକୁ ପ୍ରତ୍ୟାବର୍ତ୍ତନ କରିବାରୁ ଆନନ୍ଦିତ ହୋଇଥିବା"
                        },
                        {
                            word: "ରୁଦ୍ରା-ସୁକୀର୍ତ୍ତି",
                            meaning: "ତାଙ୍କର ଦୁଇ ଧର୍ମପତ୍ନୀ ଶ୍ରୀରୁଦ୍ରା ଏବଂ ସୁକୀର୍ତ୍ତିଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            word: "ସ୍ତନାଭୋଗ-ଗାଢ଼-ଉପଗୂଢ଼ମ୍",
                            meaning: "ପ୍ରେମପୂର୍ଣ୍ଣ ଗାଢ଼ ଆଲିଙ୍ଗନ ପ୍ରାପ୍ତ ହୋଇ"
                        },
                        {
                            word: "ସ୍ଫୁରତ୍-କଣ୍ଟକ-ବ୍ରାତ-ବେଧ-ବ୍ୟଥା",
                            meaning: "ଆନନ୍ଦରେ ଶିହରିତ ରୋମାଞ୍ଚରୂପୀ କଣ୍ଟକର ଆଘାତଜନିତ ବ୍ୟଥା ହେତୁ"
                        },
                        {
                            word: "ବେପମାନ",
                            meaning: "ଭୟଭୀତ ହୋଇ କମ୍ପିତ ହେଉଥିବା"
                        },
                        {
                            word: "ଦ୍ୱିଜିହ୍ୱାଧିପ-ଆକଳ୍ପ",
                            meaning: "ଅଳଙ୍କାର ରୂପେ ଧାରଣ କରିଥିବା ନାଗରାଜମାନଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            word: "ବିଷ୍ଫାର୍ଯ୍ୟମାଣ",
                            meaning: "ପ୍ରସାରିତ ବା ମେଲା କରାଯାଉଥିବା"
                        },
                        {
                            word: "ସ୍ଫଟା-ବାଟିକା-ରତ୍ନ",
                            meaning: "ଫଣାମଣ୍ଡଳରେ ଥିବା ଦିବ୍ୟ ମଣିରତ୍ନର"
                        },
                        {
                            word: "ରୋଚିଃ-ଛଟା-ରାଜି",
                            meaning: "ଉଜ୍ଜ୍ୱଳ କିରଣଶ୍ରେଣୀ ଦ୍ୱାରା"
                        },
                        {
                            word: "ନୀରାଜିତମ୍",
                            meaning: "ଆରତୀ ପ୍ରଦର୍ଶିତ ହେଉଥିବା"
                        },
                        {
                            word: "କାନ୍ତି-କଲ୍ଲୋଳିନୀ-ରାଜିତମ୍",
                            meaning: "ସୌନ୍ଦର୍ଯ୍ୟ ତରଙ୍ଗିଣୀରେ ଶୋଭାୟମାନ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 3,
                    lyric: "ଜୟ ଗରୁଡ଼ ସୁପର୍ଣ୍ଣ ଦର୍ବୀକରାହାର ଦେବାଧିପାହାରହାରିନ୍\nଦିବୌକସ୍ପତି-କ୍ଷିପ୍ତ-ଦମ୍ଭୋଳି-ଧାରା-କିଣାକଳ୍ପ-\nକଳ୍ପାନ୍ତ-ବାତୂଳ-କଳ୍ପୋଦୟାନଳ୍ପ-ବୀରାୟିତୋଦ୍ୟଚ୍-ଚମତ୍କାର-\nଦୈତ୍ୟାରି-ଜୈତ୍ର-ଧ୍ୱଜାରୋହ-ନିର୍ଦ୍ଧାରିତୋତ୍କର୍ଷ\nସଙ୍କର୍ଷଣାତ୍ମନ୍ ଗରୁତ୍ମନ୍ ମରୁତ୍ପଞ୍ଚକାଧୀଶ ସତ୍ୟାଦିମୂର୍ତ୍ତେ\nନ କଶ୍ଚିତ୍-ସମସ୍ତେ ନମସ୍ତେ ପୁନସ୍ତେ ନମଃ ॥ ୩ ॥",
                    translation: "ହେ ଗରୁଡ଼ ଭଗବାନ! ଆପଣଙ୍କର ଜୟ ହେଉ! ଆପଣଙ୍କର ପକ୍ଷ (ଡେଣା) ଅତ୍ୟନ୍ତ ସୁନ୍ଦର, ତେଣୁ ଆପଣଙ୍କ ନାମ 'ସୁପର୍ଣ୍ଣ'। ବିଷଧର ସର୍ପମାନେ ଆପଣଙ୍କ ଆହାର ଅଟନ୍ତି। ମାତା ବିନତାଙ୍କ ଦାସୀତ୍ୱ ମୋଚନ ନିମନ୍ତେ ଆପଣ ସ୍ୱର୍ଗରୁ ଦେବତାମାନଙ୍କ ଆହାର ଅମୃତ ଛଡ଼ାଇ ଆଣିଥିଲେ। ସେହି ସମୟରେ ଦେବରାଜ ଇନ୍ଦ୍ର ଆପଣଙ୍କ ଉପରକୁ ପ୍ରଚଣ୍ଡ ବଜ୍ର ନିକ୍ଷେପ କରିଥିଲେ, କିନ୍ତୁ ସେହି ବଜ୍ରାଘାତରୁ ସୃଷ୍ଟି ହୋଇଥିବା କ୍ଷତ-ଚିହ୍ନ ଆଜି ଆପଣଙ୍କ ଅଙ୍ଗରେ ବୀରତ୍ୱର ଅଳଙ୍କାର ପରି ଶୋଭା ପାଉଛି! ପ୍ରଳୟକାଳୀନ ପ୍ରଚଣ୍ଡ ମହାବାତ୍ୟା ସଦୃଶ ଅପାର ବୀରତ୍ୱ ଦେଖାଇ ଆପଣ ଅସୁରାରି ଶ୍ରୀହରିଙ୍କ ବିଜୟ-ପତାକାରେ ସର୍ବୋଚ୍ଚ ସ୍ଥାନ ଅଳଙ୍କୃତ କରିଛନ୍ତି। ଆପଣ ଚତୁର୍ବ୍ୟୁହର ପ୍ରଭୁ ଶ୍ରୀସଙ୍କର୍ଷଣଙ୍କ ସ୍ୱରୂପ ଅଟନ୍ତି, ପଞ୍ଚ ପ୍ରାଣବାୟୁର ଅଧୀଶ୍ୱର ଏବଂ ସତ୍ୟାଦି ପଞ୍ଚ ଦିବ୍ୟ ମୂର୍ତ୍ତିର ଅଧିଷ୍ଠାତା। ଏ ସମଗ୍ର ସୃଷ୍ଟିରେ ଆପଣଙ୍କ ସମାନ କେହି ନାହାନ୍ତି। ମୁଁ ଆପଣଙ୍କୁ ପ୍ରଣାମ କରୁଛି, ପୁନଶ୍ଚ ବାରମ୍ବାର ପ୍ରଣାମ କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ଜୟ",
                            meaning: "ଆପଣଙ୍କର ଜୟ ହେଉ"
                        },
                        {
                            word: "ସୁପର୍ଣ୍ଣ",
                            meaning: "ସୁନ୍ଦର ଦିବ୍ୟ ଡେଣାବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ଦର୍ବୀକର-ଆହାର",
                            meaning: "ଫଣାଯୁକ୍ତ ସର୍ପମାନଙ୍କୁ ଭକ୍ଷଣ କରୁଥିବା"
                        },
                        {
                            word: "ଦେବାଧିପ-ଆହାର-ହାରିନ୍",
                            meaning: "ଦେବରାଜ ଇନ୍ଦ୍ରଙ୍କ ସୁରକ୍ଷିତ ଅମୃତ (ଦେବତାମାନଙ୍କ ଆହାର) ହରଣ କରି ଆଣିଥିବା"
                        },
                        {
                            word: "ଦିବୌକସ୍ପତି-କ୍ଷିପ୍ତ-ଦମ୍ଭୋଳି-ଧାରା",
                            meaning: "ସ୍ୱର୍ଗାଧିପତି ଇନ୍ଦ୍ରଙ୍କ ଦ୍ୱାରା ନିକ୍ଷିପ୍ତ ବଜ୍ରର ତୀକ୍ଷ୍ଣ ଧାର ଦ୍ୱାରା"
                        },
                        {
                            word: "କିଣ-ଆକଳ୍ପ",
                            meaning: "ସୃଷ୍ଟି ହୋଇଥିବା କ୍ଷତ-ଚିହ୍ନ ଯାହାର ଅଳଙ୍କାର ସଦୃଶ ଶୋଭା ପାଉଛି"
                        },
                        {
                            word: "କଳ୍ପାନ୍ତ-ବାତୂଳ-କଳ୍ପ",
                            meaning: "ପ୍ରଳୟକାଳୀନ ପ୍ରଚଣ୍ଡ ଝଡ଼ବାତ୍ୟା ସଦୃଶ"
                        },
                        {
                            word: "ଉଦୟ-ଅନଳ୍ପ-ବୀରାୟିତ-ଉଦ୍ୟତ୍-ଚମତ୍କାର",
                            meaning: "ଅପାର ପରାକ୍ରମ ଓ ଚମତ୍କାରୀ ବୀରତ୍ୱ ପ୍ରଦର୍ଶନ କରିଥିବା"
                        },
                        {
                            word: "ଦୈତ୍ୟାରି-ଜୈତ୍ର-ଧ୍ୱଜ-ଆରୋହ",
                            meaning: "ଅସୁରାରି ଭଗବାନ ଶ୍ରୀବିଷ୍ଣୁଙ୍କ ବିଜୟ-ପତାକା ଉପରେ ବିରାଜମାନ ହୋଇ"
                        },
                        {
                            word: "ନିର୍ଦ୍ଧାରିତ-ଉତ୍କର୍ଷ",
                            meaning: "ସର୍ବଶ୍ରେଷ୍ଠ ମହିମା ପ୍ରତିପାଦିତ କରିଥିବା"
                        },
                        {
                            word: "ସଙ୍କର୍ଷଣ-ଆତ୍ମନ୍",
                            meaning: "ଚତୁର୍ବ୍ୟୁହ ଅନ୍ତର୍ଗତ ଭଗବାନ ଶ୍ରୀ ସଙ୍କର୍ଷଣଙ୍କ ସ୍ୱରୂପ"
                        },
                        {
                            word: "ଗରୁତ୍ମନ୍",
                            meaning: "ଦିବ୍ୟ ଡେଣାବିଶିଷ୍ଟ ପ୍ରଭୁ"
                        },
                        {
                            word: "ମରୁତ୍-ପଞ୍ଚକ-ଅଧୀଶ",
                            meaning: "ପଞ୍ଚ ପ୍ରାଣବାୟୁ (ପ୍ରାଣ, ଅପାନ, ସମାନ, ଉଦାନ, ବ୍ୟାନ)ର ନିୟନ୍ତା"
                        },
                        {
                            word: "ସତ୍ୟାଦି-ମୂର୍ତ୍ତେ",
                            meaning: "ସତ୍ୟ, ସୁପର୍ଣ୍ଣ, ଗରୁଡ଼, ତାର୍କ୍ଷ୍ୟ ଓ ବିହଗେଶ୍ୱର— ଏହି ପାଞ୍ଚ ଦିବ୍ୟ ରୂପଧାରୀ"
                        },
                        {
                            word: "ନ କଶ୍ଚିତ୍ ସମସ୍ତେ",
                            meaning: "ଆପଣଙ୍କ ସମକକ୍ଷ କେହି ନାହାନ୍ତି"
                        },
                        {
                            word: "ନମସ୍ତେ ପୁନସ୍ତେ ନମଃ",
                            meaning: "ଆପଣଙ୍କୁ ବାରମ୍ବାର ପ୍ରଣାମ, ପୁନଶ୍ଚ ପ୍ରଣାମ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 4,
                    lyric: "ନମ ଇଦମଜହତ୍-ସପର୍ଯ୍ୟାୟ ପର୍ଯ୍ୟାୟ-ନିର୍ଯ୍ୟାତ-ପକ୍ଷାନିଲାସ୍ଫାଳନୋଦ୍ୱେଳ-\nପାଥୋଧି-ବୀଚୀ-ଚପେଟାହତାଗାଧ-ପାତାଳ-ଭାଙ୍କାର-ସଙ୍କ୍ରୁଦ୍ଧ-\nନାଗେନ୍ଦ୍ର-ପୀଡ଼ାସୃଣୀ-ଭାବ-ଭାସ୍ୱନ୍-ନଖ-ଶ୍ରେଣୟେ\nଚଣ୍ଡ-ତୁଣ୍ଡାୟ ନୃତ୍ୟଦ୍-ଭୁଜଙ୍ଗ-ଭ୍ରୁବେ ବଜ୍ରିଣେ ଦଂଷ୍ଟ୍ରୟା\nତୁଭ୍ୟମଧ୍ୟାତ୍ମ-ବିଦ୍ୟା-ବିଧେୟା ବିଧେୟା\nଭବଦ୍-ଦାସ୍ୟମାପାଦୟେଥା ଦୟେଥାଶ୍ଚ ମେ ॥ ୪ ॥",
                    translation: "ଜ୍ଞାନୀମାନେ ନିରନ୍ତର ଯାହାଙ୍କର ପୂଜା-ଆରାଧନା କରନ୍ତି, ମୋର ପ୍ରଣାମ ସେହି ପ୍ରଭୁଙ୍କୁ! ଉଡ଼ାଣ କାଳରେ ଆପଣଙ୍କ ବିଶାଳ ପକ୍ଷ (ଡେଣା)ରୁ ପ୍ରବାହିତ ପ୍ରଚଣ୍ଡ ବାୟୁ ସମସ୍ତ ସମୁଦ୍ରକୁ ଉତ୍ତାଳ କରିଦିଏ। ସେହି ସମୁଦ୍ର ତରଙ୍ଗରୂପୀ ଚାପୁଡ଼ା ଆଘାତରେ ପାତାଳପୁରୀ ପର୍ଯ୍ୟନ୍ତ 'ଭାଂ' ଧ୍ୱନି ଗୁଞ୍ଜରିତ ହୁଏ, ଯାହା ଶୁଣି କ୍ରୋଧାନ୍ୱିତ ଦିଗ୍-ଗଜ ଓ ନାଗମାନେ ଆକ୍ରମଣ କରିବାକୁ ଆସିଲେ, ଆପଣଙ୍କ ପ୍ରଦୀପ୍ତ ନଖଶ୍ରେଣୀ ଅଙ୍କୁଶ ସଦୃଶ ସେମାନଙ୍କୁ ଦମନ କରେ। ଆପଣଙ୍କ ତୀକ୍ଷ୍ଣ ଚଞ୍ଚୁ ଶତ୍ରୁଙ୍କ ହୃଦୟରେ ଭୟ ଉପୁଜାଏ; ଆପଣଙ୍କ କୁଟିଳ ଭ୍ରୁକୁଟି ନୃତ୍ୟରତ କାଳସର୍ପ ପରି ଏବଂ ଦନ୍ତସମୂହ ଇନ୍ଦ୍ରଙ୍କ ବଜ୍ର ପରି ଅଟେ। ହେ ପ୍ରଭୁ! ଆପଣଙ୍କୁ ପ୍ରଣାମ! ଆପଣ କୃପା କରି ମୋତେ ଅଧ୍ୟାତ୍ମ-ବିଦ୍ୟା (ବ୍ରହ୍ମବିଦ୍ୟା)ରେ ସମର୍ଥ କରାନ୍ତୁ, ମୋତେ ଆପଣଙ୍କ ଶ୍ରୀଚରଣର ନିତ୍ୟ ଦାସତ୍ୱ ପ୍ରଦାନ କରନ୍ତୁ ଏବଂ ମୋ ଉପରେ ପରମ କୃପା ବର୍ଷଣ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "ନମଃ ଇଦମ୍",
                            meaning: "ମୋର ଏହି ସାଦର ପ୍ରଣାମ"
                        },
                        {
                            word: "ଅଜହତ୍-ସପର୍ଯ୍ୟାୟ",
                            meaning: "ନିରନ୍ତର ଅବିରତ ଉପାସନା ପ୍ରାପ୍ତ କରୁଥିବା ଆପଣଙ୍କୁ"
                        },
                        {
                            word: "ପର୍ଯ୍ୟାୟ-ନିର୍ଯ୍ୟାତ-ପକ୍ଷ-ଅନିଳ",
                            meaning: "କ୍ରମାନ୍ୱୟରେ ଗତିଶୀଳ ଡେଣାରୁ ଉତ୍ପନ୍ନ ପ୍ରଚଣ୍ଡ ବାୟୁ ଦ୍ୱାରା"
                        },
                        {
                            word: "ଆସ୍ଫାଳନ-ଉଦ୍ୱେଳ-ପାଥୋଧି",
                            meaning: "ଉତ୍ତାଳ ହୋଇ କୂଳ ଲଙ୍ଘୁଥିବା ସମୁଦ୍ରର"
                        },
                        {
                            word: "ବୀଚୀ-ଚପେଟ-ଆହତ",
                            meaning: "ତରଙ୍ଗରୂପୀ ଚାପୁଡ଼ା ମାଡ଼ରେ ଆହତ ହୋଇ"
                        },
                        {
                            word: "ଅଗାଧ-ପାତାଳ-ଭାଙ୍କାର",
                            meaning: "ଗଭୀର ପାତାଳପୁରୀରେ 'ଭାଂ' ଧ୍ୱନି ପ୍ରତିଧ୍ୱନିତ ହେବାରୁ"
                        },
                        {
                            word: "ସଙ୍କ୍ରୁଦ୍ଧ-ନାଗେନ୍ଦ୍ର",
                            meaning: "ଅତ୍ୟନ୍ତ କ୍ରୋଧିତ ହୋଇଥିବା ଦିଗହସ୍ତୀ ତଥା ନାଗମାନଙ୍କୁ"
                        },
                        {
                            word: "ପୀଡ଼ା-ଅଙ୍କୁଶ-ଭାବ",
                            meaning: "ଦମନ କରିବା ପାଇଁ ଅଙ୍କୁଶ ସଦୃଶ"
                        },
                        {
                            word: "ଭାସ୍ୱନ୍-ନଖ-ଶ୍ରେଣୟେ",
                            meaning: "ଉଜ୍ଜ୍ୱଳ ତୀକ୍ଷ୍ଣ ନଖଶ୍ରେଣୀ ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ଚଣ୍ଡ-ତୁଣ୍ଡାୟ",
                            meaning: "ଭୟଙ୍କର ତୀକ୍ଷ୍ଣ ଚଞ୍ଚୁ (ଥଣ୍ଟ) ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ନୃତ୍ୟଦ୍-ଭୁଜଙ୍ଗ-ଭ୍ରୁବେ",
                            meaning: "ନୃତ୍ୟରତ ସର୍ପ ସଦୃଶ କୁଟିଳ ଭ୍ରୁକୁଟି ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ଦଂଷ୍ଟ୍ରୟା ବଜ୍ରିଣେ",
                            meaning: "ବଜ୍ର ପରି କଠୋର ଦାନ୍ତ ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ତୁଭ୍ୟମ୍",
                            meaning: "ଆପଣଙ୍କୁ"
                        },
                        {
                            word: "ଅଧ୍ୟାତ୍ମ-ବିଦ୍ୟା-ବିଧେୟା",
                            meaning: "ଆତ୍ମଜ୍ଞାନ ବା ବ୍ରହ୍ମବିଦ୍ୟାର ନିୟନ୍ତା"
                        },
                        {
                            word: "ବିଧେୟା",
                            meaning: "ସୁଲଭ ବା ପ୍ରଦାନ କରନ୍ତୁ"
                        },
                        {
                            word: "ଭବଦ୍-ଦାସ୍ୟମ୍ ଆପାଦୟେଥା",
                            meaning: "ମୋତେ ଆପଣଙ୍କ ନିତ୍ୟ ଦାସ୍ୟସେବା ପ୍ରଦାନ କରନ୍ତୁ"
                        },
                        {
                            word: "ଦୟେଥାଃ ଚ ମେ",
                            meaning: "ଏବଂ ମୋ ପ୍ରତି ଅହେତୁକୀ ଦୟା ପ୍ରକାଶ କରନ୍ତୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 5,
                    lyric: "ମନୁରନୁଗତ-ପକ୍ଷି-ବକ୍ତ୍ର-ସ୍ଫୁରତ୍-ତାରକସ୍-ତାବକଶ୍\nଚିତ୍ରଭାନୁ-ପ୍ରିୟା-ଶେଖରସ୍ ତ୍ରାୟତାଂ ନସ୍\nତ୍ରିବର୍ଗାପବର୍ଗ-ପ୍ରସୂତିଃ ପରବ୍ୟୋମ-ଧାମନ୍\nବଳଦ୍ୱେଷି-ଦର୍ପ-ଜ୍ୱଳଦ୍-ବାଳଖିଲ୍ୟ-ପ୍ରତିଜ୍ଞାବତୀର୍ଣ୍ଣ\nସ୍ଥିରାଂ ତତ୍ତ୍ୱବୁଦ୍ଧିଂ ପରାଂ ଭକ୍ତିଧେନୁଂ ଜଗନ୍ମୂଳକନ୍ଦେ\nମୁକୁନ୍ଦେ ମହାନନ୍ଦ-ଦୋଗ୍ଧ୍ରୀଂ ଦଧୀଥା\nମୁଧାକାମହୀନାମ୍ ଅହୀନାମ୍ ଅହୀନାନ୍ତକ ॥ ୫ ॥",
                    translation: "ହେ ପରମ ବୈକୁଣ୍ଠଧାମର ନିତ୍ୟ ନିବାସୀ ପ୍ରଭୁ! ଆପଣଙ୍କର ପଞ୍ଚାକ୍ଷର ଦିବ୍ୟ ମନ୍ତ୍ର, ଯାହା ପ୍ରଣବ 'ଓଁ'କାରରୁ ଆରମ୍ଭ ହୋଇ ଅଗ୍ନିଦେବଙ୍କ ପ୍ରିୟା 'ସ୍ୱାହା'ରେ ସମାପ୍ତ ହୁଏ, ତାହା ଚତୁର୍ବିଧ ପୁରୁଷାର୍ଥ— ଧର୍ମ, ଅର୍ଥ, କାମ ଏବଂ ମୋକ୍ଷ ପ୍ରଦାନ କରିଥାଏ; ସେହି ପବିତ୍ର ମନ୍ତ୍ର ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ରକ୍ଷା କରୁ। ଦେବରାଜ ଇନ୍ଦ୍ରଙ୍କ ଅହଙ୍କାର ଚୂର୍ଣ୍ଣ କରିବା ନିମନ୍ତେ ବାଳଖିଲ୍ୟ ମୁନିମାନଙ୍କ ଦିବ୍ୟ ସଂକଳ୍ପରୁ ଆପଣ ପ୍ରକଟ ହୋଇଥିଲେ। ହେ ମହାସର୍ପମାନଙ୍କ କାଳ ସ୍ୱରୂପ! ସମଗ୍ର ସୃଷ୍ଟିର ମୂଳ କାରଣ ଶ୍ରୀମୁକୁନ୍ଦଙ୍କ ଶ୍ରୀଚରଣରେ ମୋତେ ଅଚଳ ତତ୍ତ୍ୱଜ୍ଞାନ ପ୍ରଦାନ କରନ୍ତୁ ଏବଂ ନିଷ୍ଫଳ ସାଂସାରିକ କାମନାରୁ ରହିତ, ପରମାନନ୍ଦ-ଦୁଗ୍ଧ କ୍ଷରଣ କରୁଥିବା ପୂର୍ଣ୍ଣାଙ୍ଗ ପରାଭକ୍ତିରୂପୀ କାମଧେନୁ ମୋତେ ଦାନ କରନ୍ତୁ।",
                    wordMeanings: [
                        {
                            word: "ତାବକଃ ମନୁଃ",
                            meaning: "ଆପଣଙ୍କର ପବିତ୍ର ଗରୁଡ଼ ମନ୍ତ୍ର"
                        },
                        {
                            word: "ଅନୁଗତ-ପକ୍ଷି-ବକ୍ତ୍ର-ସ୍ଫୁରତ୍-ତାରକଃ",
                            meaning: "'ଓଁ'କାର (ତାରକ ମନ୍ତ୍ର) ଦ୍ୱାରା ଆରମ୍ଭ ହୋଇ ପକ୍ଷୀରାଜଙ୍କ ମନ୍ତ୍ରାକ୍ଷର ସହିତ ସଂଯୁକ୍ତ"
                        },
                        {
                            word: "ଚିତ୍ରଭାନୁ-ପ୍ରିୟା-ଶେଖରଃ",
                            meaning: "ଅଗ୍ନିପତ୍ନୀ 'ସ୍ୱାହା' ଶବ୍ଦ ଦ୍ୱାରା ସମାପ୍ତ ହେଉଥିବା"
                        },
                        {
                            word: "ତ୍ରିବର୍ଗ-ଅପବର୍ଗ-ପ୍ରସୂତିଃ",
                            meaning: "ଧର୍ମ, ଅର୍ଥ, କାମ (ତ୍ରିବର୍ଗ) ଏବଂ ମୋକ୍ଷ (ଅପବର୍ଗ) ପ୍ରଦାନ କରୁଥିବା"
                        },
                        {
                            word: "ପରବ୍ୟୋମ-ଧାମନ୍",
                            meaning: "ପରମ ବୈକୁଣ୍ଠ ଧାମର ଅଧିବାସୀ"
                        },
                        {
                            word: "ତ୍ରାୟତାମ୍ ନଃ",
                            meaning: "ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            word: "ବଳଦ୍ୱେଷି-ଦର୍ପ-ଜ୍ୱଳତ୍",
                            meaning: "ଇନ୍ଦ୍ରଙ୍କ ଗର୍ବକୁ ଚୂର୍ଣ୍ଣ କରିବା ନିମନ୍ତେ"
                        },
                        {
                            word: "ବାଳଖିଲ୍ୟ-ପ୍ରତିଜ୍ଞା-ଅବତୀର୍ଣ୍ଣ",
                            meaning: "ବାଳଖିଲ୍ୟ ଋଷିମାନଙ୍କ ସଂକଳ୍ପ ଦ୍ୱାରା ଆବିର୍ଭୂତ ହୋଇଥିବା"
                        },
                        {
                            word: "ସ୍ଥିରାମ୍ ତତ୍ତ୍ୱ-ବୁଦ୍ଧିମ୍",
                            meaning: "ସ୍ଥିର ଭଗବତ୍ ତତ୍ତ୍ୱଜ୍ଞାନ"
                        },
                        {
                            word: "ପରାମ୍ ଭକ୍ତି-ଧେନୁମ୍",
                            meaning: "ଶ୍ରେଷ୍ଠ ଭକ୍ତିରୂପୀ କାମଧେନୁ"
                        },
                        {
                            word: "ଜଗତ୍-ମୂଳ-କନ୍ଦେ ମୁକୁନ୍ଦେ",
                            meaning: "ସମଗ୍ର ଜଗତର ମୂଳ କାରଣ ଶ୍ରୀ ମୁକୁନ୍ଦଙ୍କ ଶ୍ରୀଚରଣରେ"
                        },
                        {
                            word: "ମହାନନ୍ଦ-ଦୋଗ୍ଧ୍ରୀମ୍",
                            meaning: "ପରମ ଆନନ୍ଦରୂପୀ ଦୁଗ୍ଧ ପ୍ରଦାନକାରୀ"
                        },
                        {
                            word: "ମୁଧା-କାମ-ହୀନାମ୍",
                            meaning: "ନିଷ୍ଫଳ ଭୌତିକ କାମନା-ବାସନାରୁ ସମ୍ପୂର୍ଣ୍ଣ ମୁକ୍ତ"
                        },
                        {
                            word: "ଅହୀନାମ୍",
                            meaning: "ଅଖଣ୍ଡ ଓ ପରିପୂର୍ଣ୍ଣ"
                        },
                        {
                            word: "ଦଧୀଥାଃ",
                            meaning: "ମୋତେ ପ୍ରଦାନ କରନ୍ତୁ"
                        },
                        {
                            word: "ଅହୀନ-ଅନ୍ତକ",
                            meaning: "ବିଶାଳ ସର୍ପମାନଙ୍କ କାଳ ସ୍ୱରୂପ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 6,
                    lyric: "ଷଟ୍‌ତ୍ରିଂଶଦ୍-ଗଣ-ଚରଣୋ ନର-ପରିପାଟୀ-ନବୀନ-ଗୁମ୍ଭ-ଗଣଃ ।\nବିଷ୍ଣୁ-ରଥ-ଦଣ୍ଡକୋ ଽୟଂ ବିଘଟୟତୁ ବିପକ୍ଷ-ବାହିନୀ-ବ୍ୟୂହମ୍ ॥ ୬ ॥",
                    translation: "ପ୍ରତ୍ୟେକ ଚରଣରେ ଛତିଶଟି ଗଣ (ଦୁଇଟି ନ-ଗଣ ଏବଂ ଚଉତିରିଶଟି ର-ଗଣ ମିଶି ମୋଟ ୧୦୮ ଅକ୍ଷର) ଦ୍ୱାରା ସୁସଜ୍ଜିତ ଏବଂ ଅତ୍ୟନ୍ତ ଅଭିନବ କାବ୍ୟିକ ପଦାବଳୀରେ ରଚିତ ଭଗବାନ ଶ୍ରୀବିଷ୍ଣୁଙ୍କ ବାହନ ଶ୍ରୀଗରୁଡ଼ଙ୍କର ଏହି 'ଗରୁଡ଼ ଦଣ୍ଡକମ୍', ପାଠକର ସମସ୍ତ ବିରୋଧୀ ଶତ୍ରୁ-ସେନାଙ୍କ ସୈନ୍ୟ-ବ୍ୟୂହ ତଥା ଜୀବନର ସମସ୍ତ ବାଧାବିଘ୍ନକୁ ଧୂଳିସାତ୍ କରିଦେଉ।",
                    wordMeanings: [
                        {
                            word: "ଷଟ୍-ତ୍ରିଂଶତ୍-ଗଣ-ଚରଣଃ",
                            meaning: "ପ୍ରତ୍ୟେକ ଚରଣରେ ଛତିଶଟି (୩୬) ଗଣ ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ନ-ର-ପରିପାଟୀ",
                            meaning: "'ନ-ଗଣ' ଏବଂ 'ର-ଗଣ'ର ଛାନ୍ଦସିକ କ୍ରମରେ ରଚିତ"
                        },
                        {
                            word: "ନବୀନ-ଗୁମ୍ଭ-ଗଣଃ",
                            meaning: "ଅଭିନବ ସୁନ୍ଦର ପଦାବଳୀର ସମାହାର"
                        },
                        {
                            word: "ଅୟମ୍ ବିଷ୍ଣୁ-ରଥ-ଦଣ୍ଡକଃ",
                            meaning: "ବିଷ୍ଣୁବାହନ ଶ୍ରୀ ଗରୁଡ଼ଙ୍କ ଏହି ଦଣ୍ଡକ ସ୍ତୋତ୍ର"
                        },
                        {
                            word: "ବିଘଟୟତୁ",
                            meaning: "ଛତ୍ରଭଙ୍ଗ ବା ବିନାଶ କରୁ"
                        },
                        {
                            word: "ବିପକ୍ଷ-ବାହିନୀ-ବ୍ୟୂହମ୍",
                            meaning: "ଶତ୍ରୁ-ସେନାମାନଙ୍କ ସମସ୍ତ ବ୍ୟୂହକୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 7,
                    lyric: "ବିଚିତ୍ର-ସିଦ୍ଧିଦଃ ସୋ ଽୟଂ ବେଙ୍କଟେଶ-ବିପଶ୍ଚିତା ।\nଗରୁଡ଼-ଧ୍ୱଜ-ତୋଷାୟ ଗୀତୋ ଗରୁଡ଼-ଦଣ୍ଡକଃ ॥ ୭ ॥",
                    translation: "ସକଳ ଅଭୀଷ୍ଟ ଓ ବିଚିତ୍ର ସିଦ୍ଧି ପ୍ରଦାନକାରୀ ଏହି 'ଗରୁଡ଼ ଦଣ୍ଡକମ୍', ବିଦ୍ୱାନ କବି ଶ୍ରୀ ବେଙ୍କଟେଶ (ଶ୍ରୀ ବେଦାନ୍ତ ଦେଶିକ)ଙ୍କ ଦ୍ୱାରା ଗରୁଡ଼ଧ୍ୱଜ ଭଗବାନ ଶ୍ରୀମନ୍ ନାରାୟଣଙ୍କ ପ୍ରୀତି ସମ୍ପାଦନ ନିମନ୍ତେ ରଚିତ ତଥା ଗାନ କରାଯାଇଛି।",
                    wordMeanings: [
                        {
                            word: "ବିଚିତ୍ର-ସିଦ୍ଧିଦଃ",
                            meaning: "ଅଲୌକିକ ମନସ୍କାମନା ପୂର୍ଣ୍ଣ କରୁଥିବା"
                        },
                        {
                            word: "ସଃ ଅୟମ୍",
                            meaning: "ଏହି"
                        },
                        {
                            word: "ବେଙ୍କଟେଶ-ବିପଶ୍ଚିତା",
                            meaning: "ବିଦ୍ୱାନ କବି ଶ୍ରୀ ବେଙ୍କଟେଶ (ଶ୍ରୀ ବେଦାନ୍ତ ଦେଶିକ)ଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            word: "ଗରୁଡ଼-ଧ୍ୱଜ-ତୋଷାୟ",
                            meaning: "ଗରୁଡ଼ଧ୍ୱଜ ପ୍ରଭୁ ଶ୍ରୀମନ୍ ନାରାୟଣଙ୍କ ସନ୍ତୋଷ ବିଧାନ ନିମନ୍ତେ"
                        },
                        {
                            word: "ଗୀତଃ",
                            meaning: "ଗାନ କରାଯାଇଥିବା"
                        },
                        {
                            word: "ଗରୁଡ଼-ଦଣ୍ଡକଃ",
                            meaning: "ଶ୍ରୀ ଗରୁଡ଼ ଦଣ୍ଡକ ସ୍ତୋତ୍ର"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        id: "song-govindamprayers",
        title: "ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା - ଦର୍ଶନ ଆରତୀ (Govindam Prayers - Darsana Arati)",
        title_odia: "ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା (ଦର୍ଶନ ଆରତୀ)",
        title_english: "Govindam Prayers (Darsana Arati)",
        category: "Songs",
        type: "html",
        author: "Lord Brahma",
        tags: [
            "Govindam Prayers",
            "Govindam Adi Purusam",
            "Brahma Samhita",
            "Darsana Arati",
            "Lord Brahma",
            "ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା",
            "ଗୋବିନ୍ଦମ୍ ଆଦି ପୁରୁଷମ୍",
            "ବ୍ରହ୍ମ ସଂହିତା",
            "ଦର୍ଶନ ଆରତୀ",
            "ବ୍ରହ୍ମା"
        ],
        description: "ଶ୍ରୀ ବ୍ରହ୍ମାଜୀଙ୍କ ମୁଖନିସୃତ ବ୍ରହ୍ମ ସଂହିତାରୁ ପ୍ରସିଦ୍ଧ ଦର୍ଶନ ଆରତୀ ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା ।",
        audioUrl: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Classical_and_Western/Daily_temple_program/Daily%20temple%20program%202/16_-_Govindam_Adi_Purusam_-_Darsana-arati.mp3",
        vocalist: "HG Yamuna Mataji",
        audioVersions: [
            {
                label: "HG Yamuna Mataji (Temple Darshan Arati)",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Classical_and_Western/Daily_temple_program/Daily%20temple%20program%202/16_-_Govindam_Adi_Purusam_-_Darsana-arati.mp3"
            }
        ],
        structuredContent: {
            id: "song-govindamprayers",
            title: "ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା - ଦର୍ଶନ ଆରତୀ (Govindam Prayers - Darsana Arati)",
            title_odia: "ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା (ଦର୍ଶନ ଆରତୀ)",
            title_english: "Govindam Prayers (Darsana Arati)",
            author: "Lord Brahma",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Govindam%20Prayers_More%20Songs_8",
            verses: [
                {
                    id: 1,
                    lyric: "ବେଣୁଂ କ୍ୱଣନ୍ତମ୍ ଅରବିନ୍ଦ-ଦଳାୟତାକ୍ଷଂ\nବର୍ହାବତଂସମ୍ ଅସିତାମ୍ବୁଦ-ସୁନ୍ଦରାଙ୍ଗମ୍ ।\nକନ୍ଦର୍ପ-କୋଟି-କମନୀୟ-ବିଶେଷ-ଶୋଭଂ\nଗୋବିନ୍ଦମ୍ ଆଦି-ପୁରୁଷଂ ତମ୍ ଅହଂ ଭଜାମି ॥ ୧ ॥",
                    translation: "ଯିଏ ଅତି ମନୋହର ସ୍ୱରରେ ମୁରଲୀ ବାଦନ କରୁଛନ୍ତି; ଯାହାଙ୍କର ନୟନଯୁଗଳ ପ୍ରସ୍ଫୁଟିତ ପଦ୍ମପାଖୁଡ଼ା ସଦୃଶ ବିଶାଳ ଓ ସୁନ୍ଦର; ଯାହାଙ୍କ ମସ୍ତକରେ ମୟୂରପୁଚ୍ଛର ମନୋରମ ଚୂଳ ଶୋଭା ପାଉଛି; ଯାହାଙ୍କ ଶ୍ରୀଅଙ୍ଗର ଶ୍ୟାମଳ ଶୋଭା ନବଜଳଧର (ସଜଳ ମେଘ) ପରି ପରମ ଆକର୍ଷଣୀୟ; ଏବଂ ଯାହାଙ୍କର ଅପ୍ରାକୃତ ଦିବ୍ୟ ଲାବଣ୍ୟ କୋଟି କୋଟି କାମଦେବଙ୍କୁ ମଧ୍ୟ ପରାସ୍ତ ଓ ମୋହିତ କରିଦିଏ— ସେହି ଆଦିପୁରୁଷ ଭଗବାନ ଶ୍ରୀ ଗୋବିନ୍ଦଙ୍କର ମୁଁ ଭଜନ କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ବେଣୁମ୍",
                            meaning: "ବଂଶୀକୁ"
                        },
                        {
                            word: "କ୍ୱଣନ୍ତମ୍",
                            meaning: "ମଧୁର ସ୍ୱରରେ ବାଦନ କରୁଥିବା"
                        },
                        {
                            word: "ଅରବିନ୍ଦ-ଦଳ-ଆୟତ-ଅକ୍ଷମ୍",
                            meaning: "ପ୍ରସ୍ଫୁଟିତ ପଦ୍ମପାଖୁଡ଼ା ସଦୃଶ ବିଶାଳ ସୁନ୍ଦର ନୟନ ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ବର୍ହ-ଅବତଂସମ୍",
                            meaning: "ଶିଖିପୁଚ୍ଛ (ମୟୂରପୁଚ୍ଛ)କୁ ମୁକୁଟର ଚୂଳ ରୂପେ ଭୂଷିତ କରିଥିବା"
                        },
                        {
                            word: "ଅସିତ-ଅମ୍ବୁଦ-ସୁନ୍ଦର-ଅଙ୍ଗମ୍",
                            meaning: "ନବୀନ ନୀଳ ଜଳଧର (ମେଘ) ସଦୃଶ ଶ୍ୟାମଳ ସୁନ୍ଦର ଶ୍ରୀଅଙ୍ଗ ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "କନ୍ଦର୍ପ-କୋଟି-କମନୀୟ",
                            meaning: "କୋଟି କୋଟି କନ୍ଦର୍ପ (କାମଦେବ)ଙ୍କୁ ମୋହିତ କରୁଥିବା"
                        },
                        {
                            word: "ବିଶେଷ-ଶୋଭମ୍",
                            meaning: "ଅପ୍ରତିଦ୍ୱନ୍ଦ୍ୱୀ ଅଲୌକିକ ସୌନ୍ଦର୍ଯ୍ୟଶାଳୀ"
                        },
                        {
                            word: "ଗୋବିନ୍ଦମ୍",
                            meaning: "ସେହି ଇନ୍ଦ୍ରିୟ ଓ ଗୋକୁଳର ଆନନ୍ଦଦାତା ଶ୍ରୀ ଗୋବିନ୍ଦଙ୍କୁ"
                        },
                        {
                            word: "ଆଦି-ପୁରୁଷମ୍",
                            meaning: "ସର୍ବକାରଣର ପରମ ମୂଳ କାରଣ ଆଦିପୁରୁଷ ଭଗବାନଙ୍କୁ"
                        },
                        {
                            word: "ତମ୍ ଅହମ୍ ଭଜାମି",
                            meaning: "ମୁଁ ତାହାଙ୍କର ଭଜନ କରୁଛି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ଅଙ୍ଗାନି ଯସ୍ୟ ସକଳେନ୍ଦ୍ରିୟ-ବୃତ୍ତି-ମନ୍ତି\nପଶ୍ୟନ୍ତି ପାନ୍ତି କଳୟନ୍ତି ଚିରଂ ଜଗନ୍ତି ।\nଆନନ୍ଦ-ଚିନ୍ମୟ-ସଦ୍-ଉଜ୍ଜ୍ୱଳ-ବିଗ୍ରହସ୍ୟ\nଗୋବିନ୍ଦମ୍ ଆଦି-ପୁରୁଷଂ ତମ୍ ଅହଂ ଭଜାମି ॥ ୨ ॥",
                    translation: "ଯାହାଙ୍କର ଦିବ୍ୟ ଶ୍ରୀବିଗ୍ରହ ନିତ୍ୟ, ସଚ୍ଚିଦାନନ୍ଦମୟ ଏବଂ ପରମ ଉଜ୍ଜ୍ୱଳ ତେଜରେ ଝଟକୁଛି; ଯାହାଙ୍କ ଶ୍ରୀଅଙ୍ଗର ପ୍ରତ୍ୟେକ ଅଙ୍ଗ ସମସ୍ତ ଇନ୍ଦ୍ରିୟର କାର୍ଯ୍ୟ ସମ୍ପନ୍ନ କରିବାକୁ ସମର୍ଥ (ଅର୍ଥାତ୍ ଯିଏ ନେତ୍ର ଦ୍ୱାରା ଆହାର କରିପାରନ୍ତି, ଶ୍ରବଣ ଦ୍ୱାରା ଦର୍ଶନ କରିପାରନ୍ତି ଏବଂ ଚରଣ ଦ୍ୱାରା ଆଲିଙ୍ଗନ କରିପାରନ୍ତି); ଏବଂ ଯିଏ ଅନନ୍ତ କୋଟି ବ୍ରହ୍ମାଣ୍ଡକୁ ନିରନ୍ତର ଦର୍ଶନ କରୁଛନ୍ତି, ପାଳନ କରୁଛନ୍ତି ତଥା ସଂଚାଳିତ କରୁଛନ୍ତି— ସେହି ଆଦିପୁରୁଷ ପରମେଶ୍ୱର ଶ୍ରୀ ଗୋବିନ୍ଦଙ୍କର ମୁଁ ଭଜନ କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ଯସ୍ୟ ଅଙ୍ଗାନି",
                            meaning: "ଯାହାଙ୍କ ଶ୍ରୀଅଙ୍ଗର ପ୍ରତ୍ୟେକ ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ"
                        },
                        {
                            word: "ସକଳ-ଇନ୍ଦ୍ରିୟ-ବୃତ୍ତି-ମନ୍ତି",
                            meaning: "ସମସ୍ତ ଇନ୍ଦ୍ରିୟର କାର୍ଯ୍ୟ ସମ୍ପାଦନ କରିବାର ପୂର୍ଣ୍ଣ ଶକ୍ତିରେ ଯୁକ୍ତ"
                        },
                        {
                            word: "ପଶ୍ୟନ୍ତି",
                            meaning: "ସର୍ବଦା ଦର୍ଶନ କରୁଛନ୍ତି"
                        },
                        {
                            word: "ପାନ୍ତି",
                            meaning: "ପାଳନ ଓ ରକ୍ଷା କରୁଛନ୍ତି"
                        },
                        {
                            word: "କଳୟନ୍ତି",
                            meaning: "ପ୍ରକାଶ ବା ସୃଷ୍ଟି କରୁଛନ୍ତି"
                        },
                        {
                            word: "ଚିରମ୍",
                            meaning: "ଅନନ୍ତ କାଳ ପର୍ଯ୍ୟନ୍ତ"
                        },
                        {
                            word: "ଜଗନ୍ତି",
                            meaning: "ଅସଂଖ୍ୟ ବ୍ରହ୍ମାଣ୍ଡସମୂହକୁ"
                        },
                        {
                            word: "ଆନନ୍ଦ-ଚିନ୍ମୟ",
                            meaning: "ପରମ ଆନନ୍ଦମୟ ଓ ଅପ୍ରାକୃତ ଚୈତନ୍ୟମୟ"
                        },
                        {
                            word: "ସଦ୍-ଉଜ୍ଜ୍ୱଳ-ବିଗ୍ରହସ୍ୟ",
                            meaning: "ନିତ୍ୟ ସତ୍ୟ ତଥା ଦିବ୍ୟ ପରମ ଉଜ୍ଜ୍ୱଳ ଶ୍ରୀବିଗ୍ରହ ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ଗୋବିନ୍ଦମ୍",
                            meaning: "ସେହି ଶ୍ରୀ ଗୋବିନ୍ଦଙ୍କୁ"
                        },
                        {
                            word: "ଆଦି-ପୁରୁଷମ୍",
                            meaning: "ସର୍ବପ୍ରଥମ ମୂଳ ପରମପୁରୁଷଙ୍କୁ"
                        },
                        {
                            word: "ତମ୍ ଅହମ୍ ଭଜାମି",
                            meaning: "ମୁଁ ତାହାଙ୍କର ଭଜନ କରୁଛି"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        id: "song-guraugosthegosthalayisu",
        title: "ଗୁରୌ ଗୋଷ୍ଠେ ଗୋଷ୍ଠାଳୟିଷୁ - ଶ୍ରୀ ମନଃଶିକ୍ଷା (Gurau Gosthe Gosthalayisu - Sri Manah Siksa)",
        title_odia: "ଗୁରୌ ଗୋଷ୍ଠେ ଗୋଷ୍ଠାଳୟିଷୁ - ଶ୍ରୀ ମନଃଶିକ୍ଷା",
        title_english: "Gurau Gosthe Gosthalayisu - Sri Manah Siksa",
        category: "Songs",
        type: "html",
        author: "Raghunatha Dasa Goswami",
        tags: [
            "Gurau Gosthe Gosthalayisu",
            "Manah Siksa",
            "Sri Manah Siksa",
            "Raghunatha Dasa Goswami",
            "Stotram",
            "ଗୁରୌ ଗୋଷ୍ଠେ",
            "ମନଃଶିକ୍ଷା",
            "ଶ୍ରୀ ମନଃଶିକ୍ଷା",
            "ରଘୁନାଥ ଦାସ ଗୋସ୍ୱାମୀ"
        ],
        description: "ଶ୍ରୀଳ ରଘୁନାଥ ଦାସ ଗୋସ୍ୱାମୀଙ୍କ ବିରଚିତ ସୁପ୍ରସିଦ୍ଧ ଶ୍ରୀ ମନଃଶିକ୍ଷା (୧୨ଟି ଶ୍ଳୋକ) ।",
        audioUrl: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Raghunath_Dasa_Goswami/Gurau_Gosthe_Gosthalayisu/Gurau_Gosthe_Gosthalayisu_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3",
        vocalist: "HG Jai Sachinandana Prabhu",
        audioVersions: [
            {
                label: "HG Jai Sachinandana Prabhu",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Raghunath_Dasa_Goswami/Gurau_Gosthe_Gosthalayisu/Gurau_Gosthe_Gosthalayisu_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3"
            }
        ],
        structuredContent: {
            id: "song-guraugosthegosthalayisu",
            title: "ଗୁରୌ ଗୋଷ୍ଠେ ଗୋଷ୍ଠାଳୟିଷୁ - ଶ୍ରୀ ମନଃଶିକ୍ଷା (Gurau Gosthe Gosthalayisu - Sri Manah Siksa)",
            title_odia: "ଗୁରୌ ଗୋଷ୍ଠେ ଗୋଷ୍ଠାଳୟିଷୁ - ଶ୍ରୀ ମନଃଶିକ୍ଷା",
            title_english: "Gurau Gosthe Gosthalayisu - Sri Manah Siksa",
            author: "Raghunatha Dasa Goswami",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Gurau%20Gosthe%20Gosthalayisu_",
            verses: [
                {
                    id: 1,
                    lyric: "ଗୁରୌ ଗୋଷ୍ଠେ ଗୋଷ୍ଠାଳୟିଷୁ ସୁଜନେ ଭୂସୁର-ଗଣେ\nସ୍ୱ-ମନ୍ତ୍ରେ ଶ୍ରୀ-ନାମ୍ନି ବ୍ରଜ-ନବ-ଯୁବ-ଦ୍ୱନ୍ଦ୍ୱ-ଶରଣେ ।\nସଦା ଦମ୍ଭଂ ହିତ୍ୱା କୁରୁ ରତିମ୍ ଅପୂର୍ବମ୍ ଅତିତରାଂ\nଅୟେ ସ୍ୱାନ୍ତର୍-ଭ୍ରାତଶ୍ ଚଟୁଭିର୍ ଅଭିଯାଚେ ଧୃତ-ପଦଃ ॥ ୧ ॥",
                    translation: "ହେ ମୋର ଅନ୍ତରଙ୍ଗ ଭ୍ରାତା ମନ! ମୁଁ ତୋର ପାଦଯୁଗଳ ଧରି ଅତି ମଧୁର ବଚନରେ ବିନତି କରୁଛି: ତୁ ସମସ୍ତ କପଟତା ଓ ଦମ୍ଭ ପରିତ୍ୟାଗ କରି ଶ୍ରୀଗୁରୁଦେବ, ଶ୍ରୀଧାମ ବ୍ରଜଗୋଷ୍ଠ, ବ୍ରଜବାସୀଗଣ, ସାଧୁ-ବୈଷ୍ଣବବୃନ୍ଦ, ବ୍ରାହ୍ମଣକୁଳ, ଦୀକ୍ଷାମନ୍ତ୍ର, ଶ୍ରୀହରିନାମ ଏବଂ ନିତ୍ୟ-ନୂତନ ଶ୍ରୀ ଶ୍ରୀ ରାଧା-କୃଷ୍ଣ ଯୁଗଳକିଶୋରଙ୍କ ଶ୍ରୀଚରଣ-ଶରଣରେ ଅପୂର୍ବ ତଥା ପରମ ପ୍ରେମମୟୀ ନିଷ୍ଠା ପ୍ରକଟ କର।",
                    wordMeanings: [
                        {
                            word: "ଅୟେ ସ୍ୱାନ୍ତର୍-ଭ୍ରାତଃ",
                            meaning: "ହେ ମୋର ଭ୍ରାତା ମନ"
                        },
                        {
                            word: "ଧୃତ-ପଦଃ",
                            meaning: "ତୋର ପାଦ ଧରି"
                        },
                        {
                            word: "ଚଟୁଭିଃ ଅଭିଯାଚେ",
                            meaning: "ମିଷ୍ଟ ବଚନରେ ପ୍ରାର୍ଥନା କରୁଛି"
                        },
                        {
                            word: "ସଦା ଦମ୍ଭଂ ହିତ୍ୱା",
                            meaning: "ସର୍ବଦା କପଟତା ବା ଅହଙ୍କାର ତ୍ୟାଗ କରି"
                        },
                        {
                            word: "ଗୁରୌ",
                            meaning: "ଶ୍ରୀଗୁରୁଦେବଙ୍କ ଠାରେ"
                        },
                        {
                            word: "ଗୋଷ୍ଠେ",
                            meaning: "ପବିତ୍ର ବ୍ରଜଧାମରେ"
                        },
                        {
                            word: "ଗୋଷ୍ଠ-ଆଳୟିଷୁ",
                            meaning: "ବ୍ରଜବାସୀମାନଙ୍କ ଠାରେ"
                        },
                        {
                            word: "ସୁଜନେ",
                            meaning: "ସାଧୁ ବୈଷ୍ଣବମାନଙ୍କ ଠାରେ"
                        },
                        {
                            word: "ଭୂସୁର-ଗଣେ",
                            meaning: "ବ୍ରାହ୍ମଣମାନଙ୍କ ଠାରେ"
                        },
                        {
                            word: "ସ୍ୱ-ମନ୍ତ୍ରେ",
                            meaning: "ନିଜ ଦୀକ୍ଷାମନ୍ତ୍ରରେ"
                        },
                        {
                            word: "ଶ୍ରୀ-ନାମ୍ନି",
                            meaning: "ଶ୍ରୀହରିନାମରେ"
                        },
                        {
                            word: "ବ୍ରଜ-ନବ-ଯୁବ-ଦ୍ୱନ୍ଦ୍ୱ-ଶରଣେ",
                            meaning: "ଶ୍ରୀ ରାଧା-କୃଷ୍ଣ ଯୁଗଳକିଶୋରଙ୍କ ଶରଣାଗତିରେ"
                        },
                        {
                            word: "ଅପୂର୍ବାଂ ରତିଂ କୁରୁ",
                            meaning: "ଅପୂର୍ବ ଗାଢ଼ ପ୍ରେମାନୁରାଗ ସ୍ଥାପନ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ନ ଧର୍ମଂ ନାଧର୍ମଂ ଶ୍ରୁତି-ଗଣ-ନିରୁକ୍ତଂ କିଳ କୁରୁ\nବ୍ରଜେ ରାଧା-କୃଷ୍ଣ-ପ୍ରଚୁର-ପରିଚର୍ଯ୍ୟାମ୍ ଇହ ତନୁ ।\nଶଚୀ-ସୂନୁଂ ନନ୍ଦୀଶ୍ୱର-ପତି-ସୁତତ୍ୱେ ଗୁରୁ-ବରଂ\nମୁକୁନ୍ଦ-ପ୍ରେଷ୍ଠତ୍ୱେ ସ୍ମର ପଦମ୍ ଅଜସ୍ରଂ ନନୁ ମନଃ ॥ ୨ ॥",
                    translation: "ହେ ମନ! ବେଦରେ ନିରୂପିତ ସାଂସାରିକ ଧର୍ମ ବା ଅଧର୍ମ ପଛରେ ଧାବିତ ନ ହୋଇ, ତୁ ଏହି ବ୍ରଜଭୂମିରେ ଶ୍ରୀ ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ପ୍ରଚୁର ନିତ୍ୟ ପ୍ରେମମୟୀ ସେବାର ବିସ୍ତାର କର। ଶଚୀନନ୍ଦନ ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କୁ ସାକ୍ଷାତ୍ ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ ରୂପେ ଏବଂ ଶ୍ରୀଗୁରୁଦେବଙ୍କୁ ଶ୍ରୀମୁକୁନ୍ଦଙ୍କ ପରମ ପ୍ରିୟତମ ପ୍ରକାଶ ରୂପେ ଜାଣି ସେମାନଙ୍କ ଶ୍ରୀଚରଣକମଳକୁ ନିରନ୍ତର ସ୍ମରଣ କର।",
                    wordMeanings: [
                        {
                            word: "ନନୁ ମନଃ",
                            meaning: "ହେ ମୋର ମନ"
                        },
                        {
                            word: "ଶ୍ରୁତି-ଗଣ-ନିରୁକ୍ତଂ",
                            meaning: "ବେଦମାନଙ୍କରେ ବର୍ଣ୍ଣିତ"
                        },
                        {
                            word: "ନ ଧର୍ମଂ ନ ଅଧର୍ମଂ କୁରୁ",
                            meaning: "ଲୌକିକ ଧର୍ମ ବା ଅଧର୍ମରେ ପ୍ରବୃତ୍ତ ହୁଅ ନାହିଁ"
                        },
                        {
                            word: "ଇହ ବ୍ରଜେ",
                            meaning: "ଏହି ବ୍ରଜଧାମରେ"
                        },
                        {
                            word: "ରାଧା-କୃଷ୍ଣ-ପ୍ରଚୁର-ପରିଚର୍ଯ୍ୟାଂ ତନୁ",
                            meaning: "ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ପ୍ରଚୁର ସେବା ସମ୍ପାଦନ କର"
                        },
                        {
                            word: "ଶଚୀ-ସୂନୁଂ",
                            meaning: "ଶଚୀମାତାଙ୍କ ପୁତ୍ର ଶ୍ରୀଗୌରାଙ୍ଗଙ୍କୁ"
                        },
                        {
                            word: "ନନ୍ଦୀଶ୍ୱର-ପତି-ସୁତତ୍ୱେ",
                            meaning: "ନନ୍ଦରାଜଙ୍କ ପୁତ୍ର ଶ୍ରୀକୃଷ୍ଣ ଭାବରେ"
                        },
                        {
                            word: "ଗୁରୁ-ବରଂ",
                            meaning: "ଶ୍ରେଷ୍ଠ ଶ୍ରୀଗୁରୁଦେବଙ୍କୁ"
                        },
                        {
                            word: "ମୁକୁନ୍ଦ-ପ୍ରେଷ୍ଠତ୍ୱେ",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପରମ ପ୍ରିୟଜନ ଭାବରେ"
                        },
                        {
                            word: "ପଦମ୍ ଅଜସ୍ରଂ ସ୍ମର",
                            meaning: "ତାଙ୍କ ଚରଣକୁ ନିରନ୍ତର ସ୍ମରଣ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 3,
                    lyric: "ଯଦୀଚ୍ଛେର୍ ଆବାସଂ ବ୍ରଜ-ଭୁବି ସ-ରାଗଂ ପ୍ରତି-ଜନୁର୍\nଯୁବ-ଦ୍ୱନ୍ଦ୍ୱଂ ତଚ୍ ଚେତ୍ ପରିଚରିତୁମ୍ ଆରାଦ୍ ଅଭିଳଷେ ।\nସ୍ୱରୂପଂ ଶ୍ରୀ-ରୂପଂ ସ-ଗଣମ୍ ଇହ ତସ୍ୟାଗ୍ରଜମ୍ ଅପି\nସ୍ଫୁଟଂ ପ୍ରେମ୍ଣା ନିତ୍ୟଂ ସ୍ମର ନମ ତଦା ତ୍ୱଂ ଶୃଣୁ ମନଃ ॥ ୩ ॥",
                    translation: "ହେ ମନ! ଶୁଣ, ଯଦି ତୁ ପ୍ରତି ଜନ୍ମରେ ବ୍ରଜଭୂମିରେ ଅନୁରାଗପୂର୍ବକ ବାସ କରିବାକୁ ଇଚ୍ଛା କରୁଛୁ ଏବଂ ଯୁଗଳକିଶୋର ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ଅନ୍ତରଙ୍ଗ ସେବା ନିକଟରୁ ପାଇବାକୁ ଅଭିଳାଷ ରଖୁଛୁ, ତେବେ ତୁ ଶ୍ରୀ ସ୍ୱରୂପ ଦାମୋଦର, ଶ୍ରୀ ରୂପ ଗୋସ୍ୱାମୀ ଏବଂ ତାଙ୍କ ଜ୍ୟେଷ୍ଠଭ୍ରାତା ଶ୍ରୀ ସନାତନ ଗୋସ୍ୱାମୀ ତଥା ସେମାନଙ୍କ ସମସ୍ତ ପାର୍ଷଦଗଣଙ୍କୁ ନିତ୍ୟ ପ୍ରେମଭରେ ପ୍ରଣାମ କର ଓ ସ୍ମରଣ କର।",
                    wordMeanings: [
                        {
                            word: "ଶୃଣୁ ମନଃ",
                            meaning: "ହେ ମନ, ତୁ ଶୁଣ"
                        },
                        {
                            word: "ଯଦି ଇଚ୍ଛେଃ",
                            meaning: "ଯଦି ତୁ ଚାହୁଁଛୁ"
                        },
                        {
                            word: "ପ୍ରତି-ଜନୁଃ",
                            meaning: "ପ୍ରତ୍ୟେକ ଜନ୍ମରେ"
                        },
                        {
                            word: "ବ୍ରଜ-ଭୁବି ସ-ରାଗମ୍ ଆବାସଂ",
                            meaning: "ବ୍ରଜଭୂମିରେ ପ୍ରେମାନୁରାଗପୂର୍ଣ୍ଣ ବାସସ୍ଥାନ"
                        },
                        {
                            word: "ତତ୍ ଯୁବ-ଦ୍ୱନ୍ଦ୍ୱଂ",
                            meaning: "ସେହି ଦିବ୍ୟ ଯୁଗଳକିଶୋରଙ୍କୁ"
                        },
                        {
                            word: "ଆରାତ୍ ପରିଚରିତୁମ୍",
                            meaning: "ସାକ୍ଷାତ୍ ଅତି ନିକଟରୁ ସେବା କରିବାକୁ"
                        },
                        {
                            word: "ସ୍ୱରୂପଂ",
                            meaning: "ଶ୍ରୀଳ ସ୍ୱରୂପ ଦାମୋଦର ଗୋସ୍ୱାମୀଙ୍କୁ"
                        },
                        {
                            word: "ଶ୍ରୀ-ରୂପଂ ସ-ଗଣମ୍",
                            meaning: "ଶ୍ରୀଳ ରୂପ ଗୋସ୍ୱାମୀ ଓ ତାଙ୍କ ସଙ୍ଗୀଗଣଙ୍କୁ"
                        },
                        {
                            word: "ତସ୍ୟ ଅଗ୍ରଜମ୍ ଅପି",
                            meaning: "ତାଙ୍କ ଜ୍ୟେଷ୍ଠଭ୍ରାତା ଶ୍ରୀ ସନାତନ ଗୋସ୍ୱାମୀଙ୍କୁ ମଧ୍ୟ"
                        },
                        {
                            word: "ପ୍ରେମ୍ଣା ନିତ୍ୟଂ ସ୍ମର ନମ",
                            meaning: "ପ୍ରେମର ସହ ସର୍ବଦା ସ୍ମରଣ କର ଓ ପ୍ରଣାମ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 4,
                    lyric: "ଅସଦ୍-ବାର୍ତ୍ତା-ବେଶ୍ୟା ବିସୃଜ ମତି-ସର୍ବସ୍ୱ-ହରଣୀଃ\nକଥା ମୁକ୍ତି-ବ୍ୟାଘ୍ର୍ୟା ନ ଶୃଣୁ କିଳ ସର୍ବାତ୍ମ-ଗିଳନୀଃ ।\nଅପି ତ୍ୟକ୍ତ୍ୱା ଲକ୍ଷ୍ମୀ-ପତି-ରତିମ୍ ଇତୋ ବ୍ୟୋମ-ନୟନୀଂ\nବ୍ରଜେ ରାଧା-କୃଷ୍ଣୌ ସ୍ୱ-ରତି-ମଣି-ଦୌ ତ୍ୱଂ ଭଜ ମନଃ ॥ ୪ ॥",
                    translation: "ହେ ମନ! ବୁଦ୍ଧିର ସମସ୍ତ ସତ୍ତ୍ୱ ଚୋରି କରିନେଉଥିବା ଗ୍ରାମ୍ୟକଥା ଓ ଅସତ୍-ପ୍ରସଙ୍ଗରୂପୀ ବେଶ୍ୟାକୁ ତୁ ସମ୍ପୂର୍ଣ୍ଣ ତ୍ୟାଗ କର। ସମସ୍ତ ଭକ୍ତିଭାବକୁ ଗିଳି ପକାଉଥିବା ନିର୍ବିଶେଷ ମୁକ୍ତିରୂପୀ ବାଘୁଣୀର କଥା ଆଦୌ ଶୁଣ ନାହିଁ। ଏପରିକି ବୈକୁଣ୍ଠପତି ନାରାୟଣଙ୍କ ଐଶ୍ୱର୍ଯ୍ୟମୟ ପ୍ରେମ (ଯାହା ବୈକୁଣ୍ଠକୁ ନେଇଯାଏ) ତାହାକୁ ମଧ୍ୟ ତ୍ୟାଗ କରି, ବ୍ରଜଧାମରେ ନିଜ ପ୍ରେମରୂପୀ ଅମୂଲ୍ୟ ରତ୍ନ ପ୍ରଦାନ କରୁଥିବା ଶ୍ରୀ ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ନିତ୍ୟ ଭଜନ କର।",
                    wordMeanings: [
                        {
                            word: "ମତି-ସର୍ବସ୍ୱ-ହରଣୀଃ",
                            meaning: "ବୁଦ୍ଧିର ସକଳ ଧନ ହରଣ କରୁଥିବା"
                        },
                        {
                            word: "ଅସଦ୍-ବାର୍ତ୍ତା-ବେଶ୍ୟାଃ ବିସୃଜ",
                            meaning: "ଅସତ୍-କଥାରୂପୀ ବେଶ୍ୟାମାନଙ୍କୁ ତ୍ୟାଗ କର"
                        },
                        {
                            word: "ସର୍ବାତ୍ମ-ଗିଳନୀଃ",
                            meaning: "ଭକ୍ତିମୟ ଆତ୍ମାକୁ ଗ୍ରାସ କରୁଥିବା"
                        },
                        {
                            word: "ମୁକ୍ତି-ବ୍ୟାଘ୍ର୍ୟାଃ କଥା ନ ଶୃଣୁ",
                            meaning: "ମୁକ୍ତିରୂପୀ ବାଘୁଣୀର କଥା ଶୁଣ ନାହିଁ"
                        },
                        {
                            word: "ବ୍ୟୋମ-ନୟନୀଂ",
                            meaning: "ବୈକୁଣ୍ଠ ଆକାଶକୁ ନେଇଯାଉଥିବା"
                        },
                        {
                            word: "ଲକ୍ଷ୍ମୀ-ପତି-ରତିଂ ତ୍ୟକ୍ତ୍ୱା",
                            meaning: "ଲକ୍ଷ୍ମୀପତି ନାରାୟଣଙ୍କ ପ୍ରତି ଆସକ୍ତି ତ୍ୟାଗ କରି"
                        },
                        {
                            word: "ସ୍ୱ-ରତି-ମଣି-ଦୌ",
                            meaning: "ନିଜ ପ୍ରେମରୂପୀ ମଣିରତ୍ନ ପ୍ରଦାନ କରୁଥିବା"
                        },
                        {
                            word: "ବ୍ରଜେ ରାଧା-କୃଷ୍ଣୌ ଭଜ",
                            meaning: "ବ୍ରଜରେ ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କୁ ଭଜନ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 5,
                    lyric: "ଅସଚ୍-ଚେଷ୍ଟା-କଷ୍ଟ-ପ୍ରଦ-ବିକଟ-ପାଶାଳିଭିର୍ ଇହ\nପ୍ରକାମଂ କାମାଦି-ପ୍ରକଟ-ପଥପାତି-ବ୍ୟତିକରୈଃ ।\nଗଳେ ବଦ୍ଧ୍ୱା ହନ୍ୟେ ଽହମ୍ ଇତି ବକ-ଭିଦ୍-ବର୍ତ୍ମପ-ଗଣେ\nକୁରୁ ତ୍ୱଂ ଫୁତ୍କାରାନ୍ ଅବତି ସ ଯଥା ତ୍ୱଂ ମନ ଇତଃ ॥ ୫ ॥",
                    translation: "ହେ ମନ! କାମ, କ୍ରୋଧ ଆଦି ଡକାୟତମାନେ ଅସତ୍-କର୍ମରୂପୀ କଷ୍ଟଦାୟକ ଭୟଙ୍କର ଦଉଡ଼ିରେ ମୋ ବେକକୁ ବାନ୍ଧି ମୋତେ ହତ୍ୟା କରୁଛନ୍ତି! ତେଣୁ ତୁ ବକାସୁରନାଶକ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଭକ୍ତରୂପୀ ରାଜପଥ-ରକ୍ଷକମାନଙ୍କ ଉଦ୍ଦେଶ୍ୟରେ ଉଚ୍ଚ ସ୍ୱରରେ ଚିତ୍କାର (ଫୁତ୍କାର) କର— 'ମୁଁ ମରିଗଲି, ମୋତେ ରକ୍ଷା କର!' ଯାହାଦ୍ୱାରା ସେହି ଶ୍ରୀକୃଷ୍ଣ ଏହି ସଙ୍କଟରୁ ତୋତେ ଉଦ୍ଧାର କରିବେ।",
                    wordMeanings: [
                        {
                            word: "କାମ-ଆଦି-ପଥପାତି-ବ୍ୟତିକରୈଃ",
                            meaning: "କାମ-କ୍ରୋଧାଦି ରାଜପଥ-ଡକାୟତମାନଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            word: "ଅସତ୍-ଚେଷ୍ଟା-ପାଶାଳିଭିଃ",
                            meaning: "କୁକର୍ମରୂପୀ ଭୟଙ୍କର ପାଶ ଦ୍ୱାରା"
                        },
                        {
                            word: "ଗଳେ ବଦ୍ଧ୍ୱା",
                            meaning: "କଣ୍ଠରେ ବନ୍ଧନ କରି"
                        },
                        {
                            word: "ହନ୍ୟେ ଅହମ୍ ଇତି",
                            meaning: "'ମୁଁ ନିହତ ହେଉଛି' ବୋଲି ଭାବି"
                        },
                        {
                            word: "ବକ-ଭିତ୍-ବର୍ତ୍ମପ-ଗଣେ",
                            meaning: "ବକାସୁରହନ୍ତା କୃଷ୍ଣଙ୍କ ପାର୍ଷଦ ତଥା ପଥ-ରକ୍ଷକ ଭକ୍ତମାନଙ୍କ ନିକଟରେ"
                        },
                        {
                            word: "ଫୁତ୍କାରାନ୍ କୁରୁ",
                            meaning: "ଉଚ୍ଚ ସ୍ୱରରେ ଆର୍ତ୍ତନାଦ କର"
                        },
                        {
                            word: "ଯଥା ସ ତ୍ୱାମ୍ ଅବତି",
                            meaning: "ଯେପରି ସେ ତୋତେ ରକ୍ଷା କରିପାରିବେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 6,
                    lyric: "ଅରେ ଚେତଃ ପ୍ରୋଦ୍ୟତ୍-କପଟ-କୁଟି-ନାଟୀ-ଭର-ଖର-\nକ୍ଷରନ୍-ମୂତ୍ରେ ସ୍ନାତ୍ୱା ଦହସି କଥମ୍ ଆତ୍ମାନମ୍ ଅପି ମାମ୍ ।\nସଦା ତ୍ୱଂ ଗାନ୍ଧର୍ବା-ଗିରିଧର-ପଦ-ପ୍ରେମ-ବିଳସତ୍-\nସୁଧାମ୍ଭୋଧୌ ସ୍ନାତ୍ୱା ସ୍ୱମ୍ ଅପି ନିତରାଂ ମାଂ ଚ ସୁଖୟ ॥ ୬ ॥",
                    translation: "ଆରେ ମୋର ମନ! ତୁ କପଟତା, କୂଟନୀତି ଓ ଦମ୍ଭରୂପୀ ଗର୍ଦ୍ଦଭର ମୂତ୍ରରେ ସ୍ନାନ କରି ନିଜକୁ ଏବଂ ମୋତେ କାହିଁକି ଜଳାଇ ମାରୁଛୁ? ତୁ ସର୍ବଦା ଶ୍ରୀ ରାଧା (ଗାନ୍ଧର୍ବିକା) ଓ ଗିରିଧାରୀ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଶ୍ରୀଚରଣ-ପ୍ରେମରୂପୀ ବିଳାସମୟ ଅମୃତ-ସମୁଦ୍ରରେ ସ୍ନାନ କର ଏବଂ ନିଜ ସହିତ ମୋତେ ମଧ୍ୟ ପରମ ଆନନ୍ଦ ପ୍ରଦାନ କର।",
                    wordMeanings: [
                        {
                            word: "ଅରେ ଚେତଃ",
                            meaning: "ଆରେ ମନ"
                        },
                        {
                            word: "ପ୍ରୋଦ୍ୟତ୍-କପଟ-କୁଟି-ନାଟୀ-ଭର",
                            meaning: "ପ୍ରବଳ କପଟତା, କୂଟନୀତି ଓ ଛଳନା"
                        },
                        {
                            word: "ଖର-କ୍ଷରନ୍-ମୂତ୍ରେ ସ୍ନାତ୍ୱା",
                            meaning: "ଗଧର ମୂତ୍ରରେ ସ୍ନାନ କରି"
                        },
                        {
                            word: "କଥଂ ଦହସି",
                            meaning: "କାହିଁକି ଜ୍ୱାଳାଗ୍ରସ୍ତ କରୁଛୁ"
                        },
                        {
                            word: "ଆତ୍ମାନମ୍ ଅପି ମାମ୍",
                            meaning: "ନିଜକୁ ତଥା ମୋତେ"
                        },
                        {
                            word: "ଗାନ୍ଧର୍ବା-ଗିରିଧର-ପଦ-ପ୍ରେମ",
                            meaning: "ଶ୍ରୀ ରାଧା ଓ ଶ୍ରୀ ଗିରିଧାରୀଙ୍କ ଚରଣ-ପ୍ରେମରୂପୀ"
                        },
                        {
                            word: "ସୁଧା-ଅମ୍ଭୋଧୌ ସ୍ନାତ୍ୱା",
                            meaning: "ଅମୃତ ସାଗରରେ ସ୍ନାନ କରି"
                        },
                        {
                            word: "ସ୍ୱମ୍ ଅପି ମାଂ ଚ ସୁଖୟ",
                            meaning: "ନିଜକୁ ଓ ମୋତେ ସୁଖୀ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 7,
                    lyric: "ପ୍ରତିଷ୍ଠାଶା ଧୃଷ୍ଟା ଶ୍ୱପଚ-ରମଣୀ ମେ ହୃଦି ନଟେତ୍\nକଥଂ ସାଧୁ-ପ୍ରେମା ସ୍ପୃଶତି ଶୁଚିର୍ ଏତନ୍ ନନୁ ମନଃ ।\nସଦା ତ୍ୱଂ ସେବସ୍ୱ ପ୍ରଭୁ-ଦୟିତ-ସାମନ୍ତମ୍ ଅତୁଳଂ\nଯଥା ତାଂ ନିଷ୍କାସ୍ୟ ତ୍ୱରିତମ୍ ଇହ ତଂ ବେଶୟତି ସଃ ॥ ୭ ॥",
                    translation: "ହେ ମନ! ଯେପର୍ଯ୍ୟନ୍ତ 'ପ୍ରତିଷ୍ଠା ଓ ଯଶ'ର ଲାଳସାରୂପୀ ଧୃଷ୍ଟା ଚଣ୍ଡାଳୁଣୀ ମୋ ହୃଦୟରେ ନୃତ୍ୟ କରୁଥିବ, ସେପର୍ଯ୍ୟନ୍ତ ପବିତ୍ର ଓ ନିର୍ମଳ ସାଧୁ-ପ୍ରେମ ଏହି ହୃଦୟକୁ କିପରି ସ୍ପର୍ଶ କରିବ? ତେଣୁ ତୁ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପରମ ପ୍ରିୟ ସେନାପତି ସଦୃଶ ଅତୁଳନୀୟ ଶ୍ରୀଗୁରୁଦେବଙ୍କ ସେବା କର, ଯାହାଦ୍ୱାରା ସେ ସେହି ଚଣ୍ଡାଳୁଣୀକୁ ତୁରନ୍ତ ତଡ଼ିଦେଇ ପବିତ୍ର ଶୁଦ୍ଧପ୍ରେମକୁ ହୃଦୟରେ ପ୍ରବେଶ କରାଇବେ।",
                    wordMeanings: [
                        {
                            word: "ପ୍ରତିଷ୍ଠା-ଆଶା",
                            meaning: "ମାନ-ଯଶ-ପ୍ରତିଷ୍ଠାର ଲୋଭ"
                        },
                        {
                            word: "ଧୃଷ୍ଟା ଶ୍ୱପଚ-ରମଣୀ",
                            meaning: "ନିର୍ଲଜ୍ଜା ଚଣ୍ଡାଳୁଣୀ ସ୍ତ୍ରୀ"
                        },
                        {
                            word: "ହୃଦି ନଟେତ୍",
                            meaning: "ହୃଦୟରେ ନାଚୁଛି"
                        },
                        {
                            word: "ଶୁଚିଃ ସାଧୁ-ପ୍ରେମା",
                            meaning: "ପବିତ୍ର ଶୁଦ୍ଧ ଭଗବତ୍-ପ୍ରେମ"
                        },
                        {
                            word: "କଥଂ ସ୍ପୃଶତି",
                            meaning: "କିପରି ସ୍ପର୍ଶ କରିବ"
                        },
                        {
                            word: "ପ୍ରଭୁ-ଦୟିତ-ସାମନ୍ତମ୍",
                            meaning: "ଭଗବାନଙ୍କ ପ୍ରିୟତମ ସେନାପତି (ଶ୍ରୀଗୁରୁଦେବଙ୍କୁ)"
                        },
                        {
                            word: "ସଦା ସେବସ୍ୱ",
                            meaning: "ସର୍ବଦା ସେବା କର"
                        },
                        {
                            word: "ଯଥା ତାଂ ନିଷ୍କାସ୍ୟ",
                            meaning: "ଯେପରି ସେ ତାହାକୁ ବାହାର କରିଦେଇ"
                        },
                        {
                            word: "ତଂ ବେଶୟତି",
                            meaning: "ସେହି ଶୁଦ୍ଧପ୍ରେମକୁ ପ୍ରବେଶ କରାଇବେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 8,
                    lyric: "ଯଥା ଦୁଷ୍ଟତ୍ୱଂ ମେ ଦରୟତି ଶଠସ୍ୟାପି କୃପୟା\nଯଥା ମହ୍ୟଂ ପ୍ରେମାମୃତମ୍ ଅପି ଦଦାତ୍ୟ୍ ଉଜ୍ଜ୍ୱଳମ୍ ଅସୌ ।\nଯଥା ଶ୍ରୀ-ଗାନ୍ଧର୍ବା-ଭଜନ-ବିଧୟେ ପ୍ରେରୟତି ମାଂ\nତଥା ଗୋଷ୍ଠେ କାକ୍ୱା ଗିରିଧରମ୍ ଇହ ତ୍ୱଂ ଭଜ ମନଃ ॥ ୮ ॥",
                    translation: "ହେ ମନ! ମୁଁ ଅତ୍ୟନ୍ତ କପଟ ଓ ଶଠ ହେଲେ ମଧ୍ୟ, ଯେପରି ସେହି ପ୍ରଭୁ କୃପାପୂର୍ବକ ମୋର ସମସ୍ତ ଦୁଷ୍ଟତାକୁ ଚୂର୍ଣ୍ଣ କରିଦେବେ, ମୋତେ ଉଜ୍ଜ୍ୱଳ ପ୍ରେମାମୃତ ପ୍ରଦାନ କରିବେ ଏବଂ ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ନିତ୍ୟ ସେବାରେ ନିୟୋଜିତ କରାଇବେ— ସେହିପରି ଭାବରେ ତୁ ଏହି ବ୍ରଜଭୂମିରେ ଅତ୍ୟନ୍ତ କାକୁସ୍ଥ ହୋଇ ଶ୍ରୀ ଗିରିଧାରୀଙ୍କ ଭଜନ କର।",
                    wordMeanings: [
                        {
                            word: "ଶଠସ୍ୟ ଅପି ମେ",
                            meaning: "ମୋ ଭଳି କପଟୀର ମଧ୍ୟ"
                        },
                        {
                            word: "ଦୁଷ୍ଟତ୍ୱଂ ଦରୟତି",
                            meaning: "ଦୁଷ୍ଟତାକୁ ବିନାଶ କରିବେ"
                        },
                        {
                            word: "ମହ୍ୟମ୍ ଉଜ୍ଜ୍ୱଳଂ ପ୍ରେମାମୃତଂ ଦଦାତି",
                            meaning: "ମୋତେ ଉଜ୍ଜ୍ୱଳ ପ୍ରେମାମୃତ ପ୍ରଦାନ କରିବେ"
                        },
                        {
                            word: "ଶ୍ରୀ-ଗାନ୍ଧର୍ବା-ଭଜନ-ବିଧୟେ",
                            meaning: "ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ଭଜନ-ସେବାରେ"
                        },
                        {
                            word: "ମାଂ ପ୍ରେରୟତି",
                            meaning: "ମୋତେ ପ୍ରେରିତ କରିବେ"
                        },
                        {
                            word: "ତଥା କାକ୍ୱା",
                            meaning: "ସେହିପରି କାକୁବାଣୀ ସହ ବିନତି କରି"
                        },
                        {
                            word: "ଇହ ଗୋଷ୍ଠେ ଗିରିଧରଂ ଭଜ",
                            meaning: "ଏହି ବ୍ରଜରେ ଶ୍ରୀଗିରିଧାରୀଙ୍କୁ ଭଜନ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 9,
                    lyric: "ମଦ୍-ଈଶା-ନାଥତ୍ୱେ ବ୍ରଜ-ବିପିନ-ଚନ୍ଦ୍ରଂ ବ୍ରଜ-ବନେ-\nଶ୍ୱରୀଂ ତନ୍-ନାଥତ୍ୱେ ତଦ୍-ଅତୁଳ-ସଖୀତ୍ୱେ ତୁ ଲଳିତାମ୍ ।\nବିଶାଖାଂ ଶିକ୍ଷାଳୀ-ବିତରଣ-ଗୁରୁତ୍ୱେ ପ୍ରିୟ-ସରୋ-\nଗିରୀନ୍ଦ୍ରୌ ତତ୍-ପ୍ରେକ୍ଷା-ଲଳିତ-ରତି-ଦତ୍ୱେ ସ୍ମର ମନଃ ॥ ୯ ॥",
                    translation: "ହେ ମନ! ବ୍ରଜବନର ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ମୋର ସ୍ୱାମିନୀ ଶ୍ରୀରାଧାଙ୍କ ପ୍ରାଣନାଥ ରୂପେ, ବ୍ରଜେଶ୍ୱରୀ ଶ୍ରୀରାଧାଙ୍କୁ ତାଙ୍କର ଏକମାତ୍ର ନିୟନ୍ତ୍ରୀ ରୂପେ, ଲଳିତାସଖୀଙ୍କୁ ଉଭୟଙ୍କ ଅତୁଳନୀୟା ପ୍ରିୟସଖୀ ରୂପେ, ବିଶାଖାଙ୍କୁ ସେବା-ଶିକ୍ଷା ଦାନକାରିଣୀ ଶ୍ରେଷ୍ଠ ଗୁରୁ ରୂପେ, ଏବଂ ପ୍ରିୟ ରାଧାକୁଣ୍ଡ ଓ ଶ୍ରୀ ଗୋବର୍ଦ୍ଧନ ଗିରିରାଜଙ୍କୁ ଯୁଗଳକିଶୋରଙ୍କ ଅପୂର୍ବ ଦର୍ଶନ ଓ ପ୍ରେମ ପ୍ରଦାନକାରୀ ତୀର୍ଥ ରୂପେ ସର୍ବଦା ସ୍ମରଣ କର।",
                    wordMeanings: [
                        {
                            word: "ବ୍ରଜ-ବିପିନ-ଚନ୍ଦ୍ରଂ",
                            meaning: "ବ୍ରଜବନଚନ୍ଦ୍ର ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            word: "ମତ୍-ଈଶା-ନାଥତ୍ୱେ",
                            meaning: "ମୋର ଈଶ୍ୱରୀ ଶ୍ରୀରାଧାଙ୍କ ନାଥ ରୂପେ"
                        },
                        {
                            word: "ବ୍ରଜ-ବନ-ଈଶ୍ୱରୀଂ",
                            meaning: "ବ୍ରଜେଶ୍ୱରୀ ଶ୍ରୀରାଧାଙ୍କୁ"
                        },
                        {
                            word: "ତତ୍-ନାଥତ୍ୱେ",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କ ସ୍ୱାମିନୀ ରୂପେ"
                        },
                        {
                            word: "ଲଳିତାଂ ତଦ୍-ଅତୁଳ-ସଖୀତ୍ୱେ",
                            meaning: "ଲଳିତାଙ୍କୁ ଅତୁଳନୀୟା ସଖୀ ଭାବେ"
                        },
                        {
                            word: "ବିଶାଖାଂ ଶିକ୍ଷା-ଗୁରୁତ୍ୱେ",
                            meaning: "ବିଶାଖାଙ୍କୁ ଶିକ୍ଷାଗୁରୁ ଭାବେ"
                        },
                        {
                            word: "ପ୍ରିୟ-ସରଃ-ଗିରୀନ୍ଦ୍ରୌ",
                            meaning: "ପ୍ରିୟ ରାଧାକୁଣ୍ଡ ଓ ଗୋବର୍ଦ୍ଧନ ପର୍ବତଙ୍କୁ"
                        },
                        {
                            word: "ଲଳିତ-ରତି-ଦତ୍ୱେ ସ୍ମର",
                            meaning: "ମଧୁର ପ୍ରେମଦାତା ରୂପେ ସ୍ମରଣ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 10,
                    lyric: "ରତିଂ ଗୌରୀ-ଲୀଳେ ଅପି ତପତି ସୌନ୍ଦର୍ଯ୍ୟ-କିରଣୈଃ\nଶଚୀ-ଲକ୍ଷ୍ମୀ-ସତ୍ୟାଃ ପରିଭବତି ସୌଭାଗ୍ୟ-ବଳନୈଃ ।\nବଶୀ-କାରୈଶ୍ ଚନ୍ଦ୍ରାବଳୀ-ମୁଖ-ନବୀନ-ବ୍ରଜ-ସତୀଃ\nକ୍ଷିପତ୍ୟ୍ ଆରାଦ୍ ଯା ତାଂ ହରି-ଦୟିତ-ରାଧାଂ ଭଜ ମନଃ ॥ ୧୦ ॥",
                    translation: "ହେ ମନ! ଯିଏ ନିଜ ଅଙ୍ଗକାନ୍ତିର ସୌନ୍ଦର୍ଯ୍ୟ କିରଣରେ ରତି, ଗୌରୀ ଏବଂ ଲୀଳାଦେବୀଙ୍କ ଗର୍ବକୁ ଦଗ୍ଧ କରିଦିଅନ୍ତି; ନିଜ ଅତୁଳନୀୟ ସୌଭାଗ୍ୟ ବଳରେ ଶଚୀ, ଲକ୍ଷ୍ମୀ ଓ ସତ୍ୟଭାମାଙ୍କୁ ପରାଭୂତ କରନ୍ତି; ଏବଂ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ବଶୀଭୂତ କରିବାର ଅଦ୍ଭୁତ କଳାରେ ଚନ୍ଦ୍ରାବଳୀ ପ୍ରମୁଖ ବ୍ରଜଗୋପୀମାନଙ୍କୁ ପଛରେ ପକାଇଦିଅନ୍ତି— ଶ୍ରୀହରିଙ୍କ ସେହି ପରମା ପ୍ରିୟତମା ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କର ତୁ ଭଜନ କର।",
                    wordMeanings: [
                        {
                            word: "ସୌନ୍ଦର୍ଯ୍ୟ-କିରଣୈଃ",
                            meaning: "ରୂପସୌନ୍ଦର୍ଯ୍ୟର କିରଣ ଦ୍ୱାରା"
                        },
                        {
                            word: "ରତିଂ ଗୌରୀଂ ଲୀଳାଂ ତପତି",
                            meaning: "ରତି, ଗୌରୀ ଓ ଲୀଳାଦେବୀଙ୍କୁ ସନ୍ତପ୍ତ କରନ୍ତି"
                        },
                        {
                            word: "ସୌଭାଗ୍ୟ-ବଳନୈଃ",
                            meaning: "ସୌଭାଗ୍ୟର ବୈଭବରେ"
                        },
                        {
                            word: "ଶଚୀ-ଲକ୍ଷ୍ମୀ-ସତ୍ୟାଃ ପରିଭବତି",
                            meaning: "ଶଚୀ, ଲକ୍ଷ୍ମୀ ଓ ସତ୍ୟଭାମାଙ୍କୁ ପରାଜିତ କରନ୍ତି"
                        },
                        {
                            word: "ବଶୀ-କାରୈଃ",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ପ୍ରେମରେ ବଶୀଭୂତ କରିବାରେ"
                        },
                        {
                            word: "ଚନ୍ଦ୍ରାବଳୀ-ମୁଖ-ସତୀଃ କ୍ଷିପତି",
                            meaning: "ଚନ୍ଦ୍ରାବଳୀ ଆଦି ଗୋପୀମାନଙ୍କୁ ଅତିକ୍ରମ କରନ୍ତି"
                        },
                        {
                            word: "ହରି-ଦୟିତ-ରାଧାଂ ଭଜ",
                            meaning: "ଶ୍ରୀହରି-ପ୍ରିୟା ଶ୍ରୀରାଧାଙ୍କୁ ଭଜନ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 11,
                    lyric: "ସମଂ ଶ୍ରୀ-ରୂପେଣ ସ୍ମର-ବିବଶ-ରାଧା-ଗିରିଭୃତୋର୍\nବ୍ରଜେ ସାକ୍ଷାତ୍-ସେବା-ଲଭନ-ବିଧୟେ ତଦ୍-ଗଣ-ଯୁଜୋଃ ।\nତଦ୍-ଇଜ୍ୟାଖ୍ୟା-ଧ୍ୟାନ-ଶ୍ରବଣ-ନତି-ପଞ୍ଚାମୃତମ୍ ଇଦଂ\nଧୟନ୍ ନିତ୍ୟଂ ଗୋବର୍ଦ୍ଧନମ୍ ଅନୁଦିନଂ ତ୍ୱଂ ଭଜ ମନଃ ॥ ୧୧ ॥",
                    translation: "ହେ ମନ! ଶ୍ରୀଳ ରୂପ ଗୋସ୍ୱାମୀଙ୍କ ଆନୁଗତ୍ୟରେ ସଖୀଗଣ-ପରିବେଷ୍ଟିତ, ପ୍ରେମବିହ୍ୱଳ ଶ୍ରୀ ଶ୍ରୀ ରାଧା-ଗିରିଧାରୀଙ୍କ ସାକ୍ଷାତ୍ ସେବା ପ୍ରାପ୍ତି ନିମନ୍ତେ— ତୁ ସେମାନଙ୍କ ପୂଜା, ନାମସଂକୀର୍ତ୍ତନ, ଧ୍ୟାନ, ଶ୍ରବଣ ଏବଂ ପ୍ରଣାମରୂପୀ ଏହି ପଞ୍ଚାମୃତକୁ ନିରନ୍ତର ପାନ କରି ପ୍ରତ୍ୟେକ ଦିନ ଶ୍ରୀ ଗୋବର୍ଦ୍ଧନଙ୍କର ଭଜନ କର।",
                    wordMeanings: [
                        {
                            word: "ଶ୍ରୀ-ରୂପେଣ ସମମ୍",
                            meaning: "ଶ୍ରୀଳ ରୂପ ଗୋସ୍ୱାମୀଙ୍କ ସହିତ ମିଶି"
                        },
                        {
                            word: "ରାଧା-ଗିରିଭୃତୋଃ",
                            meaning: "ଶ୍ରୀ ରାଧା ଓ ଶ୍ରୀକୃଷ୍ଣ ଗିରିଧାରୀଙ୍କର"
                        },
                        {
                            word: "ସାକ୍ଷାତ୍-ସେବା-ଲଭନ-ବିଧୟେ",
                            meaning: "ପ୍ରତ୍ୟକ୍ଷ ସେବା ଲାଭ କରିବା ନିମନ୍ତେ"
                        },
                        {
                            word: "ଇଜ୍ୟା-ଆଖ୍ୟା-ଧ୍ୟାନ-ଶ୍ରବଣ-ନତି",
                            meaning: "ପୂଜା, ନାମକୀର୍ତ୍ତନ, ଧ୍ୟାନ, ଶ୍ରବଣ ଓ ପ୍ରଣାମରୂପୀ"
                        },
                        {
                            word: "ପଞ୍ଚାମୃତଂ ଧୟନ୍",
                            meaning: "ପଞ୍ଚାମୃତକୁ ପାନ କରି"
                        },
                        {
                            word: "ଅନୁଦିନଂ ଗୋବର୍ଦ୍ଧନଂ ଭଜ",
                            meaning: "ପ୍ରତିଦିନ ଗୋବର୍ଦ୍ଧନଙ୍କୁ ଭଜନ କର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 12,
                    lyric: "ମନଃ-ଶିକ୍ଷା-ଦୈକାଦଶକ-ବରମ୍ ଏତଂ ମଧୁରୟା\nଗିରା ଗାୟତ୍ୟ୍ ଉଚ୍ଚୈଃ ସମଧି-ଗତ-ସର୍ବାର୍ଥ-ତତି ଯଃ ।\nସ-ଯୂଥଃ ଶ୍ରୀ-ରୂପାନୁଗ ଇହ ଭବନ୍ ଗୋକୁଳ-ବନେ\nଜନୋ ରାଧା-କୃଷ୍ଣାତୁଳ-ଭଜନ-ରତ୍ନଂ ସ ଲଭତେ ॥ ୧୨ ॥",
                    translation: "ଯେଉଁ ଭକ୍ତ ମନକୁ ଶିକ୍ଷା ପ୍ରଦାନକାରୀ ଏହି ଶ୍ରେଷ୍ଠ ଏକାଦଶ ଶ୍ଳୋକର ଗୂଢ଼ ଅର୍ଥ ହୃଦୟଙ୍ଗମ କରି ଅତି ମଧୁର କଣ୍ଠରେ ଉଚ୍ଚ ସ୍ୱରରେ ଗାନ କରନ୍ତି, ସେହି ବ୍ୟକ୍ତି ଶ୍ରୀଳ ରୂପ ଗୋସ୍ୱାମୀଙ୍କ ଅନୁଗାମୀ ହୋଇ ନିଜ ସଙ୍ଗୀଗଣଙ୍କ ସହିତ ଶ୍ରୀ ଗୋକୁଳ ବୃନ୍ଦାବନରେ ଶ୍ରୀ ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ଅତୁଳନୀୟ ଦିବ୍ୟ ଭଜନରୂପୀ ରତ୍ନ ଲାଭ କରନ୍ତି।",
                    wordMeanings: [
                        {
                            word: "ଏତଂ ମନଃ-ଶିକ୍ଷା-ଏକାଦଶକ-ବରମ୍",
                            meaning: "ମନଃଶିକ୍ଷାର ଏହି ଶ୍ରେଷ୍ଠ ଏଗାରଟି ଶ୍ଳୋକକୁ"
                        },
                        {
                            word: "ସମଧିଗତ-ସର୍ବ-ଅର୍ଥ-ତତିଃ",
                            meaning: "ସମସ୍ତ ଗଭୀର ତାତ୍ପର୍ଯ୍ୟକୁ ବୁଝି"
                        },
                        {
                            word: "ମଧୁରୟା ଗିରା ଉଚ୍ଚୈଃ ଗାୟତି",
                            meaning: "ମଧୁର ବାଣୀରେ ଉଚ୍ଚ ସ୍ୱରରେ ଗାନ କରନ୍ତି"
                        },
                        {
                            word: "ଶ୍ରୀ-ରୂପ-ଅନୁଗଃ ଭବନ୍",
                            meaning: "ଶ୍ରୀଳ ରୂପ ଗୋସ୍ୱାମୀଙ୍କ ଅନୁଗାମୀ ହୋଇ"
                        },
                        {
                            word: "ସ-ଯୂଥଃ",
                            meaning: "ନିଜ ପାର୍ଷଦ/ଭକ୍ତମାନଙ୍କ ସହିତ"
                        },
                        {
                            word: "ଗୋକୁଳ-ବନେ",
                            meaning: "ଶ୍ରୀ ଗୋକୁଳ ବୃନ୍ଦାବନରେ"
                        },
                        {
                            word: "ରାଧା-କୃଷ୍ଣ-ଅତୁଳ-ଭଜନ-ରତ୍ନଂ ଲଭତେ",
                            meaning: "ଶ୍ରୀ ରାଧା-କୃଷ୍ଣଙ୍କ ଅତୁଳନୀୟ ଭଜନରୂପୀ ରତ୍ନ ପ୍ରାପ୍ତ ହୁଅନ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        id: "song-jagannathatattva",
        title: "ଜଗନ୍ନାଥ ତତ୍ତ୍ୱ (Jagannatha Tattva)",
        title_odia: "ଜଗନ୍ନାଥ ତତ୍ତ୍ୱ",
        title_english: "Jagannatha Tattva",
        category: "Songs",
        type: "html",
        author: "Vaishnava Acaryas",
        tags: [
            "Jagannatha Tattva",
            "Jagannatha",
            "Baladeva",
            "Subhadra",
            "ଜଗନ୍ନାଥ ତତ୍ତ୍ୱ",
            "ଜଗନ୍ନାଥ",
            "ବଳଦେବ",
            "ସୁଭଦ୍ରା"
        ],
        description: "ଶ୍ରୀ ଜଗନ୍ନାଥ, ବଳଦେବ ଓ ସୁଭଦ୍ରା ମହାରାଣୀଙ୍କ ଦିବ୍ୟ ତତ୍ତ୍ୱ ଓ ଜୟଗାନ ।",
        audioUrl: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_others/Jagannatha_Tattva/Jagannatha_Tattva_-_IDT.mp3",
        vocalist: "Vaishnavas",
        audioVersions: [
            {
                label: "Vaishnavas",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_others/Jagannatha_Tattva/Jagannatha_Tattva_-_IDT.mp3"
            }
        ],
        structuredContent: {
            id: "song-jagannathatattva",
            title: "ଜଗନ୍ନାଥ ତତ୍ତ୍ୱ (Jagannatha Tattva)",
            title_odia: "ଜଗନ୍ନାଥ ତତ୍ତ୍ୱ",
            title_english: "Jagannatha Tattva",
            author: "Vaishnava Acaryas",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Jagannatha%20Tattva_",
            verses: [
                {
                    id: 1,
                    lyric: "ଜୟ ଜଗନ୍ନାଥ, ଜୟ ଜଗନ୍ନାଥ, ଜୟ ଜଗନ୍ନାଥ, ଜୟ ଜଗନ୍ନାଥ ।\nଜୟ ବଳଦେବ, ଜୟ ସୁଭଦ୍ରା, ଜୟ ବଳଦେବ, ଜୟ ସୁଭଦ୍ରା ॥ ୧ ॥",
                    translation: "ଜଗତର ନାଥ ଶ୍ରୀ ଜଗନ୍ନାଥ ମହାପ୍ରଭୁଙ୍କର ଜୟ ହେଉ, ଜୟ ହେଉ ! ଶ୍ରୀ ବଳଦେବ ଏବଂ ଭଗିନୀ ସୁଭଦ୍ରାଙ୍କର ଜୟଜୟକାର ହେଉ !",
                    wordMeanings: [
                        {
                            word: "ଜୟ",
                            meaning: "ଜୟଜୟକାର, ବିଜୟୀ ହୁଅନ୍ତୁ"
                        },
                        {
                            word: "ଜଗନ୍ନାଥ",
                            meaning: "ଜଗତର ନାଥ ଶ୍ରୀ ଜଗନ୍ନାଥ ମହାପ୍ରଭୁ"
                        },
                        {
                            word: "ବଳଦେବ",
                            meaning: "ଶ୍ରୀ ବଳଭଦ୍ର / ବଳଦେବ ପ୍ରଭୁ"
                        },
                        {
                            word: "ସୁଭଦ୍ରା",
                            meaning: "ଦେବୀ ସୁଭଦ୍ରା ମାତା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ଜଗନ୍ନାଥ ସ୍ଵାମୀ ନୟନ-ପଥ-ଗାମୀ ଭବତୁ ମେ ॥ ୨ ॥",
                    translation: "ଜଗତର ନାଥ ଶ୍ରୀ ଜଗନ୍ନାଥ ମହାପ୍ରଭୁ ମୋର ନୟନ ପଥର ପଥିକ ହୁଅନ୍ତୁ (ଅର୍ଥାତ୍ ମୋ ଦୃଷ୍ଟିଗୋଚର ହୋଇ ମୋତେ ଦର୍ଶନ ଦିଅନ୍ତୁ) ।",
                    wordMeanings: [
                        {
                            word: "ଜଗନ୍ନାଥ ସ୍ଵାମୀ",
                            meaning: "ଜଗତର ପ୍ରଭୁ ଶ୍ରୀଜଗନ୍ନାଥ"
                        },
                        {
                            word: "ନୟନ-ପଥ-ଗାମୀ",
                            meaning: "ଦୃଷ୍ଟିପଥରେ ଆଗମନକାରୀ, ମୋ ଦର୍ଶନର ଗୋଚର"
                        },
                        {
                            word: "ଭବତୁ",
                            meaning: "ହୁଅନ୍ତୁ"
                        },
                        {
                            word: "ମେ",
                            meaning: "ମୋର"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 3,
                    lyric: "ବୃନ୍ଦାବନ-ଚନ୍ଦ୍ର ଆମାର ପ୍ରଭୁ ଜଗନ୍ନାଥ ।\nଜୟ ଜଗନ୍ନାଥ, ଜୟ ଜଗନ୍ନାଥ ॥\nନୀଳାଚଳ-ଚନ୍ଦ୍ର ଆମାର ପ୍ରଭୁ ଜଗନ୍ନାଥ ।\nଜୟ ଜଗନ୍ନାଥ, ଜୟ ଜଗନ୍ନାଥ ॥ ୩ ॥",
                    translation: "ଶ୍ରୀ ବୃନ୍ଦାବନର ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସ୍ୱରୂପ ଶ୍ରୀକୃଷ୍ଣ ହିଁ ମୋର ପରମ ପ୍ରଭୁ ଶ୍ରୀଜଗନ୍ନାଥ । ଜୟ ଜଗନ୍ନାଥ, ଜୟ ଜଗନ୍ନାଥ ! ଶ୍ରୀକ୍ଷେତ୍ର ନୀଳାଚଳର ଚନ୍ଦ୍ର ସ୍ୱରୂପ ଶ୍ରୀଜଗନ୍ନାଥ ହିଁ ମୋର ଏକମାତ୍ର ପ୍ରଭୁ । ଜୟ ଜଗନ୍ନାଥ, ଜୟ ଜଗନ୍ନାଥ !",
                    wordMeanings: [
                        {
                            word: "ବୃନ୍ଦାବନ-ଚନ୍ଦ୍ର",
                            meaning: "ବୃନ୍ଦାବନର ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସ୍ୱରୂପ ଶ୍ରୀକୃଷ୍ଣ"
                        },
                        {
                            word: "ଆମାର",
                            meaning: "ମୋର"
                        },
                        {
                            word: "ପ୍ରଭୁ",
                            meaning: "ପରମେଶ୍ୱର, ସ୍ୱାମୀ"
                        },
                        {
                            word: "ଜଗନ୍ନାଥ",
                            meaning: "ଶ୍ରୀ ଜଗନ୍ନାଥ ମହାପ୍ରଭୁ"
                        },
                        {
                            word: "ଜୟ",
                            meaning: "ଜୟଜୟକାର"
                        },
                        {
                            word: "ନୀଳାଚଳ-ଚନ୍ଦ୍ର",
                            meaning: "ନୀଳାଚଳ (ଶ୍ରୀକ୍ଷେତ୍ର ପୁରୀ)ର ଚନ୍ଦ୍ର ସ୍ୱରୂପ ଶ୍ରୀ ଜଗନ୍ନାଥ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 4,
                    lyric: "ଉଜ୍ଜ୍ୱଳ ହରି ଆମାର ପ୍ରଭୁ ଜଗନ୍ନାଥ ।\nଉଜ୍ଜ୍ୱଳ ହରି ଆମାର ନୟନ ପତି ॥ ୪ ॥",
                    translation: "ଉଜ୍ଜ୍ୱଳ ରସମୟ (ମଧୁର ପ୍ରେମରସରେ ଉଦ୍ଭାସିତ) ଶ୍ରୀହରି ହିଁ ମୋର ପ୍ରଭୁ ଶ୍ରୀଜଗନ୍ନାଥ । ସେହି ଦିବ୍ୟ ଉଜ୍ଜ୍ୱଳ ଶ୍ରୀହରି ହିଁ ମୋର ନୟନର ଏକମାତ୍ର ପ୍ରାଣପ୍ରିୟ ସ୍ୱାମୀ !",
                    wordMeanings: [
                        {
                            word: "ଉଜ୍ଜ୍ୱଳ",
                            meaning: "ଦିବ୍ୟ ପ୍ରକାଶମୟ, ଉଜ୍ଜ୍ୱଳ ରସମୟ (ମଧୁର ପ୍ରେମରସ)"
                        },
                        {
                            word: "ହରି",
                            meaning: "ପାପତାପହାରୀ ଶ୍ରୀହରି"
                        },
                        {
                            word: "ଆମାର",
                            meaning: "ମୋର"
                        },
                        {
                            word: "ପ୍ରଭୁ",
                            meaning: "ପରମ ସ୍ୱାମୀ"
                        },
                        {
                            word: "ଜଗନ୍ନାଥ",
                            meaning: "ଶ୍ରୀଜଗନ୍ନାଥ ମହାପ୍ରଭୁ"
                        },
                        {
                            word: "ନୟନ ପତି",
                            meaning: "ନୟନର ପ୍ରଭୁ, ଆଖିର ଏକମାତ୍ର ପ୍ରାଣପ୍ରିୟ"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        id: "song-namonamahtulasimaharani",
        title: "ନମୋ ନମଃ ତୁଲସୀ ମହାରାଣୀ (Namo Namah Tulasi Maharani)",
        title_odia: "ନମୋ ନମଃ ତୁଲସୀ ମହାରାଣୀ",
        title_english: "Namo Namah Tulasi Maharani",
        category: "Songs",
        type: "html",
        author: "Candrasekhara Kavi",
        tags: [
            "Namo Namah Tulasi Maharani",
            "Tulasi Maharani",
            "Candrasekhara Kavi",
            "Tulasi",
            "Pranama",
            "ନମୋ ନମଃ ତୁଲସୀ ମହାରାଣୀ",
            "ତୁଲସୀ ମହାରାଣୀ",
            "ତୁଲସୀ",
            "ଚନ୍ଦ୍ରଶେଖର"
        ],
        description: "କବି ଚନ୍ଦ୍ରଶେଖରଙ୍କ ବିରଚିତ ସୁପ୍ରସିଦ୍ଧ ଶ୍ରୀ ତୁଲସୀ ମହାରାଣୀ ଭଜନ ।",
        audioUrl: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_others/Namo_Namah_Tulasi_Maharani/Namo_Namah_Tulasi_Maharani_-_IDT.mp3",
        vocalist: "Vaishnavas",
        audioVersions: [
            {
                label: "Vaishnavas",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_others/Namo_Namah_Tulasi_Maharani/Namo_Namah_Tulasi_Maharani_-_IDT.mp3"
            }
        ],
        structuredContent: {
            id: "song-namonamahtulasimaharani",
            title: "ନମୋ ନମଃ ତୁଲସୀ ମହାରାଣୀ (Namo Namah Tulasi Maharani)",
            title_odia: "ନମୋ ନମଃ ତୁଲସୀ ମହାରାଣୀ",
            title_english: "Namo Namah Tulasi Maharani",
            author: "Candrasekhara Kavi",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Namo%20Namah%20Tulasi%20Maharani_Songs%20of%20Vaishnava%20Acaryas_3_11",
            verses: [
                {
                    id: 1,
                    lyric: "ନମୋ ନମଃ ତୁଲସୀ ମହାରାଣୀ, ବୃନ୍ଦେ ମହାରାଣୀ ନମୋ ନମଃ ।\nନମୋ ରେ ନମୋ ରେ ମୈୟା ନମୋ ନାରାୟଣୀ ॥ ୧ ॥",
                    translation: "ହେ ତୁଲସୀ ମହାରାଣୀ! ହେ ବୃନ୍ଦେ ମହାରାଣୀ! ଆପଣଙ୍କ ଶ୍ରୀଚରଣରେ ମୋର ବାରମ୍ବାର ପ୍ରଣାମ । ହେ ଭକ୍ତିଦାତ୍ରୀ ମାତା! ହେ ନାରାୟଣୀ! ମୁଁ ଆପଣଙ୍କୁ ପୁନଃ ପୁନଃ ପ୍ରଣାମ କରୁଛି ।",
                    wordMeanings: [
                        {
                            word: "ନମୋ ନମଃ",
                            meaning: "ବାରମ୍ବାର ପ୍ରଣାମ, ନମସ୍କାର"
                        },
                        {
                            word: "ତୁଲସୀ ମହାରାଣୀ",
                            meaning: "ଶ୍ରୀମତୀ ତୁଲସୀ ଦେବୀ, ମହାରାଣୀ"
                        },
                        {
                            word: "ବୃନ୍ଦେ ମହାରାଣୀ",
                            meaning: "ବୃନ୍ଦାବନର ଅଧିଷ୍ଠାତ୍ରୀ ବୃନ୍ଦାଦେବୀ"
                        },
                        {
                            word: "ନମୋ ରେ",
                            meaning: "ହେ ମାତା! ତୁମକୁ ପ୍ରଣାମ"
                        },
                        {
                            word: "ମୈୟା",
                            meaning: "ମାତା"
                        },
                        {
                            word: "ନାରାୟଣୀ",
                            meaning: "ଭଗବାନ ନାରାୟଣଙ୍କ ପ୍ରିୟତମା ଶକ୍ତି"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ଜାକୋ ଦରଶେ, ପରଶେ ଅଘ-ନାଶଇ\nମହିମା ବେଦ-ପୁରାଣେ ବାଖାନୀ ॥ ୨ ॥",
                    translation: "ଯାହାଙ୍କୁ କେବଳ ଦର୍ଶନ ଓ ସ୍ପର୍ଶ କଲେ ହିଁ ସମସ୍ତ ପାପ ଖଣ୍ଡନ ହୋଇଯାଏ, ସେହି ତୁଲସୀଦେବୀଙ୍କ ଅପାର ମହିମା ସମସ୍ତ ବେଦ ଓ ପୁରାଣମାନଙ୍କରେ ବିସ୍ତୃତ ଭାବେ ବର୍ଣ୍ଣିତ ହୋଇଛି ।",
                    wordMeanings: [
                        {
                            word: "ଜାକୋ",
                            meaning: "ଯାହାଙ୍କୁ"
                        },
                        {
                            word: "ଦରଶେ",
                            meaning: "ଦର୍ଶନ କଲେ"
                        },
                        {
                            word: "ପରଶେ",
                            meaning: "ସ୍ପର୍ଶ କଲେ"
                        },
                        {
                            word: "ଅଘ-ନାଶଇ",
                            meaning: "ସମସ୍ତ ପାପ ନଷ୍ଟ ହୋଇଯାଏ"
                        },
                        {
                            word: "ମହିମା",
                            meaning: "ଦିବ୍ୟ ଗୌରବ ଓ ମାହାତ୍ମ୍ୟ"
                        },
                        {
                            word: "ବେଦ-ପୁରାଣେ",
                            meaning: "ବେଦ ଏବଂ ପୁରାଣମାନଙ୍କରେ"
                        },
                        {
                            word: "ବାଖାନୀ",
                            meaning: "ବର୍ଣ୍ଣିତ ବା ପ୍ରକୀର୍ତ୍ତିତ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 3,
                    lyric: "ଜାକୋ ପତ୍ର, ମଞ୍ଜରୀ କୋମଳ ଶ୍ରୀ-ପତି-ଚରଣ-କମଲେ ଲପଟାନୀ ।\nଧନ୍ୟ ତୁଲସୀ ମୈୟା, ପୁରାଣ ତପ କିୟେ, ଶ୍ରୀ-ଶାଳଗ୍ରାମ-ମହା-ପାଟରାଣୀ ॥ ୩ ॥",
                    translation: "ଯାହାଙ୍କର ପବିତ୍ର ପତ୍ର ଏବଂ ସୁକୋମଳ ମଞ୍ଜରୀ ଲକ୍ଷ୍ମୀପତି ଶ୍ରୀଭଗବାନଙ୍କ ଚରଣକମଳରେ ସର୍ବଦା ଜଡ଼ିତ ହୋଇରହିଥାଏ । ହେ ଧନ୍ୟ ତୁଲସୀ ମାତା! ଆପଣ ପୂର୍ବରୁ କଠୋର ତପସ୍ୟା କରି ସାକ୍ଷାତ୍ ଶ୍ରୀ ଶାଳଗ୍ରାମ ଶିଳାଙ୍କର ପରମ ପ୍ରଧାନ ପାଟରାଣୀ ହେବାର ସୌଭାଗ୍ୟ ପ୍ରାପ୍ତ ହୋଇଛନ୍ତି ।",
                    wordMeanings: [
                        {
                            word: "ଜାକୋ ପତ୍ର",
                            meaning: "ଯାହାଙ୍କର ପତ୍ର"
                        },
                        {
                            word: "ମଞ୍ଜରୀ କୋମଳ",
                            meaning: "ସୁକୋମଳ ମଞ୍ଜରୀ"
                        },
                        {
                            word: "ଶ୍ରୀ-ପତି",
                            meaning: "ଲକ୍ଷ୍ମୀକାନ୍ତ ଭଗବାନ ନାରାୟଣ"
                        },
                        {
                            word: "ଚରଣ-କମଲେ ଲପଟାନୀ",
                            meaning: "ଚରଣକମଳକୁ ଆଲିଙ୍ଗନ କରି ରହେ"
                        },
                        {
                            word: "ଧନ୍ୟ ତୁଲସୀ ମୈୟା",
                            meaning: "ହେ ଧନ୍ୟ ତୁଲସୀ ମାତା"
                        },
                        {
                            word: "ପୁରାଣ ତପ କିୟେ",
                            meaning: "ପ୍ରାଚୀନ କାଳରୁ ମହାନ ତପସ୍ୟା କରି"
                        },
                        {
                            word: "ଶ୍ରୀ-ଶାଳଗ୍ରାମ",
                            meaning: "ସାକ୍ଷାତ୍ ଶାଳଗ୍ରାମ ଭଗବାନ"
                        },
                        {
                            word: "ମହା-ପାଟରାଣୀ",
                            meaning: "ପ୍ରଧାନ ମହିଷୀ ବା ପାଟରାଣୀ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 4,
                    lyric: "ଧୂପ, ଦୀପ, ନୈବେଦ୍ୟ, ଆରତୀ, ଫୁଲନା କିୟେ ବରଖା ବରଖାନୀ ।\nଛାପ୍ପାନ୍ନ ଭୋଗ, ଛତ୍ରୀଶ ବ୍ୟଞ୍ଜନ, ବିନା ତୁଲସୀ ପ୍ରଭୁ ଏକ ନାହିଁ ମାନୀ ॥ ୪ ॥",
                    translation: "ଯିଏ ଆପଣଙ୍କୁ ଧୂପ, ଦୀପ, ନୈବେଦ୍ୟ, ପୁଷ୍ପ ଏବଂ ଆରତୀ ଦ୍ୱାରା ପୂଜା କରେ, ଆପଣ ତାଙ୍କ ଉପରେ କୃପାବୃଷ୍ଟି ବର୍ଷଣ କରନ୍ତି । ଭଗବାନଙ୍କୁ ଯଦିଓ ଛପନ ଭୋଗ ଏବଂ ଛତିଶ ପ୍ରକାରର ବ୍ୟଞ୍ଜନ ଅର୍ପଣ କରାଯାଏ, କିନ୍ତୁ ତୁଲସୀ ପତ୍ର ବିନା ପ୍ରଭୁ ସେଥିରୁ ଗୋଟିଏ ହେଲେ ମଧ୍ୟ ସ୍ୱୀକାର କରନ୍ତି ନାହିଁ ।",
                    wordMeanings: [
                        {
                            word: "ଧୂପ, ଦୀପ, ନୈବେଦ୍ୟ, ଆରତୀ",
                            meaning: "ଧୂପ, ଦୀପ, ନୈବେଦ୍ୟ ଏବଂ ଆରତୀ ନିବେଦନ"
                        },
                        {
                            word: "ଫୁଲନା କିୟେ",
                            meaning: "ପୁଷ୍ପ ଅର୍ପଣ କରି"
                        },
                        {
                            word: "ବରଖା ବରଖାନୀ",
                            meaning: "କୃପାର ବୃଷ୍ଟି ବର୍ଷଣ କରନ୍ତି"
                        },
                        {
                            word: "ଛାପ୍ପାନ୍ନ ଭୋଗ",
                            meaning: "ଛପନ ପ୍ରକାରର ଭୋଗ-ନୈବେଦ୍ୟ"
                        },
                        {
                            word: "ଛତ୍ରୀଶ ବ୍ୟଞ୍ଜନ",
                            meaning: "ଛତିଶ ପ୍ରକାରର ସୁସ୍ୱାଦୁ ବ୍ୟଞ୍ଜନ"
                        },
                        {
                            word: "ବିନା ତୁଲସୀ",
                            meaning: "ତୁଲସୀ ପତ୍ର ବିନା"
                        },
                        {
                            word: "ପ୍ରଭୁ ଏକ ନାହିଁ ମାନୀ",
                            meaning: "ଭଗବାନ ଗୋଟିଏ ହେଲେ ମଧ୍ୟ ଗ୍ରହଣ କରନ୍ତି ନାହିଁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 5,
                    lyric: "ଶିବ-ଶୁକ-ନାରଦ, ଆଉର ବ୍ରହ୍ମାଦିକୋ, ଢୂରତ ଫିରତ ମହା-ମୁନି ଜ୍ଞାନୀ ।\nଚନ୍ଦ୍ରଶେଖର ମୈୟା, ତେରା ଯଶ ଗାଓୱେ, ଭକତି-ଦାନ ଦୀଜିୟେ ମହାରାଣୀ ॥ ୫ ॥",
                    translation: "ଦେବାଧିଦେବ ଶିବ, ଶୁକଦେବ, ନାରଦ, ବ୍ରହ୍ମାଦି ଦେବଗଣ ତଥା ବଡ଼ ବଡ଼ ଜ୍ଞାନୀ-ମହର୍ଷିମାନେ ଆପଣଙ୍କୁ ଭକ୍ତିଭରେ ପ୍ରଦକ୍ଷିଣ କରୁଛନ୍ତି । କବି ଚନ୍ଦ୍ରଶେଖର ପ୍ରାର୍ଥନା କରି କହୁଛନ୍ତି—ହେ ମାତା! ହେ ତୁଲସୀ ମହାରାଣୀ! ମୁଁ ଆପଣଙ୍କର ଦିବ୍ୟ ଯଶଗାନ କରୁଛି, ଦୟାକରି ମୋତେ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଚରଣରେ ଅହୈତୁକୀ ଶୁଦ୍ଧଭକ୍ତି ଦାନ କରନ୍ତୁ !",
                    wordMeanings: [
                        {
                            word: "ଶିବ-ଶୁକ-ନାରଦ",
                            meaning: "ଭଗବାନ ଶିବ, ଶ୍ରୀଳ ଶୁକଦେବ ଗୋସ୍ୱାମୀ ଏବଂ ଦେବର୍ଷି ନାରଦ"
                        },
                        {
                            word: "ଆଉର ବ୍ରହ୍ମାଦିକୋ",
                            meaning: "ଏବଂ ବ୍ରହ୍ମାଦି ଦେବତାଗଣ"
                        },
                        {
                            word: "ଢୂରତ ଫିରତ",
                            meaning: "ପରିକ୍ରମା କରୁଛନ୍ତି, ପ୍ରଦକ୍ଷିଣ କରୁଛନ୍ତି"
                        },
                        {
                            word: "ମହା-ମୁନି ଜ୍ଞାନୀ",
                            meaning: "ମହାନ ମୁନି ଏବଂ ଜ୍ଞାନୀଗଣ"
                        },
                        {
                            word: "ଚନ୍ଦ୍ରଶେଖର",
                            meaning: "କବି ଚନ୍ଦ୍ରଶେଖର"
                        },
                        {
                            word: "ମୈୟା",
                            meaning: "ହେ ମାତା"
                        },
                        {
                            word: "ତେରା ଯଶ ଗାଓୱେ",
                            meaning: "ଆପଣଙ୍କର ଯଶ ଗାନ କରୁଛି"
                        },
                        {
                            word: "ଭକତି-ଦାନ ଦୀଜିୟେ",
                            meaning: "ଶୁଦ୍ଧ ଭକ୍ତି ଦାନ କରନ୍ତୁ"
                        },
                        {
                            word: "ମହାରାଣୀ",
                            meaning: "ହେ ମହାରାଣୀ ତୁଲସୀଦେବୀ"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        id: "song-nanadravyaayojana",
        title: "ନାନା ଦ୍ରବ୍ୟ ଆୟୋଜନ - ଶ୍ରୀ ନାମ ସଂକୀର୍ତ୍ତନ ଅଧିବାସ (Nana Dravya Ayojana)",
        title_odia: "ନାନା ଦ୍ରବ୍ୟ ଆୟୋଜନ - ଶ୍ରୀ ନାମ ସଂକୀର୍ତ୍ତନ ଅଧିବାସ",
        title_english: "Nana Dravya Ayojana - Sri Nama Sankirtana Adhivasa",
        category: "Songs",
        type: "html",
        author: "Vrndavana Dasa Thakura",
        tags: [
            "Nana Dravya Ayojana",
            "Adhivasa",
            "Sri Nama Sankirtana Adhivasa",
            "Vrndavana Dasa Thakura",
            "Kirtan Mela",
            "ନାନା ଦ୍ରବ୍ୟ ଆୟୋଜନ",
            "ଅଧିବାସ",
            "ବୃନ୍ଦାବନ ଦାସ ଠାକୁର"
        ],
        description: "ଶ୍ରୀଳ ବୃନ୍ଦାବନ ଦାସ ଠାକୁରଙ୍କ ବିରଚିତ ଶ୍ରୀ ନାମ ସଂକୀର୍ତ୍ତନ ଅଧିବାସ କୀର୍ତ୍ତନ ।",
        audioUrl: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FISKCON%20Mayapur%20Kirtan%20Mela%202023%20__%20Adhivas%20Ceremony%20__%20HG%20Kamal%20Gopal%20Das.mp3",
        vocalist: "HG Kamal Gopal Das",
        audioVersions: [
            {
                label: "HG Kamal Gopal Das (Mayapur Kirtan Mela)",
                url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FISKCON%20Mayapur%20Kirtan%20Mela%202023%20__%20Adhivas%20Ceremony%20__%20HG%20Kamal%20Gopal%20Das.mp3"
            }
        ],
        structuredContent: {
            id: "song-nanadravyaayojana",
            title: "ନାନା ଦ୍ରବ୍ୟ ଆୟୋଜନ - ଶ୍ରୀ ନାମ ସଂକୀର୍ତ୍ତନ ଅଧିବାସ (Nana Dravya Ayojana)",
            title_odia: "ନାନା ଦ୍ରବ୍ୟ ଆୟୋଜନ - ଶ୍ରୀ ନାମ ସଂକୀର୍ତ୍ତନ ଅଧିବାସ",
            title_english: "Nana Dravya Ayojana - Sri Nama Sankirtana Adhivasa",
            author: "Vrndavana Dasa Thakura",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Nana%20Dravya%20Ayojana_",
            verses: [
                {
                    id: 1,
                    lyric: "ନାନା ଦ୍ରବ୍ୟ ଆୟୋଜନ, କରି କରେ ନିମନ୍ତ୍ରଣ ।\nକୃପା କରି କର ଆଗମନ ॥ ୧ ॥",
                    translation: "ଶ୍ରୀ ନାମ ସଂକୀର୍ତ୍ତନ ମହୋତ୍ସବ ନିମନ୍ତେ ନାନାବିଧ ପବିତ୍ର ଦ୍ରବ୍ୟ ଓ ଉପହାର ଆୟୋଜନ କରି ମୁଁ ସମସ୍ତଙ୍କୁ ବିନମ୍ରତାର ସହିତ ନିମନ୍ତ୍ରଣ କରୁଛି; ଆପଣମାନେ କୃପାପୂର୍ବକ ଏଠାକୁ ଆଗମନ କରନ୍ତୁ ।",
                    wordMeanings: [
                        {
                            word: "ନାନା ଦ୍ରବ୍ୟ",
                            meaning: "ବିଭିନ୍ନ ପ୍ରକାରର ପୂଜା ସାମଗ୍ରୀ ଓ ଉପକରଣ"
                        },
                        {
                            word: "ଆୟୋଜନ କରି",
                            meaning: "ସଂଗ୍ରହ ଓ ପ୍ରସ୍ତୁତ କରି"
                        },
                        {
                            word: "କରେ ନିମନ୍ତ୍ରଣ",
                            meaning: "ସାଦର ନିମନ୍ତ୍ରଣ କରୁଛି"
                        },
                        {
                            word: "କୃପା କରି",
                            meaning: "ଦୟାପରବଶ ହୋଇ"
                        },
                        {
                            word: "କର ଆଗମନ",
                            meaning: "ଏଠାକୁ ବିଜେ କରନ୍ତୁ, ଆସନ୍ତୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 2,
                    lyric: "ତୋମାରା ବୈଷ୍ଣବ ଗଣ, ମୋର ଏଇ ନିବେଦନ ।\nଦୃଷ୍ଟି କରି କର ସମାପନ ॥ ୨ ॥",
                    translation: "ହେ ପ୍ରଭୁଙ୍କର ଶୁଦ୍ଧ ବୈଷ୍ଣବଗଣ! ଆପଣମାନଙ୍କ ଚରଣରେ ମୋର ଏହି ବିନମ୍ର ନିବେଦନ ଯେ, ଆପଣମାନେ ନିଜର ଶୁଭ କୃପାଦୃଷ୍ଟି ପ୍ରଦାନ କରି ଏହି ମହୋତ୍ସବକୁ ସଫଳ ଓ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ ।",
                    wordMeanings: [
                        {
                            word: "ତୋମାରା",
                            meaning: "ଆପଣମାନେ ସମସ୍ତେ"
                        },
                        {
                            word: "ବୈଷ୍ଣବ ଗଣ",
                            meaning: "ଭଗବାନଙ୍କର ଶୁଦ୍ଧ ଭକ୍ତବୃନ୍ଦ"
                        },
                        {
                            word: "ମୋର ଏଇ ନିବେଦନ",
                            meaning: "ମୋର ଏହି ଏକମାତ୍ର ପ୍ରାର୍ଥନା"
                        },
                        {
                            word: "ଦୃଷ୍ଟି କରି",
                            meaning: "ଆପଣଙ୍କର କୃପାଦୃଷ୍ଟି ପକାଇ"
                        },
                        {
                            word: "କର ସମାପନ",
                            meaning: "ଏହି ଅଧିବାସ କାର୍ଯ୍ୟ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 3,
                    lyric: "କରି ଏତ ନିବେଦନ, ଆନିଲା ମହାନ୍ତ ଗଣ ।\nକୀର୍ତ୍ତନେର କରେ ଅଧିବାସ ॥ ୩ ॥",
                    translation: "ଏହିପରି ଭାବରେ ପ୍ରାର୍ଥନା କରି ସମସ୍ତ ଶ୍ରେଷ୍ଠ ମହାନ୍ତ ବୈଷ୍ଣବମାନଙ୍କୁ ସାଦରେ ଆମନ୍ତ୍ରଣ କରାଗଲା ଏବଂ ସମସ୍ତେ ଏକତ୍ର ହୋଇ ଶ୍ରୀ ନାମ ସଂକୀର୍ତ୍ତନର ମଙ୍ଗଳମୟ ଅଧିବାସ କାର୍ଯ୍ୟ ଆରମ୍ଭ କଲେ ।",
                    wordMeanings: [
                        {
                            word: "କରି ଏତ ନିବେଦନ",
                            meaning: "ଏପରି ବିନମ୍ର ନିବେଦନ କରି"
                        },
                        {
                            word: "ଆନିଲା",
                            meaning: "ସାଦରେ ସ୍ୱାଗତ କରି ଅଣାଗଲା"
                        },
                        {
                            word: "ମହାନ୍ତ ଗଣ",
                            meaning: "ଶ୍ରେଷ୍ଠ ମହାନୁଭବ ବୈଷ୍ଣବ ସାଧୁଗଣ"
                        },
                        {
                            word: "କୀର୍ତ୍ତନେର",
                            meaning: "ହରିନାମ ସଂକୀର୍ତ୍ତନର"
                        },
                        {
                            word: "କରେ ଅଧିବାସ",
                            meaning: "ଶୁଭ ଅଧିବାସ ମଙ୍ଗଳ କର୍ମ ସମ୍ପାଦନ କଲେ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 4,
                    lyric: "ଅନେକ ଭାଗ୍ୟର ଫଳେ, ବୈଷ୍ଣବ, ଆସିୟା ମିଳେ ।\nକାଲି ହବେ ମହୋତ୍ସବ ବିଳାସ ॥ ୪ ॥",
                    translation: "ଅନେକ ଜନ୍ମର ପୁଣ୍ୟ ଓ ମହାନ ସୌଭାଗ୍ୟ ଫଳରେ ହିଁ ଏପରି ଶୁଦ୍ଧ ବୈଷ୍ଣବମାନଙ୍କର ସଙ୍ଗ ଓ ଦର୍ଶନ ଲାଭ ହୁଏ; ସେଥିପାଇଁ ଆସନ୍ତାକାଲି ଏକ ପରମ ଆନନ୍ଦମୟ ଦିବ୍ୟ ହରିନାମ ସଂକୀର୍ତ୍ତନ ମହୋତ୍ସବ ଅନୁଷ୍ଠିତ ହେବ ।",
                    wordMeanings: [
                        {
                            word: "ଅନେକ ଭାଗ୍ୟର ଫଳେ",
                            meaning: "ଅସୀମ ସୌଭାଗ୍ୟ ବଶତଃ"
                        },
                        {
                            word: "ବୈଷ୍ଣବ ଆସିୟା ମିଳେ",
                            meaning: "ସାଧୁ ବୈଷ୍ଣବମାନଙ୍କର ସଙ୍ଗ ଓ ସମାଗମ ପ୍ରାପ୍ତ ହୁଏ"
                        },
                        {
                            word: "କାଲି ହବେ",
                            meaning: "ଆସନ୍ତା କାଲି ଅନୁଷ୍ଠିତ ହେବ"
                        },
                        {
                            word: "ମହୋତ୍ସବ ବିଳାସ",
                            meaning: "ପରମ ଆନନ୍ଦଦାୟକ ହରିନାମ ମହୋତ୍ସବ"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 5,
                    lyric: "ଶ୍ରୀ କୃଷ୍ଣେର ଲୀଳା-ଗାନ, କରିବେନ ଆସ୍ୱାଦନ ।\nପୂରିବେ ସବାର ଅଭିଳାଷ ॥ ୫ ॥",
                    translation: "ସେହି ମହୋତ୍ସବରେ ସମସ୍ତେ ଏକତ୍ର ହୋଇ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ମଧୁର ଦିବ୍ୟ ଲୀଳା-କୀର୍ତ୍ତନର ପରମ ରସ ଆସ୍ୱାଦନ କରିବେ ଏବଂ ପ୍ରତ୍ୟେକ ଭକ୍ତଙ୍କର ଦିବ୍ୟ ମନୋକାମନା ପୂର୍ଣ୍ଣ ହେବ ।",
                    wordMeanings: [
                        {
                            word: "ଶ୍ରୀ କୃଷ୍ଣେର ଲୀଳା-ଗାନ",
                            meaning: "ଶ୍ରୀକୃଷ୍ଣଙ୍କର ମଧୁର ଦିବ୍ୟ ଲୀଳା କୀର୍ତ୍ତନ"
                        },
                        {
                            word: "କରିବେନ ଆସ୍ୱାଦନ",
                            meaning: "ସମସ୍ତେ ଭକ୍ତିଭରେ ରସାସ୍ୱାଦନ କରିବେ"
                        },
                        {
                            word: "ପୂରିବେ",
                            meaning: "ପରିପୂର୍ଣ୍ଣ ହେବ"
                        },
                        {
                            word: "ସବାର ଅଭିଳାଷ",
                            meaning: "ସମସ୍ତ ଭକ୍ତଙ୍କର ମନୋବାଞ୍ଛା ବା ଆକାଙକ୍ଷା"
                        }
                    ],
                    status: "COMPLETED"
                },
                {
                    id: 6,
                    lyric: "ଶ୍ରୀ କୃଷ୍ଣ ଚୈତନ୍ୟ ଚନ୍ଦ୍ର, ସକଳ ଭକତ ବୃନ୍ଦ ।\nଗୁଣ ଗାୟ ବୃନ୍ଦାବନ ଦାସ ॥ ୬ ॥",
                    translation: "ଶ୍ରୀଳ ବୃନ୍ଦାବନ ଦାସ ଠାକୁର ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସଦୃଶ ପରମଦୟାଳୁ ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ ଏବଂ ତାହାଙ୍କର ସମସ୍ତ ଅନ୍ତରଙ୍ଗ ଭକ୍ତବୃନ୍ଦଙ୍କର ଦିବ୍ୟ ଗୁଣରାଶି ବିନମ୍ର ଭାବରେ ଗାନ କରୁଛନ୍ତି ।",
                    wordMeanings: [
                        {
                            word: "ଶ୍ରୀ କୃଷ୍ଣ ଚୈତନ୍ୟ ଚନ୍ଦ୍ର",
                            meaning: "ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସଦୃଶ ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ"
                        },
                        {
                            word: "ସକଳ ଭକତ ବୃନ୍ଦ",
                            meaning: "ତାହାଙ୍କର ସମସ୍ତ ପ୍ରିୟ ଭକ୍ତଗଣ"
                        },
                        {
                            word: "ଗୁଣ ଗାୟ",
                            meaning: "ଦିବ୍ୟ ଗୁଣଗାନ କରୁଛନ୍ତି"
                        },
                        {
                            word: "ବୃନ୍ଦାବନ ଦାସ",
                            meaning: "ଶ୍ରୀଳ ବୃନ୍ଦାବନ ଦାସ ଠାକୁର"
                        }
                    ],
                    status: "COMPLETED"
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    },
    {
        "id": "song-narasimhakavacamvaksye",
        "title": "ଶ୍ରୀ ନୃସିଂହ କବଚମ୍ (Narasimha Kavacam Vaksye)",
        "title_odia": "ଶ୍ରୀ ନୃସିଂହ କବଚମ୍",
        "title_english": "Narasimha Kavacam Vaksye",
        "category": "Songs",
        "type": "html",
        "author": "Prahalad Maharaj",
        "tags": [
            "Narasimha Kavacam Vaksye",
            "Narasimha Kavacam",
            "Sri Narasimha Kavacam",
            "Prahlada Maharaja",
            "Prahalad Maharaj",
            "Brahmanda Purana",
            "Kavacam",
            "Stotram",
            "ଶ୍ରୀ ନୃସିଂହ କବଚମ୍",
            "ନୃସିଂହ କବଚ",
            "ପ୍ରହ୍ଲାଦ ମହାରାଜ"
        ],
        "description": "ଶ୍ରୀ ବ୍ରହ୍ମାଣ୍ଡ ପୁରାଣୋକ୍ତ ଭକ୍ତରାଜ ପ୍ରହ୍ଲାଦ ମହାରାଜାଙ୍କ ବିରଚିତ ପରମ ପବିତ୍ର ଶ୍ରୀ ନୃସିଂହ କବଚମ୍ ସ୍ତୋତ୍ର ।",
        "audioUrl": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FgNiIyld6A6tO.128.mp3",
        "vocalist": "Vaishnavas",
        "audioVersions": [
            {
                "label": "Vaishnavas",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FgNiIyld6A6tO.128.mp3"
            },
            {
                "label": "HG Yasoda Kumara Prabhu",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FNARASIMHA%20KAVACHA%20STOTRA%20_%20Narasimha%20Kavacham%20with%20Lyrics%20_%20%20POWERFUL%20MANTRA%20TO%20SOLVE%20ALL%20PROBLEMS.mp3"
            },
            {
                "label": "HG Gaura Mani Mataji",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2F4QsH1wRxAmtE.128.mp3"
            },
            {
                "label": "Vaishnavas (Traditional)",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FNARASIMHA%20KAVACHA%20STOTRAM%20-%20MOST%20POWERFUL%20PRAYERS%20FOR%20PROTECTION%20WITH%20LYRICS%20_%20%E0%A4%A8%E0%A5%83%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%B9%20%E0%A4%95%E0%A4%B5%E0%A4%9A.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-narasimhakavacamvaksye",
            "title": "ଶ୍ରୀ ନୃସିଂହ କବଚମ୍ (Narasimha Kavacam Vaksye)",
            "title_odia": "ଶ୍ରୀ ନୃସିଂହ କବଚମ୍",
            "title_english": "Narasimha Kavacam Vaksye",
            "author": "Prahalad Maharaj",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Narasimha%20Kavacam%20Vaksye_",
            "verses": [
                {
                    "id": 1,
                    "lyric": "ନୃସିଂହ-କବଚଂ ବକ୍ଷ୍ୟେ ପ୍ରହ୍ଲାଦେନୋଦିତଂ ପୁରା ।\nସର୍ବ-ରକ୍ଷା-କରଂ ପୁଣ୍ୟଂ ସର୍ବୋପଦ୍ରବ-ନାଶନମ୍ ॥ ୧ ॥",
                    "translation": "ପୂର୍ବକାଳରେ ଭକ୍ତରାଜ ପ୍ରହ୍ଲାଦ ମହାରାଜାଙ୍କ ଦ୍ୱାରା ପ୍ରୋକ୍ତ ପରମ ପବିତ୍ର ଶ୍ରୀ ନୃସିଂହ-କବଚ ମୁଁ ଏବେ ବର୍ଣ୍ଣନା କରୁଛି । ଏହି କବଚ ସମସ୍ତ ପ୍ରକାରର ରକ୍ଷା ପ୍ରଦାନକାରୀ, ପରମ ପୁଣ୍ୟପ୍ରଦ ଏବଂ ସମସ୍ତ ପ୍ରକାରର ଉପଦ୍ରବ ଓ ବିପତ୍ତିକୁ ବିନାଶ କରନ୍ତା ।",
                    "wordMeanings": [
                        {
                            "word": "ନୃସିଂହ-କବଚଂ ବକ୍ଷ୍ୟେ",
                            "meaning": "ଶ୍ରୀ ନୃସିଂହ କବଚ ବର୍ଣ୍ଣନା କରୁଛି"
                        },
                        {
                            "word": "ପ୍ରହ୍ଲାଦେନ ଉଦିତଂ ପୁରା",
                            "meaning": "ପୂର୍ବେ ପ୍ରହ୍ଲାଦ ମହାରାଜାଙ୍କ ଦ୍ୱାରା କଥିତ"
                        },
                        {
                            "word": "ସର୍ବ-ରକ୍ଷା-କରଂ",
                            "meaning": "ସମସ୍ତ ପ୍ରକାର ରକ୍ଷା ବିଧାନକାରୀ"
                        },
                        {
                            "word": "ପୁଣ୍ୟଂ",
                            "meaning": "ପରମ ପବିତ୍ର ଓ ପୁଣ୍ୟଦାୟକ"
                        },
                        {
                            "word": "ସର୍ବ-ଉପଦ୍ରବ-ନାଶନମ୍",
                            "meaning": "ସମସ୍ତ ବିପଦ ଓ ଉପଦ୍ରବ ବିନାଶକାରୀ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 2,
                    "lyric": "ସର୍ବ-ସମ୍ପତ୍-କରଂ ଚୈବ ସ୍ୱର୍ଗ-ମୋକ୍ଷ-ପ୍ରଦାୟକମ୍ ।\nଧ୍ୟାତ୍ୱା ନୃସିଂହଂ ଦେବେଶଂ ହେମ-ସିଂହାସନ-ସ୍ଥିତମ୍ ॥ ୨ ॥",
                    "translation": "ଏହି କବଚ ସମସ୍ତ ସମ୍ପଦ ପ୍ରଦାନକାରୀ ତଥା ସ୍ୱର୍ଗ ଓ ମୋକ୍ଷର ଦାତା । ସୁବର୍ଣ୍ଣ ସିଂହାସନରେ ବିରାଜମାନ ଦେବାଧିଦେବ ଶ୍ରୀ ନୃସିଂହ ଭଗବାନଙ୍କୁ ଧ୍ୟାନ କରି ଏହି କବଚ ପାଠ କରିବା ଉଚିତ ।",
                    "wordMeanings": [
                        {
                            "word": "ସର୍ବ-ସମ୍ପତ୍-କରଂ",
                            "meaning": "ସମସ୍ତ ଐଶ୍ୱର୍ଯ୍ୟ ଓ ସମ୍ପଦ ପ୍ରଦାନକାରୀ"
                        },
                        {
                            "word": "ସ୍ୱର୍ଗ-ମୋକ୍ଷ-ପ୍ରଦାୟକମ୍",
                            "meaning": "ସ୍ୱର୍ଗ ଏବଂ ମୁକ୍ତି ଦାୟକ"
                        },
                        {
                            "word": "ଧ୍ୟାତ୍ୱା ନୃସିଂହଂ ଦେବେଶଂ",
                            "meaning": "ଦେବତାମାନଙ୍କ ଈଶ୍ୱର ଶ୍ରୀନୃସିଂହଙ୍କୁ ଧ୍ୟାନ କରି"
                        },
                        {
                            "word": "ହେମ-ସିଂହାସନ-ସ୍ଥିତମ୍",
                            "meaning": "ସୁବର୍ଣ୍ଣ ସିଂହାସନରେ ଉପବିଷ୍ଟ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 3,
                    "lyric": "ବିବୃତାସ୍ୟଂ ତ୍ରି-ନୟନଂ ଶରଦ୍-ଇନ୍ଦୁ-ସମ-ପ୍ରଭମ୍ ।\nଲକ୍ଷ୍ମ୍ୟାଲିଙ୍ଗିତ-ବାମାଙ୍ଗଂ ବିଭୂତିଭିର୍ ଉପାଶ୍ରିତମ୍ ॥ ୩ ॥",
                    "translation": "ଯାହାଙ୍କର ମୁଖ ବିସ୍ତାରିତ, ଯେ ତ୍ରିନେତ୍ରଧାରୀ, ଶରତକାଳୀନ ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର ସଦୃଶ ତେଜୋମୟ, ଯାହାଙ୍କର ବାମ ଅଙ୍ଗକୁ ଲକ୍ଷ୍ମୀଦେବୀ ଆଲିଙ୍ଗନ କରିଛନ୍ତି ଏବଂ ଯେ ସମସ୍ତ ଦିବ୍ୟ ବିଭୂତି ଓ ଐଶ୍ୱର୍ଯ୍ୟର ପରମ ଆଶ୍ରୟସ୍ଥଳ ।",
                    "wordMeanings": [
                        {
                            "word": "ବିବୃତ-ଆସ୍ୟଂ",
                            "meaning": "ପ୍ରସାରିତ ବା ଖୋଲା ମୁଖ ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ତ୍ରି-ନୟନଂ",
                            "meaning": "ତିନୋଟି ନେତ୍ରଧାରୀ"
                        },
                        {
                            "word": "ଶରଦ୍-ଇନ୍ଦୁ-ସମ-ପ୍ରଭମ୍",
                            "meaning": "ଶରତ ଚନ୍ଦ୍ର ସଦୃଶ ଦୀପ୍ତିମନ୍ତ"
                        },
                        {
                            "word": "ଲକ୍ଷ୍ମ୍ୟା ଆଲିଙ୍ଗିତ-ବାମ-ଅଙ୍ଗଂ",
                            "meaning": "ଲକ୍ଷ୍ମୀଦେବୀଙ୍କ ଦ୍ୱାରା ଆଲିଙ୍ଗିତ ବାମ ପାର୍ଶ୍ୱ"
                        },
                        {
                            "word": "ବିଭୂତିଭିଃ ଉପାଶ୍ରିତମ୍",
                            "meaning": "ସମସ୍ତ ଐଶ୍ୱର୍ଯ୍ୟର ଆଶ୍ରୟସ୍ଥଳ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 4,
                    "lyric": "ଚତୁର୍-ଭୁଜଂ କୋମଲାଙ୍ଗଂ ସ୍ୱର୍ଣ୍ଣ-କୁଣ୍ଡଳ-ଶୋଭିତମ୍ ।\nସରୋଜ-ଶୋଭିତୋରସ୍କଂ ରତ୍ନ-କେୟୂର-ମୁଦ୍ରିତମ୍ ॥ ୪ ॥",
                    "translation": "ଯେ ଚତୁର୍ଭୁଜ, କୋମଳ ଶ୍ରୀଅଙ୍ଗଧାରୀ, ସୁବର୍ଣ୍ଣ କୁଣ୍ଡଳରେ ଶୋଭିତ, ଯାହାଙ୍କର ବିଶାଳ ବକ୍ଷସ୍ଥଳ ପଦ୍ମମାଳାରେ ସୁଶୋଭିତ ଏବଂ ଭୁଜଦଣ୍ଡ ରତ୍ନଖଚିତ ବାଜୁବନ୍ଧରେ ଅଳଙ୍କୃତ ।",
                    "wordMeanings": [
                        {
                            "word": "ଚତୁର୍-ଭୁଜଂ",
                            "meaning": "ଚାରୋଟି ଭୁଜ ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "କୋମଲ-ଅଙ୍ଗଂ",
                            "meaning": "କୋମଳ ଶ୍ରୀଅଙ୍ଗ"
                        },
                        {
                            "word": "ସ୍ୱର୍ଣ୍ଣ-କୁଣ୍ଡଳ-ଶୋଭିତମ୍",
                            "meaning": "ସୁନା କୁଣ୍ଡଳରେ ସୁଶୋଭିତ"
                        },
                        {
                            "word": "ସରୋଜ-ଶୋଭିତ-ଉରସ୍କଂ",
                            "meaning": "ପଦ୍ମଫୁଲରେ ଶୋଭିତ ବକ୍ଷସ୍ଥଳ"
                        },
                        {
                            "word": "ରତ୍ନ-କେୟୂର-ମୁଦ୍ରିତମ୍",
                            "meaning": "ରତ୍ନଖଚିତ ବାଜୁବନ୍ଧରେ ଅଳଙ୍କୃତ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 5,
                    "lyric": "ତପ୍ତ-କାଞ୍ଚନ-ସଙ୍କାଶଂ ପୀତ-ନିର୍ମଳ-ବାସସମ୍ ।\nଇନ୍ଦ୍ରାଦି-ସୁର-ମୌଳିସ୍ଥ-ସ୍ଫୁରନ୍-ମାଣିକ୍ୟ-ଦୀପ୍ତିଭିଃ ॥ ୫ ॥",
                    "translation": "ଯାହାଙ୍କର କାନ୍ତି ତପ୍ତ କାଞ୍ଚନ ସଦୃଶ ଉଜ୍ଜ୍ୱଳ, ଯେ ନିର୍ମଳ ପୀତବସ୍ତ୍ର ପରିହିତ ଏବଂ ଇନ୍ଦ୍ରାଦି ଦେବତାମାନଙ୍କ ମୁକୁଟସ୍ଥିତ ଚମକପୂର୍ଣ୍ଣ ମାଣିକ୍ୟର ଦୀପ୍ତିରେ ପୂଜିତ ।",
                    "wordMeanings": [
                        {
                            "word": "ତପ୍ତ-କାଞ୍ଚନ-ସଙ୍କାଶଂ",
                            "meaning": "ତରଳିତ ସୁବର୍ଣ୍ଣ ସଦୃଶ ଉଜ୍ଜ୍ୱଳ"
                        },
                        {
                            "word": "ପୀତ-ନିର୍ମଳ-ବାସସମ୍",
                            "meaning": "ପବିତ୍ର ପୀତବସ୍ତ୍ର ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ଇନ୍ଦ୍ର-ଆଦି-ସୁର",
                            "meaning": "ଇନ୍ଦ୍ର ପ୍ରମୁଖ ଦେବତାଗଣ"
                        },
                        {
                            "word": "ମୌଳିସ୍ଥ",
                            "meaning": "ମୁକୁଟରେ ଥିବା"
                        },
                        {
                            "word": "ସ୍ଫୁରନ୍-ମାଣିକ୍ୟ-ଦୀପ୍ତିଭିଃ",
                            "meaning": "ଝଟକୁଥିବା ମାଣିକ୍ୟ ରତ୍ନର ଜ୍ୟୋତି"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 6,
                    "lyric": "ବିରାଜିତ-ପଦ-ଦ୍ୱନ୍ଦ୍ୱଂ ଶଙ୍ଖ-ଚକ୍ରାଦି-ହେତିଭିଃ ।\nଗରୁତ୍ମତା ସବିନୟଂ ସ୍ତୂୟମାନଂ ମୁଦାନ୍ୱିତମ୍ ॥ ୬ ॥",
                    "translation": "ଯାହାଙ୍କର ଚରଣଯୁଗଳ ଅତି ମନୋହର ରୂପେ ଶୋଭାୟମାନ, ଯେ ଶଙ୍ଖ, ଚକ୍ର ଇତ୍ୟାଦି ଦିବ୍ୟ ଆୟୁଧ ଧାରଣ କରିଛନ୍ତି ଏବଂ ଗରୁଡ଼ଙ୍କ ଦ୍ୱାରା ଅତି ବିନମ୍ରତାର ସହିତ ଆନନ୍ଦପୂର୍ବକ ସ୍ତୁତି ପ୍ରାପ୍ତ ହେଉଛନ୍ତି ।",
                    "wordMeanings": [
                        {
                            "word": "ବିରାଜିତ-ପଦ-ଦ୍ୱନ୍ଦ୍ୱଂ",
                            "meaning": "ଶୋଭାୟମାନ ଚରଣଯୁଗଳ"
                        },
                        {
                            "word": "ଶଙ୍ଖ-ଚକ୍ର-ଆଦି-ହେତିଭିଃ",
                            "meaning": "ଶଙ୍ଖ, ଚକ୍ର ଆଦି ଅସ୍ତ୍ରଶସ୍ତ୍ରରେ"
                        },
                        {
                            "word": "ଗରୁତ୍ମତା",
                            "meaning": "ପକ୍ଷୀରାଜ ଗରୁଡ଼ଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ସବିନୟଂ",
                            "meaning": "ବିନମ୍ରତାର ସହିତ"
                        },
                        {
                            "word": "ସ୍ତୂୟମାନଂ",
                            "meaning": "ସ୍ତୁତିଗାନ କରାଯାଉଥିବା"
                        },
                        {
                            "word": "ମୁଦାନ୍ୱିତମ୍",
                            "meaning": "ପରମ ଆନନ୍ଦଯୁକ୍ତ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 7,
                    "lyric": "ସ୍ୱ-ହୃତ୍-କମଳ-ସଂବାସଂ କୃତ୍ୱା ତୁ କବଚଂ ପଠେତ୍ ।\nନୃସିଂହୋ ମେ ଶିରଃ ପାତୁ ଲୋକ-ରକ୍ଷାତ୍ମ-ସମ୍ଭବଃ ॥ ୭ ॥",
                    "translation": "ନିଜ ହୃଦୟ-କମଳରେ ଶ୍ରୀନୃସିଂହଦେବଙ୍କୁ ବିରାଜମାନ କରାଇ ଏହି କବଚ ପାଠ କରିବ: ସମସ୍ତ ଲୋକଙ୍କ ରକ୍ଷା ନିମନ୍ତେ ଅବତରିତ ଶ୍ରୀନୃସିଂହ ମୋର ମସ୍ତକକୁ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ସ୍ୱ-ହୃତ୍-କମଳ-ସଂବାସଂ କୃତ୍ୱା",
                            "meaning": "ନିଜ ହୃଦୟ ପଦ୍ମରେ ସ୍ଥାପନ କରି"
                        },
                        {
                            "word": "କବଚଂ ପଠେତ୍",
                            "meaning": "କବଚ ପାଠ କରିବ"
                        },
                        {
                            "word": "ନୃସିଂହୋ ମେ ଶିରଃ ପାତୁ",
                            "meaning": "ଶ୍ରୀ ନୃସିଂହ ମୋର ମସ୍ତକକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଲୋକ-ରକ୍ଷା-ଆତ୍ମ-ସମ୍ଭବଃ",
                            "meaning": "ଜଗତର ରକ୍ଷା ପାଇଁ ପ୍ରକଟ ହୋଇଥିବା ପ୍ରଭୁ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 8,
                    "lyric": "ସର୍ବଗୋଽପି ସ୍ତମ୍ଭ-ବାସଃ ଫାଲଂ ମେ ରକ୍ଷତୁ ଧ୍ୱନିମ୍ ।\nନୃସିଂହୋ ମେ ଦୃଶୌ ପାତୁ ସୋମ-ସୂର୍ଯ୍ୟାଗ୍ନି-ଲୋଚନଃ ॥ ୮ ॥",
                    "translation": "ଯଦିଓ ସର୍ବବ୍ୟାପୀ ତଥାପି ସ୍ତମ୍ଭ ମଧ୍ୟରେ ପ୍ରକଟ ହୋଇଥିବା ପ୍ରଭୁ ମୋର କପାଳ ଓ ବାଣୀକୁ ରକ୍ଷା କରନ୍ତୁ । ଚନ୍ଦ୍ର, ସୂର୍ଯ୍ୟ ଓ ଅଗ୍ନି ସ୍ୱରୂପ ତିନୋଟି ନେତ୍ରଧାରୀ ଶ୍ରୀ ନୃସିଂହ ମୋର ନେତ୍ରଦ୍ୱୟକୁ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ସର୍ବଗଃ ଅପି",
                            "meaning": "ସର୍ବବ୍ୟାପୀ ହୋଇ ମଧ୍ୟ"
                        },
                        {
                            "word": "ସ୍ତମ୍ଭ-ବାସଃ",
                            "meaning": "ସ୍ତମ୍ଭରେ ବାସ କରୁଥିବା"
                        },
                        {
                            "word": "ଫାଲଂ ମେ ରକ୍ଷତୁ",
                            "meaning": "ମୋର କପାଳକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଧ୍ୱନିମ୍",
                            "meaning": "ମୋର ବାଣୀ ବା ଧ୍ୱନିକୁ"
                        },
                        {
                            "word": "ଦୃଶୌ ପାତୁ",
                            "meaning": "ଦୁଇ ଆଖିକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ସୋମ-ସୂର୍ଯ୍ୟ-ଅଗ୍ନି-ଲୋଚନଃ",
                            "meaning": "ଚନ୍ଦ୍ର, ସୂର୍ଯ୍ୟ ଓ ଅଗ୍ନିରୂପୀ ତିନୋଟି ଚକ୍ଷୁଧାରୀ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 9,
                    "lyric": "ସ୍ମୃତିଂ ମେ ପାତୁ ନୃହରିର୍ ମୁନି-ବର୍ଯ୍ୟ-ସ୍ତୁତି-ପ୍ରିୟଃ ।\nନାସାଂ ମେ ସିଂହ-ନାସସ୍ ତୁ ମୁଖଂ ଲକ୍ଷ୍ମୀ-ମୁଖ-ପ୍ରିୟଃ ॥ ୯ ॥",
                    "translation": "ଶ୍ରେଷ୍ଠ ମୁନିଗଣଙ୍କ ସ୍ତୁତିରେ ପ୍ରସନ୍ନ ହେଉଥିବା ଶ୍ରୀ ନୃହରି ମୋର ସ୍ମୃତିଶକ୍ତିକୁ ରକ୍ଷା କରନ୍ତୁ । ସିଂହ-ନାସିକାଧାରୀ ପ୍ରଭୁ ମୋର ନାସିକାକୁ ଏବଂ ଲକ୍ଷ୍ମୀଦେବୀଙ୍କ ମୁଖକମଳ ପ୍ରତି ଅନୁରାଗୀ ପ୍ରଭୁ ମୋର ମୁଖକୁ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ସ୍ମୃତିଂ ମେ ପାତୁ",
                            "meaning": "ମୋର ସ୍ମରଣଶକ୍ତିକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ନୃହରିଃ",
                            "meaning": "ଶ୍ରୀ ନୃସିଂହ ଭଗବାନ"
                        },
                        {
                            "word": "ମୁନି-ବର୍ଯ୍ୟ-ସ୍ତୁତି-ପ୍ରିୟଃ",
                            "meaning": "ଶ୍ରେଷ୍ଠ ମୁନିମାନଙ୍କ ସ୍ତୁତିରେ ପ୍ରିୟ"
                        },
                        {
                            "word": "ନାସାଂ ମେ ସିଂହ-ନାସଃ",
                            "meaning": "ସିଂହ ସଦୃଶ ନାକ ଥିବା ପ୍ରଭୁ ମୋ ନାସିକାକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ମୁଖଂ ଲକ୍ଷ୍ମୀ-ମୁଖ-ପ୍ରିୟଃ",
                            "meaning": "ମାତା ଲକ୍ଷ୍ମୀଙ୍କ ପ୍ରିୟତମ ପ୍ରଭୁ ମୋ ମୁଖକୁ ରକ୍ଷା କରନ୍ତୁ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 10,
                    "lyric": "ସର୍ବ-ବିଦ୍ୟାଧିପଃ ପାତୁ ନୃସିଂହୋ ରସନାଂ ମମ ।\nବକ୍ତ୍ରଂ ପାତ୍ୱ୍ ଇନ୍ଦୁ-ବଦନଃ ସଦା ପ୍ରହ୍ଲାଦ-ବନ୍ଦିତଃ ॥ ୧୦ ॥",
                    "translation": "ସମସ୍ତ ବିଦ୍ୟାର ଅଧୀଶ୍ୱର ଶ୍ରୀ ନୃସିଂହ ମୋର ଜିହ୍ୱାକୁ ରକ୍ଷା କରନ୍ତୁ । ଚନ୍ଦ୍ରମୁଖୀ ତଥା ପ୍ରହ୍ଲାଦ ମହାରାଜଙ୍କ ଦ୍ୱାରା ନିରନ୍ତର ବନ୍ଦିତ ପ୍ରଭୁ ମୋର ଆନନକୁ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ସର୍ବ-ବିଦ୍ୟା-ଅଧିପଃ",
                            "meaning": "ସମସ୍ତ ବିଦ୍ୟାର ପ୍ରଭୁ"
                        },
                        {
                            "word": "ରସନାଂ ମମ ପାତୁ",
                            "meaning": "ମୋର ଜିହ୍ୱାକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ବକ୍ତ୍ରଂ ପାତୁ",
                            "meaning": "ମୋ ମୁଖମଣ୍ଡଳକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଇନ୍ଦୁ-ବଦନଃ",
                            "meaning": "ଚନ୍ଦ୍ର ସଦୃଶ ଶୋଭାୟମାନ ମୁଖ"
                        },
                        {
                            "word": "ସଦା ପ୍ରହ୍ଲାଦ-ବନ୍ଦିତଃ",
                            "meaning": "ସର୍ବଦା ଭକ୍ତ ପ୍ରହ୍ଲାଦଙ୍କ ଦ୍ୱାରା ପୂଜିତ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 11,
                    "lyric": "ନୃସିଂହଃ ପାତୁ ମେ କଣ୍ଠଂ ସ୍କନ୍ଧୌ ଭୂ-ଭରଣାନ୍ତକୃତ୍ ।\nଦିବ୍ୟାସ୍ତ୍ର-ଶୋଭିତ-ଭୁଜୋ ନୃସିଂହଃ ପାତୁ ମେ ଭୁଜୌ ॥ ୧୧ ॥",
                    "translation": "ଶ୍ରୀ ନୃସିଂହ ମୋର କଣ୍ଠକୁ ରକ୍ଷା କରନ୍ତୁ । ପୃଥିବୀର ଭାରହରଣକାରୀ ପ୍ରଭୁ ମୋର ଦୁଇ ସ୍କନ୍ଧକୁ ଏବଂ ଦିବ୍ୟ ଅସ୍ତ୍ରଶସ୍ତ୍ରରେ ସୁଶୋଭିତ ଭୁଜଦଣ୍ଡ ବିଶିଷ୍ଟ ଶ୍ରୀ ନୃସିଂହ ମୋର ବାହୁଯୁଗଳକୁ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "କଣ୍ଠଂ ପାତୁ",
                            "meaning": "କଣ୍ଠକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ସ୍କନ୍ଧୌ",
                            "meaning": "ଦୁଇ କାନ୍ଧକୁ"
                        },
                        {
                            "word": "ଭୂ-ଭରଣ-ଅନ୍ତକୃତ୍",
                            "meaning": "ପୃଥିବୀର ଭାର ବିନାଶକାରୀ"
                        },
                        {
                            "word": "ଦିବ୍ୟ-ଅସ୍ତ୍ର-ଶୋଭିତ-ଭୁଜଃ",
                            "meaning": "ଦିବ୍ୟ ଅସ୍ତ୍ରରେ ଶୋଭିତ ବାହୁ"
                        },
                        {
                            "word": "ଭୁଜୌ ପାତୁ",
                            "meaning": "ଦୁଇ ଭୁଜକୁ ରକ୍ଷା କରନ୍ତୁ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 12,
                    "lyric": "କରୌ ମେ ଦେବ-ବରଦୋ ନୃସିଂହଃ ପାତୁ ସର୍ବତଃ ।\nହୃଦୟଂ ଯୋଗି-ସାଧ୍ୟଶ୍ ଚ ନିବାସଂ ପାତୁ ମେ ହରିଃ ॥ ୧୨ ॥",
                    "translation": "ଦେବତାମାନଙ୍କୁ ବର ପ୍ରଦାନକାରୀ ଶ୍ରୀ ନୃସିଂହ ମୋର ଦୁଇ ହସ୍ତକୁ ତଥା ସର୍ବଦିଗରୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ । ଯୋଗୀମାନଙ୍କ ଦ୍ୱାରା ପ୍ରାପ୍ୟ ପ୍ରଭୁ ମୋର ହୃଦୟକୁ ଏବଂ ଶ୍ରୀହରି ମୋର ବାସସ୍ଥାନକୁ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "କରୌ ମେ",
                            "meaning": "ମୋର ଦୁଇ ହାତକୁ"
                        },
                        {
                            "word": "ଦେବ-ବରଦଃ",
                            "meaning": "ଦେବତାମାନଙ୍କୁ ବରଦାତା"
                        },
                        {
                            "word": "ପାତୁ ସର୍ବତଃ",
                            "meaning": "ସର୍ବତୋଭାବେ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ହୃଦୟଂ ଯୋଗି-ସାଧ୍ୟଃ",
                            "meaning": "ଯୋଗୀମାନଙ୍କ ଦ୍ୱାରା ପ୍ରାପ୍ୟ ପ୍ରଭୁ ହୃଦୟକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ନିବାସଂ ପାତୁ ମେ ହରିଃ",
                            "meaning": "ଶ୍ରୀହରି ମୋର ଘର ବା ନିବାସକୁ ରକ୍ଷା କରନ୍ତୁ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 13,
                    "lyric": "ମଧ୍ୟଂ ପାତୁ ହିରଣ୍ୟାକ୍ଷ-ବକ୍ଷଃ-କୁକ୍ଷି-ବିଦାରଣଃ ।\nନାଭିଂ ମେ ପାତୁ ନୃହରିଃ ସ୍ୱ-ନାଭି-ବ୍ରହ୍ମ-ସଂସ୍ତୁତଃ ॥ ୧୩ ॥",
                    "translation": "ଦୈତ୍ୟ ହିରଣ୍ୟକଶିପୁର ବକ୍ଷ ଓ ଉଦରକୁ ବିଦୀର୍ଣ୍ଣ କରିଥିବା ପ୍ରଭୁ ମୋର ମଧ୍ୟଭାଗକୁ ରକ୍ଷା କରନ୍ତୁ । ନିଜ ନାଭିକମଳରୁ ଉତ୍ପନ୍ନ ବ୍ରହ୍ମାଙ୍କ ଦ୍ୱାରା ସ୍ତୁତ ଶ୍ରୀ ନୃହରି ମୋର ନାଭିକୁ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ମଧ୍ୟଂ ପାତୁ",
                            "meaning": "ଶରୀରର ମଧ୍ୟଭାଗକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ହିରଣ୍ୟାକ୍ଷ-ବକ୍ଷଃ-କୁକ୍ଷି-ବିଦାରଣଃ",
                            "meaning": "ଦୈତ୍ୟର ବକ୍ଷ ଓ ପେଟ ବିଦାରଣକାରୀ"
                        },
                        {
                            "word": "ନାଭିଂ ମେ ପାତୁ",
                            "meaning": "ମୋର ନାଭିକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ସ୍ୱ-ନାଭି-ବ୍ରହ୍ମ-ସଂସ୍ତୁତଃ",
                            "meaning": "ନିଜ ନାଭିଜାତ ବ୍ରହ୍ମାଙ୍କ ଦ୍ୱାରା ସ୍ତୁତିପ୍ରାପ୍ତ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 14,
                    "lyric": "ବ୍ରହ୍ମାଣ୍ଡ-କୋଟୟଃ କଟ୍ୟାଂ ଯସ୍ୟାସୌ ପାତୁ ମେ କଟିମ୍ ।\nଗୁହ୍ୟଂ ମେ ପାତୁ ଗୁହ୍ୟାନାଂ ମନ୍ତ୍ରାଣାଂ ଗୁହ୍ୟ-ରୂପ-ଧୃକ୍ ॥ ୧୪ ॥",
                    "translation": "ଯାହାଙ୍କ କଟିପ୍ରଦେଶରେ କୋଟି କୋଟି ବ୍ରହ୍ମାଣ୍ଡ ଅବସ୍ଥିତ, ସେହି ପ୍ରଭୁ ମୋର କଟିକୁ ରକ୍ଷା କରନ୍ତୁ । ସମସ୍ତ ଗୁପ୍ତ ମନ୍ତ୍ରର ଗୋପନୀୟ ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ ମୋର ଗୁହ୍ୟାଙ୍ଗକୁ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ବ୍ରହ୍ମାଣ୍ଡ-କୋଟୟଃ କଟ୍ୟାଂ",
                            "meaning": "ଯାହାଙ୍କ କଟିରେ କୋଟିକୋଟି ବ୍ରହ୍ମାଣ୍ଡ ଅବସ୍ଥିତ"
                        },
                        {
                            "word": "ପାତୁ ମେ କଟିମ୍",
                            "meaning": "ମୋ କଟିଦେଶକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଗୁହ୍ୟଂ ମେ ପାତୁ",
                            "meaning": "ଗୋପନୀୟ ଅଙ୍ଗକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ମନ୍ତ୍ରାଣାଂ ଗୁହ୍ୟ-ରୂପ-ଧୃକ୍",
                            "meaning": "ମନ୍ତ୍ରମାନଙ୍କର ଗୂଢ଼ ରୂପ ଧାରଣ କରିଥିବା"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 15,
                    "lyric": "ଊରୂ ମନୋଭବଃ ପାତୁ ଜାନୁନୀ ନର-ରୂପ-ଧୃକ୍ ।\nଜଙ୍ଘେ ପାତୁ ଧରା-ଭାର-ହର୍ତ୍ତା ଯୋଽସୌ ନୃ-କେସରୀ ॥ ୧୫ ॥",
                    "translation": "ପରମ ଆକର୍ଷକ କାମଦେବ-ସ୍ୱରୂପ ପ୍ରଭୁ ମୋର ଦୁଇ ଊରୁକୁ ରକ୍ଷା କରନ୍ତୁ । ନରରୂପ ଧାରଣକାରୀ ପ୍ରଭୁ ମୋର ଆଣ୍ଠୁଯୁଗଳକୁ ଏବଂ ପୃଥିବୀର ଭାରହରଣକାରୀ ଶ୍ରୀ ନୃସିଂହ ମୋର ଦୁଇ ଜଙ୍ଘାକୁ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ଊରୂ ମନୋଭବଃ ପାତୁ",
                            "meaning": "ପରମ ଆକର୍ଷକ ପ୍ରଭୁ ଦୁଇ ଜଙ୍ଘ/ଊରୁକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଜାନୁନୀ ନର-ରୂପ-ଧୃକ୍",
                            "meaning": "ମାନବ ରୂପଧାରୀ ପ୍ରଭୁ ଆଣ୍ଠୁକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଜଙ୍ଘେ ପାତୁ",
                            "meaning": "ପିଣ୍ଡୁଳି/ଗୋଡ଼କୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଧରା-ଭାର-ହର୍ତ୍ତା",
                            "meaning": "ଭୂମିର ଭାରହରଣକାରୀ"
                        },
                        {
                            "word": "ନୃ-କେସରୀ",
                            "meaning": "ନରସିଂହ ଭଗବାନ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 16,
                    "lyric": "ସୁର-ରାଜ୍ୟ-ପ୍ରଦଃ ପାତୁ ପାଦୌ ମେ ନୃ-ହରୀଶ୍ୱରଃ ।\nସହସ୍ର-ଶୀର୍ଷା ପୁରୁଷଃ ପାତୁ ମେ ସର୍ବଶସ୍ ତନୁମ୍ ॥ ୧୬ ॥",
                    "translation": "ଦେବତାମାନଙ୍କୁ ସ୍ୱର୍ଗରାଜ୍ୟ ପ୍ରଦାନକାରୀ ଶ୍ରୀ ନୃହରୀଶ୍ୱର ମୋର ଚରଣଦ୍ୱୟକୁ ରକ୍ଷା କରନ୍ତୁ । ସହସ୍ର-ମସ୍ତକଧାରୀ ପରମପୁରୁଷ ମୋର ସମଗ୍ର ଶରୀରକୁ ସର୍ବପ୍ରକାରେ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ସୁର-ରାଜ୍ୟ-ପ୍ରଦଃ",
                            "meaning": "ଦେବରାଜ୍ୟ ପ୍ରଦାନକାରୀ"
                        },
                        {
                            "word": "ପାଦୌ ମେ ପାତୁ",
                            "meaning": "ମୋ ଦୁଇ ପାଦକୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ନୃ-ହରି-ଈଶ୍ୱରଃ",
                            "meaning": "ନୃହରି ପରମେଶ୍ୱର"
                        },
                        {
                            "word": "ସହସ୍ର-ଶୀର୍ଷା ପୁରୁଷଃ",
                            "meaning": "ସହସ୍ର ଶୀର୍ଷ ବିଶିଷ୍ଟ ବିରାଟ ପୁରୁଷ"
                        },
                        {
                            "word": "ସର୍ବଶଃ ତନୁମ୍ ପାତୁ",
                            "meaning": "ସର୍ବଦା ସମଗ୍ର ଶରୀରକୁ ରକ୍ଷା କରନ୍ତୁ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 17,
                    "lyric": "ମହୋଗ୍ରଃ ପୂର୍ବତଃ ପାତୁ ମହା-ବୀରାଗ୍ରଜୋଽଗ୍ନିତଃ ।\nମହା-ବିଷ୍ଣୁର୍ ଦକ୍ଷିଣେ ତୁ ମହା-ଜ୍ୱାଳସ୍ ତୁ ନୈରୃତୌ ॥ ୧୭ ॥",
                    "translation": "ମହୋଗ୍ର ନୃସିଂହ ପୂର୍ବଦିଗରୁ, ମହାବୀରମାନଙ୍କ ମଧ୍ୟରେ ଅଗ୍ରଗଣ୍ୟ ପ୍ରଭୁ ଅଗ୍ନିକୋଣରୁ, ମହାବିଷ୍ଣୁ ଦକ୍ଷିଣଦିଗରୁ ଏବଂ ମହାଜ୍ୱାଳାମୟ ପ୍ରଭୁ ନୈରୃତ କୋଣରୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ମହୋଗ୍ରଃ ପୂର୍ବତଃ ପାତୁ",
                            "meaning": "ପରମ ତେଜସ୍ୱୀ ପ୍ରଭୁ ପୂର୍ବ ଦିଗରୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ମହା-ବୀର-ଅଗ୍ରଜଃ ଅଗ୍ନିତଃ",
                            "meaning": "ମହାବୀର ପ୍ରଭୁ ଅଗ୍ନିକୋଣରୁ"
                        },
                        {
                            "word": "ମହା-ବିଷ୍ଣୁଃ ଦକ୍ଷିଣେ",
                            "meaning": "ମହାବିଷ୍ଣୁ ଦକ୍ଷିଣ ଦିଗରୁ"
                        },
                        {
                            "word": "ମହା-ଜ୍ୱାଳଃ ନୈରୃତୌ",
                            "meaning": "ପ୍ରଜ୍ଜ୍ୱଳିତ ପ୍ରଭୁ ନୈରୃତ କୋଣରୁ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 18,
                    "lyric": "ପଶ୍ଚିମେ ପାତୁ ସର୍ବେଶୋ ଦିଶି ମେ ସର୍ବତୋ-ମୁଖଃ ।\nନୃସିଂହଃ ପାତୁ ବାୟବ୍ୟାଂ ସୌମ୍ୟାଂ ଭୂଷଣ-ବିଗ୍ରହଃ ॥ ୧୮ ॥",
                    "translation": "ସର୍ବେଶ୍ୱର ପଶ୍ଚିମଦିଗରୁ, ସର୍ବତୋମୁଖ ପ୍ରଭୁ ପ୍ରତ୍ୟେକ ଦିଗରୁ, ଶ୍ରୀ ନୃସିଂହ ବାୟୁକୋଣରୁ ଏବଂ ସର୍ବାଙ୍ଗଭୂଷିତ ପ୍ରଭୁ ଉତ୍ତରଦିଗରୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ପଶ୍ଚିମେ ପାତୁ ସର୍ବେଶଃ",
                            "meaning": "ସର୍ବେଶ୍ୱର ପଶ୍ଚିମ ଦିଗରୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ସର୍ବତୋ-ମୁଖଃ",
                            "meaning": "ସର୍ବତ୍ର ମୁଖ ଥିବା ପ୍ରଭୁ"
                        },
                        {
                            "word": "ବାୟବ୍ୟାଂ ନୃସିଂହଃ ପାତୁ",
                            "meaning": "ବାୟୁକୋଣରୁ ଶ୍ରୀ ନୃସିଂହ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ସୌମ୍ୟାଂ ଭୂଷଣ-ବିଗ୍ରହଃ",
                            "meaning": "ଉତ୍ତର ଦିଗରୁ ପରମ ଅଳଙ୍କୃତ ଦିବ୍ୟ ବିଗ୍ରହ ରକ୍ଷା କରନ୍ତୁ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 19,
                    "lyric": "ଈଶାନ୍ୟାଂ ପାତୁ ଭଦ୍ରୋ ମେ ସର୍ବ-ମଙ୍ଗଳ-ଦାୟକଃ ।\nସଂସାର-ଭୟଦଃ ପାତୁ ମୃତ୍ୟୋର୍ ମୃତ୍ୟୁର୍ ନୃ-କେସରୀ ॥ ୧୯ ॥",
                    "translation": "ସମସ୍ତ କଲ୍ୟାଣ ପ୍ରଦାନକାରୀ ଭଦ୍ର ନୃସିଂହ ଈଶାନ କୋଣରୁ ଏବଂ ସଂସାରର ଭୟ ହରଣକାରୀ ତଥା ମୃତ୍ୟୁର ମଧ୍ୟ ମୃତ୍ୟୁସ୍ୱରୂପ ନରସିଂହ ଭଗବାନ ମୋତେ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ ।",
                    "wordMeanings": [
                        {
                            "word": "ଈଶାନ୍ୟାଂ ପାତୁ ଭଦ୍ରଃ",
                            "meaning": "ଈଶାନ କୋଣରୁ କଲ୍ୟାଣକାରୀ ପ୍ରଭୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ସର୍ବ-ମଙ୍ଗଳ-ଦାୟକଃ",
                            "meaning": "ସମସ୍ତ ମଙ୍ଗଳ ଦାତା"
                        },
                        {
                            "word": "ସଂସାର-ଭୟଦଃ",
                            "meaning": "ସଂସାର ଭୟରୁ ତ୍ରାଣକର୍ତ୍ତା"
                        },
                        {
                            "word": "ମୃତ୍ୟୋଃ ମୃତ୍ୟୁଃ",
                            "meaning": "ମୃତ୍ୟୁର ମଧ୍ୟ ମୃତ୍ୟୁ ସ୍ୱରୂପ"
                        },
                        {
                            "word": "ନୃ-କେସରୀ",
                            "meaning": "ଶ୍ରୀ ନୃସିଂହଦେବ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 20,
                    "lyric": "ଇଦଂ ନୃସିଂହ-କବଚଂ ପ୍ରହ୍ଲାଦ-ମୁଖ-ମଣ୍ଡିତମ୍ ।\nଭକ୍ତିମାନ୍ ଯଃ ପଠେନ୍ ନିତ୍ୟଂ ସର୍ବ-ପାପୈଃ ପ୍ରମୁଚ୍ୟତେ ॥ ୨୦ ॥",
                    "translation": "ଭକ୍ତ ପ୍ରହ୍ଲାଦଙ୍କ ମୁଖାରବିନ୍ଦରୁ ନିଃସୃତ ଏହି ଶ୍ରୀ ନୃସିଂହ-କବଚକୁ ଯେଉଁ ଭକ୍ତିମାନ ମନୁଷ୍ୟ ପ୍ରତିଦିନ ନିଷ୍ଠାର ସହିତ ପାଠ କରେ, ସେ ସମସ୍ତ ପାପରୁ ମୁକ୍ତ ହୋଇଯାଏ ।",
                    "wordMeanings": [
                        {
                            "word": "ଇଦଂ ନୃସିଂହ-କବଚଂ",
                            "meaning": "ଏହି ନୃସିଂହ କବଚ"
                        },
                        {
                            "word": "ପ୍ରହ୍ଲାଦ-ମୁଖ-ମଣ୍ଡିତମ୍",
                            "meaning": "ପ୍ରହ୍ଲାଦ ମହାରାଜାଙ୍କ ଶ୍ରୀମୁଖରୁ ଉଦ୍ଗୀର୍ଣ୍ଣ"
                        },
                        {
                            "word": "ଭକ୍ତିମାନ୍ ଯଃ ପଠେନ୍ ନିତ୍ୟଂ",
                            "meaning": "ଯେଉଁ ଭକ୍ତ ପ୍ରତିଦିନ ପାଠ କରେ"
                        },
                        {
                            "word": "ସର୍ବ-ପାପୈଃ ପ୍ରମୁଚ୍ୟତେ",
                            "meaning": "ସମସ୍ତ ପାପରୁ ସମ୍ପୂର୍ଣ୍ଣ ମୁକ୍ତ ହୁଏ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 21,
                    "lyric": "ପୁତ୍ରବାନ୍ ଧନବାନ୍ ଲୋକେ ଦୀର୍ଘାୟୁର୍ ଉପଜାୟତେ ।\nୟଂ ୟଂ କାମୟତେ କାମଂ ତଂ ତଂ ପ୍ରାପ୍ନୋତ୍ୟ୍ ଅସଂଶୟମ୍ ॥ ୨୧ ॥",
                    "translation": "ସେହି ବ୍ୟକ୍ତି ଏହି ସଂସାରରେ ସୁଯୋଗ୍ୟ ସନ୍ତାନ, ପ୍ରଚୁର ଧନସମ୍ପତ୍ତି ଏବଂ ଦୀର୍ଘ ଆୟୁ ପ୍ରାପ୍ତ ହୁଏ; ସେ ଯାହା ଯାହା କାମନା କରେ, ସେ ସବୁ ନିଃସନ୍ଦେହ ଭାବେ ଲାଭ କରେ ।",
                    "wordMeanings": [
                        {
                            "word": "ପୁତ୍ରବାନ୍ ଧନବାନ୍",
                            "meaning": "ପୁତ୍ରବାନ ଓ ଧନବାନ"
                        },
                        {
                            "word": "ଦୀର୍ଘାୟୁଃ ଉପଜାୟତେ",
                            "meaning": "ଦୀର୍ଘ ଆୟୁ ପ୍ରାପ୍ତ ହୁଏ"
                        },
                        {
                            "word": "ୟଂ ୟଂ କାମୟତେ କାମଂ",
                            "meaning": "ଯେଉଁ ଯେଉଁ ଇଚ୍ଛା କରେ"
                        },
                        {
                            "word": "ତଂ ତଂ ପ୍ରାପ୍ନୋତି",
                            "meaning": "ସେସବୁ ପ୍ରାପ୍ତ ହୁଏ"
                        },
                        {
                            "word": "ଅସଂଶୟମ୍",
                            "meaning": "ନିଃସନ୍ଦେହରେ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 22,
                    "lyric": "ସର୍ବତ୍ର ଜୟମ୍ ଆପ୍ନୋତି ସର୍ବତ୍ର ବିଜୟୀ ଭବେତ୍ ।\nଭୂମ୍ୟ୍-ଅନ୍ତରୀକ୍ଷ-ଦିବ୍ୟାନାଂ ଗ୍ରହାଣାଂ ବିନିବାରଣମ୍ ॥ ୨୨ ॥",
                    "translation": "ସେ ସର୍ବତ୍ର ବିଜୟ ଲାଭ କରେ ଏବଂ ସର୍ବଦା ବିଜୟୀ ହୁଏ । ପୃଥିବୀ, ଅନ୍ତରୀକ୍ଷ ଓ ଦେବଲୋକ ସମ୍ବନ୍ଧୀୟ ସମସ୍ତ ଅନିଷ୍ଟକାରୀ ଗ୍ରହମାନଙ୍କର ପ୍ରଭାବ ସମ୍ପୂର୍ଣ୍ଣ ଦୂରୀଭୂତ ହୁଏ ।",
                    "wordMeanings": [
                        {
                            "word": "ସର୍ବତ୍ର ଜୟମ୍ ଆପ୍ନୋତି",
                            "meaning": "ସବୁଆଡ଼େ ଜୟ ଲାଭ କରେ"
                        },
                        {
                            "word": "ସର୍ବତ୍ର ବିଜୟୀ ଭବେତ୍",
                            "meaning": "ସର୍ବଦା ବିଜୟୀ ହୁଏ"
                        },
                        {
                            "word": "ଭୂମି-ଅନ୍ତରୀକ୍ଷ-ଦିବ୍ୟାନାଂ",
                            "meaning": "ପୃଥିବୀ, ଆକାଶ ଓ ସ୍ୱର୍ଗଲୋକର"
                        },
                        {
                            "word": "ଗ୍ରହାଣାଂ ବିନିବାରଣମ୍",
                            "meaning": "ଅନିଷ୍ଟକାରୀ ଗ୍ରହପୀଡ଼ାର ନିବାରଣ ହୁଏ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 23,
                    "lyric": "ବୃଶ୍ଚିକୋରଗ-ସମ୍ଭୂତ-ବିଷାପହରଣଂ ପରମ୍ ।\nବ୍ରହ୍ମ-ରାକ୍ଷସ-ଯକ୍ଷାଣାଂ ଦୂରୋତ୍ସାରଣ-କାରଣମ୍ ॥ ୨୩ ॥",
                    "translation": "ଏହା ବିଛା ଓ ସର୍ପ ଇତ୍ୟାଦିଙ୍କ ଦ୍ୱାରା ଉତ୍ପନ୍ନ ଭୟଙ୍କର ବିଷକୁ ବିନାଶ କରେ ଏବଂ ବ୍ରହ୍ମରାକ୍ଷସ ତଥା ଯକ୍ଷ ଆଦି ଅଶୁଭ ଶକ୍ତିମାନଙ୍କୁ ବହୁ ଦୂରକୁ ତଡ଼ିଦିଏ ।",
                    "wordMeanings": [
                        {
                            "word": "ବୃଶ୍ଚିକ-ଉରଗ-ସମ୍ଭୂତ",
                            "meaning": "ବିଛା ଓ ସାପଠାରୁ ଉତ୍ପନ୍ନ"
                        },
                        {
                            "word": "ବିଷ-ଅପହରଣଂ ପରମ୍",
                            "meaning": "ବିଷକୁ ଦୂର କରିବାରେ ଶ୍ରେଷ୍ଠ"
                        },
                        {
                            "word": "ବ୍ରହ୍ମ-ରାକ୍ଷସ-ଯକ୍ଷାଣାଂ",
                            "meaning": "ବ୍ରହ୍ମରାକ୍ଷସ ଓ ଯକ୍ଷମାନଙ୍କୁ"
                        },
                        {
                            "word": "ଦୂର-ଉତ୍ସାରଣ-କାରଣମ୍",
                            "meaning": "ଦୂରକୁ ତଡ଼ିଦେବାର କାରଣ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 24,
                    "lyric": "ଭୂର୍ଜେ ବା ତାଳ-ପତ୍ରେ ବା କବଚଂ ଲିଖିତଂ ଶୁଭମ୍ ।\nକର-ମୂଳେ ଧୃତଂ ଯେନ ସିଧ୍ୟେୟୁଃ କର୍ମ-ସିଦ୍ଧୟଃ ॥ ୨୪ ॥",
                    "translation": "ଭୂର୍ଜପତ୍ର ବା ତାଳପତ୍ରରେ ଏହି ଶୁଭ କବଚ ଲେଖି ଯିଏ ନିଜ ବାହୁମୂଳରେ ଧାରଣ କରେ, ତାର ସମସ୍ତ କାର୍ଯ୍ୟ ସଫଳ ଓ ସିଦ୍ଧ ହୋଇଥାଏ ।",
                    "wordMeanings": [
                        {
                            "word": "ଭୂର୍ଜେ ବା ତାଳ-ପତ୍ରେ ବା",
                            "meaning": "ଭୂର୍ଜପତ୍ର କିମ୍ବା ତାଳପତ୍ରରେ"
                        },
                        {
                            "word": "କବଚଂ ଲିଖିତଂ ଶୁଭମ୍",
                            "meaning": "ଏହି ମଙ୍ଗଳମୟ କବଚ ଲେଖି"
                        },
                        {
                            "word": "କର-ମୂଳେ ଧୃତଂ ଯେନ",
                            "meaning": "ଯିଏ ହାତ ବା ବାହୁରେ ଧାରଣ କରେ"
                        },
                        {
                            "word": "କର୍ମ-ସିଦ୍ଧୟଃ ସିଧ୍ୟେୟୁଃ",
                            "meaning": "ସମସ୍ତ କାର୍ଯ୍ୟରେ ସିଦ୍ଧି ପ୍ରାପ୍ତ ହୁଏ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 25,
                    "lyric": "ଦେବାସୁର-ମନୁଷ୍ୟେଷୁ ସ୍ୱଂ ସ୍ୱମ୍ ଏବ ଜୟଂ ଲଭେତ୍ ।\nଏକ-ସନ୍ଧ୍ୟଂ ତ୍ରି-ସନ୍ଧ୍ୟଂ ବା ଯଃ ପଠେନ୍ ନିୟତୋ ନରଃ ॥ ୨୫ ॥",
                    "translation": "ଯେଉଁ ନର ନିୟମପୂର୍ବକ ଦିନକୁ ଥରେ କିମ୍ବା ତିନି ସନ୍ଧ୍ୟାରେ ଏହା ପାଠ କରେ, ସେ ଦେବତା, ଅସୁର ଏବଂ ମନୁଷ୍ୟମାନଙ୍କ ମଧ୍ୟରେ ସର୍ବଦା ନିଜର ବିଜୟ ଲାଭ କରେ ।",
                    "wordMeanings": [
                        {
                            "word": "ଦେବାସୁର-ମନୁଷ୍ୟେଷୁ",
                            "meaning": "ଦେବତା, ଅସୁର ଓ ମନୁଷ୍ୟମାନଙ୍କ ମଧ୍ୟରେ"
                        },
                        {
                            "word": "ଜୟଂ ଲଭେତ୍",
                            "meaning": "ବିଜୟ ଲାଭ କରେ"
                        },
                        {
                            "word": "ଏକ-ସନ୍ଧ୍ୟଂ ତ୍ରି-ସନ୍ଧ୍ୟଂ ବା",
                            "meaning": "ଗୋଟିଏ ସନ୍ଧ୍ୟା ବା ତିନି ସନ୍ଧ୍ୟାରେ"
                        },
                        {
                            "word": "ଯଃ ପଠେନ୍ ନିୟତଃ",
                            "meaning": "ଯିଏ ନିୟମିତ ପାଠ କରେ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 26,
                    "lyric": "ସର୍ବ-ମଙ୍ଗଳ-ମାଙ୍ଗଲ୍ୟଂ ଭୁକ୍ତିଂ ମୁକ୍ତିଂ ଚ ବିନ୍ଦତି ।\nଦ୍ୱା-ତ୍ରିଂଶତି-ସହସ୍ରାଣି ପଠେଚ୍ ଛୁଦ୍ଧାତ୍ମନାଂ ନୃଣାମ୍ ॥ ୨୬ ॥",
                    "translation": "ସେ ସମସ୍ତ ମଙ୍ଗଳର ପରମ ମଙ୍ଗଳ ପ୍ରାପ୍ତ ହୁଏ ତଥା ଭୋଗ ଓ ମୁକ୍ତି ଉଭୟ ଲାଭ କରେ । ଶୁଦ୍ଧ ଚିତ୍ତରେ ମନୁଷ୍ୟ ଯଦି ଏହାକୁ ବତିଶ ହଜାର (୩୨,୦୦୦) ଥର ପାଠ କରେ...",
                    "wordMeanings": [
                        {
                            "word": "ସର୍ବ-ମଙ୍ଗଳ-ମାଙ୍ଗଲ୍ୟଂ",
                            "meaning": "ସର୍ବ ମଙ୍ଗଳର ପରମ କଲ୍ୟାଣ"
                        },
                        {
                            "word": "ଭୁକ୍ତିଂ ମୁକ୍ତିଂ ଚ ବିନ୍ଦତି",
                            "meaning": "ଇହଲୌକିକ ସୁଖ ଓ ମୋକ୍ଷ ଲାଭ କରେ"
                        },
                        {
                            "word": "ଦ୍ୱା-ତ୍ରିଂଶତ୍-ସହସ୍ରାଣି",
                            "meaning": "ବତିଶ ହଜାର ଥର"
                        },
                        {
                            "word": "ପଠେତ୍ ଶୁଦ୍ଧ-ଆତ୍ମନାଂ",
                            "meaning": "ପବିତ୍ର ହୃଦୟରେ ପାଠ କଲେ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 27,
                    "lyric": "କବଚସ୍ୟାସ୍ୟ ମନ୍ତ୍ରସ୍ୟ ମନ୍ତ୍ର-ସିଦ୍ଧିଃ ପ୍ରଜାୟତେ ।\nଅନେନ ମନ୍ତ୍ର-ରାଜେନ କୃତ୍ୱା ଭସ୍ମାଭିମନ୍ତ୍ରଣମ୍ ॥ ୨୭ ॥",
                    "translation": "...ତେବେ ଏହି କବଚ-ମନ୍ତ୍ରର ପୂର୍ଣ୍ଣ ସିଦ୍ଧି ପ୍ରାପ୍ତ ହୁଏ । ଏହି ମନ୍ତ୍ରରାଜ ଦ୍ୱାରା ଭସ୍ମକୁ ଅଭିମନ୍ତ୍ରିତ କରି...",
                    "wordMeanings": [
                        {
                            "word": "କବଚସ୍ୟ ଅସ୍ୟ ମନ୍ତ୍ରସ୍ୟ",
                            "meaning": "ଏହି କବଚ ମନ୍ତ୍ରର"
                        },
                        {
                            "word": "ମନ୍ତ୍ର-ସିଦ୍ଧିଃ ପ୍ରଜାୟତେ",
                            "meaning": "ମନ୍ତ୍ରସିଦ୍ଧି ପ୍ରାପ୍ତ ହୁଏ"
                        },
                        {
                            "word": "ଅନେନ ମନ୍ତ୍ର-ରାଜେନ",
                            "meaning": "ଏହି ଶ୍ରେଷ୍ଠ ମନ୍ତ୍ରରାଜ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ଭସ୍ମ-ଅଭିମନ୍ତ୍ରଣମ୍ କୃତ୍ୱା",
                            "meaning": "ଭସ୍ମକୁ ମନ୍ତ୍ରପୂତ କରି"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 28,
                    "lyric": "ତିଳକଂ ବିନ୍ୟସେଦ୍ ଯସ୍ ତୁ ତସ୍ୟ ଗ୍ରହ-ଭୟଂ ହରେତ୍ ।\nତ୍ରି-ବାରଂ ଜପମାନସ୍ ତୁ ଦତ୍ତଂ ବାର୍ୟ୍ ଅଭିମନ୍ତ୍ର୍ୟ ଚ ॥ ୨୮ ॥",
                    "translation": "...ଯିଏ ତିଳକ ଲଗାଏ, ତାର ସମସ୍ତ ଗ୍ରହଭୟ ଦୂର ହୋଇଯାଏ । ତିନିଥର ଏହି ମନ୍ତ୍ର ଜପ କରି ଜଳକୁ ଅଭିମନ୍ତ୍ରିତ କରି...",
                    "wordMeanings": [
                        {
                            "word": "ତିଳକଂ ବିନ୍ୟସେତ୍ ଯଃ",
                            "meaning": "ଯେଉଁ ବ୍ୟକ୍ତି ତିଳକ ଧାରଣ କରେ"
                        },
                        {
                            "word": "ତସ୍ୟ ଗ୍ରହ-ଭୟଂ ହରେତ୍",
                            "meaning": "ତାର ଗ୍ରହଭୟ ଦୂର ହୁଏ"
                        },
                        {
                            "word": "ତ୍ରି-ବାରଂ ଜପମାନଃ",
                            "meaning": "ତିନିଥର ଜପ କରି"
                        },
                        {
                            "word": "ବାରି ଅଭିମନ୍ତ୍ର୍ୟ",
                            "meaning": "ଜଳକୁ ଅଭିମନ୍ତ୍ରିତ କରି"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 29,
                    "lyric": "ପ୍ରାଶୟେଦ୍ ଯୋ ନରୋ ମନ୍ତ୍ରଂ ନୃସିଂହ-ଧ୍ୟାନମ୍ ଆଚରେତ୍ ।\nତସ୍ୟ ରୋଗାଃ ପ୍ରଣଶ୍ୟନ୍ତି ଯେ ଚ ସ୍ୟୁଃ କୁକ୍ଷି-ସମ୍ଭବାଃ ॥ ୨୯ ॥",
                    "translation": "...ଯେଉଁ ମନୁଷ୍ୟ ଶ୍ରୀ ନୃସିଂହଙ୍କୁ ଧ୍ୟାନ କରି ସେହି ଜଳ ପାନ କରେ, ତାର ଉଦର ସମ୍ବନ୍ଧୀୟ ସମସ୍ତ ରୋଗ ତଥା ଅନ୍ୟାନ୍ୟ ବ୍ୟାଧି ବିନଷ୍ଟ ହୋଇଯାଏ ।",
                    "wordMeanings": [
                        {
                            "word": "ପ୍ରାଶୟେତ୍ ଯଃ ନରଃ",
                            "meaning": "ଯେଉଁ ମନୁଷ୍ୟ ପାନ କରେ"
                        },
                        {
                            "word": "ନୃସିଂହ-ଧ୍ୟାନମ୍ ଆଚରେତ୍",
                            "meaning": "ଶ୍ରୀ ନୃସିଂହଙ୍କୁ ଧ୍ୟାନ କରେ"
                        },
                        {
                            "word": "ତସ୍ୟ ରୋଗାଃ ପ୍ରଣଶ୍ୟନ୍ତି",
                            "meaning": "ତାର ସମସ୍ତ ରୋଗ ନଷ୍ଟ ହୁଏ"
                        },
                        {
                            "word": "କୁକ୍ଷି-ସମ୍ଭବାଃ",
                            "meaning": "ପେଟ ବା ଉଦରଜନିତ ରୋଗ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 30,
                    "lyric": "କିମ୍ ଅତ୍ର ବହୁନୋକ୍ତେନ ନୃସିଂହ-ସଦୃଶୋ ଭବେତ୍ ।\nମନସା ଚିନ୍ତିତଂ ଯତ୍ ତୁ ସ ତଚ୍ ଚାପ୍ନୋତ୍ୟ୍ ଅସଂଶୟମ୍ ॥ ୩୦ ॥",
                    "translation": "ଅଧିକ ଆଉ କଣ କହିବା! ସେହି ସାଧକ ଶ୍ରୀ ନୃସିଂହଙ୍କ ସଦୃଶ ତେଜୋମୟ ଓ ଗୁଣବାନ ହୋଇଯାଏ; ସେ ମନରେ ଯାହା କିଛି ଚିନ୍ତା କରେ, ତାହା ନିଃସନ୍ଦେହ ରୂପେ ପ୍ରାପ୍ତ ହୁଏ ।",
                    "wordMeanings": [
                        {
                            "word": "କିମ୍ ଅତ୍ର ବହୁନା ଉକ୍ତେନ",
                            "meaning": "ଅଧିକ ବହୁତ କହିବାର କି ପ୍ରୟୋଜନ"
                        },
                        {
                            "word": "ନୃସିଂହ-ସଦୃଶଃ ଭବେତ୍",
                            "meaning": "ଶ୍ରୀନୃସିଂହଙ୍କ ସଦୃଶ ପ୍ରଭାବଶାଳୀ ହୁଏ"
                        },
                        {
                            "word": "ମନସା ଚିନ୍ତିତଂ ଯତ୍",
                            "meaning": "ମନରେ ଯାହା ଚିନ୍ତନ କରେ"
                        },
                        {
                            "word": "ତତ୍ ଚ ଆପ୍ନୋତି",
                            "meaning": "ତାହା ସେ ପ୍ରାପ୍ତ ହୁଏ"
                        },
                        {
                            "word": "ଅସଂଶୟମ୍",
                            "meaning": "ନିଶ୍ଚିତ ଭାବେ"
                        }
                    ],
                    "status": "COMPLETED"
                },
                {
                    "id": 31,
                    "lyric": "ଗର୍ଜନ୍ତଂ ଗର୍ଜୟନ୍ତଂ ନିଜ-ଭୁଜ-ପଟଳଂ ସ୍ଫୋଟୟନ୍ତଂ ହଠନ୍ତଂ\nରୂପ୍ୟନ୍ତଂ ତାପୟନ୍ତଂ ଦିବି ଭୁବି ଦିତିଜଂ କ୍ଷେପୟନ୍ତଂ କ୍ଷିପନ୍ତମ୍ ।\nକ୍ରନ୍ଦନ୍ତଂ ରୋଷୟନ୍ତଂ ଦିଶି ଦିଶି ସତତଂ ସଂହରନ୍ତଂ ଭରନ୍ତଂ\nବୀକ୍ଷନ୍ତଂ ଘୂର୍ଣ୍ଣୟନ୍ତଂ ଶର-ନିକର-ଶତୈର୍ ଦିବ୍ୟ-ସିଂହଂ ନମାମି ॥ ୩୧ ॥\n॥ ଇତି ଶ୍ରୀ-ବ୍ରହ୍ମାଣ୍ଡ-ପୁରାଣେ ପ୍ରହ୍ଲାଦୋକ୍ତଂ ଶ୍ରୀ-ନୃସିଂହ-କବଚଂ ସମ୍ପୂର୍ଣ୍ଣମ୍ ॥",
                    "translation": "ଯେ ନିଜେ ଗର୍ଜନ କରୁଛନ୍ତି ଏବଂ ଅନ୍ୟମାନଙ୍କୁ ଗର୍ଜନ କରାଉଛନ୍ତି, ନିଜର ଅସଂଖ୍ୟ ବାହୁବଳରେ ଦୈତ୍ୟମାନଙ୍କୁ ବିଦାରଣ କରୁଛନ୍ତି, ଯେ ସ୍ୱର୍ଗ ଓ ମର୍ତ୍ତ୍ୟରେ ଦିତିପୁତ୍ର ଅସୁରମାନଙ୍କୁ ସନ୍ତ୍ରସ୍ତ ଓ ଉତ୍ତପ୍ତ କରି ଫିଙ୍ଗି ଦେଉଛନ୍ତି, ଯେ କ୍ରୋଧଭରେ ସମସ୍ତ ଦିଗରେ ଦୁଷ୍ଟମାନଙ୍କୁ ବିନାଶ କରୁଛନ୍ତି ଏବଂ ନିଜ ହସ୍ତରେ ସମସ୍ତ ବିଶ୍ୱର ପାଳନ ଓ ରକ୍ଷା କରୁଛନ୍ତି—ସେହି ଅଲୌକିକ ଦିବ୍ୟ ନୃସିଂହ ପ୍ରଭୁଙ୍କୁ ମୁଁ ପ୍ରଣାମ କରୁଛି । (ଏହିପରି ଶ୍ରୀ ବ୍ରହ୍ମାଣ୍ଡ ପୁରାଣୋକ୍ତ ପ୍ରହ୍ଲାଦ-ବିରଚିତ ଶ୍ରୀ ନୃସିଂହ କବଚ ସମ୍ପୂର୍ଣ୍ଣ ହେଲା ।)",
                    "wordMeanings": [
                        {
                            "word": "ଗର୍ଜନ୍ତଂ ଗର୍ଜୟନ୍ତଂ",
                            "meaning": "ଭୟଙ୍କର ଗର୍ଜନ କରୁଥିବା ଓ କରାଉଥିବା"
                        },
                        {
                            "word": "ନିଜ-ଭୁଜ-ପଟଳଂ ସ୍ଫୋଟୟନ୍ତଂ",
                            "meaning": "ନିଜ ଭୁଜଦଣ୍ଡରେ ଦୈତ୍ୟକୁ ବିଦାରଣ କରୁଥିବା"
                        },
                        {
                            "word": "ଦିବି ଭୁବି ଦିତିଜଂ କ୍ଷେପୟନ୍ତଂ",
                            "meaning": "ସ୍ୱର୍ଗ ଓ ପୃଥିବୀରେ ଅସୁରମାନଙ୍କୁ ନିକ୍ଷେପ କରୁଥିବା"
                        },
                        {
                            "word": "ସଂହରନ୍ତଂ ଭରନ୍ତଂ",
                            "meaning": "ଦୁଷ୍ଟମାନଙ୍କର ସଂହାର ଓ ଭକ୍ତମାନଙ୍କର ପାଳନକର୍ତ୍ତା"
                        },
                        {
                            "word": "ଦିବ୍ୟ-ସିଂହଂ ନମାମି",
                            "meaning": "ଦିବ୍ୟ ନରସିଂହ ପ୍ରଭୁଙ୍କୁ ପ୍ରଣାମ କରୁଛି"
                        }
                    ],
                    "status": "COMPLETED"
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
{
        id: "song-narasimhanakhastuti",
        title: "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି (Sri Narasimha Nakha Stuti)",
        title_odia: "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି",
        title_english: "Sri Narasimha Nakha Stuti",
        author: "Madhvacharya",
        category: "Songs",
        type: "html",
        status: "COMPLETED",
        verified: true,
        published: true,
        description: "ଶ୍ରୀପାଦ ମଧ୍ୱାଚାର୍ଯ୍ୟ (ଶ୍ରୀମଦ୍ ଆନନ୍ଦତୀର୍ଥ)ଙ୍କ ବିରଚିତ ଭଗବାନ ଶ୍ରୀନରସିଂହଦେବଙ୍କ ଦିବ୍ୟ ନଖସମୂହର ପରମ ରକ୍ଷାକାରୀ ମହିମାମୟ ସ୍ତୁତି ।",
        audioUrl: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sri%20Narasimha%20Nakha%20Stuti%20Sripad%20Madhvacharya%20Powerful%20Mantra%20for%20Protection%20Narasimha%20Jayanthi.mp3",
        vocalist: "HG Yasoda Kumara Prabhu",
        audioVersions: [
            {
                label: "HG Yasoda Kumara Prabhu",
                url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Sri%20Narasimha%20Nakha%20Stuti%20Sripad%20Madhvacharya%20Powerful%20Mantra%20for%20Protection%20Narasimha%20Jayanthi.mp3"
            },
            {
                label: "Vaishnavas",
                url: "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Narasimha%20Nakha%20Stuti%20Bhakta%20Mukunda%20Divine%20Vedic%20Mantras.mp3"
            }
        ],
        tags: [
            "Narasimha",
            "Narasimha Nakha Stuti",
            "Nakha Stuti",
            "Madhvacharya",
            "Pranama",
            "Stuti",
            "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି",
            "ମଧ୍ୱାଚାର୍ଯ୍ୟ"
        ],
        structuredContent: {
            id: "song-narasimhanakhastuti",
            title: "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି (Sri Narasimha Nakha Stuti)",
            title_odia: "ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି",
            title_english: "Sri Narasimha Nakha Stuti",
            author: "Madhvacharya",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Narasimha%20Nakha%20Stuti_",
            verses: [
                {
                    id: 1,
                    lyric: "ପାନ୍ତ୍ୱସ୍ମାନ୍ ପୁରୁହୂତ-ବୈରି-ବଳବନ୍-ମାତଙ୍ଗ-ମାଦ୍ୟଦ୍-ଘଟା-\nକୁମ୍ଭୋଚ୍ଚାଦ୍ରି-ବିପାଟନାଧିକ-ପଟୁ ପ୍ରତ୍ୟେକ-ବଜ୍ରାୟିତାଃ ।\nଶ୍ରୀମତ୍-କଣ୍ଠୀରବାସ୍ୟ-ପ୍ରତତ-ସୁନଖରା ଦାରିତାରାତି-ଦୂର-\nପ୍ରଧ୍ୱସ୍ତ-ଧ୍ୱାନ୍ତ-ଶାନ୍ତ-ପ୍ରବିତତ-ମନସା ଭାବିତା ଭୂରି-ଭାଗୈଃ ॥ ୧ ॥",
                    translation: "ଶ୍ରୀମନ୍ତ ସିଂହମୁଖ ଭଗବାନ ଶ୍ରୀନରସିଂହଦେବଙ୍କର ତୀକ୍ଷ୍ଣ ତଥା ପ୍ରସାରିତ ଦିବ୍ୟ ନଖସମୂହ ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ! ସେହି ନଖଗୁଡ଼ିକ ମଧ୍ୟରୁ ପ୍ରତ୍ୟେକଟି ବଜ୍ର ସଦୃଶ, ଯାହା ଇନ୍ଦ୍ରଙ୍କ ଶତ୍ରୁ (ଅସୁର) ରୂପୀ ମତ୍ତ ହସ୍ତୀମାନଙ୍କର ପର୍ବତତୁଲ୍ୟ କୁମ୍ଭସ୍ଥଳୀକୁ ବିଦୀର୍ଣ୍ଣ କରିବାରେ ଅତ୍ୟନ୍ତ ନିପୁଣ। ଯାହାଙ୍କ କୃପାରୁ ଅଜ୍ଞାନରୂପୀ ଅନ୍ଧକାର ଦୂରରୁ ହିଁ ବିନଷ୍ଟ ହୋଇଯାଏ, ସେହି ପରମ ନିର୍ମଳ ଓ ଶାନ୍ତ ଚିତ୍ତବିଶିଷ୍ଟ ମହାଭାଗ୍ୟବାନ୍ ଭକ୍ତମାନେ ସେହି ଦିବ୍ୟ ନଖସମୂହକୁ ନିରନ୍ତର ଧ୍ୟାନ କରନ୍ତି।",
                    wordMeanings: [
                        { word: "ପାନ୍ତୁ ଅସ୍ମାନ୍", meaning: "ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ" },
                        { word: "ପୁରୁହୂତ-ବୈରି", meaning: "ଦେବରାଜ ଇନ୍ଦ୍ରଙ୍କ ଶତ୍ରୁ (ଅସୁରମାନଙ୍କର)" },
                        { word: "ବଳବତ୍-ମାତଙ୍ଗ-ମାଦ୍ୟଦ୍-ଘଟା", meaning: "ବଳବାନ୍ ଉନ୍ମତ୍ତ ହସ୍ତୀସମୂହର" },
                        { word: "କୁମ୍ଭ-ଉଚ୍ଚ-ଅଦ୍ରି", meaning: "ପର୍ବତ ଭଳି ଉଚ୍ଚ ମସ୍ତକର କୁମ୍ଭସ୍ଥଳୀ" },
                        { word: "ବିପାଟନ-ଅଧିକ-ପଟୁ", meaning: "ବିଦୀର୍ଣ୍ଣ କରିବାରେ ଅତ୍ୟନ୍ତ ନିପୁଣ" },
                        { word: "ପ୍ରତ୍ୟେକ-ବଜ୍ରାୟିତାଃ", meaning: "ପ୍ରତ୍ୟେକଟି ବଜ୍ରାସ୍ତ୍ର ସଦୃଶ" },
                        { word: "ଶ୍ରୀମତ୍-କଣ୍ଠୀରବ-ଆସ୍ୟ", meaning: "ଶ୍ରୀମନ୍ତ ସିଂହମୁଖ ଶ୍ରୀନରସିଂହଦେବଙ୍କର" },
                        { word: "ପ୍ରତତ-ସୁନଖରାଃ", meaning: "ପ୍ରସାରିତ ଓ ତୀକ୍ଷ୍ଣ ଦିବ୍ୟ ନଖସମୂହ" },
                        { word: "ଦାରିତ-ଅରାତି", meaning: "ଶତ୍ରୁକୁ ବିନାଶ କରିବା ଦ୍ୱାରା" },
                        { word: "ଦୂର-ପ୍ରଧ୍ୱସ୍ତ-ଧ୍ୱାନ୍ତ", meaning: "ଦୂରରୁ ବିନାଶ ହୋଇଥିବା ଅଜ୍ଞାନ ରୂପୀ ଅନ୍ଧକାର" },
                        { word: "ଶାନ୍ତ-ପ୍ରବିତତ-ମନସା", meaning: "ପରମ ଶାନ୍ତ ତଥା ନିର୍ମଳ ମନ ଦ୍ୱାରା" },
                        { word: "ଭାବିତାଃ ଭୂରି-ଭାଗୈଃ", meaning: "ପରମ ଭାଗ୍ୟବାନ୍ ଭକ୍ତମାନଙ୍କ ଦ୍ୱାରା ଧ୍ୟାତ" }
                    ]
                },
                {
                    id: 2,
                    lyric: "ଲକ୍ଷ୍ମୀ-କାନ୍ତ ସମନ୍ତତୋଽପି କଳୟନ୍ ନୈବେଶିତୁସ୍ତେ ସମଂ\nପଶ୍ୟାମ୍ୟୁତ୍ତମ-ବସ୍ତୁ ଦୂରତରତୋପାସ୍ତଂ ରସୋ ଯୋଽଷ୍ଟମଃ ।\nଯଦ୍ରୋଷୋତ୍କର-ଦକ୍ଷ-ନେତ୍ର-କୁଟିଳ-ପ୍ରାନ୍ତୋତ୍ଥିତାଗ୍ନି-ସ୍ଫୁରତ୍-\nଖଦ୍ୟୋତୋପମ-ବିସ୍ଫୁଲିଙ୍ଗ-ଭସିତା ବ୍ରହ୍ମେଶ-ଶକ୍ରୋତ୍କରାଃ ॥ ୨ ॥",
                    translation: "ହେ ଲକ୍ଷ୍ମୀକାନ୍ତ ପ୍ରଭୁ! ସମଗ୍ର ସଂସାରର ସବୁଆଡ଼େ ଅନୁସନ୍ଧାନ କରି ମଧ୍ୟ ମୁଁ ଆପଣଙ୍କ ସମକକ୍ଷ ବା ଆପଣଙ୍କଠାରୁ ଶ୍ରେଷ୍ଠ କୌଣସି ବସ୍ତୁ ବା ସତ୍ତା ଦେଖିପାରୁନାହିଁ। ଯେପରି ସପ୍ତରସ ବ୍ୟତୀତ ଏକ କଳ୍ପିତ ଅଷ୍ଟମ ରସ ଅସମ୍ଭବ, ସେହିପରି ଆପଣଙ୍କଠାରୁ ଉର୍ଦ୍ଧ୍ୱରେ କେହି ନାହାନ୍ତି। ଆପଣଙ୍କ ପ୍ରଚଣ୍ଡ କ୍ରୋଧ ସମୟରେ ନେତ୍ରର ବକ୍ର କୋଣରୁ ଯେଉଁ ଅଗ୍ନି ପ୍ରକଟିତ ହୁଏ, ସେଥିରୁ ନିର୍ଗତ ଜୁଳୁଜୁଳିଆ ପୋକ ସଦୃଶ କ୍ଷୁଦ୍ର ଅଗ୍ନିକଣା ମାଧ୍ୟମରେ ମଧ୍ୟ ବ୍ରହ୍ମା, ଶିବ ଓ ଇନ୍ଦ୍ରଙ୍କ ସମେତ ସମସ୍ତ ଦେବତା ସମୂହ ଭସ୍ମୀଭୂତ ହୋଇପାରନ୍ତି!",
                    wordMeanings: [
                        { word: "ଲକ୍ଷ୍ମୀ-କାନ୍ତ", meaning: "ହେ ଲକ୍ଷ୍ମୀଦେବୀଙ୍କ ପ୍ରାଣପତି!" },
                        { word: "ସମନ୍ତତଃ ଅପି କଳୟନ୍", meaning: "ସମସ୍ତ ଦିଗରେ ଅନୁସନ୍ଧାନ କରି ମଧ୍ୟ" },
                        { word: "ନ ଏବ ତେ ସମଂ ପଶ୍ୟାମି", meaning: "ଆପଣଙ୍କ ସମକକ୍ଷ କାହାକୁ ବି ଦେଖିପାରୁନାହିଁ" },
                        { word: "ଈଶିତୁଃ ଉତ୍ତମ-ବସ୍ତୁ", meaning: "ହେ ପରମେଶ୍ୱର! ଆପଣଙ୍କଠାରୁ ଶ୍ରେଷ୍ଠ କୌଣସି ତତ୍ତ୍ୱ" },
                        { word: "ଦୂରତରତଃ ଉପାସ୍ତମ୍", meaning: "ଅତ୍ୟନ୍ତ ଦୂରରେ ଅଗୋଚର" },
                        { word: "ଯଃ ଅଷ୍ଟମଃ ରସଃ", meaning: "ଯେପରି ଅସମ୍ଭବ ଅଷ୍ଟମ ରସ ସଦୃଶ" },
                        { word: "ଯତ୍-ରୋଷ-ଉତ୍କର", meaning: "ଯାହାଙ୍କ ପ୍ରଚଣ୍ଡ କ୍ରୋଧାବେଗର" },
                        { word: "ଦକ୍ଷ-ନେତ୍ର-କୁଟିଳ-ପ୍ରାନ୍ତ", meaning: "ଦକ୍ଷିଣ ନେତ୍ରର ବକ୍ର କୋଣରୁ" },
                        { word: "ଉତ୍ଥିତ-ଅଗ୍ନି-ସ୍ଫୁରତ୍", meaning: "ପ୍ରକଟିତ ଅଗ୍ନିରୁ ବିକିରିତ ହେଉଥିବା" },
                        { word: "ଖଦ୍ୟୋତ-ଉପମ", meaning: "ଜୁଳୁଜୁଳିଆ ପୋକ ସଦୃଶ" },
                        { word: "ବିସ୍ଫୁଲିଙ୍ଗ-ଭସିତାଃ", meaning: "ଅଗ୍ନିର ଫୁଲିଙ୍ଗ (କଣିକା) ଦ୍ୱାରା ଭସ୍ମୀଭୂତ" },
                        { word: "ବ୍ରହ୍ମ-ଈଶ-ଶକ୍ର-ଉତ୍କରାଃ", meaning: "ବ୍ରହ୍ମା, ଶିବ ଏବଂ ଇନ୍ଦ୍ରଙ୍କ ସମେତ ଦେବଗଣ" }
                    ]
                },
                {
                    id: "ସମାପ୍ତି",
                    lyric: "ଇତି ଶ୍ରୀମଦ୍ ଆନନ୍ଦତୀର୍ଥ ଭଗବତ୍ ପାଦାଚାର୍ଯ୍ୟ ବିରଚିତା\nଶ୍ରୀ ନରସିଂହ ନଖସ୍ତୁତିଃ ସମ୍ପୂର୍ଣ୍ଣମ୍ ॥",
                    translation: "ଏହିପରି ଶ୍ରୀମଦ୍ ଆନନ୍ଦତୀର୍ଥ ଭଗବତ୍ ପାଦାଚାର୍ଯ୍ୟ (ଶ୍ରୀପାଦ ମଧ୍ୱାଚାର୍ଯ୍ୟ)ଙ୍କ ଦ୍ୱାରା ରଚିତ ପରମ ପବିତ୍ର ଶ୍ରୀ ନରସିଂହ ନଖ ସ୍ତୁତି ସମ୍ପୂର୍ଣ୍ଣ ହେଲା।",
                    wordMeanings: [
                        { word: "ଇତି", meaning: "ଏହିପରି" },
                        { word: "ଶ୍ରୀମଦ୍ ଆନନ୍ଦତୀର୍ଥ ଭଗବତ୍ ପାଦାଚାର୍ଯ୍ୟ", meaning: "ପରମହଂସ ଶ୍ରୀପାଦ ମଧ୍ୱାଚାର୍ଯ୍ୟଙ୍କ" },
                        { word: "ବିରଚିତା", meaning: "ରଚିତ" },
                        { word: "ଶ୍ରୀ ନରସିଂହ ନଖସ୍ତୁତିଃ", meaning: "ଭଗବାନ ଶ୍ରୀନରସିଂହଙ୍କ ନଖ ସ୍ତୁତି" },
                        { word: "ସମ୍ପୂର୍ଣ୍ଣମ୍", meaning: "ସମ୍ପୂର୍ଣ୍ଣ ହେଲା" }
                    ]
                }
            ]
        }
    },
    {
        "id": "song-narayanakavacam",
        "title": "ଶ୍ରୀ ନାରାୟଣ କବଚମ୍ (Sri Narayana Kavacam)",
        "title_odia": "ଶ୍ରୀ ନାରାୟଣ କବଚମ୍",
        "title_english": "Sri Narayana Kavacam",
        "category": "Songs",
        "type": "html",
        "author": "Vyasadeva",
        "tags": [
            "Narayana Kavacam",
            "Narayana Kavacha",
            "Sri Narayana Kavacam",
            "Vyasadeva",
            "Srimad Bhagavatam",
            "Kavacam",
            "Stotram",
            "ଶ୍ରୀ ନାରାୟଣ କବଚମ୍",
            "ବ୍ୟାସଦେବ"
        ],
        "description": "ଶ୍ରୀମଦ୍-ଭାଗବତମ୍ ଷଷ୍ଠ ସ୍କନ୍ଧ ଅଷ୍ଟମ ଅଧ୍ୟାୟରେ ବିଶ୍ୱରୂପଙ୍କ ଦ୍ୱାରା ଦେବରାଜ ଇନ୍ଦ୍ରଙ୍କୁ ପ୍ରଦତ୍ତ ପରମ କଲ୍ୟାଣକାରୀ ସର୍ବସଙ୍କଟନାଶକ ଶ୍ରୀ ନାରାୟଣ କବଚ ସ୍ତୋତ୍ରମ୍ ।",
        "audioUrl": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Narayana%20Kavacha%20BBT%20Art%20HD.mp3",
        "vocalist": "Vaishnavas",
        "audioVersions": [
            {
                "label": "Vaishnavas",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Narayana%20Kavacha%20BBT%20Art%20HD.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-narayanakavacam",
            "title": "ଶ୍ରୀ ନାରାୟଣ କବଚମ୍ (Sri Narayana Kavacam)",
            "title_odia": "ଶ୍ରୀ ନାରାୟଣ କବଚମ୍",
            "title_english": "Sri Narayana Kavacam",
            "author": "Vyasadeva",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Narayana%20Kavacam_More%20Songs_15",
            "verses": [
                {
                    "id": 1,
                    "lyric": "ଓଁ ହରିର୍ ବିଦଧ୍ୟାନ୍ ମମ ସର୍ବ-ରକ୍ଷାଂ\nନ୍ୟସ୍ତାଙ୍ଘ୍ରି-ପଦ୍ମଃ ପତଗେନ୍ଦ୍ର-ପୃଷ୍ଠେ ।\nଦରାରି-ଚର୍ମାସି-ଗଦେଷୁ-ଚାପ-\nପାଶାନ୍ ଦଧାନୋ ’ଷ୍ଟ-ଗୁଣୋ ’ଷ୍ଟ-ବାହୁଃ ॥ ୧ ॥",
                    "translation": "ପକ୍ଷୀରାଜ ଗରୁଡ଼ଙ୍କ ପୃଷ୍ଠରେ ନିଜ ଶ୍ରୀଚରଣକମଳ ଅର୍ପଣ କରି ବିରାଜମାନ ତଥା ଅଷ୍ଟସିଦ୍ଧି-ସମ୍ପନ୍ନ ପରମେଶ୍ୱର ଭଗବାନ ଶ୍ରୀହରି ନିଜର ଅଷ୍ଟବାହୁରେ ଶଙ୍ଖ, ଚକ୍ର, ଢାଲ, ଖଡ୍ଗ, ଗଦା, ବାଣ, ଧନୁ ଓ ପାଶ ଧାରଣ କରି ସର୍ବଦା ମୋତେ ସମସ୍ତ ବିପଦରୁ ରକ୍ଷା କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଓଁ ହରିଃ",
                            "meaning": "ପରମେଶ୍ୱର ଭଗବାନ ଶ୍ରୀହରି"
                        },
                        {
                            "word": "ବିଦଧ୍ୟାତ୍ ମମ ସର୍ବ-ରକ୍ଷାମ୍",
                            "meaning": "ମୋତେ ସମସ୍ତ ପ୍ରକାରେ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ନ୍ୟସ୍ତ-ଅଙ୍ଘ୍ରି-ପଦ୍ମଃ",
                            "meaning": "ନିଜ ଚରଣକମଳ ଅର୍ପଣ କରି"
                        },
                        {
                            "word": "ପତଗେନ୍ଦ୍ର-ପୃଷ୍ଠେ",
                            "meaning": "ପକ୍ଷୀରାଜ ଗରୁଡ଼ଙ୍କ ପୃଷ୍ଠଦେଶରେ"
                        },
                        {
                            "word": "ଦର-ଅରି-ଚର୍ମ-ଅସି",
                            "meaning": "ଶଙ୍ଖ, ଚକ୍ର, ଢାଲ ଓ ଖଡ୍ଗ"
                        },
                        {
                            "word": "ଗଦା-ଇଷୁ-ଚାପ-ପାଶାନ୍",
                            "meaning": "ଗଦା, ବାଣ, ଧନୁ ଏବଂ ପାଶ"
                        },
                        {
                            "word": "ଦଧାନଃ ଅଷ୍ଟ-ବାହୁଃ",
                            "meaning": "ନିଜର ଅଷ୍ଟହସ୍ତରେ ଧାରଣ କରି"
                        },
                        {
                            "word": "ଅଷ୍ଟ-ଗୁଣଃ",
                            "meaning": "ଅଷ୍ଟସିଦ୍ଧିରେ ପରିପୂର୍ଣ୍ଣ ପ୍ରଭୁ"
                        }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ଜଳେଷୁ ମାଂ ରକ୍ଷତୁ ମତ୍ସ୍ୟ-ମୂର୍ତିର୍\nଯାଦୋ-ଗଣେଭ୍ୟୋ ବରୁଣସ୍ୟ ପାଶାତ୍ ।\nସ୍ଥଳେଷୁ ମାୟାବଟୁ-ବାମନୋ ’ବ୍ୟାତ୍\nତ୍ରିବିକ୍ରମଃ ଖେ ’ବତୁ ବିଶ୍ୱରୂପଃ ॥ ୨ ॥",
                    "translation": "ଭଗବାନଙ୍କ ମତ୍ସ୍ୟ ଅବତାର ଜଳ ମଧ୍ୟରେ ହିଂସ୍ର ଜଳଜନ୍ତୁ ଏବଂ ବରୁଣଙ୍କ ପାଶରୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ। ନିଜ ଯୋଗମାୟା ପ୍ରଭାବରେ କ୍ଷୁଦ୍ର ବଟୁ ବ୍ରାହ୍ମଣ ରୂପ ଧାରଣ କରିଥିବା ବାମନଦେବ ଭୂମି ଉପରେ ମୋର ରକ୍ଷା କରନ୍ତୁ ଏବଂ ସମଗ୍ର ବ୍ରହ୍ମାଣ୍ଡକୁ ବ୍ୟାପ୍ତ କରିଥିବା ତ୍ରିବିକ୍ରମ ବିଶ୍ୱରୂପ ଭଗବାନ ଆକାଶରେ ମୋତେ ସର୍ବଦା ସୁରକ୍ଷା ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଜଳେଷୁ ମାଂ ରକ୍ଷତୁ",
                            "meaning": "ଜଳ ମଧ୍ୟରେ ମୋତେ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ମତ୍ସ୍ୟ-ମୂର୍ତିଃ",
                            "meaning": "ଭଗବାନ ମତ୍ସ୍ୟ ଅବତାର"
                        },
                        {
                            "word": "ଯାଦୋ-ଗଣେଭ୍ୟଃ",
                            "meaning": "ହିଂସ୍ର ଜଳଜନ୍ତୁମାନଙ୍କଠାରୁ"
                        },
                        {
                            "word": "ବରୁଣସ୍ୟ ପାଶାତ୍",
                            "meaning": "ବରୁଣଦେବଙ୍କ ପାଶରୁ"
                        },
                        {
                            "word": "ସ୍ଥଳେଷୁ ମାୟା-ବଟୁ-ବାମନଃ",
                            "meaning": "ଭୂମିରେ ଲୀଳାମୟ କ୍ଷୁଦ୍ର ବାମନଦେବ"
                        },
                        {
                            "word": "ଅବ୍ୟାତ୍",
                            "meaning": "ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ତ୍ରିବିକ୍ରମଃ ବିଶ୍ୱରୂପଃ",
                            "meaning": "ତ୍ରିଲୋକ ବ୍ୟାପ୍ତ ତ୍ରିବିକ୍ରମ ପ୍ରଭୁ"
                        },
                        {
                            "word": "ଖେ ଅବତୁ",
                            "meaning": "ଆକାଶ ବା ଅନ୍ତରୀକ୍ଷରେ ରକ୍ଷା କରନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ଦୁର୍ଗେଷ୍ୱ୍ ଅଟବ୍ୟ୍-ଆଜି-ମୁଖାଦିଷୁ ପ୍ରଭୁଃ\nପାୟାନ୍ ନୃସିଂହୋ ’ସୁର-ଯୂଥପାରିଃ ।\nବିମୁଞ୍ଚତୋ ଯସ୍ୟ ମହାଟ୍ଟ-ହାସଂ\nଦିଶୋ ବିନେଦୁର୍ ନ୍ୟପତଂଶ୍ ଚ ଗର୍ଭାଃ ॥ ୩ ॥",
                    "translation": "ଦୁର୍ଗମ ସ୍ଥାନ, ଅରଣ୍ୟ ତଥା ଯୁଦ୍ଧକ୍ଷେତ୍ରରେ ଦୈତ୍ୟରାଜ ହିରଣ୍ୟକଶିପୁର ଶତ୍ରୁ ଭଗବାନ ଶ୍ରୀନୃସିଂହଦେବ ମୋତେ ରକ୍ଷା କରନ୍ତୁ। ଯାହାଙ୍କର ପ୍ରଚଣ୍ଡ ଅଟ୍ଟହାସ୍ୟର ଗର୍ଜନରେ ସମସ୍ତ ଦିଗ ପ୍ରକମ୍ପିତ ହୋଇ ଦାନବୀମାନଙ୍କର ଗର୍ଭପାତ ହୋଇଯାଇଥିଲା, ସେହି ପ୍ରଭୁ ମୋତେ ସର୍ବଦା ଅଭୟ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଦୁର୍ଗେଷୁ ଅଟବୀ",
                            "meaning": "ଦୁର୍ଗମ ସ୍ଥାନ ଓ ଘୋର ଜଙ୍ଗଲରେ"
                        },
                        {
                            "word": "ଆଜି-ମୁଖ-ଆଦିଷୁ",
                            "meaning": "ଯୁଦ୍ଧକ୍ଷେତ୍ରର ଅଗ୍ରଭାଗ ପ୍ରଭୃତିରେ"
                        },
                        {
                            "word": "ପାୟାତ୍ ନୃସିଂହଃ",
                            "meaning": "ଭଗବାନ ନୃସିଂହଦେବ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଅସୁର-ଯୂଥପ-ଅରିଃ",
                            "meaning": "ଦୈତ୍ୟରାଜ ହିରଣ୍ୟକଶିପୁର ଶତ୍ରୁ"
                        },
                        {
                            "word": "ଯସ୍ୟ ମହାଟ୍ଟ-ହାସମ୍",
                            "meaning": "ଯାହାଙ୍କର ଭୟଙ୍କର ପ୍ରଚଣ୍ଡ ଅଟ୍ଟହାସ୍ୟ"
                        },
                        {
                            "word": "ବିମୁଞ୍ଚତଃ ଦିଶଃ ବିନେଦୁଃ",
                            "meaning": "ପ୍ରକଟ ହେବା ମାତ୍ରେ ସମସ୍ତ ଦିଗ କମ୍ପିତ ହେଲା"
                        },
                        {
                            "word": "ନ୍ୟପତନ୍ ଚ ଗର୍ଭାଃ",
                            "meaning": "ଏବଂ ଦାନବୀମାନଙ୍କର ଗର୍ଭପାତ ହୋଇଗଲା"
                        }
                    ]
                },
                {
                    "id": 4,
                    "lyric": "ରକ୍ଷତ୍ୱ୍ ଅସୌ ମାଧ୍ୱନି ଯଜ୍ଞ-କଳ୍ପଃ\nସ୍ୱ-ଦଂଷ୍ଟ୍ରୟୋନ୍ନୀତ-ଧରୋ ବରାହଃ ।\nରାମୋ ’ଦ୍ରି-କୂଟେଷ୍ୱ୍ ଅଥ ବିପ୍ରବାସେ\nସଲକ୍ଷ୍ମଣୋ ’ବ୍ୟାଦ୍ ଭରତାଗ୍ରଜୋ ’ସ୍ମାନ୍ ॥ ୪ ॥",
                    "translation": "ନିଜ ତୀକ୍ଷ୍ଣ ଦନ୍ତାଗ୍ରରେ ସମଗ୍ର ପୃଥିବୀକୁ ରସାତଳରୁ ଉଦ୍ଧାର କରିଥିବା ଯଜ୍ଞବରାହ ଭଗବାନ ପଥ ମଧ୍ୟରେ ମୋତେ ରକ୍ଷା କରନ୍ତୁ। ପର୍ବତ ଶିଖରରେ ଭଗବାନ ପର୍ଶୁରାମ ଏବଂ ବିଦେଶ ତଥା ପ୍ରବାସରେ ଭରତଙ୍କ ଜ୍ୟେଷ୍ଠ ଭ୍ରାତା ପ୍ରଭୁ ଶ୍ରୀରାମଚନ୍ଦ୍ର ଭ୍ରାତା ଲକ୍ଷ୍ମଣଙ୍କ ସହିତ ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ରକ୍ଷତୁ ଅଧ୍ୱନି",
                            "meaning": "ମାର୍ଗ ବା ଯାତ୍ରା ସମୟରେ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଯଜ୍ଞ-କଳ୍ପଃ ବରାହଃ",
                            "meaning": "ଯଜ୍ଞସ୍ୱରୂପ ଭଗବାନ ବରାହଦେବ"
                        },
                        {
                            "word": "ସ୍ୱ-ଦଂଷ୍ଟ୍ରୟା ଉନ୍ନୀତ-ଧରଃ",
                            "meaning": "ନିଜ ଦନ୍ତରେ ପୃଥିବୀକୁ ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ରାମଃ ଅଦ୍ରି-କୂଟେଷୁ",
                            "meaning": "ପର୍ବତ ଶିଖରମାନଙ୍କରେ ପର୍ଶୁରାମ"
                        },
                        {
                            "word": "ଅଥ ବିପ୍ରବାସେ",
                            "meaning": "ତଥା ବିଦେଶ ବା ପ୍ରବାସରେ"
                        },
                        {
                            "word": "ସ-ଲକ୍ଷ୍ମଣଃ ଭରତ-ଅଗ୍ରଜଃ",
                            "meaning": "ଲକ୍ଷ୍ମଣଙ୍କ ସହିତ ଶ୍ରୀରାମଚନ୍ଦ୍ର"
                        },
                        {
                            "word": "ଅବ୍ୟାତ୍ ଅସ୍ମାନ୍",
                            "meaning": "ଆମ୍ଭମାନଙ୍କୁ ସୁରକ୍ଷା ଦିଅନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 5,
                    "lyric": "ମାମ୍ ଉଗ୍ର-ଧର୍ମାଦ୍ ଅଖିଳାତ୍ ପ୍ରମାଦାନ୍\nନାରାୟଣଃ ପାତୁ ନରଶ୍ ଚ ହାସାତ୍ ।\nଦତ୍ତସ୍ ତ୍ୱ୍ ଅଯୋଗାଦ୍ ଅଥ ଯୋଗ-ନାଥଃ\nପାୟାଦ୍ ଗୁଣେଶଃ କପିଳଃ କର୍ମ-ବନ୍ଧାତ୍ ॥ ୫ ॥",
                    "translation": "ଭଗବାନ ନାରାୟଣ ଉଗ୍ର କୁପଥ ଓ ସମସ୍ତ ପ୍ରକାର ପ୍ରମାଦରୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ, ନର ଭଗବାନ ଅହଙ୍କାରରୁ ରକ୍ଷା କରନ୍ତୁ। ଯୋଗେଶ୍ୱର ଦତ୍ତାତ୍ରେୟ ଭକ୍ତିଯୋଗରୁ ବିଚ୍ୟୁତ ହେବାରୁ ରକ୍ଷା କରନ୍ତୁ ଏବଂ ସମସ୍ତ ସଦ୍‌ଗୁଣର ଅଧୀଶ୍ୱର ଭଗବାନ କପିଳଦେବ ସକାମ କର୍ମର ବନ୍ଧନରୁ ମୋତେ ମୁକ୍ତ ଓ ସୁରକ୍ଷିତ ରଖନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଉଗ୍ର-ଧର୍ମାତ୍ ଅଖିଳାତ୍ ପ୍ରମାଦାତ୍",
                            "meaning": "ଉଗ୍ର କୁପଥ ଓ ସମସ୍ତ ପ୍ରମାଦରୁ"
                        },
                        {
                            "word": "ନାରାୟଣଃ ପାତୁ",
                            "meaning": "ଭଗବାନ ନାରାୟଣ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ନରଃ ଚ ହାସାତ୍",
                            "meaning": "ଏବଂ ନର-ଋଷି ଗର୍ବ ଓ ଅହଙ୍କାରରୁ"
                        },
                        {
                            "word": "ଦତ୍ତଃ ତୁ ଅଯୋଗାତ୍",
                            "meaning": "ଦତ୍ତାତ୍ରେୟ ଭକ୍ତିଯୋଗର ବିଚ୍ୟୁତିରୁ"
                        },
                        {
                            "word": "ଯୋଗ-ନାଥଃ",
                            "meaning": "ସମସ୍ତ ଯୋଗର ପ୍ରଭୁ"
                        },
                        {
                            "word": "ପାୟାତ୍ ଗୁଣେଶଃ କପିଳଃ",
                            "meaning": "ସଦ୍‌ଗୁଣନିଧି ଭଗବାନ କପିଳ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "କର୍ମ-ବନ୍ଧାତ୍",
                            "meaning": "ସକାମ କର୍ମର ବନ୍ଧନରୁ"
                        }
                    ]
                },
                {
                    "id": 6,
                    "lyric": "ସନତ୍-କୁମାରୋ ’ବତୁ କାମଦେବାଦ୍\nଧୟଶୀର୍ଷା ମାଂ ପଥି ଦେବ-ହେଳନାତ୍ ।\nଦେବର୍ଷି-ବର୍ଯ୍ୟଃ ପୁରୁଷାର୍ଚନ୍ରାନ୍ତରାତ୍\nକୂର୍ମୋ ହରିର୍ ମାଂ ନିରୟାଦ୍ ଅଶେଷାତ୍ ॥ ୬ ॥",
                    "translation": "ସନତକୁମାର କାମବାସନାରୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ। ଭଗବାନ ହୟଗ୍ରୀବ ପଥ ମଧ୍ୟରେ ତଥା ଶୁଭକାର୍ଯ୍ୟରେ ଭଗବାନଙ୍କୁ ପ୍ରଣାମ ନ କରିବା ରୂପୀ ଅପରାଧରୁ ରକ୍ଷା କରନ୍ତୁ। ଦେବର୍ଷି ନାରଦ ଶ୍ରୀବିଗ୍ରହ ସେବାରେ ହେଉଥିବା ସମସ୍ତ ସେବାପରାଧରୁ ରକ୍ଷା କରନ୍ତୁ ଏବଂ କୂର୍ମ ଅବତାର ଭଗବାନ ଶ୍ରୀହରି ଅଶେଷ ନରକର ଯାତନାରୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ସନତ୍-କୁମାରଃ ଅବତୁ",
                            "meaning": "ସନତକୁମାର ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "କାମଦେବାତ୍",
                            "meaning": "କାମବାସନାର ଆକ୍ରମଣରୁ"
                        },
                        {
                            "word": "ହୟଶୀର୍ଷା ମାମ୍",
                            "meaning": "ଭଗବାନ ହୟଗ୍ରୀବ ମୋତେ"
                        },
                        {
                            "word": "ପଥି ଦେବ-ହେଳନାତ୍",
                            "meaning": "ପଥରେ ଈଶ୍ୱରଙ୍କ ପ୍ରତି ଅବହେଳାଜନିତ ଅପରାଧରୁ"
                        },
                        {
                            "word": "ଦେବର୍ଷି-ବର୍ଯ୍ୟଃ",
                            "meaning": "ଶ୍ରେଷ୍ଠ ଦେବର୍ଷି ନାରଦ"
                        },
                        {
                            "word": "ପୁରୁଷ-ଅର୍ଚନ-ଅନ୍ତରାତ୍",
                            "meaning": "ଶ୍ରୀବିଗ୍ରହ ଅର୍ଚ୍ଚନାରେ ଘଟୁଥିବା ଅପରାଧରୁ"
                        },
                        {
                            "word": "କୂର୍ମଃ ହରିଃ",
                            "meaning": "କୂର୍ମରୂପୀ ଶ୍ରୀହରି"
                        },
                        {
                            "word": "ନିରୟାତ୍ ଅଶେଷାତ୍",
                            "meaning": "ଅସୀମ ନରକ ଯନ୍ତ୍ରଣାରୁ"
                        }
                    ]
                },
                {
                    "id": 7,
                    "lyric": "ଧନ୍ୱନ୍ତରିର୍ ଭଗବାନ୍ ପାତ୍ୱ୍ ଅପଥ୍ୟାଦ୍\nଦ୍ୱନ୍ଦ୍ୱାଦ୍ ଭୟାଦ୍ ଋଷଭୋ ନିର୍ଜିତାତ୍ମା ।\nଯଜ୍ଞଶ୍ ଚ ଲୋକାଦ୍ ଅବତାଜ୍ ଜନାନ୍ତାଦ୍\nବଳୋ ଗଣାତ୍ କ୍ରୋଧ-ବଶାଦ୍ ଅହୀନ୍ଦ୍ରଃ ॥ ୭ ॥",
                    "translation": "ଭଗବାନ ଧନ୍ୱନ୍ତରୀ କୁପଥ୍ୟ ଭୋଜନ ତଥା ଶାରୀରିକ ରୋଗବ୍ୟାଧିରୁ ମୋତେ ମୁକ୍ତ ରଖନ୍ତୁ। ଜିତେନ୍ଦ୍ରିୟ ଭଗବାନ ଋଷଭଦେବ ଶୀତ-ଉଷ୍ଣ ଆଦି ଦ୍ୱନ୍ଦ୍ୱ ଓ ଭୟରୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ। ଭଗବାନ ଯଜ୍ଞ ଲୋକନିନ୍ଦା ଓ ସାଂସାରିକ ବିପଦରୁ ରକ୍ଷା କରନ୍ତୁ ଏବଂ ଅନନ୍ତ ଶେଷ ସ୍ୱରୂପ ବଳରାମ କ୍ରୋଧୀ ବିଷାକ୍ତ ସର୍ପମାନଙ୍କଠାରୁ ମୋତେ ସର୍ବଦା ସୁରକ୍ଷା ଦିଅନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଧନ୍ୱନ୍ତରିଃ ଭଗବାନ୍ ପାତୁ",
                            "meaning": "ଭଗବାନ ଧନ୍ୱନ୍ତରୀ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଅପଥ୍ୟାତ୍",
                            "meaning": "ଅହିତକର ଖାଦ୍ୟ ଓ ରୋଗରୁ"
                        },
                        {
                            "word": "ଦ୍ୱନ୍ଦ୍ୱାତ୍ ଭୟାତ୍",
                            "meaning": "ଦ୍ୱନ୍ଦ୍ୱଜନିତ ଭୟରୁ"
                        },
                        {
                            "word": "ଋଷଭଃ ନିର୍ଜିତାତ୍ମା",
                            "meaning": "ଜିତେନ୍ଦ୍ରିୟ ଭଗବାନ ଋଷଭଦେବ"
                        },
                        {
                            "word": "ଯଜ୍ଞଃ ଚ ଲୋକାତ୍ ଅବତାତ୍",
                            "meaning": "ଭଗବାନ ଯଜ୍ଞ ଲୋକାପବାଦରୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଜନାନ୍ତାତ୍",
                            "meaning": "ଦୁର୍ଜନଙ୍କ ହିଂସାରୁ"
                        },
                        {
                            "word": "ବଳଃ ଅହୀନ୍ଦ୍ରଃ",
                            "meaning": "ଅନନ୍ତଦେବ ସ୍ୱରୂପ ଶ୍ରୀବଳରାମ"
                        },
                        {
                            "word": "ଗଣାତ୍ କ୍ରୋଧ-ବଶାତ୍",
                            "meaning": "କ୍ରୋଧବଶ କାଳସର୍ପସମୂହଠାରୁ"
                        }
                    ]
                },
                {
                    "id": 8,
                    "lyric": "ଦ୍ୱୈପାୟନୋ ଭଗବାନ୍ ଅପ୍ରବୋଧାଦ୍\nବୁଦ୍ଧସ୍ ତୁ ପାଷଣ୍ଡ-ଗଣ-ପ୍ରମାଦାତ୍ ।\nକଳ୍କିଃ କଳେଃ କାଳ-ମଳାତ୍ ପ୍ରପାତୁ\nଧର୍ମାବନାୟୋରୁ-କୃତାବତାରଃ ॥ ୮ ॥",
                    "translation": "ଭଗବାନ ଶ୍ରୀ ବ୍ୟାସଦେବ ବୈଦିକ ଜ୍ଞାନର ଅଭାବଜନିତ ଅଜ୍ଞାନତାରୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ। ଭଗବାନ ବୁଦ୍ଧଦେବ ବେଦବିରୋଧୀ ପାଷଣ୍ଡୀମାନଙ୍କ ମୋହ ତଥା ପ୍ରମାଦରୁ ରକ୍ଷା କରନ୍ତୁ। ଧର୍ମର ରକ୍ଷା ନିମନ୍ତେ ଅବତୀର୍ଣ୍ଣ ହେଉଥିବା ଭଗବାନ କଳ୍କିଦେବ କଳିଯୁଗର କଳୁଷତା ଓ ସମସ୍ତ ପାପ-ମଳରୁ ମୋତେ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଦ୍ୱୈପାୟନଃ ଭଗବାନ୍",
                            "meaning": "ଶ୍ରୀକୃଷ୍ଣ ଦ୍ୱୈପାୟନ ବ୍ୟାସଦେବ"
                        },
                        {
                            "word": "ଅପ୍ରବୋଧାତ୍",
                            "meaning": "ଅଜ୍ଞାନତା ଓ ଅବିଦ୍ୟାରୁ"
                        },
                        {
                            "word": "ବୁଦ୍ଧଃ ତୁ",
                            "meaning": "ଭଗବାନ ବୁଦ୍ଧଦେବ"
                        },
                        {
                            "word": "ପାଷଣ୍ଡ-ଗଣ-ପ୍ରମାଦାତ୍",
                            "meaning": "ପାଷଣ୍ଡମାନଙ୍କ ଭ୍ରାନ୍ତି ଓ ପ୍ରମାଦରୁ"
                        },
                        {
                            "word": "କଳ୍କିଃ ପ୍ରପାତୁ",
                            "meaning": "ଭଗବାନ କଳ୍କିଦେବ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "କଳେଃ କାଳ-ମଳାତ୍",
                            "meaning": "କଳିଯୁଗର ଘୋର ପାପମଳରୁ"
                        },
                        {
                            "word": "ଧର୍ମ-ଅବନାୟ",
                            "meaning": "ଧର୍ମର ସଂରକ୍ଷଣ ନିମନ୍ତେ"
                        },
                        {
                            "word": "ଉରୁ-କୃତ-ଅବତାରଃ",
                            "meaning": "ଦିବ୍ୟ ଅବତାର ଧାରଣ କରିଥିବା ପ୍ରଭୁ"
                        }
                    ]
                },
                {
                    "id": 9,
                    "lyric": "ମାଂ କେଶବୋ ଗଦୟା ପ୍ରାତର୍ ଅବ୍ୟାଦ୍\nଗୋବିନ୍ଦ ଆସଙ୍ଗବମ୍ ଆତ୍ତ-ବେଣୁଃ ।\nନାରାୟଣଃ ପ୍ରାହ୍ଣ ଉଦାତ୍ତ-ଶକ୍ତିର୍\nମଧ୍ୟନ୍ଦିନେ ବିଷ୍ଣୁର୍ ଅରୀନ୍ଦ୍ର-ପାଣିଃ ॥ ୯ ॥",
                    "translation": "ଦିବସର ପ୍ରଥମ ପ୍ରହର (ପ୍ରାତଃକାଳ)ରେ ଭଗବାନ କେଶବ ନିଜ ଗଦା ଦ୍ୱାରା ମୋତେ ରକ୍ଷା କରନ୍ତୁ; ଦ୍ୱିତୀୟ ପ୍ରହରରେ ମଧୁର ବଂଶୀଧାରୀ ପ୍ରଭୁ ଗୋବିନ୍ଦ ମୋର ରକ୍ଷା କରନ୍ତୁ; ତୃତୀୟ ପ୍ରହର (ପୂର୍ବାହ୍ନ)ରେ ସର୍ବଶକ୍ତିମାନ୍ ଭଗବାନ ନାରାୟଣ ମୋତେ ରକ୍ଷା କରନ୍ତୁ ଏବଂ ମଧ୍ୟାହ୍ନ ସମୟରେ ହସ୍ତରେ ସୁଦର୍ଶନ ଚକ୍ର ଧାରଣ କରିଥିବା ଭଗବାନ ଶ୍ରୀବିଷ୍ଣୁ ମୋତେ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ମାଂ କେଶବଃ ଗଦୟା ପ୍ରାତଃ ଅବ୍ୟାତ୍",
                            "meaning": "ପ୍ରାତଃକାଳରେ ଭଗବାନ କେଶବ ଗଦା ଦ୍ୱାରା ମୋତେ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଆସଙ୍ଗବମ୍ ଗୋବିନ୍ଦଃ ଆତ୍ତ-ବେଣୁଃ",
                            "meaning": "ସଙ୍ଗବ କାଳ (୨ୟ ପ୍ରହର)ରେ ବଂଶୀଧାରୀ ଗୋବିନ୍ଦ"
                        },
                        {
                            "word": "ନାରାୟଣଃ ପ୍ରାହ୍ଣେ ଉଦାତ୍ତ-ଶକ୍ତିଃ",
                            "meaning": "ପୂର୍ବାହ୍ନରେ ସର୍ବଶକ୍ତିମାନ୍ ନାରାୟଣ"
                        },
                        {
                            "word": "ମଧ୍ୟନ୍ଦିନେ ବିଷ୍ଣୁଃ ଅରୀନ୍ଦ୍ର-ପାଣିଃ",
                            "meaning": "ମଧ୍ୟାହ୍ନରେ ହସ୍ତରେ ଚକ୍ରଧାରୀ ବିଷ୍ଣୁ"
                        }
                    ]
                },
                {
                    "id": 10,
                    "lyric": "ଦେବୋ ’ପରାହ୍ଣେ ମଧୁ-ହୋଗ୍ରଧନ୍ୱା\nସାୟଂ ତ୍ରି-ଧାମାବତୁ ମାଧବୋ ମାମ୍ ।\nଦୋଷେ ହୃଷୀକେଶ ଉତାର୍ଧ-ରାତ୍ରେ\nନିଶୀଥ ଏକୋ ’ବତୁ ପଦ୍ମନାଭଃ ॥ ୧୦ ॥",
                    "translation": "ଅପରାହ୍ନରେ ଧନୁର୍ଦ୍ଧାରୀ ମଧୁସୂଦନ ପ୍ରଭୁ ମୋତେ ରକ୍ଷା କରନ୍ତୁ; ସାୟଂକାଳରେ ତ୍ରିଧାମା ଭଗବାନ ମାଧବ ମୋତେ ରକ୍ଷା କରନ୍ତୁ; ପ୍ରଦୋଷ (ରାତ୍ରିର ପ୍ରଥମ ଭାଗ)ରେ ଇନ୍ଦ୍ରିୟେଶ୍ୱର ହୃଷୀକେଶ ଏବଂ ମଧ୍ୟରାତ୍ରି ସମୟରେ ଏକମାତ୍ର ଭଗବାନ ପଦ୍ମନାଭ ମୋତେ ସର୍ବଦା ସୁରକ୍ଷା ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଅପରାହ୍ଣେ ମଧୁ-ହା ଉଗ୍ର-ଧନ୍ୱା",
                            "meaning": "ଅପରାହ୍ନରେ ପ୍ରଚଣ୍ଡ ଧନୁର୍ଦ୍ଧାରୀ ମଧୁସୂଦନ"
                        },
                        {
                            "word": "ସାୟଂ ତ୍ରି-ଧାମା ଅବତୁ ମାଧବଃ ମାମ୍",
                            "meaning": "ସନ୍ଧ୍ୟାକାଳରେ ପରମଧାମସ୍ୱରୂପ ମାଧବ ମୋତେ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଦୋଷେ ହୃଷୀକେଶଃ",
                            "meaning": "ରାତ୍ରିର ଆରମ୍ଭରେ ପ୍ରଭୁ ହୃଷୀକେଶ"
                        },
                        {
                            "word": "ଉତ ଅର୍ଧ-ରାତ୍ରେ ନିଶୀଥେ",
                            "meaning": "ତଥା ଗଭୀର ମଧ୍ୟରାତ୍ରିରେ"
                        },
                        {
                            "word": "ଏକଃ ଅବତୁ ପଦ୍ମନାଭଃ",
                            "meaning": "ଏକମାତ୍ର ଭଗବାନ ପଦ୍ମନାଭ ରକ୍ଷା କରନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 11,
                    "lyric": "ଶ୍ରୀବତ୍ସ-ଧାମାପର-ରାତ୍ର ଈଶଃ\nପ୍ରତ୍ୟୂଷ ଈଶୋ ’ସି-ଧରୋ ଜନାର୍ଦନଃ ।\nଦାମୋଦରୋ ’ବ୍ୟାଦ୍ ଅନୁସନ୍ଧ୍ୟଂ ପ୍ରଭାତେ\nବିଶ୍ୱେଶ୍ୱରୋ ଭଗବାନ୍ କାଳ-ମୂର୍ତିଃ ॥ ୧୧ ॥",
                    "translation": "ଅପର-ରାତ୍ରି (ମଧ୍ୟରାତ୍ରି ପରେ)ରେ ବକ୍ଷରେ ଶ୍ରୀବତ୍ସ ଚିହ୍ନ ଧାରଣ କରିଥିବା ପରମେଶ୍ୱର ମୋତେ ରକ୍ଷା କରନ୍ତୁ; ପ୍ରତ୍ୟୂଷ (ଉଷାକାଳ)ରେ ହସ୍ତରେ ଖଡ୍ଗଧାରୀ ପ୍ରଭୁ ଜନାର୍ଦନ ମୋର ରକ୍ଷା କରନ୍ତୁ; ପ୍ରଭାତରେ ଭଗବାନ ଦାମୋଦର ଏବଂ ଦିବାରାତ୍ରିର ସମସ୍ତ ସନ୍ଧିକ୍ଷଣରେ କାଳମୂର୍ତ୍ତି ବିଶ୍ୱେଶ୍ୱର ଭଗବାନ ମୋତେ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଶ୍ରୀବତ୍ସ-ଧାମା ଅପର-ରାତ୍ରେ ଈଶଃ",
                            "meaning": "ମଧ୍ୟରାତ୍ରି ପରେ ଶ୍ରୀବତ୍ସଧାରୀ ପରମେଶ୍ୱର"
                        },
                        {
                            "word": "ପ୍ରତ୍ୟୂଷେ ଈଶଃ ଅସି-ଧରଃ ଜନାର୍ଦନଃ",
                            "meaning": "ପ୍ରଭାତ ପୂର୍ବରୁ ଖଡ୍ଗଧାରୀ ଜନାର୍ଦନ"
                        },
                        {
                            "word": "ଦାମୋଦରଃ ଅବ୍ୟାତ୍ ପ୍ରଭାତେ",
                            "meaning": "ପ୍ରଭାତରେ ଭଗବାନ ଦାମୋଦର ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ଅନୁସନ୍ଧ୍ୟମ୍ ବିଶ୍ୱେଶ୍ୱରଃ",
                            "meaning": "ସମସ୍ତ ସନ୍ଧ୍ୟାକାଳରେ ବିଶ୍ୱପତି ଭଗବାନ"
                        },
                        {
                            "word": "କାଳ-ମୂର୍ତିଃ",
                            "meaning": "କାଳସ୍ୱରୂପ ପ୍ରଭୁ"
                        }
                    ]
                },
                {
                    "id": 12,
                    "lyric": "ଚକ୍ରଂ ଯୁଗାନ୍ତାନଳ-ତିଗ୍ମ-ନେମି\nଭ୍ରମତ୍ ସମନ୍ତାଦ୍ ଭଗବତ୍-ପ୍ରଯୁକ୍ତମ୍ ।\nଦନ୍ଦଗ୍ଧି ଦନ୍ଦଗ୍ଧ୍ୟ୍ ଅରି-ସୈନ୍ୟମ୍ ଆଶୁ\nକକ୍ଷଂ ଯଥା ବାତ-ସଖୋ ହୁତାଶଃ ॥ ୧୨ ॥",
                    "translation": "ଭଗବାନଙ୍କ ଦ୍ୱାରା ପ୍ରେରିତ ତଥା ଚତୁର୍ଦ୍ଦିଗରେ ଭ୍ରମଣଶୀଳ ହେ ସୁଦର୍ଶନ ଚକ୍ର! ଆପଣଙ୍କ ଧାର ଯୁଗାନ୍ତକାଳୀନ ପ୍ରଳୟାଗ୍ନି ସଦୃଶ ଅତ୍ୟନ୍ତ ତୀକ୍ଷ୍ଣ। ଯେପରି ପ୍ରଚଣ୍ଡ ବାୟୁର ସହାୟତାରେ ଅଗ୍ନି ଶୁଷ୍କ ଘାସବଣକୁ ତତକ୍ଷଣାତ୍ ଜଳାଇ ଭସ୍ମ କରିଦିଏ, ସେହିପରି ଆପଣ ଆମ୍ଭମାନଙ୍କ ଶତ୍ରୁସେନାକୁ ଅବିଳମ୍ବେ ସମ୍ପୂର୍ଣ୍ଣ ଭସ୍ମୀଭୂତ କରିଦିଅନ୍ତୁ!",
                    "wordMeanings": [
                        {
                            "word": "ଚକ୍ରମ୍ ଭଗବତ୍-ପ୍ରଯୁକ୍ତମ୍",
                            "meaning": "ଭଗବାନଙ୍କ ଦ୍ୱାରା ପ୍ରେରିତ ସୁଦର୍ଶନ ଚକ୍ର"
                        },
                        {
                            "word": "ଯୁଗାନ୍ତ-ଅନଳ-ତିଗ୍ମ-ନେମି",
                            "meaning": "ପ୍ରଳୟାଗ୍ନି ସଦୃଶ ତୀକ୍ଷ୍ଣ ଧାରବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ଭ୍ରମତ୍ ସମନ୍ତାତ୍",
                            "meaning": "ସବୁଆଡ଼େ ଭ୍ରମଣ କରି"
                        },
                        {
                            "word": "ଦନ୍ଦଗ୍ଧି ଦନ୍ଦଗ୍ଧି ଅରି-ସୈନ୍ୟମ୍ ଆଶୁ",
                            "meaning": "ଶତ୍ରୁସେନାକୁ ଶୀଘ୍ର ଭସ୍ମ କରନ୍ତୁ, ଭସ୍ମ କରନ୍ତୁ"
                        },
                        {
                            "word": "ଯଥା ବାତ-ସଖଃ ହୁତାଶଃ କକ୍ଷମ୍",
                            "meaning": "ଯେପରି ବାୟୁସଖା ଅଗ୍ନି ଶୁଷ୍କ ଘାସକୁ ଜଳାଇଦିଏ"
                        }
                    ]
                },
                {
                    "id": 13,
                    "lyric": "ଗଦେ ’ଶନି-ସ୍ପର୍ଶନ-ବିସ୍ଫୁଲିଙ୍ଗେ\nନିଷ୍ପିଣ୍ଢି ନିଷ୍ପିଣ୍ଢ୍ୟ୍ ଅଜିତ-ପ୍ରିୟାସି ।\nକୁଷ୍ମାଣ୍ଡ-ବୈନାୟକ-ଯକ୍ଷ-ରକ୍ଷୋ-\nଭୂତ-ଗ୍ରହାଂଶ୍ ଚୂର୍ଣ୍ଣୟ ଚୂର୍ଣ୍ଣୟାରୀନ୍ ॥ ୧୩ ॥",
                    "translation": "ବଜ୍ର ସଦୃଶ ଅଗ୍ନିସ୍ଫୁଲିଙ୍ଗ ନିର୍ଗତ କରୁଥିବା ହେ କୌମୋଦକୀ ଗଦା! ତୁମେ ଭଗବାନ ଅଜିତଙ୍କର ଅତ୍ୟନ୍ତ ପ୍ରିୟ ଏବଂ ମୁଁ ମଧ୍ୟ ତାଙ୍କର ସେବକ। ତେଣୁ ତୁମେ କୁଷ୍ମାଣ୍ଡ, ବୈନାୟକ, ଯକ୍ଷ, ରାକ୍ଷସ, ଭୂତ ତଥା ଦୁଷ୍ଟ ଗ୍ରହମାନଙ୍କୁ ବିନଷ୍ଟ କର, ବିନଷ୍ଟ କର ଏବଂ ଆମ୍ଭମାନଙ୍କର ସମସ୍ତ ଶତ୍ରୁଙ୍କୁ ସମ୍ପୂର୍ଣ୍ଣ ଚୂର୍ଣ୍ଣ-ବିଚୂର୍ଣ୍ଣ କରିଦିଅ!",
                    "wordMeanings": [
                        {
                            "word": "ଗଦେ ଅଶନି-ସ୍ପର୍ଶନ-ବିସ୍ଫୁଲିଙ୍ଗେ",
                            "meaning": "ବଜ୍ରତୁଲ୍ୟ ଅଗ୍ନିକଣା ଉତ୍ପନ୍ନକାରୀ ହେ ଗଦା!"
                        },
                        {
                            "word": "ଅଜିତ-ପ୍ରିୟା ଅସି",
                            "meaning": "ତୁମେ ଭଗବାନ ଶ୍ରୀହରିଙ୍କର ଅତ୍ୟନ୍ତ ପ୍ରିୟ"
                        },
                        {
                            "word": "ନିଷ୍ପିଣ୍ଢି ନିଷ୍ପିଣ୍ଢି",
                            "meaning": "ପିଷ୍ଟ କର, ବିନଷ୍ଟ କର"
                        },
                        {
                            "word": "କୁଷ୍ମାଣ୍ଡ-ବୈନାୟକ-ଯକ୍ଷ-ରକ୍ଷଃ",
                            "meaning": "କୁଷ୍ମାଣ୍ଡ, ବିନାୟକ, ଯକ୍ଷ, ରାକ୍ଷସ"
                        },
                        {
                            "word": "ଭୂତ-ଗ୍ରହାନ୍",
                            "meaning": "ଭୂତପ୍ରେତ ଓ ଅନିଷ୍ଟକାରୀ ଗ୍ରହମାନଙ୍କୁ"
                        },
                        {
                            "word": "ଚୂର୍ଣ୍ଣୟ ଚୂର୍ଣ୍ଣୟ ଅରୀନ୍",
                            "meaning": "ଆମ୍ଭ ଶତ୍ରୁମାନଙ୍କୁ ଚୂର୍ଣ୍ଣ-ବିଚୂର୍ଣ୍ଣ କରିଦିଅ"
                        }
                    ]
                },
                {
                    "id": 14,
                    "lyric": "ତ୍ୱଂ ଯାତୁଧାନ-ପ୍ରମଥ-ପ୍ରେତ-ମାତୃ-\nପିଶାଚ-ବିପ୍ରଗ୍ରହ-ଘୋର-ଦୃଷ୍ଟୀନ୍ ।\nଦରେନ୍ଦ୍ର ବିଦ୍ରାବୟ କୃଷ୍ଣ-ପୂରିତୋ\nଭୀମ-ସ୍ୱନୋ ’ରେର୍ ହୃଦୟାନି କମ୍ପୟନ୍ ॥ ୧୪ ॥",
                    "translation": "ହେ ଶଙ୍ଖଶ୍ରେଷ୍ଠ ପାଞ୍ଚଜନ୍ୟ! ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ମୁଖନିଃସୃତ ବାୟୁ ଦ୍ୱାରା ପରିପୂର୍ଣ୍ଣ ହୋଇ ଆପଣ ଯେଉଁ ଭୟଙ୍କର ନାଦ ସୃଷ୍ଟି କରନ୍ତି, ତାହା ଶତ୍ରୁମାନଙ୍କ ହୃଦୟକୁ ପ୍ରକମ୍ପିତ କରିଦିଏ। ଆପଣ ନିଜ ପ୍ରଚଣ୍ଡ ଧ୍ୱନି ଦ୍ୱାରା ରାକ୍ଷସ, ପ୍ରମଥ, ପ୍ରେତ, ଡାକିନୀ, ପିଶାଚ ଏବଂ ବ୍ରହ୍ମରାକ୍ଷସ ଭଳି ଘୋର ଦୃଷ୍ଟିସମ୍ପନ୍ନ ଦୁଷ୍ଟ ପ୍ରେତାତ୍ମାମାନଙ୍କୁ ଅବିଳମ୍ବେ ଘଉଡ଼ାଇ ଦିଅନ୍ତୁ!",
                    "wordMeanings": [
                        {
                            "word": "ଦରେନ୍ଦ୍ର",
                            "meaning": "ହେ ଶଙ୍ଖଶ୍ରେଷ୍ଠ (ପାଞ୍ଚଜନ୍ୟ)!"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ପୂରିତଃ",
                            "meaning": "ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ମୁଖବାୟୁ ଦ୍ୱାରା ଧ୍ୱନିତ"
                        },
                        {
                            "word": "ଭୀମ-ସ୍ୱନଃ",
                            "meaning": "ଭୟଙ୍କର ଗମ୍ଭୀର ଧ୍ୱନି ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ଅରେଃ ହୃଦୟାନି କମ୍ପୟନ୍",
                            "meaning": "ଶତ୍ରୁମାନଙ୍କ ହୃଦୟକୁ କମ୍ପିତ କରି"
                        },
                        {
                            "word": "ଯାତୁଧାନ-ପ୍ରମଥ-ପ୍ରେତ-ମାତୃ",
                            "meaning": "ରାକ୍ଷସ, ପ୍ରମଥ, ପ୍ରେତ ଓ ମାତୃକାଗଣ"
                        },
                        {
                            "word": "ପିଶାଚ-ବିପ୍ରଗ୍ରହ-ଘୋର-ଦୃଷ୍ଟୀନ୍",
                            "meaning": "ପିଶାଚ ଓ ବ୍ରହ୍ମରାକ୍ଷସ ଆଦି ଭୟଙ୍କର ଜୀବମାନଙ୍କୁ"
                        },
                        {
                            "word": "ତ୍ୱଂ ବିଦ୍ରାବୟ",
                            "meaning": "ଆପଣ ଦୂରକୁ ଘଉଡ଼ାଇ ଦିଅନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 15,
                    "lyric": "ତ୍ୱଂ ତିଗ୍ମ-ଧାରାସି-ବରାରି-ସୈନ୍ୟମ୍\nଈଶ-ପ୍ରଯୁକ୍ତୋ ମମ ଛିନ୍ଧି ଛିନ୍ଧି ।\nଚକ୍ଷୂଂଷି ଚର୍ମଞ୍ ଛତ-ଚନ୍ଦ୍ର ଛାଦୟ\nଦ୍ୱିଷାମ୍ ଅଘୋନାଂ ହର ପାପ-ଚକ୍ଷୁଷାମ୍ ॥ ୧୫ ॥",
                    "translation": "ଭଗବାନଙ୍କ ଦ୍ୱାରା ପରିଚାଳିତ ତୀକ୍ଷ୍ଣଧାର ବିଶିଷ୍ଟ ହେ ଶ୍ରେଷ୍ଠ ଖଡ୍ଗ (ନନ୍ଦକ)! ତୁମେ ମୋ ଶତ୍ରୁମାନଙ୍କ ସେନାବାହିନୀକୁ ଖଣ୍ଡ-ବିଖଣ୍ଡ କରି କାଟିପକାଅ! କାଟିପକାଅ! ଶହ ଶହ ଚନ୍ଦ୍ରକଳା ଚିହ୍ନରେ ସୁଶୋଭିତ ହେ ଦିବ୍ୟ ଢାଲ! ତୁମେ ଆମ୍ଭ ପ୍ରତି ବିଦ୍ୱେଷ ରଖୁଥିବା ପାପୀ ଶତ୍ରୁମାନଙ୍କ ଆଖିକୁ ଆଚ୍ଛାଦିତ କରିଦିଅ ଏବଂ ସେମାନଙ୍କ ପାପପୂର୍ଣ୍ଣ ଦୃଷ୍ଟିଶକ୍ତିକୁ ସମ୍ପୂର୍ଣ୍ଣ ହରଣ କରିନିଅ!",
                    "wordMeanings": [
                        {
                            "word": "ତିଗ୍ମ-ଧାର-ଅସି-ବର",
                            "meaning": "ତୀକ୍ଷ୍ଣଧାର ବିଶିଷ୍ଟ ହେ ଶ୍ରେଷ୍ଠ ଖଡ୍ଗ!"
                        },
                        {
                            "word": "ଈଶ-ପ୍ରଯୁକ୍ତଃ",
                            "meaning": "ପରମେଶ୍ୱରଙ୍କ ଦ୍ୱାରା ନିୟୋଜିତ"
                        },
                        {
                            "word": "ମମ ଅରି-ସୈନ୍ୟମ୍ ଛିନ୍ଧି ଛିନ୍ଧି",
                            "meaning": "ମୋ ଶତ୍ରୁସେନାକୁ ଖଣ୍ଡ ଖଣ୍ଡ କରି କାଟିଦିଅ"
                        },
                        {
                            "word": "ଚର୍ମନ୍ ଶତ-ଚନ୍ଦ୍ର",
                            "meaning": "ଶତ ଚନ୍ଦ୍ରକଳାଯୁକ୍ତ ହେ ଦିବ୍ୟ ଢାଲ!"
                        },
                        {
                            "word": "ଚକ୍ଷୂଂଷି ଛାଦୟ",
                            "meaning": "ଶତ୍ରୁମାନଙ୍କ ଚକ୍ଷୁକୁ ଆଚ୍ଛାଦିତ କର"
                        },
                        {
                            "word": "ଦ୍ୱିଷାମ୍ ଅଘୋନାମ୍",
                            "meaning": "ଶତ୍ରୁଭାବାପନ୍ନ ପାପୀମାନଙ୍କର"
                        },
                        {
                            "word": "ହର ପାପ-ଚକ୍ଷୁଷାମ୍",
                            "meaning": "ପାପଦୃଷ୍ଟିକୁ ସମ୍ପୂର୍ଣ୍ଣ ବିନାଶ କର"
                        }
                    ]
                },
                {
                    "id": 16,
                    "lyric": "ଯନ୍ ନୋ ଭୟଂ ଗ୍ରହେଭ୍ୟୋ ’ଭୂତ୍\nକେତୁଭ୍ୟୋ ନୃଭ୍ୟ ଏବ ଚ ।\nସରୀସୃପେଭ୍ୟୋ ଦଂଷ୍ଟ୍ରିଭ୍ୟୋ\nଭୂତେଭ୍ୟୋ ’ଂହୋଭ୍ୟ ଏବ ଚ ॥ ୧୬ ॥",
                    "translation": "ଅନିଷ୍ଟକାରୀ ଗ୍ରହ, ଉଲ୍‌କାପାତ ଆଦି ଧୂମକେତୁ, ଦୁଷ୍ଟ ମନୁଷ୍ୟ, ବିଷାକ୍ତ ସରୀସୃପ (ସର୍ପ-ବିଛା), ଦନ୍ତବିଶିଷ୍ଟ ହିଂସ୍ରଜନ୍ତୁ (ବାଘ-ଭାଲୁ), ଭୂତପ୍ରେତ ତଥା ପୂର୍ବକୃତ ପାପକର୍ମରୁ ଆମ୍ଭମାନଙ୍କ ପ୍ରତି ଯେଉଁ ଯେଉଁ ଭୟ ଉପୁଜିଥାଏ...",
                    "wordMeanings": [
                        {
                            "word": "ଯତ୍ ନଃ ଭୟମ୍ ଅଭୂତ୍",
                            "meaning": "ଆମ୍ଭମାନଙ୍କର ଯେଉଁ ଯେଉଁ ଭୟ ଉତ୍ପନ୍ନ ହୁଏ"
                        },
                        {
                            "word": "ଗ୍ରହେଭ୍ୟଃ କେତୁଭ୍ୟଃ",
                            "meaning": "ଅନିଷ୍ଟ ଗ୍ରହ ଓ ଧୂମକେତୁ ଆଦିରୁ"
                        },
                        {
                            "word": "ନୃଭ୍ୟଃ ଏବ ଚ",
                            "meaning": "ତଥା ଦୁର୍ଜନ ମନୁଷ୍ୟମାନଙ୍କଠାରୁ"
                        },
                        {
                            "word": "ସରୀସୃପେଭ୍ୟଃ",
                            "meaning": "ସର୍ପ ପ୍ରଭୃତି ସରୀସୃପମାନଙ୍କଠାରୁ"
                        },
                        {
                            "word": "ଦଂଷ୍ଟ୍ରିଭ୍ୟଃ",
                            "meaning": "ଦନ୍ତବିଶିଷ୍ଟ ହିଂସ୍ର ପ୍ରାଣୀମାନଙ୍କଠାରୁ"
                        },
                        {
                            "word": "ଭୂତେଭ୍ୟଃ ଅଂହୋଭ୍ୟଃ ଏବ ଚ",
                            "meaning": "ଭୂତପ୍ରେତ ଓ ପୂର୍ବ ପାପସମୂହରୁ"
                        }
                    ]
                },
                {
                    "id": 17,
                    "lyric": "ସର୍ବାଣ୍ୟ୍ ଏତାନି ଭଗବନ୍-\nନାମ-ରୂପାନୁକୀର୍ତନାତ୍ ।\nପ୍ରୟାନ୍ତୁ ସଙ୍କ୍ଷୟଂ ସଦ୍ୟୋ\nଯେ ନଃ ଶ୍ରେୟଃ-ପ୍ରତୀପକାଃ ॥ ୧୭ ॥",
                    "translation": "...ଭଗବାନଙ୍କର ପରମ ପବିତ୍ର ନାମ, ଦିବ୍ୟ ରୂପ, ଗୁଣ ଓ ଲୀଳା ସଂକୀର୍ତ୍ତନ ପ୍ରଭାବରେ ଆମ୍ଭମାନଙ୍କ କଲ୍ୟାଣ ପଥରେ ବାଧକ ସାଜିଥିବା ସେହି ସମସ୍ତ ଭୟ ଓ ଉପଦ୍ରବ ତତକ୍ଷଣାତ୍ ସମ୍ପୂର୍ଣ୍ଣ ବିନଷ୍ଟ ହୋଇଯାଉ!",
                    "wordMeanings": [
                        {
                            "word": "ସର୍ବାଣି ଏତାନି",
                            "meaning": "ଏହି ସମସ୍ତ ଉପଦ୍ରବ"
                        },
                        {
                            "word": "ଭଗବତ୍-ନାମ-ରୂପ-ଅନୁକୀର୍ତନାତ୍",
                            "meaning": "ଭଗବାନଙ୍କ ଦିବ୍ୟ ନାମ ଓ ରୂପ କୀର୍ତ୍ତନ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ପ୍ରୟାନ୍ତୁ ସଙ୍କ୍ଷୟମ୍ ସଦ୍ୟଃ",
                            "meaning": "ତୁରନ୍ତ ସମ୍ପୂର୍ଣ୍ଣ ବିନାଶକୁ ପ୍ରାପ୍ତ ହେଉ"
                        },
                        {
                            "word": "ଯେ ନଃ ଶ୍ରେୟଃ-ପ୍ରତୀପକାଃ",
                            "meaning": "ଯାହା ସବୁ ଆମ୍ଭ କଲ୍ୟାଣର ପ୍ରତିକୂଳ ଅଟେ"
                        }
                    ]
                },
                {
                    "id": 18,
                    "lyric": "ଗରୁଡ଼ୋ ଭଗବାନ୍ ସ୍ତୋତ୍ର-\nସ୍ତୋଭଶ୍ ଛନ୍ଦୋମୟଃ ପ୍ରଭୁଃ ।\nରକ୍ଷତ୍ୱ୍ ଅଶେଷ-କୃଚ୍ଛ୍ରେଭ୍ୟୋ\nବିଷ୍ୱକ୍ସେନଃ ସ୍ୱ-ନାମଭିଃ ॥ ୧୮ ॥",
                    "translation": "ବେଦର ସ୍ତୁତିଗୁଡ଼ିକ ଦ୍ୱାରା ମହିମାମଣ୍ଡିତ, ବେଦମନ୍ତ୍ରସ୍ୱରୂପ ଭଗବାନଙ୍କ ବାହନ ପରମ ପରାକ୍ରମୀ ପ୍ରଭୁ ଗରୁଡ଼ଦେବ ସମସ୍ତ କଠିନ ବିପଦରୁ ଆମ୍ଭମାନଙ୍କୁ ରକ୍ଷା କରନ୍ତୁ ଏବଂ ଭଗବାନଙ୍କ ସେନାପତି ପ୍ରଭୁ ବିଷ୍ୱକ୍‌ସେନ ନିଜର ଦିବ୍ୟ ନାମ ପ୍ରଭାବରେ ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ସୁରକ୍ଷା ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଗରୁଡ଼ଃ ଭଗବାନ୍ ପ୍ରଭୁଃ",
                            "meaning": "ସମର୍ଥ ପ୍ରଭୁ ପକ୍ଷୀରାଜ ଗରୁଡ଼"
                        },
                        {
                            "word": "ସ୍ତୋତ୍ର-ସ୍ତୋଭଃ ଛନ୍ଦୋମୟଃ",
                            "meaning": "ବେଦସ୍ତୁତି ଦ୍ୱାରା ପ୍ରଶଂସିତ ଓ ବେଦମୟ"
                        },
                        {
                            "word": "ରକ୍ଷତୁ ଅଶେଷ-କୃଚ୍ଛ୍ରେଭ୍ୟଃ",
                            "meaning": "ସମସ୍ତ ପ୍ରକାର କଠିନ ସଙ୍କଟରୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ବିଷ୍ୱକ୍ସେନଃ ସ୍ୱ-ନାମଭିଃ",
                            "meaning": "ପ୍ରଭୁ ବିଷ୍ୱକ୍‌ସେନ ନିଜ ନାମ ପ୍ରଭାବରେ"
                        }
                    ]
                },
                {
                    "id": 19,
                    "lyric": "ସର୍ବାପଦ୍ଭ୍ୟୋ ହରେର୍ ନାମ-\nରୂପ-ଯାନାୟୁଧାନି ନଃ ।\nବୁଦ୍ଧୀନ୍ଦ୍ରିୟ-ମନଃ-ପ୍ରାଣାନ୍\nପାନ୍ତୁ ପାର୍ଷଦ-ଭୂଷଣାଃ ॥ ୧୯ ॥",
                    "translation": "ଭଗବାନ ଶ୍ରୀହରିଙ୍କର ଦିବ୍ୟ ନାମ, ଅପ୍ରାକୃତ ରୂପ, ବାହନ, ଆୟୁଧସମୂହ, ପାର୍ଷଦଗଣ ତଥା ଅଙ୍ଗଭୂଷଣସମୂହ ଆମ୍ଭମାନଙ୍କର ବୁଦ୍ଧି, ଇନ୍ଦ୍ରିୟ, ମନ ଓ ପ୍ରାଣକୁ ସମସ୍ତ ବିପଦ-ଆପଦରୁ ନିରନ୍ତର ରକ୍ଷା କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ସର୍ବ-ଆପଦ୍ଭ୍ୟଃ",
                            "meaning": "ସମସ୍ତ ବିପଦ-ଆପଦରୁ"
                        },
                        {
                            "word": "ହରେଃ ନାମ-ରୂପ-ଯାନ-ଆୟୁଧାନି",
                            "meaning": "ଭଗବାନ ଶ୍ରୀହରିଙ୍କ ନାମ, ରୂପ, ବାହନ ଓ ଅସ୍ତ୍ରଶସ୍ତ୍ର"
                        },
                        {
                            "word": "ପାର୍ଷଦ-ଭୂଷଣାଃ",
                            "meaning": "ତାଙ୍କର ପାର୍ଷଦ ଓ ଆଭୂଷଣସମୂହ"
                        },
                        {
                            "word": "ନଃ ବୁଦ୍ଧି-ଇନ୍ଦ୍ରିୟ-ମନଃ-ପ୍ରାଣାନ୍",
                            "meaning": "ଆମ୍ଭମାନଙ୍କ ବୁଦ୍ଧି, ଇନ୍ଦ୍ରିୟ, ମନ ଓ ପ୍ରାଣକୁ"
                        },
                        {
                            "word": "ପାନ୍ତୁ",
                            "meaning": "ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 20,
                    "lyric": "ଯଥା ହି ଭଗବାନ୍ ଏବ\nବସ୍ତୁତଃ ସଦ୍ ଅସଚ୍ ଚ ଯତ୍ ।\nସତ୍ୟେନାନେନ ନଃ ସର୍ବେ\nଯାନ୍ତୁ ନାଶମ୍ ଉପଦ୍ରବାଃ ॥ ୨୦ ॥",
                    "translation": "ଏହି ଦୃଶ୍ୟମାନ ଜଗତରେ ଯାହା କିଛି ସୂକ୍ଷ୍ମ (ଅସତ୍) ଓ ସ୍ଥୂଳ (ସତ୍) ବସ୍ତୁ ବିଦ୍ୟମାନ, ସେ ସବୁ ବସ୍ତୁତଃ ଭଗବାନଙ୍କ ବ୍ୟତୀତ ଅନ୍ୟ କିଛି ନୁହେଁ। କାରଣ ସେ ହିଁ ସମସ୍ତ କାରଣର ପରମ କାରଣ। ଏହି ପରମ ସତ୍ୟ ପ୍ରଭାବରେ ଆମ୍ଭମାନଙ୍କର ସମସ୍ତ ଉପଦ୍ରବ ଓ ସଙ୍କଟ ସମ୍ପୂର୍ଣ୍ଣ ବିନଷ୍ଟ ହୋଇଯାଉ।",
                    "wordMeanings": [
                        {
                            "word": "ଯଥା ହି ଭଗବାନ୍ ଏବ",
                            "meaning": "ଯେହେତୁ ଭଗବାନ ହିଁ"
                        },
                        {
                            "word": "ବସ୍ତୁତଃ ସତ୍ ଅସତ୍ ଚ ଯତ୍",
                            "meaning": "ପ୍ରକୃତରେ ସମସ୍ତ ସତ୍ ଓ ଅସତ୍ ବସ୍ତୁ ଅଟନ୍ତି"
                        },
                        {
                            "word": "ଅନେନ ସତ୍ୟେନ",
                            "meaning": "ଏହି ପରମ ସତ୍ୟ ପ୍ରଭାବରେ"
                        },
                        {
                            "word": "ନଃ ସର୍ବେ ଉପଦ୍ରବାଃ",
                            "meaning": "ଆମ୍ଭମାନଙ୍କର ସମସ୍ତ ଉପଦ୍ରବ"
                        },
                        {
                            "word": "ଯାନ୍ତୁ ନାଶମ୍",
                            "meaning": "ସମ୍ପୂର୍ଣ୍ଣ ବିନାଶକୁ ପ୍ରାପ୍ତ ହେଉ"
                        }
                    ]
                },
                {
                    "id": 21,
                    "lyric": "ଯଥୈକାତ୍ମ୍ୟାନୁଭାବାନାଂ\nବିକଳ୍ପ-ରହିତଃ ସ୍ୱୟମ୍ ।\nଭୂଷଣାୟୁଧ-ଲିଙ୍ଗାଖ୍ୟା\nଧତ୍ତେ ଶକ୍ତୀଃ ସ୍ୱ-ମାୟୟା ॥ ୨୧ ॥",
                    "translation": "ଯେଉଁ ତତ୍ତ୍ୱଦର୍ଶୀ ମହାତ୍ମାମାନେ ସମସ୍ତ ବସ୍ତୁରେ ଭଗବାନଙ୍କ ଏକତ୍ୱ ଅନୁଭବ କରନ୍ତି, ସେମାନଙ୍କ ଦୃଷ୍ଟିରେ ପରମେଶ୍ୱର ସ୍ୱୟଂ କୌଣସି ଭେଦଭାବରହିତ ଅଦ୍ୱିତୀୟ ସତ୍ତା ଅଟନ୍ତି। ତଥାପି ସେ ନିଜ ଦିବ୍ୟ ଶକ୍ତି ପ୍ରଭାବରେ ଅଳଙ୍କାର, ଆୟୁଧ ତଥା ବିବିଧ ରୂପସମୂହରୂପୀ ଅନନ୍ତ ଶକ୍ତିସମୂହ ଧାରଣ କରିଥାନ୍ତି।",
                    "wordMeanings": [
                        {
                            "word": "ଯଥା ଏକାତ୍ମ୍ୟ-ଅନୁଭାବାନାମ୍",
                            "meaning": "ଭଗବତ୍-ତତ୍ତ୍ୱକୁ ଏକ ଅନୁଭବ କରୁଥିବା ଜ୍ଞାନୀମାନଙ୍କ ଦୃଷ୍ଟିରେ"
                        },
                        {
                            "word": "ବିକଳ୍ପ-ରହିତଃ ସ୍ୱୟମ୍",
                            "meaning": "ଭଗବାନ ସ୍ୱୟଂ ଭେଦଭାବରହିତ"
                        },
                        {
                            "word": "ଭୂଷଣ-ଆୟୁଧ-ଲିଙ୍ଗ-ଆଖ୍ୟାଃ",
                            "meaning": "ଆଭୂଷଣ, ଅସ୍ତ୍ରଶସ୍ତ୍ର ଓ ବିବିଧ ରୂପଧାରୀ"
                        },
                        {
                            "word": "ଧତ୍ତେ ଶକ୍ତୀଃ ସ୍ୱ-ମାୟୟା",
                            "meaning": "ନିଜ ଦିବ୍ୟ ଶକ୍ତି ଦ୍ୱାରା ଧାରଣ କରନ୍ତି"
                        }
                    ]
                },
                {
                    "id": 22,
                    "lyric": "ତେନୈବ ସତ୍ୟ-ମାନେନ\nସର୍ବ-ଜ୍ଞୋ ଭଗବାନ୍ ହରିଃ ।\nପାତୁ ସର୍ବୈଃ ସ୍ୱରୂପୈର୍ ନଃ\nସଦା ସର୍ବତ୍ର ସର୍ବ-ଗଃ ॥ ୨୨ ॥",
                    "translation": "ସେହି ପରମ ସତ୍ୟର ମହିମା ପ୍ରଭାବରେ, ସର୍ବଜ୍ଞ, ସର୍ବବ୍ୟାପୀ ଭଗବାନ ଶ୍ରୀହରି ନିଜର ସମସ୍ତ ଦିବ୍ୟ ସ୍ୱରୂପ ମାଧ୍ୟମରେ ସର୍ବଦା, ସବୁଠାରେ ଏବଂ ସମସ୍ତ ବିପଦରୁ ଆମ୍ଭମାନଙ୍କୁ ସୁରକ୍ଷା ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ତେନ ଏବ ସତ୍ୟ-ମାନେନ",
                            "meaning": "ସେହି ପରମ ସତ୍ୟ ପ୍ରଭାବରେ"
                        },
                        {
                            "word": "ସର୍ବ-ଜ୍ଞଃ ଭଗବାନ୍ ହରିଃ",
                            "meaning": "ସର୍ବଜ୍ଞ ଭଗବାନ ଶ୍ରୀହରି"
                        },
                        {
                            "word": "ସର୍ବ-ଗଃ",
                            "meaning": "ସର୍ବତ୍ର ବିରାଜମାନ ସର୍ବବ୍ୟାପୀ ପ୍ରଭୁ"
                        },
                        {
                            "word": "ପାତୁ ସର୍ବୈଃ ସ୍ୱରୂପୈଃ ନଃ",
                            "meaning": "ନିଜ ସମସ୍ତ ସ୍ୱରୂପ ଦ୍ୱାରା ଆମ୍ଭମାନଙ୍କୁ ରକ୍ଷା କରନ୍ତୁ"
                        },
                        {
                            "word": "ସଦା ସର୍ବତ୍ର",
                            "meaning": "ସର୍ବଦା ଓ ସର୍ବସ୍ଥାନରେ"
                        }
                    ]
                },
                {
                    "id": 23,
                    "lyric": "ବିଦିକ୍ଷୁ ଦିକ୍ଷୂର୍ଦ୍ଧ୍ୱମ୍ ଅଧଃ ସମନ୍ତାଦ୍\nଅନ୍ତର୍ ବହିର୍ ଭଗବାନ୍ ନାରସିଂହଃ ।\nପ୍ରହାପୟଂଲ୍ ଲୋକ-ଭୟଂ ସ୍ୱନେନ\nସ୍ୱ-ତେଜସା ଗ୍ରସ୍ତ-ସମସ୍ତ-ତେଜାଃ ॥ ୨୩ ॥",
                    "translation": "ନିଜ ଭକ୍ତ ପ୍ରହ୍ଲାଦଙ୍କ ରକ୍ଷା ନିମନ୍ତେ ପ୍ରଚଣ୍ଡ ଗର୍ଜନ କରି ସମସ୍ତ ଜଗତର ଭୟକୁ ବିନାଶ କରୁଥିବା ଏବଂ ନିଜ ଅପରିମିତ ତେଜ ଦ୍ୱାରା ସମସ୍ତଙ୍କ ତେଜକୁ ଗ୍ରାସ କରିଥିବା ଭଗବାନ ଶ୍ରୀନୃସିଂହଦେବ ଦିଗ-ବିଦିଗରେ, ଉପରେ, ତଳେ, ଭିତରେ ଓ ବାହାରେ, ଚତୁର୍ଦ୍ଦିଗରେ ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ଅଭୟ ଓ ରକ୍ଷା ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ବିଦିକ୍ଷୁ ଦିକ୍ଷୁ ଊର୍ଦ୍ଧ୍ୱମ୍ ଅଧଃ",
                            "meaning": "ଦିଗ, ବିଦିଗ, ଉପରେ ଏବଂ ତଳେ"
                        },
                        {
                            "word": "ସମନ୍ତାତ୍ ଅନ୍ତଃ ବହିଃ",
                            "meaning": "ଚାରିଆଡ଼େ, ଭିତରେ ଓ ବାହାରେ"
                        },
                        {
                            "word": "ଭଗବାନ୍ ନାରସିଂହଃ",
                            "meaning": "ଭଗବାନ ନୃସିଂହଦେବ"
                        },
                        {
                            "word": "ପ୍ରହାପୟନ୍ ଲୋକ-ଭୟମ୍ ସ୍ୱନେନ",
                            "meaning": "ନିଜ ଗର୍ଜନ ଦ୍ୱାରା ଜଗତର ଭୟ ଦୂର କରି"
                        },
                        {
                            "word": "ସ୍ୱ-ତେଜସା ଗ୍ରସ୍ତ-ସମସ୍ତ-ତେଜାଃ",
                            "meaning": "ନିଜ ତେଜରେ ସମସ୍ତଙ୍କ ତେଜକୁ ଆଚ୍ଛନ୍ନ କରି"
                        }
                    ]
                },
                {
                    "id": 24,
                    "lyric": "ମଘବନ୍ନ୍ ଇଦମ୍ ଆଖ୍ୟାତଂ\nବର୍ମ ନାରାୟଣାତ୍ମକମ୍ ।\nବିଜେଷ୍ୟସେ ’ଞ୍ଜସା ଯେନ\nଦଂଶିତୋ ’ସୁର-ଯୂଥପାନ୍ ॥ ୨୪ ॥",
                    "translation": "ବିଶ୍ୱରୂପ କହିଲେ: ହେ ଇନ୍ଦ୍ର! ମୁଁ ତୁମକୁ ଭଗବାନ ନାରାୟଣଙ୍କର ଏହି ପରମ ପବିତ୍ର ଦିବ୍ୟ କବଚ ବିଷୟରେ ବର୍ଣ୍ଣନା କଲି। ଏହି କବଚକୁ ଭକ୍ତିପୂର୍ବକ ଧାରଣ କରି ତୁମେ ଅତି ସହଜରେ ସମସ୍ତ ଅସୁର ସେନାପତିମାନଙ୍କୁ ପରାଜିତ କରି ବିଜୟୀ ହେବ।",
                    "wordMeanings": [
                        {
                            "word": "ମଘବନ୍",
                            "meaning": "ହେ ଦେବରାଜ ଇନ୍ଦ୍ର!"
                        },
                        {
                            "word": "ଇଦମ୍ ଆଖ୍ୟାତମ୍",
                            "meaning": "ଏହା ମୁଁ ବର୍ଣ୍ଣନା କଲି"
                        },
                        {
                            "word": "ବର୍ମ ନାରାୟଣ-ଆତ୍ମକମ୍",
                            "meaning": "ଭଗବାନ ନାରାୟଣଙ୍କ ଦିବ୍ୟ କବଚ"
                        },
                        {
                            "word": "ଯେନ ଦଂଶିତଃ",
                            "meaning": "ଯାହାକୁ ଧାରଣ କରିବା ଦ୍ୱାରା"
                        },
                        {
                            "word": "ବିଜେଷ୍ୟସେ ଅଞ୍ଜସା",
                            "meaning": "ତୁମେ ସହଜରେ ବିଜୟ ଲାଭ କରିବ"
                        },
                        {
                            "word": "ଅସୁର-ଯୂଥପାନ୍",
                            "meaning": "ଦୈତ୍ୟ ସେନାପତିମାନଙ୍କ ଉପରେ"
                        }
                    ]
                },
                {
                    "id": 25,
                    "lyric": "ଏତଦ୍ ଧାରୟମାଣସ୍ ତୁ\nଯଂ ଯଂ ପଶ୍ୟତି ଚକ୍ଷୁଷା ।\nପଦା ବା ସଂସ୍ପୃଶେତ୍ ସଦ୍ୟଃ\nସାଧ୍ୱସାତ୍ ସ ବିମୁଚ୍ୟତେ ॥ ୨୫ ॥",
                    "translation": "ଏହି ନାରାୟଣ କବଚକୁ ନିଷ୍ଠାର ସହିତ ଧାରଣ କରିଥିବା ବ୍ୟକ୍ତି ନିଜ ନେତ୍ରରେ ଯାହାକୁ ଯାହାକୁ ଦର୍ଶନ କରେ କିମ୍ବା ନିଜ ପାଦରେ ସ୍ପର୍ଶ କରେ, ସେହି ବ୍ୟକ୍ତି ମଧ୍ୟ ତତକ୍ଷଣାତ୍ ସମସ୍ତ ପ୍ରକାର ଭୟ ଓ ଆପଦ-ବିପଦରୁ ମୁକ୍ତ ହୋଇଯାଏ।",
                    "wordMeanings": [
                        {
                            "word": "ଏତତ୍ ଧାରୟମାଣଃ ତୁ",
                            "meaning": "ଏହି କବଚକୁ ଧାରଣ କରିଥିବା ବ୍ୟକ୍ତି"
                        },
                        {
                            "word": "ଯଂ ଯଂ ପଶ୍ୟତି ଚକ୍ଷୁଷା",
                            "meaning": "ନିଜ ଆଖିରେ ଯାହାକୁ ଯାହାକୁ ଦେଖେ"
                        },
                        {
                            "word": "ପଦା ବା ସଂସ୍ପୃଶେତ୍",
                            "meaning": "କିମ୍ବା ପାଦରେ ସ୍ପର୍ଶ କରେ"
                        },
                        {
                            "word": "ସଦ୍ୟଃ ବିମୁଚ୍ୟତେ",
                            "meaning": "ତୁରନ୍ତ ମୁକ୍ତ ହୋଇଯାଏ"
                        },
                        {
                            "word": "ସାଧ୍ୱସାତ୍ ସଃ",
                            "meaning": "ସେହି ସମସ୍ତ ଭୟ ଓ ସଙ୍କଟରୁ"
                        }
                    ]
                },
                {
                    "id": 26,
                    "lyric": "ନ କୁତଶ୍ଚିଦ୍ ଭୟଂ ତସ୍ୟ\nବିଦ୍ୟାଂ ଧାରୟତୋ ଭବେତ୍ ।\nରାଜ-ଦସ୍ୟୁ-ଗ୍ରହାଦିଭ୍ୟୋ\nବ୍ୟାଧ୍ୟ୍-ଆଦିଭ୍ୟଶ୍ ଚ କର୍ହିଚିତ୍ ॥ ୨୬ ॥",
                    "translation": "ଏହି ପରମ ପବିତ୍ର ଦିବ୍ୟ ନାରାୟଣ କବଚ ବିଦ୍ୟାକୁ ଧାରଣ କରିଥିବା ଭକ୍ତର ରାଜା ବା ଶାସକ, ଡକାୟତ-ଲୁଟେରା, ଅନିଷ୍ଟକାରୀ ଦୁଷ୍ଟ ଗ୍ରହ, ଭୂତପ୍ରେତ କିମ୍ବା କୌଣସି ପ୍ରକାର ରୋଗ-ବ୍ୟାଧିରୁ କେବେହେଲେ କୌଣସି ଭୟ ରହେ ନାହିଁ। ସେ ସର୍ବଦା ଭଗବାନଙ୍କ ସୁରକ୍ଷାରେ ଅଭୟ ରହେ।",
                    "wordMeanings": [
                        {
                            "word": "ନ କୁତଶ୍ଚିତ୍ ଭୟଂ ତସ୍ୟ ଭବେତ୍",
                            "meaning": "ତାହାର କୌଣସି ସ୍ଥାନରୁ କଦାପି ଭୟ ହୁଏ ନାହିଁ"
                        },
                        {
                            "word": "ବିଦ୍ୟାମ୍ ଧାରୟତଃ",
                            "meaning": "ଏହି ଦିବ୍ୟ ବିଦ୍ୟାକୁ ଧାରଣ କରିଥିବା ବ୍ୟକ୍ତିର"
                        },
                        {
                            "word": "ରାଜ-ଦସ୍ୟୁ-ଗ୍ରହ-ଆଦିଭ୍ୟଃ",
                            "meaning": "ରାଜା, ଡକାୟତ ଏବଂ ଅନିଷ୍ଟ ଗ୍ରହମାନଙ୍କଠାରୁ"
                        },
                        {
                            "word": "ବ୍ୟାଧି-ଆଦିଭ୍ୟଃ ଚ କର୍ହିଚିତ୍",
                            "meaning": "ଏବଂ କୌଣସି ରୋଗବ୍ୟାଧିଠାରୁ କେବେହେଲେ ନୁହେଁ"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        "id": "song-navagauravaram",
        "title": "ଶ୍ରୀ ଶ୍ରୀ ଶଚୀସୁତାଷ୍ଟକମ୍ - ନବ ଗୌର ବରଂ (Sri Sri Sacisutastakam - Nava Gaura Varam)",
        "title_odia": "ଶ୍ରୀ ଶ୍ରୀ ଶଚୀସୁତାଷ୍ଟକମ୍ (ନବ ଗୌର ବରଂ)",
        "title_english": "Sri Sri Sacisutastakam (Nava Gaura Varam)",
        "category": "Songs",
        "type": "html",
        "author": "Sarvabhauma Bhattacarya",
        "tags": [
            "Nava Gaura Varam",
            "Sacisutastakam",
            "Sri Sri Sacisutastakam",
            "Sarvabhauma Bhattacarya",
            "Gaura",
            "Caitanya",
            "Stuti",
            "Astakam",
            "ଶ୍ରୀ ଶ୍ରୀ ଶଚୀସୁତାଷ୍ଟକମ୍",
            "ନବ ଗୌର ବରଂ",
            "ସାର୍ବଭୌମ ଭଟ୍ଟାଚାର୍ଯ୍ୟ"
        ],
        "description": "ଶ୍ରୀଳ ସାର୍ବଭୌମ ଭଟ୍ଟାଚାର୍ଯ୍ୟଙ୍କ ଦ୍ୱାରା ବିରଚିତ ମାତା ଶଚୀଦେବୀଙ୍କ ପ୍ରିୟତମ ପୁତ୍ର ଶ୍ରୀମନ୍ ମହାପ୍ରଭୁ ଗୌରସୁନ୍ଦରଙ୍କ ଅପୂର୍ବ ରୂପମାଧୁରୀ, ନୃତ୍ୟ, ହରିନାମ ସଂକୀର୍ତ୍ତନ ତଥା ପ୍ରେମରସର ମହିମାମୟ ଅଷ୍ଟକମ୍।",
        "audioUrl": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FSacisutastakam%20HH%20Bhakti%20Ashraya%20Vaisnava%20Swami.mp3",
        "vocalist": "HH Bhakti Ashraya Vaishnava Swami",
        "audioVersions": [
            {
                "label": "HH Bhakti Ashraya Vaishnava Swami",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FSacisutastakam%20HH%20Bhakti%20Ashraya%20Vaisnava%20Swami.mp3"
            },
            {
                "label": "HG Radheshyam Prabhu (01)",
                "url": "https://pub-4f8c24b1c935435d9e3b959e0886ebf6.r2.dev/uploads%2FNava%20Gaura%20Varam%20Nava%20Puspa%20Saram.mp3"
            },
            {
                "label": "HG Radheshyam Prabhu (02)",
                "url": "https://pub-4f8c24b1c935435d9e3b959e0886ebf6.r2.dev/uploads%2FNava%20Gaura%20Varam%20Nava%20Puspa%20Saram%20%20%202.mp3"
            },
            {
                "label": "HG Jai Sachinandana Prabhu",
                "url": "https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2F17%20Saci%20Suta%20Astakam%20P-37.MP3"
            },
            {
                "label": "HH Bhakti Caru Swami",
                "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Sarvabhaum_Bhattacharya/Sri_Sacisuta_Astakam/Sri_Sacisuta_Astakam_-_Sung_by_HH_Bhakti_Caru_Swami_IDT.mp3"
            },
            {
                "label": "HH Radhanath Swami",
                "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Sarvabhaum_Bhattacharya/Sri_Sacisuta_Astakam/Sri_Sacisuta_Astakam_-_Sung_by_HH_Radhanath_Swami_IDT.mp3"
            },
            {
                "label": "HH Sachinandana Swami",
                "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Sarvabhaum_Bhattacharya/Sri_Sacisuta_Astakam/Sri_Sacisuta_Astakam_-_Sung_by_HH_Sachinandana_Swami_IDT.mp3"
            },
            {
                "label": "HG Sivarama Prabhu",
                "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Sarvabhaum_Bhattacharya/Sri_Sacisuta_Astakam/Sri_Sacisuta_Astakam_-_Sung_by_HG_Sivarama_Prabhu_IDT.mp3"
            },
            {
                "label": "HG Swarupa Damodar Prabhu",
                "url": "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Swarupa_Damodar_Prabhu/Mangalastakam/Swarupa_Damodar_Pr_Bhajans_-_05-Sacisutastaka.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-navagauravaram",
            "title": "ଶ୍ରୀ ଶ୍ରୀ ଶଚୀସୁତାଷ୍ଟକମ୍ - ନବ ଗୌର ବରଂ (Sri Sri Sacisutastakam - Nava Gaura Varam)",
            "title_odia": "ଶ୍ରୀ ଶ୍ରୀ ଶଚୀସୁତାଷ୍ଟକମ୍ (ନବ ଗୌର ବରଂ)",
            "title_english": "Sri Sri Sacisutastakam (Nava Gaura Varam)",
            "author": "Sarvabhauma Bhattacarya",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Nava%20Gaura%20Varam_More%20Songs%20of%20the%20Vaisnava%20Acaryas_34",
            "verses": [
                {
                    "id": 1,
                    "lyric": "ନବ-ଗୌର-ବରଂ ନବ-ପୁଷ୍ପ-ଶରଂ\nନବ-ଭାବ-ଧରଂ ନବ-ଲାସ୍ୟ-ପରମ୍ ।\nନବ-ହାସ୍ୟ-କରଂ ନବ-ହେମ-ବରଂ\nପ୍ରଣମାମି ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍ ॥ ୧ ॥",
                    "translation": "ଯାହାଙ୍କ ଶରୀରକାନ୍ତି କୁଙ୍କୁମ-ମିଶ୍ରିତ ତାଜା ଲହୁଣୀ ସଦୃଶ ଅତ୍ୟନ୍ତ ମନୋହର, ଯେ ନୂତନ ବିକଶିତ ପୁଷ୍ପର ଧନୁର୍ଦ୍ଧର ନବୀନ କନ୍ଦର୍ପ ସ୍ୱରୂପ, ଯେ ନିତ୍ୟ-ନୂତନ ଭାବାବେଶ ଧାରଣ କରନ୍ତି, ଯେ ଅଭିନବ ଦିବ୍ୟ ନୃତ୍ୟରେ ସର୍ବଦା ନିମଗ୍ନ, ଯାହାଙ୍କ ମଧୁର ହାସ୍ୟ ନୂତନ ଆନନ୍ଦ ଉଲ୍ଲାସ ସୃଷ୍ଟି କରେ ଏବଂ ଯାହାଙ୍କ ଦିବ୍ୟ ଶୋଭା ସଦ୍ୟ ତରଳିତ ସୁବର୍ଣ୍ଣ ଭଳି ଝଟକୁଛି—ସେହି ମାତା ଶଚୀଙ୍କ ପରମ ସୁନ୍ଦର ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କ ଚରଣ କମଳରେ ମୁଁ ପ୍ରଣାମ ଜଣାଉଛି।",
                    "wordMeanings": [
                        {
                            "word": "ନବ-ଗୌର-ବରମ୍",
                            "meaning": "ନବୀନ ସୁବର୍ଣ୍ଣ ସଦୃଶ ଗୌରକାନ୍ତି ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ନବ-ପୁଷ୍ପ-ଶରମ୍",
                            "meaning": "ନବ ବିକଶିତ ପୁଷ୍ପବାଣଧାରୀ ନବୀନ କନ୍ଦର୍ପ ସ୍ୱରୂପ"
                        },
                        {
                            "word": "ନବ-ଭାବ-ଧରମ୍",
                            "meaning": "ନିତ୍ୟ-ନୂତନ ଭାବାବେଶ ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ନବ-ଲାସ୍ୟ-ପରମ୍",
                            "meaning": "ଅଭିନବ ମନୋହର ନୃତ୍ୟରେ ନିମଗ୍ନ"
                        },
                        {
                            "word": "ନବ-ହାସ୍ୟ-କରମ୍",
                            "meaning": "ନୂତନ ଆନନ୍ଦଦାୟକ ମଧୁର ହାସ୍ୟକାରୀ"
                        },
                        {
                            "word": "ନବ-ହେମ-ବରମ୍",
                            "meaning": "ସଦ୍ୟ ନିର୍ମିତ ଶୁଦ୍ଧ ସୁବର୍ଣ୍ଣର ଶ୍ରେଷ୍ଠ କାନ୍ତିଯୁକ୍ତ"
                        },
                        {
                            "word": "ପ୍ରଣମାମି",
                            "meaning": "ମୁଁ ପ୍ରଣାମ କରୁଛି"
                        },
                        {
                            "word": "ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍",
                            "meaning": "ମାତା ଶଚୀଦେବୀଙ୍କ ଶ୍ରେଷ୍ଠ ପୁତ୍ର ଶ୍ରୀଗୌରାଙ୍ଗଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ନବ-ପ୍ରେମ-ଯୁତଂ ନବ-ନୀତ-ଶୁଚଂ\nନବ-ବେଶ-କୃତଂ ନବ-ପ୍ରେମ-ରସମ୍ ।\nନବଧା ବିଲସତ୍ ଶୁଭ-ପ୍ରେମ-ମୟଂ\nପ୍ରଣମାମି ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍ ॥ ୨ ॥",
                    "translation": "ଯେ ସର୍ବଦା ନିତ୍ୟ-ନୂତନ ଭଗବତ୍-ପ୍ରେମରେ ପରିପୂର୍ଣ୍ଣ, ଯାହାଙ୍କ ଶରୀରର ଉଜ୍ଜ୍ୱଳ କାନ୍ତି ତାଜା ନବନୀତ (ଲହୁଣୀ) ପରି ଶୁଦ୍ଧ ଓ କୋମଳ, ଯେ ନିତ୍ୟ-ନୂତନ ମନୋହର ବେଶରେ ସୁସଜ୍ଜିତ, ଯେ ସର୍ବଦା ନୂତନ ପ୍ରେମରସ ଆସ୍ୱାଦନ କରନ୍ତି, ଏବଂ ଯେ ନବଧା ଭକ୍ତି ମାଧ୍ୟମରେ ଅତ୍ୟନ୍ତ କଲ୍ୟାଣମୟ ଶୁଦ୍ଧ ପ୍ରେମ ବିସ୍ତାର କରି ଶୋଭା ପାଉଛନ୍ତି—ସେହି ମାତା ଶଚୀଙ୍କ ପରମ ସୁନ୍ଦର ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କ ଚରଣ କମଳରେ ମୁଁ ପ୍ରଣାମ ଜଣାଉଛି।",
                    "wordMeanings": [
                        {
                            "word": "ନବ-ପ୍ରେମ-ଯୁତମ୍",
                            "meaning": "ନିତ୍ୟ-ନୂତନ କୃଷ୍ଣପ୍ରେମରେ ପରିପୂର୍ଣ୍ଣ"
                        },
                        {
                            "word": "ନବ-ନୀତ-ଶୁଚମ୍",
                            "meaning": "ତାଜା ଲହୁଣୀ ପରି ଶୁଦ୍ଧ ତଥା ଶୋଭାମୟ କାନ୍ତିବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ନବ-ବେଶ-କୃତମ୍",
                            "meaning": "ଅଭିନବ ମନୋହର ବେଶଭୂଷା ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ନବ-ପ୍ରେମ-ରସମ୍",
                            "meaning": "ନିତ୍ୟ-ନୂତନ ପ୍ରେମରସ ଆସ୍ୱାଦନ କରୁଥିବା"
                        },
                        {
                            "word": "ନବଧା ବିଲସତ୍",
                            "meaning": "ନବବିଧା ଭକ୍ତିରେ ସୁଶୋଭିତ"
                        },
                        {
                            "word": "ଶୁଭ-ପ୍ରେମ-ମୟମ୍",
                            "meaning": "ପରମ ମଙ୍ଗଳମୟ ପ୍ରେମସ୍ୱରୂପ"
                        },
                        {
                            "word": "ପ୍ରଣମାମି",
                            "meaning": "ମୁଁ ପ୍ରଣିପାତ କରୁଛି"
                        },
                        {
                            "word": "ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍",
                            "meaning": "ଶଚୀମାତାଙ୍କ ପରମ ଶ୍ରେଷ୍ଠ ପୁତ୍ର ଶ୍ରୀଗୌରାଙ୍ଗଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ହରି-ଭକ୍ତି-ପରଂ ହରି-ନାମ-ଧରଂ\nକର-ଜପ୍ୟ-କରଂ ହରି-ନାମ-ପରମ୍ ।\nନୟନେ ସତତଂ ପ୍ରଣୟାଶ୍ରୁ-ଧରଂ\nପ୍ରଣମାମି ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍ ॥ ୩ ॥",
                    "translation": "ଯେ ଶ୍ରୀହରିଙ୍କ ଅନନ୍ୟ ଭକ୍ତିରେ ସର୍ବଦା ନିମଗ୍ନ, ଯେ ଶ୍ରୀହରିଙ୍କ ପବିତ୍ର ନାମକୁ ନିରନ୍ତର ଧାରଣ କରନ୍ତି, ଯେ କର-ଅଙ୍ଗୁଳିରେ ହରିନାମ ସଂଖ୍ୟା ଗଣନା କରି ଜପ କରନ୍ତି, ଯେ ସମ୍ପୂର୍ଣ୍ଣ ଭାବେ ହରିନାମ-ପରାୟଣ ଏବଂ ଯାହାଙ୍କ ଦୁଇ ନେତ୍ରରୁ ସର୍ବଦା ପ୍ରେମାଶ୍ରୁର ଧାରା ପ୍ରବାହିତ ହେଉଛି—ସେହି ମାତା ଶଚୀଙ୍କ ପରମ ସୁନ୍ଦର ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କ ଚରଣ କମଳରେ ମୁଁ ପ୍ରଣାମ ଜଣାଉଛି।",
                    "wordMeanings": [
                        {
                            "word": "ହରି-ଭକ୍ତି-ପରମ୍",
                            "meaning": "ଶ୍ରୀହରିଙ୍କ ଶୁଦ୍ଧ ଭକ୍ତିରେ ସର୍ବଦା ନିମଗ୍ନ"
                        },
                        {
                            "word": "ହରି-ନାମ-ଧରମ୍",
                            "meaning": "ପବିତ୍ର ହରିନାମକୁ ନିରନ୍ତର ଧାରଣ କରୁଥିବା"
                        },
                        {
                            "word": "କର-ଜପ୍ୟ-କରମ୍",
                            "meaning": "ହାତର ଅଙ୍ଗୁଳି ଗଣି ଜପ କରୁଥିବା"
                        },
                        {
                            "word": "ହରି-ନାମ-ପରମ୍",
                            "meaning": "ହରିନାମ ପ୍ରତି ସମ୍ପୂର୍ଣ୍ଣ ସମର୍ପିତ"
                        },
                        {
                            "word": "ନୟନେ ସତତମ୍",
                            "meaning": "ନେତ୍ରଯୁଗଳରେ ନିରନ୍ତର"
                        },
                        {
                            "word": "ପ୍ରଣୟ-ଅଶ୍ରୁ-ଧରମ୍",
                            "meaning": "ପ୍ରେମାଶ୍ରୁର ଧାରା ଧାରଣ କରୁଥିବା"
                        },
                        {
                            "word": "ପ୍ରଣମାମି",
                            "meaning": "ମୁଁ ପ୍ରଣାମ ଜଣାଉଛି"
                        },
                        {
                            "word": "ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍",
                            "meaning": "ଶଚୀମାତାଙ୍କ ଶ୍ରେଷ୍ଠ ସନ୍ତାନ ଶ୍ରୀଗୌରହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 4,
                    "lyric": "ସତତଂ ଜନତା-ଭବ-ତାପ-ହରଂ\nପରମାର୍ଥ-ପରାୟଣ-ଲୋକ-ଗତିମ୍ ।\nନବ-ଲେହ-କରଂ ଜଗତ୍-ତାପ-ହରଂ\nପ୍ରଣମାମି ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍ ॥ ୪ ॥",
                    "translation": "ଯେ ସାଧାରଣ ଜନଗଣଙ୍କ ସଂସାର-ଯନ୍ତ୍ରଣା ତଥା ତ୍ରିବିଧ ତାପକୁ ନିରନ୍ତର ବିନାଶ କରନ୍ତି, ଯେ ପରମାର୍ଥ-ପରାୟଣ ଭକ୍ତଜନଙ୍କର ଏକମାତ୍ର ପରମ ଗତି, ଯେ ଭ୍ରମର ସଦୃଶ କୃଷ୍ଣପ୍ରେମ-ମଧୁ ଆସ୍ୱାଦନ କରାଇବାରେ ସମସ୍ତଙ୍କୁ ପ୍ରେରିତ କରନ୍ତି ଏବଂ ଯେ ସମଗ୍ର ଜଗତର ଜ୍ୱାଳାକୁ ଦୂର କରନ୍ତି—ସେହି ମାତା ଶଚୀଙ୍କ ପରମ ସୁନ୍ଦର ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କ ଚରଣ କମଳରେ ମୁଁ ପ୍ରଣାମ ଜଣାଉଛି।",
                    "wordMeanings": [
                        {
                            "word": "ସତତମ୍",
                            "meaning": "ସର୍ବଦା, ନିରନ୍ତର"
                        },
                        {
                            "word": "ଜନତା-ଭବ-ତାପ-ହରମ୍",
                            "meaning": "ମାନବ ସମାଜର ଭବସଂସାର ରୂପୀ ତାପ ହରଣ କରୁଥିବା"
                        },
                        {
                            "word": "ପରମାର୍ଥ-ପରାୟଣ",
                            "meaning": "ପରମ ଆଧ୍ୟାତ୍ମିକ ତତ୍ତ୍ୱ ପ୍ରତି ନିଷ୍ଠାବାନ୍"
                        },
                        {
                            "word": "ଲୋକ-ଗତିମ୍",
                            "meaning": "ଭକ୍ତଜନଙ୍କ ପରମ ଆଶ୍ରୟ ଓ ଗତିସ୍ୱରୂପ"
                        },
                        {
                            "word": "ନବ-ଲେହ-କରମ୍",
                            "meaning": "ଭ୍ରମର ସଦୃଶ ନବୀନ ପ୍ରେମାମୃତ ଆସ୍ୱାଦନ କରାଉଥିବା"
                        },
                        {
                            "word": "ଜଗତ୍-ତାପ-ହରମ୍",
                            "meaning": "ସମଗ୍ର ବିଶ୍ୱର ତାପ ପ୍ରଶମିତ କରୁଥିବା"
                        },
                        {
                            "word": "ପ୍ରଣମାମି",
                            "meaning": "ମୁଁ ପ୍ରଣାମ କରୁଛି"
                        },
                        {
                            "word": "ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍",
                            "meaning": "ମାତା ଶଚୀଙ୍କ ପରମ ଶ୍ରେଷ୍ଠ ପୁତ୍ର ଶ୍ରୀଗୌରଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 5,
                    "lyric": "ନିଜ-ଭକ୍ତି-କରଂ ପ୍ରିୟ-ଚାରୁତରଂ\nନଟ-ନର୍ତ୍ତନ-ନାଗର-ରାଜ-କୁଳମ୍ ।\nକୁଳ-କାମିନି-ମାନସ-ଲାସ୍ୟ-କରଂ\nପ୍ରଣମାମି ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍ ॥ ୫ ॥",
                    "translation": "ଯେ ନିଜର ଶୁଦ୍ଧ ଭକ୍ତି ପ୍ରଦାନ କରନ୍ତି, ଯେ ନିଜର ପ୍ରିୟ ଭକ୍ତମାନଙ୍କ ପାଇଁ ଅତ୍ୟନ୍ତ ମନୋହର ଓ କମନୀୟ, ଯେ ନିଜର ଅଦ୍ଭୁତ ନାଟ୍ୟ-ନୃତ୍ୟ ଦ୍ୱାରା ରସିକଶିରୋମଣି ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଚରିତ୍ର ପ୍ରକାଶ କରନ୍ତି ଏବଂ ଯେ କୁଳବଧୂ ଗୋପୀମାନଙ୍କ ଚିତ୍ତକୁ ନୃତ୍ୟ କରାଇବା ଭଳି ପରମ ଆକର୍ଷକ—ସେହି ମାତା ଶଚୀଙ୍କ ପରମ ସୁନ୍ଦର ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କ ଚରଣ କମଳରେ ମୁଁ ପ୍ରଣାମ ଜଣାଉଛି।",
                    "wordMeanings": [
                        {
                            "word": "ନିଜ-ଭକ୍ତି-କରମ୍",
                            "meaning": "ନିଜ ପ୍ରତି ଅହୈତୁକୀ ଶୁଦ୍ଧଭକ୍ତି ଉଦ୍ରେକ କରାଉଥିବା"
                        },
                        {
                            "word": "ପ୍ରିୟ-ଚାରୁତରମ୍",
                            "meaning": "ପ୍ରିୟ ପାର୍ଷଦମାନଙ୍କ ପାଇଁ ଅତ୍ୟନ୍ତ ମନୋରମ"
                        },
                        {
                            "word": "ନଟ-ନର୍ତ୍ତନ",
                            "meaning": "ନାଟ୍ୟଶିଳ୍ପୀ ସଦୃଶ ଅପୂର୍ବ ନୃତ୍ୟ ପ୍ରଦର୍ଶନ କରୁଥିବା"
                        },
                        {
                            "word": "ନାଗର-ରାଜ-କୁଳମ୍",
                            "meaning": "ରସିକରାଜ ଶିରୋମଣିଙ୍କ ଶ୍ରେଷ୍ଠ ଲକ୍ଷଣଯୁକ୍ତ"
                        },
                        {
                            "word": "କୁଳ-କାମିନି",
                            "meaning": "କୁଳବଧୂମାନଙ୍କ (ବ୍ରଜର ଗୋପୀମାନଙ୍କ)"
                        },
                        {
                            "word": "ମାନସ-ଲାସ୍ୟ-କରମ୍",
                            "meaning": "ମନ ଓ ହୃଦୟକୁ ନୃତ୍ୟ କରାଉଥିବା"
                        },
                        {
                            "word": "ପ୍ରଣମାମି",
                            "meaning": "ମୁଁ ପ୍ରଣାମ କରୁଛି"
                        },
                        {
                            "word": "ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍",
                            "meaning": "ଶଚୀନନ୍ଦନ ଶ୍ରେଷ୍ଠ ଗୌରସୁନ୍ଦରଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 6,
                    "lyric": "କରତାଳ-ବଳଂ କଳ-କଣ୍ଠ-ରବଂ\nମୃଦୁ-ବାଦ୍ୟ-ସୁବୀଣିକୟା ମଧୁରମ୍ ।\nନିଜ-ଭକ୍ତି-ଗୁଣାବୃତ-ନାଟ୍ୟ-କରଂ\nପ୍ରଣମାମି ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍ ॥ ୬ ॥",
                    "translation": "ଯେଉଁଠାରେ କରତାଳର ଝଙ୍କାର, କଣ୍ଠର ମଧୁର ସଙ୍ଗୀତ ଧ୍ୱନି ଏବଂ ମୃଦୁ ବୀଣାର ସୁଲଳିତ ଝଙ୍କାର ଅତ୍ୟନ୍ତ ମଧୁର ପରିବେଶ ସୃଷ୍ଟି କରେ, ସେଠାରେ ଯେ ନିଜ ଭକ୍ତିଭାବର ଦିବ୍ୟ ଗୁଣରେ ପରିପୂର୍ଣ୍ଣ ହୋଇ ଅପୂର୍ବ ପ୍ରେମନୃତ୍ୟ କରନ୍ତି—ସେହି ମାତା ଶଚୀଙ୍କ ପରମ ସୁନ୍ଦର ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କ ଚରଣ କମଳରେ ମୁଁ ପ୍ରଣାମ ଜଣାଉଛି।",
                    "wordMeanings": [
                        {
                            "word": "କରତାଳ-ବଳମ୍",
                            "meaning": "କରତାଳ ବାଦନର ଛନ୍ଦୋମୟ ଶକ୍ତିଯୁକ୍ତ"
                        },
                        {
                            "word": "କଳ-କଣ୍ଠ-ରବମ୍",
                            "meaning": "କଣ୍ଠରୁ ମଧୁର କୋକିଳ-ସଦୃଶ ଧ୍ୱନିକାରୀ"
                        },
                        {
                            "word": "ମୃଦୁ-ବାଦ୍ୟ",
                            "meaning": "କୋମଳ ବାଦ୍ୟଯନ୍ତ୍ରର"
                        },
                        {
                            "word": "ସୁବୀଣିକୟା ମଧୁରମ୍",
                            "meaning": "ସୁନ୍ଦର ବୀଣାର ଝଙ୍କାର ସହ ମଧୁର"
                        },
                        {
                            "word": "ନିଜ-ଭକ୍ତି-ଗୁଣ-ଆବୃତ",
                            "meaning": "ନିଜ ଭକ୍ତିଗୁଣରେ ପରିପୂର୍ଣ୍ଣ"
                        },
                        {
                            "word": "ନାଟ୍ୟ-କରମ୍",
                            "meaning": "ଦିବ୍ୟ ନୃତ୍ୟ-ନାଟ୍ୟ କରୁଥିବା"
                        },
                        {
                            "word": "ପ୍ରଣମାମି",
                            "meaning": "ମୁଁ ପ୍ରଣାମ କରୁଛି"
                        },
                        {
                            "word": "ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍",
                            "meaning": "ଶଚୀମାତାଙ୍କ ପରମ ପ୍ରିୟ ପୁତ୍ର ଗୌରହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 7,
                    "lyric": "ଯୁଗ-ଧର୍ମ-ଯୁତଂ ପୁନର୍ ନନ୍ଦ-ସୁତଂ\nଧରଣୀ-ସୁଚିତ୍ରଂ ଭବ-ଭାବୋଚିତମ୍ ।\nତନୁ-ଧ୍ୟାନ-ଚିତଂ ନିଜ-ବାସ-ଯୁତଂ\nପ୍ରଣମାମି ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍ ॥ ୭ ॥",
                    "translation": "ଯେ କଳିଯୁଗର ଏକମାତ୍ର ଯୁଗଧର୍ମ ହରିନାମ ସଂକୀର୍ତ୍ତନ ସହ ଆବିର୍ଭୂତ ହୋଇଛନ୍ତି, ଯେ ପୂର୍ବର ସେହି ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ ପୁନର୍ବାର ଗୌର ରୂପରେ ପ୍ରକଟିତ, ଯେ ପୃଥିବୀର ପରମ ଅଦ୍ଭୁତ ଭୂଷଣ ସ୍ୱରୂପ, ଯେ ବ୍ରଜଭାବର ଯଥାର୍ଥ ଉଚିତ ସ୍ୱରୂପ ପ୍ରକାଶ କରନ୍ତି, ଯାହାଙ୍କ ଚିତ୍ତ ନିଜର ଶ୍ୟାମସୁନ୍ଦର ରୂପର ଧ୍ୟାନରେ ସର୍ବଦା ନିମଗ୍ନ ଏବଂ ଯେ ନିଜର ଦିବ୍ୟ ଧାମ ସହିତ ବିରାଜମାନ—ସେହି ମାତା ଶଚୀଙ୍କ ପରମ ସୁନ୍ଦର ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କ ଚରଣ କମଳରେ ମୁଁ ପ୍ରଣାମ ଜଣାଉଛି।",
                    "wordMeanings": [
                        {
                            "word": "ଯୁଗ-ଧର୍ମ-ଯୁତମ୍",
                            "meaning": "କଳିଯୁଗର ଧର୍ମ (ହରିନାମ ସଂକୀର୍ତ୍ତନ) ସହିତ ଯୁକ୍ତ"
                        },
                        {
                            "word": "ପୁନଃ ନନ୍ଦ-ସୁତମ୍",
                            "meaning": "ପୁନର୍ବାର ଅବତୀର୍ଣ୍ଣ ନନ୍ଦନନ୍ଦନ ଶ୍ରୀକୃଷ୍ଣ"
                        },
                        {
                            "word": "ଧରଣୀ-ସୁଚିତ୍ରମ୍",
                            "meaning": "ପୃଥିବୀର ପରମ ଆଶ୍ଚର୍ଯ୍ୟଜନକ ଅଳଙ୍କାର"
                        },
                        {
                            "word": "ଭବ-ଭାବ-ଉଚିତମ୍",
                            "meaning": "ଭବସଂସାର ତାରଣକାରୀ ପ୍ରେମଭାବରେ ଯଥାଯୋଗ୍ୟ"
                        },
                        {
                            "word": "ତନୁ-ଧ୍ୟାନ-ଚିତମ୍",
                            "meaning": "ନିଜ କୃଷ୍ଣ-କଳେବରର ଧ୍ୟାନରେ ନିମଗ୍ନ ଚିତ୍ତବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ନିଜ-ବାସ-ଯୁତମ୍",
                            "meaning": "ନିଜର ଦିବ୍ୟ ଧାମ (ଶ୍ରୀନବଦ୍ୱୀପ-ମାୟାପୁର) ସହିତ ଯୁକ୍ତ"
                        },
                        {
                            "word": "ପ୍ରଣମାମି",
                            "meaning": "ମୁଁ ପ୍ରଣାମ କରୁଛି"
                        },
                        {
                            "word": "ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍",
                            "meaning": "ମାତା ଶଚୀଙ୍କ ଶ୍ରେଷ୍ଠ ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 8,
                    "lyric": "ଅରୁଣଂ ନୟନଂ ଚରଣଂ ବସନଂ\nବଦନେ ସ୍ଖଳିତଂ ସ୍ୱକ-ନାମ-ଧରମ୍ ।\nକୁରୁତେ ସୁ-ରସଂ ଜଗତଃ ଜୀବନଂ\nପ୍ରଣମାମି ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍ ॥ ୮ ॥",
                    "translation": "ଯାହାଙ୍କ ନେତ୍ରଯୁଗଳ, ଶ୍ରୀଚରଣାରବିନ୍ଦ ଏବଂ ପରିଧାନ ବସ୍ତ୍ର ଉଦିତ ସୂର୍ଯ୍ୟ (ଅରୁଣ)ଙ୍କ ଭଳି ଲାଲିମାମୟ, ପ୍ରେମୋନ୍ମାଦ ବଶତଃ ଯାହାଙ୍କ ଶ୍ରୀମୁଖରୁ ନିଜର ହରିନାମ ଉଚ୍ଚାରଣ ସମୟରେ ବାଣୀ ଗଦ୍‌ଗଦ୍ ହୋଇ ସ୍ଖଳିତ ହେଉଛି, ଏବଂ ଯେ ସମଗ୍ର ଜଗତର ଜୀବନକୁ ପରମ ମଧୁର ପ୍ରେମରସରେ ପରିପୂର୍ଣ୍ଣ କରିଦିଅନ୍ତି—ସେହି ମାତା ଶଚୀଙ୍କ ପରମ ସୁନ୍ଦର ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କ ଚରଣ କମଳରେ ମୁଁ ପ୍ରଣାମ ଜଣାଉଛି।",
                    "wordMeanings": [
                        {
                            "word": "ଅରୁଣମ୍",
                            "meaning": "ପ୍ରଭାତର ସୂର୍ଯ୍ୟ କିରଣ ଭଳି ରକ୍ତିମ"
                        },
                        {
                            "word": "ନୟନମ୍ ଚରଣମ୍ ବସନମ୍",
                            "meaning": "ନେତ୍ର, ଶ୍ରୀଚରଣ ଏବଂ ପରିହିତ ବସ୍ତ୍ର"
                        },
                        {
                            "word": "ବଦନେ",
                            "meaning": "ଶ୍ରୀମୁଖରେ"
                        },
                        {
                            "word": "ସ୍ଖଳିତମ୍",
                            "meaning": "ପ୍ରେମାବେଗରେ ଗଦ୍‌ଗଦ୍ ହୋଇ ସ୍ଖଳିତ ବାଣୀ"
                        },
                        {
                            "word": "ସ୍ୱକ-ନାମ-ଧରମ୍",
                            "meaning": "ନିଜର ହରିନାମକୁ ଧାରଣ କରୁଥିବା"
                        },
                        {
                            "word": "କୁରୁତେ ସୁ-ରସମ୍",
                            "meaning": "ଅତ୍ୟନ୍ତ ମଧୁର ରସମୟ କରୁଛନ୍ତି"
                        },
                        {
                            "word": "ଜଗତଃ ଜୀବନମ୍",
                            "meaning": "ସମଗ୍ର ଜଗତର ଜୀବନକୁ"
                        },
                        {
                            "word": "ପ୍ରଣମାମି",
                            "meaning": "ମୁଁ ପ୍ରଣାମ କରୁଛି"
                        },
                        {
                            "word": "ଶଚୀ-ସୁତ-ଗୌର-ବରମ୍",
                            "meaning": "ମାତା ଶଚୀଙ୍କ ପରମ ଶ୍ରେଷ୍ଠ ପୁତ୍ର ଶ୍ରୀଗୌରସୁନ୍ଦରଙ୍କୁ"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        "id": "song-navaniradanindita",
        "title": "ଶ୍ରୀ ଶ୍ରୀ ବ୍ରଜରାଜ ସୁତାଷ୍ଟକମ୍ - ନବ ନୀରଦ ନିନ୍ଦିତ (Sri Sri Vrajaraja Sutastakam - Nava Nirada Nindita)",
        "title_odia": "ଶ୍ରୀ ଶ୍ରୀ ବ୍ରଜରାଜ ସୁତାଷ୍ଟକମ୍ (ନବ ନୀରଦ ନିନ୍ଦିତ)",
        "title_english": "Sri Sri Vrajaraja Sutastakam (Nava Nirada Nindita)",
        "category": "Songs",
        "type": "html",
        "author": "Traditional",
        "tags": [
            "Nava Nirada Nindita",
            "Vrajaraja Sutastakam",
            "Sri Sri Vrajaraja Sutastakam",
            "Krishna",
            "Vraja Raja Suta",
            "Astakam",
            "Stuti",
            "Traditional",
            "ଶ୍ରୀ ଶ୍ରୀ ବ୍ରଜରାଜ ସୁତାଷ୍ଟକମ୍",
            "ନବ ନୀରଦ ନିନ୍ଦିତ",
            "ଶ୍ରୀକୃଷ୍ଣ"
        ],
        "description": "ଅଜ୍ଞାତ ପାରମ୍ପରିକ ଗୌଡ଼ୀୟ ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟଙ୍କ ଦ୍ୱାରା ବିରଚିତ ବ୍ରଜରାଜ ନନ୍ଦନନ୍ଦନ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଅନୁପମ ରୂପମାଧୁରୀ, ନୟନ, ଚରଣ, କୌସ୍ତୁଭମଣି ଓ ଦିବ୍ୟ ଗୁଣଗଣର ପରମ ଭକ୍ତିମୟ ଅଷ୍ଟକମ୍।",
        "audioUrl": "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_A_to_C/His_Holiness_Bhakti_Charu_Swami/Bhajans/Vaishnava_Bhajans/BCS_Bhajans_-_Vrajaraja_Sutastakam.mp3",
        "vocalist": "HH Bhakti Caru Swami",
        "audioVersions": [
            {
                "label": "HH Bhakti Caru Swami",
                "url": "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_A_to_C/His_Holiness_Bhakti_Charu_Swami/Bhajans/Vaishnava_Bhajans/BCS_Bhajans_-_Vrajaraja_Sutastakam.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-navaniradanindita",
            "title": "ଶ୍ରୀ ଶ୍ରୀ ବ୍ରଜରାଜ ସୁତାଷ୍ଟକମ୍ - ନବ ନୀରଦ ନିନ୍ଦିତ (Sri Sri Vrajaraja Sutastakam - Nava Nirada Nindita)",
            "title_odia": "ଶ୍ରୀ ଶ୍ରୀ ବ୍ରଜରାଜ ସୁତାଷ୍ଟକମ୍ (ନବ ନୀରଦ ନିନ୍ଦିତ)",
            "title_english": "Sri Sri Vrajaraja Sutastakam (Nava Nirada Nindita)",
            "author": "Traditional",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Nava%20Nirada%20Nindita_More%20Songs%20of%20the%20Vaisnava%20Acaryas_35",
            "verses": [
                {
                    "id": 1,
                    "lyric": "ନବ-ନୀରଦ-ନିନ୍ଦିତ-କାନ୍ତି-ଧରଂ\nରସ-ସାଗର-ନାଗର-ଭୂପ-ବରମ୍ ।\nଶୁଭ-ବଙ୍କିମ-ଚାରୁ-ଶିଖଣ୍ଡ-ଶିଖଂ\nଭଜ କୃଷ୍ଣ-ନିଧିଂ ବ୍ରଜ-ରାଜ-ସୁତମ୍ ॥ ୧ ॥",
                    "translation": "ଯାହାଙ୍କ ଶରୀରକାନ୍ତି ନୂତନ ଜଳଧର (ମେଘ)ର ଶୋଭାକୁ ମଧ୍ୟ ପରାସ୍ତ କରେ, ଯେ ପରମ ପ୍ରେମରସର ଅଥଳ ସାଗର ତଥା ରସିକରାଜ ଶିରୋମଣି, ଯାହାଙ୍କ ମସ୍ତକରେ ଶୋଭାମୟ ମୟୂରପୁଚ୍ଛ ତିର୍ଯ୍ୟକ୍ (ବଙ୍କା) ଭାବରେ ସୁଶୋଭିତ—ସେହି ଅପାର କରୁଣାର ଭଣ୍ଡାର, ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ଶ୍ରେଷ୍ଠ ସୁତ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଭଜନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ନବ-ନୀରଦ-ନିନ୍ଦିତ",
                            "meaning": "ନୂତନ ସଜଳ ମେଘର ଶୋଭାକୁ ତିରସ୍କାର କରୁଥିବା"
                        },
                        {
                            "word": "କାନ୍ତି-ଧରମ୍",
                            "meaning": "ଅପୂର୍ବ ଶ୍ୟାମଳ ଅଙ୍ଗକାନ୍ତି ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ରସ-ସାଗର",
                            "meaning": "ସମସ୍ତ ଦିବ୍ୟ ରସର ପରମ ସାଗର"
                        },
                        {
                            "word": "ନାଗର-ଭୂପ-ବରମ୍",
                            "meaning": "ରସିକମାନଙ୍କ ମଧ୍ୟରେ ଶ୍ରେଷ୍ଠ ରାଜା ସ୍ୱରୂପ"
                        },
                        {
                            "word": "ଶୁଭ-ବଙ୍କିମ",
                            "meaning": "ମଙ୍ଗଳମୟ ମନୋହର ବକ୍ରଭଙ୍ଗୀଯୁକ୍ତ"
                        },
                        {
                            "word": "ଚାରୁ-ଶିଖଣ୍ଡ-ଶିଖମ୍",
                            "meaning": "ସୁନ୍ଦର ମୟୂରପୁଚ୍ଛର ଚୂଳରେ ବିଭୂଷିତ"
                        },
                        {
                            "word": "ଭଜ",
                            "meaning": "ଭଜନ କର, ଆରାଧନା କର"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ନିଧିମ୍",
                            "meaning": "ପରମ ପ୍ରେମଧନ ସ୍ୱରୂପ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            "word": "ବ୍ରଜ-ରାଜ-ସୁତମ୍",
                            "meaning": "ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ପୁତ୍ରଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ଭ୍ରୁ-ବିଶଙ୍କିତ-ବଙ୍କିମ-ଶକ୍ର-ଧନୁଂ\nମୁଖ-ଚନ୍ଦ୍ର-ବିନିନ୍ଦିତ-କୋଟି-ବିଧୁମ୍ ।\nମୃଦୁ-ମନ୍ଦ-ସୁହାସ୍ୟ-ସୁଭାଷ୍ୟ-ଯୁତଂ\nଭଜ କୃଷ୍ଣ-ନିଧିଂ ବ୍ରଜ-ରାଜ-ସୁତମ୍ ॥ ୨ ॥",
                    "translation": "ଯାହାଙ୍କ ବଙ୍କିମ ଭ୍ରୂଲତା ଇନ୍ଦ୍ରଧନୁକୁ ମଧ୍ୟ ଲଜ୍ଜିତ କରିଦିଏ, ଯାହାଙ୍କ ଶ୍ରୀମୁଖଚନ୍ଦ୍ରର ମନୋରମ ଶୋଭା କୋଟି କୋଟି ଚନ୍ଦ୍ରମାଙ୍କ କାନ୍ତିକୁ ପରାସ୍ତ କରେ, ଏବଂ ଯେ ମୃଦୁ ମଧୁର ହାସ୍ୟ ତଥା ଅମୃତମୟ ବାଣୀରେ ସୁଶୋଭିତ—ସେହି ଅପାର କରୁଣାର ଭଣ୍ଡାର, ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ଶ୍ରେଷ୍ଠ ସୁତ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଭଜନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ଭ୍ରୁ-ବିଶଙ୍କିତ",
                            "meaning": "ଭ୍ରୂଲତାର ଶୋଭା ଆଗରେ ସନ୍ଦେହରେ ପଡ଼ିଥିବା"
                        },
                        {
                            "word": "ବଙ୍କିମ-ଶକ୍ର-ଧନୁମ୍",
                            "meaning": "ବକ୍ର ଇନ୍ଦ୍ରଧନୁ (ମେଘଧନୁ)"
                        },
                        {
                            "word": "ମୁଖ-ଚନ୍ଦ୍ର",
                            "meaning": "ଚନ୍ଦ୍ର ସଦୃଶ ମନୋହର ଶ୍ରୀମୁଖ"
                        },
                        {
                            "word": "ବିନିନ୍ଦିତ-କୋଟି-ବିଧୁମ୍",
                            "meaning": "କୋଟି କୋଟି ଚନ୍ଦ୍ରକୁ ତିରସ୍କାର କରୁଥିବା"
                        },
                        {
                            "word": "ମୃଦୁ-ମନ୍ଦ-ସୁହାସ୍ୟ",
                            "meaning": "ଅତ୍ୟନ୍ତ କୋମଳ ଓ ମଧୁର ମନ୍ଦହାସ୍ୟ"
                        },
                        {
                            "word": "ସୁଭାଷ୍ୟ-ଯୁତମ୍",
                            "meaning": "ଅମୃତତୁଲ୍ୟ ମଧୁର ବଚନଯୁକ୍ତ"
                        },
                        {
                            "word": "ଭଜ",
                            "meaning": "ନିରନ୍ତର ଭଜନ କର"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ନିଧିମ୍",
                            "meaning": "ଦିବ୍ୟ ଗୁଣରତ୍ନର ଆଧାର ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            "word": "ବ୍ରଜ-ରାଜ-ସୁତମ୍",
                            "meaning": "ବ୍ରଜେଶ୍ୱର ନନ୍ଦଙ୍କ ପ୍ରିୟ ପୁତ୍ରଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ସୁବିକମ୍ପଦ୍-ଅନଙ୍ଗ-ସଦ୍-ଅଙ୍ଗ-ଧରଂ\nବ୍ରଜ-ବାସି-ମନୋହର-ବେଶ-କରମ୍ ।\nଭୃଶ-ଲାଞ୍ଛିତ-ନୀଳ-ସରୋଜ-ଦୃଶଂ\nଭଜ କୃଷ୍ଣ-ନିଧିଂ ବ୍ରଜ-ରାଜ-ସୁତମ୍ ॥ ୩ ॥",
                    "translation": "ପ୍ରେମାବେଗରେ ଯାହାଙ୍କ ଦିବ୍ୟ ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ କମ୍ପିତ ହୁଏ ଏବଂ ଯେ କୋଟି କନ୍ଦର୍ପର ସୌନ୍ଦର୍ଯ୍ୟକୁ ଧାରଣ କରନ୍ତି, ଯେ ବ୍ରଜବାସୀମାନଙ୍କ ଚିତ୍ତକୁ ଆକର୍ଷଣ କରୁଥିବା ଅପୂର୍ବ ବେଶଭୂଷା ଧାରଣ କରନ୍ତି, ଏବଂ ଯାହାଙ୍କ ନୟନଯୁଗଳ ନୀଳପଦ୍ମର ସୌନ୍ଦର୍ଯ୍ୟକୁ ମଧ୍ୟ ତଳେ ପକାଇଦିଏ—ସେହି ଅପାର କରୁଣାର ଭଣ୍ଡାର, ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ଶ୍ରେଷ୍ଠ ସୁତ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଭଜନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ସୁବିକମ୍ପତ୍",
                            "meaning": "ଅତ୍ୟନ୍ତ କମ୍ପିତ ହେଉଥିବା"
                        },
                        {
                            "word": "ଅନଙ୍ଗ",
                            "meaning": "କାମଦେବଙ୍କୁ ବିମୋହିତ କରୁଥିବା"
                        },
                        {
                            "word": "ସଦ୍-ଅଙ୍ଗ-ଧରମ୍",
                            "meaning": "ପରମ ଦିବ୍ୟ ସୁନ୍ଦର ଅଙ୍ଗ ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ବ୍ରଜ-ବାସି",
                            "meaning": "ବ୍ରଜଧାମର ବାସିନ୍ଦାମାନଙ୍କର"
                        },
                        {
                            "word": "ମନୋହର-ବେଶ-କରମ୍",
                            "meaning": "ମନକୁ ମୋହିତ କରୁଥିବା ସୁନ୍ଦର ବେଶଧାରୀ"
                        },
                        {
                            "word": "ଭୃଶ-ଲାଞ୍ଛିତ",
                            "meaning": "ସମ୍ପୂର୍ଣ୍ଣ ଭାବେ ପରାଜିତ କରୁଥିବା"
                        },
                        {
                            "word": "ନୀଳ-ସରୋଜ-ଦୃଶମ୍",
                            "meaning": "ନୀଳପଦ୍ମ ଭଳି ସୁନ୍ଦର ନୟନବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ଭଜ",
                            "meaning": "ସଦା ଭଜନ କର"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ନିଧିମ୍",
                            "meaning": "କଲ୍ୟାଣମୟ ନିଧି ସ୍ୱରୂପ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            "word": "ବ୍ରଜ-ରାଜ-ସୁତମ୍",
                            "meaning": "ବ୍ରଜରାଜଙ୍କ ସୁତଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 4,
                    "lyric": "ଅଳକାବଳି-ମଣ୍ଡିତ-ଭାଲ-ତଟଂ\nଶ୍ରୁତି-ଦୋଳିତ-ମାକର-କୁଣ୍ଡଳକମ୍ ।\nକଟି-ବେଷ୍ଟିତ-ପୀତ-ପଟଂ ସୁଧଟଂ\nଭଜ କୃଷ୍ଣ-ନିଧିଂ ବ୍ରଜ-ରାଜ-ସୁତମ୍ ॥ ୪ ॥",
                    "translation": "ଯାହାଙ୍କ ସୁନ୍ଦର ଲଲାଟ ତରଙ୍ଗାୟିତ କୁଞ୍ଚିତ କେଶଗୁଚ୍ଛ (ଅଳକା) ଦ୍ୱାରା ସୁଶୋଭିତ, ଯାହାଙ୍କ କର୍ଣ୍ଣଯୁଗଳରେ ମକରାକୃତି କୁଣ୍ଡଳ ଦୋଳାୟମାନ ହୋଇ ଶୋଭା ପାଉଛି, ଏବଂ ଯାହାଙ୍କ କଟିତଟରେ ଉଜ୍ଜ୍ୱଳ ପୀତବସ୍ତ୍ର ଅତ୍ୟନ୍ତ ସୁନ୍ଦର ଭାବରେ ବନ୍ଧା ହୋଇଛି—ସେହି ଅପାର କରୁଣାର ଭଣ୍ଡାର, ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ଶ୍ରେଷ୍ଠ ସୁତ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଭଜନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ଅଳକାବଳି-ମଣ୍ଡିତ",
                            "meaning": "କୁଞ୍ଚିତ କେଶଗୁଚ୍ଛ ଦ୍ୱାରା ସୁସଜ୍ଜିତ"
                        },
                        {
                            "word": "ଭାଲ-ତଟମ୍",
                            "meaning": "ମନୋହର କପାଳ (ଲଲାଟ) ଦେଶ"
                        },
                        {
                            "word": "ଶ୍ରୁତି-ଦୋଳିତ",
                            "meaning": "କର୍ଣ୍ଣରେ ଦୋଳାୟମାନ"
                        },
                        {
                            "word": "ମାକର-କୁଣ୍ଡଳକମ୍",
                            "meaning": "ମକର (ମତ୍ସ୍ୟ) ଆକୃତିର କୁଣ୍ଡଳଯୁଗଳ"
                        },
                        {
                            "word": "କଟି-ବେଷ୍ଟିତ",
                            "meaning": "ଅଣ୍ଟାରେ (କଟିରେ) ଗୁଡ଼ାଯାଇଥିବା"
                        },
                        {
                            "word": "ପୀତ-ପଟମ୍",
                            "meaning": "ହଳଦିଆ ରଙ୍ଗର ପୀତାମ୍ବର"
                        },
                        {
                            "word": "ସୁଧଟମ୍",
                            "meaning": "ଅତ୍ୟନ୍ତ ସୁଦୃଢ଼ ଓ ସୁନ୍ଦର ଭାବରେ"
                        },
                        {
                            "word": "ଭଜ",
                            "meaning": "ପ୍ରେମପୂର୍ବକ ଭଜନ କର"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ନିଧିମ୍",
                            "meaning": "ପରମାନନ୍ଦ ନିଧି ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            "word": "ବ୍ରଜ-ରାଜ-ସୁତମ୍",
                            "meaning": "ବ୍ରଜରାଜ ନନ୍ଦଙ୍କ ଆନନ୍ଦବର୍ଦ୍ଧନ ପୁତ୍ରଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 5,
                    "lyric": "କଳ-ନୂପୁର-ରାଜିତ-ଚାରୁ-ପଦଂ\nମଣି-ରଞ୍ଜିତ-ଗଞ୍ଜିତ-ଭୃଙ୍ଗ-ମଦମ୍ ।\nଧ୍ୱଜ-ବଜ୍ର-ଝଷାଙ୍କିତ-ପାଦ-ଯୁଗଂ\nଭଜ କୃଷ୍ଣ-ନିଧିଂ ବ୍ରଜ-ରାଜ-ସୁତମ୍ ॥ ୫ ॥",
                    "translation": "ଯାହାଙ୍କ ମନୋହର ଶ୍ରୀଚରଣ ମଧୁର ଝଙ୍କାରକାରୀ ନୂପୁର ଦ୍ୱାରା ବିଭୂଷିତ, ନୂପୁରର ରତ୍ନମଣିଗୁଡ଼ିକ ଭ୍ରମରମାନଙ୍କ ଗୁଞ୍ଜନ-ଗର୍ବକୁ ମଧ୍ୟ ଖର୍ବ କରିଦିଅନ୍ତି, ଏବଂ ଯାହାଙ୍କ ଶ୍ରୀଚରଣ-ତଳ ଧ୍ୱଜା, ବଜ୍ର, ମତ୍ସ୍ୟ (ଝଷ) ଆଦି ମଙ୍ଗଳମୟ ଚିହ୍ନରେ ଅଙ୍କିତ—ସେହି ଅପାର କରୁଣାର ଭଣ୍ଡାର, ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ଶ୍ରେଷ୍ଠ ସୁତ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଭଜନ କର।",
                    "wordMeanings": [
                        {
                            "word": "କଳ-ନୂପୁର-ରାଜିତ",
                            "meaning": "ମଧୁର ଧ୍ୱନିକାରୀ ନୂପୁର ଦ୍ୱାରା ଶୋଭିତ"
                        },
                        {
                            "word": "ଚାରୁ-ପଦମ୍",
                            "meaning": "ଅତ୍ୟନ୍ତ କୋମଳ ଓ ସୁନ୍ଦର ଶ୍ରୀଚରଣ"
                        },
                        {
                            "word": "ମଣି-ରଞ୍ଜିତ",
                            "meaning": "ମଣିମୁକ୍ତାରେ ଖଚିତ"
                        },
                        {
                            "word": "ଗଞ୍ଜିତ-ଭୃଙ୍ଗ-ମଦମ୍",
                            "meaning": "ଭ୍ରମରମାନଙ୍କ ମଧୁର ଗୁଞ୍ଜନ-ଗର୍ବକୁ ତିରସ୍କାର କରୁଥିବା"
                        },
                        {
                            "word": "ଧ୍ୱଜ-ବଜ୍ର-ଝଷ-ଅଙ୍କିତ",
                            "meaning": "ପତାକା, ବଜ୍ର ଓ ମତ୍ସ୍ୟ ଚିହ୍ନରେ ଚିହ୍ନିତ"
                        },
                        {
                            "word": "ପାଦ-ଯୁଗମ୍",
                            "meaning": "ଉଭୟ ଶ୍ରୀଚରଣ କମଳ"
                        },
                        {
                            "word": "ଭଜ",
                            "meaning": "ଅନୁରାଗ ସହିତ ଭଜନ କର"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ନିଧିମ୍",
                            "meaning": "ଭକ୍ତିରତ୍ନର ଆକର ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            "word": "ବ୍ରଜ-ରାଜ-ସୁତମ୍",
                            "meaning": "ବ୍ରଜରାଜଙ୍କ ଦିବ୍ୟ ପୁତ୍ରଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 6,
                    "lyric": "ଭୃଶ-ଚନ୍ଦନ-ଚର୍ଚ୍ଚିତ-ଚାରୁ-ତନୁଂ\nମଣି-କୌସ୍ତୁଭ-ଗର୍ହିତ-ଭାନୁ-ତନୁମ୍ ।\nବ୍ରଜ-ବାଳ-ଶିରୋମଣି-ରୂପ-ଧୃତଂ\nଭଜ କୃଷ୍ଣ-ନିଧିଂ ବ୍ରଜ-ରାଜ-ସୁତମ୍ ॥ ୬ ॥",
                    "translation": "ଯାହାଙ୍କ ମନୋରମ ଶରୀର ସୁବାସିତ ଚନ୍ଦନ ପଙ୍କ ଦ୍ୱାରା ପ୍ରଚୁର ଭାବେ ଚର୍ଚ୍ଚିତ, ଯାହାଙ୍କ ବକ୍ଷସ୍ଥଳରେ ଝଲସୁଥିବା କୌସ୍ତୁଭ ମଣି ସୂର୍ଯ୍ୟଙ୍କ ତେଜକୁ ମଧ୍ୟ ତୁଚ୍ଛ କରିଦିଏ, ଏବଂ ଯାହାଙ୍କ ରୂପ ବ୍ରଜର ସମସ୍ତ ବାଳକମାନଙ୍କ ମଧ୍ୟରେ ସର୍ବଶ୍ରେଷ୍ଠ ଶିରୋମଣି ସ୍ୱରୂପ—ସେହି ଅପାର କରୁଣାର ଭଣ୍ଡାର, ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ଶ୍ରେଷ୍ଠ ସୁତ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଭଜନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ଭୃଶ-ଚନ୍ଦନ-ଚର୍ଚ୍ଚିତ",
                            "meaning": "ପ୍ରଚୁର ଚନ୍ଦନ ଲେପରେ ସୁସୁରଭିତ"
                        },
                        {
                            "word": "ଚାରୁ-ତନୁମ୍",
                            "meaning": "ଅତି କମନୀୟ ଶ୍ରୀଅଙ୍ଗ"
                        },
                        {
                            "word": "ମଣି-କୌସ୍ତୁଭ",
                            "meaning": "ଦିବ୍ୟ କୌସ୍ତୁଭ ମଣିର ପ୍ରଭା ଦ୍ୱାରା"
                        },
                        {
                            "word": "ଗର୍ହିତ-ଭାନୁ-ତନୁମ୍",
                            "meaning": "ସୂର୍ଯ୍ୟଙ୍କ ତେଜୋମୟ କାନ୍ତିକୁ ପରାସ୍ତ କରିଥିବା"
                        },
                        {
                            "word": "ବ୍ରଜ-ବାଳ-ଶିରୋମଣି",
                            "meaning": "ବ୍ରଜର ଗୋପବାଳକମାନଙ୍କ ମଉଡ଼ମଣି"
                        },
                        {
                            "word": "ରୂପ-ଧୃତମ୍",
                            "meaning": "ଅନୁପମ ରୂପ ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ଭଜ",
                            "meaning": "ନିଷ୍ଠାପୂର୍ବକ ଭଜନ କର"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ନିଧିମ୍",
                            "meaning": "ଅମୂଲ୍ୟ ନିଧି ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            "word": "ବ୍ରଜ-ରାଜ-ସୁତମ୍",
                            "meaning": "ବ୍ରଜରାଜ ନନ୍ଦଙ୍କ ଶ୍ରେଷ୍ଠ ପୁତ୍ରଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 7,
                    "lyric": "ସୁର-ବୃନ୍ଦ-ସୁବନ୍ଦ୍ୟ-ମୁକୁନ୍ଦ-ହରିଂ\nସୁର-ନାଥ-ଶିରୋମଣି-ସର୍ବ-ଗୁରୁମ୍ ।\nଗିରିଧାରି-ମୁରାରି-ପୁରାରି-ପରଂ\nଭଜ କୃଷ୍ଣ-ନିଧିଂ ବ୍ରଜ-ରାଜ-ସୁତମ୍ ॥ ୭ ॥",
                    "translation": "ସମସ୍ତ ଦେବଗଣଙ୍କ ଦ୍ୱାରା ଯେ ପରମ ପୂଜିତ, ଯେ ମୁକ୍ତିଦାତା ମୁକୁନ୍ଦ ଏବଂ ସମସ୍ତ ପାପହରଣକାରୀ ଶ୍ରୀହରି, ଯେ ସମସ୍ତ ଦେବାଧିପତିଙ୍କ ମୁକୁଟମଣି ତଥା ସମଗ୍ର ସଂସାରର ପରମ ଗୁରୁ, ଯେ ଗିରିରାଜ-ଧାରଣକାରୀ, ମୁର-ଅସୁର ବିନାଶକାରୀ ଏବଂ ଶିବ (ପୁରାରି)ଙ୍କର ମଧ୍ୟ ପରମ ଇଷ୍ଟଦେବ—ସେହି ଅପାର କରୁଣାର ଭଣ୍ଡାର, ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ଶ୍ରେଷ୍ଠ ସୁତ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଭଜନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ସୁର-ବୃନ୍ଦ-ସୁବନ୍ଦ୍ୟ",
                            "meaning": "ଦେବତାସମୂହଙ୍କ ଦ୍ୱାରା ଭକ୍ତିପୂର୍ବକ ବନ୍ଦିତ"
                        },
                        {
                            "word": "ମୁକୁନ୍ଦ-ହରିମ୍",
                            "meaning": "ମୁକ୍ତିପ୍ରଦାତା ଶ୍ରୀମୁକୁନ୍ଦ ତଥା ଦୁଃଖହରଣକାରୀ ଶ୍ରୀହରି"
                        },
                        {
                            "word": "ସୁର-ନାଥ-ଶିରୋମଣି",
                            "meaning": "ଦେବରାଜ ଇନ୍ଦ୍ରାଦି ଦେବତାଙ୍କ ଶିରୋମଣି"
                        },
                        {
                            "word": "ସର୍ବ-ଗୁରୁମ୍",
                            "meaning": "ସମସ୍ତ ଜୀବଙ୍କର ପରମ ଗୁରୁ"
                        },
                        {
                            "word": "ଗିରିଧାରି",
                            "meaning": "ଶ୍ରୀଗୋବର୍ଦ୍ଧନ ଗିରିଧାରୀ"
                        },
                        {
                            "word": "ମୁରାରି",
                            "meaning": "ମୁର ଦୈତ୍ୟକୁ ବିନାଶ କରିଥିବା"
                        },
                        {
                            "word": "ପୁରାରି-ପରମ୍",
                            "meaning": "ପୁରାରି (ଭଗବାନ ଶିବ)ଙ୍କର ପରମ ପ୍ରଭୁ"
                        },
                        {
                            "word": "ଭଜ",
                            "meaning": "ଭକ୍ତିର ସହ ଭଜନ କର"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ନିଧିମ୍",
                            "meaning": "କରୁଣାନିଧି ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            "word": "ବ୍ରଜ-ରାଜ-ସୁତମ୍",
                            "meaning": "ବ୍ରଜରାଜ ନନ୍ଦଙ୍କ ଆନନ୍ଦଘନ ପୁତ୍ରଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 8,
                    "lyric": "ବୃଷଭାନୁ-ସୁତା-ବର-କେଳି-ପରଂ\nରସ-ରାଜ-ଶିରୋମଣି-ବେଶ-ଧରମ୍ ।\nଜଗଦ୍-ଈଶ୍ୱରମ୍-ଈଶ୍ୱରମ୍-ଈଡ଼୍ୟ-ବରଂ\nଭଜ କୃଷ୍ଣ-ନିଧିଂ ବ୍ରଜ-ରାଜ-ସୁତମ୍ ॥ ୮ ॥",
                    "translation": "ଯେ ବୃଷଭାନୁନନ୍ଦିନୀ ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ସହିତ ଶ୍ରେଷ୍ଠ ପ୍ରେମକ୍ରୀଡ଼ାରେ ନିରତ, ଯେ ରସରାଜ-ଶିରୋମଣି ଭାବରେ ଅପୂର୍ବ ବେଶଭୂଷା ଧାରଣ କରନ୍ତି, ଯେ ସମଗ୍ର ବ୍ରହ୍ମାଣ୍ଡର ପରମେଶ୍ୱର, ସମସ୍ତ ନିୟନ୍ତ୍ରକଙ୍କ ନିୟନ୍ତା ଏବଂ ସର୍ବଶ୍ରେଷ୍ଠ ସ୍ତୁତିଯୋଗ୍ୟ ପରମ ପୁରୁଷ—ସେହି ଅପାର କରୁଣାର ଭଣ୍ଡାର, ବ୍ରଜରାଜ ନନ୍ଦମହାରାଜଙ୍କ ଶ୍ରେଷ୍ଠ ସୁତ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଭଜନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ବୃଷଭାନୁ-ସୁତା",
                            "meaning": "ଶ୍ରୀବୃଷଭାନୁ ରାଜାଙ୍କ କନ୍ୟା ଶ୍ରୀମତୀ ରାଧାରାଣୀ"
                        },
                        {
                            "word": "ବର-କେଳି-ପରମ୍",
                            "meaning": "ଶ୍ରେଷ୍ଠ ମଧୁର ପ୍ରେମକ୍ରୀଡ଼ାରେ ନିମଗ୍ନ"
                        },
                        {
                            "word": "ରସ-ରାଜ-ଶିରୋମଣି",
                            "meaning": "ଅଖିଳରସାମୃତମୂର୍ତ୍ତି ରସରାଜଙ୍କ ଚୂଡ଼ାମଣି"
                        },
                        {
                            "word": "ବେଶ-ଧରମ୍",
                            "meaning": "ମନମୋହନ ବେଶଭୂଷା ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ଜଗଦ୍-ଈଶ୍ୱରମ୍",
                            "meaning": "ସମଗ୍ର ଜଗତର ପରମ ପ୍ରଭୁ"
                        },
                        {
                            "word": "ଈଶ୍ୱରମ୍",
                            "meaning": "ସର୍ବନିୟାମକ ପରମେଶ୍ୱର"
                        },
                        {
                            "word": "ଈଡ଼୍ୟ-ବରମ୍",
                            "meaning": "ସର୍ବଶ୍ରେଷ୍ଠ ସ୍ତୁତିଯୋଗ୍ୟ ପରମ ସତ୍ତା"
                        },
                        {
                            "word": "ଭଜ",
                            "meaning": "ଏକନିଷ୍ଠ ଭାବେ ଭଜନ କର"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ନିଧିମ୍",
                            "meaning": "ପ୍ରେମସୁଧାନିଧି ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            "word": "ବ୍ରଜ-ରାଜ-ସୁତମ୍",
                            "meaning": "ବ୍ରଜରାଜ ନନ୍ଦନନ୍ଦନଙ୍କୁ"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        "id": "song-nijapatibhuja",
        "title": "ଶ୍ରୀ ଶ୍ରୀ ଗୋବର୍ଦ୍ଧନ ବାସ ପ୍ରାର୍ଥନା ଦଶକମ୍ - ନିଜ ପତି ଭୁଜ (Sri Sri Govardhana Vasa Prarthana Dasakam - Nija Pati Bhuja)",
        "title_odia": "ଶ୍ରୀ ଶ୍ରୀ ଗୋବର୍ଦ୍ଧନ ବାସ ପ୍ରାର୍ଥନା ଦଶକମ୍ (ନିଜ ପତି ଭୁଜ)",
        "title_english": "Sri Sri Govardhana Vasa Prarthana Dasakam (Nija Pati Bhuja)",
        "category": "Songs",
        "type": "html",
        "author": "Raghunatha Dasa Goswami",
        "tags": [
            "Nija Pati Bhuja",
            "Govardhana Vasa Prarthana Dasakam",
            "Sri Sri Govardhana Vasa Prarthana Dasakam",
            "Raghunatha Dasa Goswami",
            "Govardhana",
            "Giriraja",
            "Stuti",
            "Prarthana",
            "ଶ୍ରୀ ଶ୍ରୀ ଗୋବର୍ଦ୍ଧନ ବାସ ପ୍ରାର୍ଥନା ଦଶକମ୍",
            "ନିଜ ପତି ଭୁଜ",
            "ରଘୁନାଥ ଦାସ ଗୋସ୍ୱାମୀ"
        ],
        "description": "ଶ୍ରୀଳ ରଘୁନାଥ ଦାସ ଗୋସ୍ୱାମୀଙ୍କ ଦ୍ୱାରା ବିରଚିତ ପବିତ୍ର ଗିରିରାଜ ଗୋବର୍ଦ୍ଧନଙ୍କ ନିକଟରେ ସ୍ଥାୟୀ ନିବାସ ତଥା ଶ୍ରୀଶ୍ରୀ ରାଧାକୃଷ୍ଣ ଯୁଗଳଙ୍କ ଦିବ୍ୟ ପ୍ରେମସେବା ଲାଭ ନିମନ୍ତେ ପରମ ଭକ୍ତିପୂର୍ଣ୍ଣ ପ୍ରାର୍ଥନାମୟ ଦଶକମ୍।",
        "audioUrl": "https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2FGovardhan%20Astakam.MP3",
        "vocalist": "HG Jai Sachinandana Prabhu",
        "audioVersions": [
            {
                "label": "HG Jai Sachinandana Prabhu",
                "url": "https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2FGovardhan%20Astakam.MP3"
            },
            {
                "label": "HG Jai Sachinandana Prabhu (IDT)",
                "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Raghunath_Dasa_Goswami/Nija_Pati_Bhuja/Nija_Pati_Bhuja_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-nijapatibhuja",
            "title": "ଶ୍ରୀ ଶ୍ରୀ ଗୋବର୍ଦ୍ଧନ ବାସ ପ୍ରାର୍ଥନା ଦଶକମ୍ - ନିଜ ପତି ଭୁଜ (Sri Sri Govardhana Vasa Prarthana Dasakam - Nija Pati Bhuja)",
            "title_odia": "ଶ୍ରୀ ଶ୍ରୀ ଗୋବର୍ଦ୍ଧନ ବାସ ପ୍ରାର୍ଥନା ଦଶକମ୍ (ନିଜ ପତି ଭୁଜ)",
            "title_english": "Sri Sri Govardhana Vasa Prarthana Dasakam (Nija Pati Bhuja)",
            "author": "Raghunatha Dasa Goswami",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Nija%20Pati%20Bhuja_",
            "verses": [
                {
                    "id": 1,
                    "lyric": "ନିଜ-ପତି-ଭୁଜ-ଦଣ୍ଡଚ୍-ଛତ୍ର-ଭାବଂ ପ୍ରପଦ୍ୟ\nପ୍ରତିହତ-ମଦ-ଧୃଷ୍ଟୋଦ୍ଦଣ୍ଡ-ଦେବେନ୍ଦ୍ର-ଗର୍ବ ।\nଅତୁଳ-ପୃଥୁଳ-ଶୈଳ-ଶ୍ରେଣି-ଭୂପ ପ୍ରିୟଂ ମେ\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୧ ॥",
                    "translation": "ହେ ଶ୍ରୀଗିରିରାଜ ଗୋବର୍ଦ୍ଧନ! ନିଜ ପ୍ରାଣନାଥ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ବାହୁଦଣ୍ଡକୁ ଦଣ୍ଡା କରି ଯେତେବେଳେ ଆପଣ ଛତ୍ର (ଛତା) ରୂପ ଧାରଣ କଲେ, ସେତେବେଳେ ଗର୍ବୋନ୍ମତ୍ତ, ଦୁର୍ଦ୍ଦାନ୍ତ ତଥା ଉଦ୍ଧତ ଦେବରାଜ ଇନ୍ଦ୍ରର ସମସ୍ତ ଅହଙ୍କାର ଚୂର୍ଣ୍ଣ-ବିଚୂର୍ଣ୍ଣ ହୋଇଗଲା। ହେ ଅତୁଳନୀୟ ବିଶାଳ ପର୍ବତଶ୍ରେଷ୍ଠ ଭୂପତି! ମୋର ପରମ ପ୍ରିୟ ଆକାଂକ୍ଷା—ଆପଣ ଦୟାକରି ମୋତେ ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ନିଜ-ପତି",
                            "meaning": "ନିଜ ପ୍ରଭୁ ଶ୍ରୀକୃଷ୍ଣଙ୍କ"
                        },
                        {
                            "word": "ଭୁଜ-ଦଣ୍ଡତ୍",
                            "meaning": "ଶ୍ରୀହସ୍ତର ବାହୁଦଣ୍ଡରୁ"
                        },
                        {
                            "word": "ଛତ୍ର-ଭାବମ୍ ପ୍ରପଦ୍ୟ",
                            "meaning": "ଛତ୍ର ସ୍ୱରୂପ ଧାରଣ କରି"
                        },
                        {
                            "word": "ପ୍ରତିହତ",
                            "meaning": "ଧ୍ୱଂସପ୍ରାପ୍ତ, ଚୂର୍ଣ୍ଣୀଭୂତ"
                        },
                        {
                            "word": "ମଦ-ଧୃଷ୍ଟ-ଉଦ୍ଦଣ୍ଡ",
                            "meaning": "ଅହଙ୍କାରରେ ଉଦ୍ଧତ ଓ ଧୃଷ୍ଟ"
                        },
                        {
                            "word": "ଦେବେନ୍ଦ୍ର-ଗର୍ବ",
                            "meaning": "ଦେବରାଜ ଇନ୍ଦ୍ରଙ୍କ ଅହଙ୍କାର"
                        },
                        {
                            "word": "ଅତୁଳ-ପୃଥୁଳ",
                            "meaning": "ଅତୁଳନୀୟ ବିଶାଳ"
                        },
                        {
                            "word": "ଶୈଳ-ଶ୍ରେଣି-ଭୂପ",
                            "meaning": "ପର୍ବତରାଜମାନଙ୍କ ଅଧିପତି"
                        },
                        {
                            "word": "ପ୍ରିୟମ୍ ମେ",
                            "meaning": "ମୋର ପରମ ପ୍ରିୟ ଅଭିଳାଷ"
                        },
                        {
                            "word": "ନିଜ-ନିକଟ-ନିବାସମ୍",
                            "meaning": "ନିଜ ପାଖରେ ଶ୍ରୀଚରଣ ସନ୍ନିଧାନରେ ନିବାସ"
                        },
                        {
                            "word": "ଦେହି",
                            "meaning": "ପ୍ରଦାନ କରନ୍ତୁ"
                        },
                        {
                            "word": "ଗୋବର୍ଦ୍ଧନ",
                            "meaning": "ହେ ପବିତ୍ର ଗିରିରାଜ ଗୋବର୍ଦ୍ଧନ!"
                        },
                        {
                            "word": "ତ୍ୱମ୍",
                            "meaning": "ଆପଣ"
                        }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ପ୍ରମଦ-ମଦନ-ଲୀଳାଃ କନ୍ଦରେ କନ୍ଦରେ ତେ\nରଚୟତି ନବ-ୟୂନୋର୍ ଦ୍ୱନ୍ଦ୍ୱମ୍ ଅସ୍ମିନ୍ନ୍ ଅମନ୍ଦମ୍ ।\nଇତି କିଲ କଳନାର୍ଥଂ ଲଗ୍ନକସ୍ ତଦ୍-ଦ୍ୱୟୋର୍ ମେ\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୨ ॥",
                    "translation": "ହେ ଗୋବର୍ଦ୍ଧନ! ଆପଣଙ୍କ ପ୍ରତ୍ୟେକ ଗୁମ୍ଫା (କନ୍ଦର) ମଧ୍ୟରେ ନବକିଶୋର ଶ୍ରୀଶ୍ରୀ ରାଧା-କୃଷ୍ଣ ଯୁଗଳ ପରମ ଉଲ୍ଲାସପୂର୍ଣ୍ଣ ମଧୁର ପ୍ରେମଲୀଳା ରଚନା କରନ୍ତି। ସେହି ଦିବ୍ୟ ଯୁଗଳକିଶୋରଙ୍କ ଅମୃତମୟ ଲୀଳା ଦର୍ଶନ ଓ ସେବାର ଅଧିକାର ପାଇବା ନିମନ୍ତେ, ହେ ଗିରିରାଜ! ଦୟାକରି ମୋତେ ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ପ୍ରମଦ-ମଦନ-ଲୀଳାଃ",
                            "meaning": "ପରମ ଆନନ୍ଦମୟୀ ପ୍ରେମଲୀଳାସମୂହ"
                        },
                        {
                            "word": "କନ୍ଦରେ କନ୍ଦରେ",
                            "meaning": "ପ୍ରତ୍ୟେକ ଗୁମ୍ଫା ଗହ୍ୱର ମଧ୍ୟରେ"
                        },
                        {
                            "word": "ତେ",
                            "meaning": "ଆପଣଙ୍କର"
                        },
                        {
                            "word": "ରଚୟତି",
                            "meaning": "ରଚନା କରନ୍ତି"
                        },
                        {
                            "word": "ନବ-ୟୂନୋଃ ଦ୍ୱନ୍ଦ୍ୱମ୍",
                            "meaning": "ନବକିଶୋର ଶ୍ରୀରାଧା-କୃଷ୍ଣ ଯୁଗଳ"
                        },
                        {
                            "word": "ଅସ୍ମିନ୍",
                            "meaning": "ଏହି ଗିରିରାଜଙ୍କ ଉପରେ"
                        },
                        {
                            "word": "ଅମନ୍ଦମ୍",
                            "meaning": "ନିରନ୍ତର, ଅତ୍ୟନ୍ତ ଉତ୍ସାହର ସହ"
                        },
                        {
                            "word": "ଇତି କିଲ",
                            "meaning": "ଏହି ପ୍ରକାରେ"
                        },
                        {
                            "word": "କଳନ-ଅର୍ଥମ୍",
                            "meaning": "ଅବଲୋକନ ବା ସେବା କରିବା ପାଇଁ"
                        },
                        {
                            "word": "ଲଗ୍ନକଃ",
                            "meaning": "ଅନୁରକ୍ତ, ଆଶ୍ରିତ"
                        },
                        {
                            "word": "ତତ୍-ଦ୍ୱୟୋଃ",
                            "meaning": "ସେହି ଦିବ୍ୟ ଯୁଗଳଙ୍କର"
                        },
                        {
                            "word": "ମେ",
                            "meaning": "ମୋତେ"
                        },
                        {
                            "word": "ନିଜ-ନିକଟ-ନିବାସମ୍ ଦେହି",
                            "meaning": "ନିଜ ସନ୍ନିକଟରେ ବାସ ଦିଅନ୍ତୁ"
                        },
                        {
                            "word": "ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍",
                            "meaning": "ହେ ଗୋବର୍ଦ୍ଧନ! ଆପଣ"
                        }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ଅନୁପମ-ମଣି-ବେଦୀ-ରତ୍ନ-ସିଂହାସନୋର୍ବୀ-\nରୁହ-ଝର-ଦର-ସାନୁ-ଦ୍ରୋଣି-ସଙ୍ଘେଷୁ ରଙ୍ଗୈଃ ।\nସହ ବଳ-ସଖିଭିଃ ସଙ୍ଖେଳୟନ୍ ସ୍ୱ-ପ୍ରିୟଂ ମେ\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୩ ॥",
                    "translation": "ହେ ଗୋବର୍ଦ୍ଧନ! ଆପଣଙ୍କ ଅତୁଳନୀୟ ମଣିବେଦୀ, ରତ୍ନଖଚିତ ସିଂହାସନ, କଳ୍ପତରୁ ସଦୃଶ ବୃକ୍ଷରାଜି, ନିର୍ଝରିଣୀ, ଗୁମ୍ଫା, ପର୍ବତ ଶିଖର ଓ ମନୋରମ ଉପତ୍ୟକାସମୂହରେ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣ ବଳରାମ ତଥା ନିଜର ପ୍ରିୟ ଗୋପସଖାମାନଙ୍କ ସହିତ ଅତ୍ୟନ୍ତ ଆନନ୍ଦରେ ଦିବ୍ୟ ଖେଳ ଖେଳନ୍ତି। ହେ ପ୍ରଭୁ! ମୋର ପରମ ପ୍ରିୟ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଏହି ଲୀଳାସ୍ଥଳୀରେ ମୋତେ ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଅନୁପମ-ମଣି-ବେଦୀ",
                            "meaning": "ଅତୁଳନୀୟ ରତ୍ନବେଦୀ"
                        },
                        {
                            "word": "ରତ୍ନ-ସିଂହାସନ",
                            "meaning": "ରତ୍ନଖଚିତ ଆସନ"
                        },
                        {
                            "word": "ଊର୍ବୀରୁହ",
                            "meaning": "ବୃକ୍ଷସମୂହ"
                        },
                        {
                            "word": "ଝର",
                            "meaning": "ନିର୍ଝରିଣୀ, ଝରଣା"
                        },
                        {
                            "word": "ଦର",
                            "meaning": "ଗୁମ୍ଫା"
                        },
                        {
                            "word": "ସାନୁ",
                            "meaning": "ପର୍ବତ ଶୃଙ୍ଗ"
                        },
                        {
                            "word": "ଦ୍ରୋଣି-ସଙ୍ଘେଷୁ",
                            "meaning": "ଉପତ୍ୟକାସମୂହ ମଧ୍ୟରେ"
                        },
                        {
                            "word": "ରଙ୍ଗୈଃ",
                            "meaning": "ନାନାବିଧ ଆନନ୍ଦ ଉଲ୍ଲାସ ସହିତ"
                        },
                        {
                            "word": "ସହ ବଳ-ସଖିଭିଃ",
                            "meaning": "ବଳରାମ ଓ ଗୋପସଖାମାନଙ୍କ ସଙ୍ଗେ"
                        },
                        {
                            "word": "ସଙ୍ଖେଳୟନ୍",
                            "meaning": "ଦିବ୍ୟ କ୍ରୀଡ଼ା କରାଇ"
                        },
                        {
                            "word": "ସ୍ୱ-ପ୍ରିୟମ୍",
                            "meaning": "ନିଜର ପ୍ରିୟତମଙ୍କୁ"
                        },
                        {
                            "word": "ମେ",
                            "meaning": "ମୋତେ"
                        },
                        {
                            "word": "ନିଜ-ନିକଟ-ନିବାସମ୍ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍",
                            "meaning": "ହେ ଗୋବର୍ଦ୍ଧନ! ମୋତେ ନିଜ ପାଖରେ ବାସ ଦିଅନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 4,
                    "lyric": "ରସ-ନିଧି-ନବ-ୟୂନୋଃ ସାକ୍ଷିଣୀଂ ଦାନ-କେଲେର୍\nଦ୍ୟୁତି-ପରିମଳ-ବିଦ୍ଧଂ ଶ୍ୟାମ-ବେଦିଂ ପ୍ରକାଶ୍ୟ ।\nରସିକ-ବର-କୁଳାନାଂ ମୋଦମ୍ ଆସ୍ଫାଳୟନ୍ ମେ\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୪ ॥",
                    "translation": "ହେ ଗୋବର୍ଦ୍ଧନ! ନିଖିଳ ରସର ଭଣ୍ଡାର ନବକିଶୋର ଶ୍ରୀରାଧା-କୃଷ୍ଣଙ୍କ ପ୍ରସିଦ୍ଧ ଦାନ-କେଳି (ପ୍ରେମ-ଶୁଳ୍କ) ଲୀଳାର ସାକ୍ଷୀ ସ୍ୱରୂପ, ଆପଣ ଦିବ୍ୟ କାନ୍ତି ଓ ସୁଗନ୍ଧରେ ପରିପୂର୍ଣ୍ଣ ଶ୍ୟାମବେଦୀ ପ୍ରକଟ କରି ଶ୍ରେଷ୍ଠ ରସିକ ବୈଷ୍ଣବମାନଙ୍କ ମନରେ ପରମ ଆନନ୍ଦ ତରଙ୍ଗ ସୃଷ୍ଟି କରନ୍ତି। ହେ ଗିରିରାଜ! ଦୟାକରି ମୋତେ ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ରସ-ନିଧି",
                            "meaning": "ସମସ୍ତ ଅମୃତ ରସର ନିଧି"
                        },
                        {
                            "word": "ନବ-ୟୂନୋଃ",
                            "meaning": "ନବଯୁବକ-ଯୁବତୀ ଶ୍ରୀରାଧା-ଶ୍ୟାମସୁନ୍ଦରଙ୍କ"
                        },
                        {
                            "word": "ସାକ୍ଷିଣୀମ୍ ଦାନ-କେଲେଃ",
                            "meaning": "ଦାନକେଳି ଲୀଳାର ସାକ୍ଷୀସ୍ୱରୂପ"
                        },
                        {
                            "word": "ଦ୍ୟୁତି-ପରିମଳ-ବିଦ୍ଧମ୍",
                            "meaning": "ଦିବ୍ୟ ଆଲୋକ ଓ ସୁବାସରେ ବ୍ୟାପ୍ତ"
                        },
                        {
                            "word": "ଶ୍ୟାମ-ବେଦିମ୍",
                            "meaning": "ପବିତ୍ର ଶ୍ୟାମବେଦୀକୁ"
                        },
                        {
                            "word": "ପ୍ରକାଶ୍ୟ",
                            "meaning": "ପ୍ରକଟ କରି"
                        },
                        {
                            "word": "ରସିକ-ବର-କୁଳାନାମ୍",
                            "meaning": "ଶ୍ରେଷ୍ଠ ରସଜ୍ଞ ଭକ୍ତଗଣଙ୍କର"
                        },
                        {
                            "word": "ମୋଦମ୍ ଆସ୍ଫାଳୟନ୍",
                            "meaning": "ଆନନ୍ଦ ବର୍ଦ୍ଧନ କରାଉଥିବା"
                        },
                        {
                            "word": "ମେ ନିଜ-ନିକଟ-ନିବାସମ୍ ଦେହି",
                            "meaning": "ମୋତେ ନିଜ ନିକଟରେ ନିବାସ ଦିଅନ୍ତୁ"
                        },
                        {
                            "word": "ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍",
                            "meaning": "ହେ ଗୋବର୍ଦ୍ଧନ! ଆପଣ"
                        }
                    ]
                },
                {
                    "id": 5,
                    "lyric": "ହରି-ଦୟିତମ୍ ଅପୂର୍ବଂ ରାଧିକା-କୁଣ୍ଡମ୍ ଆତ୍ମ-\nପ୍ରିୟ-ସଖମ୍ ଇହ କଣ୍ଠେ ନର୍ମଣାଲିଙ୍ଗ୍ୟ ଗୁପ୍ତଃ ।\nନବ-ଯୁବ-ଯୁଗ-ଖେଳାସ୍ ତତ୍ର ପଶ୍ୟନ୍ ରହୋ ମେ\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୫ ॥",
                    "translation": "ହେ ଗୋବର୍ଦ୍ଧନ! ଶ୍ରୀହରିଙ୍କ ପରମ ପ୍ରିୟତମ ତଥା ଅପୂର୍ବ ଶ୍ରୀରାଧାକୁଣ୍ଡ ରୂପୀ ନିଜ ଅନ୍ତରଙ୍ଗ ସଖାଙ୍କୁ ଆପଣ ପ୍ରେମରସରେ ଗଳାମିଳାଇ ଆଲିଙ୍ଗନ କରି ଗୁପ୍ତ ଭାବରେ ସେଠାରେ ଅବସ୍ଥାନ କରନ୍ତି ଏବଂ ନବଦମ୍ପତି ଶ୍ରୀରାଧା-କୃଷ୍ଣଙ୍କ ଅନ୍ତରଙ୍ଗ ନିଭୃତ କେଳିଲୀଳାକୁ ପ୍ରତ୍ୟକ୍ଷ ଦର୍ଶନ କରନ୍ତି। ହେ ଗିରିରାଜ! ଦୟାକରି ମୋତେ ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ହରି-ଦୟିତମ୍",
                            "meaning": "ଶ୍ରୀହରିଙ୍କ ପରମ ପ୍ରିୟ"
                        },
                        {
                            "word": "ଅପୂର୍ବମ୍ ରାଧିକା-କୁଣ୍ଡମ୍",
                            "meaning": "ଅଲୌକିକ ଶ୍ରୀରାଧାକୁଣ୍ଡକୁ"
                        },
                        {
                            "word": "ଆତ୍ମ-ପ୍ରିୟ-ସଖମ୍",
                            "meaning": "ନିଜ ପ୍ରାଣପ୍ରିୟ ବନ୍ଧୁ ରୂପେ"
                        },
                        {
                            "word": "ଇହ",
                            "meaning": "ଏଠାରେ"
                        },
                        {
                            "word": "କଣ୍ଠେ ନର୍ମଣା ଆଲିଙ୍ଗ୍ୟ",
                            "meaning": "କଣ୍ଠରେ ପ୍ରେମଭରେ ଆଲିଙ୍ଗନ କରି"
                        },
                        {
                            "word": "ଗୁପ୍ତଃ",
                            "meaning": "ଗୁପ୍ତ ଭାବରେ ରହି"
                        },
                        {
                            "word": "ନବ-ଯୁବ-ଯୁଗ-ଖେଳାଃ",
                            "meaning": "ନବକିଶୋର ଯୁଗଳଙ୍କ ଦିବ୍ୟ ଲୀଳାକୁ"
                        },
                        {
                            "word": "ତତ୍ର ପଶ୍ୟନ୍",
                            "meaning": "ସେଠାରେ ଦର୍ଶନ କରୁଥିବା"
                        },
                        {
                            "word": "ରହଃ",
                            "meaning": "ନିର୍ଜନରେ, ଗୋପନରେ"
                        },
                        {
                            "word": "ମେ ନିଜ-ନିକଟ-ନିବାସମ୍ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍",
                            "meaning": "ହେ ଗୋବର୍ଦ୍ଧନ! ମୋତେ ଆପଣଙ୍କ ପାଖରେ ନିବାସ ଦିଅନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 6,
                    "lyric": "ସ୍ଥଳ-ଜଳ-ତଳ-ଶଷ୍ପୈର୍ ଭୂରୁହ-ଛାୟୟା ଚ\nପ୍ରତିପଦମ୍ ଅନୁକାଳଂ ହନ୍ତ ସମ୍ବର୍ଦ୍ଧୟନ୍ ଗାଃ ।\nତ୍ରି-ଜଗତି ନିଜ-ଗୋତ୍ରଂ ସାର୍ଥକଂ ଖ୍ୟାପୟନ୍ ମେ\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୬ ॥",
                    "translation": "ହେ ଗୋବର୍ଦ୍ଧନ! ଆପଣ ସୁଶୀତଳ ଜଳ, କୋମଳ ହରିତ ତୃଣ ଏବଂ ଘଞ୍ଚ ବୃକ୍ଷରାଜିର ଶୀତଳ ଛାୟା ଦ୍ୱାରା ପ୍ରତ୍ୟେକ ପାଦପାତରେ ନିରନ୍ତର ସୁରଭି ଗାଭୀମାନଙ୍କର ପୋଷଣ ଓ ସମ୍ବର୍ଦ୍ଧନ କରନ୍ତି। ଏହିପରି ଗାଭୀମାନଙ୍କୁ ବୃଦ୍ଧି (ସମ୍ବର୍ଦ୍ଧନ) କରାଇ ତ୍ରିଭୁବନରେ ନିଜ ଗୋବର୍ଦ୍ଧନ ନାମକୁ ଯଥାର୍ଥ ଭାବେ ସାର୍ଥକ ପ୍ରମାଣିତ କରିଛନ୍ତି। ହେ ଗିରିରାଜ! ଦୟାକରି ମୋତେ ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ସ୍ଥଳ-ଜଳ",
                            "meaning": "ଭୂମି ଏବଂ ଅମୃତତୁଲ୍ୟ ନିର୍ମଳ ଜଳ"
                        },
                        {
                            "word": "ତଳ-ଶଷ୍ପୈଃ",
                            "meaning": "ଭୂମିରେ ଉତ୍ପନ୍ନ କୋମଳ ଘାସ (ତୃଣ) ଦ୍ୱାରା"
                        },
                        {
                            "word": "ଭୂରୁହ-ଛାୟୟା ଚ",
                            "meaning": "ବୃକ୍ଷମାନଙ୍କ ଶୀତଳ ଛାୟା ଦ୍ୱାରା"
                        },
                        {
                            "word": "ପ୍ରତିପଦମ୍ ଅନୁକାଳମ୍",
                            "meaning": "ପ୍ରତିକ୍ଷଣ, ସର୍ବଦା"
                        },
                        {
                            "word": "ହନ୍ତ ସମ୍ବର୍ଦ୍ଧୟନ୍ ଗାଃ",
                            "meaning": "ଗାଈମାନଙ୍କର ସୁଖ ସମ୍ବର୍ଦ୍ଧନ କରୁଥିବା"
                        },
                        {
                            "word": "ତ୍ରି-ଜଗତି",
                            "meaning": "ତିନି ଭୁବନରେ"
                        },
                        {
                            "word": "ନିଜ-ଗୋତ୍ରମ୍",
                            "meaning": "ନିଜ ନାମକୁ (ଗୋବର୍ଦ୍ଧନ)"
                        },
                        {
                            "word": "ସାର୍ଥକମ୍ ଖ୍ୟାପୟନ୍",
                            "meaning": "ସାର୍ଥକ ଭାବେ ପ୍ରକାଶ କରୁଥିବା"
                        },
                        {
                            "word": "ମେ ନିଜ-ନିକଟ-ନିବାସମ୍ ଦେହି",
                            "meaning": "ମୋତେ ଆପଣଙ୍କ ନିକଟରେ ଆଶ୍ରୟ ଦିଅନ୍ତୁ"
                        },
                        {
                            "word": "ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍",
                            "meaning": "ହେ ଗୋବର୍ଦ୍ଧନ! ଆପଣ"
                        }
                    ]
                },
                {
                    "id": 7,
                    "lyric": "ସୁରପତି-କୃତ-ଦୀର୍ଘ-ଦ୍ରୋହତୋ ଗୋଷ୍ଠ-ରକ୍ଷାଂ\nତବ ନବ-ଗୃହ-ରୂପସ୍ୟାନ୍ତରେ କୁର୍ବତୈବ ।\nଅଘ-ବକ-ରିପୁଣୋଚ୍ଚୈର୍ ଦତ୍ତ-ମାନ ଦ୍ରୁତଂ ମେ\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୭ ॥",
                    "translation": "ହେ ଗୋବର୍ଦ୍ଧନ! କ୍ରୋଧାନ୍ୱିତ ଇନ୍ଦ୍ରଙ୍କ ପ୍ରଚଣ୍ଡ ପ୍ରଳୟଙ୍କରୀ ବର୍ଷାଜନିତ ଉତ୍ପାତରୁ ବ୍ରଜଗୋଷ୍ଠକୁ ରକ୍ଷା କରିବା ପାଇଁ, ଅଘାସୁର ଓ ବକାସୁରର ଶତ୍ରୁ ଶ୍ରୀକୃଷ୍ଣ ଆପଣଙ୍କୁ ନୂତନ ଗୃହ (ଛତ୍ର) ରୂପେ ଉତ୍ତୋଳନ କରିଥିଲେ ଏବଂ ଆପଣଙ୍କୁ ସର୍ବଶ୍ରେଷ୍ଠ ସମ୍ମାନ ପ୍ରଦାନ କରିଥିଲେ। ହେ ପରମ ସମ୍ମାନିତ ଗିରିରାଜ! ଶୀଘ୍ର ମୋତେ ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ସୁରପତି-କୃତ",
                            "meaning": "ଇନ୍ଦ୍ରଙ୍କ ଦ୍ୱାରା କରାଯାଇଥିବା"
                        },
                        {
                            "word": "ଦୀର୍ଘ-ଦ୍ରୋହତଃ",
                            "meaning": "ପ୍ରଚଣ୍ଡ ଶତ୍ରୁତା ଓ ବିନାଶକାରୀ ଆକ୍ରମଣରୁ"
                        },
                        {
                            "word": "ଗୋଷ୍ଠ-ରକ୍ଷାମ୍",
                            "meaning": "ଗୋକୁଳ-ଗୋଷ୍ଠକୁ ରକ୍ଷା କରିବା ନିମନ୍ତେ"
                        },
                        {
                            "word": "ତବ ନବ-ଗୃହ-ରୂପସ୍ୟ",
                            "meaning": "ଆପଣଙ୍କୁ ନୂତନ ଗୃହ ସଦୃଶ କରି"
                        },
                        {
                            "word": "ଅନ୍ତରେ କୁର୍ବତା ଏବ",
                            "meaning": "ନିଜ ଅଭ୍ୟନ୍ତରରେ ସମସ୍ତଙ୍କୁ ଆଶ୍ରୟ ଦେଇ"
                        },
                        {
                            "word": "ଅଘ-ବକ-ରିପୁଣା",
                            "meaning": "ଅଘାସୁର ଓ ବକାସୁରଙ୍କ ଶତ୍ରୁ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ଉଚ୍ଚୈଃ ଦତ୍ତ-ମାନ",
                            "meaning": "ପରମ ଶ୍ରେଷ୍ଠ ସମ୍ମାନ ପ୍ରାପ୍ତ"
                        },
                        {
                            "word": "ଦ୍ରୁତମ୍",
                            "meaning": "ଅତି ଶୀଘ୍ର"
                        },
                        {
                            "word": "ମେ ନିଜ-ନିକଟ-ନିବାସମ୍ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍",
                            "meaning": "ହେ ଗୋବର୍ଦ୍ଧନ! ମୋତେ ଆପଣଙ୍କ ସନ୍ନିଧିରେ ବାସ ଦିଅନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 8,
                    "lyric": "ଗିରି-ନୃପ-ହରି-ଦାସ-ଶ୍ରେଣି-ବର୍ଯ୍ୟେତି-ନାମା-\nମୃତମ୍ ଇଦମ୍ ଉଦିତଂ ଶ୍ରୀ-ରାଧିକା-ବକ୍ତ୍ର-ଚନ୍ଦ୍ରାତ୍ ।\nବ୍ରଜ-ନବ-ତିଳକତ୍ୱେ କ୍ଲପ୍ତ-ବେଦୈଃ ସ୍ଫୁଟଂ ମେ\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୮ ॥",
                    "translation": "ହେ ଶୈଳରାଜ! ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ଚନ୍ଦ୍ରମୁଖରୁ ନିଃସୃତ ହୋଇଛି ଆପଣଙ୍କ ପରମ ଅମୃତମୟ ନାମ—ହରି-ଦାସ-ବର୍ଯ୍ୟ (ଶ୍ରୀହରିଙ୍କ ସେବକମାନଙ୍କ ମଧ୍ୟରେ ସର୍ବଶ୍ରେଷ୍ଠ)। ବେଦବାଣୀ ମଧ୍ୟ ଆପଣଙ୍କୁ ବ୍ରଜଭୂମିର ନବୀନ ଦିବ୍ୟ ତିଳକ ରୂପେ ପ୍ରତିଷ୍ଠିତ କରିଅଛି। ହେ ପରମ ଭାଗ୍ୟବାନ୍ ଗିରିରାଜ! ଦୟାକରି ମୋତେ ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଗିରି-ନୃପ",
                            "meaning": "ହେ ପର୍ବତରାଜ!"
                        },
                        {
                            "word": "ହରି-ଦାସ-ଶ୍ରେଣି-ବର୍ଯ୍ୟ",
                            "meaning": "ଶ୍ରୀହରିଙ୍କ ଭକ୍ତ-ସେବକଗଣଙ୍କ ମଧ୍ୟରେ ସର୍ବୋତ୍ତମ"
                        },
                        {
                            "word": "ଇତି-ନାମ-ଅମୃତମ୍",
                            "meaning": "ଏହି ଅମୃତମୟ ନାମ"
                        },
                        {
                            "word": "ଇଦମ୍ ଉଦିତମ୍",
                            "meaning": "ପ୍ରକଟିତ ହୋଇଛି"
                        },
                        {
                            "word": "ଶ୍ରୀ-ରାଧିକା-ବକ୍ତ୍ର-ଚନ୍ଦ୍ରାତ୍",
                            "meaning": "ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ମୁଖଚନ୍ଦ୍ରରୁ"
                        },
                        {
                            "word": "ବ୍ରଜ-ନବ-ତିଳକତ୍ୱେ",
                            "meaning": "ବ୍ରଜମଣ୍ଡଳର ନୂତନ ଶୋଭାମୟ ତିଳକ ରୂପେ"
                        },
                        {
                            "word": "କ୍ଲପ୍ତ-ବେଦୈଃ",
                            "meaning": "ବେଦମାନଙ୍କ ଦ୍ୱାରା ନିରୂପିତ"
                        },
                        {
                            "word": "ସ୍ଫୁଟମ୍",
                            "meaning": "ସ୍ପଷ୍ଟ ଭାବରେ"
                        },
                        {
                            "word": "ମେ ନିଜ-ନିକଟ-ନିବାସମ୍ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍",
                            "meaning": "ହେ ଗୋବର୍ଦ୍ଧନ! ମୋତେ ନିଜ ପାଖରେ ବାସ ପ୍ରଦାନ କରନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 9,
                    "lyric": "ନିଜ-ଜନ-ଯୁତ-ରାଧା-କୃଷ୍ଣ-ମୈତ୍ରୀ-ରସାକ୍ତ-\nବ୍ରଜ-ନର-ପଶୁ-ପକ୍ଷି-ବ୍ରାତ-ସୌଖ୍ୟୈକ-ଦାତଃ ।\nଅଗଣିତ-କରୁଣତ୍ୱାନ୍ ମାଂ ଉରୀ-କୃତ୍ୟ ତାନ୍ତଂ\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୯ ॥",
                    "translation": "ହେ ଗୋବର୍ଦ୍ଧନ! ନିଜର ସଖୀ ଓ ସଖାମାନଙ୍କ ସହିତ ଶ୍ରୀରାଧା-କୃଷ୍ଣଙ୍କ ପ୍ରେମମୈତ୍ରୀ ରସରେ ସିକ୍ତ ହୋଇଥିବା ବ୍ରଜର ସମସ୍ତ ମାନବ, ପଶୁ ଓ ପକ୍ଷୀକୁଳଙ୍କୁ ଆପଣ ଅପୂର୍ବ ଦିବ୍ୟ ଆନନ୍ଦ ପ୍ରଦାନ କରନ୍ତି। ହେ ଅସୀମ କରୁଣାମୟ! ମୁଁ ଭବତାପରେ ଅତ୍ୟନ୍ତ କ୍ଳାନ୍ତ ଓ ସନ୍ତପ୍ତ; ଆପଣଙ୍କ ଅପାର କରୁଣାବଳରେ ମୋତେ ସ୍ୱୀକାର କରି ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ନିଜ-ଜନ-ଯୁତ",
                            "meaning": "ନିଜ ସଖା-ସଖୀମାନଙ୍କ ଗହଣରେ"
                        },
                        {
                            "word": "ରାଧା-କୃଷ୍ଣ-ମୈତ୍ରୀ-ରସ-ଆକ୍ତ",
                            "meaning": "ଶ୍ରୀରାଧା-କୃଷ୍ଣଙ୍କ ମଧୁର ସମ୍ପର୍କରସରେ ସିକ୍ତ"
                        },
                        {
                            "word": "ବ୍ରଜ-ନର-ପଶୁ-ପକ୍ଷି-ବ୍ରାତ",
                            "meaning": "ବ୍ରଜର ମନୁଷ୍ୟ, ପଶୁ ଓ ପକ୍ଷୀଗଣଙ୍କର"
                        },
                        {
                            "word": "ସୌଖ୍ୟ-ଏକ-ଦାତଃ",
                            "meaning": "ଏକମାତ୍ର ପରମ ସୁଖଦାତା"
                        },
                        {
                            "word": "ଅଗଣିତ-କରୁଣତ୍ୱାତ୍",
                            "meaning": "ଅସୀମ, ଅପରିମେୟ କୃପାଗୁଣ ହେତୁ"
                        },
                        {
                            "word": "ମାମ୍ ଉରୀ-କୃତ୍ୟ",
                            "meaning": "ମୋତେ ଆପଣଙ୍କ ନିଜର ବୋଲି ସ୍ୱୀକାର କରି"
                        },
                        {
                            "word": "ତାନ୍ତମ୍",
                            "meaning": "ସଂସାରତାପରେ ଅତ୍ୟନ୍ତ କ୍ଳାନ୍ତ ଓ ପୀଡ଼ିତ ମୋତେ"
                        },
                        {
                            "word": "ନିଜ-ନିକଟ-ନିବାସମ୍ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍",
                            "meaning": "ହେ ଗୋବର୍ଦ୍ଧନ! ମୋତେ ନିଜ ସମୀପରେ ବାସ ଦିଅନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 10,
                    "lyric": "ନିରୁପଧି-କରୁଣେନ ଶ୍ରୀ-ଶଚୀନନ୍ଦନେନ\nତ୍ୱୟି କପଟି-ଶଠୋ 'ପି ତ୍ୱତ୍-ପ୍ରିୟେନାର୍ପିତୋ 'ସ୍ମି ।\nଇତି ଖଳୁ ମମ ଯୋଗ୍ୟାଯୋଗ୍ୟତାଂ ମାମ୍ ଅଗୃହ୍ଣନ୍\nନିଜ-ନିକଟ-ନିବାସଂ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍ ॥ ୧୦ ॥",
                    "translation": "ହେ ଗୋବର୍ଦ୍ଧନ! ଯଦିଓ ମୁଁ କପଟୀ ଓ ଦୁରାଚାରୀ, ତଥାପି ଅହୈତୁକୀ କରୁଣାର ସିନ୍ଧୁ ତଥା ଆପଣଙ୍କର ପରମ ପ୍ରିୟତମ ପ୍ରଭୁ ଶ୍ରୀଶଚୀନନ୍ଦନ ଗୌରହରି ମୋତେ ଆପଣଙ୍କ ଶ୍ରୀଚରଣରେ ଅର୍ପଣ କରିଛନ୍ତି। ତେଣୁ ମୋର ଯୋଗ୍ୟତା ବା ଅଯୋଗ୍ୟତା ପ୍ରତି ବିଚାର ନ କରି, କେବଳ ମହାପ୍ରଭୁଙ୍କ ସମ୍ବନ୍ଧ ହେତୁ ମୋତେ ଗ୍ରହଣ କରି ନିଜ ସମୀପରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ନିରୁପଧି-କରୁଣେନ",
                            "meaning": "ଅହୈତୁକୀ କରୁଣାର ଆଗାର"
                        },
                        {
                            "word": "ଶ୍ରୀ-ଶଚୀନନ୍ଦନେନ",
                            "meaning": "ଶ୍ରୀମନ୍ ମହାପ୍ରଭୁ ଶଚୀନନ୍ଦନଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ତ୍ୱୟି",
                            "meaning": "ଆପଣଙ୍କ ଚରଣରେ"
                        },
                        {
                            "word": "କପଟି-ଶଠଃ ଅପି",
                            "meaning": "କପଟୀ ଓ ଧୂର୍ତ୍ତ ହେବା ସତ୍ତ୍ୱେ"
                        },
                        {
                            "word": "ତ୍ୱତ୍-ପ୍ରିୟେନ",
                            "meaning": "ଆପଣଙ୍କ ପ୍ରିୟତମ ପ୍ରଭୁଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ଅର୍ପିତଃ ଅସ୍ମି",
                            "meaning": "ସମର୍ପିତ ହୋଇଛି"
                        },
                        {
                            "word": "ଇତି ଖଳୁ",
                            "meaning": "ଏହି କାରଣରୁ ନିଶ୍ଚୟ"
                        },
                        {
                            "word": "ମମ ଯୋଗ୍ୟ-ଅଯୋଗ୍ୟତାମ୍",
                            "meaning": "ମୋର ଯୋଗ୍ୟତା ବା ଅଯୋଗ୍ୟତା"
                        },
                        {
                            "word": "ମାମ୍ ଅଗୃହ୍ଣନ୍",
                            "meaning": "ବିଚାରକୁ ନ ନେଇ"
                        },
                        {
                            "word": "ନିଜ-ନିକଟ-ନିବାସମ୍ ଦେହି ଗୋବର୍ଦ୍ଧନ ତ୍ୱମ୍",
                            "meaning": "ହେ ଗୋବର୍ଦ୍ଧନ! ଆପଣ ମୋତେ ନିଜ ସନ୍ନିଧାନରେ ନିବାସ ପ୍ରଦାନ କରନ୍ତୁ"
                        }
                    ]
                },
                {
                    "id": 11,
                    "lyric": "ରସଦ-ଦଶକମ୍ ଅସ୍ୟ ଶ୍ରୀଳ-ଗୋବର୍ଦ୍ଧନସ୍ୟ\nକ୍ଷିତିଧର-କୁଳ-ଭର୍ତ୍ତୁର୍ ଯଃ ପ୍ରଯତ୍ନାଦ୍ ଅଧୀତେ ।\nସ ସପଦି ସୁଖଦେ 'ସ୍ମିନ୍ ବାସମ୍ ଆସାଦ୍ୟ ସାକ୍ଷାଚ୍\nଛୁଭଦ-ଯୁଗଳ-ସେବା-ରତ୍ନମ୍ ଆପ୍ନୋତି ତୂର୍ଣ୍ଣମ୍ ॥ ୧୧ ॥",
                    "translation": "ଯେଉଁ ଭକ୍ତ ସମସ୍ତ ପର୍ବତମାନଙ୍କ ଶ୍ରେଷ୍ଠ ପତି ଶ୍ରୀଳ ଗୋବର୍ଦ୍ଧନଙ୍କ ଏହି ପରମ ରସମୟ ଦଶକ ସ୍ତୁତିକୁ ଯତ୍ନପୂର୍ବକ ପାଠ କରନ୍ତି, ସେ ଅବିଳମ୍ବେ ଏହି ଆନନ୍ଦଦାୟକ ଗିରିରାଜଙ୍କ ନିକଟରେ ସ୍ଥାୟୀ ନିବାସ ଲାଭ କରନ୍ତି ଏବଂ ଶୀଘ୍ର ପରମ ମଙ୍ଗଳମୟ ଶ୍ରୀରାଧା-କୃଷ୍ଣ ଯୁଗଳଙ୍କ ଦିବ୍ୟ ସେବାରତ୍ନ ପ୍ରାପ୍ତ ହୁଅନ୍ତି।",
                    "wordMeanings": [
                        {
                            "word": "ରସଦ-ଦଶକମ୍",
                            "meaning": "ପରମ ପ୍ରେମରସ ପ୍ରଦାନକାରୀ ଦଶଟି ଶ୍ଲୋକ"
                        },
                        {
                            "word": "ଅସ୍ୟ ଶ୍ରୀଳ-ଗୋବର୍ଦ୍ଧନସ୍ୟ",
                            "meaning": "ଏହି ପବିତ୍ର ଶ୍ରୀଳ ଗୋବର୍ଦ୍ଧନଙ୍କର"
                        },
                        {
                            "word": "କ୍ଷିତିଧର-କୁଳ-ଭର୍ତ୍ତୁଃ",
                            "meaning": "ସକଳ ପର୍ବତଗଣଙ୍କ ପାଳନକର୍ତ୍ତା ଓ ଅଧିପତିଙ୍କର"
                        },
                        {
                            "word": "ଯଃ ପ୍ରଯତ୍ନାତ୍ ଅଧୀତେ",
                            "meaning": "ଯେ ନିଷ୍ଠାପୂର୍ବକ ପାଠ କରନ୍ତି"
                        },
                        {
                            "word": "ସଃ ସପଦି",
                            "meaning": "ସେ ତତ୍କ୍ଷଣାତ୍, ଅତିଶୀଘ୍ର"
                        },
                        {
                            "word": "ସୁଖଦେ ଅସ୍ମିନ୍",
                            "meaning": "ଏହି ପରମ ସୁଖମୟ ଗିରିରାଜଙ୍କ ଠାରେ"
                        },
                        {
                            "word": "ବାସମ୍ ଆସାଦ୍ୟ",
                            "meaning": "ନିବାସ ଲାଭ କରି"
                        },
                        {
                            "word": "ସାକ୍ଷାତ୍",
                            "meaning": "ପ୍ରତ୍ୟକ୍ଷ ଭାବରେ"
                        },
                        {
                            "word": "ଶୁଭଦ",
                            "meaning": "ପରମ କଲ୍ୟାଣକାରୀ"
                        },
                        {
                            "word": "ଯୁଗଳ-ସେବା-ରତ୍ନମ୍",
                            "meaning": "ଶ୍ରୀରାଧାକୃଷ୍ଣ ଯୁଗଳଙ୍କ ଅମୂଲ୍ୟ ସେବାରତ୍ନ"
                        },
                        {
                            "word": "ଆପ୍ନୋତି ତୂର୍ଣ୍ଣମ୍",
                            "meaning": "ଅତି ଶୀଘ୍ର ପ୍ରାପ୍ତ ହୁଅନ୍ତି"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        "id": "song-namastakam",
        "title": "ଶ୍ରୀ ଶ୍ରୀ ନାମାଷ୍ଟକମ୍ - ନିଖିଳ ଶ୍ରୁତି ମୌଳି ରତ୍ନ (Sri Sri Namastakam - Nikhila Sruti Mauli Ratna)",
        "title_odia": "ଶ୍ରୀ ଶ୍ରୀ ନାମାଷ୍ଟକମ୍ (ନିଖିଳ ଶ୍ରୁତି ମୌଳି ରତ୍ନ)",
        "title_english": "Sri Sri Namastakam (Nikhila Sruti Mauli Ratna)",
        "category": "Songs",
        "type": "html",
        "author": "Rupa Goswami",
        "tags": [
            "Nikhila Sruti Mauli Ratna",
            "Namastakam",
            "Sri Sri Namastakam",
            "Rupa Goswami",
            "Harinama",
            "Nama Tattva",
            "Astakam",
            "Stuti",
            "ଶ୍ରୀ ଶ୍ରୀ ନାମାଷ୍ଟକମ୍",
            "ନିଖିଳ ଶ୍ରୁତି ମୌଳି ରତ୍ନ",
            "ରୂପ ଗୋସ୍ୱାମୀ"
        ],
        "description": "ଶ୍ରୀଳ ରୂପ ଗୋସ୍ୱାମୀଙ୍କ ଦ୍ୱାରା ବିରଚିତ ପବିତ୍ର ହରିନାମ ପ୍ରଭୁଙ୍କ ଅପରିମେୟ ମହିମା, ନାମାଭାସର ଶକ୍ତି, ବାଚ୍ୟ-ବାଚକ ତତ୍ତ୍ୱ ତଥା ଶ୍ରୀକୃଷ୍ଣ ନାମ ପ୍ରେମରସର ପରମ ସିଦ୍ଧାନ୍ତମୟ ଅଷ୍ଟକମ୍।",
        "audioUrl": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FNamashtakam%20-%20WONDERFUL%20GLORIES%20OF%20HARINAAM%20-%20HARE%20KRISHNA%20MAHAMANTRA.mp3",
        "vocalist": "HG Yasoda Kumara Prabhu",
        "audioVersions": [
            {
                "label": "HG Yasoda Kumara Prabhu",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads%2FNamashtakam%20-%20WONDERFUL%20GLORIES%20OF%20HARINAAM%20-%20HARE%20KRISHNA%20MAHAMANTRA.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-namastakam",
            "title": "ଶ୍ରୀ ଶ୍ରୀ ନାମାଷ୍ଟକମ୍ - ନିଖିଳ ଶ୍ରୁତି ମୌଳି ରତ୍ନ (Sri Sri Namastakam - Nikhila Sruti Mauli Ratna)",
            "title_odia": "ଶ୍ରୀ ଶ୍ରୀ ନାମାଷ୍ଟକମ୍ (ନିଖିଳ ଶ୍ରୁତି ମୌଳି ରତ୍ନ)",
            "title_english": "Sri Sri Namastakam (Nikhila Sruti Mauli Ratna)",
            "author": "Rupa Goswami",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Nikhila%20Sruti%20Mauli%20Ratna_More%20Songs_12",
            "verses": [
                {
                    "id": 1,
                    "lyric": "ନିଖିଳ-ଶ୍ରୁତି-ମୌଳି-ରତ୍ନ-ମାଳା-\nଦ୍ୟୁତି-ନୀରାଜିତ-ପାଦ-ପଙ୍କଜାନ୍ତ ।\nଅୟି ମୁକ୍ତ-କୁଳୈର୍ ଉପାସ୍ୟମାନଂ\nପରିତସ୍ ତ୍ୱାଂ ହରି-ନାମ ସଂଶ୍ରୟାମି ॥ ୧ ॥",
                    "translation": "ହେ ହରିନାମ! ସମଗ୍ର ବେଦର ମୁକୁଟମଣି ସ୍ୱରୂପ ଉପନିଷଦଗଣଙ୍କ କାନ୍ତିମୟ ରଶ୍ମିରାଜି ଆପଣଙ୍କ ଶ୍ରୀଚରଣ-କମଳର ନଖଦର୍ପଣର ନୀରାଜନ (ଆରତୀ) କରୁଅଛନ୍ତି। ନାରଦ ଓ ଶୁକଦେବଙ୍କ ଭଳି ମୁକ୍ତ ମହାପୁରୁଷମାନେ ଆପଣଙ୍କର ନିରନ୍ତର ଉପାସନା କରନ୍ତି। ହେ ପରମ ପବିତ୍ର ହରିନାମ! ମୁଁ ସର୍ବଭାବରେ ଆପଣଙ୍କର ପୂର୍ଣ୍ଣ ଆଶ୍ରୟ ଗ୍ରହଣ କରୁଛି।",
                    "wordMeanings": [
                        {
                            "word": "ନିଖିଳ-ଶ୍ରୁତି",
                            "meaning": "ସମସ୍ତ ବେଦର"
                        },
                        {
                            "word": "ମୌଳି-ରତ୍ନ-ମାଳା",
                            "meaning": "ମୁକୁଟମଣିମାଳା ସ୍ୱରୂପ ଉପନିଷଦସମୂହର"
                        },
                        {
                            "word": "ଦ୍ୟୁତି-ନୀରାଜିତ",
                            "meaning": "ଦିବ୍ୟ ପ୍ରଭା ଦ୍ୱାରା ଆରତୀ ହୋଇଥିବା"
                        },
                        {
                            "word": "ପାଦ-ପଙ୍କଜ-ଅନ୍ତ",
                            "meaning": "ଶ୍ରୀଚରଣ-କମଳର ଅଗ୍ରଭାଗ (ନଖମଣି)"
                        },
                        {
                            "word": "ଅୟି",
                            "meaning": "ହେ ପରମ କୃପାମୟ!"
                        },
                        {
                            "word": "ମୁକ୍ତ-କୁଳୈଃ",
                            "meaning": "ମୁକ୍ତ ପୁରୁଷମାନଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ଉପାସ୍ୟମାନମ୍",
                            "meaning": "ନିରନ୍ତର ପୂଜିତ ହେଉଥିବା"
                        },
                        {
                            "word": "ପରିତଃ",
                            "meaning": "ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ, ସର୍ବତୋଭାବେ"
                        },
                        {
                            "word": "ତ୍ୱାମ୍",
                            "meaning": "ଆପଣଙ୍କୁ"
                        },
                        {
                            "word": "ହରି-ନାମ",
                            "meaning": "ହେ ଶ୍ରୀହରିଙ୍କ ପବିତ୍ର ନାମ!"
                        },
                        {
                            "word": "ସଂଶ୍ରୟାମି",
                            "meaning": "ମୁଁ ଏକାନ୍ତ ଆଶ୍ରୟ ଗ୍ରହଣ କରୁଛି"
                        }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ଜୟ ନାମଧେୟ ମୁନି-ବୃନ୍ଦ-ଗେୟ ହେ\nଜନ-ରଞ୍ଜନାୟ ପରମ୍ ଅକ୍ଷରାକୃତେ ।\nତ୍ୱମ୍ ଅନାଦରାଦ୍ ଅପି ମନାଗ୍ ଉଦୀରିତଂ\nନିଖିଳୋଗ୍ର-ତାପ-ପଟଳୀଂ ବିଲୁମ୍ପସି ॥ ୨ ॥",
                    "translation": "ହେ ମୁନିଗଣଙ୍କ ଦ୍ୱାରା ସଦା କୀର୍ତ୍ତିତ ଭଗବନ୍-ନାମଧେୟ! ଆପଣଙ୍କର ଜୟ ହେଉ। ଆପଣ ଜୀବମାନଙ୍କୁ ଆନନ୍ଦ ପ୍ରଦାନ କରିବା ନିମନ୍ତେ ଅକ୍ଷର ରୂପରେ ଅବତୀର୍ଣ୍ଣ ହୋଇଛନ୍ତି। ଯଦି କେହି ଅବହେଳା ବା ଅନାଦର ପୂର୍ବକ ମଧ୍ୟ ଥରୁଟିଏ ଆପଣଙ୍କ ନାମ ଉଚ୍ଚାରଣ କରେ, ତଥାପି ଆପଣ ତାହାର ସମସ୍ତ ଭୟଙ୍କର ସାଂସାରିକ ଦୁଃଖ-ତାପକୁ ସମ୍ପୂର୍ଣ୍ଣ ବିନଷ୍ଟ କରିଦିଅନ୍ତି।",
                    "wordMeanings": [
                        {
                            "word": "ଜୟ",
                            "meaning": "ଆପଣଙ୍କର ଜୟଜୟକାର ହେଉ"
                        },
                        {
                            "word": "ନାମଧେୟ",
                            "meaning": "ହେ ଶ୍ରୀଭଗବାନଙ୍କ ନାମ!"
                        },
                        {
                            "word": "ମୁନି-ବୃନ୍ଦ-ଗେୟ",
                            "meaning": "ମୁନି-ଋଷିଗଣଙ୍କ ଦ୍ୱାରା ସଦା ଗାନ କରାଯାଉଥିବା"
                        },
                        {
                            "word": "ହେ ଜନ-ରଞ୍ଜନାୟ",
                            "meaning": "ଜନସାଧାରଣଙ୍କୁ ଆନନ୍ଦ ପ୍ରଦାନ କରିବା ନିମନ୍ତେ"
                        },
                        {
                            "word": "ପରମ୍ ଅକ୍ଷର-ଆକୃତେ",
                            "meaning": "ଦିବ୍ୟ ଅକ୍ଷର ରୂପ ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ତ୍ୱମ୍",
                            "meaning": "ଆପଣ"
                        },
                        {
                            "word": "ଅନାଦରାତ୍ ଅପି",
                            "meaning": "ଅବଜ୍ଞା ବା ଅନାଦର ସହକାରେ ହେଲେ ମଧ୍ୟ"
                        },
                        {
                            "word": "ମନାକ୍",
                            "meaning": "ସାମାନ୍ୟ, ଥରୁଟିଏ"
                        },
                        {
                            "word": "ଉଦୀରିତମ୍",
                            "meaning": "ଉଚ୍ଚାରିତ ହେଲେ"
                        },
                        {
                            "word": "ନିଖିଳ-ଉଗ୍ର-ତାପ-ପଟଳୀମ୍",
                            "meaning": "ସମସ୍ତ ପ୍ରଚଣ୍ଡ ତ୍ରିବିଧ ତାପର ସମୂହକୁ"
                        },
                        {
                            "word": "ବିଲୁମ୍ପସି",
                            "meaning": "ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ବିନାଶ କରିଦିଅନ୍ତି"
                        }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ୟଦ୍-ଆଭାସୋ 'ପ୍ୟ୍ ଉଦ୍ୟନ୍ କବଳିତ-ଭବ-ଧ୍ୱାନ୍ତ-ବିଭବୋ\nଦୃଶଂ ତତ୍ତ୍ୱାନ୍ଧାନାମ୍ ଅପି ଦିଶତି ଭକ୍ତି-ପ୍ରଣୟିନୀମ୍ ।\nଜନସ୍ ତସ୍ୟୋଦାତ୍ତଂ ଜଗତି ଭଗବନ୍-ନାମ-ତରଣେ\nକୃତୀ ତେ ନିର୍ବକ୍ତୁଂ କ ଇହ ମହିମାନଂ ପ୍ରଭବତି ॥ ୩ ॥",
                    "translation": "ହେ ଭଗବାନଙ୍କ ପବିତ୍ର ନାମ ରୂପୀ ସୂର୍ଯ୍ୟଦେବ! ପ୍ରଭାତର ସୂର୍ଯ୍ୟୋଦୟ ପୂର୍ବରୁ ଅରୁଣୋଦୟ ଭଳି, ଯାହାଙ୍କର କେବଳ ନାମାଭାସ ମାତ୍ର ପ୍ରକାଶ ପାଇଲେ ହିଁ ସମଗ୍ର ସଂସାରର ଅଜ୍ଞାନ-ଅନ୍ଧକାର ଗ୍ରାସିତ ହୋଇଯାଏ ଏବଂ ତତ୍ତ୍ୱଦୃଷ୍ଟି-ହୀନ ଅନ୍ଧମାନଙ୍କୁ ମଧ୍ୟ ଶୁଦ୍ଧାଭକ୍ତିର ଦିବ୍ୟ ଚକ୍ଷୁ ପ୍ରାପ୍ତ ହୁଏ; ସେହିପରି ଆପଣଙ୍କ ପୂର୍ଣ୍ଣ ପ୍ରକାଶର ପରମ ଉଦାର ମହିମାକୁ ଏହି ଜଗତରେ କେଉଁ ପଣ୍ଡିତ ବା କୃତୀ ଜନ ସମ୍ପୂର୍ଣ୍ଣ ବର୍ଣ୍ଣନା କରିବାକୁ ସମର୍ଥ ହେବ?",
                    "wordMeanings": [
                        {
                            "word": "ୟତ୍-ଆଭାସଃ ଅପି",
                            "meaning": "ଯାହାଙ୍କର କେବଳ ଆଭାସ (ନାମାଭାସ) ମଧ୍ୟ"
                        },
                        {
                            "word": "ଉଦ୍ୟନ୍",
                            "meaning": "ପ୍ରକଟିତ ହେଲେ"
                        },
                        {
                            "word": "କବଳିତ",
                            "meaning": "ଗ୍ରାସ କରେ, ନଷ୍ଟ କରେ"
                        },
                        {
                            "word": "ଭବ-ଧ୍ୱାନ୍ତ-ବିଭବଃ",
                            "meaning": "ସଂସାରର ଅଜ୍ଞାନ ରୂପୀ ଅନ୍ଧକାରର ପ୍ରଭାବକୁ"
                        },
                        {
                            "word": "ଦୃଶମ୍",
                            "meaning": "ଦିବ୍ୟ ଦୃଷ୍ଟିଶକ୍ତି"
                        },
                        {
                            "word": "ତତ୍ତ୍ୱ-ଅନ୍ଧାନାମ୍ ଅପି",
                            "meaning": "ପରମତତ୍ତ୍ୱ ପ୍ରତି ଅନ୍ଧ ହୋଇଥିବା ଜୀବଙ୍କୁ ମଧ୍ୟ"
                        },
                        {
                            "word": "ଦିଶତି",
                            "meaning": "ପ୍ରଦାନ କରେ"
                        },
                        {
                            "word": "ଭକ୍ତି-ପ୍ରଣୟିନୀମ୍",
                            "meaning": "ଭଗବତ୍-ପ୍ରେମମୟୀ ଭକ୍ତିର"
                        },
                        {
                            "word": "ଜନଃ",
                            "meaning": "ବ୍ୟକ୍ତି"
                        },
                        {
                            "word": "ତସ୍ୟ ଉଦାତ୍ତମ୍",
                            "meaning": "ସେହି ପରମ ଉଦାର"
                        },
                        {
                            "word": "ଜଗତି",
                            "meaning": "ଏହି ବିଶ୍ୱରେ"
                        },
                        {
                            "word": "ଭଗବନ୍-ନାମ-ତରଣେ",
                            "meaning": "ହେ ଭଗବାନଙ୍କ ନାମରୂପୀ ସୂର୍ଯ୍ୟ!"
                        },
                        {
                            "word": "କୃତୀ",
                            "meaning": "ବିଦ୍ୱାନ୍ ବା ସାଧକ"
                        },
                        {
                            "word": "ତେ",
                            "meaning": "ଆପଣଙ୍କର"
                        },
                        {
                            "word": "ନିର୍ବକ୍ତୁମ୍",
                            "meaning": "ସମ୍ପୂର୍ଣ୍ଣ ବର୍ଣ୍ଣନା କରିବାକୁ"
                        },
                        {
                            "word": "କଃ ଇହ",
                            "meaning": "ଏଠାରେ କିଏ"
                        },
                        {
                            "word": "ମହିମାନମ୍ ପ୍ରଭବତି",
                            "meaning": "ମହିମା ପ୍ରକାଶ କରିବାକୁ ସମର୍ଥ"
                        }
                    ]
                },
                {
                    "id": 4,
                    "lyric": "ୟଦ୍-ବ୍ରହ୍ମ-ସାକ୍ଷାତ୍-କୃତି-ନିଷ୍ଠୟାପି\nବିନାଶମ୍ ଆୟାତି ବିନା ନ ଭୋଗୈଃ ।\nଅପୈତି ନାମ ସ୍ଫୁରଣେନ ତତ୍ ତେ\nପ୍ରାରବ୍ଧ-କର୍ମେତି ବିରୌତି ବେଦଃ ॥ ୪ ॥",
                    "translation": "ନିରାକାର ବ୍ରହ୍ମ-ସାକ୍ଷାତ୍କାରର ଗଭୀର ନିଷ୍ଠା ଦ୍ୱାରା ମଧ୍ୟ ଯେଉଁ ପ୍ରାରବ୍ଧ କର୍ମ ଭୋଗ ବିନା କଦାପି ବିନଷ୍ଟ ହୁଏ ନାହିଁ, ହେ ଭଗବନ୍-ନାମ! କେବଳ ଆପଣଙ୍କ ଜିହ୍ୱାରେ ସାମାନ୍ୟ ସ୍ଫୁରଣ ମାତ୍ରେ ହିଁ ସେହି ପ୍ରାରବ୍ଧ କର୍ମଫଳ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଦୂରୀଭୂତ ହୋଇଯାଏ—ଏହା ବେଦଶାସ୍ତ୍ର ଉଚ୍ଚ ସ୍ୱରରେ ଘୋଷଣା କରୁଅଛି।",
                    "wordMeanings": [
                        {
                            "word": "ୟତ୍",
                            "meaning": "ଯେଉଁ"
                        },
                        {
                            "word": "ବ୍ରହ୍ମ-ସାକ୍ଷାତ୍-କୃତି",
                            "meaning": "ନିର୍ବିଶେଷ ବ୍ରହ୍ମର ଅନୁଭୂତିରେ"
                        },
                        {
                            "word": "ନିଷ୍ଠୟା ଅପି",
                            "meaning": "ନିଷ୍ଠା ଥାଇ ମଧ୍ୟ"
                        },
                        {
                            "word": "ବିନାଶମ୍ ଆୟାତି",
                            "meaning": "କ୍ଷୟ ହୁଏ"
                        },
                        {
                            "word": "ବିନା ନ ଭୋଗୈଃ",
                            "meaning": "ଭୋଗ ବିନା ନୁହେଁ"
                        },
                        {
                            "word": "ଅପୈତି",
                            "meaning": "ନିବୃତ୍ତ ହୋଇଯାଏ, ଚାଲିଯାଏ"
                        },
                        {
                            "word": "ନାମ",
                            "meaning": "ହେ ପବିତ୍ର ନାମ!"
                        },
                        {
                            "word": "ସ୍ଫୁରଣେନ",
                            "meaning": "କେବଳ ପ୍ରକଟ ବା ସ୍ଫୁରିତ ହେବା ମାତ୍ରେ"
                        },
                        {
                            "word": "ତତ୍",
                            "meaning": "ସେହି"
                        },
                        {
                            "word": "ତେ",
                            "meaning": "ଆପଣଙ୍କର"
                        },
                        {
                            "word": "ପ୍ରାରବ୍ଧ-କର୍ମ",
                            "meaning": "ପ୍ରାରବ୍ଧ କର୍ମର ଭୋଗ"
                        },
                        {
                            "word": "ଇତି ବିରୌତି ବେଦଃ",
                            "meaning": "ଏହା ବେଦବାଣୀ ସ୍ପଷ୍ଟ ଘୋଷଣା କରେ"
                        }
                    ]
                },
                {
                    "id": 5,
                    "lyric": "ଅଘଦମନ-ଯଶୋଦାନନ୍ଦନୌ ନନ୍ଦସୂନୋ\nକମଳନୟନ-ଗୋପୀଚନ୍ଦ୍ର-ବୃନ୍ଦାବନେନ୍ଦ୍ରାଃ ।\nପ୍ରଣତକରୁଣ-କୃଷ୍ଣାଭ୍ ଇତ୍ୟ୍ ଅନେକ-ସ୍ୱରୂପେ\nତ୍ୱୟି ମମ ରତିର୍ ଉଚ୍ଚୈର୍ ବର୍ଦ୍ଧତାଂ ନାମଧେୟ ॥ ୫ ॥",
                    "translation": "ହେ ପରମ ପବିତ୍ର ଭଗବନ୍-ନାମଧେୟ! ଅଘଦମନ (ଅଘାସୁର ଦମନକାରୀ), ଯଶୋଦାନନ୍ଦନ, ନନ୍ଦସୂନୁ, କମଳନୟନ, ଗୋପୀଚନ୍ଦ୍ର, ବୃନ୍ଦାବନେନ୍ଦ୍ର, ପ୍ରଣତକରୁଣ (ଶରଣାଗତବତ୍ସଳ) ଏବଂ ଶ୍ରୀକୃଷ୍ଣ—ଏହିପରି ଅନେକାନେକ ଦିବ୍ୟ ସ୍ୱରୂପ ଧାରଣ କରିଥିବା ଆପଣଙ୍କ ଶ୍ରୀଚରଣରେ ମୋର ଅନନ୍ୟ ପ୍ରେମାନୁରାଗ ନିରନ୍ତର ଅଭିବୃଦ୍ଧି ଲାଭ କରୁ।",
                    "wordMeanings": [
                        {
                            "word": "ଅଘଦମନ",
                            "meaning": "ଅଘାସୁରକୁ ବଧ କରିଥିବା"
                        },
                        {
                            "word": "ଯଶୋଦାନନ୍ଦନ",
                            "meaning": "ମାତା ଯଶୋଦାଙ୍କ ପରମ ଆନନ୍ଦଦାୟକ ପୁତ୍ର"
                        },
                        {
                            "word": "ନନ୍ଦସୂନୋ",
                            "meaning": "ନନ୍ଦମହାରାଜଙ୍କ ସୁତ"
                        },
                        {
                            "word": "କମଳନୟନ",
                            "meaning": "ପଦ୍ମପଳାଶଲୋଚନ"
                        },
                        {
                            "word": "ଗୋପୀଚନ୍ଦ୍ର",
                            "meaning": "ବ୍ରଜଗୋପୀମାନଙ୍କ ଚନ୍ଦ୍ରମା"
                        },
                        {
                            "word": "ବୃନ୍ଦାବନେନ୍ଦ୍ର",
                            "meaning": "ବୃନ୍ଦାବନର ଅଧୀଶ୍ୱର"
                        },
                        {
                            "word": "ପ୍ରଣତକରୁଣ",
                            "meaning": "ଶରଣାଗତଜନଙ୍କ ପ୍ରତି କରୁଣାମୟ"
                        },
                        {
                            "word": "କୃଷ୍ଣ",
                            "meaning": "ସର୍ବାକର୍ଷକ ଶ୍ରୀକୃଷ୍ଣ"
                        },
                        {
                            "word": "ଇତି ଅନେକ-ସ୍ୱରୂପେ",
                            "meaning": "ଏହିପରି ନାନା ଦିବ୍ୟ ରୂପରେ"
                        },
                        {
                            "word": "ତ୍ୱୟି",
                            "meaning": "ଆପଣଙ୍କ ଠାରେ"
                        },
                        {
                            "word": "ମମ ରତିଃ",
                            "meaning": "ମୋର ଭକ୍ତିପ୍ରେମ ଓ ଅନୁରାଗ"
                        },
                        {
                            "word": "ଉଚ୍ଚୈଃ ବର୍ଦ୍ଧତାମ୍",
                            "meaning": "ପ୍ରଚୁର ଭାବେ ବୃଦ୍ଧି ପାଉ"
                        },
                        {
                            "word": "ନାମଧେୟ",
                            "meaning": "ହେ ଭଗବାନଙ୍କ ନାମ!"
                        }
                    ]
                },
                {
                    "id": 6,
                    "lyric": "ବାଚ୍ୟଂ ବାଚକମ୍ ଇତ୍ୟ୍ ଉଦେତି ଭବତୋ ନାମ ସ୍ୱରୂପ-ଦ୍ୱୟଂ\nପୂର୍ବସ୍ମାତ୍ ପରମ୍ ଏବ ହନ୍ତ କରୁଣଂ ତତ୍ରାପି ଜାନୀମହେ ।\nୟସ୍ ତସ୍ମିନ୍ ବିହିତାପରାଧ-ନିବହଃ ପ୍ରାଣୀ ସମନ୍ତାଦ୍ ଭବେଦ୍\nଆସ୍ୟେନେଦମ୍ ଉପାସ୍ୟ ସୋ 'ପି ହି ସଦାନନ୍ଦାମ୍ବୁଧୌ ମଜ୍ଜତି ॥ ୬ ॥",
                    "translation": "ହେ ହରିନାମ! ଆପଣଙ୍କର ଦୁଇଟି ଦିବ୍ୟ ସ୍ୱରୂପ ପ୍ରକଟିତ: ପ୍ରଥମଟି ହେଉଛି ବାଚ୍ୟ (ସ୍ୱୟଂ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ବିଗ୍ରହ) ଏବଂ ଦ୍ୱିତୀୟଟି ହେଉଛି ବାଚକ (ଆପଣଙ୍କର ଧ୍ୱନିମୟ ନାମ-ସ୍ୱରୂପ)। ଏହି ଦୁଇଟି ମଧ୍ୟରେ ଦ୍ୱିତୀୟ ବାଚକ ନାମ-ସ୍ୱରୂପଟି ପ୍ରଥମ ଅପେକ୍ଷା ଅଧିକ କରୁଣାମୟ ବୋଲି ଆମ୍ଭେ ଜାଣୁ; କାରଣ ଯେଉଁ ଜୀବ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପ୍ରତି ନାନା ଅପରାଧ କରିଥାଏ, ସେ ମଧ୍ୟ ମୁଖରେ କେବଳ ଆପଣଙ୍କ ନାମ ଉପାସନା (ଜପ-କୀର୍ତ୍ତନ) କରି ନିତ୍ୟାନନ୍ଦ-ସାଗରରେ ନିମଗ୍ନ ହୋଇଯାଏ।",
                    "wordMeanings": [
                        {
                            "word": "ବାଚ୍ୟମ୍",
                            "meaning": "ନାମ ଦ୍ୱାରା ନିର୍ଦ୍ଦିଷ୍ଟ ପରମପୁରୁଷ ଭଗବାନ"
                        },
                        {
                            "word": "ବାଚକମ୍",
                            "meaning": "ନାମର ଧ୍ୱନି ସ୍ୱରୂପ (ଶବ୍ଦବ୍ରହ୍ମ)"
                        },
                        {
                            "word": "ଇତି ଉଦେତି",
                            "meaning": "ଏହିପରି ପ୍ରକଟିତ ହୁଏ"
                        },
                        {
                            "word": "ଭବତଃ",
                            "meaning": "ଆପଣଙ୍କର"
                        },
                        {
                            "word": "ନାମ",
                            "meaning": "ହେ ନାମପ୍ରଭୁ!"
                        },
                        {
                            "word": "ସ୍ୱରୂପ-ଦ୍ୱୟମ୍",
                            "meaning": "ଦୁଇଗୋଟି ସ୍ୱରୂପ"
                        },
                        {
                            "word": "ପୂର୍ବସ୍ମାତ୍",
                            "meaning": "ପ୍ରଥମ (ବାଚ୍ୟ ସ୍ୱରୂପ) ଅପେକ୍ଷା"
                        },
                        {
                            "word": "ପରମ୍ ଏବ",
                            "meaning": "ଦ୍ୱିତୀୟ (ବାଚକ ନାମ) ହିଁ"
                        },
                        {
                            "word": "ହନ୍ତ",
                            "meaning": "ନିଶ୍ଚିତ ଭାବରେ"
                        },
                        {
                            "word": "କରୁଣମ୍",
                            "meaning": "ଅତ୍ୟନ୍ତ କରୁଣାଶୀଳ"
                        },
                        {
                            "word": "ତତ୍ରାପି ଜାନୀମହେ",
                            "meaning": "ଆମ୍ଭେମାନେ ତାହା ଜାଣୁ"
                        },
                        {
                            "word": "ୟଃ ତସ୍ମିନ୍",
                            "meaning": "ଯେଉଁ ବ୍ୟକ୍ତି ସେହି ଭଗବାନଙ୍କ ପ୍ରତି"
                        },
                        {
                            "word": "ବିହିତ-ଅପରାଧ-ନିବହଃ",
                            "meaning": "ବହୁବିଧ ଅପରାଧ କରିଥିଲେ ହେଁ"
                        },
                        {
                            "word": "ପ୍ରାଣୀ",
                            "meaning": "ଜୀବ"
                        },
                        {
                            "word": "ସମନ୍ତାତ୍ ଭବେତ୍",
                            "meaning": "ସର୍ବତ୍ର"
                        },
                        {
                            "word": "ଆସ୍ୟେନ ଇଦମ୍",
                            "meaning": "ମୁଖରେ ଏହି ନାମକୁ"
                        },
                        {
                            "word": "ଉପାସ୍ୟ",
                            "meaning": "ଜପ ଓ କୀର୍ତ୍ତନ କରି"
                        },
                        {
                            "word": "ସଃ ଅପି ହି",
                            "meaning": "ସେ ମଧ୍ୟ ନିଶ୍ଚୟ"
                        },
                        {
                            "word": "ସଦା-ଆନନ୍ଦ-ଅମ୍ବୁଧୌ",
                            "meaning": "ପରମ ଆନନ୍ଦ ସାଗରରେ"
                        },
                        {
                            "word": "ମଜ୍ଜତି",
                            "meaning": "ନିମଗ୍ନ ହୁଏ"
                        }
                    ]
                },
                {
                    "id": 7,
                    "lyric": "ସୂଦିତାଶ୍ରିତ-ଜନାର୍ତ୍ତି-ରାଶୟେ\nରମ୍ୟ-ଚିଦ୍-ଘନ-ସୁଖ-ସ୍ୱରୂପିଣେ ।\nନାମ ଗୋକୁଳ-ମହୋତ୍ସବାୟ ତେ\nକୃଷ୍ଣ ପୂର୍ଣ୍ଣ-ବପୁଷେ ନମୋ ନମଃ ॥ ୭ ॥",
                    "translation": "ହେ ହରିନାମ! ଆପଣ ନିଜ ଆଶ୍ରିତ ଭକ୍ତମାନଙ୍କ ସମସ୍ତ ଦୁଃଖ-ଯନ୍ତ୍ରଣାକୁ ସମୂଳେ ବିନାଶ କରନ୍ତି। ଆପଣ ପରମ ମନୋହର ଚିଦାନନ୍ଦ-ଘନ ସୁଖର ସ୍ୱରୂପ, ସମଗ୍ର ଗୋକୁଳର ମହା ଆନନ୍ଦ-ଉତ୍ସବ ଏବଂ ସ୍ୱୟଂ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପରି ପୂର୍ଣ୍ଣ ସ୍ୱରୂପ ବିଶିଷ୍ଟ। ହେ ଶ୍ରୀକୃଷ୍ଣ ନାମ! ମୁଁ ଆପଣଙ୍କୁ ବାରମ୍ବାର ପ୍ରଣାମ ଜଣାଉଛି।",
                    "wordMeanings": [
                        {
                            "word": "ସୂଦିତ",
                            "meaning": "ସମ୍ପୂର୍ଣ୍ଣ ବିନଷ୍ଟ କରୁଥିବା"
                        },
                        {
                            "word": "ଆଶ୍ରିତ-ଜନ-ଆର୍ତ୍ତି-ରାଶୟେ",
                            "meaning": "ଶରଣାଗତ ଜନଙ୍କ ଦୁଃଖ-କଷ୍ଟ ସମୂହକୁ"
                        },
                        {
                            "word": "ରମ୍ୟ",
                            "meaning": "ଅତ୍ୟନ୍ତ ମନୋହର"
                        },
                        {
                            "word": "ଚିତ୍-ଘନ-ସୁଖ-ସ୍ୱରୂପିଣେ",
                            "meaning": "ଚିଦାନନ୍ଦଘନ ପରମ ସୁଖସ୍ୱରୂପ"
                        },
                        {
                            "word": "ନାମ",
                            "meaning": "ହେ ଭଗବାନଙ୍କ ନାମ!"
                        },
                        {
                            "word": "ଗୋକୁଳ-ମହୋତ୍ସବାୟ",
                            "meaning": "ଗୋକୁଳର ପରମ ମହୋତ୍ସବ ସ୍ୱରୂପ"
                        },
                        {
                            "word": "ତେ",
                            "meaning": "ଆପଣଙ୍କୁ"
                        },
                        {
                            "word": "କୃଷ୍ଣ",
                            "meaning": "ହେ ଶ୍ରୀକୃଷ୍ଣ!"
                        },
                        {
                            "word": "ପୂର୍ଣ୍ଣ-ବପୁଷେ",
                            "meaning": "ପୂର୍ଣ୍ଣ-ସତ୍ତା ବିଶିଷ୍ଟ ବିଗ୍ରହଙ୍କୁ"
                        },
                        {
                            "word": "ନମଃ ନମଃ",
                            "meaning": "ବାରମ୍ବାର ପ୍ରଣାମ"
                        }
                    ]
                },
                {
                    "id": 8,
                    "lyric": "ନାରଦ-ବୀଣୋଜ୍ଜୀବନ\nସୁଧୋର୍ମି-ନିର୍ଯ୍ୟାସ-ମାଧୁରୀ-ପୂର ।\nତ୍ୱଂ କୃଷ୍ଣ-ନାମ କାମଂ\nସ୍ଫୁର ମେ ରସନେ ରସେନ ସଦା ॥ ୮ ॥",
                    "translation": "ହେ ଦେବର୍ଷି ନାରଦଙ୍କ ବୀଣାର ପରମ ପ୍ରାଣସ୍ୱରୂପ ଜୀବନଧନ! ହେ ଅମୃତ-ତରଙ୍ଗର ପରମ ସାର ମାଧୁର୍ଯ୍ୟରେ ପରିପୂର୍ଣ୍ଣ ଶ୍ରୀକୃଷ୍ଣ ନାମ! ଆପଣଙ୍କର ଯଦି ଇଚ୍ଛା ଥାଏ, ତେବେ ପରମ ପ୍ରେମରସ ସହିତ ମୋର ଜିହ୍ୱାରେ ସର୍ବଦା ନିରନ୍ତର ସ୍ଫୁରିତ (ପ୍ରକଟିତ) ହେଉଥାନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ନାରଦ-ବୀଣା-ଉଜ୍ଜୀବନ",
                            "meaning": "ଦେବର୍ଷି ନାରଦଙ୍କ ବୀଣାର ଜୀବନସ୍ୱରୂପ"
                        },
                        {
                            "word": "ସୁଧା-ଊର୍ମି",
                            "meaning": "ଅମୃତମୟ ତରଙ୍ଗର"
                        },
                        {
                            "word": "ନିର୍ଯ୍ୟାସ",
                            "meaning": "ପରମ ସାରତତ୍ତ୍ୱ"
                        },
                        {
                            "word": "ମାଧୁରୀ-ପୂର",
                            "meaning": "ମଧୁର ରସରେ ପରିପୂର୍ଣ୍ଣ"
                        },
                        {
                            "word": "ତ୍ୱମ୍",
                            "meaning": "ଆପଣ"
                        },
                        {
                            "word": "କୃଷ୍ଣ-ନାମ",
                            "meaning": "ହେ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପବିତ୍ର ନାମ!"
                        },
                        {
                            "word": "କାମମ୍",
                            "meaning": "ଯଦି ଆପଣ ଇଚ୍ଛା କରନ୍ତି (ସ୍ୱେଚ୍ଛାରେ)"
                        },
                        {
                            "word": "ସ୍ଫୁର",
                            "meaning": "ପ୍ରକଟିତ ହୁଅନ୍ତୁ"
                        },
                        {
                            "word": "ମେ ରସନେ",
                            "meaning": "ମୋର ଜିହ୍ୱାଗ୍ରରେ"
                        },
                        {
                            "word": "ରସେନ",
                            "meaning": "ଦିବ୍ୟ ପ୍ରେମରସ ସହିତ"
                        },
                        {
                            "word": "ସଦା",
                            "meaning": "ସର୍ବଦା, ନିରନ୍ତର"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        "id": "song-nitaikinamenechere",
        "title": "ନିତାଇ କି ନାମ ଏନେଛେ ରେ (Nitai Ki Nam Eneche Re)",
        "title_odia": "ନିତାଇ କି ନାମ ଏନେଛେ ରେ",
        "title_english": "Nitai Ki Nam Eneche Re",
        "category": "Songs",
        "type": "html",
        "author": "Bhaktivinoda Thakura",
        "tags": [
            "Nitai Ki Nam Eneche Re",
            "Gitavali",
            "Bhaktivinoda Thakura",
            "Nityananda",
            "Harinama",
            "Namahatta",
            "ନିତାଇ କି ନାମ ଏନେଛେ ରେ",
            "ଗୀତାବଳୀ",
            "ଭକ୍ତିବିନୋଦ ଠାକୁର"
        ],
        "description": "ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଗୀତାବଳୀ ଗ୍ରନ୍ଥରୁ ପରମ ଦୟାଳୁ ଶ୍ରୀମନ୍ ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କ ନାମହଟ୍ଟ ପ୍ରଚାର ଓ ହରିନାମ ମହାମହିମା ବର୍ଣ୍ଣିତ ମଧୁର ସଂକୀର୍ତ୍ତନ।",
        "audioUrl": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Nitai%20ki%20naam%20eneche%20re.mp3",
        "vocalist": "Vaishnavas",
        "audioVersions": [
            {
                "label": "Vaishnavas",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Nitai%20ki%20naam%20eneche%20re.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-nitaikinamenechere",
            "title": "ନିତାଇ କି ନାମ ଏନେଛେ ରେ (Nitai Ki Nam Eneche Re)",
            "title_odia": "ନିତାଇ କି ନାମ ଏନେଛେ ରେ",
            "title_english": "Nitai Ki Nam Eneche Re",
            "author": "Bhaktivinoda Thakura",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Nitai%20Ki%20Nam%20Eneche%20Re_Gitavali_3_6",
            "verses": [
                {
                    "id": 1,
                    "lyric": "(ଧ୍ରୁବ)\nହରେ କୃଷ୍ଣ ହରେ ।\n(୧)\nନିତାଇ କି ନାମ ଏନେଛେ ରେ !\n(ନିତାଇ) ନାମ ଏନେଛେ ନାମେର ହାଟେ,\nଶ୍ରଦ୍ଧା-ମୂଲ୍ୟେ ନାମ ଦିତେଛେ ରେ ॥ ୧ ॥",
                    "translation": "ହରେ କୃଷ୍ଣ ହରେ! ହେ ଭାଇ! ଦୟାମୟ ପ୍ରଭୁ ଶ୍ରୀନିତ୍ୟାନନ୍ଦ କି ଅପୂର୍ବ ଦିବ୍ୟ ନାମ ନେଇ ଆସିଛନ୍ତି! ନିତାଇ ନାମର ହାଟ (ନାମହଟ୍ଟ) ବସାଇଛନ୍ତି ଏବଂ କେବଳ ମାତ୍ର ଶ୍ରଦ୍ଧା ରୂପକ ସାମାନ୍ୟ ମୂଲ୍ୟ ବିନିମୟରେ ଏହି ଦୁର୍ଲ୍ଲଭ ହରିନାମ ମହାମନ୍ତ୍ର ସମସ୍ତଙ୍କୁ ବିତରଣ କରୁଛନ୍ତି!",
                    "wordMeanings": [
                        {
                            "word": "ହରେ କୃଷ୍ଣ ହରେ",
                            "meaning": "ହେ ଭଗବାନ ଶ୍ରୀହରି ଓ ଶ୍ରୀକୃଷ୍ଣ!"
                        },
                        {
                            "word": "ନିତାଇ",
                            "meaning": "ଦୟାମୟ ପ୍ରଭୁ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ"
                        },
                        {
                            "word": "କି ନାମ",
                            "meaning": "କେଡ଼େ ଚମତ୍କାର ଦିବ୍ୟ ନାମ"
                        },
                        {
                            "word": "ଏନେଛେ ରେ",
                            "meaning": "ଆଣିଛନ୍ତି ହେ ଭାଇ!"
                        },
                        {
                            "word": "ନାମେର ହାଟେ",
                            "meaning": "ନାମ ରୂପକ ହାଟରେ (ନାମହଟ୍ଟ ବଜାରରେ)"
                        },
                        {
                            "word": "ଶ୍ରଦ୍ଧା-ମୂଲ୍ୟେ",
                            "meaning": "କେବଳ ଏକାନ୍ତ ଶ୍ରଦ୍ଧାରୂପୀ ମୂଲ୍ୟରେ"
                        },
                        {
                            "word": "ନାମ ଦିତେଛେ ରେ",
                            "meaning": "ଏହି ନାମ ଦାନ କରୁଛନ୍ତି"
                        }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ କୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ ରେ ।\nହରେ ରାମ ହରେ ରାମ ରାମ ରାମ ହରେ ହରେ ରେ ॥ ୨ ॥",
                    "translation": "ହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ କୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ, ହରେ ରାମ ହରେ ରାମ ରାମ ରାମ ହରେ ହରେ—ଏହି ଷୋଳନାମ ବତିଶ ଅକ୍ଷର ବିଶିଷ୍ଟ କଳିସନ୍ତାରଣ ମହାମନ୍ତ୍ର ହିଁ ନିତାଇ ପ୍ରେମଭରେ ସମସ୍ତଙ୍କୁ ପ୍ରଦାନ କରୁଛନ୍ତି।",
                    "wordMeanings": [
                        {
                            "word": "ହରେ",
                            "meaning": "ଭଗବାନଙ୍କ ଆହ୍ଲାଦିନୀ ଶକ୍ତି ଶ୍ରୀମତୀ ରାଧାରାଣୀ"
                        },
                        {
                            "word": "କୃଷ୍ଣ",
                            "meaning": "ସର୍ବାକର୍ଷକ ପରମପୁରୁଷ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣ"
                        },
                        {
                            "word": "ରାମ",
                            "meaning": "ସର୍ବୋଚ୍ଚ ଆନନ୍ଦର ଆଗାର ପରଂବ୍ରହ୍ମ ଶ୍ରୀରାମଚନ୍ଦ୍ର ବା ବଳରାମ"
                        },
                        {
                            "word": "ରେ",
                            "meaning": "ହେ ଭାଇ!"
                        }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "(ନିତାଇ) ଜୀବେର ଦଶା ମଳିନ ଦେଖେ’,\nନାମ ଏନେଛେ ବ୍ରଜ ଥେକେ ରେ ।\nଏ ନାମ ଶିବ ଜପେ ପଞ୍ଚ-ମୁଖେ ରେ,\n(ମଧୁର ଏ ହରିନାମ) !\nଏ ନାମ ବ୍ରହ୍ମା ଜପେ ଚତୁର୍-ମୁଖେ ରେ,\n(ମଧୁର ଏ ହରିନାମ) !\nଏ ନାମ ନାରଦ ଜପେ ବୀଣା-ଯନ୍ତ୍ରେ ରେ,\n(ମଧୁର ଏ ହରିନାମ) !\nଏ ନାମାଭାସେ ଅଜାମିଳ ବୈକୁଣ୍ଠେ ଗେଲୋ ରେ ।\nଏ ନାମ ବୋଲତେ ବୋଲତେ ବ୍ରଜେ ଚଲୋ ରେ,\n(ଭକ୍ତିବିନୋଦ ବୋଲେ) ॥ ୩ ॥",
                    "translation": "ଏହି ସଂସାରରେ ବଦ୍ଧଜୀବମାନଙ୍କର ପତିତ ଓ ପାପ-କଳୁଷିତ ଦୁରବସ୍ଥା ଦେଖି ଦୟାଳୁ ନିତାଇ ନିତ୍ୟଗୋଲୋକ ବ୍ରଜଧାମରୁ ଏହି ପରମ ଅମୃତମୟ ହରିନାମ ନେଇ ଆସିଛନ୍ତି। ଏହି ମଧୁର ନାମକୁ ଦେବାଦିଦେବ ମହାଦେବ ଶିବ ନିଜ ପଞ୍ଚମୁଖରେ ନିରନ୍ତର ଜପ କରନ୍ତି। (ଏହି ହରିନାମ କି ମଧୁର!) ଏହି ନାମକୁ ପ୍ରଜାପତି ବ୍ରହ୍ମା ନିଜ ଚାରିମୁଖରେ ସଦା ଜପ କରନ୍ତି। (ଏହି ହରିନାମ କି ମଧୁର!) ଦେବର୍ଷି ନାରଦ ନିଜ ବୀଣାବାଦନ କରି ଏହି ନାମକୁ ନିରନ୍ତର ଗାନ କରନ୍ତି। (ଏହି ହରିନାମ କି ମଧୁର!) କେବଳ ଏହି ନାମର ନାମାଭାସ ମାତ୍ର ପ୍ରଭାବରେ ପରମ ପାପୀ ଅଜାମିଳ ବୈକୁଣ୍ଠଧାମ ପ୍ରାପ୍ତ ହୋଇଗଲା! ତେଣୁ ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ଠାକୁର କହୁଛନ୍ତି—ହେ ଭାଇ! ନିରନ୍ତର ଏହି ମଧୁର ହରିନାମ କୀର୍ତ୍ତନ କରୁ କରୁ ପରମ ପ୍ରେମଧାମ ଶ୍ରୀବ୍ରଜଧାମକୁ ଚାଲିଆସ।",
                    "wordMeanings": [
                        {
                            "word": "ଜୀବେର ଦଶା",
                            "meaning": "ସାଂସାରିକ ଜୀବମାନଙ୍କ ଅବସ୍ଥା"
                        },
                        {
                            "word": "ମଳିନ ଦେଖେ’",
                            "meaning": "ପାପଗ୍ରସ୍ତ ଓ ଦୁର୍ଭାଗ୍ୟଜନକ ଦେଖି"
                        },
                        {
                            "word": "ନାମ ଏନେଛେ",
                            "meaning": "ନାମ ଆଣିଛନ୍ତି"
                        },
                        {
                            "word": "ବ୍ରଜ ଥେକେ ରେ",
                            "meaning": "ଚିନ୍ମୟ ବ୍ରଜଧାମରୁ ହେ ଭାଇ!"
                        },
                        {
                            "word": "ଏ ନାମ",
                            "meaning": "ଏହି ପବିତ୍ର ନାମକୁ"
                        },
                        {
                            "word": "ଶିବ ଜପେ",
                            "meaning": "ମହାଦେବ ଶିବ ଜପ କରନ୍ତି"
                        },
                        {
                            "word": "ପଞ୍ଚ-ମୁଖେ",
                            "meaning": "ନିଜର ପାଞ୍ଚଟି ମୁଖରେ"
                        },
                        {
                            "word": "ମଧୁର ଏ ହରିନାମ",
                            "meaning": "ଏହି ହରିନାମ ଅତ୍ୟନ୍ତ ମଧୁର"
                        },
                        {
                            "word": "ବ୍ରହ୍ମା ଜପେ",
                            "meaning": "ସୃଷ୍ଟିକର୍ତ୍ତା ବ୍ରହ୍ମା ଜପ କରନ୍ତି"
                        },
                        {
                            "word": "ଚତୁର୍-ମୁଖେ",
                            "meaning": "ଚାରୋଟି ମୁଖରେ"
                        },
                        {
                            "word": "ନାରଦ ଜପେ",
                            "meaning": "ଦେବର୍ଷି ନାରଦ ଗାନ କରନ୍ତି"
                        },
                        {
                            "word": "ବୀଣା-ଯନ୍ତ୍ରେ",
                            "meaning": "ବୀଣା ତନ୍ତ୍ରୀ ବଜାଇ"
                        },
                        {
                            "word": "ଏ ନାମାଭାସେ",
                            "meaning": "ଏହି ନାମର ସାମାନ୍ୟ ଆଭାସରେ"
                        },
                        {
                            "word": "ଅଜାମିଳ",
                            "meaning": "ପାପାଚାରୀ ଅଜାମିଳ"
                        },
                        {
                            "word": "ବୈକୁଣ୍ଠେ ଗେଲୋ",
                            "meaning": "ଶ୍ରୀବୈକୁଣ୍ଠ ଧାମକୁ ଗଲା"
                        },
                        {
                            "word": "ବୋଲତେ ବୋଲତେ",
                            "meaning": "ମୁଖରେ ଗାନ କରୁ କରୁ"
                        },
                        {
                            "word": "ବ୍ରଜେ ଚଲୋ",
                            "meaning": "ଦିବ୍ୟ ବ୍ରଜଧାମକୁ ଚାଲିଯାଅ"
                        },
                        {
                            "word": "ଭକ୍ତିବିନୋଦ ବୋଲେ",
                            "meaning": "ଭକ୍ତିବିନୋଦ ଠାକୁର କହୁଛନ୍ତି"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        "id": "song-orevrndavanernandadulal",
        "title": "ଓରେ ବୃନ୍ଦାବନେର ନନ୍ଦ-ଦୁଲାଲ (Ore Vrndavaner Nanda Dulal)",
        "title_odia": "ଓରେ ବୃନ୍ଦାବନେର ନନ୍ଦ-ଦୁଲାଲ",
        "title_english": "Ore Vrndavaner Nanda Dulal",
        "category": "Songs",
        "type": "html",
        "author": "Traditional",
        "tags": [
            "Ore Vrndavaner Nanda Dulal",
            "Vrndavaner Nanda Dulal",
            "Traditional",
            "Vaisnava Acaryas",
            "Viraha",
            "Vraja Bhajana",
            "ଓରେ ବୃନ୍ଦାବନେର ନନ୍ଦ-ଦୁଲାଲ",
            "ପାରମ୍ପରିକ"
        ],
        "description": "ବ୍ରଜବାସୀ, ଯଶୋଦା ମାତା, ସଖାଗଣ ଓ ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପ୍ରତି ପରମ ବ୍ୟାକୁଳ ବିରହଭାବରେ ପରିପୂର୍ଣ୍ଣ ପ୍ରସିଦ୍ଧ ପାରମ୍ପରିକ ବୈଷ୍ଣବ ଗୀତ।",
        "audioUrl": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_others/Ore_Vrndavaner_Nanda_Dulal/Ore_Vrndavaner_Nanda_Dulal_-_Sung_by_HG_Jay_Vrindavan_Prabhu_IDT.mp3",
        "vocalist": "HG Jay Vrindavan Prabhu",
        "audioVersions": [
            {
                "label": "HG Jay Vrindavan Prabhu",
                "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_others/Ore_Vrndavaner_Nanda_Dulal/Ore_Vrndavaner_Nanda_Dulal_-_Sung_by_HG_Jay_Vrindavan_Prabhu_IDT.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-orevrndavanernandadulal",
            "title": "ଓରେ ବୃନ୍ଦାବନେର ନନ୍ଦ-ଦୁଲାଲ (Ore Vrndavaner Nanda Dulal)",
            "title_odia": "ଓରେ ବୃନ୍ଦାବନେର ନନ୍ଦ-ଦୁଲାଲ",
            "title_english": "Ore Vrndavaner Nanda Dulal",
            "author": "Traditional",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Ore%20Vrndavaner%20Nanda%20Dulal_More%20Songs%20of%20the%20Vaisnava%20Acaryas_38",
            "verses": [
                {
                    "id": 1,
                    "lyric": "ଓରେ ବୃନ୍ଦାବନେର ନନ୍ଦ-ଦୁଲାଲ\nରାଖାଲ ରାଜା ରେ !\nରାଖାଲିୟାର ସୁରେ ସୁରେ\nବାଁଶୀ ବାଜା ରେ (ଓରେ ବୃନ୍ଦାବନେର...) ॥ ୧ ॥",
                    "translation": "ହେ ଆମ ବୃନ୍ଦାବନର ପ୍ରାଣଧନ, ନନ୍ଦମହାରାଜଙ୍କ ଅଲିଅଳ ଦୁଲାଳ କୃଷ୍ଣ! ହେ ଗୋପାଳ-ରାଖାଲମାନଙ୍କ ରାଜା! ଆମ ସଖାମାନଙ୍କ ସ୍ନେହମୟ ସୁରରେ ଆଉ ଥରେ ନିଜ ପ୍ରିୟ ବଂଶୀ ବଜାଅ ରେ!",
                    "wordMeanings": [
                        {
                            "word": "ଓରେ",
                            "meaning": "ହେ ଆମର ପ୍ରିୟତମ!"
                        },
                        {
                            "word": "ବୃନ୍ଦାବନେର",
                            "meaning": "ଶ୍ରୀବୃନ୍ଦାବନ ଧାମର"
                        },
                        {
                            "word": "ନନ୍ଦ-ଦୁଲାଲ",
                            "meaning": "ନନ୍ଦମହାରାଜଙ୍କ ଅତି ଆଦରର ପୁତ୍ର"
                        },
                        {
                            "word": "ରାଖାଲ ରାଜା ରେ",
                            "meaning": "ଗୋପାଳ ବାଳକମାନଙ୍କ ରାଜା"
                        },
                        {
                            "word": "ରାଖାଲିୟାର ସୁରେ ସୁରେ",
                            "meaning": "ଗୋପାଳ ସଖାମାନଙ୍କ ସ୍ନେହମୟ ରାଗିଣୀରେ"
                        },
                        {
                            "word": "ବାଁଶୀ ବାଜା ରେ",
                            "meaning": "ନିଜ ବଂଶୀ ବଜାଅ ରେ"
                        }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ଓରେ ଗୋପାଳ ତୋର ବିହନେ\nଫୁଟେ ନା ଫୁଲ ବୃନ୍ଦାବନେ ।\nଅଭିସାରେର ଏଇ ମଧୁବନ\nଏମନି ସାଜା ରେ (ଓରେ ବୃନ୍ଦାବନେର...) ॥ ୨ ॥",
                    "translation": "ହେ ଆମ ପ୍ରାଣର ଗୋପାଳ! ତୁମ ବିରହରେ ଆଜି ସମଗ୍ର ବୃନ୍ଦାବନରେ ଗୋଟିଏ ହେଲେ କଢ଼ି ବା ଫୁଲ ଫୁଟୁ ନାହିଁ। ତୁମର ମଧୁର ଅଭିସାର ଓ ପ୍ରେମମିଳନ ପାଇଁ ଏହି ମଧୁବନ କେବଳ ସଜ୍ଜିତ ହୋଇ ତୁମରି ବାଟ ଚାହିଁ ରହିଛି ରେ!",
                    "wordMeanings": [
                        {
                            "word": "ଓରେ ଗୋପାଳ",
                            "meaning": "ହେ ଆମ ପ୍ରିୟ ଗୋପାଳ!"
                        },
                        {
                            "word": "ତୋର ବିହନେ",
                            "meaning": "ତୁମ ବିନା, ତୁମ ବିରହରେ"
                        },
                        {
                            "word": "ଫୁଟେ ନା ଫୁଲ",
                            "meaning": "ଫୁଲ ଆଉ ବିକଶିତ ହେଉନାହିଁ"
                        },
                        {
                            "word": "ବୃନ୍ଦାବନେ",
                            "meaning": "ସମଗ୍ର ବୃନ୍ଦାବନରେ"
                        },
                        {
                            "word": "ଅଭିସାରେର",
                            "meaning": "ମଧୁର ପ୍ରେମ-ଅଭିସାର ନିମନ୍ତେ"
                        },
                        {
                            "word": "ଏଇ ମଧୁବନ",
                            "meaning": "ଏହି ମଧୁବନ ଉପବନ"
                        },
                        {
                            "word": "ଏମନି ସାଜା ରେ",
                            "meaning": "ଏହିପରି ସଜ୍ଜିତ ହୋଇ ରହିଛି"
                        }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ଶ୍ରୀଦାମ ସୁଦାମ ଭାଇ ବଳରାମ\nଡାକଛେ ଆୟ କାନାଇ ।\nଚରାୟ ଧେନୁ ବାଜାୟ ବେଣୁ\nଆୟ ରେ ଓ ଭାଇ ଆୟ ॥ ୩ ॥",
                    "translation": "ଶ୍ରୀଦାମ, ସୁଦାମ ଏବଂ ତୁମର ଜ୍ୟେଷ୍ଠ ଭ୍ରାତା ବଳରାମ ସମସ୍ତେ ମିଶି ବ୍ୟାକୁଳ ହୋଇ ଡାକୁଛନ୍ତି—ଆରେ କାନାଇ, ତୁ ଶୀଘ୍ର ଫେରିଆସ! ଆମେ ମିଶି ଗାଭୀମାନଙ୍କୁ ଚରାଇବା ଓ ବଂଶୀ ବଜାଇବା; ହେ ଭାଇ, ତୁ ଶୀଘ୍ର ଫେରିଆସ ରେ!",
                    "wordMeanings": [
                        {
                            "word": "ଶ୍ରୀଦାମ ସୁଦାମ",
                            "meaning": "ପ୍ରିୟ ସଖା ଶ୍ରୀଦାମ ଓ ସୁଦାମ"
                        },
                        {
                            "word": "ଭାଇ ବଳରାମ",
                            "meaning": "ବଡ଼ଭାଇ ଶ୍ରୀ ବଳରାମ"
                        },
                        {
                            "word": "ଡାକଛେ",
                            "meaning": "ଡାକୁଛନ୍ତି"
                        },
                        {
                            "word": "ଆୟ କାନାଇ",
                            "meaning": "ହେ କାନାଇ, ଚାଲିଆସ"
                        },
                        {
                            "word": "ଚରାୟ ଧେନୁ",
                            "meaning": "ଗାଈମାନଙ୍କୁ ଚରାଇବା"
                        },
                        {
                            "word": "ବାଜାୟ ବେଣୁ",
                            "meaning": "ମଧୁର ବେଣୁ ବଜାଇବା"
                        },
                        {
                            "word": "ଆୟ ରେ ଓ ଭାଇ ଆୟ",
                            "meaning": "ହେ ପ୍ରିୟ ଭାଇ, ଶୀଘ୍ର ଫେରିଆସ"
                        }
                    ]
                },
                {
                    "id": 4,
                    "lyric": "ମା ଯଶୋଦା ଡାକଛେ ତୋରେ (ଗୋପାଳ ରେ, ପ୍ରାଣେର ଗୋପାଳ ରେ !)\nନନୀ ଚୋରା ଆୟ ନା ଓରେ ।\nବୟଛେ ରାଧାର ପ୍ରେମ ଯମୁନା\nହୃଦୟ ମାଝା ରେ (ଓରେ ବୃନ୍ଦାବନେର...) ॥ ୪ ॥",
                    "translation": "ବାତ୍ସଲ୍ୟମୟୀ ମାତା ଯଶୋଦା ଆକୁଳ କଣ୍ଠରେ ଡାକୁଛନ୍ତି—ହେ ଗୋପାଳ! ମୋ ପ୍ରାଣର ଗୋପାଳ! ହେ ମୋର ଲହୁଣୀଚୋରା କୃଷ୍ଣ, ତୁ ଥରେ ଚାଲିଆସ ରେ! ଏଣେ ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ହୃଦୟ ମଧ୍ୟରେ ତୁମ ପ୍ରତି ଦିବ୍ୟ ବିରହ-ପ୍ରେମର ଯମୁନା ନଦୀ ପ୍ରବାହିତ ହେଉଛି ରେ!",
                    "wordMeanings": [
                        {
                            "word": "ମା ଯଶୋଦା",
                            "meaning": "ବାତ୍ସଲ୍ୟମୟୀ ମାତା ଯଶୋଦା"
                        },
                        {
                            "word": "ଡାକଛେ ତୋରେ",
                            "meaning": "ତୁମକୁ ବ୍ୟାକୁଳ ହୋଇ ଡାକୁଛନ୍ତି"
                        },
                        {
                            "word": "ଗୋପାଳ ରେ",
                            "meaning": "ହେ ଗୋପାଳ!"
                        },
                        {
                            "word": "ପ୍ରାଣେର ଗୋପାଳ ରେ",
                            "meaning": "ମୋ ଜୀବନର ଧନ ଗୋପାଳ!"
                        },
                        {
                            "word": "ନନୀ ଚୋରା",
                            "meaning": "ଲହୁଣୀ ଚୋରି କରୁଥିବା ଆଦରର ବାଳକ"
                        },
                        {
                            "word": "ଆୟ ନା ଓରେ",
                            "meaning": "ତୁ ଶୀଘ୍ର ଫେରିଆସ ରେ"
                        },
                        {
                            "word": "ବୟଛେ",
                            "meaning": "ପ୍ରବାହିତ ହେଉଛି"
                        },
                        {
                            "word": "ରାଧାର ପ୍ରେମ ଯମୁନା",
                            "meaning": "ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ପ୍ରେମରୂପୀ ଯମୁନା"
                        },
                        {
                            "word": "ହୃଦୟ ମାଝା ରେ",
                            "meaning": "ହୃଦୟ ମଧ୍ୟରେ"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        "id": "song-palayachyuthaashtakam",
        "title": "ପାଳୟାଚ୍ୟୁତ ଅଷ୍ଟକମ୍ (Palayachyutha Ashtakam / Sri Krsnastakam)",
        "title_odia": "ପାଳୟାଚ୍ୟୁତ ଅଷ୍ଟକମ୍ (ଶ୍ରୀ କୃଷ୍ଣାଷ୍ଟକମ୍)",
        "title_english": "Palayachyutha Ashtakam (Sri Krsnastakam)",
        "category": "Songs",
        "type": "html",
        "author": "Vadiraja Tirtha",
        "tags": [
            "Palayachyutha Ashtakam",
            "Palaya Achyuta",
            "Sri Krsnastakam",
            "Vadiraja Tirtha",
            "Udupi Krsna",
            "Rupyapitha",
            "ପାଳୟାଚ୍ୟୁତ ଅଷ୍ଟକମ୍",
            "ବାଦିରାଜ ତୀର୍ଥ",
            "ଉଡୁପୀ କୃଷ୍ଣ"
        ],
        "description": "ଶ୍ରୀ ବାଦିରାଜ ତୀର୍ଥଙ୍କ ଦ୍ୱାରା ରଚିତ ଉଡୁପୀ କ୍ଷେତ୍ରର ଶ୍ରୀକୃଷ୍ଣ (ରୌପ୍ୟପୀଠ ନିବାସୀ) ଙ୍କ ପରମ ଦିବ୍ୟ ରୂପସୌନ୍ଦର୍ଯ୍ୟ ଓ ମହିମା ବର୍ଣ୍ଣିତ ପ୍ରସିଦ୍ଧ ପାଳୟାଚ୍ୟୁତ ଅଷ୍ଟକମ୍।",
        "audioUrl": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Palayachuta%20palayajita%20song%20Krishnastakam.mp3",
        "vocalist": "Vaishnavas",
        "audioVersions": [
            {
                "label": "Vaishnavas",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Palayachuta%20palayajita%20song%20Krishnastakam.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-palayachyuthaashtakam",
            "title": "ପାଳୟାଚ୍ୟୁତ ଅଷ୍ଟକମ୍ (Palayachyutha Ashtakam / Sri Krsnastakam)",
            "title_odia": "ପାଳୟାଚ୍ୟୁତ ଅଷ୍ଟକମ୍ (ଶ୍ରୀ କୃଷ୍ଣାଷ୍ଟକମ୍)",
            "title_english": "Palayachyutha Ashtakam (Sri Krsnastakam)",
            "author": "Vadiraja Tirtha",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Palayachyutha%20Ashtakam_",
            "verses": [
                {
                    "id": 1,
                    "lyric": "(ଧ୍ରୁବ)\nପାଳୟାଚ୍ୟୁତ ପାଳୟାଜିତ ପାଳୟା କମଳାଳୟ ।\nଲୀଳୟା ଧୃତ ଭୂଧରାମ୍ବୁରୁହୋଦର ସ୍ୱଜନୋଦର ॥\n(୧)\nମଧ୍ୱମାନସପଦ୍ମଭାନୁସମଂ ସ୍ମରପ୍ରତିମଂ ସ୍ମର\nସ୍ନିଗ୍ଧନିର୍ମଳଶୀତକାନ୍ତିଲସନ୍ମୁଖଂ କରୁଣୋନ୍ମୁଖମ୍ ।\nହୃଦ୍ୟକମ୍ବୁଜ ମାନକନ୍ଧରମକ୍ଷୟଂ ଦୁରିତକ୍ଷୟଂ\nସ୍ନିଗ୍ଧ ସଂସ୍ତୁତ ରୂପ୍ୟପୀଠକୃତାଳୟଂ ହରିମାଳୟମ୍ ॥ ୧ ॥",
                    "translation": "ହେ ଅଚ୍ୟୁତ! ହେ ଅଜିତ! ହେ କମଳାଳୟ! ହେ ଲୀଳାଛଳରେ ଗୋବର୍ଦ୍ଧନ ଧାରଣକାରୀ ପଦ୍ମନାଭ ପ୍ରଭୁ! ଆମ୍ଭମାନଙ୍କୁ ସର୍ବଦା ରକ୍ଷା କରନ୍ତୁ। ହେ ମନ! ଶ୍ରୀପାଦ ମଧ୍ୱାଚାର୍ଯ୍ୟଙ୍କ ହୃଦୟ-କମଳକୁ ବିକଶିତ କରିବା ନିମନ୍ତେ ସୂର୍ଯ୍ୟ ସଦୃଶ, କୋଟି କନ୍ଦର୍ପଙ୍କ ଲାବଣ୍ୟକୁ ପରାଜିତ କରୁଥିବା, ପରମ ସ୍ନେହମୟ ନିର୍ମଳ ଶୀତଳ ଚନ୍ଦ୍ରକାନ୍ତି ବିଶିଷ୍ଟ ମୁଖମଣ୍ଡଳ ଯୁକ୍ତ ଏବଂ କରୁଣା ବର୍ଷଣ କରିବାକୁ ସର୍ବଦା ଉନ୍ମୁଖ ଥିବା ଶ୍ରୀହରିଙ୍କୁ ସ୍ମରଣ କର। ଶଙ୍ଖ ସଦୃଶ ସୁନ୍ଦର ଗ୍ରୀବା ବିଶିଷ୍ଟ, ଅକ୍ଷୟ, ସକଳ ପାପ-ତାପ ବିନାଶକାରୀ, ଭକ୍ତମାନଙ୍କ ଦ୍ୱାରା ସ୍ତୁତ ଏବଂ ରୌପ୍ୟପୀଠ (ଉଡୁପୀ କ୍ଷେତ୍ର) ରେ ବିରାଜମାନ ସେହି ସର୍ବଶ୍ରେଷ୍ଠ ଶ୍ରୀହରିଙ୍କୁ ତୁମେ ନିରନ୍ତର ଭଜନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ପାଳୟ",
                            "meaning": "ରକ୍ଷା କରନ୍ତୁ, ପାଳନ କରନ୍ତୁ"
                        },
                        {
                            "word": "ଅଚ୍ୟୁତ",
                            "meaning": "କଦାପି ଚ୍ୟୁତ ନ ହେଉଥିବା ଅବିନାଶୀ ପ୍ରଭୁ"
                        },
                        {
                            "word": "ଅଜିତ",
                            "meaning": "କାହାରି ଦ୍ୱାରା ପରାଜିତ ନ ହେଉଥିବା ଭଗବାନ"
                        },
                        {
                            "word": "କମଳାଳୟ",
                            "meaning": "ମାତା ଲକ୍ଷ୍ମୀଙ୍କ ନିତ୍ୟ ଆଶ୍ରୟସ୍ଥଳ"
                        },
                        {
                            "word": "ଲୀଳୟା ଧୃତ-ଭୂଧର",
                            "meaning": "ଲୀଳାଛଳରେ ଗୋବର୍ଦ୍ଧନ ପର୍ବତକୁ ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ଅମ୍ବୁରୁହ-ଉଦର",
                            "meaning": "ପଦ୍ମନାଭ, ଯାହାଙ୍କ ଉଦରରେ ବ୍ରହ୍ମାଣ୍ଡ ବିଦ୍ୟମାନ"
                        },
                        {
                            "word": "ସ୍ୱଜନ-ଉଦର",
                            "meaning": "ନିଜ ଭକ୍ତମାନଙ୍କ ପ୍ରତି ଅତ୍ୟନ୍ତ ଉଦାର"
                        },
                        {
                            "word": "ମଧ୍ୱ-ମାନସ-ପଦ୍ମ-ଭାନୁ-ସମମ୍",
                            "meaning": "ଶ୍ରୀ ମଧ୍ୱାଚାର୍ଯ୍ୟଙ୍କ ହୃଦୟପଦ୍ମ ପାଇଁ ସୂର୍ଯ୍ୟତୁଲ୍ୟ"
                        },
                        {
                            "word": "ସ୍ମର-ପ୍ରତିମମ୍",
                            "meaning": "କାମଦେବଙ୍କ ସଦୃଶ ଅତୁଳନୀୟ ସୁନ୍ଦର"
                        },
                        {
                            "word": "ସ୍ମର",
                            "meaning": "ହେ ମନ, ସ୍ମରଣ କର!"
                        },
                        {
                            "word": "ସ୍ନିଗ୍ଧ-ନିର୍ମଳ-ଶୀତ-କାନ୍ତି",
                            "meaning": "ସ୍ନେହମୟ ନିର୍ମଳ ଶୀତଳ କାନ୍ତିଯୁକ୍ତ"
                        },
                        {
                            "word": "ଲସତ୍-ମୁଖମ୍",
                            "meaning": "ଶୋଭାୟମାନ ମୁଖମଣ୍ଡଳ ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "କରୁଣା-ଉନ୍ମୁଖମ୍",
                            "meaning": "କୃପା କରିବାକୁ ସର୍ବଦା ଉଦ୍ୟତ"
                        },
                        {
                            "word": "ହୃଦ୍ୟ-କମ୍ବୁଜ-କନ୍ଧରମ୍",
                            "meaning": "ମନୋହର ଶଙ୍ଖ ସଦୃଶ ଗଳା ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ଅକ୍ଷୟମ୍",
                            "meaning": "କ୍ଷୟହୀନ, ଅବିନାଶୀ"
                        },
                        {
                            "word": "ଦୁରିତ-କ୍ଷୟମ୍",
                            "meaning": "ସମସ୍ତ ପାପ ଓ ଦୁଃଖ ବିନାଶକାରୀ"
                        },
                        {
                            "word": "ରୂପ୍ୟପୀଠ-କୃତ-ଆଳୟମ୍",
                            "meaning": "ରୌପ୍ୟପୀଠ (ଉଡୁପୀ ଧାମ) ରେ ବାସ କରୁଥିବା"
                        },
                        {
                            "word": "ହରିମ୍ ଆଳୟମ୍",
                            "meaning": "ସର୍ବଶ୍ରେୟ ଆଶ୍ରୟସ୍ୱରୂପ ଶ୍ରୀହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ଅଙ୍ଗଦାଦିସୁଶୋଭିପାଣିଯୁଗେନ ସଂକ୍ଷୁଭିତୈନସଂ\nତୁଙ୍ଗମାଲ୍ୟ ମଣୀନ୍ଦ୍ରହାରସରୋରସଂ ଖଳନୀରସମ୍ ।\nମଙ୍ଗଳପ୍ରଦମନ୍ଥଦାମବିରାଜିତଂ ଭଜତାଜିତଂ ତଂ ଗୃଣେ\nବର ରୂପ୍ୟପୀଠକୃତାଳୟଂ ହରିମାଳୟମ୍ ॥ ୨ ॥",
                    "translation": "ବାହୁଭୂଷଣ ଓ କଙ୍କଣ ଦ୍ୱାରା ଶୋଭା ପାଉଥିବା ନିଜର ଦୁଇ ହସ୍ତ ଦ୍ୱାରା ଯିଏ ପାପସମୂହକୁ ବିନଷ୍ଟ କରନ୍ତି, ଯାହାଙ୍କ ବିଶାଳ ବକ୍ଷସ୍ଥଳ ଉନ୍ନତ ବନମାଳା ଓ ମହାର୍ଘ ମଣିହାର ଦ୍ୱାରା ସୁଶୋଭିତ, ଯିଏ ଦୁଷ୍ଟମାନଙ୍କ ପାଇଁ ଅତ୍ୟନ୍ତ କଠୋର ଓ ନୀରସ, ମାତ୍ର ଭକ୍ତମାନଙ୍କ ପାଇଁ ମଙ୍ଗଳମୟ ମନ୍ଥନଦଣ୍ଡ (ଦହି ମନ୍ଥିବା ଦଣ୍ଡ) ଓ ଦଉଡ଼ି ଧାରଣ କରି ସୁନ୍ଦର ଭାବେ ବିରାଜମାନ—ସେହି ଅଜିତ, ଶ୍ରେଷ୍ଠ ରୌପ୍ୟପୀଠ ନିବାସୀ ଶ୍ରୀହରିଙ୍କର ମୁଁ ଗୁଣଗାନ କରୁଛି।",
                    "wordMeanings": [
                        {
                            "word": "ଅଙ୍ଗଦ-ଆଦି",
                            "meaning": "ବାହୁଭୂଷଣ ଇତ୍ୟାଦି ଅଳଙ୍କାର"
                        },
                        {
                            "word": "ସୁଶୋଭି-ପାଣି-ଯୁଗେନ",
                            "meaning": "ଶୋଭାୟମାନ ଦୁଇ ହସ୍ତ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ସଂକ୍ଷୁଭିତ-ଏନସମ୍",
                            "meaning": "ସକଳ ପାପକୁ କମ୍ପିତ ଓ ବିନଷ୍ଟ କରୁଥିବା"
                        },
                        {
                            "word": "ତୁଙ୍ଗ-ମାଲ୍ୟ",
                            "meaning": "ଲମ୍ବିତ ଦିବ୍ୟ ବନମାଳା"
                        },
                        {
                            "word": "ମଣୀନ୍ଦ୍ର-ହାର",
                            "meaning": "ଶ୍ରେଷ୍ଠ ରତ୍ନହାରରେ ମଣ୍ଡିତ"
                        },
                        {
                            "word": "ସର-ଉରସମ୍",
                            "meaning": "ବିଶାଳ ବକ୍ଷସ୍ଥଳ ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ଖଳ-ନୀରସମ୍",
                            "meaning": "ଦୁର୍ଜନଙ୍କ ପ୍ରତି କଠୋର"
                        },
                        {
                            "word": "ମଙ୍ଗଳପ୍ରଦ-ମନ୍ଥ-ଦାମ",
                            "meaning": "କଲ୍ୟାଣକାରୀ ମନ୍ଥନଦଣ୍ଡ ଓ ରଜ୍ଜୁ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ବିରାଜିତମ୍",
                            "meaning": "ଶୋଭା ପାଉଥିବା"
                        },
                        {
                            "word": "ଭଜତ-ଅଜିତମ୍",
                            "meaning": "ଭକ୍ତମାନଙ୍କ ପ୍ରତି ଅଜିତ ହୋଇଥିବା ପ୍ରଭୁଙ୍କୁ"
                        },
                        {
                            "word": "ତମ୍ ଗୃଣେ",
                            "meaning": "ତାହାଙ୍କର ମୁଁ ସ୍ତୁତି କରୁଛି"
                        },
                        {
                            "word": "ବର ରୂପ୍ୟପୀଠ-କୃତ-ଆଳୟମ୍",
                            "meaning": "ଶ୍ରେଷ୍ଠ ଉଡୁପୀ ଧାମରେ ବାସ କରୁଥିବା"
                        },
                        {
                            "word": "ହରିମ୍",
                            "meaning": "ଶ୍ରୀହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ପୀନରମ୍ୟତନୂଦରଂ ଭଜ ହେ ମନଃ ଶୁଭ ହେ ମନଃ\nସ୍ୱାନୁଭାବନିଦର୍ଶନାୟ ଦିଶନ୍ତମର୍ଥିସୁଶାନ୍ତମମ୍ ।\nଆନତୋଽସ୍ମି ନିଜାର୍ଜୁନପ୍ରିୟସାଧକଂ ଖଳବାଧକଂ\nହୀନତୋଜ୍ଝିତ ରୂପ୍ୟପୀଠକୃତାଳୟଂ ହରିମାଳୟମ୍ ॥ ୩ ॥",
                    "translation": "ହେ କଲ୍ୟାଣମୟ ମନ! ତୁମେ ଶ୍ରୀହରିଙ୍କର ସୁନ୍ଦର, ସ୍ନିଗ୍ଧ ଓ ଶୋଭାମୟ ତନୁ-ଉଦରକୁ ଭଜନ କର। ଯିଏ ପ୍ରାର୍ଥନାକାରୀ ଭକ୍ତଜନଙ୍କୁ ନିଜ ସ୍ୱରୂପାନୁଭୂତି ପ୍ରଦାନ କରିବାକୁ ସର୍ବଦା ପରମ ଶାନ୍ତିମୟ ବରଦାନ ଦିଅନ୍ତି, ନିଜ ଭକ୍ତ ଅର୍ଜୁନଙ୍କର ପ୍ରିୟ କାର୍ଯ୍ୟ ସାଧନ କରନ୍ତି ଏବଂ ଦୁଷ୍ଟମାନଙ୍କୁ ବିନାଶ କରନ୍ତି—ସେହି ସକଳ ଦୋଷରହିତ ରୌପ୍ୟପୀଠ ନିବାସୀ ଶ୍ରୀହରିଙ୍କ ଶ୍ରୀଚରଣରେ ମୁଁ ବିନମ୍ର ପ୍ରଣାମ କରୁଛି।",
                    "wordMeanings": [
                        {
                            "word": "ପୀନ-ରମ୍ୟ-ତନୁ-ଉଦରମ୍",
                            "meaning": "ପୁଷ୍ଟ ତଥା ମନୋହର ଉଦର ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ଭଜ ହେ ମନଃ",
                            "meaning": "ହେ ମନ, ଭଜନ କର"
                        },
                        {
                            "word": "ଶୁଭ ହେ ମନଃ",
                            "meaning": "ହେ କଲ୍ୟାଣକାମୀ ମନ!"
                        },
                        {
                            "word": "ସ୍ୱ-ଅନୁଭାବ-ନିଦର୍ଶନାୟ",
                            "meaning": "ନିଜ ଦିବ୍ୟ ଅନୁଭୂତି ପ୍ରଦର୍ଶନ ପାଇଁ"
                        },
                        {
                            "word": "ଅର୍ଥି-ସୁଶାନ୍ତମମ୍",
                            "meaning": "ପ୍ରାର୍ଥନାକାରୀ ଭକ୍ତଙ୍କୁ ପରମ ଶାନ୍ତି ପ୍ରଦାନକାରୀ"
                        },
                        {
                            "word": "ଆନତଃ ଅସ୍ମି",
                            "meaning": "ମୁଁ ପ୍ରଣତ ହେଉଛି"
                        },
                        {
                            "word": "ନିଜ-ଅର୍ଜୁନ-ପ୍ରିୟ-ସାଧକମ୍",
                            "meaning": "ନିଜ ପ୍ରିୟ ଭକ୍ତ ଅର୍ଜୁନଙ୍କ କାର୍ଯ୍ୟ ସାଧନକାରୀ"
                        },
                        {
                            "word": "ଖଳ-ବାଧକମ୍",
                            "meaning": "ଦୁଷ୍ଟମାନଙ୍କୁ ବିନାଶ କରୁଥିବା"
                        },
                        {
                            "word": "ହୀନତା-ଉଜ୍ଝିତ",
                            "meaning": "ସମସ୍ତ ତ୍ରୁଟି ଓ ହୀନତାରୁ ମୁକ୍ତ"
                        },
                        {
                            "word": "ରୂପ୍ୟପୀଠ-କୃତ-ଆଳୟମ୍",
                            "meaning": "ରୌପ୍ୟପୀଠ (ଉଡୁପୀ) ରେ ବିରାଜମାନ"
                        },
                        {
                            "word": "ହରିମ୍ ଆଳୟମ୍",
                            "meaning": "ସର୍ବଶ୍ରେଷ୍ଠ ଆଶ୍ରୟସ୍ୱରୂପ ଶ୍ରୀହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 4,
                    "lyric": "ହୈମକିଙ୍କିଣିମାଳିକାରଶନାଞ୍ଚିତଂ ତମବଞ୍ଚିତଂ\nକମ୍ରକାଞ୍ଚନ ବସ୍ତ୍ରଚିତ୍ରକଟିଂ ଘନପ୍ରଭୟା ଘନମ୍ ।\nନମ୍ରନାଗରୋପମୋରୁରୁମନାମୟଂ ଶୁଭଧୀମୟଂ\nନୌମ୍ୟହଂ ବର ରୂପ୍ୟପୀଠକୃତାଳୟଂ ହରିମାଳୟମ୍ ॥ ୪ ॥",
                    "translation": "ସୁବର୍ଣ୍ଣ କିଙ୍କିଣୀମାଳା ବିଶିଷ୍ଟ ମେଖଳା ଦ୍ୱାରା ଯାହାଙ୍କ କଟିପ୍ରଦେଶ ଶୋଭା ପାଉଛି, ଯାହାଙ୍କୁ କପଟୀମାନେ କଦାପି ପ୍ରତାରିତ କରିପାରନ୍ତି ନାହିଁ, ଯିଏ ମନୋହର ପୀତାମ୍ବର ପରିଧାନ କରିଛନ୍ତି, ନବଘନଶ୍ୟାମ ସଦୃଶ ଯାହାଙ୍କ ଅଙ୍ଗକାନ୍ତି, ହସ୍ତୀର ଶୁଣ୍ଢ ପରି ଯାହାଙ୍କ ସୁନ୍ଦର ଉରୁଦ୍ୱୟ, ସକଳ ରୋଗ-ଦୋଷ ରହିତ ତଥା ପରମ ମଙ୍ଗଳମୟ ଜ୍ଞାନସ୍ୱରୂପ—ସେହି ଶ୍ରେଷ୍ଠ ରୌପ୍ୟପୀଠ ନିବାସୀ ଶ୍ରୀହରିଙ୍କୁ ମୁଁ ସାଦରେ ପ୍ରଣାମ କରୁଛି।",
                    "wordMeanings": [
                        {
                            "word": "ହୈମ-କିଙ୍କିଣି-ମାଳିକା",
                            "meaning": "ସୁବର୍ଣ୍ଣ ଘୁଙ୍ଗୁରମାଳା ଯୁକ୍ତ"
                        },
                        {
                            "word": "ରଶନା-ଅଞ୍ଚିତମ୍",
                            "meaning": "କଟିସୂତ୍ର (ମେଖଳା) ଦ୍ୱାରା ଅଳଙ୍କୃତ"
                        },
                        {
                            "word": "ତମ୍ ଅବଞ୍ଚିତମ୍",
                            "meaning": "କଦାପି ପ୍ରତାରିତ ନ ହେଉଥିବା"
                        },
                        {
                            "word": "କମ୍ର-କାଞ୍ଚନ-ବସ୍ତ୍ର",
                            "meaning": "ମନୋହର ସୁବର୍ଣ୍ଣବର୍ଣ୍ଣ ପୀତାମ୍ବର"
                        },
                        {
                            "word": "ଚିତ୍ର-କଟିମ୍",
                            "meaning": "ବିଚିତ୍ର କଟିଦେଶ ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ଘନ-ପ୍ରଭୟା ଘନମ୍",
                            "meaning": "ସଘନ କୃଷ୍ଣମେଘ ଭଳି କାନ୍ତିମୟ"
                        },
                        {
                            "word": "ନମ୍ର-ନାଗର-ଉପମ-ଉରୁମ୍",
                            "meaning": "ହସ୍ତୀର ଶୁଣ୍ଢ ସଦୃଶ ସୁନ୍ଦର ଉରୁଦ୍ୱୟ"
                        },
                        {
                            "word": "ଅନାମୟମ୍",
                            "meaning": "ନିରୋଗ, ସମସ୍ତ ଅଶୁଦ୍ଧିରୁ ମୁକ୍ତ"
                        },
                        {
                            "word": "ଶୁଭ-ଧୀମୟମ୍",
                            "meaning": "ପରମ ମଙ୍ଗଳମୟ ଚିନ୍ମୟ ଚେତନା ସ୍ୱରୂପ"
                        },
                        {
                            "word": "ନୌମି ଅହମ୍",
                            "meaning": "ମୁଁ ପ୍ରଣାମ କରୁଛି"
                        },
                        {
                            "word": "ବର ରୂପ୍ୟପୀଠ-କୃତ-ଆଳୟମ୍",
                            "meaning": "ପରମ ଶ୍ରେଷ୍ଠ ରୌପ୍ୟପୀଠ (ଉଡୁପୀ) ନିବାସୀ"
                        },
                        {
                            "word": "ହରିମ୍",
                            "meaning": "ଶ୍ରୀହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 5,
                    "lyric": "ବୃତ୍ତଜାନୁମନୋଜ୍ଞଜଙ୍ଘମମୋହଦଂ ପରମୋହଦମ୍ ।\nରତ୍ନକଳ୍ପନଖତ୍ୱିଷା ହୃତହୃତ୍ତମସ୍ତତିମୁତ୍ତମମ୍ ।\nପ୍ରତ୍ୟହଂ ରଚିତାର୍ଚନଂ ରମୟା ସ୍ୱୟାଗତୟା ସ୍ୱୟଂ\nଚିତ୍ତ ଚିନ୍ତୟ ରୂପ୍ୟପୀଠକୃତାଳୟଂ ହରିମାଳୟମ୍ ॥ ୫ ॥",
                    "translation": "ହେ ଚିତ୍ତ! ସୁବୃତ୍ତାକାର ଜାନୁ (ଆଣ୍ଠୁ) ଓ ଅତୀବ ମନୋହର ଜଙ୍ଘ ବିଶିଷ୍ଟ, ଭକ୍ତମାନଙ୍କୁ କଦାପି ମୋହରେ ନ ପକାଇ ଦୁର୍ଜନଙ୍କୁ ମାୟାମୋହରେ ଆଚ୍ଛନ୍ନ କରୁଥିବା, ପାଦନଖର ରତ୍ନସଦୃଶ ଦିବ୍ୟକାନ୍ତି ଦ୍ୱାରା ଭକ୍ତମାନଙ୍କ ହୃଦୟର ଅଜ୍ଞାନ-ଅନ୍ଧକାରକୁ ଦୂର କରୁଥିବା ଏବଂ ସାକ୍ଷାତ୍ ମହାଲକ୍ଷ୍ମୀଙ୍କ ଦ୍ୱାରା ପ୍ରତିଦିନ ସ୍ୱୟଂ ପୂଜିତ ହେଉଥିବା—ସେହି ପରମ ଉତ୍ତମ ରୌପ୍ୟପୀଠ ନିବାସୀ ଶ୍ରୀହରିଙ୍କୁ ତୁମେ ସର୍ବଦା ଚିନ୍ତନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ବୃତ୍ତ-ଜାନୁ",
                            "meaning": "ସୁନ୍ଦର ଗୋଲାକାର ଜାନୁ"
                        },
                        {
                            "word": "ମନୋଜ୍ଞ-ଜଙ୍ଘମ୍",
                            "meaning": "ଅତୀବ ଆକର୍ଷଣୀୟ ଜଙ୍ଘ"
                        },
                        {
                            "word": "ଅମୋହଦମ୍",
                            "meaning": "ଭକ୍ତଙ୍କୁ ମୋହମୁକ୍ତ କରୁଥିବା"
                        },
                        {
                            "word": "ପର-ମୋହଦମ୍",
                            "meaning": "ଦୁଷ୍ଟମାନଙ୍କୁ ପରମ ମୋହଗ୍ରସ୍ତ କରୁଥିବା"
                        },
                        {
                            "word": "ରତ୍ନ-କଳ୍ପ-ନଖ-ତ୍ୱିଷା",
                            "meaning": "ରତ୍ନତୁଲ୍ୟ ନଖର ଦିବ୍ୟ ପ୍ରଭା ଦ୍ୱାରା"
                        },
                        {
                            "word": "ହୃତ-ହୃତ୍-ତମଃ-ତତିମ୍",
                            "meaning": "ହୃଦୟର ଅଜ୍ଞାନ ରୂପୀ ଅନ୍ଧକାରକୁ ବିନାଶ କରୁଥିବା"
                        },
                        {
                            "word": "ଉତ୍ତମମ୍",
                            "meaning": "ସର୍ବୋତ୍ତମ ପରମପୁରୁଷ"
                        },
                        {
                            "word": "ପ୍ରତ୍ୟହମ୍",
                            "meaning": "ପ୍ରତିଦିନ"
                        },
                        {
                            "word": "ରଚିତ-ଅର୍ଚନମ୍",
                            "meaning": "ପୂଜିତ ହେଉଥିବା"
                        },
                        {
                            "word": "ରମୟା ସ୍ୱୟା",
                            "meaning": "ସ୍ୱୟଂ ମହାଲକ୍ଷ୍ମୀଙ୍କ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ଆଗତୟା ସ୍ୱୟମ୍",
                            "meaning": "ସ୍ୱୟଂ ଉପସ୍ଥିତ ହୋଇ"
                        },
                        {
                            "word": "ଚିତ୍ତ ଚିନ୍ତୟ",
                            "meaning": "ହେ ଚିତ୍ତ, ଚିନ୍ତନ କର!"
                        },
                        {
                            "word": "ରୂପ୍ୟପୀଠ-କୃତ-ଆଳୟମ୍",
                            "meaning": "ରୌପ୍ୟପୀଠ ନିବାସୀ"
                        },
                        {
                            "word": "ହରିମ୍",
                            "meaning": "ଶ୍ରୀହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 6,
                    "lyric": "ଚାରୁପାଦସରୋଜଯୁଗ୍ମରୁଚାମରୋଚ୍ଚୟଚାମରୋ-\nଦାରମୂର୍ଦ୍ଧଜଭାନୁମଣ୍ଡଳରଞ୍ଜକଂ କଳିଭଞ୍ଜକମ୍ ।\nବୀରତୋଚିତଭୂଷଣଂ ବରନୂପୁରଂ ସ୍ୱତନୂପୁରମ୍\nଧାରୟାତ୍ମନି ରୂପ୍ୟପୀଠକୃତାଳୟଂ ହରିମାଳୟମ୍ ॥ ୬ ॥",
                    "translation": "ପରମ ମନୋହର ପାଦପଦ୍ମଦ୍ୱୟର ଦିବ୍ୟକାନ୍ତି ଦ୍ୱାରା ପ୍ରଣାମ କରୁଥିବା ଦେବତାମାନଙ୍କ ମୁକୁଟ ଓ କେଶକଳାପକୁ ଆଲୋକିତ କରୁଥିବା, ସୂର୍ଯ୍ୟମଣ୍ଡଳକୁ ମଧ୍ୟ ଶୋଭିତ କରୁଥିବା, କଳିଯୁଗର ସମସ୍ତ ପାପ-ମଳ ବିନାଶକାରୀ, ମହାବୀରୋଚିତ ଭୂଷଣ ଓ ଦିବ୍ୟ ନୂପୁର ଧାରଣ କରିଥିବା ଏବଂ ସମଗ୍ର ଜଗତକୁ ନିଜ ଶରୀର ମଧ୍ୟରେ ଧାରଣ କରିଥିବା ରୌପ୍ୟପୀଠ ନିବାସୀ ଶ୍ରୀହରିଙ୍କୁ ତୁମେ ନିଜ ଆତ୍ମାରେ ସର୍ବଦା ଧାରଣ କର।",
                    "wordMeanings": [
                        {
                            "word": "ଚାରୁ-ପାଦ-ସରୋଜ-ଯୁଗ୍ମ-ରୁଚା",
                            "meaning": "ମନୋହର ଚରଣକମଳ ଯୁଗଳର ପ୍ରଭା ଦ୍ୱାରା"
                        },
                        {
                            "word": "ଅମର-ଉଚ୍ଚୟ",
                            "meaning": "ଦେବତାଗଣଙ୍କ ସମୂହର"
                        },
                        {
                            "word": "ଚାମର-ଉଦାର-ମୂର୍ଦ୍ଧଜ",
                            "meaning": "ଉଦାର କେଶକଳାପ ଓ ଚାମରକୁ"
                        },
                        {
                            "word": "ଭାନୁ-ମଣ୍ଡଳ-ରଞ୍ଜକମ୍",
                            "meaning": "ସୂର୍ଯ୍ୟମଣ୍ଡଳକୁ ଆନନ୍ଦିତ କରୁଥିବା"
                        },
                        {
                            "word": "କଳି-ଭଞ୍ଜକମ୍",
                            "meaning": "କଳିଯୁଗର ଦୋଷ ବିନାଶକାରୀ"
                        },
                        {
                            "word": "ବୀରତା-ଉଚିତ-ଭୂଷଣମ୍",
                            "meaning": "ବୀରୋଚିତ ଅଳଙ୍କାରରେ ମଣ୍ଡିତ"
                        },
                        {
                            "word": "ବର-ନୂପୁରମ୍",
                            "meaning": "ଶ୍ରେଷ୍ଠ ନୂପୁର ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ସ୍ୱ-ତନୁ-ପୁରମ୍",
                            "meaning": "ନିଜ ଶରୀରରେ ସମସ୍ତ ଲୋକ ଧାରଣ କରିଥିବା"
                        },
                        {
                            "word": "ଧାରୟ ଆତ୍ମନି",
                            "meaning": "ନିଜ ହୃଦୟରେ ଧାରଣ କର"
                        },
                        {
                            "word": "ରୂପ୍ୟପୀଠ-କୃତ-ଆଳୟମ୍",
                            "meaning": "ରୌପ୍ୟପୀଠ (ଉଡୁପୀ) ରେ ବିରାଜମାନ"
                        },
                        {
                            "word": "ହରିମ୍",
                            "meaning": "ଶ୍ରୀହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 7,
                    "lyric": "ଶୁଷ୍କବାଦିମନୋଽତିଦୂରତରାଗମୋତ୍ସବଦାଗମଂ\nସତ୍କବୀନ୍ଦ୍ରବଚୋବିଳାସମହୋଦୟଂ ମହିତୋଦୟମ୍ ।\nଲକ୍ଷୟାମି ଯତୀଶ୍ୱରୈଃ କୃତପୂଜନଂ ଗୁଣଭାଜନଂ\nଧିକୃତୋପମ ରୂପ୍ୟପୀଠକୃତାଳୟଂ ହରିମାଳୟମ୍ ॥ ୭ ॥",
                    "translation": "ଶୁଷ୍କ ତର୍କବାଦୀମାନଙ୍କ ମନଠାରୁ ଅତ୍ୟନ୍ତ ଦୂରରେ ଥିବା, ବେଦଶାସ୍ତ୍ରଜ୍ଞ ସାଧୁସନ୍ଥମାନଙ୍କୁ ପରମ ଆନନ୍ଦୋତ୍ସବ ପ୍ରଦାନ କରୁଥିବା, ଶ୍ରେଷ୍ଠ କବୀନ୍ଦ୍ରମାନଙ୍କ ବାଣୀରେ ଦିବ୍ୟ ଲୀଳା ବିଳାସ କରୁଥିବା, ପରମ ମହିମାମୟ, ଶ୍ରେଷ୍ଠ ଯତିରାଜମାନଙ୍କ ଦ୍ୱାରା ପୂଜିତ, ଅନନ୍ତ ସଦ୍‌ଗୁଣର ଭଣ୍ଡାର ତଥା ଅତୁଳନୀୟ ଶ୍ରେଷ୍ଠ ରୌପ୍ୟପୀଠ ନିବାସୀ ଶ୍ରୀହରିଙ୍କୁ ମୁଁ ମୋର ଲକ୍ଷ୍ୟ ସ୍ୱରୂପ ଦର୍ଶନ କରୁଛି।",
                    "wordMeanings": [
                        {
                            "word": "ଶୁଷ୍କ-ବାଦି-ମନଃ-ଅତିଦୂରତର",
                            "meaning": "ଶୁଷ୍କ ତାର୍କିକମାନଙ୍କ ମନଠାରୁ ବହୁ ଦୂରରେ"
                        },
                        {
                            "word": "ଆଗମ-ଉତ୍ସବଦ-ଆଗମମ୍",
                            "meaning": "ବେଦଶାସ୍ତ୍ରଜ୍ଞଙ୍କୁ ଆନନ୍ଦ ପ୍ରଦାନକାରୀ"
                        },
                        {
                            "word": "ସତ୍-କବୀନ୍ଦ୍ର-ବଚଃ-ବିଳାସ",
                            "meaning": "ଶ୍ରେଷ୍ଠ ଭକ୍ତକବିଙ୍କ ବାଣୀରେ ବିଳାସ କରୁଥିବା"
                        },
                        {
                            "word": "ମହୋଦୟମ୍",
                            "meaning": "ପରମ କଲ୍ୟାଣମୟ"
                        },
                        {
                            "word": "ମହିତ-ଉଦୟମ୍",
                            "meaning": "ପରମ ମହିମାମଣ୍ଡିତ ଉତ୍ସର୍ଗ"
                        },
                        {
                            "word": "ଲକ୍ଷୟାମି",
                            "meaning": "ମୁଁ ଦର୍ଶନ କରୁଛି, ଧ୍ୟାନ କରୁଛି"
                        },
                        {
                            "word": "ଯତୀଶ୍ୱରୈଃ କୃତ-ପୂଜନମ୍",
                            "meaning": "ଶ୍ରେଷ୍ଠ ସନ୍ନ୍ୟାସୀ-ଯତିଗଣଙ୍କ ଦ୍ୱାରା ପୂଜିତ"
                        },
                        {
                            "word": "ଗୁଣ-ଭାଜନମ୍",
                            "meaning": "ଅନନ୍ତ କଲ୍ୟାଣ ଗୁଣର ପାତ୍ର"
                        },
                        {
                            "word": "ଧିକ୍-କୃତ-ଉପମ",
                            "meaning": "ସମସ୍ତ ଉପମାକୁ ପରାଜିତ କରୁଥିବା (ଅତୁଳନୀୟ)"
                        },
                        {
                            "word": "ରୂପ୍ୟପୀଠ-କୃତ-ଆଳୟମ୍",
                            "meaning": "ରୌପ୍ୟପୀଠ ନିବାସୀ"
                        },
                        {
                            "word": "ହରିମ୍",
                            "meaning": "ଶ୍ରୀହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 8,
                    "lyric": "ନାରଦପ୍ରିୟମାବିଶାମ୍ବୁରୁହେକ୍ଷଣଂ ନିଜରକ୍ଷଣଂ\nତାରକୋପମଚାରୁଦୀପଚୟାନ୍ତରେ ଗତଚିନ୍ତରେ ।\nଧୀର ମାନସ ପୂର୍ଣ୍ଣଚନ୍ଦ୍ରସମାନମଚ୍ୟୁତମାନମ\nଦ୍ୱାରକୋପମ ରୂପ୍ୟପୀଠକୃତାଳୟଂ ହରିମାଳୟମ୍ ॥ ୮ ॥",
                    "translation": "ହେ ଧୈର୍ଯ୍ୟବାନ୍ ମନ! ଦେବର୍ଷି ନାରଦଙ୍କର ପରମ ପ୍ରିୟ, କମଳନୟନ, ଆଶ୍ରିତ ଭକ୍ତମାନଙ୍କୁ ସର୍ବଦା ରକ୍ଷା କରୁଥିବା, ତାରକା ସଦୃଶ ଶୋଭାୟମାନ ଦୀପାବଳି ମଧ୍ୟରେ ବିରାଜିତ ହୋଇ ଭକ୍ତଙ୍କ ସକଳ ଚିନ୍ତା ଦୂର କରୁଥିବା, ପୂର୍ଣ୍ଣଚନ୍ଦ୍ରଙ୍କ ପରି ଆହ୍ଲାଦଦାୟକ ଏବଂ ଦ୍ୱାରକା ସଦୃଶ ରୌପ୍ୟପୀଠ (ଉଡୁପୀ କ୍ଷେତ୍ର) ରେ ବିରାଜମାନ ସେହି ଅଚ୍ୟୁତ ଶ୍ରୀହରିଙ୍କ ଶ୍ରୀଚରଣରେ ତୁମେ ସର୍ବଦା ବିନମ୍ର ପ୍ରଣାମ କର।",
                    "wordMeanings": [
                        {
                            "word": "ନାରଦ-ପ୍ରିୟମ୍",
                            "meaning": "ଦେବର୍ଷି ନାରଦଙ୍କ ଅତ୍ୟନ୍ତ ପ୍ରିୟ"
                        },
                        {
                            "word": "ଆବିଶ",
                            "meaning": "ପ୍ରବେଶ କରନ୍ତୁ"
                        },
                        {
                            "word": "ଅମ୍ବୁରୁହ-ଈକ୍ଷଣମ୍",
                            "meaning": "କମଳନୟନ ବିଶିଷ୍ଟ"
                        },
                        {
                            "word": "ନିଜ-ରକ୍ଷଣମ୍",
                            "meaning": "ନିଜ ଭକ୍ତଙ୍କ ରକ୍ଷାକର୍ତ୍ତା"
                        },
                        {
                            "word": "ତାରକା-ଉପମ-ଚାରୁ-ଦୀପ-ଚୟ",
                            "meaning": "ତାରାତୁଲ୍ୟ ମନୋହର ଦୀପାବଳି"
                        },
                        {
                            "word": "ଅନ୍ତରେ ଗତ-ଚିନ୍ତ",
                            "meaning": "ସମସ୍ତ ଚିନ୍ତାରୁ ମୁକ୍ତ କରୁଥିବା"
                        },
                        {
                            "word": "ଧୀର ମାନସ",
                            "meaning": "ହେ ଧୈର୍ଯ୍ୟବାନ୍ ମନ!"
                        },
                        {
                            "word": "ପୂର୍ଣ୍ଣଚନ୍ଦ୍ର-ସମାନମ୍",
                            "meaning": "ପୂର୍ଣ୍ଣିମା ଚନ୍ଦ୍ରତୁଲ୍ୟ ଆନନ୍ଦଦାୟକ"
                        },
                        {
                            "word": "ଅଚ୍ୟୁତମ୍ ଆନମ",
                            "meaning": "ଅଚ୍ୟୁତ ଭଗବାନଙ୍କୁ ପ୍ରଣାମ କର"
                        },
                        {
                            "word": "ଦ୍ୱାରକା-ଉପମ",
                            "meaning": "ଶ୍ରୀଦ୍ୱାରକାଧାମ ସଦୃଶ"
                        },
                        {
                            "word": "ରୂପ୍ୟପୀଠ-କୃତ-ଆଳୟମ୍",
                            "meaning": "ରୌପ୍ୟପୀଠ (ଉଡୁପୀ) ରେ ବିରାଜମାନ"
                        },
                        {
                            "word": "ହରିମ୍",
                            "meaning": "ଶ୍ରୀହରିଙ୍କୁ"
                        }
                    ]
                },
                {
                    "id": 9,
                    "lyric": "ରୂପ୍ୟପୀଠକୃତାଳୟସ୍ୟ ହରେଃ ପ୍ରିୟଂ ଦୁରିତାପ୍ରିୟଂ\nତତ୍ପଦାର୍ଚକବାଦିରାଜୟତୀରିତଂ ଗୁଣପୂରିତମ୍ ।\nଗୋପ୍ୟମଷ୍ଟକମେତଦୁଚ୍ଚମୁଦେ ମମାସ୍ତ୍ୱିହ ନିର୍ମମ\nପ୍ରାପ୍ୟଶୁଦ୍ଧଫଳାୟ ତତ୍ର ସୁକୋମଳଂ ହୃତଧୀମଳମ୍ ॥ ୯ ॥",
                    "translation": "ରୌପ୍ୟପୀଠ (ଉଡୁପୀ) ନିବାସୀ ଶ୍ରୀହରିଙ୍କର ଅତୀବ ପ୍ରିୟ, ସକଳ ପାପ-ଦୁରିତକୁ ବିନଷ୍ଟ କରୁଥିବା, ତାହାଙ୍କ ପାଦପଦ୍ମର ଅନନ୍ୟ ସେବକ ଶ୍ରୀ ବାଦିରାଜ ଯତିଙ୍କ ଦ୍ୱାରା ବିରଚିତ ଏବଂ ଭଗବଦ୍‌ଗୁଣରେ ପରିପୂର୍ଣ୍ଣ ଏହି ଦିବ୍ୟ ଗୋପନୀୟ ଅଷ୍ଟକମ୍ ଏହି ସଂସାରରେ ମୋତେ ପରମ ଆନନ୍ଦ ପ୍ରଦାନ କରୁ। ଏହା ବୁଦ୍ଧିର ସମସ୍ତ ମଳିନତା ଦୂର କରି, ମମତାରହିତ ଶୁଦ୍ଧ ଭକ୍ତିର ପରମ କୋମଳ ଦିବ୍ୟଫଳ ପ୍ରଦାନ କରୁ।",
                    "wordMeanings": [
                        {
                            "word": "ରୂପ୍ୟପୀଠ-କୃତ-ଆଳୟସ୍ୟ",
                            "meaning": "ରୌପ୍ୟପୀଠ ନିବାସୀ"
                        },
                        {
                            "word": "ହରେଃ ପ୍ରିୟମ୍",
                            "meaning": "ଶ୍ରୀହରିଙ୍କର ପରମ ପ୍ରିୟ"
                        },
                        {
                            "word": "ଦୁରିତ-ଅପ୍ରିୟମ୍",
                            "meaning": "ସକଳ ପାପ-ତାପକୁ ନାଶ କରୁଥିବା"
                        },
                        {
                            "word": "ତତ୍-ପଦ-ଅର୍ଚକ",
                            "meaning": "ତାହାଙ୍କ ଶ୍ରୀଚରଣର ପୂଜକ"
                        },
                        {
                            "word": "ବାଦିରାଜ-ୟତି-ଈରିତମ୍",
                            "meaning": "ଶ୍ରୀ ବାଦିରାଜ ଯତିଙ୍କ ଦ୍ୱାରା କଥିତ"
                        },
                        {
                            "word": "ଗୁଣ-ପୂରିତମ୍",
                            "meaning": "ଦିବ୍ୟ ସଦ୍‌ଗୁଣରେ ପରିପୂର୍ଣ୍ଣ"
                        },
                        {
                            "word": "ଗୋପ୍ୟମ୍ ଅଷ୍ଟକମ୍ ଏତତ୍",
                            "meaning": "ଏହି ଗୋପନୀୟ ଅଷ୍ଟକ ସ୍ତୋତ୍ର"
                        },
                        {
                            "word": "ଉଚ୍ଚ-ମୁଦେ",
                            "meaning": "ପରମ ଆନନ୍ଦ ନିମନ୍ତେ"
                        },
                        {
                            "word": "ମମ ଅସ୍ତୁ ଇହ",
                            "meaning": "ମୋ ପାଇଁ ଏହି ଜଗତରେ ହେଉ"
                        },
                        {
                            "word": "ନିର୍ମମ",
                            "meaning": "ମମତା ଓ ଆସକ୍ତି ଶୂନ୍ୟ"
                        },
                        {
                            "word": "ପ୍ରାପ୍ୟ-ଶୁଦ୍ଧ-ଫଳାୟ",
                            "meaning": "ଶୁଦ୍ଧ ଭକ୍ତିରୂପକ ଫଳ ପ୍ରାପ୍ତି ନିମନ୍ତେ"
                        },
                        {
                            "word": "ସୁକୋମଳମ୍",
                            "meaning": "ଅତ୍ୟନ୍ତ ମଧୁର ଓ କୋମଳ"
                        },
                        {
                            "word": "ହୃତ-ଧୀ-ମଳମ୍",
                            "meaning": "ବୁଦ୍ଧିର ଅଜ୍ଞାନ ମଇଳାକୁ ଦୂର କରି"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        "id": "song-pancatattvamahamantra",
        "title": "ପଞ୍ଚତତ୍ତ୍ୱ ମହାମନ୍ତ୍ର (Panca Tattva Mahamantra)",
        "title_odia": "ପଞ୍ଚତତ୍ତ୍ୱ ମହାମନ୍ତ୍ର",
        "title_english": "Panca Tattva Mahamantra",
        "category": "Songs",
        "type": "html",
        "author": "Traditional",
        "tags": [
            "Panca Tattva Mahamantra",
            "Pancha Tattva",
            "Sri Krishna Caitanya",
            "Prabhu Nityananda",
            "Sri Advaita",
            "Gadadhara",
            "Srivasa",
            "Traditional",
            "Maha Mantra",
            "ପଞ୍ଚତତ୍ତ୍ୱ ମହାମନ୍ତ୍ର",
            "ପାରମ୍ପରିକ"
        ],
        "description": "କଳିଯୁଗର ଜୀବମାନଙ୍କର ସକଳ ନାମାପରାଧ ବିନାଶପୂର୍ବକ ଶ୍ରୀକୃଷ୍ଣପ୍ରେମ ପ୍ରଦାନକାରୀ ପରମ କୃପାମୟ ପଞ୍ଚତତ୍ତ୍ୱ (ଚୈତନ୍ୟ, ନିତ୍ୟାନନ୍ଦ, ଅଦ୍ୱୈତ, ଗଦାଧର ଓ ଶ୍ରୀବାସାଦି ଭକ୍ତବୃନ୍ଦ) ଙ୍କ ମହାମନ୍ତ୍ର।",
        "audioUrl": "https://pub-345c04e6aaba44ae9bf29e6f8e441624.r2.dev/uploads/Panca_Tattva_Maha_Mantra.mp3",
        "vocalist": "Vaishnavas",
        "audioVersions": [
            {
                "label": "Vaishnavas (R2 HD)",
                "url": "https://pub-345c04e6aaba44ae9bf29e6f8e441624.r2.dev/uploads/Panca_Tattva_Maha_Mantra.mp3"
            },
            {
                "label": "HH Bhakti Caru Swami",
                "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Pranam_Mantras/Panca-tattva_Maha-mantra/Panca-tattva_Maha-mantra_-_Sung_by_HH_Bhakti_Caru_Swami_IDT.mp3"
            },
            {
                "label": "HG Jai Sachinandana Prabhu",
                "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Pranam_Mantras/Panca-tattva_Maha-mantra/Panca-tattva_Maha-mantra_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3"
            },
            {
                "label": "HH Bhakti Rasamrita Swami",
                "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Pranam_Mantras/Panca-tattva_Maha-mantra/Panca-tattva_Maha-mantra_-_Sung_by_HH_Bhakti_Rasamrita_Swami_IDT.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-pancatattvamahamantra",
            "title": "ପଞ୍ଚତତ୍ତ୍ୱ ମହାମନ୍ତ୍ର (Panca Tattva Mahamantra)",
            "title_odia": "ପଞ୍ଚତତ୍ତ୍ୱ ମହାମନ୍ତ୍ର",
            "title_english": "Panca Tattva Mahamantra",
            "author": "Traditional",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Panca%20Tattva%20Mahamantra_",
            "verses": [
                {
                    "id": 1,
                    "lyric": "(ଜୟ) ଶ୍ରୀକୃଷ୍ଣ-ଚୈତନ୍ୟ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ ।\nଶ୍ରୀଅଦ୍ୱୈତ ଗଦାଧର ଶ୍ରୀବାସାଦି ଗୌର-ଭକ୍ତ-ବୃନ୍ଦ ॥",
                    "translation": "ସ୍ୱୟଂ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ, ତାହାଙ୍କର ନିତ୍ୟ ସ୍ୱରୂପ-ପ୍ରକାଶ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ, ଭକ୍ତାବତାର ଶ୍ରୀ ଅଦ୍ୱୈତ ଆଚାର୍ଯ୍ୟ, ଅନ୍ତରଙ୍ଗା ଭକ୍ତଶକ୍ତି ଶ୍ରୀ ଗଦାଧର ପଣ୍ଡିତ ଏବଂ ଶ୍ରୀବାସ ଠାକୁରଙ୍କ ସମେତ ସମସ୍ତ ଗୌର-ଭକ୍ତବୃନ୍ଦଙ୍କର ସର୍ବଦା ପରମ ଜୟଜୟକାର ହେଉ! ଶ୍ରୀଚୈତନ୍ୟ ମହାପ୍ରଭୁ ଏହି ପଞ୍ଚତତ୍ତ୍ୱଙ୍କ ମଧ୍ୟରେ ସ୍ୱୟଂ ପରମେଶ୍ୱର ରୂପରେ ବିରାଜମାନ ଅଟନ୍ତି। ଏହି ମହାମନ୍ତ୍ର ଜପ କଲେ ସମସ୍ତ ନାମାପରାଧ ଦୂର ହୁଏ ଏବଂ ଶ୍ରୀକୃଷ୍ଣପ୍ରେମ ସହଜରେ ପ୍ରାପ୍ତ ହୁଏ।",
                    "wordMeanings": [
                        {
                            "word": "ଜୟ",
                            "meaning": "ସର୍ବଦା ଜୟଜୟକାର ହେଉ"
                        },
                        {
                            "word": "ଶ୍ରୀ-କୃଷ୍ଣ-ଚୈତନ୍ୟ",
                            "meaning": "ସ୍ୱୟଂ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ (ଭକ୍ତରୂପ)"
                        },
                        {
                            "word": "ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ",
                            "meaning": "ସ୍ୱୟଂ ମୂଳ ବଳରାମଙ୍କ ସ୍ୱରୂପ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦ (ଭକ୍ତସ୍ୱରୂପ)"
                        },
                        {
                            "word": "ଶ୍ରୀ-ଅଦ୍ୱୈତ",
                            "meaning": "ମହାବିଷ୍ଣୁ ଓ ସଦାଶିବଙ୍କ ଅଭିନ୍ନ ଅବତାର ଶ୍ରୀ ଅଦ୍ୱୈତ ଆଚାର୍ଯ୍ୟ (ଭକ୍ତାବତାର)"
                        },
                        {
                            "word": "ଗଦାଧର",
                            "meaning": "ଶ୍ରୀମତୀ ରାଧାରାଣୀଙ୍କ ସ୍ୱରୂପ ଅନ୍ତରଙ୍ଗା ପ୍ରେମଶକ୍ତି ଶ୍ରୀ ଗଦାଧର ପଣ୍ଡିତ (ଭକ୍ତଶକ୍ତି)"
                        },
                        {
                            "word": "ଶ୍ରୀବାସ-ଆଦି",
                            "meaning": "ଶ୍ରୀବାସ ଠାକୁର (ଦେବର୍ଷି ନାରଦଙ୍କ ସ୍ୱରୂପ) ଙ୍କୁ ଆଦି କରି"
                        },
                        {
                            "word": "ଗୌର-ଭକ୍ତ-ବୃନ୍ଦ",
                            "meaning": "ଶ୍ରୀ ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କ ସମସ୍ତ ଶୁଦ୍ଧ ଭକ୍ତସମୂହ (ତଟସ୍ଥା ଜୀବଶକ୍ତି)"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        "id": "song-paramanandahemadhava",
        "title": "ପରମାନନ୍ଦ ହେ ମାଧବ (Paramananda He Madhava)",
        "title_odia": "ପରମାନନ୍ଦ ହେ ମାଧବ",
        "title_english": "Paramananda He Madhava",
        "category": "Songs",
        "type": "html",
        "author": "Jagannatha Dasa",
        "tags": [
            "Paramananda He Madhava",
            "Jagannatha Dasa",
            "Atibadi Jagannatha Dasa",
            "Gour Govinda Swami",
            "Odia Bhajan",
            "Cakadola",
            "Jagannatha",
            "ପରମାନନ୍ଦ ହେ ମାଧବ",
            "ଜଗନ୍ନାଥ ଦାସ",
            "ଅତିବଡ଼ୀ ଜଗନ୍ନାଥ ଦାସ",
            "ଗୌର ଗୋବିନ୍ଦ ସ୍ୱାମୀ",
            "ଶ୍ରୀ ଜଗନ୍ନାଥ"
        ],
        "description": "ଓଡ଼ିଆ ଭାଗବତର ରଚୟିତା ଅତିବଡ଼ୀ ଜଗନ୍ନାଥ ଦାସଙ୍କ ବିରଚିତ ପରମ ଭକ୍ତିମୟ ଶ୍ରୀଜଗନ୍ନାଥ ମହାପ୍ରଭୁଙ୍କ ଭଜନ।",
        "audioUrl": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Parama%CC%84nanda%20He%20Ma%CC%84dhava.mp3",
        "vocalist": "HH Gour Govinda Swami",
        "audioVersions": [
            {
                "label": "HH Gour Govinda Swami",
                "url": "https://pub-f9b96835f83a46c1b90f545dabc7d596.r2.dev/uploads/Parama%CC%84nanda%20He%20Ma%CC%84dhava.mp3"
            }
        ],
        "structuredContent": {
            "id": "song-paramanandahemadhava",
            "title": "ପରମାନନ୍ଦ ହେ ମାଧବ (Paramananda He Madhava)",
            "title_odia": "ପରମାନନ୍ଦ ହେ ମାଧବ",
            "title_english": "Paramananda He Madhava",
            "author": "Jagannatha Dasa",
            "category": "Songs",
            "reference_url": "https://vsnectar.web.app/home/songs/Paramananda%20He%20Madhava_",
            "verses": [
                {
                    "id": 1,
                    "lyric": "ପରମାନନ୍ଦ ହେ ମାଧବ,\nପାଦୁଁ ଗଳୁଛି ମକରନ୍ଦ ॥ ୧ ॥",
                    "translation": "ହେ ପରମ ଆନନ୍ଦସ୍ୱରୂପ ମାଧବ! ଆପଣଙ୍କ ଶ୍ରୀଚରଣ-କମଳରୁ ନିରନ୍ତର ଦିବ୍ୟ ଅମୃତମୟ ମକରନ୍ଦ (ମହୁ/ପ୍ରେମରସ) ଝରିପଡ଼ୁଛି।",
                    "wordMeanings": [
                        {
                            "word": "ପରମାନନ୍ଦ",
                            "meaning": "ପରମ ଆନନ୍ଦସ୍ୱରୂପ, ସର୍ବୋଚ୍ଚ ଆନନ୍ଦମୟ"
                        },
                        {
                            "word": "ହେ ମାଧବ",
                            "meaning": "ହେ ମାଧବ (ଶ୍ରୀରାଧିକାଙ୍କ ପ୍ରାଣନାଥ ଶ୍ରୀକୃଷ୍ଣ)"
                        },
                        {
                            "word": "ପାଦୁଁ",
                            "meaning": "ଆପଣଙ୍କ ଶ୍ରୀଚରଣ-କମଳରୁ"
                        },
                        {
                            "word": "ଗଳୁଛି",
                            "meaning": "ନିରନ୍ତର ଝରିପଡ଼ୁଛି, ପ୍ରବାହିତ ହେଉଛି"
                        },
                        {
                            "word": "ମକରନ୍ଦ",
                            "meaning": "ଦିବ୍ୟ ଚରଣାମୃତ, ପଦ୍ମମହୁ ସଦୃଶ ପ୍ରେମରସ"
                        }
                    ]
                },
                {
                    "id": 2,
                    "lyric": "ସେ-ମକରନ୍ଦ ପାନ କରି,\nଆନନ୍ଦେ ବୋଲ ‘ହରି ହରି’ ॥ ୨ ॥",
                    "translation": "ସେହି ଶ୍ରୀଚରଣ-କମଳର ମଧୁର ମକରନ୍ଦକୁ ଆକଣ୍ଠ ପାନ କରି, ହେ ଭାଇ, ପରମ ଆନନ୍ଦରେ ‘ହରି ହରି’ ନାମ ସଂକୀର୍ତ୍ତନ କର।",
                    "wordMeanings": [
                        {
                            "word": "ସେ-ମକରନ୍ଦ",
                            "meaning": "ସେହି ଚରଣାମୃତରୂପୀ ଦିବ୍ୟ ମହୁକୁ"
                        },
                        {
                            "word": "ପାନ କରି",
                            "meaning": "ଆନନ୍ଦର ସହିତ ଆସ୍ୱାଦନ କରି"
                        },
                        {
                            "word": "ଆନନ୍ଦେ",
                            "meaning": "ପରମ ହୃଦୟୋଲ୍ଲାସରେ, ଭକ୍ତି-ଆନନ୍ଦରେ"
                        },
                        {
                            "word": "ବୋଲ",
                            "meaning": "ନିରନ୍ତର ଉଚ୍ଚାରଣ କର, ଗାନ କର"
                        },
                        {
                            "word": "‘ହରି ହରି’",
                            "meaning": "ପରମ ପବିତ୍ର ଶ୍ରୀହରିଙ୍କ ଦିବ୍ୟ ନାମ"
                        }
                    ]
                },
                {
                    "id": 3,
                    "lyric": "ହରିଙ୍କ ନାମେ ବାନ୍ଧ ଭେଳା,\nପାରି କରିବେ ଚକାଡୋଳା ॥ ୩ ॥",
                    "translation": "ଶ୍ରୀହରିଙ୍କ ପବିତ୍ର ନାମରୂପକ କାଠିରେ ନିଜ ଭକ୍ତିର ଭେଳା (ଡଙ୍ଗା) ବାନ୍ଧି ନିଅ; ସେହି ଚକାଡୋଳା ଶ୍ରୀ ଜଗନ୍ନାଥ ମହାପ୍ରଭୁ ଏହି ଦୁସ୍ତର ଭବସାଗରରୁ ନିଶ୍ଚୟ ପାରି କରାଇଦେବେ।",
                    "wordMeanings": [
                        {
                            "word": "ହରିଙ୍କ ନାମେ",
                            "meaning": "ଶ୍ରୀହରିଙ୍କ ପବିତ୍ର ନାମ ଦ୍ୱାରା"
                        },
                        {
                            "word": "ବାନ୍ଧ",
                            "meaning": "ନିର୍ମାଣ କର, ସଂଯୋଗ କର"
                        },
                        {
                            "word": "ଭେଳା",
                            "meaning": "ଭବସାଗର ତରିବା ପାଇଁ ଡଙ୍ଗା ବା ଆଶ୍ରୟ"
                        },
                        {
                            "word": "ପାରି କରିବେ",
                            "meaning": "ସଂସାର-ସାଗର ପାର କରାଇବେ, ମୁକ୍ତି ଦେବେ"
                        },
                        {
                            "word": "ଚକାଡୋଳା",
                            "meaning": "ଶ୍ରୀଜଗନ୍ନାଥ ମହାପ୍ରଭୁ (ଯାହାଙ୍କ ନେତ୍ର ବିଶାଳ ଓ ଗୋଲାକାର)"
                        }
                    ]
                },
                {
                    "id": 4,
                    "lyric": "ସେ-ଚକାଡୋଳାଙ୍କ ପୟରେ,\nମନ ମୋ ରହୁ ନିରନ୍ତରେ ॥ ୪ ॥",
                    "translation": "ସେହି ପରମ ଦୟାଳୁ ଚକାଡୋଳା ଶ୍ରୀଜଗନ୍ନାଥଙ୍କ ଶ୍ରୀପୟର (ଚରଣାରବିନ୍ଦ) ରେ ମୋର ଚିତ୍ତ ନିରନ୍ତର ଲୀନ ହୋଇ ରହୁ।",
                    "wordMeanings": [
                        {
                            "word": "ସେ-ଚକାଡୋଳାଙ୍କ",
                            "meaning": "ସେହି ପରମେଶ୍ୱର ଶ୍ରୀଜଗନ୍ନାଥଙ୍କ"
                        },
                        {
                            "word": "ପୟରେ",
                            "meaning": "ଶ୍ରୀଚରଣ କମଳରେ"
                        },
                        {
                            "word": "ମନ ମୋ",
                            "meaning": "ମୋର ଅଚଞ୍ଚଳ ମନ ବା ଚିତ୍ତ"
                        },
                        {
                            "word": "ରହୁ",
                            "meaning": "ସର୍ବଦା ନିମଗ୍ନ ରହୁ, ସ୍ଥିର ରହୁ"
                        },
                        {
                            "word": "ନିରନ୍ତରେ",
                            "meaning": "ସର୍ବଦା, ନିରବଚ୍ଛିନ୍ନ ଭାବେ"
                        }
                    ]
                },
                {
                    "id": 5,
                    "lyric": "ମନ ମୋ ନିରନ୍ତରେ ରହୁ,\n‘ହା କୃଷ୍ଣ’ ବୋଲି ଜୀବ ଯାଉ ।\nମୋତେ ଉଦ୍ଧାର ରାଧାଧବ ॥ ୫ ॥",
                    "translation": "ମୋର ମନ ସର୍ବଦା ତାହାଙ୍କ ଶ୍ରୀଚରଣରେ ରହିଥାଉ, ଏବଂ ଅନ୍ତକାଳରେ ‘ହା କୃଷ୍ଣ! ହା କୃଷ୍ଣ!’ ଡାକୁ ଡାକୁ ମୋର ପ୍ରାଣବାୟୁ ଉଡ଼ିଯାଉ। ହେ ରାଧାଧବ (ଶ୍ରୀରାଧାରାଣୀଙ୍କ ପ୍ରାଣପ୍ରିୟ ପରମେଶ୍ୱର)! ମୋ ଭଳି ପତିତ ଜୀବକୁ ଦୟାକରି ଉଦ୍ଧାର କରନ୍ତୁ।",
                    "wordMeanings": [
                        {
                            "word": "ମନ ମୋ",
                            "meaning": "ମୋର ଚିତ୍ତବୃତ୍ତି"
                        },
                        {
                            "word": "ନିରନ୍ତରେ ରହୁ",
                            "meaning": "ସର୍ବକ୍ଷଣ ଭଗବାନଙ୍କ ଚରଣରେ ରହିଥାଉ"
                        },
                        {
                            "word": "‘ହା କୃଷ୍ଣ’ ବୋଲି",
                            "meaning": "‘ହେ କୃଷ୍ଣ! ହେ କୃଷ୍ଣ!’ ବ୍ୟାକୁଳ ଭାବରେ ଡାକି"
                        },
                        {
                            "word": "ଜୀବ ଯାଉ",
                            "meaning": "ପ୍ରାଣବାୟୁ ନିର୍ଗତ ହେଉ, ଶେଷ ନିଃଶ୍ୱାସ ଯାଉ"
                        },
                        {
                            "word": "ମୋତେ ଉଦ୍ଧାର",
                            "meaning": "ମୋତେ ସଂସାର ବନ୍ଧନରୁ ଉଦ୍ଧାର କରନ୍ତୁ"
                        },
                        {
                            "word": "ରାଧାଧବ",
                            "meaning": "ଶ୍ରୀରାଧିକାଙ୍କ ପ୍ରାଣଧନ ଶ୍ରୀକୃଷ୍ଣ"
                        }
                    ]
                }
            ]
        },
        "published": true,
        "verified": true,
        "status": "COMPLETED"
    },
    {
        id: "song-pralayapayodhijale",
        title: "ପ୍ରଳୟ ପୟୋଧି ଜଳେ - ଶ୍ରୀ ଶ୍ରୀ ଦଶାବତାର ସ୍ତୋତ୍ରମ୍ (Pralaya Payodhi Jale - Sri Sri Dasavatara Stotram)",
        title_odia: "ପ୍ରଳୟ ପୟୋଧି ଜଳେ - ଶ୍ରୀ ଶ୍ରୀ ଦଶାବତାର ସ୍ତୋତ୍ରମ୍",
        title_english: "Pralaya Payodhi Jale - Sri Sri Dasavatara Stotram",
        category: "Songs",
        type: "html",
        author: "Jayadeva Goswami",
        tags: [
            "Jayadeva Goswami",
            "Dasavatara",
            "Dasavatara Stotra",
            "Pralaya Payodhi Jale",
            "Matsya",
            "Kurma",
            "Varaha",
            "Narasimha",
            "Vamana",
            "Parasurama",
            "Rama",
            "Balarama",
            "Buddha",
            "Kalki",
            "ଶ୍ରୀ ଜୟଦେବ ଗୋସ୍ୱାମୀ",
            "ଶ୍ରୀ ଶ୍ରୀ ଦଶାବତାର ସ୍ତୋତ୍ରମ୍",
            "ପ୍ରଳୟ ପୟୋଧି ଜଳେ"
        ],
        description: "କବିକୁଳଚୂଡ଼ାମଣି ଶ୍ରୀ ଜୟଦେବ ଗୋସ୍ୱାମୀଙ୍କ ଗୀତ ଗୋବିନ୍ଦମ୍ ଅନ୍ତର୍ଗତ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କ ଦଶଗୋଟି ଦିବ୍ୟ ଅବତାରର ପରମ ମହିମାମୟ ଦଶାବତାର ସ୍ତୋତ୍ରମ୍ ।",
        audioUrl: "https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2F54%20Dasha%20Avatar%20Stotra%20P-103.mp3",
        vocalist: "HG Jai Sachinandana Prabhu",
        audioVersions: [
            {
                label: "HG Jai Sachinandana Prabhu",
                url: "https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2F54%20Dasha%20Avatar%20Stotra%20P-103.mp3"
            },
            {
                label: "Srila Prabhupada",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Jayadeva_Goswami/Sri_Dasavtar_Stotra/Sri_Dasavtar_Stotra_-_Sung_by_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3"
            },
            {
                label: "HH Gour Govinda Swami",
                url: "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Dasavatar.mp3"
            },
            {
                label: "HH Radhanath Swami",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Jayadeva_Goswami/Sri_Dasavtar_Stotra/Sri_Dasavtar_Stotra_-_Sung_by_HH_Radhanath_Swami_IDT.mp3"
            },
            {
                label: "HG Swarupa Damodar Prabhu",
                url: "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Swarupa_Damodar_Prabhu/Geet_Govind/Swarupa_Damodar_Pr_Bhajans_-_06-Pralaya_payodhi_jale.mp3"
            },
            {
                label: "HH Achyutananda Swami",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Jayadeva_Goswami/Sri_Dasavtar_Stotra/Sri_Dasavtar_Stotra_-_Sung_by_HG_Achyutananda_Prabhu_IDT.mp3"
            },
            {
                label: "HH Bhakti Rasamrita Swami",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Jayadeva_Goswami/Sri_Dasavtar_Stotra/Sri_Dasavtar_Stotra_-_Sung_by_HH_Bhakti_Rasamrita_Swami_IDT.mp3"
            },
            {
                label: "HH Bhakti Swarupa Damodara Swami",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Jayadeva_Goswami/Sri_Dasavtar_Stotra/Sri_Dasavtar_Stotra_-_Sung_by_HH_Bhakti_Swarupa_Damodar_Swami_IDT.mp3"
            },
            {
                label: "HG Vaisesika Prabhu",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Jayadeva_Goswami/Sri_Dasavtar_Stotra/Sri_Dasavtar_Stotra_-_Sung_by_HG_Vaisesika_Prabhu_IDT.mp3"
            },
            {
                label: "HG Sivarama Prabhu",
                url: "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Jayadeva_Goswami/Sri_Dasavtar_Stotra/Sri_Dasavtar_Stotra_-_Sung_by_HG_Sivarama_Prabhu_IDT.mp3"
            }
        ],
        structuredContent: {
            id: "song-pralayapayodhijale",
            title: "ପ୍ରଳୟ ପୟୋଧି ଜଳେ - ଶ୍ରୀ ଶ୍ରୀ ଦଶାବତାର ସ୍ତୋତ୍ରମ୍ (Pralaya Payodhi Jale - Sri Sri Dasavatara Stotram)",
            title_odia: "ପ୍ରଳୟ ପୟୋଧି ଜଳେ - ଶ୍ରୀ ଶ୍ରୀ ଦଶାବତାର ସ୍ତୋତ୍ରମ୍",
            title_english: "Pralaya Payodhi Jale - Sri Sri Dasavatara Stotram",
            author: "Jayadeva Goswami",
            category: "Songs",
            reference_url: "https://vsnectar.web.app/home/songs/Pralaya%20Payodhi%20Jale_Songs%20of%20Vaishnava%20Acaryas_3_1",
            verses: [
                {
                    id: 1,
                    lyric: "ପ୍ରଳୟ-ପୟୋଧି-ଜଳେ ଧୃତବାନ୍ ଅସି ବେଦମ୍ ।\nବିହିତ-ବହିତ୍ର-ଚରିତ୍ରମ୍ ଅଖେଦମ୍ ।\nକେଶବ ଧୃତ-ମୀନ-ଶରୀର ଜୟ ଜଗଦୀଶ ହରେ ॥ ୧ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ ମତ୍ସ୍ୟରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! ପ୍ରଳୟକାଳୀନ ମହାସମୁଦ୍ରର ଅଥଳ ଜଳରାଶି ମଧ୍ୟରେ ନିମଗ୍ନ ହୋଇଯାଇଥିବା ବେଦରାଶିକୁ ରକ୍ଷା କରିବା ପାଇଁ ଆପଣ ଅତି ଅନାୟାସରେ ଏକ ନୌକା ସଦୃଶ କାର୍ଯ୍ୟ କରି ବେଦସମୂହର ଉଦ୍ଧାର କରିଥିଲେ।",
                    wordMeanings: [
                        {
                            word: "ପ୍ରଳୟ-ପୟୋଧି-ଜଳେ",
                            meaning: "ପ୍ରଳୟକାଳୀନ ମହାସମୁଦ୍ରର ଜଳରାଶି ମଧ୍ୟରେ"
                        },
                        {
                            word: "ଧୃତବାନ୍ ଅସି",
                            meaning: "ଆପଣ ଧାରଣ ତଥା ରକ୍ଷା କରିଥିଲେ"
                        },
                        {
                            word: "ବେଦମ୍",
                            meaning: "ସମସ୍ତ ବେଦରାଶିକୁ"
                        },
                        {
                            word: "ବିହିତ-ବହିତ୍ର-ଚରିତ୍ରମ୍",
                            meaning: "ନୌକା (ଜାହାଜ) ଭଳି ଆଚରଣ କରି"
                        },
                        {
                            word: "ଅଖେଦମ୍",
                            meaning: "ବିନା କୌଣସି ପରିଶ୍ରମ ବା କ୍ଳେଶରେ, ଅନାୟାସରେ"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ (ସୁନ୍ଦର କେଶଯୁକ୍ତ ପ୍ରଭୁ ଶ୍ରୀକୃଷ୍ଣ)"
                        },
                        {
                            word: "ଧୃତ-ମୀନ-ଶରୀର",
                            meaning: "ଦିବ୍ୟ ମତ୍ସ୍ୟ ରୂପ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ଜୟ",
                            meaning: "ଆପଣଙ୍କର ଜୟଜୟକାର ହେଉ"
                        },
                        {
                            word: "ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ସମଗ୍ର ଜଗତର ନାଥ! ସର୍ବ ଦୁଃଖହାରୀ ଶ୍ରୀହରି!"
                        }
                    ]
                },
                {
                    id: 2,
                    lyric: "କ୍ଷିତିର୍ ଇହ ବିପୁଳତରେ ତିଷ୍ଠତି ତବ ପୃଷ୍ଠେ ।\nଧରଣି-ଧାରଣ-କିଣ-ଚକ୍ର-ଗରିଷ୍ଠେ ।\nକେଶବ ଧୃତ-କୂର୍ମ-ଶରୀର ଜୟ ଜଗଦୀଶ ହରେ ॥ ୨ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ କଚ୍ଛପ (କୂର୍ମ) ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! କ୍ଷୀରସମୁଦ୍ର ମନ୍ଥନ ସମୟରେ ବିଶାଳ ମନ୍ଦର ପର୍ବତକୁ ସ୍ଥିର ରଖିବା ପାଇଁ ଏହି ପୃଥିବୀ ତଥା ମନ୍ଦରାଚଳ ଆପଣଙ୍କର ବିଶାଳ ପୃଷ୍ଠଦେଶ (ପିଠି) ଉପରେ ଅବସ୍ଥାନ କରିଥିଲା। ସେହି ବିଶାଳ ପର୍ବତକୁ ଧାରଣ କରି ଘର୍ଷଣ ହେବା ଯୋଗୁଁ ଆପଣଙ୍କ ପୃଷ୍ଠଭାଗରେ ଯେଉଁ ଗୋଲାକାର ଚିହ୍ନ (କିଣ) ସୃଷ୍ଟି ହୋଇଛି, ତାହା ଅତ୍ୟନ୍ତ ମହିମାମଣ୍ଡିତ ଓ ଗୌରବମୟ ପ୍ରତୀତ ହେଉଛି।",
                    wordMeanings: [
                        {
                            word: "କ୍ଷିତିଃ",
                            meaning: "ପୃଥିବୀ (ତଥା ମନ୍ଦର ପର୍ବତ)"
                        },
                        {
                            word: "ଇହ",
                            meaning: "ଏଠାରେ, ଏହି ସଂସାରରେ"
                        },
                        {
                            word: "ବିପୁଳତରେ",
                            meaning: "ଅତ୍ୟନ୍ତ ବିଶାଳ ଓ ପ୍ରଶସ୍ତ"
                        },
                        {
                            word: "ତିଷ୍ଠତି",
                            meaning: "ଅବସ୍ଥାନ କରୁଛି"
                        },
                        {
                            word: "ତବ ପୃଷ୍ଠେ",
                            meaning: "ଆପଣଙ୍କ ପିଠି ଉପରେ"
                        },
                        {
                            word: "ଧରଣି-ଧାରଣ",
                            meaning: "ପୃଥିବୀ ଓ ମନ୍ଦର ପର୍ବତକୁ ଧାରଣ କରିବା ଦ୍ୱାରା"
                        },
                        {
                            word: "କିଣ-ଚକ୍ର",
                            meaning: "ଘର୍ଷଣଜନିତ ଗୋଲାକାର ଚିହ୍ନସମୂହ ଦ୍ୱାରା"
                        },
                        {
                            word: "ଗରିଷ୍ଠେ",
                            meaning: "ଅତ୍ୟନ୍ତ ମହିମାନ୍ୱିତ ତଥା ଗୌରବପୂର୍ଣ୍ଣ"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-କୂର୍ମ-ଶରୀର",
                            meaning: "ଦିବ୍ୟ କୂର୍ମ (କଇଁଛ) ରୂପ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ଜଗନ୍ନାଥ ଶ୍ରୀହରି! ଆପଣଙ୍କର ସର୍ବଦା ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 3,
                    lyric: "ବସତି ଦଶନ-ଶିଖରେ ଧରଣୀ ତବ ଲଗ୍ନା ।\nଶଶିନି କଳଙ୍କ-କଳେବ ନିମଗ୍ନା ।\nକେଶବ ଧୃତ-ଶୂକର-ରୂପ ଜୟ ଜଗଦୀଶ ହରେ ॥ ୩ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ ବରାହ (ଶୂକର) ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! ଗର୍ଭୋଦକ ସମୁଦ୍ର ମଧ୍ୟରେ ନିମଗ୍ନ ହୋଇଯାଇଥିବା ଧରିତ୍ରୀ ଦେବୀ ଆପଣଙ୍କ ତୀକ୍ଷ୍ଣ ଦନ୍ତାଗ୍ର (ଦାନ୍ତର ଅଗ୍ରଭାଗ) ଉପରେ ସ୍ଥିର ଭାବରେ ବିରାଜମାନ କରୁଛନ୍ତି। ସେତେବେଳେ ସେହି ଦୃଶ୍ୟ ପୂର୍ଣ୍ଣିମା ଚନ୍ଦ୍ରମାଙ୍କ ଶରୀରରେ ଲାଗିରହିଥିବା ସୁନ୍ଦର କଳଙ୍କ ରେଖା ଭଳି ଅତ୍ୟନ୍ତ ଶୋଭା ପାଉଥିଲା।",
                    wordMeanings: [
                        {
                            word: "ବସତି",
                            meaning: "ବାସ କରୁଛି, ଶୋଭା ପାଉଛି"
                        },
                        {
                            word: "ଦଶନ-ଶିଖରେ",
                            meaning: "ଆପଣଙ୍କ ଦାନ୍ତର ଅଗ୍ରଭାଗରେ"
                        },
                        {
                            word: "ଧରଣୀ",
                            meaning: "ସମଗ୍ର ପୃଥିବୀ"
                        },
                        {
                            word: "ତବ ଲଗ୍ନା",
                            meaning: "ଆପଣଙ୍କ ଦାନ୍ତ ସହିତ ସଂଲଗ୍ନ ହୋଇ"
                        },
                        {
                            word: "ଶଶିନି",
                            meaning: "ଚନ୍ଦ୍ରମାଙ୍କ ଶରୀରରେ"
                        },
                        {
                            word: "କଳଙ୍କ-କଳା ଇବ",
                            meaning: "କଳଙ୍କ ଚିହ୍ନର ରେଖା ସଦୃଶ"
                        },
                        {
                            word: "ନିମଗ୍ନା",
                            meaning: "ପ୍ରଳୟ ସମୁଦ୍ରରେ ବୁଡ଼ି ରହିଥିବା"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-ଶୂକର-ରୂପ",
                            meaning: "ଦିବ୍ୟ ବରାହ (ଶୂକର) ରୂପ ଧାରଣକାରୀ"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ଜଗତର ପ୍ରଭୁ ଶ୍ରୀହରି, ଆପଣଙ୍କର ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 4,
                    lyric: "ତବ କର-କମଳ-ବରେ ନଖମ୍ ଅଦ୍ଭୁତ-ଶୃଙ୍ଗମ୍ ।\nଦଳିତ-ହିରଣ୍ୟକଶିପୁ-ତନୁ-ଭୃଙ୍ଗମ୍ ।\nକେଶବ ଧୃତ-ନରହରି-ରୂପ ଜୟ ଜଗଦୀଶ ହରେ ॥ ୪ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ ନୃସିଂହ (ନରହରି) ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! ଯେପରି କେହି ନିଜ କୋମଳ ହସ୍ତର ଆଙ୍ଗୁଳିରେ ଏକ ଭ୍ରମରକୁ ଅନାୟାସରେ ବିଦଳିତ କରିଦିଏ, ଠିକ୍ ସେହିପରି ଆପଣଙ୍କର ସୁନ୍ଦର କରକମଳରେ ବିରାଜିତ ଅଦ୍ଭୁତ ତୀକ୍ଷ୍ଣ ନଖସମୂହ ଦ୍ୱାରା ଦୈତ୍ୟରାଜ ହିରଣ୍ୟକଶିପୁର ଶରୀରରୂପୀ ଭ୍ରମରକୁ ଆପଣ ଚିରି ବିଦୀର୍ଣ୍ଣ କରିଦେଇଥିଲେ।",
                    wordMeanings: [
                        {
                            word: "ତବ",
                            meaning: "ଆପଣଙ୍କର"
                        },
                        {
                            word: "କର-କମଳ-ବରେ",
                            meaning: "ଶ୍ରେଷ୍ଠ କରପଦ୍ମରେ"
                        },
                        {
                            word: "ନଖମ୍",
                            meaning: "ଦିବ୍ୟ ନଖସମୂହ"
                        },
                        {
                            word: "ଅଦ୍ଭୁତ-ଶୃଙ୍ଗମ୍",
                            meaning: "ଅଦ୍ଭୁତ ଓ ଅତ୍ୟନ୍ତ ତୀକ୍ଷ୍ଣ ଶୃଙ୍ଗ ସଦୃଶ"
                        },
                        {
                            word: "ଦଳିତ",
                            meaning: "ବିଦୀର୍ଣ୍ଣ ହୋଇଥିବା"
                        },
                        {
                            word: "ହିରଣ୍ୟକଶିପୁ-ତନୁ-ଭୃଙ୍ଗମ୍",
                            meaning: "ହିରଣ୍ୟକଶିପୁର ଶରୀର ରୂପୀ କଳା ଭ୍ରମର"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-ନରହରି-ରୂପ",
                            meaning: "ଅର୍ଦ୍ଧ-ମାନବ ଓ ଅର୍ଦ୍ଧ-ସିଂହ (ନୃସିଂହ) ରୂପ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ସମଗ୍ର ଜଗତର ନାଥ ଶ୍ରୀହରି! ଆପଣଙ୍କର ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 5,
                    lyric: "ଛଳୟସି ବିକ୍ରମଣେ ବଳିମ୍ ଅଦ୍ଭୁତ-ବାମନ ।\nପଦ-ନଖ-ନୀର-ଜନିତ-ଜନ-ପାବନ ।\nକେଶବ ଧୃତ-ବାମନ-ରୂପ ଜୟ ଜଗଦୀଶ ହରେ ॥ ୫ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ ଅଦ୍ଭୁତ ବାମନ ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! ଆପଣ ନିଜର ବିଶାଳ ପାଦବିକ୍ଷେପ (ତ୍ରିବିକ୍ରମ ରୂପ) ଦ୍ୱାରା ଦାନବରାଜ ବଳିଙ୍କୁ କୌଶଳରେ ଛଳନା କରି ତିନିଲୋକ ଅଧିକାର କରିନେଲେ। ଆପଣଙ୍କ ଶ୍ରୀଚରଣର ନଖାଗ୍ରରୁ ନିର୍ଗତ ପବିତ୍ର ଜଳରାଶି (ଶ୍ରୀ ଗଙ୍ଗାଜଳ) ସମଗ୍ର ଜଗତର ଜୀବମାନଙ୍କୁ ପବିତ୍ର କରିଦେଇଛି।",
                    wordMeanings: [
                        {
                            word: "ଛଳୟସି",
                            meaning: "ଆପଣ କୌଶଳପୂର୍ଣ୍ଣ ଛଳନା କରିଥିଲେ"
                        },
                        {
                            word: "ବିକ୍ରମଣେ",
                            meaning: "ପାଦ ବିସ୍ତାର କରିବା ଦ୍ୱାରା (ତ୍ରିବିକ୍ରମ ପଦକ୍ଷେପରେ)"
                        },
                        {
                            word: "ବଳିମ୍",
                            meaning: "ଦାନବରାଜ ବଳି ମହାରାଜାଙ୍କୁ"
                        },
                        {
                            word: "ଅଦ୍ଭୁତ-ବାମନ",
                            meaning: "ହେ ପରମ ଆଶ୍ଚର୍ଯ୍ୟଜନକ ବାମନଦେବ!"
                        },
                        {
                            word: "ପଦ-ନଖ-ନୀର",
                            meaning: "ଚରଣକମଳର ନଖସ୍ପର୍ଶରୁ ଉତ୍ପନ୍ନ ଜଳ (ଶ୍ରୀ ଗଙ୍ଗା)"
                        },
                        {
                            word: "ଜନିତ",
                            meaning: "ପ୍ରକଟିତ ହୋଇ"
                        },
                        {
                            word: "ଜନ-ପାବନ",
                            meaning: "ସମସ୍ତ ଜୀବସମୂହଙ୍କୁ ପରମ ପବିତ୍ର କରୁଥିବା"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-ବାମନ-ରୂପ",
                            meaning: "ଦିବ୍ୟ କ୍ଷୁଦ୍ର ବ୍ରାହ୍ମଣ ବାମନ ରୂପ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ଜଗନ୍ନାଥ ଶ୍ରୀହରି! ଆପଣଙ୍କର ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 6,
                    lyric: "କ୍ଷତ୍ରିୟ-ରୁଧିର-ମୟେ ଜଗଦ୍-ଅପଗତ-ପାପମ୍ ।\nସ୍ନାପୟସି ପୟସି ଶମିତ-ଭବ-ତାପମ୍ ।\nକେଶବ ଧୃତ-ଭୃଗୁପତି-ରୂପ ଜୟ ଜଗଦୀଶ ହରେ ॥ ୬ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ ଭୃଗୁପତି ଶ୍ରୀ ପରଶୁରାମ ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! କୁରୁକ୍ଷେତ୍ରର ସ୍ୟମନ୍ତପଞ୍ଚକ ତୀର୍ଥରେ ଅତ୍ୟାଚାରୀ କ୍ଷତ୍ରିୟମାନଙ୍କ ରକ୍ତରେ ସମୁଦ୍ର ସୃଷ୍ଟି କରି ଆପଣ ପୃଥିବୀକୁ ସ୍ନାନ କରାଇଥିଲେ; ଯାହାଦ୍ୱାରା ସମଗ୍ର ଜଗତ ପାପମୁକ୍ତ ହୋଇଗଲା ଏବଂ ଜୀବମାନଙ୍କର ସଂସାରଜନିତ ତ୍ରିବିଧ ତାପ ପ୍ରଶମିତ ହୋଇଗଲା।",
                    wordMeanings: [
                        {
                            word: "କ୍ଷତ୍ରିୟ-ରୁଧିର-ମୟେ",
                            meaning: "ଦୁଷ୍ଟ କ୍ଷତ୍ରିୟମାନଙ୍କର ରକ୍ତପୂର୍ଣ୍ଣ"
                        },
                        {
                            word: "ଜଗତ୍",
                            meaning: "ସମଗ୍ର ବିଶ୍ୱ"
                        },
                        {
                            word: "ଅପଗତ-ପାପମ୍",
                            meaning: "ପାପମୁକ୍ତ ହୋଇଯାଇଥିବା"
                        },
                        {
                            word: "ସ୍ନାପୟସି",
                            meaning: "ଆପଣ ସ୍ନାନ କରାଉଛନ୍ତି"
                        },
                        {
                            word: "ପୟସି",
                            meaning: "ଜଳ ବା ରକ୍ତରୂପୀ ଜଳରାଶିରେ"
                        },
                        {
                            word: "ଶମିତ-ଭବ-ତାପମ୍",
                            meaning: "ସାଂସାରିକ ତ୍ରିବିଧ ତାପ ଶାନ୍ତ ହୋଇଯାଇଥିବା"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-ଭୃଗୁପତି-ରୂପ",
                            meaning: "ଭୃଗୁବଂଶଶ୍ରେଷ୍ଠ ଶ୍ରୀ ପରଶୁରାମ ରୂପ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ଜଗଦୀଶ୍ୱର ଶ୍ରୀହରି! ଆପଣଙ୍କର ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 7,
                    lyric: "ବିତରସି ଦିକ୍ଷୁ ରଣେ ଦିକ୍-ପତି-କମନୀୟମ୍ ।\nଦଶ-ମୁଖ-ମୌଳି-ବଳିମ୍ ରମଣୀୟମ୍ ।\nକେଶବ ଧୃତ-ରାମ-ଶରୀର ଜୟ ଜଗଦୀଶ ହରେ ॥ ୭ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ ଶ୍ରୀ ରାମଚନ୍ଦ୍ର ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! ଲଙ୍କାର ମହାଯୁଦ୍ଧରେ ଆପଣ ଦୁଷ୍ଟ ଦଶାନନ ରାବଣର ଦଶଗୋଟି ମସ୍ତକକୁ ଛେଦନ କରି ଦଶଦିଗପାଳମାନଙ୍କର ଅଭିଳାଷ ଅନୁସାରେ ତାହାକୁ ଏକ ମନୋରମ ବଳି ରୂପେ ଦଶଦିଗକୁ ପ୍ରଦାନ କରିଥିଲେ। ସେହି ଦିଗପାଳମାନେ ବହୁଦିନ ଧରି ଏହି ଶୁଭ ମୁହୂର୍ତ୍ତକୁ ଆକାଂକ୍ଷା କରୁଥିଲେ।",
                    wordMeanings: [
                        {
                            word: "ବିତରସି",
                            meaning: "ଆପଣ ବିତରଣ ବା ଅର୍ପଣ କରୁଛନ୍ତି"
                        },
                        {
                            word: "ଦିକ୍ଷୁ",
                            meaning: "ସମସ୍ତ ଦଶଦିଗରେ"
                        },
                        {
                            word: "ରଣେ",
                            meaning: "ଯୁଦ୍ଧ କ୍ଷେତ୍ରରେ"
                        },
                        {
                            word: "ଦିକ୍-ପତି-କମନୀୟମ୍",
                            meaning: "ଦଶଦିଗର ଦିଗପାଳମାନଙ୍କ ଦ୍ୱାରା ଅଭିଳଷିତ"
                        },
                        {
                            word: "ଦଶ-ମୁଖ-ମୌଳି",
                            meaning: "ଦଶମୁଣ୍ଡିଆ ରାବଣର କଟା ମସ୍ତକସମୂହ"
                        },
                        {
                            word: "ବଳିମ୍",
                            meaning: "ପୂଜାର ଉପହାର ବା ବଳିସ୍ୱରୂପ"
                        },
                        {
                            word: "ରମଣୀୟମ୍",
                            meaning: "ଅତ୍ୟନ୍ତ ମନୋରମ ଓ ଆନନ୍ଦଦାୟକ"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-ରାମ-ଶରୀର",
                            meaning: "ଦିବ୍ୟ ଶ୍ରୀରାମଚନ୍ଦ୍ର ରୂପ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ଜଗନ୍ନାଥ ଶ୍ରୀହରି! ଆପଣଙ୍କର ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 8,
                    lyric: "ବହସି ବପୁଷି ବିଶଦେ ବସନମ୍ ଜଳଦାଭମ୍ ।\nହଳ-ହତି-ଭୀତି-ମିଳିତ-ଯମୁନାଭମ୍ ।\nକେଶବ ଧୃତ-ହଳଧର-ରୂପ ଜୟ ଜଗଦୀଶ ହରେ ॥ ୮ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ ବଳରାମ (ହଳଧର) ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! ଆପଣ ନିଜର ଶୁଭ୍ର କାନ୍ତିମୟ ଶରୀରରେ ନବୀନ ମେଘ ସଦୃଶ ନୀଳବର୍ଣ୍ଣର ବସ୍ତ୍ର ପରିଧାନ କରିଛନ୍ତି। ଆପଣଙ୍କ ହଳର ପ୍ରହାର ଭୟରେ ଯମୁନା ନଦୀ ଆପଣଙ୍କ ଶରଣାପନ୍ନ ହୋଇ ଯେଉଁ ନୀଳବର୍ଣ୍ଣ ଜଳରାଶି ଧାରଣ କରିଥିଲେ, ସେହି ରଙ୍ଗ ଆପଣଙ୍କ ନୀଳବସ୍ତ୍ର ସହିତ ଏକାକାର ହୋଇ ଅପୂର୍ବ ଶୋଭା ପାଉଛି।",
                    wordMeanings: [
                        {
                            word: "ବହସି",
                            meaning: "ଆପଣ ଧାରଣ କରିଛନ୍ତି"
                        },
                        {
                            word: "ବପୁଷି ବିଶଦେ",
                            meaning: "ନିର୍ମଳ ଶ୍ୱେତକାନ୍ତିମୟ ଦିବ୍ୟ ଶରୀରରେ"
                        },
                        {
                            word: "ବସନମ୍",
                            meaning: "ପରିଧାନ ବସ୍ତ୍ର"
                        },
                        {
                            word: "ଜଳଦ-ଆଭମ୍",
                            meaning: "ନବଘନ ମେଘର ଶ୍ୟାମଳ ଆଭା ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ହଳ-ହତି-ଭୀତି",
                            meaning: "ହଳର ପ୍ରହାର ଭୟରେ"
                        },
                        {
                            word: "ମିଳିତ-ଯମୁନା-ଆଭମ୍",
                            meaning: "ମିଳିତ ହୋଇଥିବା ଯମୁନାଙ୍କ ନୀଳ ଜଳ ସଦୃଶ"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-ହଳଧର-ରୂପ",
                            meaning: "ହଳଧର ବଳରାମ ରୂପ ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ଜଗଦୀଶ୍ୱର ଶ୍ରୀହରି! ଆପଣଙ୍କର ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 9,
                    lyric: "ନିନ୍ଦସି ଯଜ୍ଞ-ବିଧେର୍ ଅହହ ଶ୍ରୁତି-ଜାତମ୍ ।\nସଦୟ-ହୃଦୟ ଦର୍ଶିତ-ପଶୁ-ଘାତମ୍ ।\nକେଶବ ଧୃତ-ବୁଦ୍ଧ-ଶରୀର ଜୟ ଜଗଦୀଶ ହରେ ॥ ୯ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ ବୁଦ୍ଧଦେବ ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! ବେଦର ବିଧିକୁ ଅପବ୍ୟାଖ୍ୟା କରି ଯଜ୍ଞ ନାମରେ ନିରୀହ ପଶୁମାନଙ୍କର ଯେଉଁ ନିଷ୍ଠୁର ହତ୍ୟା କରାଯାଉଥିଲା, ତାହା ଦେଖି ଆପଣଙ୍କର ପରମ କରୁଣାମୟ ହୃଦୟ ବିଗଳିତ ହୋଇଉଠିଲା ଏବଂ ଅହିଂସା ପ୍ରତିଷ୍ଠା ପାଇଁ ଆପଣ ସେହି ପଶୁବଳି ଯଜ୍ଞବିଧିକୁ ନିନ୍ଦା ଓ ପ୍ରତ୍ୟାଖ୍ୟାନ କରିଥିଲେ।",
                    wordMeanings: [
                        {
                            word: "ନିନ୍ଦସି",
                            meaning: "ଆପଣ ନିନ୍ଦା ତଥା ଖଣ୍ଡନ କରୁଛନ୍ତି"
                        },
                        {
                            word: "ଯଜ୍ଞ-ବିଧେଃ",
                            meaning: "ଯଜ୍ଞର ବିଧିବିଧାନକୁ"
                        },
                        {
                            word: "ଅହହ",
                            meaning: "ହାୟ! କି କଷ୍ଟଦାୟକ!"
                        },
                        {
                            word: "ଶ୍ରୁତି-ଜାତମ୍",
                            meaning: "ବେଦରେ ଉଲ୍ଲେଖ ଥିବା ବୋଲି ପ୍ରଚାରିତ"
                        },
                        {
                            word: "ସଦୟ-ହୃଦୟ",
                            meaning: "ପରମ ଦୟାଳୁ ଓ କରୁଣାପୂର୍ଣ୍ଣ ହୃଦୟ ବିଶିଷ୍ଟ"
                        },
                        {
                            word: "ଦର୍ଶିତ-ପଶୁ-ଘାତମ୍",
                            meaning: "ନିରୀହ ପଶୁମାନଙ୍କର ହତ୍ୟା ଦେଖି"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-ବୁଦ୍ଧ-ଶରୀର",
                            meaning: "ଦିବ୍ୟ ଭଗବାନ ବୁଦ୍ଧଦେବଙ୍କ ରୂପ ଧାରଣକାରୀ"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ଜଗନ୍ନାଥ ଶ୍ରୀହରି! ଆପଣଙ୍କର ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 10,
                    lyric: "ମ୍ଳେଚ୍ଛ-ନିବହ-ନିଧନେ କଳୟସି କରବାଳମ୍ ।\nଧୂମକେତୁମ୍ ଇବ କିମ୍ ଅପି କରାଳମ୍ ।\nକେଶବ ଧୃତ-କଳ୍କି-ଶରୀର ଜୟ ଜଗଦୀଶ ହରେ ॥ ୧୦ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ କଳ୍କି ରୂପ ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! କଳିଯୁଗର ଅନ୍ତ ସମୟରେ ଧର୍ମହୀନ, ଅନାଚାରୀ ଓ ଦୁଷ୍ଟ ମ୍ଳେଚ୍ଛମାନଙ୍କୁ ବିନାଶ କରିବା ପାଇଁ ଆପଣ ଧୂମକେତୁ ସଦୃଶ ଅତ୍ୟନ୍ତ ଭୟଙ୍କର ଓ ତେଜୋମୟ ତରବାରୀ ନିଜ ହସ୍ତରେ ଧାରଣ କରନ୍ତି ଏବଂ ସତ୍ୟଯୁଗର ପୁନଃ ପ୍ରତିଷ୍ଠା କରନ୍ତି।",
                    wordMeanings: [
                        {
                            word: "ମ୍ଳେଚ୍ଛ-ନିବହ",
                            meaning: "ଅଧର୍ମୀ ଓ ଦୁଷ୍ଟ ମ୍ଳେଚ୍ଛମାନଙ୍କର ସମୂହକୁ"
                        },
                        {
                            word: "ନିଧନେ",
                            meaning: "ସମ୍ପୂର୍ଣ୍ଣ ବିନାଶ କରିବା ନିମନ୍ତେ"
                        },
                        {
                            word: "କଳୟସି",
                            meaning: "ଆପଣ ଧାରଣ କରୁଛନ୍ତି"
                        },
                        {
                            word: "କରବାଳମ୍",
                            meaning: "ତୀକ୍ଷ୍ଣ ତରବାରୀ"
                        },
                        {
                            word: "ଧୂମକେତୁମ୍ ଇବ",
                            meaning: "ଉଲ୍କାପାତ ବା ଧୂମକେତୁ ସଦୃଶ"
                        },
                        {
                            word: "କିମ୍ ଅପି କରାଳମ୍",
                            meaning: "ଅତ୍ୟନ୍ତ ଭୟାନକ ଓ କରାଳ ରୂପବିଶିଷ୍ଟ"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-କଳ୍କି-ଶରୀର",
                            meaning: "ଦିବ୍ୟ କଳ୍କି ଅବତାର ରୂପ ଧାରଣକାରୀ"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ଜଗତର ନାଥ ଶ୍ରୀହରି! ଆପଣଙ୍କର ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 11,
                    lyric: "ଶ୍ରୀ-ଜୟଦେବ-କବେର୍ ଇଦମ୍ ଉଦିତମ୍ ଉଦାରମ୍ ।\nଶୃଣୁ ସୁଖ-ଦମ୍ ଶୁଭ-ଦମ୍ ଭବ-ସାରମ୍ ।\nକେଶବ ଧୃତ-ଦଶ-ବିଧ-ରୂପ ଜୟ ଜଗଦୀଶ ହରେ ॥ ୧୧ ॥",
                    translation: "ହେ କେଶବ! ହେ ଜଗଦୀଶ ହରେ! ହେ ଦଶବିଧ ଦିବ୍ୟ ଅବତାର ଧାରଣ କରିଥିବା ପ୍ରଭୁ! ଆପଣଙ୍କର ଜୟ ହେଉ! କବିକୁଳଚୂଡ଼ାମଣି ଶ୍ରୀ ଜୟଦେବ ଗୋସ୍ୱାମୀଙ୍କ ଦ୍ୱାରା ରଚିତ ଏହି ପରମ ଉଦାର ଓ ମହିମାମୟ ସ୍ତୁତିକୁ ହେ ଭକ୍ତଜନଗଣ, ଆପଣମାନେ ଶ୍ରବଣ କରନ୍ତୁ! ଏହା ସମସ୍ତଙ୍କୁ ଅପାର ଆନନ୍ଦ ଓ ସୁଖ ପ୍ରଦାନକାରୀ, ସକଳ ପ୍ରକାର ମଙ୍ଗଳ ବିଧାନକାରୀ ଏବଂ ଏହି ସଂସାରର ସର୍ବଶ୍ରେଷ୍ଠ ପରମ ସାରତତ୍ତ୍ୱ ଅଟେ।",
                    wordMeanings: [
                        {
                            word: "ଶ୍ରୀ-ଜୟଦେବ-କବେଃ",
                            meaning: "ପରମ ଭକ୍ତ କବି ଶ୍ରୀ ଜୟଦେବ ଗୋସ୍ୱାମୀଙ୍କର"
                        },
                        {
                            word: "ଇଦମ୍",
                            meaning: "ଏହି ସ୍ତୁତି"
                        },
                        {
                            word: "ଉଦିତମ୍",
                            meaning: "ରଚିତ ବା ପ୍ରକଟିତ"
                        },
                        {
                            word: "ଉଦାରମ୍",
                            meaning: "ଅତ୍ୟନ୍ତ ଉଦାର ଓ ମହିମାମଣ୍ଡିତ"
                        },
                        {
                            word: "ଶୃଣୁ",
                            meaning: "ଶ୍ରବଣ କରନ୍ତୁ"
                        },
                        {
                            word: "ସୁଖ-ଦମ୍",
                            meaning: "ପରମ ଆନନ୍ଦ ଓ ସୁଖ ପ୍ରଦାନକାରୀ"
                        },
                        {
                            word: "ଶୁଭ-ଦମ୍",
                            meaning: "ସକଳ ଶୁଭ ଓ ମଙ୍ଗଳ ପ୍ରଦାୟକ"
                        },
                        {
                            word: "ଭବ-ସାରମ୍",
                            meaning: "ଏହି ଭବସଂସାରର ସର୍ବଶ୍ରେଷ୍ଠ ସାର ତତ୍ତ୍ୱ"
                        },
                        {
                            word: "କେଶବ",
                            meaning: "ହେ କେଶବ!"
                        },
                        {
                            word: "ଧୃତ-ଦଶ-ବିଧ-ରୂପ",
                            meaning: "ଦଶଗୋଟି ଦିବ୍ୟ ଅବତାର ଧାରଣ କରିଥିବା"
                        },
                        {
                            word: "ଜୟ ଜଗଦୀଶ ହରେ",
                            meaning: "ହେ ଜଗନ୍ନାଥ ଶ୍ରୀହରି! ଆପଣଙ୍କର ଜୟ ହେଉ!"
                        }
                    ]
                },
                {
                    id: 12,
                    lyric: "ବେଦାନ୍ ଉଦ୍ଧରତେ ଜଗନ୍ତି ବହତେ ଭୂ-ଗୋଳମ୍ ଉଦ୍ବିଭ୍ରତେ\nଦୈତ୍ୟମ୍ ଦାରୟତେ ବଳିମ୍ ଛଳୟତେ କ୍ଷତ୍ର-କ୍ଷୟମ୍ କୁର୍ବତେ ।\nପୌଲସ୍ତ୍ୟମ୍ ଜୟତେ ହଳମ୍ କଳୟତେ କାରୁଣ୍ୟମ୍ ଆତନ୍ୱତେ\nମ୍ଳେଚ୍ଛାନ୍ ମୂର୍ଚ୍ଛୟତେ ଦଶାକୃତି-କୃତେ କୃଷ୍ଣାୟ ତୁଭ୍ୟମ୍ ନମଃ ॥ ୧୨ ॥",
                    translation: "ଯିଏ ବେଦସମୂହର ଉଦ୍ଧାର କରନ୍ତି (ମତ୍ସ୍ୟ), ଯିଏ ପୃଷ୍ଠଦେଶରେ ବିଶ୍ୱବ୍ରହ୍ମାଣ୍ଡକୁ ଧାରଣ କରନ୍ତି (କୂର୍ମ), ଯିଏ ଭୂଗୋଳକୁ ନିଜ ଦନ୍ତାଗ୍ରରେ ଉତ୍ତୋଳନ କରନ୍ତି (ବରାହ), ଯିଏ ଦୈତ୍ୟରାଜ ହିରଣ୍ୟକଶିପୁର ବକ୍ଷ ବିଦୀର୍ଣ୍ଣ କରନ୍ତି (ନୃସିଂହ), ଯିଏ ବଳି ମହାରାଜାଙ୍କୁ ଛଳନା କରି ତିନିଲୋକ ଅଧିକାର କରନ୍ତି (ବାମନ), ଯିଏ ଦୁଷ୍ଟ କ୍ଷତ୍ରିୟମାନଙ୍କୁ ବିନାଶ କରନ୍ତି (ପରଶୁରାମ), ଯିଏ ପୁଲସ୍ତ୍ୟନନ୍ଦନ ରାବଣକୁ ପରାସ୍ତ କରନ୍ତି (ରାମଚନ୍ଦ୍ର), ଯିଏ କୃଷି ଓ ନ୍ୟାୟର ପ୍ରତୀକ ହଳ ଧାରଣ କରନ୍ତି (ବଳରାମ), ଯିଏ ସକଳ ଜୀବଙ୍କ ପ୍ରତି କରୁଣା ବିସ୍ତାର କରନ୍ତି (ବୁଦ୍ଧ), ଏବଂ ଯିଏ ଦୁରାଚାରୀ ମ୍ଳେଚ୍ଛମାନଙ୍କୁ ବିନାଶ କରନ୍ତି (କଳ୍କି) — ସେହି ଦଶଗୋଟି ଦିବ୍ୟ ରୂପ ଧାରଣ କରିଥିବା ସ୍ୱୟଂ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ମୁଁ ବାରମ୍ବାର ପ୍ରଣାମ କରୁଛି।",
                    wordMeanings: [
                        {
                            word: "ବେଦାନ୍ ଉଦ୍ଧରତେ",
                            meaning: "ବେଦରାଶିର ଉଦ୍ଧାରକର୍ତ୍ତାଙ୍କୁ (ମତ୍ସ୍ୟ)"
                        },
                        {
                            word: "ଜଗନ୍ତି ବହତେ",
                            meaning: "ସମଗ୍ର ଜଗତକୁ ପିଠିରେ ଧାରଣ କରୁଥିବା (କୂର୍ମ)"
                        },
                        {
                            word: "ଭୂ-ଗୋଳମ୍ ଉଦ୍ବିଭ୍ରତେ",
                            meaning: "ପୃଥିବୀକୁ ଦନ୍ତାଗ୍ରରେ ଉଠାଉଥିବା (ବରାହ)"
                        },
                        {
                            word: "ଦୈତ୍ୟମ୍ ଦାରୟତେ",
                            meaning: "ହିରଣ୍ୟକଶିପୁ ଦୈତ୍ୟକୁ ବିଦୀର୍ଣ୍ଣ କରୁଥିବା (ନୃସିଂହ)"
                        },
                        {
                            word: "ବଳିମ୍ ଛଳୟତେ",
                            meaning: "ବଳି ମହାରାଜାଙ୍କୁ ଛଳନା କରୁଥିବା (ବାମନ)"
                        },
                        {
                            word: "କ୍ଷତ୍ର-କ୍ଷୟମ୍ କୁର୍ବତେ",
                            meaning: "ଅଧର୍ମୀ କ୍ଷତ୍ରିୟମାନଙ୍କୁ ବିନାଶ କରୁଥିବା (ପରଶୁରାମ)"
                        },
                        {
                            word: "ପୌଲସ୍ତ୍ୟମ୍ ଜୟତେ",
                            meaning: "ପୁଲସ୍ତ୍ୟବଂଶୀ ରାବଣକୁ ଜୟ କରୁଥିବା (ରାମଚନ୍ଦ୍ର)"
                        },
                        {
                            word: "ହଳମ୍ କଳୟତେ",
                            meaning: "ଦିବ୍ୟ ହଳ ଧାରଣ କରୁଥିବା (ବଳରାମ)"
                        },
                        {
                            word: "କାରୁଣ୍ୟମ୍ ଆତନ୍ୱତେ",
                            meaning: "କରୁଣା ଓ ଅହିଂସା ବିସ୍ତାର କରୁଥିବା (ବୁଦ୍ଧ)"
                        },
                        {
                            word: "ମ୍ଳେଚ୍ଛାନ୍ ମୂର୍ଚ୍ଛୟତେ",
                            meaning: "ଦୁଷ୍ଟ ମ୍ଳେଚ୍ଛମାନଙ୍କୁ ବିନଷ୍ଟ କରୁଥିବା (କଳ୍କି)"
                        },
                        {
                            word: "ଦଶ-ଆକୃତି-କୃତେ",
                            meaning: "ଦଶଗୋଟି ଦିବ୍ୟ ଅବତାର ରୂପ ଧାରଣକାରୀ"
                        },
                        {
                            word: "କୃଷ୍ଣାୟ",
                            meaning: "ପରମପୁରୁଷ ସ୍ୱୟଂ ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ"
                        },
                        {
                            word: "ତୁଭ୍ୟମ୍ ନମଃ",
                            meaning: "ଆପଣଙ୍କୁ ମୋର ସର୍ବଦା ପ୍ରଣାମ"
                        }
                    ]
                }
            ]
        },
        published: true,
        verified: true,
        status: "COMPLETED"
    }
];

export const CATEGORIES = ['ସବୁ', 'ଗୀତ', 'କୀର୍ତ୍ତନ', 'ଗୀତା'];
