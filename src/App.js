import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Resume from "./Pages/Resume/Resume";
import Works from "./Pages/Works/Works";
import Contact from "./Pages/Contact/Contact";
import Index from "./Pages/Index/Index";

function App() {

  return <ContextProvider>
    {" "}
    <Routes>
      {" "}
      <Route path="/" element={<Index />}>
        {" "}
        <Route index element={<Home />} />{" "}
        <Route path="about" element={<About />} />{" "}
        <Route path="resume" element={<Resume />} />{" "}
        <Route path="works" element={<Works />} />{" "}
        <Route path="contact" element={<Contact />} />{" "}
      </Route>{" "}
    </Routes>{" "}
  </ContextProvider>;
}

export default App;
