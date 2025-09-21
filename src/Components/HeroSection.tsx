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
          <h1 className="relative mb-4 text-7xl leading-[1.2] font-bold tracking-widest text-neutral-700">
            <div className="absolute -top-96 -left-1.5 z-0 h-fit w-[48rem]">
              <LineSvg />
            </div>

            <span className="relative z-10 border-red-500 dark:mask-t-from-60%">
              Solving Business problems With{" "}
              <span className="relative z-20 inline-flex items-center overflow-hidden rounded-sm bg-neutral-50 px-[1.5px] py-0.5 align-middle">
                <span className="relative z-20 flex h-full w-full items-center rounded-[3px] bg-white px-1">
                  <span className="bg-gradient-to-r from-purple-600 via-neutral-600 to-neutral-400 bg-clip-text text-transparent text-shadow-black">
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
          <p className="mt-6 mb-6 text-2xl leading-9 font-medium tracking-wide text-neutral-600">
            From websites to SaaS, we turn your Ideas into Products that are
            simple, impactful, and useful delivering Results that drive Growth.
          </p>
          <div className="flex items-center text-3xl font-semibold tracking-wider text-neutral-700">
            We Deliver{" "}
            <span className="relative ml-2 inline-block h-10 w-32 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 2, opacity: 1 }}
                  exit={{ y: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="[10%] absolute right-0 left-0 border-red-700 bg-gradient-to-r from-blue-600 via-blue-500 to-white bg-clip-text text-transparent"
                >
                  {delivery[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
          <button className="mt-12 cursor-pointer rounded-xl bg-black px-12 py-4 text-xl tracking-wider text-white transition duration-150 hover:bg-neutral-900 active:scale-95">
            Start the Conversation
          </button>
          <div className="mt-12 flex items-center gap-x-5">
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-10 md:w-10"
              >
                <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
              </svg>
              <p className="mt-1 font-semibold tracking-wide text-neutral-600">
                React
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-10 md:w-10"
              >
                <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                <path d="M15 12v-3"></path>
              </svg>
              <p className="mt-1 font-semibold tracking-wide text-neutral-600">
                Next.js
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-10 md:w-10"
              >
                <g clip-path="url(#clip0_714_22)">
                  <path
                    d="M37.5 37.5V71.0167C37.4997 72.4778 37.1154 73.9131 36.3854 75.1787C35.6554 76.4443 34.6055 77.4958 33.341 78.2277C32.0765 78.9595 30.6418 79.3461 29.1807 79.3485C27.7197 79.351 26.2837 78.9693 25.0167 78.2417L18.4833 74.4917C16.6552 73.3748 15.1448 71.8069 14.097 69.9383C13.0493 68.0697 12.4993 65.9632 12.5 63.8209V36.175C12.5 34.0334 13.0503 31.9278 14.098 30.06C15.1458 28.1922 16.6558 26.6249 18.4833 25.5084L43.4833 10.2292C45.4456 9.03041 47.7005 8.39612 50 8.39612C52.2995 8.39612 54.5544 9.03041 56.5167 10.2292L81.5167 25.5084C83.3448 26.6252 84.8552 28.1932 85.903 30.0618C86.9507 31.9304 87.5007 34.0369 87.5 36.1792V63.8209C87.5 65.9625 86.9497 68.0681 85.902 69.9359C84.8542 71.8038 83.3442 73.3711 81.5167 74.4875L56.5167 89.7667C54.5544 90.9655 52.2995 91.5998 50 91.5998C47.7005 91.5998 45.4456 90.9655 43.4833 89.7667"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M70.8333 37.5H56.25C54.5924 37.5 53.0027 38.1585 51.8306 39.3306C50.6585 40.5027 50 42.0924 50 43.75C50 45.4076 50.6585 46.9973 51.8306 48.1694C53.0027 49.3415 54.5924 50 56.25 50H64.5833C66.2409 50 67.8306 50.6585 69.0027 51.8306C70.1749 53.0027 70.8333 54.5924 70.8333 56.25C70.8333 57.9076 70.1749 59.4973 69.0027 60.6694C67.8306 61.8415 66.2409 62.5 64.5833 62.5H50"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_714_22">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="mt-1 font-semibold tracking-wide text-neutral-600">
                Node.js
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-10 md:w-10"
                viewBox="0 0 128 128"
              >
                <path
                  stroke="currentColor"
                  fill="currentColor"
                  d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"
                />
              </svg>

              <p className="mt-1 font-semibold tracking-wide text-neutral-600">
                Express.js
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 stroke-[0.5px] text-neutral-600 md:h-10 md:w-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
              </svg>
              <p className="mt-1 font-semibold tracking-wide text-neutral-600">
                TailwindCSS
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <svg
                width="34"
                height="12"
                viewBox="0 0 34 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-10 md:w-10"
              >
                <g clip-path="url(#clip0_715_30)">
                  <path
                    d="M12.838 0L6.12 11.989H0L5.245 2.628C6.059 1.176 8.088 0 9.778 0H12.838ZM27.846 2.997C27.846 1.342 29.216 0 30.906 0C32.596 0 33.966 1.342 33.966 2.997C33.966 4.653 32.596 5.995 30.906 5.995C29.216 5.995 27.846 4.653 27.846 2.997ZM13.985 0H20.105L13.387 11.989H7.267L13.985 0ZM21.214 0H27.334L22.088 9.362C21.275 10.813 19.246 11.989 17.556 11.989H14.496L21.214 0Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_715_30">
                    <rect width="34" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="mt-1 font-semibold tracking-wide text-neutral-600">
                Motion/React
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right box with SVG */}
      <div className="relative flex items-start justify-center bg-white mask-t-from-60% mask-r-from-93% mask-l-from-95% dark:bg-black">
        <SvgFinalComponent className="mt-12 max-h-full max-w-full" />
        <div className="absolute grid h-full w-full grid-cols-[1.35fr_1.65fr] place-content-center justify-items-center border-red-500">
          <div className="mt-24 ml-24 grid grid-cols-[1.35fr_1.65fr] gap-x-8 border-red-600">
            <div className="mt-2 space-y-6 perspective-distant transform-3d">
              <div className="h-[25rem] rounded-xl border-neutral-300 p-2">
                <div className="via-neutral-40 relative h-full w-full overflow-hidden rounded-xl border-neutral-200">
                  <div className="left- absolute inset-0 top-49.5">
                    <div className="relative z-30 h-2 w-2 rounded-full border-black bg-white text-transparent"></div>
                  </div>
                  <div className="absolute inset-0">{/* <RaysSvg /> */}</div>

                  <div className="relative top-44 flex h-[800px] w-full flex-col items-center justify-center overflow-hidden">
                    {/* <OrbitingCircles iconSize={30} radius={350} speed={1}>
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
                    </OrbitingCircles> */}
                    {/* <OrbitingCircles iconSize={30} radius={70} reverse speed={2}>
                    <Icons.whatsapp />
                    <Icons.notion />
                    <Icons.openai />
                    <Icons.googleDrive />
                  </OrbitingCircles> */}
                  </div>
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
    </section>
  );
};

export default HeroSection;
