import React from "react";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return (
    <p className="mt-4 mr-5 ml-4 font-medium leading-7 text-neutral-100 max-md:mr-2.5 max-md:max-w-full">
      {text}
    </p>
  );
};

export default Paragraph;
