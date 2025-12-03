import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Training } from './pages/Training';
import { LessonDetail } from './pages/LessonDetail';
import { Progress } from './pages/Progress';
import { Profile } from './pages/Profile';
import { EditProfile } from './pages/EditProfile';
import { Settings } from './pages/Settings';
import { Challenge } from './pages/Challenge';
import { Login } from './pages/Login';
import { useAuthStore } from './store/useAuthStore';
import { ToastContainer } from './components/ui/ToastContainer';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Home />} />
          <Route path="entrenar" element={<Training />} />
          <Route path="aula/:id" element={<LessonDetail />} />
          <Route path="progreso" element={<Progress />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="editar-perfil" element={<EditProfile />} />
          <Route path="configuracion" element={<Settings />} />
          <Route path="reto" element={<Challenge />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
