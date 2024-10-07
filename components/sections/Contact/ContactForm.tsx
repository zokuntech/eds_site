"use client";
import React from "react";

interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-10 py-12 mx-auto w-full text-lg font-medium border border-solid shadow-sm bg-neutral-50 border-stone-500 text-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <h2 className="self-start text-3xl font-bold text-slate-900">
        Fill The Form Below
      </h2>
      <div className="flex gap-5 justify-between mt-8 max-w-full whitespace-nowrap w-[302px]">
        <label htmlFor="name">Name</label>
        <label htmlFor="email">Email</label>
      </div>
      <div className="flex flex-wrap gap-4 mt-3.5 text-base max-md:max-w-full">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="px-6 py-4 border border-solid border-neutral-500 max-md:px-5"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="px-6 py-4 border border-solid border-neutral-500 max-md:px-5"
          required
        />
      </div>
      <label htmlFor="subject" className="self-start mt-8">
        Subject
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Your Subject"
        className="px-6 py-4 mt-3.5 text-base border border-solid border-neutral-500 max-md:px-5 max-md:max-w-full"
        required
      />
      <label htmlFor="message" className="self-start mt-8">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="px-6 pt-6 pb-28 mt-3.5 text-base border border-solid border-neutral-500 max-md:px-5 max-md:pb-28 max-md:max-w-full"
        required
      ></textarea>
      <button
        type="submit"
        className="px-16 py-5 mt-8 font-bold text-center text-white uppercase bg-sky-500 max-md:px-5 max-md:max-w-full"
      >
        Submit Message
      </button>
    </form>
  );
};

export default ContactForm;
