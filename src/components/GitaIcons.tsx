import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const GitaCh1Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Arjuna sitting dejected */}
    <path d="M7 18c0-2 1-4 3-4s3 2 3 4" /> {/* Body */}
    <circle cx="10" cy="12" r="2" /> {/* Head */}
    <path d="M10 14l-2 2" /> {/* Arm */}
    {/* Bow */}
    <path d="M16 6c2 3 2 9 0 12" />
    <path d="M16 6l-6 6 6 6" strokeOpacity="0.3" />
  </svg>
);

export const GitaCh2Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Krishna teaching Arjuna */}
    <circle cx="7" cy="10" r="2" /> {/* Arjuna */}
    <path d="M5 18c0-2 1-4 2-4s2 2 2 4" />
    <circle cx="17" cy="8" r="2" /> {/* Krishna */}
    <path d="M15 18c0-3 1-5 2-5s2 2 2 5" />
    <path d="M15 10l-4 2" /> {/* Teaching gesture */}
  </svg>
);

export const GitaCh3Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Bow and Arrow (Karma) */}
    <path d="M8 4c4 4 4 12 0 16" />
    <path d="M8 12h10l-2-2m2 2l-2 2" />
    <path d="M5 12h3" />
  </svg>
);

export const GitaCh4Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Wisdom (Finger Pointing Up) */}
    <path d="M12 18c0-3 1-5 2-5s2 2 2 5" />
    <circle cx="14" cy="8" r="2" />
    <path d="M9 12v-4a1 1 0 0 1 2 0v4" />
    <path d="M9 10h2" />
  </svg>
);

export const GitaCh5Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Renunciation (Meditator palms up) */}
    <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M12 10c-4 0-6 2-6 5v2h12v-2c0-3-2-5-6-5Z" />
    <path d="M6 14l-3-1" />
    <path d="M18 14l3-1" />
  </svg>
);

export const GitaCh6Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Dhyana (Meditation) */}
    <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M12 10c-4 0-6 2-6 5v2h12v-2c0-3-2-5-6-5Z" />
    <path d="M10 17h4" />
  </svg>
);

export const GitaCh7Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Eye of Knowledge */}
    <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8Z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 4V2M12 22v-2M4.93 4.93L3.5 3.5M20.5 20.5l-1.43-1.43M2 12h2m16 0h2M4.93 19.07l-1.43 1.43M20.5 3.5l-1.43 1.43" />
  </svg>
);

export const GitaCh8Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Soul Ascending */}
    <path d="M12 18c0-2-1-3-2-3s-2 1-2 3" />
    <circle cx="10" cy="13" r="1.5" />
    <path d="M14 15V6m0 0l-2 2m2-2l2 2" stroke-dasharray="2 2" />
    <circle cx="14" cy="3" r="1.5" />
  </svg>
);

export const GitaCh9Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Heart (Most Confidential Knowledge) */}
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 8v4m-2-2h4" strokeOpacity="0.5" />
  </svg>
);

export const GitaCh10Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Vibhuti (Sun over Mountains) */}
    <path d="M2 20h20l-4-8-4 4-4-10-4 14Z" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 1v2m0 6v2m5-5h-2m-8 0h-2" />
  </svg>
);

export const GitaCh11Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Vishvarupa (Universal Form) */}
    <circle cx="12" cy="7" r="2" />
    <circle cx="8" cy="8" r="1.5" />
    <circle cx="16" cy="8" r="1.5" />
    <path d="M12 20c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5Z" />
    <path d="M7 15l-3 1m13-1l3 1M6 12l-2-2m14 2l2-2M9 10l-1-3m7 3l1-3" />
  </svg>
);

export const GitaCh12Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Bhakti (Praying Hands) */}
    <path d="M10 18c1-4 1-8 2-12 1 4 1 8 2 12M10 18h4" />
    <path d="M12 6c-2 4-2 8-3 12m6-12c2 4 2 8 3 12" strokeOpacity="0.5" />
    <path d="M8 12c-2 1-3 3-3 5m14-5c2 1 3 3 3 5" />
  </svg>
);

export const GitaCh13Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Kshetra (Field & Knower) */}
    <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export const GitaCh14Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Three Gunas (Wavy lines) */}
    <path d="M4 8h12M4 12h12M4 16h12" stroke-dasharray="1 2" />
    <circle cx="18" cy="8" r="1.5" />
    <circle cx="18" cy="12" r="1.5" />
    <circle cx="18" cy="16" r="1.5" />
  </svg>
);

export const GitaCh15Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Inverted Tree (Purushottama) */}
    <path d="M12 14V4" />
    <path d="M12 4l-4 4m4-4l4 4" />
    <path d="M8 14c0 3 2 6 4 6s4-3 4-6" />
    <path d="M6 16l-2 2m14-2l2 2m-8 4v-2" />
  </svg>
);

export const GitaCh16Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Divine vs Demonic Face */}
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v18" strokeOpacity="0.3" />
    <path d="M8 9h.01M16 9h.01" />
    <path d="M7 15c1 1 2 1 3 0" /> {/* Half smile */}
    <path d="M14 16c1-1 2-1 3 0" /> {/* Half scowl */}
    <path d="M17 14l1-1" /> {/* Little horn idea */}
  </svg>
);

export const GitaCh17Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Three Faiths (Flames) */}
    <path d="M7 18c0-3 2-5 2-5s2 2 2 5-2 3-2 3-2-1-2-3Z" />
    <path d="M13 18c0-3 2-5 2-5s2 2 2 5-2 3-2 3-2-1-2-3Z" />
    <path d="M10 12c0-3 2-5 2-5s2 2 2 5-2 3-2 3-2-1-2-3Z" />
  </svg>
);

export const GitaCh18Icon: React.FC<IconProps> = ({ size = 64, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Conclusion (Open Gate to Sun) */}
    <path d="M6 21V7a6 6 0 0 1 12 0v14" />
    <path d="M6 14h12" strokeOpacity="0.2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 9v1m3 2h1m-7 0H8m4 3v1" />
  </svg>
);
