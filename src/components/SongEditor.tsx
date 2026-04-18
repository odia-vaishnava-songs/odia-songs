import React, { useState } from 'react';
import { supabase } from '../supabase/config';
import type { Resource, SongVerse, WordMeaning } from '../types';
import { X, Save, Trash2, CheckCircle2 } from 'lucide-react';
import { STATUS_COLORS, getStatusBackground, getStatusColor } from '../constants/colors';



interface SongEditorProps {
    song?: Resource;
    onSave: () => void;
    onCancel: () => void;
}

const INITIAL_VERSE: SongVerse = {
    id: 1,
    lyric: '',
    translation: '',
    wordMeanings: []
};

export const SongEditor: React.FC<SongEditorProps> = ({ song, onSave, onCancel }) => {
    const [formData, setFormData] = useState<Partial<Resource>>(
        song || {
            title: '',
            author: '',
            category: 'Songs',
            type: 'interactive',
            description: '',
            structuredContent: { verses: [{ ...INITIAL_VERSE }] }
        }
    );
    const [saving, setSaving] = useState(false);
    const [isRawMode, setIsRawMode] = useState(false);
    const [rawJson, setRawJson] = useState('');

    const toggleRawMode = () => {
        if (!isRawMode) {
            // Entering Raw Mode: Convert current state to string
            setRawJson(JSON.stringify(formData.structuredContent, null, 2));
        } else {
            // Exiting Raw Mode: Parse logic
            try {
                const parsed = JSON.parse(rawJson);
                setFormData({ ...formData, structuredContent: parsed });
            } catch (e) {
                alert("Invalid JSON format. Please fix the text before switching back.");
                return;
            }
        }
        setIsRawMode(!isRawMode);
    };

    const handleVerseChangeByIndex = (index: number, field: keyof SongVerse, value: any) => {
        const verses = [...(formData.structuredContent?.verses || [])];
        if (verses[index]) {
            verses[index] = { ...verses[index], [field]: value };
            setFormData({
                ...formData,
                structuredContent: { ...formData.structuredContent, verses }
            });
        }
    };

    const addVerse = () => {
        const verses = [...(formData.structuredContent?.verses || [])];
        const nextId = verses.length > 0 ? Math.max(...verses.map(v => v.id)) + 1 : 1;
        verses.push({ ...INITIAL_VERSE, id: nextId });
        setFormData({
            ...formData,
            structuredContent: { ...formData.structuredContent, verses }
        });
    };

    const removeVerse = (id: number) => {
        const verses = formData.structuredContent?.verses.filter(v => v.id !== id) || [];
        setFormData({
            ...formData,
            structuredContent: { ...formData.structuredContent, verses }
        });
    };

    const handleWordMeaningChangeByIndex = (vIdx: number, wordIdx: number, field: keyof WordMeaning, value: string) => {
        const verses = [...(formData.structuredContent?.verses || [])];
        if (verses[vIdx]) {
            const meanings = [...(verses[vIdx].wordMeanings || [])];
            meanings[wordIdx] = { ...meanings[wordIdx], [field]: value };
            verses[vIdx] = { ...verses[vIdx], wordMeanings: meanings };
            setFormData({
                ...formData,
                structuredContent: { ...formData.structuredContent, verses }
            });
        }
    };

    const parseBulkVerseByIndex = (vIdx: number, rawText: string) => {
        if (!rawText.trim()) return;
        const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
        if (lines.length < 2) return alert("Please provide at least Lyrics and Translation on separate lines.");

        const lyric = lines[0];
        const translation = lines[1];
        const wordMeanings: WordMeaning[] = [];

        for (let i = 2; i < lines.length; i++) {
            const part = lines[i];
            const separator = " — ";
            const dashIndex = part.indexOf(separator);
            if (dashIndex !== -1) {
                const word = part.substring(0, dashIndex).trim();
                const meaning = part.substring(dashIndex + separator.length).trim();
                wordMeanings.push({ word, meaning });
            }
        }

        const verses = [...(formData.structuredContent?.verses || [])];
        if (verses[vIdx]) {
            verses[vIdx] = { ...verses[vIdx], lyric, translation, wordMeanings };
            setFormData({
                ...formData,
                structuredContent: { ...formData.structuredContent, verses }
            });
        }
    };

    const addWordMeaningByIndex = (vIdx: number) => {
        const verses = [...(formData.structuredContent?.verses || [])];
        if (verses[vIdx]) {
            const meanings = [...(verses[vIdx].wordMeanings || [])];
            meanings.push({ word: '', meaning: '' });
            verses[vIdx] = { ...verses[vIdx], wordMeanings: meanings };
            setFormData({
                ...formData,
                structuredContent: { ...formData.structuredContent, verses }
            });
        }
    };

    const validateHealth = (data: Partial<Resource>): { healthy: boolean; message?: string } => {
        // App-Health Rule: Missing verse array is a crash-level corruption. 
        // Missing lyrics or translations are "Healthy" per user request.
        if (!data.structuredContent?.verses) {
            return { healthy: false, message: "Critical structure missing (verses array)." };
        }
        return { healthy: true };
    };

    const handleSave = async () => {
        if (!formData.title) return alert("Title is required");
        
        // --- THE APP-HEALTH GUARD ---
        const health = validateHealth(formData);
        if (!health.healthy) {
            console.error("Health Check Failed:", health.message);
            return alert("Sorry it is not healthy for app please retry");
        }

        setSaving(true);
        try {
            const id = song?.id || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

            // 1. Save to Cloud (Supabase)
            const { error: dbError } = await supabase
                .from('songs')
                .upsert({
                    id,
                    title: formData.title || formData.title_odia || '',
                    title_odia: formData.title_odia,
                    title_english: formData.title_english,
                    tags: formData.tags || [],
                    original_lang: formData.original_lang || 'Odia',
                    display_order: formData.display_order || 0,
                    category: formData.category,
                    type: formData.type,
                    description: formData.description,
                    content: formData.content,
                    structured_content: formData.structuredContent,
                    audio_url: formData.audioUrl,
                    audio_versions: formData.audioVersions,
                    author: formData.author,
                    verified: formData.verified || false,
                    status: formData.status || 'NOT_DONE',
                    assigned_to: formData.assigned_to,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'id' });

            if (dbError) throw dbError;

            // 2. Save to Local Code (Sync Agent)
            // Derive variable name (SONG_NAME_STRUCTURED)
            const specialMap: Record<string, string> = {
                'song-durlabhamanava': 'SONG_DURLABHAMANAVAJANMA_STRUCTURED',
                'song-gopinatha1': 'SONG_GOPINATHA1_STRUCTURED',
                'song-gopinatha2': 'SONG_GOPINATHA2_STRUCTURED',
                'song-gopinatha3': 'SONG_GOPINATHA3_STRUCTURED',
                'song-doyalnitai': 'SONG_DOYALNITAICAITANYA_STRUCTURED',
                'song-ohevaisnava': 'SONG_OHEVAISNAVATHAKURA_STRUCTURED',
                'song-nadiya-godrume': 'SONG_NADIYAGODRUME_STRUCTURED',
                'song-gurudeva-krpa': 'SONG_GURUDEVAKRPABINDU_STRUCTURED',
                'song-gurudeva-boro-krpa': 'SONG_GURUDEVABOROKRPADIA_STRUCTURED',
                'song-jivjago': 'SONG_JIVJAGOJIVJAGO_STRUCTURED',
                'song-kabesricaitanya': 'SONG_KABESRICAITANYA_STRUCTURED',
                'song-jayaradhadhava': 'SONG_JAYARADHAMADHAVA_STRUCTURED',
                'song-bhuliyatomare': 'SONG_BHULIYATOMARE_STRUCTURED',
                'song-gitamahatmya': 'SONG_GITAMAHATMYA_STRUCTURED',
                'song-amito-durjana': 'SONG_AMITODURJANA_STRUCTURED'
            };

            const varName = specialMap[id] || `SONG_${id.toUpperCase().replace('SONG-', '').replace(/-/g, '')}_STRUCTURED`;

            try {
                const syncResponse = await fetch('/api/sync-song', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ varName, structuredContent: formData.structuredContent })
                });
                const syncResult = await syncResponse.json();
                if (syncResult.success) {
                    console.log(`✅ Local code sync successful for ${varName}`);
                } else {
                    console.warn(`⚠️ Cloud saved, but local sync failed: ${syncResult.error || 'Check guard logs'}`);
                }
            } catch (syncErr) {
                console.error("Local sync endpoint unreachable (this is normal in production):", syncErr);
            }

            alert("Successful!");
            onSave();
        } catch (err) {
            console.error(err);
            alert("Error saving song to database");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            position: 'relative',
            paddingBottom: '5rem' // Space for sticky button
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>{song ? 'Edit Song' : 'Add New Song'}</h3>
                <button onClick={onCancel} style={{ background: '#f0f0f0', border: 'none', padding: '8px', borderRadius: '50%' }}><X size={24} /></button>
            </div>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600 }}>Odia Title</span>
                        <input
                            placeholder="ଜୟ ରାଧା-ମାଧବ"
                            value={formData.title_odia || ''}
                            onChange={e => setFormData({ ...formData, title_odia: e.target.value })}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'var(--font-odia-sans)', fontWeight: 600 }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600 }}>English Title</span>
                        <input
                            placeholder="Jaya Rādhā-Mādhava"
                            value={formData.title_english || ''}
                            onChange={e => setFormData({ ...formData, title_english: e.target.value })}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600 }}>Legacy/Full Title</span>
                    <input
                        placeholder="Song Title (Internal)"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600 }}>Author</span>
                        <input
                            placeholder="Bhaktivinoda Ṭhākura"
                            value={formData.author}
                            onChange={e => setFormData({ ...formData, author: e.target.value })}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600 }}>Original Language</span>
                        <select
                            value={formData.original_lang || 'Odia'}
                            onChange={e => setFormData({ ...formData, original_lang: e.target.value })}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', background: 'white' }}
                        >
                            <option value="Odia">Odia</option>
                            <option value="Sanskrit">Sanskrit</option>
                            <option value="Bengali">Bengali</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600 }}>Tags (comma separated)</span>
                        <input
                            placeholder="Morning, Arati, Humility"
                            value={formData.tags?.join(', ') || ''}
                            onChange={e => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600 }}>Display Order</span>
                        <input
                            type="number"
                            value={formData.display_order || 0}
                            onChange={e => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                    </div>
                </div>
                <div>
                    <span style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem', display: 'block' }}>Production Status</span>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '8px', background: formData.status === 'NOT_DONE' ? '#fee2e2' : 'white' }}>
                            <input
                                type="radio"
                                name="status"
                                checked={formData.status === 'NOT_DONE'}
                                onChange={() => setFormData({ ...formData, status: 'NOT_DONE', verified: false })}
                            />
                            <span style={{ color: '#ef4444', fontWeight: 600 }}>🔴 Not Done</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '8px', background: formData.status === 'IN_PROGRESS' ? '#ffedd5' : 'white' }}>
                            <input
                                type="radio"
                                name="status"
                                checked={formData.status === 'IN_PROGRESS'}
                                onChange={() => setFormData({ ...formData, status: 'IN_PROGRESS', verified: false })}
                            />
                            <span style={{ color: '#f97316', fontWeight: 600 }}>🟠 In Progress</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '8px', background: (formData.status === 'COMPLETED' || formData.verified) ? '#e6fffa' : 'white' }}>
                            <input
                                type="radio"
                                name="status"
                                checked={formData.status === 'COMPLETED' || formData.verified}
                                onChange={() => setFormData({ ...formData, status: 'COMPLETED', verified: true })}
                            />
                            <span style={{ color: '#00a38d', fontWeight: 600 }}>🟢 Completed</span>
                        </label>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ margin: 0 }}>Verses</h4>
                    <button 
                        onClick={toggleRawMode}
                        style={{ 
                            fontSize: '0.75rem', 
                            padding: '6px 12px', 
                            borderRadius: '8px', 
                            border: '1px solid #8A5082',
                            background: isRawMode ? '#8A5082' : 'white',
                            color: isRawMode ? 'white' : '#8A5082',
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}
                    >
                        {isRawMode ? 'Back to Form View' : 'Edit as Raw JSON'}
                    </button>
                </div>

                {isRawMode ? (
                    <div style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px' }}>
                        <div style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem' }}>Pro Tip: Find "id": 100 and change it to "id": 36 below.</div>
                        <textarea
                            value={rawJson}
                            onChange={(e) => setRawJson(e.target.value)}
                            style={{ 
                                width: '100%', 
                                minHeight: '500px', 
                                background: 'transparent', 
                                color: '#4fd1c5', 
                                border: 'none', 
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                    </div>
                ) : (
                    <>
                        {formData.structuredContent?.verses.map((verse, vIdx) => (
                    <div key={vIdx} style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span>ଶ୍ଲୋକ</span>
                                <input
                                    placeholder="Verse #"
                                    value={verse.id || ''}
                                    onChange={e => handleVerseChangeByIndex(vIdx, 'id', parseInt(e.target.value) || 0)}
                                    style={{ width: '80px', padding: '6px', borderRadius: '4px', border: '1px solid #ddd', fontWeight: 900, textAlign: 'center' }}
                                />
                                <div style={{ display: 'flex', gap: '0.25rem' }}>
                                    <button
                                        onClick={() => handleVerseChangeByIndex(vIdx, 'status', 'NOT_DONE')}
                                        style={{
                                            width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #ddd',
                                            background: verse.status === 'NOT_DONE' ? getStatusBackground('NOT_DONE') : '#f9f9f9',
                                            color: verse.status === 'NOT_DONE' ? STATUS_COLORS.NOT_DONE : '#ccc',
                                            fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer'
                                        }}
                                    >R</button>
                                    <button
                                        onClick={() => handleVerseChangeByIndex(vIdx, 'status', 'IN_PROGRESS')}
                                        style={{
                                            width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #ddd',
                                            background: verse.status === 'IN_PROGRESS' ? getStatusBackground('IN_PROGRESS') : '#f9f9f9',
                                            color: verse.status === 'IN_PROGRESS' ? STATUS_COLORS.IN_PROGRESS : '#ccc',
                                            fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer'
                                        }}
                                    >O</button>
                                    <button
                                        onClick={() => handleVerseChangeByIndex(vIdx, 'status', 'COMPLETED')}
                                        style={{
                                            width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #ddd',
                                            background: verse.status === 'COMPLETED' ? getStatusBackground('COMPLETED') : '#f9f9f9',
                                            color: verse.status === 'COMPLETED' ? STATUS_COLORS.COMPLETED : '#ccc',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                                        }}
                                    >
                                        <CheckCircle2 size={14} color={verse.status === 'COMPLETED' ? STATUS_COLORS.COMPLETED : "#ccc"} />
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => removeVerse(verse.id)} style={{ color: 'red', background: 'none', border: 'none' }}><Trash2 size={16} /></button>
                        </div>

                        <div style={{ background: '#f9f9f9', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem' }}>
                            <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.4rem', fontWeight: 600 }}>Bulk Paste (Lyric, Trans, W—M...)</div>
                            <textarea
                                placeholder="Paste Verse Data here..."
                                onBlur={(e) => parseBulkVerseByIndex(vIdx, e.target.value)}
                                style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', minHeight: '60px' }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 600 }}>Lyrics</span>
                            <textarea
                                placeholder="Lyrics (Odia/Roman)"
                                value={verse.lyric}
                                onChange={e => handleVerseChangeByIndex(vIdx, 'lyric', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    minHeight: '100px',
                                    color: verse.status ? getStatusColor(verse.status) : getStatusColor(formData.status, formData.verified),
                                    fontFamily: 'var(--font-odia-sans)',
                                    fontSize: '1.2rem',
                                    fontWeight: 600
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 600 }}>Translation</span>
                            <textarea
                                placeholder="Translation"
                                value={verse.translation}
                                onChange={e => handleVerseChangeByIndex(vIdx, 'translation', e.target.value)}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', minHeight: '80px', fontFamily: 'var(--font-odia-sans)', fontWeight: 600 }}
                            />
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Word Meanings</div>
                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                {verse.wordMeanings?.map((wm, wIdx) => (
                                    <div key={wIdx} style={{
                                        display: 'grid',
                                        gridTemplateColumns: window.innerWidth < 600 ? '1fr' : '1fr 1fr 40px',
                                        gap: '0.5rem',
                                        padding: '0.5rem',
                                        background: '#fff',
                                        border: '1px solid #eee',
                                        borderRadius: '8px'
                                    }}>
                                        <input
                                            placeholder="Word"
                                            value={wm.word}
                                            onChange={e => handleWordMeaningChangeByIndex(vIdx, wIdx, 'word', e.target.value)}
                                            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'var(--font-odia-sans)', fontWeight: 600 }}
                                        />
                                        <textarea
                                            placeholder="Meaning"
                                            value={wm.meaning}
                                            onChange={e => handleWordMeaningChangeByIndex(vIdx, wIdx, 'meaning', e.target.value)}
                                            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'var(--font-odia-sans)', fontWeight: 600, minHeight: '40px' }}
                                        />
                                        {window.innerWidth < 600 ? (
                                            <button
                                                onClick={() => {
                                                    const meanings = (verse.wordMeanings || []).filter((_, i) => i !== wIdx);
                                                    handleVerseChangeByIndex(vIdx, 'wordMeanings', meanings);
                                                }}
                                                style={{ padding: '4px', color: '#ff4444', background: '#fff5f5', border: '1px solid #ffcccc', borderRadius: '4px', fontSize: '0.8rem' }}
                                            >Remove Word</button>
                                        ) : (
                                            <button onClick={() => {
                                                const meanings = (verse.wordMeanings || []).filter((_, i) => i !== wIdx);
                                                handleVerseChangeByIndex(vIdx, 'wordMeanings', meanings);
                                            }} style={{ background: 'none', border: 'none', color: '#ff4444' }}><Trash2 size={16} /></button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => addWordMeaningByIndex(vIdx)} style={{ width: '100%', padding: '0.75rem', marginTop: '0.75rem', background: '#f0f0f0', border: '1px dashed #ccc', borderRadius: '8px', fontWeight: 600 }}>+ Add Word</button>
                        </div>
                    </div>
                ))}
                        <button onClick={addVerse} style={{ width: '100%', padding: '1rem', background: '#f8f8f8', border: '2px dashed #ddd', borderRadius: '12px', fontWeight: 600, color: '#8A5082' }}>+ Add Verse</button>
                    </>
                )}
            </div>

            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1rem',
                background: 'white',
                borderTop: '1px solid #eee',
                boxShadow: '0 -4px 12px rgba(0,0,0,0.1)',
                zIndex: 100,
                display: 'flex',
                gap: '1rem'
            }}>
                <button
                    onClick={onCancel}
                    style={{ flex: 1, padding: '1rem', background: '#f5f5f5', color: '#666', border: '1px solid #ddd', borderRadius: '12px', fontWeight: 600 }}
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    style={{ flex: 2, padding: '1rem', background: '#8A5082', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                    <Save size={20} />
                    {saving ? 'Saving...' : 'Save to Database'}
                </button>
            </div>
        </div>
    );
};
