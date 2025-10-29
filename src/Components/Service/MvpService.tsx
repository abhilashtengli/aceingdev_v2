import {
  IconBrandCoreos,
  IconBrandCraft,
  IconCloudCode,
  IconCode,
  IconFlag3,
  IconNavigationCode,
  IconPencilBolt,
  IconRocket,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import CTA from "./CTA";

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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
        <div className="mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-9 gap-y-4">
          <div className="flex items-center gap-x-1">
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
              className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-6 md:w-6"
            >
              <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
              <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
              <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
              <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
              <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
              <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
              <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
            </svg>
            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              React
            </p>
          </div>
          <div className="flex items-center gap-x-1">
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
              className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-6 md:w-6"
            >
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
              <path d="M15 12v-3"></path>
            </svg>
            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              Next.js
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-6 md:w-6"
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

            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              Node.js
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-6 md:w-6"
              viewBox="0 0 128 128"
            >
              <path
                stroke="currentColor"
                fill="currentColor"
                d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"
              />
            </svg>

            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              Express.js
            </p>
          </div>

          <div className="flex items-center gap-x-1">
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
              className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-6 md:w-6"
            >
              <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
              <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
              <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
              <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
              <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
              <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
              <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
            </svg>
            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              React Native
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 stroke-[0.5px] text-neutral-600 md:h-6 md:w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
            </svg>
            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              TailwindCSS
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
              className="h-4 w-4 shrink-0 stroke-[1px] text-neutral-600 md:h-6 md:w-6"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94" />
              <path d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1" />
              <path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
              <path d="M3 9h3" />
              <path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6" />
              <path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
            </svg>
            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              AWS
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <svg
              width="34"
              height="12"
              viewBox="0 0 34 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-6 md:w-6"
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

            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              Motion/React
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
              stroke-width=""
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 shrink-0 stroke-1 text-neutral-600 md:h-6 md:w-6"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13.031 7.007c2.469 -.007 3.295 1.293 3.969 2.993c4 0 4.994 3.825 5 6h-20c-.001 -1.64 1.36 -2.954 3 -3c0 -1.5 1 -3 3 -3c.66 -1.942 2.562 -2.986 5.031 -2.993z" />
              <path d="M12 13h6" />
              <path d="M17 10l-2.5 6" />
            </svg>

            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              Cloudflare
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center border-blue-600 py-1 pb-12">
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
        <div className="absolute bottom-0 w-full border border-b border-neutral-100 mask-r-from-70% mask-l-from-70%" />
      </div>

      <div className="relative flex flex-col items-center justify-center border-neutral-300 py-12">
        <h1 className="text-2xl font-semibold tracking-wider text-neutral-700">
          Our Development Process{" "}
        </h1>
        <p className="mt-2 rounded-sm border border-neutral-300 px-3 pt-0.5 text-xs tracking-wider text-neutral-800 shadow-sm">
          Complete MVP in 4 - 6 weeks
        </p>

        <div className="relative z-10 mt-8 grid grid-cols-2 gap-x-12 gap-y-12 border-red-600">
          <div className="group relative h-44 rounded-lg border border-neutral-300 bg-white from-yellow-50 via-white to-red-50 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 hover:bg-gradient-to-r">
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
              <IconFlag3 className="mt-0.5 text-green-600 transition duration-300 group-hover:rotate-90" />{" "}
              Discovery & Strategy
            </h1>
            <ul className="relative z-10 mt-2 list-disc pl-6 tracking-wide text-neutral-600">
              <li>Understand your vision, users, and goals</li>
              <li>Define must-have features vs nice-to-have</li>
              <li>Create a go-to-market validation plan</li>
            </ul>
          </div>
          <div className="group relative h-44 rounded-lg border border-neutral-300 bg-white from-yellow-50 via-white to-red-50 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 hover:bg-gradient-to-r">
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
              <IconBrandCraft className="mt-0.5 text-[#e07a5f] transition duration-300 group-hover:-rotate-180" />{" "}
              Experience Design
            </h1>
            <ul className="relative z-10 mt-2 list-disc pl-6 tracking-wide text-neutral-600">
              <li>Wireframes & UI/UX focused on user engagement</li>
              <li>User flow designed for maximum retention and conversion</li>
            </ul>
          </div>
          <div className="group relative h-44 rounded-lg border border-neutral-300 bg-white from-yellow-50 via-white to-red-50 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 hover:bg-gradient-to-r">
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
              <IconCode className="mt-0.5 text-[#f0386b] transition duration-300 group-hover:rotate-92" />{" "}
              Development & Testing
            </h1>
            <ul className="relative z-10 mt-2 list-disc pl-6 tracking-wide text-neutral-600">
              <li>Rapid development in weekly sprints</li>
              <li>You see progress in real-time (transparency-first)</li>
              <li>Scalable backend using industry best practices</li>
              <li>Rigorous testing at each stage to ensure reliability</li>
            </ul>
          </div>
          <div className="group relative h-44 rounded-lg border border-neutral-300 bg-white from-yellow-50 via-white to-red-50 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 hover:bg-gradient-to-r">
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
              <IconRocket className="mt-0.5 text-[#457b9d] transition duration-300 group-hover:-rotate-45" />{" "}
              Deploy
            </h1>
            <ul className="relative z-10 mt-2 list-disc pl-6 tracking-wide text-neutral-600">
              <li>Deployment on secure cloud infrastructure</li>
              <li>Performance and security optimization</li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 w-full border border-b border-neutral-100 mask-r-from-70% mask-l-from-70%" />
        {/* Bottom Fade Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #f3f4f6 1px, transparent 1px),
        linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          }}
        />
      </div>

      <CTA />
    </div>
  );
};

export default MvpService;
