import HeroSection from "@/Components/HeroSection";
import ProjectSection from "@/Components/ProjectSection";
import CTA from "@/Components/Service/CTA";
import Service from "@/Components/Service/Service";
import SkillsSection from "@/Components/SkillsSection";

const LandingPage = () => {
  return (
    <div className="mx-auto h-full w-full">
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <Service />
      <CTA />
    </div>
  );
};

export default LandingPage;
