
import React, { useRef } from 'react';

interface RowProps {
  title: string;
  id?: string;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ title, id, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rowId = id || title.toLowerCase().replace(/\s+/g, '-');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div id={rowId} className="group space-y-12 scroll-mt-32 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between pr-4 md:pr-12 gap-6">
        <div className="space-y-3">
          <div className="w-16 h-1 bg-netflix-red mb-4" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-none">{title}</h2>
        </div>
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full bg-[#181818] border border-[#333] hover:bg-netflix-red hover:border-netflix-red transition-all shadow-xl"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-[#181818] border border-[#333] hover:bg-netflix-red hover:border-netflix-red transition-all shadow-xl"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-8 md:gap-16 overflow-x-auto no-scrollbar scroll-smooth pb-16 -mx-4 px-4 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16"
      >
        {children}
      </div>
    </div>
  );
};

export default Row;
