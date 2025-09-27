import nregaImg from "../../assets/nrega-hero.png";
import { Badge } from "../ui/badge";
const Nrega = () => {
  return (
    <div className="border-none">
      <div
        style={{
          background:
            "linear-gradient(to bottom, #1f2937 0%, #000000 50%, #374151 100%)",
        }}
        className="relative flex h-fit w-full justify-center gap-x-32 overflow-hidden border px-12 py-8 text-white"
      >
        <div className="mt-3 flex max-w-6xl flex-col justify-center">
          <Badge className="mb-4 border-gray-600 bg-gray-800 px-3 py-1 text-lg text-white">
            SaaS Case Study
          </Badge>
          <h1 className="mt-4 text-6xl font-bold tracking-wide">Nrega</h1>
          <p className="mt-5 w-fit rounded-xl border px-4 py-3 pt-4 text-2xl">
            From 6 Hours of Manual Reporting → to 30 Seconds for Report
            Generation
          </p>
          <p className="mt-14 max-w-4xl text-xl leading-7 tracking-wider">
            A centralized SaaS platform where contractors and vendors can access
            structured data sourced from government portals and instantly
            download 20+ professional reports, all under a subscription-based
            model.
          </p>
        </div>
        <div>
          {/* <div className="h-full w-[40rem] border rounded-2xl overflow-hidden">
            <img className="" alt="nrega-hero-img" src={nregaImg} />
          </div> */}
          <div className="relative">
            <div className="relative rounded-xl bg-gray-800 p-2 px-3 pb-3 shadow-2xl">
              <div className="mb-3 flex gap-2 pt-2 pl-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <img
                src={nregaImg}
                alt="Nrega Files Dashboard"
                className="h-full w-[45rem] overflow-hidden rounded-2xl border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nrega;
