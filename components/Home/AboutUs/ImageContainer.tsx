import React from 'react';

interface ImageContainerProps {
  className?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex overflow-hidden flex-col w-full bg-gray-400 max-md:mt-10 max-md:max-w-full">
        <div className="flex shrink-0 bg-gray-400 h-[364px] max-md:max-w-full" />
      </div>
    </div>
  );
};

export default ImageContainer;