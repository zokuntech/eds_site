import React from 'react';
import DifferentiatorList from './DifferentiatorList';
import ImageGallery from './ImageGallery';
import PartnerLogos from './PartnerLogos';

const KeyDifferentiators: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-col max-w-full w-[870px]">
          <div className="flex gap-3.5 items-center self-start text-sm font-medium tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4459fea51336b439a31ae6fd627f777b0a40161aeb823619656352729e1544f?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
            <span className="self-stretch my-auto">The Kombong Services</span>
          </div>
          <h1 className="mt-5 text-6xl leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
            Key Differentiators and Value Proposition
          </h1>
        </header>
        <section className="mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <DifferentiatorList />
            <ImageGallery />
          </div>
        </section>
        <PartnerLogos />
        <div className="shrink-0 mt-16 h-px border border-solid bg-zinc-600 border-zinc-600 max-md:mt-10 max-md:max-w-full" />
      </div>
    </main>
  );
};

export default KeyDifferentiators;