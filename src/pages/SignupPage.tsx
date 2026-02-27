import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, User, ArrowRight } from 'lucide-react';

export const SignupPage: React.FC = () => {
    const { registerWithPhone } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length < 10) {
            setError('Please enter a valid 10-digit mobile number.');
            return;
        }

        setLoading(true);
        try {
            await registerWithPhone(name, cleanPhone);
            navigate('/');
        } catch (err: any) {
            console.error('Signup Error:', err);
            const msg = err.message || 'Registration failed. Please try again.';
            if (msg.includes('already registered')) {
                setError('This phone number is already registered. Please login.');
            } else if (msg.includes('Email confirmations')) {
                setError('Supabase Email Confirmation is ON. Please turn it OFF in your Dashboard.');
            } else {
                setError(msg);
            }
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
                        justifyContent: 'center', fontSize: '2rem',
                        boxShadow: '0 8px 16px rgba(255, 153, 51, 0.2)'
                    }}>
                        ✨
                    </div>
                    <h1 style={{ fontSize: '1.8rem', color: '#B35900', marginBottom: '0.5rem', fontWeight: 800 }}>New Devotee</h1>
                    <p style={{ color: '#666', fontSize: '1rem' }}>Join the path of divine melodies</p>
                </div>

                {error && (
                    <div style={{
                        background: '#FFF0F0', color: '#E53E3E', padding: '1rem',
                        borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.9rem',
                        textAlign: 'center', fontWeight: 500
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#4A4A4A', marginBottom: '0.5rem' }}>Full Name</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#A0AEC0' }} />
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{
                                    width: '100%', padding: '12px 12px 12px 42px', borderRadius: '14px',
                                    border: '1.5px solid #F0F0F0', fontSize: '1rem', outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#4A4A4A', marginBottom: '0.5rem' }}>Mobile Number</label>
                        <div style={{ position: 'relative' }}>
                            <Phone size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#A0AEC0' }} />
                            <input
                                type="tel"
                                placeholder="10-digit number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                required
                                style={{
                                    width: '100%', padding: '12px 12px 12px 42px', borderRadius: '14px',
                                    border: '1.5px solid #F0F0F0', fontSize: '1rem', outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || phone.length < 10 || !name}
                        style={{
                            background: 'linear-gradient(90deg, #FF9933 0%, #FFB366 100%)',
                            color: 'white', padding: '14px', borderRadius: '14px', border: 'none',
                            fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: '8px', boxShadow: '0 8px 16px rgba(255, 153, 51, 0.25)',
                            transition: 'transform 0.2s', marginTop: '0.5rem'
                        }}
                    >
                        {loading ? 'Creating Account...' : 'Join Now'}
                        {!loading && <ArrowRight size={20} />}
                    </button>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: '#FF9933', fontWeight: 700, textDecoration: 'none' }}>
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
