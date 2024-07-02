import navbarLinks from "./ComponentData/Navbar.json";
import Navbar from "./Components/Content/Navbar";
import Home from "./Components/Routes/Home";
import PageNotFound from "./Components/Routes/PageNotFound";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Routes/Contact";
import Project from "./Components/Routes/Project";
import AboutMe from "./Components/Routes/AboutMe";
import UseThemeDetector from "./Hooks/UseThemeDetector";
import Education from "./Components/Routes/Education";

function App() {
  UseThemeDetector();

  return (
    <>
      <Navbar links={navbarLinks}></Navbar>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
