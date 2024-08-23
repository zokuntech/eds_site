import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  variant: "outline" | "filled";
}

const StatCard: React.FC<StatCardProps> = ({ value, label, variant }) => {
  const baseClasses =
    "flex overflow-hidden flex-col justify-center items-center px-14 py-20 rounded-md min-w-[240px] w-[270px] max-md:px-5";
  const variantClasses =
    variant === "filled"
      ? "bg-sky-500 text-white"
      : "text-sky-500 bg-white border-2 border-sky-500 border-solid";

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <div className="text-5xl leading-tight max-md:text-4xl">{value}</div>
      <div
        className={`mt-1.5 text-lg leading-6 ${
          variant === "filled" ? "text-neutral-200" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: label.replace(" ", "<br/>") }}
      />
    </div>
  );
};

export default StatCard;
