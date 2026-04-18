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
            borderRadius: '24px',
            padding: '12px 20px',
            margin: '0 8px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            overflow: 'visible'
        }}>
            {/* Progress Slider Overlay */}
            <div style={{
                position: 'absolute',
                top: '-2px',
                left: '20px',
                right: '20px',
                height: '4px',
                zIndex: 10
            }}>
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

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                {/* Left: Info Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--player-gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(66, 133, 244, 0.3)',
                        flexShrink: 0
                    }}>
                        <Music size={24} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                        <div style={{ 
                            fontSize: '1rem', 
                            fontWeight: 800, 
                            color: isNightMode ? '#fff' : '#1e293b',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontFamily: 'var(--font-odia-sans)'
                        }}>
                            {activeSong.title_odia || activeSong.title}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {isPlaying && (
                                <div style={{ display: 'flex', gap: '2px', height: '10px', alignItems: 'flex-end', marginBottom: '2px' }}>
                                    <div className="wave-bar" style={{ animationDelay: '0s' }} />
                                    <div className="wave-bar" style={{ animationDelay: '0.2s' }} />
                                    <div className="wave-bar" style={{ animationDelay: '0.4s' }} />
                                </div>
                            )}
                            <div style={{ 
                                fontSize: '0.75rem', 
                                fontWeight: 700, 
                                color: '#4285F4',
                                opacity: 0.9
                            }}>
                                {currentLabel}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center: Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button onClick={skipBackward} style={iconBtnStyle(isNightMode)}>
                        <SkipBack size={20} fill="currentColor" />
                    </button>
                    
                    <button
                        onClick={togglePlay}
                        style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '50%',
                            background: 'var(--player-gradient)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 6px 20px rgba(66, 133, 244, 0.4)',
                            transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        {isPlaying ? <Pause size={28} fill="white" /> : <Play size={28} fill="white" style={{ marginLeft: '4px' }} />}
                    </button>

                    <button onClick={skipForward} style={iconBtnStyle(isNightMode)}>
                        <SkipForward size={20} fill="currentColor" />
                    </button>
                </div>

                {/* Right: Version Selector Pill */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isNightMode ? '#64748b' : '#94a3b8', display: 'none' }}>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    
                    <div ref={menuRef} style={{ position: 'relative' }}>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 14px',
                                background: isNightMode ? 'rgba(255,255,255,0.05)' : '#f1f5f9',
                                border: `1px solid ${isNightMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                                color: isNightMode ? '#e2e8f0' : '#475569',
                                fontSize: '0.85rem',
                                fontWeight: 800,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                borderRadius: '20px'
                            }}
                        >
                            <Volume2 size={16} />
                            <span style={{ maxWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {currentLabel}
                            </span>
                            <ChevronUp size={16} style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                        </button>

                        {isMenuOpen && (
                            <div style={{
                                position: 'absolute',
                                bottom: 'calc(100% + 12px)',
                                right: 0,
                                width: '240px',
                                maxHeight: '320px',
                                overflowY: 'auto',
                                background: isNightMode ? '#1e293b' : 'white',
                                borderRadius: '16px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                                border: `1px solid ${isNightMode ? 'rgba(255,255,255,0.1)' : '#f1f5f9'}`,
                                padding: '8px',
                                zIndex: 1000,
                                animation: 'fadeIn 0.2s ease-out'
                            }}>
                                <div style={{ 
                                    padding: '8px 12px', 
                                    fontSize: '0.7rem', 
                                    fontWeight: 900, 
                                    color: isNightMode ? '#94a3b8' : '#64748b',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Select Singer ଭର୍ସନ
                                </div>
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
                                            gap: '12px',
                                            padding: '10px 12px',
                                            borderRadius: '10px',
                                            background: currentVersion?.url === v.url ? 'rgba(66, 133, 244, 0.1)' : 'transparent',
                                            color: currentVersion?.url === v.url ? '#4285F4' : (isNightMode ? '#e2e8f0' : '#1e293b'),
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            textAlign: 'left',
                                            transition: 'all 0.2s',
                                            cursor: 'pointer',
                                            border: 'none',
                                            margin: '2px 0'
                                        }}
                                    >
                                        <div style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: currentVersion?.url === v.url ? '#4285F4' : 'transparent',
                                            boxShadow: currentVersion?.url === v.url ? '0 0 8px #4285F4' : 'none'
                                        }} />
                                        {v.label}
                                    </button>
                                )) : (
                                    <div style={{ padding: '12px', fontSize: '0.85rem', color: '#64748b', textAlign: 'center' }}>
                                        Default Version only
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Time Indicators Row */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '0 4px',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: isNightMode ? '#64748b' : '#94a3b8'
            }}>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
            </div>
        </div>
    );
};

const iconBtnStyle = (dark: boolean): React.CSSProperties => ({
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: 'transparent',
    color: dark ? '#94a3b8' : '#475569',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    cursor: 'pointer'
});
