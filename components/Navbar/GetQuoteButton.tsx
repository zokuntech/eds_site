import React from 'react';

const GetQuoteButton: React.FC = () => {
  return (
    <button className="flex gap-4 justify-center items-center py-5 pr-6 pl-6 font-semibold tracking-wider leading-none text-white bg-sky-500 max-md:px-5">
      <span className="self-stretch my-auto">Get Quote</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d27f885d5deee823d04b9621d42439109b7daee19d4c0510567bde868b8835?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a" className="object-contain shrink-0 self-stretch my-auto aspect-[1.93] w-[27px]" alt="" />
    </button>
  );
};

export default GetQuoteButton;