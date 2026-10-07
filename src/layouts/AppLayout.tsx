import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { useAuth } from '../hooks/useAuth';
import { usePresence } from '../hooks/usePresence';
import { SideDrawer } from '../components/SideDrawer';
import { CompactAudioBar } from '../components/CompactAudioBar';
import { initMobileBackHandler, setExitToastCallback, pushBackHandler, popBackHandler } from '../utils/backHandler';

export const AppLayout: React.FC = () => {
    const { activeSong, isDetailView } = useAudio();
    const { user } = useAuth();
    const { onlineUsers } = usePresence(user);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [assigningSongIds, setAssigningSongIds] = useState<string[] | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    // Initialize global mobile back button listener & exit toast
    useEffect(() => {
        const unbind = initMobileBackHandler();
        setExitToastCallback((msg) => {
            setToastMessage(msg);
            setTimeout(() => setToastMessage(null), 2000);
        });
        return () => {
            unbind();
            setExitToastCallback(null);
        };
    }, []);

    useEffect(() => {
        const handleToggle = () => {
            setIsDrawerOpen(prev => {
                const nextState = !prev;
                if (nextState) {
                    pushBackHandler('side-drawer', () => {
                        setIsDrawerOpen(false);
                        setAssigningSongIds(null);
                    });
                } else {
                    popBackHandler('side-drawer');
                }
                return nextState;
            });
            setAssigningSongIds(null); // Clear on manual toggle
        };

        const handleAssign = (e: any) => {
            const detail = e.detail;
            setAssigningSongIds(Array.isArray(detail) ? detail : [detail]);
            setIsDrawerOpen(true);
            pushBackHandler('side-drawer', () => {
                setIsDrawerOpen(false);
                setAssigningSongIds(null);
            });
        };

        window.addEventListener('toggle-drawer', handleToggle);
        window.addEventListener('set-assign-song', handleAssign);

        return () => {
            window.removeEventListener('toggle-drawer', handleToggle);
            window.removeEventListener('set-assign-song', handleAssign);
        };
    }, []);

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
        setAssigningSongIds(null);
        popBackHandler('side-drawer');
    };

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
                onClose={handleCloseDrawer}
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

            {/* Mobile Double-Back Exit Toast */}
            {toastMessage && (
                <div style={{
                    position: 'fixed',
                    bottom: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(26, 26, 26, 0.94)',
                    color: '#fff',
                    padding: '10px 22px',
                    borderRadius: '24px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    zIndex: 99999,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backdropFilter: 'blur(10px)',
                    animation: 'fadeInUp 0.2s ease-out',
                    textAlign: 'center',
                    maxWidth: '92%'
                }}>
                    <span>🙏 {toastMessage}</span>
                </div>
            )}
        </div>
    );
};
