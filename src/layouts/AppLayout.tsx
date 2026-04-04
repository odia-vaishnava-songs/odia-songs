import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { useAuth } from '../hooks/useAuth';
import { usePresence } from '../hooks/usePresence';
import { SideDrawer } from '../components/SideDrawer';
import { CompactAudioBar } from '../components/CompactAudioBar';

export const AppLayout: React.FC = () => {
    const { activeSong, isDetailView } = useAudio();
    const { user } = useAuth();
    const { onlineUsers } = usePresence(user);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [assigningSongIds, setAssigningSongIds] = useState<string[] | null>(null);

    React.useEffect(() => {
        const handleToggle = () => {
            setIsDrawerOpen(prev => !prev);
            setAssigningSongIds(null); // Clear on manual toggle
        };
        const handleAssign = (e: any) => {
            const detail = e.detail;
            setAssigningSongIds(Array.isArray(detail) ? detail : [detail]);
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
                    setAssigningSongIds(null);
                }}
                assigningSongIds={assigningSongIds}
                onlineUsers={onlineUsers}
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
