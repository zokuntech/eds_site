import React from "react";
import RatingCard from "./RatingCard";
import MissionStatement from "./MissionStatement";

interface AboutUsProps {
  rating: number;
  ratingText: string;
  aboutText: string;
  missions: string[];
}

const AboutUs: React.FC<AboutUsProps> = ({
  rating,
  ratingText,
  aboutText,
  missions,
}) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-24 w-full bg-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="w-full max-w-[1140px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow min-h-[747px] max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08ffe93cb1de66353b384e4428f2eeea7b54d27f4356495acb411a7b1bdd7835?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                alt="Company showcase"
                className="object-contain max-w-full aspect-[1.33] w-[484px]"
              />
              <RatingCard rating={rating} ratingText={ratingText} />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-1.5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col w-full font-semibold max-w-[560px] max-md:max-w-full">
                <div className="flex gap-3.5 items-center self-start text-sm tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4459fea51336b439a31ae6fd627f777b0a40161aeb823619656352729e1544f?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <span className="self-stretch my-auto">About Us</span>
                </div>
                <h1 className="mt-5 text-6xl leading-tight text-neutral-600 max-md:max-w-full max-md:text-4xl">
                  Who We Are
                </h1>
                <p className="mt-5 text-lg leading-6 text-stone-500 max-md:max-w-full">
                  {aboutText}
                </p>
              </div>
              <div className="flex flex-col mt-11 max-w-full w-[560px] max-md:mt-10">
                <h2 className="text-2xl font-bold leading-tight text-neutral-600">
                  Our Missions :
                </h2>
                {missions.map((mission, index) => (
                  <MissionStatement
                    key={index}
                    text={mission}
                    isHighlighted={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
