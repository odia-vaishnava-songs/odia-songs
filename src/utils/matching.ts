export function levenshteinDistance(s1: string, s2: string): number {
    const len1 = s1.length;
    const len2 = s2.length;
    const matrix: number[][] = [];

    for (let i = 0; i <= len1; i++) matrix[i] = [i];
    for (let j = 0; j <= len2; j++) matrix[0][j] = j;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }
    return matrix[len1][len2];
}

export function normalizeForSearch(str: string, aggressive = false): string {
    if (!str) return '';
    let res = str.toLowerCase();
    
    if (aggressive) {
        // Remove vowels and common transliteration artifacts
        res = res.replace(/[aeiouy]/g, '');
    }
    
    // Remove all non-alphanumeric
    return res.replace(/[^a-z0-9]/g, '');
}

/**
 * Robust title matching with fuzzy fallback
 */
export function isTitleMatch(
    title1: string, 
    title2: string, 
    odia1?: string, 
    odia2?: string
): boolean {
    if (!title1 || !title2) return false;

    const t1 = title1.toLowerCase().trim();
    const t2 = title2.toLowerCase().trim();

    // 1. Exact match (case insensitive)
    if (t1 === t2) return true;

    // 2. Part-agnostic match
    const cleanPart = (s: string) => s.replace(/part\s*\d+/gi, '').trim();
    const ct1 = cleanPart(t1);
    const ct2 = cleanPart(t2);
    if (ct1 === ct2 && ct1.length > 3) return true;

    // 3. Simple inclusion (only for longer titles)
    if (t1.length > 10 && t2.length > 10) {
        if (t1.includes(t2) || t2.includes(t1)) return true;
    }

    // 4. Aggressive match (vowel-less)
    const a1 = normalizeForSearch(title1, true);
    const a2 = normalizeForSearch(title2, true);
    if (a1 === a2 && a1.length > 3) return true;

    // 5. Levenshtein match (allow small distance relative to length)
    const dist = levenshteinDistance(t1, t2);
    const maxDist = Math.floor(Math.min(t1.length, t2.length) * 0.2); // 20% error threshold
    if (dist <= maxDist && dist <= 3) return true;

    // 6. Odia Match (if both have Odia titles)
    if (odia1 && odia2) {
        const ok1 = odia1.replace(/[\s\W]/g, '');
        const ok2 = odia2.replace(/[\s\W]/g, '');
        if (ok1 && ok2 && (ok1 === ok2 || ok1.includes(ok2) || ok2.includes(ok1))) return true;
    }

    return false;
}

export function standardizeAuthorName(name: string): string {
    if (!name) return 'Other Authors';
    const n = name.toLowerCase().trim();
    
    // 1. Check for well-known aliases first
    if (n.includes('prabhupada') || n.includes('bhaktivedanta')) return 'Srila Prabhupada';
    if (n.includes('bhaktivinoda')) return 'Bhaktivinoda Thakura';
    if (n.includes('narottama')) return 'Narottama Dasa Thakura';
    if (n.includes('govinda dasa')) return 'Govinda Dasa Kaviraja';
    if (n.includes('kaviraja goswami')) return 'Krsnadasa Kaviraja Goswami';
    if (n.includes('visvanatha')) return 'Visvanatha Cakravarti Thakura';
    if (n.includes('bhagavatam')) return 'Srimad Bhagavatam';
    if (n.includes('upa') || n.includes('upadesamrta')) return 'Rupa Goswami';
    if (n.includes('vrndavana dasa') || n.includes('vrindavan das')) return 'Vrndavana Dasa Thakura';
    if (n.includes('locana dasa') || n.includes('lochan das')) return 'Locana Dasa Thakura';
    if (n.includes('jayadeva')) return 'Jayadeva Goswami';
    if (n.includes('sarvabhauma')) return 'Sarvabhauma Bhattacarya';
    if (n.includes('raghunatha dasa')) return 'Raghunatha Dasa Goswami';
    if (n.includes('bhaktisiddhanta')) return 'Bhaktisiddhanta Saraswati';
    if (n.includes('adi sankaracarya') || n.includes('sankaracharya')) return 'Adi Sankaracarya';
    if (n.includes('sanatana')) return 'Sanatana Goswami';
    if (n.includes('jiva')) return 'Jiva Goswami';
    if (n.includes('srinivasa')) return 'Srinivasa Acarya';
    if (n.includes('devakinandana')) return 'Devakinandana Dasa Thakura';
    if (n.includes('bilvamangala')) return 'Bilvamangala Thakura';
    if (n.includes('vyasadeva')) return 'Vyasadeva';
    if (n.includes('caitanya') || n.includes('chaitanya')) return 'Sri Caitanya Mahaprabhu';
    if (n.includes('satyavrata')) return 'Satyavrata Muni';
    if (n.includes('sukadeva')) return 'Sukadeva Gosvami';
    if (n.includes('vasudeva ghosha') || n.includes('vasudev ghosh')) return 'Vasudeva Ghosha';
    if (n.includes('krsna dasa') || n.includes('krishna das')) return 'Krsna Dasa';
    if (n.includes('vallabhacarya') || n.includes('vallabhacharya')) return 'Vallabhacarya';
    if (n.includes('salabega')) return 'Bhakta Salabega';
    if (n.includes('mira bhai') || n.includes('mirabai')) return 'Mira Bhai';
    if (n.includes('iskcon')) return 'ISKCON';
    
    return 'Other Authors';
}
