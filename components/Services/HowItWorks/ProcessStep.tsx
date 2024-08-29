import React from 'react';

interface ProcessStepProps {
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col px-12 py-12 mt-14 font-semibold border-white border-solid border-[3px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h3 className="self-start text-3xl leading-tight max-md:max-w-full">{title}</h3>
      <p className="mt-3 text-xl leading-7 max-md:max-w-full">{description}</p>
    </article>
  );
};

export default ProcessStep;