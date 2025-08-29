import React from 'react';
import { Code, Palette, BarChart3, Camera, Globe, Brain, Briefcase, Music } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Développement",
    icon: Code,
    courses: 2453,
    color: "bg-blue-100 text-blue-600",
    hoverColor: "hover:bg-blue-600 hover:text-white"
  },
  {
    id: 2,
    name: "Design",
    icon: Palette,
    courses: 1876,
    color: "bg-purple-100 text-purple-600",
    hoverColor: "hover:bg-purple-600 hover:text-white"
  },
  {
    id: 3,
    name: "Business",
    icon: Briefcase,
    courses: 3241,
    color: "bg-green-100 text-green-600",
    hoverColor: "hover:bg-green-600 hover:text-white"
  },
  {
    id: 4,
    name: "Marketing",
    icon: BarChart3,
    courses: 1654,
    color: "bg-orange-100 text-orange-600",
    hoverColor: "hover:bg-orange-600 hover:text-white"
  },
  {
    id: 5,
    name: "Photographie",
    icon: Camera,
    courses: 987,
    color: "bg-pink-100 text-pink-600",
    hoverColor: "hover:bg-pink-600 hover:text-white"
  },
  {
    id: 6,
    name: "Langues",
    icon: Globe,
    courses: 2109,
    color: "bg-indigo-100 text-indigo-600",
    hoverColor: "hover:bg-indigo-600 hover:text-white"
  },
  {
    id: 7,
    name: "Sciences",
    icon: Brain,
    courses: 1432,
    color: "bg-teal-100 text-teal-600",
    hoverColor: "hover:bg-teal-600 hover:text-white"
  },
  {
    id: 8,
    name: "Musique",
    icon: Music,
    courses: 876,
    color: "bg-red-100 text-red-600",
    hoverColor: "hover:bg-red-600 hover:text-white"
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explorez par catégorie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez le domaine qui vous passionne parmi notre large sélection de catégories de formation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`${category.color} ${category.hoverColor} rounded-xl p-6 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-sm opacity-80">
                  {category.courses.toLocaleString()} cours
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-semibold">
            Voir toutes les catégories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;