import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const stats = [
  {
    id: 1,
    number: "50,000+",
    label: "Étudiants actifs",
    icon: Users,
    color: "text-blue-600"
  },
  {
    id: 2,
    number: "10,000+",
    label: "Cours disponibles",
    icon: BookOpen,
    color: "text-green-600"
  },
  {
    id: 3,
    number: "500+",
    label: "Instructeurs experts",
    icon: Award,
    color: "text-purple-600"
  },
  {
    id: 4,
    number: "40+",
    label: "Pays desservis",
    icon: Globe,
    color: "text-orange-600"
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-gray-50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;