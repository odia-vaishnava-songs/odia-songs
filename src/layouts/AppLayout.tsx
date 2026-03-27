import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { useAuth } from '../hooks/useAuth';
import { SideDrawer } from '../components/SideDrawer';
import { CompactAudioBar } from '../components/CompactAudioBar';

export const AppLayout: React.FC = () => {
    const { activeSong, isDetailView } = useAudio();
    const { user } = useAuth();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

            {/* Role Debugger (High Visibility) */}
            {user && (
                <div style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    fontSize: '11px',
                    padding: '4px 10px',
                    color: '#000',
                    background: '#FFEB3B', // Bright Yellow
                    fontWeight: 'bold',
                    zIndex: 99999,
                    pointerEvents: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderTop: '2px solid #000',
                    boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
                }}>
                    <span>ROLE: {user.role.toUpperCase()}</span>
                    <span>ID: {user.id.substring(0,8)}...</span>
                    <span>EMAIL: {user.email}</span>
                </div>
            )}
        </div>
    );
};
