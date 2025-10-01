import { motion } from "motion/react";
import nrega from "@/assets/nrega_thumbnail.webp";
import mpmos from "@/assets/mpmos_thumbnail.webp";
import mis from "@/assets/mis_thumbnail.webp";
import ccs from "@/assets/ccs_thumbnail.webp";
const ProjectSection = () => {
  return (
    <>
      <div className="w-full border-black pb-24">
        <h1 className="w-full pt-12 text-center text-3xl font-bold text-neutral-600">
          <span className="relative mr-2 border border-neutral-100 bg-gradient-to-r from-red-100 via-white to-yellow-100 px-3">
            <svg
              viewBox="0 0 357 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 w-[70px]"
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
              className="absolute right-0 bottom-0 w-[70px]"
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
            <p className="absolute -top-1 -right-0.5 h-1.5 w-[5px] rounded-full bg-neutral-300" />
            <p className="absolute -bottom-0.5 -left-0.5 h-1.5 w-[5px] rounded-full bg-neutral-300" />
            <p className="absolute -right-0.5 -bottom-0.5 h-1.5 w-[5px] rounded-full bg-neutral-300" />
            Projects
          </span>
          {""} We’ve Built !
        </h1>
        <div className="flex w-full justify-center p-12 pt-3 text-center">
          <p className="max-w-3xl text-xl tracking-wide text-neutral-500">
            Showcasing our projects across industries, highlighting innovative
            solutions. From concept to deployment, see how we bring ideas to
            life.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12 px-32">
          <div className="w-fit rounded-xl border border-neutral-200 bg-neutral-50 p-2 px-6 py-3 pt-6">
            <img
              alt=""
              src={nrega}
              className="w-[40rem] rounded-lg border border-neutral-100 transition duration-300 hover:scale-105"
            />
            <h3 className="mt-2 max-w-xl tracking-wide text-neutral-800">
              The new College Website and Admin Dashboard modernized the
              institution's online presence. Administrators can now manage
              content easily without technical help.
            </h3>
          </div>
          <div className="w-fit rounded-xl border border-neutral-200 bg-neutral-50 p-2 px-6 py-3 pt-6">
            <img
              alt=""
              src={mpmos}
              className="w-[40rem] rounded-lg border border-neutral-100 transition duration-300 hover:scale-105"
            />
            <h3 className="mt-2 max-w-xl tracking-wide text-neutral-800">
              The new College Website and Admin Dashboard modernized the
              institution's online presence. Administrators can now manage
              content easily without technical help.
            </h3>
          </div>
          <div className="w-fit rounded-xl border border-neutral-200 bg-neutral-50 p-2 px-6 py-3 pt-6">
            <img
              alt=""
              src={mis}
              className="w-[40rem] rounded-lg border border-neutral-100 transition duration-300 hover:scale-105"
            />
            <h3 className="mt-2 max-w-xl tracking-wide text-neutral-800">
              The new College Website and Admin Dashboard modernized the
              institution's online presence. Administrators can now manage
              content easily without technical help.
            </h3>
          </div>
          <div className="w-fit rounded-xl border border-neutral-200 bg-neutral-50 p-2 px-6 py-3 pt-6">
            <img
              alt=""
              src={ccs}
              className="w-[40rem] rounded-lg border border-neutral-100 transition duration-300 hover:scale-105"
            />
            <h3 className="mt-2 max-w-xl tracking-wide text-neutral-800">
              The new College Website and Admin Dashboard modernized the
              institution's online presence. Administrators can now manage
              content easily without technical help.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
