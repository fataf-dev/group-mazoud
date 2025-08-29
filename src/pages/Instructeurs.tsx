import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Users, BookOpen, Award, MapPin, Globe, Filter, ChevronDown, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// IMPORTEZ LES DONNÉES DEPUIS LE FICHIER CENTRALISÉ
import { instructors } from '../data/instructors';

const categories = ["Tous", "Développement", "Design", "Marketing", "Photographie", "Langues", "Business"];
const sortOptions = [
  { value: "rating", label: "Mieux notés" },
  { value: "students", label: "Plus d'étudiants" },
  { value: "courses", label: "Plus de cours" },
  { value: "experience", label: "Plus d'expérience" }
];

const Instructeurs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  
  // États pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Nombre d'instructeurs par page

  const filteredInstructors = instructors
    .filter(instructor => {
      return (
        (selectedCategory === 'Tous' || instructor.category === selectedCategory) &&
        (instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         instructor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         instructor.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'students':
          return b.students - a.students;
        case 'courses':
          return b.courses - a.courses;
        case 'experience':
          return parseInt(b.experience) - parseInt(a.experience);
        default:
          return 0;
      }
    });

  // Calcul de la pagination
  const totalPages = Math.ceil(filteredInstructors.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInstructors = filteredInstructors.slice(indexOfFirstItem, indexOfLastItem);

  // Fonctions de navigation
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Reset pagination when filters change
  const handleFilterChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const handleSearchChange = (newSearch: string) => {
    setSearchTerm(newSearch);
    setCurrentPage(1);
  };

  // Générer les numéros de pages à afficher
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Nos
              <span className="text-blue-600"> instructeurs experts</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Apprenez auprès de professionnels reconnus et d'experts dans leur domaine. Plus de 500 instructeurs certifiés vous accompagnent.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un instructeur, spécialité..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
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

            {/* Filters */}
            <div className={`flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto ${showFilters ? 'block' : 'hidden lg:flex'}`}>
              <select
                value={selectedCategory}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Sort and Results Count */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">
                <span className="font-semibold">{filteredInstructors.length}</span> instructeurs
                {totalPages > 1 && (
                  <span className="ml-2">
                    (Page {currentPage} sur {totalPages})
                  </span>
                )}
              </span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Instructeurs experts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Pays représentés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.8★</div>
              <div className="text-blue-100">Note moyenne</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100k+</div>
              <div className="text-blue-100">Étudiants formés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentInstructors.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentInstructors.map((instructor) => (
                  <Link
                    key={instructor.id}
                    to={`/instructeurs/${instructor.id}`}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden block"
                  >
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white text-center">
                        <div className="relative inline-block">
                          <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                          />
                          {instructor.verified && (
                            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
                              <Award className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mt-4 mb-1">{instructor.name}</h3>
                        <p className="text-blue-100 text-sm">{instructor.title}</p>
                        <div className="flex items-center justify-center space-x-1 mt-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{instructor.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Rating and Stats */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-semibold">{instructor.rating}</span>
                          <span className="text-gray-500 text-sm">({instructor.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{instructor.students.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {instructor.bio}
                      </p>

                      {/* Specialties */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {instructor.specialties.slice(0, 4).map((specialty, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Course Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                        <div>
                          <div className="font-semibold text-gray-900">{instructor.courses}</div>
                          <div className="text-xs text-gray-500">Cours</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{instructor.totalHours}h</div>
                          <div className="text-xs text-gray-500">Contenu</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{instructor.experience}</div>
                          <div className="text-xs text-gray-500">Expérience</div>
                        </div>
                      </div>

                      {/* Top Course */}
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Cours populaire:</p>
                        <p className="font-medium text-sm text-gray-900 line-clamp-2">{instructor.topCourse}</p>
                        <div className="flex items-center space-x-1 mt-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" />
                          <span>{instructor.topCourseStudents ? instructor.topCourseStudents.toLocaleString() : 0} étudiants</span>
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Langues:</p>
                        <div className="flex flex-wrap gap-1">
                          {instructor.languages.map((lang, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <div className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-center text-sm">
                          Voir le profil
                        </div>
                        <div className="flex items-center justify-center border border-gray-300 text-gray-700 py-2 px-4 rounded-lg">
                          <PlayCircle className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-2">
                  {/* Bouton Précédent */}
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Précédent</span>
                  </button>

                  {/* Numéros de pages */}
                  <div className="flex space-x-1">
                    {getPageNumbers().map((pageNumber, index) => (
                      <button
                        key={index}
                        onClick={() => typeof pageNumber === 'number' && goToPage(pageNumber)}
                        disabled={pageNumber === '...'}
                        className={`px-4 py-2 rounded-lg transition-all ${
                          pageNumber === currentPage
                            ? 'bg-blue-600 text-white font-semibold'
                            : pageNumber === '...'
                            ? 'text-gray-400 cursor-default'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    ))}
                  </div>

                  {/* Bouton Suivant */}
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
                    }`}
                  >
                    <span className="hidden sm:inline">Suivant</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            /* No Results */
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun instructeur trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Become Instructor CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Vous êtes un expert dans votre domaine ?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Rejoignez notre communauté d'instructeurs et partagez vos connaissances avec des milliers d'étudiants à travers le monde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/devenir-instructeur"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Devenir instructeur
              </Link>
              <Link 
                to="/instructeur/dashboard"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transform hover:scale-105 transition-all duration-200 shadow-lg border-2 border-white/20"
              >
                Interface instructeur
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructeurs;