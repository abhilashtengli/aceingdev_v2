import type { SVGProps } from "react";
import { motion } from "motion/react";

export const RaysSvg = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1440 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={` ${className}`}
  >
    <defs>
      <motion.linearGradient
        id="y-gradient-rays-3fb911-line-4"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          //   repeatDelay: 2,
          delay: 2,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#3fb911" />
        <stop offset="0.66" stopColor="#3fb911" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-011026-line-3"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          //   repeatDelay: 2,
          delay: 3,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#011026" />
        <stop offset="0.66" stopColor="#011026" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-3181cf-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 1,
          delay: 0.5,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#3181cf" />
        <stop offset="0.66" stopColor="#3181cf" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-ff00e0-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 1,
          delay: 2,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#ff00e0" />
        <stop offset="0.66" stopColor="#ff00e0" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-741b3c-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 1,
          delay: 2,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#741b3c" />
        <stop offset="0.66" stopColor="#741b3c" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-29289f-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 1.5,
          delay: 1.5,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#29289f" />
        <stop offset="0.66" stopColor="#29289f" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-red-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="red" />
        <stop offset="0.66" stopColor="red" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-yellow-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "0%", y2: "10%" }} // bottom
        animate={{ y1: "90%", y2: "100%" }} // move upward
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="yellow" />
        <stop offset="0.66" stopColor="yellow" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-purple-rays-left-right"
        gradientUnits="userSpaceOnUse"
        x1="100%"
        x2="110%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "0%", x2: "10%" }} // bottom
        animate={{ x1: "90%", x2: "100%" }} // move upward
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="purple" />
        <stop offset="0.66" stopColor="purple" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-741b3c-rays-right-left"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "100%", x2: "90%" }} // bottom
        animate={{ x1: "0%", x2: "10%" }} // move upward
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
          delay: 0.6,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="#741b3c" />
        <stop offset="0.66" stopColor="#741b3c" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-purple-rays-right-left"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "100%", x2: "90%" }} // bottom
        animate={{ x1: "0%", x2: "10%" }} // move upward
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
            repeatDelay: 0.6,
          delay : 0.8
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="purple" />
        <stop offset="0.66" stopColor="purple" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-c94ed3-rays-right-left"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "100%", x2: "90%" }} // bottom
        animate={{ x1: "0%", x2: "10%" }} // move upward
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
          delay: 0.7,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="#c94ed3" />
        <stop offset="0.66" stopColor="#c94ed3" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-476f8f-rays-right-left"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "100%", x2: "90%" }} // bottom
        animate={{ x1: "0%", x2: "10%" }} // move upward
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.8,
          delay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="#476f8f" />
        <stop offset="0.66" stopColor="#476f8f" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
    </defs>
    <path d="M721 513L1439 1023" stroke="url(#y-gradient-rays-yellow-line)" />
    <path
      d="M0.5 1L720 512.5"
      stroke="url(#x-gradient-c94ed3-rays-right-left)"
    />
    <path
      d="M1440 439L1079.75 476L719.5 513"
      stroke="url(#x-gradient-purple-line-left-right)"
    />
    <path
      d="M-1.5 438L358.75 475L719 512"
      stroke="url(#x-gradient-476f8f-rays-right-left)"
    />
    <path
      d="M719.5 513L359.25 550L-1 587"
      stroke="url(#x-gradient-c94ed3-rays-right-left)"
    />
    <path
      d="M722 513L1082.25 550L1442.5 587"
      stroke="url(#x-gradient-purple-line-left-right)"
    />
    <path d="M763 1023L720 512" stroke="url(#y-gradient-rays-yellow-line)" />
    <path
      d="M720 511.5L2.5 1024"
      stroke="url(#x-gradient-purple-rays-right-left)"
    />
    <path
      d="M718.5 512.5L1440 2"
      stroke="url(#x-gradient-purple-line-left-right)"
    />
    <path d="M718 513L620.5 1023" stroke="url(#y-gradient-rays-yellow-line)" />
    <path
      d="M721 514.5L1440 727"
      stroke="url(#x-gradient-purple-line-left-right)"
    />
    <path
      d="M719.5 513L1440 873.5"
      stroke="url(#y-gradient-rays-yellow-line)"
    />
    <path
      d="M719.5 514.5L1437 216"
      stroke="url(#x-gradient-purple-line-left-right)"
    />
    <path
      d="M719.5 513L913 1021.5"
      stroke="url(#y-gradient-rays-yellow-line)"
    />
    <path
      d="M724 516.5L1164.5 1024.5"
      stroke="url(#y-gradient-rays-yellow-line)"
    />
    <path
      d="M721 514.5L242.5 1021.5"
      stroke="url(#y-gradient-rays-yellow-line)"
    />
    <path
      d="M722.5 513L439.5 1021.5"
      stroke="url(#y-gradient-rays-yellow-line)"
    />
    <path
      d="M719.5 511.5L0.5 769.5"
      stroke="url(#x-gradient-741b3c-rays-right-left)"
    />
    <path
      d="M719.5 514.5L2 203"
      stroke="url(#x-gradient-purple-rays-right-left)"
    />
    <path d="M719.5 513L631.5 2" stroke="url(#y-gradient-rays-3fb911-line-4)" />
    <path d="M721 513L823.5 3.5" stroke="url(#y-gradient-rays-011026-line-3)" />
    <path
      d="M722.5 507L1015.5 3.5"
      stroke="url(#y-gradient-rays-29289f-line)"
    />
    <path d="M719.5 513L1218 2" stroke="url(#y-gradient-rays-741b3c-line)" />
    <path d="M721 513L434.5 2" stroke="url(#y-gradient-rays-ff00e0-line)" />
    <path d="M721 513L233.5 3.5" stroke="url(#y-gradient-rays-3181cf-line)" />
  </svg>
);
