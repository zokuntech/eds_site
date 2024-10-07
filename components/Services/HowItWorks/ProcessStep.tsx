import React from "react";

interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-10 py-11 text-center border-white border-solid border-[5px] max-md:px-5 max-md:mt-6">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain self-center aspect-[1.02] w-[86px]"
        />
        <h4 className="text-2xl font-semibold leading-none text-white">
          {title}
        </h4>
        <p className="mt-6 text-base font-medium leading-6 text-neutral-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;
