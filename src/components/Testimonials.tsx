import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aganze Lushaka",
    role: "Développeuse Web",
    image: "image/didier.jpeg",
    rating: 5,
    text: "Les cours du Groupe Mazenod ont transformé ma carrière. La qualité de l'enseignement et le suivi personnalisé sont exceptionnels. Je recommande vivement !",
    course: "Développement Web Complet"
  },
  {
    id: 2,
    name: "benjamin",
    role: "Designer UX",
    image: "image/benji.jpeg",
    rating: 5,
    text: "Une plateforme fantastique avec des instructeurs de premier plan. J'ai acquis des compétences pratiques directement applicables dans mon travail quotidien.",
    course: "Design UX/UI"
  },
  {
    id: 3,
    name: "Gloddy mimbu",
    role: "Responsable Marketing",
    image: "image/glody.jpeg",
    rating: 5,
    text: "Les formations en marketing digital m'ont permis d'augmenter le ROI de mes campagnes de 300%. Content remarquable et très bien structuré !",
    course: "Marketing Digital"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos étudiants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos étudiants qui ont transformé leur carrière grâce à nos formations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-blue-600 font-medium">
                  Cours suivi : {testimonial.course}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">4.8/5 étoiles - Plus de 10,000 avis positifs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;