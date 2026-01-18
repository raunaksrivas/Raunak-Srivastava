
import React from 'react';
import { Experience } from '../types';

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
      <div className="aspect-video w-full rounded-lg overflow-hidden card-hover border border-transparent hover:border-[#333] bg-[#181818]">
        <img 
          src={experience.image} 
          alt={experience.company} 
          className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
        />
        
        {/* Hover Content Overlay */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="space-y-2">
            <h3 className="font-bold text-lg md:text-xl leading-tight">{experience.company}</h3>
            <p className="text-netflix-red font-bold text-sm">{experience.role}</p>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <span>{experience.duration}</span>
              <span>•</span>
              <span className="text-green-500 font-bold uppercase tracking-tighter">98% Match</span>
            </div>
            <p className="text-xs text-gray-400 line-clamp-2 mt-2 leading-relaxed">
              {experience.summary}
            </p>
          </div>
        </div>
      </div>
      
      {/* Visual Indicator Below */}
      <div className="mt-2 group-hover:opacity-0 transition-opacity">
        <p className="text-sm font-bold truncate">{experience.company}</p>
        <p className="text-xs text-gray-500">{experience.role}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
