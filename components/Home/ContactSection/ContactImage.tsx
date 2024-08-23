import React from "react";

const ContactImage: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow justify-center w-full bg-gray-400 max-md:mt-10 max-md:max-w-full">
        <div
          className="flex shrink-0 bg-gray-400 h-[547px] max-md:max-w-full"
          role="img"
          aria-label="Contact image"
        ></div>
      </div>
    </div>
  );
};

export default ContactImage;
