import React from "react";
import ContactInfo from "./ContactInfo";
import FAQList from "./FAQList";

const FAQContent: React.FC = () => {
  return (
    <div className="mt-16 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <ContactInfo />
        <FAQList />
      </div>
    </div>
  );
};

export default FAQContent;
