export const ODIA_NUMBERS = ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'];

export const toOdiaNumber = (num: number | string) => {
    return String(num).split('').map(char => {
        const digit = parseInt(char);
        return isNaN(digit) ? char : ODIA_NUMBERS[digit];
    }).join('');
};
