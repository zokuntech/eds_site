import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h2 className="text-6xl leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
      {text}
    </h2>
  );
};

export default Heading;
