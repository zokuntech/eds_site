import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceData } from './serviceData';

const ServicesPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-40 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <section className="flex flex-col -mb-8 w-full max-w-[1141px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-col items-center self-center w-full max-w-[1008px] max-md:max-w-full">
          <div className="flex gap-3.5 items-center text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1a81de70e85bf27b70eabcb8c58dac41bab28668dd415d1215ed5338f0df65?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <span className="self-stretch my-auto">Our Services</span>
          </div>
          <h1 className="mt-5 text-6xl font-semibold text-center leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
            Comprehensive Solutions for Every Painting Need
          </h1>
          <p className="mt-5 text-lg leading-6 text-center text-stone-500 max-md:max-w-full">
            At EDS Custom Coatings, we offer a full range of painting services, from interior and exterior painting to cabinetry refinishing and specialty coatings. Our skilled team is dedicated to delivering exceptional quality and craftsmanship on every project. With expert color consultation, we ensure your space is beautifully transformed to meet your vision.
          </p>
        </header>
        <div className="flex flex-wrap gap-5 items-start mt-14 max-md:mt-10">
          {serviceData.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="flex flex-wrap gap-5 items-start mt-16 max-md:mt-10">
          {serviceData.slice(3).map((service, index) => (
            <ServiceCard key={index + 3} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;