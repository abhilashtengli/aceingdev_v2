import type { SVGProps } from "react";
import { motion } from "motion/react";
export const TopLine = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 127 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={` ${className}`}
  >
    <defs>
      <motion.linearGradient
        id="x-axis-line-left-right"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%"
        y2="0%"
        initial={{ x1: "0%", x2: "60%" }}
        animate={{ x1: "100%", x2: "100%" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 2, // Starts immediately, then repeats after full cycle (1 + 1 + 1 = 3s)
        }}
      >
        <stop stopColor="var(--color-purple-300)" />
        <stop offset="0.99" stopColor="var(--color-red-600)" />
        <stop offset="0.99" stopColor="var(--color-red-600)" />
        <stop offset="1" stopColor="var(--color-purple-300)" />
      </motion.linearGradient>
    </defs>
    <path
      d="M0 1H127"
      stroke="url(#x-axis-line-left-right)"
      strokeDasharray="3 2"
    />
  </svg>
);
