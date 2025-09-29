import { motion } from "framer-motion";
import { AdminCrudTable } from "./SkillComponents/AdminCrud";
import { AiChatWidget } from "./SkillComponents/AiChat";
import { AnimatedHighlightedAreaChart } from "./SkillComponents/AnimatedChart";
import { AuthSignupContainer } from "./SkillComponents/AuthSignup";
import { CodeMetricsCard } from "./SkillComponents/CodeMetrics";
import { DeploymentStatusCard } from "./SkillComponents/DeploymentStatus";
import { DevStatusCard } from "./SkillComponents/DevSkillCard";
import { FileUploadManager } from "./SkillComponents/UploadFile";
import { ServicesSection } from "./SkillComponents/ServiceSection";

const SkillsSection = () => {
  return (
    <div className="pb-96">
      <div className="border-red-500">
        <h1 className="py-2 text-center text-4xl font-semibold tracking-wider text-neutral-600">
          What we Deliver at{" "}
          <span className="relative bg-gradient-to-r from-red-100 via-white to-yellow-100 px-3">
            <svg
              viewBox="0 0 357 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 w-[120px]"
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
              className="absolute right-0 w-[120px]"
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
            <p className="absolute -top-1 -left-0.5 h-1.5 w-1.5 rounded-full bg-neutral-300" />
            <p className="absolute -top-1 -right-0.5 h-1.5 w-1.5 rounded-full bg-neutral-300" />
            <p className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 rounded-full bg-neutral-300" />
            <p className="absolute -right-0.5 -bottom-0.5 h-1.5 w-1.5 rounded-full bg-neutral-300" />
            AceingDev?
          </span>
        </h1>
      </div>
      <div className="flex h-[50rem] w-full items-start justify-center overflow-hidden border-blue-500 mask-t-from-90%">
        <div className="relative flex w-full items-start justify-center gap-6 border border-green-400 p-6">
          <div className="flex flex-col gap-3">
            <DevStatusCard className="border-r border-b border-neutral-300 mask-l-from-30% shadow-2xl" />
            <AiChatWidget className="border mask-l-from-60% shadow-2xl" />
          </div>

          <div className="flex flex-col gap-3">
            <ServicesSection className="border border-neutral-300 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]" />
            <AnimatedHighlightedAreaChart className="z-20 border-r border-b border-neutral-200 mask-b-from-50%" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-center gap-x-3.5 mask-t-from-0%">
              <CodeMetricsCard className="border border-neutral-300" />
              <DeploymentStatusCard className="border border-neutral-300" />
            </div>
            <AdminCrudTable className="border border-neutral-300 shadow-xl h-[25.5rem]" />
            <FileUploadManager className="mask-b-from-40% shadow-2xl" />
          </div>
          <div className="flex flex-col gap-3">
            <AiChatWidget className="border mask-t-from-60% mask-r-from-93% shadow-2xl" />
            <AuthSignupContainer className="w-[24rem] mask-r-from-98% mask-b-from-20% shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
