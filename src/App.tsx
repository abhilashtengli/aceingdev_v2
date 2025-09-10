import { BrowserRouter, Route } from "react-router-dom";
import Body from "./Pages/Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" element={<Body />}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
