import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, MapPin, BookOpen, Award, Upload, FileText, Star, Users, Globe, CheckCircle, X } from 'lucide-react';

const DevenirInstructeur = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    localisation: '',
    titre: '',
    specialites: '',
    experience: '',
    diplomes: '',
    description: '',
    motivations: '',
    disponibilite: 'temps-partiel',
    langues: '',
    linkedIn: '',
    portfolio: '',
    accepteConditions: false,
    accepteEmails: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Candidature envoyée !</h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre candidature ! Notre équipe va l'examiner dans les 48h et vous contactera par email.
          </p>
          <Link 
            to="/instructeurs"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voir nos instructeurs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Devenez instructeur
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partagez votre expertise et inspirez des milliers d'étudiants à travers le monde. 
            Rejoignez notre communauté d'instructeurs passionnés.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Community</h3>
              <p className="text-blue-100 text-sm">Rejoignez 500+ instructeurs experts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Star className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Excellence</h3>
              <p className="text-blue-100 text-sm">Note moyenne de 4.8/5</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Globe className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Impact Global</h3>
              <p className="text-blue-100 text-sm">Étudiants dans 50+ pays</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Formulaire de candidature</h2>
              <p className="text-gray-600 mt-2">
                Remplissez ce formulaire pour postuler en tant qu'instructeur. Tous les champs marqués d'un * sont obligatoires.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Informations personnelles */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Informations personnelles
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+243 xxx xxx xxx"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Localisation *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="localisation"
                        value={formData.localisation}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ville, Pays"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Expertise professionnelle */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Expertise professionnelle
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Titre professionnel *
                    </label>
                    <input
                      type="text"
                      name="titre"
                      value={formData.titre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ex: Développeur Full Stack Senior, Designer UI/UX..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Spécialités *
                    </label>
                    <input
                      type="text"
                      name="specialites"
                      value={formData.specialites}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ex: React, Node.js, JavaScript, Python (séparez par des virgules)"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Années d'expérience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="1-2">1-2 ans</option>
                        <option value="3-5">3-5 ans</option>
                        <option value="6-10">6-10 ans</option>
                        <option value="10+">Plus de 10 ans</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Disponibilité
                      </label>
                      <select
                        name="disponibilite"
                        value={formData.disponibilite}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="temps-partiel">Temps partiel</option>
                        <option value="temps-plein">Temps plein</option>
                        <option value="freelance">Freelance</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Diplômes et certifications
                    </label>
                    <textarea
                      name="diplomes"
                      value={formData.diplomes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Listez vos diplômes, certifications et formations pertinentes..."
                    />
                  </div>
                </div>
              </div>

              {/* Présentation */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Présentation
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description professionnelle *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Décrivez votre parcours professionnel, vos réalisations et votre expertise..."
                    />
                    <p className="text-sm text-gray-500 mt-1">Cette description apparaîtra sur votre profil public.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Motivations pour enseigner *
                    </label>
                    <textarea
                      name="motivations"
                      value={formData.motivations}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Pourquoi souhaitez-vous devenir instructeur ? Qu'est-ce qui vous motive à partager vos connaissances ?"
                    />
                  </div>
                </div>
              </div>

              {/* Informations complémentaires */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  Informations complémentaires
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Langues parlées
                    </label>
                    <input
                      type="text"
                      name="langues"
                      value={formData.langues}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ex: Français (natif), Anglais (courant), Lingala"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profil LinkedIn
                    </label>
                    <input
                      type="url"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://linkedin.com/in/votre-profil"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio ou site web
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://votre-portfolio.com"
                    />
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-blue-600" />
                  Documents (optionnel)
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Glissez vos documents ici ou cliquez pour sélectionner</p>
                  <p className="text-sm text-gray-500">CV, diplômes, certifications (PDF, DOC, JPG - Max 5MB)</p>
                  <button
                    type="button"
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Choisir des fichiers
                  </button>
                </div>
              </div>

              {/* Conditions */}
              <div className="mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="accepteConditions"
                      checked={formData.accepteConditions}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-3 text-sm text-gray-700">
                      J'accepte les{' '}
                      <Link to="/conditions" className="text-blue-600 hover:text-blue-800">
                        conditions d'utilisation
                      </Link>{' '}
                      et la{' '}
                      <Link to="/confidentialite" className="text-blue-600 hover:text-blue-800">
                        politique de confidentialité
                      </Link>{' '}
                      *
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="accepteEmails"
                      checked={formData.accepteEmails}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-3 text-sm text-gray-700">
                      J'accepte de recevoir des emails d'information sur les opportunités d'enseignement
                    </label>
                  </div>
                </div>
              </div>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link
                  to="/instructeurs"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center"
                >
                  Annuler
                </Link>
                <button
                  type="submit"
                  disabled={isLoading || !formData.accepteConditions}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer ma candidature'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Avantages instructeur */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi enseigner avec nous ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rejoignez une plateforme qui valorise vos compétences et vous accompagne dans votre mission d'enseignement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Audience mondiale</h3>
              <p className="text-gray-600 text-sm">Enseignez à des étudiants du monde entier et développez votre impact.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support dédié</h3>
              <p className="text-gray-600 text-sm">Bénéficiez d'un accompagnement personnalisé pour créer vos cours.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reconnaissance</h3>
              <p className="text-gray-600 text-sm">Gagnez en visibilité et développez votre réputation d'expert.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevenirInstructeur;