// import React, { useState } from 'react';
// import { Mail, Phone, Home, Briefcase, User, Menu, X } from 'lucide-react';
import '../App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';

export default function Portfolio() {

  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
