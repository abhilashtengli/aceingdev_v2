import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import Aceingdevlogo from "./AceingdevSvg";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";

const CommonFooter = () => {
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
  const whatsappUrl =
    "https://wa.me/6362566003?text=Hello%20I%20am%20interested%20in%20your%20services";
  return (
    <>
      <div className="relative mt-12 flex w-full justify-between bg-white px-12 pt-24 pb-12">
        <div className="w-fit space-y-5 border-black">
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
          <p className="mt-2 max-w-lg px-12 tracking-wide text-neutral-600">
            AceingDev helps founders and businesses build meaningful web and
            mobile applications that create real value
          </p>
          <div className="mt-2 flex flex-col items-start border-red-500 px-12 text-neutral-500">
            <p>contact@aceingdev.com</p>
          </div>
          <div className="bottom-5 flex gap-x-7 px-12">
            <a href="https://x.com/abhilashtengli" target="_blank">
              <IconBrandX className="h-5 w-5 text-neutral-700 transition-colors duration-200 hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/in/abhitengli30/" target="_blank">
              <IconBrandLinkedin className="h-5 w-5 text-neutral-700 transition-colors duration-200 hover:text-blue-500" />
            </a>
            <a href="https://github.com/abhilashtengli" target="_blank">
              <IconBrandGithub className="h-5 w-5 text-neutral-700 transition-colors duration-200 hover:text-black" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <IconBrandWhatsapp className="h-5 w-5 cursor-pointer text-neutral-700 transition-colors duration-200 hover:text-green-500" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-xl tracking-wider text-neutral-800">
            Quick Links
          </h1>
          <ul className="mt-3 text-neutral-700">
            <Link to="/">
              <li>Home</li>
            </Link>
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
        <div>
          <h1 className="text-xl tracking-wider text-neutral-800">Services</h1>
          <ul className="mt-3 text-neutral-700">
            <li className="tracking-wider">Web Development</li>
            <li className="tracking-wider">App Development</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl tracking-wider text-neutral-800">Legal</h1>

          <ul className="mt-3 text-neutral-700">
            <Link to="/privacypolicy">
              <li className="tracking-wider">Privacy Policy</li>
            </Link>
            <Link to="/termsandcondition">
              <li className="tracking-wider">Terms & Condition</li>
            </Link>
            <li></li>
          </ul>
        </div>

        <div className="absolute top-0 left-0 w-full border border-neutral-200 mask-r-from-50% mask-l-from-50%" />
      </div>
      <p className="bg-gradient-to-t from-red-50 via-white to-white py-6 text-center tracking-wider text-neutral-700">
        © 2025 Aceingdev. All rights reserved.
      </p>
    </>
  );
};

export default CommonFooter;
