import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Pages/Body";
import LandingPage from "./Pages/LandingPage";
import Nrega from "./Components/CaseStudies/Nrega";
import Mpmos from "./Components/CaseStudies/Mpmos";
import MilletInformationSystem from "./Components/CaseStudies/Mis";
import CCS from "./Components/CaseStudies/Ccsturs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/nrega" element={<Nrega />} />
            <Route path="/mpmos" element={<Mpmos />} />
            <Route path="/mis" element={<MilletInformationSystem />} />
            <Route path="/ccs" element={<CCS />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
