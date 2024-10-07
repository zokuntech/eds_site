import AboutUs from "@/components/Home/AboutUs/AboutUs";
import ContactSection from "@/components/Home/ContactSection";
import Hero from "@/components/Home/Hero/index";
import RecentProjects from "@/components/sections/RecentProjects";
import ServicesPage from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import CTA from "@/components/sections/CTA/";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className=" cursor-default flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Brushing Brilliance into Every Corner of Your Space."
        subtitle="Schedule a Free Onsite Estimate for Expert Commercial & Residential Painting Services!"
      />
      <WhyChooseUs />
      <RecentProjects />
      <ServicesPage />
      <CTA
        title="Ready to Break Ground? Click Here for Expert Guidance"
        description="as"
        buttonText="Contact Us"
      />
      <AboutUs />
      <Reviews />
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
    </main>
  );
}
