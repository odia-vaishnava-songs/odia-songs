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
        description: 'ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଦିବ୍ୟ ଯମୁନା କୂଳ ଲୀଳା |',
        structuredContent: (Songs as any).SONG_AMIJAMUNAPULINE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-anadikaramaphale',
        title: 'ଅନାଦି କରମ- ଫଲେ (Anādi Karama Phale)',
        category: 'Songs',
        type: 'html',
        description: 'ସଂସାର ସମୁଦ୍ରରେ ପତିତ ଜୀବର ଉଦ୍ଧାର ପାଇଁ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_ANADIKARAMAPHALE_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_His_Divine_Grace_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3',
        audioVersions: [
            { label: 'Śrīla Prabhupāda', url: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_His_Divine_Grace_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3' },
            { label: 'HG Jai Sachinanadana Prabhu', url: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3' },
            { label: 'HG Sivarama Prabhu', url: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_HG_Sivarama_Prabhu_IDT.mp3' },
            { label: 'HH Suhotra Swami', url: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_HH_Suhotra_Swami_IDT.mp3' },
            { label: 'Odia Recording', url: 'https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2F29%20Anadi%20Karma%20Phale%20P-63.MP3' }
        ],
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-aparadhaphalemama',
        title: 'ଅପରାଧ-ଫଳେ ମମ (Aparādha-phale mama)',
        category: 'Songs',
        type: 'html',
        description: 'ଅପରାଧର ଫଳସ୍ୱରୂପ କଠୋର ହୋଇଥିବା ହୃଦୟ ପାଇଁ ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_APARADHAPHALEMAMA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-tuwapademinotimor',
        title: 'ତୁୟା ପଦେ ଏ ମିନତୀ ମୋର (Tuwā pade e minati mor)',
        category: 'Songs',
        type: 'html',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ଏକ ବିନମ୍ର ନିବେଦନ |',
        structuredContent: (Songs as any).SONG_TUWAPADEMINOTIMOR_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-atmanivedanatuwapade',
        title: 'ଆତ୍ମ-ନିବେଦନ, ତୁୟା ପଦେ କରି’ (Ātma-nivedana, tuwā pade kori’)',
        category: 'Songs',
        type: 'html',
        description: 'ଆତ୍ମସମର୍ପଣ ପରେ ମିଳୁଥିବା ପରମ ଶାନ୍ତି ମହିମା |',
        structuredContent: (Songs as any).SONG_ATMANIVEDANATUWAPADE_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Atma_nivedana_tuya_pade.mp3',
        audioVersions: [
            { label: 'HH Gour Govinda Swami', url: 'https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Atma_nivedana_tuya_pade.mp3' },
            { label: 'HG Jai Sachinanadana Prabhu', url: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Atma_Nivedana_Tuwa_Pade/Atma_Nivedana_Tuwa_Pade_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3' }
        ],
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-sarvasvotomar',
        title: 'ସର୍ବସ୍ୱ ତୋମାର, ଚରଣେ ସଁପିୟା (Sarvasva tomār, caraṇe saḿpiyā)',
        category: 'Songs',
        type: 'html',
        description: 'ଭଗବାନଙ୍କୁ ନିଜର ସର୍ବସ୍ୱ ସମର୍ପଣ କରିବାର ଭାବ |',
        structuredContent: (Songs as any).SONG_SARVASVATOMAR_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    
    
    
    {
        id: 'song-doyalnitai',
        title: 'ଦୟାଲ ନିତାଇ ଚୈତନ୍ୟ (Doyāl Nitāi Caitanya)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଦ୍ୱାରା ରଚିତ ଶ୍ରୀ ଶ୍ରୀ ଗୌର ନିତ୍ୟାନନ୍ଦ ବନ୍ଦନା |',
        structuredContent: (Songs as any).SONG_DOYALNITAICAITANYA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-durlabhamanava',
        title: 'ଦୁର୍ଲ୍ଲଭ ମାନବ ଜନ୍ମ (Durlabha Mānava Janma)',
        category: 'Songs',
        type: 'html',
        description: 'ମନୁଷ୍ୟ ଜନ୍ମର ଦୁର୍ଲ୍ଲଭତା ଏବଂ ଭଗବାନଙ୍କୁ ଭଜିବା ପାଇଁ ଏକ ଚେତାବନୀ |',
        structuredContent: (Songs as any).SONG_DURLABHAMANAVAJANMA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gaygoracand',
        title: 'ଗାୟ ଗୋରାଚାଁଦ ଜୀବେର ତରେ (Gāy Gorācāńda Jīvera Tore)',
        category: 'Songs',
        type: 'html',
        description: 'ପ୍ରଭୁ ଗୌରଚନ୍ଦ୍ରଙ୍କ ଦ୍ୱାରା ସଂକୀର୍ତ୍ତନ ମହିମା ପ୍ରଚାର |',
        structuredContent: (Songs as any).SONG_GAYGORACAND_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ohevaisnava',
        title: 'ଓହେ ବୈଷ୍ଣବ ଠାକୁର (Ohe Vaiṣṇava Ṭhākura)',
        category: 'Songs',
        type: 'html',
        description: 'ବୈଷ୍ଣବ ଠାକୁରଙ୍କ ଚରଣରେ ଏକ ବିନମ୍ର ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_OHEVAISNAVATHAKURA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-nitainamhate',
        title: 'ନିତାଇ ନାମ ହାଟେ (Nitāi Nāma Hāṭe)',
        category: 'Songs',
        type: 'html',
        description: 'ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କ ପ୍ରେମ ହାଟର ମହିମା |',
        structuredContent: (Songs as any).SONG_NITAINAMHATE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-naradamuni',
        title: 'ନାରଦ ମୁନି ବାଜାୟ ବୀଣା (Nārada Muni Bājāya Vīṇā)',
        category: 'Songs',
        type: 'html',
        description: 'ନାରଦ ମୁନିଙ୍କ ଦ୍ୱାରା ହରିନାମ ସଂକୀର୍ତ୍ତନର ମହିମା |',
        structuredContent: (Songs as any).SONG_NARADAMUNI_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-nadiya-godrume',
        title: 'ନଦୀୟା – ଗୋଦ୍ରୁମେ ନିତ୍ୟାନନ୍ଦ ମହାଜନ (Nadīyā – Godrume Nityānanda Mahājana)',
        category: 'Songs',
        type: 'html',
        description: 'ଗୋଦ୍ରୁମ ଦ୍ୱୀପରେ ନାମହଟ୍ଟର ସ୍ଥାପନା |',
        structuredContent: (Songs as any).SONG_NADIYAGODRUME_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gurudeva-krpa',
        title: 'ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ (Gurudeva Kṛpā Bindu Diyā)',
        category: 'Songs',
        type: 'html',
        description: 'ଗୁରୁଦେବଙ୍କ ଚରଣରେ କୃପା ଭିକ୍ଷା |',
        structuredContent: (Songs as any).SONG_GURUDEVAKRPABINDU_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-yasomati-nandana',
        title: 'ଯଶୋମତି ନନ୍ଦନ (Yaśomatī Nandana)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀକୃଷ୍ଣଙ୍କର ମଧୁର ନାମ ଓ ରୂପର ବନ୍ଦନା |',
        structuredContent: (Songs as any).SONG_YASOMATINANDANA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-vibhavari-sesa',
        title: 'ବିଭାବରୀ ଶେଷ (Vibhāvarī Śeṣa)',
        category: 'Songs',
        type: 'html',
        description: 'ପ୍ରଭାତ ସମୟରେ ଭଗବାନଙ୍କ ନିଦ୍ରା ଭଙ୍ଗ ଓ ନାମ ସଂକୀର୍ତ୍ତନ |',
        structuredContent: (Songs as any).SONG_VIBHAVARISESA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-udilo-aruna',
        title: 'ଉଦିଲ ଅରୁଣ ପୂରବ ଭାଗେ (Udilo Aruṇa Pūraba Bhāge)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କ ନଗର ସଂକୀର୍ତ୍ତନର ବନ୍ଦନା |',
        structuredContent: (Songs as any).SONG_UDILOARUNA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-suddha-bhakata',
        title: 'ଶୁଦ୍ଧ ଭକତ-ଚରଣ ରେଣୁ (Śuddha Bhakata-Caraṇa Reṇu)',
        category: 'Songs',
        type: 'html',
        description: 'ଭକ୍ତ ଓ ବୈଷ୍ଣବ ସେବାର ମାହାତ୍ମ୍ୟ |',
        structuredContent: (Songs as any).SONG_SUDDHABHAKATA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-sri-krsna-caitanya',
        title: 'ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି (Śrī Kṛṣṇa Caitanya Prabhu Jīve Dayā Kari)',
        category: 'Songs',
        type: 'html',
        description: 'ପ୍ରଭୁ ଚୈତନ୍ୟଙ୍କ ଅବତାର ଓ ଶରଣାଗତି ଶିକ୍ଷା |',
        structuredContent: (Songs as any).SONG_SRIKRSNACAITANYA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-radha-krsna-bol-bol',
        title: 'ରାଧାକୃଷ୍ଣ ବଲ୍‌ ବଲ୍‌ (Rādhā Kṛṣṇa Bol Bol)',
        category: 'Songs',
        type: 'html',
        description: 'ରାଧା-କୃଷ୍ଣଙ୍କ ନାମ ଗାନ କରିବା ପାଇଁ ଏକ ସୁନ୍ଦର ଆହ୍ୱାନ |',
        structuredContent: (Songs as any).SONG_RADHAKRSNABOLBOL_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-manasa-deha-geha',
        title: 'ମାନସ, ଦେହ, ଗେହ (Mānasa, Deha, Geha)',
        category: 'Songs',
        type: 'html',
        description: 'ଭଗବାନଙ୍କୁ ଆତ୍ମନିବେଦନ ଏବଂ ସର୍ବସ୍ୱ ଅର୍ପଣ |',
        structuredContent: (Songs as any).SONG_MANASADEHAGEHA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-prabhu-tava-pada-yuge',
        title: 'ପ୍ରଭୁ ତବ ପଦଯୁଗେ (Prabhu Taba Padayuge)',
        category: 'Songs',
        type: 'html',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ଏକ ନିଷ୍କପଟ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_PRABHUTAVAPADAYUGE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ki-jani-ki-bale',
        title: 'କି ଜାନି କି ବଲେ (Ki Jāni Ki Bale)',
        category: 'Songs',
        type: 'html',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ପୂର୍ଣ୍ଣ ଶରଣାଗତି |',
        structuredContent: (Songs as any).SONG_KIJANIKIBALE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabe-habe-bolo',
        title: 'କବେ ହ’ବେ ବୋଲୋ (Kabe Ha’be Bolo)',
        category: 'Songs',
        type: 'html',
        description: 'ଶୁଦ୍ଧ ନାମ ଗାନ କରିବା ପାଇଁ ଏକ ବ୍ୟାକୁଳ ନିବେଦନ |',
        structuredContent: (Songs as any).SONG_KABEHABEBOLO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-jaya-jaya-radha-krsna',
        title: 'ଜୟ ଜୟ ରାଧାକୃଷ୍ଣ ଯୁଗଲ ମିଲନ (Jaya Jaya Rādhā Kṛṣṇa Yugala Milana)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀରାଧା-କୃଷ୍ଣଙ୍କ ଯୁଗଳ ମିଳନର ଆରତି |',
        structuredContent: (Songs as any).SONG_JAYAJAYARADHAKRSNA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gurudeva-boro-krpa',
        title: 'ଗୁରୁଦେବ ! ବଡ଼ କୃପା କରି (Gurudeva! Boro Kṛpā Kori)',
        category: 'Songs',
        type: 'html',
        description: 'ଗୁରୁଦେବଙ୍କ ଅପାର କରୁଣାର ବନ୍ଦନା |',
        structuredContent: (Songs as any).SONG_GURUDEVABOROKRPADIA_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Gurudeva%21_Boro_Krpa_Kori/Gurudeva%21_Boro_Krpa_Kori_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3',
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ami-to-durjana',
        title: 'ଆମି ତୋ’ ଦୁର୍ଜନ ଅତି (Āmi To’ Durjana Ati)',
        category: 'Songs',
        type: 'html',
        description: 'ନିଜର ଦୀନତା ଓ ଭଗବାନଙ୍କ କୃପାର ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_AMITODURJANA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ar-keno-maya-jale',
        title: 'ଆର୍ କେନୋ ମାୟା-ଜାଲେ (Ār Keno Māyā-Jāle)',
        category: 'Songs',
        type: 'html',
        description: 'ମାୟା ଜାଲରୁ ମୁକ୍ତି ଓ ଭଗବାନଙ୍କ ଆଶ୍ରୟ ପାଇଁ ଉପଦେଶ |',
        structuredContent: (Songs as any).SONG_ARKENOMAYAJALE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-bhale-gaura-gadadharer',
        title: 'ଭାଲେ ଗୋରା-ଗଦାଧରର୍ ଆରତି (Bhāle Gaura-Gadādharer Ārati)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଗୌର-ଗଦାଧରଙ୍କ ଦିବ୍ୟ ଆରତି |',
        structuredContent: (Songs as any).SONG_BHALEGAURAGADADHARERARATI_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-bolo-hari-bolo',
        title: 'ବୋଲୋ ହରି ବୋଲୋ (Bolo Hari Bolo)',
        category: 'Songs',
        type: 'html',
        description: 'ସର୍ବଦା ହରି ନାମ ଗାନ କରିବା ପାଇଁ ଏକ ପ୍ରେରଣାଦାୟକ ଗୀତ |',
        structuredContent: (Songs as any).SONG_BOLOHARIBOLO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-hari-hari-kabe-mora',
        title: 'ହରି ହରି କବେ ମୋର (Hari Hari Kabe Mora)',
        category: 'Songs',
        type: 'html',
        description: 'ବୈଷ୍ଣବ ସେବା ଓ ନାମ ପ୍ରତି ରୁଚି ପାଇଁ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_HARIHARIKABEMORA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabe-habe-heno-dasa',
        title: 'କବେ ହ’ବେ ହେନୋ ଦଶା ମୋର (Kabe Habe Heno Daśā Mora)',
        category: 'Songs',
        type: 'html',
        description: 'ସଂସାର ବନ୍ଧନରୁ ମୁକ୍ତି ପାଇଁ ବ୍ୟାକୁଳତା |',
        structuredContent: (Songs as any).SONG_KABEHABEHENODASA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabe-mui-vaisnava-cinibo',
        title: 'କବେ ମୁଇ ବୈଷ୍ଣବ ଚିନିବୋ (Kabe Mui Vaiṣṇava Cinibo)',
        category: 'Songs',
        type: 'html',
        description: 'ପ୍ରକୃତ ବୈଷ୍ଣବଙ୍କୁ ଚିହ୍ନିବା ଓ ତାଙ୍କ ସେବା କରିବାର ଆକାଂକ୍ଷା |',
        structuredContent: (Songs as any).SONG_KABEMUIVAISNAVACINIBO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kali-kukkura-kadan',
        title: 'କଲି-କୁକ୍କୁର-କଦନ (Kali-Kukkura-Kadan)',
        category: 'Songs',
        type: 'html',
        description: 'କଳିଯୁଗର ପ୍ରଭାବରୁ ରକ୍ଷା ପାଇଁ ଗୌର ନାମର ମାହାତ୍ମ୍ୟ |',
        structuredContent: (Songs as any).SONG_KALIKUKKURAKADAN_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-keno-hare-krsna-nam',
        title: 'କେନୋ ହରେ କୃଷ୍ଣ ନାମ (Keno Hare Kṛṣṇa Nām)',
        category: 'Songs',
        type: 'html',
        description: 'ନାମ ଗାନ ସମୟରେ ଭାବାବେଶ ନ ହେବାର ଦୁଃଖ |',
        structuredContent: (Songs as any).SONG_KENOHAREKRSNANAM_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kesava-tuwa-jagata',
        title: 'କେଶବ ! ତୁୱା ଜଗତ ବିଚିତ୍ର (Keśaba! Tuwā Jagata Vicitra)',
        category: 'Songs',
        type: 'html',
        description: 'ଭଗବାନଙ୍କ ବିଚିତ୍ର ସୃଷ୍ଟି ଓ କର୍ମ ଫଳର ବର୍ଣ୍ଣନା |',
        structuredContent: (Songs as any).SONG_KESAVATUWAJAGATA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-mama-mana-mandire',
        title: 'ମମ ମନ ମନ୍ଦିରେ (Mama Mana Mandire)',
        category: 'Songs',
        type: 'html',
        description: 'ମନରୂପୀ ମନ୍ଦିରରେ ଭଗବାନଙ୍କୁ ବିରାଜମାନ କରିବାର ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_MAMAMANAMANDIRE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-nija-karma-dose',
        title: 'ନିଜ-କର୍ମ-ଦୋଷ-ଫଲେ (Nija-Karma-Doṣe-Phale)',
        category: 'Songs',
        type: 'html',
        description: 'ନିଜ କର୍ମ ଫଳରେ ସଂସାର ସମୁଦ୍ରରେ ପତିତ ହେବାର ପଶ୍ଚାତାପ |',
        structuredContent: (Songs as any).SONG_NIJAKARMADOSE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-prapance-poriya',
        title: 'ପ୍ରପଞ୍ଚେ ପୋଡ଼ିୟା (Prapañce Poṛiyā)',
        category: 'Songs',
        type: 'html',
        description: 'ମାୟିକ ସଂସାରରେ ପଡ଼ି ଭଗବାନଙ୍କ ଶରଣାପନ୍ନ ହେବା |',
        structuredContent: (Songs as any).SONG_PRAPANCEPORIYA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-radha-kunda-tata',
        title: 'ରାଧା-କୁଣ୍ଡ-ତଟ (Rādhā-Kuṇḍa-Taṭa)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ରାଧାକୁଣ୍ଡ ଓ ବ୍ରଜର ପବିତ୍ର ସ୍ଥଳୀର ବନ୍ଦନା |',
        structuredContent: (Songs as any).SONG_RADHAKUNDATATA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-sri-krsna-kirtane',
        title: 'ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ (Śrī-Kṛṣṇa-Kīrtane)',
        category: 'Songs',
        type: 'html',
        description: 'ଶୁଦ୍ଧ ନାମ କୀର୍ତ୍ତନ ପାଇଁ ଆବଶ୍ୟକୀୟ ଯୋଗ୍ୟତା |',
        structuredContent: (Songs as any).SONG_SRIKRSNAKIRTANE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-yadi-te-hari-pada',
        title: 'ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ (Yadi Te Hari-Pāda-Saroja)',
        category: 'Songs',
        type: 'html',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ସର୍ବଦା ମଗ୍ନ ରହିବା ପାଇଁ ଶିକ୍ଷା ।',
        structuredContent: (Songs as any).SONG_YADITEHARIPADA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-bhajabhakatavatsala',
        title: 'ଭଜ ଭକତବତ୍ସଲ (Bhaja Bhakata Vatsala)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଭୋଗ ନିବେଦନ କୀର୍ତ୍ତନ |',
        structuredContent: (Songs as any).SONG_BHAJABHAKATAVATSALA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura (ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁରଙ୍କ ରଚନା)'
    },
    {
        id: 'song-bhajarebhajare',
        title: 'ଭଜରେ ଭଜରେ ଆମାର ମନ (Bhaja Re Bhaja Re Āmāra Mana)',
        category: 'Songs',
        type: 'html',
        description: 'ମନକୁ ଶ୍ରୀ ରାଧାକୃଷ୍ଣଙ୍କ ଭଜନରେ ନିୟୋଜିତ କରିବା ପାଇଁ ଶିକ୍ଷା |',
        structuredContent: (Songs as any).SONG_BHAJAREBHAJARE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-borosukherkhabor',
        title: 'ବଡ଼ ସୁଖେର ଖବର ଗାଇ (Boro Sukher Khabor Gāi)',
        category: 'Songs',
        type: 'html',
        description: 'ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କ ପ୍ରେମ ହାଟର ମହିମାଗାନ |',
        structuredContent: (Songs as any).SONG_BOROSUKHERKHABOR_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ekhonabujhinu',
        title: 'ଏଖୋନ ବୁଝିନୁ ପ୍ରଭୁ (Ekhona Bujhinu Prabhu)',
        category: 'Songs',
        type: 'html',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ଶରଣାଗତି ଓ ଅଭୟ ପ୍ରଦାନର ମହିମା |',
        structuredContent: (Songs as any).SONG_EKHONABUJHINU_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-emonadurmati',
        title: 'ଏମନ ଦୁର୍ମତି ସଂସାର ଭିତରେ (Emona Durmati)',
        category: 'Songs',
        type: 'html',
        description: 'ଦୁଷ୍ଟ ମନ ଓ ସଂସାରରୁ ଉଦ୍ଧାର ପାଇଁ ଏକ କରୁଣ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_EMONADURMATI_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED',
},
    {
        id: 'song-gaygoramadhura',
        title: 'ଗାୟ ଗୋରା ମଧୁର ସ୍ୱରେ (Gāy Gorā Madhura Sware)',
        category: 'Songs',
        type: 'html',
        description: 'ମଧୁର ସ୍ୱରରେ ଭଗବାନ ଗୌରାଙ୍ଗଙ୍କ ନାମ ସଂକୀର୍ତ୍ତନ |',
        structuredContent: (Songs as any).SONG_GAYGORAMADHURA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED',
},
    {
        id: 'song-hariboloharibolo',
        title: 'ହରି ବୋଲ ହରି ବୋଲ (Hari Bolo Hari Bolo)',
        category: 'Songs',
        type: 'html',
        description: 'ଗୌର-ନିତାଇଙ୍କ ଦ୍ୱାରା ପ୍ରଦତ୍ତ ହରିନାମର ଜୟଗାନ |',
        structuredContent: (Songs as any).SONG_HARIBOLOHARIBOLO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-jivjago',
        title: 'ଜୀବ ଜାଗ ଜୀବ ଜାଗ (Jīv Jāgo Jīv Jāgo)',
        category: 'Songs',
        type: 'html',
        description: 'ମହାପ୍ରଭୁଙ୍କ ଦ୍ୱାରା ଜୀବମାନଙ୍କୁ ମାୟା ନିଦ୍ରାରୁ ଜାଗ୍ରତ କରିବାର ଆହ୍ୱାନ |',
        structuredContent: (Songs as any).SONG_JIVJAGOJIVJAGO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabegouravane',
        title: 'କବେ ଗୌର ବନେ (Kabe Goura Vane)',
        category: 'Songs',
        type: 'html',
        description: 'ଗୌରଧାମରେ ଭାବାବେଶରେ ବୁଲିବାର ଆଶା ଓ ବ୍ୟାକୁଳତା |',
        structuredContent: (Songs as any).SONG_KABEGOURAVANE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabesricaitanya',
        title: 'କବେ ଶ୍ରୀ ଚୈତନ୍ୟ ମୋରେ (Kabe Śrī Caitanya More)',
        category: 'Songs',
        type: 'html',
        description: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ଦୟା ପାଇଁ ବ୍ୟାକୁଳ ନିବେଦନ |',
        structuredContent: (Songs as any).SONG_KABESRICAITANYA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-krpakorovaisnava',
        title: 'କୃପାକର ବୈଷ୍ଣବ ଠାକୁର (Kṛpā Koro Vaiṣṇava Ṭhākura)',
        category: 'Songs',
        type: 'html',
        description: 'ଶୁଦ୍ଧ ବୈଷ୍ଣବଙ୍କ ଚରଣରେ କୃପା ଓ ବିନମ୍ରତା ପାଇଁ ପ୍ରାର୍ଥନା |',
        structuredContent: (Songs as any).SONG_KRPAKOROVAISNAVA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-vidyaravilase',
        title: 'ବିଦ୍ୟାର ବିଳାସେ (Vidyāra Vilāse)',
        category: 'Songs',
        type: 'html',
        description: 'ଜଡ଼ ଶିକ୍ଷାର ବୈଫଲ୍ୟ ଓ ଭଗବାନଙ୍କ ଶରଣାଗତି ମାହାତ୍ମ୍ୟ |',
        structuredContent: (Songs as any).SONG_VIDYARAVILASE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
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
        title: 'ଅଧ୍ୟାୟ ୪ - ଜ୍ଞାନକର୍ମ ସନ୍ନ୍ୟାସ ଯୋଗ (Jñāna-karma-sannyāsa Yoga)',
        title_english: 'Chapter 4: Jñāna-karma-sannyāsa Yoga',
        title_odia: 'ଜ୍ଞାନକର୍ମ ସନ୍ନ୍ୟାସ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ଜ୍ଞାନକର୍ମ ସନ୍ନ୍ୟାସ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_4_STRUCTURED
    },
    {
        id: 'gita-chapter-5',
        title: 'ଅଧ୍ୟାୟ ୫ - କର୍ମସନ୍ନ୍ୟାସ ଯୋଗ (Karma-sannyāsa Yoga)',
        title_english: 'Chapter 5: Karma-sannyāsa Yoga',
        title_odia: 'କର୍ମସନ୍ନ୍ୟାସ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(କର୍ମସନ୍ନ୍ୟାସ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_5_STRUCTURED
    },
    {
        id: 'gita-chapter-6',
        title: 'ଅଧ୍ୟାୟ ୬ - ଆତ୍ମସଂଯମ ଯୋଗ (Aātma-saṃyama Yoga)',
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
        title_odia: '비ଭୂତି ବିସ୍ତାର ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(비ଭୂତି ବିସ୍ତାର ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_10_STRUCTURED
    },
    {
        id: 'gita-chapter-11',
        title: 'ଅଧ୍ୟାୟ ୧୧ - ବିଶ୍ୱରୂପଦର୍ଶନ ଯୋଗ (Viśva-rūpa-darśana Yoga)',
        title_english: 'Chapter 11: Viśva-rūpa-darśana Yoga',
        title_odia: '비ଶ୍ୱରୂପଦର୍ଶନ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(비ଶ୍ୱରୂପଦର୍ଶନ ଯୋଗ)',
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
        title: 'ଅଧ୍ୟାୟ ୧୮ - ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ (Mokṣa-sannyāsa Yoga)',
        title_english: 'Chapter 18: Mokṣa-sannyāsa Yoga',
        title_odia: 'ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ',
        category: 'Gita',
        type: 'html',
        description: '(ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ)',
        structuredContent: (Songs as any).SONG_GITA_CHAPTER_18_STRUCTURED
    }
];


export const CATEGORIES = ['ସବୁ', 'ଗୀତ', 'କୀର୍ତ୍ତନ',
      {
        id: 'song-gopinatmamanivedana',
        title: 'ଗୋପୀନାଥ, ମମ ନିବେଦନ ଶୁନ (Gopinath Mama Nivedana Suno)',
        title_odia: 'ଗୋପୀନାଥ, ମମ ନିବେଦନ ଶୁନ',
        title_english: 'Gopinath Mama Nivedana Suno',
        category: 'Songs',
        type: 'html',
        description: 'ଶୁଣନ୍ତୁ ଏହି ସୁନ୍ଦର ଭଜନ ଯେଉଁଥିରେ ଭକ୍ତିବିନୋଦ ଠାକୁର ଗୋପୀନାଥଙ୍କ ନିକଟରେ ଶରଣାଗତି ପ୍ରକାଶ କରୁଛନ୍ତି।',
        structuredContent: (Songs as any).SONG_GOPINATHMAMANIVEDANA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
      },
      {
        id: 'song-gopinatmamanivedana',
        title: 'ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନୋ (Gopinath Part 1)',
        title_odia: 'ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନୋ',
        title_english: 'Gopinath Part 1 (Mama Nivedana Suno)',
        category: 'Songs',
        type: 'html',
        author: 'Bhaktivinoda Ṭhākura',
        published: true,
        status: 'COMPLETED'
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
];