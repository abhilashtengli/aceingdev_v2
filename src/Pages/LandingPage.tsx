import HeroSection from "@/Components/HeroSection";
import ProjectSection from "@/Components/ProjectSection";
import Service from "@/Components/Service/Service";
import SkillsSection from "@/Components/SkillsSection";

const LandingPage = () => {
  return (
    <div className="mx-auto h-full w-full">
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <Service />
    </div>
  );
};

export default LandingPage;
