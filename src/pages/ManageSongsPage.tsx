import React, { useState } from 'react';
import { useSongs } from '../hooks/useSongs';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../supabase/config';
import { SongEditor } from '../components/SongEditor';
import { Plus, Edit2, Trash2, Search, ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Resource } from '../types';

export const ManageSongsPage: React.FC = () => {
    const { songs, loading } = useSongs();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [editingSong, setEditingSong] = useState<Resource | undefined>(undefined);
    const [searchTerm, setSearchTerm] = useState('');

    const role = user?.role?.toLowerCase();
    const isHost = role === 'admin' || role === 'subadmin';

    if (!isHost && !loading) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: '#ff4444' }}>Access Denied</h2>
                <p>Only administrators can manage the song library.</p>
                <button
                    onClick={() => navigate('/')}
                    style={{ padding: '0.8rem 1.5rem', border: '1px solid #ddd', borderRadius: '8px', background: 'none', cursor: 'pointer' }}
                >
                    Back to Songs
                </button>
            </div>
        );
    }

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this song?")) {
            try {
                const { error } = await supabase
                    .from('songs')
                    .delete()
                    .eq('id', id);

                if (error) throw error;
            } catch (err) {
                console.error(err);
                alert("Error deleting song");
            }
        }
    };

    const handleToggleVerify = async (song: Resource) => {
        try {
            const { error } = await supabase
                .from('songs')
                .update({ verified: !song.verified })
                .eq('id', song.id);

            if (error) throw error;
        } catch (err) {
            console.error(err);
            alert("Error updating verification status");
        }
    };

    const filteredSongs = songs.filter(s =>
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.author?.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#FDFBF7' }}>
            <header style={{ background: '#8A5082', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'sticky', top: 0, zIndex: 10 }}>
                <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'white' }}><ArrowLeft size={24} /></button>
                <h2 style={{ margin: 0, flex: 1 }}>Manage Songs</h2>
                <button
                    onClick={() => { setEditingSong(undefined); setIsEditing(true); }}
                    style={{ background: 'white', color: '#8A5082', border: 'none', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <Plus size={18} /> Add Song
                </button>
            </header>

            <main style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                {isEditing ? (
                    <SongEditor
                        song={editingSong}
                        onSave={() => setIsEditing(false)}
                        onCancel={() => setIsEditing(false)}
                    />
                ) : (
                    <>
                        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                            <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                            <input
                                placeholder="Search inventory..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '12px', border: '1px solid #ddd' }}
                            />
                        </div>

                        {loading ? (
                            <p>Loading database...</p>
                        ) : (
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {filteredSongs.map(song => (
                                    <div key={song.id} style={{ background: 'white', padding: '1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                        <div>
                                            <div style={{ fontWeight: 600, color: '#333' }}>{song.title}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666' }}>{song.author}</div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button
                                                onClick={() => handleToggleVerify(song)}
                                                style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', background: song.verified ? '#e6fffa' : '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                title={song.verified ? "Verified" : "Mark as verified"}
                                            >
                                                {song.verified ? <CheckCircle2 size={18} color="#00a38d" /> : <Circle size={18} color="#666" />}
                                            </button>
                                            <button
                                                onClick={() => { setEditingSong(song); setIsEditing(true); }}
                                                style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9' }}
                                            >
                                                <Edit2 size={18} color="#666" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(song.id)}
                                                style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', background: '#fff5f5' }}
                                            >
                                                <Trash2 size={18} color="#ff4444" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                {filteredSongs.length === 0 && <p style={{ textAlign: 'center', color: '#999' }}>No songs found.</p>}
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
};
