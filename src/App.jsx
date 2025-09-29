import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import FeaturedWork from "./Components/FeaturedWork";
import About from "./Components/About";
import Process from "./Components/Process";
import Background from "./Components/Background";
import StatusIndicator from "./Components/StatusIndicator";
import GlobalStyles from "./Components/GlobalStyles";
import DetailedProject from "./Components/DetailedProject";
import Layout from "./Components/Layout"; // 👈 new

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 733, y: 344 });
  const [isInHero, setIsInHero] = useState(false);
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (isInHero) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseEnter = () => {
    setIsInHero(true);
    document.body.style.cursor = "none";
  };

  const handleMouseLeave = () => {
    setIsInHero(false);
    document.body.style.cursor = "auto";
  };

  const scrollToTop = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white antialiased overflow-x-hidden"
      onMouseMove={handleMouseMove}
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        "--cursor-x": `${cursorPosition.x}px`,
        "--cursor-y": `${cursorPosition.y}px`,
      }}
    >
      <GlobalStyles />
      <Background />
      <StatusIndicator scrollToSection={scrollToSection} />

      {isInHero && (
        <div
          className="custom-cursor"
          style={{
            left: `var(--cursor-x)`,
            top: `var(--cursor-y)`,
          }}
        />
      )}

      {/* Routes */}
      <Routes>
        {/* Home with Layout */}
        <Route
          path="/"
          element={
            <Layout scrollToSection={scrollToSection} scrollToTop={scrollToTop}>
              <Hero
                heroRef={heroRef}
                isInHero={isInHero}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                scrollToSection={scrollToSection}
              />
              <Services />
              <FeaturedWork />
              <About scrollToSection={scrollToSection} />
              <Process />
            </Layout>
          }
        />

        {/* Detailed Projects with same Layout */}
        <Route
          path="/detailed-projects"
          element={
            <Layout scrollToSection={scrollToSection} scrollToTop={scrollToTop}>
              <DetailedProject />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
