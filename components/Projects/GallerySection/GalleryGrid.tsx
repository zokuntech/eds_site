import React from "react";
import GalleryRow from "./GalleryRow";

const GalleryGrid: React.FC = () => {
  return (
    <div className="mt-9 max-md:max-w-full">
      <GalleryRow />
      <GalleryRow />
      <GalleryRow />
    </div>
  );
};

export default GalleryGrid;
