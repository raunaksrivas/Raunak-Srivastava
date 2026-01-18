import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Row from './components/Row.tsx';
import ExperienceCard from './components/ExperienceCard.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import VideoSection from './components/VideoSection.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import Modal from './components/Modal.tsx';
import { EXPERIENCES, PROJECTS, SKILLS, EDUCATION } from './data.ts';
import { Experience, Project } from './types.ts';

const App: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <div className="relative min-h-screen bg-[#141414] text-white">
      <Navbar isScrolled={isScrolled} onContactClick={() => setIsContactModalOpen(true)} />
      
      <main className="pb-20">
        <Hero />
        
        <div className="relative mt-20 md:mt-32 z-20 space-y-40 md:space-y-64 px-4 md:px-12 lg:px-16 overflow-hidden">
          {/* Experience Row */}
          <Row id="experience" title="Career Path (The Original Series)">
            {EXPERIENCES.map((exp) => (
              <ExperienceCard 
                key={exp.id} 
                experience={exp} 
                onClick={() => setSelectedExp(exp)} 
              />
            ))}
          </Row>

          {/* Projects Row */}
          <Row id="projects" title="Case Studies & Top Hits">
            {PROJECTS.map((proj) => (
              <ProjectCard 
                key={proj.id} 
                project={proj} 
                onClick={() => setSelectedProj(proj)} 
              />
            ))}
          </Row>

          {/* Skills Row */}
          <section id="skills" className="space-y-16 scroll-mt-32">
            <div className="flex flex-col gap-2">
              <span className="w-12 h-1 bg-netflix-red mb-2" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase">Skills & Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {SKILLS.map((skillGroup, idx) => (
                <div key={idx} className="bg-[#181818] p-10 rounded-xl border border-[#333] hover:border-netflix-red transition-all shadow-2xl group">
                  <h3 className="text-netflix-red font-black mb-8 uppercase text-xs tracking-widest group-hover:tracking-[0.2em] transition-all">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span key={sIdx} className="px-5 py-2.5 bg-[#252525] rounded-lg text-sm font-semibold hover:bg-netflix-red hover:text-white transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Feature */}
          <div className="py-20">
            <VideoSection />
          </div>

          {/* Education Row */}
          <Row id="education" title="Learning & Growth">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="flex-none w-80 md:w-[450px] bg-[#181818] p-10 rounded-xl border border-[#333] hover:border-netflix-red transition-all cursor-default shadow-2xl">
                <p className="text-netflix-red text-xs font-black uppercase mb-4 tracking-[0.2em]">Credential</p>
                <h3 className="font-black text-2xl mb-2">{edu.institution}</h3>
                <p className="text-lg text-gray-300 font-bold mb-4">{edu.degree}</p>
                <p className="text-sm text-gray-500 mb-8 font-medium">{edu.duration}</p>
                {edu.summary && <p className="text-gray-400 leading-relaxed text-base italic border-l-2 border-netflix-red pl-4">{edu.summary}</p>}
              </div>
            ))}
          </Row>

          {/* Contact Section */}
          <div className="pt-32">
            <ContactForm />
          </div>
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
            <div className="relative h-80 -mx-6 -mt-6">
              <img src={selectedExp.image} className="w-full h-full object-cover" alt={selectedExp.company} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-netflix-red font-black uppercase tracking-[0.3em] text-sm mb-2">{selectedExp.role}</p>
                <h2 className="text-5xl font-black">{selectedExp.company}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-10">
                <div>
                  <h4 className="text-2xl font-black mb-6 flex items-center">
                    <span className="w-2 h-8 bg-netflix-red mr-4"></span>
                    Key Deliverables
                  </h4>
                  <ul className="space-y-5">
                    {selectedExp.achievements.map((a, i) => (
                      <li key={i} className="text-gray-300 text-lg flex items-start gap-4">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-netflix-red flex-shrink-0 shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-10">
                <div className="bg-[#222] p-8 rounded-xl border border-[#333]">
                  <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Core Metrics</h4>
                  <p className="text-netflix-red font-black text-2xl">{selectedExp.metrics}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Ecosystem</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.tools.map((t, i) => (
                      <span key={i} className="text-xs font-bold px-3 py-1.5 bg-[#252525] rounded border border-[#333] text-gray-300">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Context</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4 text-netflix-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {selectedExp.location}
                    </p>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4 text-netflix-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      {selectedExp.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Project Modal */}
      {selectedProj && (
        <Modal 
          isOpen={!!selectedProj} 
          onClose={() => setSelectedProj(null)}
          title={selectedProj.title}
        >
          <div className="space-y-12">
            <div className="relative h-[500px] -mx-6 -mt-6 rounded-t-xl overflow-hidden">
              <img src={selectedProj.image} className="w-full h-full object-cover" alt={selectedProj.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/20 to-transparent" />
              <div className="absolute bottom-16 left-16 max-w-3xl">
                <span className="bg-netflix-red text-white text-xs px-3 py-1.5 font-black rounded uppercase mb-6 inline-block tracking-[0.2em]">Original Portfolio</span>
                <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">{selectedProj.title}</h2>
                <p className="text-gray-200 text-xl md:text-2xl font-medium leading-relaxed drop-shadow-lg">
                  {selectedProj.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 px-4 md:px-0">
              <div className="lg:col-span-8 space-y-12">
                <section>
                  <h4 className="text-3xl font-black mb-6 flex items-center gap-5">
                    <span className="w-3 h-10 bg-netflix-red" />
                    Strategic Overview
                  </h4>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    {selectedProj.longDescription}
                  </p>
                </section>
                
                <section>
                  <h4 className="text-2xl font-black mb-6 flex items-center gap-5">
                    <span className="w-3 h-10 bg-netflix-red" />
                    Core Pillars
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedProj.tags.map((tag, i) => (
                      <span key={i} className="px-6 py-3 bg-[#333] border border-[#444] rounded-lg text-sm font-black text-white hover:bg-netflix-red transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <div className="lg:col-span-4 space-y-10">
                 <div className="bg-[#222] p-10 rounded-2xl border border-[#333] shadow-2xl">
                    <h5 className="text-netflix-red font-black uppercase text-xs tracking-[0.3em] mb-6">Vertical</h5>
                    <p className="text-3xl font-black">{selectedProj.category}</p>
                    <hr className="my-10 border-[#333]" />
                    <div className="space-y-4">
                      {selectedProj.link && (
                        <a 
                          href={selectedProj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-netflix-red text-white py-5 rounded-lg font-black uppercase tracking-[0.2em] text-sm hover:bg-[#f40612] transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Project
                        </a>
                      )}
                      <button 
                        onClick={() => setIsContactModalOpen(true)}
                        className="w-full bg-white text-black py-5 rounded-lg font-black uppercase tracking-[0.2em] text-sm hover:bg-gray-200 transition-all transform hover:scale-[1.02] active:scale-95"
                      >
                        Collaborate
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
          title="Connect with Raunak"
        >
          <div className="text-center space-y-12 py-10">
            <div className="space-y-4">
              <p className="text-netflix-red text-xs font-black uppercase tracking-[0.5em]">Global Inquiry</p>
              <h2 className="text-4xl md:text-6xl font-black">Direct Access</h2>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">Select a channel to start the conversation about your next product growth stage.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-[#222] p-12 rounded-2xl border border-[#333] hover:border-netflix-red transition-all group shadow-xl"
              >
                <div className="w-16 h-16 bg-netflix-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-black text-xl mb-2">Phone</h4>
                <p className="text-gray-400 font-bold">{contactInfo.phone}</p>
              </a>

              <div 
                onClick={handleCopyEmail}
                className="bg-[#222] p-12 rounded-2xl border border-[#333] hover:border-netflix-red transition-all group cursor-pointer relative shadow-xl"
              >
                <div className="w-16 h-16 bg-netflix-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-black text-xl mb-2">Email</h4>
                <p className="text-gray-400 font-bold truncate">{contactInfo.email}</p>
                {copyFeedback && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-3 py-1.5 rounded-full shadow-2xl animate-bounce">
                    COPIED!
                  </span>
                )}
              </div>

              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#222] p-12 rounded-2xl border border-[#333] hover:border-netflix-red transition-all group shadow-xl"
              >
                <div className="w-16 h-16 bg-netflix-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-all">
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
              Back to Show
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;