import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, BookOpen, BarChart3, User, Plus, Upload, Eye, Edit, Trash2, 
  Users, Star, TrendingUp, DollarSign, Settings, Save, X, Camera,
  Clock, Award, Globe, FileText, Video, Image as ImageIcon
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  price: number;
  image: string;
  status: 'draft' | 'published' | 'under_review';
  students: number;
  rating: number;
  createdAt: string;
  duration: string;
}

interface CourseFormData {
  title: string;
  description: string;
  category: string;
  level: string;
  price: number;
  image: string;
  duration: string;
  objectives: string;
  requirements: string;
  targetAudience: string;
}

const InstructorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mesCours');
  const [showCourseForm, setShowCourseForm] = useState(false);
  
  // Données simulées
  const [courses, setCourses] = useState<Course[]>([
    {
      id: '1',
      title: 'React JS pour débutants',
      description: 'Apprenez React depuis les bases jusqu\'aux concepts avancés',
      category: 'Développement Web',
      level: 'Débutant',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300',
      status: 'published',
      students: 245,
      rating: 4.7,
      createdAt: '2024-01-15',
      duration: '12h'
    },
    {
      id: '2',
      title: 'JavaScript Avancé',
      description: 'Maîtrisez les concepts avancés de JavaScript',
      category: 'Développement Web',
      level: 'Avancé',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300',
      status: 'under_review',
      students: 89,
      rating: 4.8,
      createdAt: '2024-02-10',
      duration: '18h'
    },
    {
      id: '3',
      title: 'Node.js Backend Development',
      description: 'Créez des APIs robustes avec Node.js',
      category: 'Backend',
      level: 'Intermédiaire',
      price: 65.99,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300',
      status: 'draft',
      students: 0,
      rating: 0,
      createdAt: '2024-03-01',
      duration: '15h'
    }
  ]);

  const [courseForm, setCourseForm] = useState<CourseFormData>({
    title: '',
    description: '',
    category: '',
    level: '',
    price: 0,
    image: '',
    duration: '',
    objectives: '',
    requirements: '',
    targetAudience: ''
  });

  // Statistiques calculées
  const stats = {
    totalCourses: courses.length,
    publishedCourses: courses.filter(c => c.status === 'published').length,
    totalStudents: courses.reduce((sum, course) => sum + course.students, 0),
    avgRating: courses.filter(c => c.rating > 0).reduce((sum, course) => sum + course.rating, 0) / courses.filter(c => c.rating > 0).length || 0,
    monthlyEarnings: courses.filter(c => c.status === 'published').reduce((sum, course) => sum + (course.students * course.price * 0.7), 0)
  };

  const categories = [
    'Développement Web', 'Mobile', 'Backend', 'DevOps', 'Data Science', 
    'Design', 'Marketing', 'Business', 'Photographie', 'Langues'
  ];

  const levels = ['Débutant', 'Intermédiaire', 'Avancé', 'Expert'];

  const handleCourseFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCourseForm(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmitCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse: Course = {
      id: Date.now().toString(),
      ...courseForm,
      image: courseForm.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300',
      status: 'draft',
      students: 0,
      rating: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setCourses(prev => [newCourse, ...prev]);
    setCourseForm({
      title: '', description: '', category: '', level: '', price: 0,
      image: '', duration: '', objectives: '', requirements: '', targetAudience: ''
    });
    setShowCourseForm(false);
    setActiveTab('mesCours');
  };

  const deleteCourse = (courseId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce cours ?')) {
      setCourses(prev => prev.filter(c => c.id !== courseId));
    }
  };

  const getStatusBadge = (status: Course['status']) => {
    const statusConfig = {
      published: { color: 'bg-green-100 text-green-800', text: 'Publié' },
      under_review: { color: 'bg-yellow-100 text-yellow-800', text: 'En révision' },
      draft: { color: 'bg-gray-100 text-gray-800', text: 'Brouillon' }
    };
    const config = statusConfig[status];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link to="/cours" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Interface Instructeur</h1>
                <p className="text-gray-600">Gérez vos cours et votre profil</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Jean-Pierre Mukendi</p>
                <p className="text-xs text-gray-500">Instructeur Expert</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('mesCours')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'mesCours' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Mes cours</span>
                </button>
                <button
                  onClick={() => setActiveTab('statistiques')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'statistiques' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BarChart3 className="w-5 h-5" />
                  <span>Statistiques</span>
                </button>
                <button
                  onClick={() => setActiveTab('profil')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'profil' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Mon profil</span>
                </button>
                <button
                  onClick={() => setActiveTab('parametres')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'parametres' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Paramètres</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mes Cours */}
            {activeTab === 'mesCours' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">Total cours</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">Étudiants</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <Star className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">Note moyenne</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.avgRating > 0 ? stats.avgRating.toFixed(1) : 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <DollarSign className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">Revenus</p>
                        <p className="text-2xl font-bold text-gray-900">${stats.monthlyEarnings.toFixed(0)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course List Header */}
                <div className="bg-white rounded-xl shadow-sm">
                  <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Mes cours</h2>
                    <button
                      onClick={() => setShowCourseForm(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Nouveau cours</span>
                    </button>
                  </div>

                  {/* Course List */}
                  <div className="p-6">
                    {courses.length > 0 ? (
                      <div className="space-y-4">
                        {courses.map((course) => (
                          <div key={course.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-16 h-16 rounded-lg object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300';
                              }}
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-semibold text-gray-900">{course.title}</h3>
                                {getStatusBadge(course.status)}
                              </div>
                              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{course.description}</p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{course.duration}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Users className="w-3 h-3" />
                                  <span>{course.students} étudiants</span>
                                </span>
                                {course.rating > 0 && (
                                  <span className="flex items-center space-x-1">
                                    <Star className="w-3 h-3 fill-current text-yellow-400" />
                                    <span>{course.rating}</span>
                                  </span>
                                )}
                                <span>${course.price}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button 
                                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                                title="Voir le cours"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                                title="Modifier le cours"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => deleteCourse(course.id)}
                                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                                title="Supprimer le cours"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun cours créé</h3>
                        <p className="text-gray-500 mb-6">Commencez par créer votre premier cours</p>
                        <button
                          onClick={() => setShowCourseForm(true)}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Créer un cours
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Statistiques */}
            {activeTab === 'statistiques' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Statistiques détaillées</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900">{stats.publishedCourses}</div>
                      <div className="text-sm text-gray-600">Cours publiés</div>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900">{stats.totalStudents}</div>
                      <div className="text-sm text-gray-600">Total étudiants</div>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-lg">
                      <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900">
                        {stats.avgRating > 0 ? stats.avgRating.toFixed(1) : 'N/A'}
                      </div>
                      <div className="text-sm text-gray-600">Note moyenne</div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Performance par cours</h3>
                    <div className="space-y-3">
                      {courses.filter(c => c.status === 'published').length > 0 ? (
                        courses.filter(c => c.status === 'published').map((course) => (
                          <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <h4 className="font-medium text-gray-900">{course.title}</h4>
                              <p className="text-sm text-gray-600">{course.students} étudiants • Note: {course.rating}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-gray-900">
                                ${(course.students * course.price * 0.7).toFixed(0)}
                              </div>
                              <div className="text-sm text-gray-500">Revenus</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          Aucun cours publié pour le moment
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profil */}
            {activeTab === 'profil' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Mon profil instructeur</h2>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <img
                          src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150"
                          alt="Profile"
                          className="w-24 h-24 rounded-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150';
                          }}
                        />
                        <button className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white hover:bg-blue-700 transition-colors">
                          <Camera className="w-4 h-4" />
                        </button>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Jean-Pierre Mukendi</h3>
                        <p className="text-gray-600">Expert Développeur Full Stack</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Globe className="w-4 h-4" />
                            <span>Kinshasa, RDC</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <span>4.9 (2847 avis)</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Titre professionnel</label>
                        <input
                          type="text"
                          defaultValue="Expert Développeur Full Stack"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Spécialités</label>
                        <input
                          type="text"
                          defaultValue="React, Node.js, JavaScript, Python"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio professionnelle</label>
                      <textarea
                        rows={4}
                        defaultValue="Développeur avec 8+ ans d'expérience dans les technologies web modernes. Ancien lead developer chez Google, spécialisé dans React, Node.js et les architectures scalables."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <Save className="w-4 h-4" />
                      <span>Sauvegarder les modifications</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Paramètres */}
            {activeTab === 'parametres' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Paramètres du compte</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                          <span className="ml-3 text-gray-700">Nouvelles inscriptions à mes cours</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                          <span className="ml-3 text-gray-700">Nouveaux avis et évaluations</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                          <span className="ml-3 text-gray-700">Newsletter mensuelle</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Paiements</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-2">Méthode de paiement</p>
                        <p className="font-medium">PayPal - jean-pierre@email.com</p>
                        <button className="text-blue-600 text-sm hover:text-blue-700 mt-2">
                          Modifier
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Sécurité</h3>
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        Changer le mot de passe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Nouveau Cours */}
      {showCourseForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Créer un nouveau cours</h2>
              <button
                onClick={() => setShowCourseForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitCourse} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre du cours *
                </label>
                <input
                  type="text"
                  name="title"
                  value={courseForm.title}
                  onChange={handleCourseFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: Maîtriser React en 30 jours"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={courseForm.description}
                  onChange={handleCourseFormChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Décrivez brièvement votre cours..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catégorie *
                  </label>
                  <select
                    name="category"
                    value={courseForm.category}
                    onChange={handleCourseFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Niveau *
                  </label>
                  <select
                    name="level"
                    value={courseForm.level}
                    onChange={handleCourseFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un niveau</option>
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prix (USD) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={courseForm.price || ''}
                    onChange={handleCourseFormChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: 49.99"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durée *
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={courseForm.duration}
                    onChange={handleCourseFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: 12h ou 3 semaines"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image du cours (URL)
                </label>
                <input
                  type="url"
                  name="image"
                  value={courseForm.image}
                  onChange={handleCourseFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
                <p className="text-sm text-gray-500 mt-1">Optionnel - Une image par défaut sera utilisée si vide</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Objectifs du cours
                </label>
                <textarea
                  name="objectives"
                  value={courseForm.objectives}
                  onChange={handleCourseFormChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Que vont apprendre les étudiants ? (un objectif par ligne)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prérequis
                </label>
                <textarea
                  name="requirements"
                  value={courseForm.requirements}
                  onChange={handleCourseFormChange}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Quels sont les prérequis nécessaires ?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Public cible
                </label>
                <input
                  type="text"
                  name="targetAudience"
                  value={courseForm.targetAudience}
                  onChange={handleCourseFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="À qui s'adresse ce cours ?"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowCourseForm(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Créer le cours</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorDashboard;