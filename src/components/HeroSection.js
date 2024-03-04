import React from "react";

function HeroSection({ title, description, slogan }) {
  return (
    <section className="main__hero-section">
      <div className="hero-section__text">
        <h1 className="hero-section__title">{title}</h1>
        <p className="hero-section__p">{description}</p>
        <p className="hero-section__p">{slogan}</p>
        <div className="hero-section__div">
          <a className="header__link header__link--white" href="#projects">
            <span className="header__link__text">Projects {">"}</span>
          </a>
          <a className="header__link" href="#resume">
            <img className="header__link__svg" src="" alt=""></img>
            <span className="header__link__text">Resume {">"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
