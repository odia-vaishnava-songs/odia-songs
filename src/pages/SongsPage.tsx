import React, { useState, useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import { supabase } from '../supabase/config';
import { Search, ArrowLeft, ArrowRight, SlidersHorizontal, CheckCircle2, Menu, BookOpen, BookA, BookText, Circle, ExternalLink, X, Mic, Sparkles, Crosshair, Eye, Users, BarChart3, ChevronLeft, ChevronRight, Type, Minus, Plus } from 'lucide-react';
import type { Resource } from '../types';
import { getStatusColor } from '../constants/colors';

import { AudioPlayer } from '../components/AudioPlayer';
import { CompactAudioBar } from '../components/CompactAudioBar';
import { useAudio } from '../context/AudioContext';
import { useAuth } from '../hooks/useAuth';
import { useSongs } from '../hooks/useSongs';

import { TATTVA_THEMES } from '../constants/themes';
import { toOdiaNumber } from '../utils/odia';
import * as GitaIcons from '../components/GitaIcons';

type ViewMode = 'combined' | 'sequential' | 'word-to-word';


export const SongsPage: React.FC = () => {
    const { activeSong, isDetailView, selectSong, setIsDetailView, theme, setTheme, currentThemeKey, setSongs } = useAudio();
    const { user } = useAuth();
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
    const [viewMode, setViewMode] = useState<ViewMode>('combined');
    const [fontSize, setFontSize] = useState(18);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const [isToolbeltExpanded, setIsToolbeltExpanded] = useState(false);
    const [isStatsOpen, setIsStatsOpen] = useState(false);
    const [authorStats, setAuthorStats] = useState<{ author: string; count: number }[]>([]);
    const [statsLoading, setStatsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'songs' | 'gita'>('songs');
    const [isListening, setIsListening] = useState(false);
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

    const toolbeltTimerRef = useRef<any>(null);
    const menuTimerRef = useRef<any>(null);
    useEffect(() => {
        // Auto-hide Toolbelt (3s)
        if (isToolbeltExpanded) {
            if (toolbeltTimerRef.current) clearTimeout(toolbeltTimerRef.current);
            toolbeltTimerRef.current = setTimeout(() => setIsToolbeltExpanded(false), 3000);
        }
        
        // Auto-hide Main Menu (5s)
        if (isFilterMenuOpen) {
            if (menuTimerRef.current) clearTimeout(menuTimerRef.current);
            menuTimerRef.current = setTimeout(() => setIsFilterMenuOpen(false), 5000);
        }

        return () => {
            if (toolbeltTimerRef.current) clearTimeout(toolbeltTimerRef.current);
            if (menuTimerRef.current) clearTimeout(menuTimerRef.current);
        };
    }, [isToolbeltExpanded, isFilterMenuOpen, fontSize, currentThemeKey]);

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
        setStatsLoading(true);
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('author');

            if (error) throw error;

            const counts: Record<string, number> = {};
            data.forEach(s => {
                const a = (s as any).author || 'Unknown Author';
                counts[a] = (counts[a] || 0) + 1;
            });

            const sorted = Object.entries(counts)
                .map(([author, count]) => ({ author, count }))
                .sort((a, b) => b.count - a.count);

            setAuthorStats(sorted);
            setIsStatsOpen(true);
        } catch (err) {
            console.error('[Stats] Error:', err);
        } finally {
            setStatsLoading(false);
        }
    };


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
        const query = searchQuery.toLowerCase().trim();
        const pool = activeTab === 'gita' ? gitaChapters : songResources;

        if (!query) {
            // In the Gita tab, if there is no search, we only want the Card Grid, not the alphabetical list.
            return activeTab === 'gita' ? [] : pool;
        }

        return pool.filter(s => {
            const inTitle = (s.title_odia || s.title || '').toLowerCase().includes(query) || (s.title_english || '').toLowerCase().includes(query);
            const inAuthor = s.author?.toLowerCase().includes(query);
            const inDescription = s.description?.toLowerCase().includes(query);
            const inTags = s.tags?.some(tag => tag?.toLowerCase().includes(query));

            // Check verses lyrics
            const inLyrics = s.structuredContent?.verses.some(v =>
                (v.lyric || '').toLowerCase().includes(query) || (v.translation || '').toLowerCase().includes(query)
            );

            return inTitle || inAuthor || inDescription || inLyrics || inTags;
        });
    }, [songResources, gitaChapters, activeTab, searchQuery]);

    // Alphabet navigation logic removed unused array
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const scrollToSection = (letter: string) => {
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

        const GITA_CHAPTER_NAMES: Record<string, { odia: string, eng: string, icon: React.ElementType, color: string }> = {
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
            <div style={{ padding: '0 0 2rem', maxWidth: '1000px', margin: '0 auto' }}>
                {/* 🚀 QUICK NAVIGATION SLIDER (Requested) */}
                <div 
                    className={isSliderInteracting ? 'interacting' : ''}
                    style={{ 
                        position: 'relative', 
                        marginBottom: '1rem',
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

            </div>
        );
    };

    const renderSongContent = () => {
        if (!selectedSong) return null;

        const isNightMode = currentThemeKey === 'advaita';
        const cardBg = isNightMode ? '#1E1E1E' : '#fff';
        const textColor = isNightMode ? '#e2e8f0' : '#111';
        const titleColor = isNightMode ? '#fff' : '#000';
        const borderColor = isNightMode ? '#334155' : '#ddd';

        if (!selectedSong.structuredContent) {
            return (
                <div id="song-content" style={{
                    background: cardBg, padding: '3rem 2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    lineHeight: '1.9', color: textColor, fontFamily: "var(--font-odia-sans)", fontSize: `${fontSize}px`,
                    border: `1px solid ${borderColor}`, margin: '1.5rem 0.4rem', textAlign: 'center'
                }}>
                    <h1 style={{ fontSize: '2.5rem', color: titleColor, margin: '0 0 1rem', fontWeight: 900, lineHeight: '1.1', fontFamily: 'var(--font-odia-sans)' }}>{getOdiaTitle(selectedSong)}</h1>
                    {selectedSong.author && <div style={{ color: isNightMode ? '#94a3b8' : '#666', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 500, fontFamily: 'var(--font-sans)' }}>{selectedSong.author}</div>}
                    <div style={{ whiteSpace: 'pre-wrap', color: textColor, fontFamily: 'var(--font-odia-sans)' }}>{selectedSong.content}</div>
                </div>
            );
        }

        const { verses, reference_url } = selectedSong.structuredContent;
        const isGita = selectedSong.category === 'Gita' || selectedSong.category === 'G' || selectedSong.id.startsWith('gita-') || selectedSong.id === 'song-gitamahatmya';
        const verseLabel = isGita ? 'ଶ୍ଲୋକ' : 'ପାଠ';

        if (viewMode === 'sequential') {
            return (
                <div id="song-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '4rem' }}>
                    <div style={{ background: cardBg, padding: '2.5rem 1.5rem', borderRadius: '12px', border: `1px solid ${borderColor}`, margin: '0 0.4rem', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: '0 0 0.25rem', color: titleColor, lineHeight: '1.1', fontFamily: 'var(--font-odia-sans)' }}>{getOdiaTitle(selectedSong)}</h1>
                        {selectedSong.author && <div style={{ fontSize: '1.2rem', color: isNightMode ? '#94a3b8' : '#666', marginBottom: '2.5rem', fontWeight: 500, fontFamily: 'var(--font-sans)' }}>{selectedSong.author}</div>}
                        
                        <div style={{ height: '1px', background: isNightMode ? '#334155' : '#eee', margin: '1rem 0 3rem' }} />

                        {verses.map((verse, idx) => {
                            let speakerLine = '';
                            let mainLyric = verse.lyric;
                            // ... parsing logic remained the same ...
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
                                <div key={`lyric-${verse.id}`} style={{ marginBottom: idx === verses.length - 1 ? 0 : '2.5rem' }}>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: isNightMode ? '#94a3b8' : '#888', marginBottom: '1rem', letterSpacing: '1px' }}>{verseLabel} {toOdiaNumber(verse.id)}</div>
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
                                            marginBottom: '1rem',
                                            border: `1px solid ${SPEAKER_MAP[speakerLine].color}40`,
                                            fontFamily: 'var(--font-odia-sans)'
                                        }}>
                                            {SPEAKER_MAP[speakerLine].icon}
                                            {SPEAKER_MAP[speakerLine].label}
                                        </div>
                                    )}
                                    <div style={{
                                        whiteSpace: 'pre-wrap',
                                        color: verse.status ? getStatusColor(verse.status) : (isNightMode ? '#fff' : getStatusColor(selectedSong.status, selectedSong.verified)),
                                        fontSize: speakerLine ? `${fontSize * 1.3}px` : `${fontSize * 1.15}px`,
                                        fontWeight: 600,
                                        fontFamily: 'var(--font-odia-sans)',
                                        lineHeight: '1.6'
                                    }}>{mainLyric}</div>
                                </div>
                            );
                        })}
                    </div>
                    {verses.some(v => v.translation?.trim()) && (
                        <div style={{ background: cardBg, padding: '1.5rem 1rem', borderRadius: '12px', border: `1px solid ${borderColor}`, margin: '0 0.4rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1rem', color: isNightMode ? theme.color : '#8A5082', fontWeight: 800, marginBottom: '2.5rem', letterSpacing: '2px', borderBottom: `2px solid ${isNightMode ? '#334155' : '#f0f0f0'}`, display: 'inline-block' }}>ଅନୁବାଦ (Translation)</div>
                            {verses.map((verse, idx) => verse.translation?.trim() && (
                                <div key={`trans-${verse.id}`} style={{ marginBottom: idx === verses.length - 1 ? 0 : '1.5rem' }}>
                                    <div style={{ fontSize: '0.9rem', color: isNightMode ? '#94a3b8' : '#888', marginBottom: '0.25rem' }}>{verseLabel} {toOdiaNumber(verse.id)}</div>
                                    <div style={{ color: textColor, fontSize: `${fontSize}px`, fontFamily: 'var(--font-odia-sans)', fontWeight: 600 }}>{verse.translation}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div id="song-content" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '1rem 0.4rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 900, color: isNightMode ? '#fff' : getStatusColor(selectedSong.status, selectedSong.verified), lineHeight: '1.0', marginBottom: '0.25rem', fontFamily: 'var(--font-odia-sans)' }}>{getOdiaTitle(selectedSong)}</h1>
                    {selectedSong.title_english && <div style={{ fontSize: '1.25rem', color: isNightMode ? '#94a3b8' : '#666', marginBottom: '0.75rem', fontWeight: 500 }}>{selectedSong.title_english}</div>}
                    <div style={{ fontSize: '1.1rem', color: isNightMode ? '#cbd5e1' : getStatusColor(selectedSong.status, selectedSong.verified), opacity: 0.9, marginBottom: '0.25rem' }}>{selectedSong.author}</div>
                    {selectedSong.description && (
                        <div style={{ fontSize: '1.2rem', color: isNightMode ? '#fff' : getStatusColor(selectedSong.status, selectedSong.verified), fontWeight: 600, marginBottom: '0.75rem', fontFamily: 'var(--font-odia-sans)' }}>{selectedSong.description}</div>
                    )}
                    {reference_url && (
                        <a
                            href={reference_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: isNightMode ? theme.color : '#2563eb',
                                fontSize: '0.85rem',
                                textDecoration: 'none',
                                marginBottom: '1rem',
                                fontWeight: 900
                            }}
                        >
                            <ExternalLink size={16} /> Reference / Source
                        </a>
                    )}

                    {/* Highly Visible View Switcher */}
                    <div style={{
                        display: 'flex',
                        background: isNightMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        padding: '4px',
                        borderRadius: '12px',
                        margin: '0 auto 1.5rem',
                        maxWidth: '400px',
                        justifyContent: 'center'
                    }}>
                        {[
                            { id: 'sequential', label: 'କେବଳ ଗୀତ', eng: 'Lyrics Only', icon: <BookText size={16} /> },
                            ...(verses.some(v => v.translation?.trim()) ? [{ id: 'combined', label: 'ଗୀତ + ଅନୁବାଦ', eng: 'Combined', icon: <BookOpen size={16} /> }] : []),
                            ...(verses.some(v => (v.wordMeanings?.length ?? 0) > 0) ? [{ id: 'word-to-word', label: 'ଶବ୍ଦାର୍ଥ', eng: 'Word Meaning', icon: <BookA size={16} /> }] : [])
                        ].map(mode => (
                            <button
                                key={mode.id}
                                onClick={() => setViewMode(mode.id as ViewMode)}
                                style={{
                                    flex: 1,
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: viewMode === mode.id ? (isNightMode ? '#fff' : theme.color) : 'transparent',
                                    color: viewMode === mode.id ? (isNightMode ? '#000' : '#fff') : (isNightMode ? '#aaa' : '#666'),
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '2px',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-odia-sans)'
                                }}
                            >
                                {mode.icon}
                                <span style={{ fontSize: '0.75rem', fontWeight: 900 }}>{mode.label}</span>
                                <span style={{ fontSize: '0.6rem', opacity: 0.8, fontWeight: 500, fontFamily: 'var(--font-sans)' }}>{mode.eng}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {verses.map((verse) => {
                    // Check for speaker
                    let speakerLine = '';
                    let mainLyric = verse.lyric;

                    const firstLineMatch = verse.lyric.match(/^([^\n]+)\n/);
                    if (firstLineMatch) {
                        let potentialSpeaker = firstLineMatch[1].trim();
                        let detectedKey = '';

                        // Robust substring matching bypasses invisible unicode chars and database typos
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
                        <div key={verse.id} style={{ background: cardBg, padding: '1.5rem 1rem', borderRadius: '8px', textAlign: 'center', border: `1px solid ${borderColor}`, position: 'relative' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                                <div style={{ height: '1px', flex: 1, background: isNightMode ? '#334155' : '#eee' }} />
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: theme.color, letterSpacing: '1px', opacity: 0.8 }}>{verseLabel} {toOdiaNumber(verse.id)}</div>
                                <div style={{ height: '1px', flex: 1, background: isNightMode ? '#334155' : '#eee' }} />
                            </div>

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
                                    marginBottom: '1.5rem',
                                    border: `1px solid ${SPEAKER_MAP[speakerLine].color}40`,
                                    fontFamily: 'var(--font-odia-sans)'
                                }}>
                                    {SPEAKER_MAP[speakerLine].icon}
                                    {SPEAKER_MAP[speakerLine].label}
                                </div>
                            )}

                            <div style={{
                                whiteSpace: 'pre-wrap',
                                color: verse.status ? getStatusColor(verse.status) : (isNightMode ? '#fff' : getStatusColor(selectedSong.status, selectedSong.verified)),
                                fontSize: speakerLine ? `${fontSize * 1.3}px` : `${fontSize * 1.15}px`,
                                fontWeight: 600,
                                fontFamily: 'var(--font-odia-sans)',
                                marginBottom: '1.5rem',
                                lineHeight: '1.6'
                            }}>{mainLyric}</div>

                            {viewMode === 'word-to-word' && verse.wordMeanings && verse.wordMeanings.length > 0 && (
                                <div style={{ margin: '2rem 0', padding: '1.5rem', background: isNightMode ? '#0f172a' : '#f8fafc', borderRadius: '8px', border: `1px dashed ${isNightMode ? '#334155' : '#cbd5e1'}` }}>
                                    <div style={{ lineHeight: '1.8', fontSize: `${fontSize * 0.85}px`, color: isNightMode ? '#cbd5e1' : '#334155' }}>
                                        {verse.wordMeanings.map((wm, i) => (
                                            <React.Fragment key={i}>
                                                <span style={{ fontWeight: 700, color: isNightMode ? theme.color : '#2563eb' }}>{wm.word}</span> — {wm.meaning}{i < verse.wordMeanings!.length - 1 ? '; ' : ''}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {verse.translation && verse.translation.trim() !== '' && (
                                <div style={{ color: textColor, fontSize: `${fontSize}px`, paddingTop: '1.5rem', borderTop: `1px solid ${isNightMode ? '#334155' : '#eee'}`, fontFamily: 'var(--font-odia-sans)', fontWeight: 600, lineHeight: '1.5' }}>{verse.translation}</div>
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

        // Match the image's "TEXT" button pagination aesthetic
        const btnStyleBase: React.CSSProperties = {
            background: isNightMode ? '#2a2015' : '#e6cbaa',
            color: isNightMode ? '#eedfc8' : '#221100',
            border: `1px solid ${isNightMode ? '#463520' : '#d2b694'}`,
            padding: '8px 14px',
            borderRadius: '6px',
            fontSize: '1rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
            letterSpacing: '0.5px'
        };

        return (
            <div style={{ padding: '2rem 0.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

    if (selectedSong) {
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: theme.gradient, zIndex: 1000, display: 'flex', flexDirection: 'column', height: '100vh' }}>
                {renderReaderToolbelt()}
                <header style={{ display: 'flex', alignItems: 'center', padding: '0.75rem 1rem', background: 'rgba(0,0,0,0.15)', color: '#fff', backdropFilter: 'blur(10px)' }}>
                    <button onClick={() => { setSelectedSong(null); setIsDetailView(false); }} style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '6px', borderRadius: '12px', display: 'flex' }}>
                        <ArrowLeft size={28} strokeWidth={2.5} />
                    </button>
                    <div style={{ flex: 1, minWidth: 0, marginLeft: '1rem' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                            {getOdiaTitle(selectedSong)}
                            {selectedSong.verified && <CheckCircle2 size={18} color="#4fd1c5" />}
                        </div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{selectedSong.title_english || selectedSong.author}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {(user?.role?.toLowerCase() === 'admin' || user?.role?.toLowerCase() === 'subadmin') && (
                            <button
                                onClick={async () => {
                                    try {
                                        const { error } = await supabase
                                            .from('songs')
                                            .update({ verified: !selectedSong.verified })
                                            .eq('id', selectedSong.id);

                                        if (error) throw error;
                                        setSelectedSong({ ...selectedSong, verified: !selectedSong.verified });
                                    } catch (err) {
                                        console.error(err);
                                        alert("Error updating verification");
                                    }
                                }}
                                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', padding: '6px', borderRadius: '50%', display: 'flex' }}
                                title={selectedSong.verified ? "Verified" : "Mark as verified"}
                            >
                                {selectedSong.verified ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                            </button>
                        )}
                    </div>
                </header>
                <main
                    ref={mainScrollRef as any}
                    style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '0.4rem'
                    }}
                >
                    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '160px' }}>
                        {renderSongContent()}
                        {renderChapterNavigation()}
                    </div>
                </main>
                <div style={{ 
                    height: '90px', 
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    position: 'relative',
                    zIndex: 1001,
                    background: 'transparent'
                }}>
                    <div style={{ margin: '0 auto', width: '100%', position: 'relative' }}>
                        {/* 1. Background Music Popup (Higher float) */}
                        {activeSong && selectedSong?.id !== activeSong.id && (
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
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'white', overflow: 'hidden' }}>
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
            `}</style>
            <header style={{
                background: theme.gradient,
                padding: '1.25rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#fff',
                position: 'sticky',
                top: 0,
                zIndex: 10,
                boxShadow: 'var(--shadow-md)'
            }}>
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-drawer'))}
                    style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: '#fff',
                        borderRadius: '12px',
                        width: '42px',
                        height: '42px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(4px)',
                        flexShrink: 0
                    }}
                >
                    <Menu size={22} />
                </button>
                <div style={{ flex: 1, position: 'relative' }}>
                    {(loading || error) && (
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '0',
                            fontSize: '0.7rem',
                            color: error ? '#ff4444' : '#fff',
                            opacity: 0.8
                        }}>
                            {loading ? 'ଡାଟାବେସ୍ ରୁ ଅପଡେଟ୍ ହେଉଛି...' : error}
                        </div>
                    )}
                    <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                    <input
                        type="text"
                        placeholder="ଭଜନ କିମ୍ବା ଗୀତ ଖୋଜନ୍ତୁ..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 4.5rem 0.75rem 2.6rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '2px solid transparent',
                            backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                            fontSize: '1rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            color: 'var(--color-text-main)',
                            outline: 'none',
                            transition: 'all 0.2s ease',
                            fontFamily: 'var(--font-odia-sans)'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        right: '0.6rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}>
                        <button
                            onClick={handleVoiceSearch}
                            title="ଭଏସ୍ ସର୍ଚ୍ଚ (Voice Search)"
                            style={{
                                background: isListening ? '#fef2f2' : 'transparent',
                                border: 'none',
                                color: isListening ? '#ef4444' : '#999',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                padding: '6px',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                animation: isListening ? 'pulse-mic 1.5s infinite' : 'none'
                            }}
                            onMouseEnter={(e) => !isListening && (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                            onMouseLeave={(e) => !isListening && (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                            <Mic size={18} />
                        </button>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                title="ସଫା କରନ୍ତୁ (Clear)"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#999',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    padding: '6px',
                                    borderRadius: '50%'
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>
                    <style>{`
                        @keyframes pulse-mic {
                            0% { transform: translateY(-50%) scale(1); opacity: 0.8; }
                            50% { transform: translateY(-50%) scale(1.2); opacity: 1; }
                            100% { transform: translateY(-50%) scale(1); opacity: 0.8; }
                        }
                    `}</style>
                </div>
                <button onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)} style={{
                    background: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(4px)'
                }}>
                    <SlidersHorizontal size={20} />
                </button>
                {isFilterMenuOpen && (
                    <div ref={filterMenuRef} style={{
                        position: 'absolute',
                        top: '70px',
                        right: '1rem',
                        background: 'white',
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-lg)',
                        zIndex: 100,
                        color: 'var(--color-text-main)',
                        minWidth: '200px'
                    }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-light)', marginBottom: '1rem' }}>ଥିମ୍ ବାଛନ୍ତୁ (Choose Theme)</div>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {Object.entries(TATTVA_THEMES).map(([k, v]) => (
                                <button
                                    key={k}
                                    onClick={() => handleSetTheme(k)}
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: v.color,
                                        border: currentThemeKey === k ? '3px solid white' : '1px solid #ddd',
                                        boxShadow: currentThemeKey === k ? `0 0 0 2px ${v.color}` : 'none',
                                        transition: 'all 0.2s ease'
                                    }}
                                />
                            ))}
                        </div>

                        <div style={{ height: '1px', backgroundColor: '#eee', margin: '1rem 0' }} />
                        
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>ଅକ୍ଷର ସାଇଜ୍ (Font Size)</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '8px 12px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <button 
                                onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                                style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '6px', borderRadius: '8px', cursor: 'pointer', display: 'flex', color: '#64748b' }}
                            >
                                <Minus size={16} />
                            </button>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#334155' }}>
                                <Type size={16} />
                                <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>{toOdiaNumber(fontSize)}</span>
                            </div>
                            <button 
                                onClick={() => setFontSize(prev => Math.min(prev + 2, 32))}
                                style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '6px', borderRadius: '8px', cursor: 'pointer', display: 'flex', color: '#64748b' }}
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        <div style={{ height: '1px', backgroundColor: '#eee', margin: '1rem 0' }} />

                        <button
                            onClick={() => {
                                setIsFilterMenuOpen(false);
                                fetchAuthorStats();
                            }}
                            disabled={statsLoading}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.75rem',
                                backgroundColor: '#FFF8F1',
                                border: '1px solid #FFE7D1',
                                borderRadius: '12px',
                                color: '#4A2B0F',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                opacity: statsLoading ? 0.7 : 1
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <BarChart3 size={18} color="#FF9933" />
                                <span>{statsLoading ? 'Loading...' : 'Library Stats'}</span>
                            </div>
                            <span style={{ fontSize: '0.7rem', backgroundColor: '#FF9933', color: 'white', padding: '2px 6px', borderRadius: '4px' }}>{songs.length}</span>
                        </button>
                    </div>
                )}
            </header>
            <main style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1rem 0',
                paddingBottom: '100px'
            }}>
                {activeTab === 'gita' && renderGitaDashboard()}
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 0.5rem' }}>
                    {sortedGroups.map(letter => (
                        <div key={letter} ref={(el) => { sectionRefs.current[letter] = el; }} style={{ marginBottom: '2rem' }}>
                            {/* Sticky Section Header */}
                            <div style={{
                                position: 'sticky',
                                top: '70px',
                                zIndex: 5,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem 1.25rem',
                                pointerEvents: 'none'
                            }}>
                                <div style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                    color: theme.color,
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'white',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    pointerEvents: 'auto'
                                }}>
                                    {letter}
                                </div>
                            </div>

                            <div style={{ padding: '0 0.5rem' }}>
                                {groupedSongs[letter].map(song => (
                                    <div
                                        key={song.id}
                                        onClick={() => handleSelectSong(song)}
                                        style={{
                                            padding: '1.25rem',
                                            backgroundColor: 'white',
                                            borderRadius: 'var(--radius-md)',
                                            marginBottom: '0.75rem',
                                            boxShadow: 'var(--shadow-sm)',
                                            border: '1px solid #f0f0f0',
                                            cursor: 'pointer',
                                            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', flex: 1 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <div style={{
                                                        fontSize: '1.25rem',
                                                        fontWeight: 800,
                                                        color: song.published ? '#1ed106' : getStatusColor(song.status, song.verified),
                                                        fontFamily: 'var(--font-odia-sans)',
                                                        transition: 'color 0.3s ease'
                                                    }}>{getOdiaTitle(song)}</div>
                                                    {song.verified && <CheckCircle2 size={16} color="#00a38d" />}
                                                </div>
                                                {(song.title_english || (song.title.match(/\(([^)]+)\)/)?.[1])) && (
                                                    <div style={{
                                                        fontSize: '0.95rem',
                                                        color: (song.status === 'COMPLETED' || song.verified) ? '#1ed106' : '#666',
                                                        fontWeight: (song.status === 'COMPLETED' || song.verified) ? 700 : 500,
                                                        fontFamily: "'Outfit', sans-serif"
                                                    }}>{song.title_english || song.title.match(/\(([^)]+)\)/)?.[1]}</div>
                                                )}
                                            </div>
                                            {((song.audioVersions?.length ?? 0) > 0 || song.audioUrl) && (
                                                <div 
                                                    style={{ 
                                                        marginLeft: '1rem',
                                                        padding: '8px',
                                                        borderRadius: '12px',
                                                        backgroundColor: '#F3E8FF',
                                                        color: '#7E22CE',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        boxShadow: 'inset 0 0 0 1px rgba(126, 34, 206, 0.1)',
                                                        pointerEvents: 'none'
                                                    }} 
                                                    title={(song.audioVersions?.length ?? 0) > 1 ? `${song.audioVersions?.length} Singers Sync'd` : "Audio Available"}
                                                >
                                                    <Mic size={18} strokeWidth={2.5} />
                                                </div>
                                            )}
                                        </div>
                                        {song.author && (
                                            <div style={{
                                                fontSize: '0.85rem',
                                                marginTop: '0.5rem',
                                                color: getStatusColor(song.status, song.verified),
                                                opacity: 0.8,
                                                fontFamily: 'var(--font-odia-sans)',
                                                fontWeight: (song.status === 'COMPLETED' || song.verified) ? 600 : 400
                                            }}>
                                                {song.author}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            {/* Alphabet Sidebar - Only showing letters with songs for a clean list */}
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
            {!selectedSong && (
                <div style={{
                    position: 'fixed',
                    bottom: '24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--color-cream)',
                    backdropFilter: 'blur(16px)',
                    padding: '8px',
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px rgba(128, 0, 0, 0.15)',
                    display: 'flex',
                    gap: '8px',
                    zIndex: 1000,
                    border: '1px solid var(--color-maroon)20',
                    maxWidth: '90vw'
                }}>
                    <button
                        onClick={() => setActiveTab('songs')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 20px',
                            borderRadius: '16px',
                            border: 'none',
                            background: activeTab === 'songs' ? theme.color : 'transparent',
                            color: activeTab === 'songs' ? '#fff' : '#64748b',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            fontFamily: 'var(--font-odia-sans)'
                        }}
                    >
                        <BookText size={20} />
                        <span style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>ସମସ୍ତ ସଙ୍ଗୀତ</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('gita')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 20px',
                            borderRadius: '16px',
                            border: 'none',
                            background: activeTab === 'gita' ? theme.color : 'transparent',
                            color: activeTab === 'gita' ? '#fff' : '#64748b',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            fontFamily: 'var(--font-odia-sans)'
                        }}
                    >
                        <BookOpen size={20} />
                        <span style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>ଭଗବଦ୍ ଗୀତା</span>
                    </button>
                </div>
            )}
            {/* Statistics Modal */}
            {isStatsOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                    zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '20px'
                }}>
                    <div style={{
                        backgroundColor: 'white', width: '100%', maxWidth: '450px',
                        maxHeight: '85vh', borderRadius: '24px', overflow: 'hidden',
                        display: 'flex', flexDirection: 'column', boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                        animation: 'modalSlideUp 0.3s ease-out'
                    }}>
                        {/* Modal Header */}
                        <div style={{
                            padding: '1.25rem', background: theme.gradient, color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <BarChart3 size={24} />
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Author Statistics</h3>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>ଲେଖକ ପରିସଂଖ୍ୟାନ</div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsStatsOpen(false)}
                                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '8px', borderRadius: '50%', cursor: 'pointer' }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {authorStats.map((stat: { author: string; count: number }, idx: number) => (
                                    <div
                                        key={idx}
                                        onClick={() => {
                                            setSearchQuery(stat.author);
                                            setIsStatsOpen(false);
                                            mainScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            padding: '1.1rem', backgroundColor: '#FFF8F1', borderRadius: '16px',
                                            border: '1px solid #FFE7D1', cursor: 'pointer',
                                            transition: 'transform 0.2s, background-color 0.2s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#FFF1E0';
                                            e.currentTarget.style.transform = 'scale(1.02)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = '#FFF8F1';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                backgroundColor: '#FF9933', color: 'white', width: '28px', height: '28px',
                                                borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '0.8rem', fontWeight: 800
                                            }}>{idx + 1}</div>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontWeight: 700, color: '#4A2B0F' }}>{stat.author}</span>
                                                <span style={{ fontSize: '0.7rem', color: '#915926' }}>Click to view all songs</span>
                                            </div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'white', padding: '4px 10px', borderRadius: '20px',
                                            fontWeight: 800, color: '#FF9933', border: '1.5px solid #FF9933', fontSize: '0.9rem'
                                        }}>{stat.count}</div>
                                    </div>
                                ))}

                                <div style={{
                                    marginTop: '1rem', padding: '1.5rem', background: 'linear-gradient(135deg, #FF9933, #FFCC33)',
                                    borderRadius: '20px', color: 'white', textAlign: 'center', boxShadow: '0 10px 20px rgba(255, 153, 51, 0.2)'
                                }}>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Combined Library Size</div>
                                    <div style={{ fontSize: '2.2rem', fontWeight: 900 }}>
                                        {authorStats.reduce((acc: number, curr: { count: number }) => acc + curr.count, 0)} <span style={{ fontSize: '1rem', fontWeight: 400 }}>Songs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style>{`
                        @keyframes modalSlideUp {
                            from { transform: translateY(20px); opacity: 0; }
                            to { transform: translateY(0); opacity: 1; }
                        }
                    `}</style>
                </div>
            )}
        </div>
    );
};
