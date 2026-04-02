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
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Database Timeout')), 3000)
                );

                // Try with assigned_to first
                const fetchPromise = supabase
                    .from('songs')
                    .select('id, title, title_odia, title_english, tags, views, original_lang:original_lang, display_order, category, type, description, content, structuredContent:structured_content, audioUrl:audio_url, audioVersions:audio_versions, author, verified, status, assigned_to')
                    .order('display_order', { ascending: true });

                const result: any = await Promise.race([fetchPromise, timeoutPromise]);
                const { data, error: sbError } = result;

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
                console.error("[useSongs] Recovery Triggered:", err.message);
                
                // Show a helpful notice to the user
                setError("Slow connection detected. Showing saved songs for now.");
                
                if (!songs || songs.length === 0 || songs === LOCAL_RESOURCES) {
                    processData(LOCAL_RESOURCES); // Final fallback to guaranteed data
                }
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
