import type { SVGProps } from "react";
import { motion } from "motion/react";

export const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={969}
    height={777}
    viewBox="0 0 969 777"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <motion.linearGradient
        id="y-gradient-slate-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="var(--color-slate-400)" />
        <stop offset="0.66" stopColor="var(--color-slate-400)" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-cyan-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="cyan" />
        <stop offset="0.66" stopColor="cyan" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="y-gradient-red-line"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="0%"
        y1="100%" // start at bottom
        y2="110%" // small offset
        initial={{ y1: "100%", y2: "110%" }} // bottom
        animate={{ y1: "-10%", y2: "0%" }} // move upward
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="red" />
        <stop offset="0.66" stopColor="red" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-purple-line-left-right"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "0%", x2: "10%" }} // bottom
        animate={{ x1: "100%", x2: "100%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-100)" />
        <stop offset="0.55" stopColor="purple" />
        <stop offset="0.66" stopColor="purple" />
        <stop offset="1" stopColor="var(--color-neutral-100)" />
      </motion.linearGradient>
      <motion.linearGradient
        id="x-gradient-purple-line-right-left"
        gradientUnits="userSpaceOnUse"
        x1="0%"
        x2="10%"
        y1="0%" // start at bottom
        y2="0%" // small offset
        initial={{ x1: "100%", x2: "90%" }} // bottom
        animate={{ x1: "0%", x2: "10%" }} // move upward
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-50)" />
        <stop offset="0.55" stopColor="purple" />
        <stop offset="0.66" stopColor="purple" />
        <stop offset="1" stopColor="var(--color-neutral-50)" />
      </motion.linearGradient>
    </defs>

    <path d="M329.5 329V300L426 237" stroke="url(#y-gradient-cyan-line)" />
    <path d="M639.5 331V302L543 239" stroke="url(#y-gradient-cyan-line)" />
    <path d="M320 159V103.5L363 64V0" stroke="url(#y-gradient-red-line)" />
    <path d="M648 159V103.5L605 64V0" stroke="url(#y-gradient-red-line)" />
    <path
      d="M329 450.734V329H330V450.734C330 456.656 332.995 462.177 337.96 465.405L416.798 516.671C419.637 518.517 422.951 519.5 426.338 519.5H455.5C461.851 519.5 467 514.351 467 508V178C467 171.649 461.851 166.5 455.5 166.5H223C218.858 166.5 215.5 163.142 215.5 159V132.859C215.5 128.716 217.553 124.842 220.981 122.516L238.457 110.657C241.611 108.517 243.5 104.952 243.5 101.141V65H244.5V101.141C244.5 105.284 242.447 109.158 239.019 111.484L221.543 123.343C218.389 125.483 216.5 129.048 216.5 132.859V159C216.5 162.59 219.41 165.5 223 165.5H455.5C462.404 165.5 468 171.096 468 178V508C468 514.904 462.404 520.5 455.5 520.5H426.338C422.758 520.5 419.254 519.461 416.253 517.509L337.415 466.243C332.167 462.83 329 456.995 329 450.734Z"
      fill="var(--color-neutral-100)"
    />
    <path
      d="M329 450.734V329H330V450.734C330 456.656 332.995 462.177 337.96 465.405L416.798 516.671C419.637 518.517 422.951 519.5 426.338 519.5H455.5C461.851 519.5 467 514.351 467 508V178C467 171.649 461.851 166.5 455.5 166.5H223C218.858 166.5 215.5 163.142 215.5 159V132.859C215.5 128.716 217.553 124.842 220.981 122.516L238.457 110.657C241.611 108.517 243.5 104.952 243.5 101.141V65H244.5V101.141C244.5 105.284 242.447 109.158 239.019 111.484L221.543 123.343C218.389 125.483 216.5 129.048 216.5 132.859V159C216.5 162.59 219.41 165.5 223 165.5H455.5C462.404 165.5 468 171.096 468 178V508C468 514.904 462.404 520.5 455.5 520.5H426.338C422.758 520.5 419.254 519.461 416.253 517.509L337.415 466.243C332.167 462.83 329 456.995 329 450.734Z"
      fill="var(--color-neutral-100)"
    />
    <path
      d="M84.5 495V594C84.5 600.627 89.8726 606 96.5 606H178L204.5 574.5V431.5L228.5 406.5H329.5"
      stroke="#1225FA"
    />
    <path d="M87.5 651H345.5M259 543V777" stroke="var(--color-purple-100)" />
    <path
      d="M639.5 330.5V449.734C639.5 455.825 636.419 461.503 631.313 464.824L552.475 516.09C549.554 517.989 546.146 519 542.662 519H513.5C506.873 519 501.5 513.627 501.5 507V177C501.5 170.373 506.873 165 513.5 165H746C749.866 165 753 161.866 753 158V131.859C753 127.882 751.029 124.163 747.738 121.929L730.262 110.071C726.971 107.837 725 104.118 725 100.141V64"
      stroke="var(--color-neutral-100)"
    />
    <path
      d="M884.5 494V593C884.5 599.627 879.127 605 872.5 605H791L764.5 573.5V430.5L740.5 405.5H639.5"
      stroke="#1225FA"
    />
    <path d="M886.5 651H625M710 543V777" stroke="var(--color-purple-100)" />
    <path
      d="M421 520V566.498C421 571.088 423.618 575.275 427.744 577.286L453.256 589.714C457.382 591.725 460 595.912 460 600.502V720C460 723.314 462.686 726 466 726H496.5C499.814 726 502.5 723.314 502.5 720V677.5H520.5V599C520.5 595.686 523.186 593 526.5 593H538.5C541.814 593 544.5 590.314 544.5 587V520"
      stroke="var(--color-purple-100)"
    />
    <path
      d="M84.5 495V594C84.5 600.627 89.8726 606 96.5 606H178L204.5 574.5V431.5L228.5 406.5H329.5"
      stroke="#1225FA"
    />
    <path d="M87.5 651H345.5M259 543V777" stroke="var(--color-purple-100)" />
    <path
      d="M639.5 331V449.734C639.5 455.825 636.419 461.503 631.313 464.824L552.475 516.09C549.554 517.989 546.146 519 542.662 519H513.5C506.873 519 501.5 513.627 501.5 507V177C501.5 170.373 506.873 165 513.5 165H746C749.866 165 753 161.866 753 158V131.859C753 127.882 751.029 124.163 747.738 121.929L730.262 110.071C726.971 107.837 725 104.118 725 100.141V64"
      stroke="var(--color-purple-100)"
    />
    <path
      d="M884.5 494V593C884.5 599.627 879.127 605 872.5 605H791L764.5 573.5V430.5L740.5 405.5H639.5"
      stroke="#1225FA"
    />
    <path d="M886.5 651H625M710 543V777" stroke="var(--color-purple-100)" />
    <path
      d="M421 520V566.498C421 571.088 423.618 575.275 427.744 577.286L453.256 589.714C457.382 591.725 460 595.912 460 600.502V720C460 723.314 462.686 726 466 726H496.5C499.814 726 502.5 723.314 502.5 720V677.5H520.5V599C520.5 595.686 523.186 593 526.5 593H538.5C541.814 593 544.5 590.314 544.5 587V520"
      stroke="var(--color-purple-100)"
    />
    <path
      d="M84.5 495V594C84.5 600.627 89.8726 606 96.5 606H178L204.5 574.5V431.5L228.5 406.5H329.5"
      stroke="#1225FA"
    />
    <path d="M87.5 651H345.5M259 543V777" stroke="var(--color-purple-100)" />
    <path
      d="M639.5 330.5V449.734C639.5 455.825 636.419 461.503 631.313 464.824L552.475 516.09C549.554 517.989 546.146 519 542.662 519H513.5C506.873 519 501.5 513.627 501.5 507V177C501.5 170.373 506.873 165 513.5 165H746C749.866 165 753 161.866 753 158V131.859C753 127.882 751.029 124.163 747.738 121.929L730.262 110.071C726.971 107.837 725 104.118 725 100.141V64H244V65"
      stroke="var(--color-purple-100)"
    />
    <path
      d="M884.5 494V593C884.5 599.627 879.127 605 872.5 605H791L764.5 573.5V430.5L740.5 405.5H639.5"
      stroke="#1225FA"
    />
    <path d="M886.5 651H625M710 543V777" stroke="var(--color-purple-100)" />
    <path
      d="M421 519V565.724C421 570.336 423.608 574.544 427.717 576.564L453.125 589.053C457.235 591.073 459.842 595.281 459.842 599.893V719.971C459.842 723.301 462.518 726 465.818 726H496.194C499.495 726 502.17 723.301 502.17 719.971V677.265H520.097V598.383C520.097 595.054 522.773 592.354 526.073 592.354H538.024C541.325 592.354 544 589.655 544 586.325V519"
      stroke="var(--color-purple-100)"
    />
    <path
      d="M597 487.5V576.5L624 600.5V720.5C624 727.127 629.373 732.5 636 732.5H771.598C777.838 732.5 783.72 729.588 787.503 724.626L813.997 689.874C817.78 684.912 823.662 682 829.902 682H956C962.627 682 968 676.627 968 670V508C968 501.373 962.627 496 956 496H884.5V358L862 330.5H555C548.373 330.5 543 325.127 543 318.5V182L691.416 284.863C693.424 286.254 695.809 287 698.252 287H968"
      stroke="var(--color-purple-100)"
    />
    <path
      d="M279 406V320.639C279 316.467 281.167 312.594 284.722 310.412L323.278 286.745C326.833 284.563 329 280.69 329 276.518V166"
      stroke="url(#y-gradient-red-line)"
    />
    <path
      d="M689.5 405V320.771C689.5 316.569 687.301 312.672 683.704 310.499L644.796 287.001C641.199 284.828 639 280.931 639 276.729V165.5"
      stroke="url(#y-gradient-red-line)"
    />
    <path
      d="M205 493H278.349L326.405 531H421"
      stroke="url(#x-gradient-purple-line-right-left)"
    />
    <path
      d="M764 493H691L643.172 531H545"
      stroke="url(#x-gradient-purple-line-left-right)"
    />
    <path
      d="M862 330.5V212.5L918.5 176.5V35"
      stroke="url(#y-gradient-slate-line)"
    />
    <circle cx={725} cy={64} r={4} fill="#C7C2C2" />
    <circle cx={862} cy={330} r={4} fill="#C7C2C2" />
    <path
      d="M107 330V212.2L49 176.261V35"
      stroke="url(#y-gradient-slate-line)"
    />
    <path
      d="M693.5 405.5C693.5 407.709 691.709 409.5 689.5 409.5C687.291 409.5 685.5 407.709 685.5 405.5C685.5 403.291 687.291 401.5 689.5 401.5C691.709 401.5 693.5 403.291 693.5 405.5Z"
      fill="#C7C2C2"
    />
    <path
      d="M283 406.5C283 408.709 281.209 410.5 279 410.5C276.791 410.5 275 408.709 275 406.5C275 404.291 276.791 402.5 279 402.5C281.209 402.5 283 404.291 283 406.5Z"
      fill="#C7C2C2"
    />
    <path
      d="M425 531C425 533.209 423.209 535 421 535C418.791 535 417 533.209 417 531C417 528.791 418.791 527 421 527C423.209 527 425 528.791 425 531Z"
      fill="#C7C2C2"
    />
    <path
      d="M548 531C548 533.209 546.209 535 544 535C541.791 535 540 533.209 540 531C540 528.791 541.791 527 544 527C546.209 527 548 528.791 548 531Z"
      fill="#C7C2C2"
    />
    <path
      d="M329 450.734V329H330V450.734C330 456.656 332.995 462.177 337.96 465.405L416.798 516.671C419.637 518.517 422.951 519.5 426.338 519.5H455.5C461.851 519.5 467 514.351 467 508V178C467 171.649 461.851 166.5 455.5 166.5H223C218.858 166.5 215.5 163.142 215.5 159V132.859C215.5 128.716 217.553 124.842 220.981 122.516L238.457 110.657C241.611 108.517 243.5 104.952 243.5 101.141V65H244.5V101.141C244.5 105.284 242.447 109.158 239.019 111.484L221.543 123.343C218.389 125.483 216.5 129.048 216.5 132.859V159C216.5 162.59 219.41 165.5 223 165.5H455.5C462.404 165.5 468 171.096 468 178V508C468 514.904 462.404 520.5 455.5 520.5H426.338C422.758 520.5 419.254 519.461 416.253 517.509L337.415 466.243C332.167 462.83 329 456.995 329 450.734Z"
      fill="var(--color-purple-100)"
    />
    <circle cx={244} cy={64} r={4} fill="#C7C2C2" />
    <rect x={318} y={159} width={22} height={13} fill="#FFFF00" />
    <rect x={328} y={172} width={2} height={3} fill="#FFC0CB" />
    <rect x={337} y={172} width={2} height={3} fill="#FFC0CB" />
    <rect x={319} y={172} width={2} height={3} fill="#FFC0CB" />
    <rect x={319} y={156} width={2} height={3} fill="#FFC0CB" />
    <rect x={328} y={156} width={2} height={3} fill="#FFC0CB" />
    <rect x={337} y={156} width={2} height={3} fill="#FFC0CB" />
    <rect x={315} y={165} width={3} height={2} fill="#FFC0CB" />
    <rect x={340} y={165} width={3} height={2} fill="#FFC0CB" />
    <path
      d="M372 486.5V575.5L345 599.5V719.5C345 726.127 339.627 731.5 333 731.5H197.402C191.162 731.5 185.28 728.588 181.497 723.626L155.003 688.874C151.22 683.912 145.338 681 139.098 681H13C6.37258 681 1 675.627 1 669V507C1 500.373 6.37258 495 13 495H84.5V357L107 329.5H414C420.627 329.5 426 324.127 426 317.5V181L277.584 283.863C275.576 285.254 273.191 286 270.748 286H1"
      stroke="var(--color-purple-100)"
    />
    <rect x={628} y={158} width={22} height={13} fill="#FFFF00" />
    <rect x={638} y={171} width={2} height={3} fill="#FFC0CB" />
    <rect x={629} y={171} width={2} height={3} fill="#FFC0CB" />
    <rect x={647} y={171} width={2} height={3} fill="#FFC0CB" />
    <rect x={629} y={155} width={2} height={3} fill="#FFC0CB" />
    <rect x={638} y={155} width={2} height={3} fill="#FFC0CB" />
    <rect x={647} y={155} width={2} height={3} fill="#FFC0CB" />
    <rect x={625} y={164} width={3} height={2} fill="#FFC0CB" />
    <rect x={650} y={164} width={3} height={2} fill="#FFC0CB" />
    <circle cx={710} cy={651} r={10} fill="#E8E1E1" />
    <circle cx={259} cy={651} r={10} fill="#E8E1E1" />
    <path d="M94 505H74V485H94V505Z" fill="#E8E1E1" />
    <rect x={874} y={486} width={20} height={20} fill="#E8E1E1" />
    <circle cx={107} cy={330} r={4} fill="#C7C2C2" />
    <rect x={319} y={319} width={20} height={20} fill="#E8E1E1" />
    <rect x={630} y={320} width={20} height={20} fill="#E8E1E1" />
  </svg>
);
