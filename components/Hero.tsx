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
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-40 scale-110"
            alt="Technical Abstract"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-transparent" />
        <div className="absolute inset-0 netflix-gradient" />
      </div>

      <div className="relative z-30 px-4 md:px-12 lg:px-16 max-w-7xl space-y-12 animate-fadeIn pt-52 md:pt-72 lg:pt-80 pb-40">
        <div className="flex items-center gap-6 mb-2">
          <span className="w-20 h-1.5 bg-netflix-red" />
          <span className="text-sm md:text-base font-black uppercase tracking-[0.6em] text-netflix-red drop-shadow-[0_0_15px_rgba(229,9,20,0.8)]">Original Portfolio</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[11.5rem] font-black tracking-tighter leading-[1.2] -ml-2 select-none">
          Raunak <br /> <span className="opacity-90">Srivastava</span>
        </h1>
        
        <div className="space-y-10 pt-10">
          <p className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-200 max-w-5xl leading-tight">
            Product Marketing, Strategy, Consulting, <br className="hidden md:block" />
            Technical Storytelling
          </p>
          
          <p className="text-gray-400 md:text-xl lg:text-2xl max-w-4xl font-medium leading-relaxed">
            I sit at the intersection of engineering and business growth. I translate technical complexity into human stories that win markets.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 pt-12">
          <a 
            href={cvLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-white text-black px-12 py-5 rounded-lg font-black text-xl hover:bg-white/90 hover:scale-[1.05] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.7)] active:scale-95"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21l-7-7h4V3h6v11h4l-7 7z" />
            </svg>
            DOWNLOAD CV
          </a>
          <button 
            onClick={(e) => scrollToSection(e, 'meet-me')}
            className="flex items-center gap-5 bg-[#ffffff15] backdrop-blur-3xl text-white px-12 py-5 rounded-lg font-black text-xl hover:bg-[#ffffff25] hover:scale-[1.05] transition-all border border-[#ffffff20] shadow-2xl active:scale-95"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            WATCH INTRO
          </button>
        </div>
      </div>
      
      {/* Bottom edge fade decoration */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#141414] to-transparent z-10" />
    </div>
  );
};

export default Hero;