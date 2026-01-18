import React, { useState } from 'react';
import Modal from './Modal.tsx';

const VideoSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const videoId = "dQw4w9WgXcQ";
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <section id="meet-me" className="py-12">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">Meet Me</h2>
      </div>

      <div className="relative group cursor-pointer overflow-hidden rounded-xl h-[300px] md:h-[500px]" onClick={() => setShowVideo(true)}>
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt="Video Thumbnail"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-white fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full bg-gradient-to-t from-black via-black/60 to-transparent">
          <p className="text-netflix-red font-black tracking-widest text-xs uppercase mb-2">Original Portfolio</p>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">Watch My Story</h3>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base hidden sm:block">
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
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-4 max-w-2xl">
                <h4 className="text-2xl font-bold">Bridging Engineering & Marketing</h4>
                <p className="text-gray-400 leading-relaxed">
                    This video provides a deep dive into my professional philosophy. I discuss how my background in Information Technology fuels my approach to Product Marketing and how I translate complex technical architectures into high-impact business narratives.
                </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
                <button 
                  onClick={() => setShowVideo(false)}
                  className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-white/80 transition-colors flex items-center justify-center gap-2"
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