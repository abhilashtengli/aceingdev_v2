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
