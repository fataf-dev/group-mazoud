import React from 'react';
import { Users, BookOpen, DollarSign, TrendingUp, Eye, Edit, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
  // Données simulées
  const stats = [
    { title: 'Total Étudiants', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { title: 'Total Cours', value: '87', icon: BookOpen, color: 'bg-green-500' },
    { title: 'Revenus du mois', value: '$12,450', icon: DollarSign, color: 'bg-purple-500' },
    { title: 'Croissance', value: '+23%', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  const recentCourses = [
    { id: 1, title: 'Introduction à React', instructor: 'Prof. Martin', students: 45, status: 'Publié' },
    { id: 2, title: 'Python pour débutants', instructor: 'Prof. Sophie', students: 67, status: 'En révision' },
    { id: 3, title: 'Design UX/UI', instructor: 'Prof. Jean', students: 23, status: 'Brouillon' }
  ];

  const recentUsers = [
    { id: 1, name: 'Marie Dubois', email: 'marie@email.com', type: 'Étudiant', joinDate: '2024-03-15' },
    { id: 2, name: 'Paul Martin', email: 'paul@email.com', type: 'Professeur', joinDate: '2024-03-14' },
    { id: 3, name: 'Entreprise ABC', email: 'contact@abc.com', type: 'Entreprise', joinDate: '2024-03-13' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord administrateur</h1>
          <p className="text-gray-600">Vue d'ensemble de la plateforme Groupe Mazenod</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gestion des cours */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Cours récents</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Nouveau cours
              </button>
            </div>
            
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-600">Par {course.instructor}</p>
                    <p className="text-sm text-gray-500">{course.students} étudiants</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.status === 'Publié' ? 'bg-green-100 text-green-800' :
                      course.status === 'En révision' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {course.status}
                    </span>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gestion des utilisateurs */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Utilisateurs récents</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Ajouter utilisateur
              </button>
            </div>
            
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-sm text-gray-500">Inscrit le {user.joinDate}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.type === 'Étudiant' ? 'bg-blue-100 text-blue-800' :
                      user.type === 'Professeur' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {user.type}
                    </span>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Actions rapides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium">Valider cours</p>
            </button>
            <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-medium">Gérer utilisateurs</p>
            </button>
            <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-medium">Rapports financiers</p>
            </button>
            <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="font-medium">Statistiques</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;