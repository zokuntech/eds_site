import React from 'react';
import ContactHeader from './ContactHeader';
import ContactContent from './ContactContent';
import ContactButton from './ContactButton';
import ContactImage from './ContactImage';

const ContactSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="mb-0 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <ContactHeader />
              <ContactContent />
              <ContactButton />
            </div>
          </div>
          <ContactImage />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;