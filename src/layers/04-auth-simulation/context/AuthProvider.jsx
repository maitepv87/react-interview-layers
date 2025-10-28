import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { login, logout } from "./authActions";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = () => login(setUser);
  const handleLogout = () => logout(setUser);

  return (
    <AuthContext.Provider
      value={{ user, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
