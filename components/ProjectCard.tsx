
import React from 'react';
import { Project } from '../types.ts';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const isTopHit = [
    'proj-swiggy', 
    'proj-lenskart', 
    'proj-uav-strategy', 
    'proj-vietnam-expansion'
  ].includes(project.id);

  return (
    <div 
      onClick={onClick}
      className="flex-none w-[300px] md:w-[450px] group relative cursor-pointer"
    >
      <div className="aspect-video w-full rounded-lg overflow-hidden card-hover border border-transparent hover:border-[#333] bg-[#181818] shadow-2xl relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-10"
        />
        
        {/* Hover Content Overlay */}
        <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="space-y-1.5 md:space-y-2">
            {!project.isGallery && isTopHit && (
              <span className="bg-netflix-red text-white text-[9px] px-1.5 py-0.5 font-black rounded uppercase tracking-tighter flex items-center gap-1 w-fit shadow-lg mb-0.5">
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                TOP HIT
              </span>
            )}
            <h3 className="font-bold text-base md:text-xl lg:text-2xl leading-tight drop-shadow-lg text-white">
              {project.title}
            </h3>
            <p className="text-gray-300 text-[10px] md:text-xs lg:text-sm line-clamp-2 leading-snug">
              {project.description}
            </p>
            
            {!project.isGallery && (
              <div className="flex flex-wrap gap-1 pt-0.5">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[8px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest bg-white/10 px-1.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <button className="mt-2 w-full flex items-center justify-center gap-2 bg-white text-black py-1.5 md:py-2 rounded font-black text-[10px] md:text-xs hover:bg-white/80 transition-colors shadow-xl uppercase">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              {project.isGallery ? 'View Design' : 'View Case Study'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual Indicator Below */}
      <div className="mt-3 group-hover:opacity-0 transition-opacity duration-200">
        <p className="text-sm font-black truncate text-gray-100">
          {project.title}
        </p>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
