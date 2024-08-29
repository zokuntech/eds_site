import React from "react";

interface MissionStatementProps {
  text: string;
  isHighlighted: boolean;
}

const MissionStatement: React.FC<MissionStatementProps> = ({
  text,
  isHighlighted,
}) => {
  const baseClasses =
    "overflow-hidden gap-2.5 px-6 py-5 mt-4 w-full text-base font-medium leading-6 max-md:px-5 max-md:max-w-full";
  const highlightedClasses = "text-white bg-sky-500";
  const normalClasses =
    "text-neutral-600 border-sky-500 border-solid border-[3px]";

  return (
    <div
      className={`${baseClasses} ${
        isHighlighted ? highlightedClasses : normalClasses
      }`}
    >
      {text}
    </div>
  );
};

export default MissionStatement;
