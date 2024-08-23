import React from "react";

const GetQuoteButton: React.FC = () => {
  return (
    <button className="flex gap-4 justify-center items-center py-5 pr-7 pl-8 text-lg font-semibold tracking-wider leading-none text-white bg-sky-500 max-md:px-5">
      <span className="self-stretch my-auto">Get Quote</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60b6a108630aeb72c786a6986817411810a3c893dc7b2df69b4041333e9c4ee2?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[3.38] w-[27px]"
      />
    </button>
  );
};

export default GetQuoteButton;
