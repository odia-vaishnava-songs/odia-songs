import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { AudioProvider } from './context/AudioContext';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { Spinner } from './components/Spinner';

// Code-split pages so initial page load only downloads necessary code
const SongsPage = React.lazy(() => import('./pages/SongsPage').then(m => ({ default: m.SongsPage })));
const GuidePage = React.lazy(() => import('./pages/GuidePage').then(m => ({ default: m.GuidePage })));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const LoginPage = React.lazy(() => import('./pages/LoginPage').then(m => ({ default: m.LoginPage })));
const SignupPage = React.lazy(() => import('./pages/SignupPage').then(m => ({ default: m.SignupPage })));
const ManageSongsPage = React.lazy(() => import('./pages/ManageSongsPage').then(m => ({ default: m.ManageSongsPage })));
const MigrateSongsPage = React.lazy(() => import('./pages/MigrateSongsPage').then(m => ({ default: m.MigrateSongsPage })));
const AssignmentDashboard = React.lazy(() => import('./pages/AssignmentDashboard').then(m => ({ default: m.AssignmentDashboard })));
const CatalogCompare = React.lazy(() => import('./pages/CatalogCompare').then(m => ({ default: m.CatalogCompare })));
const AdminPortalPage = React.lazy(() => import('./pages/AdminPortalPage').then(m => ({ default: m.AdminPortalPage })));

// A resilient wrapper to stop "The Bounce"
const ProtectedAdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  const stickyRole = (typeof window !== 'undefined' ? localStorage.getItem('sticky_role') : null) || '';
  const effectiveRole = (user?.role || stickyRole).toLowerCase();
  const isAdmin = effectiveRole === 'admin' || effectiveRole === 'subadmin';
  const [isVerifying, setIsVerifying] = React.useState(!isAdmin);

  React.useEffect(() => {
    if (isAdmin) {
      setIsVerifying(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsVerifying(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [loading, isAdmin]);

  if ((loading || isVerifying) && !isAdmin) {
    return (
      <div style={{
        height: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', background: '#FDFBF7'
      }}>
        <Spinner size={36} color="#FF9933" />
        <p style={{ marginTop: '1rem', color: '#FF9933', fontWeight: 600 }}>Loading Admin Portal...</p>
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
  const location = useLocation();

  // Wait for auth to fully initialize (including profile sync) before deciding where to route.
  if (loading) {
    return null; // AuthProvider shows the devotional loading spinner
  }

  // If not logged in at all, redirect to login/signup while preserving destination
  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* Redirect any other URL directly to login with original location state preserved */}
        <Route path="*" element={<Navigate to="/login" state={{ from: location }} replace />} />
      </Routes>
    );
  }

  // Restore destination if user was redirected from login
  const from = (location.state as any)?.from?.pathname || '';
  const redirectTarget = from && from !== '/login' && from !== '/signup' ? from : '/';

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
          path="admin"
          element={
            <ProtectedAdminRoute>
              <AdminPortalPage />
            </ProtectedAdminRoute>
          }
        />
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
        <Route
          path="dashboard"
          element={
            <ProtectedAdminRoute>
              <AssignmentDashboard />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="catalog-audit"
          element={
            <ProtectedAdminRoute>
              <CatalogCompare />
            </ProtectedAdminRoute>
          }
        />
      </Route>

      {/* If logged in, redirect guest pages to the intended destination or root */}
      <Route path="/login" element={<Navigate to={redirectTarget} replace />} />
      <Route path="/signup" element={<Navigate to={redirectTarget} replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <AudioProvider>
        <BrowserRouter>
          <React.Suspense fallback={
            <div style={{
              height: '100vh', display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', background: '#FDFBF7'
            }}>
              <Spinner size={36} color="#FF9933" />
            </div>
          }>
            <AppRoutes />
          </React.Suspense>
        </BrowserRouter>
      </AudioProvider>
    </AuthProvider>
  );
}

export default App;
