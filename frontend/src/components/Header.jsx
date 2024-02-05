import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ color ,animation}) => {
  return (
    <div className="header">
      <span className="items" style={{ animationDelay: animation }}>
        <Link to="/" className="nav-link" style={{ color: color }}>
          Home
        </Link>
      </span>
      <span className="items" style={{ animationDelay: animation }}>
        <Link to="/projects" className="nav-link" style={{ color: color }}>
          Projects
        </Link>
      </span>
    </div>
  );
};

export default Header;
