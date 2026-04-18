import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Download, Sparkles, Repeat1, ListMusic, FileText, Image as ImageIcon } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

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

    const handleDownloadAudio = async () => {
        if (!currentVersion?.url) return;
        setIsDownloading(true);
        try {
            const response = await fetch(currentVersion.url);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const fileName = `${activeSong.title_english || activeSong.title} - ${currentVersion.label}.mp3`.replace(/[/\\?%*:|"<>]/g, '-');
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
            
            // Temporary style to ensure high quality capture
            const canvas = await html2canvas(element, {
                scale: 2, // Double resolution
                useCORS: true,
                backgroundColor: isNightMode ? '#1e1e1e' : '#f8f9fa',
                logging: false,
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight
            });

            const fileName = `${activeSong.title_english || activeSong.title}`.replace(/[/\\?%*:|"<>]/g, '-');

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

    return (
        <div style={{
            background: isNightMode ? '#1e1e1e' : '#f8f9fa',
            display: 'flex',
            flexDirection: 'column', width: '100%', fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            {/* Top Row: Progress Slider */}
            <div style={{ padding: '0 8px', marginTop: '6px' }}>
                <input type="range" min="0" max={duration || 0} value={currentTime} onChange={handleProgressChange}
                    style={{
                        width: '100%', height: '4px', cursor: 'pointer', outline: 'none', appearance: 'none', borderRadius: '2px',
                        background: `linear-gradient(to right, ${primaryColor} ${progress}%, #cbd5e1 ${progress}%)`,
                    }}
                />
            </div>

            {/* Middle Row: Times & Singer Name */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 12px', fontSize: '0.8rem', color: isNightMode ? '#e2e8f0' : '#334155', fontWeight: 600 }}>
                <span style={{ width: '40px' }}>{formatTime(currentTime)}</span>
                <span style={{ flex: 1, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', padding: '0 8px' }}>{currentLabel}</span>
                <span style={{ width: '40px', textAlign: 'right' }}>{formatTime(duration)}</span>
            </div>

            {/* Bottom Row: 7 Buttons Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', padding: '2px 8px 10px' }}>
                
                {/* 1: SINGER LIST */}
                <div ref={menuRef} style={{ width: '100%', position: 'relative' }}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={pillBtnStyle(primaryColor, isMenuOpen)}>
                         <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                            <path d="M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                         </svg>
                         {versions.length > 1 && <div style={badgeStyle}>{versions.length}</div>}
                    </button>
                    {isMenuOpen && <div style={dropdownStyle(isNightMode)}>
                        <div style={dropdownTitleStyle}>Choose Singer</div>
                        {versions.map(v => (
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
                        style={{ ...pillBtnStyle(primaryColor), background: (repeatMode === 'one' || sleepTimer !== null || autoNext) ? 'white' : primaryColor, color: (repeatMode === 'one' || sleepTimer !== null || autoNext) ? primaryColor : 'white', border: (repeatMode === 'one' || sleepTimer !== null || autoNext) ? `2px solid ${primaryColor}` : 'none' }}>
                        {sleepTimer !== null ? <div style={{ fontSize: '10px', fontWeight: 900 }}>{sleepTimer}m</div> : 
                        (autoNext ? <ListMusic size={20} /> : (repeatMode === 'one' ? <Repeat1 size={20} /> : <Repeat size={20} />))}
                    </button>
                    {isSleepMenuOpen && <div style={dropdownStyle(isNightMode, '-40px')}>
                        <div style={dropdownTitleStyle}>Options</div>
                        <button onClick={toggleAutoNext} style={dropdownItemStyle(autoNext, primaryColor, isNightMode)}><ListMusic size={16} /> Auto-Next: {autoNext ? 'ON' : 'OFF'}</button>
                        <button onClick={toggleRepeat} style={dropdownItemStyle(repeatMode === 'one', primaryColor, isNightMode)}>{repeatMode === 'one' ? <Repeat1 size={16} /> : <Repeat size={16} />} Repeat: {repeatMode === 'one' ? 'ON' : 'OFF'}</button>
                        <div style={{ height: '1px', background: '#eee', margin: '4px 8px' }} />
                        <div style={dropdownTitleStyle}>Sleep Timer</div>
                        {[15, 30, 45, 60].map(mins => <button key={mins} onClick={() => { setSleepTimer(mins); setIsSleepMenuOpen(false); }} style={dropdownItemStyle(sleepTimer === mins, primaryColor, isNightMode)}>{mins} Minutes</button>)}
                    </div>}
                </div>

                <button onClick={skipBackward} style={pillBtnStyle(primaryColor)}><SkipBack size={18} fill="white" /></button>
                <button onClick={togglePlay} style={{ ...pillBtnStyle(primaryColor), background: getDarker(primaryColor), transform: 'scale(1.05)', zIndex: 2 }}>{isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" style={{ marginLeft: '2px' }} />}</button>
                <button onClick={skipForward} style={pillBtnStyle(primaryColor)}><SkipForward size={18} fill="white" /></button>
                
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
                 @keyframes slideUp { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                 input[type='range']::-webkit-slider-thumb { appearance: none; width: 12px; height: 12px; background: white; border: 2px solid ${primaryColor}; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
            `}</style>
        </div>
    );
};

// --- STYLES ---
const pillBtnStyle = (color: string, active?: boolean): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: active ? getDarker(color) : color, color: 'white', border: 'none', borderRadius: '16px',
    height: '46px', width: '100%', cursor: 'pointer', transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.1)', position: 'relative'
});

const dropdownStyle = (isNight: boolean, left = '0'): React.CSSProperties => ({
    position: 'absolute', bottom: 'calc(100% + 12px)', left, width: '220px',
    background: isNight ? '#2d2d2d' : 'white', borderRadius: '16px', padding: '8px', zIndex: 3000,
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)', border: `1px solid ${isNight ? '#3f3f3f' : '#efefef'}`,
    animation: 'slideUp 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
});

const dropdownItemStyle = (active: boolean, color: string, isNight: boolean): React.CSSProperties => ({
    width: '100%', padding: '12px', textAlign: 'left', background: active ? `${color}15` : 'transparent',
    border: 'none', fontSize: '0.85rem', color: active ? color : (isNight ? '#e2e2e2' : '#1e293b'),
    fontWeight: active ? 800 : 500, borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px', cursor: 'pointer'
});

const dropdownTitleStyle: React.CSSProperties = { padding: '8px 12px', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' };
const badgeStyle: React.CSSProperties = { position: 'absolute', top: '4px', right: '4px', background: '#FF4444', color: 'white', fontSize: '9px', width: '14px', height: '14px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, border: '1.5px solid white' };
const spinnerStyle: React.CSSProperties = { width: '18px', height: '18px', border: '2.5px solid rgba(255,255,255,0.3)', borderTop: '2.5px solid white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' };


function getDarker(hex: string) { const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 20); const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 20); const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 20); return `rgb(${r}, ${g}, ${b})`; }
