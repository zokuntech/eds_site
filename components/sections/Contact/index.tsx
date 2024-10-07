"use client";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
  };

  return (
    <main className="flex flex-col justify-center items-center px-16 py-32 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <section className="mb-0 w-full max-w-[1168px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <p className="text-base font-bold tracking-widest text-sky-500 uppercase">
                Building Dreams
              </p>
              <h1 className="mt-9 text-6xl font-bold leading-[65px] text-neutral-600 max-md:text-4xl max-md:leading-[52px]">
                Contact Us for Construction Excellence
              </h1>
              <p className="self-stretch mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel erat nibh. Sed rutrum turpis quis lacinia sollicitudin. Sed
                ac neque cursus, ornare augue pellentesque,
              </p>
              <ContactInfo />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
