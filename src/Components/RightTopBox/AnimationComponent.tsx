"use client";

import {
  IconBraces,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandReactNative,
  IconBrandVite,
  IconChevronDown,
  IconChevronRight,
  IconFileTypeTsx,
  IconGitFork,
  IconInfoSmall,
  IconSearch,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
import type { PrismTheme, Language, RenderProps } from "prism-react-renderer";
import { useState, useEffect } from "react";

const code = `
import React from "react";
export default function App() {
  return (
    <div style={{ fontFamily: "monospace",
       padding: 20 }}>
      <h1>Build. Launch. Scale. 🚀</h1>
      <p>Turning ideas into products quickly
         and efficiently.</p>
    </div>        
  );
}
`;

export const WritingCodeAnimationComponent = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 500); // Small delay before starting animation
    return () => clearTimeout(timer);
  }, []);

  const handleHoverStart = () => {
    setHasAnimated(false);
    setAnimationKey((prev) => prev + 1);
    setTimeout(() => {
      setHasAnimated(true);
    }, 50);
  };

  return (
    <motion.div className="flex flex-col items-center">
      <div className="h-fit w-[30rem] rounded-tl-xl rounded-tr-xl border border-neutral-400 bg-gray-400 px-2 pb-2">
        <div className="flex w-full justify-center">
          {" "}
          <div className="flex h-2 w-10 items-center justify-center rounded-br-sm rounded-bl-sm bg-gray-500">
            <svg
              width={6}
              height={6}
              viewBox="0 0 24 24"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={12} cy={12} r={12} fill="var(--color-neutral-600)" />
            </svg>
          </div>
        </div>
        <div className="z-20 overflow-hidden rounded-tl-[9px] rounded-tr-[9px] border border-neutral-400 bg-neutral-900">
          <div className="relative flex h-3 items-center justify-center border-b border-neutral-800 bg-slate-900 py-1">
            <div className="absolute left-3 flex gap-x-1">
              <svg
                width={6}
                height={6}
                viewBox="0 0 24 24"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={12} cy={12} r={12} fill="red" />
              </svg>
              <svg
                width={6}
                height={6}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={12} cy={12} r={12} fill="yellow" />
              </svg>
              <svg
                width={6}
                height={6}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={12} cy={12} r={12} fill="green" />
              </svg>
            </div>
            <p className="mt-0.5 flex items-center gap-x-0.5 rounded-lg border border-neutral-600 px-20 text-center text-[4px] tracking-wider text-neutral-300">
              <IconSearch size={6} /> <span>aceingdev_v2</span>
            </p>
          </div>
          <div className="flex">
            <div className="flex w-28 border-r border-neutral-800">
              <div className="w-3 border-r border-neutral-800 bg-slate-900"></div>
              <div className="w-full pt-0.5 text-[5px] tracking-wider text-neutral-300">
                <div className="pl-0.5">EXPLORER</div>
                <p className="flex items-center pl-0.5 text-[6px] tracking-wide">
                  <IconChevronRight size={9} stroke={1.5} />
                  Open Editor
                </p>
                <p className="border-b border-neutral-800" />
                <div className="pr-0.5">
                  <div className="mt-1 flex items-center pl-2 text-[6px] tracking-wide">
                    <IconChevronDown size={9} stroke={1.5} />
                    ACEINGDEV
                  </div>
                  <p className="flex items-center pl-4 text-[6px] tracking-wide text-neutral-600">
                    <IconChevronRight
                      size={9}
                      stroke={1.5}
                      className="text-white"
                    />{" "}
                    node modules
                  </p>
                  <p className="flex items-center pl-4 text-[6px] tracking-wide">
                    <IconChevronRight size={9} stroke={1.5} /> public
                  </p>
                  <p className="flex items-center pl-4 text-[6px] tracking-wide">
                    <IconChevronDown size={9} stroke={1.5} /> src
                  </p>
                  <p className="flex items-center pl-6 text-[6px] tracking-wide">
                    <IconChevronRight size={9} stroke={1.5} /> assets
                  </p>
                  <p className="flex items-center pl-6 text-[6px] tracking-wide">
                    <IconChevronRight size={9} stroke={1.5} /> Components
                  </p>
                  <p className="flex items-center pl-6 text-[6px] tracking-wide">
                    <IconChevronRight size={9} stroke={1.5} /> pages
                  </p>
                  <p className="flex items-center pl-6 text-[6px] tracking-wide">
                    <IconChevronRight size={9} stroke={1.5} /> utils
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-6 text-[6px] tracking-wide">
                    <IconBrandReactNative
                      size={7}
                      stroke={1.5}
                      className="text-blue-300"
                    />{" "}
                    App.tsx
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-6 text-[6px] tracking-wide">
                    <IconBrandCss3
                      size={7}
                      stroke={1.5}
                      className="text-blue-400"
                    />{" "}
                    index.css
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-6 text-[6px] tracking-wide">
                    <IconBrandReactNative
                      size={7}
                      stroke={1.5}
                      className="text-blue-300"
                    />{" "}
                    main.tsx
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-6 text-[6px] tracking-wide">
                    <IconFileTypeTsx
                      size={7}
                      stroke={1.5}
                      className="text-blue-300"
                    />{" "}
                    vite-env.d.ts
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconGitFork
                      size={7}
                      stroke={1.5}
                      className="bg-gray-500 text-black"
                    />{" "}
                    .gitignore
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconBraces
                      size={7}
                      stroke={1.5}
                      className="text-yellow-300"
                    />{" "}
                    .prettierrc.json
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconBrandHtml5
                      size={7}
                      stroke={1.5}
                      className="text-orange-600"
                    />{" "}
                    index.html
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconBraces
                      size={7}
                      stroke={1.5}
                      className="text-yellow-300"
                    />{" "}
                    .package-lo..
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconBraces
                      size={7}
                      stroke={1.5}
                      className="text-yellow-300"
                    />{" "}
                    .package.json
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconInfoSmall
                      size={7}
                      stroke={1.5}
                      className="text-blue-400"
                    />{" "}
                    .README.md
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconBraces
                      size={7}
                      stroke={1.5}
                      className="text-yellow-300"
                    />{" "}
                    .tsconfig.app.js..
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconFileTypeTsx
                      size={7}
                      stroke={1.5}
                      className="text-blue-300"
                    />{" "}
                    .tsconfig.json
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconBraces
                      size={7}
                      stroke={1.5}
                      className="text-yellow-300"
                    />{" "}
                    .tsconfig.node.js..
                  </p>
                  <p className="flex items-center gap-x-0.5 pl-4 text-[6px] tracking-wide">
                    <IconBrandVite
                      size={7}
                      stroke={1.5}
                      className="text-yellow-300"
                    />{" "}
                    .vite.config.json
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center gap-x-1 border-r border-b border-neutral-800 pt-0.5 pl-1 text-[8px] text-neutral-400">
                {" "}
                <IconBrandReactNative
                  size={7}
                  stroke={1.5}
                  className="text-blue-300"
                />{" "}
                <p className="border-r border-neutral-800 pr-2">App.tsx</p>
              </div>
              <div className="pt-3 pb-4 pl-2">
                <Highlight
                  theme={themes.vsDark as PrismTheme}
                  code={code.trim()}
                  language={"jsx" as Language}
                >
                  {({ tokens, getLineProps, getTokenProps }: RenderProps) => (
                    <motion.pre
                      className="font-mono text-xs leading-relaxed text-white"
                      onHoverStart={handleHoverStart}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => {
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            const { key: tokenKey, ...tokenProps } =
                              getTokenProps({ token, key });
                            return (
                              <motion.span
                                key={`${animationKey}-${i}-${key}`}
                                {...tokenProps}
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: hasAnimated ? 1 : 0,
                                  transition: {
                                    delay: hasAnimated
                                      ? i * 0.1 + key * 0.02
                                      : 0,
                                    duration: 0.3,
                                  },
                                }}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </motion.pre>
                  )}
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex h-4 w-[32rem] items-start justify-center rounded-br-lg rounded-bl-lg bg-gray-400">
          <div className="h-2 w-24 rounded-br-lg rounded-bl-lg bg-gray-300"></div>
        </div>
        <div className="flex justify-between px-8">
          <div className="h-1 w-8 rounded-br-lg rounded-bl-lg bg-gray-300"></div>
          <div className="h-1 w-8 rounded-br-lg rounded-bl-lg bg-gray-300"></div>
        </div>
      </div>
    </motion.div>
  );
};
