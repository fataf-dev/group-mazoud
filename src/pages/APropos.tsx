import React from 'react';
import { Target, Eye, Users, Award, Heart, CheckCircle, Star, Globe } from 'lucide-react';

const APropos = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous nous engageons à fournir une éducation de la plus haute qualité avec des cours rigoureux et actualisés."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Notre équipe est animée par la passion de l'enseignement et de la transmission des connaissances."
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Nous créons un environnement d'apprentissage collaboratif où chacun peut s'épanouir."
    },
    {
      icon: Globe,
      title: "Accessibilité",
      description: "L'éducation de qualité doit être accessible à tous, partout dans le monde."
    }
  ];

  const teamMembers = [
    {
      name: "benedicte okar",
      role: "Directrice Pédagogique",
      image: "image/beni.jpeg",
      bio: "15 ans d'expérience dans l'éducation en ligne"
    },
    {
      name: "Didier lushaka",
      role: "Directeur Technique",
      image: "image/didier.jpeg",
      bio: "Expert en technologies éducatives"
    },
    {
      name: "Lucie migabo",
      role: "Responsable Contenu",
      image: "image/lucie.jpeg",
      bio: "Spécialiste en développement de curricula"
    },
    {
      name: "Gloddy mimbu",
      role: "Community Manager",
      image: "image/glody.jpeg",
      bio: "Passionné par l'accompagnement des apprenants"
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Étudiants actifs", icon: Users },
    { number: "10,000+", label: "Cours disponibles", icon: Award },
    { number: "500+", label: "Instructeurs experts", icon: Star },
    { number: "98%", label: "Taux de satisfaction", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              À propos de
              <span className="text-blue-600"> Groupe Mazenod</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Depuis 2020, nous révolutionnons l'apprentissage en ligne en offrant des formations de qualité supérieure accessibles à tous, partout dans le monde.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Notre Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Démocratiser l'accès à une éducation de qualité supérieure en proposant des formations pratiques, actuelles et dispensées par des experts reconnus dans leur domaine.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="w-8 h-8 text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Notre Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Devenir la référence en République Démocratique du Congo en matière de formation en ligne en créant un écosystème d'apprentissage innovant qui transforme des vies et accélère les carrières.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Équipe de travail"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold">4.8★</p>
                  <p className="text-sm opacity-90">Note moyenne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ces principes guident chacune de nos actions et définissent notre approche pédagogique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nos Réalisations</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Des chiffres qui témoignent de notre impact et de notre engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-blue-100">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les experts passionnés qui rendent possible cette aventure éducative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Rejoignez notre communauté d'apprenants
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Commencez votre parcours d'apprentissage dès aujourd'hui et découvrez tout ce que vous êtes capable d'accomplir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Découvrir nos cours
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Contacter notre équipe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;