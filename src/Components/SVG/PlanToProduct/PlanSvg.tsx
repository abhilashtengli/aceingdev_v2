import type { SVGProps } from "react";

export const PlanSvg = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 438 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={`${className} text-neutral-400 transition-colors duration-300 ease-in-out`}
  >
    <path
      d="M101.5 242C69 121 194 33 293 103.5M114.5 267C114.5 267 136.5 294 146.5 304C153.734 311.234 157 328 157 328M157 328H281M157 328V361.75M281 328C281 328 285.522 311.341 293 304C359.833 238.397 354.5 179 315 121M281 328V361.75M175 395.5H162C159.239 395.5 157 393.261 157 390.5V361.75M175 395.5V419.5C175 427.784 181.716 434.5 190 434.5H250.5C258.784 434.5 265.5 427.784 265.5 419.5V395.5M175 395.5H265.5M265.5 395.5H276C278.762 395.5 281 393.261 281 390.5V361.75M157 361.75H231.5M281 361.75H257"
      stroke="currentColor"
      strokeWidth={10}
      fill="none"
    />
    <rect x={380} y={208} width={58} height={12} rx={6} fill="currentColor" />
    <rect
      x={329.251}
      y={99.2634}
      width={58}
      height={12}
      rx={6}
      transform="rotate(-45 329.251 99.2634)"
      fill="currentColor"
    />
    <rect
      x={337.485}
      y={320}
      width={58}
      height={12}
      rx={6}
      transform="rotate(45 337.485 320)"
      fill="currentColor"
    />
    <rect
      x={60}
      y={361.012}
      width={58}
      height={12}
      rx={6}
      transform="rotate(-45 60 361.012)"
      fill="currentColor"
    />
    <rect y={208} width={58} height={12} rx={6} fill="currentColor" />
    <rect
      x={67.0559}
      y={58.2876}
      width={58}
      height={12}
      rx={6}
      transform="rotate(44 67.0559 58.2876)"
      fill="currentColor"
    />
    <rect
      x={213}
      y={58}
      width={58}
      height={12}
      rx={6}
      transform="rotate(-90 213 58)"
      fill="currentColor"
    />
    <path
      d="M204 329.5V238.5M204 238.5H238V329.5M204 238.5V220.5C204 209.454 195.046 200.5 184 200.5H181.5C171.007 200.5 162.5 209.007 162.5 219.5V219.5C162.5 229.993 171.007 238.5 181.5 238.5H204Z"
      stroke="currentColor"
      strokeWidth={10}
      fill="none"
      className="transition-colors duration-300"
    />
    <path
      d="M238 220V238H260.5C270.993 238 279.5 229.493 279.5 219C279.5 208.507 270.993 200 260.5 200H258C246.954 200 238 208.954 238 220Z"
      stroke="currentColor"
      strokeWidth={10}
      fill="none"
      className="transition-colors duration-300"
    />
  </svg>
);
