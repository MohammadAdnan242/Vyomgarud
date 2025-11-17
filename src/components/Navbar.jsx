import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 backdrop-blur-md ${
      isScrolled 
        ? 'bg-black/98 border-b border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.5)]' 
        : 'bg-black/95 border-b border-white/10'
    }`}>
      <div className="max-w-[1400px] mx-auto px-[7.6923%] py-5 flex items-center justify-between">
        <div 
          className="cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-2xl font-bold text-[#ff7b00] tracking-tight">VyomGarud</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => scrollToSection('about')} 
            className="relative text-white/70 text-base font-medium transition-colors duration-300 py-2 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff7b00] after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('products')} 
            className="relative text-white/70 text-base font-medium transition-colors duration-300 py-2 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff7b00] after:transition-all after:duration-300 hover:after:w-full"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('highlights')} 
            className="relative text-white/70 text-base font-medium transition-colors duration-300 py-2 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff7b00] after:transition-all after:duration-300 hover:after:w-full"
          >
            Highlights
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="relative text-white/70 text-base font-medium transition-colors duration-300 py-2 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff7b00] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </button>
        </div>

        <button 
          className="md:hidden bg-transparent border-none text-white cursor-pointer p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-black/98 border-t border-white/10 px-[7.6923%] py-5 gap-4">
          <button 
            onClick={() => scrollToSection('about')} 
            className="bg-transparent border-none text-white/70 text-base font-medium cursor-pointer py-3 text-left transition-colors duration-300 hover:text-[#ff7b00]"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('products')} 
            className="bg-transparent border-none text-white/70 text-base font-medium cursor-pointer py-3 text-left transition-colors duration-300 hover:text-[#ff7b00]"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('highlights')} 
            className="bg-transparent border-none text-white/70 text-base font-medium cursor-pointer py-3 text-left transition-colors duration-300 hover:text-[#ff7b00]"
          >
            Highlights
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-transparent border-none text-white/70 text-base font-medium cursor-pointer py-3 text-left transition-colors duration-300 hover:text-[#ff7b00]"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;