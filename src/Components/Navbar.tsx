import Aceingdevlogo from "./AceingdevSvg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white px-24 py-3">
      {/* Navbar Content */}
      <div className="flex items-center justify-center w-fit  px-12 gap-x-5">
        <Aceingdevlogo className="rounde-xl h-12 w-13 rounded-xl  border-neutral-500 bg-neutral-800 p-1 px-1 pl-2 text-white" />

        <h1 className="font-bold text-2xl text-neutral-800 tracking-wider">Aceing<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-red-400">Dev</span></h1>
      </div>
    </div>
  );
};

export default Navbar;
