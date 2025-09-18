import { motion } from "framer-motion";
import type { SVGProps } from "react";

export const ConnectingSvg = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={1114}
    height={427}
    viewBox="0 0 1114 427"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={` ${className} `}
  >
    <defs>
      <linearGradient
        id="y-gradient-red-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="0%"
        y2="100%"
      >
        {/* Leading fade */}
        <motion.stop
          stopColor="var(--color-neutral-100)"
          animate={{ offset: ["-30%", "70%"] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        {/* Red gradient start */}
        <motion.stop
          stopColor="red"
          animate={{ offset: ["-20%", "80%"] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        {/* Red gradient middle */}
        <motion.stop
          stopColor="#ff4444"
          animate={{ offset: ["-10%", "70%"] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            delay: 3,
          }}
        />
        {/* Red gradient end */}
        <motion.stop
          stopColor="red"
          animate={{ offset: ["0%", "100%"] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        {/* Trailing fade */}
        <motion.stop
          stopColor="var(--color-neutral-100)"
          animate={{ offset: ["10%", "110%"] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </linearGradient>
    </defs>

    <path
      d="M1 0V193.748C1 203.689 9.05887 211.748 19 211.748H1095C1104.94 211.748 1113 219.807 1113 229.748V427"
      stroke="url(#y-gradient-red-line)"
      strokeWidth={6}
      strokeDasharray="3 2"
    />
  </svg>
);
