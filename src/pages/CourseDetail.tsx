import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Users, 
  PlayCircle, 
  BookOpen, 
  Award,
  Download,
  Smartphone
} from 'lucide-react';

// Import des images - MÊME STRUCTURE QUE DANS COURS.TSX
import didierImg from '../components/image/didier.jpeg';
import lucieImg from '../components/image/lucie.jpeg';
import josephImg from '../components/image/joseph.jpeg';
import glodyImg from '../components/image/glody.jpeg';
import henockImg from '../components/image/henock.jpeg';
import beniImg from '../components/image/beni.jpeg';

// Interface Course
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
        <span>Acheter maintenant - {amount.toLocaleString()} FC</span>
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

// FONCTION POUR  L'IMAGE CORRECTE
const getCourseImage = (courseId: number) => {
  switch (courseId) {
    case 1: return didierImg;  // Formation complète React & JavaScript - Didier
    case 2: return josephImg;  // Design UI/UX avec Figma - Joseph
    case 3: return didierImg;  // Marketing Digital & SEO - Aganze (temporairement Didier)
    case 4: return glodyImg;   // Python pour Data Science - Glody
    case 5: return henockImg;  // Photographie Portrait - Henock
    case 6: return lucieImg;   // Anglais Business - Lucie
    default: return didierImg;
  }
};

// Données des cours AVEC LES BONNES IMAGES
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
    image: didierImg, // IMAGE IMPORTÉE DIRECTEMENT
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
    image: josephImg, // IMAGE IMPORTÉE DIRECTEMENT
    description: "Maîtrisez les principes du design UI/UX et créez des interfaces modernes",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    bestseller: false
  },
  {
    id: 3,
    title: "Marketing Digital & SEO",
    instructor: "Aganze didier",
    category: "Marketing",
    level: "Débutant",
    duration: "15h 45min",
    students: 3210,
    rating: 4.7,
    reviews: 1234,
    price: 95,
    originalPrice: 160,
    image: didierImg, // IMAGE IMPORTÉE DIRECTEMENT
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
    image: glodyImg, // IMAGE IMPORTÉE DIRECTEMENT
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
    image: henockImg, // IMAGE IMPORTÉE DIRECTEMENT
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
    image: lucieImg, // IMAGE IMPORTÉE DIRECTEMENT
    description: "Perfectionnez votre anglais professionnel pour les affaires",
    skills: ["Business English", "Présentation", "Négociation", "Email"],
    bestseller: true
  }
];

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id || '', 10);
  const course = courses.find(c => c.id === courseId);
  const navigate = useNavigate();

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Cours introuvable</h2>
          <p className="text-gray-500 mb-6">Le cours que vous recherchez n'existe pas.</p>
          <Link 
            to="/cours" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour aux cours
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bouton retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux cours
          </button>
        </div>
      </div>

      {/* Hero Section du cours */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contenu principal */}
            <div className="lg:col-span-2">
              {/* Badges */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {course.level}
                </span>
                {course.bestseller && (
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ Bestseller
                  </span>
                )}
              </div>

              {/* Titre */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Informations instructeur et stats */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Par <span className="font-semibold">{course.instructor}</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span>({course.reviews.toLocaleString()} avis)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span>{course.students.toLocaleString()} étudiants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Compétences acquises */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ce que vous allez apprendre
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenu du cours (simulé) */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contenu du cours
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((moduleNum) => (
                    <div key={moduleNum} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <PlayCircle className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold text-gray-900">
                            Module {moduleNum}: Introduction aux concepts essentiels
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>15 min</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Achat */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl shadow-lg p-6 border">
                  {/* Image du cours  */}
                  <div className="mb-6">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  {/* Prix */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        -{Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% de réduction
                      </span>
                    </div>
                  </div>

                  {/* Bouton d'achat */}
                  <div className="mb-6">
                    <PaymentMobile
                      amount={course.price * 2500} // Conversion USD vers FC
                      reference={`COURSE-${course.id}-${Date.now()}`}
                      courseTitle={course.title}
                    />
                  </div>

                  {/* Ce qui est inclus */}
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <PlayCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Accès à vie au cours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Ressources téléchargeables</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Certificat de fin de formation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Accès à la communauté</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section instructeur */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Votre instructeur
            </h3>
            <div className="flex items-start space-x-6">
              {/* PHOTO DE L'INSTRUCTEUR  */}
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={course.image} 
                  alt={course.instructor}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{course.instructor}</h4>
                <p className="text-gray-600 mb-4">
                  Expert en {course.category} avec plus de 10 ans d'expérience. 
                  Passionné par l'enseignement et le partage des connaissances.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>⭐ 4.8 (2,340 avis)</span>
                  <span>👥 12,450 étudiants</span>
                  <span>🎯 15 cours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;