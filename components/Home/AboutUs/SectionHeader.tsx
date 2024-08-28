import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex gap-3.5 items-center self-start text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d045d640cd6405f1182f2be10081a34ad419072878ae8728ec6899e43b7b24?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
      <div className="self-stretch my-auto">{title}</div>
    </div>
  );
};

export default SectionHeader;