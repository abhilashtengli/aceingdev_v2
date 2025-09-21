import type { SVGProps } from "react";
import { motion } from "motion/react";
export const LineSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1440 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className=""
  >
    <defs>
      <motion.linearGradient
        id="y-gradient-red-line-from-top"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "90%", y2: "100%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-50)" />
        <stop offset="0.55" stopColor="var(--color-yellow-600)" />
        <stop offset="0.66" stopColor="var(--color-red-600)" />
        <stop offset="1" stopColor="var(--color-neutral-50)" />
      </motion.linearGradient>
    </defs>
    <line width={1440} height={1024} fill="transparent " />
    <path d="M173.5 51L1223 962" stroke="url(#y-gradient-red-line-from-top)" />
  </svg>
);
