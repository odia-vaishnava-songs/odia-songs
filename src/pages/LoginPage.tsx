import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LoginPage: React.FC = () => {
    const { loginWithGoogle, sendMagicLink } = useAuth();

    const [email, setEmail] = useState('');
    const [magicLinkSent, setMagicLinkSent] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            await loginWithGoogle();
        } catch (err: any) {
            setError(err.message || 'Google login failed.');
            setLoading(false);
        }
    };

    const handleMagicLink = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await sendMagicLink(email);
            setMagicLinkSent(true);
        } catch (err: any) {
            setError(err.message || 'Failed to send magic link.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, #FFF5E6 0%, #FFFFFF 100%)', padding: '1.5rem'
        }}>
            <div style={{
                width: '100%', maxWidth: '400px', background: '#FFFFFF', padding: '2.5rem',
                borderRadius: '24px', boxShadow: '0 20px 40px rgba(255, 153, 51, 0.1)',
                border: '1px solid rgba(255, 153, 51, 0.1)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        width: '70px', height: '70px', margin: '0 auto 1rem', borderRadius: '50%',
                        background: '#FF9933', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '2.2rem',
                        boxShadow: '0 8px 16px rgba(255, 153, 51, 0.2)'
                    }}>🙏</div>
                    <h1 style={{ fontSize: '2rem', color: '#B35900', marginBottom: '0.4rem', fontWeight: 800 }}>Admin Portal</h1>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Secure access for song management</p>
                </div>

                {error && (
                    <div style={{
                        background: '#FFF0F0', color: '#E53E3E', padding: '0.8rem',
                        borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.85rem',
                        textAlign: 'center', fontWeight: 500
                    }}>{error}</div>
                )}

                {magicLinkSent ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                        <h2 style={{ color: '#B35900', marginBottom: '0.5rem' }}>Link Sent!</h2>
                        <p style={{ color: '#666', fontSize: '0.95rem' }}>Check your email <b>{email}</b> for a login link. It might take a minute.</p>
                        <button
                            onClick={() => setMagicLinkSent(false)}
                            style={{ background: 'none', border: 'none', color: '#FF9933', fontWeight: 700, marginTop: '1.5rem', cursor: 'pointer' }}
                        >Try another method</button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Google Login Option */}
                        <button
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                                background: '#fff', border: '1.5px solid #F0F0F0', padding: '12px',
                                borderRadius: '14px', cursor: 'pointer', transition: 'all 0.2s',
                                fontWeight: 600, color: '#4A4A4A'
                            }}
                        >
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="G" />
                            {loading ? 'Connecting...' : 'Continue with Google'}
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0.5rem 0' }}>
                            <div style={{ flex: 1, height: '1px', background: '#F0F0F0' }} />
                            <span style={{ fontSize: '0.8rem', color: '#A0AEC0', fontWeight: 600 }}>OR USE EMAIL</span>
                            <div style={{ flex: 1, height: '1px', background: '#F0F0F0' }} />
                        </div>

                        {/* Magic Link Form */}
                        <form onSubmit={handleMagicLink} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#A0AEC0' }} />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{
                                        width: '100%', padding: '12px 12px 12px 42px', borderRadius: '14px',
                                        border: '1.5px solid #F0F0F0', fontSize: '0.95rem', outline: 'none',
                                        background: '#FAFAFA'
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading || !email}
                                style={{
                                    background: '#FF9933', color: 'white', padding: '12px',
                                    borderRadius: '14px', border: 'none', fontWeight: 700, cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(255, 153, 51, 0.2)'
                                }}
                            >
                                {loading ? 'Sending...' : 'Get Magic Link'}
                            </button>
                        </form>

                        <div style={{ marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid #F5F5F5', paddingTop: '1rem' }}>
                            <Link to="/" style={{ color: '#FF9933', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                                Back to Songs
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                button:hover { transform: translateY(-2px); filter: brightness(1.05); }
                button:active { transform: translateY(0); }
            `}</style>
        </div>
    );
};
