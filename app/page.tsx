import AboutUs from "@/components/AboutUs/AboutUs";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero/index";
import RecentProjects from "@/components/RecentProjects";
import ServicesPage from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" cursor-default flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Brushing Brilliance into Every Corner of Your Space."
        subtitle="Schedule a Free Onsite Estimate for Expert Commercial & Residential Painting Services!"
      />
      <WhyChooseUs />
      <AboutUs />
      <ServicesPage />
      <RecentProjects />
      <ContactSection />
    </main>
  );
}
