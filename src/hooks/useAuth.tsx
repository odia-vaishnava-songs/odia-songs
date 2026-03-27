import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';
import { supabase } from '../supabase/config';

interface AuthContextType {
    user: User | null;
    loginWithPhone: (phone: string) => Promise<{ success: boolean; error?: string }>;
    registerWithPhone: (name: string, phone: string, email?: string, city?: string) => Promise<void>;
    loginWithEmailPassword: (email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    sendMagicLink: (email: string) => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    // Flag set to true during manual login so the SIGNED_IN listener event is skipped
    // (the login function calls syncProfile directly, listener would cause a race condition)
    const isManualLogin = useRef(false);

    useEffect(() => {
        let mounted = true;

        // Safety timeout: stop loading after 5 seconds even if something is slow
        const timeout = setTimeout(() => {
            if (mounted) {
                console.warn('Auth initialization timed out, forcing loading screen to close');
                setLoading(false);
            }
        }, 5000);

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
            console.log('Auth state change event:', _event, '| manualLogin:', isManualLogin.current);
            try {
                if (_event === 'SIGNED_OUT') {
                    if (mounted) setUser(null);
                } else if (_event === 'SIGNED_IN') {
                    if (isManualLogin.current) {
                        // This SIGNED_IN came from our manual login — consume the flag and skip.
                        // syncProfile was already called directly by the login function.
                        isManualLogin.current = false;
                    } else if (session && mounted) {
                        // SIGNED_IN from page refresh / OAuth redirect — handle normally.
                        await syncProfile(session.user);
                    }
                } else if (_event === 'INITIAL_SESSION') {
                    if (session && mounted) {
                        await syncProfile(session.user);
                    } else if (mounted) {
                        setUser(null);
                    }
                } else if (_event === 'TOKEN_REFRESHED') {
                    if (session && mounted) {
                        await syncProfile(session.user);
                    }
                }
            } catch (err) {
                console.error('Auth state change handler failed:', err);
            } finally {
                if (mounted) setLoading(false);
            }
        });

        return () => {
            mounted = false;
            clearTimeout(timeout);
            subscription.unsubscribe();
        };
    }, []);

    const syncProfile = async (supabaseUser: any) => {
        if (!supabaseUser) return;
        console.log('[Auth] Syncing profile for:', supabaseUser.id);

        // Create a timeout promise
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Profile sync timed out after 5s')), 5000)
        );

        try {
            // Race the profile fetch against the timeout
            const profilePromise = supabase
                .from('profiles')
                .select('*')
                .eq('id', supabaseUser.id)
                .single();

            const result: any = await Promise.race([profilePromise, timeoutPromise]);
            const profile = result.data;
            const error = result.error;

            if (error) {
                if (error.code === 'PGRST116') {
                    console.log('[Auth] No profile found in profiles table. Using defaults.');
                } else {
                    console.warn('[Auth] Profile fetch error:', error.code, error.message);
                }
            } else {
                console.log('[Auth] Profile fetched successfully');
            }

            const newUser: User = {
                id: supabaseUser.id,
                name: profile?.name || supabaseUser.user_metadata?.full_name || supabaseUser.phone || supabaseUser.email?.split('@')[0] || 'User',
                email: supabaseUser.email || '',
                role: (profile?.role?.toLowerCase() as any) || 'user',
                userId: supabaseUser.phone || supabaseUser.email || supabaseUser.id
            };

            console.log('[Auth] Logged in as:', newUser.role, newUser.name);
            setUser(newUser);
        } catch (err: any) {
            console.error('[Auth] syncProfile failed or timed out:', err.message);
            // Emergency fallback user state
            setUser({
                id: supabaseUser.id,
                name: supabaseUser.user_metadata?.full_name || supabaseUser.phone || supabaseUser.email?.split('@')[0] || 'User',
                email: supabaseUser.email || '',
                role: 'user',
                userId: supabaseUser.id
            });
        }
    };

    const loginWithPhone = async (phone: string) => {
        const cleanPhone = phone.replace(/\D/g, '');
        const fakeEmail = `${cleanPhone}@odia.app`;
        const staticPassword = 'OdiaSongsUserAuth';

        try {
            console.log('Attempting phone login for:', cleanPhone);
            isManualLogin.current = true;
            const { error: signInError, data: { session } } = await supabase.auth.signInWithPassword({
                email: fakeEmail,
                password: staticPassword
            });

            if (signInError) {
                isManualLogin.current = false; // login failed, no SIGNED_IN will fire
                if (signInError.message.includes('Invalid login credentials') || signInError.message.toLowerCase().includes('not found')) {
                    return { success: false, error: 'User not found. Please sign up first.' };
                }
                throw signInError;
            }

            if (session) {
                await syncProfile(session.user);
                return { success: true };
            }
            return { success: false, error: 'Session failed' };
        } catch (error: any) {
            isManualLogin.current = false; // ensure reset on unexpected error
            console.error('Login error:', error);
            return { success: false, error: error.message };
        }
    };

    const registerWithPhone = async (name: string, phone: string, email?: string, city?: string) => {
        const cleanPhone = phone.replace(/\D/g, '');
        const fakeEmail = `${cleanPhone}@odia.app`;
        const staticPassword = 'OdiaSongsUserAuth';

        // 1. Sign up the user
        const { error: signUpError, data: { user: authUser } } = await supabase.auth.signUp({
            email: fakeEmail,
            password: staticPassword,
            options: {
                data: { phone: cleanPhone, full_name: name }
            }
        });

        if (signUpError) {
            console.error('[Auth] signUpError:', signUpError);
            throw signUpError;
        }

        // 2. Create profile entry manually (since we skip confirmation)
        if (authUser) {
            console.log('User signed up, creating profile...');
            const { error: profileError } = await supabase
                .from('profiles')
                .upsert({
                    id: authUser.id,
                    name: name,
                    email: email || '',
                    city: city || '',
                    role: 'user', // MUST match DB lowercase enum
                    created_at: new Date().toISOString()
                });

            if (profileError) {
                console.warn('Profile creation error (non-fatal):', profileError.message);
            }

            // 3. Immediately sign in to set session
            const { error: loginError, data: { session } } = await supabase.auth.signInWithPassword({
                email: fakeEmail,
                password: staticPassword
            });

            if (loginError) throw loginError;
            if (session) await syncProfile(session.user);
        }
    };

    const loginWithEmailPassword = async (email: string, password: string) => {
        console.log('[Auth] Admin login attempt for:', email);
        try {
            isManualLogin.current = true;
            const { error, data: { session } } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                isManualLogin.current = false; // login failed, no SIGNED_IN will fire
                console.error('[Auth] Login error:', error.message);
                throw error;
            }
            if (session) {
                console.log('[Auth] Session created, syncing...');
                await syncProfile(session.user);
            }
        } catch (err) {
            isManualLogin.current = false; // ensure reset on unexpected error
            throw err;
        }
        // NOTE: isManualLogin is reset inside the SIGNED_IN listener, not here,
        // because finally runs BEFORE the SIGNED_IN event fires.
    };

    const loginWithGoogle = async () => {
        console.log('[Auth] Google login attempt');
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/`
            }
        });
        if (error) {
            console.error('[Auth] Google login error:', error.message);
            throw error;
        }
    };

    const sendMagicLink = async (email: string) => {
        console.log('[Auth] Magic link attempt for:', email);
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${window.location.origin}/`
            }
        });
        if (error) {
            console.error('[Auth] Magic link error:', error.message);
            throw error;
        }
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            loginWithPhone,
            registerWithPhone,
            loginWithEmailPassword,
            loginWithGoogle,
            sendMagicLink,
            logout,
            isAuthenticated: !!user,
            loading
        }}>
            {loading ? (
                <div style={{
                    height: '100vh', display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center',
                    background: '#FDFBF7', color: '#8A5082'
                }}>
                    <div style={{
                        width: '40px', height: '40px', border: '4px solid #fff',
                        borderTop: '4px solid #FF9933', borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }} />
                    <p style={{ marginTop: '1rem', fontWeight: 500, color: '#FF9933' }}>Loading Odia Songs...</p>

                    <div style={{
                        marginTop: '2.5rem',
                        padding: '1.5rem',
                        background: '#fff4e6',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 153, 51, 0.3)',
                        boxShadow: '0 4px 12px rgba(255, 153, 51, 0.1)',
                        maxWidth: '85%',
                        textAlign: 'center',
                        animation: 'pulse 3s ease-in-out infinite'
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            color: '#B35900',
                            fontWeight: 600,
                            lineHeight: '1.6',
                            whiteSpace: 'pre-line'
                        }}>
                            ହରେ କୃଷ୍ଣ ହରେ କୃଷ୍ଣ,<br />କୃଷ୍ଣ କୃଷ୍ଣ ହରେ ହରେ,<br />ହରେ ରାମ ହରେ ରାମ,<br />ରାମ ରାମ ହରେ ହରେ
                        </div>
                    </div>

                    <style>{`
                        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                        @keyframes pulse {
                            0% { transform: scale(1); opacity: 0.9; }
                            50% { transform: scale(1.02); opacity: 1; }
                            100% { transform: scale(1); opacity: 0.9; }
                        }
                    `}</style>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
