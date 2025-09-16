import { useEffect, useState } from "react";
import { SvgFinalComponent } from "./SVG/heroFinalSvg";
import { motion, AnimatePresence } from "motion/react";
import { LineSvg } from "./SVG/lineSvg";
import { ProductSvg } from "./SVG/PlanToProduct/ProductSvg";
import { LaunchSvg } from "./SVG/PlanToProduct/LaunchSvg";
import { BuildSvg } from "./SVG/PlanToProduct/BuildSvg";
import { PlanSvg } from "./SVG/PlanToProduct/PlanSvg";

const HeroSection = () => {
  const delivery = ["Value", "Quality", "Results"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % delivery.length);
    }, 2000); // change word every 2s
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative grid h-screen w-full grid-cols-[1.35fr_1.65fr] border">
      {/* Left box */}
      <div className="z-20 flex items-center justify-end">
        <div className="max-w-4xl">
          <h1 className="relative mb-4 text-7xl leading-[1.2] font-bold tracking-widest text-neutral-600">
            <div className="absolute -top-96 -left-1.5 z-0 h-fit w-[48rem]">
              <LineSvg />
            </div>

            <span className="relative z-10">
              Solving Business problems With{" "}
              <span className="relative z-20 inline-flex items-center overflow-hidden rounded-sm bg-neutral-50 px-[1.5px] py-0.5 align-middle">
                <span className="relative z-20 flex h-full w-full items-center rounded-[3px] bg-white px-1">
                  Code;
                </span>
                {/* yellow spinning gradient */}
                <span className="absolute inset-0 h-full w-full scale-[4] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-yellow-300)_20%,transparent_30%)] [animation-duration:3.5s]"></span>
                {/* Red spinning gradient */}
                <span className="absolute inset-0 h-full w-full scale-[4] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-red-300)_20%,transparent_30%)] [animation-delay:1.5s] [animation-duration:3.5s]"></span>
              </span>
            </span>
          </h1>
          <p className="mt-6 mb-6 text-3xl font-semibold tracking-wider text-neutral-500">
            From websites to AI SaaS, we turn your ideas into products that
            truly help people
          </p>
          <div className="flex items-center text-3xl font-semibold tracking-wider text-neutral-500">
            We Deliver{" "}
            <span className="relative ml-2 inline-block h-10 w-32 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 2, opacity: 1 }}
                  exit={{ y: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute right-0 left-0 border-red-700 text-blue-500"
                >
                  {delivery[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
          <button className="mt-12 rounded-xl bg-black px-12 py-4 text-xl tracking-wider text-neutral-200 hover:bg-blue-700">
            Book a Call
          </button>
        </div>
      </div>

      {/* Right box with SVG */}
      <div className="relative flex items-start justify-center bg-white">
        <SvgFinalComponent className="max-h-full max-w-full" />
        <div className="absolute grid h-full w-full grid-cols-[1.35fr_1.65fr] place-content-center justify-items-center border border-red-500">
          <div className="mt-2 space-y-6">
            <div className="h-[25rem] w-[25rem] rounded-xl border border-neutral-400">
              <div className="grid-cols- grid gap-3">
                <PlanSvg /> <ProductSvg />
              </div>
              <div className="grid grid-cols-1 gap-3">
                <BuildSvg /> <LaunchSvg />
              </div>
            </div>
            <div className="h-[25rem] w-[25rem] rounded-xl border border-neutral-400"></div>
          </div>
          <div className="mt-32 space-y-6">
            <div className="h-[25rem] w-[25rem] rounded-xl border border-neutral-400"></div>
            <div className="h-[10rem] w-[25rem] rounded-xl border border-neutral-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
