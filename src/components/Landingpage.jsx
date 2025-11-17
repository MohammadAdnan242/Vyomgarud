import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Highlights from '../components/Highlights';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Highlights />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;