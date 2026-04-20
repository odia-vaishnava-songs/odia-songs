import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import type { Resource, AudioVersion } from '../types';
import { TATTVA_THEMES, DEFAULT_THEME } from '../constants/themes';
import type { ThemeDefinition } from '../constants/themes';

interface AudioContextType {
    activeSong: Resource | null;
    currentVersion: AudioVersion | null;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    isDetailView: boolean;
    setIsDetailView: (isDetail: boolean) => void;
    selectSong: (song: Resource, version?: AudioVersion) => void;
    playSong: (song: Resource, version?: AudioVersion) => void;
    pauseSong: () => void;
    resumeSong: () => void;
    togglePlay: () => void;
    stopAudio: () => void;
    seek: (time: number) => void;
    skipForward: () => void;
    skipBackward: () => void;
    reset: () => void;
    changeVersion: (version: AudioVersion) => void;
    theme: ThemeDefinition;
    currentThemeKey: string;
    setTheme: (themeKey: string) => void;
    repeatMode: 'none' | 'one';
    toggleRepeat: () => void;
    sleepTimer: number | null; // minutes remaining
    setSleepTimer: (minutes: number | null) => void;
    autoNext: boolean;
    toggleAutoNext: () => void;
    setSongs: (songs: Resource[]) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeSong, setActiveSong] = useState<Resource | null>(null);
    const [currentVersion, setCurrentVersion] = useState<AudioVersion | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDetailView, setIsDetailView] = useState(false);
    const [repeatMode, setRepeatMode] = useState<'none' | 'one'>('none');
    const [sleepTimer, setSleepTimer] = useState<number | null>(null);
    const [autoNext, setAutoNext] = useState(false);
    const [currentThemeKey, setCurrentThemeKey] = useState(localStorage.getItem('song-theme') || DEFAULT_THEME);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const sleepTimerRef = useRef<any>(null);
    const repeatModeRef = useRef<'none' | 'one'>(repeatMode);
    const autoNextRef = useRef<boolean>(autoNext);
    const allSongsRef = useRef<Resource[]>([]);
    const activeSongRef = useRef<Resource | null>(null);

    const theme = TATTVA_THEMES[currentThemeKey] || TATTVA_THEMES[DEFAULT_THEME];

    const setTheme = (themeKey: string) => {
        setCurrentThemeKey(themeKey);
        localStorage.setItem('song-theme', themeKey);
    };

    // Create the audio element on mount
    useEffect(() => {
        const audio = new Audio();
        // ISKCON Desire Tree and other external servers often block requests with a referrer.
        audio.setAttribute('referrerpolicy', 'no-referrer');
        
        audioRef.current = audio;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const onEnded = () => {
            if (repeatModeRef.current === 'one') {
                audio.currentTime = 0;
                audio.play().catch(console.error);
            } else if (autoNextRef.current && allSongsRef.current.length > 0 && activeSongRef.current) {
                const currentIndex = allSongsRef.current.findIndex(s => s.id === activeSongRef.current?.id);
                if (currentIndex !== -1 && currentIndex < allSongsRef.current.length - 1) {
                    // We need a way to trigger playSong, but since we're in an effect, we'll manually update source
                    // or better, trigger a re-render by calling the exposed functions if possible
                    // For now, let's use a simpler approach: trigger a custom event that SongsPage can hear
                    window.dispatchEvent(new CustomEvent('play-next-song'));
                } else {
                    setIsPlaying(false);
                }
            } else {
                setIsPlaying(false);
            }
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', onEnded);
        audio.addEventListener('play', () => setIsPlaying(true));
        audio.addEventListener('pause', () => setIsPlaying(false));
        audio.addEventListener('error', () => {
            const error = audio.error;
            console.error("[Audio Engine Error]:", {
                code: error?.code,
                message: error?.message,
                src: audio.src
            });
            setIsPlaying(false);
        });

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', onEnded);
            audio.pause();
        };
    }, []);

    // Sync audio source when version changes
    useEffect(() => {
        if (audioRef.current && currentVersion) {
            const wasPlaying = isPlaying;
            audioRef.current.src = currentVersion.url;
            if (wasPlaying) {
                audioRef.current.play().catch(console.error);
            }
        }
    }, [currentVersion]);

    const selectSong = (song: Resource, version?: AudioVersion) => {
        setActiveSong(song);
        activeSongRef.current = song;
        const targetVersion = version || (song.audioVersions && song.audioVersions.length > 0 ? song.audioVersions[0] : { label: song.vocalist || 'Default', url: song.audioUrl || '' });
        setCurrentVersion(targetVersion);
        setIsPlaying(false);
    };

    const playSong = (song: Resource, version?: AudioVersion) => {
        setActiveSong(song);
        activeSongRef.current = song;
        const targetVersion = version || (song.audioVersions && song.audioVersions.length > 0 ? song.audioVersions[0] : { label: song.vocalist || 'Default', url: song.audioUrl || '' });
        setCurrentVersion(targetVersion);
        setIsPlaying(true);
        if (audioRef.current) {
            audioRef.current.play().catch(console.error);
        }
    };

    const pauseSong = () => audioRef.current?.pause();
    const resumeSong = () => audioRef.current?.play();
    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = '';
        }
        if (sleepTimerRef.current) {
            clearInterval(sleepTimerRef.current);
            sleepTimerRef.current = null;
        }
        setSleepTimer(null);
        setActiveSong(null);
        setCurrentVersion(null);
        setIsPlaying(false);
        setCurrentTime(0);
    };
    const togglePlay = () => {
        if (isPlaying) pauseSong();
        else resumeSong();
    };

    const toggleRepeat = () => {
        const nextMode = repeatMode === 'none' ? 'one' : 'none';
        setRepeatMode(nextMode);
        repeatModeRef.current = nextMode;
    };

    const seek = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const skipForward = () => { if (audioRef.current) audioRef.current.currentTime += 10; };
    const skipBackward = () => { if (audioRef.current) audioRef.current.currentTime -= 10; };
    const reset = () => { if (audioRef.current) audioRef.current.currentTime = 0; };

    const changeVersion = (version: AudioVersion) => {
        setCurrentVersion(version);
    };

    const toggleAutoNext = () => {
        const nextState = !autoNext;
        setAutoNext(nextState);
        autoNextRef.current = nextState;
    };

    const setSongs = (songs: Resource[]) => {
        allSongsRef.current = songs;
    };

    // Sleep Timer Logic
    useEffect(() => {
        if (sleepTimer !== null && sleepTimer > 0) {
            if (sleepTimerRef.current) clearInterval(sleepTimerRef.current);
            sleepTimerRef.current = setInterval(() => {
                setSleepTimer(prev => {
                    if (prev === null || prev <= 1) {
                        stopAudio();
                        return null;
                    }
                    return prev - 1;
                });
            }, 60000); // Check every minute
        } else if (sleepTimer === 0) {
            stopAudio();
        }

        return () => {
            if (sleepTimerRef.current) clearInterval(sleepTimerRef.current);
        };
    }, [sleepTimer]);

    return (
        <AudioContext.Provider value={{
            activeSong,
            currentVersion,
            isPlaying,
            currentTime,
            duration,
            isDetailView,
            setIsDetailView,
            selectSong,
            playSong,
            pauseSong,
            resumeSong,
            togglePlay,
            stopAudio,
            seek,
            skipForward,
            skipBackward,
            reset,
            changeVersion,
            theme,
            currentThemeKey,
            setTheme,
            repeatMode,
            toggleRepeat,
            sleepTimer,
            setSleepTimer,
            autoNext,
            toggleAutoNext,
            setSongs
        }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};
