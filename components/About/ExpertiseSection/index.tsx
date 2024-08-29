import React from "react";
import ExpertiseHeader from "./ExpertiseHeader";
import ExpertiseContent from "./ExpertiseContent";
import ExpertiseImage from "./ExpertiseImage";

const ExpertiseSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="-mb-6 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ExpertiseHeader />
            <ExpertiseContent />
          </div>
          <ExpertiseImage />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
