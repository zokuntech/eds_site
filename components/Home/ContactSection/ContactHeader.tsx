import React from 'react';

const ContactHeader: React.FC = () => {
  return (
    <div className="flex gap-3.5 items-center self-start text-sm font-bold tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/18cd76f9ee07751e52f01cd9ce94cb26249cc1717eae145c371c1043582f4098?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
      <div className="self-stretch my-auto">Contact Us</div>
    </div>
  );
};

export default ContactHeader;