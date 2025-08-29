import React from 'react';
import { useAuth, UserType } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedUserTypes: UserType[];
  fallback?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  allowedUserTypes, 
  fallback 
}) => {
  const { userType } = useAuth();

  if (!allowedUserTypes.includes(userType)) {
    return fallback || (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Accès non autorisé</h2>
        <p className="text-gray-600">
          {userType === 'public' 
            ? 'Veuillez vous connecter pour accéder à cette page.' 
            : 'Vous n\'avez pas les permissions nécessaires.'}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;