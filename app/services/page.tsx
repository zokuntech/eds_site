import React from "react";
import ServicesHeader from "@/components/Services/Hero/index";
import KeyDifferentiators from "@/components/Services/Intro";

const ServicesPage: React.FC = () => {
  return (
    <main>
      <ServicesHeader title="Services" breadcrumb="Home - Services" />
      <KeyDifferentiators />
    </main>
  );
};

export default ServicesPage;
