import React from "react";
import ServicesHeader from "@/components/Services/Hero/index";
import HowWeStandOut from "@/components/Services/Intro";
import CustomerService from "@/components/Services/CustomerService/CustomerService";
import ExploreSection from "@/components/Services/ExploreServices/ExploreSection";
import HowItWorks from "@/components/Services/HowItWorks/HowItWorks";
import Services from "@/components/Services/ServicesCard";
import RecentProjects from "@/components/sections/RecentProjects";
import Reviews from "@/components/sections/Reviews";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

const ServicesPage: React.FC = () => {
  return (
    <main>
      <ServicesHeader />
      <Services />
      <RecentProjects />
      <HowItWorks />
      <Reviews />
      <CTA
        title="Ready to Break Ground? Click Here for Expert Guidance"
        description="as"
        buttonText="Contact Us"
      />
      <FAQ
        experienceYears={5}
        happyClients={120}
        faqItems={[
          {
            question: "",
            answer:
              "The timeline depends on the project size and complexity. We’ll provide an estimated timeline during the consultation and keep you updated throughout.",
            isOpen: false,
          },
        ]}
      />
      <Contact />
      {/* <CustomerService /> */}
    </main>
  );
};

export default ServicesPage;
