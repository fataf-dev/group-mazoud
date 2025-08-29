import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  BookOpen, 
  Award,
  MapPin,
  Globe,
  Mail,
  PlayCircle,
  Clock,
  CheckCircle
} from 'lucide-react';

// IMPORTEZ LES DONNÉES DEPUIS LE FICHIER CENTRALISÉ
import { instructors, courses, type Instructor, type Course } from '../data/instructors';

const InstructorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const instructorId = Number(id);
  const instructor = instructors.find(inst => inst.id === instructorId);
  const navigate = useNavigate();

  if (!instructor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Instructeur introuvable</h2>
          <p className="text-gray-500 mb-6">L'instructeur que vous recherchez n'existe pas.</p>
          <Link 
            to="/instructeurs" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour aux instructeurs
          </Link>
        </div>
      </div>
    );
  }

  // FILTRER LES COURS PAR instructorId AU LIEU DU NOM
  const instructorCourses = courses.filter(course => course.instructorId === instructor.id);

  // Le reste de votre code reste identique...
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bouton retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux instructeurs
          </button>
        </div>
      </div>

      {/* Hero Section de l'instructeur */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            {/* Photo et badge vérifié */}
            <div className="relative">
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-2xl"
              />
              {instructor.verified && (
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-3 border-4 border-white shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              )}
            </div>

            {/* Informations principales */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {instructor.category}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {instructor.name}
              </h1>
              
              <p className="text-xl text-blue-600 font-medium mb-4">
                {instructor.title}
              </p>

              <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">{instructor.location}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-gray-900">{instructor.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500">{instructor.reviews.toLocaleString()} avis</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-gray-900">{instructor.students.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-500">Étudiants</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span className="text-2xl font-bold text-gray-900">{instructor.courses}</span>
                  </div>
                  <p className="text-sm text-gray-500">Cours</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className="text-2xl font-bold text-gray-900">{instructor.totalHours}h</span>
                  </div>
                  <p className="text-sm text-gray-500">Contenu</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
                {instructor.fullBio || instructor.bio}
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Contacter</span>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Suivre
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section détails */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-12">
              {/* Spécialités */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Spécialités</h2>
                <div className="flex flex-wrap gap-3">
                  {instructor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-white border-2 border-blue-200 text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cours proposés */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cours proposés ({instructorCourses.length})
                </h2>
                {instructorCourses.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {instructorCourses.map((course) => (
                      <Link
                        key={course.id}
                        to={`/cours/${course.id}`}
                        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                      >
                        <div className="relative">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                              {instructor.category}
                            </span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {course.level}
                            </span>
                          </div>
                          
                          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                            {course.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {course.description}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{course.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{course.students.toLocaleString()}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-gray-900">${course.price}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500 text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{course.duration}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-xl">
                    <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Aucun cours disponible pour le moment</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Informations complémentaires */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Informations</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Expérience</p>
                        <p className="font-semibold text-gray-900">{instructor.experience}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Langues</p>
                        <p className="font-semibold text-gray-900">
                          {instructor.languages.join(', ')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Statut</p>
                        <p className="font-semibold text-green-600">
                          {instructor.verified ? 'Instructeur vérifié' : 'En cours de vérification'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cours le plus populaire */}
                {instructor.topCourse && (
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">🏆 Cours populaire</h3>
                    <p className="font-medium mb-3">{instructor.topCourse}</p>
                    <div className="flex items-center space-x-1 text-blue-100 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{instructor.topCourseStudents.toLocaleString()} étudiants</span>
                    </div>
                  </div>
                )}

                {/* Stats supplémentaires */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Statistiques</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Taux de satisfaction</span>
                      <span className="font-bold text-green-600">{Math.round(instructor.rating * 20)}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Heures de contenu</span>
                      <span className="font-bold text-blue-600">{instructor.totalHours}h</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Nombre d'avis</span>
                      <span className="font-bold text-purple-600">{instructor.reviews.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorDetail;