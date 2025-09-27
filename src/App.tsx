import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Pages/Body";
import LandingPage from "./Pages/LandingPage";
import Nrega from "./Components/CaseStudies/Nrega";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/nrega" element={<Nrega />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
