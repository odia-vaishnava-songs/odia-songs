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
    const lastSyncTime = useRef<number>(0);
    const mountedRef = useRef<boolean>(true);
    const highestRoleRef = useRef<string>('user'); 
    const hasInitializedRef = useRef<boolean>(false);

    // Initial load: restore sticky role from localStorage if possible
    useEffect(() => {
        mountedRef.current = true;
        
        // Safety timeout: stop loading after 8 seconds even if something is slow
        const timeout = setTimeout(() => {
            if (mountedRef.current && loading) {
                console.warn('Auth initialization timed out, forcing loading screen to close');
                setLoading(false);
            }
        }, 8000);

        // Supabase v2: onAuthStateChange with INITIAL_SESSION handles the initial check automatically
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
            console.log('[Auth] State change:', _event, 'Session user:', session?.user?.id);
            
            if (!mountedRef.current) return;

            if (_event === 'SIGNED_OUT' || (_event === 'INITIAL_SESSION' && !session)) {
                setUser(null);
                setLoading(false);
                hasInitializedRef.current = true;
            } else if (session) {
                // OPTIMISTIC IDENTITY: Try to use cached role while waiting for DB sync
                const cachedRole = localStorage.getItem(`odia-songs-role-${session.user.id}`);
                const userEmail = session.user?.email?.toLowerCase().trim();
                const isAdminEmail = userEmail === 'daitariswain7@gmail.com';
                
                if (cachedRole || isAdminEmail) {
                    const initialRole = isAdminEmail ? 'admin' : (cachedRole as any);
                    highestRoleRef.current = initialRole;
                    console.log('[Auth] Optimistic Restore:', isAdminEmail ? 'Admin Email Trust' : 'Cached Role', initialRole);
                    
                    setUser({
                        id: session.user.id,
                        name: session.user.user_metadata?.full_name || session.user.phone || 'Admin',
                        email: session.user.email || '',
                        role: initialRole,
                        userId: session.user.phone || session.user.id
                    });
                    
                    // Stop the "Loading Flicker" for the routes
                    if (!hasInitializedRef.current) {
                        setLoading(false);
                        hasInitializedRef.current = true;
                    }
                }

                // Background sync
                await syncProfile(session.user);
            }
        });

        return () => {
            mountedRef.current = false;
            clearTimeout(timeout);
            subscription.unsubscribe();
        };
    }, []);

    const syncProfile = async (supabaseUser: any, retryCount = 0) => {
        if (!supabaseUser) return;
        
        const syncId = Date.now();
        lastSyncTime.current = syncId;
        
        console.log(`[Auth] Syncing profile (Attempt ${retryCount + 1}) for:`, supabaseUser.id);

        try {
            const profilePromise = supabase
                .from('profiles')
                .select('*')
                .eq('id', supabaseUser.id)
                .single();

            // 7 second timeout for profile fetch specifically
            const fetchTimeout = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Profile fetch timed out')), 7000)
            );

            const result: any = await Promise.race([profilePromise, fetchTimeout]);
            
            // If another sync started while we were waiting, ignore this results
            if (lastSyncTime.current !== syncId) return;

            const profile = result.data;
            const error = result.error;

            // Handle potential race condition where profile is not yet created
            if (error && error.code === 'PGRST116' && retryCount < 2) {
                console.log('[Auth] Profile record not found, retrying in 1s...');
                await new Promise(resolve => setTimeout(resolve, 1000));
                return syncProfile(supabaseUser, retryCount + 1);
            }

            if (error && error.code !== 'PGRST116') {
                console.warn('[Auth] Profile fetch error:', error.code, error.message);
                if (retryCount < 2) {
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    return syncProfile(supabaseUser, retryCount + 1);
                }
            }

            // Normalize the role from the profile (database)
            const dbRole = (profile?.role?.toLowerCase() as any) || 'user';
            
            // STICKY / TRUSTED ROLE LOGIC:
            // High-confidence emails or previous session success
            const userEmail = supabaseUser.email?.toLowerCase().trim();
            const isAdminEmail = userEmail === 'daitariswain7@gmail.com';
            let finalRole = dbRole;

            if (isAdminEmail) {
                console.log('[Auth] Zero-Bounce Trust: Forcing ADMIN role for known email:', userEmail);
                finalRole = 'admin';
            } else if (highestRoleRef.current === 'admin' && dbRole === 'user') {
                console.log('[Auth] Role Stable: Preventing downgrade from ADMIN to user during re-sync.');
                finalRole = 'admin';
            } else if (highestRoleRef.current === 'subadmin' && dbRole === 'user') {
                console.log('[Auth] Role Stable: Preventing downgrade from SUBADMIN to user during re-sync.');
                finalRole = 'subadmin';
            }

            // Persistence Guard: Save to localStorage for next boot
            localStorage.setItem(`odia-songs-role-${supabaseUser.id}`, finalRole);

            // Update the sticky role reference if we reached a higher privilege level
            if (finalRole === 'admin') highestRoleRef.current = 'admin';
            else if (finalRole === 'subadmin' && highestRoleRef.current !== 'admin') highestRoleRef.current = 'subadmin';

            const newUser: User = {
                id: supabaseUser.id,
                name: profile?.name || supabaseUser.user_metadata?.full_name || supabaseUser.phone || supabaseUser.email?.split('@')[0] || 'User',
                email: supabaseUser.email || '',
                role: finalRole,
                userId: supabaseUser.phone || supabaseUser.email || supabaseUser.id
            };

            console.log('[Auth] Sync complete. Result Role:', newUser.role, '(DB Role was:', dbRole, ')');
            
            if (mountedRef.current) {
                setUser(newUser);
                setLoading(false);
            }
        } catch (err: any) {
            console.error('[Auth] syncProfile failed (Critical):', err.message);
            if (lastSyncTime.current !== syncId) return;

            if (retryCount < 2) {
                await new Promise(resolve => setTimeout(resolve, 2000));
                return syncProfile(supabaseUser, retryCount + 1);
            }

            if (mountedRef.current) {
                // If we've already been an admin in this session, use that fallback instead of 'user'
                const fallbackRole = highestRoleRef.current || 'user';
                console.log('[Auth] Sync failed, using fallback role:', fallbackRole);

                setUser({
                    id: supabaseUser.id,
                    name: supabaseUser.user_metadata?.full_name || supabaseUser.phone || 'User',
                    email: supabaseUser.email || '',
                    role: fallbackRole as any,
                    userId: supabaseUser.id
                });
                setLoading(false);
            }
        }
    };

    const loginWithPhone = async (phone: string) => {
        const cleanPhone = phone.replace(/\D/g, '');
        const fakeEmail = `${cleanPhone}@odia.app`;
        const staticPassword = 'OdiaSongsUserAuth';

        try {
            console.log('Attempting phone login for:', cleanPhone);
            const { error: signInError, data: { session } } = await supabase.auth.signInWithPassword({
                email: fakeEmail,
                password: staticPassword
            });

            if (signInError) {
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
                    role: 'USER', // Match DB Uppercase enum
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
        const { error, data: { session } } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error) {
            console.error('[Auth] Login error:', error.message);
            throw error;
        }
        if (session) {
            console.log('[Auth] Session created, syncing...');
            await syncProfile(session.user);
        }
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
        localStorage.clear(); // Clear role cache on logout
        sessionStorage.clear(); // Clear session cache if any
        highestRoleRef.current = 'user'; // Reset sticky role on logout
        hasInitializedRef.current = false; // Allow re-init on next login
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
