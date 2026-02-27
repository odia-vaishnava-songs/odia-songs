import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw, Download, MoreHorizontal, Music } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

interface AudioPlayerProps {
    onToggleEdit?: () => void;
    isEditable?: boolean;
    themeColor?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
}) => {
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
        reset,
        changeVersion
    } = useAudio();

    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
    const moreMenuRef = useRef<HTMLDivElement>(null);

    // Close selector and more menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
                setIsMoreMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        seek(parseFloat(e.target.value));
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (!activeSong) return null;

    const versions = activeSong.audioVersions || [];
    const currentLabel = currentVersion?.label || 'Default';

    return (
        <div style={{
            backgroundColor: '#ffffff',
            padding: '0',
            width: '100%',
            color: '#333',
            fontFamily: "'Outfit', sans-serif"
        }}>
            {/* Progress Bar Area - Top Aligned */}
            <div style={{ width: '100%', position: 'relative' }}>
                <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleProgressChange}
                    style={{
                        width: '100%',
                        height: '4px',
                        accentColor: '#4285F4', // Blue accent
                        cursor: 'pointer',
                        margin: '0',
                        display: 'block',
                        borderRadius: '0'
                    }}
                />
            </div>

            {/* Time labels and Meta Row */}
            <div style={{ padding: '0.4rem 1rem 0.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666', fontWeight: 600, marginBottom: '2px' }}>
                    <span>{formatTime(currentTime)}</span>
                    <div style={{ textAlign: 'center', flex: 1, paddingLeft: '10px', paddingRight: '10px' }}>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#333' }}>{activeSong.title}</div>
                        <div style={{ fontSize: '0.8rem', color: '#4285F4', fontWeight: 700 }}>{currentLabel}</div>
                    </div>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            {/* Controls Area - Blue Theme */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 0.5rem 0.5rem',
                flexWrap: 'nowrap'
            }}>
                <button style={blueBtnStyle}><Music size={20} /></button>
                <button style={blueBtnStyle} onClick={reset}><RotateCcw size={20} /></button>
                <button style={blueBtnStyle} onClick={skipBackward}><SkipBack size={20} fill="currentColor" /></button>

                <button
                    onClick={togglePlay}
                    style={{
                        ...blueBtnStyle,
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: '#4285F4',
                        color: '#fff',
                        boxShadow: '0 4px 15px rgba(66, 133, 244, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {isPlaying ? <Pause size={32} fill="#fff" /> : <Play size={32} fill="#fff" style={{ marginLeft: '4px' }} />}
                </button>

                <button style={blueBtnStyle} onClick={skipForward}><SkipForward size={20} fill="currentColor" /></button>
                <button style={blueBtnStyle} title="Download"><Download size={20} /></button>

                <div ref={moreMenuRef} style={{ position: 'relative' }}>
                    <button
                        style={blueBtnStyle}
                        onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                    >
                        <MoreHorizontal size={20} />
                    </button>
                    {isMoreMenuOpen && (
                        <div style={{
                            position: 'absolute',
                            bottom: '64px',
                            right: '0',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            padding: '8px',
                            zIndex: 100,
                            minWidth: '200px',
                            border: '1px solid #eee'
                        }}>
                            <div style={{ padding: '8px 12px', fontSize: '0.75rem', color: '#4285F4', fontWeight: 800, textTransform: 'uppercase', borderBottom: '1px solid #f0f0f0', marginBottom: '4px' }}>
                                ଅଡିଓ ଭର୍ସନ (Audio Versions)
                            </div>
                            {versions.map((v) => (
                                <button
                                    key={v.url}
                                    onClick={() => {
                                        changeVersion(v);
                                        setIsMoreMenuOpen(false);
                                    }}
                                    style={{
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '10px 12px',
                                        border: 'none',
                                        backgroundColor: currentVersion?.url === v.url ? '#f0f7ff' : 'transparent',
                                        color: currentVersion?.url === v.url ? '#4285F4' : '#333',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <Music size={14} />
                                    {v.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const blueBtnStyle: React.CSSProperties = {
    color: '#4285F4',
    background: 'transparent',
    border: 'none',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'all 0.2s ease',
    padding: 0
};
