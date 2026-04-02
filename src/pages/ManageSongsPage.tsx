import React, { useState } from 'react';
import { useSongs } from '../hooks/useSongs';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../supabase/config';
import { SongEditor } from '../components/SongEditor';
import { Plus, Edit2, Trash2, Search, ArrowLeft, CheckCircle2, Menu, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Resource, User } from '../types';
import { STATUS_COLORS, getStatusBackground, getStatusColor } from '../constants/colors';



export const ManageSongsPage: React.FC = () => {
    const { songs, loading } = useSongs();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [editingSong, setEditingSong] = useState<Resource | undefined>(undefined);
    const [searchTerm, setSearchTerm] = useState('');
    const [assignedUsers, setAssignedUsers] = useState<User[]>([]);
    const [filterByMe, setFilterByMe] = useState(false);

    const role = user?.role?.toLowerCase();
    const isAdmin = role === 'admin';
    const isEditor = role === 'subadmin';
    const isHost = isAdmin || isEditor;

    React.useEffect(() => {
        if (isAdmin) {
            const fetchEditors = async () => {
                const { data } = await supabase.from('profiles').select('*').in('role', ['SUBADMIN', 'subadmin']);
                if (data) setAssignedUsers(data as User[]);
            };
            fetchEditors();
        }
    }, [isAdmin]);

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

    const handleStatusUpdate = async (songId: string, status: 'NOT_DONE' | 'IN_PROGRESS' | 'COMPLETED') => {
        try {
            const { error } = await supabase
                .from('songs')
                .update({
                    status,
                    verified: status === 'COMPLETED'
                })
                .eq('id', songId);

            if (error) throw error;
        } catch (err) {
            console.error(err);
            alert("Error updating status");
        }
    };

    const filteredSongs = songs.filter(s => {
        // Search filter
        const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.author?.toLowerCase().includes(searchTerm.toLowerCase());

        if (!matchesSearch) return false;

        // Role-based visibility
        if (isEditor) {
            return s.assigned_to === user?.id;
        }

        if (isAdmin && filterByMe) {
            return s.assigned_to === user?.id;
        }

        return true;
    }).sort((a, b) => a.title.localeCompare(b.title));

    const handleAssignClick = (songId: string) => {
        window.dispatchEvent(new CustomEvent('set-assign-song', { detail: songId }));
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#FDFBF7' }}>
            <header style={{ background: '#8A5082', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'sticky', top: 0, zIndex: 10 }}>
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-drawer'))}
                    style={{ background: 'none', border: 'none', color: 'white', padding: '4px', display: 'flex', alignItems: 'center' }}
                >
                    <Menu size={24} />
                </button>
                <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center' }}><ArrowLeft size={24} /></button>
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
                        <div style={{ position: 'relative', marginBottom: '1rem' }}>
                            <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                            <input
                                placeholder="Search inventory..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '12px', border: '1px solid #ddd' }}
                            />
                        </div>

                        {isAdmin && (
                            <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <button
                                    onClick={() => setFilterByMe(false)}
                                    style={{
                                        flex: 1, padding: '0.5rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600,
                                        background: !filterByMe ? '#8A5082' : 'white',
                                        color: !filterByMe ? 'white' : '#8A5082',
                                        border: '1px solid #8A5082'
                                    }}
                                >All Songs</button>
                                <button
                                    onClick={() => setFilterByMe(true)}
                                    style={{
                                        flex: 1, padding: '0.5rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600,
                                        background: filterByMe ? '#8A5082' : 'white',
                                        color: filterByMe ? 'white' : '#8A5082',
                                        border: '1px solid #8A5082'
                                    }}
                                >Assigned to Me</button>
                            </div>
                        )}

                        {loading ? (
                            <p>Loading database...</p>
                        ) : (
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {filteredSongs.map(song => (
                                    <div key={song.id} style={{ background: 'white', padding: '1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                        <div>
                                            <div style={{ fontWeight: 600, color: getStatusColor(song.status, song.verified), fontFamily: 'var(--font-odia-sans)' }}>{song.title}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666', fontFamily: 'var(--font-odia-sans)' }}>{song.author}</div>
                                            {isAdmin && song.assigned_to && (
                                                <div style={{ fontSize: '0.7rem', color: '#8A5082', fontStyle: 'italic', marginTop: '4px' }}>
                                                    Assigned to: {assignedUsers.find(u => u.id === song.assigned_to)?.name || 'Editor'}
                                                </div>
                                            )}
                                        </div>


                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            {/* Status Buttons */}
                                            <button
                                                onClick={() => handleStatusUpdate(song.id, 'NOT_DONE')}
                                                style={{
                                                    width: '32px', height: '32px', borderRadius: '8px', border: '1px solid #ddd',
                                                    background: song.status === 'NOT_DONE' ? getStatusBackground('NOT_DONE') : '#f9f9f9',
                                                    color: song.status === 'NOT_DONE' ? STATUS_COLORS.NOT_DONE : '#666',
                                                    fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                                                }}

                                                title="Mark as Not Done"
                                            >
                                                R
                                            </button>
                                            <button
                                                onClick={() => handleStatusUpdate(song.id, 'IN_PROGRESS')}
                                                style={{
                                                    width: '32px', height: '32px', borderRadius: '8px', border: '1px solid #ddd',
                                                    background: song.status === 'IN_PROGRESS' ? getStatusBackground('IN_PROGRESS') : '#f9f9f9',
                                                    color: song.status === 'IN_PROGRESS' ? STATUS_COLORS.IN_PROGRESS : '#666',
                                                    fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                                                }}

                                                title="Mark as In Progress"
                                            >
                                                O
                                            </button>
                                            <button
                                                onClick={() => handleStatusUpdate(song.id, 'COMPLETED')}
                                                style={{
                                                    width: '32px', height: '32px', borderRadius: '8px', border: '1px solid #ddd',
                                                    background: song.status === 'COMPLETED' || song.verified ? getStatusBackground('COMPLETED') : '#f9f9f9',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                                                }}
                                                title="Mark as Completed"
                                            >
                                                <CheckCircle2 size={18} color={song.status === 'COMPLETED' || song.verified ? STATUS_COLORS.COMPLETED : "#666"} />
                                            </button>

                                            {isAdmin && (
                                                <button
                                                    onClick={() => handleAssignClick(song.id)}
                                                    style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', background: song.assigned_to ? '#E8F5E9' : '#f9f9f9' }}
                                                    title="Assign to Editor"
                                                >
                                                    <UserCheck size={18} color={song.assigned_to ? '#2E7D32' : '#666'} />
                                                </button>
                                            )}

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
