import abhiimg from "@/assets/abhiadimg.webp";

import { motion } from "motion/react";
const FounderMessage = () => {
  return (
    <>
      <div className="relative flex h-screen flex-col items-center justify-center mask-r-from-80% mask-l-from-90% md:mask-t-from-80%">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.10) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative w-full max-w-[69rem] overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 pt-12 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
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
                id="x-gradient-message-right-left"
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
                <stop offset="0.55" stopColor="var(--color-violet-300)" />
                <stop offset="0.66" stopColor="var(--color-red-300)" />
                <stop offset="1" stopColor="var(--color-neutral-50)" />
              </motion.linearGradient>
            </defs>
            <path d="M0 0.5H357" stroke="url(#x-gradient-message-right-left)" />
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

          {/* Your Content/Components */}
          <div className="flex w-full flex-col justify-between border-red-600 md:flex-row">
            <div className="z-10 flex w-full flex-col gap-y-6 items-center md:items-start border-red-500 pr-6">
              <p className="pt-3 text-sm leading-6 tracking-wider text-neutral-700 pl-3 md:pl-6 md:text-lg">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-violet-600 via-neutral-700 to-red-400 bg-clip-text text-sm font-semibold text-transparent md:text-lg">
                  Abhilash
                </span>
                , I’ve always loved finding solutions engineering shaped how I
                think, and software became the way I build real world impact.
                Over the last 3 years, I’ve built applications for government
                institutions and startups helping them improve efficiency, go
                digital and create meaningful results.
              </p>

              <div>
                <h2 className="pt-3 text-sm font-semibold tracking-wider text-neutral-700 pl-3 md:pl-6 md:text-lg">
                  {" "}
                  AceingDev was born from a simple belief:
                </h2>
                <p className="pt-1 text-xs tracking-wider text-neutral-700 pl-3 md:pl-6 md:text-sm">
                  You don’t need complexity to build powerful solutions just the
                  right intent and execution.
                </p>
              </div>
            </div>
            <div className="z-10 mt-6 flex w-full flex-col items-center justify-center overflow-hidden border-red-500 md:mt-0 md:w-fit md:items-end md:pr-5">
              <img
                src={abhiimg}
                className="h-72 rounded-4xl border border-neutral-400 md:w-96"
              />
              <p className="mt-3 w-[17rem] text-xs tracking-wider text-neutral-700">
                I am human, here to connect and build.
              </p>
              <h1 className="mt-2 md:pr-5 text-sm font-semibold tracking-wider text-neutral-500">
                - Abhilash Tengli
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderMessage;
