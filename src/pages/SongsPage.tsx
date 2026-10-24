import React, { useState, useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import { supabase } from '../supabase/config';
import { Search, ArrowLeft, ArrowRight, SlidersHorizontal, CheckCircle2, Menu, BookOpen, BookA, BookText, Circle, X, Mic, Sparkles, Crosshair, Eye, Users, ChevronLeft, ChevronRight, Type, Minus, Plus, List, History, Settings, Volume2, VolumeX, Play, Flame, Sun, Heart, Shield, Music, Landmark, Clock } from 'lucide-react';
import type { Resource } from '../types';
import { getStatusColor } from '../constants/colors';

import { AudioPlayer } from '../components/AudioPlayer';
import { CompactAudioBar } from '../components/CompactAudioBar';
import { useAudio } from '../context/AudioContext';
import { useAuth } from '../hooks/useAuth';
import { useSongs } from '../hooks/useSongs';
import * as TempleIcons from '../components/TempleIcons';
import { AUTHOR_CATALOG } from '../data/authorCatalog';
import { normalizeForSearch, isTitleMatch, standardizeAuthorName } from '../utils/matching';
import { Spinner } from '../components/Spinner';
import { SpinWheelModal } from '../components/SpinWheelModal';

import { TATTVA_THEMES } from '../constants/themes';
import { toOdiaNumber, getFormattedVerseDisplay } from '../utils/odia';
import * as GitaIcons from '../components/GitaIcons';
import { pushBackHandler, popBackHandler } from '../utils/backHandler';
import { getBookCatalog, getBookCatalogCounts } from '../data/bookCatalog';

type ViewMode = 'combined' | 'sequential' | 'word-to-word';

const FilterMenuItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    odia: string;
    onClick: () => void;
    active?: boolean;
}> = ({ icon, label, odia, onClick, active }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0.75rem 1.25rem',
                background: active ? 'rgba(22, 163, 74, 0.1)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                color: active ? '#166534' : '#475569',
                position: 'relative'
            }}
            onMouseEnter={(e) => {
                if (!active) {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.color = '#1e293b';
                }
            }}
            onMouseLeave={(e) => {
                if (!active) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#475569';
                }
            }}
        >
            <div style={{
                color: active ? '#16a34a' : '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px'
            }}>
                {icon}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>{label}</span>
                <span style={{ fontSize: '0.6rem', fontWeight: 600, opacity: 0.7, fontFamily: 'var(--font-odia-sans)' }}>{odia}</span>
            </div>
            {active && (
                <div style={{
                    position: 'absolute',
                    right: '12px',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#16a34a'
                }} />
            )}
        </button>
    );
};


// Helper to normalize strings for diacritic-blind matching/searching
// Moved to ../utils/matching.ts for global consistency

const GITA_CHAPTER_NAMES: Record<string, { odia: string; eng: string; icon: React.ElementType; color: string }> = {
    'gita-chapter-1': { odia: '୧. ଅର୍ଜୁନବିଷାଦଯୋଗ', eng: 'Arjuna Vishada Yoga', icon: GitaIcons.GitaCh1Icon, color: '#64748b' },
    'gita-chapter-2': { odia: '୨. ସାଂଖ୍ୟଯୋଗ', eng: 'Sankhya Yoga', icon: GitaIcons.GitaCh2Icon, color: '#64748b' },
    'gita-chapter-3': { odia: '୩. କର୍ମଯୋଗ', eng: 'Karma Yoga', icon: GitaIcons.GitaCh3Icon, color: '#64748b' },
    'gita-chapter-4': { odia: '୪. ଦିବ୍ୟଜ୍ଞାନଯୋଗ', eng: 'Jnana Yoga', icon: GitaIcons.GitaCh4Icon, color: '#64748b' },
    'gita-chapter-5': { odia: '୫. କର୍ମଯୋଗ (କୃଷ୍ଣଚେତନାରେ କର୍ମ)', eng: 'Karma Sannyasa Yoga', icon: GitaIcons.GitaCh5Icon, color: '#64748b' },
    'gita-chapter-6': { odia: '୬. ଧ୍ୟାନଯୋଗ', eng: 'Dhyana Yoga', icon: GitaIcons.GitaCh6Icon, color: '#64748b' },
    'gita-chapter-7': { odia: '୭. ଜ୍ଞାନବିଜ୍ଞାନଯୋଗ', eng: 'Jnana Vijnana Yoga', icon: GitaIcons.GitaCh7Icon, color: '#64748b' },
    'gita-chapter-8': { odia: '୮. ଅକ୍ଷରବ୍ରହ୍ମଯୋଗ', eng: 'Akshara Brahma Yoga', icon: GitaIcons.GitaCh8Icon, color: '#64748b' },
    'gita-chapter-9': { odia: '୯. ରାଜବିଦ୍ୟା-ରାଜଗୁହ୍ୟଯୋଗ', eng: 'Raja Vidya Yoga', icon: GitaIcons.GitaCh9Icon, color: '#64748b' },
    'gita-chapter-10': { odia: '୧୦. ବିଭୂତି ଯୋଗ', eng: 'Vibhuti Yoga', icon: GitaIcons.GitaCh10Icon, color: '#64748b' },
    'gita-chapter-11': { odia: '୧୧. ବିଶ୍ୱରୂପ ଦର୍ଶନ ଯୋଗ', eng: 'Vishvarupa Darshana Yoga', icon: GitaIcons.GitaCh11Icon, color: '#64748b' },
    'gita-chapter-12': { odia: '୧୨. ଭକ୍ତି ଯୋଗ', eng: 'Bhakti Yoga', icon: GitaIcons.GitaCh12Icon, color: '#64748b' },
    'gita-chapter-13': { odia: '୧୩. କ୍ଷେତ୍ର-କ୍ଷେତ୍ରଜ୍ଞ ବିଭାଗ ଯୋଗ', eng: 'Kshetra Kshetrajna Yoga', icon: GitaIcons.GitaCh13Icon, color: '#64748b' },
    'gita-chapter-14': { odia: '୧୪. ଗୁଣତ୍ରୟ ବିଭାଗ ଯୋଗ', eng: 'Gunatraya Vibhaga Yoga', icon: GitaIcons.GitaCh14Icon, color: '#64748b' },
    'gita-chapter-15': { odia: '୧୫. ପୁରୁଷୋତ୍ତମ ଯୋଗ', eng: 'Purushottama Yoga', icon: GitaIcons.GitaCh15Icon, color: '#64748b' },
    'gita-chapter-16': { odia: '୧୬. ଦୈବାସୁର ସମ୍ପଦ ବିଭାଗ ଯୋଗ', eng: 'Daivasura Sampad Yoga', icon: GitaIcons.GitaCh16Icon, color: '#64748b' },
    'gita-chapter-17': { odia: '୧୭. ଶ୍ରଦ୍ଧାତ୍ରୟ ବିଭାଗ ଯୋଗ', eng: 'Shraddhatraya Vibhaga Yoga', icon: GitaIcons.GitaCh17Icon, color: '#64748b' },
    'gita-chapter-18': { odia: '୧୮. ମୋକ୍ଷ ସନ୍ନ୍ୟାସ ଯୋଗ', eng: 'Moksha Sannyasa Yoga', icon: GitaIcons.GitaCh18Icon, color: '#64748b' }
};

export interface VaishnavaListItem {
    id: string;
    odia: string;
    eng: string;
    author: string;
    author_odia?: string;
    subAuthor?: string;
    subAuthor_odia?: string;
    query: string;
    color: string;
}

export interface VaishnavaBookSection {
    id: string;
    title_odia: string;
    title_eng: string;
    color?: string;
    books: VaishnavaListItem[];
}

export const VAISHNAVA_BOOKS_SECTIONS: VaishnavaBookSection[] = [
    {
        id: 'srila-prabhupada',
        title_odia: 'ଶ୍ରୀଳ ପ୍ରଭୁପାଦ',
        title_eng: 'Srila Prabhupada',
        color: '#00bcd4',
        books: [
            { id: 'vrindavane-bhajan', odia: 'ବୃନ୍ଦାବନେ ଭଜନ', eng: 'Vrindavane Bhajan', author: 'Srila Prabhupada', author_odia: 'ଶ୍ରୀଳ ପ୍ରଭୁପାଦ', query: 'Vrindavane Bhajan', color: '#0284c7' },
            { id: 'misc-prabhupada', odia: 'ବିବିଧ ବୈଷ୍ଣବ ଗୀତି', eng: 'Miscellaneous Songs', author: 'Srila Prabhupada', author_odia: 'ଶ୍ରୀଳ ପ୍ରଭୁପାଦ', query: 'Prabhupada', color: '#0ea5e9' }
        ]
    },
    {
        id: 'bhaktivinoda-thakura',
        title_odia: 'ଶ୍ରୀଳ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
        title_eng: 'Bhakti Vinoda Thakura',
        color: '#00bcd4',
        books: [
            { id: 'saranagati', odia: 'ଶରଣାଗତି', eng: 'Saranagati', author: 'Bhaktivinoda Thakura', author_odia: 'ଶ୍ରୀଳ ଭକ୍ତି ବିନୋଦ ଠାକୁର', query: 'Saranagati', color: '#16a34a' },
            { id: 'gitavali', odia: 'ଗୀତାବଳୀ', eng: 'Gitavali', author: 'Bhaktivinoda Thakura', author_odia: 'ଶ୍ରୀଳ ଭକ୍ତି ବିନୋଦ ଠାକୁର', query: 'Gitavali', color: '#0284c7' },
            { id: 'kalyana', odia: 'କଲ୍ୟାଣ କଲ୍ପତରୁ', eng: 'Kalyanakalpataru', author: 'Bhaktivinoda Thakura', author_odia: 'ଶ୍ରୀଳ ଭକ୍ତି ବିନୋଦ ଠାକୁର', query: 'Kalyana Kalpataru', color: '#7c3aed' },
            { id: 'gitamala', odia: 'ଗୀତମାଳା', eng: 'Gitamala', author: 'Bhaktivinoda Thakura', author_odia: 'ଶ୍ରୀଳ ଭକ୍ତି ବିନୋଦ ଠାକୁର', query: 'Gitamala', color: '#ea580c' },
            { id: 'baula-sangita', odia: 'ବାଉଲ ସଙ୍ଗୀତ', eng: 'Baula Sangita', author: 'Bhaktivinoda Thakura', author_odia: 'ଶ୍ରୀଳ ଭକ୍ତି ବିନୋଦ ଠାକୁର', query: 'Baula Sangita', color: '#0d9488' }
        ]
    },
    {
        id: 'narottama-dasa-thakura',
        title_odia: 'ଶ୍ରୀଳ ନରୋତ୍ତମ ଦାସ ଠାକୁର',
        title_eng: 'Narottama Dasa Thakura',
        color: '#00bcd4',
        books: [
            { id: 'prarthana', odia: 'ପ୍ରାର୍ଥନା', eng: 'Prarthana', author: 'Narottama Dasa Thakura', author_odia: 'ଶ୍ରୀଳ ନରୋତ୍ତମ ଦାସ ଠାକୁର', query: 'Prarthana', color: '#dc2626' },
            { id: 'premabhakti', odia: 'ପ୍ରେମଭକ୍ତି ଚନ୍ଦ୍ରିକା', eng: 'Prema Bhakti Chandrika', author: 'Narottama Dasa Thakura', author_odia: 'ଶ୍ରୀଳ ନରୋତ୍ତମ ଦାସ ଠାକୁର', query: 'Prema Bhakti Chandrika', color: '#d97706' }
        ]
    },
    {
        id: 'visvanatha-cakravarti',
        title_odia: 'ଶ୍ରୀଳ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର',
        title_eng: 'Visvanatha Cakravarti Thakura',
        color: '#00bcd4',
        books: [
            { id: 'stavamrita-lahari', odia: 'ସ୍ତବାମୃତ ଲହରୀ', eng: 'Stavamrita Lahari', author: 'Visvanatha Cakravarti Thakura', author_odia: 'ଶ୍ରୀଳ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର', query: 'Stavamrita Lahari', color: '#8b5cf6' }
        ]
    },
    {
        id: 'srimad-bhagavatam-books',
        title_odia: 'ଶ୍ରୀମଦ୍ ଭାଗବତମ୍ ଆଧାରିତ ଗ୍ରନ୍ଥ',
        title_eng: 'Song Books based on Srimad Bhagavatam',
        color: '#00bcd4',
        books: [
            { id: 'krsna-lila-stava', odia: 'କୃଷ୍ଣ ଲୀଳା ସ୍ତବ', eng: 'Krishna Lila Stava', author: 'Sanatana Goswami', author_odia: 'ଶ୍ରୀ ସନାତନ ଗୋସ୍ୱାମୀ', subAuthor: 'Sanatana Goswami', subAuthor_odia: 'ଶ୍ରୀ ସନାତନ ଗୋସ୍ୱାମୀ', query: 'Krishna Lila Stava', color: '#2563eb' },
            { id: 'sri-krsna-vijaya', odia: 'ଶ୍ରୀ କୃଷ୍ଣ ବିଜୟ', eng: 'Sri Krishna Vijaya', author: 'Gunaraja Khan', author_odia: 'ଗୁଣରାଜ ଖାଁ', subAuthor: 'Gunaraja Khan', subAuthor_odia: 'ଗୁଣରାଜ ଖାଁ', query: 'Sri Krishna Vijaya', color: '#4f46e5' },
            { id: 'gopala-campu', odia: 'ଗୋପାଳ ଚମ୍ପୂ', eng: 'Gopala Campu', author: 'Jiva Goswami', author_odia: 'ଶ୍ରୀ ଜୀବ ଗୋସ୍ୱାମୀ', subAuthor: 'Jiva Goswami (Abridged)', subAuthor_odia: 'ଶ୍ରୀ ଜୀବ ଗୋସ୍ୱାମୀ', query: 'Gopala Campu', color: '#059669' }
        ]
    },
    {
        id: 'compilations',
        title_odia: 'ବୈଷ୍ଣବ ସଙ୍ଗୀତ ସଂକଳନ',
        title_eng: 'Compilations',
        color: '#00bcd4',
        books: [
            { id: 'ksanada', odia: 'ଶ୍ରୀ କ୍ଷଣଦା ଗୀତ ଚିନ୍ତାମଣି', eng: 'Sri Ksanada Gita Cintamani', author: 'Visvanatha Cakravarti Thakura', author_odia: 'ଶ୍ରୀଳ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର', subAuthor: 'VCT (Abridged)', subAuthor_odia: 'ଶ୍ରୀଳ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର', query: 'Ksanada', color: '#9333ea' },
            { id: 'gaudiya-acaryas', odia: 'ଗୌଡ଼ୀୟ ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟଙ୍କ ଗୀତ', eng: 'Songs of the Gaudiya Vaishnava Acaryas', author: 'Gaudiya Vaishnava Acaryas', author_odia: 'ଗୌଡ଼ୀୟ ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟଗଣ', query: 'Gaudiya', color: '#0284c7' },
            { id: 'gauranga-govinda', odia: 'ଗୌରାଙ୍ଗ ଓ ଗୋବିନ୍ଦ ଗୁଣଗାନ ଗୀତି', eng: 'Songs Glorifying Lord Gauranga and Govinda', author: 'Vaishnava Acaryas', author_odia: 'ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟଗଣ', query: 'Gauranga', color: '#ea580c' },
            { id: 'vaishnava-acaryas', odia: 'ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟ ସଙ୍ଗୀତ', eng: 'Songs of the Vaishnava Acaryas', author: 'Vaishnava Acaryas', author_odia: 'ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟଗଣ', query: 'Vaishnava Acaryas', color: '#0891b2' },
            { id: 'more-songs', odia: 'ଅନ୍ୟାନ୍ୟ ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟ ସଙ୍ଗୀତ', eng: 'More Songs of the Vaishnava Acaryas', author: 'Vaishnava Acaryas', author_odia: 'ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟଗଣ', query: 'More Songs', color: '#0d9488' }
        ]
    },
    {
        id: 'temple-prayers',
        title_odia: 'ନିତ୍ୟ ଆରତି ଓ ପ୍ରଣାମ ମନ୍ତ୍ରାବଳୀ',
        title_eng: 'Daily Prayers & Mantras',
        color: '#00bcd4',
        books: [
            { id: 'temple-daily', odia: 'ମନ୍ଦିର ନିତ୍ୟ ଆରତି', eng: 'Temple Arati & Kirtan', author: 'Traditional', author_odia: 'ପାରମ୍ପରିକ ନିତ୍ୟ ଆରତି', query: 'Temple', color: '#e11d48' },
            { id: 'ashtakams', odia: 'ଅଷ୍ଟକମ୍ ଓ ସ୍ତୋତ୍ରାବଳୀ', eng: 'Ashtakams & Stotras', author: 'Various Acaryas', author_odia: 'ବିଭିନ୍ନ ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟ', query: 'Astakam', color: '#0891b2' },
            { id: 'pranama', odia: 'ପ୍ରଣାମ ମନ୍ତ୍ରାବଳୀ', eng: 'Pranama Mantras', author: 'Various Acaryas', author_odia: 'ବିଭିନ୍ନ ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟ', query: 'Pranama', color: '#4f46e5' }
        ]
    }
];

export const ALL_VAISHNAVA_BOOKS: VaishnavaListItem[] = VAISHNAVA_BOOKS_SECTIONS.flatMap(s => s.books);
const VAISHNAVA_LISTS: VaishnavaListItem[] = ALL_VAISHNAVA_BOOKS;

const KNOWN_BOOK_SONG_IDS: Record<string, string[]> = {
    'saranagati': [
        'song-gopinatmamanivedana', 'song-gopinatpart2', 'song-gopinatpart3',
        'song-manasadehogehoyokichu', 'song-tumitomaribejare', 'song-ekhanbujhinuprabhu',
        'song-prapanceporiyagati', 'song-dekhitedekhite', 'song-kabegourabane',
        'song-kijanikibale', 'song-prabhutavapadayuge', 'song-amitodurjanaati',
        'song-nijakarmadosephale', 'song-yaditeharipada'
    ],
    'gitavali': [
        'song-gauraarati', 'song-bhalegauragadadhara', 'song-jayajayaradhakrsna',
        'song-Bolo Hari Bolo', 'song-gaygoramadhura', 'song-gaygoracand',
        'song-jivjago', 'song-borosukherkhabar', 'song-hariboloharibolo',
        'song-bhajabhakatavatsala'
    ],
    'kalyana': [
        'song-emonadurmati', 'song-sariraavidyajala', 'song-amarboliteprabhu',
        'song-kabemuivaishnava', 'song-kalikukkurakadan', 'song-oremanabhalonahilage'
    ],
    'gitamala': [
        'song-kabehabehenodasa', 'song-radhakundatata', 'song-srikrsnakirtane',
        'song-kesavatuwajagata', 'song-hariharikabemora'
    ],
    'baula-sangita': [
        'song-asalokathabolte', 'song-kenoharekrsnanam', 'song-arkenomayajale'
    ],
    'prarthana': [
        'song-hariharibiphalejanama', 'song-gaurangabolitehabe', 'song-gorapahun',
        'song-eibarokarunakoro', 'song-gaurangakarunakoro', 'song-gaurangerdutipada',
        'song-kabekrsnadhanpabo', 'song-kirupepaiboseva', 'song-thakuravaisnavagana',
        'song-thakuravaisnavapada', 'song-suniyachisadhumukhe', 'song-jeanilopremadhana',
        'song-srirupamanjaripada', 'song-nitaipadakamala', 'song-kusumitavrndavane',
        'song-srikrsnacaitanyaprabhu', 'song-arebhaibhajamora', 'song-hariharikabemore',
        'song-dhanamornityananda', 'song-jjsrkrsnctnntnnd'
    ],
    'premabhakti': [
        'song-radhakrsnapranamora', 'song-gurupuja', 'song-vrndavanaramyasthana'
    ],
    'stavamrita-lahari': [
        'song-gurvastakam',
        'song-govardhanastakam',
        'song-vrindavanastakam'
    ],
    'vaishnava-acaryas': [
        'song-sadgoswamyastakam',
        'song-sucaruvakrtamandalam',
        'song-ujjvalavarana',
        'song-narasimhanakhastuti'
    ],
    'gaudiya-acaryas': [
        'song-sadgoswamyastakam'
    ]
};

const AUTHOR_ODIA_NAMES: Record<string, string> = {
    'Bhaktivinoda Thakura': 'ଶ୍ରୀଳ ଭକ୍ତି ବିନୋଦ ଠାକୁର',
    'Narottama Dasa Thakura': 'ଶ୍ରୀଳ ନରୋତ୍ତମ ଦାସ ଠାକୁର',
    'Srila Prabhupada': 'ଶ୍ରୀଳ ପ୍ରଭୁପାଦ',
    'Krsnadasa Kaviraja Goswami': 'ଶ୍ରୀଳ କୃଷ୍ଣଦାସ କବିରାଜ ଗୋସ୍ୱାମୀ',
    'Rupa Goswami': 'ଶ୍ରୀ ରୂପ ଗୋସ୍ୱାମୀ',
    'Locana Dasa Thakura': 'ଲୋଚନ ଦାସ ଠାକୁର',
    'Vrndavana Dasa Thakura': 'ଶ୍ରୀଳ ବୃନ୍ଦାବନ ଦାସ ଠାକୁର',
    'Vasudeva Ghosha': 'ବାସୁଦେବ ଘୋଷ',
    'Visvanatha Cakravarti Thakura': 'ଶ୍ରୀଳ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର',
    'Jayadeva Goswami': 'ଜୟଦେବ ଗୋସ୍ୱାମୀ',
    'Sarvabhauma Bhattacarya': 'ସାର୍ବଭୌମ ଭଟ୍ଟାଚାର୍ଯ୍ୟ',
    'Sarvabhauma Bhattacharya': 'ସାର୍ବଭୌମ ଭଟ୍ଟାଚାର୍ଯ୍ୟ',
    'Adi Sankaracarya': 'ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟ',
    'Sanatana Goswami': 'ଶ୍ରୀ ସନାତନ ଗୋସ୍ୱାମୀ',
    'Jiva Goswami': 'ଶ୍ରୀ ଜୀବ ଗୋସ୍ୱାମୀ',
    'Raghunatha Dasa Goswami': 'ଶ୍ରୀ ରଘୁନାଥ ଦାସ ଗୋସ୍ୱାମୀ',
    'Bhaktisiddhanta Saraswati': 'ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ଠାକୁର',
    'Vyasadeva': 'ଶ୍ରୀଳ ବ୍ୟାସଦେବ',
    'Traditional': 'ପାରମ୍ପରିକ ବୈଷ୍ଣବ ଭଜନ',
    'Lord Brahma': 'ଭଗବାନ ବ୍ରହ୍ମା',
    'Sri Caitanya Mahaprabhu': 'ଶ୍ରୀ ଚୈତନ୍ୟ ମହାପ୍ରଭୁ',
    'Bilvamangala Thakura': 'ବିଲ୍ୱମଙ୍ଗଳ ଠାକୁର',
    'Mira Bhai': 'ମୀରା ବାଈ',
    'Sura Dasa': 'ସୁରଦାସ',
    'Vidyapati': 'ବିଦ୍ୟାପତି',
    'Vallabhacarya': 'ଶ୍ରୀ ବଲ୍ଲଭାଚାର୍ଯ୍ୟ',
    'Krsna Dasa': 'କୃଷ୍ଣ ଦାସ',
    'B.R. Sridhara Deva Goswami': 'ଶ୍ରୀଳ ବି.ଆର. ଶ୍ରୀଧର ଦେବ ଗୋସ୍ୱାମୀ',
    'Vaishnava Acaryas': 'ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟଗଣ',
    'Candrasekhara Kavi': 'କବି ଚନ୍ଦ୍ରଶେଖର',
    'Madhvacharya': 'ଶ୍ରୀ ମଧ୍ୱାଚାର୍ଯ୍ୟ',
    'Kusakratha Dasa': 'କୁଶକ୍ରତୁ ଦାସ',
    'Srinivasa Acarya': 'ଶ୍ରୀନିବାସ ଆଚାର୍ଯ୍ୟ',
    'Satyavrata Muni': 'ସତ୍ୟବ୍ରତ ମୁନି',
    'Sukadeva Gosvami': 'ଶୁକଦେବ ଗୋସ୍ୱାମୀ',
    'ISKCON': 'ଇସ୍କନ ସଂକୀର୍ତ୍ତନ',
    'Govinda Dasa Kaviraja': 'ଗୋବିନ୍ଦ ଦାସ କବିରାଜ',
    'Bhakta Salabega': 'ଭକ୍ତ ସାଲବେଗ',
    'Kanu Ramadasa Thakura': 'କାନୁ ରାମଦାସ ଠାକୁର',
    'Hari Vyasa Devacarya': 'ହରି ବ୍ୟାସ ଦେବାଚାର୍ଯ୍ୟ',
    'Nilakanta Goswami': 'ନୀଳକଣ୍ଠ ଗୋସ୍ୱାମୀ',
    'Narahari Sarakara': 'ନରହରି ସରକାର',
    'Srimad Bhagavatam': 'ଶ୍ରୀମଦ୍ ଭାଗବତମ୍',
    'Shani Deva': 'ଶନି ଦେବ',
    'Radha Mohana Dasa': 'ରାଧା ମୋହନ ଦାସ',
    'Devakinandana Dasa Thakura': 'ଦେବକୀନନ୍ଦନ ଦାସ ଠାକୁର',
    'Jayapataka Swami': 'ଶ୍ରୀଳ ଜୟପତାକା ସ୍ୱାମୀ',
    'Bhakti Caru Swami': 'ଶ୍ରୀଳ ଭକ୍ତି ଚାରୁ ସ୍ୱାମୀ',
    'Kulasekhara Alvar': 'କୁଳଶେଖର ଆଲୱାର',
    'Vedanta Desika': 'ବେଦାନ୍ତ ଦେଶିକ',
    'Svarupa Damodara Goswami': 'ସ୍ୱରୂପ ଦାମୋଦର ଗୋସ୍ୱାମୀ',
    'Prabodhananda Sarasvati': 'ପ୍ରବୋଧାନନ୍ଦ ସରସ୍ୱତୀ',
    'Gunaraja Khan': 'ଗୁଣରାଜ ଖାଁ',
    'Gaudiya Vaishnava Acaryas': 'ଗୌଡ଼ୀୟ ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟଗଣ',
    'VCT (Abridged)': 'ଶ୍ରୀଳ ବିଶ୍ୱନାଥ ଚକ୍ରବର୍ତ୍ତୀ ଠାକୁର (ସଂକ୍ଷିପ୍ତ)',
    'Other Authors': 'ଅନ୍ୟାନ୍ୟ କବି ଓ ଆଚାର୍ଯ୍ୟ'
};

export const getAuthorOdiaName = (name: string): string => {
    if (!name) return '';
    const catalogEntry = AUTHOR_CATALOG.find(a => a.name.toLowerCase() === name.toLowerCase());
    if (catalogEntry?.odia) return catalogEntry.odia;
    if (AUTHOR_ODIA_NAMES[name]) return AUTHOR_ODIA_NAMES[name];
    const key = Object.keys(AUTHOR_ODIA_NAMES).find(k => k.toLowerCase() === name.toLowerCase());
    if (key && AUTHOR_ODIA_NAMES[key]) return AUTHOR_ODIA_NAMES[key];
    return name;
};

