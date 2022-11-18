import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./views/Hero";
import Description from "./views/Description";
import Contact from "./views/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/description" element={<Description />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
