import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="meet-me" className="py-12">
      <div className="flex flex-col gap-2 mb-8">
        <span className="w-12 h-1 bg-netflix-red mb-2" />
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight">Meet Me</h2>
      </div>

      <div className="relative overflow-hidden rounded-xl h-[300px] md:h-[550px]">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover"
          alt="Profile Spotlight"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
          <p className="text-netflix-red font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-3">Original Portfolio</p>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-none">The Strategic Mindset</h3>
          <p className="text-gray-300 max-w-3xl text-sm md:text-lg hidden sm:block leading-relaxed">
            I am a builder who loves solving high-stakes problems. My approach combines the precision of an 
            Information Technology background with the creative storytelling required to win in global markets. 
            I focus on GTM excellence, product-led growth, and building sustainable brand narratives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;