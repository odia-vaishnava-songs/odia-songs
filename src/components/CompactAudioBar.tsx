import React from 'react';
import { Play, Pause, X } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export const CompactAudioBar: React.FC = () => {
    const { activeSong, currentVersion, isPlaying, togglePlay, stopAudio, currentTime, duration, setIsDetailView, theme } = useAudio();

    if (!activeSong) return null;

    const progress = (currentTime / (duration || 1)) * 100;
    const primaryColor = theme?.color || '#FF9933';

    return (
        <div 
            onClick={() => setIsDetailView(true)}
            style={{
                position: 'fixed',
                bottom: '80px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '92%',
                maxWidth: '500px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 16px',
                zIndex: 2000,
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                cursor: 'pointer',
                overflow: 'hidden',
                animation: 'slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
        >
            {/* Thumbnail with rotating animation if playing */}
            <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                animation: isPlaying ? 'slowRotate 10s linear infinite' : 'none'
            }}>
                <img
                    src="https://api.dicebear.com/7.x/initials/svg?seed=S&backgroundColor=ff9933"
                    alt="Song"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0, marginRight: '8px' }}>
                <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    color: '#1a1a1a',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    letterSpacing: '-0.01em'
                }}>
                    {activeSong.title}
                </div>
                <div style={{
                    fontSize: '0.75rem',
                    color: '#666',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: 600
                }}>
                    {currentVersion?.label || activeSong.author || 'Odia Bhajan'}
                </div>
            </div>

            {/* Controls & Mini Visualizer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={(e) => e.stopPropagation()}>
                {/* Mini Visualizer */}
                {isPlaying && (
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '16px', marginRight: '4px' }}>
                        <div style={{ width: '3px', height: '60%', backgroundColor: primaryColor, borderRadius: '1px', animation: 'bounce 0.8s ease-in-out infinite' }} />
                        <div style={{ width: '3px', height: '100%', backgroundColor: primaryColor, borderRadius: '1px', animation: 'bounce 1.1s ease-in-out infinite' }} />
                        <div style={{ width: '3px', height: '75%', backgroundColor: primaryColor, borderRadius: '1px', animation: 'bounce 0.9s ease-in-out infinite' }} />
                    </div>
                )}
                <button
                    onClick={togglePlay}
                    style={{ 
                        background: primaryColor, 
                        border: 'none', 
                        color: 'white', 
                        cursor: 'pointer', 
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 12px ${primaryColor}40`,
                        transition: 'transform 0.2s active'
                    }}
                >
                    {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" style={{ marginLeft: '2px' }} />}
                </button>
                <button
                    onClick={stopAudio}
                    style={{ background: 'rgba(0,0,0,0.05)', border: 'none', color: '#666', cursor: 'pointer', padding: '8px', borderRadius: '50%' }}
                >
                    <X size={18} />
                </button>
            </div>

            {/* Progress Bar (at the bottom of the pill) */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '3px',
                backgroundColor: `${primaryColor}20`,
                width: '100%'
            }}>
                <div style={{
                    height: '100%',
                    backgroundColor: primaryColor,
                    width: `${progress}%`,
                    transition: 'width 0.1s linear'
                }} />
            </div>

            <style>{`
                @keyframes slideUp {
                    from { transform: translate(-50%, 20px); opacity: 0; }
                    to { transform: translate(-50%, 0); opacity: 1; }
                }
                @keyframes slowRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes bounce {
                    0%, 100% { height: 30%; }
                    50% { height: 100%; }
                }
                button:active {
                    transform: scale(0.9);
                }
            `}</style>
        </div>
    );
};
