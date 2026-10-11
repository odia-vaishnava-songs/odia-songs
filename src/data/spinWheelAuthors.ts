/**
 * Spin The Wheel (ଚକ୍ର ଘୁରାନ୍ତୁ) - ଲେଖକ (Author) Configuration
 * 
 * You can edit Author names, photo URLs, colors, and pranam mantras here.
 * Place photos in public/authors/ (e.g., public/authors/bhaktivinoda.jpg)
 * or use any direct image URL.
 */

export interface AuthorSongItem {
    id?: string;
    titleOdia: string;
    titleEnglish: string;
    searchQuery: string;
}

export interface SpinAuthorSlice {
    id: number;
    authorNameOdia: string;     // Full Odia Name
    authorNameEnglish: string;  // English Name
    line1: string;              // First line on slice (e.g. 'ଶ୍ରୀଲ ଭକ୍ତିବିନୋଦ')
    line2: string;              // Second line on slice (e.g. 'ଠାକୁର')
    photoUrl?: string;          // Author photo (/authors/bhaktivinoda.jpg or web URL)
    subtext: string;            // ଉପାଧି
    pranamMantra: string;       // ପ୍ରଣାମ ମନ୍ତ୍ର / ଆଶୀର୍ବାଦ
    color: string;              // ସ୍ଲାଇସ୍ ରଙ୍ଗ
    textColor?: string;
    badgeText: string;          // ୨-୩ ଅକ୍ଷର ପବିତ୍ର ଚିହ୍ନ (Fallback avatar)
    songs: AuthorSongItem[];    // ଆଚାର୍ଯ୍ୟଙ୍କ ସଙ୍ଗୀତ ତାଲିକା
}

