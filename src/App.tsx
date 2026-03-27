import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { SongsPage } from './pages/SongsPage';
import { GuidePage } from './pages/GuidePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { LoginPage } from './pages/LoginPage';
import { ManageSongsPage } from './pages/ManageSongsPage';
import { SignupPage } from './pages/SignupPage';
import { MigrateSongsPage } from './pages/MigrateSongsPage';
import { AudioProvider } from './context/AudioContext';
import { AuthProvider, useAuth } from './hooks/useAuth';

// A resilient wrapper to stop "The Bounce"
const ProtectedAdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const [isVerifying, setIsVerifying] = React.useState(true);
  
  const isAdmin = user?.role === 'admin' || user?.role === 'subadmin';

  React.useEffect(() => {
    // Give background sync 2.5 seconds to finish if we aren't sure yet
    let timer: any;
    if (!loading && !isAdmin) {
      timer = setTimeout(() => {
        setIsVerifying(false);
      }, 5000); 
    } else if (isAdmin) {
      setIsVerifying(false);
    }
    return () => clearTimeout(timer);
  }, [loading, isAdmin]);

  if (loading || (isVerifying && !isAdmin)) {
    return (
      <div style={{
        height: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', background: '#FDFBF7'
      }}>
        <div style={{
          width: '30px', height: '30px', border: '3px solid #eee',
          borderTop: '3px solid #FF9933', borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <p style={{ marginTop: '1rem', color: '#FF9933', fontWeight: 600 }}>Verifying Admin Credentials...</p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div style={{
        height: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', background: '#FFF5F5',
        padding: '20px', textAlign: 'center'
      }}>
        <h2 style={{ color: '#C53030' }}>🔒 Admin Access Required</h2>
        <p style={{ margin: '1rem 0', color: '#742A2A' }}>
          Verification timed out or you are not an admin.<br/>
          Logged in as: <b>{user?.email}</b>
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => window.location.reload()}
            style={{ padding: '10px 20px', background: '#FF9933', color: '#fff', borderRadius: '12px', border: 'none', fontWeight: 600, cursor: 'pointer' }}
          >
            🔄 Retry Verification
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            style={{ padding: '10px 20px', background: '#eee', color: '#333', borderRadius: '12px', border: 'none', fontWeight: 600, cursor: 'pointer' }}
          >
            🏠 Back to Home
          </button>
        </div>

        {/* Debug Info for User */}
        <div style={{ marginTop: '2rem', padding: '10px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', fontSize: '12px', color: '#666' }}>
          Debug: {user ? `Role: ${user.role} | Email: ${user.email}` : 'No User Session'}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  const { user, loading } = useAuth();

  // Wait for auth to fully initialize (including profile sync) before deciding where to route.
  if (loading) {
    return null; // AuthProvider shows the devotional loading spinner
  }

  // If not logged in at all, redirect to login/signup
  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* Redirect any other URL directly to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  // If logged in, show the app
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<SongsPage />} />
        <Route path="songs" element={<SongsPage />} />
        <Route path="guide" element={<GuidePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

        {/* Protected Admin Routes with "Zero-Bounce" guard */}
        <Route
          path="manage-songs"
          element={
            <ProtectedAdminRoute>
              <ManageSongsPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="migrate"
          element={
            <ProtectedAdminRoute>
              <MigrateSongsPage />
            </ProtectedAdminRoute>
          }
        />
      </Route>

      {/* If logged in, don't allow visiting guest pages */}
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/signup" element={<Navigate to="/" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <AudioProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AudioProvider>
    </AuthProvider>
  );
}

export default App;
