import React from "react";
import ExpertiseList from "./ExpertiseList";

const ExpertiseContent: React.FC = () => {
  return (
    <div className="flex flex-col w-full font-semibold max-md:mt-10 max-md:max-w-full">
      <ExpertiseList />
      <hr className="shrink-0 mt-10 h-px border border-solid border-neutral-600 max-md:max-w-full" />
      <a
        href="#services"
        className="flex gap-4 justify-center items-center self-start py-5 pr-7 pl-8 mt-10 text-lg tracking-wider leading-none text-white bg-sky-500 min-h-[57px] max-md:px-5"
      >
        <span className="self-stretch my-auto">Explore Services</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4eedf2087f53cca98f2405ba80a63fde05eff6fcc23c96cfbaf8f1e3ba5e29f?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.8] w-[27px]"
          alt=""
        />
      </a>
    </div>
  );
};

export default ExpertiseContent;
