import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Import des pages
import Accueil from './pages/Accueil';
import Cours from './pages/Cours';
import CourseDetail from './pages/CourseDetail';
import Categories from './pages/Categories';
import CategoryCourses from './pages/CategoryCourses';
import Instructeurs from './pages/Instructeurs';
import InstructorDetail from './pages/InstructorDetail';
import APropos from './pages/APropos';
import Connexion from './pages/Connexion';
import AdminDashboard from './pages/AdminDashboard';
import DevenirInstructeur from './pages/DevenirInstructeur';
import InstructorDashboard from './pages/InstructorDashboard'; // NOUVELLE IMPORT

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          {/* Page publique - accessible à tous */}
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          
          {/* NOUVELLE ROUTE - Page devenir instructeur */}
          <Route 
            path="/devenir-instructeur" 
            element={
              <ProtectedRoute allowedUserTypes={['etudiant', 'administrateur']}>
                <DevenirInstructeur />
              </ProtectedRoute>
            } 
          />
          
          {/* NOUVELLE ROUTE - Interface instructeur */}
          <Route 
            path="/instructeur/dashboard" 
            element={
              <ProtectedRoute allowedUserTypes={['instructeur', 'administrateur']}>
                <InstructorDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Pages pour étudiants connectés */}
          <Route 
            path="/cours" 
            element={
              <ProtectedRoute allowedUserTypes={['etudiant', 'instructeur', 'administrateur']}>
                <Cours />
              </ProtectedRoute>
            } 
          />
          
          {/* ROUTE POUR LES DÉTAILS DU COURS */}
          <Route 
            path="/cours/:id" 
            element={
              <ProtectedRoute allowedUserTypes={['etudiant', 'instructeur', 'administrateur']}>
                <CourseDetail />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/categories" 
            element={
              <ProtectedRoute allowedUserTypes={['etudiant', 'instructeur', 'administrateur']}>
                <Categories />
              </ProtectedRoute>
            } 
          />
          
          {/* ROUTE POUR LES COURS PAR CATÉGORIE */}
          <Route 
            path="/categories/:categoryName" 
            element={
              <ProtectedRoute allowedUserTypes={['etudiant', 'instructeur', 'administrateur']}>
                <CategoryCourses />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/instructeurs" 
            element={
              <ProtectedRoute allowedUserTypes={['etudiant', 'instructeur', 'administrateur']}>
                <Instructeurs />
              </ProtectedRoute>
            } 
          />
          
          {/* NOUVELLE ROUTE POUR LES DÉTAILS DES INSTRUCTEURS */}
          <Route 
            path="/instructeurs/:id" 
            element={
              <ProtectedRoute allowedUserTypes={['etudiant', 'instructeur', 'administrateur']}>
                <InstructorDetail />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/a-propos" 
            element={
              <ProtectedRoute allowedUserTypes={['etudiant', 'instructeur', 'administrateur']}>
                <APropos />
              </ProtectedRoute>
            } 
          />
          
          {/* Page admin uniquement */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedUserTypes={['administrateur']}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;