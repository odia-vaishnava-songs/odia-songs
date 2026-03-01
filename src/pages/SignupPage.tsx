import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { isValidIndianMobile } from '../utils/validation';
import { celebrateBlast } from '../utils/celebration';
import { User, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export const SignupPage: React.FC = () => {
    const { registerWithPhone } = useAuth();
    const navigate = useNavigate();

    // Form Inputs
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const cleanPhone = phoneNumber.replace(/\D/g, '');
        if (!isValidIndianMobile(cleanPhone)) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }

        setLoading(true);
        // We use the raw clean phone for the backend, but UI shows +91
        try {
            await registerWithPhone(name, cleanPhone, email, city);
            celebrateBlast();
            navigate('/');
        } catch (err: any) {
            console.error(err);
            if (err.message && err.message.toLowerCase().includes("exists")) {
                setError("User already exists. Please login.");
            } else {
                setError("Error creating account. Try again.");
            }
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
            padding: '1.5rem'
        }}>
            <div className="card" style={{
                maxWidth: '420px',
                width: '100%',
                borderRadius: '24px',
                padding: '2.5rem',
                border: 'none',
                boxShadow: '0 20px 40px rgba(255, 153, 51, 0.15)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        width: '70px', height: '70px', margin: '0 auto 1.2rem', borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FF9933 0%, #FFB366 100%)',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '2.2rem',
                        boxShadow: '0 8px 16px rgba(255, 153, 51, 0.3)'
                    }}>
                        🙏
                    </div>
                    <h1 style={{ color: 'var(--color-saffron-dark)', margin: 0, fontSize: '2rem', fontWeight: 800 }}>New Devotee</h1>
                    <p style={{ color: '#666', marginTop: '0.5rem', fontSize: '0.95rem' }}>Join the path of divine melodies</p>
                </div>

                {error && (
                    <div style={{
                        background: '#FFF0F0', color: '#E53E3E', padding: '0.8rem',
                        borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.85rem',
                        textAlign: 'center', fontWeight: 600, border: '1px solid #FFE0E0'
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, color: '#444', fontSize: '0.9rem' }}>Full Name *</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#FF9933' }} />
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{
                                    width: '100%', padding: '12px 12px 12px 42px', borderRadius: '14px',
                                    border: '1.5px solid #F0F0F0', fontSize: '1rem', outline: 'none',
                                    background: '#FAFAFA', fontWeight: 500
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, color: '#444', fontSize: '0.9rem' }}>Mobile Number *</label>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{
                                width: '60px', padding: '12px', borderRadius: '14px',
                                border: '1.5px solid #F0F0F0', background: '#f5f5f5',
                                textAlign: 'center', fontWeight: 700, color: '#666', fontSize: '0.9rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                +91
                            </div>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <Phone size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#FF9933' }} />
                                <input
                                    type="tel"
                                    placeholder="98765 43210"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                    required
                                    style={{
                                        width: '100%', padding: '12px 12px 12px 42px', borderRadius: '14px',
                                        border: '1.5px solid #F0F0F0', fontSize: '1rem', outline: 'none',
                                        background: '#FAFAFA', fontWeight: 500, letterSpacing: '1px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, color: '#444', fontSize: '0.9rem' }}>Email (Optional)</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#FF9933' }} />
                            <input
                                type="email"
                                placeholder="For updates"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%', padding: '12px 12px 12px 42px', borderRadius: '14px',
                                    border: '1.5px solid #F0F0F0', fontSize: '1rem', outline: 'none',
                                    background: '#FAFAFA', fontWeight: 500
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '0.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, color: '#444', fontSize: '0.9rem' }}>City (Optional)</label>
                        <div style={{ position: 'relative' }}>
                            <MapPin size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#FF9933' }} />
                            <input
                                type="text"
                                placeholder="Your city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                style={{
                                    width: '100%', padding: '12px 12px 12px 42px', borderRadius: '14px',
                                    border: '1.5px solid #F0F0F0', fontSize: '1rem', outline: 'none',
                                    background: '#FAFAFA', fontWeight: 500
                                }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !name || phoneNumber.length < 10}
                        className="btn-primary"
                        style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '0.5rem' }}
                    >
                        {loading ? 'Creating Account...' : 'Join Now'}
                        {!loading && <Sparkles size={18} style={{ marginLeft: '10px' }} />}
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 600 }}
                        >
                            Already registered? <span style={{ color: '#FF9933', fontWeight: 700 }}>Log in</span>
                        </button>
                    </div>
                </form>
            </div>

            <footer style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--color-saffron-dark)', opacity: 0.8, fontWeight: 600 }}>
                ଓଡ଼ିଆ ଭକ୍ତି ସଙ୍ଗୀତ App © 2026
            </footer>
        </div>
    );
};
