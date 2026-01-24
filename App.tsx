
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Row from './components/Row.tsx';
import ExperienceCard from './components/ExperienceCard.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import VideoSection from './components/VideoSection.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import Modal from './components/Modal.tsx';
import ScrollReveal from './components/ScrollReveal.tsx';
import { EXPERIENCES, PROJECTS, DESIGN_PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from './data.ts';
import { Experience, Project } from './types.ts';

const App: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  // For staggered skills animation
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const skillsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSkillsVisible(true);
        skillsObserver.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (skillsRef.current) skillsObserver.observe(skillsRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      skillsObserver.disconnect();
    };
  }, []);

  const contactInfo = {
    phone: '+91 9628198901',
    email: 'srivastava.raunak7@gmail.com',
    linkedin: 'https://linkedin.com/in/theraunaksri'
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactInfo.email).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
      window.location.href = `mailto:${contactInfo.email}`;
    });
  };

  const handleProjectClick = (proj: Project) => {
    if (proj.isGallery && proj.link) {
      window.open(proj.link, '_blank');
    } else {
      setSelectedProj(proj);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#141414] text-white">
      <Navbar isScrolled={isScrolled} onContactClick={() => setIsContactModalOpen(true)} />
      
      <main className="pb-20">
        <Hero />
        
        <div className="relative mt-20 md:mt-32 z-20 space-y-32 md:space-y-48 lg:space-y-64 px-4 md:px-12 lg:px-16 overflow-hidden">
          {/* Case Studies Row */}
          <ScrollReveal>
            <Row id="projects" title="Featured Strategy">
              {PROJECTS.map((proj, idx) => (
                <div key={proj.id} className="flex items-center gap-0">
                  <span className="netflix-number hidden lg:block -mr-8 z-10 select-none pointer-events-none">
                    {idx + 1}
                  </span>
                  <ProjectCard 
                    project={proj} 
                    onClick={() => handleProjectClick(proj)} 
                  />
                </div>
              ))}
            </Row>
          </ScrollReveal>

          {/* Visual Work Row - Pure Images */}
          <ScrollReveal>
            <Row id="design" title="Visual Work">
              {DESIGN_PROJECTS.map((proj) => (
                <ProjectCard 
                  key={proj.id}
                  project={proj} 
                  onClick={() => handleProjectClick(proj)} 
                />
              ))}
            </Row>
          </ScrollReveal>

          {/* Experience Row */}
          <ScrollReveal>
            <Row id="experience" title="Experience">
              {EXPERIENCES.map((exp) => (
                <ExperienceCard 
                  key={exp.id} 
                  experience={exp} 
                  onClick={() => setSelectedExp(exp)} 
                />
              ))}
            </Row>
          </ScrollReveal>

          {/* Skills Grid - Services */}
          <section id="skills" ref={skillsRef} className="space-y-16 scroll-mt-32">
            <div className={`flex flex-col gap-2 transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="w-12 h-1 bg-netflix-red mb-2" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase">Specializations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {SKILLS.map((skillGroup, idx) => (
                <div 
                  key={idx} 
                  className={`bg-[#181818] p-8 md:p-10 rounded-xl border border-[#333] hover:border-netflix-red transition-all shadow-2xl group ${skillsVisible ? 'stagger-item' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <h3 className="text-netflix-red font-black mb-8 uppercase text-[10px] md:text-xs tracking-widest group-hover:tracking-[0.2em] transition-all">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span key={sIdx} className="px-4 py-2 bg-[#252525] rounded-lg text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Feature */}
          <ScrollReveal>
            <VideoSection />
          </ScrollReveal>

          {/* Education & Certifications Row */}
          <div className="space-y-24">
            <ScrollReveal>
              <Row id="education" title="Credentials">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="flex-none w-80 md:w-[450px] bg-[#181818] p-8 md:p-10 rounded-xl border border-[#333] hover:border-netflix-red transition-all cursor-default shadow-2xl">
                    <p className="text-netflix-red text-[10px] font-black uppercase mb-4 tracking-[0.2em]">Credential</p>
                    <h3 className="font-black text-xl md:text-2xl mb-2">{edu.institution}</h3>
                    <p className="text-base md:text-lg text-gray-300 font-bold mb-4">{edu.degree}</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-8 font-medium">{edu.duration}</p>
                    {edu.summary && <p className="text-gray-400 leading-relaxed text-sm md:text-base italic border-l-2 border-netflix-red pl-4">{edu.summary}</p>}
                  </div>
                ))}
              </Row>
            </ScrollReveal>
          </div>

          {/* Contact Section */}
          <ScrollReveal threshold={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </main>

      <Footer />

      {/* Experience Modal */}
      {selectedExp && (
        <Modal 
          isOpen={!!selectedExp} 
          onClose={() => setSelectedExp(null)}
          title={selectedExp.company}
        >
          <div className="space-y-8">
            <div className="relative h-64 md:h-80 -mx-6 -mt-6">
              <img src={selectedExp.image} className="w-full h-full object-cover" alt={selectedExp.company} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10">
                <p className="text-netflix-red font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-2">{selectedExp.role}</p>
                <h2 className="text-3xl md:text-5xl font-black">{selectedExp.company}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h4 className="text-xl md:text-2xl font-black mb-6 flex items-center">
                    <span className="w-1.5 h-6 md:h-8 bg-netflix-red mr-4"></span>
                    Deliverables
                  </h4>
                  <ul className="space-y-4">
                    {selectedExp.achievements.map((a, i) => (
                      <li key={i} className="text-gray-300 text-base md:text-lg flex items-start gap-4">
                        <span className="mt-2 w-2 h-2 rounded-full bg-netflix-red flex-shrink-0 shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-[#222] p-6 md:p-8 rounded-xl border border-[#333]">
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Metrics</h4>
                  <p className="text-netflix-red font-black text-xl md:text-2xl">{selectedExp.metrics}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Project Modal (Consulting Only) */}
      {selectedProj && (
        <Modal 
          isOpen={!!selectedProj} 
          onClose={() => setSelectedProj(null)}
          title={selectedProj.title}
        >
          <div className="space-y-12">
            <div className="relative h-[400px] md:h-[500px] -mx-6 -mt-6 rounded-t-xl overflow-hidden">
              <img src={selectedProj.image} className="w-full h-full object-cover" alt={selectedProj.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/20 to-transparent" />
              <div className="absolute bottom-10 md:bottom-16 left-6 md:left-16 max-w-3xl">
                <span className="bg-netflix-red text-white text-[10px] px-2.5 py-1 font-black rounded uppercase mb-4 inline-block tracking-[0.2em]">{selectedProj.category}</span>
                <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 leading-none">{selectedProj.title}</h2>
                <p className="text-gray-200 text-lg md:text-2xl font-medium leading-relaxed drop-shadow-lg">
                  {selectedProj.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-8 space-y-12">
                <section>
                  <h4 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-4">
                    <span className="w-2.5 h-8 md:h-10 bg-netflix-red" />
                    Project Breakdown
                  </h4>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                    {selectedProj.longDescription}
                  </p>
                </section>
              </div>

              <div className="lg:col-span-4 space-y-10">
                 <div className="bg-[#222] p-8 md:p-10 rounded-2xl border border-[#333] shadow-2xl">
                    <h5 className="text-netflix-red font-black uppercase text-[10px] tracking-[0.3em] mb-6">Domain</h5>
                    <p className="text-2xl md:text-3xl font-black">{selectedProj.category}</p>
                    <hr className="my-10 border-[#333]" />
                    <div className="space-y-4">
                      <button 
                        onClick={() => setIsContactModalOpen(true)}
                        className="w-full bg-netflix-red text-white py-4 md:py-5 rounded-lg font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-[#f40612] transition-all transform hover:scale-[1.02] active:scale-95"
                      >
                        Start Discussion
                      </button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Quick Contact Modal */}
      {isContactModalOpen && (
        <Modal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)}
          title="Contact"
        >
          <div className="text-center space-y-12 py-10">
            <div className="space-y-4">
              <p className="text-netflix-red text-xs font-black uppercase tracking-[0.5em]">Experience</p>
              <h2 className="text-4xl md:text-6xl font-black uppercase">Direct Access</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <a href={`tel:${contactInfo.phone}`} className="bg-[#222] p-10 md:p-12 rounded-2xl border border-[#333] hover:border-netflix-red transition-all group shadow-xl">
                <div className="w-16 h-16 bg-netflix-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-black text-xl mb-2">Phone</h4>
                <p className="text-gray-400 font-bold">{contactInfo.phone}</p>
              </a>

              <div onClick={handleCopyEmail} className="bg-[#222] p-10 md:p-12 rounded-2xl border border-[#333] hover:border-netflix-red transition-all group cursor-pointer relative shadow-xl">
                <div className="w-16 h-16 bg-netflix-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h4 className="font-black text-xl mb-2">Email</h4>
                <p className="text-gray-400 font-bold truncate">{contactInfo.email}</p>
              </div>

              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#222] p-10 md:p-12 rounded-2xl border border-[#333] hover:border-netflix-red transition-all group shadow-xl">
                <div className="w-16 h-16 bg-netflix-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h4 className="font-black text-xl mb-2">LinkedIn</h4>
                <p className="text-gray-400 font-bold">@theraunaksri</p>
              </a>
            </div>

            <button 
              onClick={() => setIsContactModalOpen(false)}
              className="mt-12 px-16 py-4 bg-white text-black font-black uppercase tracking-widest rounded-lg hover:bg-gray-200 transition-all shadow-xl"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
