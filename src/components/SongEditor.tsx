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
        const nextId = verses.length > 0 ? Math.max(...verses.map((v: SongVerse) => v.id)) + 1 : 1;
        verses.push({ ...INITIAL_VERSE, id: nextId });
        setFormData({
            ...formData,
            structuredContent: { ...formData.structuredContent, verses }
        });
    };

    const removeVerse = (id: number) => {
        const verses = formData.structuredContent?.verses.filter((v: SongVerse) => v.id !== id) || [];
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
                    title: formData.title,
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
                    updated_at: new Date().toISOString()
                }, { onConflict: 'id' });

            if (error) throw error;
            onSave();
        } catch (err) {
            console.error(err);
            alert("Error saving song");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <h3 style={{ margin: 0 }}>{song ? 'Edit Song' : 'Add New Song'}</h3>
                <button onClick={onCancel} style={{ background: 'none', border: 'none' }}><X size={24} /></button>
            </div>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                <input
                    placeholder="Song Title (e.g. Jaya Radha Madhava)"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                />
                <input
                    placeholder="Author (e.g. Bhaktivinoda Thakura)"
                    value={formData.author}
                    onChange={e => setFormData({ ...formData, author: e.target.value })}
                    style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                />
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
                {formData.structuredContent?.verses.map((verse: SongVerse) => (
                    <div key={verse.id} style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span>Verse {verse.id}</span>
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

                        <textarea
                            placeholder="Lyrics (Odia/Roman)"
                            value={verse.lyric}
                            onChange={e => handleVerseChange(verse.id, 'lyric', e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                marginBottom: '0.5rem',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                minHeight: '80px',
                                color: verse.status ? getStatusColor(verse.status) : getStatusColor(formData.status, formData.verified),


                                fontWeight: 700
                            }}
                        />

                        <textarea
                            placeholder="Translation"
                            value={verse.translation}
                            onChange={e => handleVerseChange(verse.id, 'translation', e.target.value)}
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', minHeight: '60px' }}
                        />

                        <div style={{ marginTop: '1rem' }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Word Meanings</div>
                            {verse.wordMeanings?.map((wm: WordMeaning, wIdx: number) => (
                                <div key={wIdx} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <input placeholder="Word" value={wm.word} onChange={e => handleWordMeaningChange(verse.id, wIdx, 'word', e.target.value)} style={{ flex: 1, padding: '4px' }} />
                                    <input placeholder="Meaning" value={wm.meaning} onChange={e => handleWordMeaningChange(verse.id, wIdx, 'meaning', e.target.value)} style={{ flex: 1, padding: '4px' }} />
                                </div>
                            ))}
                            <button onClick={() => addWordMeaning(verse.id)} style={{ fontSize: '0.8rem', padding: '4px 8px', marginTop: '0.5rem', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px' }}>+ Add Word</button>
                        </div>
                    </div>
                ))}
                <button onClick={addVerse} style={{ width: '100%', padding: '0.75rem', background: '#f8f8f8', border: '1px dashed #ccc', borderRadius: '8px' }}>+ Add Verse</button>
            </div>

            <button
                onClick={handleSave}
                disabled={saving}
                style={{ width: '100%', padding: '1rem', background: '#8A5082', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
                <Save size={20} />
                {saving ? 'Saving...' : 'Save Song to Database'}
            </button>
        </div>
    );
};
