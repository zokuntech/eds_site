import React from "react";
import { FeatureCardProps } from "./FeatureCard";
import FeatureCard from "./FeatureCard";

const features: FeatureCardProps[] = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a925604c8dac6b680b592cc77b236850aaf2868419d70047088baeb5b863977f?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Quality Worksmanship",
    description:
      "We take pride in our attention to detail and commitment to quality. We use only the highest quality materials to ensure a flawless finish.",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f8eac7bd653e2e23889a22a0799142081a2d2e14bc4175d02117666dc455370b?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Customer Satisfaction",
    description:
      "Our customers are our top priority. We work closely with you from start to finish, ensuring your vision is realized and your expectations are exceeded.",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f04848ebb67251846602754d536ea76c67d501b39013f9c3ed7ab8cb846a4352?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Reliable and Professional",
    description:
      "We understand the importance of reliability and professionalism in our work by maintaining a clean work environment and take care of your property as if it were our own.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-32 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-7 w-full max-w-[1146px] max-md:mb-2.5 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[78%] max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-3.5 items-center self-start text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4459fea51336b439a31ae6fd627f777b0a40161aeb823619656352729e1544f?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                    alt=""
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  <div className="self-stretch my-auto">Why Choose Us</div>
                </div>
                <h2 className="mt-5 text-6xl font-semibold text-neutral-600 max-md:text-4xl leading-8">
                  Elevating Home Construction Standards
                </h2>
              </div>
            </div>
            <div className="flex flex-col w-[22%] max-md:w-full">
              <button className="flex gap-4 justify-center items-center py-5 pr-7 pl-8 mt-4 w-full text-lg font-semibold tracking-wider leading-none text-white bg-sky-500 max-md:px-5">
                <span className="self-stretch my-auto">Explore More</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d27f885d5deee823d04b9621d42439109b7daee19d4c0510567bde868b8835?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                  alt=""
                  className="object-contain shrink-0 w-[27px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-20 max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
