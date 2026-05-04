/**
 * Normalizes strings for diacritic-blind matching and searching.
 * @param str The string to normalize
 * @param aggressive If true, removes vowels to bridge transliteration differences (e.g., "Gurudev" vs "Gurudeva")
 */
export const normalizeForSearch = (str: string, aggressive = false): string => {
    if (!str) return '';
    let res = str.toLowerCase()
        .replace(/ṛ/g, 'r').replace(/ś/g, 's').replace(/ṣ/g, 's')
        .replace(/ā/g, 'a').replace(/ī/g, 'i').replace(/ū/g, 'u')
        .replace(/ḍ/g, 'd').replace(/ḥ/g, 'h').replace(/ḷ/g, 'l')
        .replace(/ṃ/g, 'm').replace(/ṅ/g, 'n').replace(/ñ/g, 'n').replace(/ṇ/g, 'n')
        .replace(/ṭ/g, 't')
        .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove standard diacritics
    
    if (aggressive) {
        // Aggressive mode: remove vowels to bridge "Bhratur" vs "Bhrtur" differences
        res = res.replace(/[aeiouy]/g, '');
    }
    
    return res.replace(/[^a-z0-9]/g, '');
};

/**
 * Calculates Levenshtein distance between two strings.
 */
export const levenshteinDistance = (a: string, b: string): number => {
    const matrix = Array.from({ length: a.length + 1 }, () => 
        Array.from({ length: b.length + 1 }, (_, i) => i)
    );
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }
    return matrix[a.length][b.length];
};

/**
 * Checks if two song titles are a likely match using multiple strategies.
 */
export const isTitleMatch = (title1: string, title2: string, odia1?: string, odia2?: string): boolean => {
    const t1 = normalizeForSearch(title1);
    const t2 = normalizeForSearch(title2);
    
    if (!t1 || !t2) return false;

    // 1. Exact normalized match
    if (t1 === t2) return true;

    // 2. Substring match (for cases like "Gopinath Part 2 (Ghuchao Sansar)")
    if (t1.length > 8 && t2.length > 8) {
        if (t1.includes(t2) || t2.includes(t1)) return true;
    }

    // 3. Aggressive match (vowel-less)
    const a1 = normalizeForSearch(title1, true);
    const a2 = normalizeForSearch(title2, true);
    if (a1 === a2 && a1.length > 3) return true;

    // 4. Levenshtein match (allow small distance relative to length)
    const dist = levenshteinDistance(t1, t2);
    const maxDist = Math.floor(Math.min(t1.length, t2.length) * 0.2); // 20% error threshold
    if (dist <= maxDist && dist <= 3) return true;

    // 5. Odia Match (if both have Odia titles)
    if (odia1 && odia2) {
        const ok1 = odia1.replace(/[\s\W]/g, '');
        const ok2 = odia2.replace(/[\s\W]/g, '');
        if (ok1 && ok2 && (ok1 === ok2 || ok1.includes(ok2) || ok2.includes(ok1))) return true;
    }

    return false;
};

/**
 * Maps legacy or variation author names to the standardized catalog name.
 */
export const standardizeAuthorName = (author: string): string => {
    if (!author) return 'Other Authors';
    
    const name = author.trim();
    
    const AUTHOR_MAP: Record<string, string> = {
        'A.C. Bhaktivedanta Swami': 'Srila Prabhupada',
        'A. C. Bhaktivedanta Swami Prabhupada': 'Srila Prabhupada',
        'Srila Prabhupada': 'Srila Prabhupada',
        'Krsna Dasa': 'Krsnadasa Kaviraja Goswami',
        'Krsnadasa Kaviraja Goswami': 'Krsnadasa Kaviraja Goswami',
        'Others Authors': 'Other Authors',
        'Other Authors': 'Other Authors'
    };

    // Odia name mappings
    if (name.includes('ଭକ୍ତି ବିନୋଦ')) return 'Bhaktivinoda Thakura';
    if (name.includes('ନରୋତ୍ତମ')) return 'Narottama Dasa Thakura';
    if (name.includes('ଭକ୍ତି ସିଦ୍ଧାନ୍ତ')) return 'Bhaktisiddhanta Saraswati';
    if (name.includes('ଲୋଚନ ଦାସ')) return 'Locana Dasa Thakura';
    if (name.includes('ଶ୍ରୀ ଚୈତନ୍ୟ')) return 'Sri Caitanya Mahaprabhu';
    if (name.includes('ବ୍ୟାସଦେବ')) return 'Vyasadeva';
    if (name.includes('ସତ୍ୟବ୍ରତ ମୁନି')) return 'Satyavrata Muni';
    if (name.includes('ଶୁକଦେବ ଗୋସ୍ୱାମୀ')) return 'Sukadeva Gosvami';

    return AUTHOR_MAP[name] || name;
};
