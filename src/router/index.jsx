import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Error = lazy(() => import("../pages/error"));
const Projects = lazy(() => import("../pages/projects"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
