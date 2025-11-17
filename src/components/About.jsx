import React from 'react';
import { Target, Zap, Lock } from 'lucide-react';
import { companyInfo } from '../components/Mockdata';

const About = () => {
  return (
    <section 
      id="about" 
      className="relative py-25 px-[7.6923%] bg-black/60 z-10 overflow-hidden"
    >

      {/* Background Video */}
      <video
        className=" absolute top-0 left-0 w-full h-full object-cover opacity-20 -z-10 pointer-events-none"
        src="/videos/vyom-bg.mp4"   // <--- update file name if needed
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto z-10">

        <div className="mb-6">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            About VyomGarud
          </h2>
          <div className="w-20 h-1 bg-[#ff7b00] mb-6"></div>
        </div>

        <div className="grid gap-15">
          <div>
            <p className="text-lg leading-[1.8] text-white/85 mb-6">
              {companyInfo.description}
            </p>
            <p className="text-xl leading-relaxed text-[#ff7b00] font-medium">
              {companyInfo.mission}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="bg-white/0.03 border border-white/10 rounded-none p-10 transition-all duration-300 hover:bg-[#ff7b00]/5 hover:border-[#ff7b00]/30 hover:-translate-y-1">
              <div className="text-[#ff7b00] mb-5">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Precision</h3>
              <p className="text-base leading-relaxed text-white/70">
                Every component engineered to aerospace standards
              </p>
            </div>

            <div className="bg-white/0.03 border border-white/10 rounded-none p-10 transition-all duration-300 hover:bg-[#ff7b00]/5 hover:border-[#ff7b00]/30 hover:-translate-y-1">
              <div className="text-[#ff7b00] mb-5">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-base leading-relaxed text-white/70">
                Cutting-edge autonomous systems and AI integration
              </p>
            </div>

            <div className="bg-white/0.03 border border-white/10 rounded-none p-10 transition-all duration-300 hover:bg-[#ff7b00]/5 hover:border-[#ff7b00]/30 hover:-translate-y-1">
              <div className="text-[#ff7b00] mb-5">
                <Lock size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Security</h3>
              <p className="text-base leading-relaxed text-white/70">
                Military-grade encryption and fail-safe redundancy
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
