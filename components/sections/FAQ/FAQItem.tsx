import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen }) => {
  return (
    <>
      <div className="flex flex-wrap gap-10 self-start mt-9 leading-tight text-sky-500 max-md:max-w-full">
        <div>{question}</div>
        <img loading="lazy" src={isOpen ? "https://cdn.builder.io/api/v1/image/assets/TEMP/e9ac8b368a01c04ba8b998771eed5d295abd27867ff36bea97122331eb958dd1?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a" : "https://cdn.builder.io/api/v1/image/assets/TEMP/45e1759a4e0b21283386a84308d581ee05fbd26796a8460c9c6a7c38aada330e?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"} alt="" className="object-contain shrink-0 aspect-[0.86] w-[18px]" />
      </div>
      <div className="shrink-0 mt-5 max-w-full h-px border border-sky-500 border-solid w-[541px]" />
      {isOpen && (
        <div className="mt-3 mr-8 leading-6 text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
          {answer}
        </div>
      )}
    </>
  );
};

export default FAQItem;