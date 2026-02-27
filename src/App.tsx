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

      <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
      <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignupPage />} />

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
