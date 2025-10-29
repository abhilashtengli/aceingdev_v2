import { IconCircleArrowRightFilled } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import InfinteSliderCode from "./TechstackCarousel";
const Service = () => {
  return (
    <>
      <div className="w-full items-center justify-center border-red-600 mask-b-from-90% px-32 py-4">
        <h1 className="py-2 text-center text-4xl font-semibold tracking-wider text-neutral-600">
          <span className="relative border border-neutral-100 bg-gradient-to-r from-red-100 via-white to-yellow-100 px-3">
            <svg
              viewBox="0 0 357 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 w-[91px]"
            >
              <defs>
                <motion.linearGradient
                  id="x-gradient-red-left-right"
                  gradientUnits="userSpaceOnUse"
                  x1="0%"
                  x2="10%"
                  y1="0%" // start at bottom
                  y2="0%" // small offset
                  initial={{ x1: "120%", x2: "80%" }} // bottom
                  animate={{ x1: "2%", x2: "-40%" }} // move upward
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0.4,
                  }}
                >
                  <stop stopColor="var(--color-neutral-200)" />
                  <stop offset="0.55" stopColor="red" />
                  <stop offset="0.66" stopColor="red" />
                  <stop offset="1" stopColor="var(--color-neutral-200)" />
                </motion.linearGradient>
              </defs>
              <path d="M0 0.5H357" stroke="url(#x-gradient-red-left-right)" />
            </svg>
            <svg
              width="357"
              height="1"
              viewBox="0 0 357 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 -bottom-[1px] w-[91px]"
            >
              <defs>
                <motion.linearGradient
                  id="x-gradient-red-right-left"
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
                  <stop stopColor="var(--color-neutral-200)" />
                  <stop offset="0.55" stopColor="red" />
                  <stop offset="0.66" stopColor="red" />
                  <stop offset="1" stopColor="var(--color-neutral-200)" />
                </motion.linearGradient>
              </defs>
              <path d="M0 0.5H357" stroke="url(#x-gradient-red-right-left)" />
            </svg>
            <p className="absolute -top-1 -left-0.5 h-1.5 w-[5px] rounded-full bg-neutral-300" />
            <p className="absolute -top-1 -right-0.5 h-1.5 w-1.5 rounded-full bg-neutral-300" />
            <p className="absolute -bottom-0.5 -left-0.5 h-1.5 w-[5px] rounded-full bg-neutral-300" />
            <p className="absolute -right-0.5 -bottom-0.5 h-1.5 w-1.5 rounded-full bg-neutral-300" />
            Services
          </span>{" "}
          We Provide !
        </h1>

        <div className="relative flex w-full items-center justify-center gap-x-32 mask-t-from-90% mask-r-from-90% mask-l-from-90% py-12">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#ffffff",
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.25) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative h-fit w-[30rem] rounded-lg border border-neutral-300 bg-white px-5 py-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <svg
              width="357"
              height="1"
              viewBox="0 0 357 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-[1px] -left-6 w-[420px]"
            >
              <defs>
                <motion.linearGradient
                  id="x-gradient-card-right-left"
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
                  <stop stopColor="var(--color-neutral-300)" />
                  <stop offset="0.55" stopColor="var(--color-blue-400)" />
                  <stop offset="0.66" stopColor="var(--color-blue-400)" />
                  <stop offset="1" stopColor="var(--color-neutral-300)" />
                </motion.linearGradient>
              </defs>
              <path d="M0 0.5H357" stroke="url(#x-gradient-card-right-left)" />
            </svg>
            {/* Diagonal Fade Grid Background - Top Left */}
            <div
              className="pointer-events-none absolute inset-0 z-0 rounded-lg"
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
            {/* Your Content/Components */}
            <div className="relative z-20">
              <h1 className="text-2xl font-bold tracking-wide text-neutral-700">
                MVP Development
              </h1>
              <p className="w-fit rounded-sm border-neutral-300 px-1 pt-0.5 text-xs tracking-wide text-neutral-500">
                Launch Your Product Idea into a Market Ready Reality
              </p>
              <p className="mt-5 text-neutral-600">
                We help founders, startups, and visionaries turn raw ideas into
                functional web or mobile products built to validate, scale, and
                win.
              </p>
              <div className="">
                <h1 className="mt-3 font-semibold tracking-wide text-neutral-700">
                  ✨ Perfect for :{" "}
                </h1>

                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-sm text-neutral-600">
                  <li className="rounded-xs px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                    Entrepreneurs
                  </li>
                  <li className="rounded-xs px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                    Startup Founders
                  </li>
                  <li className="rounded-xs px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                    Innovators
                  </li>
                  <li className="rounded-xs px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                    Businesses launching new digital products
                  </li>
                </ul>
              </div>
              <div className="py-4 font-semibold tracking-wide text-neutral-700">
                <h1>⚡ Highlights : </h1>
                <ul className="mt-3 flex list-disc flex-wrap gap-x-5 gap-y-1 pl-6 tracking-wide text-neutral-600">
                  <li className="text-sm">Rapid MVP Development (4–8 weeks)</li>
                  <li className="text-sm">Web & Mobile App </li>
                  <li className="text-sm">
                    SaaS MVPs with real user functionality
                  </li>
                  <li className="text-sm">
                    Scalable architecture to turn MVP into a full product{" "}
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden">
                <h1 className="font-semibold tracking-wide text-neutral-700">
                  ⚡Tech stack :{" "}
                </h1>

                <InfinteSliderCode />
              </div>
              <div className="mt-6 flex justify-end">
                <Link
                  className="group flex w-fit items-center gap-x-2 rounded-full border border-neutral-300 bg-neutral-900 px-3 py-1 font-semibold tracking-wide text-white shadow-lg transition duration-300 active:scale-85"
                  to="/mvp"
                >
                  Read more
                  <IconCircleArrowRightFilled className="h-5 w-5 text-white transition-transform duration-300 group-hover:-rotate-45" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-fit w-[30rem] rounded-lg border border-neutral-300 bg-white px-5 py-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <svg
              width="357"
              height="1"
              viewBox="0 0 357 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-[1px] -left-6 w-[420px]"
            >
              <defs>
                <motion.linearGradient
                  id="x-gradient-card-custom-right-left"
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
                  <stop stopColor="var(--color-neutral-300)" />
                  <stop offset="0.55" stopColor="var(--color-red-400)" />
                  <stop offset="0.66" stopColor="var(--color-red-400)" />
                  <stop offset="1" stopColor="var(--color-neutral-300)" />
                </motion.linearGradient>
              </defs>
              <path
                d="M0 0.5H357"
                stroke="url(#x-gradient-card-custom-right-left)"
              />
            </svg>
            {/* Diagonal Fade Grid Background - Top Left */}
            <div
              className="pointer-events-none absolute inset-0 z-0 rounded-lg"
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
            {/* Your Content/Components */}
            <div className="relative z-20">
              <h1 className="text-2xl font-bold tracking-wide text-neutral-700">
                Custom Software Solutions
              </h1>
              <p className="w-fit rounded-sm border-neutral-300 px-1 pt-0.5 text-xs tracking-wide text-neutral-500">
                Industry-Grade Web & Mobile Applications Built for Growth
              </p>
              <p className="mt-5 text-neutral-600">
                We build fully customized software solutions from simple
                applications to complex platforms designed around your
                processes, objectives, and long term vision
              </p>
              <div className="">
                <h1 className="mt-3 font-semibold tracking-wide text-neutral-700">
                  ✨ Perfect for :{" "}
                </h1>

                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-sm text-neutral-600">
                  <li className="rounded-xs px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                    Businesses
                  </li>
                  <li className="rounded-xs px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                    Enterprises
                  </li>
                  <li className="rounded-xs px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                    Organizations
                  </li>
                  <li className="rounded-xs px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                    Government institutions
                  </li>
                  <li className="rounded-xs px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                    Teams
                  </li>
                </ul>
              </div>
              <div className="py-4 font-semibold tracking-wide text-neutral-700">
                <h1>⚡ Highlights : </h1>
                <ul className="mt-3 flex list-disc flex-wrap gap-x-5 gap-y-1 pl-6 tracking-wide text-neutral-600">
                  <li className="text-sm">
                    End-to-end Custom Web & Mobile Development
                  </li>
                  <li className="text-sm">
                    Government Project Management Systems{" "}
                  </li>
                  <li className="text-sm">
                    Enterprise API & System Integrations
                  </li>
                  <li className="text-sm">
                    Saas Application with AI-Enhanced Features
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden">
                <h1 className="font-semibold tracking-wide text-neutral-700">
                  ⚡Tech stack :{" "}
                </h1>

                <InfinteSliderCode />
              </div>
              <div className="mt-6 flex justify-end">
                <Link
                  className="group flex w-fit items-center gap-x-2 rounded-full border border-neutral-300 bg-black px-3 py-1 font-semibold tracking-wide text-white shadow-lg transition duration-300 active:scale-90"
                  to="/customsoftware"
                >
                  Read more
                  <IconCircleArrowRightFilled className="h-5 w-5 text-white transition-transform duration-300 group-hover:-rotate-45" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
