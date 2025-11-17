import React from 'react';
import { highlights } from '../components/Mockdata';
import { Shield, Cpu, Wrench } from 'lucide-react';

const Highlights = () => {
  const getIcon = (id) => {
    switch(id) {
      case 1:
        return <Shield size={40} />;
      case 2:
        return <Cpu size={40} />;
      case 3:
        return <Wrench size={40} />;
      default:
        return <Shield size={40} />;
    }
  };

  return (
    <section id="highlights" className="py-25 px-[7.6923%] bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-15">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Why Choose VyomGarud</h2>
          <div className="w-20 h-1 bg-[#ff7b00]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((highlight) => (
            <div 
              key={highlight.id} 
              className="bg-white/3 border border-white/10 rounded-none p-12 text-center transition-all duration-300 hover:bg-[#ff7b00]/5 hover:border-[#ff7b00]/30 hover:-translate-y-1"
            >
              <div className="text-[#ff7b00] mb-6 flex justify-center">
                {getIcon(highlight.id)}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{highlight.title}</h3>
              <p className="text-base leading-relaxed text-white/70">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;