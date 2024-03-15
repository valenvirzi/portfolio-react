import React from "react";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  return (
    <section className="main__about-section">
      <SectionTitle title={"About Me"} section={"about"} />
      <div className="about-section__text">
        <h3 className="about-section__sub-title">Hey, I'm Valentin!</h3>
        <p className={`about-section__p`}>
          I crossed paths with the world of coding thanks to my tech-enthusiast
          friends. Once I started making my own apps, I got hooked! The amount
          of cool stuff one can create with just a bit of code completely blew
          my mind.
        </p>
        <p className={`about-section__p`}>
          I have always been all about learning new things. That's why, besides
          being certified in personal training and bartending (as ironic as it
          may sound), I've been also brushing up on my English since I was six.
          Bagged a{" "}
          <a
            className="certificate-link"
            href="https://drive.google.com/file/d/1Iiors2L5HU9xHhLC5d0DhUeQzdpsFS0K/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Cambridge B2 certificate
          </a>{" "}
          along the way to prove it!
        </p>
        <p className={`about-section__p`}>
          When I'm not glued to the screen or hitting the gym, you'll catch me
          watching soccer (or 'fútbol' as we say). And I never miss a game
          featuring the GOAT himself—Lionel Messi, you may have heard about him.
          Dreaming of the day I can watch him live in action on the field.
        </p>
        <p className={`about-section__p`}>
          Join me on this coding journey where we mix fitness, fun, and a bit of
          Messi's magic. Let's build great things together!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
