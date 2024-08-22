import React from 'react';

interface ProjectCardProps {
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl }) => {
  return (
    <article className="flex overflow-hidden flex-col grow shrink bg-zinc-600 min-w-[240px] w-[280px]">
      <div className="flex shrink-0 bg-gray-400 h-[374px]">
        <img src={imageUrl} alt="Project thumbnail" className="w-full h-full object-cover" />
      </div>
    </article>
  );
};

export default ProjectCard;