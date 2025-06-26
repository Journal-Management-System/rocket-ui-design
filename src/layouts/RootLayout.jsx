import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Course from '../pages/Course';
import Contact from '../pages/Contact';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="course"><Course /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
