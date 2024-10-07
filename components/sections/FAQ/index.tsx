import React from "react";
import ExperienceCard from "./ExperienceCard";
import FAQItem from "./FAQItem";

interface FAQSectionProps {
  experienceYears: number;
  happyClients: number;
  faqItems: Array<{
    question: string;
    answer: string;
    isOpen: boolean;
  }>;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  experienceYears,
  happyClients,
  faqItems,
}) => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-16 pt-36 pb-20 w-full bg-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="w-full max-w-[1155px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex relative flex-col justify-center py-2 mx-2.5 max-w-full min-h-[425px] w-[555px] max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd05bbd632f2724156779574b90f14321b346ea604bbd73350dc711a3da5c3c2?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
                  alt=""
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative shrink-0 bg-neutral-600 h-[409px] max-md:max-w-full" />
              </div>
              <ExperienceCard
                experienceYears={experienceYears}
                happyClients={happyClients}
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full text-lg font-bold text-slate-900 max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start text-base tracking-widest text-sky-500 uppercase">
                FAQs Unveiled
              </h2>
              <h3 className="self-start mt-4 text-6xl leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Frequently Asked Questions
              </h3>
              <p className="mt-5 mr-6 text-base leading-6 text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel erat nibh. Sed rutrum turpis quis lacinia sollicitudin. Sed
                ac neque cursus, ornare augue pellentesque,
              </p>
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={item.isOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
