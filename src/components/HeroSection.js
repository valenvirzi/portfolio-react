import React from "react";
import Paragraph from "./Paragraph";

function HeroSection({ title, description, slogan }) {
  return (
    <section className="main__hero-section">
      <div className="hero-section__text">
        <h1 className="hero-section__title">{title}</h1>
        <Paragraph section={"hero"} text={description} />
        <Paragraph section={"hero"} text={slogan} />
        <div className="hero-section__div">
          <a className="header__link header__link--white" href="#projects">
            <span className="header__link__text">Projects {">"}</span>
          </a>
          <a className="header__link" href="#resume">
            <img className="header__link__svg" src="" alt="Resume svg"></img>
            <span className="header__link__text">Resume {">"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
