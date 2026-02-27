import React, { useState } from 'react';
import { supabase } from '../supabase/config';
import { RESOURCES } from '../data/resources';
import { ArrowLeft, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const MigrateSongsPage: React.FC = () => {
    const { user } = useAuth();
    const [status, setStatus] = useState<'idle' | 'migrating' | 'success' | 'error'>('idle');
    const [progress, setProgress] = useState({ current: 0, total: RESOURCES.length });
    const [logs, setLogs] = useState<string[]>([]);
    const navigate = useNavigate();

    const addLog = (msg: string) => setLogs(prev => [...prev.slice(-10), msg]);

    const role = user?.role?.toLowerCase();
    if (role !== 'admin' && role !== 'subadmin') {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: '#ff4444' }}>Access Denied</h2>
                <p>Only administrators can perform data migration.</p>
                <button
                    onClick={() => navigate('/')}
                    style={{ padding: '0.8rem 1.5rem', border: '1px solid #ddd', borderRadius: '8px', background: 'none', cursor: 'pointer' }}
                >
                    Back to Songs
                </button>
            </div>
        );
    }

    const handleMigration = async () => {
        if (!window.confirm(`Start migrating ${RESOURCES.length} songs to Supabase?`)) return;

        setStatus('migrating');
        let count = 0;

        for (const song of RESOURCES) {
            try {
                const { error } = await supabase
                    .from('songs')
                    .upsert({
                        id: song.id,
                        title: song.title,
                        category: song.category,
                        type: song.type,
                        description: song.description,
                        content: song.content,
                        structured_content: song.structuredContent,
                        audio_url: song.audioUrl,
                        audio_versions: song.audioVersions,
                        author: song.author,
                        verified: song.verified || false,
                        published: true
                    }, { onConflict: 'id' });

                if (error) throw error;
                count++;
                setProgress({ current: count, total: RESOURCES.length });
                addLog(`✅ Migrated: ${song.title}`);
            } catch (err: any) {
                console.error(`Failed to migrate ${song.title}:`, err);
                addLog(`❌ Failed: ${song.title} (${err.message})`);
            }
        }

        setStatus('success');
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <button
                onClick={() => navigate('/')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: '#666', cursor: 'pointer', marginBottom: '1.5rem' }}
            >
                <ArrowLeft size={20} /> Back to App
            </button>

            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ backgroundColor: '#FFF5E6', padding: '0.8rem', borderRadius: '12px' }}>
                        <Database color="#FF9933" size={28} />
                    </div>
                    <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Data Migration</h1>
                </div>

                <p style={{ color: '#666', lineHeight: 1.5 }}>
                    This will push local songs from <code>resources.ts</code> to Supabase.
                    <br />
                    <span style={{ fontSize: '0.9rem', color: '#FF9933' }}>
                        Detected {RESOURCES?.length || 0} songs in local data.
                    </span>
                </p>

                {status === 'idle' && (
                    <>
                        {(!RESOURCES || RESOURCES.length === 0) && (
                            <div style={{ color: '#ff4444', padding: '1rem', backgroundColor: '#fff5f5', borderRadius: '8px', marginBottom: '1rem' }}>
                                ⚠️ Error: No local songs found in <code>resources.ts</code>.
                                Please check if the file is empty or has export issues.
                            </div>
                        )}
                        <button
                            onClick={handleMigration}
                            disabled={!RESOURCES || RESOURCES.length === 0}
                            style={{
                                width: '100%', padding: '1rem', backgroundColor: RESOURCES?.length > 0 ? '#FF9933' : '#ccc', color: 'white',
                                border: 'none', borderRadius: '12px', fontWeight: 600, fontSize: '1rem',
                                cursor: 'pointer', marginTop: '1rem'
                            }}
                        >
                            Start Migration
                        </button>
                    </>
                )}

                {(status === 'migrating' || status === 'success') && (
                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                            <span>{status === 'success' ? 'Migration Result' : 'Progress'}</span>
                            <span>{progress.current} / {progress.total}</span>
                        </div>
                        <div style={{ height: '8px', backgroundColor: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{
                                height: '100%', backgroundColor: status === 'success' ? '#2ecc71' : '#FF9933',
                                width: progress.total > 0 ? `${(progress.current / progress.total) * 100}%` : '0%',
                                transition: 'width 0.3s ease'
                            }} />
                        </div>

                        {status === 'success' && progress.current === 0 && (
                            <div style={{ color: '#ff4444', marginTop: '1rem', fontWeight: 600 }}>
                                ❌ Error: 0 songs were processed. The source list might be empty.
                            </div>
                        )}

                        <div style={{ marginTop: '1.5rem', backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '8px', fontSize: '0.8rem', maxHeight: '200px', overflowY: 'auto' }}>
                            <div style={{ fontWeight: 600, marginBottom: '0.5rem', borderBottom: '1px solid #ddd' }}>Process Logs:</div>
                            {logs.length === 0 ? <div>No logs yet. Waiting for start...</div> : logs.map((log, i) => <div key={i}>{log}</div>)}
                        </div>

                        {status === 'success' && (
                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <button
                                    onClick={() => navigate('/')}
                                    style={{ padding: '0.8rem 1.5rem', border: '1px solid #ddd', borderRadius: '8px', background: 'none', cursor: 'pointer' }}
                                >
                                    Back to Songs List
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
