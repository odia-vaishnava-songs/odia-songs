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
    id: number | string;
    lyric: string;
    translation: string;
    wordMeanings?: WordMeaning[];
    status?: 'NOT_DONE' | 'IN_PROGRESS' | 'COMPLETED';
    count?: number | string;
    [key: string]: any;
}


export interface AudioVersion {
    label: string;
    url: string;
}

export interface StructuredSong {
    id?: string;
    title?: string;
    tags?: string[];
    title_english?: string;
    title_odia?: string;
    author?: string;
    verses: SongVerse[];
    reference_url?: string;
    [key: string]: any;
}

export interface Resource {
    id: string;
    title: string;
    title_odia?: string;
    title_english?: string;
    tags?: string[];
    views?: number;
    original_lang?: string;
    display_order?: number;
    category: string;
    type: 'video' | 'article' | 'audio' | 'pdf' | 'interactive' | 'html';
    url?: string;
    audioUrl?: string; // Single/default audio
    vocalist?: string; // Label for the main audio
    audio_source?: string; // Source of the file (Google Drive, Cloudinary, etc)
    audioVersions?: AudioVersion[]; // Multiple versions
    description?: string;
    content?: string;
    structuredContent?: StructuredSong;
    author?: string;
    author_id?: string;
    verified?: boolean;
    status?: 'NOT_DONE' | 'IN_PROGRESS' | 'COMPLETED';
    assigned_to?: string;
    published?: boolean;
}

export interface User {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    city?: string;
    userId?: string;
    role: 'user' | 'admin' | 'subadmin';
    assignedSongCount?: number;
    completedSongCount?: number;
}
