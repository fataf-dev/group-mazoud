import React, { useState } from 'react';
import { Star, Users, BookOpen, ChevronLeft, ChevronRight, Award, MapPin } from 'lucide-react';

// Import des images 
import didierImg from '../components/image/didier.jpeg';
import jonathanImg from '../components/image/jona.jpeg';
import lucieImg from '../components/image/lucie.jpeg';
import glodyImg from '../components/image/glody.jpeg';
import beniImg from '../components/image/beni.jpeg';
import josephImg from '../components/image/joseph.jpeg';

// Interface pour les instructeurs
interface InstructorWithCourses {
  id: number;
  name: string;
  title: string;
  rating: number;
  students: number;
  courses: number;
  image: string;
  specialities: string[];
  location: string;
  verified: boolean;
  topCourse: string;
  topCourseStudents: number;
  experience: string;
  category: string;
  recentCourses: Array<{
    title: string;
    students: number;
    rating: number;
    level: string;
  }>;
}

// Données enrichies des instructeurs avec leurs cours
const instructors: InstructorWithCourses[] = [
  {
    id: 1,
    name: "Didier lushaka",
    title: "Développeur Full-Stack Senior",
    rating: 4.9,
    students: 25643,
    courses: 12,
    image: didierImg,
    specialities: ["React", "Node.js", "JavaScript", "Python"],
    location: "Kinshasa, RDC",
    verified: true,
    topCourse: "Formation complète React & JavaScript",
    topCourseStudents: 2840,
    experience: "8 ans",
    category: "Développement",
    recentCourses: [
      { title: "React Avancé et Hooks", students: 1840, rating: 4.9, level: "Avancé" },
      { title: "Node.js API Development", students: 1540, rating: 4.8, level: "Intermédiaire" },
      { title: "JavaScript ES6+ Moderne", students: 2100, rating: 4.8, level: "Débutant" }
    ]
  },
  {
    id: 2,
    name: "Jonathan wakom",
    title: "Expert en Intelligence Artificielle",
    rating: 4.8,
    students: 18932,
    courses: 8,
    image: jonathanImg,
    specialities: ["IA", "Machine Learning", "Python", "TensorFlow"],
    location: "Goma, RDC",
    verified: true,
    topCourse: "Machine Learning avec Python",
    topCourseStudents: 1560,
    experience: "10 ans",
    category: "Data Science",
    recentCourses: [
      { title: "Deep Learning Pratique", students: 890, rating: 4.9, level: "Avancé" },
      { title: "Analyse de Données avec Python", students: 1340, rating: 4.8, level: "Intermédiaire" },
      { title: "Intelligence Artificielle pour Débutants", students: 2100, rating: 4.7, level: "Débutant" }
    ]
  },
  {
    id: 3,
    name: "Lucie migabo",
    title: "Designer UX/UI Certifiée",
    rating: 4.7,
    students: 32156,
    courses: 15,
    image: lucieImg,
    specialities: ["Figma", "Adobe XD", "Design Thinking", "Prototypage"],
    location: "Lubumbashi, RDC",
    verified: true,
    topCourse: "Design UX/UI Complet",
    topCourseStudents: 1920,
    experience: "7 ans",
    category: "Design",
    recentCourses: [
      { title: "Figma pour Designers", students: 2340, rating: 4.8, level: "Débutant" },
      { title: "UX Research Pratique", students: 890, rating: 4.9, level: "Intermédiaire" },
      { title: "Design Systems Avancés", students: 670, rating: 4.7, level: "Avancé" }
    ]
  },
  {
    id: 4,
    name: "Gloddy Mimbu",
    title: "Stratège Marketing Digital",
    rating: 4.6,
    students: 21987,
    courses: 10,
    image: glodyImg,
    specialities: ["SEO", "Google Ads", "Analytics", "Content Marketing"],
    location: "Kinshasa, RDC",
    verified: true,
    topCourse: "Marketing Digital Complet",
    topCourseStudents: 3210,
    experience: "6 ans",
    category: "Marketing",
    recentCourses: [
      { title: "SEO Moderne 2024", students: 2100, rating: 4.7, level: "Débutant" },
      { title: "Google Ads Mastery", students: 1560, rating: 4.6, level: "Intermédiaire" },
      { title: "Analytics et Conversion", students: 1100, rating: 4.8, level: "Avancé" }
    ]
  },
  {
    id: 5,
    name: "Benedicte okar",
    title: "Photographe Professionnelle",
    rating: 4.8,
    students: 15432,
    courses: 9,
    image: beniImg,
    specialities: ["Portrait", "Studio", "Lightroom", "Photoshop"],
    location: "Bukavu, RDC",
    verified: true,
    topCourse: "Photographie Portrait Pro",
    topCourseStudents: 890,
    experience: "12 ans",
    category: "Photographie",
    recentCourses: [
      { title: "Maîtrise de l'Éclairage", students: 567, rating: 4.7, level: "Intermédiaire" },
      { title: "Post-Production Lightroom", students: 723, rating: 4.9, level: "Avancé" },
      { title: "Portrait en Studio", students: 890, rating: 4.8, level: "Débutant" }
    ]
  },
  {
    id: 6,
    name: "Joseph balibuno",
    title: "Expert Cybersécurité",
    rating: 4.9,
    students: 12876,
    courses: 7,
    image: josephImg,
    specialities: ["Sécurité Réseau", "Ethical Hacking", "Pentest", "Linux"],
    location: "Kisangani, RDC",
    verified: true,
    topCourse: "Cybersécurité Complète",
    topCourseStudents: 1240,
    experience: "9 ans",
    category: "Cybersécurité",
    recentCourses: [
      { title: "Ethical Hacking Débutant", students: 980, rating: 4.8, level: "Débutant" },
      { title: "Pentest Avancé", students: 456, rating: 4.9, level: "Avancé" },
      { title: "Sécurité Linux", students: 678, rating: 4.7, level: "Intermédiaire" }
    ]
  }
];

