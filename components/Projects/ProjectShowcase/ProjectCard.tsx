import React from "react";

interface ProjectCardProps {
  imageUrl: string;
  altText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, altText }) => {
  return (
    <div className="flex overflow-hidden flex-col bg-neutral-200 min-w-[240px] w-[347px]">
      <img
        src={imageUrl}
        alt={altText}
        className="flex shrink-0 bg-gray-400 h-[318px]"
      />
    </div>
  );
};

export default ProjectCard;
