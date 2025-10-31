import { useEffect, useState, type RefObject } from "react";
import Aceingdevlogo from "./AceingdevSvg";
import {
  IconBrandLinkedin,
  IconBrandX,
  IconCircleArrowRightFilled,
} from "@tabler/icons-react";

interface LandingNavbarProps {
  scrollToSection: (ref: RefObject<HTMLDivElement | null>) => void;
  servicesRef: RefObject<HTMLDivElement | null>;
  workRef: RefObject<HTMLDivElement | null>;
}

const LandingNavbar = ({
  scrollToSection,
  servicesRef,
  workRef,
}: LandingNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (section: string) => {
    if (section === "services") {
      scrollToSection(servicesRef);
    } else if (section === "work") {
      scrollToSection(workRef);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const screenHeight = window.innerHeight;
      const tenPercent = screenHeight * 0.1;
      setScrolled(scrollTop > tenPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full bg-white/[0.9] py-3 transition-all duration-300 md:px-24 ${
        scrolled ? "border-b border-gray-200 shadow-sm" : "border-b-0"
      }`}
    >
      {/* Navbar Content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-32">
          {/* Logo - scroll to top */}
          <div
            className="flex w-fit cursor-pointer items-center justify-center gap-x-5"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Aceingdevlogo className="rounde-xl h-12 w-13 rounded-xl border-neutral-500 bg-neutral-800 p-1 px-1 pl-2 text-white" />
            <h1 className="text-2xl font-bold tracking-wider text-neutral-800">
              Aceing
              <span className="bg-gradient-to-r from-purple-700 to-red-400 bg-clip-text text-transparent">
                Dev
              </span>
            </h1>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-x-12 font-semibold tracking-wide text-neutral-500">
            <li
              className="cursor-pointer"
              onClick={() => handleNavClick("services")}
            >
              Services
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleNavClick("work")}
            >
              Work
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-5">
          <a href="https://x.com/abhilashtengli" target="_blank">
            <IconBrandX className="h-4 w-4 text-neutral-500 transition-colors duration-200 hover:text-black" />
          </a>
          <a href="https://www.linkedin.com/in/abhitengli30/" target="_blank">
            <IconBrandLinkedin className="h-4.5 w-4.5 text-neutral-500 transition-colors duration-200 hover:text-blue-500" />
          </a>
          <a
            href="https://cal.com/aceingdev"
            target="_blank"
            className="group flex cursor-pointer items-center gap-x-3 rounded-full bg-black px-5 py-1.5 tracking-wider text-white transition duration-150 hover:bg-neutral-900 active:scale-95"
          >
            Book Free Call
            <IconCircleArrowRightFilled className="mt-0.5 h-6 w-6 text-white transition-transform duration-300 group-hover:-rotate-45" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
