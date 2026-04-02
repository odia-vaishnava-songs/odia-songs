import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { SideDrawer } from '../components/SideDrawer';
import { CompactAudioBar } from '../components/CompactAudioBar';

export const AppLayout: React.FC = () => {
    const { activeSong, isDetailView } = useAudio();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [assigningSongId, setAssigningSongId] = useState<string | null>(null);

    React.useEffect(() => {
        const handleToggle = () => {
            setIsDrawerOpen(prev => !prev);
            setAssigningSongId(null); // Clear on manual toggle
        };
        const handleAssign = (e: any) => {
            setAssigningSongId(e.detail);
            setIsDrawerOpen(true);
        };

        window.addEventListener('toggle-drawer', handleToggle);
        window.addEventListener('set-assign-song', handleAssign);

        return () => {
            window.removeEventListener('toggle-drawer', handleToggle);
            window.removeEventListener('set-assign-song', handleAssign);
        };
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
                onClose={() => {
                    setIsDrawerOpen(false);
                    setAssigningSongId(null);
                }}
                assigningSongId={assigningSongId}
                onAssigned={() => {
                    // Trigger a global refresh if needed
                    window.location.reload(); 
                }}
            />

            {/* Persistence mini-bar only when NOT in detail view */}
            {activeSong && !isDetailView && (
                <CompactAudioBar />
            )}

            {/* Role Debugger Removed */}
        </div>
    );
};
