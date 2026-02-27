import {
    SONG_ADHARAM_STRUCTURED,
    SONG_AKRODHA_STRUCTURED,
    SONG_BHULIYATOMARE_STRUCTURED,
    SONG_GURUVASTAKA_STRUCTURED,
    SONG_JAYARADHAMADHAVA_STRUCTURED,
    NITAI_GUNA_MANI_STRUCTURED,
    SRI_GURUV_ASTAKAHTML,
    JAYA_RADHA_MADHAVA,
    PANCHA_TATTVA_MANTRA,
    HARE_KRISHNA_MANTRA,
    BHULIYA_TOMARE_ODIA,
    ADHARAM_MADHURAM_ODIA,
    SONG_AMARJIVANA_STRUCTURED,
    SONG_AMIJAMUNAPULINE_STRUCTURED,
    SONG_ANADIKARAMAPHALE_STRUCTURED,
    SONG_ARKENOMAYARJALE_STRUCTURED,
    SONG_APARADHAPHALEMAMA_STRUCTURED,
    SONG_TUWAPADEMINOTIMOR_STRUCTURED,
    SONG_ATMANIVEDANATUWAPADE_STRUCTURED,
    SONG_SARVASVATOMAR_STRUCTURED,
    SONG_GOPINATHA1_STRUCTURED,
    SONG_GOPINATHA2_STRUCTURED,
    SONG_GOPINATHA3_STRUCTURED,
    SONG_DOYALNITAICAITANYA_STRUCTURED,
    SONG_DURLABHAMANAVAJANMA_STRUCTURED,
    SONG_GAYGORACAND_STRUCTURED,
    SONG_OHEVAISNAVATHAKURA_STRUCTURED,
    SONG_NITAINAMHATE_STRUCTURED,
    SONG_NARADAMUNI_STRUCTURED,
    SONG_NADIYAGODRUME_STRUCTURED,
    SONG_GURUDEVAKRPABINDU_STRUCTURED,
    SONG_YASOMATINANDANA_STRUCTURED,
    SONG_VIBHAVARISESA_STRUCTURED,
    SONG_UDILOARUNA_STRUCTURED,
    SONG_SUDDHABHAKATA_STRUCTURED,
    SONG_SRIKRSNACAITANYA_STRUCTURED,
    SONG_RADHAKRSNABOLBOL_STRUCTURED,
    SONG_MANASADEHAGEHA_STRUCTURED,
    SONG_PRABHUTAVAPADAYUGE_STRUCTURED,
    SONG_KIJANIKIBALE_STRUCTURED,
    SONG_KABEHABEBOLO_STRUCTURED,
    SONG_JAYAJAYARADHAKRSNA_STRUCTURED,
    SONG_GURUDEVABOROKRPADIA_STRUCTURED,
    SONG_AMITODURJANA_STRUCTURED,
    SONG_ARKENOMAYAJALE_STRUCTURED,
    SONG_BHALEGAURAGADADHARERARATI_STRUCTURED,
    SONG_BOLOHARIBOLO_STRUCTURED,
    SONG_HARIHARIKABEMORA_STRUCTURED,
    SONG_KABEHABEHENODASA_STRUCTURED,
    SONG_KABEMUIVAISNAVACINIBO_STRUCTURED,
    SONG_KALIKUKKURAKADAN_STRUCTURED,
    SONG_KENOHAREKRSNANAM_STRUCTURED,
    SONG_KESAVATUWAJAGATA_STRUCTURED,
    SONG_MAMAMANAMANDIRE_STRUCTURED,
    SONG_NIJAKARMADOSE_STRUCTURED,
    SONG_PRAPANCEPORIYA_STRUCTURED,
    SONG_RADHAKUNDATATA_STRUCTURED,
    SONG_SRIKRSNAKIRTANE_STRUCTURED,
    SONG_YADITEHARIPADA_STRUCTURED,
    SONG_BHAJABHAKATAVATSALA_STRUCTURED,
    SONG_BHAJAREBHAJARE_STRUCTURED,
    SONG_BOROSUKHERKHABOR_STRUCTURED,
    SONG_EKHONABUJHINU_STRUCTURED,
    SONG_EMONADURMATI_STRUCTURED,
    SONG_GAYGORAMADHURA_STRUCTURED,
    SONG_HARIBOLOHARIBOLO_STRUCTURED,
    SONG_JIVJAGOJIVJAGO_STRUCTURED,
    SONG_KABEGOURAVANE_STRUCTURED,
    SONG_KABESRICAITANYA_STRUCTURED,
    SONG_KRPAKOROVAISNAVA_STRUCTURED,
    SONG_VIDYARAVILASE_STRUCTURED,
    SONG_GURUDEVAVRAJAVANE_STRUCTURED
} from './songsContent';
import type { Resource } from '../types';

