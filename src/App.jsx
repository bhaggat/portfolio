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
import ScrollReveal from "./components/ScrollReveal";
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
      <ScrollReveal width="100%">
        <Main />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Introduction />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Skills />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Timeline />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Project />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Contact />
      </ScrollReveal>
      <Footer />
    </div>
  );
}

export default App;
