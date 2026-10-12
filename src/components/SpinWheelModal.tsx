import React, { useState, useRef, useEffect } from 'react';
import { X, User } from 'lucide-react';
import { celebrateBlast, celebrate } from '../utils/celebration';
import { DEFAULT_AUTHOR_SLICES, type SpinAuthorSlice, type AuthorSongItem } from '../data/spinWheelAuthors';
import { RESOURCES } from '../data/resources';
import { standardizeAuthorName } from '../utils/matching';
import type { Resource } from '../types';

// Synthesize pleasant winning chime via Web Audio API
const playCelebrationSound = () => {
    try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.4);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + idx * 0.12);
            osc.stop(ctx.currentTime + idx * 0.12 + 0.45);
        });
    } catch {
        // audio might be restricted by browser autoplay policy
    }
};
// Constant geometric path for 6-petal detached wheel with rounded fillets
const PETAL_PATH_DATA = (() => {
    const spanDeg = 55; // 55 deg span out of 60 deg, giving 5 deg gap between floating petals
    const rIn = 30;     // inner opening around center hub
    const rOut = 150;   // outer arc radius
    const crOut = 9;    // outer corners rounded fillet
    const crIn = 5;     // inner corners rounded fillet

    const halfSpan = spanDeg / 2;
    const startDeg = -halfSpan;
    const endDeg = halfSpan;

    const d2r = (d: number) => (d * Math.PI) / 180;
    const daOut = (crOut / rOut) * (180 / Math.PI);
    const daIn = (crIn / rIn) * (180 / Math.PI);

    const aStartOut = startDeg + daOut;
    const aEndOut = endDeg - daOut;
    const aStartIn = startDeg + daIn;
    const aEndIn = endDeg - daIn;

    const pt = (a: number, r: number) => [+(Math.cos(d2r(a)) * r).toFixed(2), +(Math.sin(d2r(a)) * r).toFixed(2)];

    const pStartIn_Radial = pt(startDeg, rIn + crIn);
    const pStartOut_Radial = pt(startDeg, rOut - crOut);
    const pStartOut_Arc = pt(aStartOut, rOut);
    const pEndOut_Arc = pt(aEndOut, rOut);
    const pEndOut_Radial = pt(endDeg, rOut - crOut);
    const pEndIn_Radial = pt(endDeg, rIn + crIn);
    const pEndIn_Arc = pt(aEndIn, rIn);
    const pStartIn_Arc = pt(aStartIn, rIn);

    const cStartOut = pt(startDeg, rOut);
    const cEndOut = pt(endDeg, rOut);
    const cEndIn = pt(endDeg, rIn);
    const cStartIn = pt(startDeg, rIn);

    return [
        `M ${pStartIn_Radial[0]} ${pStartIn_Radial[1]}`,
        `L ${pStartOut_Radial[0]} ${pStartOut_Radial[1]}`,
        `Q ${cStartOut[0]} ${cStartOut[1]} ${pStartOut_Arc[0]} ${pStartOut_Arc[1]}`,
        `A ${rOut} ${rOut} 0 0 1 ${pEndOut_Arc[0]} ${pEndOut_Arc[1]}`,
        `Q ${cEndOut[0]} ${cEndOut[1]} ${pEndOut_Radial[0]} ${pEndOut_Radial[1]}`,
        `L ${pEndIn_Radial[0]} ${pEndIn_Radial[1]}`,
        `Q ${cEndIn[0]} ${cEndIn[1]} ${pEndIn_Arc[0]} ${pEndIn_Arc[1]}`,
        `A ${rIn} ${rIn} 0 0 0 ${pStartIn_Arc[0]} ${pStartIn_Arc[1]}`,
        `Q ${cStartIn[0]} ${cStartIn[1]} ${pStartIn_Radial[0]} ${pStartIn_Radial[1]}`,
        'Z'
    ].join(' ');
})();

