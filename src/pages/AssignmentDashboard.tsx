import React, { useState, useEffect, useMemo } from 'react';
import { useSongs } from '../hooks/useSongs';
import { supabase } from '../supabase/config';
import { ArrowLeft, Users, CheckCircle2, Clock, PlayCircle, BarChart3, TrendingUp, Copy, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../types';

export const AssignmentDashboard: React.FC = () => {
    const { songs, loading: songsLoading } = useSongs();
    const navigate = useNavigate();
    const [editors, setEditors] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEditors = async () => {
            const { data } = await supabase
                .from('profiles')
                .select('*')
                .in('role', ['SUBADMIN', 'subadmin', 'ADMIN', 'admin']);
            if (data) setEditors(data as User[]);
            setLoading(false);
        };
        fetchEditors();
    }, []);

    const stats = useMemo(() => {
        const editorStats: Record<string, { 
            name: string, 
            total: number, 
            completed: number, 
            in_progress: number, 
            not_done: number 
        }> = {};

        // Initialize editors
        editors.forEach(e => {
            const editorName = e.name || e.email || 'Unknown';
            editorStats[e.id] = { name: editorName, total: 0, completed: 0, in_progress: 0, not_done: 0 };
        });

        // Add Unassigned category
        editorStats['unassigned'] = { name: 'Unassigned', total: 0, completed: 0, in_progress: 0, not_done: 0 };

        songs.forEach(s => {
            const editorId = s.assigned_to || 'unassigned';
            if (!editorStats[editorId]) {
                editorStats[editorId] = { name: 'Legacy/Unknown', total: 0, completed: 0, in_progress: 0, not_done: 0 };
            }

            editorStats[editorId].total++;
            if (s.status === 'COMPLETED' || s.verified) editorStats[editorId].completed++;
            else if (s.status === 'IN_PROGRESS') editorStats[editorId].in_progress++;
            else editorStats[editorId].not_done++;
        });

        return Object.entries(editorStats)
            .filter(([_, data]) => data.total > 0)
            .sort((a, b) => b[1].total - a[1].total);
    }, [songs, editors]);

    const overall = useMemo(() => {
        const total = songs.length;
        const completed = songs.filter(s => s.status === 'COMPLETED' || s.verified).length;
        const in_progress = songs.filter(s => s.status === 'IN_PROGRESS').length;
        const not_done = total - completed - in_progress;

        return { total, completed, in_progress, not_done, percent: total > 0 ? Math.round((completed / total) * 100) : 0 };
    }, [songs]);

    const handleCopyAll = () => {
        const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
        let text = `*VAISHNAVA SONGS PROGRESS (${date})\n\n`;
        text += `Dear devotees, please accept my humble pranams \n\n`;
        text += `By the mercy of Radhamadhav and Vaishnavas and srila prabhupad, here is the current progress of our Vaishnava song seva:\n\n`;
        
        stats.forEach(([_, data]) => {
            const percent = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
            text += `👤 ${data.name}\n`;
            text += `✅ Completed: ${data.completed} | ⏳ Remaining: ${data.not_done}\n`;
            text += `📈 Progress: ${percent}%\n\n`;
        });
        
        text += `📚 Overall Library Completion: ${overall.percent}%\n\n`;
        text += `Kindly requesting all matajis/Prabhujis to please continue this valuable seva at your convenience. If there is any difficulty, please feel free to share.\n\n`;
        text += `Let us all try to serve together with sincerity for the pleasure of Guru and Gauranga \n\n`;
        text += `Hare Krishna `;
        
        navigator.clipboard.writeText(text);
        alert('Devotional progress report copied to clipboard! 🙏');
    };

    const handleCopyIndividual = (data: any) => {
        const percent = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
        const text = `🙏 Hare Krishna! Here is your service update:\n\n👤 *${data.name}*\n✅ Completed: ${data.completed}\n⏳ Remaining: ${data.not_done}\n📈 Progress: ${percent}%`;
        navigator.clipboard.writeText(text);
        alert(`Devotional update for ${data.name} copied!`);
    };

    if (loading || songsLoading) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', border: '3px solid #eee', borderTop: '3px solid #8A5082', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#FDFBF7' }}>
            <header style={{ background: '#8A5082', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'sticky', top: 0, zIndex: 10 }}>
                <button onClick={() => navigate('/manage-songs')} style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                    <ArrowLeft size={24} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <BarChart3 size={24} />
                    <h2 style={{ margin: 0 }}>Assignment Analytics</h2>
                </div>
            </header>

            <main style={{ padding: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
                {/* 🎯 OVERALL PROGRESS CARD */}
                <div style={{ 
                    background: 'linear-gradient(135deg, #8A5082, #6F5F90)', 
                    borderRadius: '24px', 
                    padding: '2rem', 
                    color: 'white',
                    marginBottom: '2rem',
                    boxShadow: '0 10px 25px rgba(138, 80, 130, 0.25)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <TrendingUp style={{ position: 'absolute', right: '-20px', bottom: '-20px', width: '200px', height: '200px', opacity: 0.1 }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.9, marginBottom: '0.5rem' }}>Library Progress</div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '3.5rem', fontWeight: 900 }}>{overall.percent}%</span>
                            <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>Done</span>
                        </div>

                        {/* Progress Bar */}
                        <div style={{ height: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: '6px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                            <div style={{ width: `${overall.percent}%`, height: '100%', background: '#4fd1c5', borderRadius: '6px', transition: 'width 1s ease-out' }} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '16px', backdropFilter: 'blur(4px)' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.8, marginBottom: '0.2rem' }}>Proofread</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{overall.completed}</div>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '16px', backdropFilter: 'blur(4px)' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.8, marginBottom: '0.2rem' }}>In Progress</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{overall.in_progress}</div>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '16px', backdropFilter: 'blur(4px)' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.8, marginBottom: '0.2rem' }}>Remaining</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{overall.not_done}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#4A2C40' }}>
                        <Users size={20} />
                        <h3 style={{ margin: 0, fontWeight: 800 }}>Comparison: All Editors Progress</h3>
                    </div>
                    <button 
                        onClick={handleCopyAll}
                        style={{ 
                            background: '#25D366', color: 'white', border: 'none', padding: '0.5rem 1rem', 
                            borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800, 
                            display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(37, 211, 102, 0.2)' 
                        }}
                    >
                        <Share2 size={14} /> Copy for WhatsApp
                    </button>
                </div>

                {/* 📊 GLOBAL COMPARISON CHART (ONE VIEW) */}
                <div style={{ 
                    background: 'white', 
                    borderRadius: '24px', 
                    padding: '2rem', 
                    marginBottom: '2rem',
                    border: '1px solid #eee',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {stats.map(([id, data]) => {
                            const compPercent = (data.completed / data.total) * 100;
                            const progPercent = (data.in_progress / data.total) * 100;
                            const notPercent = (data.not_done / data.total) * 100;

                            return (
                                <div key={id} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ width: '120px', fontSize: '0.9rem', fontWeight: 700, color: '#4A5568', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {data.name}
                                    </div>
                                    <div style={{ flex: 1, position: 'relative' }}>
                                        <div style={{ 
                                            height: '24px', 
                                            background: '#F1F5F9', 
                                            borderRadius: '12px', 
                                            display: 'flex', 
                                            overflow: 'hidden',
                                            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                                        }}>
                                            <div title={`${data.completed} Done`} style={{ width: `${compPercent}%`, background: '#22C55E' }} />
                                            <div title={`${data.in_progress} In Progress`} style={{ width: `${progPercent}%`, background: '#3182CE' }} />
                                            <div title={`${data.not_done} Pending`} style={{ width: `${notPercent}%`, background: '#CBD5E0' }} />
                                        </div>
                                        <div style={{ 
                                            position: 'absolute', 
                                            right: '-50px', 
                                            top: '50%', 
                                            transform: 'translateY(-50%)', 
                                            fontSize: '0.8rem', 
                                            fontWeight: 800, 
                                            color: '#64748b',
                                            width: '40px'
                                        }}>
                                            {data.total}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', color: '#4A2C40' }}>
                    <Users size={20} />
                    <h3 style={{ margin: 0, fontWeight: 800 }}>Performance by Editor</h3>
                </div>

                {/* 📊 EDITOR CARDS WITH CHARTS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
                    {stats.map(([id, data]) => {
                        const compPercent = (data.completed / data.total) * 100;
                        const progPercent = (data.in_progress / data.total) * 100;
                        const notPercent = (data.not_done / data.total) * 100;

                        return (
                            <div key={id} style={{ 
                                background: 'white', 
                                borderRadius: '20px', 
                                padding: '1.5rem', 
                                border: '1px solid #eee',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#2D3748' }}>{data.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#718096' }}>{data.total} Songs Assigned</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        <button 
                                            onClick={() => handleCopyIndividual(data)}
                                            style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', padding: '6px', borderRadius: '8px', cursor: 'pointer', display: 'flex' }}
                                            title="Copy Individual Stats"
                                        >
                                            <Copy size={16} />
                                        </button>
                                        <div style={{ 
                                            background: '#F7FAFC', 
                                            padding: '4px 12px', 
                                            borderRadius: '20px', 
                                            fontSize: '0.8rem', 
                                            fontWeight: 700, 
                                            color: '#4A5568',
                                            border: '1px solid #E2E8F0'
                                        }}>
                                            {Math.round(compPercent)}%
                                        </div>
                                    </div>
                                </div>

                                {/* Stacked Progress Chart */}
                                <div style={{ 
                                    height: '16px', 
                                    background: '#F1F5F9', 
                                    borderRadius: '8px', 
                                    display: 'flex', 
                                    overflow: 'hidden', 
                                    marginBottom: '1rem',
                                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                                }}>
                                    <div 
                                        title={`${data.completed} Completed`}
                                        style={{ width: `${compPercent}%`, background: '#22C55E' }} 
                                    />
                                    <div 
                                        title={`${data.in_progress} In Progress`}
                                        style={{ width: `${progPercent}%`, background: '#3182CE' }} 
                                    />
                                    <div 
                                        title={`${data.not_done} Pending`}
                                        style={{ width: `${notPercent}%`, background: '#CBD5E0' }} 
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: '#166534', fontWeight: 700 }}>
                                        <CheckCircle2 size={12} /> {data.completed}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: '#1E40AF', fontWeight: 700 }}>
                                        <PlayCircle size={12} /> {data.in_progress}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: '#475569', fontWeight: 700 }}>
                                        <Clock size={12} /> {data.not_done}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};
