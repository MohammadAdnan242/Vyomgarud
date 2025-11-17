import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 px-[7.6923%] pt-15 pb-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 mb-10">
          <div>
            <h3 className="text-[28px] font-bold text-[#ff7b00] mb-3">VyomGarud</h3>
            <p className="text-base text-white/70 leading-relaxed">Precision in Flight. Excellence in Mission.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">Company</h4>
              <ul className="list-none flex flex-col gap-3">
                <li><a href="#about" className="text-white/60 no-underline text-sm transition-colors duration-300 hover:text-[#ff7b00]">About Us</a></li>
                <li><a href="#products" className="text-white/60 no-underline text-sm transition-colors duration-300 hover:text-[#ff7b00]">Products</a></li>
                <li><a href="#highlights" className="text-white/60 no-underline text-sm transition-colors duration-300 hover:text-[#ff7b00]">Capabilities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">Support</h4>
              <ul className="list-none flex flex-col gap-3">
                <li><a href="#contact" className="text-white/60 no-underline text-sm transition-colors duration-300 hover:text-[#ff7b00]">Contact</a></li>
                <li><a href="#" className="text-white/60 no-underline text-sm transition-colors duration-300 hover:text-[#ff7b00]">Documentation</a></li>
                <li><a href="#" className="text-white/60 no-underline text-sm transition-colors duration-300 hover:text-[#ff7b00]">Technical Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-none text-white/70 transition-all duration-300 no-underline hover:bg-[#ff7b00] hover:text-black hover:border-[#ff7b00] hover:-translate-y-0.5" 
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-none text-white/70 transition-all duration-300 no-underline hover:bg-[#ff7b00] hover:text-black hover:border-[#ff7b00] hover:-translate-y-0.5" 
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:info@vyomgarud.com" 
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-none text-white/70 transition-all duration-300 no-underline hover:bg-[#ff7b00] hover:text-black hover:border-[#ff7b00] hover:-translate-y-0.5" 
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            © {currentYear} VyomGarud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;