import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSongs } from '../hooks/useSongs';
import { usePresence } from '../hooks/usePresence';
import { supabase } from '../supabase/config';
import { SongEditor } from '../components/SongEditor';
import { EXTERNAL_CATALOG } from '../data/externalCatalog';
import { AUTHOR_CATALOG } from '../data/authorCatalog';
import { isTitleMatch } from '../utils/matching';
import type { Resource, User } from '../types';
import { getStatusBackground, getStatusColor } from '../constants/colors';
import {
    Shield, LayoutDashboard, Music, Users, BookA, Zap, ExternalLink,
    ArrowLeft, Search, Plus, RefreshCw,
    Download, Edit2, Trash2, UserCheck, Sparkles, ChevronRight,
    Headphones, ArrowUpRight
} from 'lucide-react';

type TabType = 'overview' | 'songs' | 'users' | 'audit' | 'sync';

export const AdminPortalPage: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { songs, refreshSongs } = useSongs();
    const { onlineUsers } = usePresence(user);

    const [activeTab, setActiveTab] = useState<TabType>('overview');

    // Role checks
    const role = (user?.role || 'user').toLowerCase();
    const isAdmin = role === 'admin';

    // --- SONGS TAB STATE ---
    const [isEditingSong, setIsEditingSong] = useState(false);
    const [editingSong, setEditingSong] = useState<Resource | undefined>(undefined);
    const [songSearch, setSongSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [authorFilter, setAuthorFilter] = useState<string>('all');
    const [editorFilter, setEditorFilter] = useState<string>('all');

    // --- USERS TAB STATE ---
    const [usersList, setUsersList] = useState<User[]>([]);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [userSearch, setUserSearch] = useState('');
    const [userRoleFilter, setUserRoleFilter] = useState<string>('all');

    // --- AUDIT TAB STATE ---
    const [auditSearch, setAuditSearch] = useState('');
    const [auditFilter, setAuditFilter] = useState<'all' | 'missing' | 'completed' | 'coming-soon'>('all');

    // --- SYNC TAB STATE ---
    const [isSyncing, setIsSyncing] = useState(false);
    const [syncResult, setSyncResult] = useState<{ success: boolean; message: string } | null>(null);

    // 1. Fetch Users
    const fetchUsers = async () => {
        setLoadingUsers(true);
        try {
            const { data: profiles, error: pErr } = await supabase
                .from('profiles')
                .select('*')
                .order('created_at', { ascending: false });
            if (pErr) throw pErr;

            const { data: songAssignments, error: sErr } = await supabase
                .from('songs')
                .select('assigned_to, status, verified');
            if (sErr) throw sErr;

            const userStats = (profiles as User[]).map(p => {
                const assigned = (songAssignments || []).filter(s => s.assigned_to === p.id);
                const completed = assigned.filter((s: any) => s.status === 'COMPLETED' || s.verified).length;
                return {
                    ...p,
                    assignedSongCount: assigned.length,
                    completedSongCount: completed
                };
            });
            setUsersList(userStats);
        } catch (err) {
            console.error('Error fetching users:', err);
        } finally {
            setLoadingUsers(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Unique Authors
    const uniqueAuthors = useMemo(() => {
        const set = new Set<string>();
        songs.forEach(s => {
            if (s.author) set.add(s.author);
        });
        return Array.from(set).sort();
    }, [songs]);

    // Editors List
    const editorsList = useMemo(() => {
        return usersList.filter(u => {
            const r = (u.role || '').toLowerCase();
            return r === 'subadmin' || r === 'admin';
        });
    }, [usersList]);

    // Filtered Songs
    const filteredSongs = useMemo(() => {
        return songs.filter(s => {
            const matchesSearch =
                (s.title_odia || '').toLowerCase().includes(songSearch.toLowerCase()) ||
                (s.title_english || '').toLowerCase().includes(songSearch.toLowerCase()) ||
                (s.title || '').toLowerCase().includes(songSearch.toLowerCase()) ||
                (s.author || '').toLowerCase().includes(songSearch.toLowerCase());

            const matchesStatus =
                statusFilter === 'all' ? true :
                statusFilter === 'COMPLETED' ? (s.status === 'COMPLETED' || s.verified) :
                statusFilter === 'IN_PROGRESS' ? (s.status === 'IN_PROGRESS') :
                (s.status === 'NOT_DONE' || !s.status);

            const matchesAuthor = authorFilter === 'all' || s.author === authorFilter;
            const matchesEditor =
                editorFilter === 'all' ? true :
                editorFilter === 'unassigned' ? !s.assigned_to :
                s.assigned_to === editorFilter;

            return matchesSearch && matchesStatus && matchesAuthor && matchesEditor;
        });
    }, [songs, songSearch, statusFilter, authorFilter, editorFilter]);

    // Catalog comparison data
    const catalogSongs = useMemo(() => {
        return AUTHOR_CATALOG.flatMap(author =>
            author.catalog.map(song => ({
                ...song,
                authorName: author.name
            }))
        );
    }, []);

    const auditData = useMemo(() => {
        return EXTERNAL_CATALOG.map(extName => {
            const liveMatch = songs.find(s =>
                isTitleMatch(extName, s.title_english || s.title, '', s.title_odia)
            );
            const catalogMatch = catalogSongs.find(s =>
                isTitleMatch(extName, s.title_english, '', s.title_odia)
            );

            let status: 'completed' | 'coming-soon' | 'missing' = 'missing';
            if (liveMatch && (liveMatch.status === 'COMPLETED' || liveMatch.verified)) {
                status = 'completed';
            } else if (catalogMatch) {
                status = 'coming-soon';
            }

            return {
                externalName: extName,
                status,
                liveMatch,
                catalogMatch,
                author: liveMatch?.author || catalogMatch?.authorName || 'Unknown'
            };
        });
    }, [songs, catalogSongs]);

    const filteredAudit = useMemo(() => {
        return auditData.filter(item => {
            const matchesSearch = item.externalName.toLowerCase().includes(auditSearch.toLowerCase()) ||
                item.author.toLowerCase().includes(auditSearch.toLowerCase());
            const matchesFilter = auditFilter === 'all' || item.status === auditFilter;
            return matchesSearch && matchesFilter;
        });
    }, [auditData, auditSearch, auditFilter]);

    // Song Stats
    const songStats = useMemo(() => {
        const total = songs.length;
        const completed = songs.filter(s => s.status === 'COMPLETED' || s.verified).length;
        const inProgress = songs.filter(s => s.status === 'IN_PROGRESS').length;
        const notDone = total - completed - inProgress;
        const withAudio = songs.filter(s => s.audioUrl || (s.audioVersions && s.audioVersions.length > 0)).length;
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
        return { total, completed, inProgress, notDone, withAudio, completionRate };
    }, [songs]);

    // Handle Assigning an Editor
    const handleQuickAssign = async (songId: string, editorId: string) => {
        try {
            const newAssigned = editorId === 'none' ? null : editorId;
            const { error } = await supabase
                .from('songs')
                .update({ assigned_to: newAssigned })
                .eq('id', songId);

            if (error) throw error;
            await refreshSongs();
            fetchUsers();
        } catch (err) {
            console.error('Failed to assign editor:', err);
            alert('Failed to assign editor. Check database connection.');
        }
    };

    // Handle User Role Change
    const handleRoleChange = async (userId: string, newRole: string) => {
        try {
            const { error } = await supabase
                .from('profiles')
                .update({ role: newRole.toUpperCase() })
                .eq('id', userId);

            if (error) throw error;
            setUsersList(prev => prev.map(u => u.id === userId ? { ...u, role: newRole.toLowerCase() as any } : u));
        } catch (err) {
            console.error('Failed to update role:', err);
            alert('Failed to update user role.');
        }
    };

    // Handle Song Delete
    const handleDeleteSong = async (songId: string) => {
        try {
            const { error } = await supabase.from('songs').delete().eq('id', songId);
            if (error) throw error;
            await refreshSongs();
        } catch (err) {
            console.error('Failed to delete song:', err);
            alert('Failed to delete song.');
        }
    };

    // Handle Cloud Sync API
    const handleCloudSync = async () => {
        setIsSyncing(true);
        setSyncResult(null);
        try {
            const res = await fetch('/api/sync-all', { method: 'POST' });
            const data = await res.json();
            if (data.success) {
                setSyncResult({ success: true, message: 'Cloud-to-Code Sync completed successfully! Local repository is in sync.' });
                await refreshSongs();
            } else {
                setSyncResult({ success: false, message: data.error || 'Auto-Sync endpoint reported an issue.' });
            }
        } catch (err: any) {
            setSyncResult({ success: false, message: 'Could not contact dev server sync endpoint: ' + err.message });
        } finally {
            setIsSyncing(false);
        }
    };

    // Handle JSON Backup Export
    const handleExportBackup = () => {
        const json = JSON.stringify(songs, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `odia-songs-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#F8FAFC',
            color: '#1E293B',
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            {/* Top Navigation Bar */}
            <header style={{
                backgroundColor: 'white',
                borderBottom: '1px solid #E2E8F0',
                position: 'sticky',
                top: 0,
                zIndex: 40,
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
            }}>
                <div style={{
                    maxWidth: '1440px',
                    margin: '0 auto',
                    padding: '0.8rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px'
                }}>
                    {/* Brand / Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #FF9933 0%, #EA580C 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: '0 4px 10px rgba(234, 88, 12, 0.25)'
                        }}>
                            <Shield size={22} />
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <h1 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#0F172A', letterSpacing: '-0.3px' }}>
                                    Admin Portal
                                </h1>
                                <span style={{
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    padding: '2px 8px',
                                    borderRadius: '999px',
                                    backgroundColor: isAdmin ? '#FEE2E2' : '#FEF3C7',
                                    color: isAdmin ? '#B91C1C' : '#B45309'
                                }}>
                                    {isAdmin ? 'SUPER ADMIN' : 'EDITOR'}
                                </span>
                            </div>
                            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                                ଓଡ଼ିଆ ବୈଷ୍ଣବ ସଙ୍ଗୀତ — Central Management Hub
                            </span>
                        </div>
                    </div>

                    {/* Right Tools / Presence / Window switcher */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        {/* Live Presence Pill */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 12px',
                            backgroundColor: '#F0FDF4',
                            border: '1px solid #DCFCE7',
                            borderRadius: '999px',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: '#15803D'
                        }}>
                            <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#22C55E',
                                display: 'inline-block',
                                animation: 'pulsePresence 2s infinite'
                            }} />
                            <span>{onlineUsers.length} Online</span>
                        </div>

                        {/* Open Song App in New Tab Button */}
                        <button
                            onClick={() => window.open('/', '_blank')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '6px 14px',
                                backgroundColor: '#FFF7ED',
                                color: '#C2410C',
                                border: '1px solid #FFEDD5',
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            title="Launch the public Odia Vaishnava Songs app in a separate window"
                        >
                            <ExternalLink size={14} /> Open Song App ↗
                        </button>

                        {/* Back to Home Button */}
                        <button
                            onClick={() => navigate('/')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '6px 14px',
                                backgroundColor: '#F1F5F9',
                                color: '#475569',
                                border: '1px solid #E2E8F0',
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}
                        >
                            <ArrowLeft size={14} /> Back to App
                        </button>
                    </div>
                </div>

                {/* Tab Navigation Strip */}
                <div style={{
                    maxWidth: '1440px',
                    margin: '0 auto',
                    padding: '0 1.5rem',
                    display: 'flex',
                    gap: '4px',
                    overflowX: 'auto',
                    borderTop: '1px solid #F1F5F9'
                }}>
                    {[
                        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
                        { id: 'songs', label: `Manage Songs (${songs.length})`, icon: Music },
                        { id: 'users', label: `Users & Editors (${usersList.length})`, icon: Users },
                        { id: 'audit', label: 'Catalog Audit', icon: BookA },
                        { id: 'sync', label: 'Sync & Maintenance', icon: Zap }
                    ].map(tab => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as TabType)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 16px',
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: isActive ? '2px solid #EA580C' : '2px solid transparent',
                                    color: isActive ? '#EA580C' : '#64748B',
                                    fontWeight: isActive ? 700 : 500,
                                    fontSize: '0.88rem',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.15s ease'
                                }}
                            >
                                <Icon size={16} color={isActive ? '#EA580C' : '#64748B'} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </header>

            {/* Main Content Area */}
            <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '1.5rem' }}>

                {/* ========================================================= */}
                {/* 1. OVERVIEW TAB */}
                {/* ========================================================= */}
                {activeTab === 'overview' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Welcome Banner */}
                        <div style={{
                            padding: '1.6rem 2rem',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.15)'
                        }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                    <Sparkles size={18} color="#FBBF24" />
                                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#94A3B8', fontWeight: 700 }}>
                                        Command Center
                                    </span>
                                </div>
                                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>
                                    Welcome, {user?.name || user?.email || 'Administrator'}
                                </h2>
                                <p style={{ margin: '6px 0 0', color: '#94A3B8', fontSize: '0.9rem' }}>
                                    All song catalog edits, editor assignments, presence metrics, and cloud synchronization tools are accessible here.
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    onClick={() => {
                                        setEditingSong(undefined);
                                        setIsEditingSong(true);
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '10px 18px',
                                        borderRadius: '10px',
                                        backgroundColor: '#EA580C',
                                        color: 'white',
                                        border: 'none',
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)'
                                    }}
                                >
                                    <Plus size={16} /> Add New Song
                                </button>
                                <button
                                    onClick={() => setActiveTab('songs')}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '10px 18px',
                                        borderRadius: '10px',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        color: 'white',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        fontWeight: 600,
                                        fontSize: '0.85rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Music size={16} /> View All Songs
                                </button>
                            </div>
                        </div>

                        {/* Top Key Metrics Cards */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '1rem'
                        }}>
                            {/* Total Songs */}
                            <div style={{
                                backgroundColor: 'white',
                                padding: '1.25rem',
                                borderRadius: '14px',
                                border: '1px solid #E2E8F0',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Total Songs in Catalog</span>
                                    <span style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#FFF7ED', color: '#EA580C' }}>
                                        <Music size={18} />
                                    </span>
                                </div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>
                                    {songStats.total}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748B' }}>
                                    <span style={{ color: '#16A34A', fontWeight: 700 }}>{songStats.completed} Completed</span>
                                    <span>•</span>
                                    <span style={{ color: '#D97706', fontWeight: 700 }}>{songStats.inProgress} In Progress</span>
                                </div>
                            </div>

                            {/* Audio Coverage */}
                            <div style={{
                                backgroundColor: 'white',
                                padding: '1.25rem',
                                borderRadius: '14px',
                                border: '1px solid #E2E8F0',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Songs with Audio</span>
                                    <span style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#F0FDF4', color: '#16A34A' }}>
                                        <Headphones size={18} />
                                    </span>
                                </div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>
                                    {songStats.withAudio}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#16A34A', marginTop: '0.5rem', fontWeight: 600 }}>
                                    {songStats.total > 0 ? Math.round((songStats.withAudio / songStats.total) * 100) : 0}% audio coverage
                                </div>
                            </div>

                            {/* Registered Users */}
                            <div style={{
                                backgroundColor: 'white',
                                padding: '1.25rem',
                                borderRadius: '14px',
                                border: '1px solid #E2E8F0',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Registered Users & Editors</span>
                                    <span style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#EFF6FF', color: '#2563EB' }}>
                                        <Users size={18} />
                                    </span>
                                </div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>
                                    {usersList.length}
                                </div>
                                <div style={{ display: 'flex', gap: '8px', marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748B' }}>
                                    <span style={{ color: '#2563EB', fontWeight: 700 }}>{editorsList.length} Active Editors</span>
                                </div>
                            </div>

                            {/* Live Online Presence */}
                            <div style={{
                                backgroundColor: 'white',
                                padding: '1.25rem',
                                borderRadius: '14px',
                                border: '1px solid #E2E8F0',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Currently Online</span>
                                    <span style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#F0FDF4', color: '#16A34A' }}>
                                        <UserCheck size={18} />
                                    </span>
                                </div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#16A34A', marginTop: '0.5rem' }}>
                                    {onlineUsers.length}
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '0.5rem' }}>
                                    {onlineUsers.slice(0, 3).map(u => (
                                        <span key={u.id} style={{
                                            fontSize: '0.7rem',
                                            padding: '2px 6px',
                                            backgroundColor: '#DCFCE7',
                                            borderRadius: '6px',
                                            color: '#15803D',
                                            fontWeight: 600
                                        }}>
                                            {u.name}
                                        </span>
                                    ))}
                                    {onlineUsers.length > 3 && (
                                        <span style={{ fontSize: '0.7rem', color: '#64748B' }}>+{onlineUsers.length - 3} more</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar Card */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '14px',
                            border: '1px solid #E2E8F0'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#0F172A' }}>
                                        Catalog Completion Rate
                                    </h3>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                                        {songStats.completed} of {songStats.total} songs marked as verified & completed
                                    </span>
                                </div>
                                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#EA580C' }}>
                                    {songStats.completionRate}%
                                </span>
                            </div>
                            <div style={{ width: '100%', height: '10px', backgroundColor: '#F1F5F9', borderRadius: '999px', overflow: 'hidden' }}>
                                <div style={{
                                    width: `${songStats.completionRate}%`,
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #EA580C, #F97316)',
                                    borderRadius: '999px',
                                    transition: 'width 0.8s ease'
                                }} />
                            </div>
                        </div>

                        {/* Quick Navigation Cards */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1rem'
                        }}>
                            <div
                                onClick={() => setActiveTab('songs')}
                                style={{
                                    padding: '1.25rem',
                                    backgroundColor: 'white',
                                    borderRadius: '14px',
                                    border: '1px solid #E2E8F0',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#FFF7ED', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Music size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>Manage Song Library</div>
                                        <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Edit verses, translations & audio</div>
                                    </div>
                                </div>
                                <ChevronRight size={18} color="#94A3B8" />
                            </div>

                            <div
                                onClick={() => setActiveTab('users')}
                                style={{
                                    padding: '1.25rem',
                                    backgroundColor: 'white',
                                    borderRadius: '14px',
                                    border: '1px solid #E2E8F0',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>Manage Editors & Roles</div>
                                        <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Assign songs and grant roles</div>
                                    </div>
                                </div>
                                <ChevronRight size={18} color="#94A3B8" />
                            </div>

                            <div
                                onClick={() => setActiveTab('audit')}
                                style={{
                                    padding: '1.25rem',
                                    backgroundColor: 'white',
                                    borderRadius: '14px',
                                    border: '1px solid #E2E8F0',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#FDF4FF', color: '#A855F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <BookA size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>Catalog Audit</div>
                                        <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Identify missing Vaishnava songs</div>
                                    </div>
                                </div>
                                <ChevronRight size={18} color="#94A3B8" />
                            </div>
                        </div>
                    </div>
                )}

                {/* ========================================================= */}
                {/* 2. MANAGE SONGS TAB */}
                {/* ========================================================= */}
                {activeTab === 'songs' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {/* Songs Header with Controls */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '1.25rem',
                            borderRadius: '14px',
                            border: '1px solid #E2E8F0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                                <div>
                                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#0F172A' }}>
                                        Song Catalog Manager
                                    </h2>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                                        Showing {filteredSongs.length} of {songs.length} songs
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        setEditingSong(undefined);
                                        setIsEditingSong(true);
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '8px 16px',
                                        borderRadius: '8px',
                                        backgroundColor: '#EA580C',
                                        color: 'white',
                                        border: 'none',
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Plus size={16} /> New Song
                                </button>
                            </div>

                            {/* Search and Filters Bar */}
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1 1 240px', position: 'relative' }}>
                                    <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                                    <input
                                        type="text"
                                        placeholder="Search by title (English/Odia) or author..."
                                        value={songSearch}
                                        onChange={e => setSongSearch(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '8px 12px 8px 36px',
                                            borderRadius: '8px',
                                            border: '1px solid #CBD5E1',
                                            fontSize: '0.85rem',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>

                                {/* Status Filter */}
                                <select
                                    value={statusFilter}
                                    onChange={e => setStatusFilter(e.target.value)}
                                    style={{
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #CBD5E1',
                                        fontSize: '0.85rem',
                                        backgroundColor: 'white',
                                        color: '#334155'
                                    }}
                                >
                                    <option value="all">All Statuses</option>
                                    <option value="COMPLETED">Completed</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="NOT_DONE">Not Done</option>
                                </select>

                                {/* Author Filter */}
                                <select
                                    value={authorFilter}
                                    onChange={e => setAuthorFilter(e.target.value)}
                                    style={{
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #CBD5E1',
                                        fontSize: '0.85rem',
                                        backgroundColor: 'white',
                                        color: '#334155',
                                        maxWidth: '200px'
                                    }}
                                >
                                    <option value="all">All Authors</option>
                                    {uniqueAuthors.map(a => (
                                        <option key={a} value={a}>{a}</option>
                                    ))}
                                </select>

                                {/* Editor Filter */}
                                <select
                                    value={editorFilter}
                                    onChange={e => setEditorFilter(e.target.value)}
                                    style={{
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #CBD5E1',
                                        fontSize: '0.85rem',
                                        backgroundColor: 'white',
                                        color: '#334155'
                                    }}
                                >
                                    <option value="all">All Assignments</option>
                                    <option value="unassigned">Unassigned Only</option>
                                    {editorsList.map(ed => (
                                        <option key={ed.id} value={ed.id}>{ed.name || ed.email}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Song Table */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '14px',
                            border: '1px solid #E2E8F0',
                            overflow: 'hidden',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                        }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontWeight: 600 }}>
                                            <th style={{ padding: '12px 16px' }}>Title & Author</th>
                                            <th style={{ padding: '12px 16px' }}>Status</th>
                                            <th style={{ padding: '12px 16px' }}>Audio</th>
                                            <th style={{ padding: '12px 16px' }}>Assigned Editor</th>
                                            <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSongs.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#94A3B8' }}>
                                                    No songs found matching current filters.
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredSongs.map(s => {
                                                const hasAudio = !!(s.audioUrl || (s.audioVersions && s.audioVersions.length > 0));
                                                return (
                                                    <tr key={s.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                                        <td style={{ padding: '12px 16px' }}>
                                                            <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>
                                                                {s.title_odia || s.title}
                                                            </div>
                                                            <div style={{ color: '#64748B', fontSize: '0.78rem' }}>
                                                                {s.title_english || s.title}
                                                            </div>
                                                            <div style={{ color: '#94A3B8', fontSize: '0.72rem', marginTop: '2px' }}>
                                                                ✍️ {s.author || 'Unknown'} • ID: <code>{s.id}</code>
                                                            </div>
                                                        </td>
                                                        <td style={{ padding: '12px 16px' }}>
                                                            <span style={{
                                                                padding: '3px 8px',
                                                                borderRadius: '6px',
                                                                fontSize: '0.72rem',
                                                                fontWeight: 700,
                                                                backgroundColor: getStatusBackground(s.status || 'NOT_DONE'),
                                                                color: getStatusColor(s.status || 'NOT_DONE')
                                                            }}>
                                                                {s.status === 'COMPLETED' || s.verified ? 'COMPLETED' : (s.status === 'IN_PROGRESS' ? 'IN PROGRESS' : 'NOT DONE')}
                                                            </span>
                                                        </td>
                                                        <td style={{ padding: '12px 16px' }}>
                                                            {hasAudio ? (
                                                                <span style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '4px',
                                                                    color: '#15803D',
                                                                    fontSize: '0.75rem',
                                                                    fontWeight: 600,
                                                                    backgroundColor: '#DCFCE7',
                                                                    padding: '2px 8px',
                                                                    borderRadius: '6px'
                                                                }}>
                                                                    <Headphones size={12} /> Ready
                                                                </span>
                                                            ) : (
                                                                <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>No audio</span>
                                                            )}
                                                        </td>
                                                        <td style={{ padding: '12px 16px' }}>
                                                            <select
                                                                value={s.assigned_to || 'none'}
                                                                onChange={e => handleQuickAssign(s.id, e.target.value)}
                                                                style={{
                                                                    padding: '4px 8px',
                                                                    borderRadius: '6px',
                                                                    border: '1px solid #E2E8F0',
                                                                    fontSize: '0.75rem',
                                                                    backgroundColor: s.assigned_to ? '#FFFBEB' : 'white',
                                                                    color: s.assigned_to ? '#92400E' : '#64748B',
                                                                    fontWeight: s.assigned_to ? 600 : 400
                                                                }}
                                                            >
                                                                <option value="none">Unassigned</option>
                                                                {editorsList.map(ed => (
                                                                    <option key={ed.id} value={ed.id}>{ed.name || ed.email}</option>
                                                                ))}
                                                            </select>
                                                        </td>
                                                        <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                                                            <div style={{ display: 'inline-flex', gap: '6px' }}>
                                                                <button
                                                                    onClick={() => {
                                                                        setEditingSong(s);
                                                                        setIsEditingSong(true);
                                                                    }}
                                                                    style={{
                                                                        padding: '6px 10px',
                                                                        backgroundColor: '#FFF7ED',
                                                                        color: '#EA580C',
                                                                        border: '1px solid #FFEDD5',
                                                                        borderRadius: '6px',
                                                                        cursor: 'pointer',
                                                                        fontSize: '0.75rem',
                                                                        fontWeight: 700,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '4px'
                                                                    }}
                                                                >
                                                                    <Edit2 size={12} /> Edit
                                                                </button>
                                                                {isAdmin && (
                                                                    <button
                                                                        onClick={() => {
                                                                            if (window.confirm(`Are you sure you want to delete "${s.title_english || s.title}"?`)) {
                                                                                handleDeleteSong(s.id);
                                                                            }
                                                                        }}
                                                                        style={{
                                                                            padding: '6px 10px',
                                                                            backgroundColor: '#FEF2F2',
                                                                            color: '#DC2626',
                                                                            border: '1px solid #FEE2E2',
                                                                            borderRadius: '6px',
                                                                            cursor: 'pointer',
                                                                            fontSize: '0.75rem'
                                                                        }}
                                                                        title="Delete Song"
                                                                    >
                                                                        <Trash2 size={12} />
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* ========================================================= */}
                {/* 3. USERS & EDITORS TAB */}
                {/* ========================================================= */}
                {activeTab === 'users' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '1.25rem',
                            borderRadius: '14px',
                            border: '1px solid #E2E8F0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '12px'
                        }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#0F172A' }}>
                                    User & Editor Management
                                </h2>
                                <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                                    Manage roles, view devotee contact details, and assign editors to songs
                                </span>
                            </div>

                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input
                                    type="text"
                                    placeholder="Search users..."
                                    value={userSearch}
                                    onChange={e => setUserSearch(e.target.value)}
                                    style={{
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #CBD5E1',
                                        fontSize: '0.85rem'
                                    }}
                                />
                                <select
                                    value={userRoleFilter}
                                    onChange={e => setUserRoleFilter(e.target.value)}
                                    style={{
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #CBD5E1',
                                        fontSize: '0.85rem',
                                        backgroundColor: 'white'
                                    }}
                                >
                                    <option value="all">All Roles</option>
                                    <option value="admin">Admins</option>
                                    <option value="subadmin">Editors (Subadmin)</option>
                                    <option value="user">Users</option>
                                </select>
                            </div>
                        </div>

                        {/* Users Table */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '14px',
                            border: '1px solid #E2E8F0',
                            overflow: 'hidden'
                        }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontWeight: 600 }}>
                                        <th style={{ padding: '12px 16px' }}>Devotee Name</th>
                                        <th style={{ padding: '12px 16px' }}>Contact Info</th>
                                        <th style={{ padding: '12px 16px' }}>Assigned Work</th>
                                        <th style={{ padding: '12px 16px' }}>Current Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loadingUsers ? (
                                        <tr>
                                            <td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: '#64748B' }}>
                                                Loading devotee directory...
                                            </td>
                                        </tr>
                                    ) : usersList
                                        .filter(u => {
                                            const matchesSearch = (u.name || '').toLowerCase().includes(userSearch.toLowerCase()) ||
                                                (u.email || '').toLowerCase().includes(userSearch.toLowerCase()) ||
                                                (u.phone || '').includes(userSearch);
                                            const matchesRole = userRoleFilter === 'all' || (u.role || '').toLowerCase() === userRoleFilter;
                                            return matchesSearch && matchesRole;
                                        })
                                        .map(u => {
                                            return (
                                                <tr key={u.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                                    <td style={{ padding: '12px 16px' }}>
                                                        <div style={{ fontWeight: 700, color: '#0F172A' }}>{u.name || 'Unnamed Devotee'}</div>
                                                        <div style={{ color: '#94A3B8', fontSize: '0.72rem' }}>ID: {u.id}</div>
                                                    </td>
                                                    <td style={{ padding: '12px 16px' }}>
                                                        <div style={{ color: '#334155' }}>{u.email || u.phone || 'No direct contact'}</div>
                                                        {u.city && <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>📍 {u.city}</div>}
                                                    </td>
                                                    <td style={{ padding: '12px 16px' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                            <span style={{
                                                                fontWeight: 700,
                                                                padding: '2px 8px',
                                                                borderRadius: '6px',
                                                                backgroundColor: '#FFF7ED',
                                                                color: '#EA580C',
                                                                fontSize: '0.75rem'
                                                            }}>
                                                                🎶 {u.assignedSongCount || 0} Assigned
                                                            </span>
                                                            <span style={{
                                                                fontWeight: 600,
                                                                padding: '2px 8px',
                                                                borderRadius: '6px',
                                                                backgroundColor: '#F0FDF4',
                                                                color: '#16A34A',
                                                                fontSize: '0.75rem'
                                                            }}>
                                                                ✓ {u.completedSongCount || 0} Done
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td style={{ padding: '12px 16px' }}>
                                                        {isAdmin ? (
                                                            <select
                                                                value={(u.role || 'user').toLowerCase()}
                                                                onChange={e => handleRoleChange(u.id, e.target.value)}
                                                                style={{
                                                                    padding: '4px 8px',
                                                                    borderRadius: '6px',
                                                                    border: '1px solid #CBD5E1',
                                                                    fontSize: '0.8rem',
                                                                    fontWeight: 600,
                                                                    backgroundColor: u.role === 'admin' ? '#FEE2E2' : (u.role === 'subadmin' ? '#FEF3C7' : 'white'),
                                                                    color: u.role === 'admin' ? '#B91C1C' : (u.role === 'subadmin' ? '#B45309' : '#334155')
                                                                }}
                                                            >
                                                                <option value="user">User</option>
                                                                <option value="subadmin">Sub Admin (Editor)</option>
                                                                <option value="admin">Admin</option>
                                                            </select>
                                                        ) : (
                                                            <span style={{ fontWeight: 600, textTransform: 'capitalize', color: '#64748B' }}>
                                                                {u.role || 'user'}
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ========================================================= */}
                {/* 4. CATALOG AUDIT TAB */}
                {/* ========================================================= */}
                {activeTab === 'audit' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '1.25rem',
                            borderRadius: '14px',
                            border: '1px solid #E2E8F0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '12px'
                        }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#0F172A' }}>
                                    Vaishnava Catalog Audit
                                </h2>
                                <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                                    Comparing live database against standard Vaishnava Songbook entries ({auditData.length} indexed songs)
                                </span>
                            </div>

                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input
                                    type="text"
                                    placeholder="Search catalog song..."
                                    value={auditSearch}
                                    onChange={e => setAuditSearch(e.target.value)}
                                    style={{
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #CBD5E1',
                                        fontSize: '0.85rem'
                                    }}
                                />
                                <select
                                    value={auditFilter}
                                    onChange={e => setAuditFilter(e.target.value as any)}
                                    style={{
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #CBD5E1',
                                        fontSize: '0.85rem',
                                        backgroundColor: 'white'
                                    }}
                                >
                                    <option value="all">All Entries</option>
                                    <option value="missing">Missing from DB</option>
                                    <option value="completed">Completed in DB</option>
                                    <option value="coming-soon">Coming Soon</option>
                                </select>
                            </div>
                        </div>

                        {/* Audit Table */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '14px',
                            border: '1px solid #E2E8F0',
                            overflow: 'hidden'
                        }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontWeight: 600 }}>
                                        <th style={{ padding: '12px 16px' }}>Catalog Standard Title</th>
                                        <th style={{ padding: '12px 16px' }}>Author</th>
                                        <th style={{ padding: '12px 16px' }}>Status in Live App</th>
                                        <th style={{ padding: '12px 16px', textAlign: 'right' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAudit.map((item, idx) => (
                                        <tr key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                            <td style={{ padding: '12px 16px', fontWeight: 600, color: '#0F172A' }}>
                                                {item.externalName}
                                            </td>
                                            <td style={{ padding: '12px 16px', color: '#64748B' }}>
                                                {item.author}
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                {item.status === 'completed' && (
                                                    <span style={{ padding: '2px 8px', borderRadius: '6px', backgroundColor: '#DCFCE7', color: '#15803D', fontWeight: 700, fontSize: '0.72rem' }}>
                                                        ✓ LIVE IN APP
                                                    </span>
                                                )}
                                                {item.status === 'coming-soon' && (
                                                    <span style={{ padding: '2px 8px', borderRadius: '6px', backgroundColor: '#FEF3C7', color: '#B45309', fontWeight: 700, fontSize: '0.72rem' }}>
                                                        ⏳ COMING SOON
                                                    </span>
                                                )}
                                                {item.status === 'missing' && (
                                                    <span style={{ padding: '2px 8px', borderRadius: '6px', backgroundColor: '#FEE2E2', color: '#DC2626', fontWeight: 700, fontSize: '0.72rem' }}>
                                                        ✕ MISSING
                                                    </span>
                                                )}
                                            </td>
                                            <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                                                {item.status === 'missing' && (
                                                    <button
                                                        onClick={() => {
                                                            setEditingSong({
                                                                id: 'song-' + item.externalName.toLowerCase().replace(/[^a-z0-9]/g, ''),
                                                                title: item.externalName,
                                                                title_english: item.externalName,
                                                                author: item.author,
                                                                category: 'Songs',
                                                                type: 'interactive'
                                                            });
                                                            setIsEditingSong(true);
                                                        }}
                                                        style={{
                                                            padding: '4px 10px',
                                                            backgroundColor: '#FFF7ED',
                                                            color: '#EA580C',
                                                            border: '1px solid #FDBA74',
                                                            borderRadius: '6px',
                                                            cursor: 'pointer',
                                                            fontWeight: 600,
                                                            fontSize: '0.75rem'
                                                        }}
                                                    >
                                                        + Add to Library
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ========================================================= */}
                {/* 5. SYNC & MAINTENANCE TAB */}
                {/* ========================================================= */}
                {activeTab === 'sync' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
                        {/* Auto-Sync Card */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            border: '1px solid #E2E8F0',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#FFF7ED', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <RefreshCw size={20} className={isSyncing ? 'animate-spin' : ''} />
                                </div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>
                                        Cloud-to-Code Full Sync
                                    </h3>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                                        Pulls all verified songs from Supabase and synchronizes them into local code files
                                    </span>
                                </div>
                            </div>

                            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                                This command creates an automatic safety snapshot in <code>backups/</code>, queries Supabase for all edits, and writes the structured song definitions into <code>src/data/songsContent.ts</code>.
                            </p>

                            <button
                                onClick={handleCloudSync}
                                disabled={isSyncing}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '10px 20px',
                                    borderRadius: '10px',
                                    backgroundColor: isSyncing ? '#94A3B8' : '#EA580C',
                                    color: 'white',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '0.88rem',
                                    cursor: isSyncing ? 'not-allowed' : 'pointer',
                                    marginTop: '0.5rem'
                                }}
                            >
                                <Zap size={16} /> {isSyncing ? 'Synchronizing with Cloud...' : 'Trigger Full Sync'}
                            </button>

                            {syncResult && (
                                <div style={{
                                    marginTop: '1rem',
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    backgroundColor: syncResult.success ? '#F0FDF4' : '#FEF2F2',
                                    border: `1px solid ${syncResult.success ? '#BBF7D0' : '#FECACA'}`,
                                    color: syncResult.success ? '#15803D' : '#B91C1C',
                                    fontSize: '0.85rem',
                                    fontWeight: 600
                                }}>
                                    {syncResult.message}
                                </div>
                            )}
                        </div>

                        {/* Database Backup Export */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            border: '1px solid #E2E8F0'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Download size={20} />
                                </div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>
                                        Export JSON Backup
                                    </h3>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                                        Download complete repository song dataset as a JSON file
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={handleExportBackup}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '10px 20px',
                                    borderRadius: '10px',
                                    backgroundColor: '#2563EB',
                                    color: 'white',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '0.88rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <Download size={16} /> Download Backup (.json)
                            </button>
                        </div>

                        {/* VsNectar External Library Scraper */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            border: '1px solid #E2E8F0'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#FDF4FF', color: '#A855F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ExternalLink size={20} />
                                </div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>
                                        VsNectar External Scraper
                                    </h3>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                                        Scrape and ingest songs from the external VsNectar library
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    window.open('https://vsnectar.web.app/home', '_blank');
                                }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '10px 20px',
                                    borderRadius: '10px',
                                    backgroundColor: '#7E22CE',
                                    color: 'white',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '0.88rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <ArrowUpRight size={16} /> Open VsNectar Tool ↗
                            </button>
                        </div>
                    </div>
                )}
            </main>

            {/* Song Editor Modal (When adding or editing a song) */}
            {isEditingSong && (
                <SongEditor
                    song={editingSong}
                    onSave={async () => {
                        setIsEditingSong(false);
                        setEditingSong(undefined);
                        await refreshSongs();
                    }}
                    onCancel={() => {
                        setIsEditingSong(false);
                        setEditingSong(undefined);
                    }}
                />
            )}
        </div>
    );
};
