import React from "react";
import GalleryItem from "./GalleryItem";

const GalleryRow: React.FC = () => {
  return (
    <div className="mt-11 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    </div>
  );
};

export default GalleryRow;
