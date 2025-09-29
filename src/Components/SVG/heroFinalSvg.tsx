import type { SVGProps } from "react";
import { motion } from "motion/react";

export const SvgFinalComponent = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    // width={1438}
    // height={911}
    viewBox="0 0 1438 911"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    {...props}
    className={`${className} h-full w-full object-contain`}
    style={{
      transform: "scale(var(--zoom-scale, 1))",
      transformOrigin: "center center",
      minWidth: "100%",
      minHeight: "100%",
    }}
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
          duration: 4,
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
        initial={{ y1: "110%", y2: "100%" }} // bottom
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
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="purple" />
        <stop offset="0.66" stopColor="purple" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
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
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0.4,
        }}
      >
        <stop stopColor="var(--color-neutral-200)" />
        <stop offset="0.55" stopColor="purple" />
        <stop offset="0.66" stopColor="purple" />
        <stop offset="1" stopColor="var(--color-neutral-200)" />
      </motion.linearGradient>
      <linearGradient
        id="gradient-transparent-color"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="transparent" />
        <stop offset="0.55" stopColor="var(--color-neutral-50)" />
        <stop offset="0.66" stopColor="var(--color-neutral-200)" />
        <stop offset="1" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      d="M687.494 145L687 309.5"
      stroke="url(#y-gradient-slate-line)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M687.5 361.5L687.006 526"
      stroke="url(#y-gradient-slate-line)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M1223.92 264.005L1214.01 271L1212.77 269.634L1222.68 262.638L1223.92 264.005ZM1223.95 258.732L1208.1 270.974L1206.79 269.659L1222.65 257.417L1223.95 258.732ZM1223.97 253.476L1202.17 270.964L1200.83 269.67L1222.63 252.181L1223.97 253.476ZM1223.97 248.222L1196.23 270.957L1194.88 269.676L1222.63 246.941L1223.97 248.222ZM1223.98 242.972L1190.29 270.954L1188.93 269.68L1222.62 241.698L1223.98 242.972ZM1223.98 237.722L1184.35 270.951L1182.98 269.683L1222.62 236.455L1223.98 237.722ZM1224 267.437L1220.04 270.935L1218.64 269.699L1222.6 266.201L1224 267.437ZM1223.98 232.474L1180.39 269.2L1179.02 267.936L1222.61 231.21L1223.98 232.474ZM1223.98 227.227L1180.39 263.953L1179.02 262.69L1222.61 225.964L1223.98 227.227ZM1223.98 221.981L1180.39 258.707L1179.02 257.443L1222.61 220.717L1223.98 221.981ZM1223.98 216.734L1180.39 253.46L1179.02 252.196L1222.61 215.47L1223.98 216.734ZM1223.98 211.488L1180.39 248.214L1179.02 246.95L1222.61 210.224L1223.98 211.488ZM1223.98 206.241L1180.39 242.967L1179.02 241.703L1222.61 204.977L1223.98 206.241ZM1223.98 200.995L1180.39 237.721L1179.02 236.457L1222.61 199.731L1223.98 200.995ZM1223.98 195.748L1180.39 232.474L1179.02 231.21L1222.61 194.484L1223.98 195.748ZM1220.04 192.237L1180.4 227.214L1179 225.977L1218.64 191L1220.04 192.237ZM1214.09 192.237L1180.4 221.967L1179 220.731L1212.69 191L1214.09 192.237ZM1208.15 192.237L1180.4 216.721L1179 215.484L1206.74 191L1208.15 192.237ZM1202.2 192.237L1180.4 211.474L1179 210.237L1200.8 191L1202.2 192.237ZM1196.26 192.237L1180.4 206.227L1179 204.991L1194.85 191L1196.26 192.237ZM1190.31 192.237L1180.4 200.981L1179 199.744L1188.91 191L1190.31 192.237ZM1184.36 192.237L1180.4 195.734L1179 194.498L1182.96 191L1184.36 192.237Z"
      fill="#E5E5E5"
    />
    <path
      d="M287.5 358H125C118.373 358 113 363.373 113 370V542"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M833 158V155V142L813.5 128H761.5L751 114H699"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M541 159V156V142.5L559.5 128.5H610L620.5 114.5H672.5"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M1088.5 493H1074L1053 461H1042"
      stroke="url(#x-gradient-purple-line-left-right)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M407.5 493H393L372 461H361"
      stroke="url(#x-gradient-purple-line-right-left)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M287 493H301.5L322.5 461H333.5"
      stroke="url(#x-gradient-purple-line-right-left)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M532.5 329V300L629 237"
      stroke="url(#y-gradient-slate-line)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M842.5 331V302L746 239"
      stroke="url(#y-gradient-slate-line)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M523 159V103.5L566 64V0"
      stroke="url(#y-gradient-red-line)"
      strokeDasharray="3 2"
    />
    <path
      d="M851 159V103.5L808 64V0"
      stroke="url(#y-gradient-red-line)"
      strokeDasharray="3 2"
    />
    <path
      d="M532 450.734V329H533V450.734C533 456.656 535.995 462.177 540.96 465.405L619.798 516.671C622.637 518.517 625.951 519.5 629.338 519.5H658.5C664.851 519.5 670 514.351 670 508V178C670 171.649 664.851 166.5 658.5 166.5H426C421.858 166.5 418.5 163.142 418.5 159V132.859C418.5 128.716 420.553 124.842 423.981 122.516L441.457 110.657C444.611 108.517 446.5 104.952 446.5 101.141V65H447.5V101.141C447.5 105.284 445.447 109.158 442.019 111.484L424.543 123.343C421.389 125.483 419.5 129.048 419.5 132.859V159C419.5 162.59 422.41 165.5 426 165.5H658.5C665.404 165.5 671 171.096 671 178V508C671 514.904 665.404 520.5 658.5 520.5H629.338C625.758 520.5 622.254 519.461 619.253 517.509L540.415 466.243C535.167 462.83 532 456.995 532 450.734Z"
      stroke="var(--color-neutral-200)"
      strokeWidth={1} //left center vertical line
    />
    {/* <path
      d="M532 450.734V329H533V450.734C533 456.656 535.995 462.177 540.96 465.405L619.798 516.671C622.637 518.517 625.951 519.5 629.338 519.5H658.5C664.851 519.5 670 514.351 670 508V178C670 171.649 664.851 166.5 658.5 166.5H426C421.858 166.5 418.5 163.142 418.5 159V132.859C418.5 128.716 420.553 124.842 423.981 122.516L441.457 110.657C444.611 108.517 446.5 104.952 446.5 101.141V65H447.5V101.141C447.5 105.284 445.447 109.158 442.019 111.484L424.543 123.343C421.389 125.483 419.5 129.048 419.5 132.859V159C419.5 162.59 422.41 165.5 426 165.5H658.5C665.404 165.5 671 171.096 671 178V508C671 514.904 665.404 520.5 658.5 520.5H629.338C625.758 520.5 622.254 519.461 619.253 517.509L540.415 466.243C535.167 462.83 532 456.995 532 450.734Z"
      stroke="var(--color-neutral-200)"
    /> */}

    <path
      d="M287.5 495V594C287.5 600.627 292.873 606 299.5 606H381L407.5 574.5V431.5L431.5 406.5H532.5"
      stroke="var(--color-neutral-200)"
    />
    <path d="M290.5 651H548.5M462 543V777" stroke="var(--color-neutral-200)" />
    <path
      d="M842.5 330.5V449.734C842.5 455.825 839.419 461.503 834.313 464.824L755.475 516.09C752.554 517.989 749.146 519 745.662 519H716.5C709.873 519 704.5 513.627 704.5 507V177C704.5 170.373 709.873 165 716.5 165H949C952.866 165 956 161.866 956 158V131.859C956 127.882 954.029 124.163 950.738 121.929L933.262 110.071C929.971 107.837 928 104.118 928 100.141V64"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M1087.5 494V593C1087.5 599.627 1082.13 605 1075.5 605H994L967.5 573.5V430.5L943.5 405.5H842.5"
      stroke="var(--color-neutral-200)"
    />
    <path d="M1089.5 651H828M913 543V777" stroke="var(--color-neutral-200)" />
    <path
      d="M287.5 495V594C287.5 600.627 292.873 606 299.5 606H381L407.5 574.5V431.5L431.5 406.5H532.5"
      stroke="var(--color-neutral-200)"
    />
    <path d="M290.5 651H548.5M462 543V777" stroke="var(--color-neutral-200)" />
    <path
      d="M842.5 331V449.734C842.5 455.825 839.419 461.503 834.313 464.824L755.475 516.09C752.554 517.989 749.146 519 745.662 519H716.5C709.873 519 704.5 513.627 704.5 507V177C704.5 170.373 709.873 165 716.5 165H949C952.866 165 956 161.866 956 158V131.859C956 127.882 954.029 124.163 950.738 121.929L933.262 110.071C929.971 107.837 928 104.118 928 100.141V64"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M1087.5 494V593C1087.5 599.627 1082.13 605 1075.5 605H994L967.5 573.5V430.5L943.5 405.5H842.5"
      stroke="var(--color-neutral-200)"
    />
    <path d="M1089.5 651H828M913 543V777" stroke="var(--color-neutral-200)" />
    <path
      d="M287.5 495V594C287.5 600.627 292.873 606 299.5 606H381L407.5 574.5V431.5L431.5 406.5H532.5"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M548.5 651H290.5L147 543H0M462 543V911"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M842.5 330.5V449.734C842.5 455.825 839.419 461.503 834.313 464.824L755.475 516.09C752.554 517.989 749.146 519 745.662 519H716.5C709.873 519 704.5 513.627 704.5 507V177C704.5 170.373 709.873 165 716.5 165H949C952.866 165 956 161.866 956 158V131.859C956 127.882 954.029 124.163 950.738 121.929L933.262 110.071C929.971 107.837 928 104.118 928 100.141V64H447V65"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M1087.5 494V593C1087.5 599.627 1082.13 605 1075.5 605H994L967.5 573.5V430.5L943.5 405.5H842.5"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M828 651H1089.5L1226 543H1438M913 543V910.5"
      stroke="url(#gradient-transparent-color)"
    />
    <path
      d="M624 519V565.724C624 570.336 626.608 574.544 630.717 576.564L656.125 589.053C660.235 591.073 662.842 595.281 662.842 599.893V719.971C662.842 723.301 665.518 726 668.818 726H699.194C702.495 726 705.17 723.301 705.17 719.971V677.265H723.097V598.383C723.097 595.054 725.773 592.354 729.073 592.354H741.024C744.325 592.354 747 589.655 747 586.325V519"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M800 487.5V576.5L827 600.5V720.5C827 727.127 832.373 732.5 839 732.5H974.598C980.838 732.5 986.72 729.588 990.503 724.626L1017 689.874C1020.78 684.912 1026.66 682 1032.9 682H1159C1165.63 682 1171 676.627 1171 670V508C1171 501.373 1165.63 496 1159 496H1087.5V358L1065 330.5H758C751.373 330.5 746 325.127 746 318.5V182L894.416 284.863C896.424 286.254 898.809 287 901.252 287H1159C1165.63 287 1171 281.627 1171 275V182H1437"
      stroke="url(#gradient-transparent-color)"
    />
    <path
      d="M482 406V320.639C482 316.467 484.167 312.594 487.722 310.412L526.278 286.745C529.833 284.563 532 280.69 532 276.518V166"
      stroke="url(#y-gradient-red-line)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M892.5 405V320.771C892.5 316.569 890.301 312.672 886.704 310.499L847.796 287.001C844.199 284.828 842 280.931 842 276.729V165.5"
      stroke="url(#y-gradient-red-line)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M408 493H481.349L529.405 531H624"
      stroke="url(#x-gradient-purple-line-right-left)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M967 493H894L846.172 531H748"
      stroke="url(#x-gradient-purple-line-left-right)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M1065 330.5V212.5L1121.5 176.5V35"
      stroke="url(#y-gradient-slate-line)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <circle cx={928} cy={64} r={4} fill="#C7C2C2" />
    <circle cx={1065} cy={330} r={4} fill="#C7C2C2" />
    <path
      d="M310 330V212.2L252 176.261V35"
      stroke="url(#y-gradient-slate-line)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M896.5 405.5C896.5 407.709 894.709 409.5 892.5 409.5C890.291 409.5 888.5 407.709 888.5 405.5C888.5 403.291 890.291 401.5 892.5 401.5C894.709 401.5 896.5 403.291 896.5 405.5Z"
      fill="#C7C2C2"
    />
    <path
      d="M486 406.5C486 408.709 484.209 410.5 482 410.5C479.791 410.5 478 408.709 478 406.5C478 404.291 479.791 402.5 482 402.5C484.209 402.5 486 404.291 486 406.5Z"
      fill="#C7C2C2"
    />
    <path
      d="M628 531C628 533.209 626.209 535 624 535C621.791 535 620 533.209 620 531C620 528.791 621.791 527 624 527C626.209 527 628 528.791 628 531Z"
      fill="#C7C2C2"
    />
    {/* <path
      d="M751 531C751 533.209 749.209 535 747 535C744.791 535 743 533.209 743 531C743 528.791 744.791 527 747 527C749.209 527 751 528.791 751 531Z"
      fill="#C7C2C2"
    /> */}
    {/* <path
      d="M532 450.734V329H533V450.734C533 456.656 535.995 462.177 540.96 465.405L619.798 516.671C622.637 518.517 625.951 519.5 629.338 519.5H658.5C664.851 519.5 670 514.351 670 508V178C670 171.649 664.851 166.5 658.5 166.5H426C421.858 166.5 418.5 163.142 418.5 159V132.859C418.5 128.716 420.553 124.842 423.981 122.516L441.457 110.657C444.611 108.517 446.5 104.952 446.5 101.141V65H447.5V101.141C447.5 105.284 445.447 109.158 442.019 111.484L424.543 123.343C421.389 125.483 419.5 129.048 419.5 132.859V159C419.5 162.59 422.41 165.5 426 165.5H658.5C665.404 165.5 671 171.096 671 178V508C671 514.904 665.404 520.5 658.5 520.5H629.338C625.758 520.5 622.254 519.461 619.253 517.509L540.415 466.243C535.167 462.83 532 456.995 532 450.734Z"
            stroke="var(--color-neutral-50)" // left center
           
    /> */}
    <circle cx={447} cy={64} r={4} fill="#C7C2C2" />
    <rect
      x={521}
      y={159}
      width={22}
      height={13}
      fill="var(--color-neutral-300)"
    />
    <rect
      x={531}
      y={172}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={540}
      y={172}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={522}
      y={172}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={522}
      y={156}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={531}
      y={156}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={540}
      y={156}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={518}
      y={165}
      width={3}
      height={2}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={543}
      y={165}
      width={3}
      height={2}
      fill="var(--color-neutral-400)"
    />
    <path
      d="M575 486.5V575.5L548 599.5V719.5C548 726.127 542.627 731.5 536 731.5H400.402C394.162 731.5 388.28 728.588 384.497 723.626L358.003 688.874C354.22 683.912 348.338 681 342.098 681H216C209.373 681 204 675.627 204 669V507C204 500.373 209.373 495 216 495H287.5V357L310 329.5H617C623.627 329.5 629 324.127 629 317.5V181L480.584 283.863C478.576 285.254 476.191 286 473.748 286H216C209.373 286 204 280.627 204 274V181H2.5"
      stroke="var(--color-neutral-200)"
    />
    <rect
      x={831}
      y={158}
      width={22}
      height={13}
      fill="var(--color-neutral-300)"
    />
    <rect
      x={841}
      y={171}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={832}
      y={171}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={850}
      y={171}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={832}
      y={155}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={841}
      y={155}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={850}
      y={155}
      width={2}
      height={3}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={828}
      y={164}
      width={3}
      height={2}
      fill="var(--color-neutral-400)"
    />
    <rect
      x={853}
      y={164}
      width={3}
      height={2}
      fill="var(--color-neutral-400)"
    />
    <circle cx={913} cy={651} r={10} fill="#E8E1E1" />
    <circle cx={462} cy={651} r={10} fill="#E8E1E1" />
    <path d="M297 505H277V485H297V505Z" fill="#E8E1E1" />
    <rect x={1077} y={486} width={20} height={20} fill="#E8E1E1" />
    <circle cx={310} cy={330} r={4} fill="#C7C2C2" />
    <rect x={522} y={319} width={20} height={20} fill="#E8E1E1" />
    <rect x={833} y={320} width={20} height={20} fill="#E8E1E1" />
    <rect x={695} y={534} width={3} height={2} fill="#E5E5E5" />
    <rect x={680} y={534} width={3} height={2} fill="#E5E5E5" />
    <rect x={695} y={544} width={3} height={2} fill="#E5E5E5" />
    <rect x={680} y={544} width={3} height={2} fill="#E5E5E5" />
    <rect x={695} y={554} width={3} height={2} fill="#E5E5E5" />
    <rect x={680} y={554} width={3} height={2} fill="#E5E5E5" />
    <rect x={680} y={564} width={3} height={2} fill="#E5E5E5" />
    <rect x={695} y={564} width={3} height={2} fill="#E5E5E5" />
    <rect x={695} y={558} width={4} height={4} fill="#E5E5E5" />
    <rect x={682} y={558} width={3} height={1} fill="#E5E5E5" />
    <rect x={682} y={561} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={558} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={561} width={3} height={1} fill="#E5E5E5" />
    <path d="M702 564H675V556H702V564Z" stroke="#E5E5E5" />
    <rect x={696} y={559} width={2} height={2} fill="#D3D3D3" />
    <rect x={695} y={568} width={4} height={4} fill="#E5E5E5" />
    <rect x={682} y={568} width={3} height={1} fill="#E5E5E5" />
    <rect x={682} y={571} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={568} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={571} width={3} height={1} fill="#E5E5E5" />
    <rect x={687} y={574} width={2} height={5} fill="#E5E5E5" />
    <path d="M702 574H675V566H702V574Z" stroke="#E5E5E5" />
    <rect x={696} y={569} width={2} height={2} fill="#D3D3D3" />
    <rect x={695} y={548} width={4} height={4} fill="#E5E5E5" />
    <rect x={682} y={548} width={3} height={1} fill="#E5E5E5" />
    <rect x={682} y={551} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={548} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={551} width={3} height={1} fill="#E5E5E5" />
    <path d="M702 554H675V546H702V554Z" stroke="#E5E5E5" />
    <rect x={696} y={549} width={2} height={2} fill="#D3D3D3" />
    <rect x={695} y={538} width={4} height={4} fill="#E5E5E5" />
    <rect x={682} y={538} width={3} height={1} fill="#E5E5E5" />
    <rect x={682} y={541} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={538} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={541} width={3} height={1} fill="#E5E5E5" />
    <path d="M702 544H675V536H702V544Z" stroke="#E5E5E5" />
    <rect x={696} y={539} width={2} height={2} fill="#D3D3D3" />
    <rect x={695} y={528} width={4} height={4} fill="#E5E5E5" />
    <rect x={682} y={528} width={3} height={1} fill="#E5E5E5" />
    <rect x={682} y={531} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={528} width={3} height={1} fill="#E5E5E5" />
    <rect x={678} y={531} width={3} height={1} fill="#E5E5E5" />
    <path d="M702 534H675V526H702V534Z" stroke="#E5E5E5" />
    <rect x={696} y={529} width={2} height={2} fill="#D3D3D3" />
    <path
      d="M675 580C675 579.448 675.448 579 676 579H701C701.552 579 702 579.448 702 580V582C702 582.552 701.552 583 701 583H676C675.448 583 675 582.552 675 582V580Z"
      fill="#E5E5E5"
    />
    <path
      d="M691.7 578.3V583.7H684.3V578.3H691.7Z"
      fill="#D9D9D9"
      stroke="#BFBEBE"
      strokeWidth={0.6}
    />
    <rect x={354} y={445} width={3} height={2} fill="#E5E5E5" />
    <rect x={339} y={445} width={3} height={2} fill="#E5E5E5" />
    <rect x={354} y={455} width={3} height={2} fill="#E5E5E5" />
    <rect x={339} y={455} width={3} height={2} fill="#E5E5E5" />
    <rect x={354} y={465} width={3} height={2} fill="#E5E5E5" />
    <rect x={339} y={465} width={3} height={2} fill="#E5E5E5" />
    <rect x={339} y={475} width={3} height={2} fill="#E5E5E5" />
    <rect x={354} y={475} width={3} height={2} fill="#E5E5E5" />
    <rect x={354} y={469} width={4} height={4} fill="#E5E5E5" />
    <rect x={341} y={469} width={3} height={1} fill="#E5E5E5" />
    <rect x={341} y={472} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={469} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={472} width={3} height={1} fill="#E5E5E5" />
    <path d="M361 475H334V467H361V475Z" stroke="#E5E5E5" />
    <rect x={355} y={470} width={2} height={2} fill="#D3D3D3" />
    <rect x={354} y={479} width={4} height={4} fill="#E5E5E5" />
    <rect x={341} y={479} width={3} height={1} fill="#E5E5E5" />
    <rect x={341} y={482} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={479} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={482} width={3} height={1} fill="#E5E5E5" />
    <rect x={346} y={485} width={2} height={5} fill="#E5E5E5" />
    <path d="M361 485H334V477H361V485Z" stroke="#E5E5E5" />
    <rect x={355} y={480} width={2} height={2} fill="#D3D3D3" />
    <rect x={354} y={459} width={4} height={4} fill="#E5E5E5" />
    <rect x={341} y={459} width={3} height={1} fill="#E5E5E5" />
    <rect x={341} y={462} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={459} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={462} width={3} height={1} fill="#E5E5E5" />
    <path d="M361 465H334V457H361V465Z" stroke="#E5E5E5" />
    <rect x={355} y={460} width={2} height={2} fill="#D3D3D3" />
    <rect x={354} y={449} width={4} height={4} fill="#E5E5E5" />
    <rect x={341} y={449} width={3} height={1} fill="#E5E5E5" />
    <rect x={341} y={452} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={449} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={452} width={3} height={1} fill="#E5E5E5" />
    <path d="M361 455H334V447H361V455Z" stroke="#E5E5E5" />
    <rect x={355} y={450} width={2} height={2} fill="#D3D3D3" />
    <rect x={354} y={439} width={4} height={4} fill="#E5E5E5" />
    <rect x={341} y={439} width={3} height={1} fill="#E5E5E5" />
    <rect x={341} y={442} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={439} width={3} height={1} fill="#E5E5E5" />
    <rect x={337} y={442} width={3} height={1} fill="#E5E5E5" />
    <path d="M361 445H334V437H361V445Z" stroke="#E5E5E5" />
    <rect x={355} y={440} width={2} height={2} fill="#D3D3D3" />
    <path
      d="M334 491C334 490.448 334.448 490 335 490H360C360.552 490 361 490.448 361 491V493C361 493.552 360.552 494 360 494H335C334.448 494 334 493.552 334 493V491Z"
      fill="#E5E5E5"
    />
    <path
      d="M350.7 489.3V494.7H343.3V489.3H350.7Z"
      fill="#D9D9D9"
      stroke="#BFBEBE"
      strokeWidth={0.6}
    />
    <rect x={1035} y={445} width={3} height={2} fill="#E5E5E5" />
    <rect x={1020} y={445} width={3} height={2} fill="#E5E5E5" />
    <rect x={1035} y={455} width={3} height={2} fill="#E5E5E5" />
    <rect x={1021} y={455} width={3} height={2} fill="#E5E5E5" />
    <rect x={1035} y={465} width={3} height={2} fill="#E5E5E5" />
    <rect x={1021} y={465} width={3} height={2} fill="#E5E5E5" />
    <rect x={1020} y={475} width={3} height={2} fill="#E5E5E5" />
    <rect x={1035} y={475} width={3} height={2} fill="#E5E5E5" />
    <rect x={1035} y={469} width={4} height={4} fill="#E5E5E5" />
    <rect x={1023} y={469} width={3} height={1} fill="#E5E5E5" />
    <rect x={1023} y={472} width={3} height={1} fill="#E5E5E5" />
    <rect x={1018} y={469} width={3} height={1} fill="#E5E5E5" />
    <rect x={1018} y={472} width={3} height={1} fill="#E5E5E5" />
    <path d="M1041 475H1014V467H1041V475Z" stroke="#E5E5E5" />
    <rect x={1036} y={470} width={2} height={2} fill="#D3D3D3" />
    <rect x={1035} y={479} width={4} height={4} fill="#E5E5E5" />
    <rect x={1023} y={479} width={3} height={1} fill="#E5E5E5" />
    <rect x={1023} y={482} width={3} height={1} fill="#E5E5E5" />
    <rect x={1019} y={479} width={3} height={1} fill="#E5E5E5" />
    <rect x={1019} y={482} width={3} height={1} fill="#E5E5E5" />
    <rect x={1027} y={485} width={2} height={5} fill="#E5E5E5" />
    <path d="M1041 485H1014V477H1041V485Z" stroke="#E5E5E5" />
    <rect x={1036} y={480} width={2} height={2} fill="#D3D3D3" />
    <rect x={1035} y={459} width={4} height={4} fill="#E5E5E5" />
    <rect x={1023} y={459} width={3} height={1} fill="#E5E5E5" />
    <rect x={1023} y={462} width={3} height={1} fill="#E5E5E5" />
    <rect x={1019} y={459} width={3} height={1} fill="#E5E5E5" />
    <rect x={1019} y={462} width={3} height={1} fill="#E5E5E5" />
    <path d="M1041 465H1014V457H1041V465Z" stroke="#E5E5E5" />
    <rect x={1036} y={460} width={2} height={2} fill="#D3D3D3" />
    <rect x={1035} y={449} width={4} height={4} fill="#E5E5E5" />
    <rect x={1023} y={450} width={3} height={1} fill="#E5E5E5" />
    <rect x={1023} y={453} width={3} height={1} fill="#E5E5E5" />
    <rect x={1019} y={450} width={3} height={1} fill="#E5E5E5" />
    <rect x={1019} y={453} width={3} height={1} fill="#E5E5E5" />
    <path d="M1041 455H1014V447H1041V455Z" stroke="#E5E5E5" />
    <rect x={1036} y={450} width={2} height={2} fill="#D3D3D3" />
    <rect x={1035} y={439} width={4} height={4} fill="#E5E5E5" />
    <rect x={1023} y={442} width={3} height={1} fill="#E5E5E5" />
    <path d="M1023 439H1026V440H1023V439Z" fill="#E5E5E5" />
    <rect x={1019} y={439} width={3} height={1} fill="#E5E5E5" />
    <rect x={1019} y={442} width={3} height={1} fill="#E5E5E5" />
    <path d="M1041 445H1014V437H1041V445Z" stroke="#E5E5E5" />
    <rect x={1036} y={440} width={2} height={2} fill="#D3D3D3" />
    <path
      d="M1014 491C1014 490.448 1014.45 490 1015 490H1040C1040.55 490 1041 490.448 1041 491V493C1041 493.552 1040.55 494 1040 494H1015C1014.45 494 1014 493.552 1014 493V491Z"
      fill="#E5E5E5"
    />
    <path
      d="M1031.7 489.3V494.7H1024.3V489.3H1031.7Z"
      fill="#D9D9D9"
      stroke="#BFBEBE"
      strokeWidth={0.6}
    />
    <rect x={692} y={98} width={3} height={2} fill="#E5E5E5" />
    <rect x={677} y={98} width={3} height={2} fill="#E5E5E5" />
    <rect x={692} y={108} width={3} height={2} fill="#E5E5E5" />
    <rect x={677} y={108} width={3} height={2} fill="#E5E5E5" />
    <rect x={692} y={118} width={3} height={2} fill="#E5E5E5" />
    <rect x={677} y={118} width={3} height={2} fill="#E5E5E5" />
    <rect x={677} y={128} width={3} height={2} fill="#E5E5E5" />
    <rect x={692} y={128} width={3} height={2} fill="#E5E5E5" />
    <rect x={692} y={122} width={4} height={4} fill="#E5E5E5" />
    <rect x={679} y={122} width={3} height={1} fill="#E5E5E5" />
    <rect x={679} y={125} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={122} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={125} width={3} height={1} fill="#E5E5E5" />
    <path d="M699 128H672V120H699V128Z" stroke="#E5E5E5" />
    <rect x={693} y={123} width={2} height={2} fill="#D3D3D3" />
    <rect x={692} y={132} width={4} height={4} fill="#E5E5E5" />
    <rect x={679} y={132} width={3} height={1} fill="#E5E5E5" />
    <rect x={679} y={135} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={132} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={135} width={3} height={1} fill="#E5E5E5" />
    <rect x={684} y={138} width={2} height={5} fill="#E5E5E5" />
    <path d="M699 138H672V130H699V138Z" stroke="#E5E5E5" />
    <rect x={693} y={133} width={2} height={2} fill="#D3D3D3" />
    <rect x={692} y={112} width={4} height={4} fill="#E5E5E5" />
    <rect x={679} y={112} width={3} height={1} fill="#E5E5E5" />
    <rect x={679} y={115} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={112} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={115} width={3} height={1} fill="#E5E5E5" />
    <path d="M699 118H672V110H699V118Z" stroke="#E5E5E5" />
    <rect x={693} y={113} width={2} height={2} fill="#D3D3D3" />
    <rect x={692} y={102} width={4} height={4} fill="#E5E5E5" />
    <rect x={679} y={102} width={3} height={1} fill="#E5E5E5" />
    <rect x={679} y={105} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={102} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={105} width={3} height={1} fill="#E5E5E5" />
    <path d="M699 108H672V100H699V108Z" stroke="#E5E5E5" />
    <rect x={693} y={103} width={2} height={2} fill="#D3D3D3" />
    <rect x={692} y={92} width={4} height={4} fill="#E5E5E5" />
    <rect x={679} y={92} width={3} height={1} fill="#E5E5E5" />
    <rect x={679} y={95} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={92} width={3} height={1} fill="#E5E5E5" />
    <rect x={675} y={95} width={3} height={1} fill="#E5E5E5" />
    <path d="M699 98H672V90H699V98Z" stroke="#E5E5E5" />
    <rect x={693} y={93} width={2} height={2} fill="#D3D3D3" />
    <path
      d="M672 144C672 143.448 672.448 143 673 143H698C698.552 143 699 143.448 699 144V146C699 146.552 698.552 147 698 147H673C672.448 147 672 146.552 672 146V144Z"
      fill="#E5E5E5"
    />
    <path
      d="M688.7 142.3V147.7H681.3V142.3H688.7Z"
      fill="#D9D9D9"
      stroke="#BFBEBE"
      strokeWidth={0.6}
    />
    {/* engine */}
    <path
      d="M581.135 388.919H595.573L598.002 394.382M598.002 394.382C598.076 397.676 598.573 399.471 600.296 402.577C597.347 405.112 596.321 407.064 595.304 411.228M598.002 394.382C598.002 394.382 599.286 388.859 601.511 386.491C603.687 384.174 608.528 383 608.528 383C615.677 384.198 618.065 386.696 619.863 393.927M619.863 393.927L622.427 388.919H637L632.007 398.783H628.499L622.696 410.924M619.863 393.927C619.868 397.602 619.411 399.481 617.569 402.425C620.335 404.985 621.422 406.881 622.696 410.924M622.696 410.924C623.648 421.224 621.236 425.043 613.52 429.591M613.52 429.591L608.933 439L604.345 429.743M613.52 429.591C610.081 430.783 608.073 430.843 604.345 429.743M604.345 429.743C596.643 424.625 594.241 420.785 595.304 411.228M595.304 411.228L589.501 398.783H585.858L581 388.919"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M610 409.5C612.442 409.5 614.5 411.693 614.5 414.5C614.5 417.307 612.442 419.5 610 419.5C607.558 419.5 605.5 417.307 605.5 414.5C605.5 411.693 607.558 409.5 610 409.5Z"
      fill="white"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M609.5 391.5C611.661 391.5 613.5 393.464 613.5 396C613.5 398.536 611.661 400.5 609.5 400.5C607.339 400.5 605.5 398.536 605.5 396C605.5 393.464 607.339 391.5 609.5 391.5Z"
      fill="white"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M734.135 389.919H748.573L751.002 395.382M751.002 395.382C751.076 398.676 751.573 400.471 753.296 403.577C750.347 406.112 749.321 408.064 748.304 412.228M751.002 395.382C751.002 395.382 752.286 389.859 754.511 387.491C756.687 385.174 761.528 384 761.528 384C768.677 385.198 771.065 387.696 772.863 394.927M772.863 394.927L775.427 389.919H790L785.007 399.783H781.499L775.696 411.924M772.863 394.927C772.868 398.602 772.411 400.481 770.569 403.425C773.335 405.985 774.422 407.881 775.696 411.924M775.696 411.924C776.648 422.224 774.236 426.043 766.52 430.591M766.52 430.591L761.933 440L757.345 430.743M766.52 430.591C763.081 431.783 761.073 431.843 757.345 430.743M757.345 430.743C749.643 425.625 747.241 421.785 748.304 412.228M748.304 412.228L742.501 399.783H738.858L734 389.919"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M763 410.5C765.442 410.5 767.5 412.693 767.5 415.5C767.5 418.307 765.442 420.5 763 420.5C760.558 420.5 758.5 418.307 758.5 415.5C758.5 412.693 760.558 410.5 763 410.5Z"
      fill="white"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M762.5 392.5C764.661 392.5 766.5 394.464 766.5 397C766.5 399.536 764.661 401.5 762.5 401.5C760.339 401.5 758.5 399.536 758.5 397C758.5 394.464 760.339 392.5 762.5 392.5Z"
      fill="white"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M967 493H981.5L1002.5 461H1013.5"
      stroke="url(#x-gradient-purple-line-left-right)"
      strokeWidth={2}
      strokeDasharray="3 2"
    />
    <path
      d="M1088 359H1250.5C1257.13 359 1262.5 364.373 1262.5 371V543"
      stroke="var(--color-neutral-200)"
    />
    <path
      d="M194.919 262.005L185.01 269L183.771 267.634L193.68 260.638L194.919 262.005ZM194.952 256.732L179.097 268.974L177.793 267.659L193.647 255.417L194.952 256.732ZM194.965 251.476L173.166 268.964L171.834 267.67L193.634 250.181L194.965 251.476ZM194.973 246.222L167.228 268.957L165.881 267.676L193.626 244.941L194.973 246.222ZM194.979 240.972L161.289 268.954L159.93 267.68L193.62 239.698L194.979 240.972ZM194.983 235.722L155.347 268.951L153.981 267.683L193.616 234.455L194.983 235.722ZM195 265.437L191.036 268.935L189.635 267.699L193.599 264.201L195 265.437ZM194.985 230.474L151.386 267.2L150.015 265.936L193.614 229.21L194.985 230.474ZM194.985 225.227L151.386 261.953L150.015 260.69L193.614 223.964L194.985 225.227ZM194.985 219.981L151.386 256.707L150.015 255.443L193.614 218.717L194.985 219.981ZM194.985 214.734L151.386 251.46L150.015 250.196L193.614 213.47L194.985 214.734ZM194.985 209.488L151.386 246.214L150.015 244.95L193.614 208.224L194.985 209.488ZM194.985 204.241L151.386 240.967L150.015 239.703L193.614 202.977L194.985 204.241ZM194.985 198.995L151.386 235.721L150.015 234.457L193.614 197.731L194.985 198.995ZM194.985 193.748L151.386 230.474L150.015 229.21L193.614 192.484L194.985 193.748ZM191.036 190.237L151.401 225.214L150 223.977L189.635 189L191.036 190.237ZM185.091 190.237L151.401 219.967L150 218.731L183.69 189L185.091 190.237ZM179.146 190.237L151.401 214.721L150 213.484L177.745 189L179.146 190.237ZM173.201 190.237L151.401 209.474L150 208.237L171.799 189L173.201 190.237ZM167.255 190.237L151.401 204.227L150 202.991L165.854 189L167.255 190.237ZM161.31 190.237L151.401 198.981L150 197.744L159.909 189L161.31 190.237ZM155.365 190.237L151.401 193.734L150 192.498L153.964 189L155.365 190.237Z"
      fill="#E5E5E5"
    />
    <rect x={1189} y={200} width={26} height={62} fill="white" />
    <rect x={159} y={198} width={26} height={62} fill="white" />
    <path
      d="M681 309.5H693C694.933 309.5 696.5 311.067 696.5 313V361C696.5 362.933 694.933 364.5 693 364.5H681C679.067 364.5 677.5 362.933 677.5 361V313C677.5 311.067 679.067 309.5 681 309.5Z"
      fill=""
      stroke="#9F9D9D"
    />
    <path d="M681 314H693" stroke="var(--color-neutral-300)" />
    <path d="M681 319H693" stroke="var(--color-neutral-300)" />
    <path d="M681 324H693" stroke="var(--color-neutral-300)" />
    <path d="M681 329H693" stroke="var(--color-neutral-300)" />
    <path d="M681 334H693" stroke="var(--color-neutral-300)" />
    <path d="M681 339H693" stroke="var(--color-neutral-300)" />
    <path d="M681 344H693" stroke="var(--color-neutral-300)" />
    <path d="M681 349H693" stroke="var(--color-neutral-300)" />
    <path d="M681 354H693" stroke="var(--color-neutral-300)" />
    <path d="M681 359H693" stroke="var(--color-neutral-300)" />
  </svg>
);
