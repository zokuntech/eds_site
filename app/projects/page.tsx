import React from "react";
import ServicesHeader from "@/components/Services/Hero/index";
import HowWeStandOut from "@/components/Services/Intro";
import CustomerService from "@/components/Services/CustomerService/CustomerService";
import ExploreSection from "@/components/Services/ExploreServices/ExploreSection";
import HowItWorks from "@/components/Services/HowItWorks/HowItWorks";
import Services from "@/components/Services/ServicesCard";
import RecentProjects from "@/components/sections/RecentProjects";
import ProjectShowcase from "@/components/Projects/ProjectShowcase/index";
import Reviews from "@/components/sections/Reviews";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import GallerySection from "@/components/Projects/GallerySection";

const ProjectsPage: React.FC = () => {
  const projects = {
    title: "Showcase of Our Featured Projects.",
    subtitle: "Showcase of Our Featured Projects. ",
    description:
      "Explore some of our standout projects, where quality and attention to detail shine. From homes to businesses, these transformations highlight the difference a fresh coat of paint can make.",
    featuredProject: {
      imageUrl: "",
      altText: "",
    },
    projects: [
      {
        imageUrl: "",
        altText: "",
      },
      {
        imageUrl: "",
        altText: "",
      },
      {
        imageUrl: "",
        altText: "",
      },
    ],
  };
  return (
    <main>
      <ServicesHeader />
      <ProjectShowcase
        subtitle={projects.subtitle}
        title={projects.title}
        description={projects.description}
        featuredProject={projects.featuredProject}
        projects={projects.projects}
      />
      <GallerySection />
      <CTA
        title="Ready to Break Ground? Click Here for Expert Guidance"
        description="as"
        buttonText="Contact Us"
      />
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
      {/* <CustomerService /> */}
    </main>
  );
};

export default ProjectsPage;
