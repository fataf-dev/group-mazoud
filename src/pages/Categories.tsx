import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // AJOUT DE L'IMPORT LINK
import { Search, Filter, Code, Palette, BarChart3, Camera, Globe, Brain, Briefcase, Music, BookOpen, Users, Star } from 'lucide-react';

const allCategories = [
  {
    id: 1,
    name: "Développement",
    icon: Code,
    courses: 2453,
    students: 45678,
    rating: 4.8,
    color: "bg-blue-100 text-blue-600",
    hoverColor: "hover:bg-blue-600 hover:text-white",
    description: "Apprenez les langages de programmation les plus demandés",
    subcategories: ["JavaScript", "Python", "React", "Node.js", "PHP"]
  },
  {
    id: 2,
    name: "Design",
    icon: Palette,
    courses: 1876,
    students: 32456,
    rating: 4.7,
    color: "bg-purple-100 text-purple-600",
    hoverColor: "hover:bg-purple-600 hover:text-white",
    description: "Maîtrisez les outils et principes du design moderne",
    subcategories: ["UI/UX", "Photoshop", "Illustrator", "Figma", "Canva"]
  },
  {
    id: 3,
    name: "Business",
    icon: Briefcase,
    courses: 3241,
    students: 67890,
    rating: 4.6,
    color: "bg-green-100 text-green-600",
    hoverColor: "hover:bg-green-600 hover:text-white",
    description: "Développez vos compétences entrepreneuriales et managériales",
    subcategories: ["Management", "Entrepreneurship", "Leadership", "Strategy", "Finance"]
  },
  {
    id: 4,
    name: "Marketing",
    icon: BarChart3,
    courses: 1654,
    students: 28934,
    rating: 4.8,
    color: "bg-orange-100 text-orange-600",
    hoverColor: "hover:bg-orange-600 hover:text-white",
    description: "Maîtrisez les stratégies marketing digitales et traditionnelles",
    subcategories: ["Digital Marketing", "SEO", "Social Media", "Content Marketing", "Analytics"]
  },
  {
    id: 5,
    name: "Photographie",
    icon: Camera,
    courses: 987,
    students: 15678,
    rating: 4.9,
    color: "bg-pink-100 text-pink-600",
    hoverColor: "hover:bg-pink-600 hover:text-white",
    description: "Capturez et éditez des images professionnelles",
    subcategories: ["Portrait", "Paysage", "Studio", "Lightroom", "Photoshop"]
  },
  {
    id: 6,
    name: "Langues",
    icon: Globe,
    courses: 2109,
    students: 41235,
    rating: 4.7,
    color: "bg-indigo-100 text-indigo-600",
    hoverColor: "hover:bg-indigo-600 hover:text-white",
    description: "Apprenez de nouvelles langues avec des méthodes modernes",
    subcategories: ["Anglais", "Français", "Espagnol", "Allemand", "Chinois"]
  },
  {
    id: 7,
    name: "Sciences",
    icon: Brain,
    courses: 1432,
    students: 23456,
    rating: 4.6,
    color: "bg-teal-100 text-teal-600",
    hoverColor: "hover:bg-teal-600 hover:text-white",
    description: "Explorez les mystères de la science et de la recherche",
    subcategories: ["Physique", "Chimie", "Biologie", "Mathématiques", "Informatique"]
  },
  {
    id: 8,
    name: "Musique",
    icon: Music,
    courses: 876,
    students: 12890,
    rating: 4.8,
    color: "bg-red-100 text-red-600",
    hoverColor: "hover:bg-red-600 hover:text-white",
    description: "Apprenez à jouer des instruments et composer",
    subcategories: ["Piano", "Guitare", "Chant", "Composition", "Production"]
  }
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('courses');

  const filteredCategories = allCategories
    .filter(category => 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'courses':
          return b.courses - a.courses;
        case 'students':
          return b.students - a.students;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Explorez toutes nos
              <span className="text-blue-600"> catégories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre large gamme de formations organisées par domaines d'expertise pour trouver exactement ce que vous cherchez.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une catégorie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="courses">Nombre de cours</option>
                <option value="students">Nombre d'étudiants</option>
                <option value="rating">Note moyenne</option>
                <option value="name">Nom (A-Z)</option>
              </select>
            </div>
            
            <div className="text-gray-600">
              <span className="font-semibold">{filteredCategories.length}</span> catégories trouvées
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                >
                  {/* SECTION CLIQUABLE VERS LES COURS DE LA CATÉGORIE */}
                  <Link to={`/categories/${encodeURIComponent(category.name)}`}>
                    <div className={`${category.color} ${category.hoverColor} p-8 transition-all duration-300`}>
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-12 h-12" />
                        <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-semibold">{category.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 mb-4">{category.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{category.courses.toLocaleString()} cours</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{category.students.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Sous-catégories populaires:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.slice(0, 3).map((sub, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                          >
                            {sub}
                          </span>
                        ))}
                        {category.subcategories.length > 3 && (
                          <span className="text-gray-500 text-xs px-3 py-1">
                            +{category.subcategories.length - 3} autres
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* BOUTON REMPLACÉ PAR UN LINK VERS LES COURS DE LA CATÉGORIE */}
                    <Link 
                      to={`/categories/${encodeURIComponent(category.name)}`}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                    >
                      Explorer les cours
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Vous ne trouvez pas votre domaine ?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nous ajoutons régulièrement de nouvelles catégories. Suggérez-nous les formations que vous aimeriez voir !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Suggérer une catégorie
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;