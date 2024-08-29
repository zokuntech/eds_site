import React from 'react';
import FAQHeader from './FAQHeader';
import FAQContent from './FAQContent';

const FAQSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-24 w-full bg-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1140px] max-md:max-w-full">
        <FAQHeader />
        <FAQContent />
      </div>
    </section>
  );
};

export default FAQSection;