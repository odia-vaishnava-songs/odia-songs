export interface Contact {
    id: string;
    name: string;
    phone: string;
    email: string;
    service: string;
    location: string;
    notes: string;
    createdAt: number;
}

export interface SadhanaEntry {
    id: string;
    date: string; // YYYY-MM-DD
    devoteeName?: string;
    japaRounds: number;
    readingDurationMinutes: number;
    hearingDurationMinutes: number;
    serviceDescription: string;
    notes: string;
    userId?: string;
}

export interface WordMeaning {
    word: string;
    meaning: string;
}

export interface SongVerse {
    id: number;
    lyric: string;
    translation: string;
    wordMeanings?: WordMeaning[];
}

export interface AudioVersion {
    label: string;
    url: string;
}

export interface StructuredSong {
    verses: SongVerse[];
}

export interface Resource {
    id: string;
    title: string;
    category: string;
    type: 'video' | 'article' | 'audio' | 'pdf' | 'interactive';
    url?: string;
    audioUrl?: string; // Single/default audio
    audioVersions?: AudioVersion[]; // Multiple versions
    description: string;
    content?: string;
    structuredContent?: StructuredSong;
    author?: string;
    verified?: boolean;
    status?: 'NOT_DONE' | 'IN_PROGRESS' | 'COMPLETED';
}

export interface User {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    city?: string;
    userId?: string;
    role: 'user' | 'admin' | 'subadmin';
}
