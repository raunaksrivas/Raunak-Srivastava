import React, { useState } from 'react';
import Modal from './Modal.tsx';

const VideoSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  // Replaced with a more professional placeholder for marketing/product strategy
  const videoId = "zpOULjyy-n8"; 
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <section id="meet-me" className="py-12">
      <div className="flex flex-col gap-2 mb-8">
        <span className="w-12 h-1 bg-netflix-red mb-2" />
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight">Meet Me</h2>
      </div>

      <div className="relative group cursor-pointer overflow-hidden rounded-xl h-[300px] md:h-[550px]" onClick={() => setShowVideo(true)}>
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          alt="Video Thumbnail"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <svg className="w-10 h-10 md:w-14 md:h-14 text-white fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
          <p className="text-netflix-red font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-3">Original Portfolio</p>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-none">Watch My Story</h3>
          <p className="text-gray-300 max-w-3xl text-sm md:text-lg hidden sm:block leading-relaxed">
            Get to know the person behind the strategy. A quick deep dive into my journey, 
            technical philosophy, and how I bridge the gap between engineering and growth.
          </p>
        </div>
      </div>

      {showVideo && (
        <Modal 
          isOpen={showVideo} 
          onClose={() => setShowVideo(false)}
          title="Intro Video"
        >
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative">
            <iframe 
              className="w-full h-full"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            
            <div className="absolute top-4 left-6 flex items-center gap-3 pointer-events-none">
                <span className="bg-netflix-red text-white text-[10px] px-1.5 py-0.5 font-black rounded-sm uppercase">Original</span>
                <h3 className="text-xl font-bold text-white drop-shadow-lg">The Raunak Story</h3>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4 max-w-3xl">
                <h4 className="text-2xl md:text-3xl font-black">Bridging Engineering & Marketing</h4>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    This video provides a deep dive into my professional philosophy. I discuss how my background in Information Technology fuels my approach to Product Marketing and how I translate complex technical architectures into high-impact business narratives.
                </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
                <button 
                  onClick={() => setShowVideo(false)}
                  className="px-8 py-4 bg-white text-black font-black uppercase text-sm rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close Player
                </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default VideoSection;