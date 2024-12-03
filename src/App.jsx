import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Introduction,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.css";
import Skills from "./components/Skills/Skills";

function App() {
  const [mode, setMode] = useState("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Introduction />
        <Skills />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
