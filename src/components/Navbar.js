import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <NavButton text="About" to="/about" />
        <NavButton text="Stack" to="/stack" />
        <NavButton text="Projects" to="/projects" />
        <NavButton text="Contacts" to="/contacts" />
      </nav>
    </header>
  );
};

export default Navbar;
