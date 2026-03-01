import React, { useState, useMemo, useRef, useEffect } from 'react';
import { supabase } from '../supabase/config';
import { Search, ArrowLeft, SlidersHorizontal, BookOpen, BookText, BookA, CheckCircle2, Circle } from 'lucide-react';
import type { Resource, SongVerse, WordMeaning } from '../types';
import { getStatusColor } from '../constants/colors';



import { AudioPlayer } from '../components/AudioPlayer';
import { useAudio } from '../context/AudioContext';
import { useAuth } from '../hooks/useAuth';
import { useSongs } from '../hooks/useSongs';

type ViewMode = 'combined' | 'sequential' | 'word-to-word';

const REFERENCE_PAGE_BG = '#6F5F90';
const REFERENCE_HEADER_BG = '#8A5082';

const TATTVA_THEMES: { [key: string]: { name: string, color: string, gradient: string, accent: string, text: string } } = {
    gauranga: { name: 'Gauranga', color: '#8A5082', gradient: 'linear-gradient(135deg, #8A5082 0%, #6F5F90 100%)', accent: '#8A5082', text: '#fff' },
    nityananda: { name: 'Nityananda', color: '#FF9933', gradient: 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)', accent: '#FF9933', text: '#fff' },
    advaita: { name: 'Advaita', color: '#4CAF50', gradient: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', accent: '#4CAF50', text: '#fff' },
    gadadhara: { name: 'Gadadhara', color: '#2196F3', gradient: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', accent: '#2196F3', text: '#fff' },
    srivasa: { name: 'Srivasa', color: '#9C27B0', gradient: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)', accent: '#9C27B0', text: '#fff' }
};


export const SongsPage: React.FC = () => {
    const { selectSong, setIsDetailView } = useAudio();
    const { user } = useAuth();
    const { songs, loading, error } = useSongs();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSong, setSelectedSong] = useState<Resource | null>(null);
    const [viewMode, setViewMode] = useState<ViewMode>('combined');
    const [fontSize] = useState(18);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('song-theme') || 'gauranga');
    const [recentIds, setRecentIds] = useState<string[]>(() => {
        try {
            const saved = localStorage.getItem('recent-song-ids');
            return saved ? JSON.parse(saved) : [];
        } catch (e: any) {
            console.error("Error parsing recent-song-ids", e);
            return [];
        }
    });
    const filterMenuRef = useRef<HTMLDivElement>(null);

    const theme = TATTVA_THEMES[currentTheme] || TATTVA_THEMES.gauranga;

    const handleSelectSong = (song: Resource) => {
        setSelectedSong(song);
        setIsDetailView(true);
        if (song.audioUrl || (song.audioVersions && song.audioVersions.length > 0)) {
            selectSong(song);
        }
        const newRecent = [song.id, ...recentIds.filter((id: string) => id !== song.id)].slice(0, 5);
        setRecentIds(newRecent);
        localStorage.setItem('recent-song-ids', JSON.stringify(newRecent));
    };

    const handleSetTheme = (themeKey: string) => {
        setCurrentTheme(themeKey);
        localStorage.setItem('song-theme', themeKey);
    };

    const songResources = useMemo(() => {
        return songs.filter(r => r.category === 'Songs')
            .sort((a, b) => a.title.localeCompare(b.title));
    }, [songs]);

    const filteredSongs = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return songResources;

        return songResources.filter((s: Resource) => {
            const inTitle = s.title.toLowerCase().includes(query);
            const inAuthor = s.author?.toLowerCase().includes(query);
            const inDescription = s.description?.toLowerCase().includes(query);

            // Check verses lyrics
            const inLyrics = s.structuredContent?.verses.some((v: SongVerse) =>
                v.lyric.toLowerCase().includes(query)
            );

            return inTitle || inAuthor || inDescription || inLyrics;
        });
    }, [songResources, searchQuery]);

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const scrollToSection = (letter: string) => {
        const element = sectionRefs.current[letter];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const getCategoryLetter = (title: string) => {
        const match = title.match(/\(([^)]+)\)/);
        const textToUse = (match && match[1]) ? match[1] : title;
        const firstChar = textToUse.trim().charAt(0).toUpperCase();
        const normalized = firstChar.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return (normalized >= 'A' && normalized <= 'Z') ? normalized : '#';
    };

    const groupedSongs = useMemo(() => {
        const groups: { [key: string]: Resource[] } = {};
        filteredSongs.forEach((song: Resource) => {
            const letter = getCategoryLetter(song.title);
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
        document.body.style.backgroundColor = selectedSong ? REFERENCE_PAGE_BG : 'var(--color-cream)';
    }, [theme.color, selectedSong]);

    const getOdiaTitle = (title: string) => {
        const match = title.match(/\(([^)]+)\)/);
        if (match && match[1] && match[1].match(/[\u0B00-\u0B7F]/)) return match[1];
        if (title.match(/[\u0B00-\u0B7F]/)) return title;
        return title;
    };

    const renderSongContent = () => {
        if (!selectedSong) return null;

        if (!selectedSong.structuredContent) {
            return (
                <div style={{
                    background: '#fff', padding: '3rem 2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    lineHeight: '1.9', color: '#111', fontFamily: "'Outfit', sans-serif", fontSize: `${fontSize}px`,
                    border: '1px solid #ddd', margin: '1.5rem 0.4rem', textAlign: 'center'
                }}>
                    <h1 style={{ fontSize: '2.5rem', color: '#000', margin: '0 0 1rem', fontWeight: 900, lineHeight: '1.1' }}>{getOdiaTitle(selectedSong.title)}</h1>
                    {selectedSong.author && <div style={{ color: '#666', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 500 }}>{selectedSong.author}</div>}
                    <div style={{ whiteSpace: 'pre-wrap', color: '#222' }}>{selectedSong.content}</div>
                </div>
            );
        }

        const { verses } = selectedSong.structuredContent;

        if (viewMode === 'sequential') {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '4rem' }}>
                    <div style={{ padding: '0 0.4rem', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: '1rem 0 0.25rem', color: '#fff', lineHeight: '1.1' }}>{getOdiaTitle(selectedSong.title)}</h1>
                        {selectedSong.author && <div style={{ fontSize: '1.2rem', color: '#fff', opacity: 0.9 }}>{selectedSong.author}</div>}
                    </div>
                    <div style={{ background: '#fff', padding: '1.5rem 1rem', borderRadius: '12px', border: '1px solid #ddd', margin: '0 0.4rem', textAlign: 'center' }}>
                        {verses.map((verse: SongVerse, idx: number) => (
                            <div key={`lyric-${verse.id}`} style={{ marginBottom: idx === verses.length - 1 ? 0 : '2rem' }}>
                                <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>({verse.id})</div>
                                <div style={{
                                    whiteSpace: 'pre-wrap',
                                    color: verse.status ? getStatusColor(verse.status) : getStatusColor(selectedSong.status, selectedSong.verified),
                                    fontSize: '1.15rem',

                                    fontWeight: 700
                                }}>{verse.lyric}</div>

                            </div>

                        ))}
                    </div>
                    <div style={{ background: '#fff', padding: '1.5rem 1rem', borderRadius: '12px', border: '1px solid #ddd', margin: '0 0.4rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1rem', color: '#8A5082', fontWeight: 800, marginBottom: '2.5rem', letterSpacing: '2px', borderBottom: '2px solid #f0f0f0', display: 'inline-block' }}>ଅନୁବାଦ (Translation)</div>
                        {verses.map((verse: SongVerse, idx: number) => (
                            <div key={`trans-${verse.id}`} style={{ marginBottom: idx === verses.length - 1 ? 0 : '1.5rem' }}>
                                <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.25rem' }}>({verse.id})</div>
                                <div style={{ color: '#444', fontSize: '1.25rem' }}>{verse.translation}</div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '1rem 0.4rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 900, color: getStatusColor(selectedSong.status, selectedSong.verified), lineHeight: '1.0' }}>{getOdiaTitle(selectedSong.title)}</h1>
                    <div style={{ fontSize: '1.2rem', color: getStatusColor(selectedSong.status, selectedSong.verified), opacity: 0.9, marginBottom: '1.5rem' }}>{selectedSong.author}</div>
                </div>

                {verses.map((verse: SongVerse) => (
                    <div key={verse.id} style={{ background: '#fff', padding: '1.5rem 1rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #ddd' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#666', marginBottom: '1.5rem' }}>({verse.id})</div>
                        <div style={{
                            whiteSpace: 'pre-wrap',
                            color: verse.status ? getStatusColor(verse.status) : getStatusColor(selectedSong.status, selectedSong.verified),
                            fontSize: '1.15rem',

                            fontWeight: 700,
                            marginBottom: '1.5rem'
                        }}>{verse.lyric}</div>


                        {viewMode === 'word-to-word' && verse.wordMeanings && (
                            <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
                                <div style={{ lineHeight: '1.8', fontSize: '1rem', color: '#334155' }}>
                                    {verse.wordMeanings.map((wm: WordMeaning, i: number) => (
                                        <React.Fragment key={i}>
                                            <span style={{ fontWeight: 700, color: '#2563eb' }}>{wm.word}</span> — {wm.meaning}{i < verse.wordMeanings!.length - 1 ? '; ' : ''}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div style={{ color: '#444', fontSize: '1.2rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>{verse.translation}</div>
                    </div>
                ))}
            </div>
        );
    };

    const getViewModeIcon = () => {
        if (viewMode === 'combined') return <BookOpen size={24} />;
        if (viewMode === 'word-to-word') return <BookA size={24} />;
        return <BookText size={24} />;
    };

    if (selectedSong) {
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: REFERENCE_PAGE_BG, zIndex: 1000, display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <header style={{ display: 'flex', alignItems: 'center', padding: '0.75rem 1rem', background: REFERENCE_HEADER_BG, color: '#fff' }}>
                    <button onClick={() => { setSelectedSong(null); setIsDetailView(false); }} style={{ background: 'transparent', color: '#fff', padding: '4px' }}>
                        <ArrowLeft size={28} strokeWidth={2.5} />
                    </button>
                    <div style={{ flex: 1, minWidth: 0, marginLeft: '1rem' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.5rem', color: getStatusColor(selectedSong.status, selectedSong.verified) }}>
                            {getOdiaTitle(selectedSong.title)}
                            {selectedSong.verified && <CheckCircle2 size={18} color="#4fd1c5" />}
                        </div>

                        <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{selectedSong.author}</div>
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
                        {selectedSong.structuredContent && (
                            <button onClick={() => setViewMode(viewMode === 'combined' ? 'word-to-word' : viewMode === 'word-to-word' ? 'sequential' : 'combined')} style={{ background: 'transparent', color: '#fff' }}>
                                {getViewModeIcon()}
                            </button>
                        )}
                    </div>
                </header>
                <main style={{ flex: 1, overflowY: 'auto', padding: '0.4rem' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>{renderSongContent()}</div>
                </main>
                <footer style={{ padding: '0.2rem 1rem', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}><AudioPlayer /></div>
                </footer>
            </div>
        );
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
            <header style={{
                background: theme.gradient,
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#fff',
                position: 'sticky',
                top: 0,
                zIndex: 10,
                boxShadow: 'var(--shadow-md)'
            }}>
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
                        placeholder="ଗୀତ ଖୋଜନ୍ତୁ (Search Songs)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.7rem 1rem 0.7rem 2.6rem',
                            borderRadius: 'var(--radius-lg)',
                            border: 'none',
                            fontSize: '1rem',
                            backgroundColor: 'white',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
                            color: 'var(--color-text-main)'
                        }}
                    />
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
                                        border: currentTheme === k ? '3px solid white' : '1px solid #ddd',
                                        boxShadow: currentTheme === k ? `0 0 0 2px ${v.color}` : 'none',
                                        transition: 'all 0.2s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </header>
            <main style={{ flex: 1, overflowY: 'auto', padding: '1rem 0' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    {sortedGroups.map(letter => (
                        <div key={letter} ref={(el) => { sectionRefs.current[letter] = el; }}>
                            <div style={{
                                position: 'sticky',
                                top: '72px',
                                background: 'rgba(248, 249, 250, 0.95)',
                                backdropFilter: 'blur(8px)',
                                padding: '0.5rem 1.5rem',
                                fontWeight: 800,
                                color: theme.accent,
                                fontSize: '1.1rem',
                                zIndex: 5,
                                borderBottom: '1px solid #eee'
                            }}>{letter}</div>
                            <div style={{ padding: '0.5rem 1rem' }}>
                                {groupedSongs[letter].map((song: Resource) => (
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
                                        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                        }}
                                        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <div style={{
                                                fontSize: '1.15rem',
                                                fontWeight: 600,
                                                color: getStatusColor(song.status, song.verified)
                                            }}>{song.title}</div>



                                            {song.verified && <CheckCircle2 size={16} color="#00a38d" />}
                                        </div>


                                        {song.author && <div style={{ fontSize: '0.9rem', color: getStatusColor(song.status, song.verified), opacity: 0.8 }}>{song.author}</div>}

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <div style={{ position: 'fixed', right: 0, top: '80px', bottom: '80px', display: 'flex', flexDirection: 'column', padding: '0 4px', fontSize: '0.7rem' }}>
                {alphabet.map(l => <div key={l} onClick={() => scrollToSection(l)} style={{ cursor: 'pointer', padding: '1px' }}>{l}</div>)}
            </div>
        </div >
    );
};
