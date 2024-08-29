import React from "react";
import ServicesHeader from "@/components/Services/Hero/index";
import HowWeStandOut from "@/components/Services/Intro";
import CustomerService from "@/components/Services/CustomerService/CustomerService";
import ExploreSection from "@/components/Services/ExploreServices/ExploreSection";
import HowItWorks from "@/components/Services/HowItWorks/HowItWorks";
import FAQSection from "@/components/Services/FAQSection/FAQSection";

const ServicesPage: React.FC = () => {
  const features = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3f44788bc625a0058a1ca8a5d3ec19387d771a44f8878e29b14df30d5272f0bd?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
      title: "Quality Assurance:",
      description:
        "We use premium paints and finishes to ensure long-lasting results",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/579c24a0bfefe3d2be5051eab4e11dbb546ec4b2c8e42c0a76ec6c28cb5e3ac2?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
      title: "Expert Team:",
      description:
        "Skilled professionals with years of experience in the industry",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e0b9a44e404f665ee80c0db723f6935b5963943cf58ccefe4889f23c9f3ee03a?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
      title: "Competitive Pricing:",
      description:
        "Offering exceptional value without compromising on quality.",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/86471250732edcb7fc8247e945b006cc1a3e9416d57db581bd6825c1c1bb7c51?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
      title: "Timely Completion:",
      description:
        "We respect your deadlines and deliver projects on schedule.",
    },
  ];
  return (
    <main>
      <ServicesHeader />
      <HowWeStandOut features={features} />
      <CustomerService />
      <ExploreSection />
      <HowItWorks />
      <FAQSection />
    </main>
  );
};

export default ServicesPage;
