import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, ChevronUp, Music, Volume2 } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export const AudioPlayer: React.FC = () => {
    const {
        activeSong,
        currentVersion,
        isPlaying,
        currentTime,
        duration,
        togglePlay,
        seek,
        skipForward,
        skipBackward,
        changeVersion,
        currentThemeKey
    } = useAudio();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const isNightMode = currentThemeKey === 'advaita';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!activeSong) return null;

    const versions = activeSong.audioVersions || [];
    const currentLabel = currentVersion?.label || 'Default';
    const progress = (currentTime / (duration || 1)) * 100;

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        seek(parseFloat(e.target.value));
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className={`player-glass ${isNightMode ? 'dark' : ''}`} style={{
            position: 'relative',
            borderRadius: '20px',
            padding: '12px 16px',
            margin: '0 12px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            overflow: 'visible',
            zIndex: 2000
        }}>
            {/* Top Row: Song Info + Version Picker */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'var(--player-gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0
                    }}>
                        <Music size={20} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                        <div style={{ 
                            fontSize: '0.9rem', 
                            fontWeight: 800, 
                            color: isNightMode ? '#fff' : '#1e293b',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontFamily: 'var(--font-odia-sans)',
                            lineHeight: 1.1
                        }}>
                            {activeSong.title_odia || activeSong.title}
                        </div>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4285F4', opacity: 0.8 }}>
                            {currentLabel}
                        </div>
                    </div>
                </div>

                {/* Version Selector Pill */}
                <div ref={menuRef} style={{ position: 'relative' }}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '6px 10px',
                            background: isNightMode ? 'rgba(255,255,255,0.1)' : '#f1f5f9',
                            border: `1px solid ${isNightMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                            color: isNightMode ? '#e2e8f0' : '#475569',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            cursor: 'pointer',
                            borderRadius: '12px'
                        }}
                    >
                        <Volume2 size={14} />
                        <span style={{ maxWidth: '60px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {currentLabel}
                        </span>
                        <ChevronUp size={14} style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                    </button>

                    {isMenuOpen && (
                        <div style={{
                            position: 'absolute',
                            bottom: 'calc(100% + 12px)',
                            right: 0,
                            width: '200px',
                            maxHeight: '250px',
                            overflowY: 'auto',
                            background: isNightMode ? '#1e293b' : 'white',
                            borderRadius: '12px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                            padding: '6px',
                            zIndex: 1000
                        }}>
                            {versions.length > 0 ? versions.map((v) => (
                                <button
                                    key={v.url}
                                    onClick={() => {
                                        changeVersion(v);
                                        setIsMenuOpen(false);
                                    }}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        background: currentVersion?.url === v.url ? 'rgba(66, 133, 244, 0.1)' : 'transparent',
                                        color: currentVersion?.url === v.url ? '#4285F4' : (isNightMode ? '#e2e8f0' : '#1e293b'),
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        textAlign: 'left',
                                        border: 'none',
                                        marginBottom: '2px'
                                    }}
                                >
                                    {v.label}
                                </button>
                            )) : null}
                        </div>
                    )}
                </div>
            </div>

            {/* Middle Row: Progress Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', width: '30px' }}>{formatTime(currentTime)}</span>
                <div style={{ flex: 1, height: '20px', display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleProgressChange}
                        style={{
                            width: '100%',
                            height: '4px',
                            cursor: 'pointer',
                            background: `linear-gradient(to right, #4285F4 ${progress}%, ${isNightMode ? '#334155' : '#e2e8f0'} ${progress}%)`,
                            appearance: 'none',
                            borderRadius: '2px',
                            outline: 'none'
                        }}
                    />
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', width: '30px', textAlign: 'right' }}>{formatTime(duration)}</span>
            </div>

            {/* Bottom Row: Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
                <button onClick={skipBackward} style={{ background: 'transparent', color: isNightMode ? '#94a3b8' : '#475569' }}>
                    <SkipBack size={24} fill="currentColor" />
                </button>
                
                <button
                    onClick={togglePlay}
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'var(--player-gradient)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(66, 133, 244, 0.3)'
                    }}
                >
                    {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" style={{ marginLeft: '4px' }} />}
                </button>

                <button onClick={skipForward} style={{ background: 'transparent', color: isNightMode ? '#94a3b8' : '#475569' }}>
                    <SkipForward size={24} fill="currentColor" />
                </button>
            </div>
        </div>
    );
};
