import React from "react";
import ProcessStep from "./ProcessStep";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Step 1: Initial Consultation",
    description:
      "Our process begins with a detailed consultation where we discuss your vision, needs, and budget. Whether you're looking for a full exterior makeover or a specific interior project, we take the time to understand your goals and offer expert advice on color selection, materials, and the overall scope of work.",
  },
  {
    title: "Step 2: Detailed Proposal & Scheduling",
    description:
      "After our consultation, we provide a comprehensive proposal that outlines the project details, timeline, and costs. Once you approve the proposal, we schedule the project at a time that is convenient for you, ensuring that our work fits seamlessly into your schedule.",
  },
  {
    title: "Step 3: Surface Preparation",
    description:
      "Proper preparation is key to achieving a flawless finish. Our team carefully prepares all surfaces by cleaning, sanding, filling cracks, and repairing any imperfections. We also take great care to protect your property by covering furniture, floors, and landscaping.",
  },
  {
    title: "Step 4: Painting & Application",
    description:
      "With surfaces fully prepped, our skilled painters apply the chosen paint or coating using the best techniques and tools for the job. We focus on even coverage, clean lines, and achieving the perfect finish. Whether it's interior walls, exterior siding, or specialty coatings, we ensure every coat is applied with precision.",
  },
  {
    title: "Step 5: Final Touches & Inspection",
    description:
      "Once the painting is complete, we conduct a thorough inspection to ensure every detail meets our high standards. We address any touch-ups needed and ensure the work area is clean and tidy. Your satisfaction is our priority, and we won't consider the job done until you're completely happy with the results.",
  },
  {
    title: "Step 6: Walkthrough & Project Completion",
    description:
      "Finally, we walk you through the completed project to ensure you are delighted with the results. We'll discuss care and maintenance tips to keep your new paint looking fresh for years to come. Our goal is not just to meet your expectations, but to exceed them.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-16 pt-28 pb-56 w-full bg-sky-500 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 mb-0 w-full max-w-[1039px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 text-white basis-0 w-fit max-md:max-w-full">
          <header className="flex flex-col items-center w-full max-w-full">
            <div className="flex gap-3.5 items-center text-sm font-bold tracking-widest leading-none uppercase rounded-3xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/880eb7c4c5ac0d3fbb848e4dd72d9f4f41b3ee4e90a48d5cfd7088351254b8c2?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                alt=""
              />
              <h2 className="self-stretch my-auto">How It Works</h2>
            </div>
            <h1 className="mt-5 mr-0 text-6xl font-semibold text-center leading-[83px] max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
              Making it Easy: A Simple Guide to Our Process
            </h1>
          </header>
          <div className="flex flex-col pl-10 mt-16 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
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
