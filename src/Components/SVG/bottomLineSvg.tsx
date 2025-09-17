import type { SVGProps } from "react";
import { motion } from "motion/react";

export const BottomLine = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={127}
    height={2}
    viewBox="0 0 127 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={` ${className}`}
  >
    <defs>
      <motion.linearGradient
        id="x-axis-bottom-line-left-right"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%"
        y2="0%"
        initial={{ x1: "-20%", opacity: 1, x2: "0%" }}
        animate={{ x1: "100%", x2: "100%" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          delay: 2, // Wait for TopLine and SlantLine to finish
          repeatDelay: 2, // Wait for TopLine to finish before repeating
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
      stroke="url(#x-axis-bottom-line-left-right)"
      strokeDasharray="3 2"
      strokeWidth={10}
    />
  </svg>
);
