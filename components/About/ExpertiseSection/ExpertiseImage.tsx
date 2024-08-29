import React from "react";

const ExpertiseImage: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4bd815621af21a63287140f0d5604fdcac54a3ae3903032d2460c178848f592?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
        className="object-contain grow ml-14 w-full aspect-[0.73] max-md:mt-10 max-md:max-w-full"
        alt="Expertise illustration"
      />
    </div>
  );
};

export default ExpertiseImage;
