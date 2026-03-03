import React from 'react';
import { HelpCircle, Smartphone, Headphones, Info, Menu } from 'lucide-react';

export const GuidePage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <header style={{
                backgroundColor: 'var(--color-saffron)',
                color: 'white',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-drawer'))}
                    style={{ background: 'none', border: 'none', color: 'white', padding: '4px', cursor: 'pointer' }}
                >
                    <Menu size={24} />
                </button>
                <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>ମାର୍ଗଦର୍ଶିକା (Guide)</h1>
            </header>

            <div style={{ padding: '1rem', paddingBottom: '4rem', flex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <HelpCircle size={48} color="var(--color-saffron)" />
                    <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>ସାହାଯ୍ୟ ଏବଂ ସଂସ୍ଥାପନ (Installation) ପାଇଁ ସୂଚନା</p>
                </div>

                {/* Installation Section */}
                <section style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: '2rem', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-saffron-dark)', borderBottom: '2px solid #fef3c7', paddingBottom: '0.5rem' }}>
                        <Smartphone size={24} /> କିପରି ସଂସ୍ଥାପନ (Install) କରିବେ
                    </h2>
                    <div style={{ marginTop: '1rem' }}>
                        <h3 style={{ color: '#15803d', fontSize: '1rem' }}>Android (ଏଣ୍ଡ୍ରଏଡ୍)</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>(⋮) କୁ ଟ୍ୟାପ୍ କରନ୍ତୁ {"->"} "Install app"</p>
                        <h3 style={{ color: '#1d4ed8', fontSize: '1rem', marginTop: '1rem' }}>iPhone (ଆଇଫୋନ୍)</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Share କୁ ଟ୍ୟାପ୍ କରନ୍ତୁ {"->"} "Add to Home Screen"</p>
                    </div>
                </section>

                <section style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-saffron-dark)', borderBottom: '2px solid #fef3c7', paddingBottom: '0.5rem' }}>
                        <Info size={24} /> ବ୍ୟବହାର ବିଧି (Usage)
                    </h2>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ backgroundColor: '#fef3c7', padding: '10px', borderRadius: '50%' }}>
                                <Headphones size={20} color="var(--color-saffron-dark)" />
                            </div>
                            <div>
                                <h4 style={{ margin: 0 }}>ଉଚ୍ଚମାନର ଭଜନ (High Quality Bhajans)</h4>
                                <p style={{ margin: '0.2rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>ଆପଣଙ୍କ ପସନ୍ଦର ଭଜନଗୁଡିକ ସମ୍ପୂର୍ଣ୍ଣ ସାରାଂଶ, ଅନୁବାଦ ଏବଂ ଶବ୍ଦାର୍ଥ ସହିତ ଶୁଣନ୍ତୁ |</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                    ଶ୍ରୀଳ ପ୍ରଭୁପାଦଙ୍କର ଜୟ ହେଉ 🙌 (All Glories to Srila Prabhupada)
                </footer>
            </div>
        </div>
    );
};
