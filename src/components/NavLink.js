import React from "react";

const NavLink = ({ link, name }) => {
  return (
    <a className="header__link" href={`#${link}`}>
      <span className="header__link__text">
        {name} {">"}
      </span>
    </a>
  );
};

export default NavLink;
