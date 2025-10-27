import TechItems from "./TechItems";

const InfinteSliderCode = () => {
  return (
    <div className="flex w-full items-center overflow-hidden mask-r-from-80% mask-l-from-80% py-5">
      <div className="animate-marquee flex min-w-max gap-x-5">
        <TechItems />
        <TechItems /> {/* duplicate for smooth loop */}
      </div>
    </div>
  );
};

export default InfinteSliderCode;
