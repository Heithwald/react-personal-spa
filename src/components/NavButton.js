import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const NavButton = (props) => {
  const { text, to } = props;

  return (
    <NavLink className="navbar__button" activeClassName="selected" to={to}>
      {text}
    </NavLink>
  );
};

export default NavButton;
