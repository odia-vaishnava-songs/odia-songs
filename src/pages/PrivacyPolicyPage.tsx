import React from 'react';
import { ShieldCheck, Menu } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <header style={{
                backgroundColor: 'var(--color-saffron)',
                color: 'white',
                padding: '0 0.75rem',
                height: '56px',
                minHeight: '56px',
                maxHeight: '56px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-drawer'))}
                    aria-label="ମୁଖ୍ୟ ମେନୁ (Menu)"
                    style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
                >
                    <Menu size={22} />
                </button>
                <h1 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600 }}>Privacy Policy</h1>
            </header>

            <div style={{ padding: '1rem', paddingBottom: '4rem', flex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <ShieldCheck size={48} color="var(--color-saffron)" />
                    <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>ଗୋପନୀୟତା ନୀତି</p>
                </div>

                <section style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}>
                    <h2 style={{ color: 'var(--color-saffron-dark)', borderBottom: '2px solid #fef3c7', paddingBottom: '0.5rem', fontSize: '1.2rem' }}>
                        Data Usage
                    </h2>
                    <p style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
                        <strong>GVA Songs</strong> is a content-focused app. We do not collect personal data or track your location. Your theme preferences and recent songs are stored only on your device.
                    </p>
                </section>

                <footer style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                    Hare Krishna! 🙏
                </footer>
            </div>
        </div>
    );
};
