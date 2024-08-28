import React from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  imageSrc: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/349403e9897af723301744b15a396e4244242f60ec33558fd141f52200572ec1?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Interior Painting",
    description:
      "Transform your living spaces with professional interior painting services, ensuring clean lines and a flawless finish.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/87663b8a261312aea19912b7ea324833c9568ac0f0ae5a6db0aa0c566dcb6b75?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Exterior Painting",
    description:
      "Boost your home's curb appeal with our high-quality exterior painting services, using durable paints.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/128e2c0acbe2b9368e71a08f21a06cddfba9a558ffe672933cda1ea16bd7f302?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Cabinetry Painting",
    description:
      "Refresh and modernize your kitchen or bathroom cabinets with our precise cabinetry painting techniques.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cdee7061f6049f89c1c55fa8a8f2e4ce96db2f71a0b6e2d3bfeb3c705c415d65?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Specialty Coatings",
    description:
      "Apply unique finishes and protective coatings for surfaces requiring special treatment, such as concrete or metal.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e7f592173e1720636eabf81f5acf46be724ee5766b34906dad7786183d93e3e6?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Color Consultation",
    description:
      "Receive expert advice on color selection and access to samples to help you choose the perfect palette for your project.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a61b87df38caf70df2a5d8b9db189887bdf69830b6fc9ff115193234e7daebbe?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Commercial Painting",
    description:
      "Enhance the look of your business with our commercial painting services, tailored to meet the needs of commercial properties.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-40 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col -mb-8 w-full max-w-[1141px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-col items-center self-center w-full max-w-[1008px] max-md:max-w-full">
          <div className="flex gap-3.5 items-center text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1a81de70e85bf27b70eabcb8c58dac41bab28668dd415d1215ed5338f0df65?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <span className="self-stretch my-auto">Our Services</span>
          </div>
          <h1 className="mt-5 text-6xl font-semibold text-center leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
            Comprehensive Solutions for Every Painting Need
          </h1>
          <p className="mt-5 text-lg leading-6 text-center text-stone-500 max-md:max-w-full">
            At EDS Custom Coatings, we offer a full range of painting services,
            from interior and exterior painting to cabinetry refinishing and
            specialty coatings. Our skilled team is dedicated to delivering
            exceptional quality and craftsmanship on every project. With expert
            color consultation, we ensure your space is beautifully transformed
            to meet your vision.
          </p>
        </header>
        <div className="flex flex-wrap gap-5 items-start mt-14 text-lg text-neutral-600 max-md:mt-10">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="flex flex-wrap gap-5 items-start mt-16 text-lg text-neutral-600 max-md:mt-10">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index + 3} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
