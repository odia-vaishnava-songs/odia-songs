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
                // Try with assigned_to first
                const { data, error: sbError } = await supabase
                    .from('songs')
                    .select('id, title, title_odia, title_english, tags, views, original_lang:original_lang, display_order, category, type, description, content, structuredContent:structured_content, audioUrl:audio_url, audioVersions:audio_versions, author, verified, status, assigned_to')
                    .order('display_order', { ascending: true });

                if (sbError) {
                    console.warn("Retrying without assigned_to column...");
                    // Fallback to query without assigned_to
                    const { data: fallbackData, error: fallbackError } = await supabase
                        .from('songs')
                        .select('id, title, title_odia, title_english, tags, views, original_lang:original_lang, display_order, category, type, description, content, structuredContent:structured_content, audioUrl:audio_url, audioVersions:audio_versions, author, verified, status')
                        .order('display_order', { ascending: true });
                    
                    if (fallbackError) throw fallbackError;
                    processData(fallbackData);
                } else if (data) {
                    processData(data);
                }
            } catch (err: any) {
                console.error("Error fetching songs from Supabase:", err);
                setError(err.message || "Failed to load database. Using offline copy.");
                setLoading(false);
            }
        };

        const processData = (supabaseSongs: any[]) => {
            // Merge local and supabase songs: Prefer supabase
            const supabaseIds = new Set(supabaseSongs.map(s => s.id));
            const combined = [...supabaseSongs];

            LOCAL_RESOURCES.forEach(local => {
                if (!supabaseIds.has(local.id)) {
                    combined.push(local);
                }
            });

            setSongs(combined as Resource[]);
            setLoading(false);
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
