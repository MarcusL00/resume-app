import React from "react";
import navbarLinks from "./ComponentData/Navbar.json";
import Navbar from "./Components/Content/Navbar";
import HomePage from "./Components/Routes/HomePage";
import PageNotFound from "./Components/Routes/PageNotFound";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Routes/Contact";
import Project from "./Components/Routes/Project";
import AboutMe from "./Components/Routes/AboutMe";
import UseThemeDetector from "./Hooks/UseThemeDetector";

function App() {
  UseThemeDetector();

  return (
    <>
      <Navbar links={navbarLinks}></Navbar>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