export const SpinWheelModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onSelectAuthor?: (authorName: string) => void;
    onSelectSong?: (song: AuthorSongItem) => void;
    allSongs?: Resource[];
    autoSpin?: boolean;
}> = ({ isOpen, onClose, onSelectAuthor, onSelectSong, allSongs = [], autoSpin = true }) => {
    const [slices] = useState<SpinAuthorSlice[]>(DEFAULT_AUTHOR_SLICES);
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [winningSlice, setWinningSlice] = useState<SpinAuthorSlice | null>(null);
    const [selectedSongResult, setSelectedSongResult] = useState<AuthorSongItem | null>(null);
    const [showRewardModal, setShowRewardModal] = useState(false);
    const [resolvedPhotos, setResolvedPhotos] = useState<Record<number, string>>(() => {
        const initial: Record<number, string> = {};
        DEFAULT_AUTHOR_SLICES.forEach(slice => {
            if (slice.photoUrl) initial[slice.id] = slice.photoUrl;
        });
        return initial;
    });
    const rotationRef = useRef(0);
    const shownSongHistoryRef = useRef<Record<number, string[]>>({});

    // Dynamically retrieve all songs belonging to the spun author from live DB & local resources
    const getAuthorSongPool = (slice: SpinAuthorSlice): AuthorSongItem[] => {
        const sliceAuthorStd = standardizeAuthorName(slice.authorNameEnglish);
        const sourcePool = (allSongs && allSongs.length > 0) ? allSongs : RESOURCES;

        const matched: AuthorSongItem[] = [];
        const seenKeys = new Set<string>();

        sourcePool.forEach(s => {
            if (!s) return;
            const authorStd = standardizeAuthorName(s.author || '');
            const authorLower = (s.author || '').toLowerCase();
            const sliceLower = slice.authorNameEnglish.toLowerCase();

            const isMatch = authorStd === sliceAuthorStd ||
                authorLower.includes(sliceLower) ||
                sliceLower.includes(authorLower) ||
                (slice.authorNameOdia && ((s as any).author_odia || '').includes(slice.authorNameOdia));

            if (isMatch) {
                const key = (s.id || s.title_english || s.title).toLowerCase().trim();
                if (!seenKeys.has(key)) {
                    seenKeys.add(key);
                    let odia = s.title_odia || '';
                    let eng = s.title_english || '';
                    if (!odia && s.title) {
                        odia = s.title.split('(')[0].trim();
                    }
                    if (!eng && s.title) {
                        const m = s.title.match(/\(([^)]+)\)/);
                        eng = m ? m[1].trim() : s.title;
                    }
                    matched.push({
                        id: s.id,
                        titleOdia: odia || s.title || 'ଭଜନ',
                        titleEnglish: eng || s.title || '',
                        searchQuery: s.title_english || s.title_odia || s.title
                    });
                }
            }
        });

        // Also incorporate curated static songs from slice.songs if any are missing
        (slice.songs || []).forEach(cs => {
            const key = (cs.id || cs.titleEnglish).toLowerCase().trim();
            if (!seenKeys.has(key) && !matched.some(m => m.titleEnglish.toLowerCase() === cs.titleEnglish.toLowerCase())) {
                seenKeys.add(key);
                matched.push(cs);
            }
        });

        return matched;
    };

    // Pick a song without repeating already shown songs for this author
    const pickSongForAuthor = (slice: SpinAuthorSlice): AuthorSongItem | null => {
        const pool = getAuthorSongPool(slice);
        if (pool.length === 0) return null;
        if (pool.length === 1) return pool[0];

        const history = shownSongHistoryRef.current[slice.id] || [];
        let available = pool.filter(s => {
            const key = (s.id || s.titleEnglish).toLowerCase().trim();
            return !history.includes(key);
        });

        // When all songs have been shown, reset history but exclude the very last shown to avoid back-to-back duplicate
        if (available.length === 0) {
            const lastShown = history[history.length - 1];
            shownSongHistoryRef.current[slice.id] = lastShown ? [lastShown] : [];
            available = pool.filter(s => (s.id || s.titleEnglish).toLowerCase().trim() !== lastShown);
            if (available.length === 0) available = pool;
        }

        const randomIndex = Math.floor(Math.random() * available.length);
        const chosenSong = available[randomIndex];

        const chosenKey = (chosenSong.id || chosenSong.titleEnglish).toLowerCase().trim();
        shownSongHistoryRef.current[slice.id] = [...(shownSongHistoryRef.current[slice.id] || []), chosenKey];

        return chosenSong;
    };

    // Auto-detect author photo whether saved in pure Odia or English name (.webp, .jpg, .png)
    useEffect(() => {
        slices.forEach(slice => {
            const rawOdia = [slice.authorNameOdia, slice.line1, slice.badgeText];
            const rawEnglish = [
                slice.authorNameEnglish.toLowerCase().split(' ')[0],
                slice.authorNameEnglish.toLowerCase().replace(/\s+/g, '_'),
                slice.authorNameEnglish.toLowerCase().replace(/[\s_-]+/g, ''),
                slice.authorNameEnglish.toLowerCase().includes('locana') ? 'lochandas' : '',
                slice.authorNameEnglish.toLowerCase().includes('krsna') ? 'krishnadasa_kaviraja' : '',
                slice.authorNameEnglish.toLowerCase().includes('bhaktivinoda') ? 'bhaktivinoda_thakura' : '',
            ].filter(Boolean);
            const exts = ['.webp', '.jpg', '.jpeg', '.png'];
            const candidates: string[] = [];

            if (slice.photoUrl) candidates.push(slice.photoUrl);

            rawOdia.forEach(name => {
                if (!name) return;
                exts.forEach(ext => {
                    candidates.push(`/authors/${name}${ext}`);
                    candidates.push(`/authors/${encodeURIComponent(name)}${ext}`);
                });
            });

            rawEnglish.forEach(name => {
                if (!name) return;
                exts.forEach(ext => {
                    candidates.push(`/authors/${name}${ext}`);
                });
            });

            const checkCandidate = (index: number) => {
                if (index >= candidates.length) return;
                const url = candidates[index];
                const img = new Image();
                img.onload = () => {
                    setResolvedPhotos(prev => ({ ...prev, [slice.id]: url }));
                };
                img.onerror = () => {
                    checkCandidate(index + 1);
                };
                img.src = url;
            };

            checkCandidate(0);
        });
    }, [slices]);

    const numSlices = slices.length;
    const sliceAngle = 360 / numSlices;

    const handleSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setWinningSlice(null);
        setSelectedSongResult(null);
        setShowRewardModal(false);

        // Pick a random slice to land on
        const chosenIndex = Math.floor(Math.random() * numSlices);
        const chosen = slices[chosenIndex];

        // The pointer is at top (12 o'clock = 270 deg in SVG canvas coordinates)
        // Center of slice i is (i * sliceAngle) + (sliceAngle / 2)
        const sliceCenter = (chosenIndex * sliceAngle) + (sliceAngle / 2);
        const targetOffset = (270 - sliceCenter + 360) % 360;

        // Add 5 to 7 full extra revolutions for realistic momentum
        const extraRotations = 360 * (5 + Math.floor(Math.random() * 3));
        const currentMod = rotationRef.current % 360;
        const newTotalRotation = rotationRef.current + (360 - currentMod) + extraRotations + targetOffset;

        rotationRef.current = newTotalRotation;
        setRotation(newTotalRotation);

        // Transition duration is 4.5 seconds
        setTimeout(() => {
            setIsSpinning(false);
            setWinningSlice(chosen);
            const pickedSong = pickSongForAuthor(chosen);
            setSelectedSongResult(pickedSong);
            setShowRewardModal(true);
            playCelebrationSound();
            celebrateBlast();
            celebrate();
        }, 4600);
    };

    // Auto-spin immediately when modal opens by clicking the trigger button
    useEffect(() => {
        if (isOpen && autoSpin) {
            const timer = setTimeout(() => {
                handleSpin();
            }, 250);
            return () => clearTimeout(timer);
        }
    }, [isOpen, autoSpin]);

    if (!isOpen) return null;


    return (
        <div 
            className="spin-wheel-overlay"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(5, 4, 12, 0.9)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: 'clamp(6px, 1.5vw, 16px)',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}>
            {/* Radial Background Sunburst Rays */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle at center, rgba(126, 87, 194, 0.3) 0%, rgba(8, 7, 14, 0.96) 75%)',
                pointerEvents: 'none'
            }} />

            {/* Modal Card (Responsive on Laptop & Mobile) */}
            <div 
                className="spin-wheel-card"
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 'min(96vw, 490px)',
                    maxHeight: 'min(97dvh, 780px)',
                    background: 'linear-gradient(180deg, #1b152d 0%, #0d0a17 100%)',
                    border: '1.5px solid rgba(255, 215, 0, 0.42)',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.95), 0 0 45px rgba(126, 87, 194, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.15)',
                    borderRadius: 'clamp(18px, 3.5vw, 26px)',
                    padding: 'clamp(12px, 1.8vh, 20px) clamp(8px, 2vw, 18px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    disabled={isSpinning}
                    title="Close"
                    style={{
                        position: 'absolute',
                        top: 'clamp(8px, 1.5vh, 14px)',
                        right: 'clamp(8px, 2vw, 14px)',
                        background: 'rgba(255, 255, 255, 0.12)',
                        border: 'none',
                        color: '#fff',
                        width: 'clamp(32px, 4vw, 36px)',
                        height: 'clamp(32px, 4vw, 36px)',
                        minWidth: '34px',
                        minHeight: '34px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: isSpinning ? 'not-allowed' : 'pointer',
                        opacity: isSpinning ? 0.4 : 1,
                        transition: 'background 0.2s',
                        zIndex: 20,
                        touchAction: 'manipulation'
                    }}
                >
                    <X size={18} />
                </button>

                {/* Header Title: Only shown during wheel / spin phase, hidden on result screen */}
                {!showRewardModal && (
                    <>
                        <h2 style={{
                            margin: '0 0 3px',
                            fontSize: 'clamp(1.16rem, 3.6vw, 1.52rem)',
                            fontWeight: 800,
                            color: '#FFE082',
                            letterSpacing: '0.3px',
                            lineHeight: 1.32,
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 0 16px rgba(255, 215, 0, 0.4)',
                            fontFamily: 'var(--font-odia-sans)'
                        }}>
                            ଦୈନିକ ଲେଖକ ଆଶୀର୍ବାଦ ଚକ୍ର
                        </h2>
                        <p style={{
                            margin: '0 0 clamp(4px, 0.8vh, 8px)',
                            fontSize: 'clamp(0.70rem, 2.1vw, 0.80rem)',
                            color: '#ded7f2',
                            maxWidth: '92%',
                            lineHeight: 1.45,
                            fontFamily: 'var(--font-odia-sans)',
                            fontWeight: 500
                        }}>
                            ଘୁରାନ୍ତୁ ଏବଂ ପାଆନ୍ତୁ ଶ୍ରୀ ବୈଷ୍ଣବ ଆଚାର୍ଯ୍ୟଙ୍କ ଦିବ୍ୟ କୃପା ଓ ଆଶୀର୍ବାଦ
                        </p>
                    </>
                )}

                {/* THE WHEEL CONTAINER (Grand size to fit mobile screens) */}
                <div 
                    onClick={!isSpinning && !showRewardModal ? handleSpin : undefined}
                    style={{
                        position: 'relative',
                        width: showRewardModal
                            ? 'clamp(280px, min(88vw, 44vh), 370px)'
                            : 'clamp(310px, min(92vw, 50vh), 420px)',
                        height: showRewardModal
                            ? 'clamp(280px, min(88vw, 44vh), 370px)'
                            : 'clamp(310px, min(92vw, 50vh), 420px)',
                        aspectRatio: '1 / 1',
                        margin: showRewardModal
                            ? 'clamp(12px, 2vh, 18px) 0 clamp(6px, 1vh, 10px)'
                            : 'clamp(4px, 0.8vh, 8px) 0 clamp(12px, 1.6vh, 18px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        cursor: !isSpinning && !showRewardModal ? 'pointer' : 'default',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    {/* Celestial Golden-Amethyst Halo behind the Wheel */}
                    <div style={{
                        position: 'absolute',
                        inset: '-10px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.22) 0%, rgba(126, 87, 194, 0.25) 50%, transparent 72%)',
                        filter: 'blur(12px)',
                        pointerEvents: 'none',
                        zIndex: 0
                    }} />

                    {/* Radiating Spiritual Beams (12 Subtle Golden Spokes) */}
                    <div style={{
                        position: 'absolute',
                        inset: '-6px',
                        borderRadius: '50%',
                        backgroundImage: 'repeating-conic-gradient(from 0deg, rgba(255, 215, 0, 0.08) 0deg 15deg, transparent 15deg 30deg)',
                        pointerEvents: 'none',
                        zIndex: 1,
                        opacity: 0.85
                    }} />

                    {/* Rotating SVG Wheel (6 Detached Floating Petals with Rich Jewel Depth) */}
                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        contain: 'paint',
                        transform: `rotate(${rotation}deg)`,
                        transition: isSpinning ? 'transform 4.5s cubic-bezier(0.12, 0.8, 0.2, 1)' : 'none',
                        willChange: 'transform'
                    }}>
                        <svg
                            viewBox="-160 -160 320 320"
                            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                        >
                            <defs>
                                {/* Multi-Layer 3D Drop Shadow for Floating Petals */}
                                <filter id="petal3DShadow" x="-30%" y="-30%" width="160%" height="160%">
                                    <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.8" />
                                    <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="#FFD54F" floodOpacity="0.25" />
                                </filter>

                                <filter id="medallionShadow" x="-40%" y="-40%" width="180%" height="180%">
                                    <feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="#000000" floodOpacity="0.7" />
                                </filter>

                                {/* Deep Enameled Velvet Gradients for All 6 Petals */}
                                <linearGradient id="petalGrad-1" x1="0%" y1="0%" x2="100%" y2="80%">
                                    <stop offset="0%" stopColor="#A881E9" />
                                    <stop offset="45%" stopColor="#7E57C2" />
                                    <stop offset="100%" stopColor="#4A148C" />
                                </linearGradient>

                                <linearGradient id="petalGrad-2" x1="0%" y1="0%" x2="100%" y2="80%">
                                    <stop offset="0%" stopColor="#FF5C8D" />
                                    <stop offset="45%" stopColor="#D81B60" />
                                    <stop offset="100%" stopColor="#880E4F" />
                                </linearGradient>

                                <linearGradient id="petalGrad-3" x1="0%" y1="0%" x2="100%" y2="80%">
                                    <stop offset="0%" stopColor="#8E63DB" />
                                    <stop offset="45%" stopColor="#5E35B1" />
                                    <stop offset="100%" stopColor="#311B92" />
                                </linearGradient>

                                <linearGradient id="petalGrad-4" x1="0%" y1="0%" x2="100%" y2="80%">
                                    <stop offset="0%" stopColor="#FF4081" />
                                    <stop offset="45%" stopColor="#E91E63" />
                                    <stop offset="100%" stopColor="#AD1457" />
                                </linearGradient>

                                <linearGradient id="petalGrad-5" x1="0%" y1="0%" x2="100%" y2="80%">
                                    <stop offset="0%" stopColor="#7C4DFF" />
                                    <stop offset="45%" stopColor="#4A148C" />
                                    <stop offset="100%" stopColor="#1A004D" />
                                </linearGradient>

                                <linearGradient id="petalGrad-6" x1="0%" y1="0%" x2="100%" y2="80%">
                                    <stop offset="0%" stopColor="#FF4D85" />
                                    <stop offset="45%" stopColor="#C2185B" />
                                    <stop offset="100%" stopColor="#700B36" />
                                </linearGradient>

                                {/* Metallic Gold Gradient for Bezel and Accents */}
                                <radialGradient id="centerGoldGrad" cx="35%" cy="35%" r="65%">
                                    <stop offset="0%" stopColor="#FFFDE7" />
                                    <stop offset="30%" stopColor="#FFF9C4" />
                                    <stop offset="70%" stopColor="#FFD54F" />
                                    <stop offset="100%" stopColor="#FF8F00" />
                                </radialGradient>

                                <radialGradient id="authorMedallionGrad" cx="35%" cy="35%" r="65%">
                                    <stop offset="0%" stopColor="#FFFDE7" />
                                    <stop offset="50%" stopColor="#FFF9C4" />
                                    <stop offset="100%" stopColor="#FFE082" />
                                </radialGradient>

                                {/* Circular Clip Paths for each Author Photo */}
                                {slices.map(slice => (
                                    <clipPath key={`clip-${slice.id}`} id={`clip-author-${slice.id}`}>
                                        <circle cx="0" cy="0" r="16.5" />
                                    </clipPath>
                                ))}
                            </defs>

                            {/* 6 Individual Floating Petals (Detached with Rounded Corners & Jewel Depth) */}
                            {slices.map((slice, index) => {
                                const midAngleDeg = (index * sliceAngle) + (sliceAngle / 2);
                                const resolvedPhoto = resolvedPhotos[slice.id];
                                // Consistent orientation matching reference: top of letters facing outer rim, baseline facing hub
                                const textRot = 90;

                                return (
                                    <g key={slice.id} transform={`rotate(${midAngleDeg})`}>
                                        {/* Individual Detached Rounded Petal with Rich Shading */}
                                        <path
                                            d={PETAL_PATH_DATA}
                                            fill={`url(#petalGrad-${slice.id})`}
                                            stroke="rgba(255, 224, 130, 0.45)"
                                            strokeWidth="1.4"
                                            filter="url(#petal3DShadow)"
                                        />

                                        {/* Inner Gloss / Specular Top Highlight along the curved rim */}
                                        <path
                                            d="M 144 -20 A 147 147 0 0 1 144 20"
                                            fill="none"
                                            stroke="rgba(255, 255, 255, 0.35)"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />

                                        {/* CIRCULAR AUTHOR PHOTO MEDALLION (Jeweled Golden Reliquary) */}
                                        <g transform="translate(58, 0)">
                                            {/* Outer Golden Beaded Accent Ring */}
                                            <circle
                                                r="21.5"
                                                fill="none"
                                                stroke="rgba(255, 215, 0, 0.4)"
                                                strokeWidth="1"
                                                strokeDasharray="2.2 2.2"
                                            />

                                            {/* Outer Cream/Gold Circle Rim */}
                                            <circle
                                                r="19"
                                                fill="url(#authorMedallionGrad)"
                                                stroke="#FFD54F"
                                                strokeWidth="2.2"
                                                filter="url(#medallionShadow)"
                                            />

                                            {/* Author portrait: Head oriented towards the outer rim (TOP / T) of each petal */}
                                            <g transform="rotate(90)">
                                                {resolvedPhoto ? (
                                                    <g clipPath={`url(#clip-author-${slice.id})`}>
                                                        <image
                                                            href={resolvedPhoto}
                                                            x="-16.5"
                                                            y="-16.5"
                                                            width="33"
                                                            height="33"
                                                            preserveAspectRatio="xMidYMid slice"
                                                        />
                                                    </g>
                                                ) : (
                                                    <g>
                                                        <path d="M -3 -11 L 0 -3.5 L 3 -11 Z" fill="#E65100" opacity="0.85" />
                                                        <circle cx="0" cy="-2" r="0.9" fill="#D84315" />
                                                        <text
                                                            x="0"
                                                            y="3"
                                                            textAnchor="middle"
                                                            dominantBaseline="central"
                                                            fill="#4A148C"
                                                            fontSize="8.5"
                                                            fontWeight="900"
                                                            fontFamily="var(--font-odia-sans)"
                                                        >
                                                            {slice.badgeText}
                                                        </text>
                                                    </g>
                                                )}
                                            </g>

                                            {/* Inner Specular Gold Ring */}
                                            <circle
                                                r="17"
                                                fill="none"
                                                stroke="rgba(255, 255, 255, 0.6)"
                                                strokeWidth="1"
                                            />
                                        </g>

                                        {/* LEKHAKA NAME (Outer Head of Petal - Large, Bold, High-Contrast Typography) */}
                                        <g transform={`translate(117, 0) rotate(${textRot})`}>
                                            <text
                                                x="0"
                                                y="-6.8"
                                                fill="#FFFFFF"
                                                fontSize="12.5"
                                                fontWeight="900"
                                                textAnchor="middle"
                                                style={{
                                                    fontFamily: 'var(--font-odia-sans)',
                                                    letterSpacing: '0.25px',
                                                    textShadow: '0 2px 6px rgba(0,0,0,0.98), 0 0 4px rgba(0,0,0,0.9)'
                                                }}
                                            >
                                                {slice.line1}
                                            </text>
                                            <text
                                                x="0"
                                                y="8.2"
                                                fill="#FFE082"
                                                fontSize="11.2"
                                                fontWeight="800"
                                                textAnchor="middle"
                                                opacity="0.98"
                                                style={{
                                                    fontFamily: 'var(--font-odia-sans)',
                                                    letterSpacing: '0.2px',
                                                    textShadow: '0 2px 5px rgba(0,0,0,0.95), 0 0 3px rgba(0,0,0,0.9)'
                                                }}
                                            >
                                                {slice.line2}
                                            </text>
                                        </g>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* STATIONARY CENTER GOLDEN CHAKRA HUB WITH FACETED 3D POINTER */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 15,
                        pointerEvents: 'none'
                    }}>
                        <svg viewBox="-160 -160 320 320" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                            <defs>
                                <radialGradient id="centerGoldGradStationary" cx="35%" cy="35%" r="65%">
                                    <stop offset="0%" stopColor="#FFFDE7" />
                                    <stop offset="35%" stopColor="#FFD54F" />
                                    <stop offset="80%" stopColor="#FF8F00" />
                                    <stop offset="100%" stopColor="#E65100" />
                                </radialGradient>
                                <linearGradient id="pointerLeftFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#FFFDE7" />
                                    <stop offset="100%" stopColor="#FFD54F" />
                                </linearGradient>
                                <linearGradient id="pointerRightFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#FFB300" />
                                    <stop offset="100%" stopColor="#E65100" />
                                </linearGradient>
                            </defs>

                            {/* 3D Chiseled Golden Pointer Arrow (pointing straight UP to winning petal at 12 o'clock) */}
                            <g filter="drop-shadow(0 3px 5px rgba(0,0,0,0.85))">
                                {/* Left Facet (Light Gold) */}
                                <polygon
                                    points="0,-29 -7,-14 0,-16.5"
                                    fill="url(#pointerLeftFacet)"
                                    stroke="#FFE082"
                                    strokeWidth="0.8"
                                    strokeLinejoin="round"
                                />
                                {/* Right Facet (Deep Amber Gold) */}
                                <polygon
                                    points="0,-29 7,-14 0,-16.5"
                                    fill="url(#pointerRightFacet)"
                                    stroke="#FFE082"
                                    strokeWidth="0.8"
                                    strokeLinejoin="round"
                                />
                            </g>

                            {/* Center Golden Chakra Disc with 12 Sunburst Petals */}
                            <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.8))">
                                {/* Outer Beaded / Ray Ring */}
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="20.5"
                                    fill="none"
                                    stroke="#FFD54F"
                                    strokeWidth="1.2"
                                    strokeDasharray="2.5 2.5"
                                />

                                {/* Raised 3D Gold Disc */}
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="18.5"
                                    fill="url(#centerGoldGradStationary)"
                                    stroke="#FFF9C4"
                                    strokeWidth="2.2"
                                />

                                {/* Inner Royal Deep Center Medallion */}
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="14.5"
                                    fill="radial-gradient(circle, #5E35B1 0%, #311B92 100%)"
                                    stroke="rgba(255, 215, 0, 0.6)"
                                    strokeWidth="1"
                                />

                                {/* Auspicious Golden ॐ */}
                                <text
                                    x="0"
                                    y="1"
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    fill="#FFF9C4"
                                    fontSize="12.5"
                                    fontWeight="900"
                                    style={{
                                        filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.9)) drop-shadow(0 0 5px rgba(255,215,0,0.8))'
                                    }}
                                >
                                    ॐ
                                </text>
                            </g>
                        </svg>
                    </div>
                </div>

                {/* BOTTOM AREA: SLIM BUTTON WHILE IDLE/SPINNING OR RESULT CARD UNDER WHEEL WHEN FINISHED */}
                {!showRewardModal ? (
                    <button
                        onClick={handleSpin}
                        disabled={isSpinning}
                        style={{
                            position: 'relative',
                            height: '42px',
                            padding: '0 clamp(20px, 4vw, 28px)',
                            minWidth: 'clamp(170px, 42vw, 210px)',
                            background: isSpinning
                                ? 'linear-gradient(135deg, #2b113d 0%, #160a22 100%)'
                                : 'linear-gradient(180deg, #2a2240 0%, #151124 100%)',
                            color: isSpinning ? '#FFD54F' : '#FFF8E1',
                            border: isSpinning
                                ? '1.5px solid #FFD54F'
                                : '1.4px solid rgba(255, 215, 0, 0.65)',
                            borderRadius: '24px',
                            cursor: isSpinning ? 'not-allowed' : 'pointer',
                            boxShadow: isSpinning
                                ? '0 0 16px rgba(255, 215, 0, 0.5), 0 0 24px rgba(233, 30, 99, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.35)'
                                : '0 6px 20px rgba(0, 0, 0, 0.65), 0 0 15px rgba(255, 215, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.25)',
                            animation: isSpinning ? 'pulseSpiritualGlow 1.8s infinite ease-in-out' : 'none',
                            transition: 'all 0.25s ease',
                            outline: 'none',
                            flexShrink: 0,
                            touchAction: 'manipulation',
                            userSelect: 'none',
                            WebkitTapHighlightColor: 'transparent',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxSizing: 'border-box'
                        }}
                        onMouseEnter={(e) => {
                            if (!isSpinning) {
                                e.currentTarget.style.transform = 'scale(1.03)';
                                e.currentTarget.style.borderColor = '#FFD54F';
                                e.currentTarget.style.boxShadow = '0 6px 22px rgba(255, 215, 0, 0.5), 0 0 18px rgba(255, 215, 0, 0.3)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isSpinning) {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.65)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.65), 0 0 15px rgba(255, 215, 0, 0.2)';
                            }
                        }}
                    >
                        {isSpinning ? (
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '7px',
                                overflow: 'visible'
                            }}>
                                {/* Sacred Golden Blooming Lotus SVG */}
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    style={{
                                        display: 'inline-block',
                                        flexShrink: 0,
                                        animation: 'spinChakra 2.2s linear infinite',
                                        filter: 'drop-shadow(0 0 5px #FFD54F)'
                                    }}
                                >
                                    <circle cx="12" cy="12" r="10" stroke="#FFD54F" strokeWidth="1.2" strokeDasharray="2 2" />
                                    <circle cx="12" cy="12" r="5" fill="#FFA000" stroke="#FFE082" strokeWidth="1" />
                                    <path d="M12 2 C12 6 15 9 12 12 C9 9 12 6 12 2 Z" fill="#FFE082" />
                                    <path d="M12 22 C12 18 9 15 12 12 C15 15 12 18 12 22 Z" fill="#FFE082" />
                                    <path d="M2 12 C6 12 9 9 12 12 C9 15 6 12 2 12 Z" fill="#FFE082" />
                                    <path d="M22 12 C18 12 15 15 12 12 C15 9 18 12 22 12 Z" fill="#FFE082" />
                                    <circle cx="12" cy="12" r="2.2" fill="#FFFFFF" />
                                </svg>
                                <span style={{
                                    display: 'inline-block',
                                    fontFamily: 'var(--font-odia-sans)',
                                    fontWeight: 800,
                                    fontSize: 'clamp(0.92rem, 2.6vw, 1.05rem)',
                                    lineHeight: 1.55,
                                    paddingTop: '2px',
                                    paddingBottom: '2px',
                                    letterSpacing: '0.2px',
                                    overflow: 'visible',
                                    animation: 'pulseTextGlow 1.8s ease-in-out infinite'
                                }}>
                                    କୃପା ବର୍ଷଣ ହେଉଛି...
                                </span>
                                {/* Sacred 8-Point Golden Star SVG */}
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="#FFE082"
                                    style={{
                                        display: 'inline-block',
                                        flexShrink: 0,
                                        animation: 'pulseSoft 1.2s infinite alternate',
                                        filter: 'drop-shadow(0 0 5px #FFD54F)'
                                    }}
                                >
                                    <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
                                </svg>
                            </div>
                        ) : (
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                fontFamily: 'var(--font-odia-sans)',
                                fontWeight: 800,
                                fontSize: 'clamp(0.92rem, 2.6vw, 1.05rem)',
                                lineHeight: 1.55,
                                paddingTop: '2px',
                                paddingBottom: '2px',
                                color: '#FFF9C4',
                                letterSpacing: '0.3px',
                                textShadow: '0 2px 8px rgba(255, 193, 7, 0.45)',
                                overflow: 'visible'
                            }}>
                                <span>✦</span>
                                <span>ଚକ୍ର ଘୁରାନ୍ତୁ</span>
                                <span>✦</span>
                            </div>
                        )}
                    </button>
                ) : (
                    winningSlice && (
                        <div style={{
                            width: '100%',
                            maxWidth: '430px',
                            background: 'linear-gradient(135deg, rgba(43, 17, 61, 0.96) 0%, rgba(22, 10, 34, 0.96) 100%)',
                            border: '1.5px solid rgba(171, 71, 188, 0.42)',
                            borderRadius: '16px',
                            padding: 'clamp(10px, 1.6vh, 14px) clamp(12px, 2.8vw, 16px)',
                            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.85), 0 0 24px rgba(156, 39, 176, 0.28), inset 0 1px 1.5px rgba(255, 255, 255, 0.12)',
                            animation: 'slideUpResult 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            gap: '8px',
                            boxSizing: 'border-box'
                        }}>
                            {/* Author Identity Row */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                width: '100%'
                            }}>
                                {/* Author Avatar in Golden Frame */}
                                <div style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                    border: '2px solid #FFD54F',
                                    boxShadow: '0 0 10px rgba(255, 215, 0, 0.6)',
                                    overflow: 'hidden',
                                    background: '#FFF8E1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    {resolvedPhotos[winningSlice.id] ? (
                                        <img
                                            src={resolvedPhotos[winningSlice.id]}
                                            alt={winningSlice.authorNameOdia}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#4A148C'
                                        }}>
                                            <User size={22} color="#880E4F" />
                                        </div>
                                    )}
                                </div>

                                {/* Author Name */}
                                <div style={{ textAlign: 'left', flex: 1, minWidth: 0 }}>
                                    <h3 style={{
                                        fontSize: 'clamp(0.82rem, 2.3vw, 0.92rem)',
                                        fontWeight: 700,
                                        margin: '0',
                                        color: '#FFFFFF',
                                        fontFamily: 'var(--font-odia-sans)',
                                        lineHeight: 1.4,
                                        paddingTop: '2px',
                                        textShadow: '0 1px 4px rgba(0,0,0,0.9), 0 0 8px rgba(255, 215, 0, 0.4)',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {winningSlice.authorNameOdia}
                                    </h3>
                                </div>
                            </div>

                            {/* 2: Song Name Card (Made text bigger & prominent with subtle golden pulse) */}
                            {selectedSongResult ? (
                                <div
                                    onClick={() => {
                                        onClose();
                                        if (onSelectSong) {
                                            onSelectSong(selectedSongResult);
                                        } else if (onSelectAuthor) {
                                            onSelectAuthor(winningSlice.authorNameEnglish);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    title="ଏହି ସଙ୍ଗୀତଟି ଖୋଲନ୍ତୁ"
                                    style={{
                                        width: '100%',
                                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.16) 0%, rgba(255, 255, 255, 0.07) 100%)',
                                        border: '1.5px solid rgba(255, 215, 0, 0.55)',
                                        borderRadius: '12px',
                                        padding: '9px 13px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '10px',
                                        cursor: 'pointer',
                                        boxShadow: '0 3px 12px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.12)',
                                        boxSizing: 'border-box',
                                        animation: 'subtleSongCardPulse 2.4s ease-in-out infinite',
                                        transition: 'transform 0.2s ease, background 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.animation = 'none';
                                        e.currentTarget.style.borderColor = '#FFD54F';
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.25) 0%, rgba(255, 255, 255, 0.12) 100%)';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                        e.currentTarget.style.boxShadow = '0 5px 22px rgba(255, 215, 0, 0.45), inset 0 1px 2px rgba(255,255,255,0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.animation = 'subtleSongCardPulse 2.4s ease-in-out infinite';
                                        e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.55)';
                                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.16) 0%, rgba(255, 255, 255, 0.07) 100%)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.12)';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1, textAlign: 'left' }}>
                                        <span style={{ fontSize: '1.35rem', flexShrink: 0 }}>🎵</span>
                                        <div style={{ minWidth: 0, flex: 1 }}>
                                            <div style={{
                                                fontSize: 'clamp(1.02rem, 3.1vw, 1.20rem)',
                                                fontWeight: 900,
                                                color: '#FFFDE7',
                                                fontFamily: 'var(--font-odia-sans)',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                lineHeight: 1.55,
                                                paddingTop: '5px',
                                                paddingBottom: '2px',
                                                textShadow: '0 2px 5px rgba(0,0,0,0.95), 0 0 14px rgba(255, 215, 0, 0.35)'
                                            }}>
                                                {selectedSongResult.titleOdia}
                                            </div>
                                            {selectedSongResult.titleEnglish && (
                                                <div style={{
                                                    fontSize: '0.78rem',
                                                    color: 'rgba(255, 248, 225, 0.85)',
                                                    fontWeight: 600,
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    lineHeight: 1.25,
                                                    marginTop: '1px'
                                                }}>
                                                    {selectedSongResult.titleEnglish}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div style={{
                                        fontSize: '0.78rem',
                                        fontWeight: 800,
                                        color: '#3E2723',
                                        background: 'linear-gradient(135deg, #FFE082 0%, #FFB300 100%)',
                                        border: '1px solid #FFE082',
                                        borderRadius: '8px',
                                        padding: '4px 10px',
                                        whiteSpace: 'nowrap',
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
                                        fontFamily: 'var(--font-odia-sans)'
                                    }}>
                                        <span>ଖୋଲନ୍ତୁ</span>
                                        <span>➔</span>
                                    </div>
                                </div>
                            ) : (
                                <div 
                                    onClick={() => {
                                        onClose();
                                        if (onSelectAuthor) {
                                            onSelectAuthor(winningSlice.authorNameEnglish);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    style={{
                                        width: '100%',
                                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.16) 0%, rgba(255, 255, 255, 0.07) 100%)',
                                        border: '1.5px solid rgba(255, 215, 0, 0.45)',
                                        borderRadius: '12px',
                                        padding: '9px 13px',
                                        fontSize: 'clamp(0.95rem, 2.8vw, 1.10rem)',
                                        fontWeight: 800,
                                        color: '#FFF9C4',
                                        fontFamily: 'var(--font-odia-sans)',
                                        boxSizing: 'border-box',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <span>{winningSlice.authorNameOdia} ଭଜନ</span>
                                    <span style={{
                                        fontSize: '0.78rem',
                                        fontWeight: 800,
                                        color: '#3E2723',
                                        background: 'linear-gradient(135deg, #FFE082 0%, #FFB300 100%)',
                                        border: '1px solid #FFE082',
                                        borderRadius: '8px',
                                        padding: '4px 10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px'
                                    }}>
                                        <span>ଖୋଲନ୍ତୁ</span>
                                        <span>➔</span>
                                    </span>
                                </div>
                            )}

                            {/* 4: Spin Again Button (Properly positioned, centered & user-friendly) */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                marginTop: '2px'
                            }}>
                                <button
                                    onClick={() => {
                                        handleSpin();
                                    }}
                                    style={{
                                        padding: '8px 26px',
                                        minWidth: '170px',
                                        borderRadius: '22px',
                                        border: '1.3px solid rgba(255, 215, 0, 0.5)',
                                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                        color: '#FFF8E1',
                                        fontWeight: 700,
                                        fontSize: '0.86rem',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
                                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                                        touchAction: 'manipulation',
                                        userSelect: 'none',
                                        WebkitTapHighlightColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)';
                                        e.currentTarget.style.borderColor = '#FFD54F';
                                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 215, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.25)';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <span style={{ fontSize: '0.95rem' }}>🔄</span>
                                    <span>Spin Again</span>
                                </button>
                            </div>
                        </div>
                    )
                )}

                <style>{`
                    /* Suppress all scrollbars to eliminate white bar flickering */
                    .spin-wheel-card::-webkit-scrollbar,
                    .spin-wheel-overlay::-webkit-scrollbar {
                        display: none !important;
                        width: 0px !important;
                        height: 0px !important;
                        background: transparent !important;
                    }
                    .spin-wheel-card,
                    .spin-wheel-overlay {
                        -ms-overflow-style: none !important;
                        scrollbar-width: none !important;
                    }

                    @keyframes pulseTextGlow {
                        0% {
                            color: #FFE082;
                            text-shadow: 0 0 8px rgba(255, 215, 0, 0.65), 0 1px 3px rgba(0, 0, 0, 0.85);
                        }
                        50% {
                            color: #FFFFFF;
                            text-shadow: 0 0 16px rgba(255, 224, 130, 0.95), 0 0 24px rgba(255, 215, 0, 0.85), 0 1px 4px rgba(0, 0, 0, 0.95);
                        }
                        100% {
                            color: #FFE082;
                            text-shadow: 0 0 8px rgba(255, 215, 0, 0.65), 0 1px 3px rgba(0, 0, 0, 0.85);
                        }
                    }
                    @keyframes spinChakra {
                        0% { transform: rotate(0deg) scale(1); }
                        50% { transform: rotate(180deg) scale(1.15); }
                        100% { transform: rotate(360deg) scale(1); }
                    }
                    @keyframes spinChakraReverse {
                        0% { transform: rotate(0deg) scale(1); }
                        50% { transform: rotate(-180deg) scale(1.15); }
                        100% { transform: rotate(-360deg) scale(1); }
                    }
                    @keyframes pulseSoft {
                        0% { opacity: 0.7; transform: scale(0.98); }
                        100% { opacity: 1; transform: scale(1.02); }
                    }
                    @keyframes pulseSpiritualGlow {
                        0% {
                            box-shadow: 0 0 16px rgba(255, 215, 0, 0.45), 0 0 30px rgba(126, 87, 194, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.2);
                            border-color: rgba(255, 215, 0, 0.65);
                        }
                        50% {
                            box-shadow: 0 0 26px rgba(255, 215, 0, 0.75), 0 0 42px rgba(233, 30, 99, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.4);
                            border-color: #FFE082;
                        }
                        100% {
                            box-shadow: 0 0 16px rgba(255, 215, 0, 0.45), 0 0 30px rgba(126, 87, 194, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.2);
                            border-color: rgba(255, 215, 0, 0.65);
                        }
                    }
                    @keyframes subtleSongCardPulse {
                        0% {
                            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.4), 0 0 10px rgba(255, 215, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.12);
                            border-color: rgba(255, 215, 0, 0.5);
                        }
                        50% {
                            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.48), 0 0 20px rgba(255, 215, 0, 0.45), inset 0 1px 3px rgba(255, 255, 255, 0.25);
                            border-color: #FFE082;
                        }
                        100% {
                            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.4), 0 0 10px rgba(255, 215, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.12);
                            border-color: rgba(255, 215, 0, 0.5);
                        }
                    }
                    @keyframes popIn {
                        0% { opacity: 0; transform: scale(0.92); }
                        100% { opacity: 1; transform: scale(1); }
                    }
                    @keyframes slideUpResult {
                        0% { opacity: 0; transform: translateY(14px) scale(0.97); }
                        100% { opacity: 1; transform: translateY(0) scale(1); }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default SpinWheelModal;
