import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Description from "./views/Description";
import Contact from "./views/Contact";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/description" element={<Description />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
