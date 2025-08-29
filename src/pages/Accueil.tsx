import React from 'react';
import Hero from '../components/Hero';
import PopularCourses from '../components/PopularCourses';
import Categories from '../components/Categories';
import Instructors from '../components/Instructors';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';

const Accueil = () => {
  return (
    <>
      <Hero />
      <Stats />
      <PopularCourses />
      <Categories />
      <Instructors />
      <Testimonials />
    </>
  );
};

export default Accueil;