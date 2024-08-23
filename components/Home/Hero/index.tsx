import React from "react";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import ExploreButton from "./ExploreButton";

interface PaintingHeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<PaintingHeroProps> = ({ title, subtitle }) => {
  return (
    <header className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-52 w-full min-h-[766px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/578e4c36e789b62236cb4265226e4d23cc53dc0d881d4a99a28ab2d1cddd1894?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
        alt="Background image of a beautifully painted room"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center -mb-11 max-w-full w-[841px] max-md:mb-2.5">
        <HeroTitle title={title} />
        <HeroSubtitle subtitle={subtitle} />
        <ExploreButton />
      </div>
    </header>
  );
};

export default Hero;
