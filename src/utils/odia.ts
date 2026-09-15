export const ODIA_NUMBERS = ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'];

export const toOdiaNumber = (num: number | string) => {
    return String(num).split('').map(char => {
        const digit = parseInt(char);
        return isNaN(digit) ? char : ODIA_NUMBERS[digit];
    }).join('');
};

export const hasEndingVerseNumber = (text: string): boolean => {
    if (!text) return false;
    const trimmed = text.trim();
    // Matches patterns like ।।୧।।, ॥୧॥, |୧|, (୧), [୧], ।। 1 ।।, etc. at the end of the text
    return /([।॥|/()\[\]]{1,2}\s*[\d୦-୯]+\s*[।॥|/()\[\]]{1,2}|\b[\d୦-୯]+\s*[।॥|])\s*$/.test(trimmed);
};
