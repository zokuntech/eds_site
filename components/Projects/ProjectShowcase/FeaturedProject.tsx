import React from "react";

interface FeaturedProjectProps {
  imageUrl: string;
  altText: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  imageUrl,
  altText,
}) => {
  return (
    <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow w-full bg-neutral-200 max-md:mt-8 max-md:max-w-full">
        <img
          src={imageUrl}
          alt={altText}
          className="flex shrink-0 bg-gray-400 h-[383px] max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default FeaturedProject;
