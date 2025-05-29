import { createContext, useContext, ReactNode } from 'react';
import { User } from 'firebase/auth';
import { useAuth } from '@/hooks/useAuth';

interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  photoURL?: string;
  level: number;
  currentXP: number;
  totalXP: number;
  streak: number;
  isOnboardingComplete: boolean;
  createdAt: any;
  businessName?: string;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const authData = useAuth();

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};
