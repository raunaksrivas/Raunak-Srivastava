
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="meet-me" className="py-12">
      <div className="flex flex-col gap-2 mb-8">
        <span className="w-12 h-1 bg-netflix-red mb-2" />
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight">The Profile</h2>
      </div>

      <div className="relative overflow-hidden rounded-xl min-h-[500px] md:h-[650px] lg:h-[750px]">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover"
          alt="Profile Spotlight"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full bg-gradient-to-t from-black via-black/95 to-transparent">
          <p className="text-netflix-red font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-3">Product Marketing Executive</p>
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-none tracking-tighter">Translating Depth <br/> into Market Clarity</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="space-y-6">
              <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                I sit at the intersection of engineering, marketing, and business growth. My journey began with a B.Tech in IT, where I learned the logic of systems—a foundation I now use to bridge the gap between technical complexity and customer adoption. I specialize in turning high-stakes technical products into clear, high-converting stories.
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                Last year, I simultaneously led GTM strategy for aerospace clients in London and delivered strategic consulting for Fortune 500-level giants like Amul, Zydus, and Waaree. Whether I'm negotiating partnerships in Vietnam or translating transformer specs for India's market leader, I bring technical rigor to every marketing decision.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                What sets me apart is technical fluency. I can code a React dashboard to track ROI, architect an SEO strategy based on search logic, and draft a buyer-ready narrative for an industrial EPC contractor in the same afternoon. As a McKinsey Forward and Aspire Leaders alumnus, I apply structured problem-solving to drive measurable customer adoption.
              </p>
              <p className="text-white text-base md:text-lg lg:text-xl font-bold italic border-l-4 border-netflix-red pl-6">
                I am currently looking for Product Marketing roles where I can apply structured technical storytelling to drive measurable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
