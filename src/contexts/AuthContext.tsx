import React, { createContext, useContext } from 'react';

interface AuthContextType {
  user: null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async () => {},
  signOut: async () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const signIn = async (email: string, password: string) => {
    console.log('Sign in will be implemented later');
  };

  const signOut = async () => {
    console.log('Sign out will be implemented later');
  };

  const value = {
    user: null,
    signIn,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};