import { Lightbulb, Zap } from "lucide-react";
import nregaImg from "../../assets/nrega-hero.png";
import { Badge } from "../ui/badge";
const Nrega = () => {
  return (
    <div className="h-full w-full border border-red-700">
      <section className="relative flex h-fit w-full justify-center gap-x-32 overflow-hidden border px-12 py-8">
        <div className="mt-3 flex max-w-6xl flex-col justify-center">
          <Badge className="mb-4 border-gray-600 bg-gray-800 px-3 py-1 text-lg tracking-wider text-white">
            SaaS Case Study
          </Badge>
          <h1 className="mt-4 text-6xl font-bold tracking-wide text-neutral-800">
            Nrega
          </h1>
          <p className="mt-5 w-fit rounded-xl border px-2 py-3 pt-4 text-2xl font-bold tracking-wide">
            From 6 Hours of Manual Reporting → to 30 Seconds for Report
            Generation
          </p>
          <p className="mt-14 max-w-4xl text-xl leading-7 tracking-wider text-neutral-700">
            A centralized SaaS platform where contractors and vendors can access
            structured data sourced from government portals and instantly
            download 20+ professional reports, all under a subscription-based
            model.
          </p>
          <div className="mt-8 flex">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 p-1 md:h-12 md:w-12">
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
                className="h-4 w-4 stroke-1 text-sky-600 md:h-12 md:w-12"
              >
                <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
              </svg>
            </div>
            <div className="-ml-3 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white p-1 md:h-12 md:w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-600 md:h-12 md:w-12"
                viewBox="0 0 128 128"
              >
                <path
                  stroke="currentColor"
                  fill="currentColor"
                  d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"
                />
              </svg>
            </div>
            <div className="-ml-3 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white p-1 md:h-12 md:w-12">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-sky-600 md:h-12 md:w-12"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
              </svg>
            </div>
            <div className="-ml-3 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white p-1 md:h-12 md:w-12">
              <svg
                viewBox="0 -30 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 pt-2 text-yellow-400 md:h-12 md:w-12"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M122.714 62.703c5.28-.643 16.924-2.027 18.997.643 2.072 2.621-2.319 13.649-4.293 18.544-.592 1.484.691 2.077 2.023.94 8.684-7.319 10.954-22.6 9.178-24.825-1.777-2.175-17.023-4.055-26.3 2.473-1.431 1.038-1.184 2.423.395 2.225z"
                    fill="#F90"
                  ></path>{" "}
                  <path
                    d="M74.852 89.456c20.28 0 43.865-6.38 60.099-18.396 2.664-1.978.345-4.994-2.369-3.758-18.207 7.714-37.993 11.473-56.003 11.473-26.694 0-52.5-7.368-73.42-19.533-1.827-1.088-3.208.791-1.679 2.176 19.343 17.505 44.951 28.038 73.372 28.038z"
                    fill="#F90"
                  ></path>{" "}
                  <path
                    d="M42.632 32.835c0 1.83.197 3.313.542 4.401a26.505 26.505 0 001.58 3.56c.246.396.345.792.345 1.138 0 .495-.296.99-.938 1.484l-3.108 2.077c-.444.296-.889.445-1.283.445-.494 0-.987-.248-1.48-.693a15.29 15.29 0 01-1.777-2.324 38.28 38.28 0 01-1.53-2.918c-3.848 4.55-8.684 6.825-14.506 6.825-4.145 0-7.45-1.187-9.868-3.56-2.418-2.374-3.652-5.54-3.652-9.495 0-4.204 1.48-7.616 4.49-10.187 3.01-2.572 7.007-3.857 12.09-3.857 1.677 0 3.404.148 5.23.395 1.825.248 3.7.643 5.674 1.088v-3.61c0-3.758-.79-6.379-2.32-7.912-1.578-1.533-4.243-2.274-8.042-2.274-1.727 0-3.503.197-5.329.642a39.247 39.247 0 00-5.329 1.682 14.14 14.14 0 01-1.727.643c-.345.098-.592.148-.79.148-.69 0-1.036-.494-1.036-1.533V6.577c0-.791.1-1.385.346-1.73.246-.347.69-.693 1.381-1.04 1.727-.89 3.8-1.631 6.217-2.225C20.23.94 22.797.642 25.51.642c5.872 0 10.164 1.336 12.927 4.006 2.714 2.67 4.096 6.726 4.096 12.165v16.022h.099zm-20.033 7.517c1.628 0 3.306-.297 5.082-.89 1.776-.594 3.355-1.682 4.687-3.165.79-.94 1.382-1.978 1.678-3.165.296-1.187.493-2.621.493-4.302v-2.077a41.135 41.135 0 00-4.539-.84 37.099 37.099 0 00-4.638-.298c-3.306 0-5.724.643-7.352 1.978-1.628 1.336-2.418 3.215-2.418 5.687 0 2.324.592 4.055 1.826 5.242 1.184 1.236 2.911 1.83 5.18 1.83zm39.621 5.34c-.888 0-1.48-.148-1.875-.494-.394-.297-.74-.99-1.036-1.929L47.714 5.044c-.296-.99-.444-1.632-.444-1.978 0-.791.394-1.236 1.184-1.236h4.835c.938 0 1.58.148 1.925.494.395.297.69.99.987 1.929l8.29 32.736 7.697-32.736c.246-.99.542-1.632.937-1.929.395-.297 1.085-.494 1.974-.494h3.947c.938 0 1.579.148 1.974.494.395.297.74.99.937 1.929l7.796 33.132L98.29 4.253c.295-.99.64-1.632.986-1.929.395-.297 1.036-.494 1.925-.494h4.588c.79 0 1.234.395 1.234 1.236 0 .247-.049.494-.099.791a7.041 7.041 0 01-.345 1.236L94.688 43.32c-.297.989-.642 1.631-1.037 1.928-.394.297-1.036.495-1.875.495h-4.243c-.938 0-1.58-.149-1.974-.495-.394-.346-.74-.989-.937-1.978l-7.648-31.895-7.599 31.846c-.247.989-.543 1.632-.938 1.978-.394.346-1.085.494-1.973.494H62.22zm63.405 1.336c-2.566 0-5.132-.297-7.599-.89-2.467-.594-4.391-1.237-5.674-1.979-.79-.445-1.332-.94-1.53-1.384a3.503 3.503 0 01-.296-1.385v-2.522c0-1.038.395-1.533 1.135-1.533.296 0 .592.05.888.148.296.1.74.297 1.234.495a26.791 26.791 0 005.428 1.73c1.973.396 3.898.594 5.871.594 3.109 0 5.527-.544 7.204-1.632 1.678-1.088 2.566-2.67 2.566-4.698 0-1.384-.444-2.521-1.332-3.461-.888-.94-2.566-1.78-4.984-2.571l-7.154-2.226c-3.602-1.137-6.267-2.818-7.895-5.044-1.628-2.176-2.467-4.599-2.467-7.17 0-2.077.444-3.907 1.332-5.489.888-1.582 2.072-2.967 3.553-4.055 1.48-1.137 3.157-1.978 5.131-2.571 1.974-.594 4.046-.841 6.217-.841 1.086 0 2.221.05 3.306.198 1.135.148 2.171.346 3.207.544.987.247 1.925.494 2.813.79.888.298 1.579.594 2.072.891.691.396 1.185.791 1.481 1.236.296.396.444.94.444 1.632V8.16c0 1.039-.395 1.583-1.135 1.583-.395 0-1.036-.198-1.875-.594-2.813-1.285-5.971-1.928-9.474-1.928-2.812 0-5.033.445-6.562 1.384-1.53.94-2.319 2.374-2.319 4.402 0 1.384.493 2.57 1.48 3.51s2.812 1.88 5.427 2.72l7.007 2.226c3.553 1.137 6.118 2.72 7.648 4.747 1.53 2.027 2.27 4.351 2.27 6.923 0 2.126-.444 4.055-1.283 5.736-.888 1.681-2.072 3.165-3.602 4.352-1.53 1.236-3.355 2.126-5.477 2.769-2.22.692-4.54 1.039-7.056 1.039z"
                    fill="#252F3E"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="-ml-3 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white p-1 md:h-12 md:w-12">
              <svg
                width="34"
                height="12"
                viewBox="0 0 34 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-400 md:h-12 md:w-12"
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
            </div>
            <div className="-ml-3 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white p-2 md:h-12 md:w-12">
              <svg
                viewBox="0 0 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
                className="h-4 w-4 md:h-12 md:w-12"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <polygon
                      fill="#007ACC"
                      transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) "
                      points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
                    >
                      {" "}
                    </polygon>{" "}
                    <path
                      d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z"
                      fill="#FFFFFF"
                      transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) "
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z"
                      fill="#FFFFFF"
                      transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) "
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="relative rounded-tl-xl rounded-tr-xl rounded-br-xs rounded-bl-xs border border-neutral-200 bg-gray-200 p-2 px-3 pb-3 shadow-xl">
              <div className="mb-3 flex gap-2 pt-2 pl-4">
                <div className="h-3 w-3 rounded-full bg-red-600"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-600"></div>
              </div>
              <img
                src={nregaImg}
                alt="Nrega Files Dashboard"
                className="h-full w-[45rem] overflow-hidden rounded-tl-xl rounded-tr-xl rounded-br-xs rounded-bl-xs border"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center border-red-500 py-12">
        <h1 className="flex w-full max-w-[109rem] items-center gap-x-3 text-3xl font-semibold tracking-wider text-neutral-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow size-10 text-green-600"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 7a5 5 0 1 0 5 5" />
            <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
            <path d="M15 6v3h3l3 -3h-3v-3z" />
            <path d="M15 9l-3 3" />
          </svg>
          Client Goal
        </h1>
        <div className="mt-3 flex justify-center">
          <div className="max-w-[45rem] border-r border-dashed border-purple-200 pr-16 pl-1">
            <p className="text-xl leading-7 tracking-wider text-neutral-700">
              The client required a SaaS-based reporting platform to streamline
              how officials, contractors, and vendors access and generate
              government compliance reports.
            </p>
          </div>
          <div className="max-w-5xl pl-16">
            <div className="space-y-5 text-xl leading-7 tracking-wider text-neutral-700">
              <p>
                Before this system, users had to spend hours manually collecting
                data, piecing together information from multiple government
                portals, and formatting reports themselves. This process was
                slow, unreliable, and often resulted in incomplete
                documentation.
              </p>
              <p>
                The vision was to create a centralized SaaS platform where
                contractors and vendors could log in, fetch structured data, and
                instantly download 20+ professional reports — all under a
                subscription-based model.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center border-red-500 py-12">
        <h1 className="flex w-full max-w-[109rem] items-center gap-x-3 text-3xl font-semibold tracking-wider text-neutral-700">
          <svg
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            stroke="currentColor"
            stroke-width="1"
            className="size-14 text-purple-300"
          >
            <path d="M56.67,49.88,46.89,36a19.31,19.31,0,1,0-33.9.18L3.33,49.88a1.63,1.63,0,0,0,1.34,2.58H55.33a1.63,1.63,0,0,0,1.34-2.58Zm-40-15.57,3.6,5.11-1.6,2.27-1.3-1.3a1,1,0,0,0-.69-.29h0a1,1,0,0,0-.69.29L13.36,43,11.7,41.37Zm18.58-15-.82,1.1a1,1,0,0,0,0,1.17l.82,1.1H30.87V19.3Zm-5.37,9.86,5.69,8.08-1.95,1.95-2.94-2.94a1,1,0,0,0-1.38,0L26.53,39l-2.11-2.11Zm-6.61,9.38,2.56,2.56a1,1,0,0,0,1.38,0L30,38.32l2.94,2.94a1,1,0,0,0,1.38,0l2.4-2.41,8.22,11.66H14.85Zm16.33,1,3.71-5.26,5,7.06L46.64,43,44,40.39a1,1,0,0,0-.69-.29h0a1,1,0,0,0-.69.29L41.2,41.82ZM12.53,26.85a17.36,17.36,0,1,1,33.09,7.34l-1-1.37a1.7,1.7,0,0,0-2.68,0l-3.56,5.05L31.23,27.67a1.45,1.45,0,0,0-.36-.34V24.62h6.34A1,1,0,0,0,38,23.06L36.43,21,38,18.91a1,1,0,0,0-.78-1.56H29.89a1,1,0,0,0-1,1v9a1.33,1.33,0,0,0-.37.34h0l-7.08,10L18,32.82a1.7,1.7,0,0,0-2.68,0l-1.09,1.54A17.37,17.37,0,0,1,12.53,26.85ZM10.57,43l2.1,2.1a1,1,0,0,0,1.38,0l2.64-2.63.85.85-4.63,6.57a1.65,1.65,0,0,0-.26.63H5.26Zm36.56,7.52a1.63,1.63,0,0,0-.25-.63l-4.54-6.44,1-1L46,45.09a1,1,0,0,0,1.38,0l2.1-2.1,5.31,7.52Z" />
          </svg>
          Challenge vs Solution{" "}
        </h1>
        <div className="mt-8 flex w-full max-w-[109rem] justify-center">
          <div className="flex w-auto justify-center border-blue-500">
            <div className="overflow-hidden rounded-xl border-gray-800 bg-white shadow-lg">
              <div className="grid w-full grid-cols-2">
                {/* Header */}
                <div className="border-r border-b border-gray-200 bg-gradient-to-b from-red-50 to-transparent p-3 py-5">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-red-600" />
                    <h3 className="text-2xl font-bold tracking-wide text-red-800">
                      Challenges
                    </h3>
                  </div>
                </div>
                <div className="border-b border-gray-200 bg-gradient-to-b from-green-50 to-transparent p-3 py-5">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-green-600" />
                    <h3 className="text-2xl font-bold tracking-wide text-green-800">
                      Solutions
                    </h3>
                  </div>
                </div>

                {/* Row 1 */}
                <div className="from-red-25 border-r border-b border-gray-200 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">⏰</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        Time-Consuming Reporting
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        Contractors and vendors spent hours manually preparing
                        reports, delaying decision-making.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="from-green-25 border-b border-gray-200 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">🤖</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        Automated Data Fetching
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        Integrated a robust scraping system that pulled
                        structured data reliably.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="from-red-25 border-r border-b border-gray-200 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">📊</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        Inconsistent & Scattered Data
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        Data across government portals was fragmented, making
                        reports error-prone and unreliable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="from-green-25 border-b border-gray-200 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">📄</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        Dynamic PDF Reports
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        Built a modular engine to generate 20+ professional
                        reports in seconds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="from-red-25 border-r border-b border-gray-200 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">🔗</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        No Centralized Access
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        Users had to juggle multiple portals and formats instead
                        of having a single reporting hub.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="from-green-25 border-b border-gray-200 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">⚡</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        One-Click Access
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        Users could instantly download individual reports or
                        generate a combined PDF with all reports merged.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="from-red-25 border-r border-b border-gray-200 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">🔒</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        Limited Control & Accessibility
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        Without role-based systems, there was no secure way for
                        different users to manage their data and access.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="from-green-25 border-b border-gray-200 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">👥</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        Role-Based Dashboards
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        Implemented RBAC (user, admin, super-admin) to ensure
                        secure, permission-based access.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="from-red-25 border-r border-gray-200 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">📈</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        Scaling Problems
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        As reporting demands grew, manual processes could not
                        keep pace with the workload.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="from-green-25 bg-gradient-to-b to-transparent p-3">
                  <div className="flex items-start gap-2">
                    <div className="text-lg">🚀</div>
                    <div>
                      <h4 className="mb-1 text-2xl font-semibold tracking-wide text-gray-900">
                        Seamless Onboarding & Optimized Performance
                      </h4>
                      <p className="text-xl tracking-wide text-gray-700">
                        Added subscription-based login, email verification, OTP
                        reset, and admin approval flows. Enabled fast batch
                        processing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nrega;
