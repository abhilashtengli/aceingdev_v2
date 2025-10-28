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
      <div className="border border-blue-600">
        <h1>What You Receive in Our MVP Program </h1>
      </div>
    </div>
  );
};

export default MvpService;
