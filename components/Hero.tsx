
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Using the Tesla Coil / MonoSketch image as requested for the main cover
  const coverPhotoUrl = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/52c67d242808295.610915f20817b.png";

  return (
    <div className="relative min-h-screen w-full flex items-start overflow-hidden">
      {/* Background Visual with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full will-change-transform"
          style={{ 
            transform: `translate3d(0, ${scrollY * 0.35}px, 0)`,
          }}
        >
          <img 
            src={coverPhotoUrl} 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Technical Illustration Background"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/85 to-transparent" />
        <div className="absolute inset-0 netflix-gradient" />
      </div>

      <div className="relative z-30 px-4 md:px-12 lg:px-16 max-w-7xl space-y-12 animate-fadeIn pt-44 md:pt-64 lg:pt-80 pb-40">
        <div className="flex items-center gap-6 mb-2">
          <span className="w-20 h-1.5 bg-netflix-red shadow-[0_0_20px_rgba(229,9,20,0.6)]" />
          <span className="text-sm md:text-base font-black uppercase tracking-[0.6em] text-netflix-red drop-shadow-[0_0_15px_rgba(229,9,20,0.8)]">Strategy & Branding Consultant</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.95] -ml-2 select-none uppercase">
          Branding, Strategy <br /> <span className="opacity-90 hover:opacity-100 transition-opacity duration-500 text-netflix-red drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">& Consulting</span>
        </h1>
        
        <div className="space-y-10 pt-10">
          <p className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-200 max-w-5xl leading-tight">
            I advise B2B firms on brand architecture, <br className="hidden md:block" />
            market expansion, and commercial growth.
          </p>
          
          <p className="text-gray-400 md:text-xl lg:text-2xl max-w-4xl font-medium leading-relaxed">
            McKinsey Forward and Aspire Leaders alumnus. I bridge the gap between high-level business strategy and brand infrastructure for industrial leaders and global innovators.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-8 pt-12">
          <button 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="flex items-center gap-5 bg-white text-black px-10 md:px-12 py-4 md:py-5 rounded-lg font-black text-lg md:text-xl hover:bg-white/90 hover:scale-[1.05] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.7)] active:scale-95 uppercase"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 10H2v4h12v-4zM22 12l-8-7v14l8-7z" />
            </svg>
            View Portfolio
          </button>
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="flex items-center gap-5 bg-[#ffffff15] backdrop-blur-3xl text-white px-10 md:px-12 py-4 md:py-5 rounded-lg font-black text-lg md:text-xl hover:bg-[#ffffff25] hover:scale-[1.05] transition-all border border-[#ffffff20] shadow-2xl active:scale-95 uppercase"
          >
            Consultation Inquiry
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#141414] to-transparent z-10" />
    </div>
  );
};

export default Hero;
