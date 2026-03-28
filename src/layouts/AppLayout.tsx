import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { SideDrawer } from '../components/SideDrawer';
import { CompactAudioBar } from '../components/CompactAudioBar';

export const AppLayout: React.FC = () => {
    const { activeSong, isDetailView } = useAudio();
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

            {/* Role Debugger Removed */}
        </div>
    );
};
