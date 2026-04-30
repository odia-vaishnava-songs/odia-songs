
import React from 'react';

export const TempleShikhara = ({ size = 24, color = 'currentColor' }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flag (Dhwaja) */}
        <path d="M12 2L15 3L12 4" fill={color} />
        <path d="M12 1V5" stroke={color} strokeWidth="1" strokeLinecap="round" />
        
        {/* Shikhara Body with horizontal tiers (Bhumis) */}
        <path d="M12 5L16 10H8L12 5Z" fill={color} opacity="0.8" />
        <path d="M16 10L17 15H7L8 10H16Z" fill={color} opacity="0.6" />
        <path d="M17 15L18 20H6L7 15H17Z" fill={color} opacity="0.4" />
        
        {/* Base / Garbhagriha */}
        <rect x="5" y="20" width="14" height="3" rx="1" fill={color} />
        
        {/* Outline for definition */}
        <path d="M12 5L6 20H18L12 5Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M8.5 10H15.5M7.5 15H16.5" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
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
