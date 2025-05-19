import { AuthProvider } from "./AuthContext";
import { LikeProvider } from "./LikeContext";

export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <LikeProvider>{children}</LikeProvider>
    </AuthProvider>
  );
};
