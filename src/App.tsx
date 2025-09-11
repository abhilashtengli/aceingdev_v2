import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Pages/Body";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
