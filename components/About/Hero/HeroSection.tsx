import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="flex relative flex-col justify-center items-center px-20 py-52 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex relative flex-col mb-0 max-w-full w-[814px] max-md:mb-2.5">
        <h1 className="text-6xl font-semibold max-md:max-w-full max-md:text-4xl">
          {title}
        </h1>
        <h2 className="self-center mt-3 text-3xl font-medium max-md:max-w-full">
          {subtitle}
        </h2>
      </div>
    </section>
  );
};
