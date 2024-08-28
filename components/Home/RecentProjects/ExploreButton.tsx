import React from "react";

interface ButtonProps {
  text: string;
  iconSrc: string;
}

const Button: React.FC<ButtonProps> = ({ text, iconSrc }) => {
  return (
    <button className="flex gap-4 justify-center items-center self-end py-5 pr-7 pl-8 mt-16 text-lg font-semibold tracking-wider leading-none text-white bg-sky-500 max-md:px-5 max-md:mt-10">
      <span className="self-stretch my-auto">{text}</span>
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[3.38] stroke-[1px] stroke-white w-[27px]"
      />
    </button>
  );
};

export default Button;
