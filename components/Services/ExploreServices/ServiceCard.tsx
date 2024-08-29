import React from "react";
import { ServiceData } from "./types";

const ServiceCard: React.FC<ServiceData> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col items-center px-8 py-9 bg-white border-2 border-sky-500 border-solid min-h-[280px] min-w-[240px] w-[270px] max-md:px-5">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain aspect-square rounded-[99px] w-[70px]"
      />
      <div className="flex flex-col items-start mt-4 max-w-full w-[206px]">
        <h3 className="text-xl font-bold leading-tight text-neutral-600">
          {title}
        </h3>
        <p className="mt-4 text-xs leading-4 text-stone-500">{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
