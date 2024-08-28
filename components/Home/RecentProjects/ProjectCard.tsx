import React from 'react';

interface ProjectCardProps {
  imageUrl: string;
  alt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, alt }) => {
  return (
    <img 
      loading="lazy" 
      src={imageUrl} 
      alt={alt} 
      className="object-contain grow shrink aspect-[1.47] min-w-[240px] w-[478px] max-md:max-w-full" 
    />
  );
};

export default ProjectCard;