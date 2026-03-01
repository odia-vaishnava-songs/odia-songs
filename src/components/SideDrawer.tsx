import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    X, Share2, HelpCircle, LogOut,
    CircleUser, Info, Shield, MessageCircle, Heart, Users, Search, ArrowLeft, Database,
    Phone, MapPin
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../supabase/config';
import panchaTattvaImg from '../assets/pancha-tattva.png';
import type { User } from '../types';

interface SideDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

type DrawerView = 'menu' | 'users';

export const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const [view, setView] = useState<DrawerView>('menu');
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Reset view when closed
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setView('menu');
                setSearchQuery('');
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const fetchUsers = async () => {
        setLoading(true);
        console.log('[Users] Fetching all profiles...');
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setUsers(data as User[]);
        } catch (err) {
            console.error('[Users] Error fetching users:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleRoleUpdate = async (userId: string, newRole: string) => {
        console.log(`[Users] Updating role for ${userId} to ${newRole}`);
        try {
            const { error } = await supabase
                .from('profiles')
                .update({ role: newRole.toUpperCase() })
                .eq('id', userId);

            if (error) throw error;

            // Update local state
            setUsers(prev => prev.map(u =>
                u.id === userId ? { ...u, role: newRole.toLowerCase() as any } : u
            ));
        } catch (err) {
            console.error('[Users] Role update failed:', err);
            alert("Failed to update role. Please check connection.");
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Odia Vaishnava Songs',
                    text: 'Explore devotional songs with the Odia Vaishnava Songs App.',
                    url: window.location.origin
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.origin);
            alert('ଲିଙ୍କ୍ କପି ହୋଇଗଲା! (Link copied to clipboard!)');
        }
    };

    const filteredUsers = users.filter(u =>
        u.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.phone?.includes(searchQuery) ||
        u.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* Backdrop */}
            <div
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000,
                    opacity: isOpen ? 1 : 0, visibility: isOpen ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease',
                }}
                onClick={onClose}
            />

            {/* Drawer */}
            <div style={{
                position: 'fixed', top: 0, left: 0, bottom: 0,
                width: '85%', maxWidth: '320px', backgroundColor: 'white', zIndex: 1001,
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.3s ease', boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
                display: 'flex', flexDirection: 'column'
            }}>
                {/* Header */}
                <div style={{
                    padding: '1rem', borderBottom: '1px solid #eee',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    backgroundColor: '#FF9933', color: 'white'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {view === 'users' && (
                            <button onClick={() => setView('menu')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 0, display: 'flex' }}>
                                <ArrowLeft size={24} />
                            </button>
                        )}
                        <div>
                            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>
                                {view === 'menu' ? 'ଓଡ଼ିଆ ବୈଷ୍ଣବ ସଙ୍ଗୀତ' : 'Registered Users'}
                            </h2>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                                    {view === 'menu' ? 'ମେନ୍ୟୁ (Menu)' : 'ପରିଚାଳନା (Management)'}
                                </span>
                                {user?.role && (
                                    <span style={{
                                        fontSize: '0.6rem',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        padding: '1px 4px',
                                        borderRadius: '4px',
                                        textTransform: 'uppercase'
                                    }}>
                                        {user.role}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    {view === 'menu' ? (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ padding: '1rem 1rem 0.5rem 1rem', display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={panchaTattvaImg}
                                    alt="Pancha Tattva"
                                    style={{
                                        width: '80%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>

                            <div style={{ padding: '0 1rem 1rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                <MenuItem icon={<Share2 size={20} />} label="Share App" onClick={handleShare} />
                                <MenuItem
                                    icon={<HelpCircle size={20} />}
                                    label="Help & Install"
                                    onClick={() => { navigate('/guide'); onClose(); }}
                                />

                                <MenuItem icon={<Info size={20} />} label="About" onClick={() => alert("Odia Vaishnava Songs v2.0\nDedicated to Srila Prabhupada")} />
                                <MenuItem icon={<Shield size={20} />} label="Privacy Policy" onClick={() => alert("Privacy Policy:\nWe respect your privacy. All data is stored securely.")} />
                                <MenuItem icon={<MessageCircle size={20} />} label="Feedback / Queries" onClick={() => window.location.href = "mailto:support@odia.app"} />
                                <MenuItem icon={<Heart size={20} />} label="Donate" onClick={() => alert("Donation feature coming soon!")} />

                                {(() => {
                                    const role = user?.role?.toLowerCase();
                                    if (role === 'admin' || role === 'subadmin') {
                                        return (
                                            <>
                                                <div style={{ height: '1px', backgroundColor: '#eee', margin: '0.4rem 0' }} />
                                                {role === 'admin' && (
                                                    <MenuItem
                                                        icon={<Users size={20} />}
                                                        label="Registered Users"
                                                        onClick={() => {
                                                            setView('users');
                                                            fetchUsers();
                                                        }}
                                                        badge="Admin"
                                                    />
                                                )}
                                                <MenuItem
                                                    icon={<Shield size={20} />}
                                                    label="Manage Songs"
                                                    onClick={() => { navigate('/manage-songs'); onClose(); }}
                                                    badge={role === 'admin' ? 'Admin' : 'Editor'}
                                                />
                                                <MenuItem
                                                    icon={<Database size={20} />}
                                                    label="Migrate Songs"
                                                    onClick={() => { navigate('/migrate'); onClose(); }}
                                                />
                                            </>
                                        );
                                    }
                                    return null;
                                })()}

                                <div style={{ height: '1px', backgroundColor: '#eee', margin: '0.4rem 0' }} />

                                {user ? (
                                    <MenuItem
                                        icon={<LogOut size={20} />}
                                        label="Logout"
                                        onClick={() => {
                                            if (window.confirm("ଆପଣ କ’ଣ ଲଗ୍ ଆଉଟ୍ କରିବାକୁ ଚାହାନ୍ତି? (Logout?)")) {
                                                logout();
                                                onClose();
                                            }
                                        }}
                                    />
                                ) : (
                                    <MenuItem
                                        icon={<CircleUser size={20} />}
                                        label="Sign In / Join"
                                        onClick={() => { navigate('/login'); onClose(); }}
                                    />
                                )}
                            </div>
                        </div>
                    ) : (
                        /* USERS LIST VIEW */
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                                <div style={{ position: 'relative' }}>
                                    <Search size={18} color="#999" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                                    <input
                                        type="text"
                                        placeholder="Search users..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        style={{
                                            width: '100%', padding: '0.6rem 0.6rem 0.6rem 2.2rem',
                                            borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.9rem',
                                            outline: 'none', boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                            </div>
                            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                                {loading ? (
                                    <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>Loading users...</p>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                        {filteredUsers.length === 0 ? (
                                            <p style={{ textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>No users found.</p>
                                        ) : (
                                            filteredUsers.map((u) => (
                                                <div key={u.id} style={{
                                                    padding: '1rem', backgroundColor: '#f8f9fa',
                                                    borderRadius: '12px', border: '1px solid #e9ecef',
                                                    display: 'flex', flexDirection: 'column', gap: '0.25rem'
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                                            <div style={{
                                                                width: '32px', height: '32px', borderRadius: '50%',
                                                                backgroundColor: '#E3F2FD', display: 'flex',
                                                                alignItems: 'center', justifyContent: 'center'
                                                            }}>
                                                                <CircleUser size={18} color="#1976D2" />
                                                            </div>
                                                            <span style={{ fontWeight: 600, color: '#333' }}>{u.name}</span>
                                                        </div>
                                                        <select
                                                            value={u.role || 'user'}
                                                            onChange={(e) => handleRoleUpdate(u.id, e.target.value as any)}
                                                            style={{
                                                                padding: '2px 6px',
                                                                fontSize: '0.75rem',
                                                                borderRadius: '4px',
                                                                border: '1px solid #ddd',
                                                                backgroundColor: u.role === 'admin' ? '#FFEBEE' : (u.role === 'subadmin' ? '#E8F5E9' : 'white'),
                                                                color: u.role === 'admin' ? '#D32F2F' : (u.role === 'subadmin' ? '#2E7D32' : '#333'),
                                                                fontWeight: 600,
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <option value="user">User</option>
                                                            <option value="subadmin">Sub Admin</option>
                                                            <option value="admin">Admin</option>
                                                        </select>
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666', fontSize: '0.85rem', marginLeft: '2.5rem' }}>
                                                        <Phone size={12} />
                                                        <span>{u.phone || u.email || 'No contact info'}</span>
                                                    </div>
                                                    {u.city && (
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666', fontSize: '0.85rem', marginLeft: '2.5rem' }}>
                                                            <MapPin size={12} />
                                                            <span>{u.city}</span>
                                                        </div>
                                                    )}

                                                    {/* Stats Summary Row (Placeholder/Styling) */}
                                                    <div style={{
                                                        marginTop: '0.5rem',
                                                        marginLeft: '2.5rem',
                                                        display: 'flex',
                                                        gap: '0.75rem',
                                                        fontSize: '0.75rem',
                                                        padding: '0.4rem 0.6rem',
                                                        backgroundColor: '#FFF8E1',
                                                        borderRadius: '6px',
                                                        border: '1px solid #FFE082',
                                                        color: '#5D4037'
                                                    }}>
                                                        <div title="Rounds" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>📿 <b>0</b></div>
                                                        <div title="Reading Hours" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>📖 <b>0.0h</b></div>
                                                        <div title="Hearing Hours" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>🎧 <b>0.0h</b></div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: '0.75rem', borderTop: '1px solid #eee', textAlign: 'center', color: '#999', fontSize: '0.8rem' }}>
                                Total: {filteredUsers.length}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    onClick={() => {
                        alert(`Current User ID: ${user?.id}\nRole: ${user?.role}\nAuthenticated: ${!!user}`);
                    }}
                    style={{ padding: '0.8rem', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '0.7rem', color: '#999', cursor: 'pointer' }}
                >
                    ଶ୍ରୀଳ ପ୍ରଭୁପାଦଙ୍କ ଚରଣରେ ସମର୍ପିତ
                </div>
            </div>
        </>
    );
};

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    badge?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick, badge }) => (
    <button
        onClick={onClick}
        style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            padding: '0.7rem 0.8rem', width: '100%', border: 'none',
            backgroundColor: 'transparent', textAlign: 'left',
            cursor: 'pointer', borderRadius: '8px', transition: 'background 0.2s',
            color: '#444'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
        <span style={{ color: '#FF9933', display: 'flex' }}>{icon}</span>
        <span style={{ fontSize: '0.9rem', fontWeight: 500, flex: 1 }}>{label}</span>
        {badge && (
            <span style={{
                fontSize: '0.65rem', backgroundColor: '#FF9933', color: 'white',
                padding: '2px 6px', borderRadius: '4px', fontWeight: 600
            }}>
                {badge}
            </span>
        )}
    </button>
);
