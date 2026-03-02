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
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin' || user?.role === 'subadmin';

  // If not logged in, redirect to login page for the main app
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
