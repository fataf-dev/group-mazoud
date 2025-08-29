import React, { useState } from 'react';
import { Star, Clock, Users, Award, X, Smartphone } from 'lucide-react';

// Composant PaymentMobile
const PaymentMobile = ({ amount, reference, courseTitle }: { amount: number, reference: string, courseTitle: string }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const providers = [
    { id: 'orange', name: 'Orange Money', color: 'bg-orange-500' },
    { id: 'airtel', name: 'Airtel Money', color: 'bg-red-500' },
    { id: 'mpesa', name: 'M-Pesa', color: 'bg-green-500' },
  ];

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
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 w-full text-lg"
      >
        <Smartphone className="w-5 h-5" />
        <span>Acheter - {amount.toLocaleString()} FC</span>
      </button>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <h4 className="font-semibold text-gray-800 text-lg">Paiement Mobile</h4>
      <p className="text-sm text-gray-600">{courseTitle}</p>
      <p className="text-xl font-bold text-green-600">{amount.toLocaleString()} FC</p>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">Choisir l'opérateur</label>
        <div className="grid grid-cols-1 gap-2">
          {providers.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedProvider(p.id)}
              className={`p-3 rounded-lg border-2 transition-all text-sm ${
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

      {message && (
        <p className={`font-medium ${message.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}

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

// Import des images
import didierImg from '../components/image/didier.jpeg';
import josephImg from '../components/image/joseph.jpeg';
import beniImg from '../components/image/beni.jpeg';
import gloImg from '../components/image/glo.jpeg';

// Données des cours avec descriptions complètes
const courses = [
  {
    id: 1,
    title: "Développement Web Complet - React & Node.js",
    instructor: "Didier lushaka",
    rating: 4.9,
    students: 12459,
    duration: "42h 30min",
    price: "89$",
    originalPrice: "129$",
    image: didierImg, // Première image
    level: "Intermédiaire",
    bestseller: true,
    description: "Maîtrisez React et Node.js de A à Z avec des projets pratiques. Apprenez les concepts avancés du développement web moderne, la gestion d'état avec Redux, les API REST, et déployez vos applications en production.",
    skills: ["React", "Node.js", "JavaScript ES6+", "MongoDB", "Express", "Redux"],
    whatYouWillLearn: [
      "Créer des applications React complètes",
      "Développer des APIs avec Node.js et Express", 
      "Gérer les bases de données MongoDB",
      "Implémenter l'authentification JWT",
      "Déployer vos applications en production"
    ]
  },
  {
    id: 2,
    title: "Intelligence Artificielle et Machine Learning",
    instructor: "Joseph balibuno",
    rating: 4.8,
    students: 8932,
    duration: "38h 15min",
    price: "99$",
    originalPrice: "149$",
    image: josephImg, // Deuxième image
    level: "Avancé",
    bestseller: false,
    description: "Découvrez les secrets de l'Intelligence Artificielle et du Machine Learning. Créez des modèles prédictifs, analysez des données complexes et développez des solutions IA innovantes.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Deep Learning"],
    whatYouWillLearn: [
      "Comprendre les algorithmes de ML",
      "Créer des modèles prédictifs",
      "Analyser et visualiser des données",
      "Développer des réseaux de neurones",
      "Déployer des modèles en production"
    ]
  },
  {
    id: 3,
    title: "Design UX/UI : De Débutant à Expert",
    instructor: "benedicte okar",
    rating: 4.7,
    students: 15673,
    duration: "35h 45min",
    price: "79$",
    originalPrice: "119$",
    image: beniImg, // Troisième image
    level: "Débutant",
    bestseller: true,
    description: "Apprenez à créer des interfaces utilisateur exceptionnelles. Maîtrisez Figma, les principes UX/UI, le design thinking et créez des expériences utilisateur mémorables.",
    skills: ["Figma", "Adobe XD", "Prototypage", "Design System", "UX Research", "UI Design"],
    whatYouWillLearn: [
      "Maîtriser Figma et Adobe XD",
      "Créer des wireframes et prototypes",
      "Comprendre l'UX Research",
      "Développer des Design Systems",
      "Concevoir des interfaces modernes"
    ]
  },
  {
    id: 4,
    title: "Marketing Digital et Réseaux Sociaux",
    instructor: "Glo kuzimbu",
    rating: 4.6,
    students: 9876,
    duration: "28h 20min",
    price: "69$",
    originalPrice: "99$",
    image: gloImg, // Quatrième image
    level: "Débutant",
    bestseller: false,
    description: "Développez votre présence digitale et maîtrisez les stratégies marketing modernes. SEO, publicité payante, réseaux sociaux et analytics pour booster votre business.",
    skills: ["SEO", "Google Ads", "Facebook Ads", "Analytics", "Content Marketing", "Social Media"],
    whatYouWillLearn: [
      "Optimiser votre référencement SEO",
      "Créer des campagnes publicitaires",
      "Gérer les réseaux sociaux",
      "Analyser vos performances",
      "Développer votre stratégie digitale"
    ]
  }
];

const PopularCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleEnrollClick = (course: typeof courses[0]) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cours les plus populaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos formations les plus appréciées par nos étudiants et commencez votre parcours d'apprentissage dès aujourd'hui.
          </p>
        </div>

        {/* Grille des cours - affichage direct comme le premier code */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course.bestseller && (
                  <div className="absolute top-4 left-4 bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Bestseller
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {course.level}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-3">{course.instructor}</p>

                <div className="flex items-center mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center mb-4 text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{course.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                  <button 
                    onClick={() => handleEnrollClick(course)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
            Voir tous les cours
          </button>
        </div>
      </div>

      {/* Modal de détail et paiement - identique au second code */}
      {showModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col lg:flex-row">
              {/* Partie gauche - Résumé du cours */}
              <div className="flex-1 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedCourse.level}
                      </span>
                      {selectedCourse.bestseller && (
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                          ⭐ Bestseller
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedCourse.title}</h2>
                    <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
                  </div>
                  <button 
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold ml-4 flex-shrink-0"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6">
                  <img 
                    src={selectedCourse.image} 
                    alt={selectedCourse.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span>Par <span className="font-semibold">{selectedCourse.instructor}</span></span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{selectedCourse.rating}</span>
                    <span>({selectedCourse.students.toLocaleString()} étudiants)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Users className="w-5 h-5 text-green-600" />
                    <span>{selectedCourse.students.toLocaleString()} étudiants</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ce que vous allez apprendre</h3>
                  <div className="grid gap-3">
                    {selectedCourse.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Compétences acquises</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Partie droite - Paiement */}
              <div className="w-full lg:w-96 bg-gray-50 p-8 border-l">
                <div className="lg:sticky lg:top-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 border">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Inscription</h3>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <span className="text-3xl font-bold text-gray-900">{selectedCourse.price}</span>
                        <span className="text-xl text-gray-500 line-through">{selectedCourse.originalPrice}</span>
                      </div>
                      <div className="text-center">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          -{Math.round(((parseInt(selectedCourse.originalPrice.replace('$', '')) - parseInt(selectedCourse.price.replace('$', ''))) / parseInt(selectedCourse.originalPrice.replace('$', ''))) * 100)}% de réduction
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <PaymentMobile
                        amount={parseInt(selectedCourse.price.replace('$', '')) * 2500}
                        reference={`COURSE-${selectedCourse.id}-${Date.now()}`}
                        courseTitle={selectedCourse.title}
                      />
                    </div>

                    <div className="space-y-3 text-sm text-gray-600 border-t pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                        <span>Accès à vie au cours</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                        <span>Certificat de fin de formation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                        <span>Support instructeur</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                        <span>Ressources téléchargeables</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                        <span>Accès mobile et desktop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularCourses;