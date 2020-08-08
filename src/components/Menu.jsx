import { Link } from "react-router-dom";
import React from "react";

const Menu = () => {
  return (
    <nav className="ui secondary pointing menu">
      <Link to="/" className="item">
        Accordion
      </Link>
      <Link to="/list" className="item">
        Search
      </Link>
      <Link to="/dropdown" className="item">
        Dropdown
      </Link>
      <Link to="/translate" className="item">
        Translate
      </Link>
    </nav>
  );
};

export default Menu;
