import React from "react";
import { ServiceCardProps } from "./types";

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  learnMoreSrc,
  readMore,
}) => {
  return (
    <article className="flex flex-col grow shrink min-w-[240px] w-[297px]">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} service`}
        className="object-contain max-w-full aspect-[1.31] w-[367px]"
      />
      <div className="flex flex-col mt-6 w-full max-w-[360px]">
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
        <p className="mt-4 font-medium leading-6 text-neutral-400">
          {description}
          {readMore && (
            <span className="font-bold text-sky-500"> Read More</span>
          )}
        </p>
        <div className="flex gap-4 items-center self-start mt-4 tracking-wider leading-none">
          <span className="self-stretch my-auto">Learn More</span>
          <img
            loading="lazy"
            src={learnMoreSrc}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[999px] w-[46px]"
          />
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
