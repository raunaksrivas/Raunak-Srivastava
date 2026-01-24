
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onContactClick }) => {
  const cvLink = "https://docs.google.com/document/d/18Dhqf_VB-Y01brK8Ob0H-twDVHnDLKSp/export?format=pdf";
  
  // Directly linking to your actual logo asset from Behance
  const logoUrl = "https://mir-s3-cdn-cf.behance.net/user/230/49049949049949.610915f20817b.png"; 

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-12 py-3 flex items-center justify-between ${isScrolled ? 'bg-[#141414] shadow-2xl border-b border-[#ffffff10]' : 'bg-gradient-to-b from-black/80 to-transparent pt-6'}`}>
      <div className="flex items-center gap-8 lg:gap-12">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'top')}
          className="flex items-center gap-2 group"
        >
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110 overflow-hidden rounded-md border border-white/10 bg-black/20">
            <img 
              src={logoUrl} 
              alt="Raunak Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-netflix-red');
              }}
            />
          </div>
          <span className="text-white text-lg md:text-xl font-black tracking-tighter uppercase italic group-hover:text-netflix-red transition-colors hidden sm:inline-block">
            RAUNAK
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-bold tracking-wide">
          <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-gray-400 transition-colors uppercase">Home</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-gray-400 transition-colors uppercase">Strategy</a>
          <a href="#design" onClick={(e) => scrollToSection(e, 'design')} className="hover:text-gray-400 transition-colors uppercase text-netflix-red">Portfolio</a>
          <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-gray-400 transition-colors uppercase">Experience</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-gray-400 transition-colors uppercase">Skills</a>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <a 
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-sm font-black text-[10px] md:text-xs hover:bg-gray-200 transition-colors whitespace-nowrap flex items-center gap-2 uppercase tracking-tighter"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21l-7-7h4V3h6v11h4l-7 7z" />
            </svg>
            <span className="hidden sm:inline">Download CV</span>
          </a>
          <button 
            onClick={onContactClick} 
            className="bg-netflix-red px-4 py-2 rounded-sm font-black text-[10px] md:text-xs hover:bg-[#f40612] transition-colors whitespace-nowrap uppercase tracking-tighter shadow-lg"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
