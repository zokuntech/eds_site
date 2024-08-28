import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-4 text-2xl font-semibold text-sky-500 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ad2fa3e8a5f1fc38d30cef2933d6eac0a6dde626a60b384923a3fac67ae80dc?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a" className="object-contain shrink-0 aspect-[0.97] w-[59px]" alt="EDS Custom Coatings logo" />
        <div className="flex-auto my-auto w-[300px]">EDS Custom Coatings</div>
      </div>
    </div>
  );
};

export default Logo;