import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom"; // do not remove Router, as it would break the navbar

const NavButton = (props) => {
  const { text, to } = props;

  return (
    <NavLink className="navbar__button" activeClassName="selected" to={to}>
      {text}
    </NavLink>
  );
};

export default NavButton;
