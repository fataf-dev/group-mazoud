import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserType = 'public' | 'etudiant' | 'instructeur' | 'administrateur';

interface User {
  id: string;
  nom: string;
  email: string;
  type: UserType;
}

interface AuthContextType {
  user: User | null;
  userType: UserType;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Utilisateurs de démonstration
const demoUsers = [
  {
    id: '1',
    nom: 'Jean Étudiant',
    email: 'etudiant@test.com',
    password: '123456',
    type: 'etudiant' as UserType
  },
  {
    id: '2',
    nom: 'Admin Système',
    email: 'admin@test.com',
    password: 'admin123',
    type: 'administrateur' as UserType
  },
  {
    id: '3',
    nom: 'Jean-Pierre Mukendi',
    email: 'instructeur@test.com',
    password: 'instructor123',
    type: 'instructeur' as UserType
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
   
  // Récupérer l'utilisateur depuis le localStorage au démarrage
  useEffect(() => {
    const savedUser = localStorage.getItem('didier_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const userType: UserType = user?.type || 'public';
  const isAuthenticated = user !== null;

  const login = (email: string, password: string): boolean => {
    const foundUser = demoUsers.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        nom: foundUser.nom,
        email: foundUser.email,
        type: foundUser.type
      };
       
      setUser(userData);
      localStorage.setItem('didier_user', JSON.stringify(userData));
      return true;
    }
       
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('didier_user');
  };

  return (
    <AuthContext.Provider value={{ user, userType, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};