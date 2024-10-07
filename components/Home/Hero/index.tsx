import React from "react";

interface PaintingHeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<PaintingHeroProps> = ({ title, subtitle }) => {
  return (
    <header className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-52 w-full xl:h-[900px] 2xl:h-[1200px] min-h-[766px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/578e4c36e789b62236cb4265226e4d23cc53dc0d881d4a99a28ab2d1cddd1894?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
        alt="Background image of a beautifully painted room"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center  max-w-full w-[850px] sm:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%]  ">
        <h1 className="text-4xl md:text-5xl font-semibold text-center xl:text-6xl 2xl:text-7xl max-w-[1000px]">
          {title}
        </h1>
        <p className="mt-4 text-xl font-medium text-center md:text-2xl lg:w-[80%] xl:text-3xl 2xl:text-4xl max-w-[1000px]">
          {subtitle}
        </p>
        <button className="flex gap-4 p-10 2xl:px-14 2xl:py-6 justify-center items-center py-5  mt-8 text-lg xl:text-xl 2xl:text-2xl font-bold bg-sky-500">
          <span className="self-stretch my-auto">Explore More</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d27f885d5deee823d04b9621d42439109b7daee19d4c0510567bde868b8835?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.93] stroke-[2px] stroke-white w-[27px]"
          />
        </button>
      </div>
    </header>
  );
};

export default Hero;
