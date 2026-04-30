


export const SacredLotus = ({ size = 24, color = 'currentColor' }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 17 18 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 18 12 22 12 22Z" fill={color} opacity="0.2" />
        <path d="M12 22C12 22 19 19 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 19 12 22 12 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 2V6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M10 4L12 6L14 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" fill={color} opacity="0.3" />
    </svg>
);

export const TempleShikhara = ({ size = 24, color = 'currentColor' }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main Jagannath-style Shikhara */}
        {/* Base Garbhagriha */}
        <rect x="25" y="80" width="50" height="15" rx="2" fill={color} opacity="0.6" />
        <rect x="28" y="75" width="44" height="6" rx="1" fill={color} opacity="0.7" />
        
        {/* Tiered Middle Sections (Bhumis) */}
        <path d="M30 75 L32 65 H68 L70 75 H30Z" fill={color} opacity="0.8" />
        <path d="M32 65 L34 55 H66 L68 65 H32Z" fill={color} opacity="0.9" />
        <path d="M34 55 L36 45 H64 L66 55 H34Z" fill={color} />
        
        {/* Upper Shikhara (Curvilinear - Rekha Deula style) */}
        <path d="M36 45 C38 35 42 25 50 15 C58 25 62 35 64 45 H36Z" fill={color} />
        
        {/* Horizontal Ribbing (Amalaka feel) */}
        <path d="M40 40 H60" stroke="white" strokeWidth="1" opacity="0.2" />
        <path d="M42 32 H58" stroke="white" strokeWidth="1" opacity="0.2" />
        <path d="M45 25 H55" stroke="white" strokeWidth="1" opacity="0.2" />
        
        {/* Amalaka & Kalasha (Top) */}
        <circle cx="50" cy="12" r="5" fill={color} />
        <circle cx="50" cy="6" r="3" fill={color} />
        
        {/* Chakra & Dhwaja (Flag) */}
        <circle cx="50" cy="12" r="6" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <path d="M50 1 L50 8" stroke={color} strokeWidth="1.5" />
        <path d="M50 2 L62 5 L50 7V2Z" fill="#ef4444" /> {/* Red Flag */}
    </svg>
);

export const NamasteIcon = ({ size = 24, color = 'currentColor' }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C12 21 7 17 7 11C7 8.5 8.5 6 12 6C15.5 6 17 8.5 17 11C17 17 12 21 12 21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 11C10 11 11 10 12 10C13 10 14 11 14 11M12 14V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6L9 4M14 6L15 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const LotusIcon = ({ size = 24, color = 'currentColor' }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 18 18 18 12C18 9 16 7 12 7C8 7 6 9 6 12C6 18 12 22 12 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C12 22 22 17 22 12C22 9 20 7 17 7C14 7 12 9 12 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C12 22 2 17 2 12C2 9 4 7 7 7C10 7 12 9 12 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7V2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const ConchIcon = ({ size = 24, color = 'currentColor' }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.5 3 4 6.5 4 11C4 16.5 9 21 12 21C15 21 20 16.5 20 11C20 6.5 16.5 3 12 3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7C12 7 10 9 10 11C10 13 12 15 12 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11C14 11 16 11 18 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
