import React from "react";

interface Differentiator {
  icon: string;
  text: string;
}

const differentiators: Differentiator[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/63c105180b609451031474903564f834a251c748a395006222130f80a726b1ee?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    text: "Proven Track Record of Success",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/63c105180b609451031474903564f834a251c748a395006222130f80a726b1ee?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    text: "Experienced and Skilled Teams",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1cfb6c447e1212a96f5ee77a877f826ffcd287b3f992fa3dd2c84b1b03c0b45?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    text: "Comprehensive and Tailored Solutions",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1cfb6c447e1212a96f5ee77a877f826ffcd287b3f992fa3dd2c84b1b03c0b45?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    text: "Cutting-Edge Technologies and Equipment",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1cfb6c447e1212a96f5ee77a877f826ffcd287b3f992fa3dd2c84b1b03c0b45?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    text: "Exceptional Customer Service and Support",
  },
];

const DifferentiatorList: React.FC = () => {
  return (
    <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
      <p>
        {" "}
        we understand that every project is unique, whether you're a contractor
        overseeing new construction, a real estate agent looking to enhance
        property appeal, or a homeowner ready to refresh your living space. Our
        professional painting services are designed to meet the diverse needs of
        our clients, delivering top-quality results that stand the test of time.
      </p>
      {/* <ul className="flex flex-col w-full text-lg leading-6 text-gray-400 max-md:mt-5">
        {differentiators.map((item, index) => (
          <li key={index}>
            <div className="flex overflow-hidden gap-3 items-center leading-snug rounded">
              <img
                loading="lazy"
                src={item.icon}
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt=""
              />
              <div className="self-stretch my-auto w-[308px]">{item.text}</div>
            </div>
            {index < differentiators.length - 1 && (
              <div className="mt-4 w-full border border-solid bg-zinc-600 border-zinc-600 min-h-[1px]" />
            )}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default DifferentiatorList;
