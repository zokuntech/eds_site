"use client";
import React from "react";

interface ContactInfoItem {
  icon: string;
  title: string;
  value: string;
}

const contactInfoData: ContactInfoItem[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8eb7600a74708eda8060d1ddd21b05f2d538745b31d940395200b6e96ce70b24?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Phone Number",
    value: "0761-8523-398",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/757af983165aaad3301f53c458c160ed93d25243c549185486f04e6f9fd9fb42?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Email Address",
    value: "hello@domainsite.com",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d149fe5ebb4e8a96569e21f79d7c9158a7ee6109ba25bbfa786d831df8244c6?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Location",
    value: "KLLG st, No.99, Pku City, ID 28289",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="flex gap-6 mt-6">
      <div className="flex flex-col">
        {contactInfoData.map((item, index) => (
          <img
            key={index}
            loading="lazy"
            src={item.icon}
            alt=""
            className="object-contain mt-9 aspect-[1.01] rounded-[100px] w-[71px]"
          />
        ))}
      </div>
      <div className="flex flex-col grow shrink-0 items-start my-auto text-2xl font-semibold leading-none basis-0 text-neutral-600 w-fit">
        {contactInfoData.map((item, index) => (
          <React.Fragment key={index}>
            <div>{item.title}</div>
            <div className="text-lg font-medium text-sky-500">{item.value}</div>
            {index < contactInfoData.length - 1 && (
              <div className="mt-14 max-md:mt-10"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
