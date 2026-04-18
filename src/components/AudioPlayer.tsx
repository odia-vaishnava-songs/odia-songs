import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Download, UserPlus, Repeat1, ListMusic } from 'lucide-react';
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
        currentThemeKey,
        theme,
        repeatMode,
        toggleRepeat,
        sleepTimer,
        setSleepTimer,
        autoNext,
        toggleAutoNext
    } = useAudio();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSleepMenuOpen, setIsSleepMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const sleepMenuRef = useRef<HTMLDivElement>(null);
    const isNightMode = currentThemeKey === 'advaita';

    const primaryColor = theme.color;
    const accentShadow = `rgba(${hexToRgb(primaryColor)}, 0.4)`;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
            if (sleepMenuRef.current && !sleepMenuRef.current.contains(event.target as Node)) {
                setIsSleepMenuOpen(false);
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
        <div style={{
            background: isNightMode ? '#1e1e1e' : '#f8f9fa',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            {/* Top Row: Progress Slider */}
            <div style={{ padding: '0 8px', marginTop: '6px' }}>
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
                        background: `linear-gradient(to right, ${primaryColor} ${progress}%, #cbd5e1 ${progress}%)`,
                        appearance: 'none',
                        borderRadius: '2px',
                        outline: 'none',
                        margin: 0
                    }}
                />
            </div>

            {/* Middle Row: Times & Singer Name */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '4px 12px',
                fontSize: '0.8rem',
                color: isNightMode ? '#e2e8f0' : '#334155',
                fontWeight: 600
            }}>
                <span style={{ width: '40px' }}>{formatTime(currentTime)}</span>
                <span style={{ flex: 1, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', padding: '0 8px' }}>
                    {currentLabel}
                </span>
                <span style={{ width: '40px', textAlign: 'right' }}>{formatTime(duration)}</span>
            </div>

            {/* Bottom Row: 7 Buttons Grid */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(7, 1fr)', 
                gap: '6px', 
                padding: '2px 8px 10px' 
            }}>
                
                {/* BUTTON 1: SINGER LIST */}
                <div ref={menuRef} style={{ width: '100%', position: 'relative' }}>
                    <button 
                         onClick={() => setIsMenuOpen(!isMenuOpen)}
                         style={pillBtnStyle(primaryColor, isMenuOpen)}
                    >
                         <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                            <path d="M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                         </svg>
                         {versions.length > 1 && (
                            <div style={{
                                position: 'absolute', top: '4px', right: '4px', background: '#FF4444',
                                color: 'white', fontSize: '9px', width: '14px', height: '14px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900,
                                border: '1.5px solid white'
                            }}>{versions.length}</div>
                         )}
                    </button>
                    
                    {isMenuOpen && (
                        <div style={{
                            position: 'absolute', bottom: 'calc(100% + 12px)', left: 0, width: '220px',
                            background: isNightMode ? '#2d2d2d' : 'white', borderRadius: '16px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.25)', zIndex: 3000, padding: '8px',
                            border: `1px solid ${isNightMode ? '#3f3f3f' : '#efefef'}`,
                            animation: 'slideUp 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
                        }}>
                             <div style={{ padding: '8px 12px', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Choose Singer</div>
                            {versions.map((v) => (
                                <button
                                    key={v.url}
                                    onClick={() => { changeVersion(v); setIsMenuOpen(false); }}
                                    style={{
                                        width: '100%', padding: '12px', textAlign: 'left', background: currentVersion?.url === v.url ? `${primaryColor}15` : 'transparent',
                                        border: 'none', fontSize: '0.85rem', color: currentVersion?.url === v.url ? primaryColor : (isNightMode ? '#e2e2e2' : '#1e293b'),
                                        fontWeight: currentVersion?.url === v.url ? 800 : 500, borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px'
                                    }}
                                >
                                    {v.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* BUTTON 2: OPTIONS COMBO (Repeat / Sleep Timer) */}
                <div ref={sleepMenuRef} style={{ width: '100%', position: 'relative' }}>
                    <button 
                        onClick={() => setIsSleepMenuOpen(!isSleepMenuOpen)}
                        onDoubleClick={toggleRepeat}
                        style={{
                             ...pillBtnStyle(primaryColor),
                             background: (repeatMode === 'one' || sleepTimer !== null || autoNext) ? 'white' : primaryColor,
                             color: (repeatMode === 'one' || sleepTimer !== null || autoNext) ? primaryColor : 'white',
                             border: (repeatMode === 'one' || sleepTimer !== null || autoNext) ? `2px solid ${primaryColor}` : 'none'
                        }}
                        title="Repeat (Double Tap) / Options (Click)"
                    >
                        {sleepTimer !== null ? (
                            <div style={{ fontSize: '10px', fontWeight: 900 }}>{sleepTimer}m</div>
                        ) : (
                            autoNext ? <ListMusic size={20} /> : (repeatMode === 'one' ? <Repeat1 size={20} /> : <Repeat size={20} />)
                        )}
                    </button>

                    {isSleepMenuOpen && (
                        <div style={{
                            position: 'absolute', bottom: 'calc(100% + 12px)', left: '-40px', width: '200px',
                            background: isNightMode ? '#2d2d2d' : 'white', borderRadius: '16px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.25)', zIndex: 3000, padding: '8px',
                            border: `1px solid ${isNightMode ? '#3f3f3f' : '#efefef'}`,
                            animation: 'slideUp 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
                        }}>
                             <div style={{ padding: '8px 12px', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Options</div>
                             
                             {/* AUTO NEXT TOGGLE */}
                             <button
                                onClick={toggleAutoNext}
                                style={{
                                    width: '100%', padding: '10px', textAlign: 'left', background: 'transparent',
                                    border: 'none', fontSize: '0.9rem', color: autoNext ? primaryColor : (isNightMode ? '#e2e2e2' : '#334155'),
                                    fontWeight: 700, borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px'
                                }}
                             >
                                <ListMusic size={18} />
                                {autoNext ? 'Auto-Next: ON' : 'Auto-Next: OFF'}
                             </button>

                             {/* REPEAT TOGGLE */}
                             <button
                                onClick={toggleRepeat}
                                style={{
                                    width: '100%', padding: '10px', textAlign: 'left', background: 'transparent',
                                    border: 'none', fontSize: '0.9rem', color: repeatMode === 'one' ? primaryColor : (isNightMode ? '#e2e2e2' : '#334155'),
                                    fontWeight: 700, borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px'
                                }}
                             >
                                {repeatMode === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />}
                                {repeatMode === 'one' ? 'Repeat: ON' : 'Repeat: OFF'}
                             </button>

                             <div style={{ height: '1px', background: '#eee', margin: '4px 8px' }} />
                             <div style={{ padding: '8px 12px', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8' }}>SLEEP TIMER</div>
                             {[15, 30, 45, 60].map(mins => (
                                 <button
                                    key={mins}
                                    onClick={() => { setSleepTimer(mins); setIsSleepMenuOpen(false); }}
                                    style={{
                                        width: '100%', padding: '10px', textAlign: 'left', background: sleepTimer === mins ? `${primaryColor}15` : 'transparent',
                                        border: 'none', fontSize: '0.9rem', color: sleepTimer === mins ? primaryColor : (isNightMode ? '#e2e2e2' : '#334155'),
                                        fontWeight: 700, borderRadius: '10px'
                                    }}
                                 >
                                    {mins} Minutes
                                 </button>
                             ))}
                             {sleepTimer !== null && (
                                 <button
                                    onClick={() => { setSleepTimer(null); setIsSleepMenuOpen(false); }}
                                    style={{
                                        width: '100%', padding: '10px', textAlign: 'left', background: 'transparent',
                                        border: 'none', fontSize: '0.8rem', color: '#FF4444', fontWeight: 700
                                    }}
                                 >
                                    Cancel Timer
                                 </button>
                             )}
                        </div>
                    )}
                </div>

                <button onClick={skipBackward} style={pillBtnStyle(primaryColor)}><SkipBack size={18} fill="white" /></button>
                
                <button
                    onClick={togglePlay}
                    style={{
                        ...pillBtnStyle(primaryColor),
                        background: getDarker(primaryColor),
                        boxShadow: `0 4px 12px ${accentShadow}, inset 0 1px 1px rgba(255,255,255,0.3)`,
                        transform: 'scale(1.05)',
                        zIndex: 2
                    }}
                >
                    {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" style={{ marginLeft: '2px' }} />}
                </button>

                <button onClick={skipForward} style={pillBtnStyle(primaryColor)}><SkipForward size={18} fill="white" /></button>
                <button style={pillBtnStyle(primaryColor)}><Download size={18} /></button>
                <button style={pillBtnStyle(primaryColor)}><UserPlus size={18} /></button>
            </div>
            <style>{`
                 @keyframes slideUp {
                    from { transform: translateY(10px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                 }
                 input[type='range']::-webkit-slider-thumb {
                    appearance: none;
                    width: 12px;
                    height: 12px;
                    background: white;
                    border: 2px solid ${primaryColor};
                    border-radius: 50%;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                }
            `}</style>
        </div>
    );
};

const pillBtnStyle = (color: string, active?: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: active ? getDarker(color) : color,
    color: 'white',
    border: 'none',
    borderRadius: '16px',
    height: '46px',
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.1)',
    position: 'relative'
});

function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

function getDarker(hex: string) {
    const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 20);
    const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 20);
    const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 20);
    return `rgb(${r}, ${g}, ${b})`;
}
