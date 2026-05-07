
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ArrowLeft, Search, CheckCircle2, AlertCircle, 
    Clock, Download, BookOpen, Database
} from 'lucide-react';
import { EXTERNAL_CATALOG } from '../data/externalCatalog';
import { AUTHOR_CATALOG } from '../data/authorCatalog';
import { useSongs } from '../hooks/useSongs';
import { useAudio } from '../context/AudioContext';
import { isTitleMatch, normalizeForSearch } from '../utils/matching';

type FilterType = 'all' | 'missing' | 'coming-soon' | 'completed' | 'app-only';

export const CatalogCompare: React.FC = () => {
    const navigate = useNavigate();
    const { theme } = useAudio();
    const { songs: liveSongs, loading } = useSongs();
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<FilterType>('all');

    // Flatten all songs from the local AUTHOR_CATALOG for easier searching
    const catalogSongs = useMemo(() => {
        return AUTHOR_CATALOG.flatMap(author => 
            author.catalog.map(song => ({
                ...song,
                authorName: author.name
            }))
        );
    }, []);

    const comparisonData = useMemo(() => {
        // 1. Start with External Catalog
        const data = EXTERNAL_CATALOG.map(extName => {
            // Find in Live Database
            const liveMatch = liveSongs.find(s => 
                isTitleMatch(extName, s.title_english || s.title, '', s.title_odia)
            );

            // Find in Local Catalog (Coming Soon markers)
            const catalogMatch = catalogSongs.find(s => 
                isTitleMatch(extName, s.title_english, '', s.title_odia)
            );

            let status: 'completed' | 'coming-soon' | 'missing' = 'missing';
            if (liveMatch && liveMatch.status === 'COMPLETED') status = 'completed';
            else if (catalogMatch) status = 'coming-soon';

            return {
                externalName: extName,
                status,
                liveMatch,
                catalogMatch,
                author: liveMatch?.author || catalogMatch?.authorName || 'Unknown'
            };
        });

        // 2. Find App-only songs (Live songs not in External Catalog)
        const appOnly = liveSongs
            .filter(ls => !EXTERNAL_CATALOG.some(extName => 
                isTitleMatch(extName, ls.title_english || ls.title, '', ls.title_odia)
            ))
            .map(ls => ({
                externalName: '-',
                status: 'app-only' as const,
                liveMatch: ls,
                catalogMatch: null,
                author: ls.author || 'Unknown'
            }));

        return [...data, ...appOnly];
    }, [liveSongs, catalogSongs]);

    const filteredData = useMemo(() => {
        let result = comparisonData;

        if (filter === 'missing') result = result.filter(d => d.status === 'missing');
        else if (filter === 'coming-soon') result = result.filter(d => d.status === 'coming-soon');
        else if (filter === 'completed') result = result.filter(d => d.status === 'completed');
        else if (filter === 'app-only') result = result.filter(d => d.status === 'app-only');

        if (searchQuery) {
            const q = normalizeForSearch(searchQuery);
            result = result.filter(d => 
                normalizeForSearch(d.externalName).includes(q) || 
                normalizeForSearch(d.liveMatch?.title_english || '').includes(q) ||
                normalizeForSearch(d.liveMatch?.title_odia || '').includes(q)
            );
        }

        return result;
    }, [comparisonData, filter, searchQuery]);

    const stats = useMemo(() => {
        const total = EXTERNAL_CATALOG.length;
        const completed = comparisonData.filter(d => d.status === 'completed').length;
        const comingSoon = comparisonData.filter(d => d.status === 'coming-soon').length;
        const missing = comparisonData.filter(d => d.status === 'missing').length;
        return { total, completed, comingSoon, missing, percent: Math.round((completed / total) * 100) };
    }, [comparisonData]);

    const exportToCSV = () => {
        const headers = ["External Name", "Status", "App Song (English)", "App Song (Odia)", "Author"];
        const rows = comparisonData.map(d => [
            d.externalName,
            d.status,
            d.liveMatch?.title_english || d.catalogMatch?.title_english || '-',
            d.liveMatch?.title_odia || d.catalogMatch?.title_odia || '-',
            d.author
        ]);
        
        const csvContent = "data:text/csv;charset=utf-8," 
            + [headers, ...rows].map(e => e.join(",")).join("\n");
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `catalog_audit_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#f8fafc',
            paddingBottom: '2rem'
        }}>
            {/* Header */}
            <div style={{ 
                background: theme.gradient, 
                color: 'white', 
                padding: '1.5rem 1rem',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button 
                        onClick={() => navigate(-1)}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>Catalog Audit & Comparison</h1>
                        <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9 }}>Comparing App vs. vsnectar.web.app (263 Songs)</p>
                    </div>
                    <button 
                        onClick={exportToCSV}
                        style={{ 
                            background: 'rgba(255,255,255,0.2)', 
                            border: 'none', 
                            color: 'white', 
                            padding: '8px 12px', 
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}
                    >
                        <Download size={16} /> Export
                    </button>
                </div>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem' }}>
                {/* Stats Grid */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                    gap: '1rem', 
                    marginBottom: '1.5rem' 
                }}>
                    <StatCard label="Target Songs" value={stats.total} icon={<BookOpen size={20} />} color="#6366f1" />
                    <StatCard label="Completed" value={stats.completed} icon={<CheckCircle2 size={20} />} color="#22c55e" />
                    <StatCard label="Coming Soon" value={stats.comingSoon} icon={<Clock size={20} />} color="#f59e0b" />
                    <StatCard label="Missing Content" value={stats.missing} icon={<AlertCircle size={20} />} color="#ef4444" />
                    <div style={{ 
                        backgroundColor: 'white', 
                        padding: '1rem', 
                        borderRadius: '16px', 
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 900, color: theme.color }}>{stats.percent}%</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Completion</div>
                    </div>
                </div>

                {/* Controls */}
                <div style={{ 
                    backgroundColor: 'white', 
                    padding: '1rem', 
                    borderRadius: '16px', 
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    alignItems: 'center'
                }}>
                    <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                        <input 
                            type="text" 
                            placeholder="Search song titles..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ 
                                width: '100%', 
                                padding: '10px 12px 10px 40px', 
                                borderRadius: '10px', 
                                border: '1.2px solid #e2e8f0',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                        />
                    </div>
                    
                    <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
                        <FilterButton active={filter === 'all'} label="All" onClick={() => setFilter('all')} />
                        <FilterButton active={filter === 'missing'} label="Missing" color="#ef4444" onClick={() => setFilter('missing')} />
                        <FilterButton active={filter === 'coming-soon'} label="Coming Soon" color="#f59e0b" onClick={() => setFilter('coming-soon')} />
                        <FilterButton active={filter === 'completed'} label="Completed" color="#22c55e" onClick={() => setFilter('completed')} />
                        <FilterButton active={filter === 'app-only'} label="App Only" color="#6366f1" onClick={() => setFilter('app-only')} />
                    </div>
                </div>

                {/* Table */}
                <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '16px', 
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    overflow: 'hidden'
                }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ backgroundColor: '#f1f5f9' }}>
                            <tr>
                                <th style={thStyle}>External Title</th>
                                <th style={thStyle}>App Status</th>
                                <th style={thStyle}>App Matching Song</th>
                                <th style={thStyle}>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>Loading database...</td></tr>
                            ) : filteredData.length === 0 ? (
                                <tr><td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>No matches found.</td></tr>
                            ) : filteredData.map((item, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={tdStyle}>
                                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.externalName}</div>
                                    </td>
                                    <td style={tdStyle}>
                                        <StatusBadge status={item.status} />
                                    </td>
                                    <td style={tdStyle}>
                                        {item.liveMatch ? (
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.liveMatch.title_english}</span>
                                                <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-odia-sans)' }}>{item.liveMatch.title_odia}</span>
                                            </div>
                                        ) : item.catalogMatch ? (
                                            <div style={{ display: 'flex', flexDirection: 'column', opacity: 0.6 }}>
                                                <span style={{ fontSize: '0.85rem' }}>{item.catalogMatch.title_english}</span>
                                                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-odia-sans)' }}>{item.catalogMatch.title_odia}</span>
                                            </div>
                                        ) : (
                                            <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>None</span>
                                        )}
                                    </td>
                                    <td style={tdStyle}>
                                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.author}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const thStyle: React.CSSProperties = {
    padding: '12px 16px',
    fontSize: '0.75rem',
    fontWeight: 800,
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
};

const tdStyle: React.CSSProperties = {
    padding: '14px 16px',
    verticalAlign: 'middle'
};

const StatCard: React.FC<{ label: string, value: number, icon: React.ReactNode, color: string }> = ({ label, value, icon, color }) => (
    <div style={{ 
        backgroundColor: 'white', 
        padding: '1rem', 
        borderRadius: '16px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    }}>
        <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '10px', 
            backgroundColor: `${color}15`, 
            color: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {icon}
        </div>
        <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e293b' }}>{value}</div>
            <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>{label}</div>
        </div>
    </div>
);

const FilterButton: React.FC<{ active: boolean, label: string, color?: string, onClick: () => void }> = ({ active, label, color = '#64748b', onClick }) => (
    <button 
        onClick={onClick}
        style={{ 
            padding: '6px 12px', 
            borderRadius: '8px', 
            border: `1.5px solid ${active ? color : '#e2e8f0'}`,
            backgroundColor: active ? `${color}10` : 'transparent',
            color: active ? color : '#64748b',
            fontSize: '0.75rem',
            fontWeight: 800,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease'
        }}
    >
        {label}
    </button>
);

const StatusBadge: React.FC<{ status: 'completed' | 'coming-soon' | 'missing' | 'app-only' }> = ({ status }) => {
    const config = {
        'completed': { label: 'Completed', color: '#22c55e', icon: <CheckCircle2 size={12} /> },
        'coming-soon': { label: 'Coming Soon', color: '#f59e0b', icon: <Clock size={12} /> },
        'missing': { label: 'Missing', color: '#ef4444', icon: <AlertCircle size={12} /> },
        'app-only': { label: 'App Only', color: '#6366f1', icon: <Database size={12} /> }
    };

    const { label, color, icon } = config[status];

    return (
        <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 8px',
            borderRadius: '6px',
            backgroundColor: `${color}15`,
            color: color,
            fontSize: '0.7rem',
            fontWeight: 800,
            textTransform: 'uppercase'
        }}>
            {icon}
            {label}
        </div>
    );
};
