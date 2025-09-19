import { useEffect, useState } from "react";
import { SvgFinalComponent } from "./SVG/heroFinalSvg";
import { motion, AnimatePresence, useAnimate, stagger } from "motion/react";
import { LineSvg } from "./SVG/lineSvg";
import { ProductSvg } from "./SVG/PlanToProduct/ProductSvg";
import { LaunchSvg } from "./SVG/PlanToProduct/LaunchSvg";
import { BuildSvg } from "./SVG/PlanToProduct/BuildSvg";
import { PlanSvg } from "./SVG/PlanToProduct/PlanSvg";
import { TopLine } from "./SVG/topLineSvg";
import { BottomLine } from "./SVG/bottomLineSvg";
import { SlantLineSvg } from "./SVG/SlantLineSvg";
import { ConnectingSvg } from "./SVG/connectingWorld/svg";
import { WritingCodeAnimationComponent } from "./RightTopBox/AnimationComponent";
import { Icons } from "./Orbit/OrbitingCirclesDemo";
import { OrbitingCircles } from "./Orbit/OrbitingCircle";

const HeroSection = () => {
  const delivery = ["Value", "Quality", "Results"];
  const [index, setIndex] = useState(0);
  const [ideaScope, ideaAnimate] = useAnimate();
  const [productScope, productAnimate] = useAnimate();
  const [buildScope, buildAnimate] = useAnimate();
  const [launchScope, launchAnimate] = useAnimate();
  const ideaText = "Spark of Innovation";
  const productText = "Ready to Shape";
  const buildText = "Crafting the Version";
  const LaunchText = "Into the World";
  const startIdeaAnimating = async () => {
    // Very subtle reset - just enough to trigger re-animation
    await ideaAnimate(
      "span",
      { opacity: 0, y: 10, scale: 0.98, filter: "blur(5px)" },
      { duration: 0.05 },
    );

    // Then animate back with stagger
    await ideaAnimate(
      "span",
      { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
      { duration: 0.5, ease: "easeOut", delay: stagger(0.1) },
    );
  };
  const startProductAnimating = async () => {
    // Very subtle reset - just enough to trigger re-animation
    await productAnimate(
      "span",
      { opacity: 0, y: 10, scale: 0.98, filter: "blur(5px)" },
      { duration: 0.05 },
    );

    // Then animate back with stagger
    await productAnimate(
      "span",
      { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
      { duration: 0.5, ease: "easeOut", delay: stagger(0.1) },
    );
  };
  const startBuildAnimating = async () => {
    // Very subtle reset - just enough to trigger re-animation
    await buildAnimate(
      "span",
      { opacity: 0, y: 10, scale: 0.98, filter: "blur(5px)" },
      { duration: 0.05 },
    );

    // Then animate back with stagger
    await buildAnimate(
      "span",
      { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
      { duration: 0.5, ease: "easeOut", delay: stagger(0.1) },
    );
  };
  const startLaunchAnimating = async () => {
    // Very subtle reset - just enough to trigger re-animation
    await launchAnimate(
      "span",
      { opacity: 0, y: 10, scale: 0.98, filter: "blur(5px)" },
      { duration: 0.05 },
    );

    // Then animate back with stagger
    await launchAnimate(
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
  }, [delivery.length]);
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
      <div className="relative flex items-start justify-center bg-white mask-t-from-60% mask-r-from-93% mask-l-from-95% dark:bg-black">
        <SvgFinalComponent className="mt-12 max-h-full max-w-full" />
        <div className="absolute grid h-full w-full grid-cols-[1.35fr_1.65fr] place-content-center justify-items-center border-red-500">
          <div className="mt-24 ml-24 grid grid-cols-[1.35fr_1.65fr] gap-x-8 border-red-600">
            <div className="mt-2 space-y-6 perspective-distant transform-3d">
              <div className="via-neutral-40 relative h-[25rem] w-[36rem] overflow-hidden rounded-xl  border-neutral-200">
               
                <div className="relative  top-44 flex h-[800px] w-full flex-col items-center justify-center overflow-hidden">
                  <OrbitingCircles iconSize={30} radius={350} speed={1}>
                    <Icons.whatsapp />
                    <Icons.whatsapp />
                    <Icons.openai />
                    <Icons.notion />
                    <Icons.whatsapp />
                    <Icons.googleDrive />
                    <Icons.googleDrive />
                    <Icons.whatsapp />
                    <Icons.googleDrive />
                    <Icons.whatsapp />
                  </OrbitingCircles>
                  {/* <OrbitingCircles iconSize={30} radius={70} reverse speed={2}>
                    <Icons.whatsapp />
                    <Icons.notion />
                    <Icons.openai />
                    <Icons.googleDrive />
                  </OrbitingCircles> */}
                </div>
              </div>
              <div className="relative w-fit rounded-2xl border border-neutral-200 bg-gradient-to-r from-transparent via-neutral-50 to-neutral-100 p-2">
                <div
                  style={{
                    backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
                    backgroundSize:
                      "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
                    backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
                  }}
                  className="h-[25rem] w-[35rem] rounded-xl border border-neutral-300 bg-white/[0.7] bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)] [background-size:15px_15px] shadow-lg"
                >
                  <div className="h-fit w-full gap-y-2 border-b border-neutral-100 py-3 text-center">
                    <h1 className="text-lg font-semibold tracking-widest">
                      Journey to Success
                    </h1>
                    <p>From concept to Reality</p>
                  </div>
                  <div className="grid h-fit grid-cols-2 place-content-center justify-items-center py-1">
                    <div className="relative grid grid-cols-1 gap-8">
                      <motion.div
                        onHoverStart={startIdeaAnimating}
                        className="group/bulb flex h-full w-full cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border border-neutral-300 p-2 hover:bg-white"
                      >
                        <div className="transform transition duration-200 group-hover/bulb:scale-110 group-hover/bulb:rotate-6 group-hover/bulb:bg-transparent">
                          <PlanSvg className="group-hover/bulb:text-yellow-500 group-hover/bulb:drop-shadow-[0_0_24px_#facc15]" />
                        </div>

                        <div className="flex flex-col items-center justify-center pl-0.5">
                          <h1 className="font-semibold text-neutral-500">
                            Idea
                          </h1>
                          <div ref={ideaScope}>
                            {ideaText.split(" ").map((word, idx) => (
                              <motion.span
                                key={word + idx}
                                className="text-md inline-block text-neutral-500"
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
                      <motion.div
                        onHoverStart={startProductAnimating}
                        className="group/product flex h-full w-full cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border border-neutral-300 p-2 hover:bg-white"
                      >
                        <div className="transform transition duration-200 group-hover/product:scale-110 group-hover/product:rotate-6 group-hover/product:bg-transparent group-hover/product:drop-shadow-[0_0_28px_#86EFAC]">
                          <ProductSvg className="transition-colors duration-300 ease-in-out group-hover/product:text-green-300" />
                        </div>

                        <div className="flex flex-col items-center justify-center pl-0.5">
                          <h1 className="font-semibold text-neutral-500">
                            Product
                          </h1>
                          <div ref={productScope}>
                            {productText.split(" ").map((word, idx) => (
                              <motion.span
                                key={word + idx}
                                className="text-md inline-block text-neutral-500"
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

                      <TopLine className="absolute top-16 left-42.5 w-28" />
                      <SlantLineSvg className="absolute top-32.5 left-36" />
                    </div>
                    <div className="relative grid grid-cols-1 gap-8">
                      <motion.div
                        onHoverStart={startBuildAnimating}
                        className="group/build flex h-full w-full cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border border-neutral-300 p-2 hover:bg-white"
                      >
                        <div className="transform transition duration-200 group-hover/build:scale-110 group-hover/build:rotate-6 group-hover/build:bg-transparent group-hover/build:drop-shadow-[0_0_28px_#DBEAFE]">
                          <BuildSvg className="transition-colors duration-300 ease-in-out group-hover/build:text-blue-300" />
                        </div>

                        <div className="flex flex-col items-center justify-center pl-0.5">
                          <h1 className="font-semibold text-neutral-500">
                            Build
                          </h1>
                          <div ref={buildScope}>
                            {buildText.split(" ").map((word, idx) => (
                              <motion.span
                                key={word + idx}
                                className="text-md inline-block text-neutral-500"
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
                      <motion.div
                        onHoverStart={startLaunchAnimating}
                        className="group/launch flex h-full w-full cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border border-neutral-300 p-2 hover:bg-white"
                      >
                        <div className="transform transition duration-200 group-hover/launch:scale-110 group-hover/launch:rotate-6 group-hover/launch:bg-transparent group-hover/launch:drop-shadow-[0_0_28px_#EDE9FE]">
                          <LaunchSvg className="transition-colors duration-300 ease-in-out group-hover/launch:text-purple-300" />
                        </div>

                        <div className="flex flex-col items-center justify-center pl-0.5">
                          <h1 className="font-semibold text-neutral-500">
                            Launch
                          </h1>
                          <div ref={launchScope}>
                            {LaunchText.split(" ").map((word, idx) => (
                              <motion.span
                                key={word + idx}
                                className="text-md inline-block text-neutral-500"
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

                      <BottomLine className="absolute bottom-15 -left-27 w-27.5" />
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              </div>
            </div>

            <div className="mt-32 space-y-6">
              <div className="flex h-[35rem] w-[32rem] items-end justify-center rounded-xl border-neutral-400 p-3 pt-6">
                <WritingCodeAnimationComponent />
              </div>
              <div className="group/ct rounded-[11px] border border-neutral-500 bg-gradient-to-l from-purple-200 via-neutral-50 to-neutral-100 px-2 py-2">
                <div
                  style={{
                    backgroundImage: `
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 20px,
      rgba(250, 250, 250, 0.08) 20px,
      rgba(250, 250, 250, 0.08) 21px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 30px,
      rgba(250, 250, 250, 0.06) 30px,
      rgba(250, 250, 250, 0.06) 31px
    ),
    repeating-linear-gradient(
      60deg,
      transparent,
      transparent 40px,
      rgba(250, 250, 250, 0.05) 40px,
      rgba(250, 250, 250, 0.05) 41px
    ),
    repeating-linear-gradient(
      150deg,
      transparent,
      transparent 35px,
      rgba(250, 250, 250, 0.04) 35px,
      rgba(250, 250, 250, 0.04) 36px
    )
  `,
                  }}
                  className="relative flex h-[7rem] items-center justify-center overflow-hidden rounded-[9px] border border-neutral-300 bg-gray-600 xl:w-[31rem]"
                >
                  <ConnectingSvg className="absolute top-0 h-28" />
                  <h1 className="text-md z-10 rounded-full border border-white bg-white px-4 pt-2 pb-1 font-semibold tracking-wider text-gray-700 transition duration-500 ease-in-out group-hover/ct:scale-110">
                    Connecting to the World
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <OrbitingCirclesDemo /> */}
    </section>
  );
};

export default HeroSection;
