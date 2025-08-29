import React, { useState } from 'react'; 
import { Search, Filter, Star, Clock, Users, PlayCircle, BookOpen, Award, ChevronDown, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import des images avec les bonnes attributions
import didierImg from '../components/image/didier.jpeg';   // Formation complète React & JavaScript
import lucieImg from '../components/image/lucie.jpeg';     // Anglais Business Avancé
import josephImg from '../components/image/joseph.jpeg';   // Design UI/UX avec Figma
import glodyImg from '../components/image/glody.jpeg';     // Python pour Data Science
import henockImg from '../components/image/henock.jpeg';   // Photographie Portrait Professionnelle

// Interface Course (inchangée)
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

// Composant PaymentMobile avec props correctes
const PaymentMobile = ({ amount, reference, courseTitle }: { amount: number, reference: string, courseTitle: string }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Fournisseurs disponibles
  const providers = [
    { id: 'orange', name: 'Orange Money', color: 'bg-orange-500' },
    { id: 'airtel', name: 'Airtel Money', color: 'bg-red-500' },
    { id: 'mpesa', name: 'M-Pesa', color: 'bg-green-500' },
  ];

  // Simule un appel API backend avec délai
  const simulatePaymentApi = () =>
    new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    });

  const handlePayment = async () => {
    if (!selectedProvider) {
      setMessage('Veuillez sélectionner un opérateur.');
      return;
    }
    if (!phoneNumber) {
      setMessage('Veuillez saisir votre numéro de téléphone.');
      return;
    }
    setMessage(null);
    setLoading(true);
    try {
      await simulatePaymentApi();
      setMessage(`Paiement de ${amount.toLocaleString()} FC via ${selectedProvider} effectué avec succès.`);
      setShowForm(false);
      setPhoneNumber('');
      setSelectedProvider('');
    } catch {
      setMessage('Une erreur est survenue lors du paiement.');
    } finally {
      setLoading(false);
    }
  };

  if (!showForm) {
    return (
      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 w-full"
      >
        <Smartphone className="w-4 h-4" />
        <span>Payer {amount.toLocaleString()} FC</span>
      </button>
    );
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
      <h4 className="font-semibold text-gray-800">Paiement Mobile</h4>
      <p className="text-sm text-gray-600">{courseTitle}</p>
      <p className="text-lg font-bold text-green-600">{amount.toLocaleString()} FC</p>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">Choisir l'opérateur</label>
        <div className="grid grid-cols-3 gap-2">
          {providers.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedProvider(p.id)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedProvider === p.id ? `${p.color} text-white border-transparent` : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Ex: 0970123456"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      {message && <p className="text-red-600 font-medium">{message}</p>}

      <div className="flex space-x-2">
        <button
          type="button"
          onClick={handlePayment}
          disabled={loading}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Traitement...' : 'Confirmer le paiement'}
        </button>
        <button
          type="button"
          onClick={() => {
            setShowForm(false);
            setMessage(null);
          }}
          className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
          disabled={loading}
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

const courses: Course[] = [
  {
    id: 1,
    title: "Formation complète React & JavaScript",
    instructor: "Didier lushaka",
    category: "Développement",
    level: "Débutant",
    duration: "12h 30min",
    students: 2840,
    rating: 4.8,
    reviews: 892,
    price: 89,
    originalPrice: 149,
    image: didierImg, // Photo de Didier pour son cours React
    description: "Apprenez React et JavaScript moderne de A à Z avec des projets pratiques",
    skills: ["React", "JavaScript ES6+", "Hooks", "Redux"],
    bestseller: true
  },
  {
    id: 2,
    title: "Design UI/UX avec Figma",
    instructor: "Joseph",
    category: "Design",
    level: "Intermédiaire",
    duration: "8h 15min",
    students: 1920,
    rating: 4.9,
    reviews: 456,
    price: 75,
    originalPrice: 120,
    image: josephImg, // Photo de Joseph pour son cours Design UI/UX
    description: "Maîtrisez les principes du design UI/UX et créez des interfaces modernes",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    bestseller: false
  },
  {
    id: 3,
    title: "Marketing Digital & SEO",
    instructor: "Aganze lushaka",
    category: "Marketing",
    level: "Débutant",
    duration: "15h 45min",
    students: 3210,
    rating: 4.7,
    reviews: 1234,
    price: 95,
    originalPrice: 160,
    image: didierImg, // Photo de Didier pour le cours Marketing (besoin d'une photo d'Aganze)
    description: "Stratégies complètes de marketing digital et optimisation SEO",
    skills: ["SEO", "Google Ads", "Analytics", "Social Media"],
    bestseller: true
  },
  {
    id: 4,
    title: "Python pour Data Science",
    instructor: "Gloddy mimbu",
    category: "Développement",
    level: "Intermédiaire",
    duration: "18h 20min",
    students: 1560,
    rating: 4.8,
    reviews: 789,
    price: 110,
    originalPrice: 180,
    image: glodyImg, // Photo de Glody pour son cours Python Data Science
    description: "Analysez des données et créez des modèles avec Python",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
    bestseller: false
  },
  {
    id: 5,
    title: "Photographie Portrait Professionnelle",
    instructor: "henock mbunga",
    category: "Photographie",
    level: "Avancé",
    duration: "10h 30min",
    students: 890,
    rating: 4.9,
    reviews: 234,
    price: 125,
    originalPrice: 200,
    image: henockImg, // Photo de Henock pour son cours Photographie
    description: "Techniques avancées de photographie portrait en studio et extérieur",
    skills: ["Portrait", "Éclairage", "Retouche", "Direction artistique"],
    bestseller: false
  },
  {
    id: 6,
    title: "Anglais Business Avancé",
    instructor: "Lucie migabo",
    category: "Langues",
    level: "Avancé",
    duration: "25h 00min",
    students: 2340,
    rating: 4.6,
    reviews: 567,
    price: 80,
    originalPrice: 130,
    image: lucieImg, // Photo de Lucie pour son cours Anglais Business
    description: "Perfectionnez votre anglais professionnel pour les affaires",
    skills: ["Business English", "Présentation", "Négociation", "Email"],
    bestseller: true
  }
];

const categories = ["Tous", "Développement", "Design", "Marketing", "Photographie", "Langues", "Business"];
const levels = ["Tous", "Débutant", "Intermédiaire", "Avancé"];
const durations = ["Tous", "0-5h", "5-10h", "10-20h", "20h+"];

const Cours = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedLevel, setSelectedLevel] = useState('Tous');
  const [selectedDuration, setSelectedDuration] = useState('Tous');
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  
  // NOUVEAUX ÉTATS POUR LE MODAL DE PAIEMENT
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showPayment, setShowPayment] = useState<boolean>(false);

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

  const filteredCourses = courses
    .filter(course => {
      return (
        (selectedCategory === 'Tous' || course.category === selectedCategory) &&
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

  // GESTION DU MODAL DE PAIEMENT
  const handleStartCourse = (course: Course) => {
    setSelectedCourse(course);
    setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Découvrez nos
              <span className="text-blue-600"> cours en ligne</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Plus de 10,000 cours dispensés par des experts pour développer vos compétences et accélérer votre carrière.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un cours, instructeur..."
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
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* IMAGE CLIQUABLE VERS LA PAGE DÉTAIL */}
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

                  {/* TITRE CLIQUABLE VERS LA PAGE DÉTAIL */}
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
                      {/* BOUTON VOIR DÉTAILS */}
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

          {/* Load More Button */}
          {filteredCourses.length > 0 && (
            <div className="text-center mt-12">
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-semibold">
                Charger plus de cours
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun cours trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Popular Categories CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explorez par catégorie
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos catégories les plus populaires
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(1, 5).map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
              >
                <Award className="w-8 h-8 mx-auto mb-2" />
                <span className="font-semibold">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Prêt à commencer votre parcours d'apprentissage ?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Rejoignez plus de 50,000 étudiants qui ont déjà transformé leur carrière avec nos formations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Parcourir tous les cours
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Devenir instructeur
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DE PAIEMENT - AVEC UN WRAPPER MODAL */}
      {showPayment && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Finaliser l'achat</h2>
                <button 
                  onClick={handleClosePayment}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">{selectedCourse.title}</h3>
                <p className="text-gray-600 text-sm">Par {selectedCourse.instructor}</p>
                <div className="flex items-center mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm">{selectedCourse.rating} ({selectedCourse.reviews} avis)</span>
                </div>
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span>Prix du cours</span>
                  <span className="font-semibold">${selectedCourse.price}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span>${selectedCourse.price}</span>
                </div>
              </div>
              
              {/* COMPOSANT PAYMENTMOBILE INTÉGRÉ */}
              <PaymentMobile
                amount={selectedCourse.price * 2500} // Conversion USD vers FC (approximative)
                reference={`COURSE-${selectedCourse.id}-${Date.now()}`}
                courseTitle={selectedCourse.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cours;