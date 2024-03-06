import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__navigation">
        <div className="footer__column">
          <Logo />
          <ul className="footer__links">
            <li className="footer__li">
              <a
                className="footer__link"
                href="https://linkedin.com/valentinvirzi/"
              >
                <span className="footer__link__text">LinkedIn</span>
                <img className="footer__link__svg" src="" alt="LinkedIn"></img>
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__link" href="https://github.com/valenvirzi/">
                <span className="footer__link__text">GitHub</span>
                <img className="footer__link__svg" src="" alt="GitHub"></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Navigation</h3>
          <ul className="footer__links">
            <li className="footer__li">
              <a className="footer__link" href="#home">
                <span className="footer__link__text">Back to Top</span>
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
