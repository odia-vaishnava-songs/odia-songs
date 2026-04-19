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
    const { songs, loading, error, refreshSongs } = useSongs();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [editingSong, setEditingSong] = useState<Resource | undefined>(undefined);
    const [searchTerm, setSearchTerm] = useState('');
    const [assignedUsers, setAssignedUsers] = useState<User[]>([]);
    const [filterByMe, setFilterByMe] = useState(false);
    const [selectedEditorId, setSelectedEditorId] = useState<string>('all');
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    // Test Mode logic for localhost
    const debugRole = typeof window !== 'undefined' && window.location.hostname === 'localhost' 
        ? window.localStorage.getItem('debug_role') 
        : null;
    
    const role = (debugRole || user?.role || 'user').toLowerCase();
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

    const toggleSelection = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    const toggleAll = () => {
        if (selectedIds.length === filteredSongs.length && filteredSongs.length > 0) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredSongs.map(s => s.id));
        }
    };

    const handleBulkAssign = () => {
        if (selectedIds.length === 0) return;
        window.dispatchEvent(new CustomEvent('set-assign-song', { detail: selectedIds }));
    };

    const handleBulkUnassign = async () => {
        if (selectedIds.length === 0) return;
        if (!confirm(`Are you sure you want to clear assignments for ${selectedIds.length} songs?`)) return;

        try {
            const { error } = await supabase
                .from('songs')
                .update({ assigned_to: null })
                .in('id', selectedIds);
            if (error) throw error;
            alert('Assignments cleared successfully!');
            setSelectedIds([]);
            window.location.reload();
        } catch (err) {
            console.error('Bulk unassign failed:', err);
            alert('Failed to clear assignments.');
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this song?")) {
            try {
                const { error } = await supabase
                    .from('songs')
                    .delete()
                    .eq('id', id);

                if (error) throw error;
                if (refreshSongs) refreshSongs();
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
                    verified: status === 'COMPLETED',
                    published: true // Ensure it stays public when updating status
                })
                .eq('id', songId);

            if (error) throw error;
            if (refreshSongs) refreshSongs();
        } catch (err) {
            console.error(err);
            alert("Error updating status");
        }
    };

    const handlePublishToggle = async (songId: string, currentPublished: boolean) => {
        try {
            const { error } = await supabase
                .from('songs')
                .update({ published: !currentPublished })
                .eq('id', songId);
            if (error) throw error;
            if (refreshSongs) refreshSongs();
        } catch (err) {
            console.error(err);
        }
    };

    const filteredSongs = songs.filter(s => {
        const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.author?.toLowerCase().includes(searchTerm.toLowerCase());

        if (!matchesSearch) return false;

        if (isEditor) {
            return s.assigned_to === user?.id;
        }

        if (isAdmin) {
            if (filterByMe) return s.assigned_to === user?.id;
            if (selectedEditorId === 'unassigned') return !s.assigned_to;
            if (selectedEditorId !== 'all') return s.assigned_to === selectedEditorId;
        }

        return true;
    }).sort((a, b) => {
        // 1. Group by Category (Gita always at the top)
        if (a.category === 'Gita' && b.category !== 'Gita') return -1;
        if (a.category !== 'Gita' && b.category === 'Gita') return 1;

        // 2. Within Gita, use display_order (Chapter 1, 2...)
        if (a.category === 'Gita' && b.category === 'Gita') {
            if ((a.display_order || 0) !== (b.display_order || 0)) {
                return (a.display_order || 0) - (b.display_order || 0);
            }
        }

        // 3. For all other songs, sort alphabetically by English Title (prefer title_english)
        const titleA = (a.title_english || a.title || '').trim().toLowerCase();
        const titleB = (b.title_english || b.title || '').trim().toLowerCase();
        return titleA.localeCompare(titleB, 'en', { numeric: true });
    });

    const handleAssignClick = (songId: string) => {
        setSelectedIds([songId]);
        window.dispatchEvent(new CustomEvent('set-assign-song', { detail: [songId] }));
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
                <button onClick={() => isEditing ? setIsEditing(false) : navigate('/')} style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center' }}><ArrowLeft size={24} /></button>
                <h2 style={{ margin: 0, flex: 1, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    Manage Songs
                    <span style={{ 
                        fontSize: '0.7rem', padding: '4px 12px', borderRadius: '20px',
                        backgroundColor: isAdmin ? 'rgba(72, 187, 120, 0.25)' : 'rgba(255, 153, 0, 0.25)',
                        color: isAdmin ? '#22C55E' : '#FF9800', 
                        border: `2px solid ${isAdmin ? '#22C55E' : '#FF9800'}`,
                        textTransform: 'uppercase', fontWeight: 900, letterSpacing: '1px'
                    }}>
                        {isAdmin ? '🛡️ Admin' : '👤 Editor'}
                    </span>
                    {window.location.hostname === 'localhost' && (
                        <button 
                            onClick={() => {
                                // Simple trick to toggle role for testing on localhost
                                const newRole = isAdmin ? 'subadmin' : 'admin';
                                window.localStorage.setItem('debug_role', newRole);
                                window.location.reload();
                            }}
                            style={{ fontSize: '0.6rem', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', opacity: 0.7 }}
                        >
                            [Test {isAdmin ? 'Subadmin' : 'Admin'} Mode]
                        </button>
                    )}
                </h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => { setEditingSong(undefined); setIsEditing(true); }}
                        style={{ background: 'white', color: '#8A5082', border: 'none', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <Plus size={18} /> Add Song
                    </button>
                </div>
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
                        {/* Summary Stats Bar - NOW STICKY */}
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
                            gap: '0.8rem', 
                            marginBottom: '1.5rem',
                            position: 'sticky',
                            top: '64px', // Below the main header
                            padding: '1rem 0',
                            backgroundColor: '#FDFBF7', // Matches page background
                            zIndex: 9,
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ 
                                background: '#EBF4FF', padding: '1rem', borderRadius: '12px', 
                                border: '1px solid #BEE3F8', textAlign: 'center' 
                            }}>
                                <div style={{ fontSize: '0.65rem', color: '#3182CE', fontWeight: 800, textTransform: 'uppercase' }}>Total Songs</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#2A4365' }}>{filteredSongs.length}</div>
                            </div>
                            <div style={{ 
                                background: '#F0FFF4', padding: '1rem', borderRadius: '12px', 
                                border: '1px solid #BBF7D0', textAlign: 'center' 
                            }}>
                                <div style={{ fontSize: '0.65rem', color: '#166534', fontWeight: 800, textTransform: 'uppercase' }}>🔔 Published</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1ed106' }}>
                                    {filteredSongs.filter(s => s.published).length}
                                </div>
                            </div>
                            <div style={{ 
                                background: '#E6FFFA', padding: '1rem', borderRadius: '12px', 
                                border: '1px solid #B2F5EA', textAlign: 'center' 
                            }}>
                                <div style={{ fontSize: '0.65rem', color: '#2C7A7B', fontWeight: 800, textTransform: 'uppercase' }}>✅ Proofread</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#00a38d' }}>
                                    {filteredSongs.filter(s => s.status === 'COMPLETED' || s.verified).length}
                                </div>
                            </div>
                            <div style={{ 
                                background: '#FFF5F5', padding: '1rem', borderRadius: '12px', 
                                border: '1px solid #FED7D7', textAlign: 'center' 
                            }}>
                                <div style={{ fontSize: '0.65rem', color: '#E53E3E', fontWeight: 800, textTransform: 'uppercase' }}>⏳ Pending</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#742A2A' }}>
                                    {filteredSongs.length - filteredSongs.filter(s => s.published).length}
                                </div>
                            </div>
                        </div>

                        <div style={{ position: 'relative', marginBottom: '1rem' }}>
                            <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                            <input
                                placeholder="Search inventory..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '12px', border: '1px solid #ddd' }}
                            />
                        </div>

                        {isAdmin && selectedIds.length > 0 && (
                            <div style={{
                                position: 'sticky', top: '70px', zIndex: 10,
                                background: '#8A5082', color: 'white', padding: '1rem',
                                borderRadius: '12px', marginBottom: '1.5rem',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                boxShadow: '0 4px 12px rgba(138, 80, 130, 0.3)'
                            }}>
                                <div>
                                    <div style={{ fontWeight: 600 }}>{selectedIds.length} Songs Selected</div>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Batch Processing Mode</div>
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        onClick={handleBulkUnassign}
                                        style={{ background: 'white', color: '#C53030', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}
                                    >Clear All</button>
                                    <button
                                        onClick={handleBulkAssign}
                                        style={{ background: '#FFC857', color: '#4A2C40', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}
                                    >Bulk Push 👤</button>
                                </div>
                            </div>
                        )}

                        {isAdmin && (
                            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <button
                                        onClick={toggleAll}
                                        style={{
                                            padding: '0.5rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600,
                                            background: selectedIds.length === filteredSongs.length && filteredSongs.length > 0 ? '#4A2C40' : 'white',
                                            color: selectedIds.length === filteredSongs.length && filteredSongs.length > 0 ? 'white' : '#4A2C40',
                                            border: '1px solid #4A2C40', cursor: 'pointer'
                                        }}
                                    >
                                        {selectedIds.length === filteredSongs.length && filteredSongs.length > 0 ? 'Deselect All' : 'Select All'}
                                    </button>
                                    <div style={{ flex: 1 }}></div>
                                    <button
                                        onClick={() => { setFilterByMe(false); setSelectedEditorId('all'); }}
                                        style={{
                                            padding: '0.5rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600,
                                            background: !filterByMe && selectedEditorId === 'all' ? '#8A5082' : 'white',
                                            color: !filterByMe && selectedEditorId === 'all' ? 'white' : '#8A5082',
                                            border: '1px solid #8A5082', cursor: 'pointer'
                                        }}
                                    >All Songs</button>
                                    <button
                                        onClick={() => setFilterByMe(true)}
                                        style={{
                                            padding: '0.5rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600,
                                            background: filterByMe ? '#8A5082' : 'white',
                                            color: filterByMe ? 'white' : '#8A5082',
                                            border: '1px solid #8A5082', cursor: 'pointer'
                                        }}
                                    >By Me</button>
                                </div>

                                {!filterByMe && (
                                    <select
                                        value={selectedEditorId}
                                        onChange={(e) => setSelectedEditorId(e.target.value)}
                                        style={{
                                            width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #8A5082',
                                            backgroundColor: 'white', color: '#8A5082', fontWeight: 600, fontSize: '0.85rem'
                                        }}
                                    >
                                        <option value="all">View All Assignments</option>
                                        <option value="unassigned">View UNASSIGNED Only</option>
                                        <hr />
                                        {assignedUsers.map(editor => (
                                            <option key={editor.id} value={editor.id}>By Editor: {editor.name}</option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        )}

                        {loading ? (
                            <div style={{ padding: '2rem', textAlign: 'center' }}>
                                <p style={{ color: '#8A5082', fontWeight: 600 }}>Loading database...</p>
                                <div style={{
                                    width: '30px', height: '30px', border: '3px solid #f3f3f3',
                                    borderTop: '3px solid #8A5082', borderRadius: '50%', margin: '1rem auto',
                                    animation: 'spin 1s linear infinite'
                                }} />
                                <style>{`
                                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                                    @keyframes blinkGreen {
                                        0% { opacity: 1; box-shadow: 0 0 2px #1ed106; }
                                        50% { opacity: 0.7; box-shadow: 0 0 15px #1ed106; }
                                        100% { opacity: 1; box-shadow: 0 0 2px #1ed106; }
                                    }
                                    @keyframes ripple {
                                        0% { transform: scale(1); opacity: 0.15; }
                                        100% { transform: scale(1.6); opacity: 0; }
                                    }
                                `}</style>
                            </div>
                        ) : error ? (
                            <div style={{ padding: '1.5rem', backgroundColor: '#FFF5F5', border: '1px solid #FEB2B2', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <p style={{ color: '#C53030', fontWeight: 600, margin: 0 }}>⚠️ Database Error</p>
                                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>{error}</p>
                            </div>
                        ) : (
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {filteredSongs.map(song => (
                                    <div
                                        key={song.id}
                                        onClick={() => isAdmin ? toggleSelection(song.id) : null}
                                        style={{
                                            background: selectedIds.includes(song.id) ? '#FFF9E6' : 'white',
                                            padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                            border: `1px solid ${selectedIds.includes(song.id) ? '#FFC857' : '#eee'}`,
                                            cursor: isAdmin ? 'pointer' : 'default', transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {isAdmin && (
                                            <div style={{
                                                width: '20px', height: '20px', borderRadius: '4px',
                                                border: `2px solid ${selectedIds.includes(song.id) ? '#8A5082' : '#ccc'}`,
                                                backgroundColor: selectedIds.includes(song.id) ? '#8A5082' : 'transparent',
                                                display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0
                                            }}>
                                                {selectedIds.includes(song.id) && <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>✓</span>}
                                            </div>
                                        )}

                                        <div style={{ flex: 1 }}>
                                            <div style={{ 
                                                fontWeight: 800, 
                                                color: song.published ? '#1ed106' : getStatusColor(song.status, song.verified), 
                                                fontFamily: 'var(--font-odia-sans)',
                                                transition: 'color 0.3s ease'
                                            }}>{song.title}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666', fontFamily: 'var(--font-odia-sans)' }}>{song.author}</div>
                                            {isAdmin && song.assigned_to && (
                                                <div style={{
                                                    display: 'inline-block', fontSize: '0.65rem', color: '#2D3748',
                                                    backgroundColor: '#E2E8F0', padding: '2px 8px', borderRadius: '12px',
                                                    marginTop: '6px', fontWeight: 600
                                                }}>
                                                    👤 {assignedUsers.find(u => u.id === song.assigned_to)?.name || 'Editor'}
                                                </div>
                                            )}
                                        </div>

                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleStatusUpdate(song.id, 'NOT_DONE'); }}
                                                style={{
                                                    width: '32px', height: '32px', borderRadius: '8px', border: '1px solid #ddd',
                                                    background: song.status === 'NOT_DONE' ? getStatusBackground('NOT_DONE') : '#f9f9f9',
                                                    color: song.status === 'NOT_DONE' ? STATUS_COLORS.NOT_DONE : '#666',
                                                    fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                                                }}
                                                title="Mark as Not Done"
                                            >R</button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleStatusUpdate(song.id, 'IN_PROGRESS'); }}
                                                style={{
                                                    width: '32px', height: '32px', borderRadius: '8px', border: '1px solid #ddd',
                                                    background: song.status === 'IN_PROGRESS' ? getStatusBackground('IN_PROGRESS') : '#f9f9f9',
                                                    color: song.status === 'IN_PROGRESS' ? STATUS_COLORS.IN_PROGRESS : '#666',
                                                    fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                                                }}
                                                title="Mark as In Progress"
                                            >O</button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleStatusUpdate(song.id, 'COMPLETED'); }}
                                                style={{
                                                    width: '32px', height: '32px', borderRadius: '8px', border: '1px solid #ddd',
                                                    background: song.status === 'COMPLETED' || song.verified ? getStatusBackground('COMPLETED') : '#f9f9f9',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                                                }}
                                                title="Mark as Complete-Proofread"
                                            >
                                                <CheckCircle2 size={18} color={song.status === 'COMPLETED' || song.verified ? STATUS_COLORS.COMPLETED : "#666"} />
                                            </button>

                                            {isAdmin && (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleAssignClick(song.id); }}
                                                    style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', background: song.assigned_to ? '#E8F5E9' : '#f9f9f9', cursor: 'pointer' }}
                                                    title="Assign to Editor"
                                                >
                                                    <UserCheck size={18} color={song.assigned_to ? '#2E7D32' : '#666'} />
                                                </button>
                                            )}
                                                               <button
                                                onClick={(e) => { e.stopPropagation(); handlePublishToggle(song.id, !!song.published); }}
                                                style={{ 
                                                    width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #ddd', 
                                                    background: song.published ? '#1ed106' : 'white',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                                                    animation: song.published ? 'blinkGreen 2s infinite ease-in-out' : 'none',
                                                    boxShadow: song.published ? '0 0 12px rgba(30, 209, 6, 0.6)' : 'none',
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    position: 'relative',
                                                    marginRight: '0.5rem'
                                                }}
                                                title={song.published ? "Active - Click to Hide" : "Inactive - Click to Publish"}
                                            >
                                                <div style={{ 
                                                    width: '14px', height: '14px', borderRadius: '50%', 
                                                    background: 'white',
                                                    opacity: song.published ? 1 : 0.4,
                                                    transition: 'opacity 0.3s ease'
                                                }} />
                                                {song.published && (
                                                    <div style={{
                                                        position: 'absolute', width: '100%', height: '100%',
                                                        borderRadius: '50%', border: '2px solid #1ed106',
                                                        animation: 'ripple 2s infinite'
                                                    }} />
                                                )}
                                            </button>

                                            <button
                                                onClick={(e) => { e.stopPropagation(); setEditingSong(song); setIsEditing(true); }}
                                                style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9', cursor: 'pointer' }}
                                            >
                                                <Edit2 size={18} color="#666" />
                                            </button>
                                            {isAdmin && (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleDelete(song.id); }}
                                                    style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', background: '#fff5f5', cursor: 'pointer' }}
                                                >
                                                    <Trash2 size={18} color="#ff4444" />
                                                </button>
                                            )}
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
