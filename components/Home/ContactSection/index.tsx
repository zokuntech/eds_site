import React from 'react';
import ContactCard from './ContactCard';

const ContactSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="mb-0 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <ContactCard
            title="Let’s Make Your Vision a Reality"
            text="Have a project in mind? Need advice on color choices or service options? We’re here to assist you every step of the way. Contact us to schedule a consultation, request a free estimate, or simply to ask any questions you may have. We’re excited to collaborate with you on your next painting project."
            buttonText="Contact Us"
          />
          <figure className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c5aa57260e7866d46beedfef76a76c585dc708d21a4313519e558e6eddca3bd?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
              alt="Contact Us Illustration"
              className="object-contain grow w-full aspect-[1.06] max-md:mt-10 max-md:max-w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;