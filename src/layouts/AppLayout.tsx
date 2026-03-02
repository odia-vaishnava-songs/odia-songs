import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CompactAudioBar } from '../components/CompactAudioBar';
import { SideDrawer } from '../components/SideDrawer';
import { useAudio } from '../context/AudioContext';
import { Menu } from 'lucide-react';

export const AppLayout: React.FC = () => {
    const { activeSong, isDetailView } = useAudio();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation();

    const isSongsPage = location.pathname === '/';

    React.useEffect(() => {
        const handleToggle = () => setIsDrawerOpen(prev => !prev);
        window.addEventListener('toggle-drawer', handleToggle);
        return () => window.removeEventListener('toggle-drawer', handleToggle);
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f8f9fa',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Unified App Header - Hidden on Songs Page to avoid redundancy */}
            {!isDetailView && !isSongsPage && (
                <header style={{
                    backgroundColor: 'var(--color-saffron)',
                    color: 'white',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100
                }}>
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Menu size={24} />
                    </button>
                    <h1 style={{ margin: 0, fontSize: '1.2rem', color: 'white', fontWeight: 600 }}>
                        Odia Vaishnava Songs
                    </h1>
                    <div style={{ width: 24 }} /> {/* Spacer */}
                </header>
            )}

            <main style={{ flex: 1, position: 'relative' }}>
                <Outlet />
            </main>

            <SideDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />

            {/* Persistence mini-bar only when NOT in detail view */}
            {activeSong && !isDetailView && (
                <CompactAudioBar />
            )}
        </div>
    );
};
