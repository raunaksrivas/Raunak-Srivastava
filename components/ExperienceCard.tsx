import React from 'react';
import { Experience } from '../types.ts';

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="flex-none w-64 md:w-80 lg:w-96 group relative cursor-pointer"
    >
      <div className="aspect-video w-full rounded-lg overflow-hidden card-hover border border-transparent hover:border-[#333] bg-[#181818] relative">
        <img 
          src={experience.image} 
          alt={experience.company} 
          className="w-full h-full object-cover group-hover:opacity-20 transition-opacity duration-500"
        />
        
        {/* Hover Content Overlay */}
        <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="space-y-1 max-h-full overflow-hidden">
            <h3 className="font-bold text-base md:text-xl leading-tight text-white line-clamp-1">{experience.company}</h3>
            <p className="text-netflix-red font-bold text-[10px] md:text-xs uppercase tracking-wide">{experience.role}</p>
            <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-gray-400">
              <span>{experience.duration}</span>
              <span>•</span>
              <span className="text-green-500 font-bold uppercase tracking-tighter">Verified</span>
            </div>
            <p className="text-[9px] md:text-[11px] text-gray-300 line-clamp-2 mt-1 leading-relaxed italic">
              {experience.summary}
            </p>
          </div>
        </div>
      </div>
      
      {/* Visual Indicator Below */}
      <div className="mt-2 group-hover:opacity-0 transition-opacity duration-200">
        <p className="text-sm font-bold truncate">{experience.company}</p>
        <p className="text-xs text-gray-500">{experience.role}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;