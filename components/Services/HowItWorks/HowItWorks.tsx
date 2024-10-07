import React from "react";
import ProcessStep from "./ProcessStep";

interface ProcessStepData {
  icon: string;
  title: string;
  description: string;
}

const processSteps: ProcessStepData[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5f5df2544d6686af75a83196ac77012db7e9e6878af2b30dc0cf395211acf74?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Consultation & Estimate",
    description:
      "We begin by understanding your vision and needs. Our team will visit your property, discuss your project goals, and provide a detailed, free estimate tailored to your specific requirements.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/908e1310f7d38757bbf0ed6ded0fbfd39670296ed4853e8a05908e169df1ddf2?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Preparation & Painting",
    description:
      "Once the plan is set, we prepare the space by covering furniture, taping edges, and ensuring surfaces are ready for painting. Then, our professional team applies high-quality paint with precision & care.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/39a83890eaf546523cd9d662ec94d4c5588d937358c5458415444a90d971f739?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Final Walkthrough",
    description:
      "Finally, we walk you through the completed project to ensure you are delighted with the results. We'll discuss care and maintenance tips to keep your new paint looking fresh for years to come.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-28 w-full bg-sky-500 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 w-full max-w-[1065px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="text-base font-bold tracking-widest text-center text-white uppercase">
          How it works
        </h2>
        <h3 className="mt-7 text-6xl font-bold text-center text-white leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Making it Easy: A Simple Guide to Our Process
        </h3>
        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