export const SongsPage: React.FC = () => {
    const { activeSong, isPlaying, pauseSong, isDetailView, selectSong, setIsDetailView, theme, setTheme, currentThemeKey, setSongs } = useAudio();
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin' || user?.role === 'subadmin';
    const isNightMode = currentThemeKey === 'advaita';
    const { songs, loading, error } = useSongs();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSong, setSelectedSong] = useState<Resource | null>(null);
    const [isSliderInteracting, setIsSliderInteracting] = useState(false);
    const gitaSliderRef = useRef<HTMLDivElement>(null);
    const sliderInteractionTimeout = useRef<any>(null);

    // Sync local selectedSong with Context's activeSong when returning to detail view from the mini-bar
    useEffect(() => {
        if (isDetailView && !selectedSong && activeSong) {
            setSelectedSong(activeSong);
        }
    }, [isDetailView, selectedSong, activeSong]);

    // Keep selectedSong up-to-date when songs array is loaded or updated
    useEffect(() => {
        if (selectedSong && songs.length > 0) {
            const latest = songs.find(s => s.id === selectedSong.id);
            if (latest && JSON.stringify(latest.structuredContent) !== JSON.stringify(selectedSong.structuredContent)) {
                setSelectedSong(latest);
            }
        }
    }, [songs]);

    // Reset activeLetter when returning from detail view to main list
    useEffect(() => {
        if (!selectedSong) {
            setActiveLetter(null);
        }
    }, [selectedSong]);

    const [viewMode, setViewMode] = useState<ViewMode>('combined');
    const [fontSize, setFontSize] = useState(18);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const [isToolbeltExpanded, setIsToolbeltExpanded] = useState(false);
    const [authorStats, setAuthorStats] = useState<{ author: string; count: number; total: number }[]>([]);
    const [isAuthorPanelOpen, setIsAuthorPanelOpen] = useState(false);
    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
    const [isSingerPanelOpen, setIsSingerPanelOpen] = useState(false);
    const [isListsPanelOpen, setIsListsPanelOpen] = useState(false);
    const [singerSearch, setSingerSearch] = useState('');
    const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'songs' | 'gita' | 'temple' | 'badadanda' | 'authors'>('songs');
    const [templeSubTab, setTempleSubTab] = useState<'all' | 'mangala' | 'tulasi' | 'darshana' | 'gurupuja' | 'gaura' | 'bhoga' | 'ashtakam'>('all');
    const [badadandaSubTab, setBadadandaSubTab] = useState<'all' | 'gita' | 'authors' | 'temple' | 'pranama' | 'ashtakams' | 'lists' | 'singers' | 'history' | 'settings'>('all');
    const [selectedBadadandaList, setSelectedBadadandaList] = useState<VaishnavaListItem | null>(null);
    const [selectedBadadandaSinger, setSelectedBadadandaSinger] = useState<string | null>(null);
    const [badadandaSingerSearch, setBadadandaSingerSearch] = useState('');
    const [selectedBadadandaAuthor, setSelectedBadadandaAuthor] = useState<string | null>(null);
    const [badadandaAuthorSearch, setBadadandaAuthorSearch] = useState('');
    const [badadandaBooksSearch, setBadadandaBooksSearch] = useState('');
    const [bookSongSearch, setBookSongSearch] = useState('');
    const [bookSongFilter, setBookSongFilter] = useState<'all' | 'available' | 'unavailable'>('all');
    const [bookUnavailableNotice, setBookUnavailableNotice] = useState<string | null>(null);
    const [activeLetter, setActiveLetter] = useState<string | null>(null);
    const [isLetterVisibleOnMobile, setIsLetterVisibleOnMobile] = useState(false);
    const letterTimeoutRef = useRef<any>(null);

    useEffect(() => {
        if (!activeLetter || searchQuery.trim() !== '') {
            setIsLetterVisibleOnMobile(false);
            return;
        }
        setIsLetterVisibleOnMobile(true);
        if (letterTimeoutRef.current) clearTimeout(letterTimeoutRef.current);
        letterTimeoutRef.current = setTimeout(() => {
            setIsLetterVisibleOnMobile(false);
        }, 1800);

        return () => {
            if (letterTimeoutRef.current) clearTimeout(letterTimeoutRef.current);
        };
    }, [activeLetter, searchQuery]);
    const [isListening, setIsListening] = useState(false);
    const [isThemeListExpanded, setIsThemeListExpanded] = useState(false);
    const [recentIds, setRecentIds] = useState<string[]>(() => {
        try {
            const saved = localStorage.getItem('recent-song-ids');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error("Error parsing recent-song-ids", e);
            return [];
        }
    });
    const filterMenuRef = useRef<HTMLDivElement>(null);
    const mainScrollRef = useRef<HTMLElement>(null);
    const [playingTtsVerseId, setPlayingTtsVerseId] = useState<number | string | null>(null);
    const [isTtsPaused, setIsTtsPaused] = useState(false);
    const [isTtsBuffering, setIsTtsBuffering] = useState(false);
    const [ttsProgress, setTtsProgress] = useState<{ currentTime: number; duration: number }>({ currentTime: 0, duration: 0 });
    const [ttsSpeed, setTtsSpeed] = useState<number>(1.0);
    const [ttsVoiceGender, setTtsVoiceGender] = useState<'female' | 'male'>(() => {
        return (localStorage.getItem('tts-voice-gender') as 'female' | 'male') || 'female';
    });
    const ttsAudioRef = useRef<HTMLAudioElement | null>(null);

    const formatTtsTime = (sec: number) => {
        if (!sec || isNaN(sec)) return '0:00';
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    // Factor 1: Audio Concurrency - Pause TTS if main song starts playing
    useEffect(() => {
        if (isPlaying && ttsAudioRef.current && !ttsAudioRef.current.paused) {
            ttsAudioRef.current.pause();
            setIsTtsPaused(true);
        }
    }, [isPlaying]);


    const handleToggleTtsVoice = () => {
        const nextGender = ttsVoiceGender === 'female' ? 'male' : 'female';
        setTtsVoiceGender(nextGender);
        localStorage.setItem('tts-voice-gender', nextGender);
        if (playingTtsVerseId && ttsAudioRef.current) {
            const currentVerse = selectedSong?.structuredContent?.verses?.find((v: any) => v.id === playingTtsVerseId);
            if (currentVerse) {
                const newAudioUrl = nextGender === 'male'
                    ? (currentVerse.translationAudioMaleUrl || (currentVerse.translationAudioUrl ? currentVerse.translationAudioUrl.replace(/\.mp3$/, '_male.mp3') : undefined))
                    : (currentVerse.translationAudioUrl || (currentVerse.translationAudioMaleUrl ? currentVerse.translationAudioMaleUrl.replace(/_male\.mp3$/, '.mp3') : undefined));
                if (newAudioUrl) {
                    handleToggleTts(playingTtsVerseId, newAudioUrl);
                    return;
                }
            }
            ttsAudioRef.current.pause();
            ttsAudioRef.current.removeAttribute('src');
            ttsAudioRef.current.load();
            ttsAudioRef.current = null;
            setPlayingTtsVerseId(null);
            setIsTtsPaused(false);
            setIsTtsBuffering(false);
            setTtsProgress({ currentTime: 0, duration: 0 });
        }
    };


    const handleToggleTts = (verseId: number | string, audioUrl: string) => {
        // If clicking on already active verse:
        if (playingTtsVerseId === verseId && ttsAudioRef.current) {
            if (ttsAudioRef.current.paused) {
                if (isPlaying) pauseSong();
                ttsAudioRef.current.play().catch(e => console.error("Error resuming TTS audio", e));
                setIsTtsPaused(false);
            } else {
                ttsAudioRef.current.pause();
                setIsTtsPaused(true);
            }
            return;
        }

        // Switching verse or starting fresh:
        if (ttsAudioRef.current) {
            ttsAudioRef.current.pause();
            ttsAudioRef.current.removeAttribute('src');
            ttsAudioRef.current.load();
            ttsAudioRef.current = null;
        }

        if (isPlaying) {
            pauseSong();
        }

        // Stream on-the-fly without occupying persistent device storage
        const streamUrl = `${audioUrl}${audioUrl.includes('?') ? '&' : '?'}nocache=${Date.now()}`;
        const audio = new Audio(streamUrl);
        audio.preload = 'none';
        audio.playbackRate = ttsSpeed;
        ttsAudioRef.current = audio;
        setPlayingTtsVerseId(verseId);
        setIsTtsPaused(false);
        setIsTtsBuffering(true);
        setTtsProgress({ currentTime: 0, duration: 0 });

        audio.onplaying = () => {
            setIsTtsBuffering(false);
        };
        audio.onwaiting = () => {
            setIsTtsBuffering(true);
        };
        audio.oncanplay = () => {
            setIsTtsBuffering(false);
        };
        audio.ontimeupdate = () => {
            setTtsProgress({ currentTime: audio.currentTime, duration: audio.duration || 0 });
        };
        audio.onloadedmetadata = () => {
            setTtsProgress(prev => ({ ...prev, duration: audio.duration || 0 }));
        };
        audio.onended = () => {
            if (ttsAudioRef.current) {
                ttsAudioRef.current.removeAttribute('src');
                ttsAudioRef.current.load();
                ttsAudioRef.current = null;
            }
            setPlayingTtsVerseId(null);
            setIsTtsPaused(false);
            setIsTtsBuffering(false);
            setTtsProgress({ currentTime: 0, duration: 0 });
        };
        audio.onerror = () => {
            if (ttsAudioRef.current) {
                ttsAudioRef.current.removeAttribute('src');
                ttsAudioRef.current.load();
                ttsAudioRef.current = null;
            }
            setPlayingTtsVerseId(null);
            setIsTtsPaused(false);
            setIsTtsBuffering(false);
        };

        audio.play().catch(e => console.error("Error playing TTS audio", e));
    };

    const handleStopTts = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (ttsAudioRef.current) {
            ttsAudioRef.current.pause();
            ttsAudioRef.current.removeAttribute('src');
            ttsAudioRef.current.load();
            ttsAudioRef.current = null;
        }
        setPlayingTtsVerseId(null);
        setIsTtsPaused(false);
        setIsTtsBuffering(false);
        setTtsProgress({ currentTime: 0, duration: 0 });
    };

    const handleToggleTtsSpeed = (e: React.MouseEvent) => {
        e.stopPropagation();
        const speeds = [1.0, 0.85, 1.15];
        const nextSpeed = speeds[(speeds.indexOf(ttsSpeed) + 1) % speeds.length];
        setTtsSpeed(nextSpeed);
        if (ttsAudioRef.current) {
            ttsAudioRef.current.playbackRate = nextSpeed;
        }
    };

    useEffect(() => {
        return () => {
            if (ttsAudioRef.current) {
                ttsAudioRef.current.pause();
                ttsAudioRef.current = null;
            }
            setPlayingTtsVerseId(null);
            setIsTtsPaused(false);
        };
    }, [selectedSong]);

    const toolbeltTimerRef = useRef<any>(null);
    useEffect(() => {
        if (!isFilterMenuOpen) {
            setIsThemeListExpanded(false);
        }
    }, [isFilterMenuOpen]);

    useEffect(() => {
        const handleOpenSpin = () => setIsSpinWheelOpen(true);
        window.addEventListener('open-spin-wheel', handleOpenSpin);
        return () => window.removeEventListener('open-spin-wheel', handleOpenSpin);
    }, []);

    useEffect(() => {
        // Auto-hide Toolbelt (3s)
        if (isToolbeltExpanded) {
            if (toolbeltTimerRef.current) clearTimeout(toolbeltTimerRef.current);
            toolbeltTimerRef.current = setTimeout(() => setIsToolbeltExpanded(false), 3000);
        }

        return () => {
            if (toolbeltTimerRef.current) clearTimeout(toolbeltTimerRef.current);
        };
    }, [isToolbeltExpanded]);

    // Mobile Back Button synchronization: When a song is opened, register back handler
    useEffect(() => {
        if (selectedSong) {
            pushBackHandler('song-detail', () => {
                setSelectedSong(null);
                setIsDetailView(false);
            });
        }
    }, [selectedSong, setIsDetailView]);

    // Mobile Back Button: Author Explorer Panel
    useEffect(() => {
        if (isAuthorPanelOpen) {
            pushBackHandler('author-panel', () => {
                setIsAuthorPanelOpen(false);
            });
        }
    }, [isAuthorPanelOpen]);

    // Mobile Back Button: Settings Panel
    useEffect(() => {
        if (isSettingsPanelOpen) {
            pushBackHandler('settings-panel', () => {
                setIsSettingsPanelOpen(false);
            });
        }
    }, [isSettingsPanelOpen]);

    // Mobile Back Button: Author filter drill-down
    useEffect(() => {
        if (selectedAuthor) {
            pushBackHandler('selected-author', () => {
                setSelectedAuthor(null);
            });
        }
    }, [selectedAuthor]);

    const handleCloseDetail = () => {
        setSelectedSong(null);
        setIsDetailView(false);
        popBackHandler('song-detail');
    };

    const handleSelectSong = async (song: Resource, forcePlay: boolean = false) => {
        setSelectedSong(song);
        setIsDetailView(true);

        // Only trigger selectSong if nothing is playing OR if we explicitly want to change the audio (Auto-Next)
        if (forcePlay || (!activeSong && (song.audioUrl || (song.audioVersions && song.audioVersions.length > 0)))) {
            selectSong(song);
        }

        const newRecent = [song.id, ...recentIds.filter(id => id !== song.id)].slice(0, 5);
        setRecentIds(newRecent);
        localStorage.setItem('recent-song-ids', JSON.stringify(newRecent));

        // Increment views in background
        try {
            await supabase.rpc('increment_song_views', { song_id: song.id });
        } catch (e) {
            console.error("Error incrementing views:", e);
        }

        // Track ID for Auto-Next
        (window as any)._activeSongId = song.id;
    };

    const songResources = useMemo(() => {
        return songs
            .sort((a, b) => {
                const orderDiff = (a.display_order ?? 999) - (b.display_order ?? 999);
                if (orderDiff !== 0) return orderDiff;

                // Secondary sort for Gita chapters to ensure 1-18 sequence
                const isGitaA = a.category === 'Gita' || a.category === 'G' || a.category === 'Gītā-māhātmya';
                const isGitaB = b.category === 'Gita' || b.category === 'G' || b.category === 'Gītā-māhātmya';

                if (isGitaA && isGitaB) {
                    const aNum = parseInt(a.title_english?.match(/\d+/)?.[0] || '999');
                    const bNum = parseInt(b.title_english?.match(/\d+/)?.[0] || '999');
                    if (aNum !== bNum) return aNum - bNum;
                }

                return (a.title_odia || a.title).localeCompare(b.title_odia || b.title);
            });
    }, [songs]);

    // Register song pool for Auto-Next
    useEffect(() => {
        if (songResources.length > 0) {
            setSongs(songResources);
        }
    }, [songResources, setSongs]);

    // Global listener for seamless Auto-Next transitions
    useEffect(() => {
        const handleAutoNext = () => {
            // Logic to find current song, then play next
            const currentSongId = (window as any)._activeSongId;
            const currentIndex = songResources.findIndex(s => s.id === currentSongId);
            if (currentIndex !== -1 && currentIndex < songResources.length - 1) {
                const nextSong = songResources[currentIndex + 1];
                handleSelectSong(nextSong, true); // Force play for Auto-Next
            }
        };
        window.addEventListener('play-next-song', handleAutoNext);
        return () => window.removeEventListener('play-next-song', handleAutoNext);
    }, [songResources]);



    // Hook to instantly scroll to the top over a container element when selecting a new chapter
    // useLayoutEffect runs before paint, making the jump invisible to the eye
    useLayoutEffect(() => {
        if (selectedSong?.id && mainScrollRef.current) {
            mainScrollRef.current.scrollTop = 0;
            // Safari/Chrome fallback
            mainScrollRef.current.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
        }
    }, [selectedSong?.id]);

    const handleSetTheme = (themeKey: string) => {
        setTheme(themeKey);
    };

    const fetchAuthorStats = async () => {
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('id, author, title, title_english, title_odia');

            if (error) throw error;

            const counts: Record<string, number> = {};

            // 1. Process songs and assign to correct authors based on CATALOG
            data.forEach(s => {
                const songTitle = (s as any).title_english || (s as any).title || '';
                const songOdia = (s as any).title_odia || '';

                // Find if this song belongs to a specific author in our catalog
                const catalogMatch = AUTHOR_CATALOG.find(cat =>
                    cat.catalog.some(catSong => (catSong.id && catSong.id === s.id) || isTitleMatch(catSong.title_english, songTitle, catSong.title_odia, songOdia))
                );

                const authorName = catalogMatch ? catalogMatch.name : standardizeAuthorName((s as any).author || '');
                counts[authorName] = (counts[authorName] || 0) + 1;
            });

            // 2. Count local-only resources
            songResources.forEach(s => {
                if (!data.some(dbS => dbS.id === s.id)) {
                    const catalogMatch = AUTHOR_CATALOG.find(cat =>
                        cat.catalog.some(catSong => (catSong.id && catSong.id === s.id) || isTitleMatch(catSong.title_english, s.title_english || s.title, catSong.title_odia, s.title_odia))
                    );
                    const authorName = catalogMatch ? catalogMatch.name : standardizeAuthorName(s.author || '');
                    counts[authorName] = (counts[authorName] || 0) + 1;
                }
            });

            // Standardized Authors List (Always in sync with AUTHOR_CATALOG)
            const baseAuthors = AUTHOR_CATALOG.map(a => a.name).filter(n => n !== "Other Authors" && n !== "Srimad Bhagavatam");
            const standardizedList = [...baseAuthors, "Srimad Bhagavatam", "Other Authors"];

            // Build merged list: catalog authors enriched with available counts
            const allSongs = data.concat(songResources as any);
            const authorToSongs: Record<string, any[]> = {};
            allSongs.forEach(s => {
                const name = s.author ? standardizeAuthorName(s.author) : 'Other Authors';
                if (!authorToSongs[name]) authorToSongs[name] = [];
                authorToSongs[name].push(s);
            });

            const merged = standardizedList.map(name => {
                const catalogEntry = AUTHOR_CATALOG.find(cat => cat.name === name);
                const totalAvailable = counts[name] || 0;
                const totalInCatalog = catalogEntry ? catalogEntry.catalog.length : 0;

                // Calculate how many of the available songs are actually in the catalog
                let availableInCatalog = 0;
                if (catalogEntry) {
                    const authorSongs = authorToSongs[name] || [];
                    availableInCatalog = catalogEntry.catalog.filter(cs =>
                        authorSongs.some(s => (cs.id && cs.id === s.id) || isTitleMatch(cs.title_english, s.title_english || s.title, cs.title_odia, s.title_odia))
                    ).length;
                } else {
                    availableInCatalog = totalAvailable;
                }

                const extraAvailable = Math.max(0, totalAvailable - availableInCatalog);
                const totalCalculated = totalInCatalog + extraAvailable;

                return {
                    author: name,
                    count: totalAvailable,
                    total: totalCalculated
                };
            });

            // Add any stray authors that aren't in our standardized list to "Other Authors"
            Object.entries(counts).forEach(([author, count]) => {
                if (!standardizedList.includes(author)) {
                    const othersIndex = merged.findIndex(m => m.author === "Other Authors");
                    if (othersIndex !== -1) {
                        merged[othersIndex].count += count;
                        // For stray authors, we treat count as total since we don't have a catalog
                        merged[othersIndex].total += count;
                    }
                }
            });

            setAuthorStats(merged);
        } catch (err) {
            console.error('[Stats] Error:', err);
        }
    };


    useEffect(() => { if (songResources.length > 0) fetchAuthorStats(); }, [songResources]);

    const scrollGitaSlider = (direction: 'left' | 'right') => {
        if (gitaSliderRef.current) {
            const scrollAmount = window.innerWidth < 768 ? 200 : 400;
            gitaSliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleSliderInteraction = () => {
        setIsSliderInteracting(true);
        if (sliderInteractionTimeout.current) clearTimeout(sliderInteractionTimeout.current);
        sliderInteractionTimeout.current = setTimeout(() => {
            setIsSliderInteracting(false);
        }, 3000);
    };

    // songsOnly removed since we use songResources everywhere.

    const normalizeSingerName = (rawName: string): string => {
        let name = rawName.trim();
        const parenIdx = name.indexOf('(');
        if (parenIdx !== -1) name = name.slice(0, parenIdx).trim();
        if (!name) return '';
        const lower = name.toLowerCase();
        if (lower.includes('original recording') || lower === 'original' || lower.includes('ai recitation') || lower.includes('instrumental')) return '';

        if (name === 'Srila Prabhupada' || lower === 'a.c. bhaktivedanta swami prabhupada' || lower === 'a c bhaktivedanta swami prabhupada') {
            return 'HDG Srila Prabhupada';
        }
        if (name.includes('Sachinanadana') || name.includes('Jaysacinandana')) {
            return 'HG Jai Sachinandana Prabhu';
        }
        if (name.includes('Yashoda Kumar Dasa')) {
            return 'HG Yasoda Kumara Prabhu';
        }
        return name;
    };

    const SINGER_ODIA_MAP: Record<string, string> = {
        'HDG Srila Prabhupada': 'ଏଚ୍.ଡି.ଜି. ଶ୍ରୀଳ ପ୍ରଭୁପାଦ',
        'Srila Prabhupada': 'ଏଚ୍.ଡି.ଜି. ଶ୍ରୀଳ ପ୍ରଭୁପାଦ',

        // HH Sannyasis
        'HH Achyutananda Swami': 'ଏଚ୍.ଏଚ୍. ଅଚ୍ୟୁତାନନ୍ଦ ସ୍ୱାମୀ',
        'HH Bhakti Ashraya Vaishnava Swami': 'ଏଚ୍.ଏଚ୍. ଭକ୍ତି ଆଶ୍ରୟ ବୈଷ୍ଣବ ସ୍ୱାମୀ',
        'HH Bhakti Bhusana Swami': 'ଏଚ୍.ଏଚ୍. ଭକ୍ତି ଭୂଷଣ ସ୍ୱାମୀ',
        'HH Bhakti Bringa Govinda Swami': 'ଏଚ୍.ଏଚ୍. ଭକ୍ତି ଭୃଙ୍ଗ ଗୋବିନ୍ଦ ସ୍ୱାମୀ',
        'HH Bhakti Caru Swami': 'ଏଚ୍.ଏଚ୍. ଭକ୍ତି ଚାରୁ ସ୍ୱାମୀ',
        'HH Bhakti Charu Swami': 'ଏଚ୍.ଏଚ୍. ଭକ୍ତି ଚାରୁ ସ୍ୱାମୀ',
        'HH Bhakti Prema Swami': 'ଏଚ୍.ଏଚ୍. ଭକ୍ତି ପ୍ରେମ ସ୍ୱାମୀ',
        'HH Bhakti Rasamrita Swami': 'ଏଚ୍.ଏଚ୍. ଭକ୍ତି ରସାମୃତ ସ୍ୱାମୀ',
        'HH Bhakti Swarupa Damodara Swami': 'ଏଚ୍.ଏଚ୍. ଭକ୍ତି ସ୍ୱରୂପ ଦାମୋଦର ସ୍ୱାମୀ',
        'HH Gopal Krishna Goswami': 'ଏଚ୍.ଏଚ୍. ଗୋପାଳ କୃଷ୍ଣ ଗୋସ୍ୱାମୀ',
        'HH Gour Govinda Swami': 'ଏଚ୍.ଏଚ୍. ଗୌର ଗୋବିନ୍ଦ ସ୍ୱାମୀ',
        'HH Haladhara Swami': 'ଏଚ୍.ଏଚ୍. ହଳଧର ସ୍ୱାମୀ',
        'HH Indradyumna Swami': 'ଏଚ୍.ଏଚ୍. ଇନ୍ଦ୍ରଦ୍ୟୁମ୍ନ ସ୍ୱାମୀ',
        'HH Jayapataka Swami': 'ଏଚ୍.ଏଚ୍. ଜୟପତାକା ସ୍ୱାମୀ',
        'HH Kadamba Kanana Swami': 'ଏଚ୍.ଏଚ୍. କଦମ୍ବ କାନନ ସ୍ୱାମୀ',
        'HH Lokanath Swami': 'ଏଚ୍.ଏଚ୍. ଲୋକନାଥ ସ୍ୱାମୀ',
        'HH Mukunda Goswami': 'ଏଚ୍.ଏଚ୍. ମୁକୁନ୍ଦ ଗୋସ୍ୱାମୀ',
        'HH Radhanath Swami': 'ଏଚ୍.ଏଚ୍. ରାଧାନାଥ ସ୍ୱାମୀ',
        'HH Sachinandana Swami': 'ଏଚ୍.ଏଚ୍. ଶଚୀନନ୍ଦନ ସ୍ୱାମୀ',
        'HH Sivaram Swami': 'ଏଚ୍.ଏଚ୍. ଶିବରାମ ସ୍ୱାମୀ',
        'HH Sivarama Swami': 'ଏଚ୍.ଏଚ୍. ଶିବରାମ ସ୍ୱାମୀ',
        'HH Subhag Swami': 'ଏଚ୍.ଏଚ୍. ସୁଭଗ ସ୍ୱାମୀ',
        'HH Tamal Krishna Goswami': 'ଏଚ୍.ଏଚ୍. ତମାଳ କୃଷ୍ଣ ଗୋସ୍ୱାମୀ',
        'HH Vedavyasa Priya Swami': 'ଏଚ୍.ଏଚ୍. ବେଦବ୍ୟାସ ପ୍ରିୟ ସ୍ୱାମୀ',
        'HH Vishnu Jana Swami': 'ଏଚ୍.ଏଚ୍. ବିଷ୍ଣୁ ଜନ ସ୍ୱାମୀ',

        // HG Prabhus & Matajis
        'HG Agnidev Prabhu': 'ଏଚ୍.ଜି. ଅଗ୍ନିଦେବ ପ୍ରଭୁ',
        'HG Amarendra Prabhu': 'ଏଚ୍.ଜି. ଅମରେନ୍ଦ୍ର ପ୍ରଭୁ',
        'HG Ananda Lila Prabhu': 'ଏଚ୍.ଜି. ଆନନ୍ଦ ଲୀଳା ପ୍ରଭୁ',
        'HG Ananda Radhe Mataji': 'ଏଚ୍.ଜି. ଆନନ୍ଦ ରାଧେ ମାତାଜୀ',
        'HG Badahari Prabhu': 'ଏଚ୍.ଜି. ବଡ଼ହରି ପ୍ରଭୁ',
        'HG Balaram Prasad Prabhu': 'ଏଚ୍.ଜି. ବଳରାମ ପ୍ରସାଦ ପ୍ରଭୁ',
        'HG Chakrini Mataji': 'ଏଚ୍.ଜି. ଚକ୍ରିଣୀ ମାତାଜୀ',
        'HG Gaura Mani Mataji': 'ଏଚ୍.ଜି. ଗୌର ମଣି ମାତାଜୀ',
        'HG Gauranga Darshan Prabhu': 'ଏଚ୍.ଜି. ଗୌରାଙ୍ଗ ଦର୍ଶନ ପ୍ରଭୁ',
        'HG Gauranga Prabhu': 'ଏଚ୍.ଜି. ଗୌରାଙ୍ଗ ପ୍ରଭୁ',
        'HG Jai Sachinandana Prabhu': 'ଏଚ୍.ଜି. ଜୟ ଶଚୀନନ୍ଦନ ପ୍ରଭୁ',
        'HG Jay Vrindavan Prabhu': 'ଏଚ୍.ଜି. ଜୟ ବୃନ୍ଦାବନ ପ୍ରଭୁ',
        'HG Kamal Gopal Das': 'ଏଚ୍.ଜି. କମଳ ଗୋପାଳ ଦାସ',
        'HG Kananbala Devi': 'ଏଚ୍.ଜି. କାନନବାଳା ଦେବୀ',
        'HG Krsna Kirtan Prabhu': 'ଏଚ୍.ଜି. କୃଷ୍ଣ କୀର୍ତ୍ତନ ପ୍ରଭୁ',
        'HG Madhava Prabhu': 'ଏଚ୍.ଜି. ମାଧବ ପ୍ରଭୁ',
        'HG Mayuri Gandharvika Mataji': 'ଏଚ୍.ଜି. ମୟୂରୀ ଗାନ୍ଧର୍ବିକା ମାତାଜୀ',
        'HG Naru Gopal Prabhu': 'ଏଚ୍.ଜି. ନାରୁ ଗୋପାଳ ପ୍ରଭୁ',
        'HG Nityananda Prabhu': 'ଏଚ୍.ଜି. ନିତ୍ୟାନନ୍ଦ ପ୍ରଭୁ',
        'HG Purushottam Prabhu': 'ଏଚ୍.ଜି. ପୁରୁଷୋତ୍ତମ ପ୍ରଭୁ',
        'HG Radheshyam Prabhu': 'ଏଚ୍.ଜି. ରାଧେଶ୍ୟାମ୍ ପ୍ରଭୁ',
        'HG Saci Kumar Prabhu': 'ଏଚ୍.ଜି. ଶଚୀ କୁମାର ପ୍ରଭୁ',
        'HG Sankarshan Das Adhikari': 'ଏଚ୍.ଜି. ସଙ୍କର୍ଷଣ ଦାସ ଅଧିକାରୀ',
        'HG Shikshashtakam Prabhu': 'ଏଚ୍.ଜି. ଶିକ୍ଷାଷ୍ଟକମ୍ ପ୍ରଭୁ',
        'HG Sivarama Prabhu': 'ଏଚ୍.ଜି. ଶିବରାମ ପ୍ରଭୁ',
        'HG Sukha Sagari Mataji': 'ଏଚ୍.ଜି. ସୁଖ ସାଗରୀ ମାତାଜୀ',
        'HG Swarupa Damodar Prabhu': 'ଏଚ୍.ଜି. ସ୍ୱରୂପ ଦାମୋଦର ପ୍ରଭୁ',
        'HG Titiksava Karunika Prabhu': 'ଏଚ୍.ଜି. ତିତିକ୍ଷବ କାରୁଣିକ ପ୍ରଭୁ',
        'HG Vaisesika Prabhu': 'ଏଚ୍.ଜି. ବୈଶେଷିକ ପ୍ରଭୁ',
        'HG Vaiyasaki Prabhu': 'ଏଚ୍.ଜି. ବୈୟାସକୀ ପ୍ରଭୁ',
        'HG Vishakha Mataji': 'ଏଚ୍.ଜି. ବିଶାଖା ମାତାଜୀ',
        'HG Yamuna Mataji': 'ଏଚ୍.ଜି. ଯମୁନା ମାତାଜୀ',
        'HG Yasoda Kumara Prabhu': 'ଏଚ୍.ଜି. ଯଶୋଦା କୁମାର ପ୍ରଭୁ',

        // Groups & Others
        'Vaishnavas': 'ବୈଷ୍ଣବଗଣ',
        'Vaishnavas Kirtan': 'ବୈଷ୍ଣବ କୀର୍ତ୍ତନ',
        'Gayatri Dasa': 'ଗାୟତ୍ରୀ ଦାସ',
        'Murari Prabhu': 'ମୁରାରୀ ପ୍ରଭୁ',
        'Ramadevi Rao': 'ରମାଦେବୀ ରାଓ',
        'Sriman Tamal Krsna Das Brahmacari': 'ଶ୍ରୀମାନ୍ ତମାଳ କୃଷ୍ଣ ଦାସ ବ୍ରହ୍ମଚାରୀ'
    };

    const getSingerOdiaName = (rawName: string): string => {
        if (!rawName) return '';
        const norm = normalizeSingerName(rawName);
        if (SINGER_ODIA_MAP[norm]) return SINGER_ODIA_MAP[norm];
        if (SINGER_ODIA_MAP[rawName]) return SINGER_ODIA_MAP[rawName];

        // Dynamic rule-based transliteration for any new future singer
        let odia = norm || rawName;
        odia = odia.replace(/^HDG\s+/i, 'ଏଚ୍.ଡି.ଜି. ');
        odia = odia.replace(/^HH\s+/i, 'ଏଚ୍.ଏଚ୍. ');
        odia = odia.replace(/^HG\s+/i, 'ଏଚ୍.ଜି. ');
        odia = odia.replace(/\bSwami\b/gi, 'ସ୍ୱାମୀ');
        odia = odia.replace(/\bGoswami\b/gi, 'ଗୋସ୍ୱାମୀ');
        odia = odia.replace(/\bPrabhu\b/gi, 'ପ୍ରଭୁ');
        odia = odia.replace(/\bMataji\b/gi, 'ମାତାଜୀ');
        odia = odia.replace(/\bDas\b/gi, 'ଦାସ');
        odia = odia.replace(/\bDasa\b/gi, 'ଦାସ');
        odia = odia.replace(/\bDevi\b/gi, 'ଦେବୀ');
        odia = odia.replace(/\bAdhikari\b/gi, 'ଅଧିକାରୀ');
        odia = odia.replace(/\bBrahmacari\b/gi, 'ବ୍ରହ୍ମଚାରୀ');
        odia = odia.replace(/\bVaishnavas\b/gi, 'ବୈଷ୍ଣବଗଣ');
        return odia;
    };

    const singerStats = useMemo(() => {
        const singerSongMap = new Map<string, Set<string>>();
        songResources.forEach(s => {
            const singersInSong = new Set<string>();
            if (s.vocalist) {
                s.vocalist.split(/\s*[\/,]\s*/).forEach(p => {
                    const norm = normalizeSingerName(p);
                    if (norm) singersInSong.add(norm);
                });
            }
            if (s.audioVersions && Array.isArray(s.audioVersions)) {
                s.audioVersions.forEach(av => {
                    if (av.label) {
                        av.label.split(/\s*[\/,]\s*/).forEach(p => {
                            const norm = normalizeSingerName(p);
                            if (norm) singersInSong.add(norm);
                        });
                    }
                });
            }
            singersInSong.forEach(singer => {
                if (!singerSongMap.has(singer)) singerSongMap.set(singer, new Set());
                singerSongMap.get(singer)!.add(s.id);
            });
        });

        // vsnectar canonical prefix hierarchy: HDG -> HH -> HG -> Vaishnavas -> others
        const prefixes = ['HDG', 'HH', 'HG', 'Vaishnavas'];
        const getRank = (name: string) => {
            for (let i = 0; i < prefixes.length; i++) {
                if (name.startsWith(prefixes[i])) return i;
            }
            return prefixes.length;
        };

        return Array.from(singerSongMap.entries())
            .map(([singer, songSet]) => ({
                singer,
                singer_odia: getSingerOdiaName(singer),
                count: songSet.size
            }))
            .sort((a, b) => {
                const ra = getRank(a.singer);
                const rb = getRank(b.singer);
                return ra === rb ? a.singer.localeCompare(b.singer) : ra - rb;
            });
    }, [songResources]);

    // vsnectar Temple Songs canonical daily liturgical schedule
    const VSNECTAR_TEMPLE_SONGS = useMemo(() => [
        {
            order: 1,
            key: 'Mangal Arati',
            eng: 'Mangal Arati (Samsara Davanala Lidha Loka)',
            odia: 'ମଙ୍ଗଳ ଆରତି (ଶ୍ରୀ ଗୁର୍ବଷ୍ଟକମ୍)',
            author: 'Srila Visvanatha Cakravarti Thakura',
            id: 'song-gurvastakam'
        },
        {
            order: 2,
            key: 'Prema Dhvani Prayers',
            eng: 'Prema Dhvani Prayers',
            odia: 'ପ୍ରେମ ଧ୍ୱନି ପ୍ରାର୍ଥନା (ଜୟ ଧ୍ୱନି)',
            author: 'Traditional',
            id: 'song-premadhvani'
        },
        {
            order: 3,
            key: 'Narasimha Aarati',
            eng: 'Narasimha Aarati (Namaste Narasimhaya)',
            odia: 'ନରସିଂହ ଆରତି (ନମସ୍ତେ ନରସିଂହାୟ)',
            author: 'Traditional / Vyasadeva',
            id: 'song-namastenarasimhaya'
        },
        {
            order: 4,
            key: 'Tulasi Arati',
            eng: 'Tulasi Arati (Namo Namah Tulasi Krsna Preyasi)',
            odia: 'ତୁଳସୀ ଆରତି (ନମୋ ନମଃ ତୁଲସୀ)',
            author: 'Traditional',
            id: 'song-namonamahtulasi'
        },
        {
            order: 5,
            key: 'Sri Sri Shikshashtakam',
            eng: 'Sri Sri Shikshashtakam (Ceto Darpana Marjanam)',
            odia: 'ଶ୍ରୀ ଶିକ୍ଷାଷ୍ଟକମ୍ (ଚେତୋ-ଦର୍ପଣ ମାର୍ଜନଂ)',
            author: 'Sri Caitanya Mahaprabhu',
            id: 'song-shikshashtakam'
        },
        {
            order: 6,
            key: 'The Ten Offenses to the Holy Name',
            eng: 'The Ten Offenses to the Holy Name',
            odia: 'ଦଶବିଧ ନାମାପରାଧ',
            author: 'Padma Purana',
            id: null
        },
        {
            order: 7,
            key: 'Govindam Prayers',
            eng: 'Govindam Prayers (Darshana Arati)',
            odia: 'ଗୋବିନ୍ଦମ୍ ପ୍ରାର୍ଥନା (ଦର୍ଶନ ଆରତୀ)',
            author: 'Lord Brahma',
            id: 'song-govindamprayers'
        },
        {
            order: 8,
            key: 'Guru Puja',
            eng: 'Guru Puja (Sri Guru Carana Padma)',
            odia: 'ଶ୍ରୀ ଗୁରୁ ଚରଣ ପଦ୍ମ (ଗୁରୁ ପୂଜା)',
            author: 'Srila Narottama Dasa Thakura',
            id: 'song-gurupuja'
        },
        {
            order: 9,
            key: 'Jaya Radha Madhava',
            eng: 'Jaya Radha Madhava',
            odia: 'ଜୟ ରାଧା-ମାଧବ',
            author: 'Srila Bhaktivinoda Thakura',
            id: 'song-jayaradhadhava'
        },
        {
            order: 10,
            key: 'Mangalacarana',
            eng: 'Mangalacarana (Full)',
            odia: 'ମଙ୍ଗଳାଚରଣ (ପୂର୍ଣ୍ଣ ପ୍ରାର୍ଥନା)',
            author: 'Traditional',
            id: null
        },
        {
            order: 11,
            key: 'Gaura Arati',
            eng: 'Gaura Arati (Jaya Jaya Goracander Arotik)',
            odia: 'ଗୌର ଆରତି (ଜୟ ଜୟ ଗୋରାଚାନ୍ଦେର)',
            author: 'Srila Bhaktivinoda Thakura',
            id: 'song-gauraarati'
        },
        {
            order: 12,
            key: 'Hari Haraye Namah Krsna',
            eng: 'Hari Haraye Namah Krsna Yadavaya',
            odia: 'ହରି ହରୟେ ନମଃ କୃଷ୍ଣ ଯାଦବାୟ',
            author: 'Srila Narottama Dasa Thakura',
            id: 'song-hariharayenamah'
        },
        {
            order: 13,
            key: 'Vibhavari Sesa',
            eng: 'Vibhavari Sesa',
            odia: 'ବିଭାବରୀ ଶେଷ',
            author: 'Srila Bhaktivinoda Thakura',
            id: 'song-vibhavarisesa'
        },
        {
            order: 14,
            key: 'Yasomati Nandana',
            eng: 'Yasomati Nandana',
            odia: 'ଯଶୋମତି ନନ୍ଦନ (ନାମ କୀର୍ତ୍ତନ)',
            author: 'Srila Bhaktivinoda Thakura',
            id: 'song-yasomatinandana'
        },
        {
            order: 15,
            key: 'Bhoga Arati',
            eng: 'Bhoga Arati (Bhaja Bhakata Vatsala)',
            odia: 'ଭୋଗ ଆରତି (ଭଜ ଭକତ-ବତ୍ସଲ)',
            author: 'Srila Bhaktivinoda Thakura',
            id: 'song-bhajabhakatavatsala'
        },
        {
            order: 16,
            key: 'Prasadam Honoring Prayers',
            eng: 'Prasadam Honoring Prayers (Maha Prasade Govinde)',
            odia: 'ମହାପ୍ରସାଦେ ଗୋବିନ୍ଦେ (ପ୍ରସାଦ ସେବା)',
            author: 'Traditional / Bhaktivinoda Thakura',
            id: 'song-mahaprasadegovinde'
        },
        {
            order: 17,
            key: 'Damodara Ashtakam',
            eng: 'Damodara Ashtakam (Namamisvaram Saccidananda)',
            odia: 'ଶ୍ରୀ ଦାମୋଦରାଷ୍ଟକମ୍ (ନମାମୀଶ୍ୱରଂ)',
            author: 'Satyavrata Muni',
            id: 'song-damodarastakam'
        },
        {
            order: 18,
            key: 'Sri Sri Sad Goswami Ashtaka',
            eng: 'Sri Sri Sad Goswami Ashtaka (Krsnotkirtana)',
            odia: 'ଶ୍ରୀ ଷଡ୍‌ଗୋସ୍ୱାମୀ ଅଷ୍ଟକମ୍',
            author: 'Srila Srinivasa Acarya',
            id: 'song-sadgoswamyastakam'
        }
    ], []);

    const templeSongsResolved = useMemo(() => {
        return VSNECTAR_TEMPLE_SONGS.map(item => {
            const foundSong = item.id ? songResources.find(s => s.id === item.id) : null;
            return {
                ...item,
                song: foundSong || null,
                isAvailable: Boolean(foundSong)
            };
        });
    }, [VSNECTAR_TEMPLE_SONGS, songResources]);

    // vsnectar Pranama Mantras canonical schedule (https://vsnectar.web.app/home/pranama)
    const VSNECTAR_PRANAMA_SONGS = useMemo(() => [
        {
            order: 1,
            key: 'Mangalacarana (Full)',
            eng: 'Mangalacarana (Full)',
            odia: 'ମଙ୍ଗଳାଚରଣ (ପୂର୍ଣ୍ଣ ପ୍ରାର୍ଥନା)',
            author: 'Traditional',
            id: null
        },
        {
            order: 2,
            key: 'Mangalacarana (Short)',
            eng: 'Mangalacarana (Short)',
            odia: 'ମଙ୍ଗଳାଚରଣ (ସଂକ୍ଷିପ୍ତ)',
            author: 'Traditional',
            id: null
        },
        {
            order: 3,
            key: 'Sri Guru Pranama',
            eng: 'Sri Guru Pranama',
            odia: 'ଶ୍ରୀ ଗୁରୁ ପ୍ରଣାମ',
            author: 'Traditional',
            id: 'song-srigurupranama'
        },
        {
            order: 4,
            key: 'Sri Rupa Pranama',
            eng: 'Sri Rupa Pranama',
            odia: 'ଶ୍ରୀ ରୂପ ପ୍ରଣାମ',
            author: 'Traditional',
            id: null
        },
        {
            order: 5,
            key: 'Mangalacarana',
            eng: 'Mangalacarana',
            odia: 'ମଙ୍ଗଳାଚରଣ',
            author: 'Traditional',
            id: null
        },
        {
            order: 6,
            key: 'Srila Prabhupada Pranati',
            eng: 'Srila Prabhupada Pranati',
            odia: 'ଶ୍ରୀଳ ପ୍ରଭୁପାଦ ପ୍ରଣତି',
            author: 'Disciples of Srila Prabhupada',
            id: 'song-srilaprabhupadapranati'
        },
        {
            order: 7,
            key: 'Srila Bhaktisiddhanta Sarasvati Pranati',
            eng: 'Srila Bhaktisiddhanta Sarasvati Pranati',
            odia: 'ଶ୍ରୀଳ ଭକ୍ତିସିଦ୍ଧାନ୍ତ ସରସ୍ୱତୀ ପ୍ରଣତି',
            author: 'Srila Prabhupada',
            id: 'song-srilabhaktisiddhantapranati'
        },
        {
            order: 8,
            key: 'Srila Gaurakisora Pranati',
            eng: 'Srila Gaurakisora Pranati',
            odia: 'ଶ୍ରୀଳ ଗୌରକିଶୋର ପ୍ରଣତି',
            author: 'Srila Bhaktisiddhanta Sarasvati Thakura',
            id: 'song-srilagaurakisorapranati'
        },
        {
            order: 9,
            key: 'Srila Bhaktivinoda Pranati',
            eng: 'Srila Bhaktivinoda Pranati',
            odia: 'ଶ୍ରୀଳ ଭକ୍ତିବିନୋଦ ପ୍ରଣତି',
            author: 'Srila Bhaktisiddhanta Sarasvati Thakura',
            id: 'song-srilabhaktivinodapranati'
        },
        {
            order: 10,
            key: 'Srila Jagannatha Pranati',
            eng: 'Srila Jagannatha Pranati',
            odia: 'ଶ୍ରୀଳ ଜଗନ୍ନାଥ ପ୍ରଣତି',
            author: 'Srila Bhaktisiddhanta Sarasvati Thakura',
            id: 'song-srilajagannathapranati'
        },
        {
            order: 11,
            key: 'Sri Vaishnava Pranama',
            eng: 'Sri Vaishnava Pranama',
            odia: 'ଶ୍ରୀ ବୈଷ୍ଣବ ପ୍ରଣାମ',
            author: 'Traditional',
            id: 'song-srivaishnavapranama'
        },
        {
            order: 12,
            key: 'Sri Gauranga Pranama',
            eng: 'Sri Gauranga Pranama',
            odia: 'ଶ୍ରୀ ଗୌରାଙ୍ଗ ପ୍ରଣାମ',
            author: 'Srila Rupa Goswami',
            id: 'song-gaurangapranama'
        },
        {
            order: 13,
            key: 'Sri Panca-tattva Pranama',
            eng: 'Sri Panca-tattva Pranama',
            odia: 'ଶ୍ରୀ ପଞ୍ଚତତ୍ତ୍ୱ ପ୍ରଣାମ',
            author: 'Traditional',
            id: 'song-sripancatattvapranama'
        },
        {
            order: 14,
            key: 'Sri Krishna Pranama',
            eng: 'Sri Krishna Pranama',
            odia: 'ଶ୍ରୀ କୃଷ୍ଣ ପ୍ରଣାମ',
            author: 'Traditional',
            id: 'song-srikrishnapranama'
        },
        {
            order: 15,
            key: 'Sambandhadhideva Pranama',
            eng: 'Sambandhadhideva Pranama',
            odia: 'ସମ୍ବନ୍ଧାଧିଦେବ ପ୍ରଣାମ (ଶ୍ରୀ ରାଧା-ମଦନମୋହନ)',
            author: 'Sanatana Goswami',
            id: 'song-sambandhadhidevapranama'
        },
        {
            order: 16,
            key: 'Abhidheyadhideva Pranama',
            eng: 'Abhidheyadhideva Pranama',
            odia: 'ଅଭିଧେୟାଧିଦେବ ପ୍ରଣାମ (ଶ୍ରୀ ରାଧା-ଗୋବିନ୍ଦ)',
            author: 'Sanatana Goswami',
            id: 'song-abhidheyadhidevapranama'
        },
        {
            order: 17,
            key: 'Prayojanadhideva Pranama',
            eng: 'Prayojanadhideva Pranama',
            odia: 'ପ୍ରୟୋଜନାଧିଦେବ ପ୍ରଣାମ (ଶ୍ରୀ ରାଧା-ଗୋପୀନାଥ)',
            author: 'Sanatana Goswami',
            id: 'song-prayojanadhidevapranama'
        },
        {
            order: 18,
            key: 'Sri Radha Pranama',
            eng: 'Sri Radha Pranama',
            odia: 'ଶ୍ରୀ ରାଧା ପ୍ରଣାମ',
            author: 'Traditional',
            id: 'song-sriradhapranama'
        },
        {
            order: 19,
            key: 'Panca-tattva Maha-mantra',
            eng: 'Panca-tattva Maha-mantra',
            odia: 'ଶ୍ରୀ ପଞ୍ଚତତ୍ତ୍ୱ ମହାମନ୍ତ୍ର',
            author: 'Traditional',
            id: 'song-pancatattvamahamantra'
        },
        {
            order: 20,
            key: 'Hare Krishna Mahamantra',
            eng: 'Hare Krishna Mahamantra',
            odia: 'ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର',
            author: 'Traditional',
            id: 'song-harekrishnamahamantra'
        }
    ], []);

    const pranamaSongsResolved = useMemo(() => {
        return VSNECTAR_PRANAMA_SONGS.map(item => {
            const foundSong = item.id ? songResources.find(s => s.id === item.id) : null;
            return {
                ...item,
                song: foundSong || null,
                isAvailable: Boolean(foundSong)
            };
        });
    }, [VSNECTAR_PRANAMA_SONGS, songResources]);



    const gitaChapters = useMemo(() => {
        return songResources
            .filter(s => {
                const isGitaCategory = s.category === 'Gita' || s.category === 'G' || s.category === 'Gītā-māହାତ୍ମ୍ୟ';
                const hasGitaInTitle = (s.title_english || s.title || '').toLowerCase().includes('gita') ||
                    (s.title_english || s.title || '').includes('Gītā');
                return isGitaCategory || hasGitaInTitle;
            })
            .sort((a, b) => {
                const aNum = parseInt(a.title_english?.match(/\d+/)?.[0] || '0'); // Mahatmya at start if no number, or adjust to place at end
                const bNum = parseInt(b.title_english?.match(/\d+/)?.[0] || '0');

                if (aNum !== bNum) return aNum - bNum;
                return (a.title_odia || a.title).localeCompare(b.title_odia || b.title);
            });
    }, [songResources]);

    const filteredSongs = useMemo(() => {
        const query = normalizeForSearch(searchQuery);
        const queryAgg = normalizeForSearch(searchQuery, true);
        const pool = activeTab === 'gita' ? gitaChapters : activeTab === 'temple' ? (templeSongsResolved.map(t => t.song).filter(Boolean) as Resource[]) : activeTab === 'badadanda' ? [] : songResources;

        if (!query) {
            // In the Gita, Temple, or Badadanda tab, if there is no search, we don't want the alphabetical song list.
            return (activeTab === 'gita' || activeTab === 'temple' || activeTab === 'badadanda') ? [] : pool;
        }

        // 1. History filter (shows recently played/viewed songs)
        if (searchQuery === 'Recent') {
            const recents = songResources.filter(s => recentIds.includes(s.id));
            return recents.length > 0 ? recents : songResources.slice(0, 10);
        }

        const isTempleFilter = query === 'temple';
        const isPranamaFilter = query === 'pranama';
        const isAstakamFilter = query === 'astakam' || query === 'ashtakam';

        const tokens = searchQuery.trim().split(/\s+/).filter(t => t.length > 1);

        return pool.filter(s => {
            if (isTempleFilter) {
                return s.tags?.some(tag => /temple|arati/i.test(tag || '')) ||
                    /arati|kirtan|temple/i.test(s.title_english || '') ||
                    /ଆରତି|ମନ୍ଦିର/i.test(s.title_odia || '');
            }
            if (isPranamaFilter) {
                return s.tags?.some(tag => /pranama|mantra/i.test(tag || '')) ||
                    /pranama|mantra/i.test(s.title_english || '') ||
                    /ପ୍ରଣାମ|ମନ୍ତ୍ର/i.test(s.title_odia || '');
            }
            if (isAstakamFilter) {
                return s.tags?.some(tag => /as[h]?takam|stotra/i.test(tag || '')) ||
                    /as[h]?takam|stotra/i.test(s.title_english || '') ||
                    /ଅଷ୍ଟକ|ସ୍ତୋତ୍ର/i.test(s.title_odia || '');
            }

            const normTitleOdia = normalizeForSearch(s.title_odia || s.title || '');
            const normTitleEng = normalizeForSearch(s.title_english || '');
            const normAuthor = normalizeForSearch(s.author || '');
            const normDesc = normalizeForSearch(s.description || '');
            const inVocalist = normalizeForSearch(s.vocalist || '').includes(query) ||
                s.audioVersions?.some(av => normalizeForSearch(av.label || '').includes(query));

            // Direct match on whole query
            const inTitle = normTitleOdia.includes(query) || normTitleEng.includes(query);
            const inAuthor = normAuthor.includes(query);
            const inDescription = normDesc.includes(query);
            const inTags = s.tags?.some(tag => normalizeForSearch(tag || '').includes(query));

            // Check verses lyrics
            const inLyrics = s.structuredContent?.verses.some(v =>
                normalizeForSearch(v.lyric || '').includes(query) || normalizeForSearch(v.translation || '').includes(query)
            );

            if (inTitle || inAuthor || inDescription || inLyrics || inTags || inVocalist) return true;

            // Aggressive (vowel-neutral) match for queries with at least 3 consonants
            if (queryAgg.length >= 3) {
                const inTitleAgg = normalizeForSearch(s.title_english || '', true).includes(queryAgg);
                const inTagsAgg = s.tags?.some(tag => normalizeForSearch(tag || '', true).includes(queryAgg));
                if (inTitleAgg || inTagsAgg) return true;
            }

            // Multi-word / Token matching
            if (tokens.length > 1) {
                const allTokensMatch = tokens.every(token => {
                    const tNorm = normalizeForSearch(token);
                    const tAgg = normalizeForSearch(token, true);
                    const matchTitle = normTitleOdia.includes(tNorm) || normTitleEng.includes(tNorm) ||
                        (tAgg.length >= 3 && normalizeForSearch(s.title_english || '', true).includes(tAgg));
                    const matchTags = s.tags?.some(tag => normalizeForSearch(tag || '').includes(tNorm) ||
                        (tAgg.length >= 3 && normalizeForSearch(tag || '', true).includes(tAgg)));
                    const matchAuthor = normAuthor.includes(tNorm);
                    const matchVocalist = inVocalist;
                    return matchTitle || matchTags || matchAuthor || matchVocalist;
                });
                if (allTokensMatch) return true;
            }

            return false;
        });
    }, [songResources, gitaChapters, activeTab, searchQuery, recentIds]);

    // Alphabet navigation logic removed unused array
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const scrollToSection = (letter: string) => {
        setActiveLetter(letter);
        const element = sectionRefs.current[letter];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleVoiceSearch = () => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("କ୍ଷମା କରିବେ, ଆପଣଙ୍କ ବ୍ରାଉଜର୍ ରେ ଭଏସ୍ ସର୍ଚ୍ଚ ସପୋର୍ଟ କରୁନାହିଁ | (Voice search is not supported by your browser.)");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'or-IN';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setSearchQuery(transcript);
            setIsListening(false);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error);
            setIsListening(false);
            if (event.error === 'not-allowed') {
                alert("ଦୟାକରି ଭଏସ୍ ସର୍ଚ୍ଚ ପାଇଁ ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ଦିଅନ୍ତୁ | (Please enable microphone access.)");
            } else if (event.error === 'no-speech') {
                // Ignore silent timeouts, just close the UI
            } else {
                alert("କିଛି ଅସୁବିଧା ହେଲା, ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ | (Something went wrong, please try again.)");
            }
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    };

    const getCategoryLetter = (song: Resource) => {
        // Now that every song has a title_english, we primarily use that
        let textToUse = song.title_english || song.title.match(/\(([^)]+)\)/)?.[1] || song.title;

        // Remove any non-letter characters at the start (e.g. spaces, symbols)
        const match = textToUse.match(/[a-zA-Z\u00C0-\u017F]/);
        if (!match) return '#';

        const firstChar = match[0].toUpperCase();
        const normalized = firstChar.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return (normalized >= 'A' && normalized <= 'Z') ? normalized : '#';
    };

    const groupedSongs = useMemo(() => {
        const groups: { [key: string]: Resource[] } = {};
        filteredSongs.forEach(song => {
            const letter = getCategoryLetter(song);
            if (!groups[letter]) groups[letter] = [];
            groups[letter].push(song);
        });
        return groups;
    }, [filteredSongs]);

    const sortedGroups = useMemo(() => Object.keys(groupedSongs).sort((a, b) => {
        if (a === '#') return 1;
        if (b === '#') return -1;
        return a.localeCompare(b);
    }), [groupedSongs]);

    // 3. Section Tracking for Alphabetical Badge
    useEffect(() => {
        if (activeTab !== 'songs') {
            setActiveLetter(null);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLetter(entry.target.getAttribute('data-letter'));
                }
            });
        }, {
            root: mainScrollRef.current,
            threshold: 0,
            rootMargin: '-10% 0px -85% 0px'
        });

        const sections = document.querySelectorAll('.song-section');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [activeTab, searchQuery, sortedGroups]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterMenuRef.current && !filterMenuRef.current.contains(event.target as Node)) {
                setIsFilterMenuOpen(false);
            }
        };
        if (isFilterMenuOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isFilterMenuOpen]);

    useEffect(() => {
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.setAttribute('content', theme.color);
        document.body.style.backgroundColor = selectedSong ? theme.color : 'var(--color-cream)';
    }, [theme.color, selectedSong]);

    const getOdiaTitle = (song: Resource) => {
        if (song.title_odia) return song.title_odia;
        // Try to find pure Odia text outside parentheses
        const title = song.title;
        const noParens = title.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
        if (noParens.match(/[\u0B00-\u0B7F]/)) {
            return noParens;
        }

        // If not found outside, maybe it's inside parentheses
        const match = title.match(/\(([^)]+)\)/);
        if (match && match[1] && match[1].match(/[\u0B00-\u0B7F]/)) return match[1];

        return title.replace(/\([^)]*\)/g, '').trim() || title; // fallback to removing parens anyway
    };

    const SPEAKER_MAP: Record<string, { label: string, icon: React.ReactNode, color: string }> = {
        'ଶ୍ରୀଭଗବାନୁବାଚ': { label: 'ଶ୍ରୀଭଗବାନୁବାଚ', icon: <Sparkles size={16} />, color: '#fbbf24' },
        'ଶ୍ରୀଭଗବାନۇବାଚ': { label: 'ଶ୍ରୀଭଗବାନୁବାଚ', icon: <Sparkles size={16} />, color: '#fbbf24' },
        'ଅର୍ଜୁନ ଉବାଚ': { label: 'ଅର୍ଜୁନ ଉବାଚ', icon: <Crosshair size={16} />, color: '#38bdf8' },
        'ସଞ୍ଜୟ ଉବାଚ': { label: 'ସଞ୍ଜୟ ଉବାଚ', icon: <Eye size={16} />, color: '#a78bfa' },
        'ସଂଞ୍ଜୟ ଉବାଚ': { label: 'ସଞ୍ଜୟ ଉବାଚ', icon: <Eye size={16} />, color: '#a78bfa' },
        'ସମ୍ଭବତଃ ସଂଞ୍ଜୟ ଉବାଚ': { label: 'ସଞ୍ଜୟ ଉବାଚ', icon: <Eye size={16} />, color: '#a78bfa' },
        'ଧୃତରାଷ୍ଟ୍ର ଉବାଚ': { label: 'ଧୃତରାଷ୍ଟ୍ର ଉବାଚ', icon: <Users size={16} />, color: '#f87171' }
    };

    const renderGitaDashboard = () => {
        if (searchQuery || selectedSong || activeTab !== 'gita') return null;

        if (gitaChapters.length === 0) return null;

        const gitaChaps = songResources.filter(r => r.category === 'Gita').sort((a, b) => {
            const numA = parseInt(a.id?.split('-').pop() || '0');
            const numB = parseInt(b.id?.split('-').pop() || '0');
            return numA - numB;
        });
        const mahatmya = songResources.find(r => r.id === 'song-gitamahatmya');

        const seenIds = new Set();
        interface GitaSection {
            id: string;
            label: string;
            eng: string;
            icon: React.ElementType;
            color: string;
        }
        const allGitaSections: GitaSection[] = [];

        if (mahatmya) {
            allGitaSections.push({
                id: mahatmya.id,
                label: 'ଶ୍ରୀ ଗୀତା ମାହାତ୍ମ୍ୟ',
                eng: 'Gita Mahatmya',
                icon: Sparkles,
                color: '#FF9933'
            });
            seenIds.add(mahatmya.id);
        }

        gitaChaps.forEach((ch) => {
            if (seenIds.has(ch.id)) return;
            seenIds.add(ch.id);

            const names = GITA_CHAPTER_NAMES[ch.id] || { odia: ch.title_odia || 'Chapter', eng: 'Chapter', icon: BookOpen, color: '#64748b' };
            allGitaSections.push({
                id: ch.id,
                label: names.odia,
                eng: names.eng,
                icon: names.icon,
                color: names.color
            });
        });

        return (
            <div style={{ padding: '0 0 0.5rem', maxWidth: '1000px', margin: '0 auto' }}>
                {/* 🚀 QUICK NAVIGATION SLIDER (Requested) */}
                <div
                    className={isSliderInteracting ? 'interacting' : ''}
                    style={{
                        position: 'relative',
                        marginBottom: '0.5rem',
                        padding: '0 4px',
                        zIndex: 500
                    }}
                    onMouseEnter={() => setIsSliderInteracting(true)}
                    onMouseLeave={() => setIsSliderInteracting(false)}
                    onTouchStart={handleSliderInteraction}
                >
                    {/* Left Navigation Arrow (Popup on Interaction) */}
                    <button
                        onPointerDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            scrollGitaSlider('left');
                            handleSliderInteraction();
                        }}
                        className="slider-nav-popup"
                        style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            zIndex: 600,
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(12px)',
                            color: 'var(--color-maroon)',
                            border: '1.5px solid var(--color-maroon)30',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                            touchAction: 'none'
                        }}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div
                        ref={gitaSliderRef}
                        className="horizontal-scroll-container"
                        style={{
                            padding: '4px 0',
                            scrollPadding: '0 20px',
                            position: 'relative',
                            zIndex: 5
                        }}
                        onScroll={handleSliderInteraction}
                    >
                        {allGitaSections.map((sec) => (
                            <div
                                key={sec.id}
                                onClick={() => {
                                    const song = songResources.find(s => s.id === sec.id);
                                    if (song) handleSelectSong(song);
                                }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minWidth: '110px',
                                    padding: '12px 8px',
                                    background: `linear-gradient(135deg, ${sec.color}08, ${sec.color}15)`,
                                    borderRadius: '16px',
                                    border: `1px solid ${sec.color}10`,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    textAlign: 'center',
                                    height: '140px',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    color: '#334155',
                                    fontFamily: 'var(--font-odia-sans)',
                                    lineHeight: 1.2,
                                    height: '2.4rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>{sec.label}</div>

                                {/* Apollo-style Compact Icon Box */}
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '14px',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-maroon)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                                    border: '1px solid var(--color-maroon)08'
                                }}>
                                    <sec.icon size={40} />
                                </div>

                                {sec.id === 'gita-chapter-1' && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '4px',
                                        right: '4px',
                                        background: '#EF4444',
                                        color: 'white',
                                        fontSize: '0.55rem',
                                        fontWeight: 900,
                                        padding: '1px 4px',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 6px rgba(239, 68, 68, 0.3)'
                                    }}>NEW</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Arrow (Popup on Interaction) */}
                    <button
                        onPointerDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            scrollGitaSlider('right');
                            handleSliderInteraction();
                        }}
                        className="slider-nav-popup"
                        style={{
                            position: 'absolute',
                            right: '20px',
                            top: '50%',
                            zIndex: 600,
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(12px)',
                            color: 'var(--color-maroon)',
                            border: '1.5px solid var(--color-maroon)30',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                            touchAction: 'none'
                        }}
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* 📖 ALL CHAPTER CARDS GRID */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    margin: '1.25rem 0 1rem',
                    padding: '0 0.5rem'
                }}>
                    <BookOpen size={22} color={theme.color} />
                    <h2 style={{
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: isNightMode ? '#f8fafc' : '#1e293b',
                        fontFamily: 'var(--font-odia-sans)',
                        letterSpacing: '-0.3px'
                    }}>ଶ୍ରୀମଦ୍ ଭଗବଦ୍ ଗୀତା - ସମସ୍ତ ଅଧ୍ୟାୟ (୧୮)</h2>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '12px',
                    padding: '0 4px 1.5rem'
                }}>
                    {allGitaSections.map((sec, index) => {
                        const song = songResources.find(s => s.id === sec.id);
                        const chNum = sec.id.match(/\d+/)?.[0] || '';
                        const avatarGradients = [
                            'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                            'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
                            'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)',
                            'linear-gradient(135deg, #701a75 0%, #c026d3 100%)',
                            'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
                            'linear-gradient(135deg, #0e7490 0%, #0891b2 100%)',
                            'linear-gradient(135deg, #831843 0%, #db2777 100%)',
                            'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
                            'linear-gradient(135deg, #713f12 0%, #d97706 100%)',
                            'linear-gradient(135deg, #1e293b 0%, #475569 100%)'
                        ];
                        const bgGradient = avatarGradients[index % avatarGradients.length];
                        const SecIcon = sec.icon;

                        return (
                            <div
                                key={sec.id}
                                className="gita-card"
                                onClick={() => {
                                    if (song) handleSelectSong(song);
                                }}
                                style={{
                                    background: bgGradient,
                                    borderRadius: '18px',
                                    padding: '1rem 1.25rem',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div className="icon-badge" style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.22)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <SecIcon size={22} color="#ffffff" strokeWidth={2.2} />
                                </div>
                                <div className="text-content" style={{ flex: 1, minWidth: 0 }}>
                                    <div className="chapter-overline" style={{
                                        fontSize: '0.68rem',
                                        fontWeight: 800,
                                        letterSpacing: '0.6px',
                                        color: 'rgba(255,255,255,0.85)',
                                        textTransform: 'uppercase'
                                    }}>
                                        {chNum ? `ଅଧ୍ୟାୟ ${toOdiaNumber(chNum)} • CHAPTER ${chNum}` : 'ମାହାତ୍ମ୍ୟ • MAHATMYA'}
                                    </div>
                                    <div className="chapter-title" style={{
                                        fontSize: '1.08rem',
                                        fontWeight: 900,
                                        fontFamily: 'var(--font-odia-sans)',
                                        color: '#ffffff',
                                        lineHeight: 1.25,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {sec.label}
                                    </div>
                                    <div style={{
                                        fontSize: '0.72rem',
                                        color: 'rgba(255,255,255,0.8)',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {sec.eng}
                                    </div>
                                </div>
                                <div className="arrow-icon" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                    <ChevronRight size={22} />
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        );
    };

    const filteredTempleSongs = useMemo(() => {
        let list = templeSongsResolved;
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            list = list.filter(item =>
                (item.odia && item.odia.toLowerCase().includes(q)) ||
                (item.eng && item.eng.toLowerCase().includes(q)) ||
                (item.author && item.author.toLowerCase().includes(q))
            );
        } else if (templeSubTab !== 'all') {
            const MAPPING: Record<string, number[]> = {
                mangala: [1, 2],
                tulasi: [3, 4],
                darshana: [7, 9, 10],
                gurupuja: [8],
                gaura: [11, 12, 13, 14],
                bhoga: [15, 16],
                ashtakam: [5, 6, 17, 18]
            };
            const allowed = MAPPING[templeSubTab] || [];
            list = list.filter(item => allowed.includes(item.order));
        }
        return list;
    }, [templeSongsResolved, searchQuery, templeSubTab]);

    const TEMPLE_ICONS_MAP: Record<number, { icon: React.ElementType; color: string }> = {
        1: { icon: Flame, color: '#ea580c' },
        2: { icon: Sparkles, color: '#f59e0b' },
        3: { icon: Shield, color: '#dc2626' },
        4: { icon: TempleIcons.SacredLotus, color: '#16a34a' },
        5: { icon: BookOpen, color: '#0284c7' },
        6: { icon: BookText, color: '#e11d48' },
        7: { icon: Sun, color: '#d97706' },
        8: { icon: TempleIcons.NamasteIcon, color: '#9333ea' },
        9: { icon: Heart, color: '#ec4899' },
        10: { icon: TempleIcons.TempleShikhara, color: '#ea580c' },
        11: { icon: Flame, color: '#f97316' },
        12: { icon: Music, color: '#0d9488' },
        13: { icon: Sparkles, color: '#6366f1' },
        14: { icon: Heart, color: '#f43f5e' },
        15: { icon: Flame, color: '#ea580c' },
        16: { icon: TempleIcons.SacredLotus, color: '#10b981' },
        17: { icon: Sparkles, color: '#8b5cf6' },
        18: { icon: Users, color: '#0284c7' }
    };

    const renderTempleBlinkitHeader = () => {
        const TEMPLE_TABS = [
            { id: 'all', odia: 'ସମସ୍ତ', eng: 'All', icon: TempleIcons.TempleShikhara, badge: '୧୮' },
            { id: 'mangala', odia: 'ମଙ୍ଗଳ ଆରତି', eng: 'Mangala', icon: Flame, badge: '4:30 AM' },
            { id: 'tulasi', odia: 'ତୁଳସୀ ଓ ନୃସିଂହ', eng: 'Tulasi', icon: TempleIcons.SacredLotus, badge: 'ନିତ୍ୟ' },
            { id: 'darshana', odia: 'ଦର୍ଶନ ଆରତି', eng: 'Darshana', icon: Sun, badge: '7:00 AM' },
            { id: 'gurupuja', odia: 'ଗୁରୁ ପୂଜା', eng: 'Guru Puja', icon: TempleIcons.NamasteIcon, badge: '7:30 AM' },
            { id: 'gaura', odia: 'ଗୌର ଆରତି', eng: 'Sandhya', icon: Flame, badge: '6:30 PM' },
            { id: 'bhoga', odia: 'ଭୋଗ ଓ ପ୍ରସାଦ', eng: 'Bhoga', icon: Sparkles, badge: 'ଭୋଗ' },
            { id: 'ashtakam', odia: 'ଅଷ୍ଟକମ୍', eng: 'Ashtakams', icon: BookOpen, badge: 'ସ୍ତୋତ୍ର' }
        ];

        return (
            <div style={{
                background: 'linear-gradient(180deg, #04362a 0%, #064e3b 100%)',
                color: '#ffffff',
                position: 'sticky',
                top: 0,
                zIndex: 120,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.22)',
                padding: '0.65rem 0.85rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
            }}>
                {/* Top Row: Location & Status */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                            <div style={{
                                background: '#ffffff',
                                color: '#064e3b',
                                fontSize: '0.72rem',
                                fontWeight: 900,
                                padding: '2px 8px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px',
                                letterSpacing: '0.3px'
                            }}>
                                <span>⚡</span> ୧୮ ଗୀତ
                            </div>
                            <div style={{
                                border: '1px solid rgba(255, 255, 255, 0.45)',
                                color: '#ffffff',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                padding: '1px 8px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px'
                            }}>
                                <span>⏱️</span> ନିତ୍ୟ ସେବା
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            color: '#ffffff',
                            fontSize: '0.86rem',
                            fontWeight: 800,
                            fontFamily: 'var(--font-odia-sans)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            <span>🛕</span>
                            <span>ଇସ୍କନ ମନ୍ଦିର - ନିତ୍ୟ ଆରତି ଓ ପ୍ରାର୍ଥନା</span>
                            <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>▼</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                        <button
                            onClick={() => setIsSpinWheelOpen(true)}
                            title="ଦୈନିକ ଆଶୀର୍ବାଦ ଚକ୍ର (Blessing Chakra)"
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #FFF176 0%, #FFB300 100%)',
                                border: '1.5px solid rgba(255,255,255,0.8)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                            }}
                        >
                            <TempleIcons.BlessingChakra size={22} color="#4A148C" />
                        </button>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('toggle-drawer'))}
                            title="ପ୍ରୋଫାଇଲ୍ ଓ ମୁଖ୍ୟ ମେନୁ (Profile / Menu)"
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                background: '#ffffff',
                                border: 'none',
                                color: '#1e293b',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                            }}
                        >
                            <Users size={19} color="#1e293b" />
                        </button>
                    </div>
                </div>

                {/* Row 2: Search Bar & Action Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        flex: 1,
                        height: '44px',
                        background: '#ffffff',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 12px 0 14px',
                        gap: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                    }}>
                        <Search size={18} color="#64748b" style={{ flexShrink: 0 }} />
                        <input
                            type="text"
                            placeholder="Search 'ମଙ୍ଗଳ ଆରତି', 'ନୃସିଂହ'..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none',
                                fontSize: '0.88rem',
                                color: '#1e293b',
                                background: 'transparent',
                                fontFamily: 'var(--font-odia-sans)'
                            }}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                    color: '#94a3b8',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <X size={16} />
                            </button>
                        )}
                        <button
                            onClick={handleVoiceSearch}
                            title="ଭଏସ୍ ସର୍ଚ୍ଚ"
                            style={{
                                border: 'none',
                                background: isListening ? '#fef2f2' : 'transparent',
                                color: isListening ? '#ef4444' : '#064e3b',
                                cursor: 'pointer',
                                padding: '4px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                flexShrink: 0
                            }}
                        >
                            <Mic size={18} />
                        </button>
                    </div>

                    <button
                        onClick={() => setIsListsPanelOpen(true)}
                        title="ମନ୍ଦିର ତାଲିକା"
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            color: '#064e3b',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                            flexShrink: 0
                        }}
                    >
                        <List size={20} />
                    </button>
                </div>

                {/* Row 3: Blinkit-style Docked Tab Notch Bar */}
                <div
                    className="horizontal-scroll-container"
                    style={{
                        display: 'flex',
                        gap: '6px',
                        overflowX: 'auto',
                        padding: '8px 4px 0',
                        margin: '0 -0.85rem',
                        paddingLeft: '0.85rem',
                        paddingRight: '0.85rem',
                        scrollbarWidth: 'none'
                    }}
                >
                    {TEMPLE_TABS.map((tab) => {
                        const isActive = templeSubTab === tab.id;
                        const TabIcon = tab.icon;

                        return (
                            <div
                                key={tab.id}
                                onClick={() => {
                                    setTempleSubTab(tab.id as any);
                                    setSearchQuery('');
                                }}
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                    padding: isActive ? '8px 18px 8px' : '8px 14px 8px',
                                    background: isActive ? (isNightMode ? '#0f172a' : '#ffffff') : 'transparent',
                                    color: isActive ? (isNightMode ? '#38bdf8' : '#064e3b') : '#ffffff',
                                    borderRadius: isActive ? '18px 18px 0 0' : '12px',
                                    boxShadow: isActive ? '0 -4px 14px rgba(0,0,0,0.08)' : 'none',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    minWidth: '68px',
                                    userSelect: 'none'
                                }}
                            >
                                {/* Floating Badge (Shop Now style in screenshot) */}
                                {tab.badge && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-4px',
                                        background: isActive ? '#064e3b' : '#000000',
                                        color: '#ffffff',
                                        fontSize: '0.55rem',
                                        fontWeight: 900,
                                        padding: '1px 6px',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
                                        whiteSpace: 'nowrap',
                                        transform: 'scale(0.9)'
                                    }}>
                                        {tab.badge}
                                    </div>
                                )}

                                <div style={{
                                    marginTop: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '24px'
                                }}>
                                    <TabIcon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                </div>

                                <span style={{
                                    fontSize: '0.74rem',
                                    fontWeight: isActive ? 900 : 700,
                                    fontFamily: 'var(--font-odia-sans)',
                                    whiteSpace: 'nowrap',
                                    lineHeight: 1.2,
                                    marginTop: '2px'
                                }}>
                                    {tab.odia}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderTempleBlinkitBody = () => {
        return (
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 0.75rem 2rem' }}>
                {/* 🌟 BLINKIT-STYLE HERO PROMO BANNER (Matching Screenshot 1 & 3) */}
                <div style={{
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fff7ed 50%, #fed7aa 100%)',
                    borderRadius: '20px',
                    padding: '1.25rem 1.4rem',
                    margin: '0.75rem 0 1.5rem',
                    border: '1.5px solid #fde68a',
                    boxShadow: '0 6px 20px rgba(234, 88, 12, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ flex: '1 1 260px', minWidth: 0 }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            background: '#ea580c',
                            color: '#ffffff',
                            fontSize: '0.62rem',
                            fontWeight: 900,
                            padding: '2px 8px',
                            borderRadius: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.6px',
                            marginBottom: '6px'
                        }}>
                            <span>⚡</span> ନିତ୍ୟ ମନ୍ଦିର କ୍ରମ • DAILY ISKCON PROGRAM
                        </div>
                        <div style={{
                            fontSize: '1.25rem',
                            fontWeight: 900,
                            color: '#7c2d12',
                            fontFamily: 'var(--font-odia-sans)',
                            lineHeight: 1.2,
                            marginBottom: '4px'
                        }}>
                            ମନ୍ଦିର ନିତ୍ୟ ଆରତି ଓ ପ୍ରାର୍ଥନା
                        </div>
                        <div style={{
                            fontSize: '0.78rem',
                            color: '#9a3412',
                            fontWeight: 600,
                            lineHeight: 1.35,
                            marginBottom: '10px'
                        }}>
                            ପ୍ରାତଃ ମଙ୍ଗଳ ଆରତିଠାରୁ ଶୟନ ପର୍ଯ୍ୟନ୍ତ ସମସ୍ତ ୧୮ଟି ପ୍ରମୁଖ ଆରତି ଓ ପ୍ରାର୍ଥନା
                        </div>
                        <button
                            onClick={() => {
                                const first = templeSongsResolved[0]?.song;
                                if (first) handleSelectSong(first);
                            }}
                            style={{
                                background: '#ea580c',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '12px',
                                padding: '8px 16px',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                cursor: 'pointer',
                                boxShadow: '0 3px 8px rgba(234, 88, 12, 0.35)',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <Play size={14} fill="#ffffff" />
                            <span>ମଙ୍ଗଳ ଆରତି ଶୁଣନ୍ତୁ • Start #1</span>
                        </button>
                    </div>

                    <div style={{
                        width: '85px',
                        height: '85px',
                        borderRadius: '20px',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ea580c',
                        boxShadow: '0 8px 24px rgba(234, 88, 12, 0.15)',
                        border: '2px solid rgba(234, 88, 12, 0.2)',
                        flexShrink: 0
                    }}>
                        <TempleIcons.TempleShikhara size={52} />
                    </div>
                </div>

                {/* Section Title */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    padding: '0 4px'
                }}>
                    <div>
                        <div style={{
                            fontSize: '1.2rem',
                            fontWeight: 900,
                            color: isNightMode ? '#f8fafc' : '#0f172a',
                            fontFamily: 'var(--font-odia-sans)',
                            lineHeight: 1.2
                        }}>
                            {templeSubTab === 'all' ? 'ସମସ୍ତ ନିତ୍ୟ ଆରତି କୀର୍ତ୍ତନ' :
                             templeSubTab === 'mangala' ? 'ମଙ୍ଗଳ ଆରତି କୀର୍ତ୍ତନ (୪:୩୦ AM)' :
                             templeSubTab === 'tulasi' ? 'ତୁଳସୀ ଓ ନୃସିଂହ ଆରତି' :
                             templeSubTab === 'darshana' ? 'ଦର୍ଶନ ଆରତି ପ୍ରାର୍ଥନା (୭:୦୦ AM)' :
                             templeSubTab === 'gurupuja' ? 'ଶ୍ରୀ ଗୁରୁ ପୂଜା (୭:୩୦ AM)' :
                             templeSubTab === 'gaura' ? 'ସନ୍ଧ୍ୟା ଗୌର ଆରତି (୬:୩୦ PM)' :
                             templeSubTab === 'bhoga' ? 'ଭୋଗ ଓ ପ୍ରସାଦ ସେବା' : 'ଅଷ୍ଟକମ୍ ଓ ସ୍ତୋତ୍ର'}
                        </div>
                        <div style={{
                            fontSize: '0.72rem',
                            color: '#64748b',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.6px',
                            marginTop: '2px'
                        }}>
                            Top picks for temple seva • {filteredTempleSongs.length} Songs
                        </div>
                    </div>
                    {templeSubTab !== 'all' && (
                        <button
                            onClick={() => setTempleSubTab('all')}
                            style={{
                                border: 'none',
                                background: isNightMode ? 'rgba(255,255,255,0.08)' : '#f1f5f9',
                                color: isNightMode ? '#38bdf8' : '#0284c7',
                                padding: '4px 10px',
                                borderRadius: '8px',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                            }}
                        >
                            ସବୁ ଦେଖନ୍ତୁ (View All)
                        </button>
                    )}
                </div>

                {/* 🛍️ BLINKIT-STYLE 2-COLUMN CARDS GRID (Matching Screenshot 1 & 3) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '14px',
                    marginBottom: '2rem'
                }}>
                    {filteredTempleSongs.map((item) => {
                        const isAvailable = item.isAvailable && item.song;
                        const song = item.song;
                        const iconConfig = TEMPLE_ICONS_MAP[item.order] || { icon: TempleIcons.TempleShikhara, color: '#064e3b' };
                        const IconComponent = iconConfig.icon;

                        const timeTags: Record<number, string> = {
                            1: '୪:୩୦ AM • MANGALA',
                            2: '୫:୦୦ AM • PREMADHVANI',
                            3: '୫:୧୦ AM • NRSIMHA',
                            4: '୫:୨୦ AM • TULASI',
                            5: '୬:୦୦ AM • JAPA',
                            6: '୭:୦୦ AM • OFFENSES',
                            7: '୭:୧୫ AM • DARSHANA',
                            8: '୭:୩୦ AM • GURU PUJA',
                            9: '୮:୦୦ AM • KIRTAN',
                            10: '୮:୩୦ AM • MANGALA',
                            11: '୬:୩୦ PM • GAURA ARATI',
                            12: '୭:୦୦ PM • HARI HARI',
                            13: '୭:୧୫ PM • VIBHAVARI',
                            14: '୭:୩୦ PM • YASOMATI',
                            15: '୧୨:୩୦ PM • BHOGA',
                            16: '୧:୦୦ PM • PRASADA',
                            17: 'କାର୍ତ୍ତିକ ମାସ • DAMODARA',
                            18: 'ନିତ୍ୟ ପାଠ • GOSWAMI'
                        };

                        return (
                            <div
                                key={item.order}
                                onClick={() => {
                                    if (isAvailable && song) {
                                        handleSelectSong(song);
                                    }
                                }}
                                style={{
                                    background: isNightMode ? '#1e293b' : '#ffffff',
                                    borderRadius: '18px',
                                    border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                    padding: '14px',
                                    boxShadow: isNightMode ? '0 4px 12px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.04)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: '12px',
                                    cursor: isAvailable ? 'pointer' : 'not-allowed',
                                    opacity: isAvailable ? 1 : 0.6,
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative'
                                }}
                                onMouseEnter={(e) => {
                                    if (isAvailable) {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = isNightMode ? '0 10px 24px rgba(0,0,0,0.5)' : '0 8px 24px rgba(0,0,0,0.08)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (isAvailable) {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = isNightMode ? '0 4px 12px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.04)';
                                    }
                                }}
                            >
                                {/* Top Tag Row (Like Blue Offer Tag in Screenshot 1) */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                                    <div style={{
                                        background: isAvailable ? '#0284c7' : '#94a3b8',
                                        color: '#ffffff',
                                        fontSize: '0.62rem',
                                        fontWeight: 900,
                                        padding: '2px 8px',
                                        borderRadius: '6px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.4px',
                                        lineHeight: 1.3
                                    }}>
                                        {timeTags[item.order] || `କ୍ରମ #${item.order}`}
                                    </div>
                                    <span style={{
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        color: isAvailable ? '#16a34a' : '#ef4444',
                                        background: isAvailable ? '#dcfce7' : '#fee2e2',
                                        padding: '1px 6px',
                                        borderRadius: '4px'
                                    }}>
                                        {isAvailable ? '✓ ଉପଲବ୍ଧ' : 'Soon'}
                                    </span>
                                </div>

                                {/* Center: Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '14px',
                                        background: `linear-gradient(135deg, ${iconConfig.color}15, ${iconConfig.color}25)`,
                                        color: iconConfig.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        border: `1px solid ${iconConfig.color}30`
                                    }}>
                                        <IconComponent size={28} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{
                                            fontSize: '1rem',
                                            fontWeight: 900,
                                            color: isNightMode ? '#f8fafc' : '#0f172a',
                                            fontFamily: 'var(--font-odia-sans)',
                                            lineHeight: 1.3,
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>
                                            {item.odia}
                                        </div>
                                        <div style={{
                                            fontSize: '0.74rem',
                                            color: isNightMode ? '#94a3b8' : '#64748b',
                                            fontWeight: 600,
                                            fontFamily: "'Outfit', sans-serif",
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            marginTop: '2px'
                                        }}>
                                            {item.eng}
                                        </div>
                                        <div style={{
                                            fontSize: '0.68rem',
                                            color: isNightMode ? '#64748b' : '#94a3b8',
                                            marginTop: '2px'
                                        }}>
                                            {item.author}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Row: Audio Play Button */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingTop: '8px',
                                    borderTop: isNightMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid #f1f5f9'
                                }}>
                                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                                        କ୍ରମ {toOdiaNumber(item.order)} • ୧୮
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (isAvailable && song) handleSelectSong(song);
                                        }}
                                        style={{
                                            background: isAvailable ? '#064e3b' : '#94a3b8',
                                            color: '#ffffff',
                                            border: 'none',
                                            borderRadius: '20px',
                                            padding: '4px 12px',
                                            fontSize: '0.72rem',
                                            fontWeight: 800,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            cursor: isAvailable ? 'pointer' : 'not-allowed',
                                            boxShadow: isAvailable ? '0 2px 6px rgba(6, 78, 59, 0.3)' : 'none'
                                        }}
                                    >
                                        <Play size={11} fill="#ffffff" />
                                        <span>ବଜାନ୍ତୁ (Play)</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Also render Featured Categories at bottom */}
                {renderFeaturedCategories()}
            </div>
        );
    };

    const badadandaGitaSections = useMemo(() => {
        const gitaChaps = songResources.filter(r => r.category === 'Gita').sort((a, b) => {
            const numA = parseInt(a.id?.split('-').pop() || '0');
            const numB = parseInt(b.id?.split('-').pop() || '0');
            return numA - numB;
        });
        const mahatmya = songResources.find(r => r.id === 'song-gitamahatmya');
        const seenIds = new Set<string>();
        const sections: Array<{
            id: string;
            label: string;
            eng: string;
            icon: React.ElementType;
            color: string;
        }> = [];

        if (mahatmya) {
            sections.push({
                id: mahatmya.id,
                label: 'ଶ୍ରୀ ଗୀତା ମାହାତ୍ମ୍ୟ',
                eng: 'Gita Mahatmya',
                icon: Sparkles,
                color: '#FF9933'
            });
            seenIds.add(mahatmya.id);
        }

        gitaChaps.forEach((ch) => {
            if (seenIds.has(ch.id)) return;
            seenIds.add(ch.id);

            const names = GITA_CHAPTER_NAMES[ch.id] || { odia: ch.title_odia || 'Chapter', eng: 'Chapter', icon: BookOpen, color: '#64748b' };
            sections.push({
                id: ch.id,
                label: names.odia,
                eng: names.eng,
                icon: names.icon,
                color: names.color
            });
        });

        return sections;
    }, [songResources]);

    const badadandaAshtakamSongs = useMemo(() => {
        return songResources.filter(s =>
            s.id.toLowerCase().includes('ashtak') ||
            s.id.toLowerCase().includes('astak') ||
            (s.title && (s.title.toLowerCase().includes('ashtak') || s.title.toLowerCase().includes('astak'))) ||
            (s.title_odia && (s.title_odia.includes('ଅଷ୍ଟକ') || s.title_odia.includes('ଅଷ୍ଟକମ୍')))
        );
    }, [songResources]);

    const getSongsForBadadandaList = (list: VaishnavaListItem) => {
        const q = normalizeForSearch(list.query);
        const qOdia = list.odia;
        const explicitIds = KNOWN_BOOK_SONG_IDS[list.id] || [];

        return songResources.filter(s => {
            if (explicitIds.includes(s.id)) return true;

            const titleEng = normalizeForSearch(s.title_english || s.title || '');
            const titleOdia = s.title_odia || '';
            const desc = normalizeForSearch(s.description || '');
            const tags = (s.tags || []).map(t => normalizeForSearch(t || ''));
            const author = normalizeForSearch(s.author || '');

            if (list.id === 'ashtakams') {
                return titleEng.includes('ashtak') || titleEng.includes('astak') ||
                       titleOdia.includes('ଅଷ୍ଟକ') || titleOdia.includes('ଅଷ୍ଟକମ୍') ||
                       tags.some(t => t.includes('ashtak') || t.includes('astak'));
            }
            if (list.id === 'pranama') {
                return titleEng.includes('pranama') || titleEng.includes('mantra') ||
                       titleOdia.includes('ପ୍ରଣାମ') || titleOdia.includes('ମନ୍ତ୍ର') ||
                       tags.some(t => t.includes('pranama') || t.includes('mantra'));
            }
            if (list.id === 'temple-daily') {
                return (s.category || '').toLowerCase().includes('temple') ||
                       titleEng.includes('arati') || titleEng.includes('kirtan') ||
                       titleOdia.includes('ଆରତି') || titleOdia.includes('ମନ୍ଦିର') ||
                       tags.some(t => t.includes('temple') || t.includes('arati'));
            }
            if (list.id === 'vrindavane-bhajan') {
                return titleEng.includes('vrindavanebhajan') || titleOdia.includes('ବୃନ୍ଦାବନେ ଭଜନ');
            }
            if (list.id === 'misc-prabhupada') {
                return author.includes('prabhupada') && !titleEng.includes('vrindavanebhajan');
            }
            if (list.id === 'stavamrita-lahari') {
                return author.includes('visvanatha') || explicitIds.includes(s.id);
            }
            if (list.id === 'vaishnava-acaryas') {
                return tags.some(t => t.includes('acarya') || t.includes('acharya')) ||
                       desc.includes('acarya') || desc.includes('acharya') ||
                       explicitIds.includes(s.id);
            }

            return tags.some(t => t.includes(q)) ||
                   titleEng.includes(q) ||
                   titleOdia.includes(qOdia) ||
                   desc.includes(q);
        });
    };

    const getSongsForSinger = (singerName: string) => {
        const targetOdia = getSingerOdiaName(singerName);
        return songResources.filter(s => {
            let matches = false;
            if (s.vocalist) {
                const parts = s.vocalist.split(/\s*[\/,]\s*/);
                if (parts.some(p => {
                    const norm = normalizeSingerName(p);
                    return norm === singerName || (targetOdia && getSingerOdiaName(norm) === targetOdia);
                })) {
                    matches = true;
                }
            }
            if (!matches && s.audioVersions && Array.isArray(s.audioVersions)) {
                matches = s.audioVersions.some(av => {
                    if (!av.label) return false;
                    const parts = av.label.split(/\s*[\/,]\s*/);
                    return parts.some(p => {
                        const norm = normalizeSingerName(p);
                        return norm === singerName || (targetOdia && getSingerOdiaName(norm) === targetOdia);
                    });
                });
            }
            return matches;
        });
    };

    // Dynamically group ALL songs from songResources into Author cards
    // 100% of app songs fit here, counts are exact, and new songs added in the future are captured automatically!
    const badadandaAuthors = useMemo(() => {
        const authorSongMap = new Map<string, Resource[]>();

        songResources.forEach(song => {
            const catalogMatch = AUTHOR_CATALOG.find(cat =>
                cat.catalog.some(cs => (cs.id && cs.id === song.id) || isTitleMatch(cs.title_english, song.title_english || song.title, cs.title_odia, song.title_odia))
            );
            const authorName = catalogMatch ? catalogMatch.name : (song.author ? standardizeAuthorName(song.author) : 'Other Authors');

            if (!authorSongMap.has(authorName)) {
                authorSongMap.set(authorName, []);
            }
            authorSongMap.get(authorName)!.push(song);
        });

        // Also add any catalog authors that may not currently have songs
        AUTHOR_CATALOG.forEach(cat => {
            if (!authorSongMap.has(cat.name)) {
                authorSongMap.set(cat.name, []);
            }
        });

        const list = Array.from(authorSongMap.entries()).map(([name, songsList]) => {
            const odiaName = getAuthorOdiaName(name);
            return {
                name,
                odia: odiaName,
                songs: songsList,
                count: songsList.length
            };
        });

        return list.sort((a, b) => {
            if (b.count !== a.count) return b.count - a.count;
            return a.name.localeCompare(b.name);
        });
    }, [songResources]);

    const getSongsForAuthor = (authorName: string) => {
        const found = badadandaAuthors.find(a => a.name.toLowerCase() === authorName.toLowerCase());
        if (found) return found.songs;
        return songResources.filter(s => {
            const standardized = standardizeAuthorName(s.author || '');
            if (standardized.toLowerCase() === authorName.toLowerCase()) return true;
            return AUTHOR_CATALOG.find(a => a.name === authorName)?.catalog.some(cs =>
                (cs.id && cs.id === s.id) || isTitleMatch(cs.title_english, s.title_english || s.title, cs.title_odia, s.title_odia)
            ) || false;
        });
    };

    const renderBadadandaHeader = () => {
        const BADADANDA_TABS = [
            { id: 'all', odia: 'ସମସ୍ତ', eng: 'All Cards', icon: Landmark, badge: '୯ କାର୍ଡ' },
            { id: 'gita', odia: 'ଭଗବଦ୍ ଗୀତା', eng: 'Bhagavad Gita', icon: BookOpen, badge: '୧୮ ଅଧ୍ୟାୟ' },
            { id: 'authors', odia: 'ଲେଖକ', eng: 'Authors', icon: Users, badge: 'କବି' },
            { id: 'temple', odia: 'ମନ୍ଦିର ଗୀତ', eng: 'Temple Songs', icon: TempleIcons.TempleShikhara, badge: 'ଆରତି' },
            { id: 'pranama', odia: 'ପ୍ରଣାମ ମନ୍ତ୍ର', eng: 'Pranama', icon: TempleIcons.NamasteIcon, badge: 'ମନ୍ତ୍ର' },
            { id: 'ashtakams', odia: 'ଅଷ୍ଟକମ୍', eng: 'Ashtakams', icon: TempleIcons.SacredLotus, badge: 'ସ୍ତୋତ୍ର' },
            { id: 'lists', odia: 'ପୁସ୍ତକ', eng: 'Books', icon: BookOpen, badge: 'ଗ୍ରନ୍ଥ' },
            { id: 'singers', odia: 'ଗାୟକ', eng: 'Singers', icon: Mic, badge: 'କଣ୍ଠ' },
            { id: 'history', odia: 'ଶ୍ରବଣ ଇତିହାସ', eng: 'History', icon: History, badge: 'ଇତିହାସ' },
            { id: 'settings', odia: 'ସେଟିଂସ୍', eng: 'Settings', icon: Settings, badge: 'ଥିମ୍' }
        ];

        return (
            <div style={{
                background: 'linear-gradient(180deg, #04362a 0%, #064e3b 100%)',
                color: '#ffffff',
                position: 'sticky',
                top: 0,
                zIndex: 120,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.22)',
                padding: '0.65rem 0.85rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
            }}>
                {/* Top Row: Location & Status */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                            <div style={{
                                background: '#ffffff',
                                color: '#064e3b',
                                fontSize: '0.72rem',
                                fontWeight: 900,
                                padding: '2px 8px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px',
                                letterSpacing: '0.3px'
                            }}>
                                <span>⚡</span> ୯ ବିଭାଗ
                            </div>
                            <div style={{
                                border: '1px solid rgba(255, 255, 255, 0.45)',
                                color: '#ffffff',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                padding: '1px 8px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px'
                            }}>
                                <span>⏱️</span> ବଡ଼ଦାଣ୍ଡ ସେବା
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            color: '#ffffff',
                            fontSize: '0.86rem',
                            fontWeight: 800,
                            fontFamily: 'var(--font-odia-sans)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            <span>🏛️</span>
                            <span>ବଡ଼ଦାଣ୍ଡ - ଶ୍ରୀକ୍ଷେତ୍ର ପୁରୀ ଧାମ</span>
                            <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>▼</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                        <button
                            onClick={() => setIsSpinWheelOpen(true)}
                            title="ଦୈନିକ ଆଶୀର୍ବାଦ ଚକ୍ର (Blessing Chakra)"
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #FFF176 0%, #FFB300 100%)',
                                border: '1.5px solid rgba(255,255,255,0.8)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                            }}
                        >
                            <TempleIcons.BlessingChakra size={22} color="#4A148C" />
                        </button>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('toggle-drawer'))}
                            title="ପ୍ରୋଫାଇଲ୍ ଓ ମୁଖ୍ୟ ମେନୁ (Profile / Menu)"
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                background: '#ffffff',
                                border: 'none',
                                color: '#1e293b',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                            }}
                        >
                            <Users size={19} color="#1e293b" />
                        </button>
                    </div>
                </div>

                {/* Row 2: Search Bar & Action Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        flex: 1,
                        height: '44px',
                        background: '#ffffff',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 12px 0 14px',
                        gap: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                    }}>
                        <Search size={18} color="#64748b" style={{ flexShrink: 0 }} />
                        <input
                            type="text"
                            placeholder="Search 'ଜଗନ୍ନାଥ', 'ଲେଖକ', 'ଭଜନ'..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none',
                                fontSize: '0.88rem',
                                color: '#1e293b',
                                background: 'transparent',
                                fontFamily: 'var(--font-odia-sans)'
                            }}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                    color: '#94a3b8',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <X size={16} />
                            </button>
                        )}
                        <button
                            onClick={handleVoiceSearch}
                            title="ଭଏସ୍ ସର୍ଚ୍ଚ"
                            style={{
                                border: 'none',
                                background: isListening ? '#fef2f2' : 'transparent',
                                color: isListening ? '#ef4444' : '#064e3b',
                                cursor: 'pointer',
                                padding: '4px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                flexShrink: 0
                            }}
                        >
                            <Mic size={18} />
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            setBadadandaSubTab('lists');
                            setSelectedBadadandaList(null);
                        }}
                        title="ପୁସ୍ତକ ଓ ଗ୍ରନ୍ଥ (Books)"
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            color: '#064e3b',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                            flexShrink: 0
                        }}
                    >
                        <BookOpen size={20} />
                    </button>
                </div>

                {/* Row 3: Blinkit-style Docked Tab Notch Bar (ALL 9 CARDS AS SUB-TABS) */}
                <div
                    className="horizontal-scroll-container"
                    style={{
                        display: 'flex',
                        gap: '6px',
                        overflowX: 'auto',
                        padding: '8px 4px 0',
                        margin: '0 -0.85rem',
                        paddingLeft: '0.85rem',
                        paddingRight: '0.85rem',
                        scrollbarWidth: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {BADADANDA_TABS.map((tab) => {
                        const isActive = badadandaSubTab === tab.id;
                        const TabIcon = tab.icon;

                        return (
                            <div
                                key={tab.id}
                                onClick={() => {
                                    setBadadandaSubTab(tab.id as any);
                                    setSelectedBadadandaList(null);
                                    setSelectedBadadandaSinger(null);
                                    setSelectedBadadandaAuthor(null);
                                    setIsAuthorPanelOpen(false);
                                    setIsSingerPanelOpen(false);
                                    setIsListsPanelOpen(false);
                                    setSearchQuery('');
                                    if (tab.id === 'settings') setIsSettingsPanelOpen(true);
                                    if (tab.id === 'authors') fetchAuthorStats();
                                }}
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                    padding: isActive ? '8px 18px 8px' : '8px 14px 8px',
                                    background: isActive ? (isNightMode ? '#0f172a' : '#ffffff') : 'transparent',
                                    color: isActive ? (isNightMode ? '#38bdf8' : '#064e3b') : '#ffffff',
                                    borderRadius: isActive ? '18px 18px 0 0' : '12px',
                                    boxShadow: isActive ? '0 -4px 14px rgba(0,0,0,0.08)' : 'none',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    minWidth: '68px',
                                    userSelect: 'none'
                                }}
                            >
                                {/* Floating Badge */}
                                {tab.badge && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-4px',
                                        background: isActive ? '#064e3b' : '#000000',
                                        color: '#ffffff',
                                        fontSize: '0.55rem',
                                        fontWeight: 900,
                                        padding: '1px 6px',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
                                        whiteSpace: 'nowrap',
                                        transform: 'scale(0.9)'
                                    }}>
                                        {tab.badge}
                                    </div>
                                )}

                                <div style={{
                                    marginTop: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '24px'
                                }}>
                                    <TabIcon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                </div>

                                <span style={{
                                    fontSize: '0.74rem',
                                    fontWeight: isActive ? 900 : 700,
                                    fontFamily: 'var(--font-odia-sans)',
                                    whiteSpace: 'nowrap',
                                    lineHeight: 1.2,
                                    marginTop: '2px'
                                }}>
                                    {tab.odia}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderBadadandaBody = () => {
        return (
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 0.75rem 2rem' }}>
                {/* SUB-SECTION HEADER */}
                <div style={{
                    marginBottom: '1rem',
                    padding: '1.2rem 4px 0.25rem'
                }}>
                    <div style={{
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: isNightMode ? '#f8fafc' : '#0f172a',
                        fontFamily: 'var(--font-odia-sans)',
                        lineHeight: 1.45
                    }}>
                        {badadandaSubTab === 'all' && 'ସମସ୍ତ ୯ ପ୍ରମୁଖ ବିଭାଗ'}
                        {badadandaSubTab === 'gita' && 'ଶ୍ରୀମଦ୍ ଭଗବଦ୍ ଗୀତା - ସମସ୍ତ ଅଧ୍ୟାୟ (୧୮)'}
                        {badadandaSubTab === 'authors' && (selectedBadadandaAuthor ? `${selectedBadadandaAuthor} (ଲେଖକଙ୍କ ଗୀତ)` : 'ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟ ଓ କବି ସମୂହ')}
                        {badadandaSubTab === 'temple' && 'ଇସ୍କନ ମନ୍ଦିର ନିତ୍ୟ ଆରତି (୧୮ ଗୀତ)'}
                        {badadandaSubTab === 'pranama' && 'ବୈଷ୍ଣବ ପ୍ରଣାମ ମନ୍ତ୍ର (୨୦)'}
                        {badadandaSubTab === 'ashtakams' && 'ପବିତ୍ର ଅଷ୍ଟକମ୍ ଓ ସ୍ତୋତ୍ର'}
                        {badadandaSubTab === 'lists' && (selectedBadadandaList ? selectedBadadandaList.odia : 'ବୈଷ୍ଣବ ପୁସ୍ତକ ଓ ଗ୍ରନ୍ଥାବଳୀ')}
                        {badadandaSubTab === 'singers' && (selectedBadadandaSinger ? `${getSingerOdiaName(selectedBadadandaSinger)} (କଣ୍ଠଶିଳ୍ପୀ)` : 'କଣ୍ଠଶିଳ୍ପୀ ଓ ଗାୟକ ସମୂହ')}
                        {badadandaSubTab === 'history' && 'ଶ୍ରବଣ ଇତିହାସ'}
                        {badadandaSubTab === 'settings' && 'ଆପ୍ ସେଟିଂସ୍ ଓ ଥିମ୍'}
                    </div>
                </div>

                {/* 🌟 ALL 9 CARDS GRID (When badadandaSubTab === 'all') */}
                {badadandaSubTab === 'all' && (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '14px',
                        marginBottom: '2rem'
                    }}>
                        {/* 1. Bhagavad Gita */}
                        <div
                            className="category-card"
                            onClick={() => setBadadandaSubTab('gita')}
                            style={{
                                background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '14px',
                                background: '#ea580c18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <BookOpen size={30} color="#ea580c" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>ଶ୍ରୀମଦ୍ ଭଗବଦ୍ ଗୀତା</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(30, 41, 59, 0.55)', textTransform: 'uppercase', marginTop: '2px' }}>BHAGAVAD GITA (୧୮ ଅଧ୍ୟାୟ)</div>
                            </div>
                        </div>

                        {/* 2. Authors */}
                        <div
                            className="category-card"
                            onClick={() => {
                                fetchAuthorStats();
                                setSelectedBadadandaAuthor(null);
                                setIsAuthorPanelOpen(false);
                                setBadadandaSubTab('authors');
                            }}
                            style={{
                                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '14px',
                                background: '#16a34a18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Users size={30} color="#16a34a" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>ଲେଖକ ଅନୁସାରେ</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(30, 41, 59, 0.55)', textTransform: 'uppercase', marginTop: '2px' }}>AUTHORS</div>
                            </div>
                        </div>

                        {/* 3. Temple Songs */}
                        <div
                            className="category-card"
                            onClick={() => setBadadandaSubTab('temple')}
                            style={{
                                background: 'linear-gradient(135deg, #fffcf5 0%, #fff5e6 100%)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '14px',
                                background: '#ea580c18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <TempleIcons.TempleShikhara size={34} color="#ea580c" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>ମନ୍ଦିର ଗୀତ</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(30, 41, 59, 0.55)', textTransform: 'uppercase', marginTop: '2px' }}>TEMPLE SONGS</div>
                            </div>
                        </div>

                        {/* 4. Pranama Mantras */}
                        <div
                            className="category-card"
                            onClick={() => setBadadandaSubTab('pranama')}
                            style={{
                                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '14px',
                                background: '#0284c718', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <TempleIcons.NamasteIcon size={34} color="#0284c7" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>ପ୍ରଣାମ ମନ୍ତ୍ର</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(30, 41, 59, 0.55)', textTransform: 'uppercase', marginTop: '2px' }}>PRANAMA MANTRAS</div>
                            </div>
                        </div>

                        {/* 5. Ashtakams */}
                        <div
                            className="category-card"
                            onClick={() => setBadadandaSubTab('ashtakams')}
                            style={{
                                background: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '14px',
                                background: '#e11d4818', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <TempleIcons.SacredLotus size={34} color="#e11d48" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>ଅଷ୍ଟକମ୍</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(30, 41, 59, 0.55)', textTransform: 'uppercase', marginTop: '2px' }}>ASHTAKAMS</div>
                            </div>
                        </div>

                        {/* 6. Lists */}
                        <div
                            className="category-card"
                            onClick={() => {
                                setBadadandaSubTab('lists');
                                setSelectedBadadandaList(null);
                            }}
                            style={{
                                background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '14px',
                                background: '#9333ea18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <BookOpen size={30} color="#9333ea" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>ପୁସ୍ତକ ଓ ଗ୍ରନ୍ଥ</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(30, 41, 59, 0.55)', textTransform: 'uppercase', marginTop: '2px' }}>BOOKS (୯ ଗ୍ରନ୍ଥ)</div>
                            </div>
                        </div>

                        {/* 7. Singers */}
                        <div
                            className="category-card"
                            onClick={() => {
                                setBadadandaSubTab('singers');
                                setSelectedBadadandaSinger(null);
                            }}
                            style={{
                                background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '14px',
                                background: '#0d948818', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Mic size={30} color="#0d9488" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>ଗାୟକ / କଣ୍ଠଶିଳ୍ପୀ</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(30, 41, 59, 0.55)', textTransform: 'uppercase', marginTop: '2px' }}>SINGERS ({toOdiaNumber(singerStats.length)} ଜଣ)</div>
                            </div>
                        </div>

                        {/* 8. History */}
                        <div
                            className="category-card"
                            onClick={() => setBadadandaSubTab('history')}
                            style={{
                                background: 'linear-gradient(135deg, #fefce8 0%, #fef08a 100%)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '14px',
                                background: '#ca8a0418', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <History size={30} color="#ca8a04" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>ଶ୍ରବଣ ଇତିହାସ</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(30, 41, 59, 0.55)', textTransform: 'uppercase', marginTop: '2px' }}>HISTORY</div>
                            </div>
                        </div>

                        {/* 9. Settings */}
                        <div
                            className="category-card"
                            onClick={() => {
                                setBadadandaSubTab('settings');
                                setIsSettingsPanelOpen(true);
                            }}
                            style={{
                                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '14px',
                                background: '#47556918', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Settings size={30} color="#475569" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>ସେଟିଂସ୍</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(30, 41, 59, 0.55)', textTransform: 'uppercase', marginTop: '2px' }}>SETTINGS</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Sub-view: Bhagavad Gita */}
                {badadandaSubTab === 'gita' && (
                    <div style={{ padding: '0.5rem 0' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '1rem',
                            padding: '0 4px'
                        }}>
                            <BookOpen size={22} color="#064e3b" />
                            <h2 style={{
                                fontSize: '1.25rem',
                                fontWeight: 900,
                                color: isNightMode ? '#f8fafc' : '#1e293b',
                                fontFamily: 'var(--font-odia-sans)',
                                letterSpacing: '-0.3px',
                                margin: 0
                            }}>ଶ୍ରୀମଦ୍ ଭଗବଦ୍ ଗୀତା - ସମସ୍ତ ଅଧ୍ୟାୟ (୧୮)</h2>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '12px',
                            padding: '0 4px 1.5rem'
                        }}>
                            {badadandaGitaSections.map((sec, index) => {
                                const song = songResources.find(s => s.id === sec.id);
                                const chNum = sec.id.match(/\d+/)?.[0] || '';
                                const avatarGradients = [
                                    'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                                    'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
                                    'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)',
                                    'linear-gradient(135deg, #701a75 0%, #c026d3 100%)',
                                    'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
                                    'linear-gradient(135deg, #0e7490 0%, #0891b2 100%)',
                                    'linear-gradient(135deg, #831843 0%, #db2777 100%)',
                                    'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
                                    'linear-gradient(135deg, #713f12 0%, #d97706 100%)',
                                    'linear-gradient(135deg, #1e293b 0%, #475569 100%)'
                                ];
                                const bgGradient = avatarGradients[index % avatarGradients.length];
                                const SecIcon = sec.icon;

                                return (
                                    <div
                                        key={sec.id}
                                        className="gita-card"
                                        onClick={() => {
                                            if (song) handleSelectSong(song);
                                        }}
                                        style={{
                                            background: bgGradient,
                                            borderRadius: '18px',
                                            padding: '1rem 1.25rem',
                                            color: '#ffffff',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '14px',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div className="icon-badge" style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: 'rgba(255,255,255,0.22)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <SecIcon size={22} color="#ffffff" strokeWidth={2.2} />
                                        </div>
                                        <div className="text-content" style={{ flex: 1, minWidth: 0 }}>
                                            <div className="chapter-overline" style={{
                                                fontSize: '0.68rem',
                                                fontWeight: 800,
                                                letterSpacing: '0.6px',
                                                color: 'rgba(255,255,255,0.85)',
                                                textTransform: 'uppercase'
                                            }}>
                                                {chNum ? `ଅଧ୍ୟାୟ ${toOdiaNumber(chNum)} • CHAPTER ${chNum}` : 'ମାହାତ୍ମ୍ୟ • MAHATMYA'}
                                            </div>
                                            <div className="chapter-title" style={{
                                                fontSize: '1.08rem',
                                                fontWeight: 900,
                                                fontFamily: 'var(--font-odia-sans)',
                                                color: '#ffffff',
                                                lineHeight: 1.25,
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}>
                                                {sec.label}
                                            </div>
                                            <div style={{
                                                fontSize: '0.72rem',
                                                color: 'rgba(255,255,255,0.8)',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}>
                                                {sec.eng}
                                            </div>
                                        </div>
                                        <div className="arrow-icon" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                            <ChevronRight size={22} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Sub-view: Authors */}
                {badadandaSubTab === 'authors' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '0.5rem 0' }}>
                        {selectedBadadandaAuthor ? (
                            <div>
                                {/* Back button & header bar */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                                    <button
                                        onClick={() => setSelectedBadadandaAuthor(null)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            background: isNightMode ? '#334155' : '#f1f5f9',
                                            color: isNightMode ? '#f8fafc' : '#1e293b',
                                            border: 'none',
                                            padding: '6px 14px',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            fontWeight: 800,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <ChevronLeft size={16} /> ସମସ୍ତ ଲେଖକ
                                    </button>

                                    {/* Author songs count pill */}
                                    {(() => {
                                        const authorSongs = getSongsForAuthor(selectedBadadandaAuthor);
                                        return (
                                            <div style={{
                                                fontSize: '0.78rem',
                                                fontWeight: 800,
                                                color: '#16a34a',
                                                background: '#16a34a15',
                                                padding: '4px 12px',
                                                borderRadius: '16px'
                                            }}>
                                                {toOdiaNumber(authorSongs.length)} ଉପଲବ୍ଧ ଗୀତ
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Banner for selected author */}
                                {(() => {
                                    const authorObj = badadandaAuthors.find(a => a.name.toLowerCase() === selectedBadadandaAuthor.toLowerCase());
                                    return (
                                        <div style={{
                                            background: isNightMode ? '#1e293b' : '#ffffff',
                                            borderRadius: '18px',
                                            padding: '1.2rem',
                                            border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #16a34a30',
                                            boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                                            marginBottom: '1.25rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '14px'
                                        }}>
                                            <div style={{
                                                width: '52px',
                                                height: '52px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                                color: '#ffffff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 900,
                                                fontSize: '1.2rem',
                                                flexShrink: 0
                                            }}>
                                                {selectedBadadandaAuthor.charAt(0)}
                                            </div>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <div style={{
                                                    fontSize: '1.2rem',
                                                    fontWeight: 900,
                                                    color: isNightMode ? '#f8fafc' : '#1e293b',
                                                    fontFamily: 'var(--font-odia-sans)',
                                                    lineHeight: 1.2
                                                }}>
                                                    {authorObj?.odia || selectedBadadandaAuthor}
                                                </div>
                                                <div style={{
                                                    fontSize: '0.82rem',
                                                    color: '#059669',
                                                    fontWeight: 700,
                                                    marginTop: '2px',
                                                    fontFamily: 'var(--font-odia-sans)'
                                                }}>
                                                    ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟ ଓ କବି
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}

                                {/* Songs list */}
                                {(() => {
                                    const authorSongs = getSongsForAuthor(selectedBadadandaAuthor);
                                    if (authorSongs.length === 0) {
                                        return (
                                            <div style={{
                                                textAlign: 'center',
                                                padding: '2.5rem 1rem',
                                                background: isNightMode ? '#1e293b' : '#ffffff',
                                                borderRadius: '16px',
                                                border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                color: '#64748b'
                                            }}>
                                                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📜</div>
                                                <div style={{ fontSize: '0.95rem', fontWeight: 800, fontFamily: 'var(--font-odia-sans)' }}>
                                                    ଏହି ଲେଖକଙ୍କ ଗୀତ ଖୁବ୍ ଶୀଘ୍ର ଆସୁଅଛି
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {authorSongs.map((song, sIdx) => (
                                                <div
                                                    key={song.id || sIdx}
                                                    onClick={() => handleSelectSong(song)}
                                                    style={{
                                                        padding: '0.75rem 1rem',
                                                        borderRadius: '14px',
                                                        background: isNightMode ? '#1e293b' : '#ffffff',
                                                        border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        gap: '12px',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.15s ease'
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                                                        <div style={{
                                                            width: '36px',
                                                            height: '36px',
                                                            borderRadius: '10px',
                                                            background: '#16a34a15',
                                                            color: '#16a34a',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '0.85rem',
                                                            fontWeight: 900,
                                                            flexShrink: 0
                                                        }}>
                                                            {sIdx + 1}
                                                        </div>
                                                        <div style={{ flex: 1, minWidth: 0 }}>
                                                            <div style={{
                                                                fontSize: '0.95rem',
                                                                fontWeight: 800,
                                                                fontFamily: 'var(--font-odia-sans)',
                                                                color: isNightMode ? '#f8fafc' : '#1e293b',
                                                                lineHeight: 1.4,
                                                                wordBreak: 'break-word'
                                                            }}>
                                                                {song.title_odia || song.title}
                                                            </div>
                                                            <div style={{
                                                                fontSize: '0.74rem',
                                                                color: '#64748b',
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis'
                                                            }}>
                                                                {song.title_english || song.title}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div style={{
                                                        width: '32px',
                                                        height: '32px',
                                                        borderRadius: '50%',
                                                        background: song.audioUrl ? '#16a34a15' : 'transparent',
                                                        color: song.audioUrl ? '#16a34a' : '#94a3b8',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        {song.audioUrl ? <Play size={15} fill="#16a34a" /> : <ChevronRight size={18} />}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })()}
                            </div>
                        ) : (
                            <>
                                {/* Author Search Bar */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: isNightMode ? '#1e293b' : '#ffffff',
                                    padding: '8px 14px',
                                    borderRadius: '14px',
                                    border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                                }}>
                                    <Search size={18} color="#64748b" />
                                    <input
                                        type="text"
                                        placeholder="ଲେଖକ ଖୋଜନ୍ତୁ..."
                                        value={badadandaAuthorSearch}
                                        onChange={(e) => setBadadandaAuthorSearch(e.target.value)}
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            background: 'transparent',
                                            fontSize: '0.9rem',
                                            fontFamily: 'var(--font-odia-sans)',
                                            color: isNightMode ? '#f8fafc' : '#1e293b',
                                            width: '100%'
                                        }}
                                    />
                                    {badadandaAuthorSearch && (
                                        <button
                                            onClick={() => setBadadandaAuthorSearch('')}
                                            style={{ border: 'none', background: 'transparent', color: '#94a3b8', cursor: 'pointer', fontSize: '0.85rem' }}
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>

                                {/* Author Cards Grid - Dynamically derived from songResources */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px' }}>
                                    {badadandaAuthors.filter(a => {
                                        if (!badadandaAuthorSearch.trim()) return a.count > 0;
                                        const q = badadandaAuthorSearch.toLowerCase();
                                        return a.name.toLowerCase().includes(q) || (a.odia && a.odia.toLowerCase().includes(q)) || (a.odia && a.odia.includes(badadandaAuthorSearch));
                                    }).map((author) => {
                                        return (
                                            <div
                                                key={author.name}
                                                onClick={() => {
                                                    setSelectedBadadandaAuthor(author.name);
                                                    setIsAuthorPanelOpen(false);
                                                }}
                                                style={{
                                                    background: isNightMode ? '#1e293b' : '#ffffff',
                                                    borderRadius: '16px',
                                                    padding: '11px 14px',
                                                    border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                    cursor: 'pointer',
                                                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    minHeight: '62px',
                                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                                    e.currentTarget.style.borderColor = '#10b98150';
                                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.12)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.borderColor = isNightMode ? 'rgba(255,255,255,0.08)' : '#e2e8f0';
                                                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                                                }}
                                            >
                                                <div style={{
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                                    color: '#ffffff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 900,
                                                    fontSize: '1.15rem',
                                                    flexShrink: 0,
                                                    boxShadow: '0 3px 10px rgba(16, 185, 129, 0.25)'
                                                }}>
                                                    {(author.name || 'A').charAt(0).toUpperCase()}
                                                </div>
                                                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                    <div style={{
                                                        fontSize: '1.02rem',
                                                        fontWeight: 800,
                                                        fontFamily: 'var(--font-odia-sans)',
                                                        color: isNightMode ? '#f8fafc' : '#1e293b',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        lineHeight: 1.5,
                                                        paddingTop: '3px',
                                                        paddingBottom: '2px'
                                                    }}>
                                                        {author.odia}
                                                    </div>
                                                    <div style={{
                                                        fontSize: '0.74rem',
                                                        color: '#059669',
                                                        fontWeight: 800,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px',
                                                        lineHeight: 1.3
                                                    }}>
                                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block', flexShrink: 0 }} />
                                                        <span>{toOdiaNumber(author.count)} ଉପଲବ୍ଧ ଗୀତ</span>
                                                    </div>
                                                </div>
                                                <ChevronRight size={18} color="#94a3b8" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* Sub-view: Temple Songs */}
                {badadandaSubTab === 'temple' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px', padding: '0.5rem 0' }}>
                        {templeSongsResolved.map((item) => {
                            const isAvailable = item.isAvailable && item.song;
                            const song = item.song;
                            return (
                                <div
                                    key={item.order}
                                    onClick={() => {
                                        if (isAvailable && song) handleSelectSong(song);
                                    }}
                                    style={{
                                        background: isNightMode ? '#1e293b' : '#ffffff',
                                        borderRadius: '16px',
                                        padding: '12px 14px',
                                        border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                        cursor: isAvailable ? 'pointer' : 'default',
                                        opacity: isAvailable ? 1 : 0.6,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '10px'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: 1 }}>
                                        <div style={{
                                            width: '38px', height: '38px', borderRadius: '10px',
                                            background: '#ea580c18', color: '#ea580c',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: 900, fontSize: '0.82rem', flexShrink: 0
                                        }}>
                                            #{toOdiaNumber(item.order)}
                                        </div>
                                        <div style={{ minWidth: 0, flex: 1 }}>
                                            <div style={{
                                                fontSize: '0.96rem',
                                                fontWeight: 800,
                                                fontFamily: 'var(--font-odia-sans)',
                                                color: isNightMode ? '#f8fafc' : '#1e293b',
                                                lineHeight: 1.45,
                                                wordBreak: 'break-word',
                                                padding: '2px 0'
                                            }}>
                                                {item.odia}
                                            </div>
                                        </div>
                                    </div>
                                    {isAvailable && (
                                        <button
                                            style={{
                                                background: '#064e3b',
                                                color: '#ffffff',
                                                border: 'none',
                                                borderRadius: '50%',
                                                width: '32px',
                                                height: '32px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                flexShrink: 0
                                            }}
                                        >
                                            <Play size={13} fill="#ffffff" />
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Sub-view: Pranama Mantras (Matched 100% with vsnectar.web.app/home/pranama) */}
                {badadandaSubTab === 'pranama' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px', padding: '0.5rem 0' }}>
                        {pranamaSongsResolved.map((item) => {
                            const isAvailable = item.isAvailable && item.song;
                            const song = item.song;
                            return (
                                <div
                                    key={item.order}
                                    onClick={() => {
                                        if (isAvailable && song) handleSelectSong(song);
                                    }}
                                    style={{
                                        background: isNightMode ? '#1e293b' : '#ffffff',
                                        borderRadius: '16px',
                                        padding: '12px 14px',
                                        border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                        cursor: isAvailable ? 'pointer' : 'default',
                                        opacity: isAvailable ? 1 : 0.65,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '10px'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: 1 }}>
                                        <div style={{
                                            width: '38px', height: '38px', borderRadius: '10px',
                                            background: '#0284c718', color: '#0284c7',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: 900, fontSize: '0.82rem', flexShrink: 0
                                        }}>
                                            #{toOdiaNumber(item.order)}
                                        </div>
                                        <div style={{ minWidth: 0, flex: 1 }}>
                                            <div style={{
                                                fontSize: '0.96rem',
                                                fontWeight: 800,
                                                fontFamily: 'var(--font-odia-sans)',
                                                color: isNightMode ? '#f8fafc' : '#1e293b',
                                                lineHeight: 1.45,
                                                wordBreak: 'break-word',
                                                padding: '2px 0'
                                            }}>
                                                {item.odia}
                                            </div>
                                        </div>
                                    </div>
                                    {isAvailable ? (
                                        <button
                                            style={{
                                                background: '#0284c7',
                                                color: '#ffffff',
                                                border: 'none',
                                                borderRadius: '50%',
                                                width: '32px',
                                                height: '32px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                flexShrink: 0
                                            }}
                                        >
                                            <Play size={13} fill="#ffffff" />
                                        </button>
                                    ) : (
                                        <div style={{
                                            fontSize: '0.7rem',
                                            fontWeight: 700,
                                            color: '#94a3b8',
                                            background: isNightMode ? '#334155' : '#f1f5f9',
                                            padding: '4px 8px',
                                            borderRadius: '8px',
                                            flexShrink: 0
                                        }}>
                                            ଶୀଘ୍ର
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Sub-view: Ashtakams */}
                {badadandaSubTab === 'ashtakams' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0.5rem 0' }}>
                        {badadandaAshtakamSongs.map(song => (
                            <div
                                key={song.id}
                                onClick={() => handleSelectSong(song)}
                                style={{
                                    padding: '0.75rem 1rem',
                                    backgroundColor: isNightMode ? '#1e293b' : '#ffffff',
                                    borderRadius: '14px',
                                    border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '10px'
                                }}
                            >
                                <div>
                                    <div style={{ fontSize: '0.96rem', fontWeight: 800, fontFamily: 'var(--font-odia-sans)', color: isNightMode ? '#f8fafc' : '#1e293b' }}>
                                        {song.title_odia || song.title}
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                                        {song.title} • {song.author || 'ଅଷ୍ଟକମ୍'}
                                    </div>
                                </div>
                                <button
                                    style={{
                                        background: '#e11d48',
                                        color: '#ffffff',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        flexShrink: 0
                                    }}
                                >
                                    <Play size={13} fill="#ffffff" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Sub-view: Song Books matching https://vsnectar.web.app/books */}
                {badadandaSubTab === 'lists' && (
                    <div style={{ padding: '0.5rem 0' }}>
                        {selectedBadadandaList ? (
                            <div>
                                {/* Back Button & Selected List Header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                    marginBottom: '1rem',
                                    flexWrap: 'wrap'
                                }}>
                                    <button
                                        onClick={() => {
                                            setSelectedBadadandaList(null);
                                            setBookSongSearch('');
                                            setBookSongFilter('all');
                                        }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            background: isNightMode ? '#334155' : '#f1f5f9',
                                            color: isNightMode ? '#f8fafc' : '#1e293b',
                                            border: 'none',
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: 800,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <ChevronLeft size={18} /> ସମସ୍ତ ପୁସ୍ତକ ଓ ଗ୍ରନ୍ଥ (Song Books)
                                    </button>

                                    <button
                                        onClick={() => {
                                            setSearchQuery(selectedBadadandaList.query);
                                            setActiveTab('songs');
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        style={{
                                            border: 'none',
                                            background: `${selectedBadadandaList.color || '#0284c7'}15`,
                                            color: selectedBadadandaList.color || '#0284c7',
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            fontSize: '0.78rem',
                                            fontWeight: 800,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        ମୁଖ୍ୟ ପୃଷ୍ଠାରେ ଖୋଜନ୍ତୁ ↗
                                    </button>
                                </div>

                                {/* Banner for selected book */}
                                {(() => {
                                    const catalogList = getBookCatalog(selectedBadadandaList.id);
                                    const hasCatalog = catalogList.length > 0;
                                    const counts = getBookCatalogCounts(selectedBadadandaList.id);
                                    const fallbackSongs = getSongsForBadadandaList(selectedBadadandaList);
                                    const totalSongs = hasCatalog ? counts.total : fallbackSongs.length;
                                    const availableSongs = hasCatalog ? counts.available : fallbackSongs.length;

                                    return (
                                        <>
                                            <div style={{
                                                background: isNightMode
                                                    ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                                                    : 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)',
                                                borderRadius: '18px',
                                                padding: '1.25rem 1.5rem',
                                                border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : `1px solid ${selectedBadadandaList.color || '#00bcd4'}40`,
                                                boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                                                marginBottom: '1rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '16px'
                                            }}>
                                                <div style={{
                                                    width: '56px',
                                                    height: '56px',
                                                    borderRadius: '16px',
                                                    background: `${selectedBadadandaList.color || '#00bcd4'}20`,
                                                    color: selectedBadadandaList.color || '#00bcd4',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                }}>
                                                    <BookOpen size={30} />
                                                </div>
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <div style={{
                                                        fontSize: '1.25rem',
                                                        fontWeight: 900,
                                                        color: isNightMode ? '#f8fafc' : '#1e293b',
                                                        fontFamily: 'var(--font-odia-sans)',
                                                        lineHeight: 1.45
                                                    }}>
                                                        {selectedBadadandaList.odia}
                                                    </div>
                                                    <div style={{
                                                        fontSize: '0.82rem',
                                                        color: '#64748b',
                                                        fontWeight: 700,
                                                        marginTop: '3px'
                                                    }}>
                                                        {selectedBadadandaList.eng} • {selectedBadadandaList.author_odia || getAuthorOdiaName(selectedBadadandaList.author)}
                                                    </div>
                                                </div>
                                                <div style={{
                                                    background: isNightMode ? 'rgba(255,255,255,0.1)' : '#ffffff',
                                                    padding: '6px 14px',
                                                    borderRadius: '20px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: 800,
                                                    color: selectedBadadandaList.color || '#0284c7',
                                                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                                                    flexShrink: 0
                                                }}>
                                                    {toOdiaNumber(availableSongs)} / {toOdiaNumber(totalSongs)} ଭଜନ
                                                </div>
                                            </div>

                                            {/* In-Book Search & Filter Controls */}
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.25rem' }}>
                                                <div style={{ position: 'relative' }}>
                                                    <Search
                                                        size={18}
                                                        style={{
                                                            position: 'absolute',
                                                            left: '16px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            color: selectedBadadandaList.color || '#00bcd4'
                                                        }}
                                                    />
                                                    <input
                                                        type="text"
                                                        value={bookSongSearch}
                                                        onChange={(e) => setBookSongSearch(e.target.value)}
                                                        placeholder={`Search in ${selectedBadadandaList.eng} (${selectedBadadandaList.odia}ରେ ଖୋଜନ୍ତୁ...)`}
                                                        style={{
                                                            width: '100%',
                                                            padding: '11px 40px 11px 44px',
                                                            borderRadius: '12px',
                                                            border: isNightMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e1',
                                                            background: isNightMode ? '#1e293b' : '#ffffff',
                                                            color: isNightMode ? '#f8fafc' : '#0f172a',
                                                            fontSize: '0.92rem',
                                                            fontFamily: 'var(--font-odia-sans), sans-serif',
                                                            outline: 'none',
                                                            boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                                                        }}
                                                    />
                                                    {bookSongSearch && (
                                                        <button
                                                            onClick={() => setBookSongSearch('')}
                                                            style={{
                                                                position: 'absolute',
                                                                right: '14px',
                                                                top: '50%',
                                                                transform: 'translateY(-50%)',
                                                                background: 'none',
                                                                border: 'none',
                                                                color: '#94a3b8',
                                                                cursor: 'pointer',
                                                                padding: '4px'
                                                            }}
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Filter Pills */}
                                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                                    <button
                                                        onClick={() => setBookSongFilter('all')}
                                                        style={{
                                                            border: 'none',
                                                            background: bookSongFilter === 'all'
                                                                ? (selectedBadadandaList.color || '#00bcd4')
                                                                : (isNightMode ? '#334155' : '#f1f5f9'),
                                                            color: bookSongFilter === 'all' ? '#ffffff' : (isNightMode ? '#cbd5e1' : '#475569'),
                                                            padding: '6px 14px',
                                                            borderRadius: '20px',
                                                            fontSize: '0.78rem',
                                                            fontWeight: 800,
                                                            cursor: 'pointer',
                                                            fontFamily: 'var(--font-odia-sans)'
                                                        }}
                                                    >
                                                        ସମସ୍ତ ({toOdiaNumber(totalSongs)})
                                                    </button>
                                                    <button
                                                        onClick={() => setBookSongFilter('available')}
                                                        style={{
                                                            border: 'none',
                                                            background: bookSongFilter === 'available'
                                                                ? '#16a34a'
                                                                : (isNightMode ? '#334155' : '#f1f5f9'),
                                                            color: bookSongFilter === 'available' ? '#ffffff' : (isNightMode ? '#cbd5e1' : '#475569'),
                                                            padding: '6px 14px',
                                                            borderRadius: '20px',
                                                            fontSize: '0.78rem',
                                                            fontWeight: 800,
                                                            cursor: 'pointer',
                                                            fontFamily: 'var(--font-odia-sans)'
                                                        }}
                                                    >
                                                        ✓ ଉପଲବ୍ଧ ({toOdiaNumber(availableSongs)})
                                                    </button>
                                                    {totalSongs > availableSongs && (
                                                        <button
                                                            onClick={() => setBookSongFilter('unavailable')}
                                                            style={{
                                                                border: 'none',
                                                                background: bookSongFilter === 'unavailable'
                                                                    ? '#64748b'
                                                                    : (isNightMode ? '#334155' : '#f1f5f9'),
                                                                color: bookSongFilter === 'unavailable' ? '#ffffff' : (isNightMode ? '#cbd5e1' : '#475569'),
                                                                padding: '6px 14px',
                                                                borderRadius: '20px',
                                                                fontSize: '0.78rem',
                                                                fontWeight: 800,
                                                                cursor: 'pointer',
                                                                fontFamily: 'var(--font-odia-sans)'
                                                            }}
                                                        >
                                                            ⏳ ଶୀଘ୍ର ଆସୁଅଛି ({toOdiaNumber(totalSongs - availableSongs)})
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Song Items List */}
                                            {(() => {
                                                if (hasCatalog) {
                                                    const searchNorm = normalizeForSearch(bookSongSearch);
                                                    const filteredCatalog = catalogList.filter(item => {
                                                        if (bookSongFilter === 'available' && !item.isAvailable) return false;
                                                        if (bookSongFilter === 'unavailable' && item.isAvailable) return false;

                                                        if (!searchNorm) return true;
                                                        const titleNorm = normalizeForSearch(item.title);
                                                        const vnameNorm = normalizeForSearch(item.vname || '');
                                                        const odiaNorm = item.title_odia || '';
                                                        const chapNorm = normalizeForSearch(item.chapter || '');
                                                        return titleNorm.includes(searchNorm) ||
                                                               vnameNorm.includes(searchNorm) ||
                                                               odiaNorm.includes(bookSongSearch) ||
                                                               chapNorm.includes(searchNorm);
                                                    });

                                                    if (filteredCatalog.length === 0) {
                                                        return (
                                                            <div style={{
                                                                textAlign: 'center',
                                                                padding: '3rem 1.5rem',
                                                                background: isNightMode ? '#1e293b' : '#ffffff',
                                                                borderRadius: '16px',
                                                                border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                                color: '#64748b'
                                                            }}>
                                                                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</div>
                                                                <div style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'var(--font-odia-sans)' }}>
                                                                    କୌଣସି ଭଜନ ମିଳିଲା ନାହିଁ
                                                                </div>
                                                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
                                                                    No songs match your search or filter
                                                                </div>
                                                            </div>
                                                        );
                                                    }

                                                    return (
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                            {filteredCatalog.map(item => {
                                                                const localSong = item.localSongId ? songResources.find(s => s.id === item.localSongId) : null;
                                                                const isAvail = item.isAvailable && !!localSong;

                                                                if (isAvail && localSong) {
                                                                    return (
                                                                        <div
                                                                            key={`book-song-${item.index}-${item.localSongId}`}
                                                                            onClick={() => handleSelectSong(localSong)}
                                                                            style={{
                                                                                padding: '0.85rem 1.15rem',
                                                                                backgroundColor: isNightMode ? '#1e293b' : '#ffffff',
                                                                                borderRadius: '16px',
                                                                                border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                                                cursor: 'pointer',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'space-between',
                                                                                gap: '12px',
                                                                                transition: 'all 0.2s ease',
                                                                                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                                                                            }}
                                                                            onMouseEnter={(e) => {
                                                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                                                                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)';
                                                                            }}
                                                                            onMouseLeave={(e) => {
                                                                                e.currentTarget.style.transform = 'translateY(0)';
                                                                                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                                                                            }}
                                                                        >
                                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: 1 }}>
                                                                                <div style={{
                                                                                    width: '30px',
                                                                                    height: '30px',
                                                                                    borderRadius: '8px',
                                                                                    background: isNightMode ? 'rgba(0,188,212,0.15)' : '#e0f7fa',
                                                                                    color: isNightMode ? '#38bdf8' : '#00838f',
                                                                                    fontSize: '0.75rem',
                                                                                    fontWeight: 800,
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    flexShrink: 0
                                                                                }}>
                                                                                    {toOdiaNumber(item.index)}
                                                                                </div>
                                                                                <div style={{ minWidth: 0, flex: 1 }}>
                                                                                    <div style={{
                                                                                        fontSize: '1rem',
                                                                                        fontWeight: 800,
                                                                                        fontFamily: 'var(--font-odia-sans)',
                                                                                        color: isNightMode ? '#f8fafc' : '#1e293b',
                                                                                        lineHeight: 1.45,
                                                                                        wordBreak: 'break-word'
                                                                                    }}>
                                                                                        {item.title_odia || localSong.title_odia || item.title}
                                                                                    </div>
                                                                                    <div style={{
                                                                                        fontSize: '0.76rem',
                                                                                        color: '#64748b',
                                                                                        whiteSpace: 'nowrap',
                                                                                        overflow: 'hidden',
                                                                                        textOverflow: 'ellipsis',
                                                                                        marginTop: '2px'
                                                                                    }}>
                                                                                        {item.title}
                                                                                        {item.chapter && (
                                                                                            <span style={{ color: selectedBadadandaList.color || '#0284c7', marginLeft: '6px' }}>
                                                                                                • {item.chapter}
                                                                                            </span>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                                                                                <span style={{
                                                                                    fontSize: '0.68rem',
                                                                                    fontWeight: 800,
                                                                                    padding: '3px 8px',
                                                                                    borderRadius: '12px',
                                                                                    background: isNightMode ? 'rgba(34,197,94,0.15)' : '#dcfce7',
                                                                                    color: isNightMode ? '#4ade80' : '#15803d',
                                                                                    fontFamily: 'var(--font-odia-sans)'
                                                                                }}>
                                                                                    ✓ ଉପଲବ୍ଧ
                                                                                </span>
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        handleSelectSong(localSong);
                                                                                    }}
                                                                                    style={{
                                                                                        background: selectedBadadandaList.color || '#00bcd4',
                                                                                        color: '#ffffff',
                                                                                        border: 'none',
                                                                                        borderRadius: '50%',
                                                                                        width: '34px',
                                                                                        height: '34px',
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        justifyContent: 'center',
                                                                                        cursor: 'pointer',
                                                                                        flexShrink: 0,
                                                                                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                                                                    }}
                                                                                >
                                                                                    <Play size={14} fill="#ffffff" />
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }

                                                                // Unavailable / Coming Soon song item (UNSELECTABLE)
                                                                return (
                                                                    <div
                                                                        key={`book-song-${item.index}-unavail`}
                                                                        onClick={() => {
                                                                            setBookUnavailableNotice(`"${item.title}" ଭଜନଟି ଖୁବ୍ ଶୀଘ୍ର ଆମ ଆପ୍‌ରେ ଉପଲବ୍ଧ ହେବ (Coming Soon)`);
                                                                            setTimeout(() => setBookUnavailableNotice(null), 3500);
                                                                        }}
                                                                        style={{
                                                                            padding: '0.85rem 1.15rem',
                                                                            backgroundColor: isNightMode ? 'rgba(30,41,59,0.45)' : '#f8fafc',
                                                                            borderRadius: '16px',
                                                                            border: isNightMode ? '1px dashed rgba(255,255,255,0.12)' : '1px dashed #cbd5e1',
                                                                            cursor: 'not-allowed',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'space-between',
                                                                            gap: '12px',
                                                                            opacity: 0.72,
                                                                            transition: 'all 0.15s ease'
                                                                        }}
                                                                    >
                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: 1 }}>
                                                                            <div style={{
                                                                                width: '30px',
                                                                                height: '30px',
                                                                                borderRadius: '8px',
                                                                                background: isNightMode ? 'rgba(255,255,255,0.06)' : '#e2e8f0',
                                                                                color: '#94a3b8',
                                                                                fontSize: '0.75rem',
                                                                                fontWeight: 800,
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'center',
                                                                                flexShrink: 0
                                                                            }}>
                                                                                {toOdiaNumber(item.index)}
                                                                            </div>
                                                                            <div style={{ minWidth: 0, flex: 1 }}>
                                                                                <div style={{
                                                                                    fontSize: '0.94rem',
                                                                                    fontWeight: 700,
                                                                                    color: isNightMode ? '#cbd5e1' : '#475569',
                                                                                    lineHeight: 1.4,
                                                                                    wordBreak: 'break-word'
                                                                                }}>
                                                                                    {item.title}
                                                                                </div>
                                                                                <div style={{
                                                                                    fontSize: '0.74rem',
                                                                                    color: '#94a3b8',
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis',
                                                                                    marginTop: '2px'
                                                                                }}>
                                                                                    {item.chapter ? item.chapter : (item.vname || selectedBadadandaList.eng)}
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                                                                            <span style={{
                                                                                fontSize: '0.68rem',
                                                                                fontWeight: 700,
                                                                                padding: '3px 8px',
                                                                                borderRadius: '12px',
                                                                                background: isNightMode ? 'rgba(255,255,255,0.06)' : '#f1f5f9',
                                                                                color: '#94a3b8',
                                                                                fontFamily: 'var(--font-odia-sans)'
                                                                            }}>
                                                                                ଶୀଘ୍ର ଆସୁଅଛି
                                                                            </span>
                                                                            <div style={{
                                                                                width: '32px',
                                                                                height: '32px',
                                                                                borderRadius: '50%',
                                                                                background: isNightMode ? 'rgba(255,255,255,0.05)' : '#e2e8f0',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'center',
                                                                                color: '#94a3b8'
                                                                            }}>
                                                                                <Clock size={14} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    );
                                                }

                                                // Fallback if no catalog list
                                                if (fallbackSongs.length === 0) {
                                                    return (
                                                        <div style={{
                                                            textAlign: 'center',
                                                            padding: '3rem 1.5rem',
                                                            background: isNightMode ? '#1e293b' : '#ffffff',
                                                            borderRadius: '18px',
                                                            border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                            color: '#64748b'
                                                        }}>
                                                            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📜</div>
                                                            <div style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-odia-sans)' }}>
                                                                ଏହି ପୁସ୍ତକର ସଙ୍ଗୀତ ଖୁବ୍ ଶୀଘ୍ର ଉପଲବ୍ଧ ହେବ
                                                            </div>
                                                            <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '6px' }}>
                                                                {selectedBadadandaList.eng} songs will be added soon.
                                                            </div>
                                                        </div>
                                                    );
                                                }

                                                return (
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                        {fallbackSongs.map(song => (
                                                            <div
                                                                key={song.id}
                                                                onClick={() => handleSelectSong(song)}
                                                                style={{
                                                                    padding: '0.85rem 1.15rem',
                                                                    backgroundColor: isNightMode ? '#1e293b' : '#ffffff',
                                                                    borderRadius: '16px',
                                                                    border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'space-between',
                                                                    gap: '12px',
                                                                    transition: 'all 0.2s ease',
                                                                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                                                                }}
                                                            >
                                                                <div style={{ minWidth: 0, flex: 1 }}>
                                                                    <div style={{
                                                                        fontSize: '1rem',
                                                                        fontWeight: 800,
                                                                        fontFamily: 'var(--font-odia-sans)',
                                                                        color: isNightMode ? '#f8fafc' : '#1e293b',
                                                                        lineHeight: 1.45,
                                                                        wordBreak: 'break-word'
                                                                    }}>
                                                                        {song.title_odia || song.title}
                                                                    </div>
                                                                    <div style={{
                                                                        fontSize: '0.76rem',
                                                                        color: '#64748b',
                                                                        whiteSpace: 'nowrap',
                                                                        overflow: 'hidden',
                                                                        textOverflow: 'ellipsis',
                                                                        marginTop: '2px'
                                                                    }}>
                                                                        {song.title} • {getAuthorOdiaName(song.author || selectedBadadandaList.author)}
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleSelectSong(song);
                                                                    }}
                                                                    style={{
                                                                        background: selectedBadadandaList.color || '#00bcd4',
                                                                        color: '#ffffff',
                                                                        border: 'none',
                                                                        borderRadius: '50%',
                                                                        width: '36px',
                                                                        height: '36px',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        cursor: 'pointer',
                                                                        flexShrink: 0,
                                                                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                                                    }}
                                                                >
                                                                    <Play size={15} fill="#ffffff" />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                );
                                            })()}
                                        </>
                                    );
                                })()}
                            </div>
                        ) : (
                            /* Song Books matching https://vsnectar.web.app/books grouped by Author */
                            <div>
                                {/* Search in Song Books (Top search bar matching vsnectar) */}
                                <div style={{
                                    position: 'relative',
                                    marginBottom: '1.25rem'
                                }}>
                                    <Search
                                        size={18}
                                        style={{
                                            position: 'absolute',
                                            left: '16px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#00bcd4'
                                        }}
                                    />
                                    <input
                                        type="text"
                                        value={badadandaBooksSearch}
                                        onChange={(e) => setBadadandaBooksSearch(e.target.value)}
                                        placeholder="Search in Song Books (ଗ୍ରନ୍ଥ ବା ପୁସ୍ତକରେ ଖୋଜନ୍ତୁ...)"
                                        style={{
                                            width: '100%',
                                            padding: '12px 42px 12px 44px',
                                            borderRadius: '12px',
                                            border: isNightMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e1',
                                            background: isNightMode ? '#1e293b' : '#ffffff',
                                            color: isNightMode ? '#f8fafc' : '#0f172a',
                                            fontSize: '0.95rem',
                                            fontFamily: 'var(--font-odia-sans), sans-serif',
                                            outline: 'none',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                                        }}
                                    />
                                    {badadandaBooksSearch && (
                                        <button
                                            onClick={() => setBadadandaBooksSearch('')}
                                            style={{
                                                position: 'absolute',
                                                right: '14px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                background: 'none',
                                                border: 'none',
                                                color: '#94a3b8',
                                                cursor: 'pointer',
                                                padding: '4px'
                                            }}
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>

                                {/* Sections List */}
                                {(() => {
                                    const searchNorm = normalizeForSearch(badadandaBooksSearch);

                                    const filteredSections = VAISHNAVA_BOOKS_SECTIONS.map(section => {
                                        const matchingBooks = section.books.filter(b => {
                                            if (!searchNorm) return true;
                                            const nameOdia = b.odia;
                                            const nameEng = normalizeForSearch(b.eng);
                                            const auth = normalizeForSearch(b.author);
                                            const sub = normalizeForSearch(b.subAuthor || '');
                                            return nameOdia.includes(badadandaBooksSearch) ||
                                                   nameEng.includes(searchNorm) ||
                                                   auth.includes(searchNorm) ||
                                                   sub.includes(searchNorm);
                                        });

                                        const sectionMatches = searchNorm && (
                                            normalizeForSearch(section.title_eng).includes(searchNorm) ||
                                            section.title_odia.includes(badadandaBooksSearch)
                                        );

                                        return {
                                            ...section,
                                            books: sectionMatches ? section.books : matchingBooks
                                        };
                                    }).filter(section => section.books.length > 0);

                                    if (filteredSections.length === 0) {
                                        return (
                                            <div style={{
                                                textAlign: 'center',
                                                padding: '3rem 1.5rem',
                                                background: isNightMode ? '#1e293b' : '#ffffff',
                                                borderRadius: '16px',
                                                border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                color: '#64748b'
                                            }}>
                                                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</div>
                                                <div style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'var(--font-odia-sans)' }}>
                                                    କୌଣସି ପୁସ୍ତକ ମିଳିଲା ନାହିଁ
                                                </div>
                                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
                                                    No song books match &quot;{badadandaBooksSearch}&quot;
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                            {filteredSections.map((section) => (
                                                <div
                                                    key={section.id}
                                                    style={{
                                                        background: isNightMode ? '#1e293b' : '#ffffff',
                                                        borderRadius: '16px',
                                                        overflow: 'hidden',
                                                        border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                        boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                                                    }}
                                                >
                                                    {/* Cyan Category Header matching vsnectar */}
                                                    <div style={{
                                                        background: isNightMode
                                                            ? 'linear-gradient(90deg, #0284c7 0%, #0369a1 100%)'
                                                            : 'linear-gradient(90deg, #00bcd4 0%, #00acc1 100%)',
                                                        color: '#ffffff',
                                                        padding: '11px 18px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <div style={{
                                                            fontSize: '0.98rem',
                                                            fontWeight: 800,
                                                            fontFamily: 'var(--font-odia-sans), sans-serif',
                                                            lineHeight: 1.45,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            flexWrap: 'wrap'
                                                        }}>
                                                            <span>{section.title_odia}</span>
                                                            <span style={{
                                                                fontSize: '0.78rem',
                                                                fontWeight: 600,
                                                                opacity: 0.92,
                                                                fontFamily: 'sans-serif'
                                                            }}>
                                                                ({section.title_eng})
                                                            </span>
                                                        </div>
                                                        <span style={{
                                                            fontSize: '0.72rem',
                                                            fontWeight: 700,
                                                            background: 'rgba(255,255,255,0.25)',
                                                            padding: '2px 8px',
                                                            borderRadius: '12px'
                                                        }}>
                                                            {toOdiaNumber(section.books.length)} ଗ୍ରନ୍ଥ
                                                        </span>
                                                    </div>

                                                    {/* Book Items List */}
                                                    <div>
                                                        {section.books.map((book, idx) => {
                                                            const catalogCounts = getBookCatalogCounts(book.id);
                                                            const fallbackCount = getSongsForBadadandaList(book).length;
                                                            const totalCount = catalogCounts.total > 0 ? catalogCounts.total : fallbackCount;
                                                            const availableCount = catalogCounts.total > 0 ? catalogCounts.available : fallbackCount;
                                                            const isLast = idx === section.books.length - 1;

                                                            return (
                                                                <div
                                                                    key={book.id}
                                                                    onClick={() => setSelectedBadadandaList(book)}
                                                                    style={{
                                                                        padding: '13px 18px',
                                                                        borderBottom: isLast ? 'none' : (isNightMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid #f1f5f9'),
                                                                        cursor: 'pointer',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'space-between',
                                                                        gap: '12px',
                                                                        transition: 'background 0.15s ease'
                                                                    }}
                                                                    onMouseEnter={(e) => {
                                                                        e.currentTarget.style.background = isNightMode ? '#334155' : '#f8fafc';
                                                                    }}
                                                                    onMouseLeave={(e) => {
                                                                        e.currentTarget.style.background = 'transparent';
                                                                    }}
                                                                >
                                                                    <div style={{ minWidth: 0, flex: 1 }}>
                                                                        <div style={{
                                                                            fontSize: '1.02rem',
                                                                            fontWeight: 800,
                                                                            fontFamily: 'var(--font-odia-sans)',
                                                                            color: isNightMode ? '#f8fafc' : '#1e293b',
                                                                            lineHeight: 1.45,
                                                                            whiteSpace: 'nowrap',
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis'
                                                                        }}>
                                                                            {book.odia}
                                                                        </div>
                                                                        <div style={{
                                                                            fontSize: '0.76rem',
                                                                            color: '#64748b',
                                                                            fontWeight: 600,
                                                                            marginTop: '1px',
                                                                            whiteSpace: 'nowrap',
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis'
                                                                        }}>
                                                                            {book.eng}
                                                                            {book.subAuthor && (
                                                                                <span style={{ color: '#0284c7', marginLeft: '6px' }}>
                                                                                    • {book.subAuthor_odia || book.subAuthor}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                                                                        <span style={{
                                                                            fontSize: '0.72rem',
                                                                            fontWeight: 800,
                                                                            padding: '3px 10px',
                                                                            borderRadius: '12px',
                                                                            background: availableCount > 0
                                                                                ? (isNightMode ? 'rgba(0,188,212,0.18)' : '#e0f7fa')
                                                                                : (isNightMode ? 'rgba(255,255,255,0.06)' : '#f1f5f9'),
                                                                            color: availableCount > 0
                                                                                ? (isNightMode ? '#38bdf8' : '#00838f')
                                                                                : '#94a3b8'
                                                                        }}>
                                                                            {totalCount > 0
                                                                                ? `${toOdiaNumber(availableCount)} / ${toOdiaNumber(totalCount)} ଭଜନ`
                                                                                : (availableCount > 0 ? `${toOdiaNumber(availableCount)} ଟି ଭଜନ` : 'ଖୁବ୍ ଶୀଘ୍ର')}
                                                                        </span>
                                                                        <ChevronRight size={18} color="#94a3b8" />
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })()}
                            </div>
                        )}
                    </div>
                )}

                {/* Sub-view: History */}
                {badadandaSubTab === 'history' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0.5rem 0' }}>
                        {songResources.filter(s => recentIds.includes(s.id)).slice(0, 15).map(song => (
                            <div
                                key={song.id}
                                onClick={() => handleSelectSong(song)}
                                style={{
                                    padding: '0.75rem 1rem',
                                    backgroundColor: isNightMode ? '#1e293b' : '#ffffff',
                                    borderRadius: '14px',
                                    border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '10px'
                                }}
                            >
                                <div>
                                    <div style={{ fontSize: '0.96rem', fontWeight: 800, fontFamily: 'var(--font-odia-sans)', color: isNightMode ? '#f8fafc' : '#1e293b' }}>
                                        {song.title_odia || song.title}
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                                        {song.title} • {song.author}
                                    </div>
                                </div>
                                <button
                                    style={{
                                        background: '#ca8a04',
                                        color: '#ffffff',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        flexShrink: 0
                                    }}
                                >
                                    <Play size={13} fill="#ffffff" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Sub-view: Settings */}
                {badadandaSubTab === 'settings' && (
                    <div style={{
                        background: isNightMode ? '#1e293b' : '#ffffff',
                        borderRadius: '18px',
                        padding: '1.25rem',
                        border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        <div>
                            <div style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'var(--font-odia-sans)', marginBottom: '8px' }}>
                                ତତ୍ତ୍ୱ ଥିମ୍ ଚୟନ (Select Tattva Theme)
                            </div>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                {Object.entries(TATTVA_THEMES).map(([k, v]) => (
                                    <div
                                        key={k}
                                        onClick={() => handleSetTheme(k)}
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            background: v.gradient,
                                            border: currentThemeKey === k ? '3px solid #064e3b' : '2px solid white',
                                            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                                            cursor: 'pointer'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <div style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'var(--font-odia-sans)', marginBottom: '8px' }}>
                                ଫଣ୍ଟ ଆକାର (Font Size)
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <button onClick={() => setFontSize(f => Math.max(f - 2, 12))} style={{ border: '1px solid #e2e8f0', background: 'white', borderRadius: '8px', padding: '6px 14px', fontWeight: 900, cursor: 'pointer' }}>-</button>
                                <span style={{ fontSize: '1rem', fontWeight: 900, minWidth: '30px', textAlign: 'center' }}>{toOdiaNumber(fontSize)}</span>
                                <button onClick={() => setFontSize(f => Math.min(f + 2, 32))} style={{ border: '1px solid #e2e8f0', background: 'white', borderRadius: '8px', padding: '6px 14px', fontWeight: 900, cursor: 'pointer' }}>+</button>
                            </div>
                        </div>
                    </div>
                )}



                {/* Sub-view: Singers as Cards */}
                {badadandaSubTab === 'singers' && (
                    <div style={{ padding: '0.5rem 0' }}>
                        {selectedBadadandaSinger ? (
                            <div>
                                {/* Back Button & Header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                    marginBottom: '1rem',
                                    flexWrap: 'wrap'
                                }}>
                                    <button
                                        onClick={() => setSelectedBadadandaSinger(null)}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            background: isNightMode ? '#334155' : '#f1f5f9',
                                            color: isNightMode ? '#f8fafc' : '#1e293b',
                                            border: 'none',
                                            padding: '6px 14px',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            fontWeight: 800,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <ChevronLeft size={16} /> ସମସ୍ତ ଗାୟକ
                                    </button>

                                    <button
                                        onClick={() => {
                                            setSearchQuery(selectedBadadandaSinger);
                                            setActiveTab('songs');
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        style={{
                                            border: 'none',
                                            background: '#0d948815',
                                            color: '#0d9488',
                                            padding: '6px 14px',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        ମୁଖ୍ୟ ପୃଷ୍ଠାରେ ଖୋଜନ୍ତୁ ↗
                                    </button>
                                </div>

                                {/* Banner for selected singer */}
                                <div style={{
                                    background: isNightMode ? '#1e293b' : '#ffffff',
                                    borderRadius: '18px',
                                    padding: '1.2rem',
                                    border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #0d948830',
                                    boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                                    marginBottom: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px'
                                }}>
                                    <div style={{
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '16px',
                                        background: '#0d948820',
                                        color: '#0d9488',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Mic size={28} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 900,
                                            color: isNightMode ? '#f8fafc' : '#1e293b',
                                            lineHeight: 1.3,
                                            wordBreak: 'break-word',
                                            fontFamily: 'var(--font-odia-sans)'
                                        }}>
                                            {getSingerOdiaName(selectedBadadandaSinger)}
                                        </div>
                                        {(() => {
                                            const singerSongs = getSongsForSinger(selectedBadadandaSinger);
                                            return (
                                                <div style={{
                                                    fontSize: '0.8rem',
                                                    color: '#0d9488',
                                                    fontWeight: 800,
                                                    marginTop: '3px',
                                                    fontFamily: 'var(--font-odia-sans)'
                                                }}>
                                                    କଣ୍ଠଶିଳ୍ପୀ • {toOdiaNumber(singerSongs.length)} ଟି ଅଡିଓ ଗୀତ
                                                </div>
                                            );
                                        })()}
                                    </div>
                                </div>

                                {/* Songs list */}
                                {(() => {
                                    const singerSongs = getSongsForSinger(selectedBadadandaSinger);
                                    if (singerSongs.length === 0) {
                                        return (
                                            <div style={{
                                                textAlign: 'center',
                                                padding: '2.5rem 1rem',
                                                background: isNightMode ? '#1e293b' : '#ffffff',
                                                borderRadius: '16px',
                                                border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                color: '#64748b'
                                            }}>
                                                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎙️</div>
                                                <div style={{ fontSize: '0.95rem', fontWeight: 800, fontFamily: 'var(--font-odia-sans)' }}>
                                                    ଏହି କଣ୍ଠଶିଳ୍ପୀଙ୍କ ଗୀତ ଖୁବ୍ ଶୀଘ୍ର ଆସୁଅଛି
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {singerSongs.map(song => (
                                                <div
                                                    key={song.id}
                                                    onClick={() => handleSelectSong(song)}
                                                    style={{
                                                        padding: '0.75rem 1rem',
                                                        backgroundColor: isNightMode ? '#1e293b' : '#ffffff',
                                                        borderRadius: '14px',
                                                        border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        gap: '10px',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                >
                                                    <div style={{ minWidth: 0, flex: 1 }}>
                                                        <div style={{
                                                            fontSize: '0.98rem',
                                                            fontWeight: 800,
                                                            fontFamily: 'var(--font-odia-sans)',
                                                            color: isNightMode ? '#f8fafc' : '#1e293b',
                                                            lineHeight: 1.4,
                                                            wordBreak: 'break-word'
                                                        }}>
                                                            {song.title_odia || song.title}
                                                        </div>
                                                        <div style={{
                                                            fontSize: '0.75rem',
                                                            color: isNightMode ? '#94a3b8' : '#64748b',
                                                            lineHeight: 1.35,
                                                            marginTop: '2px',
                                                            fontFamily: 'var(--font-odia-sans)'
                                                        }}>
                                                            {getAuthorOdiaName(song.author || '') || 'ଶ୍ରୀ ବୈଷ୍ଣବ ଗୀତି'}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleSelectSong(song);
                                                        }}
                                                        style={{
                                                            background: '#0d9488',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '50%',
                                                            width: '32px',
                                                            height: '32px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            cursor: 'pointer',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <Play size={13} fill="#ffffff" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })()}
                            </div>
                        ) : (
                            /* All Singers Grid */
                            <div>
                                {/* Search filter for singers */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    background: isNightMode ? '#1e293b' : '#ffffff',
                                    borderRadius: '14px',
                                    padding: '0 0.85rem',
                                    border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                    marginBottom: '1rem',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                                }}>
                                    <Search size={16} color="#94a3b8" />
                                    <input
                                        type="text"
                                        placeholder="ଗାୟକ ବା କଣ୍ଠଶିଳ୍ପୀ ଖୋଜନ୍ତୁ..."
                                        value={badadandaSingerSearch}
                                        onChange={(e) => setBadadandaSingerSearch(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '0.65rem 0.5rem',
                                            background: 'transparent',
                                            border: 'none',
                                            outline: 'none',
                                            fontSize: '0.88rem',
                                            color: isNightMode ? '#f8fafc' : '#1e293b'
                                        }}
                                    />
                                    {badadandaSingerSearch && (
                                        <button
                                            onClick={() => setBadadandaSingerSearch('')}
                                            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                                        >
                                            <X size={15} />
                                        </button>
                                    )}
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                    gap: '14px'
                                }}>
                                    {singerStats
                                        .filter(s => {
                                            if (!badadandaSingerSearch) return true;
                                            const q = badadandaSingerSearch.toLowerCase();
                                            return s.singer.toLowerCase().includes(q) || s.singer_odia.includes(badadandaSingerSearch);
                                        })
                                        .map((stat, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => setSelectedBadadandaSinger(stat.singer)}
                                                style={{
                                                    background: isNightMode ? '#1e293b' : '#ffffff',
                                                    borderRadius: '18px',
                                                    padding: '1.15rem 1.25rem',
                                                    border: isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                                                    boxShadow: '0 3px 12px rgba(0,0,0,0.04)',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    gap: '12px',
                                                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(13, 148, 136, 0.18)';
                                                    e.currentTarget.style.borderColor = '#0d948850';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.04)';
                                                    e.currentTarget.style.borderColor = isNightMode ? 'rgba(255,255,255,0.08)' : '#e2e8f0';
                                                }}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0, flex: 1 }}>
                                                    <div style={{
                                                        width: '46px',
                                                        height: '46px',
                                                        borderRadius: '14px',
                                                        background: '#0d948815',
                                                        color: '#0d9488',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <Mic size={24} />
                                                    </div>
                                                    <div style={{ minWidth: 0, flex: 1 }}>
                                                        <div style={{
                                                            fontSize: '1.02rem',
                                                            fontWeight: 800,
                                                            fontFamily: 'var(--font-odia-sans)',
                                                            color: isNightMode ? '#f8fafc' : '#1e293b',
                                                            lineHeight: 1.35,
                                                            wordBreak: 'break-word'
                                                        }}>
                                                            {stat.singer_odia}
                                                        </div>
                                                        <div style={{
                                                            fontSize: '0.74rem',
                                                            color: '#0d9488',
                                                            fontWeight: 800,
                                                            marginTop: '3px',
                                                            fontFamily: 'var(--font-odia-sans)'
                                                        }}>
                                                            {toOdiaNumber(stat.count)} ଟି ଅଡିଓ ଗୀତ
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ color: '#cbd5e1', flexShrink: 0 }}>
                                                    <ChevronRight size={20} />
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Floating Toast Notice for Unselectable / Coming Soon Songs */}
                {bookUnavailableNotice && (
                    <div style={{
                        position: 'fixed',
                        bottom: '84px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#0f172a',
                        color: '#ffffff',
                        padding: '11px 22px',
                        borderRadius: '30px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                        zIndex: 9999,
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-odia-sans), sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        border: '1px solid rgba(255,255,255,0.18)',
                        maxWidth: '90vw',
                        textAlign: 'center'
                    }}>
                        <Clock size={16} color="#38bdf8" />
                        <span>{bookUnavailableNotice}</span>
                    </div>
                )}
            </div>
        );
    };

    const renderFeaturedCategories = () => {
        if (searchQuery || selectedSong || (activeTab !== 'gita' && activeTab !== 'temple')) return null;



        const titleStyle: React.CSSProperties = {
            fontSize: '1.1rem',
            fontWeight: 900,
            color: '#1e293b',
            fontFamily: 'var(--font-odia-sans)',
            textAlign: 'left',
            lineHeight: '1.1',
            letterSpacing: '-0.2px'
        };

        const engTitleStyle: React.CSSProperties = {
            fontSize: '0.65rem',
            fontWeight: 700,
            color: 'rgba(30, 41, 59, 0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            marginTop: '4px'
        };

        return (
            <div style={{ padding: '0 1.25rem 2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    padding: '10px 5px 20px',
                }}>
                    {/* CARD 1: ALPHABETICAL */}
                    <div
                        className="category-card"
                        onClick={() => {
                            setActiveTab('songs');
                            setSearchQuery('');
                            setSelectedAuthor(null);
                        }}
                        style={{
                            background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#0284c718',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <div style={{ color: '#0284c7' }}>
                                <BookA size={30} />
                            </div>
                        </div>
                        <div>
                            <div style={{ ...titleStyle, fontSize: '0.98rem' }}>ବର୍ଣ୍ଣମାଳା ଅନୁସାରେ</div>
                            <div style={engTitleStyle}>Alphabetical</div>
                        </div>
                    </div>

                    {/* CARD 2: AUTHORS */}
                    <div
                        className="category-card"
                        onClick={() => {
                            fetchAuthorStats();
                            setIsAuthorPanelOpen(true);
                        }}
                        style={{
                            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#16a34a18',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <div style={{ color: '#16a34a' }}>
                                <Users size={30} />
                            </div>
                        </div>
                        <div>
                            <div style={{ ...titleStyle, fontSize: '0.98rem' }}>ଲେଖକ ଅନୁସାରେ</div>
                            <div style={engTitleStyle}>Authors</div>
                        </div>
                    </div>

                    {/* CARD 3: TEMPLE SONGS */}
                    <div
                        className="category-card"
                        onClick={() => {
                            setActiveTab('temple');
                            setSearchQuery('');
                        }}
                        style={{
                            background: 'linear-gradient(135deg, #fffcf5 0%, #fff5e6 100%)',
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#ea580c18',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <div style={{ color: '#ea580c' }}>
                                <TempleIcons.TempleShikhara size={34} />
                            </div>
                        </div>
                        <div>
                            <div style={{ ...titleStyle, fontSize: '0.98rem' }}>ମନ୍ଦିର ଗୀତ</div>
                            <div style={engTitleStyle}>Temple Songs</div>
                        </div>
                    </div>

                    {/* CARD 4: PRANAMA MANTRAS */}
                    <div
                        className="category-card"
                        onClick={() => {
                            setActiveTab('songs');
                            setSearchQuery('Pranama');
                        }}
                        style={{
                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#0284c718',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <div style={{ color: '#0284c7' }}>
                                <TempleIcons.NamasteIcon size={34} />
                            </div>
                        </div>
                        <div>
                            <div style={{ ...titleStyle, fontSize: '0.98rem' }}>ପ୍ରଣାମ ମନ୍ତ୍ର</div>
                            <div style={engTitleStyle}>Pranama Mantras</div>
                        </div>
                    </div>

                    {/* CARD 5: ASHTAKAMS */}
                    <div
                        className="category-card"
                        onClick={() => {
                            setActiveTab('songs');
                            setSearchQuery('Astakam');
                        }}
                        style={{
                            background: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#e11d4818',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <div style={{ color: '#e11d48' }}>
                                <TempleIcons.SacredLotus size={34} />
                            </div>
                        </div>
                        <div>
                            <div style={{ ...titleStyle, fontSize: '0.98rem' }}>ଅଷ୍ଟକମ୍</div>
                            <div style={engTitleStyle}>Ashtakams</div>
                        </div>
                    </div>

                    {/* CARD 6: LISTS */}
                    <div
                        className="category-card"
                        onClick={() => setIsListsPanelOpen(true)}
                        style={{
                            background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#9333ea18',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <div style={{ color: '#9333ea' }}>
                                <BookOpen size={30} />
                            </div>
                        </div>
                        <div>
                            <div style={{ ...titleStyle, fontSize: '0.98rem' }}>ପୁସ୍ତକ ଓ ଗ୍ରନ୍ଥ</div>
                            <div style={engTitleStyle}>Books</div>
                        </div>
                    </div>

                    {/* CARD 7: SINGERS */}
                    <div
                        className="category-card"
                        onClick={() => setIsSingerPanelOpen(true)}
                        style={{
                            background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#0d948818',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <div style={{ color: '#0d9488' }}>
                                <Mic size={30} />
                            </div>
                        </div>
                        <div>
                            <div style={{ ...titleStyle, fontSize: '0.98rem' }}>ଗାୟକ / କଣ୍ଠଶିଳ୍ପୀ</div>
                            <div style={engTitleStyle}>Singers</div>
                        </div>
                    </div>

                    {/* CARD 8: HISTORY */}
                    <div
                        className="category-card"
                        onClick={() => {
                            setActiveTab('songs');
                            setSearchQuery('Recent');
                        }}
                        style={{
                            background: 'linear-gradient(135deg, #fefce8 0%, #fef08a 100%)',
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#ca8a0418',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <div style={{ color: '#ca8a04' }}>
                                <History size={30} />
                            </div>
                        </div>
                        <div>
                            <div style={{ ...titleStyle, fontSize: '0.98rem' }}>ଶ୍ରବଣ ଇତିହାସ</div>
                            <div style={engTitleStyle}>History</div>
                        </div>
                    </div>

                    {/* CARD 9: SETTINGS */}
                    <div
                        className="category-card"
                        onClick={() => setIsSettingsPanelOpen(true)}
                        style={{
                            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#47556918',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <div style={{ color: '#475569' }}>
                                <Settings size={30} />
                            </div>
                        </div>
                        <div>
                            <div style={{ ...titleStyle, fontSize: '0.98rem' }}>ସେଟିଂସ୍</div>
                            <div style={engTitleStyle}>Settings</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderTempleSongsList = () => {
        return (
            <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '3rem' }}>
                {/* Header Banner */}
                <div style={{
                    background: isNightMode
                        ? 'linear-gradient(135deg, rgba(234, 88, 12, 0.15) 0%, rgba(30, 41, 59, 0.7) 100%)'
                        : 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
                    borderRadius: '16px',
                    padding: '1.1rem 1.3rem',
                    marginBottom: '1.25rem',
                    border: isNightMode ? '1px solid rgba(234, 88, 12, 0.3)' : '1px solid #fed7aa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <div style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '12px',
                            background: '#ea580c',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 10px rgba(234, 88, 12, 0.35)'
                        }}>
                            <TempleIcons.TempleShikhara size={28} />
                        </div>
                        <div>
                            <div style={{
                                fontSize: '1.2rem',
                                fontWeight: 900,
                                fontFamily: 'var(--font-odia-sans)',
                                color: isNightMode ? '#ffedd5' : '#7c2d12',
                                lineHeight: 1.2
                            }}>
                                ମନ୍ଦିର ନିତ୍ୟ ଆରତି ଓ ପ୍ରାର୍ଥନା
                            </div>
                            <div style={{
                                fontSize: '0.78rem',
                                color: isNightMode ? '#fdba74' : '#c2410c',
                                fontWeight: 700,
                                fontFamily: "'Outfit', sans-serif"
                            }}>
                                Daily Temple Songs (vsnectar Schedule)
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            backgroundColor: isNightMode ? 'rgba(34, 197, 94, 0.2)' : '#dcfce7',
                            color: isNightMode ? '#4ade80' : '#15803d',
                            fontFamily: "'Outfit', sans-serif"
                        }}>
                            16 ଉପଲବ୍ଧ
                        </span>
                        <span style={{
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            backgroundColor: isNightMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2',
                            color: isNightMode ? '#f87171' : '#b91c1c',
                            fontFamily: "'Outfit', sans-serif"
                        }}>
                            2 ଅନୁପଲବ୍ଧ
                        </span>
                        <button
                            onClick={() => {
                                if (activeTab === 'temple') {
                                    setActiveTab('songs');
                                } else {
                                    setSearchQuery('');
                                }
                            }}
                            style={{
                                border: 'none',
                                background: isNightMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
                                color: isNightMode ? '#cbd5e1' : '#475569',
                                padding: '5px 10px',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}
                        >
                            ✕ Clear
                        </button>
                    </div>
                </div>

                {/* 18 Songs List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {templeSongsResolved.map(item => {
                        const isAvailable = item.isAvailable && item.song;
                        const song = item.song;

                        return (
                            <div
                                key={item.order}
                                onClick={() => {
                                    if (isAvailable && song) {
                                        handleSelectSong(song);
                                    }
                                }}
                                style={{
                                    padding: '0.7rem 0.95rem',
                                    borderRadius: '12px',
                                    backgroundColor: !isAvailable
                                        ? (isNightMode ? 'rgba(30, 41, 59, 0.4)' : '#f8fafc')
                                        : (isNightMode ? '#1e293b' : '#ffffff'),
                                    opacity: isAvailable ? 1 : 0.52,
                                    cursor: isAvailable ? 'pointer' : 'not-allowed',
                                    border: !isAvailable
                                        ? (isNightMode ? '1px dashed rgba(255,255,255,0.12)' : '1px dashed #cbd5e1')
                                        : (isNightMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)'),
                                    boxShadow: isAvailable
                                        ? (isNightMode ? '0 3px 8px rgba(0,0,0,0.35)' : '0 2px 4px rgba(0,0,0,0.05)')
                                        : 'none',
                                    transition: isAvailable ? 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.85rem',
                                    userSelect: !isAvailable ? 'none' : 'auto'
                                }}
                                onMouseEnter={(e) => {
                                    if (isAvailable) {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = isNightMode
                                            ? '0 8px 20px rgba(0,0,0,0.5)'
                                            : '0 4px 12px rgba(0,0,0,0.1)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (isAvailable) {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = isNightMode
                                            ? '0 3px 8px rgba(0,0,0,0.35)'
                                            : '0 2px 4px rgba(0,0,0,0.05)';
                                    }
                                }}
                            >
                                {/* Order Number Badge */}
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    background: isAvailable
                                        ? (isNightMode ? 'rgba(234, 88, 12, 0.2)' : '#fff7ed')
                                        : (isNightMode ? 'rgba(255,255,255,0.05)' : '#e2e8f0'),
                                    color: isAvailable ? '#ea580c' : (isNightMode ? '#64748b' : '#94a3b8'),
                                    fontSize: '0.85rem',
                                    fontWeight: 900,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    fontFamily: "'Outfit', sans-serif"
                                }}>
                                    {String(item.order).padStart(2, '0')}
                                </div>

                                {/* Song Info */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                                        <div style={{
                                            fontSize: '1.05rem',
                                            fontWeight: 900,
                                            color: isAvailable
                                                ? (isNightMode ? '#f8fafc' : '#0f172a')
                                                : (isNightMode ? '#94a3b8' : '#64748b'),
                                            fontFamily: 'var(--font-odia-sans)',
                                            lineHeight: '1.35',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>
                                            {song ? getOdiaTitle(song) : item.odia}
                                        </div>
                                        {song?.verified && <CheckCircle2 size={15} color="#00a38d" style={{ flexShrink: 0 }} />}
                                    </div>
                                    <div style={{
                                        fontSize: '0.76rem',
                                        color: isAvailable
                                            ? (isNightMode ? '#38bdf8' : '#0284c7')
                                            : (isNightMode ? '#64748b' : '#94a3b8'),
                                        fontWeight: 600,
                                        fontFamily: "'Outfit', sans-serif",
                                        marginTop: '1px',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {item.eng}
                                    </div>
                                    <div style={{
                                        fontSize: '0.68rem',
                                        color: isNightMode ? '#64748b' : '#94a3b8',
                                        fontFamily: 'var(--font-odia-sans)',
                                        marginTop: '1px'
                                    }}>
                                        {song?.author || item.author}
                                    </div>
                                </div>

                                {/* Status / Audio Badge */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
                                    {isAvailable ? (
                                        <>
                                            {((song?.audioVersions?.length ?? 0) > 0 || song?.audioUrl) && (
                                                <div style={{
                                                    padding: '4px',
                                                    borderRadius: '6px',
                                                    backgroundColor: isNightMode ? 'rgba(168, 85, 247, 0.2)' : '#f3e8ff',
                                                    color: isNightMode ? '#d8b4fe' : '#7e22ce',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Mic size={13} strokeWidth={2.5} />
                                                </div>
                                            )}
                                            <span style={{
                                                fontSize: '0.72rem',
                                                padding: '2px 8px',
                                                borderRadius: '12px',
                                                background: isNightMode ? 'rgba(34, 197, 94, 0.15)' : '#dcfce7',
                                                color: isNightMode ? '#4ade80' : '#16a34a',
                                                fontWeight: 700,
                                                fontFamily: 'var(--font-odia-sans)'
                                            }}>
                                                ଉପଲବ୍ଧ
                                            </span>
                                        </>
                                    ) : (
                                        <span style={{
                                            fontSize: '0.7rem',
                                            padding: '2px 8px',
                                            borderRadius: '12px',
                                            background: isNightMode ? 'rgba(239, 68, 68, 0.15)' : '#fee2e2',
                                            color: isNightMode ? '#f87171' : '#dc2626',
                                            fontWeight: 700,
                                            fontFamily: 'var(--font-odia-sans)',
                                            border: isNightMode ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid #fecaca'
                                        }}>
                                            ଅନୁପଲବ୍ଧ (Missing)
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderSongContent = () => {
        if (!selectedSong) return null;

        const isNightMode = currentThemeKey === 'advaita';
        const cardBg = isNightMode ? '#1E293B' : '#ffffff';
        const textColor = isNightMode ? '#e2e8f0' : '#1e293b';
        const cardShadow = isNightMode
            ? '0 4px 14px rgba(0, 0, 0, 0.45)'
            : '0 3px 10px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)';
        const cardBorder = isNightMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)';

        if (!selectedSong.structuredContent) {
            return (
                <div id="song-content" style={{
                    background: cardBg,
                    padding: '2rem 1.5rem',
                    borderRadius: '8px',
                    boxShadow: cardShadow,
                    lineHeight: '1.9',
                    color: textColor,
                    fontFamily: "var(--font-odia-sans)",
                    fontSize: `${fontSize}px`,
                    border: cardBorder,
                    margin: '0',
                    width: '100%',
                    boxSizing: 'border-box',
                    textAlign: 'center'
                }}>
                    <div style={{ whiteSpace: 'pre-wrap', color: textColor, fontFamily: 'var(--font-odia-sans)' }}>{selectedSong.content}</div>
                </div>
            );
        }

        const { verses } = selectedSong.structuredContent;
        const isGita = selectedSong.category === 'Gita' || selectedSong.category === 'G' || selectedSong.id.startsWith('gita-') || selectedSong.id === 'song-gitamahatmya';

        if (viewMode === 'sequential') {
            return (
                <div id="song-content" style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '0', width: '100%', boxSizing: 'border-box' }}>
                    <div style={{
                        background: cardBg,
                        padding: '1.5rem 1.25rem',
                        borderRadius: '8px',
                        border: cardBorder,
                        boxShadow: cardShadow,
                        margin: '0',
                        textAlign: 'center',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>
                        {verses.map((verse, idx) => {
                            let speakerLine = '';
                            let mainLyric = verse.lyric;
                            const firstLineMatch = verse.lyric.match(/^([^\n]+)\n/);
                            if (firstLineMatch) {
                                let potentialSpeaker = firstLineMatch[1].trim();
                                let detectedKey = '';
                                if (potentialSpeaker.includes('ଭଗବାନୁବାଚ') || (potentialSpeaker.includes('ଶ୍ରୀଭଗବାନ') && (potentialSpeaker.includes('ଉବାଚ') || potentialSpeaker.length < 15))) {
                                    detectedKey = 'ଶ୍ରୀଭଗବାନୁବାଚ';
                                } else if (potentialSpeaker.includes('ଅର୍ଜୁନ ଉବାଚ') || potentialSpeaker === 'ଅର୍ଜୁନ' || potentialSpeaker === 'ଅର୍ଜୁନ ଉବାଚ') {
                                    detectedKey = 'ଅର୍ଜୁନ ଉବାଚ';
                                } else if (potentialSpeaker.includes('ସଞ୍ଜୟ ଉବାଚ') || potentialSpeaker === 'ସଞ୍ଜୟ' || (potentialSpeaker.includes('ସଞ୍ଜୟ') && potentialSpeaker.includes('ଉବାଚ'))) {
                                    detectedKey = 'ସଞ୍ଜୟ ଉବାଚ';
                                } else if (potentialSpeaker.includes('ଧୃତରାଷ୍ଟ୍ର ଉବାଚ') || (potentialSpeaker.includes('ଧୃତରାଷ୍ଟ୍ର') && potentialSpeaker.includes('ଉବାଚ'))) {
                                    detectedKey = 'ଧୃତରାଷ୍ଟ୍ର ଉବାଚ';
                                }
                                if (detectedKey) {
                                    speakerLine = detectedKey;
                                    mainLyric = verse.lyric.substring(firstLineMatch[0].length).trim();
                                }
                            }

                            return (
                                <div key={`lyric-${verse.id}`} style={{ marginBottom: idx === verses.length - 1 ? 0 : '1.5rem' }}>
                                    {speakerLine && (
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            background: isNightMode ? SPEAKER_MAP[speakerLine].color + '20' : SPEAKER_MAP[speakerLine].color + '15',
                                            color: SPEAKER_MAP[speakerLine].color,
                                            fontSize: '0.9rem',
                                            fontWeight: 800,
                                            marginBottom: '0.5rem',
                                            border: `1px solid ${SPEAKER_MAP[speakerLine].color}40`,
                                            fontFamily: 'var(--font-odia-sans)'
                                        }}>
                                            {SPEAKER_MAP[speakerLine].icon}
                                            {SPEAKER_MAP[speakerLine].label}
                                        </div>
                                    )}
                                    {(() => {
                                        const { lyricText, markerText } = getFormattedVerseDisplay(mainLyric, verse.id);
                                        return (
                                            <div style={{
                                                whiteSpace: 'pre-wrap',
                                                color: isNightMode ? '#e2e8f0' : '#111827',
                                                fontSize: speakerLine ? `${fontSize * 1.2}px` : `${fontSize * 1.1}px`,
                                                fontWeight: 400,
                                                fontFamily: 'var(--font-odia-sans)',
                                                lineHeight: '1.7'
                                            }}>
                                                {lyricText}{' '}
                                                <span style={{ whiteSpace: 'nowrap' }}>
                                                    {markerText}
                                                </span>
                                            </div>
                                        );
                                    })()}
                                </div>
                            );
                        })}
                    </div>
                    {verses.some(v => v.translation?.trim()) && (
                        <div style={{
                            background: cardBg,
                            padding: '1.5rem 1.25rem',
                            borderRadius: '8px',
                            border: cardBorder,
                            boxShadow: cardShadow,
                            margin: '0',
                            textAlign: 'left',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}>
                            <div style={{ fontSize: '1rem', color: isNightMode ? theme.accent : theme.color, fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '1px', textAlign: 'center' }}>ଅନୁବାଦ (Translation)</div>
                            {verses.map((verse, idx) => verse.translation?.trim() && (
                                <div key={`trans-${verse.id}`} style={{ marginBottom: idx === verses.length - 1 ? 0 : '1.5rem' }}>
                                    <div style={{ fontSize: '0.85rem', color: isNightMode ? '#94a3b8' : '#64748b', marginBottom: '0.25rem', fontWeight: 700 }}>
                                        {isGita ? `ଶ୍ଲୋକ ${toOdiaNumber(verse.id)}` : (() => {
                                            const rawLeading = verse.lyric?.match(/^\s*[\(\[\{]\s*(ଘୋଷା|ghosa|refrain|ଫଳଶ୍ରୁତି)\s*[\)\]\}]/i);
                                            const isGhosa = verse.id.toString().toLowerCase().includes('ghosa') || verse.id === '0' || verse.id === 0 || Boolean(rawLeading && /ଘୋଷା|ghosa|refrain/i.test(rawLeading[1]));
                                            const isPhalasruti = verse.id.toString().toLowerCase().includes('phalasruti') || Boolean(rawLeading && /ଫଳଶ୍ରୁତି/i.test(rawLeading[1]));
                                            return isGhosa ? 'ଘୋଷା' : (isPhalasruti ? 'ଫଳଶ୍ରୁତି' : toOdiaNumber(verse.id));
                                        })()}
                                    </div>
                                    <div style={{ color: isNightMode ? '#cbd5e1' : '#334155', fontSize: `${fontSize}px`, fontFamily: 'var(--font-odia-sans)', fontWeight: 500, lineHeight: '1.6' }}>{verse.translation}</div>
                                    {(() => {
                                        const baseAudioUrl = ttsVoiceGender === 'male'
                                            ? (verse.translationAudioMaleUrl || (verse.translationAudioUrl ? verse.translationAudioUrl.replace(/\.mp3$/, '_male.mp3') : undefined))
                                            : (verse.translationAudioUrl || (verse.translationAudioMaleUrl ? verse.translationAudioMaleUrl.replace(/_male\.mp3$/, '.mp3') : undefined));

                                        const audioUrl = baseAudioUrl;
                                        if (!audioUrl) return null;
                                        const isCurrent = playingTtsVerseId === verse.id;
                                        return (
                                            <div style={{ marginTop: '0.65rem' }}>
                                                {isCurrent ? (
                                                    <div style={{
                                                        display: 'inline-flex',
                                                        flexDirection: 'column',
                                                        gap: '4px'
                                                    }}>
                                                        <div style={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '5px 12px',
                                                            borderRadius: '20px',
                                                            border: '1.5px solid #0284c7',
                                                            backgroundColor: isNightMode ? 'rgba(56, 189, 248, 0.15)' : '#f0f9ff'
                                                        }}>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleToggleTts(verse.id, audioUrl);
                                                                }}
                                                                style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '6px',
                                                                    background: 'none',
                                                                    border: 'none',
                                                                    color: isNightMode ? '#38bdf8' : '#0284c7',
                                                                    fontSize: '13px',
                                                                    fontFamily: 'var(--font-odia-sans)',
                                                                    fontWeight: 700,
                                                                    cursor: 'pointer',
                                                                    padding: 0
                                                                }}
                                                            >
                                                                {isTtsPaused ? (
                                                                    <Play size={14} fill="currentColor" />
                                                                ) : (
                                                                    <div style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '2px', height: '12px' }}>
                                                                        <span style={{ width: '2.5px', height: '10px', backgroundColor: 'currentColor', borderRadius: '1px', animation: 'ttsWave 0.8s ease-in-out infinite' }} />
                                                                        <span style={{ width: '2.5px', height: '14px', backgroundColor: 'currentColor', borderRadius: '1px', animation: 'ttsWave 0.8s ease-in-out 0.2s infinite' }} />
                                                                        <span style={{ width: '2.5px', height: '8px', backgroundColor: 'currentColor', borderRadius: '1px', animation: 'ttsWave 0.8s ease-in-out 0.4s infinite' }} />
                                                                    </div>
                                                                )}
                                                                <span>{isTtsBuffering ? 'ଲୋଡ୍ ହେଉଛି...' : (isTtsPaused ? 'ଚଲାନ୍ତୁ' : 'ବନ୍ଦ କରନ୍ତୁ')}</span>
                                                            </button>
                                                            <span style={{ fontSize: '11px', color: isNightMode ? '#94a3b8' : '#64748b', fontFamily: 'monospace' }}>
                                                                {formatTtsTime(ttsProgress.currentTime)} / {formatTtsTime(ttsProgress.duration)}
                                                            </span>
                                                            <button
                                                                onClick={handleToggleTtsSpeed}
                                                                title="ପଢ଼ିବା ବେଗ (Speed)"
                                                                style={{
                                                                    padding: '1px 6px',
                                                                    borderRadius: '8px',
                                                                    border: isNightMode ? '1px solid #334155' : '1px solid #cbd5e1',
                                                                    backgroundColor: isNightMode ? '#1e293b' : '#ffffff',
                                                                    color: isNightMode ? '#38bdf8' : '#0284c7',
                                                                    fontSize: '11px',
                                                                    fontWeight: 700,
                                                                    cursor: 'pointer'
                                                                }}
                                                            >
                                                                {ttsSpeed}x
                                                            </button>
                                                            <button
                                                                onClick={handleStopTts}
                                                                title="Stop"
                                                                style={{ background: 'none', border: 'none', color: isNightMode ? '#94a3b8' : '#64748b', cursor: 'pointer', padding: 0 }}
                                                            >
                                                                <VolumeX size={14} />
                                                            </button>
                                                        </div>
                                                        <div style={{ width: '100%', maxWidth: '200px', height: '2.5px', borderRadius: '2px', backgroundColor: isNightMode ? '#334155' : '#e2e8f0', overflow: 'hidden' }}>
                                                            <div style={{ height: '100%', width: `${ttsProgress.duration > 0 ? (ttsProgress.currentTime / ttsProgress.duration) * 100 : 0}%`, backgroundColor: '#0284c7', transition: 'width 0.1s linear' }} />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleToggleTts(verse.id, audioUrl);
                                                        }}
                                                        title="ଅନୁବାଦ ଶୁଣନ୍ତୁ (Listen to Translation)"
                                                        aria-label="ଅନୁବାଦ ଶୁଣନ୍ତୁ"
                                                        style={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            width: '32px',
                                                            height: '32px',
                                                            borderRadius: '50%',
                                                            border: isNightMode ? '1.5px solid rgba(56, 189, 248, 0.45)' : '1.5px solid #0284c7',
                                                            background: isNightMode
                                                                ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(14, 165, 233, 0.08) 100%)'
                                                                : 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                                                            color: isNightMode ? '#38bdf8' : '#0284c7',
                                                            cursor: 'pointer',
                                                            boxShadow: isNightMode ? '0 2px 6px rgba(0, 0, 0, 0.3)' : '0 2px 6px rgba(2, 132, 199, 0.16)',
                                                            transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                            padding: 0
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.transform = 'scale(1.12)';
                                                            e.currentTarget.style.boxShadow = isNightMode
                                                                ? '0 4px 12px rgba(56, 189, 248, 0.35)'
                                                                : '0 4px 12px rgba(2, 132, 199, 0.28)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.transform = 'scale(1)';
                                                            e.currentTarget.style.boxShadow = isNightMode
                                                                ? '0 2px 6px rgba(0, 0, 0, 0.3)'
                                                                : '0 2px 6px rgba(2, 132, 199, 0.16)';
                                                        }}
                                                    >
                                                        <Volume2 size={16} strokeWidth={2.2} />
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div id="song-content" style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', boxSizing: 'border-box' }}>
                {selectedSong.description && (
                    <div style={{
                        background: cardBg,
                        padding: '1rem 1.25rem',
                        borderRadius: '8px',
                        border: cardBorder,
                        boxShadow: cardShadow,
                        textAlign: 'center',
                        fontSize: '0.95rem',
                        color: isNightMode ? '#e2e8f0' : '#334155',
                        fontWeight: 600,
                        fontFamily: 'var(--font-odia-sans)'
                    }}>
                        {selectedSong.description}
                    </div>
                )}

                {verses.map((verse) => {
                    // Check for speaker
                    let speakerLine = '';
                    let mainLyric = verse.lyric;

                    const firstLineMatch = verse.lyric.match(/^([^\n]+)\n/);
                    if (firstLineMatch) {
                        let potentialSpeaker = firstLineMatch[1].trim();
                        let detectedKey = '';

                        if (potentialSpeaker.includes('ଭଗବାନୁବାଚ') || (potentialSpeaker.includes('ଶ୍ରୀଭଗବାନ') && (potentialSpeaker.includes('ଉବାଚ') || potentialSpeaker.length < 15))) {
                            detectedKey = 'ଶ୍ରୀଭଗବାନୁବାଚ';
                        } else if (potentialSpeaker.includes('ଅର୍ଜୁନ ଉବାଚ') || potentialSpeaker === 'ଅର୍ଜୁନ' || potentialSpeaker === 'ଅର୍ଜୁନ ଉବାଚ') {
                            detectedKey = 'ଅର୍ଜୁନ ଉବାଚ';
                        } else if (potentialSpeaker.includes('ସଞ୍ଜୟ ଉବାଚ') || potentialSpeaker === 'ସଞ୍ଜୟ' || (potentialSpeaker.includes('ସଞ୍ଜୟ') && potentialSpeaker.includes('ଉବାଚ'))) {
                            detectedKey = 'ସଞ୍ଜୟ ଉବାଚ';
                        } else if (potentialSpeaker.includes('ଧୃତରାଷ୍ଟ୍ର ଉବାଚ') || (potentialSpeaker.includes('ଧୃତରାଷ୍ଟ୍ର') && potentialSpeaker.includes('ଉବାଚ'))) {
                            detectedKey = 'ଧୃତରାଷ୍ଟ୍ର ଉବାଚ';
                        }

                        if (detectedKey) {
                            speakerLine = detectedKey;
                            mainLyric = verse.lyric.substring(firstLineMatch[0].length).trim();
                        }
                    }

                    const rawLeading = verse.lyric?.match(/^\s*[\(\[\{]\s*(ଘୋଷା|ghosa|refrain|ଫଳଶ୍ରୁତି)\s*[\)\]\}]/i);
                    const isGhosa = verse.id.toString().toLowerCase().includes('ghosa') ||
                        verse.id === '0' || verse.id === 0 ||
                        Boolean(rawLeading && /ଘୋଷା|ghosa|refrain/i.test(rawLeading[1]));
                    const isPhalasruti = verse.id.toString().toLowerCase().includes('phalasruti') ||
                        Boolean(rawLeading && /ଫଳଶ୍ରୁତି/i.test(rawLeading[1]));

                    const displayVerseNum = isGita
                        ? `(ଶ୍ଲୋକ ${toOdiaNumber(verse.id)})`
                        : isGhosa
                            ? '(ଘୋଷା)'
                            : isPhalasruti
                                ? '(ଫଳଶ୍ରୁତି)'
                                : `(${toOdiaNumber(verse.id)})`;

                    return (
                        <div
                            key={verse.id}
                            style={{
                                background: cardBg,
                                padding: '1.25rem 1.25rem',
                                borderRadius: '8px',
                                border: cardBorder,
                                boxShadow: cardShadow,
                                width: '100%',
                                boxSizing: 'border-box',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                color: isNightMode ? '#94a3b8' : '#475569',
                                marginBottom: '0.75rem',
                                textAlign: 'center'
                            }}>
                                {displayVerseNum}
                            </div>

                            {speakerLine && (
                                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        background: isNightMode ? SPEAKER_MAP[speakerLine].color + '20' : SPEAKER_MAP[speakerLine].color + '15',
                                        color: SPEAKER_MAP[speakerLine].color,
                                        fontSize: '0.9rem',
                                        fontWeight: 800,
                                        border: `1px solid ${SPEAKER_MAP[speakerLine].color}40`,
                                        fontFamily: 'var(--font-odia-sans)'
                                    }}>
                                        {SPEAKER_MAP[speakerLine].icon}
                                        {SPEAKER_MAP[speakerLine].label}
                                    </div>
                                </div>
                            )}

                            {(() => {
                                const { lyricText, markerText } = getFormattedVerseDisplay(mainLyric, verse.id);
                                return (
                                    <div style={{
                                        whiteSpace: 'pre-wrap',
                                        color: verse.status ? getStatusColor(verse.status) : (isNightMode ? '#fff' : getStatusColor(selectedSong.status, selectedSong.verified)),
                                        fontSize: speakerLine ? `${fontSize * 1.25}px` : `${fontSize * 1.15}px`,
                                        fontWeight: 600,
                                        fontFamily: 'var(--font-odia-sans)',
                                        textAlign: 'center',
                                        lineHeight: '1.7',
                                        marginBottom: (verse.translation && verse.translation.trim()) || (viewMode === 'word-to-word' && verse.wordMeanings && verse.wordMeanings.length > 0) ? '1.25rem' : '0'
                                    }}>
                                        {lyricText}{' '}
                                        <span style={{ whiteSpace: 'nowrap' }}>
                                            {markerText}
                                        </span>
                                    </div>
                                );
                            })()}

                            {viewMode === 'word-to-word' && verse.wordMeanings && verse.wordMeanings.length > 0 && (
                                <div style={{
                                    margin: '1.25rem 0',
                                    padding: '1rem 1.25rem',
                                    background: isNightMode ? '#0f172a' : '#ffffff',
                                    borderRadius: '8px',
                                    border: `1px dashed ${isNightMode ? '#334155' : '#cbd5e1'}`,
                                    textAlign: 'left'
                                }}>
                                    <div style={{ lineHeight: '1.8', fontSize: `${fontSize * 0.9}px`, color: isNightMode ? '#cbd5e1' : '#334155' }}>
                                        {verse.wordMeanings.map((wm, i) => (
                                            <React.Fragment key={i}>
                                                <span style={{ fontWeight: 700, color: isNightMode ? theme.accent : theme.color }}>{wm.word}</span> — {wm.meaning}{i < verse.wordMeanings!.length - 1 ? '; ' : ''}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {verse.translation && verse.translation.trim() !== '' && (
                                <div style={{
                                    color: isNightMode ? '#cbd5e1' : '#334155',
                                    fontSize: `${fontSize}px`,
                                    fontFamily: 'var(--font-odia-sans)',
                                    fontWeight: 500,
                                    lineHeight: '1.6',
                                    textAlign: 'left',
                                    marginTop: '1rem',
                                    padding: playingTtsVerseId === verse.id ? '0.75rem 1rem' : undefined,
                                    borderRadius: playingTtsVerseId === verse.id ? '12px' : undefined,
                                    backgroundColor: playingTtsVerseId === verse.id ? (isNightMode ? 'rgba(56, 189, 248, 0.12)' : 'rgba(2, 132, 199, 0.08)') : undefined,
                                    border: playingTtsVerseId === verse.id ? (isNightMode ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(2, 132, 199, 0.25)') : undefined,
                                    transition: 'all 0.3s ease'
                                }}>
                                    {verse.translation}
                                    {(() => {
                                        const baseAudioUrl = ttsVoiceGender === 'male'
                                            ? (verse.translationAudioMaleUrl || (verse.translationAudioUrl ? verse.translationAudioUrl.replace(/\.mp3$/, '_male.mp3') : undefined))
                                            : (verse.translationAudioUrl || (verse.translationAudioMaleUrl ? verse.translationAudioMaleUrl.replace(/_male\.mp3$/, '.mp3') : undefined));

                                        const audioUrl = baseAudioUrl;
                                        if (!audioUrl) return null;
                                        const isCurrent = playingTtsVerseId === verse.id;
                                        return (
                                            <div style={{ marginTop: '0.75rem' }}>
                                                {isCurrent ? (
                                                    <div style={{
                                                        display: 'inline-flex',
                                                        flexDirection: 'column',
                                                        gap: '6px'
                                                    }}>
                                                        <div style={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            flexWrap: 'wrap',
                                                            gap: '8px',
                                                            padding: '6px 14px',
                                                            borderRadius: '24px',
                                                            border: '1.5px solid #0284c7',
                                                            backgroundColor: isNightMode ? 'rgba(56, 189, 248, 0.15)' : '#f0f9ff',
                                                            boxShadow: '0 2px 10px rgba(2, 132, 199, 0.25)'
                                                        }}>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleToggleTts(verse.id, audioUrl);
                                                                }}
                                                                style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '7px',
                                                                    background: 'none',
                                                                    border: 'none',
                                                                    color: isNightMode ? '#38bdf8' : '#0284c7',
                                                                    fontSize: '13px',
                                                                    fontFamily: 'var(--font-odia-sans)',
                                                                    fontWeight: 700,
                                                                    cursor: 'pointer',
                                                                    padding: 0
                                                                }}
                                                            >
                                                                {isTtsPaused ? (
                                                                    <Play size={16} fill="currentColor" />
                                                                ) : (
                                                                    <div style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '2.5px', height: '14px' }}>
                                                                        <span style={{ width: '3px', height: '11px', backgroundColor: 'currentColor', borderRadius: '1.5px', animation: 'ttsWave 0.8s ease-in-out infinite' }} />
                                                                        <span style={{ width: '3px', height: '16px', backgroundColor: 'currentColor', borderRadius: '1.5px', animation: 'ttsWave 0.8s ease-in-out 0.2s infinite' }} />
                                                                        <span style={{ width: '3px', height: '9px', backgroundColor: 'currentColor', borderRadius: '1.5px', animation: 'ttsWave 0.8s ease-in-out 0.4s infinite' }} />
                                                                    </div>
                                                                )}
                                                                <span>{isTtsBuffering ? 'ଲୋଡ୍ ହେଉଛି...' : (isTtsPaused ? 'ଚଲାନ୍ତୁ' : 'ବନ୍ଦ କରନ୍ତୁ')}</span>
                                                            </button>

                                                            <span style={{
                                                                fontSize: '12px',
                                                                color: isNightMode ? '#94a3b8' : '#64748b',
                                                                fontFamily: 'monospace',
                                                                fontWeight: 600,
                                                                paddingLeft: '4px',
                                                                borderLeft: isNightMode ? '1px solid #334155' : '1px solid #cbd5e1'
                                                            }}>
                                                                {formatTtsTime(ttsProgress.currentTime)} / {formatTtsTime(ttsProgress.duration)}
                                                            </span>

                                                            <button
                                                                onClick={handleToggleTtsSpeed}
                                                                title="ପଢ଼ିବା ବେଗ ବଦଳାନ୍ତୁ (Change Speed)"
                                                                style={{
                                                                    padding: '2px 8px',
                                                                    borderRadius: '12px',
                                                                    border: isNightMode ? '1px solid #334155' : '1px solid #cbd5e1',
                                                                    backgroundColor: isNightMode ? '#1e293b' : '#ffffff',
                                                                    color: isNightMode ? '#38bdf8' : '#0284c7',
                                                                    fontSize: '11px',
                                                                    fontWeight: 700,
                                                                    cursor: 'pointer'
                                                                }}
                                                            >
                                                                {ttsSpeed}x
                                                            </button>

                                                            <button
                                                                onClick={handleStopTts}
                                                                title="ସମ୍ପୂର୍ଣ୍ଣ ବନ୍ଦ କରନ୍ତୁ (Stop)"
                                                                style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    background: 'none',
                                                                    border: 'none',
                                                                    color: isNightMode ? '#94a3b8' : '#64748b',
                                                                    cursor: 'pointer',
                                                                    padding: '2px'
                                                                }}
                                                            >
                                                                <VolumeX size={16} />
                                                            </button>
                                                        </div>

                                                        <div style={{
                                                            width: '100%',
                                                            maxWidth: '240px',
                                                            height: '3px',
                                                            borderRadius: '2px',
                                                            backgroundColor: isNightMode ? '#334155' : '#e2e8f0',
                                                            overflow: 'hidden'
                                                        }}>
                                                            <div style={{
                                                                height: '100%',
                                                                width: `${ttsProgress.duration > 0 ? (ttsProgress.currentTime / ttsProgress.duration) * 100 : 0}%`,
                                                                backgroundColor: '#0284c7',
                                                                transition: 'width 0.1s linear'
                                                            }} />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleToggleTts(verse.id, audioUrl);
                                                        }}
                                                        title="ଅନୁବାଦ ଶୁଣନ୍ତୁ (Listen to Translation)"
                                                        aria-label="ଅନୁବାଦ ଶୁଣନ୍ତୁ"
                                                        style={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            width: '34px',
                                                            height: '34px',
                                                            borderRadius: '50%',
                                                            border: isNightMode ? '1.5px solid rgba(56, 189, 248, 0.45)' : '1.5px solid #0284c7',
                                                            background: isNightMode
                                                                ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(14, 165, 233, 0.08) 100%)'
                                                                : 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                                                            color: isNightMode ? '#38bdf8' : '#0284c7',
                                                            cursor: 'pointer',
                                                            boxShadow: isNightMode ? '0 2px 6px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(2, 132, 199, 0.2)',
                                                            transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                            padding: 0
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.transform = 'scale(1.12)';
                                                            e.currentTarget.style.boxShadow = isNightMode
                                                                ? '0 4px 12px rgba(56, 189, 248, 0.35)'
                                                                : '0 4px 14px rgba(2, 132, 199, 0.32)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.transform = 'scale(1)';
                                                            e.currentTarget.style.boxShadow = isNightMode
                                                                ? '0 2px 6px rgba(0, 0, 0, 0.3)'
                                                                : '0 2px 8px rgba(2, 132, 199, 0.2)';
                                                        }}
                                                    >
                                                        <Volume2 size={17} strokeWidth={2.2} />
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };



    const renderChapterNavigation = () => {
        if (!selectedSong) return null;

        // Ensure this is a Gita chapter
        const currentIndex = gitaChapters.findIndex(c => c.id === selectedSong.id);
        if (currentIndex === -1) return null;

        const prevChapter = currentIndex > 0 ? gitaChapters[currentIndex - 1] : null;
        const nextChapter = currentIndex < gitaChapters.length - 1 ? gitaChapters[currentIndex + 1] : null;

        if (!prevChapter && !nextChapter) return null;

        const handleNav = (chapter: Resource) => {
            handleSelectSong(chapter);
        };

        const isNightMode = currentThemeKey === 'advaita';

        const btnStyleBase: React.CSSProperties = {
            background: isNightMode ? '#1e293b' : '#f4f5f8',
            color: isNightMode ? '#f1f5f9' : '#0f172a',
            border: `1px solid ${isNightMode ? '#334155' : 'rgba(0,0,0,0.1)'}`,
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
            transition: 'all 0.2s ease',
            letterSpacing: '0.5px'
        };

        return (
            <div style={{ padding: '1rem 0.5rem 0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    {prevChapter && (
                        <button
                            onClick={() => handleNav(prevChapter)}
                            style={btnStyleBase}
                            onMouseOver={(e) => { e.currentTarget.style.background = isNightMode ? '#3a2b1b' : '#dfc3a1'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = String(btnStyleBase.background); }}
                        >
                            <ArrowLeft size={18} strokeWidth={2.5} />
                            CHAPTER {prevChapter.title_english?.match(/\d+/)?.[0] || String(currentIndex)}
                        </button>
                    )}
                </div>
                <div>
                    {nextChapter && (
                        <button
                            onClick={() => handleNav(nextChapter)}
                            style={btnStyleBase}
                            onMouseOver={(e) => { e.currentTarget.style.background = isNightMode ? '#3a2b1b' : '#dfc3a1'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = String(btnStyleBase.background); }}
                        >
                            CHAPTER {nextChapter.title_english?.match(/\d+/)?.[0] || String(currentIndex + 2)}
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                    )}
                </div>
            </div>
        );
    };

    const renderReaderToolbelt = () => {
        const isNightMode = currentThemeKey === 'advaita';
        const glassBg = isNightMode ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.6)';
        const glassBorder = isNightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const textColor = isNightMode ? '#fff' : '#1e293b';

        return (
            <div
                style={{
                    position: 'fixed',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    zIndex: 2000,
                    padding: isToolbeltExpanded ? '12px 6px' : '6px',
                    background: isToolbeltExpanded ? glassBg : 'transparent',
                    backdropFilter: isToolbeltExpanded ? 'blur(16px)' : 'none',
                    WebkitBackdropFilter: isToolbeltExpanded ? 'blur(16px)' : 'none',
                    borderRadius: '30px',
                    border: isToolbeltExpanded ? `1px solid ${glassBorder}` : 'none',
                    boxShadow: isToolbeltExpanded ? '0 12px 40px rgba(0,0,0,0.15)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                    width: isToolbeltExpanded ? '50px' : '44px',
                }}
            >
                {/* Font Icon Toggle */}
                <button
                    onClick={() => setIsToolbeltExpanded(!isToolbeltExpanded)}
                    style={{
                        background: 'transparent',
                        color: textColor,
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        textShadow: isToolbeltExpanded ? 'none' : '0 1px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    <Type size={20} />
                </button>

                {isToolbeltExpanded && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <button
                            onClick={() => setFontSize(prev => Math.min(prev + 2, 32))}
                            style={{
                                background: isNightMode ? 'rgba(255,255,255,0.1)' : '#fff',
                                color: textColor,
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: `1px solid ${glassBorder}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}
                        >
                            <Plus size={16} />
                        </button>

                        <div style={{
                            color: textColor,
                            fontWeight: 900,
                            fontSize: '0.85rem',
                            fontFamily: 'var(--font-odia-sans)'
                        }}>
                            {toOdiaNumber(fontSize)}
                        </div>

                        <button
                            onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                            style={{
                                background: isNightMode ? 'rgba(255,255,255,0.1)' : '#fff',
                                color: textColor,
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: `1px solid ${glassBorder}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}
                        >
                            <Minus size={16} />
                        </button>
                    </div>
                )}
            </div>
        );
    };

    // ── FULL-SCREEN AUTHOR PAGE (only when no song is open) ───────────────────
    if (selectedAuthor && !selectedSong) {
        // Available songs from RESOURCES
        const availableSongs = songResources.filter(s => {
            const standardized = standardizeAuthorName(s.author || '');
            if (standardized.toLowerCase() === selectedAuthor.toLowerCase()) return true;
            return AUTHOR_CATALOG.find(a => a.name === selectedAuthor)?.catalog.some(cs =>
                (cs.id && cs.id === s.id) || isTitleMatch(cs.title_english, s.title_english || s.title, cs.title_odia, s.title_odia)
            ) || false;
        });

        // Full catalog for this author
        const catalogEntry = AUTHOR_CATALOG.find(a => a.name === selectedAuthor);
        const fullCatalog = catalogEntry?.catalog ?? [];

        // Build merged list: catalog songs enriched with resource match
        let mergedList = fullCatalog.map(cs => {
            // Try to find matching resource using ID or centralized fuzzy logic
            const resource = availableSongs.find(r =>
                (cs.id && r.id === cs.id) || isTitleMatch(cs.title_english, r.title_english || r.title, cs.title_odia, r.title_odia)
            );
            return { ...cs, resource };
        });

        // Also add any songs in resources NOT in catalog
        availableSongs.forEach(r => {
            const alreadyListed = mergedList.some(m =>
                (m.id && r.id === m.id) || isTitleMatch(m.title_english, r.title_english || r.title, m.title_odia, r.title_odia)
            );
            if (!alreadyListed) {
                mergedList.push({ id: r.id, title_english: r.title_english || r.title || '', title_odia: r.title_odia, resource: r });
            }
        });

        // --- FILTER: Only admins see "Coming Soon" (items without resource) ---
        if (!isAdmin) {
            mergedList = mergedList.filter(m => !!m.resource);
        }

        const availableCount = mergedList.filter(m => !!m.resource).length;
        const totalCount = mergedList.length;

        return (
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: theme.gradient, zIndex: 3000,
                display: 'flex', flexDirection: 'column', height: '100vh'
            }}>
                {/* Header */}
                <header style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '56px',
                    minHeight: '56px',
                    maxHeight: '56px',
                    padding: '0 0.75rem',
                    background: theme.gradient,
                    color: '#fff',
                    gap: '0.6rem',
                    flexShrink: 0,
                    boxSizing: 'border-box',
                    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.32), 0 6px 20px 0 rgba(0, 0, 0, 0.22)',
                    zIndex: 100
                }}>
                    <button
                        onClick={() => {
                            setSelectedAuthor(null);
                            setIsAuthorPanelOpen(true);
                            popBackHandler('selected-author');
                        }}
                        style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', flexShrink: 0, boxSizing: 'border-box' }}
                    >
                        <ArrowLeft size={24} strokeWidth={2.2} />
                    </button>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {selectedAuthor}
                        </div>
                        <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>
                            {isAdmin ? `${availableCount} of ${totalCount} songs available` : `${availableCount} songs available`}
                        </div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '12px', padding: '6px 12px', fontSize: '0.78rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Users size={14} />
                        <span>Author</span>
                    </div>
                </header>

                {/* Author Hero */}
                <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.12)', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px solid rgba(255,255,255,0.3)' }}>
                            <Users size={26} color="#fff" />
                        </div>
                        <div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff', lineHeight: 1.2 }}>{selectedAuthor}</div>
                            {catalogEntry?.odia && (
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-odia-sans)', marginTop: '2px' }}>{catalogEntry.odia}</div>
                            )}
                            {/* Progress bar */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                                <div style={{ width: '120px', height: '5px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
                                    <div style={{ width: `${totalCount > 0 ? (availableCount / totalCount) * 100 : 0}%`, height: '100%', background: '#4ade80', borderRadius: '10px', transition: 'width 0.5s ease' }} />
                                </div>
                                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>
                                    {availableCount}/{totalCount} Available
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Song List */}
                <main style={{ flex: 1, overflowY: 'auto', background: '#f8fafc', paddingBottom: '40px' }}>
                    {mergedList.map((song, idx) => {
                        const hasResource = !!song.resource;
                        return (
                            <div
                                key={idx}
                                onClick={() => {
                                    if (hasResource && song.resource) {
                                        setSelectedSong(song.resource);
                                        setIsDetailView(true);
                                    }
                                }}
                                style={{
                                    display: 'flex', alignItems: 'center',
                                    padding: '0.85rem 1.25rem',
                                    borderBottom: '1px solid #f1f5f9',
                                    cursor: hasResource ? 'pointer' : 'default',
                                    gap: '0.875rem',
                                    background: 'white',
                                    opacity: hasResource ? 1 : 0.55,
                                    transition: 'background 0.15s ease'
                                }}
                                onMouseEnter={e => { if (hasResource) e.currentTarget.style.background = '#f0fdf4'; }}
                                onMouseLeave={e => { if (hasResource) e.currentTarget.style.background = 'white'; }}
                            >
                                {/* Icon badge */}
                                <div style={{
                                    width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                                    background: hasResource ? `${theme.color}15` : '#f1f5f9',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <BookText size={18} color={hasResource ? theme.color : '#94a3b8'} />
                                </div>
                                {/* Title */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{
                                        fontSize: '0.95rem', fontWeight: 800,
                                        color: hasResource ? '#1e293b' : '#64748b',
                                        fontFamily: song.title_odia ? 'var(--font-odia-sans)' : 'inherit',
                                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                                    }}>
                                        {song.title_odia || song.title_english}
                                    </div>
                                    <div style={{
                                        fontSize: '0.72rem', fontWeight: 600, marginTop: '1px',
                                        color: hasResource ? theme.color : '#94a3b8',
                                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                                    }}>
                                        {hasResource ? song.title_english : '⏳ Coming Soon'}
                                    </div>
                                </div>
                                {/* Status indicator */}
                                {hasResource
                                    ? <CheckCircle2 size={16} color={theme.color} />
                                    : <ChevronRight size={15} color="#cbd5e1" />
                                }
                            </div>
                        );
                    })}
                </main>
            </div>
        );
    }

    if (selectedSong) {
        const isNightMode = currentThemeKey === 'advaita';
        const songBg = isNightMode ? '#0f172a' : (theme.songBg || theme.accent || '#00CBFE');
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: songBg, zIndex: 4000, display: 'flex', flexDirection: 'column', height: '100vh' }}>
                {renderReaderToolbelt()}
                <header style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '56px',
                    minHeight: '56px',
                    maxHeight: '56px',
                    padding: '0 0.75rem',
                    background: theme.gradient,
                    color: '#fff',
                    gap: '0.6rem',
                    flexShrink: 0,
                    boxSizing: 'border-box',
                    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.32), 0 6px 20px 0 rgba(0, 0, 0, 0.22)',
                    zIndex: 100
                }}>
                    <button
                        onClick={handleCloseDetail}
                        aria-label="ପଛକୁ ଫେରନ୍ତୁ (Back)"
                        style={{
                            background: 'rgba(255,255,255,0.18)',
                            color: '#fff',
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.22)',
                            cursor: 'pointer',
                            flexShrink: 0,
                            boxSizing: 'border-box',
                            transition: 'all 0.18s ease'
                        }}
                    >
                        <ArrowLeft size={22} strokeWidth={2.4} />
                    </button>
                    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{
                            fontSize: '1.14rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-odia-sans)',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            color: '#fff',
                            lineHeight: 1.4,
                            paddingTop: '4px',
                            paddingBottom: '1px'
                        }}>
                            {getOdiaTitle(selectedSong)}
                            {selectedSong.verified && <CheckCircle2 size={16} color="#4fd1c5" style={{ flexShrink: 0 }} />}
                        </div>
                        <div style={{
                            fontSize: '0.72rem',
                            opacity: 0.85,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            lineHeight: 1.2,
                            marginTop: '0px'
                        }}>
                            {(() => {
                                const authorName = (() => {
                                    const catalogMatch = AUTHOR_CATALOG.find(cat =>
                                        cat.catalog.some(catSong => isTitleMatch(catSong.title_english, selectedSong.title_english || selectedSong.title, catSong.title_odia, selectedSong.title_odia))
                                    );
                                    return catalogMatch ? catalogMatch.name : standardizeAuthorName(selectedSong.author || '');
                                })();
                                if (selectedSong.title_english && authorName && selectedSong.title_english.toLowerCase() !== authorName.toLowerCase()) {
                                    return `${selectedSong.title_english} • ${authorName}`;
                                }
                                return selectedSong.title_english || authorName || '';
                            })()}
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
                        {selectedSong.structuredContent?.verses?.some((v: any) => v.translationAudioUrl || v.translationAudioMaleUrl) && (
                            <button
                                onClick={handleToggleTtsVoice}
                                title={ttsVoiceGender === 'female' ? "ମହିଳା କଣ୍ଠସ୍ୱର (କ୍ଲିକ୍ କରି ପୁରୁଷ କରନ୍ତୁ)" : "ପୁରୁଷ କଣ୍ଠସ୍ୱର (କ୍ଲିକ୍ କରି ମହିଳା କରନ୍ତୁ)"}
                                aria-label="Toggle voice gender"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    padding: 0,
                                    position: 'relative',
                                    border: ttsVoiceGender === 'female'
                                        ? '1.5px solid rgba(244, 63, 94, 0.4)'
                                        : '1.5px solid rgba(234, 179, 8, 0.45)',
                                    background: '#ffffff',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
                                    cursor: 'pointer',
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.18s ease',
                                    userSelect: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-1px) scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                }}
                            >
                                <img
                                    key={ttsVoiceGender}
                                    src={ttsVoiceGender === 'female' ? '/icons/iskcon_mataji_avatar.jpg?v=4' : '/icons/iskcon_prabhu_avatar.jpg?v=4'}
                                    alt={ttsVoiceGender === 'female' ? 'Mataji Voice' : 'Prabhu Voice'}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center 35%',
                                        transform: 'scale(1.22)',
                                        transformOrigin: 'center 38%',
                                        display: 'block',
                                        pointerEvents: 'none'
                                    }}
                                />
                            </button>
                        )}
                        {selectedSong.structuredContent && (
                            (() => {
                                const availableModes = [
                                    { id: 'sequential', label: 'କେବଳ ଗୀତ', eng: 'Lyrics Only', icon: <BookText size={20} /> },
                                    ...(selectedSong.structuredContent.verses.some((v: any) => v.translation?.trim()) ? [{ id: 'combined', label: 'ଗୀତ + ଅନୁବାଦ', eng: 'Combined', icon: <BookOpen size={20} /> }] : []),
                                    ...(selectedSong.structuredContent.verses.some((v: any) => (v.wordMeanings?.length ?? 0) > 0) ? [{ id: 'word-to-word', label: 'ଶବ୍ଦାର୍ଥ', eng: 'Word Meaning', icon: <BookA size={20} /> }] : [])
                                ];
                                const currentIndex = availableModes.findIndex(m => m.id === viewMode);
                                const currentMode = availableModes[currentIndex !== -1 ? currentIndex : 0];

                                const handleToggleMode = () => {
                                    const nextIndex = (currentIndex + 1) % availableModes.length;
                                    setViewMode(availableModes[nextIndex].id as ViewMode);
                                };

                                // If only 1 mode is available, don't show the toggle button at all
                                if (availableModes.length <= 1) return null;

                                return (
                                    <button
                                        onClick={handleToggleMode}
                                        title={`Current: ${currentMode.eng}. Click to change view.`}
                                        style={{
                                            background: 'rgba(255,255,255,0.18)',
                                            color: '#fff',
                                            borderRadius: '10px',
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid rgba(255,255,255,0.22)',
                                            cursor: 'pointer',
                                            boxSizing: 'border-box',
                                            transition: 'all 0.18s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-1px)';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.28)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                                        }}
                                    >
                                        {currentMode.icon}
                                    </button>
                                );
                            })()
                        )}
                    </div>
                </header>
                <main
                    ref={mainScrollRef as any}
                    style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '8px 8px 8px',
                        background: songBg,
                        boxSizing: 'border-box',
                        width: '100%'
                    }}
                >
                    <div style={{ width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
                        {renderSongContent()}
                        {renderChapterNavigation()}
                    </div>
                </main>
                <div style={{
                    width: '100%',
                    position: 'relative',
                    zIndex: 1001,
                    flexShrink: 0,
                    background: 'transparent'
                }}>
                    <div style={{ margin: '0 auto', width: '100%', position: 'relative' }}>
                        {/* 1. Background Music Popup (Higher float) - Only shown in lyric section if actively playing */}
                        {activeSong && selectedSong?.id !== activeSong.id && isPlaying && (
                            <div style={{
                                position: 'fixed',
                                bottom: '150px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '92%',
                                maxWidth: '500px',
                                zIndex: 1002
                            }}>
                                <CompactAudioBar />
                            </div>
                        )}

                        {/* 2. Original Song Bar (Fixed Bottom) */}
                        <AudioPlayer songOverride={selectedSong || undefined} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: isNightMode ? '#0f172a' : '#f8fafc', overflow: 'hidden' }}>
            <style>{`
                /* KILL THE BIG DEFAULT BARS Globally */
                html, body {
                    overflow: hidden;
                    height: 100%;
                    margin: 0;
                }
                
                /* THE "SMALL BAR" (Discrete 2px scrollbar) */
                * {
                    scrollbar-width: thin; /* Firefox */
                    scrollbar-color: #cbd5e1 transparent; /* Firefox thumb & track */
                }
                
                *::-webkit-scrollbar {
                    width: 2px; /* Very thin - "small bar" */
                }
                
                *::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                *::-webkit-scrollbar-thumb {
                    background: #cbd5e1; /* Subtle gray thumb as in snap */
                    border-radius: 10px;
                }
                
                *::-webkit-scrollbar-thumb:hover {
                    background: ${theme.color}A0;
                }

                @media (min-width: 920px) {
                    .letter-indicator-badge {
                        opacity: 1 !important;
                        visibility: visible !important;
                        transform: scale(1) !important;
                    }
                }

                .gita-card {
                    padding: 1rem 1.25rem 1rem 1rem;
                    border-radius: 20px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
                    cursor: pointer;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    border: 1px solid transparent;
                    position: relative;
                }

                .gita-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }

                .gita-card .icon-badge {
                    background: rgba(255, 255, 255, 0.2);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .gita-card .text-content {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    flex-grow: 1;
                    min-width: 0;
                }

                .gita-card .chapter-overline {
                    font-size: 0.70rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.85);
                    letter-spacing: 0.05em;
                }

                .gita-card .chapter-title {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: #ffffff;
                    font-family: var(--font-odia-sans);
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    line-height: 1.2;
                }

                .gita-card .arrow-icon {
                    flex-shrink: 0;
                    color: rgba(255, 255, 255, 0.6);
                    transition: transform 0.2s ease, color 0.2s ease;
                }

                .gita-card:hover .arrow-icon {
                    transform: translateX(4px);
                    color: #ffffff;
                }

                .category-card {
                    padding: 0.9rem 1.15rem;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    min-width: 190px;
                    flex: 1 1 calc(33.333% - 16px);
                    max-width: calc(33.333% - 11px);
                    height: 90px;
                    cursor: pointer;
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
                    transition: all 0.25s ease;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid rgba(241, 245, 249, 0.9);
                    flex-shrink: 0;
                    box-sizing: border-box;
                }

                @media (max-width: 820px) {
                    .category-card {
                        flex: 1 1 calc(50% - 12px);
                        max-width: calc(50% - 8px);
                        min-width: 140px;
                        padding: 0.8rem 1rem;
                        gap: 12px;
                        height: 84px;
                    }
                }

                @media (max-width: 480px) {
                    .category-card {
                        flex: 1 1 100%;
                        max-width: 100%;
                        height: 78px;
                    }
                }

                .category-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
                }
            `}</style>
            {activeTab === 'badadanda' ? (
                renderBadadandaHeader()
            ) : activeTab === 'temple' ? (
                renderTempleBlinkitHeader()
            ) : (
                <header style={{
                display: 'flex',
                alignItems: 'center',
                height: '56px',
                minHeight: '56px',
                maxHeight: '56px',
                padding: '0 0.75rem',
                background: theme.gradient,
                color: '#fff',
                gap: '0.6rem',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                flexShrink: 0,
                boxSizing: 'border-box',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.32), 0 6px 20px 0 rgba(0, 0, 0, 0.22)'
            }}>
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-drawer'))}
                    aria-label="ମୁଖ୍ୟ ମେନୁ (Menu)"
                    style={{
                        background: 'rgba(255, 255, 255, 0.16)',
                        color: '#fff',
                        borderRadius: '10px',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(255, 255, 255, 0.22)',
                        cursor: 'pointer',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.18s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.24), inset 0 1px 1px rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'translateY(1px)';
                        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 3px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                >
                    <Menu size={20} />
                </button>
                <style>{`
                    @keyframes fadeInScale {
                        from { opacity: 0; transform: scale(0.5); }
                        to { opacity: 1; transform: scale(1); }
                    }
                `}</style>
                <div className="modern-searchbar-wrap" style={{
                    flex: 1,
                    minWidth: 0,
                    position: 'relative',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    boxSizing: 'border-box'
                }}>
                    {error && (
                        <div style={{
                            position: 'absolute',
                            top: '-18px',
                            left: '0',
                            fontSize: '0.68rem',
                            color: '#ff4444',
                            opacity: 0.9
                        }}>
                            {error}
                        </div>
                    )}
                    <Search size={16} style={{ position: 'absolute', left: '0.7rem', top: '50%', transform: 'translateY(-50%)', color: '#71717a', pointerEvents: 'none', zIndex: 2 }} />
                    <input
                        type="text"
                        placeholder="ଭଜନ କିମ୍ବା ଗୀତ ଖୋଜନ୍ତୁ..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#FF9933';
                            e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 153, 51, 0.25), 0 3px 8px rgba(0, 0, 0, 0.1)';
                        }}
                        onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                            e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.08)';
                        }}
                        style={{
                            width: '100%',
                            height: '40px',
                            lineHeight: '40px',
                            boxSizing: 'border-box',
                            padding: '0 4rem 0 2.15rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            backgroundColor: '#ffffff',
                            fontSize: '0.88rem',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
                            color: '#1a1a1a',
                            outline: 'none',
                            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                            fontFamily: 'var(--font-odia-sans)'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        right: '0.35rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px',
                        zIndex: 2
                    }}>
                        {loading && (
                            <div style={{ padding: '3px', display: 'flex', alignItems: 'center' }} title="ଅପଡେଟ୍ ହେଉଛି...">
                                <Spinner size={15} color="#FF9933" />
                            </div>
                        )}
                        <button
                            onClick={handleVoiceSearch}
                            title="ଭଏସ୍ ସର୍ଚ୍ଚ (Voice Search)"
                            style={{
                                background: isListening ? '#fef2f2' : 'transparent',
                                border: 'none',
                                color: isListening ? '#ef4444' : '#71717a',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                padding: '4px',
                                borderRadius: '6px',
                                transition: 'all 0.2s ease',
                                animation: isListening ? 'pulse-mic 1.5s infinite' : 'none'
                            }}
                            onMouseEnter={(e) => !isListening && (e.currentTarget.style.backgroundColor = '#f3f4f6')}
                            onMouseLeave={(e) => !isListening && (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                            <Mic size={15} />
                        </button>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                title="ସଫା କରନ୍ତୁ (Clear)"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#71717a',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    borderRadius: '6px',
                                    transition: 'background 0.2s ease'
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                                <X size={15} />
                            </button>
                        )}
                    </div>
                    <style>{`
                        @keyframes pulse-mic {
                            0% { transform: scale(1); opacity: 0.8; }
                            50% { transform: scale(1.15); opacity: 1; }
                            100% { transform: scale(1); opacity: 0.8; }
                        }
                    `}</style>
                </div>

                {/* Sacred Acharya Blessing Chakra Button */}
                <button
                    onClick={() => setIsSpinWheelOpen(true)}
                    title="ଦୈନିକ ଲେଖକ ଆଶୀର୍ବାଦ ଚକ୍ର (Daily Acharya Blessing Wheel)"
                    style={{
                        background: 'linear-gradient(135deg, #FFF176 0%, #FFB300 50%, #FF8F00 100%)',
                        color: '#4A148C',
                        borderRadius: '10px',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.5px solid rgba(255, 238, 88, 0.85)',
                        cursor: 'pointer',
                        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease',
                        position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px) scale(1.06)';
                        e.currentTarget.style.boxShadow = '0 5px 12px rgba(0, 0, 0, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.8)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.6)';
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'translateY(1px) scale(0.98)';
                        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TempleIcons.BlessingChakra size={25} color="#4A148C" />
                    </div>
                    <span style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: 'linear-gradient(135deg, #C2185B 0%, #880E4F 100%)',
                        color: '#FFF9C4',
                        fontSize: '8px',
                        fontWeight: 900,
                        padding: '1px 4.5px',
                        borderRadius: '5px',
                        border: '1.2px solid #FFE082',
                        fontFamily: 'var(--font-odia-sans)',
                        letterSpacing: '0.2px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        pointerEvents: 'none',
                        zIndex: 2
                    }}>
                        କୃପା
                    </span>
                </button>

                <button
                    onClick={() => setIsSettingsPanelOpen(true)}
                    title="ସେଟିଂସ୍ (Settings)"
                    aria-label="ସେଟିଂସ୍ (Settings)"
                    style={{
                        background: 'rgba(255, 255, 255, 0.16)',
                        color: '#fff',
                        borderRadius: '10px',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(255, 255, 255, 0.22)',
                        cursor: 'pointer',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.18s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.24), inset 0 1px 1px rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'translateY(1px)';
                        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 3px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                >
                    <SlidersHorizontal size={18} />
                </button>
                {isFilterMenuOpen && (
                    <>
                        <div
                            onClick={() => setIsFilterMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 90,
                                background: 'transparent'
                            }}
                        />
                        <div ref={filterMenuRef} style={{
                            position: 'absolute',
                            top: '70px',
                            right: '1rem',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(16px)',
                            padding: '0',
                            borderRadius: '28px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                            zIndex: 100,
                            color: '#1e293b',
                            minWidth: '240px',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            overflow: 'hidden',
                            animation: 'modalSlideUp 0.3s ease-out'
                        }}>
                            {/* SECTION: FILTERS */}
                            <div style={{ padding: '1rem 0 0.5rem' }}>
                                <div style={{
                                    padding: '0 1.25rem 0.5rem',
                                    fontSize: '0.7rem',
                                    fontWeight: 900,
                                    color: theme.color,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    opacity: 0.8
                                }}>Filters</div>

                                <FilterMenuItem
                                    icon={<BookA size={18} />}
                                    label="Alphabetical"
                                    odia="ଅକ୍ଷର ଅନୁକ୍ରମଣିକା"
                                    onClick={() => {
                                        setActiveTab('songs');
                                        setSearchQuery('');
                                        setIsFilterMenuOpen(false);
                                    }}
                                />
                                <div
                                    onClick={() => {
                                        setIsFilterMenuOpen(false);
                                        fetchAuthorStats();
                                        setIsAuthorPanelOpen(true);
                                    }}
                                    style={{
                                        margin: '0.5rem 1rem 0.75rem',
                                        padding: '0.85rem 1.1rem',
                                        borderRadius: '24px',
                                        background: '#f0fdf4',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '14px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        border: '1px solid #dcfce7',
                                        boxShadow: '0 4px 12px rgba(22, 163, 74, 0.08)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(22, 163, 74, 0.15)';
                                        e.currentTarget.style.backgroundColor = '#ecfdf5';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(22, 163, 74, 0.08)';
                                        e.currentTarget.style.backgroundColor = '#f0fdf4';
                                    }}
                                >
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '14px',
                                        background: '#dcfce7',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#16a34a'
                                    }}>
                                        <Users size={26} strokeWidth={2.5} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{
                                            fontSize: '1.05rem',
                                            fontWeight: 900,
                                            color: '#064e3b',
                                            fontFamily: 'var(--font-odia-sans)',
                                            lineHeight: '1.2'
                                        }}>ଲେଖକ ଅନୁସାରେ</span>
                                        <span style={{
                                            fontSize: '0.65rem',
                                            fontWeight: 800,
                                            color: '#64748b',
                                            letterSpacing: '0.5px',
                                            marginTop: '2px'
                                        }}>BY AUTHOR</span>
                                    </div>
                                </div>
                                <FilterMenuItem
                                    icon={<TempleIcons.TempleShikhara size={18} />}
                                    label="Temple Songs"
                                    odia="ମନ୍ଦିର ଗୀତ"
                                    onClick={() => {
                                        setActiveTab('temple');
                                        setSearchQuery('');
                                        setIsFilterMenuOpen(false);
                                    }}
                                />
                                <FilterMenuItem
                                    icon={<TempleIcons.NamasteIcon size={18} />}
                                    label="Pranama Mantras"
                                    odia="ପ୍ରଣାମ ମନ୍ତ୍ର"
                                    onClick={() => {
                                        setActiveTab('songs');
                                        setSearchQuery('Pranama');
                                        setIsFilterMenuOpen(false);
                                    }}
                                />
                                <FilterMenuItem
                                    icon={<Sparkles size={18} />}
                                    label="Ashtakams"
                                    odia="ଅଷ୍ଟକମ୍"
                                    onClick={() => {
                                        setActiveTab('songs');
                                        setSearchQuery('Ashtakam');
                                        setIsFilterMenuOpen(false);
                                    }}
                                />
                            </div>

                            <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '0.25rem 0' }} />

                            {/* SECTION: MORE */}
                            <div style={{ padding: '0.5rem 0 1rem' }}>
                                <div style={{
                                    padding: '0 1.25rem 0.5rem',
                                    fontSize: '0.7rem',
                                    fontWeight: 900,
                                    color: '#64748b',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    opacity: 0.8
                                }}>More</div>

                                <FilterMenuItem
                                    icon={<List size={18} />}
                                    label="Lists"
                                    odia="ତାଲିକା"
                                    onClick={() => alert('Lists feature coming soon!')}
                                />
                                <FilterMenuItem
                                    icon={<Mic size={18} />}
                                    label="Singers"
                                    odia="ଗାୟକ"
                                    onClick={() => {
                                        setActiveTab('songs');
                                        setSearchQuery('Singer');
                                        setIsFilterMenuOpen(false);
                                    }}
                                />
                                <FilterMenuItem
                                    icon={<History size={18} />}
                                    label="History"
                                    odia="ଇତିହାସ"
                                    onClick={() => {
                                        setActiveTab('songs');
                                        setSearchQuery('Recent');
                                        setIsFilterMenuOpen(false);
                                    }}
                                />
                                <FilterMenuItem
                                    icon={<Settings size={18} />}
                                    label="Settings"
                                    odia="ସେଟିଙ୍ଗସ୍"
                                    onClick={() => {
                                        setIsThemeListExpanded(!isThemeListExpanded);
                                    }}
                                />

                                {/* Sub-menu for Settings (Themes/Font) */}
                                {isThemeListExpanded && (
                                    <div style={{
                                        padding: '0.5rem 1rem',
                                        background: '#f8fafc',
                                        borderTop: '1px solid #f1f5f9',
                                        borderBottom: '1px solid #f1f5f9',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '12px',
                                        animation: 'fadeIn 0.3s ease'
                                    }}>
                                        {/* Font Size Control */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b' }}>Font Size</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <button onClick={() => setFontSize(f => Math.max(f - 2, 12))} style={{ border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', width: '24px', height: '24px' }}>-</button>
                                                <span style={{ fontSize: '0.8rem', fontWeight: 900, minWidth: '20px', textAlign: 'center' }}>{toOdiaNumber(fontSize)}</span>
                                                <button onClick={() => setFontSize(f => Math.min(f + 2, 32))} style={{ border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', width: '24px', height: '24px' }}>+</button>
                                            </div>
                                        </div>
                                        {/* Theme Preview */}
                                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                            {Object.entries(TATTVA_THEMES).map(([k, v]) => (
                                                <div
                                                    key={k}
                                                    onClick={() => handleSetTheme(k)}
                                                    style={{
                                                        width: '28px',
                                                        height: '28px',
                                                        borderRadius: '50%',
                                                        background: v.gradient,
                                                        border: currentThemeKey === k ? '2px solid white' : 'none',
                                                        boxShadow: currentThemeKey === k ? `0 0 0 2px ${v.color}` : 'none',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </header>
            )}
            <main
                ref={mainScrollRef}
                onScroll={() => {
                    if (isFilterMenuOpen) setIsFilterMenuOpen(false);
                }}
                style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: (activeTab === 'temple' || activeTab === 'badadanda') ? '0 0 100px' : '1rem 0 100px',
                    backgroundColor: isNightMode ? '#0f172a' : ((activeTab === 'temple' || activeTab === 'badadanda') ? '#ffffff' : '#f8fafc')
                }}>
                {activeLetter && sortedGroups.length > 0 && !searchQuery.trim() && (
                    <div
                        className="letter-indicator-badge"
                        style={{
                            position: 'fixed',
                            left: 'max(8px, calc(50% - 432px))',
                            top: '85px',
                            zIndex: 100,
                            pointerEvents: 'none',
                            transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), visibility 0.4s ease',
                            opacity: isLetterVisibleOnMobile ? 1 : 0,
                            visibility: isLetterVisibleOnMobile ? 'visible' : 'hidden',
                            transform: isLetterVisibleOnMobile ? 'scale(1)' : 'scale(0.8)'
                        }}
                    >
                        <div style={{
                            width: '36px',
                            height: '36px',
                            background: `linear-gradient(135deg, ${theme.color}, ${theme.color}CC)`,
                            color: '#fff',
                            borderRadius: '10px',
                            display: 'grid',
                            placeItems: 'center',
                            fontWeight: 950,
                            fontSize: '1.4rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            border: '1.5px solid rgba(255,255,255,0.4)',
                            backdropFilter: 'blur(8px)',
                            fontFamily: 'var(--font-odia-sans)',
                            lineHeight: 1
                        }}>
                            <span style={{ transform: 'translateY(3px)' }}>{activeLetter}</span>
                        </div>
                    </div>
                )}
                {activeTab === 'gita' && (
                    <>
                        {renderGitaDashboard()}
                        {renderFeaturedCategories()}
                    </>
                )}

                {activeTab === 'temple' && (
                    renderTempleBlinkitBody()
                )}

                {activeTab === 'badadanda' && (
                    renderBadadandaBody()
                )}

                {activeTab === 'songs' && (
                    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 0.75rem', paddingRight: searchQuery === 'Temple' ? '0.75rem' : '48px' }}>
                        {searchQuery === 'Temple' ? (
                            renderTempleSongsList()
                        ) : (
                            sortedGroups.map(letter => (
                            <div
                                key={letter}
                                ref={(el) => { sectionRefs.current[letter] = el; }}
                                className="song-section"
                                data-letter={letter}
                                style={{ marginBottom: '1.5rem' }}
                            >
                                <div>
                                    {groupedSongs[letter].map(song => (
                                        <div
                                            key={song.id}
                                            onClick={() => handleSelectSong(song)}
                                            style={{
                                                padding: '0.52rem 0.85rem',
                                                backgroundColor: isNightMode ? '#1e293b' : '#f4f5f8',
                                                borderRadius: '10px',
                                                marginBottom: '0.45rem',
                                                boxShadow: isNightMode
                                                    ? '0 3px 8px rgba(0,0,0,0.35)'
                                                    : '0 2px 4px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.1)',
                                                border: isNightMode
                                                    ? '1px solid rgba(255,255,255,0.08)'
                                                    : '1px solid rgba(0,0,0,0.06)',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = isNightMode
                                                    ? '0 8px 20px rgba(0,0,0,0.5)'
                                                    : '0 5px 5px -3px rgba(0,0,0,0.25), 0 4px 6px 0 rgba(0,0,0,0.18), 0 2px 10px 0 rgba(0,0,0,0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = isNightMode
                                                    ? '0 3px 8px rgba(0,0,0,0.35)'
                                                    : '0 2px 4px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.1)';
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.6rem' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.05rem', flex: 1, minWidth: 0 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', minWidth: 0, width: '100%' }}>
                                                        <div style={{
                                                            fontSize: '1.08rem',
                                                            fontWeight: 900,
                                                            color: isNightMode ? '#f8fafc' : '#0f172a',
                                                            fontFamily: 'var(--font-odia-sans)',
                                                            lineHeight: '1.45',
                                                            paddingTop: '5px',
                                                            paddingBottom: '1px',
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            minWidth: 0
                                                        }}>{getOdiaTitle(song)}</div>
                                                        {song.verified && <CheckCircle2 size={15} color="#00a38d" style={{ flexShrink: 0 }} />}
                                                    </div>
                                                    {(song.title_english || (song.title.match(/\(([^)]+)\)/)?.[1])) && (
                                                        <div style={{
                                                            fontSize: '0.78rem',
                                                            color: isNightMode ? '#38bdf8' : '#0284c7',
                                                            fontWeight: 600,
                                                            fontFamily: "'Outfit', sans-serif",
                                                            marginTop: '1px',
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis'
                                                        }}>{song.title_english || song.title.match(/\(([^)]+)\)/)?.[1]}</div>
                                                    )}
                                                </div>
                                                {((song.audioVersions?.length ?? 0) > 0 || song.audioUrl) && (
                                                    <div style={{
                                                        marginLeft: '0.4rem',
                                                        padding: '4px',
                                                        borderRadius: '6px',
                                                        backgroundColor: isNightMode ? 'rgba(168, 85, 247, 0.2)' : '#f3e8ff',
                                                        color: isNightMode ? '#d8b4fe' : '#7e22ce',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <Mic size={13} strokeWidth={2.5} />
                                                    </div>
                                                )}
                                            </div>
                                            {song.author && (
                                                <div style={{
                                                    fontSize: '0.7rem',
                                                    marginTop: '2px',
                                                    color: isNightMode ? '#94a3b8' : '#64748b',
                                                    fontFamily: 'var(--font-odia-sans)',
                                                    fontWeight: 600,
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}>
                                                    {song.author}
                                                </div>
                                            )}
                                            {searchQuery === 'Temple' && song.tags?.includes('Temple') && (
                                                <div style={{
                                                    position: 'absolute',
                                                    right: '-10px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    opacity: 0.05,
                                                    pointerEvents: 'none'
                                                }}>
                                                    <Sparkles size={60} color="#ea580c" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                    </div>
                )}
            </main>
            {/* Alphabet Sidebar - Only showing letters with songs for a clean list */}
            {activeTab === 'songs' && searchQuery !== 'Temple' && (
                <div style={{
                    position: 'fixed',
                    right: '12px',
                    top: '100px',
                    bottom: '100px',
                    width: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: 'transparent',
                    zIndex: 100,
                    pointerEvents: 'auto',
                    gap: '2px'
                }}>
                {sortedGroups.map(letter => {
                    return (
                        <div
                            key={letter}
                            onClick={() => scrollToSection(letter)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontWeight: 900,
                                color: currentThemeKey === 'default' ? '#1e293b' : theme.color,
                                height: '32px',
                                transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                                userSelect: 'none',
                                opacity: 1
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(-6px) scale(1.4)';
                                e.currentTarget.style.color = theme.color;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                                e.currentTarget.style.color = currentThemeKey === 'default' ? '#1e293b' : theme.color;
                            }}
                        >
                            {letter}
                        </div>
                    );
                })}
            </div>
            )}

            {/* FRIENDLY ODIA VOICE SEARCH OVERLAY */}
            {isListening && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    background: 'rgba(0,0,0,0.85)', color: 'white', display: 'flex',
                    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    zIndex: 2000, backdropFilter: 'blur(10px)', animation: 'fadeIn 0.3s ease'
                }}>
                    <div style={{
                        width: '130px', height: '130px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)', display: 'flex',
                        justifyContent: 'center', alignItems: 'center', marginBottom: '2.5rem',
                        border: '3px solid rgba(255,255,255,0.2)',
                        animation: 'pulse-mic-glow 1.5s infinite',
                        boxShadow: '0 0 50px rgba(255,0,0,0.2)'
                    }}>
                        <Mic size={56} color="#FF4444" />
                    </div>

                    <div style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '1rem', color: '#fff', letterSpacing: '1px' }}>
                        ଶୁଣୁଛି... (Listening)
                    </div>

                    <div style={{ fontSize: '1.25rem', color: '#ffca28', fontWeight: 600, opacity: 0.9, textAlign: 'center', padding: '0 2rem', lineHeight: '1.6' }}>
                        ଦୟାକରି ଗୀତର ନାମ କୁହନ୍ତୁ<br />
                        <span style={{ fontSize: '0.90rem', color: '#bbb', fontWeight: 400 }}>(Please say the song name)</span>

                    </div>

                    <button
                        onClick={() => setIsListening(false)}
                        style={{
                            marginTop: '4rem', padding: '1rem 3rem', borderRadius: '40px',
                            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white', fontWeight: 700, cursor: 'pointer', fontSize: '1rem',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                    >
                        ବାତିଲ୍ କରନ୍ତୁ (Cancel)
                    </button>

                    <style>{`
                        @keyframes pulse-mic-glow {
                            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.5); }
                            70% { transform: scale(1.1); box-shadow: 0 0 0 40px rgba(255, 68, 68, 0); }
                            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 68, 68, 0); }
                        }
                        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                    `}</style>
                </div>
            )}
            {/* Bottom Navigation */}
            <div style={{
                position: 'fixed',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--color-cream)',
                backdropFilter: 'blur(16px)',
                padding: '6px 8px',
                borderRadius: '24px',
                boxShadow: '0 8px 32px rgba(128, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                zIndex: 1000,
                border: '1px solid var(--color-maroon)20',
                maxWidth: '96vw',
                overflowX: 'auto',
                scrollbarWidth: 'none'
            }}>
                <button
                    onClick={() => {
                        setActiveTab('songs');
                        setSearchQuery('');
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        borderRadius: '16px',
                        border: 'none',
                        background: activeTab === 'songs' ? theme.color : 'transparent',
                        color: activeTab === 'songs' ? '#fff' : '#64748b',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontFamily: 'var(--font-odia-sans)',
                        flexShrink: 0
                    }}
                >
                    <BookText size={19} />
                    <span style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>ସମସ୍ତ ସଙ୍ଗୀତ</span>
                </button>
                <button
                    onClick={() => {
                        setActiveTab('gita');
                        setSearchQuery('');
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        borderRadius: '16px',
                        border: 'none',
                        background: activeTab === 'gita' ? theme.color : 'transparent',
                        color: activeTab === 'gita' ? '#fff' : '#64748b',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontFamily: 'var(--font-odia-sans)',
                        flexShrink: 0
                    }}
                >
                    <BookOpen size={19} />
                    <span style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>ଭଗବଦ୍ ଗୀତା</span>
                </button>
                <button
                    onClick={() => {
                        setActiveTab('temple');
                        setSearchQuery('');
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        borderRadius: '16px',
                        border: 'none',
                        background: activeTab === 'temple' ? theme.color : 'transparent',
                        color: activeTab === 'temple' ? '#fff' : '#64748b',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontFamily: 'var(--font-odia-sans)',
                        flexShrink: 0
                    }}
                >
                    <TempleIcons.TempleShikhara size={20} />
                    <span style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>ମନ୍ଦିର ଗୀତ</span>
                </button>
                <button
                    onClick={() => {
                        setActiveTab('badadanda');
                        setIsAuthorPanelOpen(false);
                        setIsSingerPanelOpen(false);
                        setIsListsPanelOpen(false);
                        setSearchQuery('');
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        borderRadius: '16px',
                        border: 'none',
                        background: activeTab === 'badadanda' ? theme.color : 'transparent',
                        color: activeTab === 'badadanda' ? '#fff' : '#64748b',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontFamily: 'var(--font-odia-sans)',
                        flexShrink: 0
                    }}
                >
                    <Landmark size={19} />
                    <span style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>ବଡ଼ଦାଣ୍ଡ</span>
                </button>
            </div>

            {/* ===== AUTHOR EXPLORER OVERLAY PANEL ===== */}
            {isAuthorPanelOpen && activeTab !== 'badadanda' && (
                <>
                    {/* Backdrop */}
                    <div
                        onClick={() => {
                            setIsAuthorPanelOpen(false);
                            popBackHandler('author-panel');
                        }}
                        style={{
                            position: 'fixed', inset: 0,
                            background: 'rgba(0,0,0,0.45)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 2000,
                            animation: 'fadeIn 0.25s ease'
                        }}
                    />
                    {/* Sliding Panel */}
                    <div style={{
                        position: 'fixed',
                        top: 0, right: 0, bottom: 0,
                        width: 'min(380px, 96vw)',
                        background: '#f8fafc',
                        zIndex: 2001,
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
                        animation: 'slideInRight 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                        {/* Panel Header */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            padding: '1.25rem 1.25rem 1rem',
                            background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                            color: 'white',
                            flexShrink: 0
                        }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '12px',
                                background: 'rgba(255,255,255,0.2)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Users size={22} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: 900, lineHeight: 1.2 }}>Author Explorer</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.85, fontFamily: 'var(--font-odia-sans)' }}>ଲେଖକ ଅନୁସାରେ ଖୋଜନ୍ତୁ</div>
                            </div>
                            <button
                                onClick={() => {
                                    setIsAuthorPanelOpen(false);
                                    popBackHandler('author-panel');
                                }}
                                style={{
                                    background: 'rgba(255,255,255,0.2)', border: 'none',
                                    color: 'white', width: '34px', height: '34px',
                                    borderRadius: '10px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', cursor: 'pointer', flexShrink: 0
                                }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Author List */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '0 1rem 1rem' }}>
                            {/* Summary Card (New) */}
                            {authorStats.length > 0 && (
                                <div style={{
                                    margin: '0.75rem 0 1rem',
                                    padding: '1rem',
                                    background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                                    borderRadius: '18px',
                                    border: '1.5px solid #16a34a15',
                                    boxShadow: '0 10px 25px rgba(22, 163, 74, 0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{
                                            width: '32px', height: '32px', borderRadius: '10px',
                                            background: '#16a34a', color: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            boxShadow: '0 4px 10px rgba(22, 163, 74, 0.2)'
                                        }}>
                                            <Mic size={18} />
                                        </div>
                                        <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#1e293b' }}>ସାମଗ୍ରିକ ସ୍ଥିତି (Overall Status)</div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <div style={{
                                            flex: 1, background: '#16a34a', color: 'white',
                                            padding: '10px', borderRadius: '14px',
                                            textAlign: 'center', boxShadow: '0 6px 15px rgba(22, 163, 74, 0.2)'
                                        }}>
                                            <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>{toOdiaNumber(authorStats.reduce((acc, s) => acc + s.count, 0))}</div>
                                            <div style={{ fontSize: '0.65rem', fontWeight: 700, opacity: 0.9 }}>Available Songs</div>
                                        </div>

                                        {isAdmin && (
                                            <div style={{
                                                flex: 1, background: '#f1f5f9', color: '#64748b',
                                                padding: '10px', borderRadius: '14px',
                                                textAlign: 'center', border: '1px solid #e2e8f0'
                                            }}>
                                                <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>{toOdiaNumber(authorStats.reduce((acc, s) => acc + (s.total - s.count), 0))}</div>
                                                <div style={{ fontSize: '0.65rem', fontWeight: 700 }}>Coming Soon</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {authorStats.length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
                                        <Users size={40} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                                        <div style={{ fontWeight: 600 }}>Loading authors...</div>
                                    </div>
                                ) : authorStats.map((stat: { author: string; count: number; total: number }, idx: number) => {
                                    const isActive = stat.count > 0;
                                    return (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                if (isActive) {
                                                    setSelectedAuthor(stat.author);
                                                    // We keep isAuthorPanelOpen(true) so that when we go back, 
                                                    // we are exactly where we left off in the explorer.
                                                }
                                            }}
                                            style={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                                padding: '1.2rem',
                                                background: 'white',
                                                borderRadius: '16px',
                                                cursor: isActive ? 'pointer' : 'default',
                                                border: '1px solid #f1f5f9',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                                                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                                opacity: isActive ? 1 : 0.7
                                            }}
                                            onMouseEnter={(e) => { if (isActive) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(22, 163, 74, 0.12)'; e.currentTarget.style.borderColor = '#16a34a40'; } }}
                                            onMouseLeave={(e) => { if (isActive) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = '#f1f5f9'; } }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                                <div style={{
                                                    backgroundColor: isActive ? '#16a34a' : '#f1f5f9',
                                                    color: isActive ? 'white' : '#94a3b8',
                                                    width: '32px', height: '32px',
                                                    borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: '0.85rem', fontWeight: 900, flexShrink: 0,
                                                    boxShadow: isActive ? '0 4px 10px rgba(22, 163, 74, 0.3)' : 'none'
                                                }}>{toOdiaNumber(idx + 1)}</div>
                                                <div>
                                                    <div style={{ fontSize: '0.95rem', fontWeight: 900, color: isActive ? '#1e293b' : '#64748b', letterSpacing: '-0.01em' }}>{stat.author}</div>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                                                        <div style={{
                                                            fontSize: '0.75rem',
                                                            color: isActive ? '#16a34a' : '#94a3b8',
                                                            fontWeight: 800,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '4px',
                                                            background: isActive ? '#f0fdf4' : '#f8fafc',
                                                            padding: '2px 8px',
                                                            borderRadius: '6px',
                                                            border: isActive ? '1px solid #dcfce7' : '1px solid #f1f5f9'
                                                        }}>
                                                            <CheckCircle2 size={12} />
                                                            {toOdiaNumber(stat.count)} Available
                                                        </div>
                                                        {stat.total > stat.count && isAdmin && (
                                                            <div style={{
                                                                fontSize: '0.75rem',
                                                                color: '#64748b',
                                                                fontWeight: 700,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '4px',
                                                                background: '#f8fafc',
                                                                padding: '2px 8px',
                                                                borderRadius: '6px',
                                                                border: '1px solid #f1f5f9'
                                                            }}>
                                                                <Circle size={12} strokeWidth={2.5} />
                                                                {toOdiaNumber(stat.total - stat.count)} Coming Soon
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {isActive
                                                ? <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a', boxShadow: '0 0 10px rgba(22,163,74,0.6)', flexShrink: 0 }} />
                                                : <ChevronRight size={16} color="#cbd5e1" />
                                            }
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* ===== SETTINGS PANEL (Snap Style) ===== */}
            {isSettingsPanelOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        onClick={() => {
                            setIsSettingsPanelOpen(false);
                            popBackHandler('settings-panel');
                        }}
                        style={{
                            position: 'fixed', inset: 0,
                            background: 'rgba(0,0,0,0.35)',
                            backdropFilter: 'blur(3px)',
                            zIndex: 2000,
                            animation: 'fadeIn 0.2s ease'
                        }}
                    />
                    {/* Sliding Panel */}
                    <div style={{
                        position: 'fixed',
                        top: 0, right: 0, bottom: 0,
                        width: 'min(340px, 96vw)',
                        background: 'white',
                        zIndex: 2001,
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
                        animation: 'slideInRight 0.32s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                        {/* Panel Header */}
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '1.25rem 1.25rem 1rem',
                            background: theme.gradient,
                            color: 'white',
                            flexShrink: 0
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <SlidersHorizontal size={20} />
                                <span style={{ fontSize: '1rem', fontWeight: 900 }}>Settings</span>
                            </div>
                            <button
                                onClick={() => {
                                    setIsSettingsPanelOpen(false);
                                    popBackHandler('settings-panel');
                                }}
                                style={{
                                    background: 'rgba(255,255,255,0.2)', border: 'none',
                                    color: 'white', width: '32px', height: '32px',
                                    borderRadius: '10px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', cursor: 'pointer'
                                }}
                            >
                                <X size={17} />
                            </button>
                        </div>

                        {/* Panel Body */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem' }}>

                            {/* ── THEME SECTION ── */}
                            <div style={{
                                background: '#fff',
                                borderRadius: '20px',
                                border: '1px solid #f1f5f9',
                                padding: '1.25rem',
                                marginBottom: '1rem',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '12px', height: '12px', borderRadius: '50%',
                                        background: theme.gradient, flexShrink: 0
                                    }} />
                                    <span style={{
                                        fontFamily: 'var(--font-odia-sans)',
                                        fontSize: '1rem', fontWeight: 800, color: '#1e293b'
                                    }}>ଥିମ୍ ବାଛନ୍ତୁ</span>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>(Choose Theme)</span>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    {Object.entries(TATTVA_THEMES).map(([k, v]) => (
                                        <div
                                            key={k}
                                            onClick={() => handleSetTheme(k)}
                                            title={k.charAt(0).toUpperCase() + k.slice(1)}
                                            style={{
                                                width: '36px', height: '36px',
                                                borderRadius: '50%',
                                                background: v.gradient,
                                                border: currentThemeKey === k ? '3px solid white' : '3px solid transparent',
                                                boxShadow: currentThemeKey === k ? `0 0 0 2.5px ${v.color}, 0 4px 12px rgba(0,0,0,0.12)` : '0 2px 6px rgba(0,0,0,0.08)',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                transform: currentThemeKey === k ? 'scale(1.15)' : 'scale(1)'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* ── FONT SIZE SECTION ── */}
                            <div style={{
                                background: '#fff',
                                borderRadius: '20px',
                                border: '1px solid #f1f5f9',
                                padding: '1.25rem',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                                    <Type size={18} color={theme.color} />
                                    <span style={{
                                        fontFamily: 'var(--font-odia-sans)',
                                        fontSize: '1rem', fontWeight: 800, color: '#1e293b'
                                    }}>ଅକ୍ଷର ସାଇଜ୍</span>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>(Font Size)</span>
                                </div>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '0',
                                    border: '1.5px solid #e2e8f0',
                                    borderRadius: '16px',
                                    overflow: 'hidden'
                                }}>
                                    <button
                                        onClick={() => setFontSize(f => Math.max(f - 2, 12))}
                                        style={{
                                            flex: 1, padding: '1rem', fontSize: '1.4rem',
                                            fontWeight: 300, color: '#64748b',
                                            background: '#f8fafc', border: 'none',
                                            cursor: 'pointer', transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.background = '#f1f5f9')}
                                        onMouseLeave={e => (e.currentTarget.style.background = '#f8fafc')}
                                    >−</button>
                                    <div style={{
                                        flex: 2, textAlign: 'center',
                                        borderLeft: '1.5px solid #e2e8f0',
                                        borderRight: '1.5px solid #e2e8f0',
                                        padding: '0.75rem'
                                    }}>
                                        <div style={{
                                            fontSize: '2rem', fontWeight: 900,
                                            color: theme.color,
                                            fontFamily: 'var(--font-odia-sans)',
                                            lineHeight: 1
                                        }}>{toOdiaNumber(fontSize)}</div>
                                        <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '1px', marginTop: '2px' }}>POINTS</div>
                                    </div>
                                    <button
                                        onClick={() => setFontSize(f => Math.min(f + 2, 32))}
                                        style={{
                                            flex: 1, padding: '1rem', fontSize: '1.4rem',
                                            fontWeight: 300, color: '#64748b',
                                            background: '#f8fafc', border: 'none',
                                            cursor: 'pointer', transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.background = '#f1f5f9')}
                                        onMouseLeave={e => (e.currentTarget.style.background = '#f8fafc')}
                                    >+</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )}

            {/* ===== SINGERS EXPLORER PANEL ===== */}
            {isSingerPanelOpen && activeTab !== 'badadanda' && (
                <>
                    <div
                        onClick={() => {
                            setIsSingerPanelOpen(false);
                            popBackHandler('singer-panel');
                        }}
                        style={{
                            position: 'fixed', inset: 0,
                            background: 'rgba(0,0,0,0.35)',
                            backdropFilter: 'blur(3px)',
                            zIndex: 2000,
                            animation: 'fadeIn 0.2s ease'
                        }}
                    />
                    <div style={{
                        position: 'fixed',
                        top: 0, right: 0, bottom: 0,
                        width: 'min(380px, 96vw)',
                        background: 'white',
                        zIndex: 2001,
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
                        animation: 'slideInRight 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            padding: '1.25rem 1.25rem 1rem',
                            background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                            color: 'white',
                            flexShrink: 0
                        }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '12px',
                                background: 'rgba(255,255,255,0.2)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Mic size={22} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: 900, lineHeight: 1.2 }}>Singers Explorer</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.85, fontFamily: 'var(--font-odia-sans)' }}>କଣ୍ଠଶିଳ୍ପୀ ଅନୁସାରେ ଖୋଜନ୍ତୁ</div>
                            </div>
                            <button
                                onClick={() => {
                                    setIsSingerPanelOpen(false);
                                    popBackHandler('singer-panel');
                                }}
                                style={{
                                    background: 'rgba(255,255,255,0.2)', border: 'none',
                                    color: 'white', width: '34px', height: '34px',
                                    borderRadius: '10px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', cursor: 'pointer', flexShrink: 0
                                }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Search Input for Singers */}
                        <div style={{ padding: '0.75rem 1rem 0.5rem' }}>
                            <div style={{
                                display: 'flex', alignItems: 'center',
                                background: '#f8fafc', borderRadius: '12px',
                                padding: '0 0.75rem', border: '1px solid #e2e8f0'
                            }}>
                                <Search size={16} color="#94a3b8" />
                                <input
                                    type="text"
                                    placeholder="ଗାୟକ ଖୋଜନ୍ତୁ (Search singer)..."
                                    value={singerSearch}
                                    onChange={(e) => setSingerSearch(e.target.value)}
                                    style={{
                                        width: '100%', padding: '0.65rem 0.5rem',
                                        background: 'transparent', border: 'none',
                                        outline: 'none', fontSize: '0.88rem'
                                    }}
                                />
                                {singerSearch && (
                                    <button onClick={() => setSingerSearch('')} style={{ background: 'transparent', border: 'none', color: '#94a3b8' }}>
                                        <X size={15} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Singers List */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '0 1rem 1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {singerStats
                                    .filter(s => !singerSearch || s.singer.toLowerCase().includes(singerSearch.toLowerCase()))
                                    .map((stat, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                setSearchQuery(stat.singer);
                                                setActiveTab('songs');
                                                setIsSingerPanelOpen(false);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            style={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                                padding: '1rem',
                                                background: 'white',
                                                borderRadius: '16px',
                                                cursor: 'pointer',
                                                border: '1px solid #f1f5f9',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 6px 16px rgba(13, 148, 136, 0.12)';
                                                e.currentTarget.style.borderColor = '#0d948840';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                                                e.currentTarget.style.borderColor = '#f1f5f9';
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{
                                                    width: '36px', height: '36px', borderRadius: '10px',
                                                    background: '#ccfbf1', color: '#0d9488',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: '0.85rem', fontWeight: 800, flexShrink: 0
                                                }}>
                                                    <Mic size={18} />
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#1e293b' }}>{stat.singer}</div>
                                                    <div style={{ fontSize: '0.72rem', color: '#0d9488', fontWeight: 700 }}>
                                                        {toOdiaNumber(stat.count)} Songs with Audio
                                                    </div>
                                                </div>
                                            </div>
                                            <ChevronRight size={16} color="#cbd5e1" />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* ===== LISTS / COLLECTIONS PANEL ===== */}
            {isListsPanelOpen && activeTab !== 'badadanda' && (
                <>
                    <div
                        onClick={() => {
                            setIsListsPanelOpen(false);
                            popBackHandler('lists-panel');
                        }}
                        style={{
                            position: 'fixed', inset: 0,
                            background: 'rgba(0,0,0,0.35)',
                            backdropFilter: 'blur(3px)',
                            zIndex: 2000,
                            animation: 'fadeIn 0.2s ease'
                        }}
                    />
                    <div style={{
                        position: 'fixed',
                        top: 0, right: 0, bottom: 0,
                        width: 'min(380px, 96vw)',
                        background: 'white',
                        zIndex: 2001,
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
                        animation: 'slideInRight 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            padding: '1.25rem 1.25rem 1rem',
                            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                            color: 'white',
                            flexShrink: 0
                        }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '12px',
                                background: 'rgba(255,255,255,0.2)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <List size={22} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: 900, lineHeight: 1.2 }}>Vaishnava Song Lists</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.85, fontFamily: 'var(--font-odia-sans)' }}>ବୈଷ୍ଣବ ଭଜନ ସଂଗ୍ରହ ଓ ତାଲିକା</div>
                            </div>
                            <button
                                onClick={() => {
                                    setIsListsPanelOpen(false);
                                    popBackHandler('lists-panel');
                                }}
                                style={{
                                    background: 'rgba(255,255,255,0.2)', border: 'none',
                                    color: 'white', width: '34px', height: '34px',
                                    borderRadius: '10px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', cursor: 'pointer', flexShrink: 0
                                }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Lists Collection */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {VAISHNAVA_LISTS.map((list) => (
                                    <div
                                        key={list.id}
                                        onClick={() => {
                                            setSearchQuery(list.query);
                                            setActiveTab('songs');
                                            setIsListsPanelOpen(false);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            padding: '1.1rem',
                                            background: 'white',
                                            borderRadius: '16px',
                                            cursor: 'pointer',
                                            border: '1px solid #f1f5f9',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = `0 6px 18px ${list.color}20`;
                                            e.currentTarget.style.borderColor = `${list.color}40`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                                            e.currentTarget.style.borderColor = '#f1f5f9';
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                width: '38px', height: '38px', borderRadius: '12px',
                                                background: `${list.color}15`, color: list.color,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <BookOpen size={20} />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.98rem', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-odia-sans)' }}>{list.odia}</div>
                                                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>
                                                    {list.eng} • {list.author}
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} color="#cbd5e1" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            <style>{`
                @keyframes modalSlideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slideInRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
            `}</style>

            {/* Spin To Win Lucky Wheel Modal */}
            <SpinWheelModal
                isOpen={isSpinWheelOpen}
                onClose={() => setIsSpinWheelOpen(false)}
                allSongs={songs}
                onSelectAuthor={(author) => {
                    setActiveTab('songs');
                    setSearchQuery(author);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectSong={(songItem) => {
                    // Directly open the song if loaded, otherwise search
                    const found = songs.find(s =>
                        (songItem.id && s.id === songItem.id) ||
                        (songItem.titleEnglish && s.title_english?.toLowerCase() === songItem.titleEnglish.toLowerCase()) ||
                        (songItem.titleEnglish && s.title?.toLowerCase().includes(songItem.titleEnglish.toLowerCase())) ||
                        (songItem.titleOdia && (s.title_odia?.includes(songItem.titleOdia) || s.title?.includes(songItem.titleOdia))) ||
                        (songItem.searchQuery && (s.title?.toLowerCase().includes(songItem.searchQuery.toLowerCase()) || s.title_english?.toLowerCase().includes(songItem.searchQuery.toLowerCase())))
                    );
                    if (found) {
                        handleSelectSong(found, false);
                    } else {
                        setActiveTab('songs');
                        setSearchQuery(songItem.searchQuery || songItem.titleEnglish);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }}
            />
        </div>
    );
};

export default SongsPage;
