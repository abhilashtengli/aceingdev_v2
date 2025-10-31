"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  IconAutomaticGearboxFilled,
  IconFileAnalyticsFilled,
  IconTools,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/hooks/use-accordian";

export function ServicesSection({ className }: { className?: string }) {
  return (
    <motion.div
      className={`${className} top-42 md:left-1 z-30 max-w-xs space-y-2 rounded-2xl border border-neutral-200 bg-white px-3 py-3`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="mb-3 rounded-lg border-t border-r border-b border-neutral-100 bg-white bg-gradient-to-r from-white via-neutral-100 to-yellow-50 p-3 shadow-sm backdrop-blur-sm"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <h2 className="mb-1 text-base font-bold text-gray-900">
          What We Build
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          We build modern digital solutions that turn ideas into real
          applications. From AI-powered tools to custom web apps and MVPs, we
          create technology that helps businesses grow.
        </p>
      </motion.div>

      <Accordion
        className="space-y-2"
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <AccordionItem
            value="saas"
            className="group rounded-lg border-t border-r border-b border-neutral-100 bg-white py-1 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            <AccordionTrigger className="mt-1 w-full cursor-pointer p-2 text-left">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="flex h-6 w-6 items-center justify-center rounded-lg text-sm text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      width="800"
                      height="800"
                      viewBox="0 0 800 800"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-neutral-400"
                    >
                      <path
                        d="M296.294 799.999C296.294 799.999 573.879 197.59 573.914 197.503L589.319 163.241C529.604 180.403 396.184 213.073 395.757 214.402C409.711 175.353 469.758 0.000732422 472.345 0.000732422C415.269 0.000732422 358.193 0.000732422 301.118 0.000732422L283.747 82.7225L210.679 382.546L403.7 329.995L296.294 799.999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900 group-hover:text-blue-700">
                      SaaS, Web & Mobile Applications
                    </h3>
                    <p className="text-xs text-gray-600 opacity-80">
                      Custom Platforms, MVPs & More..
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-3 w-3 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                </motion.div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <motion.div
                className="mt-1 rounded-lg bg-gray-50 p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs leading-relaxed text-gray-700">
                  End-to-end development of Software as a Service platforms,
                  custom web applications, and Minimum Viable Products. We build
                  scalable, user friendly solutions with modern frameworks like
                  React, Next.js, and Node.js, complete with payment
                  integration, user management, and responsive design.
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
            className="group rounded-lg border border-neutral-100 bg-white py-1 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            <AccordionTrigger className="w-full cursor-pointer p-2 text-left">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="flex h-6 w-6 items-center justify-center rounded-lg text-sm text-white"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconAutomaticGearboxFilled className="h-4 w-4 text-neutral-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900 group-hover:text-purple-700">
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
                  <ChevronDown className="h-3 w-3 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                </motion.div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <motion.div
                className="mt-1 rounded-lg bg-gray-50 p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs leading-relaxed text-gray-700">
                  AI-powered automation solutions including intelligent
                  chatbots, workflow automation, and business process
                  optimization. We integrate cutting-edge AI models like GPT,
                  Claude, custom solutions to streamline operations, enhance
                  customer support, and automate repetitive tasks.
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
            className="group rounded-lg border border-neutral-100 bg-white py-1 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            <AccordionTrigger className="w-full cursor-pointer p-2 text-left">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="flex h-6 w-6 items-center justify-center rounded-lg text-sm text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconFileAnalyticsFilled className="h-4 w-4 text-neutral-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900 group-hover:text-green-700">
                      Data Visualization
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
                  <ChevronDown className="h-3 w-3 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                </motion.div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <motion.div
                className="mt-1 rounded-lg bg-gray-50 p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs leading-relaxed text-gray-700">
                  We design interactive dashboards and data visualization tools
                  that transform complex data into clear, actionable insights
                  helping businesses track KPIs, monitor performance, and make
                  smarter decisions in real time.
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
            className="group rounded-lg border border-neutral-100 bg-white py-1 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            <AccordionTrigger className="w-full p-2 text-left">
              <div className="flex w-full cursor-pointer items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="flex h-6 w-6 items-center justify-center rounded-lg text-sm text-white"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      width="800"
                      height="661"
                      viewBox="0 0 800 661"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-neutral-400"
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
                    <h3 className="text-xs font-semibold text-gray-900 group-hover:text-orange-700">
                      Deployment
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
                  <ChevronDown className="h-3 w-3 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                </motion.div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <motion.div
                className="mt-1 rounded-lg bg-gray-50 p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs leading-relaxed text-gray-700">
                  Deploying and configuring web and mobile applications with
                  secure authentication, optimized databases, and reliable
                  uptime on AWS, Vercel, and app stores
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
            className="group rounded-lg border border-neutral-100 bg-white py-1 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            <AccordionTrigger className="w-full cursor-pointer p-2 text-left">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="flex h-6 w-6 items-center justify-center rounded-lg text-sm text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconTools className="h-4 w-4 text-neutral-500" />
                  </motion.div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900 group-hover:text-red-700">
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
                  <ChevronDown className="h-3 w-3 text-gray-600 transition-transform duration-200 group-data-[expanded]:rotate-180" />
                </motion.div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <motion.div
                className="mt-1 rounded-lg bg-gray-50 p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs leading-relaxed text-gray-700">
                  Enterprise-ready admin systems, workflow automation tools, and
                  third-party integrations. We develop comprehensive management
                  dashboards, file handling systems, API integrations, and
                  custom workflow solutions that streamline business operations
                  and improve team productivity.
                </p>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      </Accordion>
    </motion.div>
  );
}
