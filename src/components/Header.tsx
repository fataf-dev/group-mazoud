import React, { useState } from 'react';
import { Search, Menu, X, User, ShoppingCart, Bell, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, userType, logout, isAuthenticated } = useAuth();

  // Fonction pour déterminer si un lien est actif
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  // Classe pour les liens actifs
  const getLinkClass = (path: string) => {
    return isActiveLink(path)
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition-colors";
  };

  // Navigation selon le type d'utilisateur - CORRIGÉ
  const getNavigationItems = () => {
    const baseItems = [
      { path: '/', label: 'Accueil', allowedTypes: ['public', 'etudiant', 'instructeur', 'administrateur'] }
    ];

    if (userType === 'public') {
      return baseItems;
    }

    // ✅ CORRECTION : Inclure 'instructeur' dans la navigation complète
    if (userType === 'etudiant' || userType === 'instructeur' || userType === 'administrateur') {
      return [
        ...baseItems,
        { path: '/cours', label: 'Cours', allowedTypes: ['etudiant', 'instructeur', 'administrateur'] },
        { path: '/categories', label: 'Catégories', allowedTypes: ['etudiant', 'instructeur', 'administrateur'] },
        { path: '/instructeurs', label: 'Instructeurs', allowedTypes: ['etudiant', 'instructeur', 'administrateur'] },
        { path: '/a-propos', label: 'À propos', allowedTypes: ['etudiant', 'instructeur', 'administrateur'] }
      ];
    }

    return baseItems;
  };

  const navigationItems = getNavigationItems().filter(item => 
    item.allowedTypes.includes(userType)
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - SOLUTION OPTIMALE : marge droite pour créer l'espace */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 mr-12">
              <h1 className="text-2xl font-bold text-blue-600">Groupe Mazenod</h1>
              <p className="text-xs text-gray-500">Académie en ligne</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.path} to={item.path} className={getLinkClass(item.path)}>
                {item.label}
              </Link>
            ))}
            
            {/* ✅ NOUVEAU : Lien Dashboard Instructeur */}
            {userType === 'instructeur' && (
              <Link to="/instructeur/dashboard" className={getLinkClass('/instructeur/dashboard')}>
                Mon Dashboard
              </Link>
            )}
            
            {/* Lien Admin uniquement pour administrateurs */}
            {userType === 'administrateur' && (
              <Link to="/admin" className={getLinkClass('/admin')}>
                Admin
              </Link>
            )}
          </nav>

          {/* Search Bar - uniquement pour utilisateurs connectés */}
          {isAuthenticated && (
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher des cours..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && (
              <>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                
                {/* Profil utilisateur */}
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{user?.nom}</p>
                    <p className="text-xs text-gray-500 capitalize">{userType}</p>
                  </div>
                  <button 
                    onClick={logout}
                    className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Déconnexion</span>
                  </button>
                </div>
              </>
            )}

            {!isAuthenticated && (
              <Link 
                to="/connexion" 
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Connexion</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - CORRIGÉ */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigationItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`block px-3 py-2 ${getLinkClass(item.path)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* ✅ NOUVEAU : Dashboard Instructeur en mobile */}
              {userType === 'instructeur' && (
                <Link 
                  to="/instructeur/dashboard" 
                  className={`block px-3 py-2 ${getLinkClass('/instructeur/dashboard')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mon Dashboard
                </Link>
              )}
              
              {/* Admin en mobile */}
              {userType === 'administrateur' && (
                <Link 
                  to="/admin" 
                  className={`block px-3 py-2 ${getLinkClass('/admin')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
              
              <div className="pt-2">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-gray-600">
                      <p className="font-medium">{user?.nom}</p>
                      <p className="text-xs capitalize">{userType}</p>
                    </div>
                    <button 
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-center"
                    >
                      Déconnexion
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/connexion" 
                    className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;