const ExpertInstructors = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedInstructor, setSelectedInstructor] = useState<InstructorWithCourses | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  const instructorsPerPage = 4;
  const totalPages = Math.ceil(instructors.length / instructorsPerPage);
  
  const getCurrentInstructors = () => {
    const start = currentPage * instructorsPerPage;
    return instructors.slice(start, start + instructorsPerPage);
  };

  const handleInstructorClick = (instructor: InstructorWithCourses) => {
    setSelectedInstructor(instructor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInstructor(null);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos instructeurs experts
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Apprenez directement auprès de professionnels reconnus dans leur domaine, avec une expérience pratique et une pédagogie éprouvée.
          </p>
        </div>

        {/* Grille des instructeurs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {getCurrentInstructors().map((instructor) => (
            <div
              key={instructor.id}
              onClick={() => handleInstructorClick(instructor)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border border-gray-100 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {instructor.verified && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>Vérifié</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {instructor.name}
                </h3>
                
                <p className="text-blue-600 mb-3 font-medium">{instructor.title}</p>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{instructor.location}</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{instructor.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">{instructor.courses} cours</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{instructor.students.toLocaleString()} étudiants</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2 font-medium">Spécialités :</p>
                  <div className="flex flex-wrap gap-1">
                    {instructor.specialities.slice(0, 3).map((speciality, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {speciality}
                      </span>
                    ))}
                    {instructor.specialities.length > 3 && (
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        +{instructor.specialities.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Voir les cours
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation de pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevPage}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Précédent</span>
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === i
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <span>Suivant</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Modal détail instructeur */}
      {showModal && selectedInstructor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header du modal */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-6">
                  <img
                    src={selectedInstructor.image}
                    alt={selectedInstructor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-3xl font-bold text-gray-900">{selectedInstructor.name}</h2>
                      {selectedInstructor.verified && (
                        <Award className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <p className="text-xl text-blue-600 font-medium mb-2">{selectedInstructor.title}</p>
                    <div className="flex items-center text-gray-600 space-x-4">
                      <span>{selectedInstructor.experience} d'expérience</span>
                      <span>•</span>
                      <span>{selectedInstructor.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2 fill-current" />
                  <div className="text-2xl font-bold text-gray-900">{selectedInstructor.rating}</div>
                  <div className="text-sm text-gray-600">Note moyenne</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{selectedInstructor.students.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Étudiants</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{selectedInstructor.courses}</div>
                  <div className="text-sm text-gray-600">Cours</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{selectedInstructor.category}</div>
                  <div className="text-sm text-gray-600">Catégorie</div>
                </div>
              </div>

              {/* Spécialités */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Spécialités</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedInstructor.specialities.map((speciality, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {speciality}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cours populaire */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cours le plus populaire</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">{selectedInstructor.topCourse}</h4>
                    <p className="text-gray-600">{selectedInstructor.topCourseStudents.toLocaleString()} étudiants inscrits</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Voir le cours
                  </button>
                </div>
              </div>

              {/* Cours récents */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Cours récents</h3>
                <div className="grid gap-4">
                  {selectedInstructor.recentCourses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{course.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{course.students.toLocaleString()} étudiants</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{course.rating}</span>
                          </div>
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs">{course.level}</span>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Voir →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExpertInstructors;