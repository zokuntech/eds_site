import React from "react";
import { HeroSection } from "./HeroSection";

const AboutEDSCustomCoatings: React.FC = () => {
  return (
    <main className="overflow-hidden relative w-full min-h-[540px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1484bc806e56356278c59cd9b919e59efd267fb8f610843967021ab003be30d?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <HeroSection
        title="About EDS Custom Coatings"
        subtitle="Craftsmanship, Quality, and Community"
      />
    </main>
  );
};

export default AboutEDSCustomCoatings;
