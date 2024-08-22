import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="overflow-hidden gap-2.5 px-6 py-5 mt-4 w-full bg-white rounded-md border-2 border-sky-500 border-solid max-md:px-5 max-md:max-w-full">
      <span className="font-semibold text-sky-500">{title}</span>
      <ul>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default ValueCard;