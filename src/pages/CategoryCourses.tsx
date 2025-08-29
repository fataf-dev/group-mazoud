import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  PlayCircle, 
  BookOpen, 
  Award,
  ArrowLeft,
  ChevronDown 
} from 'lucide-react';

// Interface Course (identique à celle de Cours.tsx)
interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  skills: string[];
  bestseller: boolean;
}

// Données des cours (copiées depuis Cours.tsx)
const courses: Course[] = [
  {
    id: 1,
    title: "Formation complète React & JavaScript",
    instructor: "Didier Lushaka",
    category: "Développement",
    level: "Débutant",
    duration: "12h 30min",
    students: 2840,
    rating: 4.8,
    reviews: 892,
    price: 89,
    originalPrice: 149,
    image: "image/didier.jpeg",
    description: "Apprenez React et JavaScript moderne de A à Z avec des projets pratiques",
    skills: ["React", "JavaScript ES6+", "Hooks", "Redux"],
    bestseller: true
  },
  {
    id: 2,
    title: "Design UI/UX avec Figma",
    instructor: "benedicte okar",
    category: "Design",
    level: "Intermédiaire",
    duration: "8h 15min",
    students: 1920,
    rating: 4.9,
    reviews: 456,
    price: 75,
    originalPrice: 120,
    image: "image/beni.jpeg",
    description: "Maîtrisez les principes du design UI/UX et créez des interfaces modernes",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    bestseller: false
  },
  {
    id: 3,
    title: "Marketing Digital & SEO",
    instructor: "benji Matondo",
    category: "Marketing",
    level: "Débutant",
    duration: "15h 45min",
    students: 3210,
    rating: 4.7,
    reviews: 1234,
    price: 95,
    originalPrice: 160,
    image: "image/benji.jpeg",
    description: "Stratégies complètes de marketing digital et optimisation SEO",
    skills: ["SEO", "Google Ads", "Analytics", "Social Media"],
    bestseller: true
  },
  {
    id: 4,
    title: "Python pour Data Science",
    instructor: "Joel icy",
    category: "Développement",
    level: "Intermédiaire",
    duration: "18h 20min",
    students: 1560,
    rating: 4.8,
    reviews: 789,
    price: 110,
    originalPrice: 180,
    image: "image/jo.jpeg",
    description: "Analysez des données et créez des modèles avec Python",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
    bestseller: false
  },
  {
    id: 5,
    title: "Photographie Portrait Professionnelle",
    instructor: "wakom jo",
    category: "Photographie",
    level: "Avancé",
    duration: "10h 30min",
    students: 890,
    rating: 4.9,
    reviews: 234,
    price: 125,
    originalPrice: 200,
    image: "image/jona.jpeg",
    description: "Techniques avancées de photographie portrait en studio et extérieur",
    skills: ["Portrait", "Éclairage", "Retouche", "Direction artistique"],
    bestseller: false
  },
  {
    id: 6,
    title: "Anglais Business Avancé",
    instructor: "Gloria kuzimbu",
    category: "Langues",
    level: "Avancé",
    duration: "25h 00min",
    students: 2340,
    rating: 4.6,
    reviews: 567,
    price: 80,
    originalPrice: 130,
    image: "image/glo.jpeg",
    description: "Perfectionnez votre anglais professionnel pour les affaires",
    skills: ["Business English", "Présentation", "Négociation", "Email"],
    bestseller: true
  }
];

const levels = ["Tous", "Débutant", "Intermédiaire", "Avancé"];
const durations = ["Tous", "0-5h", "5-10h", "10-20h", "20h+"];

const CategoryCourses: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const decodedCategory = decodeURIComponent(categoryName || '');
  
  // États pour les filtres
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('Tous');
  const [selectedDuration, setSelectedDuration] = useState('Tous');
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  // Fonction pour filtrer par durée
  const filterDuration = (duration: string, courseDuration: string) => {
    const hours = parseFloat(courseDuration.split('h')[0]);
    switch (duration) {
      case '0-5h': return hours <= 5;
      case '5-10h': return hours > 5 && hours <= 10;
      case '10-20h': return hours > 10 && hours <= 20;
      case '20h+': return hours > 20;
      default: return true;
    }
  };

  // Filtrer les cours par catégorie et autres critères
  const filteredCourses = courses
    .filter(course => course.category === decodedCategory)
    .filter(course => {
      return (
        (selectedLevel === 'Tous' || course.level === selectedLevel) &&
        (selectedDuration === 'Tous' || filterDuration(selectedDuration, course.duration)) &&
        (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
         course.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.students - a.students;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

  // Si aucun cours trouvé dans cette catégorie
  if (courses.filter(course => course.category === decodedCategory).length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Aucun cours trouvé dans la catégorie "{decodedCategory}"
          </h2>
          <p className="text-gray-500 mb-6">
            Cette catégorie ne contient pas encore de cours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/categories" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retour aux catégories
            </Link>
            <Link 
              to="/cours" 
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Voir tous les cours
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bouton retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/categories" 
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux catégories
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Cours en
              <span className="text-blue-600"> {decodedCategory}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection de cours en {decodedCategory.toLowerCase()} 
              dispensés par des experts pour développer vos compétences.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Rechercher dans ${decodedCategory}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              <Filter className="w-4 h-4" />
              <span>Filtres</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Desktop Filters */}
            <div className={`flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto ${showFilters ? 'block' : 'hidden lg:flex'}`}>
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>Niveau: {level}</option>
                  ))}
                </select>

                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {durations.map(duration => (
                    <option key={duration} value={duration}>Durée: {duration}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort and Results Count */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">
                <span className="font-semibold">{filteredCourses.length}</span> cours trouvés
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popularity">Plus populaires</option>
                <option value="rating">Mieux notés</option>
                <option value="price-low">Prix croissant</option>
                <option value="price-high">Prix décroissant</option>
                <option value="newest">Plus récents</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  {/* Image cliquable vers la page détail */}
                  <Link to={`/cours/${course.id}`} className="block relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover cursor-pointer"
                    />
                    {course.bestseller && (
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Bestseller
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {course.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {course.level}
                      </span>
                    </div>

                    {/* Titre cliquable vers la page détail */}
                    <Link to={`/cours/${course.id}`} className="block">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                        {course.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {course.description}
                    </p>

                    <p className="text-gray-700 text-sm mb-4">Par {course.instructor}</p>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {course.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {course.skills.length > 3 && (
                          <span className="text-gray-500 text-xs px-2 py-1">
                            +{course.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Rating and Students */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-semibold text-gray-900">{course.rating}</span>
                          <span className="text-gray-500 text-sm">({course.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                        <span className="text-gray-500 line-through text-sm">${course.originalPrice}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link 
                          to={`/cours/${course.id}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                        >
                          <PlayCircle className="w-4 h-4" />
                          <span>Voir détails</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun cours trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Explorez d'autres catégories
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez notre large gamme de formations dans tous les domaines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/categories"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Toutes les catégories
              </Link>
              <Link 
                to="/cours"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Tous les cours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryCourses;