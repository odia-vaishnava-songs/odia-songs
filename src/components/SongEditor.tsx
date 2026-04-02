import React, { useState } from 'react';
import { supabase } from '../supabase/config';
import type { Resource, SongVerse, WordMeaning } from '../types';
import { X, Save, Trash2, CheckCircle2 } from 'lucide-react';
import { STATUS_COLORS, getStatusBackground, getStatusColor } from '../constants/colors';
import { toOdiaNumber } from '../utils/odia';



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

    const handleVerseChange = (verseId: number, field: keyof SongVerse, value: any) => {
        const verses = [...(formData.structuredContent?.verses || [])];
        const index = verses.findIndex(v => v.id === verseId);
        if (index !== -1) {
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

    const handleWordMeaningChange = (verseId: number, wordIdx: number, field: keyof WordMeaning, value: string) => {
        const verses = [...(formData.structuredContent?.verses || [])];
        const vIdx = verses.findIndex(v => v.id === verseId);
        if (vIdx !== -1) {
            const meanings = [...(verses[vIdx].wordMeanings || [])];
            meanings[wordIdx] = { ...meanings[wordIdx], [field]: value };
            verses[vIdx] = { ...verses[vIdx], wordMeanings: meanings };
            setFormData({
                ...formData,
                structuredContent: { ...formData.structuredContent, verses }
            });
        }
    };

    const parseBulkVerse = (verseId: number, rawText: string) => {
        if (!rawText.trim()) return;

        // Simple parser logic:
        // Line 1: Lyrics
        // Line 2: Translation
        // Remaining: Word Meanings (Word — Meaning)
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
        const vIdx = verses.findIndex(v => v.id === verseId);
        if (vIdx !== -1) {
            verses[vIdx] = { ...verses[vIdx], lyric, translation, wordMeanings };
            setFormData({
                ...formData,
                structuredContent: { ...formData.structuredContent, verses }
            });
        }
    };

    const addWordMeaning = (verseId: number) => {
        const verses = [...(formData.structuredContent?.verses || [])];
        const vIdx = verses.findIndex(v => v.id === verseId);
        if (vIdx !== -1) {
            const meanings = [...(verses[vIdx].wordMeanings || [])];
            meanings.push({ word: '', meaning: '' });
            verses[vIdx] = { ...verses[vIdx], wordMeanings: meanings };
            setFormData({
                ...formData,
                structuredContent: { ...formData.structuredContent, verses }
            });
        }
    };

    const handleSave = async () => {
        if (!formData.title) return alert("Title is required");
        setSaving(true);
        try {
            const id = song?.id || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

            const { error } = await supabase
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

            if (error) throw error;
            alert("Successfully Saved to Database!");
            onSave();
        } catch (err) {
            console.error(err);
            alert("Error saving song");
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
                <h4 style={{ marginBottom: '1rem' }}>Verses</h4>
                {formData.structuredContent?.verses.map((verse) => (
                    <div key={verse.id} style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span>ଶ୍ଲୋକ {toOdiaNumber(verse.id)}</span>
                                <div style={{ display: 'flex', gap: '0.25rem' }}>
                                    <button
                                        onClick={() => handleVerseChange(verse.id, 'status', 'NOT_DONE')}
                                        style={{
                                            width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #ddd',
                                            background: verse.status === 'NOT_DONE' ? getStatusBackground('NOT_DONE') : '#f9f9f9',
                                            color: verse.status === 'NOT_DONE' ? STATUS_COLORS.NOT_DONE : '#ccc',
                                            fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer'
                                        }}
                                    >R</button>
                                    <button
                                        onClick={() => handleVerseChange(verse.id, 'status', 'IN_PROGRESS')}
                                        style={{
                                            width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #ddd',
                                            background: verse.status === 'IN_PROGRESS' ? getStatusBackground('IN_PROGRESS') : '#f9f9f9',
                                            color: verse.status === 'IN_PROGRESS' ? STATUS_COLORS.IN_PROGRESS : '#ccc',
                                            fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer'
                                        }}
                                    >O</button>
                                    <button
                                        onClick={() => handleVerseChange(verse.id, 'status', 'COMPLETED')}
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
                                onBlur={(e) => parseBulkVerse(verse.id, e.target.value)}
                                style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', minHeight: '60px' }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 600 }}>Lyrics</span>
                            <textarea
                                placeholder="Lyrics (Odia/Roman)"
                                value={verse.lyric}
                                onChange={e => handleVerseChange(verse.id, 'lyric', e.target.value)}
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
                                onChange={e => handleVerseChange(verse.id, 'translation', e.target.value)}
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
                                            onChange={e => handleWordMeaningChange(verse.id, wIdx, 'word', e.target.value)}
                                            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'var(--font-odia-sans)', fontWeight: 600 }}
                                        />
                                        <textarea
                                            placeholder="Meaning"
                                            value={wm.meaning}
                                            onChange={e => handleWordMeaningChange(verse.id, wIdx, 'meaning', e.target.value)}
                                            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'var(--font-odia-sans)', fontWeight: 600, minHeight: '40px' }}
                                        />
                                        {window.innerWidth < 600 ? (
                                            <button
                                                onClick={() => {
                                                    const meanings = (verse.wordMeanings || []).filter((_, i) => i !== wIdx);
                                                    handleVerseChange(verse.id, 'wordMeanings', meanings);
                                                }}
                                                style={{ padding: '4px', color: '#ff4444', background: '#fff5f5', border: '1px solid #ffcccc', borderRadius: '4px', fontSize: '0.8rem' }}
                                            >Remove Word</button>
                                        ) : (
                                            <button onClick={() => {
                                                const meanings = (verse.wordMeanings || []).filter((_, i) => i !== wIdx);
                                                handleVerseChange(verse.id, 'wordMeanings', meanings);
                                            }} style={{ background: 'none', border: 'none', color: '#ff4444' }}><Trash2 size={16} /></button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => addWordMeaning(verse.id)} style={{ width: '100%', padding: '0.75rem', marginTop: '0.75rem', background: '#f0f0f0', border: '1px dashed #ccc', borderRadius: '8px', fontWeight: 600 }}>+ Add Word</button>
                        </div>
                    </div>
                ))}
                <button onClick={addVerse} style={{ width: '100%', padding: '1rem', background: '#f8f8f8', border: '2px dashed #ddd', borderRadius: '12px', fontWeight: 600, color: '#8A5082' }}>+ Add Verse</button>
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
