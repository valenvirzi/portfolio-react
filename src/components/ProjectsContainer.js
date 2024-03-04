import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
  const PROJECTS = [
    /* TODO: Make a JSON representation of the list of projects I made, 
        each of them should have the following properties:
        - Name
        - Description
        - Image
        - GitHub Link
        - Deployed Link

        */
  ];
  return (
    <>
      <div className="projects-section__container">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        {/* TODO: Do an iteration over the list of projects up to 3 items, 
            and allow to load more after clicking the "See more" button */}
      </div>
      <button className="projects-section__more-btn" type="button">
        See more
      </button>
    </>
  );
};

export default ProjectsContainer;
