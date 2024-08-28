import React from "react";
import FeatureCard from "./FeatureCard";
import { FeatureCardProps } from "./FeatureCard";

interface WhyChooseUsSectionProps {
  features: FeatureCardProps[];
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  features,
}) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-32 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-7 w-full max-w-[1146px] max-md:mb-2.5 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-3.5 items-center self-start text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4459fea51336b439a31ae6fd627f777b0a40161aeb823619656352729e1544f?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="self-stretch my-auto">Why Choose Us</div>
                </div>
                <h2 className="mt-5 text-6xl font-semibold leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
                  Elevating Home Construction Standards
                </h2>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
              <button className="flex gap-4 justify-center items-center py-5 pr-7 pl-8 mt-32 w-full text-lg font-semibold tracking-wider leading-none text-white bg-sky-500 max-md:px-5 max-md:mt-10">
                <span className="self-stretch my-auto">Explore More</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d27f885d5deee823d04b9621d42439109b7daee19d4c0510567bde868b8835?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.93] w-[27px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-20 max-md:mt-10 max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
