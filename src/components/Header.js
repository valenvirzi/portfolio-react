import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="app__header">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
