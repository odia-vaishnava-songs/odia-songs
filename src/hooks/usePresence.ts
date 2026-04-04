import { useEffect, useState, useRef } from 'react';
import { supabase } from '../supabase/config';
import type { User } from '../types';

export interface PresenceUser {
    id: string;
    name: string;
    role: string;
    online_at: string;
}

export const usePresence = (currentUser: User | null) => {
    const [onlineUsers, setOnlineUsers] = useState<PresenceUser[]>([]);
    const channelRef = useRef<any>(null);

    useEffect(() => {
        if (!currentUser) {
            setOnlineUsers([]);
            if (channelRef.current) {
                channelRef.current.unsubscribe();
                channelRef.current = null;
            }
            return;
        }

        // 1. Join a channel specifically for online tracking
        const channel = supabase.channel('online-users', {
            config: {
                presence: {
                    key: currentUser.id,
                },
            },
        });

        // 2. Handle sync events (when anyone joins/leaves)
        channel
            .on('presence', { event: 'sync' }, () => {
                const newState = channel.presenceState();
                
                // Map the nested presence state to a simple array of users
                const users: PresenceUser[] = [];
                Object.values(newState).forEach((presences: any) => {
                    presences.forEach((p: any) => {
                        users.push({
                            id: p.id,
                            name: p.name,
                            role: p.role,
                            online_at: p.online_at
                        });
                    });
                });

                // Deduplicate by ID (in case of multiple tabs)
                const uniqueUsers = Array.from(new Map(users.map(u => [u.id, u])).values());
                console.log(`[Presence] Sync: ${uniqueUsers.length} users online`, uniqueUsers);
                
                // Sort by name
                uniqueUsers.sort((a, b) => a.name.localeCompare(b.name));
                
                setOnlineUsers(uniqueUsers);
            })
            .subscribe(async (status) => {
                console.log('[Presence] Channel Status:', status);
                if (status === 'SUBSCRIBED') {
                    console.log('[Presence] Tracking user:', currentUser.name);
                    // 3. Track the current user's profile
                    await channel.track({
                        id: currentUser.id,
                        name: currentUser.name,
                        role: currentUser.role,
                        online_at: new Date().toISOString(),
                    });
                }
            });

        channelRef.current = channel;

        return () => {
            if (channelRef.current) {
                channelRef.current.unsubscribe();
                channelRef.current = null;
            }
        };
    }, [currentUser?.id]);

    return { onlineUsers };
};
