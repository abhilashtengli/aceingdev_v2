import { motion } from "framer-motion";
import { AdminCrudTable } from "./SkillComponents/AdminCrud";
import { AiChatWidget } from "./SkillComponents/AiChat";
import { AnimatedHighlightedAreaChart } from "./SkillComponents/AnimatedChart";
import { AuthSignupContainer } from "./SkillComponents/AuthSignup";
import { CodeMetricsCard } from "./SkillComponents/CodeMetrics";
import { DeploymentStatusCard } from "./SkillComponents/DeploymentStatus";
import { DevStatusCard } from "./SkillComponents/DevSkillCard";
import { FileUploadManager } from "./SkillComponents/UploadFile";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/hooks/use-accordian";
import { ChevronDown } from "lucide-react";
import {
  IconAutomaticGearboxFilled,
  IconFileAnalyticsFilled,
  IconTools,
} from "@tabler/icons-react";

const SkillsSection = () => {
  return (
    <>
      <div className="">
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
      <div className="flex h-screen w-full items-start justify-center border-red-500 mask-t-from-80% px-80">
        <div className="relative flex w-full items-start justify-center gap-6 border-blue-400 mask-b-from-60% p-6">
          <motion.div
            className="absolute top-42 left-0 z-30 w-[28rem] space-y-3 bg-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="mb-4 rounded-xl border border-neutral-300 bg-white p-4 shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h2 className="mb-2 text-lg font-bold text-gray-900">
                What We Build
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                We specialize in crafting cutting-edge digital solutions that
                transform ideas into powerful, scalable applications. From
                AI-powered automation to enterprise-grade platforms, we deliver
                technology that drives real business growth.
              </p>
            </motion.div>

            <Accordion
              className="space-y-5"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <AccordionItem
                  value="saas"
                  className="group rounded-lg border border-neutral-300 bg-white py-2 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
                >
                  <AccordionTrigger className="mt-2 w-full cursor-pointer p-3 text-left">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            width="800"
                            height="800"
                            viewBox="0 0 800 800"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-neutral-400"
                          >
                            <path
                              d="M296.294 799.999C296.294 799.999 573.879 197.59 573.914 197.503L589.319 163.241C529.604 180.403 396.184 213.073 395.757 214.402C409.711 175.353 469.758 0.000732422 472.345 0.000732422C415.269 0.000732422 358.193 0.000732422 301.118 0.000732422L283.747 82.7225L210.679 382.546L403.7 329.995L296.294 799.999Z"
                              fill="currentColor"
                            />
                          </svg>
                        </motion.div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">
                            SaaS & Web Apps
                          </h3>
                          <p className="text-xs text-gray-600 opacity-80">
                            Custom platforms & MVPs
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                      </motion.div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3">
                    <motion.div
                      className="mt-2 rounded-lg bg-gray-50 p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs leading-relaxed text-gray-700">
                        End-to-end development of Software-as-a-Service
                        platforms, custom web applications, and Minimum Viable
                        Products. We build scalable, user-friendly solutions
                        with modern frameworks like React, Next.js, and Node.js,
                        complete with payment integration, user management, and
                        responsive design.
                      </p>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <AccordionItem
                  value="ai"
                  className="group rounded-lg border border-neutral-300 bg-white py-2 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
                >
                  <AccordionTrigger className="w-full cursor-pointer p-3 text-left">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconAutomaticGearboxFilled className="text-neutral-400" />
                        </motion.div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">
                            AI Automation
                          </h3>
                          <p className="text-xs text-gray-600 opacity-80">
                            Chatbots & workflows
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                      </motion.div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3">
                    <motion.div
                      className="mt-2 rounded-lg bg-gray-50 p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs leading-relaxed text-gray-700">
                        AI-powered automation solutions including intelligent
                        chatbots, workflow automation, and business process
                        optimization. We integrate cutting-edge AI models like
                        GPT, Claude, and custom ML solutions to streamline
                        operations, enhance customer support, and automate
                        repetitive tasks.
                      </p>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <AccordionItem
                  value="analytics"
                  className="group rounded-lg border border-neutral-300 bg-white py-2 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
                >
                  <AccordionTrigger className="w-full cursor-pointer p-3 text-left">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconFileAnalyticsFilled className="text-neutral-400" />
                        </motion.div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-700">
                            Data Analytics
                          </h3>
                          <p className="text-xs text-gray-600 opacity-80">
                            Dashboards & insights
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                      </motion.div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3">
                    <motion.div
                      className="mt-2 rounded-lg bg-gray-50 p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs leading-relaxed text-gray-700">
                        Data-driven dashboards and analytics platforms for
                        actionable business insights. We create real-time
                        visualization tools, KPI tracking systems, and
                        comprehensive reporting solutions using technologies
                        like D3.js, Chart.js, and advanced database optimization
                        for faster query performance.
                      </p>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <AccordionItem
                  value="cloud"
                  className="group rounded-lg border border-neutral-300 bg-white py-2 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
                >
                  <AccordionTrigger className="w-full p-3 text-left">
                    <div className="flex w-full cursor-pointer items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            width="800"
                            height="661"
                            viewBox="0 0 800 661"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-neutral-400"
                          >
                            <path
                              d="M679.667 469V127.667L384 -42.6667V112.667L545.667 205L545 391.333L679.667 469Z"
                              fill="currentColor"
                            />
                            <path
                              d="M493 523V235.333L244.333 91.6667V225.667L378 302L377.333 456L493 523Z"
                              fill="currentColor"
                            />
                            <path
                              d="M325.333 566V332.333L123 215.667V327.667L228.667 388L228 510L325.333 566Z"
                              fill="currentColor"
                            />
                          </svg>
                        </motion.div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-700">
                            Cloud Deploy
                          </h3>
                          <p className="text-xs text-gray-600 opacity-80">
                            Secure & scalable
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                      </motion.div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3">
                    <motion.div
                      className="mt-2 rounded-lg bg-gray-50 p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs leading-relaxed text-gray-700">
                        Secure, scalable cloud infrastructure with seamless
                        deployment pipelines. We implement robust authentication
                        systems, database optimization, CI/CD workflows, and
                        cloud hosting solutions on platforms like Vercel, AWS,
                        and Google Cloud for maximum reliability and
                        performance.
                      </p>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <AccordionItem
                  value="enterprise"
                  className="group rounded-lg border border-neutral-300 bg-white py-2 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
                >
                  <AccordionTrigger className="w-full cursor-pointer p-3 text-left">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconTools className="text-neutral-500" />
                        </motion.div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-700">
                            Enterprise Tools
                          </h3>
                          <p className="text-xs text-gray-600 opacity-80">
                            Admin & integrations
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                      </motion.div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3">
                    <motion.div
                      className="mt-2 rounded-lg bg-gray-50 p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs leading-relaxed text-gray-700">
                        Enterprise-ready admin systems, workflow automation
                        tools, and third-party integrations. We develop
                        comprehensive management dashboards, file handling
                        systems, API integrations, and custom workflow solutions
                        that streamline business operations and improve team
                        productivity.
                      </p>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
          </motion.div>

          <div className="flex flex-col gap-3">
            <DevStatusCard className="h-[34rem] border border-neutral-300 shadow-2xl" />
            <AnimatedHighlightedAreaChart className="z-20 w-[26rem] border border-neutral-300 shadow-2xl" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-center gap-x-3.5">
              <CodeMetricsCard className="border border-neutral-300 shadow-2xl" />
              <DeploymentStatusCard className="border border-neutral-300 shadow-2xl" />
            </div>
            <AdminCrudTable className="h-[34rem] w-[42rem] border border-neutral-300 shadow-2xl" />
            <FileUploadManager className="shadow-2xl" />
          </div>

          <div className="flex flex-col gap-3">
            <AiChatWidget className="border shadow-2xl" />
            <AuthSignupContainer className="w-[24rem] shadow-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
