import AboutUs from "@/components/Home/AboutUs/AboutUs";
import ContactSection from "@/components/Home/ContactSection";
import Hero from "@/components/Home/Hero/index";
import RecentProjects from "@/components/Home/RecentProjects";
import ServicesPage from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

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
