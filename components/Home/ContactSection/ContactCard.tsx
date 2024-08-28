import React from 'react';

interface ContactCardProps {
  title: string;
  text: string;
  buttonText: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, text, buttonText }) => {
  return (
    <section className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
      <header className="flex gap-3.5 items-center self-start text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/18cd76f9ee07751e52f01cd9ce94cb26249cc1717eae145c371c1043582f4098?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="self-stretch my-auto">Contact Us</div>
      </header>
      <h2 className="mt-5 text-6xl font-semibold leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-6 text-gray-400 max-md:max-w-full">
        {text}
      </p>
      <a
        href="#"
        className="flex gap-4 justify-center items-center self-start py-5 pr-7 pl-8 mt-10 text-lg font-medium tracking-wider leading-none text-white bg-sky-500 max-md:px-5 max-md:mt-10"
        tabIndex={0}
        role="button"
      >
        <div className="self-stretch my-auto">{buttonText}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d27f885d5deee823d04b9621d42439109b7daee19d4c0510567bde868b8835?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.93] stroke-[2px] stroke-white w-[27px]"
        />
      </a>
    </section>
  );
};

export default ContactCard;