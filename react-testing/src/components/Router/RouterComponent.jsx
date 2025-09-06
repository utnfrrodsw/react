import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import AdminPage from "./AdminPage";
import UnauthorizedPage from "./UnauthorizedPage";

export default function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Home</p>} />
          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="admin" element={<AdminPage />} />
          </Route>
          <Route path="login" element={<p>Login</p>} />
          <Route path="unauthorized" element={<UnauthorizedPage />} />
        </Route>
      </Routes>
    // {/* </BrowserRouter> */}
  );
}
