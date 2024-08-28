import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  highlighted: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, highlighted }) => {
  const baseClasses =
    "flex overflow-hidden flex-col justify-center items-center px-14 py-20 rounded-md min-w-[240px] w-[270px] max-md:px-5";
  const highlightedClasses = highlighted
    ? "bg-sky-500"
    : "text-sky-500 bg-white border-2 border-sky-500 border-solid";

  return (
    <div className={`${baseClasses} ${highlightedClasses}`}>
      <div
        className={`text-5xl leading-tight ${
          highlighted ? "text-white" : ""
        } max-md:text-4xl`}
      >
        {value}
      </div>
      <div
        className={`mt-1.5 text-lg leading-6 ${
          highlighted ? "text-neutral-200" : ""
        }`}
      >
        {label.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatCard;
