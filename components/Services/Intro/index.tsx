import React from 'react';
import FeatureCard, { FeatureCardProps } from './FeatureCard';

interface HowWeStandOutProps {
  features: FeatureCardProps[];
}

const HowWeStandOut: React.FC<HowWeStandOutProps> = ({ features }) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-36 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-col w-full max-md:max-w-full">
          <div className="flex gap-3.5 items-center self-start text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4459fea51336b439a31ae6fd627f777b0a40161aeb823619656352729e1544f?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <span className="self-stretch my-auto">How we stand out</span>
          </div>
          <h1 className="mt-5 text-6xl font-semibold leading-tight text-neutral-600 max-md:max-w-full max-md:text-4xl">
            Tailored Solutions for Your Needs
          </h1>
        </header>
        <p className="flex flex-col mt-2.5 w-full text-xl font-medium leading-7 text-neutral-400 max-md:max-w-full">
          <span className="overflow-hidden flex-1 shrink gap-3 self-stretch w-full rounded max-md:max-w-full">
            We understand that every project is unique, whether you are a contractor overseeing new construction, a real estate agent looking to enhance property appeal, or a homeowner ready to refresh your living space. Our professional painting services are designed to meet the diverse needs of our clients, delivering top-quality results that stand the test of time.
          </span>
        </p>
        <div className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeStandOut;