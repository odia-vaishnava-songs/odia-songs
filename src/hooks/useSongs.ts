import { useState, useEffect } from 'react';
import { supabase } from '../supabase/config';
import type { Resource } from '../types';
import { RESOURCES as LOCAL_RESOURCES } from '../data/resources';

export const useSongs = () => {
    const [songs, setSongs] = useState<Resource[]>(LOCAL_RESOURCES);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                // Use aliasing to match camelCase Resource interface
                const { data, error } = await supabase
                    .from('songs')
                    .select('id, title, category, type, description, content, structuredContent:structured_content, audioUrl:audio_url, audioVersions:audio_versions, author, verified, status');

                if (error) throw error;

                if (data) {
                    const supabaseSongs = data as Resource[];
                    // Merge local and supabase songs: Prefer supabase
                    const supabaseIds = new Set(supabaseSongs.map(s => s.id));
                    const combined = [...supabaseSongs];

                    LOCAL_RESOURCES.forEach(local => {
                        if (!supabaseIds.has(local.id)) {
                            combined.push(local);
                        }
                    });

                    setSongs(combined);
                }
            } catch (err: any) {
                console.error("Error fetching songs from Supabase:", err);
                setError("Failed to load songs from database. Using offline copy.");
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();

        // Subscribe to changes
        const channel = supabase
            .channel('songs_changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'songs' }, () => {
                fetchSongs();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    return { songs, loading, error };
};
