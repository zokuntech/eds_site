import React from "react";

const FAQHeader: React.FC = () => {
  return (
    <header className="flex flex-col w-full max-w-[1064px] max-md:max-w-full">
      <div className="flex gap-3.5 items-center self-start text-sm font-semibold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/18cd76f9ee07751e52f01cd9ce94cb26249cc1717eae145c371c1043582f4098?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt=""
        />
        <span className="self-stretch my-auto">Frequently Asked Questions</span>
      </div>
      <h1 className="mt-5 text-6xl font-medium leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
        Everything You Need to Know About Our Services and Solutions
      </h1>
    </header>
  );
};

export default FAQHeader;
