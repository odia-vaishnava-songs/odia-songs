import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import type { Resource, AudioVersion } from '../types';

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
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeSong, setActiveSong] = useState<Resource | null>(null);
    const [currentVersion, setCurrentVersion] = useState<AudioVersion | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDetailView, setIsDetailView] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Create the audio element on mount
    useEffect(() => {
        const audio = new Audio();
        audioRef.current = audio;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', onEnded);
        audio.addEventListener('play', () => setIsPlaying(true));
        audio.addEventListener('pause', () => setIsPlaying(false));

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
        const targetVersion = version || (song.audioVersions && song.audioVersions.length > 0 ? song.audioVersions[0] : { label: 'Default', url: song.audioUrl || '' });
        setCurrentVersion(targetVersion);
        setIsPlaying(false);
    };

    const playSong = (song: Resource, version?: AudioVersion) => {
        setActiveSong(song);
        const targetVersion = version || (song.audioVersions && song.audioVersions.length > 0 ? song.audioVersions[0] : { label: 'Default', url: song.audioUrl || '' });
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
        setActiveSong(null);
        setCurrentVersion(null);
        setIsPlaying(false);
        setCurrentTime(0);
    };
    const togglePlay = () => {
        if (isPlaying) pauseSong();
        else resumeSong();
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
            changeVersion
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
