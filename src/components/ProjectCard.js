import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="projects-section__card">
      <div className="card__text">
        <img
          className="card__img"
          src={project.imagePreview}
          alt="Project preview"
        ></img>
        <h3 className="card__title">{project.name}</h3>
        <p className="card__description">{project.description}</p>
      </div>
      <div className="card__links">
        <a className="card__link" href={project.githubLink}>
          <img
            className="card__link__svg"
            src="./github.svg"
            alt="GitHub Code"
          ></img>
        </a>
        <a className="card__link" href={project.deployedLink}>
          <img
            className="card__link__svg"
            src="./new-tab.svg"
            alt="Open Live"
          ></img>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
