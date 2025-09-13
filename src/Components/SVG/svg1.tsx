import type { SVGProps } from "react";
import { motion } from "motion/react";
export const TrailSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={52}
    height={239}
    viewBox="0 0 52 239"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <motion.linearGradient
        id="gradient-red-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 2,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="red" />
        <stop offset="0.66" stopColor="red" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="gradient-purple-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 2,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="purple" />
        <stop offset="0.66" stopColor="purple" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
    </defs>
    <path
      //   d="M0 1H335.53C337.797 1 340.018 1.64227 341.935 2.85242L406.565 43.6476C408.482 44.8577 410.703 45.5 412.97 45.5H720.5"
      //   d="M1 239V147.5L51.5 117V0.5"
      d="M1 239V154.271C1 150.069 3.19866 146.172 6.79616 143.999L45.7038 120.501C49.3013 118.328 51.5 114.431 51.5 110.229V0.5"
      stroke="url(#gradient-red-line)"
      strokeWidth={2}
    />
    <path
      d="M51.5 238.5V153.771C51.5 149.569 49.3013 145.672 45.7038 143.499L6.79617 120.001C3.19866 117.828 1 113.931 1 109.729V0"
      stroke="url(#gradient-purple-line)"
      strokeWidth={2}
    />
  </svg>
);
