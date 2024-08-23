import React from 'react';

export interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, title, description }) => {
  return (
    <article className="flex flex-col min-w-[240px] w-[322px]">
      <img loading="lazy" src={iconSrc} alt="" className="object-contain aspect-square rounded-[999px] w-[70px]" />
      <div className="flex flex-col mt-5 max-w-full w-[322px]">
        <h3 className="text-2xl font-bold leading-tight text-neutral-600">{title}</h3>
        <p className="mt-4 text-lg leading-6 text-stone-500">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;