export const DEFAULT_AUTHOR_SLICES: SpinAuthorSlice[] = [
    {
        id: 1,
        authorNameOdia: "ଶ୍ରୀଲ ଭକ୍ତିବିନୋଦ ଠାକୁର",
        authorNameEnglish: "Bhaktivinoda Thakura",
        line1: "ଶ୍ରୀଲ ଭକ୍ତିବିନୋଦ",
        line2: "ଠାକୁର",
        photoUrl: "/authors/bhaktivinoda_thakura.webp",
        subtext: "ସପ୍ତମ ଗୋସ୍ୱାମୀ",
        pranamMantra: "ନମୋ ଭକ୍ତିବିନୋଦାୟ ସଚ୍ଚିଦାନନ୍ଦ ନାମିନେ । ଗୌର-ଶକ୍ତି-ସ୍ୱରୂପାୟ ରୂପାନୁଗ-ବରାୟ ତେ ॥",
        color: "#7E57C2", // Soft Purple
        textColor: "#FFFFFF",
        badgeText: "ଭକ୍ତି",
        songs: [
            { id: 'song-jayaradhadhava', titleOdia: "ଜୟ ରାଧା-ମାଧବ", titleEnglish: "Jaya Radha Madhava", searchQuery: "Jaya Radha Madhava" },
            { id: 'bhaja-re-bhaja-re-amar', titleOdia: "ଭଜ ରେ ଭଜ ରେ ଆମାର", titleEnglish: "Bhaja Re Bhaja Re Amar", searchQuery: "Bhaja Re Bhaja Re" },
            { id: 'song-borosukherkhabar', titleOdia: "ବଡ଼ ସୁଖେର ଖବର ଗାଇ", titleEnglish: "Boro Sukher Khabor Gai", searchQuery: "Boro Sukher Khabor" },
            { id: 'song-gauraarati', titleOdia: "ଜୟ ଜୟ ଗୋରାଚାଁଦେର ଆରତିକ", titleEnglish: "Gaura Arati", searchQuery: "Gaura Arati" }
        ]
    },
    {
        id: 2,
        authorNameOdia: "ଶ୍ରୀଲ ନରୋତ୍ତମ ଦାସ ଠାକୁର",
        authorNameEnglish: "Narottama Dasa Thakura",
        line1: "ଶ୍ରୀଲ ନରୋତ୍ତମ",
        line2: "ଦାସ ଠାକୁର",
        photoUrl: "/authors/narottama.webp",
        subtext: "ପ୍ରେମ-ଭକ୍ତି ଚନ୍ଦ୍ରିକା ପ୍ରଣେତା",
        pranamMantra: "ଗୌରାଙ୍ଗେର ଦୁଟି ପଦ ଯାର ଧନ ସମ୍ପଦ । ସେ ଜାନେ ଭକତି-ରସ-ସାର ॥",
        color: "#D81B60", // Vibrant Magenta/Pink
        textColor: "#FFFFFF",
        badgeText: "ନରୋତ୍ତମ",
        songs: [
            { id: 'song-hariharayenamah', titleOdia: "ହରି ହରୟେ ନମଃ କୃଷ୍ଣ ଯାଦବାୟ", titleEnglish: "Hari Haraye Namah", searchQuery: "Hari Haraye Namah" },
            { titleOdia: "ଗୌରାଙ୍ଗେର ଦୁଟି ପଦ", titleEnglish: "Gaurangera Duti Pada", searchQuery: "Gaurangera Duti Pada" },
            { titleOdia: "ନିତାଇ ପଦ କମଳ", titleEnglish: "Nitai Pada Kamala", searchQuery: "Nitai Pada Kamala" },
            { titleOdia: "ଶ୍ରୀ ରୂପ ମଞ୍ଜରୀ ପଦ", titleEnglish: "Sri Rupa Manjari Pada", searchQuery: "Sri Rupa Manjari Pada" }
        ]
    },
    {
        id: 3,
        authorNameOdia: "ଶ୍ରୀଲ ପ୍ରଭୁପାଦ",
        authorNameEnglish: "Srila Prabhupada",
        line1: "ଶ୍ରୀଲ ପ୍ରଭୁପାଦ",
        line2: "ସଂସ୍ଥାପକ",
        photoUrl: "/authors/prabhupada.webp",
        subtext: "ଇସ୍କନ ସଂସ୍ଥାପକ ଆଚାର୍ଯ୍ୟ",
        pranamMantra: "ନମଃ ଓଁ ବିଷ୍ଣୁପାଦାୟ କୃଷ୍ଣ-ପ୍ରେଷ୍ଠାୟ ଭୂତଳେ । ଶ୍ରୀମତେ ଭକ୍ତିବେଦାନ୍ତ-ସ୍ୱାମୀନ୍ ଇତି ନାମିନେ ॥",
        color: "#5E35B1", // Deep Violet Purple
        textColor: "#FFFFFF",
        badgeText: "ପ୍ରଭୁପାଦ",
        songs: [
            { id: 'song-barabaraplankori', titleOdia: "ବାର ବାର ପ୍ଲ୍ୟାନ କରେ", titleEnglish: "Bara Bara Plan Kori", searchQuery: "Bara Bara Plan Kori" },
            { id: 'song-nityasiddhaparsadasaba', titleOdia: "ନିତ୍ୟ-ସିଦ୍ଧ ପାର୍ଷଦ ସବ", titleEnglish: "Nitya Siddha Parsada Saba", searchQuery: "Nitya Siddha Parsada" },
            { id: 'song-mahavadanyaisvara', titleOdia: "ମହାବଦାନ୍ୟ ଈଶ୍ୱର ଶ୍ରୀ ଗୌରସୁନ୍ଦର", titleEnglish: "Maha Vadanya Isvara", searchQuery: "Maha Vadanya Isvara" },
            { titleOdia: "ମାର୍କିନ ଭାଗବତ ଧର୍ମ", titleEnglish: "Markine Bhagavata Dharma", searchQuery: "Markine Bhagavata Dharma" }
        ]
    },
    {
        id: 4,
        authorNameOdia: "ଶ୍ରୀ ରୂପ ଗୋସ୍ୱାମୀ",
        authorNameEnglish: "Rupa Goswami",
        line1: "ଶ୍ରୀ ରୂପ",
        line2: "ଗୋସ୍ୱାମୀ",
        photoUrl: "/authors/rupa_goswami.webp",
        subtext: "ରସାଚାର୍ଯ୍ୟ ଗୋସ୍ୱାମୀ",
        pranamMantra: "ଶ୍ରୀ ଚୈତନ୍ୟ ମନୋଽଭୀଷ୍ଟଂ ସ୍ଥାପିତଂ ଯେନ ଭୂତଳେ । ସ୍ୱୟଂ ରୂପଃ କଦା ମହ୍ୟଂ ଦଦାତି ସ୍ୱପଦାନ୍ତକମ୍ ॥",
        color: "#E91E63", // Hot Pink
        textColor: "#FFFFFF",
        badgeText: "ରୂପ",
        songs: [
            { id: 'song-yamunastakam', titleOdia: "ଶ୍ରୀ ଯମୁନାଷ୍ଟକମ୍ (ଭ୍ରାତୃ ଅନ୍ତକସ୍ୟ)", titleEnglish: "Yamunastakam", searchQuery: "Yamunastakam" },
            { id: 'song-radhejayajaya', titleOdia: "ରାଧେ ଜୟ ଜୟ ମାଧବ-ଦୟିତେ", titleEnglish: "Radhe Jaya Jaya", searchQuery: "Radhe Jaya Jaya" },
            { titleOdia: "କୃଷ୍ଣ ଦେବ ଭବନ୍ତଂ ବନ୍ଦେ", titleEnglish: "Krsna Deva Bhavantam Vande", searchQuery: "Krsna Deva" }
        ]
    },
    {
        id: 5,
        authorNameOdia: "ଶ୍ରୀଳ କୃଷ୍ଣଦାସ କବିରାଜ",
        authorNameEnglish: "Krsnadasa Kaviraja Goswami",
        line1: "ଶ୍ରୀଳ କୃଷ୍ଣଦାସ",
        line2: "କବିରାଜ",
        photoUrl: "/authors/krishnadasa_kaviraja.webp",
        subtext: "ଶ୍ରୀ ଚୈତନ୍ୟ ଚରିତାମୃତ ରଚୟିତା",
        pranamMantra: "ଜୟ ଜୟ ଶ୍ରୀ ଚୈତନ୍ୟ ଜୟ ନିତ୍ୟାନନ୍ଦ । ଜୟାଦ୍ୱୈତଚନ୍ଦ୍ର ଜୟ ଗୌରଭକ୍ତବୃନ୍ଦ ॥",
        color: "#4A148C", // Deep Imperial Purple
        textColor: "#FFFFFF",
        badgeText: "କବିରାଜ",
        songs: [
            { id: 'song-bhajagaurangakahagauranga', titleOdia: "ଭଜ ଗୌରାଙ୍ଗ କହ ଗୌରାଙ୍ଗ", titleEnglish: "Bhaja Gauranga Kaha Gauranga", searchQuery: "Bhaja Gauranga" },
            { id: 'song-ambudanjanendranila', titleOdia: "ଅମ୍ବୁଦାଞ୍ଜନେନ୍ଦ୍ରନୀଳ", titleEnglish: "Ambudanjanendra Nila", searchQuery: "Ambudanjanendra Nila" },
            { titleOdia: "ଜୟ ଜୟ ଶ୍ରୀ ଚୈତନ୍ୟ ଜୟ ନିତ୍ୟାନନ୍ଦ", titleEnglish: "Jaya Jaya Sri Caitanya", searchQuery: "Jaya Jaya Sri Caitanya" }
        ]
    },
    {
        id: 6,
        authorNameOdia: "ଶ୍ରୀଲ ଲୋଚନ ଦାସ ଠାକୁର",
        authorNameEnglish: "Locana Dasa Thakura",
        line1: "ଶ୍ରୀଲ ଲୋଚନ",
        line2: "ଦାସ ଠାକୁର",
        photoUrl: "/authors/locana.webp",
        subtext: "ଶ୍ରୀ ଚୈତନ୍ୟ ମଙ୍ଗଳ ପ୍ରଣେତା",
        pranamMantra: "ପରମ କରୁଣ ପହୁଁ ଦୁଇ ଜନ, ନିତାଇ ଗୌରଚନ୍ଦ୍ର । ସବ ଅବତାର-ସାର ଶିରୋମଣି କେବଳ ଆନନ୍ଦ-କନ୍ଦ ॥",
        color: "#C2185B", // Vibrant Pink/Berry
        textColor: "#FFFFFF",
        badgeText: "ଲୋଚନ",
        songs: [
            { id: 'song-nitaimorajibanadhana', titleOdia: "ନିତାଇ ମୋର ଜୀବନ ଧନ", titleEnglish: "Nitai Mora Jibana Dhana", searchQuery: "Nitai Mora Jibana Dhana" },
            { id: 'song-bhajabhajahari', titleOdia: "ଭଜ ଭଜ ହରି", titleEnglish: "Bhaja Bhaja Hari", searchQuery: "Bhaja Bhaja Hari" },
            { id: 'song-kejabikejabi', titleOdia: "କେ ଯାବି କେ ଯାବି ଭାଇ ଭବ ସିନ୍ଧୁ ପାର", titleEnglish: "Ke Jabi Ke Jabi Bhai", searchQuery: "Ke Jabi Ke Jabi" },
            { titleOdia: "ପରମ କରୁଣ ପହୁଁ ଦୁଇ ଜନ", titleEnglish: "Parama Karuna Pahu Dui Jana", searchQuery: "Parama Karuna" }
        ]
    }
];
