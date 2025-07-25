import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Layout Components
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Protected Pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

// Auth Pages
import Login from "./pages/Login";

// Context and Hooks
import { AuthProvider } from "./providers/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/ProductList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const ProtectedRoute2 = ({ allowedRoles, children }) => {
  const { user, isAuthenticated, wasAuthenticated } = useAuth();

  // 1. Verificar autenticación
  if (!isAuthenticated) {
    // Si no está autenticado, redirige a la página de login.
    // 'replace' evita que el usuario vuelva a la página protegida con el botón de atrás.
    return <Navigate to={wasAuthenticated ? "/" : "/login"} replace />;
  }

  // 2. Verificar roles (si se especificaron 'allowedRoles')
  if (allowedRoles && allowedRoles.length > 0) {
    // Comprobamos si el rol del usuario está incluido en los roles permitidos
    const userHasRequiredRole = user && allowedRoles.includes(user.role);
    console.log("hasRole", userHasRequiredRole);
    if (!userHasRequiredRole) {
      return <Navigate to="/login" replace />;
    }
  }

  // 3. Si está autenticado y tiene el rol correcto, renderiza los hijos.
  // Usamos 'children' directamente para mayor flexibilidad.
  // Si se usa como elemento de <Route>, se puede usar <Outlet /> para rutas anidadas.
  return children ? children : <AuthLayout />;
};

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              {/* Public Routes with Main Layout */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
              </Route>

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />

              {/* Protected Routes with Auth Layout */}
              {/* <Route path="/app" element={
              <ProtectedRoute>
                <AuthLayout />
              </ProtectedRoute>
            }> */}
              <Route
                path="/app"
                element={<ProtectedRoute2 allowedRoles={["Administrator"]} />}
              >
                {/* <Route index element={<Navigate to="/app/dashboard" replace />} /> */}
                <Route index path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="products" element={<ProductList />} />
              </Route>

              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
