import React from "react";

const ExploreButton: React.FC = () => {
  return (
    <button className="flex gap-4 justify-center items-center py-5 pr-7 pl-8 mt-12 text-lg font-bold tracking-wider leading-none bg-sky-500 max-md:px-5 max-md:mt-10">
      <span className="self-stretch my-auto">Explore More</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d27f885d5deee823d04b9621d42439109b7daee19d4c0510567bde868b8835?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.93] stroke-[2px] stroke-white w-[27px]"
      />
    </button>
  );
};

export default ExploreButton;
