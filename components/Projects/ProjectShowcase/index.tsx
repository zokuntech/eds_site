import React from "react";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

interface ProjectShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  featuredProject: {
    imageUrl: string;
    altText: string;
  };
  projects: Array<{
    imageUrl: string;
    altText: string;
  }>;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title,
  subtitle,
  description,
  featuredProject,
  projects,
}) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 max-w-full bg-white w-[1440px] max-md:px-5 max-md:py-24">
      <div className="flex flex-col mb-0 w-full max-w-[1139px] max-md:mb-2.5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-8">
                <h2 className="text-base font-bold tracking-widest leading-none text-sky-500 uppercase">
                  {subtitle}
                </h2>
                <h1 className="mt-5 text-5xl font-semibold leading-[62px] text-neutral-600 max-md:text-4xl max-md:leading-[58px]">
                  {title}
                </h1>
                <p className="overflow-hidden gap-3 self-stretch mt-5 max-w-full text-lg font-medium leading-6 rounded text-stone-500 w-[365px]">
                  {description}
                </p>
              </div>
            </div>
            <FeaturedProject
              imageUrl={featuredProject.imageUrl}
              altText={featuredProject.altText}
            />
          </div>
          <div className="flex flex-wrap gap-10 items-start mt-14 max-md:mt-10 max-md:max-w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                imageUrl={project.imageUrl}
                altText={project.altText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
