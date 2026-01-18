
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="flex-none w-[300px] md:w-[450px] group relative cursor-pointer"
    >
      <div className="aspect-video w-full rounded-lg overflow-hidden card-hover border border-transparent hover:border-[#333] bg-[#181818]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-40"
        />
        
        {/* Hover Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="space-y-3">
            <span className="bg-netflix-red text-white text-[10px] px-2 py-0.5 font-black rounded uppercase">Top Rated</span>
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
            
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded font-bold text-sm hover:bg-white/80 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              View Case Study
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual Indicator Below */}
      <div className="mt-3 group-hover:opacity-0 transition-opacity">
        <p className="text-sm font-bold truncate text-gray-100">{project.title}</p>
        <p className="text-xs text-netflix-red font-bold uppercase tracking-widest">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
