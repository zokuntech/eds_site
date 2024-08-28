import React from "react";
import StatCard from "./StatCard";
import ValueCard from "./ValueCard";
import SectionHeader from "./SectionHeader";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  const values = [
    {
      title: "Excellence",
      description: "We pursue the highest standards in every project.",
    },
    {
      title: "Integrity",
      description: "We operate with honesty and transparency.",
    },
    {
      title: "Community",
      description: "We value our connections with clients and community.",
    },
  ];

  const stats = [
    { value: "4+", label: "Years of Experience", highlighted: false },
    { value: "4.8/5", label: "Ratings from Customers", highlighted: true },
    { value: "200+", label: "Customers Served", highlighted: false },
    { value: "3", label: "Community Awards", highlighted: false },
  ];

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-32 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-7 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <section className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15f39a1dbd6185af100f4b0a3af89aae5d328f5b0530e53be4a82d6cd11fe9b3?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                alt="Painting experts at work"
                className="object-contain w-full aspect-[1.33] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1.5 w-full max-md:mt-10 max-md:max-w-full">
                <SectionHeader title="About Us" />
                <h1 className="mt-5 text-6xl font-semibold leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
                  Your Trusted Painting Experts
                </h1>
                <p className="mt-5 text-lg leading-6 text-stone-500 max-md:max-w-full">
                  Our mission is to deliver unparalleled painting services that
                  transform spaces and exceed expectations. We specialize in all
                  aspects of painting, from meticulous preparation and advanced
                  application techniques to the use of top-quality materials.
                  Our goal is to make your painting project as smooth and
                  stress-free as possible.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/222fbe14f6490cbb1fb760f6df4391935497f7bcfd47158ed8833e51d2317dbd?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                alt="Our values in action"
                className="object-contain grow w-full aspect-[1.3] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-3 text-neutral-600 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-xl font-bold leading-tight">Our Values:</h2>
                <div className="flex flex-col mt-4 w-full text-lg leading-6 max-w-[560px] max-md:max-w-full">
                  {values.map((value, index) => (
                    <ValueCard
                      key={index}
                      title={value.title}
                      description={value.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="shrink-0 mt-20 h-px border border-solid border-neutral-600 max-md:mt-10 max-md:max-w-full" />
        <section className="flex flex-wrap gap-5 items-start mt-20 font-semibold text-center max-md:mt-10 max-md:max-w-full">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              highlighted={stat.highlighted}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
