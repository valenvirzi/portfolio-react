import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__navigation">
        <div className="footer__column">
          <Logo />
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Important Links</h3>
          <ul className="footer__links">
            <li className="footer__li">
              <a
                className="footer__link"
                href="https://linkedin.com/valentinvirzi/"
              >
                <img
                  className="footer__link__svg"
                  src="./linkedin.svg"
                  alt="LinkedIn"
                ></img>
                <span className="footer__link__text">LinkedIn</span>
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__link" href="https://github.com/valenvirzi/">
                <img
                  className="footer__link__svg"
                  src="./github-w.svg"
                  alt="GitHub"
                ></img>
                <span className="footer__link__text">GitHub</span>
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__link" href="#resume">
                <img
                  className="footer__link__svg"
                  src="./document.svg"
                  alt="Resume svg"
                ></img>
                <span className="footer__link__text">Resume</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Navigation</h3>
          <ul className="footer__nav__links">
            <li className="footer__li">
              <a className="footer__link" href="#home">
                <span className="footer__link__text">Back to Top</span>
                <img className="footer__link__svg" src="" alt=""></img>
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__link" href="#home">
                <span className="footer__link__text">Projects</span>
                <img className="footer__link__svg" src="" alt=""></img>
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__link" href="#home">
                <span className="footer__link__text">About Me</span>
                <img className="footer__link__svg" src="" alt=""></img>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="footer__legal">
        <p className="footer__legal__text">
          Copyright © 2024 | All rights reserved | Valentin Virzi
        </p>
      </section>
    </footer>
  );
};

export default Footer;
