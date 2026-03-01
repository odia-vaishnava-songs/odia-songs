import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { celebrateBlast } from '../utils/celebration';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, Lock, Sparkles, UserPlus } from 'lucide-react';

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { loginWithPhone, loginWithEmailPassword } = useAuth();

    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const isAdminInput = inputValue.includes('@');

    const handleUnifiedLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isAdminInput) {
                // Admin Login Logic using email/password
                await loginWithEmailPassword(inputValue, password);
                celebrateBlast();
                navigate('/');
            } else {
                // Phone Login Logic
                const cleanPhone = inputValue.replace(/\D/g, '');

                if (cleanPhone.length < 10) {
                    setError("Please enter a valid 10-digit mobile number.");
                    setLoading(false);
                    return;
                }

                const result = await loginWithPhone(cleanPhone);
                if (result.success) {
                    celebrateBlast();
                    navigate('/');
                } else {
                    setError(result.error || "Account not found. Please sign up first.");
                }
            }
        } catch (err: any) {
            console.error('Login Error:', err);
            setError(err.message || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-cream)',
            padding: '1rem'
        }}>
            <div className="card" style={{
                maxWidth: '400px',
                width: '100%',
                borderRadius: '24px',
                padding: '2.5rem',
                border: 'none',
                boxShadow: '0 20px 40px rgba(255, 153, 51, 0.15)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{
                        width: '80px', height: '80px', margin: '0 auto 1.5rem', borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FF9933 0%, #FFB366 100%)',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '2.8rem',
                        boxShadow: '0 8px 16px rgba(255, 153, 51, 0.3)'
                    }}>
                        🙏
                    </div>
                    <h1 style={{ color: 'var(--color-saffron-dark)', margin: 0, fontSize: '2.2rem', fontWeight: 800 }}>Odia Songs</h1>
                    <p style={{ color: '#666', marginTop: '0.5rem', fontSize: '1rem' }}>Divine melodies at your fingertips</p>
                </div>

                {error && (
                    <div style={{
                        background: '#FFF0F0', color: '#E53E3E', padding: '1rem',
                        borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.9rem',
                        textAlign: 'center', fontWeight: 600, border: '1px solid #FFE0E0'
                    }}>{error}</div>
                )}

                <form onSubmit={handleUnifiedLogin}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 700, color: '#444', fontSize: '0.9rem' }}>
                            {isAdminInput ? 'Admin Email' : 'Mobile Number'}
                        </label>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#FF9933' }}>
                                {isAdminInput ? <Mail size={18} /> : <Phone size={18} />}
                            </div>
                            <input
                                type="text"
                                placeholder={isAdminInput ? "email@example.com" : "Enter mobile number"}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '14px 14px 14px 44px',
                                    borderRadius: '14px',
                                    border: '1.5px solid #F0F0F0',
                                    fontSize: '1rem',
                                    transition: 'all 0.2s',
                                    outline: 'none',
                                    background: '#FAFAFA',
                                    fontWeight: 500
                                }}
                            />
                        </div>
                    </div>

                    {isAdminInput && (
                        <div style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
                            <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 700, color: '#444', fontSize: '0.9rem' }}>Admin Password</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#FF9933' }} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '14px 14px 14px 44px',
                                        borderRadius: '14px',
                                        border: '1.5px solid #F0F0F0',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        background: '#FAFAFA',
                                        fontWeight: 500
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading || inputValue.length < 3}
                        className="btn-primary"
                        style={{
                            padding: '1rem',
                            fontSize: '1.1rem',
                            borderRadius: '14px'
                        }}
                    >
                        {loading ? 'Entering...' : (isAdminInput ? 'Login as Admin' : 'Sign In')}
                        {!loading && <Sparkles size={18} style={{ marginLeft: '10px' }} />}
                    </button>

                    {!isAdminInput && (
                        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                            <span style={{ color: '#666', fontSize: '0.95rem' }}>New Devotee? </span>
                            <button
                                type="button"
                                onClick={() => navigate('/signup')}
                                style={{
                                    background: 'none', border: 'none', color: 'var(--color-saffron-dark)',
                                    fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem',
                                    textDecoration: 'none', verticalAlign: 'middle',
                                    display: 'inline-flex', alignItems: 'center', gap: '4px'
                                }}
                            >
                                <UserPlus size={16} />
                                Join Now
                            </button>
                        </div>
                    )}
                </form>
            </div>

            <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--color-saffron-dark)', opacity: 0.8, fontWeight: 600 }}>
                ଓଡ଼ିଆ ଭକ୍ତି ସଙ୍ଗୀତ App © 2026
            </footer>
        </div>
    );
};
