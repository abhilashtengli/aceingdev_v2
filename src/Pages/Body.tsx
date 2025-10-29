import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../utils/themeProvider";
// import ThemeToggle from "../utils/themetoggle";

const Body = () => {
  return (
    <ThemeProvider storageKey="app-theme">
      <div className=".dark:bg-black relative min-h-screen">
        <div className="">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Body;
