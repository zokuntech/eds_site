import React from "react";
import { ProjectData } from "./types";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (project.type === "image") {
    return (
      <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
        <div className="flex shrink-0 mx-auto max-w-full bg-neutral-600 h-[372px] w-[343px] max-md:mt-6" />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow px-7 pt-52  w-full bg-sky-500 max-md:px-5 max-md:pt-24 max-md:mt-6">
          <h4 className="self-start text-2xl font-semibold leading-none text-white">
            {project.title}
          </h4>
          <p className="mt-4 text-base font-medium leading-6 text-neutral-100">
            {project.description}
          </p>
        </div>
      </div>
    );
  }
};

export default ProjectCard;
