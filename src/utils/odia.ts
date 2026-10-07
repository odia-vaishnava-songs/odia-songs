export const ODIA_NUMBERS = ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'];

export const toOdiaNumber = (num: number | string): string => {
    return String(num).split('').map(char => {
        const digit = parseInt(char);
        return isNaN(digit) ? char : ODIA_NUMBERS[digit];
    }).join('');
};

export const hasEndingVerseNumber = (text: string): boolean => {
    if (!text) return false;
    const trimmed = text.trim();
    // Matches patterns like ।।୧।।, ॥୧॥, |୧|, (୧), [୧], ।। 1 ।।, ।। ଘୋଷା ।।, etc. at the end of the text
    return /([।॥|/()\[\]]{1,2}\s*([\d୦-୯]+|ଘୋଷା)\s*[।॥|/()\[\]]{1,2}|\b[\d୦-୯]+\s*[।॥|])\s*$/i.test(trimmed);
};

export interface FormattedVerse {
    lyricText: string;
    markerText: string;
}

/**
 * Cleanly separates and standardizes verse lyric text and the ending verse marker.
 * Replaces ugly pipes (|୧|) and double punctuation (। ।।) with beautiful, traditional Odia numbering (।। ୧ ।। / ।। ଘୋଷା ।।).
 */
export const getFormattedVerseDisplay = (lyric: string, verseId: string | number): FormattedVerse => {
    if (!lyric) return { lyricText: '', markerText: '' };

    const trimmed = lyric.trim();

    // Check if the lyric already has an ending verse marker (e.g. ।।୧।।, ।। 1 ।।, |୧|, (୧), ।। ଘୋଷା ।।)
    const match = trimmed.match(/([।॥|/()\[\]]{1,2}\s*([\d୦-୯]+|ଘୋଷା)\s*[।॥|/()\[\]]{1,2}|\b[\d୦-୯]+\s*[।॥|])\s*$/i);
    if (match) {
        const textBefore = trimmed.substring(0, match.index).trimEnd();
        // Remove trailing dandas/pipes before the marker
        const cleanedText = textBefore.replace(/[\s।॥|]+$/g, '').trimEnd();

        const rawContent = match[2] || match[0].replace(/[^\d୦-୯ଘୋଷା]/g, '');
        const marker = rawContent === 'ଘୋଷା' ? '।। ଘୋଷା ।।' : `।। ${toOdiaNumber(rawContent)} ।।`;

        return {
            lyricText: cleanedText,
            markerText: marker
        };
    }

    // If no ending verse marker:
    // Clean any trailing dandas (e.g. "। ।।" or "।।") from the lyric text
    const cleanedText = trimmed.replace(/[\s।॥|]+$/g, '').trimEnd();

    const strId = String(verseId).trim().toLowerCase();
    const isGhosa = strId === 'ଘୋଷା' || strId === 'ghosa' || strId === 'refrain' || strId === '0';
    const marker = isGhosa ? '।। ଘୋଷା ।।' : `।। ${toOdiaNumber(verseId)} ।।`;

    return {
        lyricText: cleanedText,
        markerText: marker
    };
};
