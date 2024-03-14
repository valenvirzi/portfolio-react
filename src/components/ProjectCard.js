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
        {/* TODO: Agregarle una etiqueta de texto a los links de Github y Open Live que precisen para qué son en lugar de que solo haya un svg */}
        <a
          className="card__link"
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card__link__svg"
            src="./github.svg"
            alt="GitHub Code"
          ></img>
          <span>GitHub Code</span>
        </a>
        <a
          className="card__link"
          href={project.deployedLink}
          target="_blank"
          rel="noreferrer"
        >
          <span>Open Deploy</span>
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
