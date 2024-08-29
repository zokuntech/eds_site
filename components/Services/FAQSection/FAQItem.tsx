import React from "react";

interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen }) => {
  return (
    <div
      className={`overflow-hidden ${
        isOpen
          ? "flex flex-col p-8 max-w-full bg-sky-500"
          : "gap-2.5 p-8 mt-4 max-w-full bg-neutral-200"
      } w-[576px] max-md:px-5 max-md:max-w-full`}
    >
      <h2
        className={`text-2xl font-bold leading-tight ${
          isOpen ? "text-white" : "text-neutral-600"
        } max-md:max-w-full`}
      >
        {question}
      </h2>
      {isOpen && answer && (
        <p className="mt-4 text-lg leading-6 text-white max-md:max-w-full">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
