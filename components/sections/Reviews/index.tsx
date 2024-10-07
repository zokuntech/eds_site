import * as React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    rating: 5,
    title: "Super Professional",
    description:
      "Amazing work…got my house painted. Super professional, great customer service, clean work, on time and even took the time to go to foothills to check the color of a house I liked so he could match it. Went above and beyond to make me feel comfortable with....",
    author: "Zavala Alma",
  },
  {
    rating: 5,
    title: "Produce Quality Work",
    description:
      "Eddy and his crew have done the inside and outside of our house. They produce quality work at reasonable prices and timely manner. They go the extra mile to make sure the customer is satisfied and they are really friendly people.....",
    author: "Sonia Bailey",
  },
  {
    rating: 5,
    title: "Highly Recommend",
    description:
      "I had the luck to find this local veteran owned business that for the same reason warrants the best service. Punctuality, professionalism, affordable prices and going that extra mile for the customer satisfaction is that without hesitation that I decided Read Me...",
    author: "Dalia Branigan",
  },
];

function MyComponent() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1141px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-col items-center self-center max-w-full w-[679px]">
          <div className="flex gap-3.5 items-center text-sm font-bold tracking-widest leading-none text-sky-500 uppercase whitespace-nowrap rounded-3xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/74f8db09c6ec8a32f7dacb43cb87d8d481787a0de40af57afbf2c0d94d41dbf3?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
              alt="Testimonials Icon"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <h2 className="self-stretch my-auto">Testimonials</h2>
          </div>
          <h1 className="mt-5 text-6xl font-semibold text-center leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
            Happy Customers, <br /> Happy World
          </h1>
        </header>
        <div className="flex flex-wrap gap-5 items-start mt-16 w-full min-h-[286px] max-md:mt-10 max-md:max-w-full">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex grow shrink gap-5 items-start min-w-[240px] w-[294px]"
            >
              <ReviewCard
                rating={review.rating}
                title={review.title}
                description={review.description}
                author={review.author}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyComponent;
