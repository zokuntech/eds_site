import React from "react";

const ImageGallery: React.FC = () => {
  return (
    <>
      <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col grow w-full bg-white max-md:mt-5">
          <div className="flex shrink-0 bg-gray-400 h-[328px]" />
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col grow w-full bg-white max-md:mt-5 max-md:max-w-full">
          <div className="flex shrink-0 bg-gray-400 h-[328px] max-md:max-w-full" />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
