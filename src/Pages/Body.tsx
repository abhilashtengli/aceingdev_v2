import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../utils/themeProvider";
import Navbar from "@/Components/Navbar";
// import ThemeToggle from "../utils/themetoggle";

const Body = () => {
  return (
    <ThemeProvider storageKey="app-theme">
      <div className=".dark:bg-black relative min-h-screen">
        <Navbar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Body;
