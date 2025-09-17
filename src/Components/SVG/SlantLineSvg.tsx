import type { SVGProps } from "react";
import { motion } from "motion/react";

export const SlantLineSvg = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={165}
    height={36}
    viewBox="0 0 165 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={` ${className}`}
  >
    <defs>
      <motion.linearGradient
        id="x-axis-line-right-left"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%"
        y2="0%"
        initial={{ x1: "150%", x2: "110%" }}
        animate={{ x1: "0%", x2: "0%" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          delay: 1, // Wait for TopLine to finish
          repeatDelay: 2, // Wait for BottomLine to finish before repeating
        }}
      >
        <stop stopColor="var(--color-purple-300)" />
        <stop offset="0.99" stopColor="var(--color-red-600)" />
        <stop offset="0.99" stopColor="var(--color-red-600)" />
        <stop offset="1" stopColor="var(--color-purple-300)" />
      </motion.linearGradient>
    </defs>
    <path
      d="M164.5 0.5L151 16.5H12.5L1 35"
      stroke="url(#x-axis-line-right-left)"
      strokeDasharray="3 2"
      strokeWidth={1}
    />
  </svg>
);
