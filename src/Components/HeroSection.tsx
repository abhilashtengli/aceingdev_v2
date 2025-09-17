import { useEffect, useState } from "react";
import { SvgFinalComponent } from "./SVG/heroFinalSvg";
import { motion, AnimatePresence, useAnimate, stagger } from "motion/react";
import { LineSvg } from "./SVG/lineSvg";
import { ProductSvg } from "./SVG/PlanToProduct/ProductSvg";
import { LaunchSvg } from "./SVG/PlanToProduct/LaunchSvg";
import { BuildSvg } from "./SVG/PlanToProduct/BuildSvg";
import { PlanSvg } from "./SVG/PlanToProduct/PlanSvg";

const HeroSection = () => {
  const delivery = ["Value", "Quality", "Results"];
  const [index, setIndex] = useState(0);
  const [scope, animate] = useAnimate();
  const ideaText = "Spark of Innovation";
  const startAnimating = async () => {
    // Very subtle reset - just enough to trigger re-animation
    await animate(
      "span",
      { opacity: 0, y: 10, scale: 0.98, filter: "blur(5px)" },
      { duration: 0.05 },
    );

    // Then animate back with stagger
    await animate(
      "span",
      { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
      { duration: 0.5, ease: "easeOut", delay: stagger(0.1) },
    );
  };
   
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
                  <span className="bg-gradient-to-r from-purple-600 via-neutral-400 to-red-300 bg-clip-text text-transparent text-shadow-black">
                    Code;
                  </span>
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
      <div className="relative flex items-start justify-center bg-white mask-t-from-80% mask-r-from-70% mask-l-from-89% dark:bg-black">
        <SvgFinalComponent className="mt-12 max-h-full max-w-full" />
        <div className="absolute grid h-full w-full grid-cols-[1.35fr_1.65fr] place-content-center justify-items-center border-red-500">
          <div className="mt-2 space-y-6 perspective-distant transform-3d">
            <div className="h-[25rem] w-[25rem] rounded-xl border border-neutral-300 bg-white/[0.7] bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)] [background-size:15px_15px] shadow-lg">
              <div className="h-fit w-full gap-y-2 border-b border-neutral-100 py-3 text-center">
                <h1 className="text-lg font-semibold tracking-widest">
                  Journey to Success
                </h1>
                <p>From concept to Reality</p>
              </div>
              <div className="grid h-fit grid-cols-2 place-content-center justify-items-center py-1">
                <div className="grid grid-cols-1 gap-8">
                  <motion.div
                    onHoverStart={startAnimating}
                    className="group/bulb flex h-full w-full cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border border-neutral-300 p-2 hover:bg-white"
                  >
                    <div className="transform transition duration-200 group-hover/bulb:scale-110 group-hover/bulb:rotate-6 group-hover/bulb:bg-transparent">
                      <PlanSvg className="group-hover/bulb:text-yellow-500 group-hover/bulb:drop-shadow-[0_0_24px_#facc15]" />
                    </div>

                    <div className="flex flex-col items-center justify-center pl-0.5">
                      <h1 className="font-semibold">Idea</h1>
                      <div ref={scope}>
                        {ideaText.split(" ").map((word, idx) => (
                          <motion.span
                            key={word + idx}
                            className="text-md inline-block"
                            style={{
                              display: "inline-block",
                              opacity: 1,
                              transform: "translateY(0px)",
                            }}
                          >
                            {word}&nbsp;
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  <div className="flex h-full w-full flex-col items-center justify-between gap-1 rounded-xl border border-neutral-300 p-2">
                    <div className="">
                      <ProductSvg />
                    </div>
                    <div className="flex flex-col items-center justify-center pl-0.5">
                      <h1 className="font-semibold">Product</h1>
                      <p className="text-md">Ready to Shape</p>
                    </div>
                  </div>{" "}
                </div>
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex h-full w-full flex-col items-center justify-between gap-1 rounded-xl border border-neutral-300 p-2">
                    <div className="">
                      <BuildSvg />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="font-semibold">Build</h1>
                      <p className="text-md">Crafting the Version</p>
                    </div>
                  </div>{" "}
                  <div className="flex h-full w-full flex-col items-center justify-between gap-1 rounded-xl border border-neutral-300 p-2">
                    <div className="">
                      <LaunchSvg />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="font-semibold">Launch</h1>
                      <p className="text-md">Into the World</p>
                    </div>
                  </div>{" "}
                </div>
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
