import React from 'react';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export const CompactAudioBar: React.FC = () => {
    const { activeSong, currentVersion, isPlaying, togglePlay, skipForward, skipBackward, stopAudio } = useAudio();

    if (!activeSong) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '72px', // Above navigation bar (though new app might not have it, let's keep it safe)
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '600px',
            backgroundColor: 'white',
            borderTop: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            zIndex: 150,
            boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
        }}>
            {/* Thumbnail */}
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '4px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                overflow: 'hidden'
            }}>
                <img
                    src="https://via.placeholder.com/40?text=S"
                    alt="Song"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#333',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {activeSong.title}
                </div>
                <div style={{
                    fontSize: '0.75rem',
                    color: '#888',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {currentVersion?.label || activeSong.author}
                </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                    onClick={skipBackward}
                    style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer', padding: '4px' }}
                >
                    <SkipBack size={20} fill="currentColor" />
                </button>
                <button
                    onClick={togglePlay}
                    style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer', padding: '4px' }}
                >
                    {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                </button>
                <button
                    onClick={skipForward}
                    style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer', padding: '4px' }}
                >
                    <SkipForward size={20} fill="currentColor" />
                </button>
                <button
                    onClick={stopAudio}
                    style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', padding: '4px', marginLeft: '4px' }}
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};
