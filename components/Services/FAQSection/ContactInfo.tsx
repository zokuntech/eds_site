import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-1 text-lg leading-snug text-center text-sky-500 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9208a76b29e39aa4b99713fa6df682a4d683f85768c15728eabfe3694ccf40ee?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
          className="object-contain w-full aspect-[1.34] max-md:max-w-full"
          alt="Decorative FAQ illustration"
        />
        <p className="self-start mt-6">
          Any question?{" "}
          <a href="mailto:edscustomcoatings@gmail.com" className="text-sky-500">
            edscustomcoatings@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
