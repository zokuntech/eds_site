import React from "react";

interface ExpertiseItemProps {
  text: string;
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ text }) => (
  <div className="flex overflow-hidden gap-3 items-center py-4 pr-3 pl-6 max-w-full border-2 border-sky-500 border-solid w-[270px] max-md:pl-5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2c5ad7c4ae5bcbd1a8117c7830b9c7b52025807a702b659e0e507d6e179c10c?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
      alt=""
    />
    <div className="self-stretch my-auto">{text}</div>
  </div>
);

const ExpertiseList: React.FC = () => {
  const expertiseItems = [
    "Residential Properties",
    "Interior Painting",
    "Specialty Coatings",
    "Commercial Properties",
    "Exterior Painting",
    "Restoration",
  ];

  return (
    <div className="flex flex-wrap gap-5 items-start mt-6 mr-0 text-lg font-medium leading-snug text-sky-500">
      {expertiseItems.map((item, index) => (
        <ExpertiseItem key={index} text={item} />
      ))}
    </div>
  );
};

export default ExpertiseList;
