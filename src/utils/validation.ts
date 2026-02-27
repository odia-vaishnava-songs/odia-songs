export const isValidIndianMobile = (phone: string): boolean => {
    // Remove any non-digit characters just in case
    const cleanPhone = phone.replace(/\D/g, '');

    // 1. Must be exactly 10 digits
    if (cleanPhone.length !== 10) return false;

    // 2. Must start with 6, 7, 8, or 9
    if (!/^[6-9]/.test(cleanPhone)) return false;

    // 3. Check for repeating characters (e.g. 1111111111, 9999999999)
    if (/^(\d)\1{9}$/.test(cleanPhone)) return false;

    return true;
};