export const RESOURCES: Resource[] = [
    {
        id: 'song-guruvastaka',
        title: 'ଶ୍ରୀ ଶ୍ରୀ ଗୁରୁଵାଷ୍ଟକ (Śrī Śrī Guruv-aṣṭaka)',
        category: 'Songs',
        type: 'article',
        description: 'ଗୁରୁଦେବଙ୍କ ଆଠଟି ପ୍ରାର୍ଥନା |',
        content: SRI_GURUV_ASTAKAHTML,
        structuredContent: SONG_GURUVASTAKA_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/01_-_Srila_Prabhupada/02_-_Bhajans/Vol-01/10_-_Sri_Sri_Gurvastakam/SP_Bhajans_01_-_Samsara_Davanala_Lidha_Loka_-_Sri_Sri_Gurvastakam.mp3',
        author: 'Viśvanātha Cakravartī Ṭhākura'
    },
    {
        id: 'song-jayaradhadhava',
        title: 'ଜୟ ରାଧା-ମାଧବ (Jaya Rādhā-Mādhava)',
        category: 'Songs',
        type: 'article',
        description: 'ପ୍ରାତଃକାଳୀନ ଭଜନ |',
        content: JAYA_RADHA_MADHAVA,
        structuredContent: SONG_JAYARADHAMADHAVA_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Jaya_Radha_Madhava/Jaya_Radha_Madhava_-_Sung_by_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3',
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-bhuliyatomare',
        title: 'ଭୁଲିୟା ତୋମାରେ (Bhuliyā tomāre)',
        category: 'Songs',
        type: 'article',
        description: 'ଭୁଲିୟା ତୋମାରେ - ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏକ ପ୍ରସିଦ୍ଧ ଭଜନ |',
        content: BHULIYA_TOMARE_ODIA,
        structuredContent: SONG_BHULIYATOMARE_STRUCTURED,
        audioUrl: 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Bhuliya_Tomare/Bhuliya_Tomare_-_Sung_by_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3',
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-nitaiguna',
        title: 'ନିତାଇ ଗୁଣମଣି (Nitai Guna Mani)',
        category: 'Songs',
        type: 'interactive',
        description: 'ଶ୍ରୀଳ ଲୋଚନ ଦାସ ଠାକୁରଙ୍କ ଦ୍ୱାରା ରଚିତ ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦଙ୍କ ଗୁଣଗାନ |',
        structuredContent: NITAI_GUNA_MANI_STRUCTURED,
        author: 'Locana dāsa Ṭhākura'
    },
    {
        id: 'song-panchatattva',
        title: 'ପଞ୍ଚତତ୍ତ୍ୱ ମହାମନ୍ତ୍ର (Pañca-tattva)',
        category: 'Songs',
        type: 'article',
        description: 'ପଞ୍ଚତତ୍ତ୍ୱଙ୍କର ପବିତ୍ର ମହାମନ୍ତ୍ର |',
        content: PANCHA_TATTVA_MANTRA,
        author: 'Traditional'
    },
    {
        id: 'song-harekrishna',
        title: 'ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର (Hare Kṛṣṇa)',
        category: 'Songs',
        type: 'article',
        description: 'ପରିତ୍ରାଣ ପାଇଁ ଶ୍ରେଷ୍ଠ ମହାମନ୍ତ୍ର |',
        content: HARE_KRISHNA_MANTRA,
        author: 'Traditional'
    },
    {
        id: 'song-akrodha',
        title: 'ଅକ୍ରୋଧ ପରମାନନ୍ଦ (Akrodha Paramānanda)',
        category: 'Songs',
        type: 'article',
        description: 'ପ୍ରଭୁ ନିତ୍ୟାନନ୍ଦଙ୍କ ମହିମାଗାନ |',
        structuredContent: SONG_AKRODHA_STRUCTURED,
        author: 'Locana dāsa Ṭhākura'
    },
    {
        id: 'song-adharam',
        title: 'ଅଧରଂ ମଧୁରଂ (Adharam Madhuram)',
        category: 'Songs',
        type: 'article',
        description: 'ମଧୁରାଷ୍ଟକମ୍ - ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ମାଧୁରୀ ବର୍ଣ୍ଣନା |',
        content: ADHARAM_MADHURAM_ODIA,
        structuredContent: SONG_ADHARAM_STRUCTURED,
        author: 'Vallabhācārya'
    },
    {
        id: 'song-amarjivana',
        title: 'ଆମାର ଜୀବନ (Amar Jīvana)',
        category: 'Songs',
        type: 'article',
        description: 'ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଏକ ଅତି ବିନମ୍ର ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_AMARJIVANA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-amijamunapuline',
        title: 'ଆମି ଯମୁନା ପୁଲିନେ (Āmi Jamunā Puline)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନ ଶ୍ରୀକୃଷ୍ଣଙ୍କର ଦିବ୍ୟ ଯମୁନା କୂଳ ଲୀଳା |',
        structuredContent: SONG_AMIJAMUNAPULINE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-anadikaramaphale',
        title: 'ଅନାଦି କରମ- ଫଲେ (Anādi Karama Phale)',
        category: 'Songs',
        type: 'article',
        description: 'ସଂସାର ସମୁଦ୍ରରେ ପତିତ ଜୀବର ଉଦ୍ଧାର ପାଇଁ ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_ANADIKARAMAPHALE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-arkenomayarjale',
        title: 'ଆର କେନ ମାୟା-ଜାଲେ (Āra kena māyā-jāle)',
        category: 'Songs',
        type: 'article',
        description: 'ମାୟାର ଜାଲରେ ପଡ଼ିଥିବା ଜୀବକୁ ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଚେତାବନୀ |',
        structuredContent: SONG_ARKENOMAYARJALE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-aparadhaphalemama',
        title: 'ଅପରାଧ-ଫଳେ ମମ (Aparādha-phale mama)',
        category: 'Songs',
        type: 'article',
        description: 'ଅପରାଧର ଫଳସ୍ୱରୂପ କଠୋର ହୋଇଥିବା ହୃଦୟ ପାଇଁ ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_APARADHAPHALEMAMA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-tuwapademinotimor',
        title: 'ତୁୟା ପଦେ ଏ ମିନତୀ ମୋର (Tuwā pade e minati mor)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ଏକ ବିନମ୍ର ନିବେଦନ |',
        structuredContent: SONG_TUWAPADEMINOTIMOR_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-atmanivedanatuwapade',
        title: 'ଆତ୍ମ-ନିବେଦନ, ତୁୟା ପଦେ କରି’ (Ātma-nivedana, tuwā pade kori’)',
        category: 'Songs',
        type: 'article',
        description: 'ଆତ୍ମସମର୍ପଣ ପରେ ମିଳୁଥିବା ପରମ ଶାନ୍ତି ମହିମା |',
        structuredContent: SONG_ATMANIVEDANATUWAPADE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-sarvasvatomar',
        title: 'ସର୍ବସ୍ୱ ତୋମାର, ଚରଣେ ସଁପିୟା (Sarvasva tomār, caraṇe saḿpiyā)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନଙ୍କୁ ନିଜର ସର୍ବସ୍ୱ ସମର୍ପଣ କରିବାର ଭାବ |',
        structuredContent: SONG_SARVASVATOMAR_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gopinatha1',
        title: 'ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନୋ (Gopinātha Part 1)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନ ଗୋପୀନାଥଙ୍କୁ ଏକ ଅତି ବିନମ୍ର ନିବେଦନ |',
        structuredContent: SONG_GOPINATHA1_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gopinatha2',
        title: 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍ (Gopinātha Part 2)',
        category: 'Songs',
        type: 'article',
        description: 'ସଂସାର ଜ୍ୱାଳାରୁ ମୁକ୍ତି ପାଇଁ ଗୋପୀନାଥଙ୍କୁ ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_GOPINATHA2_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gopinatha3',
        title: 'ଗୋପୀନାଥ (Part 3): ଆମାର ଉପାୟ ନାହି (Gopinātha Part 3)',
        category: 'Songs',
        type: 'article',
        description: 'ଅସହାୟ ଅବସ୍ଥାରେ ଗୋପୀନାଥଙ୍କୁ ଏକମାତ୍ର ଶରଣ |',
        structuredContent: SONG_GOPINATHA3_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-doyalnitai',
        title: 'ଦୟାଲ ନିତାଇ ଚୈତନ୍ୟ (Doyāl Nitāi Caitanya)',
        category: 'Songs',
        type: 'article',
        description: 'ଶ୍ରୀ ଭକ୍ତିବିନୋଦ ଠାକୁରଙ୍କ ଦ୍ୱାରା ରଚିତ ଶ୍ରୀ ଶ୍ରୀ ଗୌର ନିତ୍ୟାନନ୍ଦ ବନ୍ଦନା |',
        structuredContent: SONG_DOYALNITAICAITANYA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-durlabhamanava',
        title: 'ଦୁର୍ଲ୍ଲଭ ମାନବ ଜନ୍ମ (Durlabha Mānava Janma)',
        category: 'Songs',
        type: 'article',
        description: 'ମନୁଷ୍ୟ ଜନ୍ମର ଦୁର୍ଲ୍ଲଭତା ଏବଂ ଭଗବାନଙ୍କୁ ଭଜିବା ପାଇଁ ଏକ ଚେତାବନୀ |',
        structuredContent: SONG_DURLABHAMANAVAJANMA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gaygoracand',
        title: 'ଗାୟ ଗୋରାଚାଁଦ ଜୀବେର ତରେ (Gāy Gorācāńda Jīvera Tore)',
        category: 'Songs',
        type: 'article',
        description: 'ପ୍ରଭୁ ଗୌରଚନ୍ଦ୍ରଙ୍କ ଦ୍ୱାରା ସଂକୀର୍ତ୍ତନ ମହିମା ପ୍ରଚାର |',
        structuredContent: SONG_GAYGORACAND_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ohevaisnava',
        title: 'ଓହେ ବୈଷ୍ଣବ ଠାକୁର (Ohe Vaiṣṇava Ṭhākura)',
        category: 'Songs',
        type: 'article',
        description: 'ବୈଷ୍ଣବ ଠାକୁରଙ୍କ ଚରଣରେ ଏକ ବିନମ୍ର ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_OHEVAISNAVATHAKURA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-nitainamhate',
        title: 'ନିତାଇ ନାମ ହାଟେ (Nitāi Nāma Hāṭe)',
        category: 'Songs',
        type: 'article',
        description: 'ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କ ପ୍ରେମ ହାଟର ମହିମା |',
        structuredContent: SONG_NITAINAMHATE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-naradamuni',
        title: 'ନାରଦ ମୁନି ବାଜାୟ ବୀଣା (Nārada Muni Bājāya Vīṇā)',
        category: 'Songs',
        type: 'article',
        description: 'ନାରଦ ମୁନିଙ୍କ ଦ୍ୱାରା ହରିନାମ ସଂକୀର୍ତ୍ତନର ମହିମା |',
        structuredContent: SONG_NARADAMUNI_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-nadiyagodrume',
        title: 'ନଦୀୟା – ଗୋଦ୍ରୁମେ ନିତ୍ୟାନନ୍ଦ ମହାଜନ (Nadīyā – Godrume Nityānanda Mahājana)',
        category: 'Songs',
        type: 'article',
        description: 'ଗୋଦ୍ରୁମ ଦ୍ୱୀପରେ ନାମହଟ୍ଟର ସ୍ଥାପନା |',
        structuredContent: SONG_NADIYAGODRUME_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gurudeva-krpa',
        title: 'ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ (Gurudeva Kṛpā Bindu Diyā)',
        category: 'Songs',
        type: 'article',
        description: 'ଗୁରୁଦେବଙ୍କ ଚରଣରେ କୃପା ଭିକ୍ଷା |',
        structuredContent: SONG_GURUDEVAKRPABINDU_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-yasomati-nandana',
        title: 'ଯଶୋମତି ନନ୍ଦନ (Yaśomatī Nandana)',
        category: 'Songs',
        type: 'article',
        description: 'ଶ୍ରୀକୃଷ୍ଣଙ୍କର ମଧୁର ନାମ ଓ ରୂପର ବନ୍ଦନା |',
        structuredContent: SONG_YASOMATINANDANA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-vibhavari-sesa',
        title: 'ବିଭାବରୀ ଶେଷ (Vibhāvarī Śeṣa)',
        category: 'Songs',
        type: 'article',
        description: 'ପ୍ରଭାତ ସମୟରେ ଭଗବାନଙ୍କ ନିଦ୍ରା ଭଙ୍ଗ ଓ ନାମ ସଂକୀର୍ତ୍ତନ |',
        structuredContent: SONG_VIBHAVARISESA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-udilo-aruna',
        title: 'ଉଦିଲ ଅରୁଣ ପୂରବ ଭାଗେ (Udilo Aruṇa Pūraba Bhāge)',
        category: 'Songs',
        type: 'article',
        description: 'ଶ୍ରୀ ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କ ନଗର ସଂକୀର୍ତ୍ତନର ବନ୍ଦନା |',
        structuredContent: SONG_UDILOARUNA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-suddha-bhakata',
        title: 'ଶୁଦ୍ଧ ଭକତ-ଚରଣ ରେଣୁ (Śuddha Bhakata-Caraṇa Reṇu)',
        category: 'Songs',
        type: 'article',
        description: 'ଭକ୍ତ ଓ ବୈଷ୍ଣବ ସେବାର ମାହାତ୍ମ୍ୟ |',
        structuredContent: SONG_SUDDHABHAKATA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-sri-krsna-caitanya',
        title: 'ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି (Śrī Kṛṣṇa Caitanya Prabhu Jīve Dayā Kari)',
        category: 'Songs',
        type: 'article',
        description: 'ପ୍ରଭୁ ଚୈତନ୍ୟଙ୍କ ଅବତାର ଓ ଶରଣାଗତି ଶିକ୍ଷା |',
        structuredContent: SONG_SRIKRSNACAITANYA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-radha-krsna-bol-bol',
        title: 'ରାଧାକୃଷ୍ଣ ବଲ୍‌ ବଲ୍‌ (Rādhā Kṛṣṇa Bol Bol)',
        category: 'Songs',
        type: 'article',
        description: 'ରାଧା-କୃଷ୍ଣଙ୍କ ନାମ ଗାନ କରିବା ପାଇଁ ଏକ ସୁନ୍ଦର ଆହ୍ୱାନ |',
        structuredContent: SONG_RADHAKRSNABOLBOL_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-manasa-deha-geha',
        title: 'ମାନସ, ଦେହ, ଗେହ (Mānasa, Deha, Geha)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନଙ୍କୁ ଆତ୍ମନିବେଦନ ଏବଂ ସର୍ବସ୍ୱ ଅର୍ପଣ |',
        structuredContent: SONG_MANASADEHAGEHA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-prabhu-tava-pada-yuge',
        title: 'ପ୍ରଭୁ ତବ ପଦଯୁଗେ (Prabhu Taba Padayuge)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ଏକ ନିଷ୍କପଟ ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_PRABHUTAVAPADAYUGE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ki-jani-ki-bale',
        title: 'କି ଜାନି କି ବଲେ (Ki Jāni Ki Bale)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ପୂର୍ଣ୍ଣ ଶରଣାଗତି |',
        structuredContent: SONG_KIJANIKIBALE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabe-habe-bolo',
        title: 'କବେ ହ’ବେ ବୋଲୋ (Kabe Ha’be Bolo)',
        category: 'Songs',
        type: 'article',
        description: 'ଶୁଦ୍ଧ ନାମ ଗାନ କରିବା ପାଇଁ ଏକ ବ୍ୟାକୁଳ ନିବେଦନ |',
        structuredContent: SONG_KABEHABEBOLO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-jaya-jaya-radha-krsna',
        title: 'ଜୟ ଜୟ ରାଧାକୃଷ୍ଣ ଯୁଗଲ ମିଲନ (Jaya Jaya Rādhā Kṛṣṇa Yugala Milana)',
        category: 'Songs',
        type: 'article',
        description: 'ଶ୍ରୀରାଧା-କୃଷ୍ଣଙ୍କ ଯୁଗଳ ମିଳନର ଆରତି |',
        structuredContent: SONG_JAYAJAYARADHAKRSNA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gurudeva-boro-krpa',
        title: 'ଗୁରୁଦେବ ! ବଡ଼ କୃପା କରି (Gurudeva! Boro Kṛpā Kori)',
        category: 'Songs',
        type: 'article',
        description: 'ଗୁରୁଦେବଙ୍କ ଅପାର କରୁଣାର ବନ୍ଦନା |',
        structuredContent: SONG_GURUDEVABOROKRPADIA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ami-to-durjana',
        title: 'ଆମି ତୋ’ ଦୁର୍ଜନ ଅତି (Āmi To’ Durjana Ati)',
        category: 'Songs',
        type: 'article',
        description: 'ନିଜର ଦୀନତା ଓ ଭଗବାନଙ୍କ କୃପାର ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_AMITODURJANA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ar-keno-maya-jale',
        title: 'ଆର୍ କେନୋ ମାୟା-ଜାଲେ (Ār Keno Māyā-Jāle)',
        category: 'Songs',
        type: 'article',
        description: 'ମାୟା ଜାଲରୁ ମୁକ୍ତି ଓ ଭଗବାନଙ୍କ ଆଶ୍ରୟ ପାଇଁ ଉପଦେଶ |',
        structuredContent: SONG_ARKENOMAYAJALE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-bhale-gaura-gadadharer',
        title: 'ଭାଲେ ଗୋରା-ଗଦାଧରର୍ ଆରତି (Bhāle Gaura-Gadādharer Ārati)',
        category: 'Songs',
        type: 'article',
        description: 'ଶ୍ରୀ ଗୌର-ଗଦାଧରଙ୍କ ଦିବ୍ୟ ଆରତି |',
        structuredContent: SONG_BHALEGAURAGADADHARERARATI_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-bolo-hari-bolo',
        title: 'ବୋଲୋ ହରି ବୋଲୋ (Bolo Hari Bolo)',
        category: 'Songs',
        type: 'article',
        description: 'ସର୍ବଦା ହରି ନାମ ଗାନ କରିବା ପାଇଁ ଏକ ପ୍ରେରଣାଦାୟକ ଗୀତ |',
        structuredContent: SONG_BOLOHARIBOLO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-hari-hari-kabe-mora',
        title: 'ହରି ହରି କବେ ମୋର (Hari Hari Kabe Mora)',
        category: 'Songs',
        type: 'article',
        description: 'ବୈଷ୍ଣବ ସେବା ଓ ନାମ ପ୍ରତି ରୁଚି ପାଇଁ ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_HARIHARIKABEMORA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabe-habe-heno-dasa',
        title: 'କବେ ହ’ବେ ହେନୋ ଦଶା ମୋର (Kabe Habe Heno Daśā Mora)',
        category: 'Songs',
        type: 'article',
        description: 'ସଂସାର ବନ୍ଧନରୁ ମୁକ୍ତି ପାଇଁ ବ୍ୟାକୁଳତା |',
        structuredContent: SONG_KABEHABEHENODASA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabe-mui-vaisnava-cinibo',
        title: 'କବେ ମୁଇ ବୈଷ୍ଣବ ଚିନିବୋ (Kabe Mui Vaiṣṇava Cinibo)',
        category: 'Songs',
        type: 'article',
        description: 'ପ୍ରକୃତ ବୈଷ୍ଣବଙ୍କୁ ଚିହ୍ନିବା ଓ ତାଙ୍କ ସେବା କରିବାର ଆକାଂକ୍ଷା |',
        structuredContent: SONG_KABEMUIVAISNAVACINIBO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kali-kukkura-kadan',
        title: 'କଲି-କୁକ୍କୁର-କଦନ (Kali-Kukkura-Kadan)',
        category: 'Songs',
        type: 'article',
        description: 'କଳିଯୁଗର ପ୍ରଭାବରୁ ରକ୍ଷା ପାଇଁ ଗୌର ନାମର ମାହାତ୍ମ୍ୟ |',
        structuredContent: SONG_KALIKUKKURAKADAN_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-keno-hare-krsna-nam',
        title: 'କେନୋ ହରେ କୃଷ୍ଣ ନାମ (Keno Hare Kṛṣṇa Nām)',
        category: 'Songs',
        type: 'article',
        description: 'ନାମ ଗାନ ସମୟରେ ଭାବାବେଶ ନ ହେବାର ଦୁଃଖ |',
        structuredContent: SONG_KENOHAREKRSNANAM_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kesava-tuwa-jagata',
        title: 'କେଶବ ! ତୁୱା ଜଗତ ବିଚିତ୍ର (Keśaba! Tuwā Jagata Vicitra)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନଙ୍କ ବିଚିତ୍ର ସୃଷ୍ଟି ଓ କର୍ମ ଫଳର ବର୍ଣ୍ଣନା |',
        structuredContent: SONG_KESAVATUWAJAGATA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-mama-mana-mandire',
        title: 'ମମ ମନ ମନ୍ଦିରେ (Mama Mana Mandire)',
        category: 'Songs',
        type: 'article',
        description: 'ମନରୂପୀ ମନ୍ଦିରରେ ଭଗବାନଙ୍କୁ ବିରାଜମାନ କରିବାର ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_MAMAMANAMANDIRE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-nija-karma-dose',
        title: 'ନିଜ-କର୍ମ-ଦୋଷ-ଫଲେ (Nija-Karma-Doṣe-Phale)',
        category: 'Songs',
        type: 'article',
        description: 'ନିଜ କର୍ମ ଫଳରେ ସଂସାର ସମୁଦ୍ରରେ ପତିତ ହେବାର ପଶ୍ଚାତାପ |',
        structuredContent: SONG_NIJAKARMADOSE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-prapance-poriya',
        title: 'ପ୍ରପଞ୍ଚେ ପୋଡ଼ିୟା (Prapañce Poṛiyā)',
        category: 'Songs',
        type: 'article',
        description: 'ମାୟିକ ସଂସାରରେ ପଡ଼ି ଭଗବାନଙ୍କ ଶରଣାପନ୍ନ ହେବା |',
        structuredContent: SONG_PRAPANCEPORIYA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-radha-kunda-tata',
        title: 'ରାଧା-କୁଣ୍ଡ-ତଟ (Rādhā-Kuṇḍa-Taṭa)',
        category: 'Songs',
        type: 'article',
        description: 'ଶ୍ରୀ ରାଧାକୁଣ୍ଡ ଓ ବ୍ରଜର ପବିତ୍ର ସ୍ଥଳୀର ବନ୍ଦନା |',
        structuredContent: SONG_RADHAKUNDATATA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-sri-krsna-kirtane',
        title: 'ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ (Śrī-Kṛṣṇa-Kīrtane)',
        category: 'Songs',
        type: 'article',
        description: 'ଶୁଦ୍ଧ ନାମ କୀର୍ତ୍ତନ ପାଇଁ ଆବଶ୍ୟକୀୟ ଯୋଗ୍ୟତା |',
        structuredContent: SONG_SRIKRSNAKIRTANE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-yadi-te-hari-pada',
        title: 'ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ (Yadi Te Hari-Pāda-Saroja)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ସର୍ବଦା ମଗ୍ନ ରହିବା ପାଇଁ ଶିକ୍ଷା ।',
        structuredContent: SONG_YADITEHARIPADA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-bhajabhakatavatsala',
        title: 'ଭଜ ଭକତବତ୍ସଲ (Bhaja Bhakata Vatsala)',
        category: 'Songs',
        type: 'article',
        description: 'ଭକ୍ତବତ୍ସଲ ଭଗବାନ ଶ୍ରୀ ଗୌରହରିଙ୍କ ଆରତି ଓ ବନ୍ଦନା |',
        structuredContent: SONG_BHAJABHAKATAVATSALA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-bhajarebhajare',
        title: 'ଭଜରେ ଭଜରେ ଆମାର ମନ (Bhaja Re Bhaja Re Āmāra Mana)',
        category: 'Songs',
        type: 'article',
        description: 'ମନକୁ ଶ୍ରୀ ରାଧାକୃଷ୍ଣଙ୍କ ଭଜନରେ ନିୟୋଜିତ କରିବା ପାଇଁ ଶିକ୍ଷା |',
        structuredContent: SONG_BHAJAREBHAJARE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-borosukherkhabor',
        title: 'ବଡ଼ ସୁଖେର ଖବର ଗାଇ (Boro Sukher Khabor Gāi)',
        category: 'Songs',
        type: 'article',
        description: 'ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁଙ୍କ ପ୍ରେମ ହାଟର ମହିମାଗାନ |',
        structuredContent: SONG_BOROSUKHERKHABOR_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-ekhonabujhinu',
        title: 'ଏଖୋନ ବୁଝିନୁ ପ୍ରଭୁ (Ekhona Bujhinu Prabhu)',
        category: 'Songs',
        type: 'article',
        description: 'ଭଗବାନଙ୍କ ଚରଣରେ ଶରଣାଗତି ଓ ଅଭୟ ପ୍ରଦାନର ମହିମା |',
        structuredContent: SONG_EKHONABUJHINU_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-emonadurmati',
        title: 'ଏମନ ଦୁର୍ମତି ସଂସାର ଭିତରେ (Emona Durmati)',
        category: 'Songs',
        type: 'article',
        description: 'ଦୁଷ୍ଟ ମନ ଓ ସଂସାରରୁ ଉଦ୍ଧାର ପାଇଁ ଏକ କରୁଣ ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_EMONADURMATI_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gaygoramadhura',
        title: 'ଗାୟ ଗୋରା ମଧୁର ସ୍ୱରେ (Gāy Gorā Madhura Sware)',
        category: 'Songs',
        type: 'article',
        description: 'ମଧୁର ସ୍ୱରରେ ଭଗବାନ ଗୌରାଙ୍ଗଙ୍କ ନାମ ସଂକୀର୍ତ୍ତନ |',
        structuredContent: SONG_GAYGORAMADHURA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-hariboloharibolo',
        title: 'ହରି ବୋଲ ହରି ବୋଲ (Hari Bolo Hari Bolo)',
        category: 'Songs',
        type: 'article',
        description: 'ଗୌର-ନିତାଇଙ୍କ ଦ୍ୱାରା ପ୍ରଦତ୍ତ ହରିନାମର ଜୟଗାନ |',
        structuredContent: SONG_HARIBOLOHARIBOLO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-jivjago',
        title: 'ଜୀବ ଜାଗ ଜୀବ ଜାଗ (Jīv Jāgo Jīv Jāgo)',
        category: 'Songs',
        type: 'article',
        description: 'ମହାପ୍ରଭୁଙ୍କ ଦ୍ୱାରା ଜୀବମାନଙ୍କୁ ମାୟା ନିଦ୍ରାରୁ ଜାଗ୍ରତ କରିବାର ଆହ୍ୱାନ |',
        structuredContent: SONG_JIVJAGOJIVJAGO_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabegouravane',
        title: 'କବେ ଗୌର ବନେ (Kabe Goura Vane)',
        category: 'Songs',
        type: 'article',
        description: 'ଗୌରଧାମରେ ଭାବାବେଶରେ ବୁଲିବାର ଆଶା ଓ ବ୍ୟାକୁଳତା |',
        structuredContent: SONG_KABEGOURAVANE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-kabesricaitanya',
        title: 'କବେ ଶ୍ରୀ ଚୈତନ୍ୟ ମୋରେ (Kabe Śrī Caitanya More)',
        category: 'Songs',
        type: 'article',
        description: 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁଙ୍କ ଦୟା ପାଇଁ ବ୍ୟାକୁଳ ନିବେଦନ |',
        structuredContent: SONG_KABESRICAITANYA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-krpakorovaisnava',
        title: 'କୃପାକର ବୈଷ୍ଣବ ଠାକୁର (Kṛpā Koro Vaiṣṇava Ṭhākura)',
        category: 'Songs',
        type: 'article',
        description: 'ଶୁଦ୍ଧ ବୈଷ୍ଣବଙ୍କ ଚରଣରେ କୃପା ଓ ବିନମ୍ରତା ପାଇଁ ପ୍ରାର୍ଥନା |',
        structuredContent: SONG_KRPAKOROVAISNAVA_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-vidyaravilase',
        title: 'ବିଦ୍ୟାର ବିଳାସେ (Vidyāra Vilāse)',
        category: 'Songs',
        type: 'article',
        description: 'ଜଡ଼ ଶିକ୍ଷାର ବୈଫଲ୍ୟ ଓ ଭଗବାନଙ୍କ ଶରଣାଗତି ମାହାତ୍ମ୍ୟ |',
        structuredContent: SONG_VIDYARAVILASE_STRUCTURED,
        author: 'Bhaktivinoda Ṭhākura'
    },
    {
        id: 'song-gurudevevrajavane',
        title: 'ଗୁରୁଦେବେ ବ୍ରଜବନେ (Gurudeve Vraja Vane)',
        category: 'Songs',
        type: 'article',
        description: 'ବ୍ରଜଭୂମି ଓ ଗୁରୁଦେବଙ୍କ ପ୍ରତି ଶରଣାଗତି ଶିକ୍ଷା |',
        structuredContent: SONG_GURUDEVAVRAJAVANE_STRUCTURED,
        author: 'Traditional'
    }
];

export const CATEGORIES = ['ସବୁ', 'ଗୀତ', 'କୀର୍ତ୍ତନ'];
