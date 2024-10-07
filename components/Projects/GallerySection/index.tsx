import React from "react";
import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";

const GallerySection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-32 max-w-full bg-white w-[1440px] max-md:px-5 max-md:py-24">
      <div className="flex flex-col mb-0 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <GalleryHeader />
        <GalleryGrid />
      </div>
    </section>
  );
};

export default GallerySection;
