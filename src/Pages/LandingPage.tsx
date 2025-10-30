import HeroSection from "@/Components/HeroSection";
import ProjectSection from "@/Components/ProjectSection";
import CTA from "@/Components/CTA";
import Service from "@/Components/Service/Service";
import SkillsSection from "@/Components/SkillsSection";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LandingNavbar from "@/Components/NavbarLandingPage";
import FounderMessage from "@/Components/FounderMessage";
import Footer from "@/Components/Footer";

const LandingPage = () => {
  const location = useLocation();

  const servicesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    const navbarHeight = 80; // adjust according to your navbar height (in px)
    if (ref.current) {
      const elementPosition = ref.current.offsetTop;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        if (location.state.scrollTo === "services") {
          scrollToSection(servicesRef);
        }
        if (location.state.scrollTo === "work") {
          scrollToSection(workRef);
        }
        window.history.replaceState({}, document.title);
      }, 100); // Small delay ensures DOM is ready
    }
  }, [location]);

  useEffect(() => {
    // Only scroll to top if no scrollTo state exists
    if (!location.state?.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="mx-auto h-full w-full">
      <LandingNavbar
        scrollToSection={scrollToSection}
        servicesRef={servicesRef}
        workRef={workRef}
      />

      <HeroSection />
      <SkillsSection />
      <div ref={workRef}>
        <ProjectSection />
      </div>
      <div ref={servicesRef}>
        <Service />
      </div>
      <CTA />
      <FounderMessage />
      <Footer scrollToSection={scrollToSection}
        servicesRef={servicesRef}
        workRef={workRef}/>
    </div>
  );
};

export default LandingPage;
