import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconCircleArrowRightFilled,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import adhome from "@/assets/aceingdev_home.png";
import mpmos from "@/assets/mpmos_thumbnail.webp";
import ccsp from "@/assets/ccs_program.webp";
import nrgeaa from "@/assets/nrega-hero.png";
import { motion } from "motion/react";
import Aceingdevlogo from "./AceingdevSvg";
const CTA = () => {
  const whatsappUrl =
    "https://wa.me/6362566003?text=Hello%20I%20am%20interested%20in%20your%20services";

  return (
    <>
      <div className="flex flex-col items-center justify-center border-blue-600 py-12">
        <div className="relative grid w-full max-w-[69rem] grid-cols-2 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-r from-violet-100 via-white to-green-50 p-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <svg
            width="357"
            height="1"
            viewBox="0 0 357 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-[24rem]"
          >
            <defs>
              <motion.linearGradient
                id="x-gradient-cta-right-left"
                gradientUnits="userSpaceOnUse"
                x1="0%"
                x2="10%"
                y1="0%" // start at bottom
                y2="0%" // small offset
                initial={{ x1: "-20%", x2: "10%" }} // bottom
                animate={{ x1: "100%", x2: "140%" }} // move upward
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                  repeatDelay: 0.4,
                }}
              >
                <stop stopColor="var(--color-neutral-50)" />
                <stop offset="0.55" stopColor="var(--color-red-300)" />
                <stop offset="0.66" stopColor="var(--color-red-300)" />
                <stop offset="1" stopColor="var(--color-neutral-50)" />
              </motion.linearGradient>
            </defs>
            <path d="M0 0.5H357" stroke="url(#x-gradient-cta-right-left)" />
          </svg>
          {/* Diagonal Fade Grid Background - Top Right */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, #f3f4f6 1px, transparent 1px),
        linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)
      `,
              backgroundSize: "32px 32px",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
            }}
          />
          <div className="absolute top-7 left-5 ml-5 flex w-fit items-center justify-center gap-x-5">
            <Aceingdevlogo className="rounde-xl h-10 w-11 rounded-xl border-neutral-500 bg-neutral-800 p-1 px-1 pl-2 text-white" />
            <h1 className="text-2xl font-bold tracking-wider text-neutral-800">
              Aceing
              <span className="bg-gradient-to-r from-purple-700 to-red-400 bg-clip-text text-transparent">
                Dev
              </span>
            </h1>
          </div>
          {/* Your Content/Components */}
          <div className="relative z-10 flex flex-col items-start justify-center border-red-500">
            <h1 className="max-w-[28rem] pt-3 pl-6 text-3xl font-bold tracking-wider text-neutral-700">
              Have a Vision? Let's Turn It Into Impact.
            </h1>
            <h1 className="mt-3 max-w-[22rem] pl-6 text-2xl font-semibold tracking-wider text-neutral-700">
              <span className="bg-gradient-to-r from-purple-700 to-red-400 bg-clip-text text-transparent text-shadow-black">
                Book
              </span>{" "}
              a Free Strategy Call!
            </h1>
            <div className="mt-5 pl-6">
              <Link
                to="/"
                className="group flex items-center justify-center gap-x-2 rounded-full border-neutral-400 bg-black px-5 py-2 text-lg font-semibold tracking-wider text-white transition duration-300 active:scale-90"
              >
                Let’s Build Together
                <IconCircleArrowRightFilled className="mt-0.5 h-6 w-6 text-white transition-transform duration-300 group-hover:-rotate-45" />
              </Link>
            </div>
            <div className="absolute bottom-5 flex gap-x-7 pl-6">
              <a href="https://x.com/abhilashtengli" target="_blank">
                <IconBrandX className="h-7 w-7 text-neutral-700 transition-colors duration-200 hover:text-black" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhitengli30/"
                target="_blank"
              >
                <IconBrandLinkedin className="h-7 w-7 text-neutral-700 transition-colors duration-200 hover:text-blue-500" />
              </a>
              <a href="https://github.com/abhilashtengli" target="_blank">
                <IconBrandGithub className="h-7 w-7 text-neutral-700 transition-colors duration-200 hover:text-black" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <IconBrandWhatsapp className="h-7 w-7 cursor-pointer text-neutral-700 transition-colors duration-200 hover:text-green-500" />
              </a>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-2 overflow-hidden border-red-500">
            <img src={adhome} className="mt-5 h-full w-full" />
            <img src={nrgeaa} className="h-full w-full" />
            <img src={mpmos} className="mt-9 h-fit w-full" />
            <img src={ccsp} className="h-full w-full mask-b-from-90%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
