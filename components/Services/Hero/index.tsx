import React from 'react';

interface ServicesHeaderProps {
  title: string;
  breadcrumb: string;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <header className="flex flex-col justify-center items-center px-20 py-52 w-full bg-gray-400 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-10 max-w-full w-[253px] max-md:mb-2.5">
        <h1 className="text-6xl leading-tight text-white max-md:text-4xl">
          {title}
        </h1>
        <nav className="self-center mt-4 text-sm font-medium tracking-widest leading-none text-gray-400 uppercase">
          {breadcrumb}
        </nav>
      </div>
    </header>
  );
};

export default ServicesHeader;