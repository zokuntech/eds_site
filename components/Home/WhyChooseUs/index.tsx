import React from 'react';
import WhyChooseUsSection from './WhyChooseUsSection';
import { FeatureCardProps } from './FeatureCard';

const features: FeatureCardProps[] = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a925604c8dac6b680b592cc77b236850aaf2868419d70047088baeb5b863977f?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Quality Worksmanship",
    description: "We take pride in our attention to detail and commitment to quality. We use only the highest quality materials to ensure a flawless finish."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8eac7bd653e2e23889a22a0799142081a2d2e14bc4175d02117666dc455370b?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Customer Satisfaction",
    description: "Our customers are our top priority. We work closely with you from start to finish, ensuring your vision is realized and your expectations are exceeded."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f04848ebb67251846602754d536ea76c67d501b39013f9c3ed7ab8cb846a4352?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    title: "Reliable and Professional",
    description: "We understand the importance of reliability and professionalism in our work by maintaining a clean work environment and take care of your property as if it were our own."
  }
];

const WhyChooseUs: React.FC = () => {
  return <WhyChooseUsSection features={features} />;
};

export default WhyChooseUs;