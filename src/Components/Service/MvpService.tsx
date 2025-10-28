import {
  IconBrandCoreos,
  IconCloudCode,
  IconNavigationCode,
  IconPencilBolt,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const MvpService = () => {
  const delivery = [
    "Founders",
    "Leaders",
    "Innovators",
    "Visionaries",
    "Builders",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % delivery.length);
    }, 2000); // change word every 2s
    return () => clearInterval(interval);
  }, [delivery.length]);
  return (
    <div className="">
      <div className="relative flex w-full flex-col items-center justify-center border-red-700 px-24 py-12 pt-32 text-center">
        {/* ------------------- */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #f3f4f6 1px, transparent 1px),
        linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
        {/* Your Content/Components */}
        {/* ------------------- */}
        <div className="relative z-10 ml-12 flex flex-col items-center border-red-400 text-5xl font-bold tracking-wider text-neutral-700">
          <div className="flex items-end justify-center">
            <span>MVP Development for</span>
            <span className="relative ml-3 inline-block h-13 w-72 overflow-hidden rounded-sm border border-neutral-100 bg-gradient-to-r from-yellow-100 via-white to-red-100">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-0 left-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-400 mask-t-from-70% bg-clip-text py-1 pl-3 text-start text-transparent"
                >
                  {delivery[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-xl tracking-wide text-neutral-700">
          We don’t just build MVPs we build market ready products designed to
          validate real demand, attract users, and scale without rebuilding from
          scratch.
        </p>
        <p className="mt-3 rounded-sm border px-2 py-1 pt-1.5 text-xs tracking-wider text-neutral-800 shadow-sm">
          From Idea to Functional Product - Fast, Efficient, Market Ready
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-blue-600 py-12">
        <h1 className="text-2xl font-semibold tracking-wider text-neutral-700">
          What You Receive in Our MVP Program{" "}
        </h1>
        <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-12 border-red-600">
          <div className="group relative rounded-lg border border-neutral-300 from-yellow-50 via-white to-red-50 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 hover:bg-gradient-to-r">
            {/* -------------- */}

            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
                backgroundSize: "40px 40px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
              }}
            />

            <h1 className="relative z-10 flex gap-x-2 text-lg font-semibold tracking-wider text-neutral-700">
              <IconPencilBolt className="mt-0.5 text-green-600 transition duration-300 group-hover:-rotate-135" />{" "}
              Strategy & Architecture
            </h1>
            <ul className="relative z-10 mt-2 list-disc pl-6 tracking-wide text-neutral-600">
              <li>Market & user flow analysis</li>
              <li>MVP feature prioritization (80/20 focus)</li>
              <li>Scalable architecture planning</li>
            </ul>
          </div>
          <div className="group relative rounded-lg border border-neutral-300 from-yellow-50 via-white to-red-50 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 hover:bg-gradient-to-r">
            {/* -------------- */}

            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
                backgroundSize: "40px 40px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
              }}
            />
            {/* Your Content/Components */}
            {/* -------------- */}
            <h1 className="relative z-10 flex gap-x-2 text-lg font-semibold tracking-wider text-neutral-700">
              <IconBrandCoreos className="mt-0.5 text-[#e07a5f] transition duration-300 group-hover:-rotate-135" />{" "}
              UI/UX Prototype
            </h1>
            <ul className="relative z-10 mt-2 list-disc pl-6 tracking-wide text-neutral-600">
              <li>Conversion-focused UI</li>
              <li>Mobile-first responsive layouts</li>
              <li>Clickable prototypes for validation</li>
            </ul>
          </div>
          <div className="group relative rounded-lg border border-neutral-300 from-yellow-50 via-white to-red-50 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 hover:bg-gradient-to-r">
            {/* -------------- */}

            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
                backgroundSize: "40px 40px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
              }}
            />
            {/* Your Content/Components */}
            {/* -------------- */}
            <h1 className="relative z-10 flex gap-x-2 text-lg font-semibold tracking-wider text-neutral-700">
              <IconNavigationCode className="mt-0.5 text-[#f0386b] transition duration-300 group-hover:rotate-110" />{" "}
              Core Product Development
            </h1>
            <ul className="relative z-10 mt-2 list-disc pl-6 tracking-wide text-neutral-600">
              <li>Web or Mobile build (React, Node,etc.)</li>
              <li>Authentication, payments, dashboards</li>
              <li>SaaS-ready structure (if needed)</li>
            </ul>
          </div>
          <div className="group relative rounded-lg border border-neutral-300 from-yellow-50 via-white to-red-50 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 hover:bg-gradient-to-r">
            {/* -------------- */}

            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
                backgroundSize: "40px 40px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
              }}
            />
            {/* Your Content/Components */}
            {/* -------------- */}
            <h1 className="relative z-10 flex gap-x-2 text-lg font-semibold tracking-wider text-neutral-700">
              <IconCloudCode className="mt-0.5 text-[#0ea5e9] transition duration-300 group-hover:rotate-90" />{" "}
              Deployment & Launch
            </h1>
            <ul className="relative z-10 mt-2 list-disc pl-6 tracking-wide text-neutral-600">
              <li>Cloud hosting & domain setup</li>
              <li>Live deployment with staging</li>
              <li>Analytics & user feedback tracking</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center border-blue-600 py-12">
        <h1 className="text-2xl font-semibold tracking-wider text-neutral-700">
          Our Development Process{" "}
        </h1>
        <p className="mt-2 rounded-sm border border-neutral-300 px-3 pt-0.5 text-xs tracking-wider text-neutral-800 shadow-sm">
          Complete MVP in 4 - 6 weeks
        </p>
      </div>
    </div>
  );
};

export default MvpService;
