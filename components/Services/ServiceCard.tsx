import React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col min-w-[240px] w-[367px]">
      <div className="flex overflow-hidden flex-col justify-center items-center aspect-square bg-zinc-900 w-[367px]">
        <div className="flex shrink-0 aspect-square bg-stone-500 h-[376px]">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full text-lg max-w-[360px] text-neutral-600">
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
        <p className="mt-4 leading-6 text-stone-500">{description}</p>
        <div className="flex gap-4 items-center self-start mt-4 tracking-wider leading-none">
          <span className="self-stretch my-auto">Learn More</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7584763564a834bebfa509d0fdb107f45e7bb57f89817ac94511efbda421f2?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[999px] w-[46px]"
          />
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
