import { useEffect, useState } from "react";
import Aceingdevlogo from "./AceingdevSvg";
import { IconCircleArrowRightFilled } from "@tabler/icons-react";
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

const CommonNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const context = useOutletContext() as any; // will be undefined on non-home pages
  const scrollToSection = context?.scrollToSection;
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section: string) => {
    if (location.pathname === "/") {
      // Already on homepage
      scrollToSection?.(section);
    } else {
      // Go to homepage with scroll instruction
      navigate("/", { state: { scrollTo: section } });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const screenHeight = window.innerHeight;
      const tenPercent = screenHeight * 0.1;

      if (scrollTop > tenPercent) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full bg-white/[0.9] py-3 transition-all duration-300 md:px-12 ${
        scrolled ? "border-b border-gray-200 shadow-sm" : "border-b-0"
      }`}
    >
      {/* Navbar Content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-32">
          <Link to="/">
            <div className="flex w-fit items-center justify-center gap-x-5 px-12">
              <Aceingdevlogo className="rounde-xl h-12 w-13 rounded-xl border-neutral-500 bg-neutral-800 p-1 px-1 pl-2 text-white" />
              <h1 className="text-2xl font-bold tracking-wider text-neutral-800">
                Aceing
                <span className="bg-gradient-to-r from-purple-700 to-red-400 bg-clip-text text-transparent">
                  Dev
                </span>
              </h1>
            </div>
          </Link>
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
        <button className="group flex cursor-pointer items-center gap-x-3 rounded-full bg-black px-5 py-1.5 tracking-wider text-white transition duration-150 hover:bg-neutral-900 active:scale-95">
          Book Free Call
          <IconCircleArrowRightFilled className="mt-0.5 h-6 w-6 text-white transition-transform duration-300 group-hover:-rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default CommonNavbar;
