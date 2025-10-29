import type { SVGProps } from "react";

const Aceingdevlogo = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 260 162"
    {...props}
    className={`${className}`}
  >
       <path
      fill="currentColor"
      d="m64.348 3.842-50.604 149c-1.101 3.243 1.31 6.608 4.735 6.608H41.46a5 5 0 0 0 4.716-3.339L101 .45H69.082a5 5 0 0 0-4.734 3.392Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={32}
      d="m182.5 84.45 16.137-1.555C212.233 81.585 224 92.272 224 105.93v2.157c0 22.173-19.52 39.276-41.5 36.363"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      d="M158 155.45v-81.5l27.5-5.5v92H163a5 5 0 0 1-5-5Z"
    />
    <path
      fill="currentColor"
      d="M162 72.45 4.193 98.264A5 5 0 0 0 0 103.2v24.858a5 5 0 0 0 5.815 4.933L163.5 106.95l-1.5-34.5Z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      d="m104.855 3.929 49.97 150.95c1.071 3.235-1.339 6.571-4.747 6.571h-23.221a5 5 0 0 1-4.718-3.345L67 .956 100.04.5a4.999 4.999 0 0 1 4.815 3.429Z"
    />
  </svg>
);
export default Aceingdevlogo;
