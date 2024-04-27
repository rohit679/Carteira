import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/organisms/utils/ScrollToTop";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Experience from "./components/pages/experience";
import Articles from "./components/pages/articles";
import PreLoader from "./components/organisms/utils/preloader";
import NavBar from "./components/organisms/molecules/navbar";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    console.log(window.location.pathname);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <PreLoader isLoading={isLoading} />
      <div
        className="text-white bg-[#0c1a22] w-full"
        id={isLoading ? "no-scroll" : "scroll"}
      >
        <NavBar activePath={activePath} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home setPath={setActivePath} />} />
          <Route path="/about" element={<About setPath={setActivePath} />} />
          <Route
            path="/experience"
            element={<Experience setPath={setActivePath} />}
          />
          <Route
            path="/projects"
            element={<Projects setPath={setActivePath} />}
          />
          <Route
            path="/articles"
            element={<Articles setPath={setActivePath} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <div className="bg-[#0c1a22] text-white flex justify-center py-4 text-[16px] lg:text-[20px]">
        Made with ❤️ by Rohit Prasad
      </div>
    </Router>
  );
}

export default App;
