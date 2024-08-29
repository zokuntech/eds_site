import React from "react";

const ExpertiseHeader: React.FC = () => {
  return (
    <div className="flex flex-col w-full font-semibold max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex gap-3.5 items-center self-start text-sm tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d045d640cd6405f1182f2be10081a34ad419072878ae8728ec6899e43b7b24?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt=""
          />
          <div className="self-stretch my-auto">Expertise and Experience</div>
        </div>
        <h2 className="mt-5 text-6xl leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
          Bringing Expertise to Every Project
        </h2>
        <p className="mt-5 text-lg leading-6 text-neutral-600 max-md:max-w-full">
          With years of experience in the industry, we have built a reputation
          for reliability, attention to detail, and a personalized approach to
          every project. Whether it's a residential makeover, a commercial
          renovation, or a specialty coating job, we bring the same level of
          passion and precision to every task.
        </p>
      </div>
    </div>
  );
};

export default ExpertiseHeader;
