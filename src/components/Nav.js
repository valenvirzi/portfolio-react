import React from "react";
import NavLink from "./NavLink";

function Nav() {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item">
          <NavLink link={"home"} name={"Home"} />
        </li>
        <li className="header__item">
          <NavLink link={"projects"} name={"Projects"} />
        </li>
        <li className="header__item">
          <NavLink link={"about"} name={"About me"} />
        </li>
        <li className="header__item header__item--highlight">
          <NavLink link={"contact"} name={"Contact"} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
