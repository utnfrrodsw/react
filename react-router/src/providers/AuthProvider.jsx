import { useState } from 'react';
import { AuthContext } from '../contexts/auth';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [wasAuthenticated, setWasAuthenticated] = useState(false);

  const login = async (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setWasAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const authValue = {
    isAuthenticated,
    user,
    login,
    logout,
    wasAuthenticated
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}; 