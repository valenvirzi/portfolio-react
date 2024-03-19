import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
  const PROJECTS = [
    /* TODO: Make a JSON representation of the list of projects I made, 
        each of them should have the following properties:
        - Name
        - Description
        - Image Preview
        - GitHub Link
        - Deployed Link

        */
    {
      name: "Portfolio",
      description:
        "Lorem Ipsum port of portfolio port of project portfolio project portfolio project portfolio project",
      imagePreview:
        "https://images.unsplash.com/photo-1566241477600-ac026ad43874?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubLink: "https://github.com/valenvirzi/portfolio-react",
      deployedLink: "https://valenvirzi.github.io/portfolio-react/",
    },
    {
      name: "Portfolio",
      description:
        "Lorem Ipsum port of portfolio port of project portfolio project portfolio project portfolio project",
      imagePreview:
        "https://images.unsplash.com/photo-1566241477600-ac026ad43874?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubLink: "https://github.com/valenvirzi/portfolio-react",
      deployedLink: "https://valenvirzi.github.io/portfolio-react/",
    },
    {
      name: "Portfolio",
      description:
        "Lorem Ipsum port of portfolio port of project portfolio project portfolio project portfolio project",
      imagePreview:
        "https://images.unsplash.com/photo-1566241477600-ac026ad43874?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubLink: "https://github.com/valenvirzi/portfolio-react",
      deployedLink: "https://valenvirzi.github.io/portfolio-react/",
    },
    // {
    //   name: "Portfolio",
    //   description:
    //     "Lorem Ipsum port of portfolio port of project portfolio project portfolio project portfolio project",
    //   imagePreview:
    //     "https://images.unsplash.com/photo-1566241477600-ac026ad43874?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   githubLink: "https://github.com/valenvirzi/portfolio-react",
    //   deployedLink: "https://valenvirzi.github.io/portfolio-react/",
    // }
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
      {/* TODO: Render the "See more" button only if the project list has more than 3 items. 
                If not then just show the projects (upto 3).

      {PROJECTS.length > 3 ? (
        <button className="projects-section__btn" type="button">
          <span className="projects-section__btn__text">See more</span>
        </button>
      ) : (
        {}
      )} 
      
      */}
      <button className="projects-section__btn" type="button">
        <span className="btn__span--hover"></span>
        <span className="projects-section__btn__text">See more</span>
        <span className="btn__span--hover"></span>
      </button>
    </>
  );
};

export default ProjectsContainer;
