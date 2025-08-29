import React from 'react';
import { Play, Star, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Apprenez avec les
                <span className="text-blue-600"> meilleurs experts</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Développez vos compétences avec plus de 10,000 cours en ligne dispensés par des instructeurs certifiés du monde entier.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Commencer maintenant
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                <Play className="w-5 h-5" />
                <span>Voir la démo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">50,000+ étudiants</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">10,000+ cours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-gray-600">4.8/5 étoiles</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="image/didier.jpeg"
                alt="Étudiante en ligne"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-orange-400 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Nouveau !
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-pulse">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">12 nouveaux cours</p>
                  <p className="text-sm text-gray-500">Cette semaine</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-8 bg-blue-600 text-white rounded-lg shadow-lg p-4 animate-bounce">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">4.9★</span>
              </div>
              <p className="text-sm opacity-90">Excellente qualité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;