import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceData } from "./types";

const services: ServiceData[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f0ab241af5eb25bfde03d6c851e30222ecbfe8947d404471b112b9b8daa3387?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Interior Painting",
    description:
      "Enhance the atmosphere of your indoor spaces with professional interior painting. Perfect for living rooms, bedrooms, kitchens, and more.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/929173d8cf6b3fe298140246f2095d4c5fc6269feaa54d83be7fcc15e8bbde51?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Exterior Painting",
    description:
      "Protect and refresh your home's exterior with high-quality paints designed to withstand the elements, while boosting curb appeal.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0550e0b1d652fbe3b39a86ca43980a2e9bcca993f5495c3350bd42911362f60?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Cabinetry Painting",
    description:
      "Give your kitchen or bathroom a fresh, modern look by refinishing or painting existing cabinets for a cost-effective upgrade.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0550e0b1d652fbe3b39a86ca43980a2e9bcca993f5495c3350bd42911362f60?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Specialty Coatings",
    description:
      "Add unique textures, finishes, or protective coatings to walls, floors, and other surfaces to create custom looks or add durability.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/929173d8cf6b3fe298140246f2095d4c5fc6269feaa54d83be7fcc15e8bbde51?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Pressure Washing & Surface Preparation",
    description:
      "Prepare your surfaces for painting or simply refresh their appearance with expert pressure washing services that remove dirt,",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/929173d8cf6b3fe298140246f2095d4c5fc6269feaa54d83be7fcc15e8bbde51?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Color Consultation Services",
    description:
      "Take the guesswork out of choosing the perfect color palette with our samples and expert advice.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0550e0b1d652fbe3b39a86ca43980a2e9bcca993f5495c3350bd42911362f60?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Deck & Fence Painting/Staining",
    description:
      "Preserve the appearance of your outdoor wood structures with professional painting or staining services.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0550e0b1d652fbe3b39a86ca43980a2e9bcca993f5495c3350bd42911362f60?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Stucco Painting and Repair",
    description:
      "Enhance and maintain your stucco surfaces with specialized painting and repair services that ensure long-lasting beauty and protection.",
  },
];

const ExploreSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-col items-center self-center max-w-full w-[870px]">
          <div className="flex gap-3.5 items-center text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1a81de70e85bf27b70eabcb8c58dac41bab28668dd415d1215ed5338f0df65?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <span className="self-stretch my-auto">Explore More</span>
          </div>
          <h2 className="mt-5 text-6xl font-semibold text-center leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
            Why We Stand Out from the Competition
          </h2>
        </header>
        <div className="flex flex-col mt-16 text-center max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-start justify-center max-md:max-w-full">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
