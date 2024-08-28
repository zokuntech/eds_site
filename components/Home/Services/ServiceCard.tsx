import React from 'react';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => {
  return (
    <article className="flex flex-col min-w-[240px] w-[367px]">
      <img loading="lazy" src={imageSrc} alt={`${title} service`} className="object-contain max-w-full aspect-[0.98] w-[367px]" />
      <div className="flex flex-col mt-6 w-full max-w-[360px]">
        <h3 className="text-2xl font-bold leading-tight text-neutral-600">{title}</h3>
        <p className="mt-4 leading-6 text-stone-500">{description}</p>
        <div className="flex gap-4 items-center self-start mt-4 tracking-wider leading-none">
          <span className="self-stretch my-auto">Learn More</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dfc031c41c901a2bb4b4e09babb9035ed3b90cc56cba4a38b34a69086b730f0?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[999px] w-[46px]" />
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;