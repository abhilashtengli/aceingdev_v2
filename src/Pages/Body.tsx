import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../utils/ThemeProvider";
// import ThemeToggle from "../utils/themetoggle";

const Body = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <div>
        {/* <ThemeToggle /> */}
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default Body;
