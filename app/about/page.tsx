import AboutUs from "@/components/About/AboutUs";
import ExpertiseSection from "@/components/About/ExpertiseSection";
import { HeroSection } from "@/components/About/Hero/HeroSection";
import TeamSection from "@/components/About/TeamSection/TeamSection";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/Home/AboutUs/AboutUs";

const AboutPage: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="About EDS Custom Coatings"
        subtitle="Craftsmanship, Quality, and Community"
      />
      <AboutUs
        missions={[
          "We aim to transform spaces with the highest standards of craftsmanship, delivering exceptional painting services that enhance the beauty and value of every property we touch.",
          "Provide top-quality painting solutions that exceed our clients' expectations, ensuring every project is completed with precision, care, and a commitment to excellence.",
          "To be the trusted partner for all painting needs, offering superior craftsmanship, personalized service, and a relentless focus on quality in everything we do.",
        ]}
        aboutText="At EDS Custom Coatings, we are more than just a painting company—we are a team of dedicated professionals committed to transforming spaces and enhancing the beauty of your home or business. Founded on the principles of quality, craftsmanship, and customer satisfaction, our mission is to deliver exceptional painting services that exceed expectations every time."
        rating={4.6}
        ratingText={"Ratings from Customer"}
      />
      <TeamSection />
      <CTA
        title="Ready to Break Ground? Click Here for Expert Guidance"
        description="as"
        buttonText="Contact Us"
      />
      <About />
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
    </main>
  );
};

export default AboutPage;
