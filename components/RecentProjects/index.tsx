import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import ExploreButton from './ExploreButton';

interface Project {
  id: number;
  imageUrl: string;
}

const projects: Project[] = [
  { id: 1, imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/18cd76f9ee07751e52f01cd9ce94cb26249cc1717eae145c371c1043582f4098?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a' },
  { id: 2, imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/18cd76f9ee07751e52f01cd9ce94cb26249cc1717eae145c371c1043582f4098?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a' },
  { id: 3, imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/18cd76f9ee07751e52f01cd9ce94cb26249cc1717eae145c371c1043582f4098?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a' },
  { id: 4, imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/18cd76f9ee07751e52f01cd9ce94cb26249cc1717eae145c371c1043582f4098?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a' },
  { id: 5, imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/18cd76f9ee07751e52f01cd9ce94cb26249cc1717eae145c371c1043582f4098?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a' },
];

const RecentProjects: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1143px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <SectionHeader />
          <ExploreButton />
        </div>
        <div className="flex flex-wrap gap-11 items-end mt-16 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} imageUrl={project.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;