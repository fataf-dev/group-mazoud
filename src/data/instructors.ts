// src/data/instructors.ts

export interface Instructor {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  location: string;
  rating: number;
  reviews: number;
  students: number;
  courses: number;
  totalHours: number;
  image: string;
  bio: string;
  fullBio?: string;
  experience: string;
  languages: string[];
  topCourse: string;
  topCourseStudents: number;
  verified: boolean;
  category: string;
  email?: string;
  certifications?: string[];
  achievements?: string[];
}

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Jean-Pierre Mukendi",
    title: "Expert Développeur Full Stack",
    specialties: ["React", "Node.js", "JavaScript", "Python"],
    location: "Kinshasa, RDC",
    rating: 4.9,
    reviews: 2847,
    students: 15640,
    courses: 12,
    totalHours: 148,
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Développeur avec 8+ ans d'expérience dans les technologies web modernes. Ancien lead developer chez Google.",
    fullBio: "Jean-Pierre Mukendi est un développeur Full Stack passionné avec plus de 8 années d'expérience dans le développement d'applications web modernes. Ancien lead developer chez Google, il a dirigé des équipes de développement sur des projets à grande échelle touchant des millions d'utilisateurs. Spécialisé dans l'écosystème JavaScript et Python, Jean-Pierre maîtrise parfaitement React, Node.js, Express, MongoDB, et les architectures microservices. Il est reconnu pour sa capacité à expliquer des concepts complexes de manière simple et accessible.",
    experience: "8 ans",
    languages: ["Français", "Anglais", "Lingala"],
    topCourse: "Formation complète React & JavaScript",
    topCourseStudents: 2840,
    verified: true,
    category: "Développement",
    email: "jean-pierre@exemple.com",
    certifications: ["Google Developer Expert", "AWS Certified Solutions Architect", "Microsoft Azure Developer"],
    achievements: [
      "Plus de 15,000 étudiants formés",
      "Note moyenne de 4.9/5",
      "Ancien Lead Developer chez Google",
      "Speaker dans 10+ conférences tech"
    ]
  },
  {
    id: 2,
    name: "Dr. Marie Dubois",
    title: "Designer UI/UX Senior",
    specialties: ["UI Design", "UX Research", "Figma", "Adobe Creative"],
    location: "Paris, France",
    rating: 4.8,
    reviews: 1923,
    students: 12450,
    courses: 8,
    totalHours: 96,
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Designer primée avec une expertise en UX research. Ancienne Head of Design chez Airbnb.",
    fullBio: "Dr. Marie Dubois est une designer UI/UX reconnue internationalement avec un doctorat en Design d'Interaction. Ancienne Head of Design chez Airbnb, elle a révolutionné l'expérience utilisateur de la plateforme, contribuant à son succès mondial. Spécialisée en recherche utilisateur et design thinking, Marie combine parfaitement créativité et méthodologie scientifique. Elle a remporté plusieurs prix internationaux de design et intervient régulièrement dans les plus grandes conférences design mondiales.",
    experience: "10 ans",
    languages: ["Français", "Anglais"],
    topCourse: "Design UI/UX avec Figma",
    topCourseStudents: 1920,
    verified: true,
    category: "Design",
    email: "marie@exemple.com",
    certifications: ["Google UX Design Certificate", "Adobe Certified Expert", "Design Thinking Facilitator"],
    achievements: [
      "Ex-Head of Design chez Airbnb",
      "Prix UX Design Award 2023",
      "12,000+ designers formés",
      "Docteur en Design d'Interaction"
    ]
  },
  {
    id: 3,
    name: "David Matondo",
    title: "Spécialiste Marketing Digital",
    specialties: ["SEO", "Google Ads", "Analytics", "Content Marketing"],
    location: "Lubumbashi, RDC",
    rating: 4.7,
    reviews: 1456,
    students: 9870,
    courses: 15,
    totalHours: 189,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Expert en marketing digital avec une spécialisation en SEO. Consultant pour de grandes marques internationales.",
    fullBio: "David Matondo est un expert en marketing digital reconnu avec plus de 6 années d'expérience dans l'optimisation de la visibilité en ligne. Spécialisé en SEO et Google Ads, il a aidé des centaines d'entreprises à augmenter leur trafic organique de plus de 300%. Consultant pour de grandes marques internationales, David maîtrise parfaitement les stratégies de content marketing, l'analyse de données et les campagnes publicitaires payantes. Il est certifié Google Ads et Google Analytics.",
    experience: "6 ans",
    languages: ["Français", "Anglais", "Swahili"],
    topCourse: "Marketing Digital & SEO",
    topCourseStudents: 3210,
    verified: true,
    category: "Marketing",
    email: "david@exemple.com",
    certifications: ["Google Ads Certified", "Google Analytics Certified", "HubSpot Content Marketing"],
    achievements: [
      "Consultant pour 50+ marques",
      "Augmentation moyenne de 300% du trafic",
      "Expert SEO certifié Google",
      "Plus de 9,000 marketeurs formés"
    ]
  },
  {
    id: 4,
    name: "Dr. Sarah Johnson",
    title: "Data Scientist",
    specialties: ["Python", "Machine Learning", "Data Analysis", "AI"],
    location: "Londres, UK",
    rating: 4.9,
    reviews: 987,
    students: 7650,
    courses: 6,
    totalHours: 112,
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "PhD en Computer Science, spécialisée en Intelligence Artificielle. Ancienne Senior Data Scientist chez Tesla.",
    fullBio: "Dr. Sarah Johnson est une data scientist de renommée mondiale avec un PhD en Computer Science de Stanford. Ancienne Senior Data Scientist chez Tesla, elle a développé des algorithmes d'intelligence artificielle utilisés dans les véhicules autonomes. Spécialisée en machine learning et deep learning, Sarah maîtrise Python, TensorFlow, PyTorch et les techniques avancées d'analyse de données. Elle a publié plus de 20 articles scientifiques et intervient régulièrement dans les conférences AI/ML les plus prestigieuses.",
    experience: "12 ans",
    languages: ["Anglais", "Français"],
    topCourse: "Python pour Data Science",
    topCourseStudents: 1560,
    verified: true,
    category: "Développement",
    email: "sarah@exemple.com",
    certifications: ["TensorFlow Developer Certificate", "AWS Machine Learning Specialty", "Microsoft Azure AI Engineer"],
    achievements: [
      "PhD Computer Science - Stanford",
      "Ex-Senior Data Scientist chez Tesla",
      "20+ publications scientifiques",
      "7,000+ data scientists formés"
    ]
  },
  {
    id: 5,
    name: "Antoine Kalonji",
    title: "Photographe Professionnel",
    specialties: ["Portrait", "Studio", "Lightroom", "Photoshop"],
    location: "Goma, RDC",
    rating: 4.8,
    reviews: 654,
    students: 4320,
    courses: 9,
    totalHours: 87,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Photographe professionnel primé, spécialisé en portrait et photographie de mode. Plus de 15 ans d'expérience.",
    fullBio: "Antoine Kalonji est un photographe professionnel primé avec plus de 15 années d'expérience dans la photographie de portrait et de mode. Ses œuvres ont été exposées dans plusieurs galeries internationales et il a travaillé avec de nombreuses personnalités et marques prestigieuses. Maître dans l'art de l'éclairage et expert en post-production avec Lightroom et Photoshop, Antoine enseigne ses techniques avec passion. Il est reconnu pour son approche unique qui combine technique parfaite et créativité artistique.",
    experience: "15 ans",
    languages: ["Français", "Anglais", "Swahili"],
    topCourse: "Photographie Portrait Professionnelle",
    topCourseStudents: 890,
    verified: true,
    category: "Photographie",
    email: "antoine@exemple.com",
    certifications: ["Adobe Certified Expert Photoshop", "Professional Photographers of America", "Canon Professional Services"],
    achievements: [
      "Photographe primé internationalement",
      "Expositions dans 5 pays",
      "15+ ans d'expérience",
      "4,000+ photographes formés"
    ]
  },
  {
    id: 6,
    name: "Emma Thompson",
    title: "Professeure d'Anglais Certifiée",
    specialties: ["Business English", "IELTS", "TOEFL", "Communication"],
    location: "New York, USA",
    rating: 4.6,
    reviews: 2134,
    students: 18750,
    courses: 20,
    totalHours: 234,
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Professeure d'anglais certifiée avec une spécialisation en Business English. Plus de 20 ans d'enseignement international.",
    fullBio: "Emma Thompson est une professeure d'anglais certifiée avec plus de 20 années d'expérience dans l'enseignement international. Spécialisée en Business English et préparation aux examens IELTS/TOEFL, elle a aidé des milliers d'étudiants à atteindre leurs objectifs linguistiques. Emma a enseigné dans 15 pays différents et maîtrise parfaitement les besoins spécifiques des apprenants non-natifs. Elle combine méthodes traditionnelles et approches innovantes pour un apprentissage efficace et engageant.",
    experience: "20 ans",
    languages: ["Anglais", "Français", "Espagnol"],
    topCourse: "Anglais Business Avancé",
    topCourseStudents: 2340,
    verified: true,
    category: "Langues",
    email: "emma@exemple.com",
    certifications: ["TESOL Certified", "Cambridge CELTA", "IELTS Official Examiner"],
    achievements: [
      "20+ ans d'enseignement international",
      "Enseigné dans 15 pays",
      "18,000+ étudiants formés",
      "Examinatrice officielle IELTS"
    ]
  }
];

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  instructorId: number;
  duration: string;
  level: string;
  students: number;
  rating: number;
  price: number;
  image: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Formation complète React & JavaScript",
    description: "Maîtrisez React de zéro à expert avec des projets pratiques",
    instructor: "Jean-Pierre Mukendi",
    instructorId: 1,
    duration: "45h",
    level: "Débutant à Avancé",
    students: 2840,
    rating: 4.9,
    price: 89,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Node.js et Express - Backend Moderne",
    description: "Créez des APIs robustes avec Node.js et Express",
    instructor: "Jean-Pierre Mukendi",
    instructorId: 1,
    duration: "32h",
    level: "Intermédiaire",
    students: 1540,
    rating: 4.8,
    price: 79,
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Python Full Stack Development",
    description: "Développez des applications complètes avec Python et Django",
    instructor: "Jean-Pierre Mukendi",
    instructorId: 1,
    duration: "38h",
    level: "Intermédiaire",
    students: 1230,
    rating: 4.7,
    price: 85,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "Design UI/UX avec Figma",
    description: "Créez des interfaces modernes et intuitives",
    instructor: "Dr. Marie Dubois",
    instructorId: 2,
    duration: "28h",
    level: "Débutant",
    students: 1920,
    rating: 4.8,
    price: 69,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    title: "UX Research et Design Thinking",
    description: "Maîtrisez les méthodes de recherche utilisateur",
    instructor: "Dr. Marie Dubois",
    instructorId: 2,
    duration: "22h",
    level: "Intermédiaire",
    students: 890,
    rating: 4.9,
    price: 79,
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    title: "Marketing Digital & SEO",
    description: "Optimisez votre visibilité en ligne",
    instructor: "David Matondo",
    instructorId: 3,
    duration: "35h",
    level: "Débutant à Avancé",
    students: 3210,
    rating: 4.7,
    price: 75,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 7,
    title: "Google Ads & Campagnes Payantes",
    description: "Créez des campagnes publicitaires rentables",
    instructor: "David Matondo",
    instructorId: 3,
    duration: "25h",
    level: "Intermédiaire",
    students: 1560,
    rating: 4.6,
    price: 65,
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 8,
    title: "Analytics et Mesure de Performance",
    description: "Analysez et optimisez vos performances marketing",
    instructor: "David Matondo",
    instructorId: 3,
    duration: "20h",
    level: "Intermédiaire",
    students: 1100,
    rating: 4.8,
    price: 55,
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 9,
    title: "Python pour Data Science",
    description: "Analysez des données avec Python et ses librairies",
    instructor: "Dr. Sarah Johnson",
    instructorId: 4,
    duration: "40h",
    level: "Débutant à Avancé",
    students: 1560,
    rating: 4.9,
    price: 95,
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 10,
    title: "Machine Learning avec TensorFlow",
    description: "Créez des modèles d'intelligence artificielle",
    instructor: "Dr. Sarah Johnson",
    instructorId: 4,
    duration: "45h",
    level: "Avancé",
    students: 890,
    rating: 4.8,
    price: 125,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 11,
    title: "Deep Learning et Réseaux de Neurones",
    description: "Maîtrisez les réseaux de neurones profonds",
    instructor: "Dr. Sarah Johnson",
    instructorId: 4,
    duration: "50h",
    level: "Expert",
    students: 654,
    rating: 4.9,
    price: 145,
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 12,
    title: "Photographie Portrait Professionnelle",
    description: "Maîtrisez l'art du portrait en studio et en extérieur",
    instructor: "Antoine Kalonji",
    instructorId: 5,
    duration: "30h",
    level: "Débutant à Avancé",
    students: 890,
    rating: 4.8,
    price: 85,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 13,
    title: "Éclairage et Composition Photographique",
    description: "Perfectionnez vos techniques d'éclairage",
    instructor: "Antoine Kalonji",
    instructorId: 5,
    duration: "25h",
    level: "Intermédiaire",
    students: 567,
    rating: 4.7,
    price: 75,
    image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 14,
    title: "Post-Production avec Lightroom & Photoshop",
    description: "Sublimez vos photos avec la retouche professionnelle",
    instructor: "Antoine Kalonji",
    instructorId: 5,
    duration: "35h",
    level: "Intermédiaire",
    students: 723,
    rating: 4.9,
    price: 95,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 15,
    title: "Anglais Business Avancé",
    description: "Perfectionnez votre anglais professionnel",
    instructor: "Emma Thompson",
    instructorId: 6,
    duration: "40h",
    level: "Intermédiaire à Avancé",
    students: 2340,
    rating: 4.6,
    price: 65,
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 16,
    title: "Préparation IELTS Intensive",
    description: "Préparez-vous efficacement au test IELTS",
    instructor: "Emma Thompson",
    instructorId: 6,
    duration: "35h",
    level: "Intermédiaire",
    students: 1890,
    rating: 4.7,
    price: 75,
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 17,
    title: "Communication Professionnelle en Anglais",
    description: "Communiquez efficacement dans un contexte professionnel",
    instructor: "Emma Thompson",
    instructorId: 6,
    duration: "28h",
    level: "Débutant à Intermédiaire",
    students: 1678,
    rating: 4.5,
    price: 55,
    image: "https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

// Fonction helper pour récupérer un instructeur par son ID
export const getInstructorById = (id: number): Instructor | undefined => {
  return instructors.find(instructor => instructor.id === id);
};

// Fonction helper pour récupérer les cours d'un instructeur
export const getCoursesByInstructorId = (instructorId: number): Course[] => {
  return courses.filter(course => course.instructorId === instructorId);
};

// Fonction helper pour récupérer un cours par son ID
export const getCourseById = (id: number): Course | undefined => {
  return courses.find(course => course.id === id);
};