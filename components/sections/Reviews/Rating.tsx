import React from "react";

interface RatingProps {
  count: number;
}

const Rating: React.FC<RatingProps> = ({ count }) => {
  return (
    <div className="flex gap-1 items-start">
      {[...Array(count)].map((_, index) => (
        <img
          key={index}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/146ddaa29a62a4dbb43f707ba3b1eff1392e9d636b9ec4cc04e6604346772f27?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
          alt=""
          className="object-contain shrink-0 w-6 rounded-sm aspect-square"
        />
      ))}
    </div>
  );
};

export default Rating;
