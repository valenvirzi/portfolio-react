import React from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";

function Main() {
  return (
    <div className="app__main">
      <HeroSection
        title={"VALENTIN VIRZI"}
        description={`Frontend Developer proficient in HTML, CSS, and JavaScript, along with React JS. With a keen eye for design, I can deliver responsive, user-friendly interfaces and engaging digital experiences.`}
        slogan={`Let's bring new solutions to life.`}
      />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}

export default Main;
