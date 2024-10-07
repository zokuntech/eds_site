import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./types";

const projectsData: ProjectData[] = [
  { type: "image" },
  { type: "image" },
  {
    type: "text",
    title: "Real Estate Building",
    description:
      "Click edit to change this text. Lorem ipsum dolor sit amet, cctetur adipiscing elit. Ut elit tellus, luctus nec.",
  },
  { type: "image" },
];

const RecentProjects: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-10 max-w-full w-[1440px] max-md:pb-2">
      <header className="flex flex-col items-center pt-24 mb-0 w-full bg-white max-md:mb-2.5 max-md:max-w-full">
        <h2 className="text-base font-bold tracking-widest text-center text-sky-500 uppercase">
          Recent Projects
        </h2>
        <h3 className="mt-5 text-6xl font-bold leading-none text-center text-slate-900 max-md:max-w-full max-md:text-4xl">
          Discover Our Recent Construction
        </h3>
      </header>
      <div className="z-10 bg-white self-stretch mt-12 mb-0 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
