import React from "react";

interface ExperienceCardProps {
  experienceYears: number;
  happyClients: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experienceYears,
  happyClients,
}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-center px-20 pt-10 pb-6 mt-7 font-bold bg-sky-500 border-white border-solid border-[10px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col self-stretch my-auto">
        <div className="flex gap-1 self-center ml-2.5 text-white w-[46px]">
          <div className="grow text-6xl leading-none text-right max-md:text-4xl">
            {experienceYears}
          </div>
          <div className="self-start text-3xl">+</div>
        </div>
        <div className="mt-7 text-xl text-center text-neutral-100">
          Years Experience
        </div>
      </div>
      <div className="shrink-0 self-start w-px border border-white border-solid h-[120px]" />
      <div className="flex flex-col items-start self-stretch my-auto">
        <div className="flex gap-2 ml-5 text-white whitespace-nowrap max-md:ml-2.5">
          <div className="text-6xl leading-none text-right max-md:text-4xl">
            {happyClients}
          </div>
          <div className="self-start text-3xl">+</div>
        </div>
        <div className="mt-7 text-xl text-center text-neutral-100">
          Happy Client
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
