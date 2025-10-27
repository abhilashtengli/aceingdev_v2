import { motion } from "motion/react";
const Service = () => {
  return (
    <div className="w-full items-center justify-center border border-red-600 px-32 py-4">
      <h1 className="py-2 text-center text-4xl font-semibold tracking-wider text-neutral-600">
        <span className="relative border border-neutral-100 bg-gradient-to-r from-red-100 via-white to-yellow-100 px-3">
          <svg
            viewBox="0 0 357 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 w-[120px]"
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
            className="absolute right-0 bottom-0 w-[120px]"
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

      <div className="flex w-full items-center justify-center gap-x-32 border py-12">
        <div className="h-[42rem] w-[30rem] rounded-lg border px-5 py-4">
          <h1 className="text-2xl font-semibold tracking-wide text-neutral-700">
            MVP Development
          </h1>
          <p className="mt-1 w-fit rounded-sm border border-neutral-300 px-2 pt-0.5 text-sm tracking-wide text-neutral-500">
            Launch Your Product Idea into a Market Ready Reality
          </p>
          <p className="mt-4 text-neutral-600">
            We help founders, startups, and visionaries turn raw ideas into
            functional web or mobile products built to validate, scale, and win.
          </p>
          <div className="">
            <h1 className="mt-3 font-semibold tracking-wide text-neutral-700">
              ✨ Perfect for :{" "}
            </h1>

            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-neutral-600">
              <li className="rounded-sm px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                Entrepreneurs
              </li>
              <li className="rounded-sm px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                Startup Founders
              </li>
              <li className="rounded-sm px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                Innovators
              </li>
              <li className="rounded-sm px-2 tracking-wide shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:scale-105">
                Businesses launching new digital products
              </li>
            </ul>
          </div>
          <div className="py-4 font-semibold tracking-wide text-neutral-700">
            <h1>⚡ Highlights : </h1>
            <ul className="mt-3 flex list-disc flex-wrap gap-x-5 gap-y-1 pl-6 tracking-wide text-neutral-600">
              <li className="text-sm">Rapid MVP Development (4–8 weeks)</li>
              <li className="text-sm">Web & Mobile App Prototypes</li>
              <li className="text-sm">
                SaaS MVPs with real user functionality
              </li>
              <li className="text-sm">
                Scalable architecture to turn MVP into a full product{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[42rem] w-[30rem] border"></div>
      </div>
    </div>
  );
};

export default Service;
