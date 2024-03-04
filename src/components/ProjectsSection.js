import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectsContainer from "./ProjectsContainer";

const ProjectsSection = () => {
  return (
    <section className="main__projects-section">
      <SectionTitle section={"projects"} title={"Some of my Projects"} />
      <ProjectsContainer />
    </section>
  );
};

export default ProjectsSection;
