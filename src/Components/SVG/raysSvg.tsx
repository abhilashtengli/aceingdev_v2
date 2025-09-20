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
        initial={{ y1: "120%", y2: "80%" }} // bottom
        animate={{ y1: "10%", y2: "-30%" }} // move upward
        transition={{
          duration: 2,
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
        initial={{ y1: "120%", y2: "80%" }} // bottom
        animate={{ y1: "10%", y2: "-30%" }} // move upward
        transition={{
          duration: 2,
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
        initial={{ y1: "120%", y2: "80%" }} // bottom
        animate={{ y1: "10%", y2: "-30%" }} // move upward
        transition={{
          duration: 2,
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
        initial={{ y1: "120%", y2: "80%" }} // bottom
        animate={{ y1: "10%", y2: "-30%" }} // move upward
        transition={{
          duration: 2,
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
        initial={{ y1: "120%", y2: "80%" }} // bottom
        animate={{ y1: "10%", y2: "-30%" }} // move upward
        transition={{
          duration: 2,
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
        initial={{ y1: "120%", y2: "80%" }} // bottom
        animate={{ y1: "10%", y2: "-30%" }} // move upward
        transition={{
          duration: 2,
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
        initial={{ y1: "120%", y2: "80%" }} // bottom
        animate={{ y1: "10%", y2: "-30%" }} // move upward
        transition={{
          duration: 2,
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
      {/* <motion.linearGradient
        id="y-gradient-rays-yellow-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "100%", y2: "140%" }} // move upward
        transition={{
          duration: 2,
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
      </motion.linearGradient> */}
      <motion.linearGradient
        id="y-gradient-rays-212f45-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "100%", y2: "140%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.1,
          delay: 0.2,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#212f45" />
        <stop offset="0.66" stopColor="#212f45" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-4d194d-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "100%", y2: "140%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.3,
          delay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#4d194d" />
        <stop offset="0.66" stopColor="#4d194d" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-f28482-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "100%", y2: "140%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
          delay: 0.1,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#f28482" />
        <stop offset="0.66" stopColor="#f28482" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-ff0054-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "100%", y2: "140%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.5,
          delay: 0.1,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#ff0054" />
        <stop offset="0.66" stopColor="#ff0054" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-02c39a-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "100%", y2: "140%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.2,
          delay: 0.1,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#02c39a" />
        <stop offset="0.66" stopColor="#02c39a" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-390099-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "100%", y2: "140%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.3,
          delay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#390099" />
        <stop offset="0.66" stopColor="#390099" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-283d3b-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "100%", y2: "140%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
          delay: 0.1,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#283d3b" />
        <stop offset="0.66" stopColor="#283d3b" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-rays-ffd6ff-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "-20%", y2: "20%" }} // bottom
        animate={{ y1: "100%", y2: "140%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.5,
          delay: 0.1,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="#ffd6ff" />
        <stop offset="0.66" stopColor="#ffd6ff" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>

      {/* -------------------------------------------- */}
      <motion.linearGradient
        id="x-gradient-231942-rays-left-right"
        gradientUnits="userSpaceOnUse"
        x1="100%"
        x2="110%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "-20%", x2: "20%" }} // bottom
        animate={{ x1: "100%", x2: "130%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.3,
          delay: 0.2,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="#231942" />
        <stop offset="0.66" stopColor="#231942" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-1b4332-rays-left-right"
        gradientUnits="userSpaceOnUse"
        x1="100%"
        x2="110%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "-20%", x2: "20%" }} // bottom
        animate={{ x1: "100%", x2: "130%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.3,
          delay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="#1b4332" />
        <stop offset="0.66" stopColor="#1b4332" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-ae2012-rays-left-right"
        gradientUnits="userSpaceOnUse"
        x1="100%"
        x2="110%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "-20%", x2: "20%" }} // bottom
        animate={{ x1: "100%", x2: "130%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.3,
          delay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="#ae2012" />
        <stop offset="0.66" stopColor="#ae2012" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-d90429-rays-left-right"
        gradientUnits="userSpaceOnUse"
        x1="100%"
        x2="110%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "-20%", x2: "20%" }} // bottom
        animate={{ x1: "100%", x2: "130%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.1,
          delay: 0.7,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="#d90429" />
        <stop offset="0.66" stopColor="#d90429" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-1d3557-rays-left-right"
        gradientUnits="userSpaceOnUse"
        x1="100%"
        x2="110%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "-20%", x2: "20%" }} // bottom
        animate={{ x1: "100%", x2: "130%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.2,
          delay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="#1d3557" />
        <stop offset="0.66" stopColor="#1d3557" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-purple-rays-left-right"
        gradientUnits="userSpaceOnUse"
        x1="100%"
        x2="110%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "-20%", x2: "20%" }} // bottom
        animate={{ x1: "100%", x2: "130%" }} // move upward
        transition={{
          duration: 2,
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

      {/* ------------------------------------------- */}
      <motion.linearGradient
        id="x-gradient-741b3c-rays-right-left"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "130%", x2: "90%" }} // bottom
        animate={{ x1: "-10%", x2: "-40%" }} // move upward
        transition={{
          duration: 2,
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
        id="x-gradient-006d77-rays-right-left"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "130%", x2: "90%" }} // bottom
        animate={{ x1: "-10%", x2: "-40%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
          delay: 0.6,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="#006d77" />
        <stop offset="0.66" stopColor="#006d77" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>

      <motion.linearGradient
        id="x-gradient-c94ed3-rays-right-left"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "130%", x2: "90%" }} // bottom
        animate={{ x1: "-10%", x2: "-40%" }} // move upward
        transition={{
          duration: 2,
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
        initial={{ x1: "130%", x2: "90%" }} // bottom
        animate={{ x1: "-10%", x2: "-40%" }} // move upward
        transition={{
          duration: 2,
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
    <path d="M721 513L1439 1023" stroke="url(#y-gradient-rays-212f45-line)" />
    <path
      d="M0.5 1L720 512.5"
      stroke="url(#x-gradient-c94ed3-rays-right-left)"
    />
    <path
      d="M1440 439L1079.75 476L719.5 513"
      stroke="url(#x-gradient-231942-rays-left-right)"
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
      stroke="url(#x-gradient-1d3557-rays-left-right)"
    />
    <path d="M763 1023L720 512" stroke="url(#y-gradient-rays-4d194d-line)" />
    <path
      d="M720 511.5L2.5 1024"
      stroke="url(#x-gradient-006d77-rays-right-left)"
    />
    <path
      d="M718.5 512.5L1440 2"
      stroke="url(#x-gradient-1b4332-rays-left-right)"
    />
    <path d="M718 513L620.5 1023" stroke="url(#y-gradient-rays-f28482-line)" />
    <path
      d="M721 514.5L1440 727"
      stroke="url(#x-gradient-ae2012-rays-left-right)"
    />
    <path
      d="M719.5 513L1440 873.5"
      stroke="url(#y-gradient-rays-ff0054-line)"
    />
    <path
      d="M719.5 514.5L1437 216"
      stroke="url(#x-gradient-d90429-rays-left-right)"
    />
    <path
      d="M719.5 513L913 1021.5"
      stroke="url(#y-gradient-rays-02c39a-line)"
    />
    <path
      d="M724 516.5L1164.5 1024.5"
      stroke="url(#y-gradient-rays-390099-line)"
    />
    <path
      d="M721 514.5L242.5 1021.5"
      stroke="url(#y-gradient-rays-283d3b-line)"
    />
    <path
      d="M722.5 513L439.5 1021.5"
      stroke="url(#y-gradient-rays-ffd6ff-line)"
    />
    <path
      d="M719.5 511.5L0.5 769.5"
      stroke="url(#x-gradient-741b3c-rays-right-left)"
    />
    <path
      d="M719.5 514.5L2 203"
      stroke="url(#x-gradient-006d77-rays-right-left)"
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
