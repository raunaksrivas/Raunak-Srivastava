
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [copyFeedback, setCopyFeedback] = useState(false);
  const email = 'srivastava.raunak7@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
      window.location.href = `mailto:${email}`;
    });
  };

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
    <footer className="bg-[#141414] border-t border-[#333] pt-16 pb-8 px-4 md:px-12 lg:px-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <h4 className="font-black text-netflix-red tracking-widest uppercase text-xs">Portfolio</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-gray-300 transition-colors">Home</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-gray-300 transition-colors">Experience</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-gray-300 transition-colors">Projects</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-gray-300 transition-colors">Skills</a></li>
            <li><a href="#meet-me" onClick={(e) => scrollToSection(e, 'meet-me')} className="hover:text-gray-300 transition-colors">Meet Me</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-black text-netflix-red tracking-widest uppercase text-xs">Social</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="https://linkedin.com/in/theraunaksri" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/theraunaksri" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">GitHub</a></li>
            <li><a href="https://www.behance.net/raunaksrivast3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Behance</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-black text-netflix-red tracking-widest uppercase text-xs">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="relative">
              <button 
                onClick={handleCopyEmail}
                className="hover:text-gray-300 transition-colors flex items-center gap-2 group"
                title="Click to copy and email"
              >
                {email}
                {copyFeedback && (
                  <span className="absolute -top-6 left-0 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-lg animate-bounce">
                    Copied!
                  </span>
                )}
              </button>
            </li>
            <li>
              <a href="tel:+919628198901" className="hover:text-gray-300 transition-colors">
                +91 9628198901
              </a>
            </li>
            <li>Gurugram, Haryana</li>
          </ul>
        </div>
        <div className="space-y-4 flex flex-col justify-end items-start md:items-end">
          <span className="text-[#E50914] text-3xl font-black italic uppercase">RAUNAK</span>
          <p className="text-xs text-gray-600">© 2024 Raunak Srivastava. Built for impact.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
