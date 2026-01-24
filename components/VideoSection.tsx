
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="meet-me" className="py-12">
      <div className="flex flex-col gap-2 mb-8">
        <span className="w-12 h-1 bg-netflix-red mb-2" />
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight">Consulting Philosophy</h2>
      </div>

      <div className="relative overflow-hidden rounded-xl min-h-[500px] md:h-[650px] lg:h-[750px]">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover"
          alt="Consulting Perspective"
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full bg-gradient-to-t from-black via-black/95 to-transparent">
          <p className="text-netflix-red font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-3">Strategy & Branding Advisor</p>
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-none tracking-tighter">Branding as <br/> Business Strategy</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="space-y-6">
              <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                I help organizations bridge the "adoption gap" through brand infrastructure. With strategy training from the McKinsey Forward program, I advise firms on how to translate operational complexity into global commercial market dominance.
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                My methodology is rooted in structural problem-solving and brand architecture. Whether I am architecting a market entry strategy for Southeast Asia or delivering technical brand authority for power infrastructure leaders, I prioritize business impact over aesthetic vanity.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                What sets me apart is the ability to align disparate stakeholders—from specialized technical teams to executive leadership and international partners. I apply structured strategic frameworks to the fluidity of global branding and business consulting.
              </p>
              <p className="text-white text-base md:text-lg lg:text-xl font-bold italic border-l-4 border-netflix-red pl-6">
                I am currently open to strategic consulting engagements for brand architecture, market expansion, and GTM advisory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
