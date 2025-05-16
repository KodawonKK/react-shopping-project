import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children, initialStatus }) => {
  const [authenticate, setAuthenticate] = useState(initialStatus);

  return <AuthContext.Provider value={{ authenticate, setAuthenticate }}>{children}</AuthContext.Provider>;
};
