import React, { useState } from 'react';
import { Mail, Phone, Home, Briefcase, User, Menu, X } from 'lucide-react';
import '../App.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Portfolio() {

  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
