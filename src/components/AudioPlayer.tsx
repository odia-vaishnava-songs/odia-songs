import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Download, Sparkles, Repeat1, ListMusic, FileText, Image as ImageIcon } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { useAuth } from '../hooks/useAuth';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import type { AudioVersion, Resource } from '../types';

export const AudioPlayer: React.FC<{ songOverride?: Resource }> = ({ songOverride }) => {
    const {
        activeSong,
        currentVersion: contextVersion,
        isPlaying: contextPlaying,
        currentTime: contextTime,
        duration: contextDuration,
        togglePlay,
        seek,
        playSong,
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

    const { user } = useAuth();

    // Determine which song and state to show
    const isShowingOverride = songOverride && (!activeSong || activeSong.id !== songOverride.id);
    const displaySong = isShowingOverride ? songOverride : activeSong;
    
    // If we're showing an override, we show it at 0:00 and not playing
    const isPlaying = isShowingOverride ? false : contextPlaying;
    const currentTime = isShowingOverride ? 0 : contextTime;
    const duration = isShowingOverride ? 0 : contextDuration;
    const currentVersion = isShowingOverride ? (songOverride.audioVersions?.[0] || { label: 'Default', url: songOverride.audioUrl || '' }) : contextVersion;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSleepMenuOpen, setIsSleepMenuOpen] = useState(false);
    const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    
    const menuRef = useRef<HTMLDivElement>(null);
    const sleepMenuRef = useRef<HTMLDivElement>(null);
    const exportMenuRef = useRef<HTMLDivElement>(null);
    const isNightMode = currentThemeKey === 'advaita';

    const primaryColor = theme.color;


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) setIsMenuOpen(false);
            if (sleepMenuRef.current && !sleepMenuRef.current.contains(event.target as Node)) setIsSleepMenuOpen(false);
            if (exportMenuRef.current && !exportMenuRef.current.contains(event.target as Node)) setIsExportMenuOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!displaySong) return null;

    const versions = displaySong.audioVersions || [];
    const currentLabel = currentVersion?.label || 'Default';
    const progress = (currentTime / (duration || 1)) * 100;

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isShowingOverride) seek(parseFloat(e.target.value));
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleDownloadAudio = async () => {
        if (!currentVersion?.url) return;
        setIsDownloading(true);
        try {
            const response = await fetch(currentVersion.url);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const fileName = `${displaySong.title_english || displaySong.title} - ${currentVersion.label}.mp3`.replace(/[/\\?%*:|"<>]/g, '-');
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            window.open(currentVersion.url, '_blank');
        } finally {
            setIsDownloading(false);
        }
    };

    // EXPORT LOGIC: JPG or PDF
    const handleExport = async (type: 'jpg' | 'pdf') => {
        setIsExporting(true);
        setIsExportMenuOpen(false);
        
        try {
            // Target the specific song content container
            const element = document.getElementById('song-content') || document.querySelector('main') || document.body;
            
            // 🏷️ BRAND LABELING: Create temporary footer for export
            const footer = document.createElement('div');
            footer.id = 'export-footer-temp';
            footer.style.cssText = `
                padding: 15px 20px;
                margin-top: 20px;
                border-top: 1px solid ${isNightMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
                text-align: center;
                font-family: 'Outfit', sans-serif;
                background: ${isNightMode ? '#1e1e1e' : '#fDFBF7'};
                color: ${isNightMode ? '#94a3b8' : '#64748b'};
                font-size: 11px;
                line-height: 1.5;
            `;
            
            const timestamp = new Date().toLocaleString('en-IN', { 
                day: '2-digit', month: 'short', year: 'numeric', 
                hour: '2-digit', minute: '2-digit', hour12: true 
            });
            const downloaderName = user?.name || 'Guest User';
            
            footer.innerHTML = `
                <div style="font-weight: 800; color: #FF9933; margin-bottom: 3px; font-size: 13px;">ଓଡ଼ିଆ ବୈଷ୍ଣବ ସଙ୍ଗୀତ (Odia Vaishnava Songs)</div>
                <div>Downloaded by: <strong>${downloaderName}</strong> | Date: ${timestamp}</div>
                <div style="opacity: 0.8;">© vs.bhaktiodia.in</div>
            `;
            
            element.appendChild(footer);

            // Temporary style to ensure high quality capture
            const canvas = await html2canvas(element, {
                scale: 2, // Double resolution
                useCORS: true,
                backgroundColor: isNightMode ? '#1e1e1e' : '#fDFBF7',
                logging: false,
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight
            });

            // Cleanup: remove temporary footer after capture
            if (element.contains(footer)) {
                element.removeChild(footer);
            }

            const fileName = `${displaySong.title_english || displaySong.title}`.replace(/[/\\?%*:|"<>]/g, '-');

            if (type === 'jpg') {
                const imgData = canvas.toDataURL('image/jpeg', 0.9);
                const link = document.createElement('a');
                link.download = `${fileName}.jpg`;
                link.href = imgData;
                link.click();
            } else {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: canvas.width > canvas.height ? 'l' : 'p',
                    unit: 'px',
                    format: [canvas.width, canvas.height]
                });
                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                pdf.save(`${fileName}.pdf`);
            }
        } catch (error) {
            console.error("Export failed:", error);
            alert("Export failed. Please try again.");
        } finally {
            setIsExporting(false);
        }
    };

    const handlePlayClick = () => {
        if (isShowingOverride) {
            playSong(songOverride!);
        } else {
            togglePlay();
        }
    };

    return (
        <div style={{
            background: isNightMode ? 'rgba(30, 30, 30, 0.85)' : 'rgba(248, 249, 250, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column', width: '100%', 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            borderTop: `1px solid ${isNightMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
            paddingTop: '4px'
        }}>
            {/* Top Row: Progress Slider */}
            <div style={{ padding: '0 12px', marginTop: '4px' }}>
                <input type="range" min="0" max={duration || 0} value={currentTime} onChange={handleProgressChange}
                    style={{
                        width: '100%', height: '4px', cursor: 'pointer', outline: 'none', appearance: 'none', borderRadius: '10px',
                        background: `linear-gradient(to right, ${primaryColor} ${progress}%, ${isNightMode ? '#334155' : '#e2e8f0'} ${progress}%)`,
                    }}
                />
            </div>

            {/* Middle Row: Times & Singer Name */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 16px', fontSize: '0.7rem', color: isNightMode ? '#94a3b8' : '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <span style={{ width: '45px' }}>{formatTime(currentTime)}</span>
                <span style={{ flex: 1, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', padding: '0 12px', color: isNightMode ? '#e2e8f0' : '#1e293b' }}>{currentLabel}</span>
                <span style={{ width: '45px', textAlign: 'right' }}>{formatTime(duration)}</span>
            </div>

            {/* Bottom Row: 7 Buttons Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', padding: '4px 10px 10px' }}>
                
                {/* 1: SINGER LIST */}
                <div ref={menuRef} style={{ width: '100%', position: 'relative' }}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={pillBtnStyle(primaryColor, isMenuOpen)}>
                         <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                            <path d="M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                         </svg>
                         {versions.length > 1 && <div style={badgeStyle}>{versions.length}</div>}
                    </button>
                    {isMenuOpen && <div style={dropdownStyle(isNightMode)}>
                        <div style={dropdownTitleStyle}>Choose Singer</div>
                        {versions.map((v: AudioVersion) => (
                            <button key={v.url} onClick={() => { changeVersion(v); setIsMenuOpen(false); }}
                                style={dropdownItemStyle(currentVersion?.url === v.url, primaryColor, isNightMode)}>
                                {v.label}
                            </button>
                        ))}
                    </div>}
                </div>

                {/* 2: OPTIONS (Repeat/Timer) */}
                <div ref={sleepMenuRef} style={{ width: '100%', position: 'relative' }}>
                    <button onClick={() => setIsSleepMenuOpen(!isSleepMenuOpen)} onDoubleClick={toggleRepeat}
                        style={{ ...pillBtnStyle(primaryColor), background: (repeatMode === 'one' || sleepTimer !== null || autoNext) ? 'white' : primaryColor, color: (repeatMode === 'one' || sleepTimer !== null || autoNext) ? primaryColor : 'white', border: (repeatMode === 'one' || sleepTimer !== null || autoNext) ? `2.5px solid ${primaryColor}` : 'none' }}>
                        {sleepTimer !== null ? <div style={{ fontSize: '9px', fontWeight: 900 }}>{sleepTimer}m</div> : 
                        (autoNext ? <ListMusic size={18} /> : (repeatMode === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />))}
                    </button>
                    {isSleepMenuOpen && <div style={dropdownStyle(isNightMode, '-40px')}>
                        <div style={dropdownTitleStyle}>Options</div>
                        <button onClick={toggleAutoNext} style={dropdownItemStyle(autoNext, primaryColor, isNightMode)}><ListMusic size={16} /> Auto-Next: {autoNext ? 'ON' : 'OFF'}</button>
                        <button onClick={toggleRepeat} style={dropdownItemStyle(repeatMode === 'one', primaryColor, isNightMode)}>{repeatMode === 'one' ? <Repeat1 size={16} /> : <Repeat size={16} />} Repeat: {repeatMode === 'one' ? 'ON' : 'OFF'}</button>
                        <div style={{ height: '1px', background: isNightMode ? '#3f3f3f' : '#eee', margin: '4px 8px' }} />
                        <div style={dropdownTitleStyle}>Sleep Timer</div>
                        {[15, 30, 45, 60].map(mins => <button key={mins} onClick={() => { setSleepTimer(mins); setIsSleepMenuOpen(false); }} style={dropdownItemStyle(sleepTimer === mins, primaryColor, isNightMode)}>{mins} Minutes</button>)}
                    </div>}
                </div>

                <button onClick={skipBackward} style={pillBtnStyle(primaryColor)} disabled={isShowingOverride}><SkipBack size={18} fill="white" /></button>
                
                {/* 4: PLAY/PAUSE (The "Glow" Button) */}
                <button 
                    onClick={handlePlayClick} 
                    style={{ 
                        ...pillBtnStyle(primaryColor), 
                        background: isPlaying ? getDarker(primaryColor) : primaryColor, 
                        transform: 'scale(1.1)', 
                        zIndex: 2,
                        boxShadow: `0 6px 20px ${primaryColor}50, inset 0 1px 1px rgba(255,255,255,0.3)`
                    }}
                >
                    {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" style={{ marginLeft: '3px' }} />}
                </button>

                <button onClick={skipForward} style={pillBtnStyle(primaryColor)} disabled={isShowingOverride}><SkipForward size={18} fill="white" /></button>
                
                {/* 6: AUDIO DOWNLOAD */}
                <button onClick={handleDownloadAudio} style={{ ...pillBtnStyle(primaryColor), opacity: isDownloading ? 0.7 : 1 }} disabled={isDownloading}>
                    {isDownloading ? <div style={spinnerStyle} /> : <Download size={18} />}
                </button>

                {/* 7: PAGE EXPORT (PHOTO/PDF) */}
                <div ref={exportMenuRef} style={{ width: '100%', position: 'relative' }}>
                    <button onClick={() => setIsExportMenuOpen(!isExportMenuOpen)} style={pillBtnStyle(primaryColor, isExportMenuOpen)} disabled={isExporting}>
                        {isExporting ? <div style={spinnerStyle} /> : <Sparkles size={18} />}
                    </button>
                    {isExportMenuOpen && <div style={dropdownStyle(isNightMode, '-120px')}>
                        <div style={dropdownTitleStyle}>Export Page</div>
                        <button onClick={() => handleExport('jpg')} style={dropdownItemStyle(false, primaryColor, isNightMode)}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <ImageIcon size={18} /> <span>Save as Photo (JPG)</span>
                            </div>
                        </button>
                        <button onClick={() => handleExport('pdf')} style={dropdownItemStyle(false, primaryColor, isNightMode)}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FileText size={18} /> <span>Save as PDF</span>
                            </div>
                        </button>
                    </div>}
                </div>
            </div>
            <style>{`
                 @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                 @keyframes slideUp { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                 input[type='range']::-webkit-slider-thumb { appearance: none; width: 16px; height: 16px; background: white; border: 3px solid ${primaryColor}; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.3); cursor: pointer; transition: transform 0.1s ease; }
                 input[type='range']::-webkit-slider-thumb:hover { transform: scale(1.2); }
                 button { transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important; }
                 button:active { transform: scale(0.9) !important; }
            `}</style>
        </div>
    );
};

// --- STYLES ---
const pillBtnStyle = (color: string, active?: boolean): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: active ? getDarker(color) : color, color: 'white', border: 'none', borderRadius: '12px',
    height: '40px', width: '100%', cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.1)', position: 'relative'
});

const dropdownStyle = (isNight: boolean, left = '0'): React.CSSProperties => ({
    position: 'absolute', bottom: 'calc(100% + 14px)', left, width: '230px',
    background: isNight ? 'rgba(45, 45, 45, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    borderRadius: '18px', padding: '8px', zIndex: 3000,
    boxShadow: '0 12px 40px rgba(0,0,0,0.3)', border: `1px solid ${isNight ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
    animation: 'slideUp 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
});

const dropdownItemStyle = (active: boolean, color: string, isNight: boolean): React.CSSProperties => ({
    width: '100%', padding: '12px 14px', textAlign: 'left', background: active ? `${color}20` : 'transparent',
    border: 'none', fontSize: '0.9rem', color: active ? color : (isNight ? '#e2e2e2' : '#1e293b'),
    fontWeight: active ? 800 : 600, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', cursor: 'pointer'
});

const dropdownTitleStyle: React.CSSProperties = { padding: '8px 14px', fontSize: '0.7rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' };
const badgeStyle: React.CSSProperties = { position: 'absolute', top: '2px', right: '2px', background: '#FF4444', color: 'white', fontSize: '9px', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' };
const spinnerStyle: React.CSSProperties = { width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTop: '3px solid white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' };


function getDarker(hex: string) { 
    if (!hex) return '#333';
    const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 30); 
    const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 30); 
    const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 30); 
    return `rgb(${r}, ${g}, ${b})`; 
}
