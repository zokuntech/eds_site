import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="self-center px-14 py-5 mt-7 max-w-full uppercase bg-sky-500 w-[218px] max-md:px-5">
      {text}
    </button>
  );
};

export default Button;
