import React from "react";
import StatCard from "./StatCard";
import ValueCard from "./ValueCard";
import ImageContainer from "./ImageContainer";

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
    { value: "10+", label: "Years of Experience", variant: "outline" },
    { value: "4.8/5", label: "Ratings from Customers", variant: "filled" },
    { value: "20+", label: "Countries Served", variant: "outline" },
    { value: "1.3k", label: "Successful Installations", variant: "outline" },
  ];

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-32 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-7 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <section className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <ImageContainer className="w-6/12 max-md:ml-0 max-md:w-full" />
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1.5 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-3.5 items-center self-start text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d045d640cd6405f1182f2be10081a34ad419072878ae8728ec6899e43b7b24?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    alt=""
                  />
                  <span className="self-stretch my-auto">About Us</span>
                </div>
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
            <ImageContainer className="w-6/12 max-md:ml-0 max-md:w-full" />
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-neutral-600 max-md:mt-10 max-md:max-w-full">
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
              variant={stat.variant}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
