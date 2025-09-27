import HeroSection from "@/Components/HeroSection";
import ProjectSection from "@/Components/ProjectSection";
import SkillsSection from "@/Components/SkillsSection";

const LandingPage = () => {
  return (
    <div className="mx-auto  h-full w-full">
      <HeroSection />
      <SkillsSection />
      <ProjectSection/>
    </div>
  );
};

export default LandingPage;
