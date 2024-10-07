import React from "react";

const GalleryItem: React.FC = () => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow justify-center w-full bg-gray-400 max-md:mt-10">
        <div className="flex shrink-0 bg-gray-400 h-[374px]" />
      </div>
    </div>
  );
};

export default GalleryItem;
