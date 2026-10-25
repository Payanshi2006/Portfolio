import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-50 text-charcoal-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
