import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceData } from "./types";

const serviceData: ServiceData[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/df4dc5c6f9b6e56f8c64ff896274e35329b4dc70010b7f9f21728c2851272d4e?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Residential Customers",
    description:
      "Bring your home to life with our expert residential painting services. Whether you need a fresh coat for a single room or a complete exterior makeover, our team delivers impeccable results that enhance the beauty and value of your home.",
    learnMoreSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8c7584763564a834bebfa509d0fdb107f45e7bb57f89817ac94511efbda421f2?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7fb06deae73fde1a9132e550b413584c9d48504f8bd3cb72e8722e41f6273af6?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Commercial Customers",
    description:
      "Create a professional and inviting atmosphere for your business. Our commercial painting services are tailored to meet the needs of offices, retail spaces, and industrial buildings, ensuring a polished...",
    learnMoreSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/260ee6342486c476a85913fc7886956f37b5dc349c04c195a746e5fd07f20915?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    readMore: true,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/755f7be5619f2f915309d20e1cd7a4c2c0481e047a0c0ee5fc8e630be56b7d86?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Real Estate Investors",
    description:
      "Partner with us to perfect your new builds. Our new construction painting services ensure that every surface is flawlessly finished, meeting the high standards expected by builders and contractors.",
    learnMoreSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/260ee6342486c476a85913fc7886956f37b5dc349c04c195a746e5fd07f20915?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
  },
];

const CustomerService: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-36 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-col items-center self-center max-w-full w-[916px]">
          <div className="flex gap-3.5 items-center text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1a81de70e85bf27b70eabcb8c58dac41bab28668dd415d1215ed5338f0df65?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <span className="self-stretch my-auto">Our Customer</span>
          </div>
          <h1 className="mt-3 text-6xl font-semibold leading-tight text-center text-neutral-600 max-md:max-w-full max-md:text-4xl">
            Who We Service
          </h1>
        </header>
        <div className="flex flex-wrap gap-7 items-start mt-16 text-lg text-neutral-600 max-md:mt-10">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
