import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface ReadyToBreakGroundProps {
  title: string;
  description: string;
  buttonText: string;
}

const ReadyToBreakGround: React.FC<ReadyToBreakGroundProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-40 w-full bg-neutral-600 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[768px] max-md:mb-2.5">
        <Heading text={title} />
        <Paragraph text={description} />
        <Button text={buttonText} />
      </div>
    </section>
  );
};

export default ReadyToBreakGround;
