import TechItemsRow1 from "./TechItemsRow1";
import TechItemsRow2 from "./TechItemsRow2";
import TechItemsRow3 from "./TechItemsRow3";
const InfinteSliderCode = () => {
  return (
    <div className="mt-2">
      <div className="flex w-full items-center overflow-hidden mask-r-from-80% mask-l-from-80% py-1">
        <div className="animate-marquee flex min-w-max gap-x-5">
          <TechItemsRow1 />
          <TechItemsRow1 /> {/* duplicate for smooth loop */}
        </div>
      </div>
      <div className="flex w-full items-center overflow-hidden mask-r-from-80% mask-l-from-80% py-1">
        <div className="animate-marquee-reverse flex min-w-max gap-x-5">
          <TechItemsRow2 />
          <TechItemsRow2 /> {/* duplicate for smooth loop */}
        </div>
      </div>
      <div className="flex w-full items-center overflow-hidden mask-r-from-80% mask-l-from-80% py-1">
        <div className="animate-marquee flex min-w-max gap-x-5">
          <TechItemsRow3 />
          <TechItemsRow3 /> {/* duplicate for smooth loop */}
        </div>
      </div>
    </div>
  );
};

export default InfinteSliderCode;
