import React from "react";
import ProjectCard from "./ProjectCard";
import Button from "./ExploreButton";

interface Project {
  id: number;
  imageUrl: string;
  alt: string;
}

interface RecentProjectsProps {
  projects: Project[];
}

const RecentProjects: React.FC<RecentProjectsProps> = ({ projects }) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1141px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex gap-3.5 items-center self-start text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/18cd76f9ee07751e52f01cd9ce94cb26249cc1717eae145c371c1043582f4098?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <span className="self-stretch my-auto">Our Projects</span>
            </div>
            <h1 className="mt-5 text-6xl font-semibold leading-tight text-neutral-600 max-md:max-w-full max-md:text-4xl">
              Recent Projects
            </h1>
          </div>
          <Button
            text="View Our Work"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/60b6a108630aeb72c786a6986817411810a3c893dc7b2df69b4041333e9c4ee2?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
          />
        </header>
        <div className="flex flex-wrap gap-11 items-end mt-16 max-md:mt-10 max-md:max-w-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
