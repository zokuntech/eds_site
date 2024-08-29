import React from "react";
import FAQItem from "./FAQItem";

interface FAQItemType {
  question: string;
  answer?: string;
  isOpen: boolean;
}

const faqData: FAQItemType[] = [
  {
    question: "How long will my painting project take?",
    answer:
      "The timeline depends on the project size and complexity. We'll provide an estimated timeline during the consultation and keep you updated throughout.",
    isOpen: true,
  },
  {
    question: "What types of paint do you use?",
    isOpen: false,
  },
  {
    question: "Are you licensed and insured?",
    isOpen: false,
  },
];

const FAQList: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        {faqData.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
