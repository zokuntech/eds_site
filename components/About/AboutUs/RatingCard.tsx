import React from "react";

interface RatingCardProps {
  rating: number;
  ratingText: string;
}

const RatingCard: React.FC<RatingCardProps> = ({ rating, ratingText }) => {
  return (
    <div className="flex overflow-hidden flex-col mt-9 max-w-full bg-gray-400 w-[484px]">
      <div className="flex relative flex-col pb-3 w-full min-h-[347px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f5b418a804d9e532c1924beb0ef5d5a012718e16be317a308beed8eea529bb2?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
          alt="Background for rating card"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-start px-12 py-9 w-full bg-gray-400 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-5xl leading-tight text-gray-900 max-md:text-4xl">
              {rating}/5
            </div>
            <div className="mt-1.5 text-lg leading-6 text-zinc-600">
              {ratingText}
            </div>
          </div>
          <button className="flex gap-4 justify-center items-center py-5 pr-7 pl-8 mt-24 text-lg font-semibold tracking-wider leading-none text-white bg-sky-500 min-h-[57px] max-md:px-5 max-md:mt-10">
            <span className="self-stretch my-auto">View Our Work</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4eedf2087f53cca98f2405ba80a63fde05eff6fcc23c96cfbaf8f1e3ba5e29f?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.8] w-[27px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
