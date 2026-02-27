import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
    return (
        <div style={{ padding: '1rem', paddingBottom: '4rem', backgroundColor: '#fff', minHeight: '100vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <ShieldCheck size={48} color="var(--color-saffron)" />
                <h1 style={{ color: 'var(--color-text-main)', marginTop: '0.5rem' }}>Privacy Policy</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>ଗୋପନୀୟତା ନୀତି</p>
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
    );
};
