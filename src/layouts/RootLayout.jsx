import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Team from '../pages/Team';
import Course from '../pages/Course';
import Contact from '../pages/Contact';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="team"><Team /></section>
        <section id="course"><Course /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
