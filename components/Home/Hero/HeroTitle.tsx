import React from "react";

interface HeroTitleProps {
  title: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  return (
    <h1 className="self-stretch text-6xl font-semibold text-center max-md:max-w-full max-md:text-4xl">
      {title}
    </h1>
  );
};

export default HeroTitle;
