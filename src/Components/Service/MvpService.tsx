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
      <div className="flex w-full flex-col items-center justify-center  border-red-700 px-24 py-12 pt-32 text-center">
        <div className="ml-12 flex flex-col items-center text-5xl font-bold tracking-wider text-neutral-700">
          <div className="flex items-end justify-center">
            <span>MVP Development for</span>
            <span className="relative ml-3 inline-block h-13 w-72 overflow-hidden rounded-sm bg-gradient-to-r from-yellow-100 to-red-100">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-0 left-0 mask-t-from-70% py-1 pl-3 text-start bg-gradient-to-r from-blue-600 via-cyan-500 to-green-400 bg-clip-text text-transparent"
                >
                  {delivery[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </div>

        {/* <p className="mt-3 text-lg font-semibold tracking-wider text-neutral-700">
          From Idea to Functional Product Fast, Efficient, Market Ready
        </p> */}
        <p className="mt-3 max-w-3xl text-xl tracking-wide text-neutral-700">
          We don’t just build MVPs we build market ready products designed to
          validate real demand, attract users, and scale without rebuilding from
          scratch.
        </p>
      </div>
    </div>
  );
};

export default MvpService;
