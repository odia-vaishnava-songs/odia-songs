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

const AppRoutes = () => {
  const { user, loading } = useAuth();
  const isAdmin = user?.role === 'admin' || user?.role === 'subadmin';

  // Wait for auth to fully initialize (including profile sync) before deciding where to route.
  // This prevents the "identity crisis" where a user is briefly treated as a
  // normal user before their admin role is confirmed from the database.
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
        <Route path="guide" element={<GuidePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

        {/* Protected Admin Routes */}
        <Route
          path="manage-songs"
          element={isAdmin ? <ManageSongsPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="migrate"
          element={isAdmin ? <MigrateSongsPage /> : <Navigate to="/login" replace />}
        />
      </Route>

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
