import React from "react";

const GalleryHeader: React.FC = () => {
  return (
    <header className="flex flex-col items-center self-center w-full max-w-[991px] text-neutral-600 max-md:max-w-full">
      <h2 className="text-base font-bold tracking-widest leading-none text-sky-500 uppercase">
        Gallery
      </h2>
      <h1 className="mt-4 text-5xl font-semibold leading-tight text-center max-md:max-w-full max-md:text-4xl">
        {"Transformations We've Completed"}
      </h1>
      <p className="mt-4 text-xl font-medium leading-7 text-center max-md:max-w-full">
        {
          "Explore the stunning transformations we've made for clients. Whether it's a bold exterior refresh or an intricate interior job, these projects demonstrate the skill and passion we bring to every space we work on."
        }
      </p>
    </header>
  );
};

export default GalleryHeader;
