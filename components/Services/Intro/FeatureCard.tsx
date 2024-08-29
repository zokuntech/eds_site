import React from "react";

export interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-wrap grow gap-10 px-12 py-9 text-xl font-medium leading-7 text-black border-sky-500 border-solid border-[3px] max-md:px-5 max-md:mt-10">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="object-contain shrink-0 my-auto aspect-[0.98] w-[59px]"
        />
        <div className="flex-auto w-[335px]">
          <span className="text-2xl font-semibold text-sky-500">{title}</span>
          <br />
          <span className="text-lg text-stone-500">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
