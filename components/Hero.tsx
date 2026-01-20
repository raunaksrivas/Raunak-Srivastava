
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const cvLink = "https://docs.google.com/document/d/18Dhqf_VB-Y01brK8Ob0H-twDVHnDLKSp/export?format=pdf";

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
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-40 scale-110"
            alt="Technical Abstract"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/85 to-transparent" />
        <div className="absolute inset-0 netflix-gradient" />
      </div>

      <div className="relative z-30 px-4 md:px-12 lg:px-16 max-w-7xl space-y-12 animate-fadeIn pt-44 md:pt-64 lg:pt-80 pb-40">
        <div className="flex items-center gap-6 mb-2">
          <span className="w-20 h-1.5 bg-netflix-red shadow-[0_0_20px_rgba(229,9,20,0.6)]" />
          <span className="text-sm md:text-base font-black uppercase tracking-[0.6em] text-netflix-red drop-shadow-[0_0_15px_rgba(229,9,20,0.8)]">Product Marketing Manager</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.95] -ml-2 select-none">
          Technical <br /> <span className="opacity-90 hover:opacity-100 transition-opacity duration-500 text-netflix-red drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">GTM Strategy</span>
        </h1>
        
        <div className="space-y-10 pt-10">
          <p className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-200 max-w-5xl leading-tight">
            I turn complex technical products into <br className="hidden md:block" />
            stories customers understand and adopt.
          </p>
          
          <p className="text-gray-400 md:text-xl lg:text-2xl max-w-4xl font-medium leading-relaxed">
            From B.Tech IT foundations to McKinsey-trained strategy. I bridge the gap between engineering depth and market clarity for high-stakes enterprise and SaaS products.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-8 pt-12">
          <a 
            href={cvLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-white text-black px-10 md:px-12 py-4 md:py-5 rounded-lg font-black text-lg md:text-xl hover:bg-white/90 hover:scale-[1.05] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.7)] active:scale-95"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21l-7-7h4V3h6v11h4l-7 7z" />
            </svg>
            DOWNLOAD CV
          </a>
          <button 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="flex items-center gap-5 bg-[#ffffff15] backdrop-blur-3xl text-white px-10 md:px-12 py-4 md:py-5 rounded-lg font-black text-lg md:text-xl hover:bg-[#ffffff25] hover:scale-[1.05] transition-all border border-[#ffffff20] shadow-2xl active:scale-95"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 10H2v4h12v-4zM22 12l-8-7v14l8-7z" />
            </svg>
            VIEW GTM CASE STUDIES
          </button>
        </div>
      </div>
      
      {/* Bottom edge fade decoration */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#141414] to-transparent z-10" />
    </div>
  );
};

export default Hero;
