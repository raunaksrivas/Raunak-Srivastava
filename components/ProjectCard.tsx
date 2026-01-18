
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const isTopHit = project.id === 'proj-swiggy' || project.id === 'proj-lenskart';

  return (
    <div 
      onClick={onClick}
      className="flex-none w-[300px] md:w-[450px] group relative cursor-pointer"
    >
      <div className="aspect-video w-full rounded-lg overflow-hidden card-hover border border-transparent hover:border-[#333] bg-[#181818] shadow-2xl">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
        />
        
        {/* Hover Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="space-y-3">
            {isTopHit && (
              <span className="bg-netflix-red text-white text-[10px] px-2 py-0.5 font-black rounded uppercase tracking-tighter flex items-center gap-1 w-fit shadow-lg">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                TOP HIT
              </span>
            )}
            <h3 className="font-bold text-xl md:text-2xl leading-tight drop-shadow-lg">{project.title}</h3>
            <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded font-black text-sm hover:bg-white/80 transition-colors shadow-xl">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              VIEW CASE STUDY
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual Indicator Below */}
      <div className="mt-3 group-hover:opacity-0 transition-opacity">
        <p className="text-sm font-black truncate text-gray-100 flex items-center gap-2">
          {isTopHit && <span className="text-netflix-red">#1</span>}
          {project.title}
        </p>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
